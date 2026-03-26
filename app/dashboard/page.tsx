import Link from "next/link";
import SiteStyles from "@/components/SiteStyles";
import { getSummary } from "@/lib/lead-store";
export default function DashboardPage() {
  const summary = getSummary();
  return <main className="page"><SiteStyles /><section className="section"><div className="container"><p className="eyebrow">Dashboard</p><h1 className="sectionTitle">SLTapCard pipeline overview</h1><p className="sectionText">Local V4 board for testing and immediate edits. New leads from `/jrtools` are added here.</p><div className="grid4" style={{ marginTop:32 }}><div className="card"><p className="miniLabel">Total</p><h3>{summary.total}</h3></div><div className="card"><p className="miniLabel">New</p><h3>{summary.new}</h3></div><div className="card"><p className="miniLabel">Contacted</p><h3>{summary.contacted}</h3></div><div className="card"><p className="miniLabel">Won</p><h3>{summary.won}</h3></div></div><div className="heroButtons" style={{ marginTop:26 }}><Link href="/dashboard/leads" className="primaryBtn">Open Leads Board</Link><Link href="/jrtools" className="secondaryBtn">Go to JR Tools</Link></div></div></section></main>;
}
