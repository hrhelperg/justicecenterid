# Wave 25 baseline — country recruitment and police career entry paths

Measured directly against `origin/main` at `cb549847ca7331af9511e6cee63082957bc73a3e` on
6 September 2026. Nothing copied from an earlier report.

## 1. Wave 24 merge gate

The gate ran three times. It **failed twice** — `origin/main` remained at `ae1cf16` (the Wave 23
merge) with every Wave 24 element absent, verified by three independent methods: the tip SHA,
`git branch -r --contains` on both the head and first commit of the branch, and direct content
reads. Work stopped both times; nothing was stacked and nothing recreated.

On the third run `origin/main` had moved to `cb549847ca7331af9511e6cee63082957bc73a3e`
("Merge pull request #37"). Ancestry confirmed, then verified substantively:

| Check                                               | Result                                                                                             |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 12 Wave 24 law-enforcement guides                   | **12/12**                                                                                          |
| `emergency-dispatcher` profession                   | PRESENT                                                                                            |
| Career fields on profession records                 | **8 records** each for `workingEnvironment`, `skills`, `careerProgressionShape`, `adjacentCareers` |
| 9 Wave 24 sources                                   | **9/9**                                                                                            |
| `/professions` hub grouping (`const GROUPED`)       | PRESENT                                                                                            |
| Counts: law-enforcement / professions / sources     | **29 / 8 / 353** — all as expected                                                                 |
| 12 Wave 24 files (tests, e2e, `InlineText`, 9 docs) | **12/12 PRESENT**                                                                                  |
| 8 named guards in the Wave 24 suite                 | **8/8 PRESENT**                                                                                    |
| Roadmap Phase 38 + PROGRAMME TRANSITION             | PRESENT                                                                                            |
| `npm ci` / typecheck / full suite                   | exit 0 — **7,769 tests / 79 files**                                                                |
| Wave 24 suite alone                                 | exit 0 — 198 tests                                                                                 |
| build / `verify:output`                             | exit 0 — 502 routes, 504 pages, 502 sitemap URLs                                                   |
| link graph                                          | 0 / 0 / 0                                                                                          |
| Playwright                                          | exit 0 — 1,486 passed                                                                              |
| Rendered HTML (3 pages)                             | 1 `h1`, correct canonical, **0 raw Markdown**; corpus-wide raw Markdown **0**                      |

## 2. Baseline counts

| Measure               | Value                              |
| --------------------- | ---------------------------------- |
| Routes                | 502                                |
| Exported pages        | 504                                |
| Sitemap URLs          | 502                                |
| Published guides      | 160                                |
| Profession records    | 8                                  |
| Institution records   | 17 (15 routed)                     |
| Country dossiers      | 32                                 |
| Country-module routes | 247                                |
| Sources               | 353                                |
| Unit tests            | 7,769 across 79 files              |
| Playwright tests      | 1,486 passing, 4 skipped, 18 specs |
| Client JS             | 800 KB                             |
| CSS                   | 30,022 bytes                       |
| `out/`                | 155,336 KB                         |

## 3. The recruitment-content audit

Searched across all 160 published guides, 8 profession records, 17 institution records and all
32 country dossiers.

### At exactly zero

`police college`, `residency`, `driving licence`, `criminal record`, `medical standard`,
`eyesight`, `assessment centre`, `student officer`, `cadet`, `degree-entry`, `lateral entry`,
`direct entry` — **twelve terms, all zero**.

### Present but marginal

| Term                | Docs | Occurrences |
| ------------------- | ---- | ----------- |
| `vetting`           | 1    | 1           |
| `background`        | 3    | 3           |
| `citizenship`       | 4    | 5           |
| `eligibility`       | 4    | 5           |
| `trainee`           | 3    | 7           |
| `entry requirement` | 6    | 10          |
| `recruitment`       | 6    | 13          |

### Owned by Wave 24, and not to be re-cut

`police academy` (15), `apprenticeship` (16), `fitness` (26), `training` (153). These belong to the
educational layer built last wave. Wave 25 must link to them, not restate them.

### Method note

`age` returned 1,812 occurrences, which is a substring artefact — `manage`, `damage`, `language`.
Discarded rather than reported as a finding.

### Conclusion

The corpus explains **what policing is and how people are trained**. It says almost nothing about
**how anyone actually enters it in a given country**. Twelve of the brief's terms are at absolute
zero, and the two most legally consequential concepts in recruitment — residency and criminal
record — are among them.

## 4. What the country dossiers already contain

All 32 dossiers carry a `law-enforcement` module describing which bodies enforce the law, under
what legal status, over what territory. None describes recruitment, entry routes or eligibility.
There is no collision: the existing module answers _who polices this country_, and the new one
answers _how a person joins them_.

## 5. Architecture available

Countries already use a module registry: `COUNTRY_MODULES` drives routes, navigation, breadcrumbs,
the sitemap and the output verifier, and `CountryModuleContent` already carries `blocks`,
`sources`, `factsVerifiedOn`, `temporalScope`, `uncertainty`, `relatedGuides` and
`restrictedClaims`. 247 country-module routes exist across 12 module types.

**`factsVerifiedOn` is already mandatory for a published module** — the country publication gate
rejects a published module with no ISO date. That is the freshness anchor this wave needs, and it
exists before this wave starts.

## 6. What this establishes for the wave

1. The gap is real and large — twelve terms at zero.
2. The country-module registry is the natural home, and adding a module introduces **no new routing
   concept**. The decision and its alternatives are in `police-recruitment-research-plan.md`.
3. The freshness field already exists and is already enforced; the wave should use it rather than
   invent a parallel mechanism.
4. Wave 24 owns the educational layer. Wave 25 must link into it and must not restate academies,
   training models, skills or the degree question.
