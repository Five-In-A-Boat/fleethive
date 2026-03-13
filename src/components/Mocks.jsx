import tokens from "../tokens";
import MockChrome from "./MockChrome";

const goldLine = <div style={{ height: 1, background: `linear-gradient(90deg,transparent,${tokens.yellow}55,transparent)` }} />;

/* ── Reminders Mock ── */
export const MockReminder = ({ isDark }) => {
  const theme = isDark ? tokens.dark : tokens.light;
  const items = [
    { reg: "EK22 XPL", type: "Ford Transit",       label: "MOT due",     days: "14", accent: "#FFC83D",                              urgent: true },
    { reg: "LN71 ARW", type: "Mercedes Sprinter",   label: "Service due", days: "31", accent: isDark ? "#7DA6FF" : "#2F6FED",         urgent: false },
    { reg: "BX19 TKM", type: "VW Crafter",          label: "Insurance",   days: "58", accent: isDark ? "#4FB37F" : "#147A4B",         urgent: false },
  ];
  return (
    <div style={{ background: theme.mockBg, border: `1px solid ${theme.mockBdr}`, borderRadius: "1.25rem", overflow: "hidden", boxShadow: theme.cardSh }}
      role="img" aria-label="FleetHive reminders view showing MOT and service dates across 3 vehicles">
      <MockChrome theme={theme} isDark={isDark} url="app.fleethive.ai/reminders" />
      <div style={{ padding: "12px 14px 6px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "Manrope,sans-serif", fontWeight: 700, fontSize: 12, color: theme.text, letterSpacing: "-0.02em" }}>Upcoming dates</span>
        <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 9, color: tokens.yellowMid, background: theme.mockBadge, padding: "2px 8px", borderRadius: 4, fontWeight: 600, letterSpacing: "0.04em" }}>3 ACTIVE</span>
      </div>
      <div style={{ padding: "6px 12px 14px", display: "flex", flexDirection: "column", gap: 6 }}>
        {items.map((r, i) => (
          <div key={i} style={{ background: isDark ? `${r.accent}0C` : `${r.accent}0E`, border: `1px solid ${r.accent}22`, borderRadius: "0.75rem", padding: "10px 12px", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: `${r.accent}18`, border: `1px solid ${r.accent}28`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontFamily: "Manrope,sans-serif", fontSize: 13, fontWeight: 800, color: r.accent, letterSpacing: "-0.03em" }}>{r.days}</span>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 9, color: theme.mockMeta, letterSpacing: "0.04em", marginBottom: 2 }}>{r.label.toUpperCase()}</div>
              <div style={{ fontFamily: "Manrope,sans-serif", fontSize: 12.5, fontWeight: 700, color: theme.text, letterSpacing: "-0.02em" }}>{r.reg}</div>
              <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 9, color: theme.mockSub, marginTop: 1 }}>{r.type}</div>
            </div>
            {r.urgent && <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 8.5, fontWeight: 600, color: tokens.yellowMid, background: theme.mockBadge, padding: "2px 6px", borderRadius: 3, letterSpacing: "0.04em" }}>BOOK NOW</span>}
          </div>
        ))}
      </div>
      {goldLine}
    </div>
  );
};

/* ── Costs Mock ── */
export const MockCosts = ({ isDark }) => {
  const theme = isDark ? tokens.dark : tokens.light;
  const green = isDark ? "#4FB37F" : "#147A4B";
  const red = isDark ? "#F97066" : "#B42318";
  const vans = [
    { reg: "EK22 XPL", cost: "£482", prev: "£610", delta: "-21%", good: true },
    { reg: "LN71 ARW", cost: "£718", prev: "£695", delta: "+3%",  good: false },
    { reg: "BX19 TKM", cost: "£390", prev: "£390", delta: "-",    good: null },
    { reg: "YP68 MWA", cost: "£250", prev: "£320", delta: "-22%", good: true },
  ];
  return (
    <div style={{ background: theme.mockBg, border: `1px solid ${theme.mockBdr}`, borderRadius: "1.25rem", overflow: "hidden", boxShadow: theme.cardSh }}
      role="img" aria-label="FleetHive cost view showing monthly spend per vehicle">
      <MockChrome theme={theme} isDark={isDark} url="app.fleethive.ai/costs" />
      <div style={{ padding: "12px 14px 8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "Manrope,sans-serif", fontWeight: 700, fontSize: 12, color: theme.text, letterSpacing: "-0.02em" }}>Monthly spend</span>
        <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 9, color: green, fontWeight: 700 }}>Total: £1,840</span>
      </div>
      <div style={{ padding: "4px 12px 12px", display: "flex", flexDirection: "column", gap: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 60px 60px 48px", gap: 8, padding: "4px 8px", marginBottom: 2 }}>
          {["Vehicle", "This month", "Last month", "Change"].map(h => (
            <span key={h} style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 8.5, color: theme.mockSub, letterSpacing: "0.04em", textTransform: "uppercase" }}>{h}</span>
          ))}
        </div>
        {vans.map((v, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 60px 60px 48px", gap: 8, padding: "8px", background: i % 2 === 0 ? (isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.015)") : "transparent", borderRadius: 6, alignItems: "center" }}>
            <div>
              <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, fontWeight: 600, color: theme.text, letterSpacing: "0.02em" }}>{v.reg}</div>
            </div>
            <span style={{ fontFamily: "Manrope,sans-serif", fontSize: 12, fontWeight: 700, color: theme.text, letterSpacing: "-0.02em" }}>{v.cost}</span>
            <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 9.5, color: theme.mockMeta }}>{v.prev}</span>
            <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 9.5, fontWeight: 600, color: v.good === true ? green : v.good === false ? red : theme.mockMeta }}>{v.delta}</span>
          </div>
        ))}
      </div>
      {goldLine}
    </div>
  );
};

/* ── Records Mock ── */
export const MockRecords = ({ isDark }) => {
  const theme = isDark ? tokens.dark : tokens.light;
  const docs = [
    { name: "Full service",     date: "14 Mar 2025", garage: "Kwik Fit Bristol",     type: "SERVICE",   amt: "£340" },
    { name: "MOT pass",         date: "14 Mar 2025", garage: "Kwik Fit Bristol",     type: "MOT",       amt: "£55" },
    { name: "Front brake pads", date: "02 Jan 2025", garage: "ATS Euromaster",       type: "REPAIR",    amt: "£180" },
    { name: "Annual insurance", date: "08 Oct 2024", garage: "Direct Line Business", type: "INSURANCE", amt: "£1,240" },
  ];
  const typeColors = {
    SERVICE: tokens.yellowMid,
    MOT: isDark ? "#7DA6FF" : "#2F6FED",
    REPAIR: isDark ? "#F0A44B" : "#A55300",
    INSURANCE: isDark ? "#4FB37F" : "#147A4B",
  };
  return (
    <div style={{ background: theme.mockBg, border: `1px solid ${theme.mockBdr}`, borderRadius: "1.25rem", overflow: "hidden", boxShadow: theme.cardSh }}
      role="img" aria-label="FleetHive records view showing service history for vehicle EK22 XPL">
      <MockChrome theme={theme} isDark={isDark} url="app.fleethive.ai/records/EK22XPL" />
      <div style={{ padding: "12px 14px 8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <span style={{ fontFamily: "Manrope,sans-serif", fontWeight: 700, fontSize: 12, color: theme.text, letterSpacing: "-0.02em" }}>EK22 XPL</span>
          <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 9, color: theme.mockMeta, marginLeft: 8 }}>Ford Transit Connect · 2022</span>
        </div>
      </div>
      <div style={{ padding: "4px 12px 12px", display: "flex", flexDirection: "column", gap: 1 }}>
        {docs.map((d, i) => {
          const color = typeColors[d.type] || tokens.yellowMid;
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px", background: i % 2 === 0 ? (isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.015)") : "transparent", borderRadius: 6 }}>
              <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 8, fontWeight: 600, color, background: `${color}18`, border: `1px solid ${color}30`, padding: "2px 5px", borderRadius: 3, flexShrink: 0, letterSpacing: "0.04em" }}>{d.type}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "Manrope,sans-serif", fontSize: 11.5, fontWeight: 600, color: theme.text, letterSpacing: "-0.01em" }}>{d.name}</div>
                <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 8.5, color: theme.mockSub }}>{d.garage}</div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{ fontFamily: "Manrope,sans-serif", fontSize: 11.5, fontWeight: 700, color: theme.text }}>{d.amt}</div>
                <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 8, color: theme.mockSub }}>{d.date}</div>
              </div>
            </div>
          );
        })}
      </div>
      {goldLine}
    </div>
  );
};
