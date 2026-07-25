# United States multilevel country pilot — QA record

**Date:** 2026-07-24
**Branch:** `feat/united-states-multilevel-country-pilot`
**Base commit:** `e53a8ffe8d879d5a4bc36541d1e6eb6857987c7e` (merge of PR #4, Germany pilot)

## Germany merge verification

A merge commit was not treated as proof. Nine substantive Germany items were checked
individually in the merged tree, and the Germany routes were rebuilt to confirm they generate:
`germany.ts`, `scheduled-changes.ts`, `legislativeCompetence`, the `federal` root level,
`detention-capacity`, seven German sources, the model-findings doc, and the scheduled-change
doc — all present; 8 Germany routes build. Base commit recorded above.

## Model changes forced by the US

| Change                                                                                                | Kind         | Forced by                                                                         |
| ----------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------- |
| `authorityBasis` field (delegated / reserved-powers / inherent-sovereign / federal-plenary / unknown) | schema       | Tribal inherent sovereignty; also states' reserved powers and DC's plenary status |
| `tribal` jurisdiction level                                                                           | schema       | A tribal nation is not a state, territory or special subdivision                  |
| Validation: inherent-sovereign must explain non-derivation; exempt from federal-competence rule       | validation   | The parent link is geographic containment, not derivation                         |
| `articleName` on dossier                                                                              | presentation | "in United States" was ungrammatical                                              |

Considered and **deliberately not** added: a `leadershipSelection` field (handled in prose — no
typed institution to attach it to), and a structured command/coordination/contract relationship
field (deferred to the Canada RCMP pilot, the clean forcing example). See the model findings.

## Validation results

All actually executed on the committed tree.

| Command                 | Result                                                                            |
| ----------------------- | --------------------------------------------------------------------------------- |
| `npm ci`                | clean                                                                             |
| `npm run format:check`  | PASS                                                                              |
| `npm run lint`          | PASS                                                                              |
| `npm run typecheck`     | PASS                                                                              |
| `npm test`              | **646 passed**, 15 files (was 618)                                                |
| `npm run build`         | PASS                                                                              |
| `npm run verify:output` | PASS — 61 routes, 63 exported pages, sitemap 61 URLs, all referenced assets exist |
| `npx playwright test`   | 98 passed, 4 project-gated skips                                                  |

## Non-vacuity proofs

Each defect reintroduced, exit code recorded, then reverted. No mutation left in the tree.

| Mutation                                               | Exit | Message                                                       |
| ------------------------------------------------------ | ---- | ------------------------------------------------------------- |
| Removed `out/countries/united-states/prosecution.html` | 1    | `route …/prosecution has no exported file`                    |
| Exported the deferred `oversight` module               | 1    | `exported page …/oversight.html is not in the route registry` |
| Sitemap advertising the deferred `oversight` module    | 1    | `sitemap advertises unknown route …/oversight`                |
| Baseline / restored                                    | 0    | `✓ Exported output matches the route registry.`               |

The `authorityBasis` rule is proven in the unit suite: an inherent-sovereign record fails
validation when its notes are removed, and when the notes omit the non-derivation explanation;
and a non-sovereign state record still requires `legislativeCompetence` while the tribal record
is exempt. The published prison claim fails when its reference period, jurisdiction or
limitation is removed.

## Static hosting — direct requests, no SPA fallback

| Path                                                                                 | Status                          |
| ------------------------------------------------------------------------------------ | ------------------------------- |
| 8 published US routes                                                                | 200                             |
| `/countries/united-states/`, `/countries/united-states/courts/`                      | 200                             |
| `/countries/us`, `/countries/usa`, `/countries/america`                              | **404**                         |
| `/countries/united-states/{forensics,border-and-customs,oversight,history,timeline}` | **404**                         |
| `/countries/united-states/california`                                                | **404** (no public state pages) |
| `/countries/united-states/nope`                                                      | **404**                         |

Sitemap: exactly 8 US URLs, **0** deferred modules. Canonical verified on the corrections page.
No prohibited structured-data type is present — a first automated scan matched the word
"Attorney" in the prose "United States Attorneys", which is not a schema `@type`; a precise scan
for `"@type":"Attorney"` (and the other prohibited types) across all US output returns nothing.

## Browser QA

29 page/viewport checks at 1280×900, 390×844 and 320×800, plus 200% text resize on the hub and
law-enforcement pages. Every published route: 200, exactly one `<h1>`, no skipped heading level,
no horizontal overflow at any width including 200% text, unique brand-suffixed title. Deferred
module returns 404. Back/forward navigation correct. Skip link moves focus to `main#main` and
the next Tab lands inside it. The jurisdictions table's scroll region is keyboard reachable
(`tabIndex=0`, `role="region"`, `aria-label`) — the accessibility fix carried over from the
Germany pilot applies to the US table too.

## Two defects found by looking, not by testing

1. **Wrong demonym.** Every US page shipped saying "not a public body of United States" — the
   independence-notice demonym map had only France and Germany, so the US fell through to an
   ungrammatical default. Fixed with a US demonym and a better fallback; the disclosure
   regression test now covers the US case.
2. **Ungrammatical title.** The hub read "Justice and public safety in United States". Fixed
   with an optional `articleName`. Both were found by reading the rendered page, and neither
   would have failed any test that existed — the pages were correct in every other respect.

## Known limitations

1. **Five of thirteen modules unpublished**, each with a stated reason on the hub.
2. **No individual state, county, parish, municipality or named tribe is described.** Five
   jurisdictions are structural samples asserting only what their sources support.
3. **Coverage of the US is partial and is not claimed otherwise.** No completion percentage.
4. **Tribal jurisdiction is modelled as a category**, not as any specific nation. The detailed
   criminal-jurisdiction map of Indian country (Major Crimes Act, state-specific PL 280 effects,
   recent Supreme Court decisions) is not researched.
5. **The federal-agency competences** (FBI, DEA, ATF and others) are not researched beyond the
   general § 533 basis.
6. **DC's distinctive court and prosecution arrangements** are recorded as `unknown`.
7. **The lexical restricted-claim guard's use/mention blindness** remains an accepted limitation
   from earlier pilots; it did not trip on US content, but the US prose was written with it in
   mind.

## Requires real Netlify verification

Unchanged from earlier pilots and still not claimed: trailing-slash behaviour on Netlify's CDN,
case sensitivity (local filesystem is case-insensitive), real CSP behaviour under Netlify
headers (checked at build time by `verify-output`, not observed in production), and the
`netlify.toml` header and cache rules.
