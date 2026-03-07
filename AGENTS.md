# AGENTS.md

## Purpose

This repository is for the implementation of the FleetHive marketing site.

Agents working in this repo must build from the approved project artefacts already created. The goal is a production-ready SaaS marketing site with strong design quality, disciplined messaging, honest proof handling, and no invented credibility.

This repo must not drift into:
- generic SaaS template work
- speculative strategy
- made-up claims
- decorative redesign detached from the approved artefacts
- polished but empty marketing theatre

The priority is disciplined execution from approved inputs.

---

## Source of truth and precedence

The inputs are in the root directory of https://github.com/Five-In-A-Boat/fleethive

Treat these inputs as the canonical source of truth, in this order:

1. `21_build-brief.md`
2. `AGENTS.md` if present in the repo
3. Existing repo conventions and architecture, if clearly intentional
4. `19_component-inventory.md` | define reusable building blocks
5. `16_brand-design-language.md` | define visual and verbal design direction
6. `18_site-architecture-page-briefs.md` | define page roles, sections, and non-goals
7. `20_website-copy-deck.md` | write final page copy
8. `17_content-reference-status.md` | classify content as real/prototype/placeholder
9. `03_success-criteria.md` | define business and page goals
10. `04_anti-slop-rules.md` | define anti-generic quality rules
11. SVG logo assets

fleethive_logo_primary.svg
fleethive_logo_white.svg
fleethive_logo_black.svg

If these conflict:
- prefer the higher-precedence source
- do not silently improvise
- note the conflict in the final summary

Do not override these artefacts with generic best practice unless there is a clear implementation problem.

---

## Core implementation intent

Build the approved FleetHive marketing site, not a generic fleet SaaS site.

The implementation should:
- support the business and page goals in `03_success-criteria.md`
- obey the anti-generic and anti-fluff rules in `04_anti-slop-rules.md`
- faithfully implement the approved messaging and page architecture
- feel premium, clear, conversion-focused, and intentional
- remain honest where proof, assets, or product material are not yet final

FleetHive household is an approved route and should be included in the implementation where reflected in the approved artefacts.

---

## Non-negotiables

Do not invent:
- testimonials
- customer logos
- usage metrics
- proof points
- pricing details
- integrations
- screenshots presented as real product UI
- compliance claims
- product capabilities
- customer stories
- market claims
- partner claims not supported by the artefacts

Do not:
- replace differentiated copy with generic SaaS copy
- blur audience distinctions if the artefacts separate trade and household journeys
- use vague “all-in-one”, “streamline operations”, or similar filler language unless explicitly present in approved copy
- add common landing-page sections just because many SaaS sites use them
- make placeholder material look like approved proof

If something is missing, unclear, provisional, or marked as placeholder:
- preserve that honestly
- implement a safe placeholder treatment where needed
- keep the UI polished
- do not make placeholder material appear approved or validated

---

## Content-status discipline

Use `17_content-reference-status.md` actively.

Treat content as one of:
- real / approved
- provisional
- placeholder
- unavailable

Rules:
- real / approved content may be implemented normally
- provisional content may be used cautiously and must not be exaggerated
- placeholder content may be implemented using visibly safe placeholder treatment
- unavailable content must not be fabricated as real proof

If a section depends on content that does not yet exist:
- keep the UI polished
- preserve the structure if it is strategically important
- use safe placeholder handling
- avoid fake specificity

---

## Placeholder and imagery rules

Logo assets provided in the repo are approved brand assets and should be used normally.

For all non-logo imagery:
- placeholders are acceptable for v1 where final approved assets are not yet available
- placeholders should be clearly generic and non-proof-bearing
- placeholders must not imply real customers, real dashboards, real data, real usage, or real product evidence
- `placehold.co` is acceptable for temporary placeholder imagery
- local/static placeholder assets are preferred where practical for deployment stability and performance

Allowed placeholder treatments:
- generic abstract illustrations
- neutral media placeholders
- empty-state style panels
- browser or device frames that are clearly non-literal
- reserved image slots for future approved assets

Not allowed:
- fake dashboard screenshots
- fake customer environments
- fake maps, telematics views, or analytics visuals presented as real
- fake testimonial avatars or quotes
- fake integration logo grids
- fake metric cards
- fabricated before/after comparisons

If in doubt, prefer a polished generic placeholder over a realistic-looking fake artefact.

---

## Logo and brand asset rules

Use the supplied FleetHive SVG marks correctly:
- primary colour version on light/default surfaces where appropriate
- white version on dark surfaces
- black version only where visually appropriate and brand-consistent

Do not:
- distort the logo
- redraw the logo
- add unnecessary effects
- crowd the mark
- create unapproved alternate lockups

If favicon, app icon, or social preview assets are needed and not already present:
- derive the minimum necessary assets from the supplied marks
- keep them clean and brand-consistent
- do not invent extra brand forms

---

## Design and brand rules

Use `16_brand-design-language.md` as the visual and verbal design reference.

The site should feel:
- premium
- precise
- modern
- clear
- conversion-focused
- intentionally designed
- calm and high-trust
- strong enough to signal product seriousness

The site should not feel:
- generic
- cluttered
- over-animated
- template-like
- “AI designed”
- padded with gradients, noise, glow, or decoration instead of hierarchy
- visually louder than the brand system supports

Respect:
- spacing
- hierarchy
- layout rhythm
- readable line lengths
- responsive adaptation
- accessible contrast
- disciplined CTA prominence
- consistent component behaviour

Use strong judgement on:
- container widths
- section pacing
- typography scale
- card treatment
- hover/focus/active states
- empty space
- mobile simplification
- how placeholders are framed so they remain honest

---

## Messaging and conversion rules

Treat `20_website-copy-deck.md` as the approved messaging base.

You may:
- make minor implementation-level edits for fit and legibility
- adjust line breaks
- trim button labels where needed for UX consistency
- make microcopy changes only where necessary for clarity or accessibility

You may not:
- rewrite the strategic message
- flatten differentiated language into clichés
- change the buyer journey logic
- introduce unapproved claims
- make assisted flows sound self-serve if the artefacts do not support that
- substitute generic fleet SaaS copy for the approved copy

Preserve:
- headline intent
- section order
- message hierarchy
- proof hierarchy
- CTA logic
- page-specific audience focus

CTA labels and flows must match the real next step described in the artefacts.

---

## Approved route and page discipline

Implement the approved page architecture from `18_site-architecture-page-briefs.md`.

Do not create extra pages or sections unless they are clearly justified by the approved artefacts.

Unless explicitly supported by the artefacts, do not add:
- pricing pages or pricing tables
- customer logo walls
- case studies
- integrations pages
- resource hubs
- blog/news systems
- generic FAQ sections
- fake product-tour pages

Use the approved component inventory and page briefs to determine what should exist.

---

## Component and proof discipline

Use `19_component-inventory.md` as the reusable UI system reference.

Prefer:
- reusable components
- clean composition
- small, understandable abstractions
- shared layout primitives
- consistent CTA variants
- disciplined section wrappers
- proof-aware components that can safely handle missing assets or missing evidence

Where proof-bearing content exists, components should make it easy to preserve context such as:
- source ownership
- approval status
- audience scope
- whether content is approved, provisional, or placeholder

If required proof context is missing:
- do not fabricate it
- degrade gracefully
- omit the proof-bearing element if necessary

---

## Engineering expectations

Work with the existing repo structure if it is clearly intentional.

If the repo is effectively greenfield, default to:
- Next.js
- TypeScript
- Tailwind CSS
- minimal dependencies
- clean component structure
- Netlify-friendly deployment

Prefer:
- reusable components
- readable code
- maintainable file structure
- semantic HTML
- accessible interactions
- simple abstractions
- typed code where relevant
- lightweight implementation choices

Avoid:
- unnecessary libraries
- bloated animation stacks
- fragile hacks
- magic-number-heavy layout code
- fake data hardcoded as truth
- unnecessary client-side state
- giant unstructured files unless the repo clearly expects them

If helpful, create or refine:
- design tokens
- layout primitives
- section shells
- button variants
- card variants
- metadata scaffolding
- icon wrappers
- placeholder media patterns

---

## UX, accessibility, and performance

Non-negotiable:
- semantic HTML
- proper heading hierarchy
- keyboard accessibility
- visible focus states
- accessible labels
- alt text where relevant
- sufficient contrast
- responsive layouts
- no obvious CLS issues
- no avoidable JS bloat

Optimise for:
- fast first load
- stable layout
- strong mobile experience
- clear CTA hierarchy
- readable scanning on all breakpoints
- polished but restrained motion
- reduced-motion friendliness

The site should still feel premium with motion disabled.

---

## SEO and metadata

Implement a strong baseline only.

Include:
- sensible page titles
- meta descriptions
- Open Graph basics
- favicon/app icon wiring if needed
- semantic page structure
- canonical handling if appropriate to the stack

Do not invent:
- unsupported structured data
- SEO claims
- fabricated review metadata
- content systems not defined in the artefacts

---

## Repo workflow

Before making major changes:
1. inspect the repository
2. identify framework, package manager, scripts, and deployment setup
3. inspect the approved artefacts
4. form a brief implementation plan
5. create a git checkpoint or branch first if the environment supports it

Use the repo’s existing package manager and scripts if present.

If multiple package managers are present, prefer the one already in active use by the repo.

Before finishing:
1. run install if needed
2. run build
3. run lint if present
4. run typecheck if present
5. run tests if present
6. fix issues introduced by your changes
7. verify key pages/components render correctly
8. verify responsive behaviour on mobile and desktop
9. verify no fake proof or invented content has slipped in
10. verify placeholder handling remains honest
11. verify navigation, links, and CTAs behave correctly

If something cannot be validated in the environment:
- say so clearly
- do not pretend it was verified

---

## Deployment expectations

This repo is intended to deploy via GitHub → Netlify.

Agents should:
- keep the project deployable on Netlify
- avoid unnecessary platform complexity
- configure only what is needed
- keep deployment assumptions simple and explicit
- not claim deployment succeeded unless it actually succeeded

If push, PR, or deploy cannot be completed in the environment:
- say so clearly
- leave the repo in the best validated state possible
- provide the exact remaining steps where useful

---

## Final summary requirements

At the end of implementation work, provide a concise summary covering:
- what changed
- which files were created or modified
- which artefacts were used
- any conflicts found between artefacts
- any placeholders still present and why
- validation steps run
- build / lint / typecheck / test results
- deployment / push / PR status
- recommended next actions, if any

Be explicit about anything that remains provisional.

---

## Default behaviour when uncertain

If something important is unclear:
- prefer restraint over invention
- prefer approved artefacts over assumptions
- prefer implementation clarity over cleverness
- surface uncertainty explicitly
- keep placeholders honest
- do not silently fill in missing proof, strategy, or product detail

This repository values disciplined execution over speed theatre.
