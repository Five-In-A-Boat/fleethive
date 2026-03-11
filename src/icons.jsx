/**
 * Lightweight SVG icon component and path data.
 * Usage: <Icon d={iconPaths.arrow} size={16} />
 */
export const Icon = ({ d, size = 16, stroke = "currentColor", strokeWidth = 1.75, fill = "none" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke}
    strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {Array.isArray(d) ? d.map((p, i) => <path key={i} d={p} />) : <path d={d} />}
  </svg>
);

export const iconPaths = {
  arrow:  "M5 12h14M12 5l7 7-7 7",
  arrowR: "M9 18l6-6-6-6",
  check:  "M20 6L9 17l-5-5",
  menu:   ["M3 12h18", "M3 6h18", "M3 18h18"],
  x:      ["M18 6L6 18", "M6 6l12 12"],
  sun:    ["M12 3v1m0 16v1M4.22 4.22l.7.7m12.16 12.16.7.7M3 12h1m16 0h1M4.22 19.78l.7-.7M18.36 5.64l.7-.7", "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"],
  moon:   "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",
};
