import { NextResponse } from "next/server";
import { getCardBySlug } from "@/lib/cards";
import { buildVCard } from "@/lib/vcard";
export async function GET(_: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const card = getCardBySlug(slug);
  if (!card) return NextResponse.json({ error: "Card not found" }, { status: 404 });
  const vcard = buildVCard(card);
  return new NextResponse(vcard, { status: 200, headers: { "Content-Type": "text/vcard; charset=utf-8", "Content-Disposition": `attachment; filename="${slug}.vcf"` } });
}
