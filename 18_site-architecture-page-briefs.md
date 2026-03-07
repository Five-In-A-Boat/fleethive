Document: 18_site-architecture-page-briefs.md
Purpose: Lock page structure before final copy and build so every section has a job and no filler blocks appear.
Status: Draft / working document
Primary input: 15_messaging-architecture.md
Supporting inputs used: 14_proof-offer-conversion.md; 16_brand-design-language.md; 17_content-reference-status.md
Next file in chain: 18_component-inventory.md and 19_website-copy-deck.md

## Document metadata block

- **Fact:** The primary continuity source defines six message jobs: Home / router, Trade page, Household page *(conditional)*, Product / how-it-works, Use-cases / who-it’s-for, and Sign-up / onboarding entry.
- **Fact:** The same source says the site should route visitors toward the **trade path first** and keep the household path visible but secondary.
- **Fact:** Supporting conversion architecture says the trade path should use an **assisted or hybrid** motion until self-serve is clearly validated, and that CTA language should describe the real next step rather than use a brand slogan.
- **Fact:** Supporting content-status governance says the launch should be built around **real current screenshots, route cards, workflow proof cards, and “what happens next” modules**, while pricing tables, logo walls, speculative UI, telematics imagery, and blended household/business proof are blocked or unresolved.
- **Fact:** Supporting design language says the visual system should be **screenshot-first, route-aware, proof-labelled, light/dark-mode ready, and yellow-led**, without enterprise command-centre theatre.
- **Unknown / needs validation:** No confirmed page list, routing architecture, SEO constraints, or launch decision on the household route were supplied as operator steering for this file.
- **Recommendation:** Treat the page map below as the safest working IA derived from the current canonical chain, not as a claim that every page is fixed beyond review.
- **Conflict note:** The prompt output contract says the top line should read `Document: 17_site-architecture-page-briefs.md`, but the current request explicitly asks for `18_site-architecture-page-briefs.md`. This file follows the current request and records the discrepancy instead of smoothing it over.

## Executive summary

- **Recommendation:** The site should be architected as a **trade-first routed marketing system**, not as one blended homepage trying to serve households, sole traders, and SME fleets in one voice.
- **Recommendation:** The minimum safe working structure is:
  1. **Home / router**
  2. **Trade page**
  3. **Product / how-it-works**
  4. **Use-cases / who-it’s-for**
  5. **Sign-up / onboarding entry**
  6. **Household page** *(conditional, only if that route is genuinely live at launch)*
- **Inference:** This structure is the cleanest way to preserve the current strategy: trade micro-fleets remain the commercial centre of gravity, while household visitors can still be handled without flattening the site into “for all vehicle owners and every fleet.”
- **Recommendation:** Every page should answer one distinct buyer question:
  - **Home:** Which route am I in?
  - **Trade:** Is this built for a business like mine?
  - **Product:** What does FleetHive actually do today?
  - **Use-cases:** Does this fit my situation?
  - **Onboarding:** What exactly happens next?
  - **Household:** Is there a simpler household route for me? *(only if launched)*
- **Recommendation:** Do **not** add pricing, customer-logo, awards, case-study, integrations, or broad comparison pages in the current architecture. Those either depend on unresolved proof/packaging or create maturity cues the truth base does not yet support.

## Site-level routing / page map

### Working routing model

- **Recommendation:** Default trade journey = `Home / router -> Trade page -> Product / how-it-works or direct onboarding entry -> Sign-up / onboarding entry`
- **Recommendation:** Household journey *(only if live)* = `Home / router -> Household page -> Product detail if needed -> Sign-up / onboarding entry`
- **Recommendation:** Uncertain journey = `Home / router -> Use-cases / who-it’s-for -> correct route -> next step`
- **Recommendation:** If the final IA is compressed into fewer URLs, preserve these **message jobs, proof rules, and CTA states** inside fewer templates rather than collapsing them into a generic story.

### Working page map

| Page | Status | Primary audience | Primary job | Primary CTA logic | Notes |
|---|---|---|---|---|---|
| **Home / router** | **Recommendation:** Required | Mixed top-of-funnel, trade-first | Route visitors clearly before asking for commitment | Route CTA first | No proof wall, no pricing, no blended headline claim |
| **Trade page** | **Recommendation:** Required | Owner-managed trades / field-service businesses with roughly 3–15 vehicles | Qualify and convert trade visitors | Explicit assisted/hybrid CTA | Main commercial page |
| **Household page** | **Unknown / needs validation:** Conditional | Multi-car households | Convert household visitors without polluting trade story | Lower-friction CTA only if route exists | Do not treat as launch-essential unless confirmed |
| **Product / how-it-works** | **Recommendation:** Required | Mid-funnel visitors from either route | Explain live workflow and product boundaries | Continue the relevant route | Workflow proof first |
| **Use-cases / who-it’s-for** | **Recommendation:** Required | Visitors needing fit diagnosis | Resolve whether FleetHive fits this situation | Self-qualification CTA | Diagnostic, not broad persona theatre |
| **Sign-up / onboarding entry** | **Recommendation:** Required | High-intent visitors | Remove ambiguity around next step and commitment | One explicit committed action | Ideally route-specific if motions differ |

### Pages to exclude from the current architecture

- **Recommendation:** Exclude a public pricing page for now because pricing/public plan language is blocked or unresolved.
- **Recommendation:** Exclude a customer-logo / “trusted by” page or homepage strip because logo permission and relevance are not approved.
- **Recommendation:** Exclude a case-study page because no approved case-study set exists yet.
- **Recommendation:** Exclude an integrations page because the product-native vs partner-enabled boundary is still sensitive.
- **Recommendation:** Exclude a broad resource hub or SEO-library architecture until the core routed conversion system is stable.
- **Recommendation:** Exclude a generic FAQ page unless a later pass proves it is needed; current objections should be handled inside the relevant page sections first.

## Page briefs

## 1) Home / router page

### Purpose
- **Recommendation:** Establish immediate relevance, prevent audience blur, and route visitors into the correct path before any high-friction ask.

### Audience
- **Fact / Recommendation:** Mixed traffic, with **trade / small-fleet visitors treated as the centre of gravity**.
- **Unknown / needs validation:** Whether the household route is live at launch.

### Primary CTA
- **Recommendation:** Route selection first, such as:
  - `For trades businesses`
  - `For households` *(only if the route is live)*

### Secondary CTA
- **Recommendation:** Light educational CTA only, such as `See how it works` or `See who it’s for`.
- **Recommendation:** Do not use a generic `Join the Hive` CTA here.

### Section order

| Order | Section | Job of the section | Proof to include | Proof to avoid |
|---:|---|---|---|---|
| 1 | **Route-led hero** | State the core category safely and make route choice obvious | One real current screenshot stage if approved; present-tense category frame | Blended household/business headline proof; stats strip; pricing language |
| 2 | **Route cards** | Help visitors self-identify fast | Route cards for trades vs households; brief fit cues | Equal-weight audience storytelling that makes both paths look equally strategic |
| 3 | **Why FleetHive exists now** | Explain the shared parent problem: multiple vehicles create admin, maintenance, and cost-control mess | Workflow proof cards tied to reminders, records, spend visibility, service workflow | Broad fleet-management claims; telematics-like language |
| 4 | **Trade-first proof preview** | Show the main commercial route without making the homepage a full trade page | One trade-relevant workflow or testimonial cue if approved | Household proof in the main proof stack; mixed testimonial carousel |
| 5 | **How the routes differ** | Clarify that businesses and households do not follow the same path or need the same message | A small fit matrix or comparison table if qualified | Competitive dominance tables; audience flattening |
| 6 | **Route-aware next step** | Move the visitor into the correct path | Explicit route CTA repetition | Generic sign-up ask before route clarity |
| 7 | **Footer compliance / legal trust** | Preserve truthful boundaries and basic trust | Legal/compliance references | Awards, badges, “trusted by” rows |

### Proof to include
- **Approved / safest:** route cards, one real current screenshot stage, workflow proof cards, trade-first hierarchy, explicit “what happens next” cues if needed.
- **Approved with qualification:** one carefully matched trade testimonial, a restrained fit matrix, a labelled hero screenshot.
- **Recommendation:** Lead with **workflow proof before numbers**.

### Proof to avoid
- **Blocked / avoid:** pricing table, “free” / trial / member language, mixed-segment testimonial wall, partner-logo strip, customer-logo strip, telematics imagery, command-centre UI, speculative screenshots, large savings/network stats in the hero.
- **Unknown / needs validation:** household proof beyond route-card level if the route is not yet confirmed.

### Non-goals
- **Recommendation:** Do not explain every feature family.
- **Recommendation:** Do not ask for a sales or onboarding commitment before route clarity.
- **Recommendation:** Do not make the homepage prove both routes equally.

### Routing notes
- **Recommendation:** Trade route should be visually and structurally primary.
- **Recommendation:** If the household route is not live, keep the mention light and route only through copy or a lighter secondary card.

## 2) Trade page

### Purpose
- **Recommendation:** Prove that FleetHive is built for growing trades businesses with a handful of vans and turn qualified interest into a concrete next step.

### Audience
- **Fact / Recommendation:** Owner-managed UK trades / field-service businesses with roughly 3–15 vehicles; likely owner-director, office manager, or operations lead.

### Primary CTA
- **Recommendation:** Explicit assisted/hybrid CTA such as:
  - `Book a walkthrough`
  - `See how FleetHive fits your vans`
  - `Start assisted setup`

### Secondary CTA
- **Recommendation:** `See how it works`

### Section order

| Order | Section | Job of the section | Proof to include | Proof to avoid |
|---:|---|---|---|---|
| 1 | **Trade-specific hero** | State clearly that this is for growing trades businesses, not enterprise fleets | Real current screenshot; trade-fit headline; route-matched CTA | Generic fleet-tech headline; “all car owners” language |
| 2 | **Pain recognition block** | Name the operational pattern: too many vans for memory, no fleet department, admin spread across inboxes/spreadsheets | Situation-led cards; trade-specific problem statements | Generic efficiency noun stacks |
| 3 | **Present-tense workflow proof** | Show what FleetHive helps with now: reminders, records, spend visibility, invoice scrutiny, booking-related actions | Real screenshots; workflow proof cards; labelled product-native features | Roadmap modules, fake dashboards, telematics motifs |
| 4 | **Why it matters commercially** | Translate workflow into outcomes: fewer surprises, better cost visibility, less reactive chaos | One approved trade testimonial if available; conservative outcome framing | Guaranteed savings claims; unqualified numbers |
| 5 | **What FleetHive is not** | Neutralise wrong comparisons: not heavyweight fleet software, not just a booking marketplace | Comparison / fit matrix if qualified | Competitor-attack table; unproven superiority claims |
| 6 | **What happens next** | Reduce CTA friction by explaining the motion | Expectation module; step-by-step explanation | Vague “join” language |
| 7 | **Final route-matched CTA** | Capture high-intent visitors | One dominant trade CTA | Multiple conflicting actions |

### Proof to include
- **Approved / safest:** real workflow screenshots, workflow proof cards, “what happens next” module, trade-first visuals, present-tense feature labels.
- **Approved with qualification:** one trade-relevant testimonial, comparison/fit matrix, partner-enabled references only when clearly labelled.
- **Recommendation:** Where partner-enabled booking/payment appears, label it as partner-enabled rather than implying FleetHive owns the whole stack.

### Proof to avoid
- **Blocked / avoid:** household testimonials, mixed audience proof, pricing tables, “free” claims, customer logos, awards, hero stats, telematics imagery, enterprise dashboard theatre.
- **Recommendation:** Do not let partner/network scale substitute for trade-fit proof.

### Non-goals
- **Recommendation:** Do not sound like route optimisation, telematics, dispatch, or compliance software.
- **Recommendation:** Do not collapse the page into a compare-and-book marketplace pitch.
- **Recommendation:** Do not over-index on “community” without tying it to practical control and workflow.

### Routing notes
- **Recommendation:** This is the primary conversion page for the business route.
- **Recommendation:** Shorten the path to onboarding once fit is clear; do not trap qualified users in extra explanatory loops.

## 3) Household page *(conditional)*

### Purpose
- **Recommendation:** Provide a clean secondary route for multi-car households without contaminating the trade-first story.

### Audience
- **Recommendation:** UK multi-car households, usually with one adult carrying the admin burden.
- **Unknown / needs validation:** Whether this route is live at launch.

### Primary CTA
- **Recommendation:** Lower-friction utility-led CTA only if true, such as:
  - `Get started`
  - `Add your vehicles`
  - `See how it works for households`

### Secondary CTA
- **Recommendation:** `See how FleetHive works`

### Section order

| Order | Section | Job of the section | Proof to include | Proof to avoid |
|---:|---|---|---|---|
| 1 | **Household-specific hero** | Make clear this is for households, not fleet teams | Simpler headline; calmer screenshot or overview panel if approved | Trade/fleet jargon; sales-heavy CTA |
| 2 | **Shared-admin problem block** | Name the real pain: staggered dates, scattered records, quote uncertainty | Household-specific use-case cards | Revenue/downtime language from the trade route |
| 3 | **Utility workflow section** | Show reminders, records, cost tracking, and easier booking confidence | Real household-relevant workflow screenshots if approved | Business proof or partner-scale stats |
| 4 | **Lighter trust section** | Reassure without corporate proof theatre | Personal low-drama quote if approved | Trade testimonial; mixed-source proof wall |
| 5 | **Simple next-step module** | Keep the route feeling lighter and more immediate | “What happens next” module | Assisted-business motion if the household flow is actually simpler |
| 6 | **Final household CTA** | Capture relevant household intent | One clear household CTA | Generic business onboarding language |

### Proof to include
- **Unknown / needs validation:** household screenshots, testimonial pack, and CTA wording.
- **Recommendation:** Use household proof only if it is current, audience-matched, and route-specific.

### Proof to avoid
- **Blocked / avoid:** trade proof, business testimonials, partner logos, pricing tables, broad fleet-platform language.
- **Recommendation:** Do not publish this page at launch if the route, assets, and CTA path are not ready.

### Non-goals
- **Recommendation:** Do not justify the whole brand from the household story.
- **Recommendation:** Do not mirror the trade page with swapped nouns.

### Routing notes
- **Recommendation:** Keep this page subordinate in navigation and homepage hierarchy until/if the household route is explicitly confirmed for launch.

## 4) Product / how-it-works page

### Purpose
- **Recommendation:** Turn curiosity into concrete intent by showing what FleetHive does today, how it works in practice, and where the product boundary sits.

### Audience
- **Recommendation:** Mid-funnel visitors from either route who now need operational clarity.
- **Recommendation:** Default reading mode should still favour the trade audience unless route context already says otherwise.

### Primary CTA
- **Recommendation:** Continue the relevant route:
  - Trade: explicit assisted/hybrid CTA
  - Household: lower-friction CTA only if that route is live and simpler

### Secondary CTA
- **Recommendation:** `See who it’s for`

### Section order

| Order | Section | Job of the section | Proof to include | Proof to avoid |
|---:|---|---|---|---|
| 1 | **Workflow-first hero** | Reframe the page around live product behaviour, not abstract feature promises | One real workflow screenshot; clear subhead | Generic feature-grid hero |
| 2 | **What you can do now** | Name the present-tense workflow: reminders, records, spend visibility, benchmarking/forecasting, booking-related actions | Product-native feature labels; screenshot crops | Future modules shown as current |
| 3 | **How the workflow fits together** | Move from fragmented admin to clearer action | Sequence of real UI moments; step explanation | Abstract platform diagrams that imply hidden breadth |
| 4 | **Product-native vs partner-enabled** | Preserve honesty where booking/approval/payment/network scale appears | Source-type labels; clear copy boundaries | Unlabelled partner-enabled claims |
| 5 | **What FleetHive does not claim** | Reduce over-expectation and wrong comparisons | Short restraint block if needed | Over-polished “all-in-one platform” rhetoric |
| 6 | **Route-aware next step** | Keep intent moving without confusing the motion | Route-specific CTA and expectation cue | Generic CTA that ignores route context |

### Proof to include
- **Approved / safest:** real current screenshots, cropped UI details, workflow proof cards, source-type labels.
- **Approved with qualification:** partner-enabled workflow references when clearly labelled; one contextual quantified item only if source-owned and directly relevant.

### Proof to avoid
- **Blocked / avoid:** speculative UI, roadmap modules, telematics visuals, hero stat walls, partner-scale numbers without ownership labels.
- **Recommendation:** This page should be **workflow proof first, numerical proof second**.

### Non-goals
- **Recommendation:** Do not become a generic SaaS feature grid.
- **Recommendation:** Do not try to prove category breadth the product does not yet support.

### Routing notes
- **Recommendation:** If the site is later compressed, this page’s job still needs to exist as a dedicated workflow section or route-specific state.

## 5) Use-cases / who-it’s-for page

### Purpose
- **Recommendation:** Help visitors self-qualify without turning the page into a broad persona museum.

### Audience
- **Recommendation:** Visitors who understand the product at a high level but are still testing fit.

### Primary CTA
- **Recommendation:** Self-qualification into the correct route, such as:
  - `See FleetHive for your business`
  - `Book a walkthrough`
  - `See how it works for households` *(if that route is live)*

### Secondary CTA
- **Recommendation:** `See how it works`

### Section order

| Order | Section | Job of the section | Proof to include | Proof to avoid |
|---:|---|---|---|---|
| 1 | **Fit-first hero** | State the primary fit first: trades and field-service businesses with a handful of vans | Clear audience framing | Broad “for everyone with vehicles” language |
| 2 | **Primary fit scenarios** | Show the operational pattern that makes FleetHive relevant | Situation-led cards; trade use-case blocks | Bloated audience grids |
| 3 | **Secondary routed fit** | Show household fit only if live, and only as a secondary path | Smaller secondary card or section | Equal-weight household/trade narratives |
| 4 | **Why FleetHive fits these cases** | Translate product workflow into use-case outcomes | Scenario proof; matched workflow cues | Generic feature repetition |
| 5 | **Wrong-fit clarifier** | Help users self-disqualify if they expect enterprise fleets, telematics, or unsupported breadth | Small “not for every fleet scenario” block if needed | Competitive hostility or over-qualification theatre |
| 6 | **Route-aware CTA** | Move the user into the correct next step | Self-qualification CTA | Generic global CTA |

### Proof to include
- **Approved / safest:** scenario proof, route cards, fit matrices, matched workflow cues, smaller route-specific visuals.
- **Approved with qualification:** restrained comparison / fit tables only when used for qualification rather than superiority.

### Proof to avoid
- **Blocked / avoid:** broad mixed-segment proof walls, customer-logo strips, household proof proving the trade story, competitive-dominance comparison tables.
- **Recommendation:** Keep proof smaller and more specific here than on the trade page; the job is diagnosis, not spectacle.

### Non-goals
- **Recommendation:** Do not restate the homepage with swapped audience labels.
- **Recommendation:** Do not add adjacent audiences just because they are reachable.

### Routing notes
- **Recommendation:** This page is the decision-resolver for uncertain visitors and should be linked from both the home page and the product page.

## 6) Sign-up / onboarding entry page

### Purpose
- **Recommendation:** Convert intent by removing ambiguity around what happens next, what is required, and what sort of commitment the user is making.

### Audience
- **Recommendation:** High-intent visitors ready to begin the next step.
- **Recommendation:** This page should ideally be **route-specific** if trade and household motions differ materially.

### Primary CTA
- **Recommendation:** One explicit committed action only, for example:
  - Trade: `Book your walkthrough`, `Start assisted setup`, `Start onboarding` *(only if true)*
  - Household: `Add your vehicles`, `Get started` *(only if that route is live and simpler)*

### Secondary CTA
- **Recommendation:** Support/help contact only, clearly subordinate.
- **Recommendation:** Do not offer multiple competing core actions.

### Section order

| Order | Section | Job of the section | Proof to include | Proof to avoid |
|---:|---|---|---|---|
| 1 | **Explicit next-step hero** | Name the action clearly and remove ambiguity between demo, setup, and sign-up | Clear CTA label; route-aware headline | Brand-slogan CTA |
| 2 | **What happens after submit** | Explain the process in plain language | Expectation module; step count; timeline if known | Decorative product theatre |
| 3 | **What information is required** | Reduce form anxiety and set effort expectations | Short field explanation | Surprise field sprawl |
| 4 | **Commercial reality / commitment note** | Explain any material commitment only where confirmed | Minimal note; legal/commercial clarity | Unresolved “free” / trial / member / pricing language |
| 5 | **Route-matched reassurance** | Lower final commitment anxiety | One route-matched proof cue if approved | Broad stats; network claims; mixed testimonials |
| 6 | **Single committed action area** | Make the conversion moment clean | One dominant CTA | Multiple equal-weight asks |

### Proof to include
- **Approved / safest:** process proof, expectation-setting module, route-aware clarity, legal/compliance references.
- **Approved with qualification:** one anxiety-reducing testimonial if current and audience-matched.

### Proof to avoid
- **Blocked / avoid:** pricing grids, “free” / member / trial claims unless confirmed, logo strips, broad scale claims, telematics-style visuals, mixed-source proof.
- **Recommendation:** The strongest proof here is **clarity**, not category status.

### Non-goals
- **Recommendation:** Do not hedge between product account creation, demo request, and assisted setup.
- **Recommendation:** Do not bury commitment detail below the fold.

### Routing notes
- **Unknown / needs validation:** Whether one generic onboarding page can truthfully serve both trade and household routes.
- **Recommendation:** If the motion differs materially, create separate route-specific onboarding entry states or pages.

## Cross-page consistency rules

### Message and routing rules
- **Recommendation:** Keep the trade audience as the centre of gravity whenever a page has to choose.
- **Recommendation:** Preserve the same belief order across pages:
  1. who it is for
  2. what it helps with now
  3. why that matters
  4. proof appropriate to the page
  5. what to do next
- **Recommendation:** Do not let every page do the same job. Home routes. Trade qualifies/converts. Product explains. Use-cases diagnoses fit. Onboarding removes ambiguity.
- **Recommendation:** If the household route is not live, do not build a half-supported message system around it.

### Proof rules
- **Recommendation:** Lead with workflow proof before numerical proof.
- **Recommendation:** Separate product-native behaviour from partner-enabled capability every time booking, approval, payment, or network scale appears.
- **Recommendation:** Use trade-route proof on trade pages and household proof only on a confirmed household route.
- **Recommendation:** Treat testimonials as supporting trust, not as substitutes for explanation.
- **Recommendation:** Use only one or two carefully chosen quantified items per section, and only when source ownership is explicit.
- **Recommendation:** Do not build mixed-source proof walls.

### Asset and design rules
- **Recommendation:** Use one real screenshot stage in key hero areas rather than speculative composites.
- **Recommendation:** Keep route cards, workflow proof cards, expectation modules, and source-type labels as recurring system components.
- **Recommendation:** Stay within the safe category frame: maintenance and running-cost control.
- **Recommendation:** Keep light and dark mode equally first-class, and keep the yellow-led system as styling rather than as proof theatre.
- **Recommendation:** Avoid telematics/tracking imagery, command-centre dashboards, roadmap UI presented as current product, hype motion, awards, badges, and customer-logo strips.
- **Recommendation:** Household visuals should remain subordinate until the household route is explicitly confirmed.

### CTA rules
- **Recommendation:** CTA language must describe the real next step.
- **Recommendation:** Trade CTAs should stay explicit and likely assisted until self-serve is validated.
- **Recommendation:** Household CTAs can be lighter only if the product path genuinely supports that promise.
- **Recommendation:** Do not revive `Join the Hive` as the primary CTA system.

## Open implementation questions

- **Unknown / needs validation:** Is the household route live at launch, later, or not part of the first release?
- **Unknown / needs validation:** What is the exact trade motion: walkthrough, assisted setup, hybrid onboarding, or true self-serve?
- **Unknown / needs validation:** Does onboarding need separate route-specific pages/states?
- **Unknown / needs validation:** What final CTA wording is operationally true and founder-approved?
- **Unknown / needs validation:** Which screenshots are approved, current, and segment-appropriate?
- **Unknown / needs validation:** Which testimonials are approved, current, and safe by audience segment?
- **Unknown / needs validation:** Are any partner logos permitted, and if so under what wording?
- **Unknown / needs validation:** What final public pricing / plan / trial / member language, if any, is safe to publish?
- **Unknown / needs validation:** Are there SEO constraints that require standalone household or trade URLs regardless of message logic?
- **Unknown / needs validation:** Is a generic FAQ needed after copy and onboarding clarity are solved, or can objections be handled in-page?

## Handoff payload for components, copy, and build

### For component inventory

Build these first because they embody the architecture directly:

1. **Theme-aware top nav** with route-aware CTA slot
2. **Route cards** for trades vs households
3. **Hero screenshot stage** with proof-caption slot
4. **Workflow proof cards** tied to present-tense product behaviour
5. **Use-case / fit cards** for trade scenarios and optional household scenarios
6. **Comparison / fit matrix** for qualification, not competitor theatre
7. **“What happens next” expectation module**
8. **Source-labelled proof card** system
9. **Route-aware CTA bar** for trade vs household contexts
10. **Footer legal/compliance block**

### For website copy deck

- **Recommendation:** Copy should be written page-by-page against the section order above, not from a generic homepage template.
- **Recommendation:** Every proof-bearing line in copy should carry an internal source-type label during drafting:
  - product-native
  - partner-enabled
  - customer quote
  - contextual quantitative
  - future / blocked
- **Recommendation:** Trade copy should stay practical, operational, and plain-spoken.
- **Recommendation:** Household copy, if used, should be calmer and more utility-led.
- **Recommendation:** Copy should not include:
  - pricing tables
  - “free” / trial / member language unless confirmed
  - broad fleet-platform claims
  - mixed-segment headline proof
  - telematics-style abstractions

### For build brief

- **Recommendation:** Treat every proof-bearing component as structured content with fields for:
  - source owner
  - status label
  - audience scope
  - route scope
  - approval status
- **Recommendation:** Do not ship any component that depends on unresolved proof classes:
  - pricing grid
  - logo wall
  - awards/review strip
  - speculative dashboard showcase
  - roadmap showcase block
- **Recommendation:** Build route-aware page templates or route states rather than one universal template with mixed proof and mixed CTA logic.
- **Recommendation:** Preserve a clear path for compressing IA later without losing the distinct jobs of routing, qualification, workflow explanation, fit diagnosis, and expectation-setting.

### Minimal launch-safe architecture summary

- **Recommendation:** If launch has to stay lean, the minimum safe page set is:
  - Home / router
  - Trade page
  - Product / how-it-works
  - Use-cases / who-it’s-for
  - Sign-up / onboarding entry
- **Recommendation:** Add the household page only when route, proof, screenshots, and CTA path are confirmed enough to avoid a half-supported secondary journey.
