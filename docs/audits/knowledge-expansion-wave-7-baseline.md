# Knowledge Expansion Wave 7 — baseline

Measured directly from `main` immediately before the Wave 7 branch was cut. No metric on this
page is copied from an earlier wave; every number below was produced by running the command
named beside it against this exact tree.

## Provenance

| Field | Value |
| --- | --- |
| Repository | `hrhelperg/justicecenterid` |
| Base branch | `main` |
| Base SHA | `de2b7573db873aded12c6fb38d08d6caf7dbd152` |
| Base commit | Merge pull request #24 from `feat/knowledge-expansion-wave-6` |
| Working tree at measurement | clean (`git status --porcelain` empty) |
| Wave branch | `feat/knowledge-expansion-wave-7` (local only) |
| Measured on | 2026-08-25 |
| Node / npm | v24.15.0 / 11.12.1 |

## Merge-gate result

Wave 6 is substantively present in `main`, verified by content rather than by PR title:

- `git merge-base --is-ancestor origin/feat/knowledge-expansion-wave-6 origin/main` → true
- `IGPN` appears in 4 files under `src/`, `IGGN` in 2, `inspection générale` in 4
- `Défenseur des droits` appears in 3 files under `src/`
- Source records total 235, which includes the ten French primary sources Wave 6 added
- `/countries/france/oversight` is published, not deferred

Wave 5 artifacts were verified individually in the same way and are all present:
`independent-police-complaints-body`, `ombuds-and-rights-institution`, `who-investigates-police`,
`how-police-are-held-to-account`, `why-police-accountability-matters`, `oversightPosture`
(`types.ts` and `institutions.ts`), and Fiosrú/GSOC temporal handling (`institutions.ts`,
`scheduled-changes.ts`, `dossiers/ireland.ts`, `tests/content/wave5-oversight.test.ts`).

## Build and route metrics

| Metric | Baseline | Command |
| --- | --- | --- |
| Routes in registry | 353 | `npm run verify:output` |
| Exported pages | 355 | `npm run verify:output` |
| Sitemap URLs | 353 | `npm run verify:output` |
| HTML files in `out/` | 355 | `find out -name '*.html' \| wc -l` |

`verify:output` reports 353 routes against 355 exported pages; the two extra files are the
non-registry outputs the exporter always emits, and the script passes on that basis.

## Test metrics

| Metric | Baseline | Command |
| --- | --- | --- |
| Unit test files | 58 | `npm test` |
| Unit tests | 2620 | `npm test` |
| Playwright spec files | 8 | `npx playwright test --list` |
| Playwright tests | 406 | `npx playwright test --list` |

Typecheck passes with no output. Build completes and `verify:output` passes.

## Content records

| Record type | Baseline | Command |
| --- | --- | --- |
| Institution records | 15 | `grep -cE "^    slug: '" src/content/institutions.ts` |
| Routed institution records | 15 | all institution records are routed |
| Law-enforcement guides | 15 | `grep -cE "^    slug: '" src/content/guides/law-enforcement.ts` |
| Country dossiers | 32 | `ls src/content/dossiers/*.ts` |
| Source records | 235 | `grep -cE "^  \{" src/content/sources.ts` |
| ScheduledChange records | 4 | `grep -cE "^  \{" src/content/scheduled-changes.ts` |
| Restricted claims | 10 | `grep -cE "^  \{" src/content/restricted-claims.ts` |

### Existing institution slugs

`municipal-police`, `national-police`, `gendarmerie`, `federal-investigative-agency`,
`transport-police`, `prosecution-service`, `correctional-service`, `state-police`,
`provincial-police`, `prefectural-police`, `autonomous-community-police`,
`independent-police-complaints-body`, `ombuds-and-rights-institution`,
`border-and-customs-authority`, `coast-guard`.

### Existing law-enforcement guide slugs

`why-societies-need-law-enforcement`, `police-and-law-enforcement-difference`,
`how-policing-institutions-changed`, `police-use-of-force`, `arrest-and-detention`,
`why-police-accountability-matters`, `how-police-are-held-to-account`, `police-jurisdiction`,
`how-policing-is-divided-between-levels`, `contract-policing`,
`police-command-and-coordination`, `municipal-and-national-police`, `local-police-governance`,
`sheriffs-and-city-police`, `who-investigates-police`.

## Bundle and output size

| Metric | Baseline | Command |
| --- | --- | --- |
| JS bytes (`out/_next`) | 663,403 B (647.9 KB) | `find out/_next -name '*.js' -exec stat -f%z {} +` |
| CSS bytes (`out/_next`) | 29,625 B (28.9 KB) | `find out/_next -name '*.css' -exec stat -f%z {} +` |
| Total `out/` size | 83,724 KB | `du -sk out` |

Wave 7 adds no client runtime, so the JS figure is expected to move by zero or by the small
amount Next.js attributes to additional prerendered routes. The CSS figure is expected to be
unchanged unless a new static section requires a rule that does not already exist.

## What this baseline is for

Every number here is re-measured at the end of Wave 7 and reported as a delta. A delta that
cannot be explained by the work actually done is treated as a finding, not as noise.
