import SiteStyles from "@/components/SiteStyles";
import { getLeads } from "@/lib/lead-store";
export default function LeadsPage() {
  const leads = getLeads();
  const grouped = { new: leads.filter((lead) => lead.status === "new"), contacted: leads.filter((lead) => lead.status === "contacted"), won: leads.filter((lead) => lead.status === "won") };
  const statuses = [{ key:"new", title:"New" }, { key:"contacted", title:"Contacted" }, { key:"won", title:"Won" }] as const;
  return <main className="page"><SiteStyles /><section className="section"><div className="container"><p className="eyebrow">Pipeline Board</p><h1 className="sectionTitle">Lead status flow</h1><p className="sectionText">Current V4 stages: new → contacted → won</p><div className="board" style={{ marginTop:34 }}>{statuses.map((status) => <div className="card" key={status.key}><h2 className="colTitle">{status.title}</h2><div style={{ display:"grid", gap:14 }}>{grouped[status.key].map((lead) => <div className="darkCard" key={lead.id}><p className="miniLabel">{new Date(lead.createdAt).toLocaleString()}</p><h3 style={{ marginTop:8, fontSize:22 }}>{lead.name}</h3><p><strong>Phone:</strong> {lead.phone}</p><p><strong>Need:</strong> {lead.service}</p><p><strong>Message:</strong> {lead.message}</p></div>)}{grouped[status.key].length === 0 ? <p style={{ color:"rgba(255,255,255,.55)" }}>No leads yet.</p> : null}</div></div>)}</div></div></section></main>;
}
