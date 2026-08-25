# Knowledge Expansion Wave 8 — baseline

Measured directly from `main` immediately before the Wave 8 branch was cut. Every figure below
was produced by running the command named beside it against this exact tree.

## Provenance

| Field | Value |
| --- | --- |
| Repository | `hrhelperg/justicecenterid` |
| Base branch | `main` |
| Base SHA | `46ce9872aac1e87405115b77083481f37a65ebf9` |
| Base commit | Merge pull request #25 from `feat/knowledge-expansion-wave-7` |
| Working tree at measurement | clean |
| Wave branch | `feat/knowledge-expansion-wave-8` (local only) |
| Measured on | 2026-08-25 |
| Node / npm | v24.15.0 / 11.12.1 |

## Merge-gate result

Wave 7 is substantively present in `main`, verified by content rather than by merge message:

- `git merge-base --is-ancestor origin/feat/knowledge-expansion-wave-7 origin/main` → true
- `/institutions/independent-police-investigative-body`, `/law-enforcement/internal-vs-external-police-oversight`
  and `/law-enforcement/police-complaints-vs-criminal-investigation` all present in the content
  registry and all three rebuilt to HTML from a clean `rm -rf out .next && npm run build`
- `docs/research/police-oversight-global-function-matrix.md`,
  `docs/research/wave-7-oversight-taxonomy-findings.md` and
  `docs/audits/knowledge-expansion-wave-7-qa.md` all present
- `tests/content/wave7-oversight-powers.test.ts` and `e2e/wave7-oversight-institutions.spec.ts`
  present
- Wave 7 safeguards present in `src/content/types.ts`: `OversightBodyProfile`,
  `OVERSIGHT_POWERS`; `not-established` appears 15 times in `institutions.ts`
- Source records total 244, which includes Wave 7's nine additions

## Build and route metrics

| Metric | Baseline | Command |
| --- | --- | --- |
| Routes in registry | 356 | `npm run verify:output` |
| Exported pages | 358 | `npm run verify:output` |
| Sitemap URLs | 356 | `npm run verify:output` |
| HTML files in `out/` | 358 | `find out -name '*.html' \| wc -l` |

## Test metrics

| Metric | Baseline | Command |
| --- | --- | --- |
| Unit test files | 59 | `npm test` |
| Unit tests | 2724 | `npm test` |
| Playwright spec files | 9 | `npx playwright test --list` |
| Playwright tests | 446 | `npx playwright test --list` |

## Content records

| Record type | Baseline | Command |
| --- | --- | --- |
| **Investigation routes** | **1** | one guide carries `section: 'investigations'` |
| Institution routes | 16 records, 14 routed | `institutions.ts` |
| Profession routes | 6 | `professions.ts` |
| Glossary routes | 32 | `glossary.ts` |
| Country dossiers | 32 | `ls src/content/dossiers/*.ts` |
| Source records | 244 | `grep -cE "^  \{" src/content/sources.ts` |
| Restricted claims | 10 | `restricted-claims.ts` |
| ScheduledChange records | 4 | `scheduled-changes.ts` |

### The existing investigations area

`/investigations` is a `SectionPage` driven by the `investigations` entry in `sections.ts`, and
`/investigations/[slug]` is already wired to every guide carrying `section: 'investigations'`.
Exactly one such guide exists: `what-is-a-criminal-investigation`.

**This is the architecture Wave 8 must use.** A guide added with that section value routes
automatically, appears in the registry, the sitemap and the section hub with no new route file.
Part A's instruction not to create a competing hub is therefore satisfied by construction, and a
parallel `/criminal-investigation` taxonomy would be strictly worse than what already exists.

The section already carries an `outOfScope` list naming investigative technique, surveillance
capability, and anything assisting evasion or interference. Wave 8 inherits that boundary rather
than inventing one.

### Investigation-related sources at baseline

Counted by reading `sources.ts` for records whose `note` supports an investigative-procedure or
investigative-institution claim: **31**. This is the figure Wave 8's source growth is measured
against, not the total of 244.

## Bundle and output size

| Metric | Baseline | Command |
| --- | --- | --- |
| JS bytes (`out/_next`) | 663,403 B | `find out/_next -name '*.js' -exec stat -f%z {} +` |
| CSS bytes (`out/_next`) | 29,625 B | `find out/_next -name '*.css' -exec stat -f%z {} +` |
| Total `out/` size | 82,684 KB | `du -sk out` (clean rebuild) |

Wave 8 adds no client runtime. The JS figure is expected to move by zero.
