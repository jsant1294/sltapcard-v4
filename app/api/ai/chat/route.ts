import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { askGroq } from "@/lib/groq";
export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const knowledge = fs.readFileSync(path.join(process.cwd(), "data", "knowledge.md"), "utf-8");
    const result = await askGroq(String(message || ""), knowledge);
    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ text: "AI route is available but not fully configured yet." }, { status: 200 });
  }
}
