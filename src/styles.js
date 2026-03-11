/**
 * Reusable style factories for buttons, headings, and common patterns.
 * These accept a resolved theme object and return inline style objects.
 */
import tokens from "./tokens";

export const primaryButton = (overrides = {}) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  background: tokens.yellow,
  color: tokens.yellowText,
  fontFamily: "Manrope,sans-serif",
  fontSize: ".9375rem",
  fontWeight: 800,
  letterSpacing: "-.02em",
  padding: "13px 26px",
  borderRadius: 9,
  border: "none",
  cursor: "pointer",
  textDecoration: "none",
  boxShadow: "0 1px 0 rgba(255,255,255,0.22) inset",
  transition: "all .22s cubic-bezier(.22,1,.36,1)",
  ...overrides,
});

export const ghostButton = (theme, overrides = {}) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  background: theme.ghost.bg,
  color: theme.text,
  fontFamily: "Manrope,sans-serif",
  fontSize: ".9375rem",
  fontWeight: 600,
  letterSpacing: "-.01em",
  padding: "13px 26px",
  borderRadius: 9,
  border: `1px solid ${theme.ghost.bdr}`,
  cursor: "pointer",
  textDecoration: "none",
  backdropFilter: "blur(8px)",
  transition: "all .22s cubic-bezier(.22,1,.36,1)",
  ...overrides,
});

export const eyebrow = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  fontFamily: "'IBM Plex Mono',monospace",
  fontSize: ".625rem",
  fontWeight: 600,
  letterSpacing: ".10em",
  textTransform: "uppercase",
  color: tokens.yellowMid,
  background: "rgba(214,162,29,0.10)",
  border: "1px solid rgba(214,162,29,0.22)",
  padding: "3px 10px",
  borderRadius: 999,
};

export const sectionHeading = (theme) => ({
  fontFamily: "Manrope,sans-serif",
  fontSize: "clamp(1.875rem,3vw,2.625rem)",
  fontWeight: 800,
  letterSpacing: "-0.045em",
  lineHeight: 1.1,
  color: theme.text,
});
