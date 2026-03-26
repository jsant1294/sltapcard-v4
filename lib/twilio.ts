import twilio from "twilio";
export async function sendSms(to: string, body: string) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID, authToken = process.env.TWILIO_AUTH_TOKEN, from = process.env.TWILIO_PHONE_NUMBER;
  if (!accountSid || !authToken || !from) return { skipped: true };
  const client = twilio(accountSid, authToken);
  return client.messages.create({ to, from, body });
}
