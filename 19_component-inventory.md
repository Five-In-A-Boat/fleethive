Document: 19_component-inventory.md
Purpose: Create a tight component system so the build stays coherent and cannot drift into filler or invented UI patterns.
Status: Draft / working document
Primary input: 18_site-architecture-page-briefs.md
Supporting inputs used: 16_brand-design-language.md; 17_content-reference-status.md
Next file in chain: 19_website-copy-deck.md and 20_build-brief.md

## Document metadata block

- **Fact:** This component inventory is derived primarily from the locked page jobs, section order, proof rules, and routing logic in `18_site-architecture-page-briefs.md`.
- **Fact:** Supporting design constraints come from `16_brand-design-language.md`, which defines FleetHive as screenshot-first, route-aware, light/dark-mode ready, yellow-led, and visually restrained rather than theatrical.
- **Fact:** Supporting content-governance constraints come from `17_content-reference-status.md`, which approves real screenshots, route cards, workflow proof cards, expectation modules, and source labels, while blocking pricing tables, logo walls, speculative dashboards, telematics imagery, and mixed-audience proof walls.
- **Fact:** The current site architecture is trade-first. Household is a secondary routed path and remains conditional until launch scope is confirmed.
- **Unknown / needs validation:** No operator-supplied platform constraints, reusable existing component library, or engineering constraints were supplied for this file.
- **Unknown / needs validation:** No final approved screenshot pack, logo rules, testimonial pack, route-launch decision, or final CTA wording was supplied.
- **Conflict note:** The request asks for `19_component-inventory.md`, while the embedded output contract says `Document: 18_component-inventory.md` and names `19_website-copy-deck.md` and `20_build-brief.md` as the next files. This document follows the current request and records the numbering conflict instead of smoothing it over.

## Executive summary

- **Recommendation:** The system should stay compact and route-aware. It should support the current page architecture directly rather than try to anticipate a larger SaaS site.
- **Recommendation:** The core system should be built around eleven reusable components. That is enough to support the current page briefs without encouraging filler blocks.
- **Fact:** The page briefs repeatedly require the same building blocks: route-aware navigation, route cards, a screenshot-led hero, workflow proof, fit diagnosis, proof labelling, expectation-setting, explicit CTA areas, and legal/compliance scaffolding.
- **Recommendation:** The component system should privilege **workflow proof over decorative polish**, **trade-route hierarchy over blended audience treatment**, and **clear next-step language over brand-slogan CTAs**.
- **Recommendation:** Any component that depends on unresolved proof classes should either be conditional or excluded. The system should make it difficult to publish unresolved pricing, mixed-source proof, or speculative UI by accident.

## Component system principles

### 1) Page-job first, not pattern-library first
- **Recommendation:** Include a component only if at least one page brief already needs it.
- **Recommendation:** Prefer section-level components that carry a clear conversion or qualification job.
- **Recommendation:** Do not create generic SaaS filler such as feature strips, logo bands, vanity stat rows, or culture/team blocks simply because they are common elsewhere.

### 2) Route-aware by default
- **Fact:** The architecture routes visitors into trade first, with household as a conditional secondary path.
- **Recommendation:** Components should therefore support `trade`, `household`, `mixed/router`, or `route-neutral` scope explicitly.
- **Recommendation:** No reusable component should assume that business and household copy, proof, and CTA logic can be blended safely.

### 3) Workflow proof before numerical proof
- **Fact:** The page briefs and content-status rules both prioritise real screenshots, workflow proof cards, and expectation modules over big-number proof.
- **Recommendation:** The visual centre of gravity should be real product behaviour: reminders, records, spend visibility, benchmarking/forecasting, and booking-related actions.
- **Recommendation:** Quantified proof, testimonials, and partner-enabled references should appear only inside components built to qualify them clearly.

### 4) Truth state must stay visible
- **Recommendation:** Proof-bearing components should expose source ownership and proof status rather than bury them.
- **Recommendation:** Reusable proof components should include visible labels such as `product-native`, `partner-enabled`, `customer quote`, or `contextual quantitative`.
- **Recommendation:** Components should make omission easy. If proof is unresolved, the component should collapse cleanly rather than be back-filled with weak substitutes.

### 5) Visual restraint is a system rule, not a style preference
- **Fact:** The design language explicitly blocks speculative dashboards, telematics imagery, command-centre visuals, and hype motion.
- **Recommendation:** Components should therefore support real screenshots, simple diagrams, quiet motion, and light/dark parity without needing decorative theatre.

### 6) One dominant action per section
- **Recommendation:** CTA-bearing components should support a single primary action and, where needed, one clearly subordinate secondary action.
- **Recommendation:** Components must not revive vague CTA language such as `Join the Hive` as the primary system.

## Approved component list

| Component | Type | Required on | Status | Why it exists |
|---|---|---|---|---|
| Theme-aware top nav | Global chrome | All pages | Core | Holds route-aware wayfinding and CTA slot without adding page clutter |
| Route hero | Section-level | Home, Trade, Household *(if live)*, Product, Use-cases, Onboarding | Core | Establishes audience fit, page job, and the right next step fast |
| Route cards | Section-level | Home, Use-cases | Core | Prevents audience blur and makes route choice explicit |
| Workflow proof section | Section-level | Home, Trade, Product, Household *(if live)* | Core | Shows present-tense product behaviour using real screenshots and proof cards |
| Use-case / fit cards | Section-level | Trade, Use-cases, Household *(if live)* | Core | Helps visitors self-qualify by situation rather than persona theatre |
| Comparison / fit matrix | Section-level | Home, Trade, Use-cases | Core | Clarifies route difference, product fit, and wrong-fit cases without competitor theatre |
| Source-labelled proof card system | Section-level / supporting | Home, Trade, Product, Use-cases, Onboarding | Core | Keeps proof ownership and evidence strength visible |
| “What happens next” expectation module | Section-level | Trade, Product, Onboarding, Household *(if live)* | Core | Reduces friction by explaining the real next step |
| Route-aware CTA bar | Section-level | Home, Trade, Product, Use-cases, Household *(if live)* | Core | Repeats the correct route-matched action without changing the motion |
| Onboarding action panel | Section-level | Onboarding | Core | Makes the committed action clean and explicit |
| Footer legal / compliance block | Global chrome | All pages | Core | Supplies truthful trust scaffolding without fake maturity cues |
| Qualified testimonial quote | Supporting | Trade, Household *(if live)*, Onboarding | Conditional | Adds warm credibility only when audience-matched and approved |

## For each component

## 1) Theme-aware top nav

### Purpose
Provide consistent global wayfinding, light/dark mode control, and one route-aware CTA slot without overpowering the page.

### Allowed variants
- **Recommendation:** `router nav` for the home page with route-aware CTA emphasis.
- **Recommendation:** `trade nav` for trade-priority pages.
- **Recommendation:** `household nav` only if that route launches.
- **Recommendation:** `neutral nav` for product / onboarding pages where the user is already in-flow.

### Required content
- Brand wordmark or approved text lockup.
- Primary navigation links aligned to the actual page set.
- Light/dark mode toggle.
- One primary CTA slot.

### Optional content
- Secondary utility link such as `See who it’s for`.
- Route indicator or breadcrumb-style label where helpful.

### Forbidden content
- **Blocked:** multi-CTA button clusters in the nav.
- **Blocked:** customer logos, awards, ratings, or trust strips.
- **Blocked:** household CTA in the primary slot if the household route is not live.

### Proof dependencies
- **None required** for the chrome itself.
- **Unknown / needs validation:** final approved logo files and lockup rules.
- **Unknown / needs validation:** final CTA wording once motion is confirmed.

### Responsive notes
- On mobile, collapse to a minimal menu plus one visible primary CTA.
- Do not place both route CTAs at equal weight in the top bar on small screens.

## 2) Route hero

### Purpose
Open each page with a clear audience frame, safe category language, one primary action, and one real visual stage where appropriate.

### Allowed variants
- **Recommendation:** `home/router hero` with route-first emphasis.
- **Recommendation:** `trade hero` with operational fit emphasis.
- **Recommendation:** `household hero` only if live, with calmer utility tone.
- **Recommendation:** `product hero` with workflow clarity emphasis.
- **Recommendation:** `use-cases hero` with fit-diagnosis emphasis.
- **Recommendation:** `onboarding hero` with expectation-setting emphasis and reduced visual chrome.

### Required content
- One headline tied to the page job.
- One explanatory subhead grounded in present-tense product truth.
- One primary CTA.
- One controlled visual stage: ideally a real screenshot or, on onboarding, a reduced detail panel.

### Optional content
- One secondary CTA.
- One short proof caption beneath the screenshot.
- One eyebrow label if it changes interpretation meaningfully.

### Forbidden content
- **Blocked:** blended household/business hero language.
- **Blocked:** hero stat walls.
- **Blocked:** pricing language, “free” language, or plan names while packaging remains unresolved.
- **Blocked:** speculative composite UI, telematics visuals, command-centre graphics, or hype motion.

### Proof dependencies
- **Approved with qualification:** hero screenshot stage only if the screenshot is real, current, readable, and matched to the claim.
- **Unknown / needs validation:** screenshot approval pack.
- **Unknown / needs validation:** whether household hero assets exist and are launch-safe.

### Responsive notes
- Stack copy above the visual on mobile.
- Keep the first screen readable without requiring the screenshot to do the explanatory work.
- If the screenshot becomes illegible on small screens, switch to a truthful cropped detail rather than a decorative mockup.

## 3) Route cards

### Purpose
Help visitors self-identify quickly without flattening business and household journeys into one generic message.

### Allowed variants
- **Recommendation:** `two-card router` for trade vs household on the home page.
- **Recommendation:** `single secondary card` when household remains visible but subordinate.
- **Recommendation:** `fit card row` inside the use-cases page.

### Required content
- Audience label.
- One-line fit statement.
- One CTA per card.
- One short clue about why the route exists.

### Optional content
- Small supporting icon.
- Vehicle-count or context cue.
- Route-status badge such as `Primary route` or `Conditional route`.

### Forbidden content
- **Blocked:** equal-weight route storytelling if household is not launch-confirmed.
- **Blocked:** quantified proof or trust badges inside the cards.
- **Blocked:** long feature lists.

### Proof dependencies
- **Fact:** trade route is primary.
- **Unknown / needs validation:** whether the household route is live at launch.
- **Recommendation:** if household is unresolved, use a lighter secondary card or remove it entirely.

### Responsive notes
- On mobile, stack vertically with the trade card first.
- Keep cards scannable; each should fit within one compact viewport block.

## 4) Workflow proof section

### Purpose
Show what FleetHive helps users do now through real product moments rather than abstract feature language.

### Allowed variants
- **Recommendation:** `bento workflow grid` for richer pages such as Trade or Product.
- **Recommendation:** `three-card proof strip` for Home.
- **Recommendation:** `sequence layout` for Product / how-it-works.
- **Recommendation:** `lighter utility grid` for Household if that route launches.

### Required content
- Section heading tied to a real workflow job.
- 2–4 workflow panels or cards.
- Real screenshot or cropped UI detail in each panel where proof is visual.
- Short copy describing the user action or system behaviour.

### Optional content
- Proof labels.
- One contextual quantified item where source ownership is explicit.
- One partner-enabled clarification where relevant.

### Forbidden content
- **Blocked:** feature laundry lists with no workflow logic.
- **Blocked:** roadmap modules represented as current product.
- **Blocked:** telematics, route-optimisation, radar, or live-map imagery.
- **Blocked:** large mixed-source number walls.

### Proof dependencies
- **Approved for launch:** real screenshots of reminders, records, cost visibility, service workflow.
- **Approved with qualification:** partner-enabled booking/payment references when labelled clearly.
- **Unknown / needs validation:** final screenshot pack; proof ownership for any quantified support.

### Responsive notes
- On mobile, move from multi-column bento layouts to a single scroll sequence.
- Preserve proof labels and captions; do not hide qualification on small screens.

## 5) Use-case / fit cards

### Purpose
Translate the product into situation-specific relevance so visitors can decide whether FleetHive fits their context.

### Allowed variants
- **Recommendation:** `trade scenario cards` such as growing van fleet, admin overload, reactive repairs, unclear spend.
- **Recommendation:** `household scenario cards` only on a confirmed household route.
- **Recommendation:** `wrong-fit clarifier card` where the page needs explicit disqualification.

### Required content
- Situation title.
- Short description of the operating pattern.
- Route-specific outcome or next step.

### Optional content
- Small workflow cue.
- Audience tag.
- Negative qualifier such as `Not for enterprise fleet teams` where useful.

### Forbidden content
- **Blocked:** bloated persona museums.
- **Blocked:** decorative role cards with no message difference.
- **Blocked:** mixed-audience card sets that pretend all routes are equally important.

### Proof dependencies
- **Recommendation:** derive directly from the approved page briefs and ICP logic.
- **Unknown / needs validation:** household scenarios for launch.

### Responsive notes
- Use a simple vertical stack on mobile.
- Avoid carousels; fit diagnosis should remain visible and comparable.

## 6) Comparison / fit matrix

### Purpose
Help the visitor understand route difference, product fit, or wrong-fit cases without drifting into competitor chest-beating.

### Allowed variants
- **Recommendation:** `route-difference matrix` on the home page.
- **Recommendation:** `fit / not-fit matrix` on Trade or Use-cases.
- **Recommendation:** `what FleetHive is / is not` matrix on Trade.

### Required content
- Clear comparison axis.
- 2–4 rows maximum for launch-safe brevity.
- Explicit interpretation heading.

### Optional content
- One CTA beneath the matrix.
- Short explanation note.

### Forbidden content
- **Blocked:** competitive dominance tables.
- **Blocked:** superiority claims without evidence.
- **Blocked:** dense enterprise-style tables that imply broader product maturity.

### Proof dependencies
- **Recommendation:** use only for qualification, not unsupported claims.
- **Unknown / needs validation:** any quantified comparison claim.

### Responsive notes
- Collapse to stacked comparison cards on mobile.
- Preserve the same comparison order as desktop so interpretation does not change by viewport.

## 7) Source-labelled proof card system

### Purpose
Make proof ownership and proof class visible so the site does not accidentally mix product-native proof, partner-enabled proof, quotes, and context numbers into one blur.

### Allowed variants
- **Recommendation:** `product-native proof card`.
- **Recommendation:** `partner-enabled proof card`.
- **Recommendation:** `customer quote card`.
- **Recommendation:** `contextual quantitative card`.
- **Recommendation:** `future / blocked` is an internal drafting label only and must not appear publicly.

### Required content
- Visible source-type label.
- Short proof statement.
- Supporting caption or qualifier.

### Optional content
- Attribution line.
- Small icon or proof-state chip.
- Link or footnote anchor in implementation, if needed internally.

### Forbidden content
- **Blocked:** unlabeled proof blocks.
- **Blocked:** stacking multiple proof classes into one card.
- **Blocked:** quote cards used as substitutes for product explanation.

### Proof dependencies
- **Fact:** every proof-bearing line should carry internal source-type status during drafting.
- **Unknown / needs validation:** final source-owner and approval fields for each proof item.

### Responsive notes
- Labels must remain visible on mobile.
- Do not move qualifiers into hover-only states.

## 8) “What happens next” expectation module

### Purpose
Reduce CTA friction by explaining the real motion in plain language.

### Allowed variants
- **Recommendation:** `walkthrough expectation`.
- **Recommendation:** `assisted setup expectation`.
- **Recommendation:** `guided onboarding expectation`.
- **Recommendation:** `household quick-start expectation` only if that route exists.

### Required content
- Title explaining what happens next.
- 2–4 short steps or expectation points.
- Route-matched CTA.

### Optional content
- Time or effort cue only if verified.
- Small reassurance line.
- One audience-matched testimonial line if approved.

### Forbidden content
- **Blocked:** vague promise language.
- **Blocked:** multiple possible motions in one module.
- **Blocked:** pricing/trial/member language unless commercially confirmed.

### Proof dependencies
- **Unknown / needs validation:** exact trade motion: walkthrough, assisted setup, hybrid onboarding, or true self-serve.
- **Unknown / needs validation:** whether trade and household require separate versions.

### Responsive notes
- Present as a simple stacked checklist on mobile.
- Keep the CTA attached to the expectation list, not separated below a long scroll.

## 9) Route-aware CTA bar

### Purpose
Repeat the correct next step at decision points without changing the ask or introducing a new conversion path.

### Allowed variants
- **Recommendation:** `trade CTA bar`.
- **Recommendation:** `household CTA bar` if live.
- **Recommendation:** `router CTA bar` guiding to route choice rather than final commitment.

### Required content
- One primary CTA.
- One short line of context.

### Optional content
- One secondary educational CTA.
- Route tag.

### Forbidden content
- **Blocked:** equal-weight competing CTAs.
- **Blocked:** brand-slogan CTA copy with no action meaning.
- **Blocked:** proof clutter inside the CTA area.

### Proof dependencies
- **Unknown / needs validation:** final CTA wording and target URLs/states.
- **Recommendation:** route-aware CTA bars should reuse only confirmed motion language.

### Responsive notes
- Keep as a compact band, not a modal-like interruption.
- On mobile, stack context over the button; never hide the context line entirely.

## 10) Onboarding action panel

### Purpose
Create a clean, high-intent conversion moment on the onboarding page that removes ambiguity about the committed action.

### Allowed variants
- **Recommendation:** `trade onboarding action panel`.
- **Recommendation:** `household onboarding action panel` only if the route exists and the motion differs materially.
- **Recommendation:** `neutral account-start panel` only if one truthful flow serves both routes.

### Required content
- Explicit committed action title.
- Key expectation points.
- One primary CTA.
- Supporting legal/compliance reference area.

### Optional content
- One anxiety-reducing approved quote.
- Small note about what information is needed next, only if verified.

### Forbidden content
- **Blocked:** pricing grids.
- **Blocked:** free/member/trial claims unless confirmed.
- **Blocked:** big-number proof, mixed testimonials, or partner-scale claims.
- **Blocked:** hedging between demo request, account creation, and assisted setup.

### Proof dependencies
- **Unknown / needs validation:** whether one onboarding entry state can serve both routes truthfully.
- **Unknown / needs validation:** exact legal/commercial wording.

### Responsive notes
- Keep the panel narrow and detail-first.
- On mobile, ensure the primary action stays above the fold or very near it.

## 11) Footer legal / compliance block

### Purpose
Close each page with truthful trust scaffolding, route-neutral utility links, and legal continuity.

### Allowed variants
- **Recommendation:** `full footer` for primary pages.
- **Recommendation:** `reduced footer` for onboarding pages if a lower-distraction close is preferred.

### Required content
- Legal links.
- Company / contact basics.
- Route-neutral secondary navigation as appropriate.

### Optional content
- Calm restatement of the page’s next step.
- Theme toggle repeat if needed.

### Forbidden content
- **Blocked:** customer logo strips.
- **Blocked:** awards, badges, review widgets.
- **Blocked:** social proof wallpaper.
- **Blocked:** extra CTA clutter.

### Proof dependencies
- **Fact:** legal/compliance references are safe trust material.
- **Unknown / needs validation:** final company details, legal-page URLs, and any partner-logo permissions.

### Responsive notes
- Use a simple single-column stack on mobile.
- Keep legal links readable and untangled from promotional content.

## 12) Qualified testimonial quote *(conditional component)*

### Purpose
Add warm, route-matched credibility where a page benefits from one human proof element.

### Allowed variants
- **Recommendation:** `trade quote` on Trade or Onboarding.
- **Recommendation:** `household quote` only on a confirmed household route.
- **Recommendation:** `inline reassurance quote` inside an expectation module where appropriate.

### Required content
- Quote.
- Attribution.
- Audience relevance.

### Optional content
- Role/company descriptor.
- Small source-type label.

### Forbidden content
- **Blocked:** carousel treatment.
- **Blocked:** mixed-segment quote sets.
- **Blocked:** vague unattributed praise.

### Proof dependencies
- **Approved with qualification:** named customer testimonials only if current, approved, clearly attributed, and audience-matched.
- **Unknown / needs validation:** final approved testimonial list by segment.

### Responsive notes
- Keep to one quote block per proof area.
- On mobile, do not let the quote dominate the workflow explanation.

## Components explicitly not allowed

The following components are not approved for the current launch-safe system because they either conflict with the page briefs or depend on blocked/unresolved proof classes.

1. **Public pricing table / plan grid**
   - **Blocked:** pricing, trial, member, and free-language remain unresolved.

2. **Customer-logo wall / “Trusted by” strip**
   - **Blocked:** no approved logo set or permission model; creates fake maturity cues.

3. **Awards / badges / review-widget strip**
   - **Blocked:** no approved asset set and high proof-inflation risk.

4. **Generic feature grid**
   - **Blocked:** the product pages must explain workflows, not dump categories into tiles.

5. **Hero stat wall**
   - **Blocked:** page briefs explicitly prioritise workflow proof before numbers.

6. **Speculative dashboard showcase / roadmap gallery**
   - **Blocked:** fake or beautified product UI is not allowed.

7. **Telematics / map / route-line / radar visual block**
   - **Blocked:** implies a product category breadth the truth base does not support.

8. **Mixed-audience testimonial wall or carousel**
   - **Blocked:** flattens trade and household proof into one undifferentiated story.

9. **Partner-logo endorsement strip**
   - **Blocked for now:** partner relationships may be referenced only where relevant and accurately qualified, not used as free-floating proof.

10. **Broad FAQ accordion as a default section**
    - **Recommendation:** not part of the current system unless later copy work proves it is genuinely needed.

11. **Lifestyle/team photography block**
    - **Blocked:** stock-office imagery, handshake filler, and glamour vehicle imagery are not launch-safe proof.

12. **Hype-motion hero or floating data theatre**
    - **Blocked:** motion may clarify state or quality, but must not manufacture platform theatre.

## Reuse rules across pages

### Route scope rules
- **Recommendation:** Every component instance should declare `route_scope`: `trade`, `household`, `mixed/router`, or `route-neutral`.
- **Recommendation:** Household-scoped variants should not appear until the household route is launch-confirmed.
- **Recommendation:** Trade-scoped proof should not be reused on household pages.

### Proof rules
- **Recommendation:** Any proof-bearing component should carry fields for `source_owner`, `source_type`, `approval_status`, and `audience_scope`.
- **Recommendation:** If those fields are empty, the proof area should not publish.
- **Recommendation:** Use at most one contextual quantified item per component instance unless the section job specifically depends on comparison.

### CTA rules
- **Recommendation:** Each component instance should support one dominant CTA only.
- **Recommendation:** If route motion differs, duplicate the component by route rather than trying to make one blended version do conflicting jobs.

### Visual rules
- **Recommendation:** One real screenshot stage is enough for a hero.
- **Recommendation:** Reuse the same screenshot treatment, caption style, and proof-label system across pages so the site feels coherent.
- **Recommendation:** Do not create page-specific decorative exceptions that imply a broader product category.

### Compression rules
- **Recommendation:** If the IA is compressed later, preserve component jobs rather than page count.
- **Recommendation:** Home may absorb parts of Use-cases or Product, but routing, workflow explanation, fit diagnosis, and expectation-setting must still remain distinct.

### Household-route rule
- **Recommendation:** Build household variants only after confirming:
  - route launch decision
  - approved screenshots
  - approved testimonials
  - truthful CTA path

## Handoff payload for copy deck and build brief

## For the website copy deck

### Component content fields to draft against
For every component instance, copy should be drafted with these structured fields:

| Field | Why it matters |
|---|---|
| `component_name` | Keeps copy attached to the correct build block |
| `page` | Prevents generic copy reuse across page jobs |
| `route_scope` | Stops business and household language from blending |
| `audience_scope` | Keeps proof and tone audience-matched |
| `headline` | Primary message for the component |
| `supporting_copy` | Clarifies present-tense value |
| `primary_cta_label` | Ensures CTA truthfulness |
| `secondary_cta_label` | Optional and subordinate only |
| `proof_type` | Forces proof classification |
| `proof_owner` | Prevents partner/native confusion |
| `proof_status` | Prevents unresolved proof from slipping into launch copy |
| `asset_required` | Flags screenshot, quote, or diagram dependencies |
| `approval_needed` | Makes blockers visible early |

### Copy drafting rules
- **Recommendation:** Draft copy component-by-component, not page-by-page from a generic homepage template.
- **Recommendation:** Keep trade copy practical and operational.
- **Recommendation:** Keep household copy calmer and utility-led if that route is live.
- **Recommendation:** Do not draft copy for blocked components such as pricing tables, logo walls, awards strips, or generic FAQs unless strategy changes later.

## For the build brief

### Build-first component order
1. Theme-aware top nav
2. Route hero
3. Route cards
4. Workflow proof section
5. Source-labelled proof card system
6. “What happens next” expectation module
7. Route-aware CTA bar
8. Use-case / fit cards
9. Comparison / fit matrix
10. Onboarding action panel
11. Footer legal / compliance block
12. Qualified testimonial quote *(only if approved assets exist)*

### Implementation requirements
- **Recommendation:** Treat proof-bearing components as structured content objects, not freeform rich text.
- **Recommendation:** Every proof-bearing component should have fields for:
  - source owner
  - source type
  - route scope
  - audience scope
  - approval status
  - asset reference
- **Recommendation:** Add publish guards so blocked or unresolved proof classes cannot render accidentally.
- **Recommendation:** Build route-aware variants as explicit component states rather than ad hoc page-level forks.
- **Recommendation:** Support light and dark mode parity at the component level from the start.

### Open validation requests for build
- final approved logo files and usage rules
- final approved screenshot pack
- final approved testimonial list by route
- final household-route launch decision
- final CTA wording by route
- final onboarding motion by route
- final legal/commercial wording for onboarding entry

## Minimal launch-safe system summary

- **Recommendation:** If the launch needs to stay especially lean, the non-negotiable system is:
  1. Theme-aware top nav
  2. Route hero
  3. Route cards
  4. Workflow proof section
  5. Source-labelled proof card system
  6. “What happens next” expectation module
  7. Route-aware CTA bar
  8. Onboarding action panel
  9. Footer legal / compliance block
- **Inference:** Everything else can be added later without breaking the architecture, but removing any of the nine items above would weaken routing clarity, proof discipline, or conversion truthfulness.
