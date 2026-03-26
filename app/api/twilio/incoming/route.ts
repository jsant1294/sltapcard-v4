import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const formData = await req.formData();
  const from = formData.get("From");
  const body = formData.get("Body");
  console.log("Incoming Twilio message", { from, body });
  const twiml = `<?xml version="1.0" encoding="UTF-8"?><Response><Message>Thanks for your message. We received it and will reply soon.</Message></Response>`;
  return new NextResponse(twiml, { status: 200, headers: { "Content-Type": "text/xml" } });
}
