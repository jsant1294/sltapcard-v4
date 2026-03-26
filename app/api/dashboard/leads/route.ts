import { NextResponse } from "next/server";
import { getLeads } from "@/lib/lead-store";
export async function GET() { return NextResponse.json({ leads: getLeads() }); }
