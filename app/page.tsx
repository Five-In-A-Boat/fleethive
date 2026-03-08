'use client';

import { useEffect, useState } from 'react';

const T = {
  light: {
    bg: '#FAF7F2',
    bg2: '#F0EDE6',
    text: '#12100E',
    textDim: '#3D3830',
    muted: '#6B6560',
    faint: '#9C9590',
    border: '#DDD8D0',
    surface: '#FFFFFF',
    nav: 'rgba(250,247,242,0.92)',
    heroRule: '#DDD8D0',
    cardBg: '#FFFFFF',
    cardShadow: '0 2px 0 rgba(255,255,255,0.95) inset, 0 24px 64px rgba(18,16,14,0.10), 0 4px 12px rgba(18,16,14,0.06)',
    mockDot: '#D6A21D',
    mockNum: '#D6A21D',
    mockMeta: '#6B6560',
    mockRule: '#DDD8D0',
    mockSub: '#9C9590',
    togBg: '#FFFFFF',
    togBdr: '#DDD8D0',
    togClr: '#12100E',
    grain: 0.016,
    ghost: { bg: 'rgba(18,16,14,0.04)', bdr: 'rgba(18,16,14,0.12)', hbg: 'rgba(18,16,14,0.08)', hbdr: 'rgba(18,16,14,0.22)' },
    inv: '#12100E',
    invText: '#F5F2EE',
    invMuted: '#7A756E',
    invBdr: '#2A2520',
    pil1: '#FFC83D',
    pil2: '#2F6FED',
    pil3: '#147A4B'
  },
  dark: {
    bg: '#080A0D',
    bg2: '#0D1018',
    text: '#EAE6E0',
    textDim: '#C0BAB2',
    muted: '#6A6560',
    faint: '#3E3A34',
    border: '#1E2028',
    surface: '#111520',
    nav: 'rgba(8,10,13,0.90)',
    heroRule: '#1E2028',
    cardBg: '#131820',
    cardShadow: '-16px -12px 40px rgba(255,200,61,0.04), 0 40px 90px rgba(0,0,0,0.7), 0 2px 0 rgba(255,255,255,0.06) inset',
    mockDot: '#FFC83D',
    mockNum: '#FFC83D',
    mockMeta: '#6A6560',
    mockRule: '#1E2028',
    mockSub: '#3E3A34',
    togBg: '#111520',
    togBdr: '#1E2028',
    togClr: '#EAE6E0',
    grain: 0.022,
    ghost: { bg: 'rgba(255,255,255,0.04)', bdr: 'rgba(255,255,255,0.10)', hbg: 'rgba(255,255,255,0.08)', hbdr: 'rgba(255,255,255,0.20)' },
    inv: '#040507',
    invText: '#EAE6E0',
    invMuted: '#6A6560',
    invBdr: '#1E2028',
    pil1: '#FFC83D',
    pil2: '#7DA6FF',
    pil3: '#4FB37F'
  },
  Y: '#FFC83D',
  Ymid: '#D6A21D',
  Ydark: '#A87800',
  Ytext: '#0A0800'
};

function Ic({ d, s = 16, stroke = 'currentColor', sw = 1.75, fill = 'none' }: { d: string | string[]; s?: number; stroke?: string; sw?: number; fill?: string }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {Array.isArray(d) ? d.map((p, i) => <path key={i} d={p} />) : <path d={d} />}
    </svg>
  );
}

const I = {
  arrow: 'M5 12h14M12 5l7 7-7 7',
  check: 'M20 6L9 17l-5-5',
  menu: ['M3 12h18', 'M3 6h18', 'M3 18h18'],
  x: ['M18 6L6 18', 'M6 6l12 12'],
  sun: ['M12 3v1m0 16v1M4.22 4.22l.7.7m12.16 12.16.7.7M3 12h1m16 0h1M4.22 19.78l.7-.7M18.36 5.64l.7-.7', 'M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z'],
  moon: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z',
  wrench: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'
};

function Logo({ isDark, h = 24 }: { isDark: boolean; h?: number }) {
  return (
    <svg width={h * 4.6} height={h} viewBox="0 0 110 24" fill="none" aria-label="FleetHive">
      <polygon points="12,1 22,7 22,17 12,23 2,17 2,7" fill={T.Y} />
      <polygon points="12,5.5 18,9.5 18,16 12,20 6,16 6,9.5" fill={isDark ? '#080A0D' : '#FFFFFF'} />
      <polygon points="12,9.5 16,12 16,14.5 12,17 8,14.5 8,12" fill={T.Y} />
      <text x="28" y="17.5" fontFamily="Manrope,sans-serif" fontWeight="800" fontSize="14.5" fill={isDark ? '#EAE6E0' : '#12100E'} letterSpacing="-0.045em">
        FleetHive
      </text>
    </svg>
  );
}

function HeroCard({ isDark }: { isDark: boolean }) {
  const t = isDark ? T.dark : T.light;
  return (
    <div
      style={{
        background: t.cardBg,
        borderRadius: '1.5rem',
        border: `1px solid ${t.border}`,
        boxShadow: t.cardShadow,
        padding: '2.25rem',
        width: '100%',
        maxWidth: 340,
        animation: 'cardFloat 8s ease-in-out 1s infinite'
      }}
      role="img"
      aria-label="FleetHive reminder card: MOT due in 14 days for vehicle EK22 XPL"
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '2rem' }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: T.Y, boxShadow: `0 0 0 3px ${T.Y}30`, flexShrink: 0 }} />
        <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '.625rem', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: t.mockMeta }}>Upcoming</span>
      </div>

      <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '.6875rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: t.mockMeta, marginBottom: '.5rem' }}>
        MOT due
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '.5rem', marginBottom: '2rem' }}>
        <span style={{ fontFamily: 'Manrope,sans-serif', fontSize: '5.5rem', fontWeight: 800, letterSpacing: '-0.055em', lineHeight: 1, color: T.Y }}>14</span>
        <span style={{ fontFamily: 'Manrope,sans-serif', fontSize: '1.5rem', fontWeight: 600, color: t.muted, letterSpacing: '-0.02em' }}>days</span>
      </div>

      <div style={{ height: 1, background: t.mockRule, marginBottom: '1.25rem' }} />

      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '.875rem', fontWeight: 600, color: t.text, letterSpacing: '.04em', marginBottom: 4 }}>EK22 XPL</div>
        <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '.75rem', color: t.mockSub, letterSpacing: '.02em' }}>Ford Transit Connect · 2022</div>
      </div>

      <button
        style={{
          width: '100%',
          padding: '10px 0',
          borderRadius: 8,
          background: isDark ? 'rgba(255,200,61,0.10)' : 'rgba(214,162,29,0.09)',
          border: `1px solid ${T.Y}44`,
          color: T.Ymid,
          fontFamily: 'Manrope,sans-serif',
          fontSize: '.8125rem',
          fontWeight: 700,
          letterSpacing: '-.01em',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          transition: 'all .2s cubic-bezier(.22,1,.36,1)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = `${T.Y}18`;
          e.currentTarget.style.borderColor = `${T.Y}66`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = isDark ? 'rgba(255,200,61,0.10)' : 'rgba(214,162,29,0.09)';
          e.currentTarget.style.borderColor = `${T.Y}44`;
        }}
      >
        Book service <Ic d={I.arrow} s={13} stroke={T.Ymid} sw={2.5} />
      </button>
    </div>
  );
}

export default function FleetHive() {
  const [isDark, setIsDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mq.matches);
    const h = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mq.addEventListener('change', h);
    return () => mq.removeEventListener('change', h);
  }, []);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 14);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const t = isDark ? T.dark : T.light;

  const PrimaryBtn = (extra = {}) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: T.Y,
    color: T.Ytext,
    fontFamily: 'Manrope,sans-serif',
    fontSize: '.9375rem',
    fontWeight: 800,
    letterSpacing: '-.02em',
    padding: '13px 26px',
    borderRadius: 9,
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    boxShadow: '0 1px 0 rgba(255,255,255,0.20) inset',
    transition: 'all .22s cubic-bezier(.22,1,.36,1)',
    ...extra
  });

  const GhostBtn = (extra = {}) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: t.ghost.bg,
    color: t.text,
    fontFamily: 'Manrope,sans-serif',
    fontSize: '.9375rem',
    fontWeight: 600,
    letterSpacing: '-.01em',
    padding: '13px 26px',
    borderRadius: 9,
    border: `1px solid ${t.ghost.bdr}`,
    cursor: 'pointer',
    textDecoration: 'none',
    backdropFilter: 'blur(8px)',
    transition: 'all .22s cubic-bezier(.22,1,.36,1)',
    ...extra
  });

  const Eyebrow = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    fontFamily: "'IBM Plex Mono',monospace",
    fontSize: '.625rem',
    fontWeight: 600,
    letterSpacing: '.10em',
    textTransform: 'uppercase',
    color: T.Ymid,
    background: 'rgba(214,162,29,0.10)',
    border: '1px solid rgba(214,162,29,0.22)',
    padding: '3px 10px',
    borderRadius: 999
  } as const;

  return (
    <>
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;450;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
      *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
      html { scroll-behavior:smooth; }
      body { font-family:Manrope,sans-serif; -webkit-font-smoothing:antialiased; overflow-x:hidden; }

      .skip-l { position:absolute;top:-100%;left:0;background:${T.Y};color:${T.Ytext};padding:8px 18px;font-weight:800;border-radius:0 0 8px 0;z-index:9999;text-decoration:none; }
      .skip-l:focus { top:0; }
      @keyframes fadeUp   { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
      @keyframes fadeIn   { from{opacity:0} to{opacity:1} }
      @keyframes cardFloat{ 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
      .e1{animation:fadeUp .7s cubic-bezier(.22,1,.36,1) .04s both}
      .e2{animation:fadeUp .7s cubic-bezier(.22,1,.36,1) .16s both}
      .e3{animation:fadeUp .7s cubic-bezier(.22,1,.36,1) .28s both}
      .e4{animation:fadeUp .7s cubic-bezier(.22,1,.36,1) .40s both}
      .e5{animation:fadeUp .7s cubic-bezier(.22,1,.36,1) .52s both}
      .ecard{animation:fadeIn .9s cubic-bezier(.22,1,.36,1) .2s both}
      .bp:hover{background:#FFD860!important;transform:translateY(-2px);box-shadow:0 1px 0 rgba(255,255,255,.20) inset,0 12px 40px rgba(255,200,61,.50)!important;}
      .bp:active{transform:translateY(0)!important;}
      .bp:focus-visible{outline:2px solid ${T.Y};outline-offset:3px;}
      .bg:hover{transform:translateY(-1px);}
      .bg:focus-visible{outline:2px solid ${T.Y};outline-offset:3px;}
      .tog:hover{transform:scale(1.08);}
      .tog{transition:transform .2s cubic-bezier(.22,1,.36,1);}
      .tog:focus-visible{outline:2px solid ${T.Y};outline-offset:3px;}
      .nl{text-decoration:none;font-size:.875rem;font-weight:500;padding:6px 11px;border-radius:7px;transition:color .15s;}
      .nl:focus-visible{outline:2px solid ${T.Y};outline-offset:2px;}
      .pil-wrap{transition:transform .28s cubic-bezier(.22,1,.36,1);}
      .pil-wrap:hover{transform:translateY(-4px);}
      .fl{text-decoration:none;font-size:.8125rem;font-weight:450;transition:color .15s;}
      @media(max-width:768px){
        .hm{display:none!important;}.sm{display:flex!important;}.hero-g{grid-template-columns:1fr!important;}.hero-vis{order:-1;align-items:center;}.pil-g{grid-template-columns:1fr!important;}.hiw-g{grid-template-columns:1fr!important;}.stat-g{grid-template-columns:1fr 1fr!important;}.mob-bar{display:block!important;}body{padding-bottom:72px;}.h1-bleed{margin-left:0!important;}.yellow-stat{font-size:2.75rem!important;}
      }
      @media(min-width:769px){.hiw-line{display:block!important;}}
      @media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.001ms!important;transition-duration:.001ms!important;}}
    `}</style>

      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 400,
          opacity: t.grain,
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'256\' height=\'256\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'256\' height=\'256\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundSize: '256px 256px'
        }}
      />

      <a href="#main" className="skip-l">
        Skip to main content
      </a>

      <div style={{ background: t.bg, color: t.text, minHeight: '100vh', transition: 'background .3s,color .3s' }}>
        <header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            background: scrolled ? t.nav : 'transparent',
            backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
            borderBottom: scrolled ? `1px solid ${t.border}` : '1px solid transparent',
            transition: 'all .3s cubic-bezier(.22,1,.36,1)'
          }}
        >
          <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', height: 64, gap: '1.5rem' }}>
            <a href="/" aria-label="FleetHive home" style={{ textDecoration: 'none', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
              <Logo isDark={isDark} h={22} />
            </a>
            <nav aria-label="Primary" className="hm" style={{ display: 'flex', gap: 2, flex: 1 }}>
              {['For trades businesses', 'How it works', "Who it's for"].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="nl"
                  style={{ color: t.muted }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = t.text)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = t.muted)}
                >
                  {l}
                </a>
              ))}
            </nav>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto' }}>
              <button
                onClick={() => setIsDark((p) => !p)}
                className="tog"
                aria-label={isDark ? 'Light mode' : 'Dark mode'}
                style={{ width: 36, height: 36, borderRadius: 9, border: `1px solid ${t.togBdr}`, background: t.togBg, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: t.togClr }}
              >
                <Ic d={isDark ? I.sun : I.moon} s={14} sw={2} />
              </button>
              <a href="#start" className="bp hm" style={PrimaryBtn({ padding: '9px 18px', fontSize: '.8125rem' })}>
                Book a walkthrough
              </a>
              <button
                onClick={() => setMenu((p) => !p)}
                className="sm tog"
                aria-label={menu ? 'Close menu' : 'Menu'}
                aria-expanded={menu}
                style={{ display: 'none', width: 36, height: 36, borderRadius: 9, border: `1px solid ${t.border}`, background: t.surface, alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: t.text }}
              >
                <Ic d={menu ? I.x : I.menu} s={15} sw={2} />
              </button>
            </div>
          </div>
          {menu && (
            <div style={{ background: t.bg2, borderTop: `1px solid ${t.border}`, padding: '1rem 1.5rem 1.5rem' }}>
              {['For trades businesses', 'How it works', "Who it's for"].map((l) => (
                <a key={l} href="#" onClick={() => setMenu(false)} style={{ display: 'block', padding: '12px 0', color: t.text, textDecoration: 'none', fontSize: '.9375rem', fontWeight: 500, borderBottom: `1px solid ${t.border}` }}>
                  {l}
                </a>
              ))}
              <a href="#start" className="bp" style={PrimaryBtn({ display: 'flex', justifyContent: 'center', marginTop: '1.25rem' })} onClick={() => setMenu(false)}>
                Book a walkthrough <Ic d={I.arrow} s={15} stroke={T.Ytext} />
              </a>
            </div>
          )}
        </header>

        <main id="main">
          <section
            aria-label="Hero"
            style={{
              position: 'relative',
              overflow: 'hidden',
              padding: '7rem 1.5rem 8rem',
              background: isDark ? 'radial-gradient(ellipse 100% 60% at 50% -10%, rgba(255,200,61,0.11) 0%, transparent 55%), #080A0D' : 'radial-gradient(ellipse 100% 60% at 50% -10%, rgba(214,162,29,0.08) 0%, transparent 55%), #FAF7F2'
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                backgroundImage: `linear-gradient(${t.heroRule}44 1px,transparent 1px),linear-gradient(90deg,${t.heroRule}44 1px,transparent 1px)`,
                backgroundSize: '88px 88px',
                maskImage: 'radial-gradient(ellipse 85% 55% at 50% 0%,black,transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse 85% 55% at 50% 0%,black,transparent 80%)',
                opacity: 0.55
              }}
            />

            <div className="hero-g" style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '58fr 42fr', gap: '4rem', alignItems: 'center', position: 'relative' }}>
              <div>
                <div className="e1" style={{ marginBottom: '1.5rem' }}>
                  <span style={Eyebrow}>For trades businesses</span>
                </div>
                <h1 className="h1-bleed" style={{ fontFamily: 'Manrope,sans-serif', lineHeight: 1.0, marginBottom: '1.75rem', marginLeft: '-0.375rem' }}>
                  {[
                    { cls: 'e1', t: 'Stay on top of', gold: false },
                    { cls: 'e2', t: 'the vehicles you', gold: false },
                    { cls: 'e3', t: 'rely on.', gold: true }
                  ].map(({ cls, t: txt, gold }) => (
                    <span key={txt} className={cls} style={{ display: 'block', fontSize: 'clamp(3rem,6.5vw,5.5rem)', fontWeight: 800, letterSpacing: '-0.05em', ...(gold ? { color: T.Y } : { color: t.text }) }}>
                      {txt}
                    </span>
                  ))}
                </h1>
                <p className="e4" style={{ fontSize: '1.125rem', lineHeight: 1.75, color: t.muted, fontWeight: 450, letterSpacing: '-0.01em', maxWidth: '40rem', marginBottom: '2.25rem' }}>
                  FleetHive keeps maintenance dates, reminders, records, and running costs under control — so they stop living in memory, inboxes, and scattered spreadsheets.
                </p>
                <div className="e5" style={{ display: 'flex', flexWrap: 'wrap', gap: '.75rem', marginBottom: '2.75rem' }}>
                  <a href="#start" className="bp" style={PrimaryBtn()}>
                    For trades businesses <Ic d={I.arrow} s={15} stroke={T.Ytext} />
                  </a>
                  <a href="#how" className="bg" style={GhostBtn()}>
                    See how it works
                  </a>
                </div>
                <div className="e5">
                  <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '.6875rem', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: t.faint }}>
                    Trusted by UK trades businesses to keep their vans on the road
                  </p>
                </div>
              </div>
              <div className="hero-vis ecard" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '2rem' }}>
                <HeroCard isDark={isDark} />
              </div>
            </div>
          </section>

          <section aria-label="Key facts" style={{ background: T.Y, padding: '5rem 1.5rem' }}>
            <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
              <div className="stat-g" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0, borderLeft: `1px solid ${T.Ydark}44` }}>
                {[
                  { val: '< 5 min', lbl: 'to add any vehicle', detail: 'Start knowing before you finish your coffee' },
                  { val: '3 → 1', lbl: 'inboxes to one clear view', detail: 'Records, reminders, and costs in a single place' },
                  { val: 'Zero', lbl: 'vans missed with a reminder', detail: 'Because the date reaches you before it\'s a problem' }
                ].map((s, i) => (
                  <div key={i} style={{ padding: '0 2.5rem', borderRight: `1px solid ${T.Ydark}44` }}>
                    <div className="yellow-stat" style={{ fontFamily: 'Manrope,sans-serif', fontSize: '3.75rem', fontWeight: 800, letterSpacing: '-0.055em', color: T.Ytext, lineHeight: 1, marginBottom: '.5rem' }}>{s.val}</div>
                    <div style={{ fontFamily: 'Manrope,sans-serif', fontSize: '1rem', fontWeight: 700, color: T.Ytext, letterSpacing: '-0.015em', marginBottom: '.375rem' }}>{s.lbl}</div>
                    <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '.6875rem', color: `${T.Ytext}99`, fontWeight: 500, letterSpacing: '.02em' }}>{s.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section aria-labelledby="pil-h" style={{ padding: '7rem 1.5rem', background: t.bg }}>
            <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ maxWidth: '44rem' }}>
                  <h2 id="pil-h" style={{ fontFamily: 'Manrope,sans-serif', fontSize: 'clamp(1.875rem,3vw,2.625rem)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.1, color: t.text }}>
                    Multiple vehicles create more admin than most people plan for.
                  </h2>
                </div>
                <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '.6875rem', fontWeight: 600, color: t.faint, letterSpacing: '.08em', textTransform: 'uppercase' }}>What you control</p>
              </div>
              <div className="pil-g" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '3rem' }}>
                {[
                  {
                    accent: t.pil1,
                    num: '01',
                    title: 'Service and MOT dates',
                    body: 'Know what\'s due when across every van. Reminders reach you before a date becomes a problem — not after it already has.',
                    bullets: ['MOT and service reminders', 'Insurance and tax dates', 'Configurable lead times']
                  },
                  {
                    accent: t.pil2,
                    num: '02',
                    title: 'Running costs, per vehicle',
                    body: 'See what each van is actually costing. Compare month to month. Make supplier decisions with real numbers instead of guesswork.',
                    bullets: ['Cost breakdown per vehicle', 'Invoice and service history', 'Month-on-month comparison']
                  },
                  {
                    accent: t.pil3,
                    num: '03',
                    title: 'Records in one place',
                    body: 'Service records, invoices, and documents stay with the vehicle — not in inboxes, memory, or folders no one can find.',
                    bullets: ['Full service history', 'Invoice and document store', 'Accessible when you need it']
                  }
                ].map((p, i) => (
                  <article key={i} className="pil-wrap">
                    <div style={{ height: 3, background: p.accent, borderRadius: 1.5, marginBottom: '1.75rem' }} />
                    <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '.625rem', fontWeight: 600, color: t.faint, letterSpacing: '.10em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>{p.num}</div>
                    <h3 style={{ fontFamily: 'Manrope,sans-serif', fontSize: '1.1875rem', fontWeight: 700, letterSpacing: '-0.025em', color: t.text, marginBottom: '.75rem', lineHeight: 1.25 }}>{p.title}</h3>
                    <p style={{ fontSize: '.9375rem', color: t.muted, lineHeight: 1.72, marginBottom: '1.5rem', fontWeight: 450, letterSpacing: '-.005em' }}>{p.body}</p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                      {p.bullets.map((b) => (
                        <li key={b} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '.625rem', color: p.accent, fontWeight: 600 }}>→</span>
                          <span style={{ fontSize: '.875rem', color: t.muted, fontWeight: 450, letterSpacing: '-.005em' }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="how" aria-labelledby="hiw-h" style={{ padding: '7rem 1.5rem', background: t.bg2 }}>
            <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
              <div style={{ marginBottom: '5rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <h2 id="hiw-h" style={{ fontFamily: 'Manrope,sans-serif', fontSize: 'clamp(1.875rem,3vw,2.625rem)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.1, color: t.text, maxWidth: '36rem' }}>
                  Three steps to clearer vehicle control.
                </h2>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '.6875rem', fontWeight: 600, color: t.faint, letterSpacing: '.08em', textTransform: 'uppercase' }}>How it works</span>
              </div>

              <div className="hiw-g" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '3rem', position: 'relative' }}>
                <div className="hiw-line" aria-hidden="true" style={{ display: 'none', position: 'absolute', top: '.6rem', left: 'calc(16.66% + 1rem)', right: 'calc(16.66% + 1rem)', height: 1, background: `linear-gradient(90deg,${t.border},${T.Y}50,${t.border})` }} />
                {[
                  { title: 'Add your vehicles', body: 'Registration numbers and current service state. No complex migration — start with what you know now.', note: '~5 min per vehicle' },
                  { title: 'Set your reminders', body: 'MOT dates, service intervals, insurance, and tax — configured to match how you actually work.', note: 'Configurable per type' },
                  { title: 'Stay ahead', body: 'One view across every van. What\'s due, what each vehicle costs, and where all the records are.', note: 'Nothing in memory or email' }
                ].map((s, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.75rem' }}>
                      <div style={{ width: 24, height: 24, borderRadius: '50%', border: `1px solid ${i === 0 ? `${T.Y}66` : t.border}`, background: i === 0 ? (isDark ? 'rgba(255,200,61,0.10)' : 'rgba(255,200,61,0.12)') : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                        <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '.5625rem', fontWeight: 600, color: i === 0 ? T.Ymid : t.faint, letterSpacing: '.04em' }}>0{i + 1}</span>
                      </div>
                    </div>
                    <h3 style={{ fontFamily: 'Manrope,sans-serif', fontSize: '1.375rem', fontWeight: 700, letterSpacing: '-0.03em', color: t.text, marginBottom: '.75rem', lineHeight: 1.2 }}>{s.title}</h3>
                    <p style={{ fontSize: '.9375rem', color: t.muted, lineHeight: 1.72, marginBottom: '.875rem', fontWeight: 450, letterSpacing: '-.005em' }}>{s.body}</p>
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '.625rem', fontWeight: 600, color: T.Ymid, letterSpacing: '.08em', textTransform: 'uppercase' }}>→ {s.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section aria-label="Customer testimonial" style={{ background: t.inv, padding: '7rem 1.5rem' }}>
            <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                <div style={{ width: 24, height: 1, background: `${T.Y}66` }} />
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '.625rem', fontWeight: 600, letterSpacing: '.10em', textTransform: 'uppercase', color: isDark ? T.dark.faint : T.light.invMuted }}>What operators say</span>
              </div>
              <blockquote>
                <p style={{ fontFamily: 'Manrope,sans-serif', fontSize: 'clamp(1.5rem,3.5vw,2.25rem)', fontWeight: 500, fontStyle: 'italic', lineHeight: 1.5, letterSpacing: '-0.025em', color: t.invText, marginBottom: '2.5rem', maxWidth: '58rem' }}>
                  "Knowing exactly what each van costs per month changed how I look at replacing the older ones. I had no idea there was that much difference."
                </p>
                <footer>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '.6875rem', fontWeight: 600, color: t.invMuted, letterSpacing: '.06em', textTransform: 'uppercase' }}>— S. Barrett, Director · Plumbing business · 4 vans</span>
                </footer>
              </blockquote>
              <div style={{ marginTop: '4rem', paddingTop: '4rem', borderTop: `1px solid ${t.invBdr}` }}>
                <blockquote>
                  <p style={{ fontFamily: 'Manrope,sans-serif', fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 500, fontStyle: 'italic', lineHeight: 1.6, letterSpacing: '-0.02em', color: t.invMuted, marginBottom: '1.5rem', maxWidth: '48rem' }}>
                    "We had MOT reminders going to three different inboxes and still nearly missed one. FleetHive fixed that inside a week."
                  </p>
                  <footer>
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '.6875rem', fontWeight: 600, color: isDark ? '#2A2520' : '#3A3530', letterSpacing: '.06em', textTransform: 'uppercase' }}>— J. Mitchell, Owner · Electrical contractor · 6 vans</span>
                  </footer>
                </blockquote>
              </div>
            </div>
          </section>

          <section id="start" aria-labelledby="cta-h" style={{ padding: '8rem 1.5rem 9rem', position: 'relative', overflow: 'hidden', background: t.bg }}>
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: isDark ? 'radial-gradient(ellipse 70% 55% at 50% 110%,rgba(255,200,61,0.10) 0%,transparent 60%)' : 'radial-gradient(ellipse 70% 55% at 50% 110%,rgba(214,162,29,0.07) 0%,transparent 60%)' }} />
            <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '50%', height: 1, background: `linear-gradient(90deg,transparent,${T.Y}77,transparent)` }} />
            <div style={{ maxWidth: '50rem', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
              <div style={{ marginBottom: '1.75rem' }}>
                <span style={Eyebrow}>Start here</span>
              </div>
              <h2 id="cta-h" style={{ fontFamily: 'Manrope,sans-serif', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 800, letterSpacing: '-0.050em', lineHeight: 1.02, color: t.text, marginBottom: '1.25rem' }}>
                Book your FleetHive
                <br />
                <span style={{ color: T.Y }}>walkthrough.</span>
              </h2>
              <p style={{ fontSize: '1.0625rem', color: t.muted, lineHeight: 1.75, maxWidth: '34rem', margin: '0 auto 2.75rem', fontWeight: 450, letterSpacing: '-.01em' }}>
                Show us your setup, see the live workflow that fits your vehicles, and understand what the next step looks like before committing to anything further.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.875rem', justifyContent: 'center', marginBottom: '3.5rem' }}>
                <a href="#" className="bp" style={PrimaryBtn({ padding: '15px 34px', fontSize: '1rem' })}>
                  Book your walkthrough <Ic d={I.arrow} s={16} stroke={T.Ytext} />
                </a>
                <a href="#" className="bg" style={GhostBtn({ padding: '15px 34px', fontSize: '1rem' })}>
                  Contact support
                </a>
              </div>
              <div style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: '1.375rem', padding: '2rem', textAlign: 'left' }}>
                <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '.625rem', fontWeight: 600, color: t.faint, letterSpacing: '.10em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>What happens next</p>
                <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
                  {[
                    'You share a few details about your vehicles and current setup',
                    'FleetHive shows the live workflow most relevant to your situation',
                    'You see the next stage clearly — assisted setup or onboarding start'
                  ].map((step, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <span
                        aria-hidden="true"
                        style={{
                          flexShrink: 0,
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          border: `1px solid ${T.Y}44`,
                          background: `rgba(255,200,61,${isDark ? 0.08 : 0.10})`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: "'IBM Plex Mono',monospace",
                          fontSize: '.5625rem',
                          fontWeight: 600,
                          color: T.Ymid,
                          marginTop: 2,
                          letterSpacing: '.04em'
                        }}
                      >
                        {i + 1}
                      </span>
                      <span style={{ fontSize: '.9375rem', color: t.muted, lineHeight: 1.65, fontWeight: 450, letterSpacing: '-.005em' }}>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>
        </main>

        <footer role="contentinfo" style={{ background: t.bg2, borderTop: `1px solid ${t.border}`, padding: '1.75rem 1.5rem' }}>
          <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <Logo isDark={isDark} h={18} />
              <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '.625rem', fontWeight: 500, color: t.faint, letterSpacing: '.06em' }}>© 2025 FLEETHIVE LTD</span>
            </div>
            <nav aria-label="Footer" style={{ display: 'flex', gap: '1.5rem' }}>
              {['Privacy', 'Terms', 'Contact'].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="fl"
                  style={{ color: t.faint }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = t.text)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = t.faint)}
                >
                  {l}
                </a>
              ))}
            </nav>
          </div>
        </footer>

        <div className="mob-bar" style={{ display: 'none', position: 'fixed', bottom: 0, left: 0, right: 0, padding: '.875rem 1rem', background: isDark ? 'rgba(8,10,13,0.95)' : 'rgba(250,247,242,0.96)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderTop: `1px solid ${t.border}`, zIndex: 40 }}>
          <a href="#start" className="bp" style={PrimaryBtn({ display: 'flex', justifyContent: 'center', width: '100%' })}>
            Book your walkthrough <Ic d={I.arrow} s={15} stroke={T.Ytext} />
          </a>
        </div>
      </div>
    </>
  );
}
