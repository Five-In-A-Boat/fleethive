# FleetHive Marketing Site

Single-page marketing site for FleetHive, a vehicle fleet management tool for small trades businesses and households in the UK.

## Stack

- **Framework:** React 18 (JSX via Vite esbuild, no Babel)
- **Build:** Vite 5
- **Hosting:** Netlify (fleethive.netlify.app)
- **Styling:** Inline styles + a global `<style>` tag (no CSS framework)
- **Fonts:** Manrope (headings/body), IBM Plex Mono (labels/badges) — loaded from Google Fonts

## Project Structure

```
src/
  main.jsx              Entry point
  App.jsx               Root component, global styles, page sections
  tokens.js             Design tokens (light/dark theme colors, brand colors)
  icons.jsx             SVG icon component and path data
  data.js               All static content (logos, pricing, testimonials, features, stats)
  styles.js             Reusable style factories (buttons, headings, eyebrow labels)
  components/
    Logo.jsx            Brand logo SVG
    MockChrome.jsx      Shared browser window chrome for product screenshots
    Mocks.jsx           Product screenshot mock components (Reminders, Costs, Records)
```

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build (output: dist/)
npm run preview   # Preview production build locally
```

## Architecture Notes

- **Theme:** Light/dark mode driven by `tokens.js`. Components receive `isDark` prop and resolve tokens via `const theme = isDark ? tokens.dark : tokens.light`.
- **No router:** Single-page with hash links (#pricing, #product) and smooth scrolling.
- **External links:** App login at `vloot.in`, booking at `calendly.com/fleethive`.
- **Images:** Partner logo SVGs in `public/images/`, referenced by data in `data.js`.
- **No state management:** Local `useState` in root component only.

## Editing Guide

| To change...              | Edit this file        |
|---------------------------|-----------------------|
| Colors or theme           | `src/tokens.js`       |
| Copy, pricing, features   | `src/data.js`         |
| Icons                     | `src/icons.jsx`       |
| Button/heading styles     | `src/styles.js`       |
| Page layout or sections   | `src/App.jsx`         |
| Product screenshots       | `src/components/Mocks.jsx` |
| Partner logos             | `src/data.js` (paths) + `public/images/` (files) |
