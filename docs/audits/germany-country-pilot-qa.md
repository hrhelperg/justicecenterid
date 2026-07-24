# Germany federal country pilot — QA record

**Date:** 2026-07-24
**Branch:** `feat/germany-federal-country-pilot`
**Base commit:** `e527d5a537076897fd8a060f31be2648ad7a6d4b` (merge of PR #3, France pilot)

## France merge verification

A merge commit was not treated as proof. Ten substantive items were checked individually in the
merged tree, and the France routes were rebuilt to confirm they still generate:

`JurisdictionRecord` · `FunctionScope` (6 values) · `COUNTRY_MODULES` (12) · registry-derived
`verify-output` with no regex parsing · 9 restricted-claim categories · 6 France source records ·
France dossier · France model findings · the 200% overflow fix · the country-module route.
**All present**, and 7 France routes build.

## Part A — preconditions

| ID  | Precondition                         | Result                                                                                                                                                                        |
| --- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A1  | Structured scheduled-change model    | `ScheduledChange` + registry + validator with injected `today`; staleness gate; certainty separate from status; 20 tests                                                      |
| A2  | Federal competence model             | `legislativeCompetence` separates legislation from administration; `federal` added to root levels; validation requires the field on researched records under a federal parent |
| A3  | Sub-national entity strategy         | Bund + three Länder chosen for what each tests; no municipality records; no public Land pages                                                                                 |
| A4  | Restricted-claim production exercise | One real claim published, fully specified, with five removal-proofs                                                                                                           |

## Validation results

All actually executed on the committed tree.

| Command                 | Result                                                                                                                  |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `npm ci`                | clean                                                                                                                   |
| `npm run format:check`  | PASS                                                                                                                    |
| `npm run lint`          | PASS                                                                                                                    |
| `npm run typecheck`     | PASS                                                                                                                    |
| `npm test`              | **589 passed**, 14 files (was 537)                                                                                      |
| `npm run build`         | PASS                                                                                                                    |
| `npm run verify:output` | PASS — 53 routes, 55 exported pages, sitemap 53 URLs, 1039 inline scripts permitted by CSP, all referenced assets exist |
| `npx playwright test`   | PASS (re-run after every change)                                                                                        |

## Non-vacuity proofs

Each defect reintroduced, exit code recorded, then reverted. No mutation left in the tree.

| Mutation                                            | Exit | Message                                                                                   |
| --------------------------------------------------- | ---- | ----------------------------------------------------------------------------------------- |
| Removed `out/countries/germany/corrections.html`    | 1    | `route /countries/germany/corrections has no exported file`                               |
| Exported a **deferred** module as if published      | 1    | `exported page countries/germany/oversight.html is not in the route registry`             |
| Sitemap advertising the deferred `oversight` module | 1    | `sitemap advertises unknown route /countries/germany/oversight`                           |
| Duplicate canonical across two Germany pages        | 1    | `duplicate canonical …/countries/germany/prosecution on courts.html and prosecution.html` |
| Baseline / restored                                 | 0    | `✓ Exported output matches the route registry.`                                           |

Scheduled-change gate proven in both directions in unit tests: passes before `effectiveOn`,
fails after it with nothing re-reviewed, still fails when the re-review predates the change,
passes once re-reviewed on or after it.

The published restricted claim proven to fail when its **reference period**, **jurisdiction**,
**limitation**, **source scope** or **source** is removed.

## Static hosting — direct requests, no SPA fallback

| Path                                                                           | Status                         |
| ------------------------------------------------------------------------------ | ------------------------------ |
| 8 published Germany routes                                                     | 200                            |
| `/countries/germany/`, `/countries/germany/courts/`                            | 200                            |
| `/countries/de`                                                                | **404**                        |
| `/countries/germany/{forensics,border-and-customs,oversight,history,timeline}` | **404**                        |
| `/countries/germany/bayern`, `/countries/germany/berlin`                       | **404** (no public Land pages) |
| `/countries/germany/nope`                                                      | **404**                        |

Sitemap: exactly 8 Germany URLs, **0** deferred modules. Canonical and `BreadcrumbList` verified
on `/countries/germany/corrections`. No prohibited schema type appears in the output.

## Browser QA

28 page/viewport combinations at 1280×900 and 390×844, plus 320×800. Every published route: 200,
exactly one `<h1>`, no skipped heading level, no horizontal overflow, unique brand-suffixed
title. Deferred module returns the 404 page. Back/forward navigation correct. Skip link moves
focus to `main#main` and the next Tab lands inside it.

### Accessibility findings

**Fixed — table scroll region not keyboard reachable.** The jurisdictions table sits in an
`overflow-x-auto` container. When narrower than the table, a keyboard user could not reach the
off-screen columns (WCAG 2.2 SC 2.1.1). Now `tabIndex={0}`, `role="region"` and an `aria-label`.
Verified focusable, labelled, and scrolling without document overflow. The table keeps its
minimum width rather than collapsing, which SC 1.4.10 expressly permits for data tables.

**Measured, and stated precisely.** All three standard scenarios pass with no overflow:

| Scenario                               | Requirement          | Result      |
| -------------------------------------- | -------------------- | ----------- |
| 320px viewport, normal text            | SC 1.4.10 Reflow     | no overflow |
| 1280px viewport, 200% text             | SC 1.4.4 Resize text | no overflow |
| 320px effective (400% zoom equivalent) | SC 1.4.10            | no overflow |

A harsher combined case — 320px viewport **and** 200% text simultaneously, roughly 800%
effective scaling — does produce document-level horizontal scroll on both Germany and France
pages. That exceeds what SC 1.4.10 requires and is **not** claimed as a pass or reported as a
conformance failure; it is recorded as a known limit of the layout at extreme scaling.

## A content defect found by looking, not by testing

Every Germany page shipped with the independence notice reading _"JusticeCenterID … is not a
**French** public body"_. The demonym was hardcoded during the France pilot.

No test caught it. The suite asserted that a disclosure was **present**, not what it **said** —
and the page was correct in every other respect. It was found by opening a screenshot.

Fixed by deriving the country from the dossier, with a regression test asserting the rendered
output names the right country for both dossiers. The test strips React's `<!-- -->` text-node
markers before matching, because matching raw markup would have given a false pass.

Worth recording as a class: a disclosure naming the wrong state is worse than no disclosure,
because it reads as carelessness on exactly the point where the platform asks to be trusted.

## Known limitations

1. **Five of thirteen modules unpublished**, each with a stated reason rendered on the hub.
2. **No Land institutional detail researched.** Three Land records are structural samples
   asserting only what the Basic Law supports. No public Land page exists.
3. **Coverage of Germany is partial and is not claimed otherwise.** No completion percentage
   exists anywhere.
4. **Statutory competences of the BKA and Bundespolizei are not described** — only their
   constitutional basis.
5. **The lexical claim-guard cannot distinguish use from mention**, confirmed twice now, both
   times on prosecution-independence pages. Prose rephrased; guard unchanged.
6. **No structured sub-national coverage disclosure.** The hub says in prose that only three
   Länder are modelled. A structured field is the obvious next step but one country is not
   evidence that it generalises.
7. **The German per-section pages show no _Stand_ date**, so currency rests on the publisher
   rather than a printed version date.

## Requires real Netlify verification

Unchanged from the France pilot and still not claimed:

- Trailing-slash behaviour on Netlify's CDN. The export is flat `.html`, canonicals are
  consistently non-slashed, internal links never emit a trailing slash — but Netlify's own
  normalisation cannot be confirmed without a deploy.
- Case sensitivity. Local testing is on a case-insensitive filesystem.
- Real CSP behaviour under Netlify headers. `npx serve` applies none; the CSP/inline-script
  agreement is checked at build time by `verify-output`, not observed in production.
- `netlify.toml` header and cache-control rules.
