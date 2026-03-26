export async function askGroq(question: string, context: string) {
  const key = process.env.GROQ_API_KEY;
  const model = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";
  if (!key) return { text: "Groq API key is not configured yet. Add GROQ_API_KEY to enable live AI responses." };
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
    body: JSON.stringify({ model, messages: [{ role: "system", content: "You are Lucio AI, a concise sales assistant for SLTapCard and JR Tools. Use the provided context. If unsure, say so." }, { role: "user", content: `Context:\n${context}\n\nQuestion:\n${question}` }], temperature: 0.4 })
  });
  if (!res.ok) throw new Error("Groq request failed");
  const data = await res.json();
  return { text: data.choices?.[0]?.message?.content || "No response." };
}
