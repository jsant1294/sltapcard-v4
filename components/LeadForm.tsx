"use client";
import { useState } from "react";

export default function LeadForm({ slug }: { slug: string }) {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  async function onSubmit(formData: FormData) {
    setLoading(true); setError("");
    const payload = {
      slug,
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      service: String(formData.get("service") || ""),
      message: String(formData.get("message") || "")
    };
    try {
      const res = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Could not submit lead.");
      }
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally { setLoading(false); }
  }
  if (done) return <div className="darkCard"><p className="miniLabel">Sent</p><h3 style={{ marginTop: 10 }}>Thanks — your request was sent.</h3><p>You should receive a confirmation flow if SMS is configured.</p></div>;
  return (
    <form action={onSubmit} className="formGrid">
      <input className="input" name="name" placeholder="Your name" required />
      <input className="input" name="phone" placeholder="Phone number" required />
      <input className="input" name="service" placeholder="What do you need?" required />
      <textarea className="textarea" name="message" placeholder="Tell us what you need" />
      <button className="submitBtn" type="submit" disabled={loading}>{loading ? "Sending..." : "Request a Quote"}</button>
      {error ? <p style={{ color: "#fca5a5", margin: 0 }}>{error}</p> : null}
    </form>
  );
}
