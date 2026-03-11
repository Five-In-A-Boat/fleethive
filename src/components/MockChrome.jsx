/**
 * Shared browser window chrome bar for product screenshot mocks.
 * Renders the macOS-style traffic lights and URL bar.
 */
const TRAFFIC_LIGHTS = ["#FF5F56", "#FFBD2E", "#27C93F"];

const MockChrome = ({ theme, isDark, url }) => (
  <div style={{
    background: theme.mockChrome,
    borderBottom: `1px solid ${theme.mockSep}`,
    padding: "10px 16px",
    display: "flex",
    alignItems: "center",
    gap: 7,
  }}>
    {TRAFFIC_LIGHTS.map(color => (
      <div key={color} style={{ width: 10, height: 10, borderRadius: "50%", background: color }} />
    ))}
    <div style={{
      flex: 1, height: 22,
      background: isDark ? "#0D1520" : "#E8EDF4",
      borderRadius: 5, marginLeft: 8,
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <span style={{ fontSize: 9.5, color: theme.mockUrl, fontFamily: "'IBM Plex Mono',monospace" }}>
        {url}
      </span>
    </div>
  </div>
);

export default MockChrome;
