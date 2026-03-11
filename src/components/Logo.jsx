import tokens from "../tokens";

/**
 * FleetHive Triple Cell icon — three hexagons in honeycomb cluster.
 * Top hex is primary (full opacity), bottom two are supporting (reduced opacity).
 * Connecting bridges between cells for "hive" cohesion.
 */
function hexPath(cx, cy, r) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    pts.push(`${(cx + r * Math.cos(angle)).toFixed(2)},${(cy + r * Math.sin(angle)).toFixed(2)}`);
  }
  return `M${pts.join("L")}Z`;
}

const R = 11.5;
const ROW_H = R * 1.72;
const COL_W = R * 2.02;
const TOP_CX = 24, TOP_CY = 14;
const BL_CX = 24 - COL_W / 2, BL_CY = 14 + ROW_H;
const BR_CX = 24 + COL_W / 2, BR_CY = 14 + ROW_H;

const FleetHiveIcon = ({ size = 28, color = tokens.yellow }) => {
  const bw = size < 24 ? 1.5 : 2;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d={hexPath(BL_CX, BL_CY, R)} fill={color} opacity={0.38} />
      <path d={hexPath(BR_CX, BR_CY, R)} fill={color} opacity={0.38} />
      <line x1={TOP_CX - 4} y1={TOP_CY + R * 0.7} x2={BL_CX + 4} y2={BL_CY - R * 0.7} stroke={color} strokeWidth={bw} opacity={0.2} strokeLinecap="round" />
      <line x1={TOP_CX + 4} y1={TOP_CY + R * 0.7} x2={BR_CX - 4} y2={BR_CY - R * 0.7} stroke={color} strokeWidth={bw} opacity={0.2} strokeLinecap="round" />
      <line x1={BL_CX + R * 0.8} y1={BL_CY} x2={BR_CX - R * 0.8} y2={BR_CY} stroke={color} strokeWidth={bw} opacity={0.15} strokeLinecap="round" />
      <path d={hexPath(TOP_CX, TOP_CY, R)} fill={color} opacity={1} />
    </svg>
  );
};

const Logo = ({ isDark, height = 24, showStrapline = true }) => {
  const textColor = isDark ? "#EAE6E0" : "#12100E";
  const strapColor = isDark ? "rgba(234,230,224,0.55)" : "rgba(18,16,14,0.5)";
  const iconSize = height * 1.3;
  const strapSize = Math.max(height * 0.32, 10);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: height * 0.4 }}>
      <FleetHiveIcon size={iconSize} color={tokens.yellow} />
      <div style={{ display: "flex", flexDirection: "column", gap: showStrapline ? 1.5 : 0 }}>
        <span style={{
          fontFamily: "Manrope,sans-serif", fontWeight: 800,
          fontSize: height * 0.65, letterSpacing: "-0.045em",
          color: textColor, lineHeight: 1,
        }}>FleetHive</span>
        {showStrapline && (
          <span style={{
            fontFamily: "'IBM Plex Mono',monospace", fontWeight: 500,
            fontSize: strapSize, letterSpacing: "0.03em",
            color: strapColor, lineHeight: 1,
          }}>Smarter &amp; Stronger Together</span>
        )}
      </div>
    </div>
  );
};

export default Logo;
