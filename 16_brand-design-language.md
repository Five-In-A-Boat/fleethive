# Document: 16_brand-design-language.md
# Purpose: Translate positioning and messaging into a design system that feels sharp without outrunning product reality.
# Status: Draft / working document
# Primary input: `15_messaging-architecture.md`
# Supporting inputs used: `13_positioning-architecture.md`; `09_competitor-category-teardown.md`; official reference-site review of Linear, Vercel, Resend, Clerk, Mintlify, Fleetio, Samsara, and Motive
# Next file in chain: **Conflict / needs validation:** the prompt contract names `16_content-reference-status.md` and `18_component-inventory.md`, but this request names the current artefact `16_brand-design-language.md`; downstream numbering should be reconciled before the next file is created.

## Document metadata block

- **Fact:** The primary messaging architecture keeps **trade micro-fleets** as the commercial centre of gravity, with **multi-car households** as a secondary routed audience rather than a co-equal homepage story.
- **Fact:** The supporting positioning architecture frames FleetHive most credibly as a **vehicle maintenance and running-cost control layer** rather than a broad all-in-one fleet platform.
- **Fact:** The supporting competitor teardown says FleetHive should look **more polished than institutional UK network players**, **more human than back-office infrastructure brands**, and **more believable than broad fleet SaaS theatre**.
- **Fact:** Persistent control files still apply, especially the anti-slop requirement to avoid fake maturity cues, invented product breadth, and decorative dashboards that imply telematics or enterprise control where those truths are not currently supported.
- **Fact:** Founder steering requires the design language to work in **both light and dark mode**, respecting browser/system preference, and requires the brand’s primary colour to be **yellow-based**.
- **Unknown / needs validation:** Operator steering says a new FleetHive logomark is attached, but no logo asset file was available in the working directory at drafting time. This brief therefore defines system-level usage rules, not logo geometry, clearspace, or lockup specs.
- **Conflict note:** The embedded prompt contract asks for `15_brand-design-language.md`, while the live request asks for `16_brand-design-language.md`. This document follows the current request and records the discrepancy instead of smoothing it over.

## Executive summary

- **Recommendation:** FleetHive should present as a **high-conviction, product-led operational brand**: serious enough to sell to small businesses and look fundable, but warm enough not to feel like enterprise procurement software.
- **Recommendation:** The right visual centre of gravity is **practical premium**, not dev-tools cosplay, not fleet-enterprise theatre, and not consumer marketplace commodity design.
- **Recommendation:** The design should make one immediate impression: **this company ships carefully, thinks clearly, and understands the operational mess its users are in**.
- **Inference:** The most credible visual strategy is a hybrid of three worlds:
  1. **From best-in-class SaaS brands:** typography discipline, whitespace confidence, product-led presentation, clean light/dark parity.
  2. **From operational software:** clarity, strong hierarchy, systematic components, restrained proof handling.
  3. **From FleetHive’s actual wedge:** warmth, practical control, and less institutional heaviness than 1link / Fleet Assist.
- **Recommendation:** The site should look better than Fleetio, Whip Around, Samsara, Motive, 1link, and Fleet Assist in **taste and coherence**, but it should not imitate the breadth signals of the larger fleet platforms or the infrastructural heaviness of the network players.
- **Recommendation:** Visual polish must impute seriousness and quality, not a fake product surface area. The system should therefore over-invest in **layout, typography, hierarchy, states, and screenshot treatment**, and under-invest in decorative effects, motion gimmicks, or speculative UI.

## Brand personality in practice

### Design positioning

| Axis | Target position | Practical implication |
|---|---|---|
| Playful ←→ Serious | **70% Serious / 30% Warm** | Credible for SME operators and future investors; never jokey, cartoonish, or novelty-led |
| Warm ←→ Cool | **58% Warm / 42% Cool** | Yellow-led warmth softens the category, but graphite structure keeps it disciplined |
| Dense ←→ Spacious | **65% Spacious / 35% Dense** | Confident whitespace, but not luxury emptiness; pages should still feel operational and useful |
| Illustrative ←→ Photographic | **68% Interface / schematic / abstract; 32% real photography if needed** | Product UI should carry most of the persuasion; photography is optional and must never outrank the product |

### Personality translation

- **Recommendation:** The brand should feel **engineered, grounded, calm, and commercially sharp**.
- **Recommendation:** It should not feel:
  - playful startup fluff
  - generic fleet-tech blue-box SaaS
  - harsh enterprise control software
  - a consumer discount marketplace
  - a dev-tool clone dressed in fleet language
- **Recommendation:** The visual mood should suggest: **“practical control, shipped with taste.”**
- **Recommendation:** The trade path should feel slightly more operational and structured.
- **Recommendation:** The household path, if live, should feel slightly softer and calmer within the same system, not like a different brand.

### The design must feel like the voice sounds

| Verbal cue from strategy | Visual translation |
|---|---|
| Practical control | Clean dashboards, explicit hierarchy, restrained cards, no inflated feature theatre |
| Revenue-critical vehicles | More serious composition, less decorative imagery, stronger data-card emphasis |
| Too small for a fleet department | Simpler flows, fewer layers, straightforward UI patterns, no enterprise clutter |
| Present-tense truth | Real screenshots, labelled proof, no speculative modules, no fake map views |
| Guided next step | Route cards, explicit CTA styling, one dominant action per page |

## Tone cues and verbal rules

- **Recommendation:** Design and copy should reinforce the same tone: **clear, exact, sober, and human**.
- **Recommendation:** Headlines should feel **decisive**, not inflated.
- **Recommendation:** Body copy should feel **useful**, not clever.
- **Recommendation:** CTAs should feel **explicit**, not branded for branding’s sake.
- **Recommendation:** Section labels, card labels, and microcopy should sound operational: “How it works”, “What you can do now”, “For trades businesses”, “What happens next”.
- **Recommendation:** Avoid visual language that would make generic SaaS phrases feel acceptable again.

### Verbal rules the design system must support

- **Recommendation:** Design for short, specific headings rather than long abstraction-heavy lines.
- **Recommendation:** Give subheads enough width to explain current product reality in one clean sentence.
- **Recommendation:** Style proof labels so the team can visibly distinguish:
  - product-native workflow
  - partner-enabled capability
  - customer quote
  - future / not yet live
- **Recommendation:** Use badge systems sparingly and with meaning. A badge that does not change interpretation should not exist.

## Type / spacing / layout principles

### Typography

| Role | Recommendation | Why |
|---|---|---|
| Heading typeface | **Manrope**, fallback `Inter, ui-sans-serif, system-ui, sans-serif` | Geometric enough to feel modern and premium, but less cold and tool-like than some dev-first type choices |
| Body typeface | **Inter**, fallback `ui-sans-serif, system-ui, sans-serif` | Reliable UI legibility, strong at smaller sizes, widely supported |
| Mono typeface | **IBM Plex Mono**, fallback `ui-monospace, SFMono-Regular, Menlo, monospace` | Useful for vehicle IDs, dates, status labels, and system-style detail without becoming a dev aesthetic |

### Type scale

| Token | Size | Suggested weight | Letter spacing |
|---|---:|---:|---:|
| Display | `4rem` | 800 | `-0.04em` |
| H1 | `3.25rem` | 800 | `-0.035em` |
| H2 | `2.25rem` | 750 | `-0.03em` |
| H3 | `1.5rem` | 700 | `-0.02em` |
| H4 | `1.25rem` | 650 | `-0.015em` |
| Body large | `1.125rem` | 450 | `-0.01em` |
| Body | `1rem` | 450 | `-0.005em` |
| Small | `0.875rem` | 500 | `0` |
| Micro / label | `0.75rem` | 600 | `0.02em` |

### Typography rules

- **Recommendation:** Use the heaviest type where the product category needs confidence, not where decoration is wanted.
- **Recommendation:** Keep display usage to hero and key section openers only.
- **Recommendation:** Use sentence case throughout.
- **Recommendation:** Avoid all-caps except small UI labels and eyebrow text.
- **Recommendation:** Use mono only for metadata, timestamps, tabular values, and system references. Do not use mono for hero copy.

### Spatial system

| Rule | Recommendation |
|---|---|
| Base spacing unit | **8px** |
| Section padding (desktop) | `py-24` to `py-32` equivalent (96–128px) |
| Section padding (tablet) | 72–96px |
| Section padding (mobile) | 48–64px |
| Card padding | 20–28px for standard cards; 32px for hero/detail cards |
| Grid gap | 20px standard; 32px in hero / proof / use-case grids |
| Content max-width | **72rem** for primary layout shell |
| Reading max-width | **46rem** for long-form explanatory text |
| Wide media max-width | **80rem** for hero screenshot stage / routed hero layouts |

### Layout posture

- **Recommendation:** The site should feel **expansive at the shell level** and **editorial at the text-column level**.
- **Recommendation:** Use wide outer containers to impute confidence.
- **Recommendation:** Keep paragraphs, proof explanations, and onboarding detail in narrower reading widths so the site still feels controlled.
- **Recommendation:** Default to 12-column desktop layout.
- **Recommendation:** Use asymmetry in hero and proof sections, but keep card alignment mathematically tidy.

## UI tone

### Colour system

#### Core palette

| Role                               | Light mode | Dark mode | Use                                                                |
| ---------------------------------- | ---------- | --------- | ------------------------------------------------------------------ |
| Background                         | `#F7F8FA`  | `#0F1216` | Main page background                                               |
| Surface                            | `#FFFFFF`  | `#151A21` | Cards, nav, modals                                                 |
| Surface 2                          | `#EEF1F4`  | `#1B2027` | Nested panels, tabs, route cards                                   |
| Primary brand colour — Hive Gold   | `#D6A21D`  | `#D6A21D` | Brand highlight, active states, chart highlight, selective borders |
| Accent / CTA colour — Signal Amber | `#FFC83D`  | `#FFC83D` | Primary buttons and key action states                              |
| Secondary colour — Field Slate     | `#2B3543`  | `#C9CFD8` | Supporting UI accents, secondary buttons, chart secondary line     |
| Primary text                       | `#111111`  | `#F5F7FA` | Headings and body                                                  |
| Muted text                         | `#616977`  | `#A6AFBB` | Metadata and supporting labels                                     |
| Border                             | `#DCE2E8`  | `#2A313C` | Hairlines, card borders                                            |
| Info / trust                       | `#2F6FED`  | `#7DA6FF` | Informational states, link emphasis                                |
| Success                            | `#147A4B`  | `#4FB37F` | Success states                                                     |
| Warning                            | `#A55300`  | `#F0A44B` | Warning states                                                     |
| Danger                             | `#B42318`  | `#F97066` | Error / destructive states                                         |

#### Colour rules

- **Recommendation:** Respect system preference on first visit, then persist the user’s manual toggle.
- **Recommendation:** Neither theme should feel like a fallback. Light mode should feel fully authored; dark mode should feel equally premium.
- **Recommendation:** Use **Hive Gold** as a brand signal, not as the dominant fill colour for entire sections.
- **Recommendation:** Use **Signal Amber** for the main CTA fill because it stays vivid in both themes and supports strong legibility with dark label text.
- **Fact / Recommendation:** `#FFC83D` with `#111111` label text gives approximately **12.2:1** contrast, which is well above AA requirements for primary button copy.
- **Recommendation:** Do **not** use yellow for long passages of text, small body links, or fine hairlines on white backgrounds.
- **Recommendation:** On dark surfaces, yellow should appear as **a confident accent** rather than a neon effect: filled CTA, focused border, highlighted chart bar, selected tab underline, or route-chip emphasis.
- **Recommendation:** The emotional register of the palette should be: **confident, premium, warm, operational, and slightly industrial**.

### Component language

| Component area | Recommendation |
|---|---|
| Border radius | **Slightly rounded, not playful**. Use 16px on main cards, 12px on inputs, 9999px only for chips/toggles |
| Card treatment | **Bordered + lightly elevated**. Favour crisp borders and soft shadows over heavy glass or floating blur stacks |
| Button philosophy | Primary = solid amber; secondary = slate/outlined; tertiary = ghost/text. Buttons should look decisive, not ornamental |
| Input style | Clear border, quiet fill, 12px radius, strong focus ring. Inputs should feel product-like, not marketing-form generic |
| Nav | Low-profile, thin-border, slightly translucent surface on scroll only; avoid oversized sticky nav bars |
| Dividers | Hairline borders, subtle gradients, or spacing changes. No thick ornamental section breaks |
| Tables / comparison blocks | Minimal chrome, high contrast headers, clear row rhythm. No enterprise grid bloat |
| Proof blocks | Designed with the same care as product panels. Proof should feel integrated, not bolted on |

### Button styles

| Button | Default | Hover | Focus |
|---|---|---|---|
| Primary | `#FFC83D` fill, `#111111` label, 1px transparent border | Darken fill slightly to `#F0B429`, raise by 1px, add stronger shadow | 2px outer ring in `rgba(255, 200, 61, 0.35)` |
| Secondary | Transparent or `Field Slate` tint with slate border | Slight surface lift, border darkens, text sharpens | 2px ring using info/trust blue on light and amber on dark |
| Ghost | No fill, no heavy border | Tinted hover background | Thin ring only |

### Hero and section style

- **Recommendation:** Above the fold should feel **high-clarity, high-trust, and product-led**.
- **Recommendation:** Use one dominant headline block, one explanatory subhead, one primary CTA, one secondary CTA, and one controlled visual stage.
- **Recommendation:** Use route cards early on the home page so the design supports the message architecture rather than fighting it.
- **Recommendation:** Feature sections should use **bento-style composition** only where it helps hierarchy. Do not use bento layouts as a trend tax.

### The impute check

- **Recommendation:** As a whole, this system can credibly impute a company capable of raising a substantial round **if** the execution is disciplined in four places:
  1. dark and light mode both feel first-class
  2. screenshots are real, readable, and framed with extreme care
  3. typography and spacing remain crisp and consistent across all pages
  4. proof surfaces are selective and well-labeled instead of noisy
- **Recommendation:** If the first design pass still feels like an early SaaS template, elevate these before adding more visual effects:
  - stronger headline typography
  - cleaner screenshot stage
  - better route-card hierarchy
  - more disciplined spacing
  - more premium border/shadow system
- **Recommendation:** Do not attempt to “look like a £10M company” by adding gradient fog, fake data density, or AI/enterprise theatre. That lowers trust here rather than raising it.

## Image / illustration direction

### Hero treatment

- **Recommendation:** Use a **hybrid hero**:
  - real product screenshot as the main proof object
  - paired with a small abstract/system graphic or lightweight status rail that reinforces control, reminders, spend, and service workflow
- **Recommendation:** The hero should not rely on lifestyle photography.
- **Recommendation:** The hero should not be a pure abstract gradient without product evidence.

### Product screenshot rules

- **Recommendation:** Use **real current web-app screenshots only**.
- **Recommendation:** Frame screenshots in clean 16:10 or 4:3 panels with:
  - 1px border
  - subtle shadow
  - slight ambient backdrop glow
  - optional understated browser chrome only if it reflects the real product context
- **Recommendation:** Prefer straight-on or very mild perspective treatment. Maximum perspective angle should be subtle enough that the UI still reads as a real interface.
- **Recommendation:** Crop around the most legible workflow moments: vehicle overview, reminders, spend panel, invoice validation, booking flow, service timeline.
- **Recommendation:** If current screenshots are not visually strong enough yet, use **smaller truthful crops** rather than inventing prettier fake states.

### Illustration direction

- **Recommendation:** Illustration, if used, should be **schematic and infrastructural**, not mascot-led or whimsical.
- **Recommendation:** Use simple system graphics: timelines, stacked vehicle cards, spend trend blocks, reminder rails, approval paths.
- **Recommendation:** Any abstract visual should still imply FleetHive’s real category: maintenance, records, dates, spend, and decision control.
- **Recommendation:** Avoid map motifs, dispatch dots, route lines, radar scans, or telematics-style motion that imply live tracking.

### Photography direction

- **Recommendation:** Photography is optional, not core.
- **Recommendation:** If used, it must be **real and documentary**:
  - actual work vans
  - service context
  - hands-on operational detail
  - no posed office-stock handshake shots
- **Recommendation:** Avoid dominant hero photography, vehicle glamour shots, and generic “business team smiling at laptop” imagery.

### Iconography

- **Recommendation:** Use an **outline icon set** with 1.75–2px stroke weight, visually similar to a refined Lucide/Feather family.
- **Recommendation:** Icons should be simple, directional, and functional.
- **Recommendation:** Use filled icons only for status dots, tiny badges, and selected states.
- **Recommendation:** Keep icon usage sparse. Text and layout should do more work than icon noise.

## Motion guidance

### Motion principles

- **Recommendation:** Motion should feel **engineered, calm, and responsive**.
- **Recommendation:** Its job is to clarify hierarchy, state changes, and interface quality — not to entertain.

### Scroll-triggered motion

- **Recommendation:** Use subtle fade-up / unblur reveals on section entry.
- **Recommendation:** Default reveal distance: **8–12px** vertical offset.
- **Recommendation:** Default duration: **220–280ms**.
- **Recommendation:** Use stagger only inside small card groups; keep it tight.
- **Recommendation:** Avoid parallax, scroll hijacking, dramatic zooms, and long reveal chains.

### Hover and press states

- **Recommendation:** Buttons: 120–160ms hover response with tiny lift (`translateY(-1px)`) or shadow change.
- **Recommendation:** Cards: border emphasis and slight surface brighten/darken; avoid floating every card dramatically.
- **Recommendation:** Route cards: change border, background tint, and title contrast on hover so routing feels intentional.
- **Recommendation:** Tabs and segmented controls: animated underline or background pill, not bouncing motion.

### Transition timing and easing

- **Recommendation:** Use one core easing curve across the system: `cubic-bezier(0.22, 1, 0.36, 1)`.
- **Recommendation:** Standard durations:
  - `120ms` = hover and tap response
  - `180ms` = dropdowns, modals, tabs
  - `240ms` = hero / card entrance transitions
  - `320ms` = large surface or theme transitions only
- **Recommendation:** Theme-switch transitions should be quick and polished, but not theatrical.

### Motion meaning

- **Inference:** The right motion language says: **stable system, careful software, low drama, high confidence**.
- **Recommendation:** Respect `prefers-reduced-motion` and remove non-essential movement.

## Reference-site guidance

### What to emulate

- **Recommendation:** Emulate from **Linear, Vercel, Resend, Clerk, and Mintlify**:
  - confident type hierarchy
  - large but controlled whitespace
  - product-led hero construction
  - fully authored light/dark systems
  - crisp card and border discipline
  - proof and product treated with equal visual care
- **Recommendation:** Emulate selectively from **Fleetio**:
  - clean SaaS packaging
  - clear CTA architecture
  - strong product-centred layout discipline
- **Recommendation:** Emulate selectively from **the best dark-mode SaaS brands** only at the level of finish, not aesthetic identity.

### What to avoid

- **Recommendation:** Avoid from dev-tool references:
  - terminal fetish
  - black-only palettes with neon accents
  - code-as-hero where no code exists
  - overly abstract AI visuals
- **Recommendation:** Avoid from **Samsara** and **Motive**:
  - enterprise operations theatre
  - giant data-scale walls as identity
  - AI-led messaging posture that outruns the current truth
- **Recommendation:** Avoid from **1link** and **Fleet Assist**:
  - institutional heaviness
  - text-dense infrastructure posture
  - capability-first visuals that make the product feel like back-office plumbing
- **Recommendation:** Avoid from consumer marketplaces like **BookMyGarage** and **FixMyCar**:
  - commodity search-first layout patterns
  - instant-booking visual logic as the whole story
  - price-comparison framing that flattens recurring product value

### Reference translation for FleetHive

- **Recommendation:** FleetHive should land as:
  - **more premium** than fleet software norms
  - **more practical** than dev-tool brands
  - **more human** than service-network infrastructure players
  - **more system-led** than a consumer booking marketplace

## Product-reality ceiling rule

### Core rule

- **Recommendation:** Polish may imply care, discipline, and ambition.
- **Recommendation:** It must **not** imply product breadth, proof depth, or operational maturity that the current truth base does not support.

### Explicit design ceiling

- **Allowed:**
  - premium typography
  - careful screenshot framing
  - structured proof cards
  - subtle gradients
  - polished dark/light theming
  - bento grids where they clarify hierarchy
  - small schematic diagrams tied to real workflows
- **Blocked until validated:**
  - fake telematics maps
  - live tracking visuals
  - dispatch boards
  - fake AI copilots
  - invented mobile app frames
  - speculative analytics surfaces
  - oversized logo strips
  - unreadable decorative dashboards
  - awards / badges / scale walls that suggest validation not yet owned

### Practical ceiling rule by asset type

| Asset type | Ceiling rule |
|---|---|
| Screenshot | Must be real, current, and readable |
| Diagram | Must explain a live workflow, not imply platform breadth |
| Motion | Must clarify UI quality or state, not manufacture excitement |
| Proof section | Must reflect real source ownership and real evidence strength |
| Hero visual | Must support the current category frame: maintenance, running costs, reminders, records, and supplier decision control |

## Handoff payload for content-status, page briefs, and build work

### Content-status handoff

- **Recommendation:** Mark the following as **safe visual territory now**:
  - product-led screenshots of reminders, records, cost visibility, service workflow
  - route cards for trades vs households
  - proof cards built around present-tense workflow
  - explicit “what happens next” modules
- **Unknown / needs validation:**
  - final logo clearspace and minimum-size rules
  - approved screenshot set
  - approved testimonial set by segment
  - whether a dedicated household route launches now or later
  - exact CTA copy once motion is fully confirmed
- **Recommendation:** Mark the following as **blocked visual territory** in content status:
  - telematics / tracking imagery
  - enterprise fleet command-centre visuals
  - proof walls based on unresolved ownership
  - roadmap UI represented as current product

### Page-brief handoff

| Page / route | Dominant visual mood | Hero treatment | Proof style | CTA styling |
|---|---|---|---|---|
| Home / router | Calm premium + route clarity | Split-layout with route cards and one real screenshot stage | Minimal; fit proof first | Route selection first |
| Trade page | Operational premium | Screenshot-first with structured supporting cards | Workflow proof + one relevant testimonial if approved | Strong assisted/hybrid CTA |
| Household page *(if live)* | Softer, calmer utility tone | Lighter screenshot stage or simpler overview panels | Personal, low-drama proof only | Lower-friction utility CTA |
| Product / how-it-works | Trust through specificity | Sequence of real UI moments | Workflow proof, not numerical proof-first | Continue route-specific motion |
| Use-cases / who-it’s-for | Diagnostic clarity | Situation-led cards, smaller visuals | Scenario proof | Self-qualification CTA |
| Onboarding / sign-up entry | High clarity, low ambiguity | Minimal visual chrome, detail-first | Trust via explanation and expectation-setting | One dominant committed action |

### Build handoff: component starter inventory

- **Recommendation:** Build these components first because they embody the strategy most directly:
  1. **Theme-aware top nav** with light/dark toggle and route-aware CTA slot
  2. **Route cards** for trades vs households
  3. **Hero screenshot stage** with ambient highlight and proof caption slot
  4. **Workflow bento grid** for reminders / records / spend / booking-related actions
  5. **Proof cards** with source-type labels
  6. **Use-case cards** with audience-specific CTA variants
  7. **Step / expectation module** for “what happens next”
  8. **Segmented CTA bar** for trade path vs household path where relevant
  9. **Comparison / decision table** for product fit and alternatives
  10. **Footer CTA** that stays explicit about the next step

### Build handoff: design tokens for implementation

```css
:root {
  --color-bg: #F7F8FA;
  --color-surface: #FFFFFF;
  --color-surface-2: #EEF1F4;
  --color-text: #111111;
  --color-muted: #616977;
  --color-border: #DCE2E8;
  --color-primary: #D6A21D;
  --color-primary-strong: #FFC83D;
  --color-secondary: #2B3543;
  --color-info: #2F6FED;
  --color-success: #147A4B;
  --color-warning: #A55300;
  --color-danger: #B42318;
}

.dark {
  --color-bg: #0F1216;
  --color-surface: #151A21;
  --color-surface-2: #1B2027;
  --color-text: #F5F7FA;
  --color-muted: #A6AFBB;
  --color-border: #2A313C;
  --color-primary: #D6A21D;
  --color-primary-strong: #FFC83D;
  --color-secondary: #C9CFD8;
  --color-info: #7DA6FF;
  --color-success: #4FB37F;
  --color-warning: #F0A44B;
  --color-danger: #F97066;
}
```

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        surface2: "var(--color-surface-2)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
        primary: "var(--color-primary)",
        primaryStrong: "var(--color-primary-strong)",
        secondary: "var(--color-secondary)",
        info: "var(--color-info)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",
      },
      fontFamily: {
        display: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(17,17,17,0.08)",
        softDark: "0 12px 40px rgba(0,0,0,0.32)",
      },
      maxWidth: {
        content: "72rem",
        reading: "46rem",
        media: "80rem",
      },
      transitionTimingFunction: {
        productive: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
} satisfies Config;
```

### Final implementation rule

- **Recommendation:** The frontend should treat this brief as a **constraint system**, not a moodboard.
- **Recommendation:** If a design decision looks impressive but weakens audience clarity, next-step clarity, or current-product truth, the decision is wrong even if it looks expensive.
