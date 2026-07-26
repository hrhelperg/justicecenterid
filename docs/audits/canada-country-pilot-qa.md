# Canada contract-policing pilot — QA record

**Date:** 2026-07-26
**Program branch:** `feat/canada-australia-spain-switzerland-program`
**Base commit:** `5f9b5176cc23aa881490d4eb0611217749d6eab4` (origin/main, with the Brazil pilot merged — PR #24)
**Part A commit:** `3802635` · **Pages/tests commit:** `22d7ffa`

## Base resolution

Repo confirmed `hrhelperg/justicecenterid`. Brazil was verified **merged into origin/main**
(primary path, not the stacked fallback): the Brazil dossier, `br`/`br-sp`/`br-df` jurisdiction
records, restricted claim, Federal District `alsoExercisesLevels`, `exclusive-federal`
legislativeCompetence, demonym, docs and 8 routes all present; 786 tests green; 86 routes / 86
sitemap URLs / 88 exported pages baseline recorded. The four-country program branch was created
from synced main; the eventual PR targets `main` directly.

## Model assessment

Canada forced **one** additive schema change — the `FunctionScope` value `contracted` — and
**rejected** the typed inter-institutional relationship model it was expected to force (the s.96
superior courts are the same shape and are handled with scope + prose; a named-agency registry
would break the "institution types, not named agencies" invariant). `authorityBasis:
reserved-powers` was rejected (Canada's residual POGG power is federal) and the territory reuses
`federal-plenary`. Full reasoning: [canada-model-findings.md](../research/canada-model-findings.md).
Part A was validated and committed separately (`3802635`) before any page.

## Source verification

Every constitutional and statutory fact was read **verbatim** from the bilingual Justice Laws
Website (retrieved with a browser user-agent): Constitution Act 1867 ss.91(27)/91(28)/92(6)/92(14)/96/100/101;
Charter ss.7/11(d)/12/18(1); Criminal Code s.743.1; RCMP Act ss.3/5/20; Supreme Court Act s.4/6;
DPP Act s.3(1). The RCMP contract-policing figures were read from the RCMP page, the corrections
figures extracted from the Statistics Canada **primary CSV** (Table 35-10-0154-01), and the
Sûreté du Québec name from its official site.

## Independent adversarial verification

Three parallel refuters (defaulting to "uncertain") re-checked **15 load-bearing claims** against
official sources: **14 supported, 0 refuted, 1 uncertain.** The single "uncertain" was the exact
Statistics Canada decimals (25,349.8 / 19,334.5 / 5,895.1): the refuter could not pull the values
through the interactive table UI, but they were extracted here directly from the authoritative
primary CSV download, and the refuter's own arithmetic (19,334.5 + 5,895.1 + 120.2 = 25,349.8)
matches the extracted "other statuses" line exactly. No correction was required.

## Publication scope

**Published (8):** hub, justice-system, law-enforcement, courts, prosecution, investigations,
corrections, sources. **Deferred (5):** forensics, border-and-customs, oversight (police oversight
is non-uniform across federal/provincial lines — publishing it would imply a uniformity that does
not exist), history, timeline.

## Validation results

- `npm run test` — **841 passed** (19 files), incl. `countries-canada.test.ts` (30 tests).
- `npm run typecheck` / `lint` / `format:check` — clean.
- `npm run build` — 96 pages. `npm run verify:output` — clean: **94 routes**, 96 pages, sitemap 94.

## Non-vacuity proofs

- **verify:output bites:** removing `out/countries/canada/law-enforcement.html` failed the
  verifier ("no exported file"); restored.
- **Test suite bites:** an unresearched record claiming `contracted` fails validation; a province
  stripped of `legislativeCompetence` fails the federal-parent rule; the restricted claim fails
  when its reference period is removed.

## Static HTTP matrix (served from `out/`, no SPA fallback)

| Path                                              | Expected | Actual |
| ------------------------------------------------- | -------- | ------ |
| `/countries/canada` + 7 module routes             | 200      | 200    |
| `/countries/ca`                                   | 404      | 404    |
| `/countries/canada/{oversight,forensics}`         | 404      | 404    |
| `/countries/canada/ontario`, `/countries/ontario` | 404      | 404    |
| `/countries/canada/nope`                          | 404      | 404    |

Content-Type `text/html; charset=utf-8`; "Sûreté du Québec" renders with accents.

## Browser / responsive QA

The Canada pages reuse the shared, already-QA'd layout components unchanged; rendered-HTML
inspection confirms the facts date (26 July 2026), the "not about Canada" note (no France/Brazil
leakage), UTF-8 accents, and `<html lang="en">`. No new rendering path was added (French terms are
Latin script, as on the France/Germany pages). 320px / 200% behaviour is inherited from the
components validated in earlier pilots.

## Git discipline

Two focused commits so far on the program branch (Part A `3802635`, pages/tests `22d7ffa`), with
the docs commit to follow. No PR, no merge, no deployment. Australia is next in the program.
