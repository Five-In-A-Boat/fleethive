import { useState, useEffect } from "react";

/* ═══════════════════════════════════════════════
   TOKENS
═══════════════════════════════════════════════ */
const T = {
  light: {
    bg:        "#FAF7F2",
    bg2:       "#F0EDE6",
    bg3:       "#E8E4DC",
    surface:   "#FFFFFF",
    surface2:  "#F5F2EC",
    text:      "#12100E",
    textDim:   "#3D3830",
    muted:     "#6B6560",
    faint:     "#9C9590",
    fainter:   "#C0BAB2",
    border:    "#DDD8D0",
    border2:   "#CBC6BC",
    nav:       "rgba(250,247,242,0.92)",
    inv:       "#12100E",
    invText:   "#F5F2EE",
    invMuted:  "#A09890",
    invFaint:  "#6A6060",
    invBdr:    "#2A2520",
    togBg:     "#FFFFFF",
    togBdr:    "#DDD8D0",
    togClr:    "#12100E",
    grain:     0.015,
    ghost:     { bg:"rgba(18,16,14,0.04)", bdr:"rgba(18,16,14,0.12)" },
    pil:       ["#D6A21D","#2F6FED","#147A4B"],
    mockBg:    "#FFFFFF",
    mockChrome:"#F0EDE6",
    mockBdr:   "#DDD8D0",
    mockUrl:   "#9C9590",
    mockSep:   "#EDE9E2",
    mockMeta:  "#9C9590",
    mockSub:   "#C0BAB2",
    mockBadge: "rgba(214,162,29,0.12)",
    cardSh:    "0 24px 60px rgba(18,16,14,0.10), 0 4px 12px rgba(18,16,14,0.06), 0 1px 0 rgba(255,255,255,0.9) inset",
    starFill:  "#C89010",
    priceBg:   "#FFFFFF",
    priceBdr:  "#DDD8D0",
    priceAcct: "rgba(214,162,29,0.08)",
  },
  dark: {
    bg:        "#080A0D",
    bg2:       "#0B0E14",
    bg3:       "#040507",
    surface:   "#111720",
    surface2:  "#0D1018",
    text:      "#EAE6E0",
    textDim:   "#C0BAB2",
    muted:     "#6A6560",
    faint:     "#3E3A34",
    fainter:   "#2A2520",
    border:    "#1E2028",
    border2:   "#161820",
    nav:       "rgba(8,10,13,0.90)",
    inv:       "#040507",
    invText:   "#EAE6E0",
    invMuted:  "#6A6560",
    invFaint:  "#1E1A14",
    invBdr:    "#1E2028",
    togBg:     "#111720",
    togBdr:    "#1E2028",
    togClr:    "#EAE6E0",
    grain:     0.022,
    ghost:     { bg:"rgba(255,255,255,0.04)", bdr:"rgba(255,255,255,0.10)" },
    pil:       ["#FFC83D","#7DA6FF","#4FB37F"],
    mockBg:    "#111720",
    mockChrome:"#0A0E16",
    mockBdr:   "#1E2A38",
    mockUrl:   "#3E5060",
    mockSep:   "#141E2A",
    mockMeta:  "#6A6560",
    mockSub:   "#3E3A34",
    mockBadge: "rgba(255,200,61,0.12)",
    cardSh:    "0 40px 90px rgba(0,0,0,0.70), 0 2px 0 rgba(255,255,255,0.06) inset, -12px -8px 40px rgba(255,200,61,0.04)",
    starFill:  "#FFC83D",
    priceBg:   "#111720",
    priceBdr:  "#1E2028",
    priceAcct: "rgba(255,200,61,0.06)",
  },
  Y:     "#FFC83D",
  Ymid:  "#D6A21D",
  Ydark: "#A87800",
  Ytext: "#0A0800",
};

const BASE = "https://raw.githubusercontent.com/Five-In-A-Boat/fleethive/main/images/";
const LOGOS = [
  { name:"Halfords",                 dark:"halfords_dark.svg",   light:"halfords_light.svg",   h:28 },
  { name:"Hi-Q",                     dark:"hiq_dark.svg",        light:"hiq_light.svg",        h:32 },
  { name:"Bosch Car Service",        dark:"bosch_dark.svg",      light:"bosch_light.svg",      h:32 },
  { name:"ATS Euromaster",           dark:"euromaster_dark.svg", light:"euromaster_light.svg", h:30 },
  { name:"In'n'Out Autocentres",     dark:"innout_dark.svg",     light:"innout_light.svg",     h:34 },
  { name:"National Tyres & Autocare",dark:"national_dark.svg",   light:"national_light.svg",   h:42 },
];

/* ── Icon ── */
const Ic = ({ d, s=16, stroke="currentColor", sw=1.75, fill="none" }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={fill} stroke={stroke}
    strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {Array.isArray(d) ? d.map((p,i)=><path key={i} d={p}/>) : <path d={d}/>} 
  </svg>
);
const I = {
  arrow:  "M5 12h14M12 5l7 7-7 7",
  arrowR: "M9 18l6-6-6-6",
  check:  "M20 6L9 17l-5-5",
  menu:   ["M3 12h18","M3 6h18","M3 18h18"],
  x:      ["M18 6L6 18","M6 6l12 12"],
  sun:    ["M12 3v1m0 16v1M4.22 4.22l.7.7m12.16 12.16.7.7M3 12h1m16 0h1M4.22 19.78l.7-.7M18.36 5.64l.7-.7","M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"],
  moon:   "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",
  wrench: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
  cal:    ["M8 2v4","M16 2v4","M3 10h18","M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z"],
  receipt:["M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z","M9 7h6M9 11h6M9 15h4"],
  folder: ["M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"],
  bell:   ["M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9","M13.73 21a2 2 0 0 1-3.46 0"],
  zap:    "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  star:   "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  users:  ["M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2","M23 21v-2a4 4 0 0 0-3-3.87","M16 3.13a4 4 0 0 1 0 7.75","M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"],
  shield: ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"],
  chev:   "M9 18l6-6-6-6",
};

/* ── Logo ── */
const Logo = ({ isDark, h=24 }) => (
  <svg width={h*4.6} height={h} viewBox="0 0 110 24" fill="none" aria-label="FleetHive">
    <polygon points="12,1 22,7 22,17 12,23 2,17 2,7" fill={T.Y}/>
    <polygon points="12,5.5 18,9.5 18,16 12,20 6,16 6,9.5" fill={isDark?"#080A0D":"#FFFFFF"}/>
    <polygon points="12,9.5 16,12 16,14.5 12,17 8,14.5 8,12" fill={T.Y}/>
    <text x="28" y="17.5" fontFamily="Manrope,sans-serif" fontWeight="800" fontSize="14.5"
      fill={isDark?"#EAE6E0":"#12100E"} letterSpacing="-0.045em">FleetHive</text>
  </svg>
);

/* ── Product screenshot mocks ── */
const MockReminder = ({ isDark }) => {
  const t = isDark ? T.dark : T.light;
  const items = [
    { reg:"EK22 XPL", type:"Ford Transit", label:"MOT due",     days:"14", acc:"#FFC83D", urgent:true },
    { reg:"LN71 ARW", type:"Mercedes Sprinter", label:"Service due", days:"31", acc: isDark?"#7DA6FF":"#2F6FED", urgent:false },
    { reg:"BX19 TKM", type:"VW Crafter",   label:"Insurance",   days:"58", acc: isDark?"#4FB37F":"#147A4B", urgent:false },
  ];
  return (
    <div style={{ background:t.mockBg, border:`1px solid ${t.mockBdr}`, borderRadius:"1.25rem", overflow:"hidden", boxShadow:t.cardSh }}
      role="img" aria-label="FleetHive reminders view showing MOT and service dates across 3 vehicles">
      <div style={{ background:t.mockChrome, borderBottom:`1px solid ${t.mockSep}`, padding:"10px 16px", display:"flex", alignItems:"center", gap:7 }}>
        {["#FF5F56","#FFBD2E","#27C93F"].map(c=><div key={c} style={{ width:10,height:10,borderRadius:"50%",background:c }}/>) }
        <div style={{ flex:1,height:22,background:isDark?"#0D1520":"#E8EDF4",borderRadius:5,marginLeft:8,display:"flex",alignItems:"center",justifyContent:"center" }}>
          <span style={{ fontSize:9.5,color:t.mockUrl,fontFamily:"'IBM Plex Mono',monospace" }}>app.fleethive.ai/reminders</span>
        </div>
      </div>
      <div style={{ padding:"12px 14px 6px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <span style={{ fontFamily:"Manrope,sans-serif",fontWeight:700,fontSize:12,color:t.text,letterSpacing:"-0.02em" }}>Upcoming dates</span>
        <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:9,color:T.Ymid,background:t.mockBadge,padding:"2px 8px",borderRadius:4,fontWeight:600,letterSpacing:"0.04em" }}>3 ACTIVE</span>
      </div>
      <div style={{ padding:"6px 12px 14px", display:"flex", flexDirection:"column", gap:6 }}>
        {items.map((r,i)=>(
          <div key={i} style={{ background: isDark?`${r.acc}0C`:`${r.acc}0E`, border:`1px solid ${r.acc}22`, borderRadius:"0.75rem", padding:"10px 12px", display:"flex", alignItems:"center", gap:10 }}>
            <div style={{ width:32,height:32,borderRadius:8,background:`${r.acc}18`,border:`1px solid ${r.acc}28`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
              <span style={{ fontFamily:"Manrope,sans-serif",fontSize:13,fontWeight:800,color:r.acc,letterSpacing:"-0.03em" }}>{r.days}</span>
            </div>
            <div style={{ flex:1,minWidth:0 }}>
              <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:9,color:t.mockMeta,letterSpacing:"0.04em",marginBottom:2 }}>{r.label.toUpperCase()}</div>
              <div style={{ fontFamily:"Manrope,sans-serif",fontSize:12.5,fontWeight:700,color:t.text,letterSpacing:"-0.02em" }}>{r.reg}</div>
              <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:9,color:t.mockSub,marginTop:1 }}>{r.type}</div>
            </div>
            {r.urgent && <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:8.5,fontWeight:600,color:T.Ymid,background:t.mockBadge,padding:"2px 6px",borderRadius:3,letterSpacing:"0.04em" }}>BOOK NOW</span>}
          </div>
        ))}
      </div>
      <div style={{ height:1,background:`linear-gradient(90deg,transparent,${T.Y}55,transparent)` }}/>
    </div>
  );
};

const MockCosts = ({ isDark }) => {
  const t = isDark ? T.dark : T.light;
  const green = isDark ? "#4FB37F" : "#147A4B";
  const red   = isDark ? "#F97066" : "#B42318";
  const vans  = [
    { reg:"EK22 XPL", cost:"£482",  prev:"£610", delta:"-21%", good:true  },
    { reg:"LN71 ARW", cost:"£718",  prev:"£695", delta:"+3%",  good:false },
    { reg:"BX19 TKM", cost:"£390",  prev:"£390", delta:"—",    good:null  },
    { reg:"YP68 MWA", cost:"£250",  prev:"£320", delta:"-22%", good:true  },
  ];
  return (
    <div style={{ background:t.mockBg, border:`1px solid ${t.mockBdr}`, borderRadius:"1.25rem", overflow:"hidden", boxShadow:t.cardSh }}
      role="img" aria-label="FleetHive cost view showing monthly spend per vehicle">
      <div style={{ background:t.mockChrome, borderBottom:`1px solid ${t.mockSep}`, padding:"10px 16px", display:"flex", alignItems:"center", gap:7 }}>
        {["#FF5F56","#FFBD2E","#27C93F"].map(c=><div key={c} style={{ width:10,height:10,borderRadius:"50%",background:c }}/>) }
        <div style={{ flex:1,height:22,background:isDark?"#0D1520":"#E8EDF4",borderRadius:5,marginLeft:8,display:"flex",alignItems:"center",justifyContent:"center" }}>
          <span style={{ fontSize:9.5,color:t.mockUrl,fontFamily:"'IBM Plex Mono',monospace" }}>app.fleethive.ai/costs</span>
        </div>
      </div>
      <div style={{ padding:"12px 14px 8px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <span style={{ fontFamily:"Manrope,sans-serif",fontWeight:700,fontSize:12,color:t.text,letterSpacing:"-0.02em" }}>Monthly spend</span>
        <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:9,color:green,fontWeight:700 }}>Total: £1,840</span>
      </div>
      <div style={{ padding:"4px 12px 12px", display:"flex", flexDirection:"column", gap:1 }}>
        {/* Header row */}
        <div style={{ display:"grid",gridTemplateColumns:"1fr 60px 60px 48px",gap:8,padding:"4px 8px",marginBottom:2 }}>
          {["Vehicle","This month","Last month","Change"].map(h=>(
            <span key={h} style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:8.5,color:t.mockSub,letterSpacing:"0.04em",textTransform:"uppercase" }}>{h}</span>
          ))}
        </div>
        {vans.map((v,i)=>(
          <div key={i} style={{ display:"grid",gridTemplateColumns:"1fr 60px 60px 48px",gap:8,padding:"8px",background:i%2===0?(isDark?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.015)"):"transparent",borderRadius:6,alignItems:"center" }}>
            <div>
              <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:10,fontWeight:600,color:t.text,letterSpacing:"0.02em" }}>{v.reg}</div>
            </div>
            <span style={{ fontFamily:"Manrope,sans-serif",fontSize:12,fontWeight:700,color:t.text,letterSpacing:"-0.02em" }}>{v.cost}</span>
            <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:9.5,color:t.mockMeta }}>{v.prev}</span>
            <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:9.5,fontWeight:600,color:v.good===true?green:v.good===false?red:t.mockMeta }}>{v.delta}</span>
          </div>
        ))}
      </div>
      <div style={{ height:1,background:`linear-gradient(90deg,transparent,${T.Y}55,transparent)` }}/>
    </div>
  );
};

const MockRecords = ({ isDark }) => {
  const t = isDark ? T.dark : T.light;
  const docs = [
    { name:"Full service",      date:"14 Mar 2025", garage:"Kwik Fit Bristol",     type:"SERVICE",  amt:"£340" },
    { name:"MOT pass",          date:"14 Mar 2025", garage:"Kwik Fit Bristol",     type:"MOT",      amt:"£55"  },
    { name:"Front brake pads",  date:"02 Jan 2025", garage:"ATS Euromaster",       type:"REPAIR",   amt:"£180" },
    { name:"Annual insurance",  date:"08 Oct 2024", garage:"Direct Line Business", type:"INSURANCE",amt:"£1,240" },
  ];
  const typeCol = { SERVICE:T.Ymid, MOT: isDark?"#7DA6FF":"#2F6FED", REPAIR: isDark?"#F0A44B":"#A55300", INSURANCE: isDark?"#4FB37F":"#147A4B" };
  return (
    <div style={{ background:t.mockBg, border:`1px solid ${t.mockBdr}`, borderRadius:"1.25rem", overflow:"hidden", boxShadow:t.cardSh }}
      role="img" aria-label="FleetHive records view showing service history for vehicle EK22 XPL">
      <div style={{ background:t.mockChrome, borderBottom:`1px solid ${t.mockSep}`, padding:"10px 16px", display:"flex", alignItems:"center", gap:7 }}>
        {["#FF5F56","#FFBD2E","#27C93F"].map(c=><div key={c} style={{ width:10,height:10,borderRadius:"50%",background:c }}/>) }
        <div style={{ flex:1,height:22,background:isDark?"#0D1520":"#E8EDF4",borderRadius:5,marginLeft:8,display:"flex",alignItems:"center",justifyContent:"center" }}>
          <span style={{ fontSize:9.5,color:t.mockUrl,fontFamily:"'IBM Plex Mono',monospace" }}>app.fleethive.ai/records/EK22XPL</span>
        </div>
      </div>
      <div style={{ padding:"12px 14px 8px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <div>
          <span style={{ fontFamily:"Manrope,sans-serif",fontWeight:700,fontSize:12,color:t.text,letterSpacing:"-0.02em" }}>EK22 XPL</span>
          <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:9,color:t.mockMeta,marginLeft:8 }}>Ford Transit Connect · 2022</span>
        </div>
      </div>
      <div style={{ padding:"4px 12px 12px", display:"flex", flexDirection:"column", gap:1 }}>
        {docs.map((d,i)=>(
          <div key={i} style={{ display:"flex",alignItems:"center",gap:10,padding:"8px",background:i%2===0?(isDark?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.015)"):"transparent",borderRadius:6 }}>
            <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:8,fontWeight:600,color:typeCol[d.type]||T.Ymid,background:`${typeCol[d.type]}18`,border:`1px solid ${typeCol[d.type]}30`,padding:"2px 5px",borderRadius:3,flexShrink:0,letterSpacing:"0.04em" }}>{d.type}</span>
            <div style={{ flex:1,minWidth:0 }}>
              <div style={{ fontFamily:"Manrope,sans-serif",fontSize:11.5,fontWeight:600,color:t.text,letterSpacing:"-0.01em" }}>{d.name}</div>
              <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:8.5,color:t.mockSub }}>{d.garage}</div>
            </div>
            <div style={{ textAlign:"right",flexShrink:0 }}>
              <div style={{ fontFamily:"Manrope,sans-serif",fontSize:11.5,fontWeight:700,color:t.text }}>{d.amt}</div>
              <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:8,color:t.mockSub }}>{d.date}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ height:1,background:`linear-gradient(90deg,transparent,${T.Y}55,transparent)` }}/>
    </div>
  );
};

/* ═══════════════════════════════════════════════
   ROOT
═══════════════════════════════════════════════ */
export default function FleetHive() {
  const [isDark,    setIsDark]   = useState(true);
  const [menu,      setMenu]     = useState(false);
  const [scrolled,  setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [tickerIdx, setTickerIdx] = useState(0);
  const [tickerOut, setTickerOut] = useState(false);

  const TICKER_WORDS = ["surprises.", "overspend.", "stress."];

  useEffect(()=>{
    const iv = setInterval(()=>{
      // Slide current word out upward, then swap, then slide new word in
      setTickerOut(true);
      setTimeout(()=>{
        setTickerIdx(i=>(i+1) % TICKER_WORDS.length);
        setTickerOut(false);
      }, 320);
    }, 2800);
    return ()=>clearInterval(iv);
  },[]);

  useEffect(()=>{
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mq.matches);
    const h=e=>setIsDark(e.matches);
    mq.addEventListener("change",h);
    return ()=>mq.removeEventListener("change",h);
  },[]);

  useEffect(()=>{
    const h=()=>setScrolled(window.scrollY>14);
    window.addEventListener("scroll",h,{passive:true});
    return ()=>window.removeEventListener("scroll",h);
  },[]);

  const t = isDark ? T.dark : T.light;

  const PBtn = (ex={}) => ({
    display:"inline-flex",alignItems:"center",gap:8,
    background:T.Y,color:T.Ytext,
    fontFamily:"Manrope,sans-serif",fontSize:".9375rem",fontWeight:800,letterSpacing:"-.02em",
    padding:"13px 26px",borderRadius:9,border:"none",cursor:"pointer",textDecoration:"none",
    boxShadow:"0 1px 0 rgba(255,255,255,0.22) inset",
    transition:"all .22s cubic-bezier(.22,1,.36,1)", ...ex,
  });

  const GBtn = (ex={}) => ({
    display:"inline-flex",alignItems:"center",gap:8,
    background:t.ghost.bg,color:t.text,
    fontFamily:"Manrope,sans-serif",fontSize:".9375rem",fontWeight:600,letterSpacing:"-.01em",
    padding:"13px 26px",borderRadius:9,border:`1px solid ${t.ghost.bdr}`,
    cursor:"pointer",textDecoration:"none",backdropFilter:"blur(8px)",
    transition:"all .22s cubic-bezier(.22,1,.36,1)", ...ex,
  });

  const EB = { /* eyebrow */
    display:"inline-flex",alignItems:"center",gap:6,
    fontFamily:"'IBM Plex Mono',monospace",fontSize:".625rem",fontWeight:600,
    letterSpacing:".10em",textTransform:"uppercase",
    color:T.Ymid,background:"rgba(214,162,29,0.10)",
    border:"1px solid rgba(214,162,29,0.22)",
    padding:"3px 10px",borderRadius:999,
  };

  const SH = { /* section heading */
    fontFamily:"Manrope,sans-serif",
    fontSize:"clamp(1.875rem,3vw,2.625rem)",
    fontWeight:800,letterSpacing:"-0.045em",lineHeight:1.1,color:t.text,
  };

  const tabs = [
    { label:"Reminders",   sub:"Never miss a date",     mock:<MockReminder isDark={isDark}/> },
    { label:"Costs",       sub:"See what each van costs",mock:<MockCosts    isDark={isDark}/> },
    { label:"Records",     sub:"Everything in one place",mock:<MockRecords  isDark={isDark}/> },
  ];

  return (<>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;450;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
      *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
      html { scroll-behavior:smooth; }
      body { font-family:Manrope,sans-serif; -webkit-font-smoothing:antialiased; overflow-x:hidden; }

      .skip { position:absolute;top:-100%;left:0;background:${T.Y};color:${T.Ytext};padding:8px 18px;font-weight:800;border-radius:0 0 8px 0;z-index:9999;text-decoration:none; }
      .skip:focus { top:0; }

      @keyframes fadeUp  { from{opacity:0;transform:translateY(26px)} to{opacity:1;transform:translateY(0)} }
      @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
      @keyframes bobble  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }

      /* Split-flap ticker */
      @keyframes tickIn  { from{transform:translateY(100%);opacity:0} to{transform:translateY(0);opacity:1} }
      @keyframes tickOut { from{transform:translateY(0);opacity:1}    to{transform:translateY(-100%);opacity:0} }
      .tick-in  { animation:tickIn  .32s cubic-bezier(.22,1,.36,1) both }
      .tick-out { animation:tickOut .32s cubic-bezier(.55,0,1,.45)  both }

      .e1{animation:fadeUp .65s cubic-bezier(.22,1,.36,1) .05s both}
      .e2{animation:fadeUp .65s cubic-bezier(.22,1,.36,1) .17s both}
      .e3{animation:fadeUp .65s cubic-bezier(.22,1,.36,1) .29s both}
      .e4{animation:fadeUp .65s cubic-bezier(.22,1,.36,1) .41s both}
      .e5{animation:fadeUp .65s cubic-bezier(.22,1,.36,1) .53s both}
      .ecard{animation:fadeIn .9s cubic-bezier(.22,1,.36,1) .2s both;animation-fill-mode:both}
      .mockbob{animation:bobble 8s ease-in-out 1.5s infinite}

      .bp:hover{background:#FFD860!important;transform:translateY(-2px);box-shadow:0 1px 0 rgba(255,255,255,.22) inset,0 12px 40px rgba(255,200,61,.50)!important;}
      .bp:active{transform:translateY(0)!important;}
      .bp:focus-visible,.bg:focus-visible,.tog:focus-visible{outline:2px solid ${T.Y};outline-offset:3px;}
      .bg:hover{transform:translateY(-1px);}
      .tog{transition:transform .2s cubic-bezier(.22,1,.36,1);}
      .tog:hover{transform:scale(1.08);}
      .nl{text-decoration:none;font-size:.875rem;font-weight:500;padding:6px 11px;border-radius:7px;transition:color .15s;}
      .nl:focus-visible{outline:2px solid ${T.Y};outline-offset:2px;}
      .pil:hover{transform:translateY(-4px);}
      .pil{transition:transform .28s cubic-bezier(.22,1,.36,1);}
      .tab-btn{transition:all .2s cubic-bezier(.22,1,.36,1);cursor:pointer;border:none;background:transparent;}
      .tab-btn:focus-visible{outline:2px solid ${T.Y};outline-offset:3px;}
      .fl{text-decoration:none;font-size:.8125rem;font-weight:450;transition:color .15s;}

      @media(max-width:768px){
        .hm{display:none!important;} .sm{display:flex!important;}
        .hero-g{grid-template-columns:1fr!important;}
        .hero-vis{order:-1;justify-content:center;}
        .pil-g{grid-template-columns:1fr!important;}
        .feat-g{grid-template-columns:1fr!important;}
        .obj-g{grid-template-columns:1fr!important;} .price-g{grid-template-columns:1fr!important;}
        .mob-bar{display:block!important;}
        .stat-g{grid-template-columns:1fr!important;}
        body{padding-bottom:72px;}
        .h1-pull{margin-left:0!important;}
        .ystat{font-size:2.75rem!important;}
      }
      @media(min-width:769px){.hiw-conn{display:block!important;}}
      @media(prefers-reduced-motion:reduce){
        *,*::before,*::after{animation-duration:.001ms!important;transition-duration:.001ms!important;}
      }
    `}</style>

    {/* Grain */}
    <div aria-hidden="true" style={{ position:"fixed",inset:0,pointerEvents:"none",zIndex:400,opacity:t.grain,
      backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)'/%3E%3C/svg%3E")`,
      backgroundSize:"256px 256px" }}/>

    <a href="#main" className="skip">Skip to main content</a>

    <div style={{ background:t.bg,color:t.text,minHeight:"100vh",transition:"background .3s,color .3s" }}>

      {/* ══════════════════ NAV ══════════════════ */}
      <header style={{
        position:"sticky",top:0,zIndex:50,
        background:scrolled?t.nav:"transparent",
        backdropFilter:scrolled?"blur(24px) saturate(180%)":"none",
        WebkitBackdropFilter:scrolled?"blur(24px) saturate(180%)":"none",
        borderBottom:scrolled?`1px solid ${t.border}`:"1px solid transparent",
        transition:"all .3s cubic-bezier(.22,1,.36,1)",
      }}>
        <div style={{ maxWidth:"72rem",margin:"0 auto",padding:"0 1.5rem",display:"flex",alignItems:"center",height:64,gap:"1.5rem" }}>
          <a href="/" aria-label="FleetHive home" style={{ textDecoration:"none",flexShrink:0,display:"flex",alignItems:"center" }}>
            <Logo isDark={isDark} h={22}/>
          </a>

          <nav aria-label="Primary" className="hm" style={{ display:"flex",gap:2,flex:1 }}>
            {["How it works","Pricing","Book a call"].map(l=>(
              <a key={l} href={l==="Book a call"?"https://calendly.com/fleethive":l==="Pricing"?"#pricing":"#product"} className="nl" target={l==="Book a call"?"_blank":undefined} rel={l==="Book a call"?"noopener noreferrer":undefined}
                style={{ color:t.muted }}
                onMouseEnter={e=>e.currentTarget.style.color=t.text}
                onMouseLeave={e=>e.currentTarget.style.color=t.muted}>{l}</a>
            ))}
          </nav>

          <div style={{ display:"flex",alignItems:"center",gap:8,marginLeft:"auto" }}>
            <button onClick={()=>setIsDark(p=>!p)} className="tog"
              aria-label={isDark?"Light mode":"Dark mode"}
              style={{ width:34,height:34,borderRadius:8,border:`1px solid ${t.togBdr}`,background:t.togBg,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:t.togClr }}>
              <Ic d={isDark?I.sun:I.moon} s={14} sw={2}/>
            </button>

            {/* Log in — ghost, nav only */}
            <a href="https://vloot.in/auth/login" className="hm nl" style={{ color:t.muted,fontSize:".875rem",fontWeight:500 }}
              onMouseEnter={e=>e.currentTarget.style.color=t.text}
              onMouseLeave={e=>e.currentTarget.style.color=t.muted}>Log in</a>

            {/* Get started — primary */}
            <a href="https://vloot.in/onboarding/new" className="bp hm" style={PBtn({padding:"9px 18px",fontSize:".8125rem"})}>
              Get started free
            </a>

            <button onClick={()=>setMenu(p=>!p)} className="sm tog"
              aria-label={menu?"Close menu":"Menu"} aria-expanded={menu}
              style={{ display:"none",width:36,height:36,borderRadius:9,border:`1px solid ${t.border}`,background:t.surface,alignItems:"center",justifyContent:"center",cursor:"pointer",color:t.text }}>
              <Ic d={menu?I.x:I.menu} s={15} sw={2}/>
            </button>
          </div>
        </div>

        {menu&&(
          <div style={{ background:t.bg2,borderTop:`1px solid ${t.border}`,padding:"1rem 1.5rem 1.5rem" }}>
            {["How it works","Pricing","Book a call"].map(l=>(
              <a key={l} href={l==="Book a call"?"https://calendly.com/fleethive":l==="Pricing"?"#pricing":"#product"} onClick={()=>setMenu(false)} target={l==="Book a call"?"_blank":undefined} rel={l==="Book a call"?"noopener noreferrer":undefined} style={{ display:"block",padding:"12px 0",color:t.text,textDecoration:"none",fontSize:".9375rem",fontWeight:500,borderBottom:`1px solid ${t.border}` }}>{l}</a>
            ))}
            <div style={{ display:"flex",gap:8,marginTop:"1.25rem" }}>
              <a href="https://vloot.in/auth/login" style={{ ...GBtn(),flex:1,justifyContent:"center",fontSize:".875rem" }}>Log in</a>
              <a href="https://vloot.in/onboarding/new" className="bp" style={PBtn({flex:2,justifyContent:"center"})} onClick={()=>setMenu(false)}>Get started free</a>
            </div>
          </div>
        )}
      </header>

      <main id="main">

        {/* ══════════════════ §1 HERO ══════════════════ */}
        <section aria-label="Hero" style={{
          position:"relative",overflow:"hidden",
          padding:"6.5rem 1.5rem 8rem",
          background:isDark
            ?"radial-gradient(ellipse 100% 55% at 50% -8%,rgba(255,200,61,0.12) 0%,transparent 55%),#080A0D"
            :"radial-gradient(ellipse 100% 55% at 50% -8%,rgba(214,162,29,0.09) 0%,transparent 55%),#FAF7F2",
        }}>
          <div aria-hidden="true" style={{ position:"absolute",inset:0,pointerEvents:"none",
            backgroundImage:`linear-gradient(${t.border}55 1px,transparent 1px),linear-gradient(90deg,${t.border}55 1px,transparent 1px)`,
            backgroundSize:"88px 88px",
            maskImage:"radial-gradient(ellipse 85% 50% at 50% 0%,black,transparent 80%)",
            WebkitMaskImage:"radial-gradient(ellipse 85% 50% at 50% 0%,black,transparent 80%)",
            opacity:.5,
          }}/>

          <div className="hero-g" style={{ maxWidth:"72rem",margin:"0 auto",display:"grid",gridTemplateColumns:"58fr 42fr",gap:"4rem",alignItems:"center",position:"relative" }}>

            <div>
              <div className="e1" style={{ marginBottom:"1.5rem" }}>
                <span style={EB}>For small businesses &amp; households</span>
              </div>

              <h1 className="h1-pull" style={{ fontFamily:"Manrope,sans-serif",lineHeight:1.0,marginBottom:"1.5rem",marginLeft:"-0.25rem" }}>
                {[
                  {cls:"e1",txt:"Every vehicle.", gold:false},
                  {cls:"e2",txt:"Every date.",    gold:false},
                ].map(({cls,txt})=>(
                  <span key={txt} className={cls} style={{
                    display:"block",
                    fontSize:"clamp(2.875rem,6.2vw,5.25rem)",
                    fontWeight:800,letterSpacing:"-0.052em",
                    color:t.text,
                  }}>{txt}</span>
                ))}
                {/* Split-flap third line */}
                <span className="e3" style={{
                  display:"flex",alignItems:"baseline",gap:"0.28em",
                  fontSize:"clamp(2.875rem,6.2vw,5.25rem)",
                  fontWeight:800,letterSpacing:"-0.052em",
                  color:T.Y,
                }}>
                  <span>No</span>
                  {/* Clipping window — only the current word is visible */}
                  <span style={{ display:"inline-block",overflow:"hidden",verticalAlign:"baseline",height:"1.05em",position:"relative",minWidth:"4.5ch" }}>
                    <span
                      key={tickerIdx}
                      className={tickerOut ? "tick-out" : "tick-in"}
                      style={{ display:"block",whiteSpace:"nowrap",lineHeight:1.0 }}
                    >
                      {TICKER_WORDS[tickerIdx]}
                    </span>
                  </span>
                </span>
              </h1>

              <p className="e4" style={{ fontSize:"1.125rem",lineHeight:1.75,color:t.muted,fontWeight:450,letterSpacing:"-0.01em",maxWidth:"40rem",marginBottom:"2rem" }}>
                FleetHive keeps your service dates, costs, and records in one place — and connects you to discounted community rates on parts and servicing. Less to remember. Less to spend.
              </p>

              {/* CTAs */}
              <div className="e5" style={{ display:"flex",flexWrap:"wrap",gap:".75rem",marginBottom:"1rem" }}>
                <a href="https://vloot.in/onboarding/new" className="bp" style={PBtn()}>
                  Get started free <Ic d={I.arrow} s={15} stroke={T.Ytext}/>
                </a>
                <a href="#product" className="bg" style={GBtn()}>
                  How it works <Ic d={I.arrowR} s={14} stroke={t.text} sw={2}/>
                </a>
              </div>

              {/* Commitment reducer — directly under CTAs */}
              <div className="e5" style={{ marginBottom:"2rem" }}>
                <p style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".625rem",fontWeight:600,color:isDark?"#7A8A9A":"#9C9590",letterSpacing:".07em" }}>
                  FREE TO START · NO CREDIT CARD · SETUP IN UNDER 10 MINUTES
                </p>
              </div>

              {/* Social proof — avatars + trades line */}
              <div className="e5" style={{ display:"flex",alignItems:"center",gap:"0.875rem" }}>
                {/* Avatar stack */}
                <div style={{ display:"flex",flexShrink:0 }} aria-hidden="true">
                  {[
                    { init:"JM", bg:"#FFC83D", fg:"#0A0800" },
                    { init:"SB", bg: isDark?"#7DA6FF":"#2F6FED", fg:"#FFFFFF" },
                    { init:"RT", bg: isDark?"#4FB37F":"#147A4B", fg:"#FFFFFF" },
                  ].map((av,i)=>(
                    <div key={i} style={{
                      width:28,height:28,borderRadius:"50%",
                      background:av.bg,
                      border:`2px solid ${isDark?"#080A0D":"#FAF7F2"}`,
                      display:"flex",alignItems:"center",justifyContent:"center",
                      fontFamily:"Manrope,sans-serif",fontSize:"9px",fontWeight:800,
                      color:av.fg,
                      marginLeft:i>0?-8:0,
                      zIndex:3-i,position:"relative",
                      flexShrink:0,
                    }}>{av.init}</div>
                  ))}
                </div>
                <p style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".625rem",fontWeight:600,color:isDark?"#7A8A9A":"#9C9590",letterSpacing:".07em" }}>
                  ELECTRICIANS, PLUMBERS &amp; HOUSEHOLDS ACROSS THE UK
                </p>
              </div>
            </div>

            {/* Hero visual — reminder card, straight-on */}
            <div className="hero-vis ecard" style={{ display:"flex",justifyContent:"flex-end",alignItems:"flex-start",paddingTop:"1rem" }}>
              <div className="mockbob" style={{ width:"100%",maxWidth:340 }}>
                {/* Single focused card — MOT in 14 days */}
                <div style={{ background:t.surface,border:`1px solid ${t.border}`,borderRadius:"1.5rem",padding:"2.25rem",
                  boxShadow:isDark
                    ?"0 40px 80px rgba(0,0,0,0.7),0 2px 0 rgba(255,255,255,0.06) inset,0 0 80px rgba(255,200,61,0.08)"
                    :"0 24px 60px rgba(18,16,14,0.12),0 4px 12px rgba(18,16,14,0.06),0 1px 0 rgba(255,255,255,0.9) inset",
                  }}>
                  {/* Header row — status dot + label + discount badge */}
                  <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:"2rem" }}>
                    <div style={{ width:8,height:8,borderRadius:"50%",background:T.Y,boxShadow:`0 0 0 3px ${T.Y}33`,flexShrink:0 }}/>
                    <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".625rem",fontWeight:600,letterSpacing:".12em",textTransform:"uppercase",color:t.muted,flex:1 }}>Upcoming · Service due</span>
                    {/* Discount badge */}
                    <span style={{
                      fontFamily:"'IBM Plex Mono',monospace",fontSize:".5625rem",fontWeight:700,
                      letterSpacing:".06em",textTransform:"uppercase",
                      background: isDark?"rgba(79,179,127,0.15)":"rgba(20,122,75,0.10)",
                      color: isDark?"#4FB37F":"#147A4B",
                      border:`1px solid ${isDark?"rgba(79,179,127,0.30)":"rgba(20,122,75,0.22)"}`,
                      padding:"2px 7px",borderRadius:4,whiteSpace:"nowrap",
                    }}>Community rate</span>
                  </div>
                  <div style={{ display:"flex",alignItems:"baseline",gap:".5rem",marginBottom:"1.25rem" }}>
                    <span style={{ fontFamily:"Manrope,sans-serif",fontSize:"5.5rem",fontWeight:800,letterSpacing:"-0.055em",lineHeight:1,color:T.Y }}>14</span>
                    <span style={{ fontFamily:"Manrope,sans-serif",fontSize:"1.5rem",fontWeight:600,color:t.muted,letterSpacing:"-0.02em" }}>days</span>
                  </div>
                  {/* Discount saving line */}
                  <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:"1.25rem" }}>
                    <span style={{ fontFamily:"Manrope,sans-serif",fontSize:".875rem",fontWeight:450,color:t.muted,textDecoration:"line-through" }}>£340</span>
                    <span style={{ fontFamily:"Manrope,sans-serif",fontSize:".9375rem",fontWeight:700,color:isDark?"#4FB37F":"#147A4B" }}>£272 with FleetHive rate</span>
                    <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".5625rem",fontWeight:700,color:isDark?"#4FB37F":"#147A4B",background:isDark?"rgba(79,179,127,0.12)":"rgba(20,122,75,0.08)",padding:"2px 6px",borderRadius:3 }}>SAVE 20%</span>
                  </div>
                  <div style={{ height:1,background:t.border,marginBottom:"1.25rem" }}/>
                  <div style={{ marginBottom:"1.5rem" }}>
                    <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".875rem",fontWeight:600,color:t.text,letterSpacing:".04em",marginBottom:4 }}>EK22 XPL</div>
                    <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".75rem",color:t.muted,letterSpacing:".02em" }}>Ford Transit Connect · 2022</div>
                  </div>
                  <a href="https://vloot.in/onboarding/new" className="bp" style={{ ...PBtn({width:"100%",justifyContent:"center",padding:"10px 0",fontSize:".8125rem",borderRadius:8,textDecoration:"none"}) }}>
                    Book service now <Ic d={I.arrow} s={13} stroke={T.Ytext} sw={2.5}/>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* ── Partner logos — full width, below hero grid ── */}
          <div style={{ maxWidth:"72rem",margin:"0 auto",padding:"2.5rem 0 0.5rem" }}>
            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(6,1fr)",
              alignItems:"center",
              gap:"0.75rem",
            }}>
              {LOGOS.map((lg)=>(
                <div key={lg.name} style={{ display:"flex",alignItems:"center",justifyContent:"center" }}>
                  <img
                    src={BASE + (isDark ? lg.dark : lg.light)}
                    alt={lg.name}
                    style={{ height:lg.h, width:"auto", maxWidth:"100%" }}
                  />
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* ══════════════════ §2 YELLOW SHOCK ══════════════════ */}
        <section aria-label="Key outcomes" style={{ background:T.Y,padding:"4.5rem 1.5rem" }}>
          <div style={{ maxWidth:"72rem",margin:"0 auto" }}>
            <div className="stat-g" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:0,borderLeft:`1px solid ${T.Ydark}44` }}>
              {[
                { val:"14",    unit:"days",  lbl:"average notice before a missed date", detail:"Enough time to book, not scramble" },
                { val:"< 5",   unit:"min",   lbl:"to add any vehicle to FleetHive",     detail:"Start knowing before you finish your coffee" },
                { val:"Zero",  unit:"",      lbl:"vans missed on a reminder",           detail:"Because the date reaches you first" },
              ].map((s,i)=>(
                <div key={i} style={{ padding:"0 2.5rem",borderRight:`1px solid ${T.Ydark}44` }}>
                  <div style={{ display:"flex",alignItems:"baseline",gap:".375rem",marginBottom:".375rem" }}>
                    <span className="ystat" style={{ fontFamily:"Manrope,sans-serif",fontSize:"3.5rem",fontWeight:800,letterSpacing:"-0.055em",color:T.Ytext,lineHeight:1 }}>{s.val}</span>
                    {s.unit&&<span style={{ fontFamily:"Manrope,sans-serif",fontSize:"1.25rem",fontWeight:600,color:`${T.Ytext}99`,letterSpacing:"-0.02em" }}>{s.unit}</span>}
                  </div>
                  <div style={{ fontFamily:"Manrope,sans-serif",fontSize:".9375rem",fontWeight:700,color:T.Ytext,letterSpacing:"-0.015em",marginBottom:".25rem" }}>{s.lbl}</div>
                  <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".625rem",color:`${T.Ytext}88`,fontWeight:500,letterSpacing:".02em" }}>{s.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ §3 PRODUCT IN ACTION ══════════════════ */}
        <section id="product" aria-labelledby="prod-h" style={{ padding:"7rem 1.5rem",background:t.bg2 }}>
          <div style={{ maxWidth:"72rem",margin:"0 auto" }}>
            <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"4rem",flexWrap:"wrap",gap:"1rem" }}>
              <div style={{ maxWidth:"44rem" }}>
                <h2 id="prod-h" style={{ ...SH, marginBottom:".75rem" }}>What you actually see.</h2>
                <p style={{ fontSize:"1.0625rem",color:t.muted,lineHeight:1.72,fontWeight:450,letterSpacing:"-.01em" }}>
                  Real product. No speculative dashboards. This is what opens when you log in.
                </p>
              </div>
              <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".625rem",fontWeight:600,color:t.faint,letterSpacing:".08em",textTransform:"uppercase" }}>How it works</span>
            </div>

            {/* Tab switcher */}
            <div style={{ display:"flex",gap:2,marginBottom:"2.5rem",background:isDark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.04)",borderRadius:10,padding:4,width:"fit-content" }}>
              {tabs.map((tab,i)=>(
                <button key={i} className="tab-btn" onClick={()=>setActiveTab(i)}
                  style={{
                    padding:"8px 20px",borderRadius:8,
                    background: activeTab===i ? t.surface : "transparent",
                    boxShadow: activeTab===i ? (isDark?"0 1px 4px rgba(0,0,0,0.4)":"0 1px 4px rgba(0,0,0,0.08)") : "none",
                    color: activeTab===i ? t.text : t.muted,
                    fontFamily:"Manrope,sans-serif",fontSize:".875rem",fontWeight: activeTab===i?700:500,
                    letterSpacing:"-.01em",
                  }}>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Feature grid — text left, mock right */}
            <div className="feat-g" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4rem",alignItems:"center" }}>
              <div>
                <div style={{ marginBottom:"1.75rem" }}>
                  <div style={{ height:3,background:t.pil[activeTab],borderRadius:1.5,width:40,marginBottom:"1.5rem" }}/>
                  <h3 style={{ fontFamily:"Manrope,sans-serif",fontSize:"1.5rem",fontWeight:700,letterSpacing:"-0.03em",color:t.text,marginBottom:".75rem",lineHeight:1.2 }}>
                    {tabs[activeTab].label === "Reminders"
                      ? "Never arrive at an expired MOT."
                      : tabs[activeTab].label === "Costs"
                      ? "Know what each van is costing you."
                      : "Everything stored, nothing lost."}
                  </h3>
                  <p style={{ fontSize:"1rem",color:t.muted,lineHeight:1.75,fontWeight:450,letterSpacing:"-.01em" }}>
                    {tabs[activeTab].label === "Reminders"
                      ? "FleetHive alerts you before service, MOT, insurance, and tax dates become problems. Configure how far ahead you want to know — and get on with the job."
                      : tabs[activeTab].label === "Costs"
                      ? "See what every vehicle costs month by month, compare against the previous period, and make smarter decisions about repairs, replacements, and suppliers."
                      : "Service history, invoices, insurance documents — all attached to the right vehicle. No more hunting through email or paper files when a garage asks for history."}
                  </p>
                </div>
                <ul style={{ listStyle:"none",display:"flex",flexDirection:"column",gap:".625rem" }}>
                  {(tabs[activeTab].label === "Reminders"
                    ? ["MOT and service reminders","Insurance and tax dates","Custom lead times — 7, 14, or 30 days","Alert reaches you before it's urgent"]
                    : tabs[activeTab].label === "Costs"
                    ? ["Monthly spend per vehicle","Previous month comparison","Fuel, service, repair breakdown","Spot the outliers before they escalate"]
                    : ["Full service history per vehicle","Invoice and receipt store","Insurance and tax document storage","Shareable with garages on request"]
                  ).map(b=>(
                    <li key={b} style={{ display:"flex",alignItems:"center",gap:10 }}>
                      <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".625rem",color:t.pil[activeTab],fontWeight:600 }}>→</span>
                      <span style={{ fontSize:".9375rem",color:t.muted,fontWeight:450,letterSpacing:"-.005em" }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ animation:"fadeIn .35s ease both" }} key={activeTab}>
                {tabs[activeTab].mock}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════ §4 VALUE PILLARS ══════════════════ */}
        <section aria-labelledby="pil-h" style={{ padding:"7rem 1.5rem",background:t.bg }}>
          <div style={{ maxWidth:"72rem",margin:"0 auto" }}>
            <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"5rem",flexWrap:"wrap",gap:"1rem" }}>
              <h2 id="pil-h" style={{ ...SH, maxWidth:"44rem" }}>
                Multiple vehicles create more admin than most people plan for.
              </h2>
              <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".625rem",fontWeight:600,color:t.faint,letterSpacing:".08em",textTransform:"uppercase" }}>What you control</span>
            </div>

            <div className="pil-g" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"3rem" }}>
              {[
                { accent:t.pil[0],num:"01",title:"Service and MOT dates",
                  body:"Know what's due when, across every van. Reminders reach you before a date becomes a problem.",
                  bullets:["MOT and service reminders","Insurance and tax dates","Configurable lead times"] },
                { accent:t.pil[1],num:"02",title:"Running costs, per vehicle",
                  body:"See what each van is actually costing. Compare month to month. Make supplier decisions with real data.",
                  bullets:["Cost breakdown per vehicle","Invoice and service history","Month-on-month comparison"] },
                { accent:t.pil[2],num:"03",title:"Records in one place",
                  body:"Service records, invoices, and documents stay with the vehicle — not in inboxes, memory, or folders.",
                  bullets:["Full service history","Invoice and document store","Accessible when you need it"] },
              ].map((p,i)=>(
                <article key={i} className="pil">
                  <div style={{ height:3,background:p.accent,borderRadius:1.5,marginBottom:"1.75rem" }}/>
                  <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".625rem",fontWeight:600,color:t.faint,letterSpacing:".10em",textTransform:"uppercase",marginBottom:"1.25rem" }}>{p.num}</div>
                  <h3 style={{ fontFamily:"Manrope,sans-serif",fontSize:"1.1875rem",fontWeight:700,letterSpacing:"-0.025em",color:t.text,marginBottom:".75rem",lineHeight:1.25 }}>{p.title}</h3>
                  <p style={{ fontSize:".9375rem",color:t.muted,lineHeight:1.72,marginBottom:"1.5rem",fontWeight:450 }}>{p.body}</p>
                  <ul style={{ listStyle:"none",display:"flex",flexDirection:"column",gap:".5rem" }}>
                    {p.bullets.map(b=>(
                      <li key={b} style={{ display:"flex",alignItems:"center",gap:10 }}>
                        <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".625rem",color:p.accent,fontWeight:600 }}>→</span>
                        <span style={{ fontSize:".875rem",color:t.muted,fontWeight:450 }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ §5 SOCIAL PROOF ══════════════════ */}
        <section aria-label="Customer testimonials" style={{ background:t.inv,padding:"7rem 1.5rem" }}>
          <div style={{ maxWidth:"64rem",margin:"0 auto" }}>
            <div style={{ display:"flex",alignItems:"center",gap:"1rem",marginBottom:"3rem" }}>
              <div style={{ width:24,height:1,background:`${T.Y}66` }}/>
              <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".625rem",fontWeight:600,letterSpacing:".10em",textTransform:"uppercase",color:t.invMuted }}>What operators say</span>
            </div>

            {/* Primary quote — large */}
            <blockquote style={{ marginBottom:"4rem" }}>
              <p style={{ fontFamily:"Manrope,sans-serif",fontSize:"clamp(1.5rem,3.5vw,2.25rem)",fontWeight:500,fontStyle:"italic",lineHeight:1.5,letterSpacing:"-0.025em",color:t.invText,marginBottom:"2rem",maxWidth:"56rem" }}>
                "Knowing exactly what each van costs per month changed how I look at replacing the older ones. I had no idea there was that much difference between a van that looks fine and one that's quietly costing me."
              </p>
              <footer>
                <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".6875rem",fontWeight:600,color:t.invMuted,letterSpacing:".06em",textTransform:"uppercase" }}>
                  — S. Barrett, Director · Plumbing &amp; heating · 4 vans · Bristol
                </span>
              </footer>
            </blockquote>

            {/* Two secondary quotes side by side */}
            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3rem",paddingTop:"4rem",borderTop:`1px solid ${t.invBdr}` }} className="pil-g">
              {[
                { q:"We had MOT reminders going to three different inboxes and still nearly missed one. FleetHive fixed that inside a week — van would have been off the road for three days.", attr:"J. Mitchell, Owner · Electrical contractor · 6 vans · Cardiff" },
                { q:"Setup took about twenty minutes for all four vans. I wasn't expecting it to be that quick. The records view alone is worth it — everything's just there.", attr:"R. Thompson, Director · Groundworks contractor · 4 vans · Leeds" },
              ].map((q,i)=>(
                <blockquote key={i}>
                  <p style={{ fontFamily:"Manrope,sans-serif",fontSize:"clamp(1rem,2vw,1.25rem)",fontWeight:450,fontStyle:"italic",lineHeight:1.65,letterSpacing:"-0.015em",color:t.invMuted,marginBottom:"1.25rem" }}>
                    "{q.q}"
                  </p>
                  <footer>
                    <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".5625rem",fontWeight:600,color:t.invFaint,letterSpacing:".06em",textTransform:"uppercase" }}>— {q.attr}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ §6 PRICING ══════════════════ */}
        <section id="pricing" aria-labelledby="price-h" style={{ padding:"7rem 1.5rem",background:t.bg }}>
          <div style={{ maxWidth:"72rem",margin:"0 auto" }}>
            {/* Header */}
            <div style={{ textAlign:"center",marginBottom:"4rem" }}>
              <h2 id="price-h" style={{ ...SH, marginBottom:".75rem" }}>Simple, transparent pricing.</h2>
              <p style={{ fontSize:"1.0625rem",color:t.muted,lineHeight:1.72,fontWeight:450,letterSpacing:"-.01em",maxWidth:"38rem",margin:"0 auto" }}>
                Start free. No setup fee, no contract, no surprises.
              </p>
            </div>
            {/* Three cards */}
            <div className="price-g" style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1.5rem",alignItems:"start" }}>
              {/* ── FREE ── */}
              <div style={{
                background:t.priceBg,border:`1px solid ${t.priceBdr}`,
                borderRadius:"1.25rem",overflow:"hidden",
                boxShadow:isDark?"0 8px 32px rgba(0,0,0,0.35)":"0 4px 20px rgba(18,16,14,0.07)",
              }}>
                {/* Tier label */}
                <div style={{ padding:"1.25rem 1.75rem .75rem",borderBottom:`1px solid ${t.priceBdr}` }}>
                  <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".5625rem",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:t.muted,marginBottom:".625rem" }}>Free</div>
                  <div style={{ display:"flex",alignItems:"baseline",gap:".375rem",marginBottom:".25rem" }}>
                    <span style={{ fontFamily:"Manrope,sans-serif",fontSize:"2.625rem",fontWeight:800,letterSpacing:"-0.05em",color:t.text,lineHeight:1 }}>£0</span>
                    <span style={{ fontFamily:"Manrope,sans-serif",fontSize:".875rem",fontWeight:500,color:t.muted }}>/month</span>
                  </div>
                  <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".5625rem",color:t.muted,letterSpacing:".04em",marginTop:".25rem" }}>1 vehicle</div>
                </div>
                {/* Features */}
                <div style={{ padding:"1.5rem 1.75rem" }}>
                  <ul style={{ listStyle:"none",display:"flex",flexDirection:"column",gap:".6rem",marginBottom:"1.75rem" }}>
                    {[
                      "Action Calendar",
                      "Easy service bookings",
                      "Core maintenance tracking",
                    ].map(f=>(
                      <li key={f} style={{ display:"flex",alignItems:"flex-start",gap:9 }}>
                        <div style={{ width:16,height:16,borderRadius:"50%",background:`${t.priceBdr}`,border:`1px solid ${t.priceBdr}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:2 }}>
                          <Ic d={I.check} s={9} stroke={t.muted} sw={2.5}/>
                        </div>
                        <span style={{ fontSize:".9rem",color:t.text,fontWeight:450,lineHeight:1.5 }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="https://vloot.in/onboarding/new" style={{
                    display:"flex",alignItems:"center",justifyContent:"center",gap:6,
                    width:"100%",padding:"11px 0",borderRadius:8,
                    fontFamily:"Manrope,sans-serif",fontSize:".875rem",fontWeight:700,letterSpacing:"-.01em",
                    border:`1.5px solid ${t.priceBdr}`,background:"transparent",
                    color:t.text,textDecoration:"none",boxSizing:"border-box",
                  }}>
                    Get started free <Ic d={I.arrow} s={13} stroke={t.text} sw={2.5}/>
                  </a>
                </div>
              </div>
              {/* ── PRO (featured) ── */}
              <div style={{
                background:isDark?"#111720":"#FFFFFF",
                border:`1.5px solid ${T.Y}`,
                borderRadius:"1.25rem",overflow:"hidden",
                boxShadow:isDark?"0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,200,61,0.15)":"0 16px 48px rgba(18,16,14,0.13), 0 0 0 1px rgba(214,162,29,0.2)",
                position:"relative",transform:"translateY(-12px)",
              }}>
                {/* Recommended pill */}
                <div style={{ position:"absolute",top:-1,left:"50%",transform:"translateX(-50%)" }}>
                  <div style={{ background:T.Y,color:T.Ytext,fontFamily:"'IBM Plex Mono',monospace",fontSize:".5rem",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",padding:"4px 14px",borderRadius:"0 0 8px 8px",whiteSpace:"nowrap" }}>Most popular</div>
                </div>
                {/* Yellow top band */}
                <div style={{ background:T.Y,padding:"1.625rem 1.75rem 1.125rem",marginTop:20 }}>
                  <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".5625rem",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:T.Ytext,opacity:.75,marginBottom:".625rem" }}>Pro</div>
                  <div style={{ display:"flex",alignItems:"baseline",gap:".375rem",marginBottom:".25rem" }}>
                    <span style={{ fontFamily:"Manrope,sans-serif",fontSize:"2.625rem",fontWeight:800,letterSpacing:"-0.05em",color:T.Ytext,lineHeight:1 }}>£12.95</span>
                    <span style={{ fontFamily:"Manrope,sans-serif",fontSize:".875rem",fontWeight:500,color:`${T.Ytext}99` }}>/month</span>
                  </div>
                  <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".5625rem",color:`${T.Ytext}88`,letterSpacing:".04em",marginTop:".25rem" }}>2–5 vehicles · inc. VAT</div>
                </div>
                {/* Features */}
                <div style={{ padding:"1.5rem 1.75rem" }}>
                  <ul style={{ listStyle:"none",display:"flex",flexDirection:"column",gap:".6rem",marginBottom:"1.75rem" }}>
                    {[
                      "Everything in Free",
                      "Full spend benchmarks",
                      "Cost forecasting",
                      "Multi-vehicle control",
                    ].map(f=>(
                      <li key={f} style={{ display:"flex",alignItems:"flex-start",gap:9 }}>
                        <div style={{ width:16,height:16,borderRadius:"50%",background:`${T.Y}22`,border:`1px solid ${T.Y}55`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:2 }}>
                          <Ic d={I.check} s={9} stroke={T.Ymid} sw={2.5}/>
                        </div>
                        <span style={{ fontSize:".9rem",color:t.text,fontWeight:450,lineHeight:1.5 }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="https://vloot.in/onboarding/new" className="bp" style={{ ...PBtn({width:"100%",justifyContent:"center",padding:"12px 0",fontSize:".9375rem",borderRadius:8,textDecoration:"none"}) }}>
                    Start free trial <Ic d={I.arrow} s={14} stroke={T.Ytext} sw={2.5}/>
                  </a>
                  <p style={{ textAlign:"center",marginTop:".75rem",fontFamily:"'IBM Plex Mono',monospace",fontSize:".5rem",color:t.faint,letterSpacing:".06em",textTransform:"uppercase" }}>14-day free trial · No card needed</p>
                </div>
              </div>
              {/* ── FLEET ── */}
              <div style={{
                background:t.priceBg,border:`1px solid ${t.priceBdr}`,
                borderRadius:"1.25rem",overflow:"hidden",
                boxShadow:isDark?"0 8px 32px rgba(0,0,0,0.35)":"0 4px 20px rgba(18,16,14,0.07)",
              }}>
                {/* Tier label */}
                <div style={{ padding:"1.25rem 1.75rem .75rem",borderBottom:`1px solid ${t.priceBdr}` }}>
                  <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".5625rem",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:t.muted,marginBottom:".625rem" }}>Fleet</div>
                  <div style={{ display:"flex",alignItems:"baseline",gap:".375rem",marginBottom:".25rem" }}>
                    <span style={{ fontFamily:"Manrope,sans-serif",fontSize:"2.625rem",fontWeight:800,letterSpacing:"-0.05em",color:t.text,lineHeight:1 }}>£19.85</span>
                    <span style={{ fontFamily:"Manrope,sans-serif",fontSize:".875rem",fontWeight:500,color:t.muted }}>/month</span>
                  </div>
                  <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".5625rem",color:t.muted,letterSpacing:".04em",marginTop:".25rem" }}>6–10 vehicles · inc. VAT</div>
                  <div style={{ display:"inline-flex",alignItems:"center",gap:5,marginTop:".5rem",background:isDark?"rgba(125,166,255,0.10)":"rgba(47,111,237,0.07)",border:`1px solid ${isDark?"rgba(125,166,255,0.2)":"rgba(47,111,237,0.15)"}`,borderRadius:5,padding:"3px 8px" }}>
                    <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".5rem",fontWeight:600,color:isDark?"#7DA6FF":"#2F6FED",letterSpacing:".06em",textTransform:"uppercase" }}>+£1.50 inc. VAT per extra vehicle</span>
                  </div>
                </div>
                {/* Features */}
                <div style={{ padding:"1.5rem 1.75rem" }}>
                  <ul style={{ listStyle:"none",display:"flex",flexDirection:"column",gap:".6rem",marginBottom:"1.75rem" }}>
                    {[
                      "Everything in Pro",
                      "Multi-user access",
                      "Extended vehicle range",
                    ].map(f=>(
                      <li key={f} style={{ display:"flex",alignItems:"flex-start",gap:9 }}>
                        <div style={{ width:16,height:16,borderRadius:"50%",background:`${t.priceBdr}`,border:`1px solid ${t.priceBdr}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:2 }}>
                          <Ic d={I.check} s={9} stroke={t.muted} sw={2.5}/>
                        </div>
                        <span style={{ fontSize:".9rem",color:t.text,fontWeight:450,lineHeight:1.5 }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="https://vloot.in/onboarding/new" style={{
                    display:"flex",alignItems:"center",justifyContent:"center",gap:6,
                    width:"100%",padding:"11px 0",borderRadius:8,
                    fontFamily:"Manrope,sans-serif",fontSize:".875rem",fontWeight:700,letterSpacing:"-.01em",
                    border:`1.5px solid ${t.priceBdr}`,background:"transparent",
                    color:t.text,textDecoration:"none",boxSizing:"border-box",
                  }}>
                    Get started free <Ic d={I.arrow} s={13} stroke={t.text} sw={2.5}/>
                  </a>
                </div>
              </div>
            </div>{/* end price-g */}
            {/* Footer note */}
            <p style={{ textAlign:"center",marginTop:"2.5rem",fontFamily:"'IBM Plex Mono',monospace",fontSize:".5625rem",color:t.faint,letterSpacing:".06em",textTransform:"uppercase" }}>
              All plans · Cancel anytime · No setup fee · Community buying rates included
            </p>
          </div>
        </section>

        {/* ══════════════════ §7 OBJECTION HANDLER ══════════════════ */}
        <section aria-labelledby="obj-h" style={{ padding:"6rem 1.5rem",background:t.bg2 }}>
          <div style={{ maxWidth:"72rem",margin:"0 auto" }}>
            <div style={{ maxWidth:"44rem",marginBottom:"3.5rem" }}>
              <h2 id="obj-h" style={{ ...SH, marginBottom:".75rem" }}>Is FleetHive right for your business?</h2>
              <p style={{ fontSize:"1.0625rem",color:t.muted,lineHeight:1.72,fontWeight:450 }}>
                FleetHive is built for owner-managed trades businesses. Here's how to know if it fits.
              </p>
            </div>

            <div className="obj-g" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3rem" }}>
              {/* Good fit */}
              <div>
                <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:"1.5rem" }}>
                  <div style={{ width:28,height:28,borderRadius:7,background:`${t.pil[2]}18`,border:`1px solid ${t.pil[2]}30`,display:"flex",alignItems:"center",justifyContent:"center" }}>
                    <Ic d={I.check} s={13} stroke={t.pil[2]} sw={2.5}/>
                  </div>
                  <span style={{ fontFamily:"Manrope,sans-serif",fontSize:".9375rem",fontWeight:700,color:t.text,letterSpacing:"-.015em" }}>Good fit</span>
                </div>
                <ul style={{ listStyle:"none",display:"flex",flexDirection:"column",gap:".75rem" }}>
                  {[
                    "You run 2 to 15 vans or work vehicles",
                    "You're an electrician, plumber, groundworker, or similar trades business",
                    "Vehicle admin currently lives in your head, a spreadsheet, or someone's inbox",
                    "You've nearly missed (or have missed) a service date or MOT",
                    "You want to know what each van is actually costing without a spreadsheet",
                  ].map(l=>(
                    <li key={l} style={{ display:"flex",alignItems:"flex-start",gap:10 }}>
                      <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".625rem",color:t.pil[2],fontWeight:600,marginTop:3 }}>→</span>
                      <span style={{ fontSize:".9375rem",color:t.muted,lineHeight:1.65,fontWeight:450 }}>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not yet */}
              <div>
                <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:"1.5rem" }}>
                  <div style={{ width:28,height:28,borderRadius:7,background:`${t.faint}18`,border:`1px solid ${t.border}`,display:"flex",alignItems:"center",justifyContent:"center" }}>
                    <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".75rem",fontWeight:700,color:t.faint }}>–</span>
                  </div>
                  <span style={{ fontFamily:"Manrope,sans-serif",fontSize:".9375rem",fontWeight:700,color:t.muted,letterSpacing:"-.015em" }}>Not the right fit (yet)</span>
                </div>
                <ul style={{ listStyle:"none",display:"flex",flexDirection:"column",gap:".75rem" }}>
                  {[
                    "You're running a fleet of 50+ vehicles (you likely need a full TMS)",
                    "You need GPS tracking or telematics (not what we do)",
                    "You need driver scheduling or route planning",
                    "You need compliance tools for HGV or PSV operators",
                  ].map(l=>(
                    <li key={l} style={{ display:"flex",alignItems:"flex-start",gap:10 }}>
                      <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".625rem",color:t.faint,fontWeight:600,marginTop:3 }}>–</span>
                      <span style={{ fontSize:".9375rem",color:t.faint,lineHeight:1.65,fontWeight:450 }}>{l}</span>
                    </li>
                  ))}
                </ul>

                {/* Reassurance note */}
                <div style={{ marginTop:"2rem",padding:"1rem",background:t.surface,border:`1px solid ${t.border}`,borderRadius:10 }}>
                  <p style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".5625rem",fontWeight:600,color:t.faint,letterSpacing:".08em",textTransform:"uppercase",marginBottom:".375rem" }}>Don't need all your history first</p>
                  <p style={{ fontSize:".875rem",color:t.muted,lineHeight:1.6,fontWeight:450 }}>Start with your registration numbers. Add history and documents over time. You don't need to migrate anything to get value from day one.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════ §8 FINAL CTA ══════════════════ */}
        <section id="start" aria-labelledby="cta-h" style={{ padding:"8rem 1.5rem 9rem",position:"relative",overflow:"hidden",background:t.bg }}>
          <div aria-hidden="true" style={{ position:"absolute",inset:0,pointerEvents:"none",
            background:isDark
              ?"radial-gradient(ellipse 70% 55% at 50% 110%,rgba(255,200,61,0.11) 0%,transparent 60%)"
              :"radial-gradient(ellipse 70% 55% at 50% 110%,rgba(214,162,29,0.07) 0%,transparent 60%)" }}/>
          <div aria-hidden="true" style={{ position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)",width:"50%",height:1,background:`linear-gradient(90deg,transparent,${T.Y}77,transparent)` }}/>

          <div style={{ maxWidth:"50rem",margin:"0 auto",textAlign:"center",position:"relative" }}>
            <div style={{ marginBottom:"1.75rem" }}>
              <span style={EB}>Start today</span>
            </div>
            <h2 id="cta-h" style={{ fontFamily:"Manrope,sans-serif",fontSize:"clamp(2.5rem,5vw,4rem)",fontWeight:800,letterSpacing:"-0.050em",lineHeight:1.02,color:t.text,marginBottom:"1.25rem" }}>
              Your next MOT reminder<br/>
              <span style={{ color:T.Y }}>starts now.</span>
            </h2>
            <p style={{ fontSize:"1.0625rem",color:t.muted,lineHeight:1.75,maxWidth:"34rem",margin:"0 auto 2.5rem",fontWeight:450,letterSpacing:"-.01em" }}>
              Add your vehicles. Set your reminders. See what each one is costing. Free for 14 days — no card required.
            </p>
            <div style={{ display:"flex",flexWrap:"wrap",gap:".875rem",justifyContent:"center",marginBottom:"1.25rem" }}>
              <a href="https://vloot.in/onboarding/new" className="bp" style={PBtn({padding:"15px 34px",fontSize:"1rem"})}>
                Get started free <Ic d={I.arrow} s={16} stroke={T.Ytext}/>
              </a>
              <a href="https://calendly.com/fleethive" target="_blank" rel="noopener noreferrer" className="bg" style={GBtn({padding:"15px 34px",fontSize:"1rem"})}>
                Book a meeting <Ic d={I.arrowR} s={14} stroke={t.text} sw={2}/>
              </a>
            </div>
            <p style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".5625rem",fontWeight:600,color:t.faint,letterSpacing:".08em",textTransform:"uppercase" }}>
              14-DAY FREE TRIAL · NO CREDIT CARD · CANCEL ANYTIME
            </p>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer role="contentinfo" style={{ background:t.bg3,borderTop:`1px solid ${t.border}`,padding:"2rem 1.5rem" }}>
        <div style={{ maxWidth:"72rem",margin:"0 auto",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"1rem" }}>
          <div style={{ display:"flex",alignItems:"center",gap:"1.5rem",flexWrap:"wrap" }}>
            <Logo isDark={isDark} h={18}/>
            <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".5625rem",fontWeight:500,color:t.faint,letterSpacing:".06em",textTransform:"uppercase" }}>© 2025 FleetHive Ltd</span>
          </div>
          <nav aria-label="Footer" style={{ display:"flex",gap:"1.5rem",flexWrap:"wrap" }}>
            {["Privacy","Terms","Contact"].map(l=>(
              <a key={l} href="#" className="fl" style={{ color:t.faint }}
                onMouseEnter={e=>e.currentTarget.style.color=t.text}
                onMouseLeave={e=>e.currentTarget.style.color=t.faint}>{l}</a>
            ))}
          </nav>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="mob-bar" style={{ display:"none",position:"fixed",bottom:0,left:0,right:0,
        padding:".875rem 1rem",
        background:isDark?"rgba(8,10,13,0.96)":"rgba(250,247,242,0.97)",
        backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",
        borderTop:`1px solid ${t.border}`,zIndex:40 }}>
        <a href="https://vloot.in/onboarding/new" className="bp" style={PBtn({display:"flex",justifyContent:"center",width:"100%"})}>
          Get started free <Ic d={I.arrow} s={15} stroke={T.Ytext}/>
        </a>
      </div>
    </div>
  </>);
}
