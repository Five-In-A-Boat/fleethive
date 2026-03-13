import { useState, useEffect } from "react";
import tokens from "./tokens";
import { Icon, iconPaths } from "./icons.jsx";
import { primaryButton, ghostButton, eyebrow, sectionHeading } from "./styles";
import {
  LOGO_BASE_PATH, PARTNER_LOGOS, TICKER_WORDS, NAV_LINKS, HERO_AVATARS,
  STATS, PRODUCT_TABS, VALUE_PILLARS, TESTIMONIALS, PRICING_TIERS,
  GOOD_FIT, NOT_FIT, FOOTER_LINKS, URLS,
} from "./data";
import Logo from "./components/Logo";
import { MockReminder, MockCosts, MockRecords } from "./components/Mocks";
import HeroCard from "./components/HeroCard";
import PricingCards from "./components/PricingCards";

const MOCK_COMPONENTS = [MockReminder, MockCosts, MockRecords];

export default function FleetHive() {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [tickerIdx, setTickerIdx] = useState(0);
  const [tickerOut, setTickerOut] = useState(false);

  useEffect(() => {
    const iv = setInterval(() => {
      setTickerOut(true);
      setTimeout(() => {
        setTickerIdx(i => (i + 1) % TICKER_WORDS.length);
        setTickerOut(false);
      }, 320);
    }, 2800);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mq.matches);
    const handler = e => setIsDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 14);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const theme = isDark ? tokens.dark : tokens.light;
  const ActiveMock = MOCK_COMPONENTS[activeTab];
  const tab = PRODUCT_TABS[activeTab];

  return (<>
    <style>{`
      *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
      html { scroll-behavior:smooth; }
      body { font-family:Manrope,sans-serif; -webkit-font-smoothing:antialiased; overflow-x:hidden; }

      .skip { position:absolute;top:-100%;left:0;background:${tokens.yellow};color:${tokens.yellowText};padding:8px 18px;font-weight:800;border-radius:0 0 8px 0;z-index:9999;text-decoration:none; }
      .skip:focus { top:0; }

      @keyframes fadeUp  { from{opacity:0;transform:translateY(26px)} to{opacity:1;transform:translateY(0)} }
      @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
      @keyframes ghostSlideUp{from{opacity:0;transform:translateY(30px) scale(var(--g-scale,0.9))}to{opacity:var(--g-opacity,0.5);transform:translateY(0) scale(var(--g-scale,0.9))}}
      @keyframes mainEntrance{0%{opacity:0;transform:translateY(50px) scale(0.96)}100%{opacity:1;transform:translateY(0) scale(1)}}
      @keyframes transitDrive{from{opacity:0;transform:translateX(24px)}to{opacity:1;transform:translateX(0)}}
      @keyframes dotPulse{0%{transform:scale(1);opacity:.5}70%{transform:scale(2.6);opacity:0}100%{transform:scale(2.6);opacity:0}}
      @keyframes slideUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
      .dot-ring{animation:dotPulse 2.8s ease-out 3.5s infinite}
      .hero-cta:hover{background:#FFD860!important;transform:translateY(-1px);box-shadow:0 1px 0 rgba(255,255,255,.22) inset,0 8px 28px rgba(255,200,61,.4)!important}
      .hero-cta:active{transform:translateY(0)!important}

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

      .bp:hover{background:#FFD860!important;transform:translateY(-2px);box-shadow:0 1px 0 rgba(255,255,255,.22) inset,0 12px 40px rgba(255,200,61,.50)!important;}
      .bp:active{transform:translateY(0)!important;}
      .bp:focus-visible,.bg:focus-visible,.tog:focus-visible{outline:2px solid ${tokens.yellow};outline-offset:3px;}
      .bg:hover{transform:translateY(-1px);}
      .tog{transition:transform .2s cubic-bezier(.22,1,.36,1);}
      .tog:hover{transform:scale(1.08);}
      .nl{text-decoration:none;font-size:.875rem;font-weight:500;padding:6px 11px;border-radius:7px;transition:color .15s;}
      .nl:focus-visible{outline:2px solid ${tokens.yellow};outline-offset:2px;}
      .pil:hover{transform:translateY(-4px);}
      .pil{transition:transform .28s cubic-bezier(.22,1,.36,1);}
      .tab-btn{transition:all .2s cubic-bezier(.22,1,.36,1);cursor:pointer;border:none;background:transparent;}
      .tab-btn:focus-visible{outline:2px solid ${tokens.yellow};outline-offset:3px;}
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
      .p-card{transition:transform .35s cubic-bezier(.22,1,.36,1),box-shadow .35s ease}
      .p-card:hover{transform:translateY(-5px)}
      .p-cta-gold{transition:all .22s cubic-bezier(.22,1,.36,1)}
      .p-cta-gold:hover{background:#FFD860!important;transform:translateY(-1px);box-shadow:0 1px 0 rgba(255,255,255,.2) inset,0 10px 28px rgba(255,200,61,.35)!important}
      .p-cta-gold:active{transform:translateY(0)!important}
      .p-cta-ghost{transition:all .22s cubic-bezier(.22,1,.36,1)}
      .p-cta-ghost:hover{transform:translateY(-1px)}
      .p-cta-ghost:active{transform:translateY(0)!important}
    `}</style>

    {/* Grain overlay */}
    <div aria-hidden="true" style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 400, opacity: theme.grain,
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)'/%3E%3C/svg%3E")`,
      backgroundSize: "256px 256px" }} />

    <a href="#main" className="skip">Skip to main content</a>

    <div style={{ background: theme.bg, color: theme.text, minHeight: "100vh", transition: "background .3s,color .3s" }}>

      {/* ══════════════════ NAV ══════════════════ */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: scrolled ? theme.nav : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        borderBottom: scrolled ? `1px solid ${theme.border}` : "1px solid transparent",
        transition: "all .3s cubic-bezier(.22,1,.36,1)",
      }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", height: 64, gap: "1.5rem" }}>
          <a href="/" aria-label="FleetHive home" style={{ textDecoration: "none", flexShrink: 0, display: "flex", alignItems: "center" }}>
            <Logo isDark={isDark} height={32} showStrapline={true} />
          </a>

          <nav aria-label="Primary" className="hm" style={{ display: "flex", gap: 2, flex: 1 }}>
            {NAV_LINKS.map(link => (
              <a key={link.label} href={link.href} className="nl"
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                style={{ color: theme.muted }}
                onMouseEnter={e => e.currentTarget.style.color = theme.text}
                onMouseLeave={e => e.currentTarget.style.color = theme.muted}>
                {link.label}
              </a>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: "auto" }}>
            <button onClick={() => setIsDark(prev => !prev)} className="tog"
              aria-label={isDark ? "Light mode" : "Dark mode"}
              style={{ width: 34, height: 34, borderRadius: 8, border: `1px solid ${theme.togBdr}`, background: theme.togBg, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: theme.togClr }}>
              <Icon d={isDark ? iconPaths.sun : iconPaths.moon} size={14} strokeWidth={2} />
            </button>

            <a href={URLS.login} className="hm nl" style={{ color: theme.muted, fontSize: ".875rem", fontWeight: 500 }}
              onMouseEnter={e => e.currentTarget.style.color = theme.text}
              onMouseLeave={e => e.currentTarget.style.color = theme.muted}>Log in</a>

            <a href={URLS.onboarding} className="bp hm" style={primaryButton({ padding: "9px 18px", fontSize: ".8125rem" })}>
              Get started free
            </a>

            <button onClick={() => setMenuOpen(prev => !prev)} className="sm tog"
              aria-label={menuOpen ? "Close menu" : "Menu"} aria-expanded={menuOpen}
              style={{ display: "none", width: 36, height: 36, borderRadius: 9, border: `1px solid ${theme.border}`, background: theme.surface, alignItems: "center", justifyContent: "center", cursor: "pointer", color: theme.text }}>
              <Icon d={menuOpen ? iconPaths.x : iconPaths.menu} size={15} strokeWidth={2} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div style={{ background: theme.bg2, borderTop: `1px solid ${theme.border}`, padding: "1rem 1.5rem 1.5rem" }}>
            {NAV_LINKS.map(link => (
              <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                style={{ display: "block", padding: "12px 0", color: theme.text, textDecoration: "none", fontSize: ".9375rem", fontWeight: 500, borderBottom: `1px solid ${theme.border}` }}>
                {link.label}
              </a>
            ))}
            <div style={{ display: "flex", gap: 8, marginTop: "1.25rem" }}>
              <a href={URLS.login} style={{ ...ghostButton(theme), flex: 1, justifyContent: "center", fontSize: ".875rem" }}>Log in</a>
              <a href={URLS.onboarding} className="bp" style={primaryButton({ flex: 2, justifyContent: "center" })} onClick={() => setMenuOpen(false)}>Get started free</a>
            </div>
          </div>
        )}
      </header>

      <main id="main">

        {/* ══════════════════ §1 HERO ══════════════════ */}
        <section aria-label="Hero" style={{
          position: "relative", overflow: "hidden",
          padding: "6.5rem 1.5rem 0",
          background: isDark
            ? "radial-gradient(ellipse 100% 55% at 50% -8%,rgba(255,200,61,0.12) 0%,transparent 55%),#080A0D"
            : "radial-gradient(ellipse 100% 55% at 50% -8%,rgba(214,162,29,0.09) 0%,transparent 55%),#FAF7F2",
        }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: `linear-gradient(${theme.border}55 1px,transparent 1px),linear-gradient(90deg,${theme.border}55 1px,transparent 1px)`,
            backgroundSize: "88px 88px",
            maskImage: "radial-gradient(ellipse 85% 50% at 50% 0%,black,transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 85% 50% at 50% 0%,black,transparent 80%)",
            opacity: .5,
          }} />

          <div className="hero-g" style={{ maxWidth: "72rem", margin: "0 auto", display: "grid", gridTemplateColumns: "58fr 42fr", gap: "4rem", alignItems: "center", position: "relative" }}>

            <div>
              <div className="e1" style={{ marginBottom: "1rem" }}>
                <span style={eyebrow}>For small businesses &amp; households</span>
              </div>

              <h1 className="h1-pull" style={{ fontFamily: "Manrope,sans-serif", lineHeight: 1.0, marginBottom: "1.5rem", marginLeft: "-0.35rem" }}>
                {["Every vehicle.", "Every date."].map(txt => (
                  <span key={txt} className={txt === "Every vehicle." ? "e1" : "e2"} style={{
                    display: "block",
                    fontSize: "clamp(2.875rem,6.2vw,5.25rem)",
                    fontWeight: 800, letterSpacing: "-0.052em",
                    color: theme.text,
                  }}>{txt}</span>
                ))}
                <span className="e3" style={{
                  display: "flex", alignItems: "baseline", gap: "0.28em",
                  fontSize: "clamp(2.875rem,6.2vw,5.25rem)",
                  fontWeight: 800, letterSpacing: "-0.052em",
                  color: tokens.yellow,
                }}>
                  <span>No</span>
                  <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "baseline", height: "1.05em", position: "relative", minWidth: "4.5ch" }}>
                    <span
                      key={tickerIdx}
                      className={tickerOut ? "tick-out" : "tick-in"}
                      style={{ display: "block", whiteSpace: "nowrap", lineHeight: 1.0 }}
                    >
                      {TICKER_WORDS[tickerIdx]}
                    </span>
                  </span>
                </span>
              </h1>

              <p className="e4" style={{ fontSize: "1.125rem", lineHeight: 1.75, color: theme.muted, fontWeight: 450, letterSpacing: "-0.01em", maxWidth: "40rem", marginBottom: "2rem" }}>
                FleetHive keeps your service dates, costs, and records in one place - and connects you to discounted community rates on parts and servicing. Less to remember. Less to spend.
              </p>

              <div className="e5" style={{ display: "flex", flexWrap: "wrap", gap: ".75rem", marginBottom: "1rem" }}>
                <a href={URLS.onboarding} className="bp" style={primaryButton()}>
                  Get started free <Icon d={iconPaths.arrow} size={15} stroke={tokens.yellowText} />
                </a>
                <a href="#product" className="bg" style={ghostButton(theme)}>
                  How it works <Icon d={iconPaths.arrowR} size={14} stroke={theme.text} strokeWidth={2} />
                </a>
              </div>

              <div className="e5" style={{ marginBottom: "2rem" }}>
                <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: ".625rem", fontWeight: 600, color: theme.faint, letterSpacing: ".07em" }}>
                  FREE TO START · NO CREDIT CARD · SETUP IN UNDER 10 MINUTES
                </p>
              </div>

              <div className="e5" style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                <div style={{ display: "flex", flexShrink: 0 }} aria-hidden="true">
                  {HERO_AVATARS.map((av, i) => (
                    <img key={i} src={av.src} alt={av.alt} style={{
                      width: 28, height: 28, borderRadius: "50%",
                      border: `2px solid ${isDark ? "#080A0D" : "#FAF7F2"}`,
                      objectFit: "cover",
                      marginLeft: i > 0 ? -8 : 0,
                      zIndex: 3 - i, position: "relative",
                      flexShrink: 0,
                      display: "block",
                    }} />
                  ))}
                </div>
                <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: ".625rem", fontWeight: 600, color: theme.faint, letterSpacing: ".07em" }}>
                  ELECTRICIANS, PLUMBERS &amp; HOUSEHOLDS ACROSS THE UK
                </p>
              </div>
            </div>

            {/* Hero visual — reminder card */}
            <div className="hero-vis ecard" style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
              <HeroCard isDark={isDark} />
            </div>

          </div>

          {/* Partner logos */}
          <div style={{ maxWidth: "56rem", margin: "0 auto", padding: "4.5rem 0 5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", alignItems: "center", gap: "1.5rem" }}>
              {PARTNER_LOGOS.map(logo => (
                <div key={logo.name} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img
                    src={LOGO_BASE_PATH + (isDark ? logo.dark : logo.light)}
                    alt={logo.name}
                    style={{ height: logo.height, width: "auto", maxWidth: "100%" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ §2 STATS BAR ══════════════════ */}
        <section aria-label="Key outcomes" style={{ background: tokens.yellow, padding: "4.5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div className="stat-g" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0, borderLeft: `1px solid ${tokens.yellowDark}44` }}>
              {STATS.map((s, i) => (
                <div key={i} style={{ padding: "0 2.5rem", borderRight: `1px solid ${tokens.yellowDark}44` }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: ".375rem", marginBottom: ".375rem" }}>
                    <span className="ystat" style={{ fontFamily: "Manrope,sans-serif", fontSize: "3.5rem", fontWeight: 800, letterSpacing: "-0.055em", color: tokens.yellowText, lineHeight: 1 }}>{s.value}</span>
                    {s.unit && <span style={{ fontFamily: "Manrope,sans-serif", fontSize: "1.25rem", fontWeight: 600, color: `${tokens.yellowText}99`, letterSpacing: "-0.02em" }}>{s.unit}</span>}
                  </div>
                  <div style={{ fontFamily: "Manrope,sans-serif", fontSize: ".9375rem", fontWeight: 700, color: tokens.yellowText, letterSpacing: "-0.015em", marginBottom: ".25rem" }}>{s.label}</div>
                  <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: ".625rem", color: `${tokens.yellowText}88`, fontWeight: 500, letterSpacing: ".02em" }}>{s.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ §3 PRODUCT IN ACTION ══════════════════ */}
        <section id="product" aria-labelledby="prod-h" style={{ padding: "7rem 1.5rem", background: theme.bg2 }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem", flexWrap: "wrap", gap: "1rem" }}>
              <div style={{ maxWidth: "44rem" }}>
                <h2 id="prod-h" style={{ ...sectionHeading(theme), marginBottom: ".75rem" }}>What you actually see.</h2>
                <p style={{ fontSize: "1.0625rem", color: theme.muted, lineHeight: 1.72, fontWeight: 450, letterSpacing: "-.01em" }}>
                  Real product. No speculative dashboards. This is what opens when you log in.
                </p>
              </div>
              <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: ".625rem", fontWeight: 600, color: theme.faint, letterSpacing: ".08em", textTransform: "uppercase" }}>How it works</span>
            </div>

            {/* Tab switcher */}
            <div style={{ display: "flex", gap: 2, marginBottom: "2.5rem", background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)", borderRadius: 10, padding: 4, width: "fit-content" }}>
              {PRODUCT_TABS.map((t, i) => (
                <button key={i} className="tab-btn" onClick={() => setActiveTab(i)}
                  style={{
                    padding: "8px 20px", borderRadius: 8,
                    background: activeTab === i ? theme.surface : "transparent",
                    boxShadow: activeTab === i ? (isDark ? "0 1px 4px rgba(0,0,0,0.4)" : "0 1px 4px rgba(0,0,0,0.08)") : "none",
                    color: activeTab === i ? theme.text : theme.muted,
                    fontFamily: "Manrope,sans-serif", fontSize: ".875rem", fontWeight: activeTab === i ? 700 : 500,
                    letterSpacing: "-.01em",
                  }}>
                  {t.label}
                </button>
              ))}
            </div>

            {/* Feature grid */}
            <div className="feat-g" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
              <div>
                <div style={{ marginBottom: "1.75rem" }}>
                  <div style={{ height: 3, background: theme.pil[activeTab], borderRadius: 1.5, width: 40, marginBottom: "1.5rem" }} />
                  <h3 style={{ fontFamily: "Manrope,sans-serif", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.03em", color: theme.text, marginBottom: ".75rem", lineHeight: 1.2 }}>
                    {tab.heading}
                  </h3>
                  <p style={{ fontSize: "1rem", color: theme.muted, lineHeight: 1.75, fontWeight: 450, letterSpacing: "-.01em" }}>
                    {tab.description}
                  </p>
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".625rem" }}>
                  {tab.bullets.map(b => (
                    <li key={b} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: ".625rem", color: theme.pil[activeTab], fontWeight: 600 }}>→</span>
                      <span style={{ fontSize: ".9375rem", color: theme.muted, fontWeight: 450, letterSpacing: "-.005em" }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ animation: "fadeIn .35s ease both" }} key={activeTab}>
                <ActiveMock isDark={isDark} />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════ §4 VALUE PILLARS ══════════════════ */}
        <section aria-labelledby="pil-h" style={{ padding: "7rem 1.5rem", background: theme.bg }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "5rem", flexWrap: "wrap", gap: "1rem" }}>
              <h2 id="pil-h" style={{ ...sectionHeading(theme), maxWidth: "44rem" }}>
                Multiple vehicles create more admin than most people plan for.
              </h2>
              <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: ".625rem", fontWeight: 600, color: theme.faint, letterSpacing: ".08em", textTransform: "uppercase" }}>What you control</span>
            </div>

            <div className="pil-g" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "3rem" }}>
              {VALUE_PILLARS.map((p, i) => (
                <article key={i} className="pil">
                  <div style={{ height: 3, background: theme.pil[i], borderRadius: 1.5, marginBottom: "1.75rem" }} />
                  <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: ".625rem", fontWeight: 600, color: theme.faint, letterSpacing: ".10em", textTransform: "uppercase", marginBottom: "1.25rem" }}>{p.num}</div>
                  <h3 style={{ fontFamily: "Manrope,sans-serif", fontSize: "1.1875rem", fontWeight: 700, letterSpacing: "-0.025em", color: theme.text, marginBottom: ".75rem", lineHeight: 1.25 }}>{p.title}</h3>
                  <p style={{ fontSize: ".9375rem", color: theme.muted, lineHeight: 1.72, marginBottom: "1.5rem", fontWeight: 450 }}>{p.body}</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".5rem" }}>
                    {p.bullets.map(b => (
                      <li key={b} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: ".625rem", color: theme.pil[i], fontWeight: 600 }}>→</span>
                        <span style={{ fontSize: ".875rem", color: theme.muted, fontWeight: 450 }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ §5 SOCIAL PROOF ══════════════════ */}
        <section aria-label="Customer testimonials" style={{ background: theme.inv, padding: "7rem 1.5rem" }}>
          <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
              <div style={{ width: 24, height: 1, background: `${tokens.yellow}66` }} />
              <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: ".625rem", fontWeight: 600, letterSpacing: ".10em", textTransform: "uppercase", color: theme.invMuted }}>What operators say</span>
            </div>

            <blockquote style={{ marginBottom: "4rem" }}>
              <p style={{ fontFamily: "Manrope,sans-serif", fontSize: "clamp(1.5rem,3.5vw,2.25rem)", fontWeight: 500, fontStyle: "italic", lineHeight: 1.5, letterSpacing: "-0.025em", color: theme.invText, marginBottom: "2rem", maxWidth: "56rem" }}>
                "{TESTIMONIALS.primary.quote}"
              </p>
              <footer style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
                <img src={TESTIMONIALS.primary.avatar} alt="" aria-hidden="true" style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: ".6875rem", fontWeight: 600, color: theme.invMuted, letterSpacing: ".06em", textTransform: "uppercase" }}>
                  {TESTIMONIALS.primary.attribution}
                </span>
              </footer>
            </blockquote>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", paddingTop: "4rem", borderTop: `1px solid ${theme.invBdr}` }} className="pil-g">
              {TESTIMONIALS.secondary.map((q, i) => (
                <blockquote key={i}>
                  <p style={{ fontFamily: "Manrope,sans-serif", fontSize: "clamp(1rem,2vw,1.25rem)", fontWeight: 450, fontStyle: "italic", lineHeight: 1.65, letterSpacing: "-0.015em", color: theme.invMuted, marginBottom: "1.25rem" }}>
                    "{q.quote}"
                  </p>
                  <footer style={{ display: "flex", alignItems: "center", gap: ".625rem" }}>
                    <img src={q.avatar} alt="" aria-hidden="true" style={{ width: 30, height: 30, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: ".5625rem", fontWeight: 600, color: theme.invFaint, letterSpacing: ".06em", textTransform: "uppercase" }}>{q.attribution}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ §6 PRICING ══════════════════ */}
        <section id="pricing" aria-labelledby="price-h" style={{ padding: "7rem 1.5rem", background: theme.bg }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 id="price-h" style={{ ...sectionHeading(theme), marginBottom: ".75rem" }}>Simple, transparent pricing.</h2>
              <p style={{ fontSize: "1.0625rem", color: theme.muted, lineHeight: 1.72, fontWeight: 450, letterSpacing: "-.01em", maxWidth: "38rem", margin: "0 auto" }}>
                Start free. No setup fee, no contract, no surprises.
              </p>
            </div>

            <PricingCards isDark={isDark} />
          </div>
        </section>

        {/* ══════════════════ §7 OBJECTION HANDLER ══════════════════ */}
        <section aria-labelledby="obj-h" style={{ padding: "6rem 1.5rem", background: theme.bg2 }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ maxWidth: "44rem", marginBottom: "3.5rem" }}>
              <h2 id="obj-h" style={{ ...sectionHeading(theme), marginBottom: ".75rem" }}>Is FleetHive right for your business?</h2>
              <p style={{ fontSize: "1.0625rem", color: theme.muted, lineHeight: 1.72, fontWeight: 450 }}>
                FleetHive is built for owner-managed trades businesses. Here's how to know if it fits.
              </p>
            </div>

            <div className="obj-g" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.5rem" }}>
                  <div style={{ width: 28, height: 28, borderRadius: 7, background: `${theme.pil[2]}18`, border: `1px solid ${theme.pil[2]}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon d={iconPaths.check} size={13} stroke={theme.pil[2]} strokeWidth={2.5} />
                  </div>
                  <span style={{ fontFamily: "Manrope,sans-serif", fontSize: ".9375rem", fontWeight: 700, color: theme.text, letterSpacing: "-.015em" }}>Good fit</span>
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".75rem" }}>
                  {GOOD_FIT.map(l => (
                    <li key={l} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: ".625rem", color: theme.pil[2], fontWeight: 600, marginTop: 3 }}>→</span>
                      <span style={{ fontSize: ".9375rem", color: theme.muted, lineHeight: 1.65, fontWeight: 450 }}>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.5rem" }}>
                  <div style={{ width: 28, height: 28, borderRadius: 7, background: `${theme.faint}18`, border: `1px solid ${theme.border}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: ".75rem", fontWeight: 700, color: theme.faint }}>–</span>
                  </div>
                  <span style={{ fontFamily: "Manrope,sans-serif", fontSize: ".9375rem", fontWeight: 700, color: theme.muted, letterSpacing: "-.015em" }}>Not the right fit (yet)</span>
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".75rem" }}>
                  {NOT_FIT.map(l => (
                    <li key={l} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: ".625rem", color: theme.faint, fontWeight: 600, marginTop: 3 }}>–</span>
                      <span style={{ fontSize: ".9375rem", color: theme.faint, lineHeight: 1.65, fontWeight: 450 }}>{l}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: "2rem", padding: "1rem", background: theme.surface, border: `1px solid ${theme.border}`, borderRadius: 10 }}>
                  <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: ".5625rem", fontWeight: 600, color: theme.faint, letterSpacing: ".08em", textTransform: "uppercase", marginBottom: ".375rem" }}>Don't need all your history first</p>
                  <p style={{ fontSize: ".875rem", color: theme.muted, lineHeight: 1.6, fontWeight: 450 }}>Start with your registration numbers. Add history and documents over time. You don't need to migrate anything to get value from day one.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════ §8 FINAL CTA ══════════════════ */}
        <section id="start" aria-labelledby="cta-h" style={{ padding: "8rem 1.5rem 9rem", position: "relative", overflow: "hidden", background: theme.bg }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none",
            background: isDark
              ? "radial-gradient(ellipse 70% 55% at 50% 110%,rgba(255,200,61,0.11) 0%,transparent 60%)"
              : "radial-gradient(ellipse 70% 55% at 50% 110%,rgba(214,162,29,0.07) 0%,transparent 60%)" }} />
          <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "50%", height: 1, background: `linear-gradient(90deg,transparent,${tokens.yellow}77,transparent)` }} />

          <div style={{ maxWidth: "50rem", margin: "0 auto", textAlign: "center", position: "relative" }}>
            <div style={{ marginBottom: "1.75rem" }}>
              <span style={eyebrow}>Start today</span>
            </div>
            <h2 id="cta-h" style={{ fontFamily: "Manrope,sans-serif", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 800, letterSpacing: "-0.050em", lineHeight: 1.02, color: theme.text, marginBottom: "1.25rem" }}>
              Your next MOT reminder<br />
              <span style={{ color: tokens.yellow }}>starts now.</span>
            </h2>
            <p style={{ fontSize: "1.0625rem", color: theme.muted, lineHeight: 1.75, maxWidth: "34rem", margin: "0 auto 2.5rem", fontWeight: 450, letterSpacing: "-.01em" }}>
              Add your vehicles. Set your reminders. See what each one is costing. Free for 14 days - no card required.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".875rem", justifyContent: "center", marginBottom: "1.25rem" }}>
              <a href={URLS.onboarding} className="bp" style={primaryButton({ padding: "15px 34px", fontSize: "1rem" })}>
                Get started free <Icon d={iconPaths.arrow} size={16} stroke={tokens.yellowText} />
              </a>
              <button type="button" className="bg" style={{ ...ghostButton(theme, { padding: "15px 34px", fontSize: "1rem" }), cursor: "pointer" }}
                onClick={() => window.Calendly?.initPopupWidget({ url: "https://calendly.com/jules-fiveinaboat/30min?hide_gdpr_banner=1" })}>
                Book a meeting <Icon d={iconPaths.arrowR} size={14} stroke={theme.text} strokeWidth={2} />
              </button>
            </div>
            <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: ".5625rem", fontWeight: 600, color: theme.faint, letterSpacing: ".08em", textTransform: "uppercase" }}>
              14-DAY FREE TRIAL · NO CREDIT CARD · CANCEL ANYTIME
            </p>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer role="contentinfo" style={{ background: theme.bg3, borderTop: `1px solid ${theme.border}`, padding: "2rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            <Logo isDark={isDark} height={18} showStrapline={false} />
            <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: ".5625rem", fontWeight: 500, color: theme.faint, letterSpacing: ".06em", textTransform: "uppercase" }}>© 2025 FleetHive Ltd</span>
          </div>
          <nav aria-label="Footer" style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {FOOTER_LINKS.map(l => (
              <a key={l} href="#" className="fl" style={{ color: theme.faint }}
                onMouseEnter={e => e.currentTarget.style.color = theme.text}
                onMouseLeave={e => e.currentTarget.style.color = theme.faint}>{l}</a>
            ))}
          </nav>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="mob-bar" style={{ display: "none", position: "fixed", bottom: 0, left: 0, right: 0,
        padding: ".875rem 1rem",
        background: isDark ? "rgba(8,10,13,0.96)" : "rgba(250,247,242,0.97)",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        borderTop: `1px solid ${theme.border}`, zIndex: 40 }}>
        <a href={URLS.onboarding} className="bp" style={primaryButton({ display: "flex", justifyContent: "center", width: "100%" })}>
          Get started free <Icon d={iconPaths.arrow} size={15} stroke={tokens.yellowText} />
        </a>
      </div>
    </div>
  </>);
}
