import { NextResponse } from "next/server";
import { z } from "zod";
import { getCardBySlug } from "@/lib/cards";
import { saveLead } from "@/lib/lead-store";
import { sendSms } from "@/lib/twilio";
const schema = z.object({ slug: z.string().min(1), name: z.string().min(1), phone: z.string().min(7), service: z.string().min(1), message: z.string().optional().default("") });
export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = schema.parse(json);
    const card = getCardBySlug(parsed.slug);
    if (!card) return NextResponse.json({ error: "Card not found" }, { status: 404 });
    const lead = { id: `lead_${Date.now()}`, createdAt: new Date().toISOString(), name: parsed.name, phone: parsed.phone, service: parsed.service, message: parsed.message || "", slug: parsed.slug, status: "new" as const };
    saveLead(lead);
    const ownerText = [`New SLTapCard lead for ${card.businessName}`, `Name: ${lead.name}`, `Phone: ${lead.phone}`, `Service: ${lead.service}`, `Message: ${lead.message || "N/A"}`].join("\n");
    await Promise.all([sendSms(card.phone, ownerText), sendSms(lead.phone, card.confirmationMessage)]);
    return NextResponse.json({ ok: true, lead });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Could not submit lead" }, { status: 500 });
  }
}
