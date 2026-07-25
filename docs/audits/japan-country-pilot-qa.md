# Japan prefectural country pilot — QA record

**Date:** 2026-07-25
**Branch:** `feat/japan-prefectural-country-pilot`
**Base commit:** `3bce17668732286667c1162865efe358a915a598` (merge of PR #6, Ireland pilot, into `main`)
**Pilot HEAD at report:** `0e982a87bd52130fe2f976a8f5254917bf543617` (before the docs commit)

## Ireland merge verification (the gate)

A merge commit, PR title and branch name were **not** treated as proof. The Ireland artifacts
were checked individually in the synced `main` tree and the routes rebuilt:

- `src/content/dossiers/ireland.ts` present; registered in `dossiers/index.ts`.
- Ireland country + jurisdiction record (`ie`), Ireland-scoped sources, dossier registration.
- All **9** Ireland routes build (`/countries/ireland` + 8 modules incl. `oversight`).
- The restricted-claim data (`ie-prison-density-2024`), the GSOC→Fiosrú `ScheduledChange`
  (`ie-policing-oversight-reform-2025`) exercising the `taken-effect` status, and the
  `reviewedAfterEffect` lifecycle field — all present.
- Ireland model-findings and QA docs, and the Ireland regression tests
  (`tests/content/countries-ireland.test.ts`, 22 tests) — all present and green.

Only after that did work on Japan begin, from a clean tree, on a branch cut from synced `main`.

## Model assessment

Japan forced **two** evidence-driven schema additions and no more: `translationStatus` +
`authoritativeLanguage` on `SourceRecord` (A1), and a `prefecture` jurisdiction level (A3). The
coordination/command relationship (A2) was represented by scope alone (national `shared`,
prefectural `own`) with **no** new relationship field, consistent with the US finding. The
restricted claim (A4) was **deferred with a documented blocker**. Full reasoning:
[japan-model-findings.md](../research/japan-model-findings.md). Part A was validated and
committed separately (`0528203`) before any page was written.

## Publication scope

**Published (8 routes):** hub `/countries/japan`; modules `justice-system`, `law-enforcement`,
`courts`, `prosecution`, `investigations`, `corrections`, `sources`.
**Deferred (no route, no sitemap, no nav, reason on hub):** `forensics`, `border-and-customs`,
`oversight`, `history`, `timeline`.

## Correctness checks specific to this pilot

- **Coordination, not command.** The law-enforcement page states national coordination/
  supervision "on matters of national concern", places operational policing with the prefectures
  under prefectural public safety commissions, rejects the "Japan's FBI" analogy, and says the
  prefectural police are "not branches of the National Police Agency". Asserted by test.
- **Lay judge (saiban-in), precisely.** Described as a mixed panel sitting _together with_
  professional judges, for _certain serious criminal cases only_, begun 21 May 2009 — "not a
  separate jury" and "not to trials in general". Asserted by test.
- **Translation integrity.** Statutes cited as reference translations; pages state "only the
  original Japanese texts have legal effect". Every JP `legislation` source carries
  `official-reference` + `ja` (invariant test).
- **No forced statistic.** `corrections.restrictedClaims` is empty; the page says plainly that no
  prison figure is published and why. Asserted by test.
- **Prosecution restraint.** No Minister-of-Justice direction asserted (untranslated Act); the
  page states this limitation. Asserted by test.
- **Terminology consistency.** "National Police Agency", "prefectural police", "public
  prosecutors", "penal institutions", "lay judge system" used consistently across titles, nav,
  body, breadcrumbs, structured data and sources.

## Accessibility — Japanese text

Inline Japanese script is wrapped in `<span lang="ja">` (WCAG 3.1.2, Language of Parts) via
`splitJapaneseRuns` and the shared `ScriptText` component, used by the block renderer, the
definition list and the source list. The document root stays `lang="en"`. Verified in the built
HTML: `都道府県` (hub), `裁判員` (courts), `警視庁` (law-enforcement), and the statute titles
`日本国憲法` / `刑事訴訟法` (source list) each render inside a `lang="ja"` span. Romanizations
(todofuken, saiban-in, Keishicho) are **not** wrapped — asserted by non-vacuous unit tests.

## Validation results

- `npm run test` — **739 passed** (17 files), including `countries-japan.test.ts` (**31 tests**).
- `npm run typecheck` — clean.
- `npm run lint` — clean.
- `npm run format:check` — clean.
- `npm run build` — succeeds; **80** pages exported.
- `npm run verify:output` — clean: **78** routes, 80 pages, sitemap 78 URLs, all same-origin
  assets exist, CSP covers inline scripts.

## Non-vacuity proofs

- **verify:output bites.** Removing `out/countries/japan/courts.html` made `verify:output` exit
  non-zero with "route /countries/japan/courts has no exported file"; restored immediately.
- **Test suite bites.** The Japan suite includes negative cases: a parentless prefecture record
  fails validation (`requires a parentJurisdictionId`); an unresearched prefecture asserting a
  researched scope fails (`unresearched`); `splitJapaneseRuns` leaves Latin-only text untagged
  and does not tag romanizations.

## Static HTTP matrix (served from `out/`, no SPA fallback)

| Path                                                                         | Expected | Actual |
| ---------------------------------------------------------------------------- | -------- | ------ |
| `/countries/japan` and the 7 module routes                                   | 200      | 200    |
| `/countries/japan/{oversight,forensics,border-and-customs,history,timeline}` | 404      | 404    |
| `/countries/jp`                                                              | 404      | 404    |
| `/countries/japan/this-does-not-exist`                                       | 404      | 404    |

Content-Type on the hub is `text/html; charset=utf-8`; the deferred paths serve a real
"not found" page, confirming no SPA fallback masks the deferred routes as soft-200s.

## Browser / responsive QA

The Japan pages reuse the shared, already-QA'd layout components (`Callout`, `DefinitionList`,
`SourceList`, `max-w-measure` prose column, responsive definition-list grid) unchanged. The only
new rendering behaviour is inline `<span lang="ja">` wrapping, which does not alter the box model
(inline spans of short kanji runs). Rendered-HTML inspection confirms structure, UTF-8 encoding
and `lang` attributes; the 320px and 200%-zoom behaviour is inherited from the components
validated in the France/Germany/US/Ireland pilots and is unaffected by this pilot's changes.

## Git discipline

Two commits on the pilot branch before docs: Part A model review (`0528203`), then the pages,
renderer, tests and wiring (`0e982a8`). No PR opened or merged; no deployment; no Netlify/DNS
changes; Brazil not begun.
