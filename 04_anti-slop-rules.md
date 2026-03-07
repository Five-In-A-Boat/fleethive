# Document: 04_anti-slop-rules.md
- **Purpose:** Turn vague quality instincts into explicit review rules that catch drift, fluff, and unsupported polish.
- **Status:** Draft / working document
- **Primary input:** `03_success-criteria.md` **Unknown / needs validation:** not supplied at time of drafting
- **Supporting inputs used:** `00_project-manifest.md`; `02_project-custom-instructions.md`; selected reference sites reviewed for category-language patterning: Fleetio, Whip Around, Samsara, Motive, Onfleet
- **Next file in chain:** Used across all downstream files
- **Conflict note:** The prompt output contract references `03_anti-slop-rules.md`, while the current file request is `04_anti-slop-rules.md`. This document follows the current request and records the discrepancy instead of smoothing it over.

## Purpose of this rulebook

This is the project’s anti-drift filter. Its job is to stop the work from becoming a polished lie.

### What this rulebook is protecting against
- **Fact:** FleetHive is working within a controlled, sequential website workflow.
- **Fact:** Canonical markdown files are the real project assets.
- **Fact:** The site is a small UK-focused SaaS marketing site whose primary conversion event is sign up / onboarding.
- **Fact:** The product is partly live, not safely treatable as a fully mature platform.
- **Fact:** Current audience signals span households and businesses, while the current commercial priority is believed to be SME fleets.
- **Unknown / needs validation:** The intended primary input for this file, `03_success-criteria.md`, was not supplied.
- **Unknown / needs validation:** Operator-specific hated phrases, banned clichés, and brand-safety red lines were not supplied explicitly.

### What follows from that
- **Inference:** The main risk is not lack of copy. It is false confidence: generic claims, borrowed maturity cues, and audience blur.
- **Recommendation:** This rulebook should be applied as a pass / fail review layer across strategy, messaging, IA, copy, design direction, and build notes.
- **Recommendation:** Where `03_success-criteria.md` would normally provide sharper page goals, this document stays conservative and uses only what the current control files can safely support.

### Provisional carry-forward from available control files
These are not substitutes for the missing success-criteria file. They are the safest working assumptions currently available.
- **Inference:** The page system should help qualified users understand what FleetHive does now and move toward sign up / onboarding.
- **Inference:** The site should privilege clarity, qualification, and believable value over broad awareness theatre.
- **Recommendation:** Do not blur households and SME fleets into one neat story unless a later canonical file makes that choice explicitly.
- **Recommendation:** Do not optimise for vanity metrics or implied scale. Earlier project controls already reject “500 signups” as a default goal.

## Banned phrases and empty patterns

### Absolute bans
Use these only if there is direct, attributable evidence and the phrase is still the clearest wording. Default position: banned.

- “all-in-one platform”
- “complete visibility”
- “run your fleet smarter”
- “streamline operations”
- “optimize every aspect”
- “powerful platform” / “one powerful platform”
- “unlock savings”
- “centralize everything”
- “end-to-end”
- “industry-leading” / “leading platform”
- “next-generation” / “future-proof”
- “trusted by” without named, approved proof
- “AI-powered” unless the AI mechanism matters and is real
- “real-time insights” unless the actual live signal and action are shown
- “for businesses of all sizes”
- “single source of truth”
- “transform your fleet”
- “seamless” unless a specific friction has been removed and can be shown

### Conditional bans
These phrases are only usable when made specific and evidenced. Generic use fails.

- “save time”
- “cut costs”
- “reduce downtime”
- “improve compliance”
- “gain control”
- “boost efficiency”
- “make better decisions”
- “improve visibility”
- “manage everything in one place”
- “works for households and businesses”

### Pattern bans
These are structural, not just verbal.

1. **Triad theatre**  
   Example failure: “Save time. Cut costs. Drive results.”  
   **Rule:** If three punchy claims appear together without mechanism or proof, fail.

2. **Abstract noun stacking**  
   Example failure: “visibility, efficiency, compliance, control.”  
   **Rule:** If a sentence is mostly outcome nouns with no concrete task or workflow, fail.

3. **Feature laundry-list hero**  
   **Rule:** If the hero tries to name every feature family instead of one believable job-to-be-done, fail.

4. **Borrowed enterprise language**  
   **Rule:** If the wording sounds like a telematics suite, dispatch system, or enterprise operations cloud that FleetHive cannot truthfully be mistaken for, fail.

5. **Audience pile-up**  
   **Rule:** If the same headline or section tries to speak equally to households, sole traders, self-employed drivers, and SME fleets, fail.

6. **Fake certainty language**  
   **Rule:** If roadmap ambition is written as current capability, fail.

7. **Proof wallpaper**  
   **Rule:** If logos, stats, badges, screenshots, or testimonials are used to create a feeling of scale without clarifying relevance or source, fail.

8. **CTA mismatch**  
   **Rule:** If the page promises a simple sign-up but the actual path is demo-led, assisted, gated, or unclear, fail.

### Category clichés observed in reference-market language
These are not automatically forbidden forever. They are banned here because they are category-default and easy to copy without thinking.

- “all your tools, working together”
- “unparalleled visibility”
- “one unified system”
- “turn data into action”
- “optimize fleet performance”
- “gain real-time visibility”
- “complete fleet control”
- “boost uptime”
- “tailored to your unique needs”

- **Recommendation:** Do not use these unless rewritten into FleetHive-specific language tied to current product truth.

## Headline rules

### What a headline must do
A page headline must do at least one of these clearly:
- name the primary audience for that page
- name the concrete problem being solved
- name the specific job the product helps with now
- frame the offer in a way that matches the real conversion path

### What a headline must not do
- pretend the ICP decision is settled when it is not
- collapse roadmap ambition into current reality
- rely on category clichés to sound “SaaS-like”
- promise broad transformation where the product currently offers focused utility
- speak more broadly than the rest of the page can prove

### Pass / fail tests for headlines
A headline fails if any of the following are true:
1. It could sit on three competitor sites with no one noticing.
2. It contains a generic value claim without mechanism.
3. It implies a fully integrated or fully mature platform beyond current evidence.
4. It tries to cover multiple buyer types with conflicting motives.
5. The subhead has to do all the real explanatory work because the headline is decorative.

### Practical headline standard
- **Recommendation:** Prefer specific, grounded framing such as a real workflow, real pain, or real buyer context.
- **Recommendation:** Subheads should explain what happens today, not what may exist later.
- **Recommendation:** CTA copy must match the actual next step: sign up, book demo, request walkthrough, or similar.
- **Recommendation:** Do not run multiple conflicting above-the-fold CTAs unless the audience split is intentional and explicit.

## Section usefulness rules

Every section must earn its place.

### A section is allowed only if it does one of these
- answers a real buyer question
- reduces a known objection
- explains a live workflow or capability
- clarifies who the product is for
- supports the primary conversion path
- supplies real proof or safe trust support

### A section fails if it exists mainly to
- make the site look bigger or more mature
- imitate a standard SaaS homepage pattern
- restate the hero with different adjectives
- dump undifferentiated features into cards
- create the appearance of proof without evidence
- defer core clarity into an FAQ

### Section-specific bans

#### Hero
- No generic mission statement.
- No category-defining claim unless defensible.
- No proof stats above the fold unless attributable and important.

#### Feature grids
- No feature tiles that merely rename obvious software behaviours.
- No feature card without a concrete user action, buyer relevance, or present-tense truth status.
- No mixing live features and aspirational modules without labels.

#### Use-case / audience sections
- No “for everyone” framing.
- No undifferentiated grid of audiences unless the route after that grid is equally differentiated.
- No audience card included just because it sounds adjacent.

#### Proof sections
- No testimonial carousel full of interchangeable praise.
- No metric strip unless each number has a source, owner, and safe interpretation.
- No logo row without permission, recognition value, and relevance.

#### FAQ
- No FAQ used to hide pricing ambiguity, product gaps, or onboarding friction that should be addressed earlier.

#### Footer / closing CTA
- No hard-sell language that overshoots the rest of the page’s honesty level.
- No final CTA that shifts from self-serve framing to sales-assisted framing without explanation.

## Proof and evidence rules

### Non-negotiable proof standard
Every proof element must answer four questions:
1. **What exactly is being claimed?**
2. **Who does the claim belong to?** FleetHive, partner network, customer, or market source.
3. **What evidence status does it have?** Fact, inference, placeholder, or unknown.
4. **Is the phrasing stronger than the evidence?** If yes, fail.

### Proof handling rules
- **Recommendation:** Separate FleetHive-native proof from partner-enabled proof.
- **Recommendation:** Separate realised user outcomes from eligible discounts, modelled forecasts, or network-level scale claims.
- **Recommendation:** If a number comes from a partner or upstream network, label it that way.
- **Recommendation:** If a testimonial speaks to one segment only, do not let it stand in for all segments.
- **Recommendation:** Quantified claims should be used sparingly and only where they materially improve conversion trust.

### Evidence bans
- No invented customer counts.
- No invented market-share language.
- No invented review badges, awards, ratings, or accreditation.
- No invented screenshots, dashboards, or usage stats.
- No “trusted by” language without approved logos or named customers.
- No borrowed proof from a partner presented as if it proves FleetHive’s independent maturity.

### Safe fallback when proof is thin
Use these instead:
- concrete workflow explanation
- explicit scope boundaries
- honest caveats about what is live
- clear onboarding expectations
- precise audience fit language
- well-framed product screenshots, only if current and real

## Design-honesty rules

Design must not promise what the product cannot.

### Visual honesty rules
- Do not show modules, dashboards, maps, or analytics views that are not live.
- Do not fabricate dense enterprise UI just to imply sophistication.
- Do not use mock data that changes the perceived category of the product.
- Do not let icon systems, motion, or illustration imply telematics, dispatch, AI automation, or enterprise control if those are not core present-day truths.
- Do not use fake product chrome or invented mobile-app frames if the experience is web-first and current UI does not support that story.

### Maturity-theatre bans
- oversized logo strips
- award-badge clusters
- vague “enterprise-ready” design cues
- decorative dashboards with unreadable numbers
- stock photography standing in for product evidence
- feature-diagram complexity that exceeds actual workflow complexity

### Screenshot rules
A screenshot is allowed only if it is:
- real
- current
- readable at intended size
- relevant to the claim next to it
- not doing the work of three missing explanations

### Layout honesty rules
- **Recommendation:** The information hierarchy should reflect the real buyer journey, not a template.
- **Recommendation:** If the product is early, fewer sections with more truthful detail are better than many sections with vague polish.
- **Recommendation:** White space is not a substitute for clarity.

## Audience-specificity rules

### Core rule
Each page must have one primary audience. Secondary audiences may appear only if the routing is explicit.

### Audience failure modes
A page fails if:
- it uses one headline to address households and SME fleets equally
- it mixes owner-driver admin pain with fleet-manager operational language without distinction
- it offers the same CTA to audiences that likely need different conversion paths
- it uses segment labels loosely, such as “fleet,” when the actual buyer may be a household with multiple vehicles or a micro-business with a handful of vans

### Working audience discipline for FleetHive
- **Fact:** Current control files indicate both household and business audience signals.
- **Fact:** Current commercial priority is believed to be SME fleets.
- **Recommendation:** Until ICP work is completed, default to explicit audience choice rather than synthetic inclusivity.
- **Recommendation:** If a page must serve multiple segments, use clear routing language early.
- **Recommendation:** Do not let one testimonial or one use case define the whole market story.

### Audience wording rules
- Use the buyer’s concrete context, not generic category labels.
- Use “households,” “small businesses,” “owner-drivers,” or “SME fleets” only when the distinction matters and is evidence-backed.
- Avoid “fleets of all sizes.” It blurs more than it clarifies.

## Review checklist

Use this as a QA gate. If any answer is “no” or “unclear,” the work is not ready.

| Check | Pass condition |
|---|---|
| 1. Primary audience | The page has one clear primary audience. |
| 2. Conversion job | The page has one clear conversion job tied to sign up / onboarding or a justified routing step. |
| 3. Headline specificity | The headline could not be pasted onto competitor sites unchanged. |
| 4. Present-tense truth | The page only claims what is live or clearly labels future-state elements. |
| 5. Audience fit | The wording matches the buyer type being addressed. |
| 6. Section usefulness | Every section answers a buyer question, reduces friction, or supports conversion. |
| 7. No filler | No section exists only to look polished, mature, or “complete.” |
| 8. Proof ownership | Every metric, logo, testimonial, and claim has a clear source / owner. |
| 9. Safe proof strength | The wording is no stronger than the evidence. |
| 10. CTA honesty | The CTA matches the actual next step and onboarding reality. |
| 11. Design honesty | Visuals do not imply product maturity or capability beyond reality. |
| 12. No category clichés | The page avoids banned phrases and empty category language. |
| 13. No unresolved smoothing | Conflicts, missing info, and ambiguity are surfaced rather than hidden. |
| 14. Lean IA discipline | The page earns its place within a lean conversion-oriented site. |
| 15. Buyer relevance | A qualified buyer would learn something concrete that helps them decide. |

## Escalation rules when evidence is missing

### Default behaviour
When evidence is missing, do not fill the gap with confidence.

### Required escalation steps
1. State what is unknown.
2. State what is still safe to say.
3. Reduce the strength of the wording or remove the claim.
4. Mark the issue for validation in the relevant canonical file.

### Escalate immediately when
- a feature may be partner-enabled rather than product-native
- a roadmap item is about to be written as current capability
- a proof point may belong to a partner or upstream network
- pricing is being presented as settled when it is not
- one page is being asked to convert materially different audiences at once
- the CTA path is unclear or conflicting
- a visual concept implies scale, AI capability, integration depth, or operational control that the product cannot yet prove
- the missing `03_success-criteria.md` would materially affect page priorities or conversion logic

### Safe fallback language moves
- replace category claims with concrete workflows
- replace broad outcome claims with narrower, present-tense descriptions
- replace scale theatre with scope clarity
- replace polished certainty with an explicit caveat
- remove the section entirely if it has no evidence-led role

## Handoff payload for all downstream prompts

### Anti-slop operating rules to preserve
- **Fact:** Missing information is not permission to improvise.
- **Fact:** The intended primary input for this file was missing; downstream work should not pretend success criteria are already fully settled.
- **Fact:** FleetHive should currently be treated as partly live, with meaningful caution around maturity signalling.
- **Fact:** Audience blur is a live project risk.
- **Fact:** Sign up / onboarding remains the primary conversion anchor from available control files.
- **Recommendation:** Separate current product truth, partner-enabled capability, and roadmap ambition in every downstream artefact.
- **Recommendation:** Reject borrowed category language unless rewritten into concrete FleetHive language.
- **Recommendation:** Prefer a smaller, truer page system over a larger, more impressive-looking one.

### Banned review questions for downstream use
If the answer to any of these is “yes,” stop and revise.
- Could this line appear on a competitor homepage unchanged?
- Does this section exist mainly to make the site feel mature?
- Is this claim stronger than the evidence behind it?
- Does this visual imply more product depth than actually exists?
- Are we using one audience’s proof to sell to another audience?
- Are we smoothing over a conflict that should be explicit?

### Known unknowns to keep live
- **Unknown / needs validation:** `03_success-criteria.md`
- **Unknown / needs validation:** operator-specific banned tropes and claim red lines
- **Unknown / needs validation:** final ICP decision
- **Unknown / needs validation:** final routing between household and SME journeys
- **Unknown / needs validation:** public pricing position
- **Unknown / needs validation:** proof ownership and evidence quality for several commercial claims

### Practical instruction for later artefacts
- **Recommendation:** Every downstream document should be reviewable against this rulebook line by line.
- **Recommendation:** If a sentence feels polished but weakly grounded, delete it or rewrite it until it becomes testable.
- **Recommendation:** If a section is common in SaaS but not clearly useful here, cut it.
- **Recommendation:** If evidence is thin, narrow the promise rather than inflating the tone.
