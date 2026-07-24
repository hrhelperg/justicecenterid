# France country pilot — QA record

**Date:** 2026-07-24
**Branch:** `feat/france-country-model-pilot`
**Base commit:** `965b2cc77ce463862b5d23c19c8738227b02622d` (merge of PR #2, audit fixes)

## Audit-branch merge verification

The phase brief required verifying the audit branch was actually merged, not merely that it
existed remotely. `origin/main` was at `965b2cc` — "Merge pull request #2 from
hrhelperg/audit/foundation-adversarial-qa". Because a merge commit does not prove content
landed, all thirteen audit fixes were checked individually in the merged tree:

CSP `'unsafe-inline'`; `public/wordmark.svg`; `src/app/icon.svg`; `tabIndex={-1}` on `<main>`;
`src/lib/active-path.ts`; derived `countriesResearched`; glossary derived review badge;
`HOME_TITLE`; the verifier's CSP check; the verifier's missing-asset check; block-citation
invariants; both audit documents. **All present.**

## Part A — preconditions

| ID  | Precondition                                    | Result                                                                                                                                                                                                                    |
| --- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A1  | Sub-national jurisdiction model                 | `JurisdictionRecord` + `JurisdictionLevel` (14 levels) + `FunctionScope` (6 values) across 5 functions; 15 French records; 10 validation rules in a pure `validateJurisdiction`; 11 negative tests proving each rejection |
| A2  | Route and module slug collision review          | Typed `COUNTRY_MODULES` registry; review recorded in-file; `slug === id` enforced by test; depth-based non-collision asserted; no `overview` module                                                                       |
| A3  | Output verification from the canonical registry | Regex parsing removed; `verify-output.mjs` imports `src/content/public-routes.ts` via Node type stripping + a resolver hook; 6 non-vacuity proofs                                                                         |
| A4  | Restricted claim validation                     | 9 categories, schema validation + lexical guards; 9 schema-rejection tests, 9 evasion-detection tests, plus a scan of every published surface                                                                             |

### A3 non-vacuity proofs

Each defect was reintroduced and the verifier's exit code recorded.

| Mutation                                   | Exit | Message                                                                         |
| ------------------------------------------ | ---- | ------------------------------------------------------------------------------- |
| Removed `out/countries/france/courts.html` | 1    | `route /countries/france/courts has no exported file`                           |
| Added an unexpected exported HTML route    | 1    | `exported page countries/france/not-a-module.html is not in the route registry` |
| Sitemap missing a registered route         | 1    | `sitemap is missing route /countries/france/prosecution`                        |
| Sitemap advertising a **deferred** module  | 1    | `sitemap advertises unknown route /countries/france/corrections`                |
| Duplicate URL inside the sitemap           | 1    | `sitemap contains duplicate URLs`                                               |
| Duplicate canonical across two pages       | 1    | `duplicate canonical … on countries/france/courts.html and …prosecution.html`   |
| Baseline, all restored                     | 0    | `✓ Exported output matches the route registry.`                                 |

The first sitemap attempt appeared to pass. Investigation showed the test mutation had not
applied — the regex assumed no whitespace between tags and the sitemap is newline-formatted. The
mutation was corrected and the check then failed as it should. Recorded because a proof that
silently does nothing is worse than no proof.

## Validation results

All commands actually executed on the committed tree.

| Command                 | Result                                                                                                                 |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `npm ci`                | clean; 3 pre-existing high-severity advisories, unchanged from the audit                                               |
| `npm run format:check`  | PASS                                                                                                                   |
| `npm run lint`          | PASS                                                                                                                   |
| `npm run typecheck`     | PASS                                                                                                                   |
| `npm test`              | **513 passed**, 12 files (was 391)                                                                                     |
| `npm run build`         | PASS                                                                                                                   |
| `npm run verify:output` | PASS — 45 routes, 47 exported pages, sitemap 45 URLs, 890 inline scripts permitted by CSP, all referenced assets exist |
| `npx playwright test`   | **98 passed**, 4 project-gated skips (was 96)                                                                          |

## Static hosting — direct requests, no SPA fallback

`out/` served with `npx serve@14` (no `--single`).

| Path                                                                                           | Status  |
| ---------------------------------------------------------------------------------------------- | ------- |
| `/countries`, `/countries/france`                                                              | 200     |
| `/countries/france/{justice-system,courts,law-enforcement,prosecution,investigations,sources}` | 200     |
| `/countries/france/`, `/countries/france/courts/`                                              | 200     |
| `/countries/france/{corrections,forensics,oversight,history,timeline,border-and-customs}`      | **404** |
| `/countries/germany`                                                                           | **404** |
| `/countries/fr` (ISO code, not a route)                                                        | **404** |
| `/countries/france/not-a-module`                                                               | **404** |

The six 404s on deferred modules are the substantive result: the publication gate is the router,
so unfinished research is unreachable rather than merely unlinked.

Canonical and breadcrumbs spot-checked on `/countries/france/courts`: canonical is the apex
non-slashed form; `BreadcrumbList` renders Home › Countries › France › Courts with absolute
URLs.

## Browser QA

Desktop 1280×900, mobile 390×844, and 320×800, against the exported artefact.

Every published France route: HTTP 200, exactly one `<h1>`, no skipped heading level, no
horizontal overflow at any of the three widths, a unique brand-suffixed title, and the
independence/not-legal-advice disclosure visible. `/countries/france/corrections` returns the
404 page.

Keyboard: skip link is first in tab order, moves focus to `main#main` (`document.activeElement.id === 'main'`),
and the next Tab lands inside `main`.

### One defect found and fixed

**200% text size caused sitewide horizontal overflow.** With root font-size at 32px the six
desktop primary-navigation links exceeded a 1280px viewport, pushing the whole document into
horizontal scroll — WCAG 2.2 SC 1.4.4. This was **pre-existing and not introduced by this
phase**: it reproduced on `/` and `/glossary` as well as the France pages.

Fixed by allowing the nav list to wrap (`flex-wrap`), which engages only when the row no longer
fits, so normal rendering is unchanged. Re-verified: `/`, `/countries/france`,
`/countries/france/courts` and `/glossary` all show `overflow=false` at both 16px and 32px root
font size.

### Design and trust

Screenshots reviewed at desktop and mobile. The country pages carry no flag, map, seal, crest or
tricolour decoration, and no statistics cards. Palette and typography are the existing civic
system. The independence notice sits above the content on every country page rather than in a
footer. Nothing on the pages could reasonably be mistaken for a French government publication.

## Known limitations

1. **Six of twelve France modules are unpublished** — forensics, corrections, border and
   customs, oversight, history, timeline. Each carries a stated reason rendered on the hub. This
   is the intended outcome of the publication gate, not an incomplete deliverable.
2. **Coverage of France is partial and is not claimed otherwise.** No completion percentage
   exists anywhere in the code or content.
3. **No published content exercises a real restricted claim.** Every `RestrictedClaim` in the
   repository today is a test fixture. A4 is proven against synthetic records and against a
   lexical scan of real prose, but not yet against published statistics — the corrections module
   would have done that and is unpublished.
4. **Overseas territories are modelled, not researched.** All eleven sit at `in-research` with
   `unknown` functional scopes.
5. **The lexical claim-guard cannot distinguish use from mention.** It flagged a sentence saying
   we would _not_ make a political-control claim. Prose was rephrased rather than the guard
   weakened.
6. **No structured field for scheduled legal change.** Two cited provisions expire on
   1 January 2029; this is recorded in source notes and reader-facing callouts only. See
   finding F3.

## Requires real Netlify verification

Not verifiable locally, and not claimed:

- Trailing-slash behaviour on Netlify's CDN for `/countries/france/`. The export is flat
  `.html`, canonicals are consistently non-slashed, and internal links never emit a trailing
  slash — but Netlify's own normalisation cannot be confirmed without a deploy.
- Case sensitivity. Local testing is on a case-insensitive filesystem, so `/COUNTRIES/FRANCE`
  results locally say nothing about production.
- That the CSP behaves as intended under real Netlify headers. `npx serve` applies none.
- Header and cache-control rules in `netlify.toml`.
