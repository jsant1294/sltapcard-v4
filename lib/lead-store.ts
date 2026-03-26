import fs from "fs";
import path from "path";
import { Lead, LeadStatus } from "@/lib/types";
const filePath = path.join(process.cwd(), "data", "leads.json");
const seedLeads: Lead[] = [
  { id: "lead_001", createdAt: "2026-03-25T15:00:00.000Z", name: "Miguel Contractor", phone: "+14045551234", service: "Milwaukee drill set", message: "Need local pickup availability.", slug: "jrtools", status: "new" },
  { id: "lead_002", createdAt: "2026-03-25T18:30:00.000Z", name: "Sandra Build Co", phone: "+14045557654", service: "Bulk order pricing", message: "Looking for 5 tools.", slug: "jrtools", status: "contacted" },
  { id: "lead_003", createdAt: "2026-03-26T09:10:00.000Z", name: "Luis Gomez", phone: "+14045559876", service: "Makita combo kit", message: "Closed sale from tap card.", slug: "jrtools", status: "won" }
];
function ensureStore() {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, JSON.stringify(seedLeads, null, 2), "utf-8");
}
export function getLeads(): Lead[] { ensureStore(); return JSON.parse(fs.readFileSync(filePath, "utf-8")) as Lead[]; }
export function saveLead(lead: Lead) { const leads = getLeads(); leads.unshift(lead); fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), "utf-8"); return lead; }
export function updateLeadStatus(id: string, status: LeadStatus) { const leads = getLeads(); const idx = leads.findIndex((lead) => lead.id === id); if (idx === -1) return null; leads[idx].status = status; fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), "utf-8"); return leads[idx]; }
export function getSummary() { const leads = getLeads(); const summary = { total: leads.length, new: 0, contacted: 0, won: 0 }; for (const lead of leads) summary[lead.status] += 1; return summary; }
