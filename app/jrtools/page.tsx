import Link from "next/link";
import SiteStyles from "@/components/SiteStyles";
import LeadForm from "@/components/LeadForm";
import { getCardBySlug } from "@/lib/cards";
export default function JRToolsPage() {
  const card = getCardBySlug("jrtools");
  if (!card) return null;
  return (
    <main className="jrtoolsPage"><SiteStyles />
      <section className="jrHero"><div className="container"><div className="heroBlock">
        <p className="eyebrow">Live Example</p>
        <h1 className="heroTitle" style={{ maxWidth:920 }}>{card.businessName}</h1>
        <p className="heroText" style={{ maxWidth:780 }}>{card.subheadline}</p>
        <div className="ctaStack">
          <a className="primaryBtn" href={`tel:${card.phone}`}>{card.ctaPrimary}</a>
          <a className="secondaryBtn" href={`sms:${card.smsPhone}`}>{card.ctaSecondary}</a>
          <a className="ghostBtn" href={`/api/vcard/${card.slug}`}>{card.ctaTertiary}</a>
          {card.shopUrl ? <a className="accentBtn" href={card.shopUrl} target="_blank" rel="noreferrer">Shop Now</a> : null}
        </div>
        <div className="statGrid">{card.trustPoints.map((item) => <div key={item} className="trustItem">{item}</div>)}</div>
      </div></div></section>
      <section className="section" style={{ paddingTop:24 }}><div className="container grid2">
        <div className="panel">
          <p className="eyebrow">Inventory Flow</p>
          <h2 className="sectionTitle" style={{ fontSize:"clamp(30px,5vw,54px)" }}>Built to sell, not just sit there</h2>
          <p className="sectionText" style={{ marginTop:12 }}>This page is the live proof of the SLTapCard system: call, text, save contact, shop, and capture inquiries from one clean mobile page.</p>
          <div className="grid2" style={{ marginTop:24 }}>
            <div className="darkCard"><p className="miniLabel">Actions</p><ul className="list"><li>Call for availability</li><li>Text for quick response</li><li>Save contact instantly</li><li>Shop products directly</li></ul></div>
            <div className="darkCard"><p className="miniLabel">Use case</p><ul className="list">{card.services.map((service) => <li key={service}>{service}</li>)}</ul></div>
          </div>
          <div className="centerNotice">NFC card should point to: <strong>https://card.jrtoolsusa.com/jrtools</strong></div>
          <div className="heroButtons"><Link href="/" className="secondaryBtn">Back to Product Page</Link><Link href="/dashboard" className="accentBtn">Open Dashboard</Link></div>
        </div>
        <div className="panel">
          <p className="eyebrow">Lead Capture</p>
          <h2 className="sectionTitle" style={{ fontSize:"clamp(28px,4vw,46px)" }}>Request availability</h2>
          <p className="sectionText" style={{ marginTop:12, fontSize:16 }}>Submit a request to test the live lead flow. New leads appear in the dashboard.</p>
          <div style={{ marginTop:22 }}><LeadForm slug={card.slug} /></div>
        </div>
      </div></section>
    </main>
  );
}
