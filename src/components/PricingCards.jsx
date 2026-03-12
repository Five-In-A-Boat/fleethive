import tokens from "../tokens";
import { primaryButton } from "../styles";
import { Icon, iconPaths } from "../icons.jsx";
import { PRICING_TIERS, URLS } from "../data";

export default function PricingCards({ isDark }) {
  const theme = isDark ? tokens.dark : tokens.light;

  return (
    <>
      <div
        className="price-g"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "1.5rem",
          alignItems: "start",
        }}
      >
        {PRICING_TIERS.map((tier) => {
          const isFeatured = tier.featured;
          return (
            <div
              key={tier.name}
              className="p-card"
              style={{
                background: isFeatured ? theme.cardBgPro : theme.cardBg,
                border: isFeatured
                  ? `1.5px solid ${tokens.yellow}`
                  : `1px solid ${theme.cardBdr}`,
                borderRadius: "1.25rem",
                overflow: "hidden",
                boxShadow: isFeatured
                  ? isDark
                    ? "0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,200,61,0.15)"
                    : "0 16px 48px rgba(18,16,14,0.13), 0 0 0 1px rgba(214,162,29,0.2)"
                  : isDark
                    ? "0 8px 32px rgba(0,0,0,0.35)"
                    : "0 4px 20px rgba(18,16,14,0.07)",
                position: "relative",
                transform: isFeatured ? "translateY(-12px)" : "none",
              }}
            >
              {/* Most popular badge */}
              {isFeatured && (
                <div
                  style={{
                    position: "absolute",
                    top: -1,
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <div
                    style={{
                      background: tokens.yellow,
                      color: tokens.yellowText,
                      fontFamily: "'IBM Plex Mono',monospace",
                      fontSize: ".5rem",
                      fontWeight: 700,
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      padding: "4px 14px",
                      borderRadius: "0 0 8px 8px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Most popular
                  </div>
                </div>
              )}

              {/* Tier header */}
              <div
                style={{
                  padding: isFeatured
                    ? "1.625rem 1.75rem 1.125rem"
                    : "1.25rem 1.75rem .75rem",
                  ...(isFeatured
                    ? { background: tokens.yellow, marginTop: 20 }
                    : {
                        borderBottom: `1px solid ${theme.dividerLine}`,
                      }),
                }}
              >
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: ".5625rem",
                    fontWeight: 700,
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: isFeatured ? tokens.yellowText : theme.tertiary,
                    opacity: isFeatured ? 0.75 : 1,
                    marginBottom: ".625rem",
                  }}
                >
                  {tier.name}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: ".375rem",
                    marginBottom: ".25rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Manrope,sans-serif",
                      fontSize: "2.625rem",
                      fontWeight: 800,
                      letterSpacing: "-0.05em",
                      color: isFeatured ? tokens.yellowText : theme.text,
                      lineHeight: 1,
                    }}
                  >
                    {tier.price}
                  </span>
                  <span
                    style={{
                      fontFamily: "Manrope,sans-serif",
                      fontSize: ".875rem",
                      fontWeight: 500,
                      color: isFeatured
                        ? `${tokens.yellowText}99`
                        : theme.secondary,
                    }}
                  >
                    /month
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: ".5625rem",
                    color: isFeatured
                      ? `${tokens.yellowText}88`
                      : theme.tertiary,
                    letterSpacing: ".04em",
                    marginTop: ".25rem",
                  }}
                >
                  {tier.subtitle}
                </div>

                {tier.extraNote && (
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      marginTop: ".5rem",
                      background: theme.infoBg,
                      border: `1px solid ${theme.infoBdr}`,
                      borderRadius: 5,
                      padding: "3px 8px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono',monospace",
                        fontSize: ".5rem",
                        fontWeight: 600,
                        color: theme.infoText,
                        letterSpacing: ".06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {tier.extraNote}
                    </span>
                  </div>
                )}
              </div>

              {/* Features + CTA */}
              <div style={{ padding: "1.5rem 1.75rem" }}>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: ".6rem",
                    marginBottom: "1.75rem",
                  }}
                >
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 9,
                      }}
                    >
                      <div
                        style={{
                          width: 16,
                          height: 16,
                          borderRadius: "50%",
                          background: isFeatured
                            ? `${tokens.yellow}22`
                            : "transparent",
                          border: `1px solid ${isFeatured ? `${tokens.yellow}55` : theme.checkDim}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        <Icon
                          d={iconPaths.check}
                          size={9}
                          stroke={
                            isFeatured ? tokens.yellowMid : theme.checkDim
                          }
                          strokeWidth={2.5}
                        />
                      </div>
                      <span
                        style={{
                          fontSize: ".9rem",
                          color: theme.text,
                          fontWeight: 450,
                          lineHeight: 1.5,
                        }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {isFeatured ? (
                  <>
                    <a
                      href={URLS.onboarding}
                      className="p-cta-gold"
                      style={{
                        ...primaryButton({
                          width: "100%",
                          justifyContent: "center",
                          padding: "12px 0",
                          fontSize: ".9375rem",
                          borderRadius: 8,
                          textDecoration: "none",
                          boxSizing: "border-box",
                        }),
                      }}
                    >
                      {tier.ctaLabel}{" "}
                      <Icon
                        d={iconPaths.arrow}
                        size={14}
                        stroke={tokens.yellowText}
                        strokeWidth={2.5}
                      />
                    </a>
                    {tier.trialNote && (
                      <p
                        style={{
                          textAlign: "center",
                          marginTop: ".75rem",
                          fontFamily: "'IBM Plex Mono',monospace",
                          fontSize: ".5rem",
                          color: theme.tertiary,
                          letterSpacing: ".06em",
                          textTransform: "uppercase",
                        }}
                      >
                        {tier.trialNote}
                      </p>
                    )}
                  </>
                ) : (
                  <a
                    href={URLS.onboarding}
                    className="p-cta-ghost"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                      width: "100%",
                      padding: "11px 0",
                      borderRadius: 8,
                      fontFamily: "Manrope,sans-serif",
                      fontSize: ".875rem",
                      fontWeight: 700,
                      letterSpacing: "-.01em",
                      border: `1.5px solid ${theme.ghostBdr}`,
                      background: "transparent",
                      color: theme.text,
                      textDecoration: "none",
                      boxSizing: "border-box",
                    }}
                  >
                    {tier.ctaLabel}{" "}
                    <Icon
                      d={iconPaths.arrow}
                      size={13}
                      stroke={theme.text}
                      strokeWidth={2.5}
                    />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p
        style={{
          textAlign: "center",
          marginTop: "2.5rem",
          fontFamily: "'IBM Plex Mono',monospace",
          fontSize: ".5625rem",
          color: theme.footerText,
          letterSpacing: ".06em",
          textTransform: "uppercase",
        }}
      >
        All plans · Cancel anytime · No setup fee · Community buying rates
        included
      </p>
    </>
  );
}
