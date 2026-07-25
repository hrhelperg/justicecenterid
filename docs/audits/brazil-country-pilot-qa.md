# Brazil federal country pilot — QA record

**Date:** 2026-07-25
**Branch:** `feat/brazil-federal-country-pilot`
**Base commit:** `65a27d717c0a229f92951f1504222df82a2ec144` (merge of PR #7, Japan pilot, into `main`)
**Part A commit:** `06446fe` · **Pages commit:** `d181440` (before the docs commit)

## Japan merge verification (the gate)

A merge commit, PR title and branch name were **not** treated as proof. The Japan artifacts were
checked individually in the synced `main` tree and the routes rebuilt:

- `src/content/dossiers/japan.ts` present and registered; `src/components/content/ScriptText.tsx`
  present; the `prefecture` jurisdiction level and the `jp` / `jp-tokyo` / `jp-osaka` records
  present; the `translationStatus` / `authoritativeLanguage` fields present; the six `jp-`
  sources present.
- All **8** Japan routes rebuild (`/countries/japan` + 7 modules); the Japan and jurisdiction
  regression tests pass (105 tests).
- Japan model-findings and QA docs present.

Only after that did work on Brazil begin, from a clean tree, on a branch cut from synced `main`.

## Model assessment

Brazil forced **no new schema** — no field, no level, no enum value. It reuses Germany's
administration/legislation split (sharpened to `exclusive-federal` for the legal system, since
penal and procedural law are the Union's exclusive competence, CF Art. 22 I), the US
`authorityBasis: reserved-powers` (Art. 25 §1), and France's `alsoExercisesLevels` (for the
Federal District, Art. 32 §1). The two hard questions — function-split state policing and the
autonomous Ministério Público — were argued on both sides and answered in **prose**, per the
explicit US pilot precedents (institutions in prose, not typed records), against a research
critic's recommendation of heavier structures. Full reasoning:
[brazil-model-findings.md](../research/brazil-model-findings.md). Part A was validated and
committed separately (`06446fe`) before any page was written.

## Source verification — read verbatim from the authoritative Portuguese

Every constitutional and statutory fact was verified byte-exact against the **authoritative
Portuguese** Planalto text, retrieved with a browser user-agent (planalto.gov.br resets an
ordinary fetch): the Constitution (Arts. 1, 2, 5, 18, 21 XIII–XIV, 22 I, 24 I, 25 §1, 32, 92,
102, 103-B, 125, 127–130-A, 144 with §§4–6/8), the Código de Processo Penal (Arts. 4, 12) and
the Lei de Execução Penal (Arts. 1, 61, 71, 74). The prison statistic (670,265 / 494,379 /
175,886, 31 Dec 2024) was extracted from the primary SISDEPEN PDF. The police and Ministério
Público facts were read from the institutions' own gov.br / mp.br pages.

## Independent adversarial verification

An adversarial pass (four parallel refuters, instructed to default to "uncertain" rather than
confirm) re-checked **23 load-bearing claims** as drafted on the pages against official sources —
the Art. 144 six-force enumeration and functions, the Art. 22/24/25 competences, the Ministério
Público's character and functions, the STF/CNJ roles, the DEPEN→SENAPPEN transformation, the
SISDEPEN figures, and the DF's Union-organised institutions. **Result: 23 supported, 0 refuted,
0 uncertain.** No corrections were required.

## Publication scope

**Published (8 routes):** hub `/countries/brazil`; modules `justice-system`, `law-enforcement`,
`courts`, `prosecution`, `investigations`, `corrections`, `sources`.
**Deferred (no route, no sitemap, no nav, reason on hub):** `forensics`, `border-and-customs`,
`oversight`, `history`, `timeline`.

## Correctness checks specific to this pilot

- **Federal law, decentralised institutions.** The pages state that penal and procedural law are
  the Union's exclusive competence and the states administer without writing the criminal law —
  the reverse of the US. Asserted by test (`legalSystemScope`/`legislativeCompetence`).
- **Function-split policing, in prose.** All six Art. 144 forces named; the state's investigative
  Polícia Civil and preventive Polícia Militar distinguished; federal forces coexist without
  commanding the state forces. Asserted by test.
- **The Ministério Público.** Described as an autonomous institution independent of all three
  branches, exclusive holder of the public criminal action and guardian of the legal order, with
  its MPU/MPE structure and the CNMP. Asserted by test.
- **A scoped statistic.** `corrections.restrictedClaims` carries the SISDEPEN figure with its
  aggregation, home-detention-exclusion and no-comparison limitations. Asserted by test.
- **Terminology.** Portuguese institution names kept (Ministério Público, Polícia Civil, Polícia
  Militar, delegado) rather than mapped onto foreign equivalents; consistent across titles, nav,
  body, breadcrumbs, structured data and sources.

## Validation results

- `npm run test` — **786 passed** (18 files), including `countries-brazil.test.ts` (**25 tests**).
- `npm run typecheck` — clean · `npm run lint` — clean · `npm run format:check` — clean.
- `npm run build` — succeeds; **88** pages exported.
- `npm run verify:output` — clean: **86** routes, 88 pages, sitemap 86 URLs, all same-origin
  assets exist, CSP covers inline scripts.

## Non-vacuity proofs

- **verify:output bites.** Removing `out/countries/brazil/prosecution.html` made `verify:output`
  exit non-zero with "route /countries/brazil/prosecution has no exported file"; restored.
- **Test suite bites.** The Brazil suite includes negative cases: a São Paulo record stripped of
  `legislativeCompetence` fails the federal-parent validation rule; the restricted claim fails
  when its reference period is removed.

## Static HTTP matrix (served from `out/`, no SPA fallback)

| Path                                                                          | Expected | Actual |
| ----------------------------------------------------------------------------- | -------- | ------ |
| `/countries/brazil` and the 7 module routes                                   | 200      | 200    |
| `/countries/brazil/{oversight,forensics,border-and-customs,history,timeline}` | 404      | 404    |
| `/countries/br`                                                               | 404      | 404    |
| `/countries/brazil/nope`                                                      | 404      | 404    |

Content-Type on the module pages is `text/html; charset=utf-8`, and Portuguese accents render
(e.g. "Ministério Público"); the deferred paths serve a real not-found page, confirming no SPA
fallback masks them.

## Browser / responsive QA

The Brazil pages reuse the shared, already-QA'd layout components (`Callout`, `DefinitionList`,
`SourceList`, `max-w-measure` prose column) unchanged, and add no new rendering behaviour
(Portuguese is Latin script, so no `lang`-wrapping path is exercised). Rendered-HTML inspection
confirms structure, UTF-8 encoding and the correct facts-verified date; the 320px and 200%-zoom
behaviour is inherited from the components validated in the earlier pilots and is unaffected.

## Git discipline

Two commits on the pilot branch before docs: Part A model review (`06446fe`), then the pages,
wiring and tests (`d181440`). No PR opened or merged; no deployment; no Netlify/DNS changes;
no country beyond Brazil begun.
