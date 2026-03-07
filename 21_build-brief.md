Document: 21_build-brief.md
Purpose: Give design and development a brief they can execute without silently inventing missing strategy.
Status: Draft / working document
Primary input: 20_website-copy-deck.md
Supporting inputs used: 19_component-inventory.md; 18_site-architecture-page-briefs.md; 17_content-reference-status.md; 16_brand-design-language.md
Next file in chain: 21_red-team-review.md

## Document metadata block

- **Conflict note:** The prompt contract asks for `Document: 20_build-brief.md` and `Next file in chain: 21_red-team-review.md`, while the live request asks for `21_build-brief.md`. This file follows the live request and records the numbering conflict instead of smoothing it over.
- **Fact:** The current canonical chain makes the site **trade-first, routed, screenshot-first, and conversion-led**.
- **Fact:** The safest current category frame is **maintenance and running-cost control**, not broad fleet-management theatre.
- **Fact:** The current safe build scope is a **small multi-page marketing site** with a routed business path and a **conditional** household path.
- **Fact:** The current safest business CTA posture is **explicit and likely assisted / hybrid** until true self-serve onboarding is validated.
- **Unknown / needs validation:** Target platform / stack.
- **Unknown / needs validation:** CMS or editorial workflow.
- **Unknown / needs validation:** Analytics stack.
- **Unknown / needs validation:** Final SEO requirements beyond baseline implementation.
- **Unknown / needs validation:** Accessibility target level beyond baseline best practice.
- **Unknown / needs validation:** Launch deadline, phased-launch plan, and approval workflow.
- **Recommendation:** Treat this brief as an execution guardrail. Build what is specified here, and surface unresolved inputs rather than filling them with standard SaaS patterns.

## Executive summary

- **Recommendation:** Build FleetHive as a **trade-first routed marketing system** with one clear commercial centre of gravity: owner-managed trades / field-service businesses with a handful of vans.
- **Recommendation:** The minimum safe launch set is:
  1. Home / router
  2. Trade page
  3. Product / how-it-works page
  4. Use-cases / who-it’s-for page
  5. Sign-up / onboarding entry page
  6. Shared legal pages already in use or already live
- **Unknown / needs validation:** Whether a dedicated household page is in the first release. Do not build or publish it as a peer route unless the route, assets, CTA motion, and proof stack are confirmed.
- **Recommendation:** The build should be driven by a compact reusable system: route-aware nav, route hero, route cards, workflow proof sections, fit cards, fit matrix, source-labelled proof cards, expectation module, route-aware CTA bar, onboarding action panel, and footer legal block.
- **Recommendation:** The implementation goal is not visual spectacle. It is a coherent, high-trust site that makes three things unmistakable: **who FleetHive is for, what it helps with now, and what happens next**.

## Implementation assumptions

### Strategic assumptions to preserve

- **Fact:** Trade micro-fleets are the primary audience.
- **Fact:** Household is secondary and conditional.
- **Fact:** Present-tense workflow proof outranks broad quantitative proof.
- **Fact:** Product-native behaviour must stay visually and verbally distinct from partner-enabled capability.
- **Fact:** Pricing pages, logo walls, awards, speculative dashboards, telematics imagery, and broad fleet-platform claims are blocked or unresolved.

### Build assumptions

- **Unknown / needs validation:** Framework choice.
- **Unknown / needs validation:** CMS requirement.
- **Unknown / needs validation:** Whether legal pages are rebuilt inside the same stack or linked through to existing live pages.
- **Recommendation:** Whatever stack is chosen, preserve the same page jobs, CTA logic, proof rules, and route hierarchy.
- **Recommendation:** Build the front-end so the household route can be omitted cleanly without breaking navigation, layout, or copy hierarchy.
- **Recommendation:** Build all proof-bearing components so they can be hidden if the required screenshot, quote, logo permission, or source qualification is missing.

### Working implementation posture

- **Recommendation:** Treat the site as a **small controlled release**, not as the start of a large content platform.
- **Recommendation:** Prioritise reusable sections, clean routing, proof governance, and maintainable content fields over a broad template library.
- **Recommendation:** Prefer static or mostly static page delivery unless a confirmed CMS/editorial need requires otherwise.

## Page list and build priority

### Priority order

| Priority | Page / template | Status | Why it ships in this order |
|---|---|---|---|
| 1 | **Global chrome + design tokens** | Required | Everything else depends on route-aware nav, theme handling, typography, spacing, and CTA behaviour |
| 2 | **Home / router** | Required | Establishes route logic and prevents audience blur from the first visit |
| 3 | **Trade page** | Required | Main commercial conversion page |
| 4 | **Product / how-it-works** | Required | Explains present-tense workflow and product boundaries |
| 5 | **Use-cases / who-it’s-for** | Required | Resolves fit for uncertain visitors |
| 6 | **Sign-up / onboarding entry** | Required | Removes ambiguity around the next step and conversion commitment |
| 7 | **Household page** | Conditional | Only if route, assets, and CTA motion are confirmed |
| 8 | **Legal pages** | Required if rebuilt; otherwise link existing | Trust and compliance support, but not a strategic copy-design priority |

### Working routes

- **Recommendation:** Primary journey = `Home -> Trade -> Product or direct onboarding entry -> Sign-up / onboarding entry`
- **Recommendation:** Secondary journey if live = `Home -> Household -> Product detail if needed -> Sign-up / onboarding entry`
- **Recommendation:** Diagnostic journey = `Home -> Use-cases -> correct route -> next step`
- **Unknown / needs validation:** Whether onboarding should be one template with route-specific states or two distinct route-specific pages.

### URL guidance

- **Recommendation:** `/`
- **Recommendation:** `/for-trades-businesses`
- **Recommendation:** `/how-it-works`
- **Recommendation:** `/who-its-for`
- **Recommendation:** `/start`
- **Unknown / needs validation:** Household route URL, only if launched.

## Component usage by page

### Approved component system

| Component | Home | Trade | Product | Use-cases | Start | Household *(if live)* |
|---|---:|---:|---:|---:|---:|---:|
| Theme-aware top nav | Yes | Yes | Yes | Yes | Yes | Yes |
| Route hero | Yes | Yes | Yes | Yes | Yes | Yes |
| Route cards | Yes | No | No | Optional | No | No |
| Workflow proof section | Yes | Yes | Yes | Optional | No | Yes |
| Use-case / fit cards | No | Yes | Optional | Yes | No | Yes |
| Comparison / fit matrix | Yes | Yes | Optional | Yes | No | Optional |
| Source-labelled proof cards | Optional | Yes | Yes | Optional | Optional | Optional |
| “What happens next” expectation module | Optional | Yes | Yes | No | Yes | Yes |
| Route-aware CTA bar | Yes | Yes | Yes | Yes | No | Yes |
| Onboarding action panel | No | No | No | No | Yes | No |
| Footer legal / compliance block | Yes | Yes | Yes | Yes | Yes | Yes |
| Qualified testimonial quote | Optional | Optional | Optional | No | Optional | Optional |

### Page-specific build notes

#### 1) Home / router
- **Recommendation:** Use a route-led hero, route cards, one real screenshot stage, a trade-first proof preview, a route-difference matrix, and a route-aware CTA bar.
- **Recommendation:** Do not turn the homepage into a full feature page.
- **Blocked for launch:** Hero stat wall, pricing language, mixed-audience testimonial carousel, partner-logo strip.

#### 2) Trade page
- **Recommendation:** Use trade-specific hero, pain-recognition section, workflow proof section, one restrained fit matrix, expectation module, and one dominant trade CTA.
- **Recommendation:** Keep the page operational and specific rather than category-broad.

#### 3) Product / how-it-works
- **Recommendation:** Build this around a sequence of real UI moments and clearly labelled workflow steps.
- **Recommendation:** Include a small restraint block if needed to clarify what FleetHive does not claim.

#### 4) Use-cases / who-it’s-for
- **Recommendation:** Use scenario-led fit cards and a qualification matrix.
- **Recommendation:** The job here is diagnosis, not spectacle.

#### 5) Sign-up / onboarding entry
- **Recommendation:** Use explicit next-step hero, expectation module, a concise explanation of required information, one route-matched reassurance cue, and one single committed action area.
- **Recommendation:** This page should be the clearest page in the build, not the prettiest.

#### 6) Household page *(conditional)*
- **Unknown / needs validation:** Route, proof stack, and CTA motion.
- **Recommendation:** If launched, reuse the same system but soften the tone, reduce business jargon, and remove trade proof.

## Responsive notes

### Layout and spacing

- **Fact / Recommendation:** Desktop layout should assume a 12-column grid.
- **Fact / Recommendation:** Primary layout shell max width: **72rem**.
- **Fact / Recommendation:** Reading width for longer copy: **46rem**.
- **Fact / Recommendation:** Wide media stage max width: **80rem**.
- **Fact / Recommendation:** Section spacing should follow the existing design system:
  - desktop: roughly **96–128px** vertical padding
  - tablet: **72–96px**
  - mobile: **48–64px**

### Mobile behaviour

- **Recommendation:** Copy stacks above visuals in hero sections.
- **Recommendation:** Route cards stack vertically with the **trade card first**.
- **Recommendation:** If screenshots become unreadable on mobile, switch to truthful cropped details rather than decorative mockups.
- **Recommendation:** Keep the first screen useful without depending on the screenshot to explain the proposition.
- **Recommendation:** Keep the primary CTA visible in global chrome on small screens, but avoid showing two equal-weight route CTAs in the mobile nav.

### Tablet behaviour

- **Recommendation:** Retain asymmetric layouts where they aid hierarchy, but collapse complex bento structures earlier than on desktop.
- **Recommendation:** Keep proof labels and captions visible at tablet widths; do not hide qualification text to save space.

### Theme handling

- **Fact / Recommendation:** Respect system theme on first visit and persist the user’s explicit toggle state thereafter.
- **Recommendation:** Light and dark mode must be equally finished.

## States and interactions

### Core interaction rules

- **Recommendation:** Motion should clarify hierarchy and state, not manufacture drama.
- **Recommendation:** Respect `prefers-reduced-motion` and remove non-essential movement.
- **Fact / Recommendation:** Use the design-system timing guidance already defined:
  - `120ms` hover/tap response
  - `180ms` dropdowns, modals, tabs
  - `240ms` hero/card entrance transitions
  - `320ms` large surface or theme transitions only

### Required states by component

| Component / area | Required states |
|---|---|
| Navigation | default, scrolled, active link, focus-visible, mobile open, mobile closed |
| Theme toggle | light, dark, focus-visible, reduced-motion-safe transition |
| Buttons | default, hover, pressed, focus-visible, disabled |
| Route cards | default, hover, active/selected, focus-visible |
| CTA bars | default, hover, focus-visible |
| Onboarding action panel | default, submitting, success, error |
| Form fields | default, focus, valid, invalid, helper-text visible |
| Proof cards | default, hover only if interactive; non-interactive cards should not mimic links |
| Screenshot panels | default; optional hover polish only if it does not imply interaction |

### Specific interaction notes

- **Recommendation:** Route card hover should change border, background tint, and title contrast so route choice feels intentional.
- **Recommendation:** Button hover should use a slight lift or shadow change only. No exaggerated float behaviour.
- **Recommendation:** Tabs or segmented controls, if used, should animate with an underline or background pill, not bouncing or sliding theatrics.
- **Recommendation:** Theme switching should feel polished but brief.
- **Recommendation:** Do not animate proof counters, number walls, or speculative UI surfaces.

## Asset requirements

### Required for core launch

| Asset | Status | Launch use rule |
|---|---|---|
| Approved wordmark / logo files | **Pending asset approval** | Required before build finalisation |
| Real current web-app screenshots | **Approved for launch** | Use only if real, current, readable, and route-appropriate |
| Screenshot crops of real workflow moments | **Approved for launch** | Use when full screenshots are visually weak or unreadable on smaller screens |
| Route cards visual treatment | **Approved for launch** | Required for home / router |
| Workflow proof cards | **Approved for launch** | Required on home, trade, and product pages |
| “What happens next” module content | **Approved for launch** | Required on trade, product, and onboarding pages |
| Footer legal/compliance links | **Required** | Must be live and accurate at launch |

### Conditional assets

| Asset | Status | Notes |
|---|---|---|
| Trade testimonial(s) | **Approved with qualification** | Use only if current, approved, and clearly attributed |
| Partner logos | **Approved with qualification** | Use only if relationship and wording are accurate; never as customer proof |
| Household screenshots | **Unknown / needs validation** | Do not ship unless household route is confirmed |
| Household testimonials | **Unknown / needs validation** | Route-specific only |
| Household CTA labels | **Unknown / needs validation** | Must not inherit business CTA logic |
| Plan names, trial wording, member wording | **Unknown / needs validation** | Do not publish unless confirmed current |

### Blocked assets

- **Blocked for launch:** stock lifestyle photography, smiling office-team filler, vehicle glamour shots, telematics maps, route-line graphics, enterprise command-centre dashboards, speculative analytics surfaces, roadmap UI presented as current product, customer-logo walls, awards blocks, and hype-motion hero treatment.

## Analytics events

### Analytics status

- **Unknown / needs validation:** Analytics platform.
- **Recommendation:** Implement a simple event taxonomy that can be mapped later to the chosen tool without renaming core events.

### Recommended core events

| Event name | Trigger | Required properties |
|---|---|---|
| `page_view` | Page load | `page_name`, `page_type`, `route_context`, `theme` |
| `route_select` | Click on route card or route CTA | `selected_route`, `source_page`, `cta_label` |
| `cta_click` | Any major CTA click | `page_name`, `cta_label`, `cta_type`, `route_context`, `destination` |
| `proof_interaction` | Click/expand on proof card, testimonial, or fit matrix item if interactive | `page_name`, `proof_type`, `proof_label`, `route_context` |
| `how_it_works_step_view` | Step / workflow module enters viewport or is advanced interactively | `page_name`, `step_id`, `route_context` |
| `onboarding_start` | User begins the start/onboarding action | `route_context`, `entry_page`, `cta_label` |
| `form_submit_attempt` | Submit click on onboarding form/panel | `route_context`, `form_name` |
| `form_submit_success` | Successful submit | `route_context`, `form_name` |
| `form_submit_error` | Validation or server failure | `route_context`, `form_name`, `error_type` |
| `theme_toggle` | Theme change | `from_theme`, `to_theme`, `page_name` |

### Recommended route values

- **Recommendation:** `trade`
- **Recommendation:** `household`
- **Recommendation:** `mixed/router`
- **Recommendation:** `unknown`

### Minimum measurement goals

- **Recommendation:** Measure whether visitors choose the trade route, reach the trade page, proceed to product detail, and begin the onboarding flow.
- **Recommendation:** If the household route launches, measure it separately rather than blending conversion reporting.
- **Recommendation:** Keep event naming stable even if the CTA wording changes.

## Accessibility and SEO basics

### Accessibility basics

- **Recommendation:** Treat accessibility as a build requirement, not a QA afterthought.
- **Recommendation:** Meet at least solid WCAG 2.2 AA-style implementation practices even though no formal target has yet been supplied.
- **Recommendation:** Implement:
  - semantic heading order with one H1 per page
  - keyboard-accessible nav, route cards, toggles, and form controls
  - visible focus states on all interactive elements
  - sufficient colour contrast in both themes
  - alt text for screenshots only where the image communicates unique information not already present in adjacent copy
  - labelled form fields, helper text, and clear inline error messaging
  - reduced-motion support
  - skip link to main content
- **Fact / Recommendation:** The primary amber CTA colour with dark label text already supports strong contrast for button copy.

### SEO basics

- **Unknown / needs validation:** Broader SEO strategy.
- **Recommendation:** Implement baseline technical SEO only in this release:
  - unique title and meta description per page
  - clean, human-readable URLs
  - canonical tags
  - one clear H1 per page
  - structured internal linking between route, product, use-case, and start pages
  - crawlable HTML for core copy and CTA paths
  - no thin placeholder pages published to the index
- **Recommendation:** Do not spin up a resource hub, comparison library, or broad SEO page program until the routed core site is stable.
- **Recommendation:** If the household route is not live, do not publish an indexable household page shell.

## Implementation constraints and open questions

### Constraints that should change build decisions now

- **Fact:** The household route is conditional.
- **Fact:** Pricing language is unresolved.
- **Fact:** CTA wording depends on the real onboarding motion.
- **Fact:** Some booking / approval / payment language is partner-enabled and must not be presented as wholly FleetHive-native.
- **Fact:** Proof ownership is still mixed or unresolved for some quantitative claims.
- **Recommendation:** Build the system so unresolved claims and sections can be omitted without redesigning the page.

### Open questions

1. **Unknown / needs validation:** What is the target stack?
2. **Unknown / needs validation:** Is there a CMS, or is content maintained directly in code for the first release?
3. **Unknown / needs validation:** What is the exact trade conversion motion: walkthrough, assisted setup, hybrid onboarding, or self-serve?
4. **Unknown / needs validation:** Is the household route part of day-one launch?
5. **Unknown / needs validation:** Does onboarding require separate trade and household entry states or pages?
6. **Unknown / needs validation:** Which screenshots are approved, current, and segment-appropriate?
7. **Unknown / needs validation:** Which testimonials are approved and attributable by audience segment?
8. **Unknown / needs validation:** Are partner logos permitted, and under what wording rules?
9. **Unknown / needs validation:** What pricing / plan / trial / member language, if any, is safe to publish?
10. **Unknown / needs validation:** Are existing legal pages reused or rebuilt?
11. **Unknown / needs validation:** What analytics platform should receive the recommended event taxonomy?
12. **Unknown / needs validation:** Are there any delivery deadlines, phased-launch constraints, or approval gates that affect scope?

## Handoff payload for red-team review

### What red-team should test

- **Recommendation:** Does the build still behave as a trade-first routed site, or has it drifted back into “for everyone with vehicles” language?
- **Recommendation:** Does any page imply broader fleet-management breadth than the current product truth supports?
- **Recommendation:** Do any components smuggle in blocked assets such as pricing tables, logo walls, speculative dashboards, or telematics imagery?
- **Recommendation:** Is the CTA wording operationally true on every page?
- **Recommendation:** Are product-native and partner-enabled claims still clearly separated?
- **Recommendation:** If the household route is not live, has any residual household proof or CTA logic leaked into the primary trade story?
- **Recommendation:** Are proof-bearing elements clearly qualified, or has visual polish started to overstate certainty?

### What red-team should receive with this file

- **Required:** page templates or wireframes for the required launch pages
- **Required:** component list mapped to implemented sections
- **Required:** screenshot inventory used in build
- **Required:** copy inventory showing any placeholders still unresolved
- **Required:** CTA map showing destination and motion for each major CTA
- **Required:** analytics event map implemented in the chosen stack
- **Required:** issue log for all unresolved items listed above

### Red-team pass / fail lens

- **Pass:** The build is executable, route-aware, proof-governed, and does not rely on invented maturity cues.
- **Fail:** The build looks polished but requires design or development to silently invent stack logic, proof, pricing, route scope, or onboarding behaviour.
