import { useState, useEffect, useRef, useCallback } from "react";
import tokens from "../tokens";
import { primaryButton } from "../styles";
import { Icon, iconPaths } from "../icons.jsx";
import { URLS } from "../data";

function useCountUp(target, duration = 900, delay = 2400) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  useEffect(() => {
    if (!started) return;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target, duration]);
  return value;
}

export default function HeroCard({ isDark }) {
  const t = isDark ? tokens.dark : tokens.light;
  const green = isDark ? "#4FB37F" : "#147A4B";

  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (y - 0.5) * -6, y: (x - 0.5) * 6 });
    setGlowPos({ x: x * 100, y: y * 100 });
  }, []);

  const priceValue = useCountUp(272, 900, 2400);
  const [priceRevealed, setPriceRevealed] = useState(false);
  const [badgePopped, setBadgePopped] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPriceRevealed(true), 2200);
    const t2 = setTimeout(() => setBadgePopped(true), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const ghostCards = [
    { offset: 20, scale: 0.94, blur: 0, delay: "0.12s", z: 2 },
    { offset: 40, scale: 0.88, blur: 0.5, delay: "0s", z: 1 },
  ];

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => { setIsHovering(false); setTilt({ x: 0, y: 0 }); }}
      style={{
        position: "relative", width: "100%", maxWidth: 360,
        paddingBottom: 44,
        perspective: "1000px",
        cursor: "default",
      }}
    >
      {/* Ghost cards */}
      {ghostCards.map((g, i) => {
        const ghostOpacity = isDark ? (i === 0 ? 0.55 : 0.3) : (i === 0 ? 0.6 : 0.38);
        return (
          <div key={i} style={{
            position: "absolute",
            top: g.offset, left: 0, right: 0,
            height: "calc(100% - 44px)",
            background: t.surface,
            border: `1px solid ${t.border}`,
            borderRadius: "1.5rem",
            zIndex: g.z,
            filter: `blur(${g.blur}px)`,
            "--g-opacity": ghostOpacity,
            "--g-scale": g.scale,
            opacity: ghostOpacity,
            animation: `ghostSlideUp 0.75s cubic-bezier(.22,1,.36,1) ${g.delay} both`,
            transition: isHovering
              ? "transform 0.2s cubic-bezier(.22,1,.36,1)"
              : "transform 0.5s cubic-bezier(.22,1,.36,1)",
            transform: isHovering
              ? `scale(${g.scale}) rotateX(${tilt.x * 0.3}deg) rotateY(${tilt.y * 0.3}deg)`
              : `scale(${g.scale})`,
            boxShadow: isDark
              ? `0 ${10 + i * 8}px ${30 + i * 20}px rgba(0,0,0,${0.35 + i * 0.2})`
              : `0 ${6 + i * 5}px ${20 + i * 12}px rgba(18,16,14,${0.07 + i * 0.04})`,
          }} />
        );
      })}

      {/* Main card */}
      <div style={{
        position: "relative", zIndex: 5,
        animation: "mainEntrance 0.9s cubic-bezier(.22,1,.36,1) 0.25s both",
        transition: isHovering
          ? "transform 0.12s cubic-bezier(.22,1,.36,1)"
          : "transform 0.5s cubic-bezier(.22,1,.36,1)",
        transform: isHovering
          ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(8px)`
          : "rotateX(0) rotateY(0) translateZ(0)",
        transformStyle: "preserve-3d",
      }}>
        <div style={{
          background: t.surface,
          border: `1px solid ${t.border}`,
          borderTop: `1px solid ${isDark ? "rgba(255,200,61,0.18)" : "rgba(214,162,29,0.24)"}`,
          borderRadius: "1.5rem",
          padding: "2.25rem",
          position: "relative", overflow: "hidden",
          boxShadow: isDark
            ? "0 40px 80px rgba(0,0,0,0.7), 0 2px 0 rgba(255,255,255,0.06) inset, 0 0 60px rgba(255,200,61,0.05)"
            : "0 24px 60px rgba(18,16,14,0.12), 0 4px 12px rgba(18,16,14,0.06), 0 1px 0 rgba(255,255,255,0.9) inset",
        }}>
          {/* Cursor-following glow */}
          <div aria-hidden="true" style={{
            position: "absolute", inset: 0, pointerEvents: "none", borderRadius: "1.5rem",
            opacity: isHovering ? 1 : 0,
            transition: "opacity 0.4s ease",
            background: isDark
              ? `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(255,200,61,0.07) 0%, transparent 45%)`
              : `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(214,162,29,0.06) 0%, transparent 45%)`,
          }} />

          {/* Header */}
          <div style={{
            display: "flex", alignItems: "center", gap: 8, marginBottom: "1.75rem",
            animation: "slideUp 0.5s cubic-bezier(.22,1,.36,1) 0.55s both",
            position: "relative",
          }}>
            <div style={{ position: "relative", width: 8, height: 8, flexShrink: 0 }}>
              <div style={{
                width: 8, height: 8, borderRadius: "50%", background: tokens.yellow,
                position: "relative", zIndex: 2,
              }} />
              <div className="dot-ring" style={{
                position: "absolute", top: -3, left: -3,
                width: 14, height: 14, borderRadius: "50%",
                border: `1.5px solid ${tokens.yellow}`, opacity: 0,
              }} />
            </div>
            <span style={{
              fontFamily: "'IBM Plex Mono',monospace", fontSize: ".625rem", fontWeight: 600,
              letterSpacing: ".12em", textTransform: "uppercase", color: t.muted, flex: 1,
            }}>Upcoming · Service due</span>
            <span style={{
              fontFamily: "'IBM Plex Mono',monospace", fontSize: ".5625rem", fontWeight: 700,
              letterSpacing: ".06em", textTransform: "uppercase",
              background: isDark ? "rgba(79,179,127,0.15)" : "rgba(20,122,75,0.10)",
              color: green,
              border: `1px solid ${isDark ? "rgba(79,179,127,0.30)" : "rgba(20,122,75,0.22)"}`,
              padding: "2px 7px", borderRadius: 4,
            }}>Community rate</span>
          </div>

          {/* Days */}
          <div style={{
            display: "flex", alignItems: "baseline", gap: ".5rem", marginBottom: "1.25rem",
            animation: "slideUp 0.6s cubic-bezier(.22,1,.36,1) 0.75s both",
          }}>
            <span style={{
              fontFamily: "Manrope,sans-serif", fontSize: "5.5rem", fontWeight: 800,
              letterSpacing: "-0.055em", lineHeight: 1, color: tokens.yellow,
            }}>14</span>
            <span style={{
              fontFamily: "Manrope,sans-serif", fontSize: "1.5rem", fontWeight: 600,
              color: t.muted, letterSpacing: "-0.02em",
            }}>days</span>
          </div>

          {/* Price reveal */}
          <div style={{
            display: "flex", alignItems: "center", gap: 8, marginBottom: "1.25rem",
            flexWrap: "wrap", minHeight: 24,
            animation: "slideUp 0.5s cubic-bezier(.22,1,.36,1) 0.95s both",
          }}>
            <span style={{
              fontFamily: "Manrope,sans-serif", fontSize: ".875rem", fontWeight: 450,
              color: t.muted,
              textDecoration: priceRevealed ? "line-through" : "none",
              opacity: priceRevealed ? 0.45 : 1,
              transition: "all 0.5s ease",
            }}>£340</span>
            <span style={{
              fontFamily: "Manrope,sans-serif", fontSize: ".9375rem", fontWeight: 700, color: green,
              opacity: priceRevealed ? 1 : 0,
              transform: priceRevealed ? "translateX(0)" : "translateX(-10px)",
              transition: "all 0.6s cubic-bezier(.22,1,.36,1)",
            }}>£{priceValue} with FleetHive rate</span>
            <span style={{
              fontFamily: "'IBM Plex Mono',monospace", fontSize: ".5625rem", fontWeight: 700,
              color: green,
              background: isDark ? "rgba(79,179,127,0.12)" : "rgba(20,122,75,0.08)",
              padding: "2px 6px", borderRadius: 3,
              opacity: badgePopped ? 1 : 0,
              transform: badgePopped ? "scale(1)" : "scale(0.5)",
              transition: "all 0.4s cubic-bezier(.34,1.56,.64,1)",
            }}>SAVE 20%</span>
          </div>

          {/* Divider */}
          <div style={{
            height: 1,
            background: `linear-gradient(90deg, transparent, ${t.border}, transparent)`,
            marginBottom: "1.25rem",
          }} />

          {/* Vehicle + Transit image */}
          <div style={{
            marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: 10,
            animation: "slideUp 0.5s cubic-bezier(.22,1,.36,1) 1.15s both",
          }}>
            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: "'IBM Plex Mono',monospace", fontSize: ".875rem", fontWeight: 600,
                color: t.text, letterSpacing: ".04em", marginBottom: 3,
              }}>EK22 XPL</div>
              <div style={{
                fontFamily: "'IBM Plex Mono',monospace", fontSize: ".75rem",
                color: t.muted, letterSpacing: ".02em",
              }}>Ford Transit Connect · 2022</div>
            </div>

            <div style={{
              width: 92, height: 50, flexShrink: 0, position: "relative",
              animation: "transitDrive 0.7s cubic-bezier(.22,1,.36,1) 1.6s both",
            }}>
              <img src="/images/ford-transit.avif" alt="Ford Transit Connect"
                style={{
                  width: "100%", height: "100%", objectFit: "contain",
                  filter: isDark ? "brightness(0.85) contrast(1.1)" : "none",
                  opacity: isDark ? 0.8 : 0.7,
                }} />
              <div aria-hidden="true" style={{
                position: "absolute", bottom: -3, left: "8%", right: "8%", height: 8,
                background: isDark
                  ? "radial-gradient(ellipse, rgba(255,200,61,0.06) 0%, transparent 70%)"
                  : "radial-gradient(ellipse, rgba(0,0,0,0.05) 0%, transparent 70%)",
                borderRadius: "50%",
              }} />
            </div>
          </div>

          {/* CTA */}
          <div style={{ animation: "slideUp 0.5s cubic-bezier(.22,1,.36,1) 1.35s both" }}>
            <a href={URLS.onboarding} className="hero-cta"
              style={primaryButton({
                width: "100%", justifyContent: "center",
                padding: "11px 0", fontSize: ".8125rem", borderRadius: 8,
                textDecoration: "none",
              })}>
              Book service now
              <Icon d={iconPaths.arrow} size={13} stroke={tokens.yellowText} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
