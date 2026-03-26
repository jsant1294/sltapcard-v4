export default function SiteStyles() {
  return (
    <style>{`
      .page { min-height: 100vh; background: #0a0a0a; color: #fff; }
      .container { width: min(1180px, calc(100% - 32px)); margin: 0 auto; }
      .nav { position: sticky; top: 0; z-index: 30; backdrop-filter: blur(12px); background: rgba(0,0,0,.65); border-bottom: 1px solid rgba(255,255,255,.1); }
      .navInner { display:flex; align-items:center; justify-content:space-between; gap:16px; padding:16px 0; }
      .brand { display:flex; align-items:center; gap:12px; }
      .brandMark { width:40px; height:40px; display:grid; place-items:center; border-radius:12px; background: rgba(245,158,11,.1); border:1px solid rgba(245,158,11,.35); color:#f8d277; font-weight:900; }
      .brandTitle { font-size:20px; font-weight:900; line-height:1; }
      .brandSub { font-size:11px; color:rgba(255,255,255,.45); text-transform:uppercase; letter-spacing:.18em; margin-top:4px; }
      .navLinks { display:none; gap:22px; color:rgba(255,255,255,.7); font-size:14px; }
      .navLinks a:hover { color:#fff; }
      .lang { display:flex; gap:6px; padding:4px; border-radius:14px; border:1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.05); }
      .lang button { border:0; background:transparent; color:rgba(255,255,255,.7); padding:9px 12px; border-radius:10px; font-weight:700; cursor:pointer; }
      .lang button.active { background:#fff; color:#111; }
      .primaryBtn, .secondaryBtn, .accentBtn, .ghostBtn { display:inline-flex; align-items:center; justify-content:center; padding:14px 20px; border-radius:16px; font-weight:800; transition:.2s ease; border:1px solid transparent; }
      .primaryBtn { background:#dc2626; color:#fff; }
      .primaryBtn:hover { background:#ef4444; }
      .secondaryBtn { background:rgba(255,255,255,.05); border-color:rgba(255,255,255,.12); color:#fff; }
      .secondaryBtn:hover { background:rgba(255,255,255,.1); }
      .accentBtn { background:rgba(245,158,11,.12); border-color:rgba(245,158,11,.3); color:#fde68a; }
      .accentBtn:hover { background:rgba(245,158,11,.18); }
      .ghostBtn { background:transparent; border-color:rgba(255,255,255,.12); color:#fff; }
      .section { padding:80px 0; }
      .eyebrow { margin:0 0 12px; color:#f8d277; font-weight:800; font-size:12px; letter-spacing:.22em; text-transform:uppercase; }
      .sectionTitle { margin:0; font-size:clamp(34px,5vw,58px); font-weight:900; line-height:1; letter-spacing:-.04em; }
      .sectionText { margin:18px 0 0; font-size:18px; line-height:1.7; color:rgba(255,255,255,.7); max-width:780px; }
      .hero { position:relative; overflow:hidden; }
      .heroBg { position:absolute; inset:0; background: radial-gradient(circle at top left, rgba(239,68,68,.24), transparent 34%), radial-gradient(circle at top right, rgba(245,158,11,.2), transparent 30%), linear-gradient(180deg, #0a0a0a 0%, #111111 100%); }
      .heroGrid { position:relative; display:grid; gap:40px; padding:84px 0 100px; }
      .badge { display:inline-flex; padding:10px 14px; border-radius:999px; border:1px solid rgba(245,158,11,.25); background:rgba(245,158,11,.1); color:#fde68a; font-weight:800; font-size:12px; letter-spacing:.2em; text-transform:uppercase; }
      .heroTitle { margin:22px 0 0; font-size:clamp(42px,7vw,86px); font-weight:900; line-height:.96; letter-spacing:-.05em; max-width:800px; }
      .heroText { margin:22px 0 0; max-width:700px; font-size:20px; line-height:1.7; color:rgba(255,255,255,.72); }
      .heroButtons { display:flex; flex-wrap:wrap; gap:12px; margin-top:28px; }
      .support { margin-top:18px; color:rgba(255,255,255,.55); line-height:1.7; max-width:720px; }
      .panel { border:1px solid rgba(255,255,255,.1); background:rgba(255,255,255,.05); border-radius:28px; padding:22px; box-shadow: 0 24px 60px rgba(0,0,0,.35); }
      .panelTitle { margin:10px 0 0; font-size:32px; font-weight:900; }
      .pill { display:inline-flex; border-radius:14px; background:rgba(0,0,0,.45); border:1px solid rgba(255,255,255,.1); padding:10px 12px; color:rgba(255,255,255,.7); font-size:12px; font-weight:800; }
      .grid2, .grid3, .grid4 { display:grid; gap:16px; }
      .card { border:1px solid rgba(255,255,255,.1); background:rgba(255,255,255,.03); border-radius:26px; padding:22px; }
      .darkCard { border:1px solid rgba(255,255,255,.1); background:rgba(0,0,0,.42); border-radius:26px; padding:22px; }
      .miniLabel { font-size:11px; text-transform:uppercase; letter-spacing:.18em; color:rgba(255,255,255,.45); font-weight:800; }
      .card h3 { margin:16px 0 0; font-size:24px; font-weight:900; }
      .card p, .darkCard p { margin:12px 0 0; color:rgba(255,255,255,.66); line-height:1.7; }
      .trustBar { border-top:1px solid rgba(255,255,255,.1); border-bottom:1px solid rgba(255,255,255,.1); background:#000; }
      .trustGrid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:14px; padding:24px 0; }
      .trustItem { text-align:center; padding:15px 12px; border:1px solid rgba(255,255,255,.1); border-radius:18px; background:rgba(255,255,255,.03); color:rgba(255,255,255,.85); font-weight:700; font-size:14px; }
      .altSection { background:rgba(23,23,23,.65); }
      .ctaBox { border:1px solid rgba(245,158,11,.2); background:linear-gradient(135deg, rgba(245,158,11,.1), rgba(239,68,68,.1), rgba(0,0,0,1)); border-radius:34px; padding:28px; }
      .footer { border-top:1px solid rgba(255,255,255,.1); background:#000; padding:28px 0; }
      .footerInner { display:flex; flex-direction:column; gap:16px; }
      .footerLinks { display:flex; flex-wrap:wrap; gap:18px; color:rgba(255,255,255,.65); }
      .heroExample { display:grid; gap:16px; align-self:center; }
      .list { margin:0; padding-left:18px; color:rgba(255,255,255,.82); line-height:1.9; }
      .planPrice { font-size:46px; font-weight:900; letter-spacing:-.05em; margin-top:8px; }
      .topRow { display:flex; align-items:flex-start; justify-content:space-between; gap:16px; }
      .popular { border-radius:999px; background:#dc2626; color:#fff; font-size:11px; text-transform:uppercase; letter-spacing:.18em; padding:7px 10px; font-weight:800; }
      .centerNotice { border:1px solid rgba(239,68,68,.2); background:rgba(220,38,38,.1); border-radius:20px; padding:16px; margin-top:16px; color:#fecaca; font-weight:700; line-height:1.6; }
      @media (min-width: 900px) {
        .navLinks { display:flex; }
        .heroGrid { grid-template-columns: 1.15fr .85fr; gap:48px; }
        .grid2 { grid-template-columns:repeat(2,minmax(0,1fr)); }
        .grid3 { grid-template-columns:repeat(3,minmax(0,1fr)); }
        .grid4 { grid-template-columns:repeat(4,minmax(0,1fr)); }
        .trustGrid { grid-template-columns:repeat(4,minmax(0,1fr)); }
        .footerInner { flex-direction:row; align-items:center; justify-content:space-between; }
      }
      .jrtoolsPage { background: radial-gradient(circle at top right, rgba(239,68,68,.18), transparent 28%), radial-gradient(circle at top left, rgba(245,158,11,.14), transparent 24%), #0a0a0a; min-height:100vh; color:#fff; }
      .jrHero { padding:68px 0 36px; }
      .heroBlock { display:grid; gap:16px; }
      .ctaStack { display:flex; flex-wrap:wrap; gap:12px; }
      .ctaStack a { min-width:160px; }
      .statGrid { display:grid; gap:16px; grid-template-columns:repeat(2,minmax(0,1fr)); margin-top:20px; }
      .formGrid { display:grid; gap:12px; }
      .input, .textarea { width:100%; border-radius:16px; border:1px solid rgba(255,255,255,.12); background:rgba(255,255,255,.04); color:#fff; padding:14px 16px; outline:none; }
      .textarea { min-height:110px; resize:vertical; }
      .submitBtn { border:0; border-radius:16px; padding:14px 18px; background:#dc2626; color:#fff; font-weight:800; cursor:pointer; }
      .submitBtn:hover { background:#ef4444; }
      .board { display:grid; gap:16px; }
      .colTitle { margin:0 0 12px; font-size:18px; font-weight:900; }
      @media (min-width: 900px) { .board { grid-template-columns:repeat(3,minmax(0,1fr)); } }
    `}</style>
  );
}
