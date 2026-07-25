# Ireland common-law country pilot — QA record

**Date:** 2026-07-25
**Branch:** `feat/ireland-common-law-country-pilot`
**Base commit:** `68e4e85652cc772d61d676aaff5288a875cef674` (merge of PR #5, US pilot)

## US merge verification

A merge commit was not treated as proof. Eleven substantive US items were checked individually
in the merged tree, and the US routes were rebuilt: `united-states.ts`, dossier registration,
11 US sources, 5 US jurisdiction samples, `authorityBasis`, the `tribal` level, the restricted
claim, the model-findings doc, the QA doc, and the US regression tests — all present; 8 US
routes build. Base commit recorded above.

## Model assessment

Ireland forced **no schema change** — the model already handles a unitary state (France) and the
common-law/civil-law distinction is content, not structure. Two of the brief's Ireland model
questions (a structured NI-exclusion notice; structured bilingual aliases) were considered and
declined in favour of prose, consistent with earlier pilots. The one structural contribution is
behavioural: the first exercise of the `ScheduledChange` **`taken-effect`** lifecycle, for the
2 April 2025 policing-oversight reform. Full reasoning in the model findings.

## Validation results

All actually executed on the committed tree.

| Command                 | Result                                                                            |
| ----------------------- | --------------------------------------------------------------------------------- |
| `npm ci`                | clean                                                                             |
| `npm run format:check`  | PASS                                                                              |
| `npm run lint`          | PASS                                                                              |
| `npm run typecheck`     | PASS                                                                              |
| `npm test`              | **687 passed**, 16 files (was 665)                                                |
| `npm run build`         | PASS                                                                              |
| `npm run verify:output` | PASS — 70 routes, 72 exported pages, sitemap 70 URLs, all referenced assets exist |
| `npx playwright test`   | 98 passed, 4 project-gated skips                                                  |

## Non-vacuity proofs

Each defect reintroduced, exit code recorded, then reverted. No mutation left in the tree.

| Mutation                                          | Exit | Message                                                     |
| ------------------------------------------------- | ---- | ----------------------------------------------------------- |
| Removed `out/countries/ireland/oversight.html`    | 1    | `route …/oversight has no exported file`                    |
| Exported the deferred `history` module            | 1    | `exported page …/history.html is not in the route registry` |
| Sitemap advertising the deferred `history` module | 1    | `sitemap advertises unknown route …/history`                |
| Baseline / restored                               | 0    | `✓ Exported output matches the route registry.`             |

The `ScheduledChange` `taken-effect` record validates in the unit suite; the published prison
claim fails when its reference period, jurisdiction or limitation is removed.

## Static hosting — direct requests, no SPA fallback

| Path                                                                 | Status  |
| -------------------------------------------------------------------- | ------- |
| 9 published Ireland routes                                           | 200     |
| `/countries/ireland/`, `/countries/ireland/oversight/`               | 200     |
| `/countries/ie`                                                      | **404** |
| `/countries/ireland/{forensics,border-and-customs,history,timeline}` | **404** |
| `/countries/ireland/nope`                                            | **404** |

Sitemap: exactly 9 Ireland URLs, 0 deferred modules. No prohibited structured-data `@type` is
present across the Ireland output.

## Browser QA

31 page/viewport checks at 1280×900, 390×844 and 320×800, plus 200% text resize on the hub and
oversight pages. Every published route: 200, exactly one `<h1>`, no skipped heading level, no
horizontal overflow at any width including 200% text, unique brand-suffixed title. Deferred
module returns 404. Back/forward correct. Skip link moves focus to `main#main` and the next Tab
lands inside it. The scope-integrity callout leads the hub visibly.

## Three latent defects found by looking, not by testing

All inherited from the France pilot, all rendering wrongly on every country hub, none caught by
an existing test — found by reading the built Ireland pages:

1. **Hardcoded facts-verified date** ("24 July 2026") in the hub and module templates. Correct
   for the first three countries by coincidence; wrong for Ireland (25 July). Now formatted from
   the record.
2. **Hardcoded "not about France"** in the not-researched note, shown on the Germany, US and
   Ireland hubs. Now names the actual country.
3. **Missing Ireland demonym**, falling through to "a government body of Ireland". Added "an
   Irish government body".

Each is fixed with a regression test. This is the programme's recurring lesson: a value correct
for the country a component was first written for is latent for every country after it, and only
a differently-shaped country reveals it.

## Known limitations

1. **Four of thirteen modules unpublished**, each with a stated reason on the hub.
2. **No verbatim constitutional text.** The primary Constitution was WAF-blocked; its provisions
   are described through official secondary sources and cross-corroborated.
3. **Coverage of Ireland is partial and is not claimed otherwise.** No completion percentage.
4. **The powers, procedures and findings of the current oversight bodies** (Fiosrú, the PCSA)
   are not researched beyond their identity, basis and date.
5. **The internal structure** of An Garda Síochána, the courts' detailed jurisdiction, and the
   Irish Prison Service's individual prisons are not researched.
6. **The prison figure is from the Council of Europe (SPACE I)**, an international source, because
   the Irish Prison Service Annual Report PDF returned a TLS certificate error; a direct Irish
   national figure would be preferable and is available to a human browser.

## Requires real Netlify verification

Unchanged from earlier pilots and still not claimed: trailing-slash behaviour on Netlify's CDN,
case sensitivity (local filesystem is case-insensitive), real CSP behaviour under Netlify
headers (checked at build time by `verify-output`, not observed in production), and the
`netlify.toml` header and cache rules.
