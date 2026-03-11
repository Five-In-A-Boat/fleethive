import tokens from "../tokens";

const Logo = ({ isDark, height = 24 }) => (
  <svg width={height * 4.6} height={height} viewBox="0 0 110 24" fill="none" aria-label="FleetHive">
    <polygon points="12,1 22,7 22,17 12,23 2,17 2,7" fill={tokens.yellow} />
    <polygon points="12,5.5 18,9.5 18,16 12,20 6,16 6,9.5" fill={isDark ? "#080A0D" : "#FFFFFF"} />
    <polygon points="12,9.5 16,12 16,14.5 12,17 8,14.5 8,12" fill={tokens.yellow} />
    <text x="28" y="17.5" fontFamily="Manrope,sans-serif" fontWeight="800" fontSize="14.5"
      fill={isDark ? "#EAE6E0" : "#12100E"} letterSpacing="-0.045em">FleetHive</text>
  </svg>
);

export default Logo;
