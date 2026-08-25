# Knowledge Expansion Wave 9 — baseline

Measured directly from `main` immediately before the Wave 9 branch was cut.

## Provenance

| Field | Value |
| --- | --- |
| Repository | `hrhelperg/justicecenterid` |
| Base branch | `main` |
| Base SHA | `3f5795a9e151f7b04ab8bb1f99905eefd767292b` |
| Base commit | Merge pull request #26 from `feat/knowledge-expansion-wave-8` |
| Working tree at measurement | clean |
| Wave branch | `feat/knowledge-expansion-wave-9` (local only) |
| Measured on | 2026-08-25 |
| Node / npm | v24.15.0 / 11.12.1 |

## Merge-gate result

Wave 8 is substantively present in `main`, verified by content rather than by merge message:

- `git merge-base --is-ancestor origin/feat/knowledge-expansion-wave-8 origin/main` → true
- All six Wave 8 guides present in `src/content/guides/investigations.ts`, and four of them
  **rebuilt to HTML** from a clean `rm -rf out .next && npm run build`
- `criminal-investigations-wave-8-plan.md`, `criminal-investigation-country-matrix.md`,
  `knowledge-expansion-wave-8-cannibalization.md` and `knowledge-expansion-wave-8-qa.md` present
- `tests/content/wave8-investigations.test.ts` and `e2e/wave8-investigations.spec.ts` present
- Wave 8 safeguards live: `OPERATIONAL_PATTERNS` (safety), `hasSourceFor` (country-source
  invariant), and the reserved prosecution/courts boundary tests
- `de-stpo-162-ermittlungsrichter` present; source records total 246

**The Wave 8 courts boundary test is the constraint Wave 9 inherits.** It asserts that no
investigations page discusses court hierarchy, trial procedure, appellate structure or rules of
evidence. Wave 9 owns that material; the assertion must keep passing, which means Wave 9 adds
courts content without pulling it back into the investigations cluster.

## Build and route metrics

| Metric | Baseline | Command |
| --- | --- | --- |
| Routes in registry | 362 | `npm run verify:output` |
| Exported pages | 364 | `npm run verify:output` |
| Sitemap URLs | 362 | `npm run verify:output` |
| HTML files in `out/` | 364 | `find out -name '*.html' \| wc -l` |

## Test metrics

| Metric | Baseline | Command |
| --- | --- | --- |
| Unit test files | 60 | `npm test` |
| Unit tests | 2882 | `npm test` |
| Playwright spec files | 10 | `npx playwright test --list` |
| Playwright tests | 510 | `npx playwright test --list` |

## Content records

| Record type | Baseline | Note |
| --- | --- | --- |
| **Courts routes** | **1** | one guide carries `section: 'courts'` — `what-do-courts-do` |
| **Court-related glossary routes** | **7** | `court`, `judicial-independence`, `judicial-review`, `appeal`, `jurisdiction`, `due-process`, `rule-of-law` |
| Institution records | 16 records, 14 routed | none is a court type |
| Profession routes | 6 | includes `judge` |
| Country dossiers | 32 | **all 32 carry a `courts` module** |
| Source records | 246 | |
| Restricted claims | 10 | |
| ScheduledChange records | 4 | |

### Court-related sources at baseline

Counted by reading `sources.ts` for records whose `note` supports a court-structure, judicial-
independence or appellate claim: **48**. This is the figure Wave 9's source growth is measured
against, not the total of 246.

### The architecture already exists

`/courts` is a `SectionPage` driven by the `courts` entry in `sections.ts`, and `/courts/[slug]`
is already wired to every guide carrying `section: 'courts'`. Adding a guide with that section
value routes it automatically.

**Part A is therefore satisfied by construction.** Wave 9 creates no route file and no competing
hub.

### The cannibalization constraint, stated up front

Seven of the twenty-eight Part B candidates map directly onto glossary terms that already exist:
*court*, *judicial independence*, *judicial review*, *appeal*, *jurisdiction*, *due process* and
*rule of law*. `/professions/judge` owns the judicial role. `what-do-courts-do` owns the
function question.

The space left for Wave 9 is therefore **institutional and comparative** — how court systems are
structured, how they differ, and what safeguards their structure carries — not the definition of
any term the glossary already holds.

## Bundle and output size

| Metric | Baseline | Command |
| --- | --- | --- |
| JS bytes (`out/_next`) | 663,403 B | `find out/_next -name '*.js' -exec stat -f%z {} +` |
| CSS bytes (`out/_next`) | 29,625 B | `find out/_next -name '*.css' -exec stat -f%z {} +` |
| Total `out/` size | 84,928 KB | `du -sk out` (clean rebuild) |

Wave 9 adds no client runtime, no chart library and no hierarchy engine. The JS figure is expected
to move by zero.
