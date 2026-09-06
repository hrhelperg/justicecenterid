# Wave 24 baseline — law enforcement careers, training and professional pathways

Measured directly against the repository on 6 September 2026, from `origin/main` at
`ae1cf169e3c1f98ad5bdd6a422a7638ae14656e3`. No figure here is copied from an earlier report.

## 1. Wave 23 merge verification

The merge gate ran before any Wave 24 work. `origin/main` moved from `3045bc4` to `ae1cf16`
("Merge pull request #36 from hrhelperg/feat/knowledge-expansion-wave-23"), and
`git merge-base --is-ancestor d39a052 origin/main` returned true.

Ancestry alone was not treated as sufficient. The content was verified in the merged tree:

| Check                                      | Result                                                               |
| ------------------------------------------ | -------------------------------------------------------------------- |
| Eight Wave 23 guides                       | all 8 PRESENT                                                        |
| Five Wave 23 sources                       | all 5 PRESENT                                                        |
| Wave 23 unit + e2e specs                   | PRESENT                                                              |
| Six Wave 23 research documents             | PRESENT                                                              |
| Roadmap Phase 37                           | PRESENT                                                              |
| Investigations guides / sources / MUST_404 | 24 / 344 / 152 — all as expected                                     |
| Five load-bearing Wave 23 quotations       | all PRESENT in content                                               |
| `npm ci` / typecheck / full suite          | exit 0 — **7,365 tests / 78 files**                                  |
| Wave 23 suite alone                        | exit 0 — 199 tests                                                   |
| `npm run build` / `verify:output`          | exit 0 — 489 routes, 491 pages, 489 sitemap URLs                     |
| Link graph                                 | 0 orphans, 0 weakly linked, 0 dead ends                              |
| Rendered HTML (3 pages sampled)            | 1 `h1` each, correct canonical, description present, no raw Markdown |

## 2. Baseline counts

| Measure                        | Value                              |
| ------------------------------ | ---------------------------------- |
| Routes                         | 489                                |
| Exported pages                 | 491                                |
| Sitemap URLs                   | 489                                |
| Published guides               | 148                                |
| Institution records            | 17 (15 routed)                     |
| **Profession records**         | **7 (7 routed)**                   |
| Glossary records               | 32 (5 routed)                      |
| Country dossiers               | 32                                 |
| Sources                        | 344                                |
| Unit tests                     | 7,365 across 78 files              |
| Playwright tests               | 1,322 passing, 4 skipped, 17 specs |
| Client JS (`out/_next/static`) | 800 KB                             |

Routes by kind: home 1, section 9, guide 148, hub 9, history-entry 7, platform 9, institution 15,
glossary-term 5, profession 7, country 32, country-module 247.

Guides by section: justice 31, investigations 25, corrections 19, courts 19, law-enforcement 17,
defence 11, forensics 9, prosecution 9, public-safety 8.

## 3. The career surface audit

Every term in the brief was searched across all 148 published guides, all 7 profession records and
all 17 institution records. Occurrences counted across the full rendered prose of each record.

### At exactly zero

| Term                    | Documents | Occurrences |
| ----------------------- | --------- | ----------- |
| `police academy`        | 0         | **0**       |
| `recruitment`           | 0         | **0**       |
| `career progression`    | 0         | **0**       |
| `physical fitness`      | 0         | **0**       |
| `shift work`            | 0         | **0**       |
| `report writing`        | 0         | **0**       |
| `criminal investigator` | 0         | **0**       |
| `dispatcher`            | 0         | **0**       |

### Present but marginal

| Term                       | Documents | Occurrences | Where                                         |
| -------------------------- | --------- | ----------- | --------------------------------------------- |
| `careers`                  | 1         | 1           | `/courts/why-judicial-independence-matters`   |
| `professional development` | 1         | 1           | `/professions/patrol-officer`                 |
| `analyst`                  | 1         | 1           | `/forensics/the-limits-of-forensic-evidence`  |
| `skills`                   | 3         | 3           | 2 guides + `/professions/patrol-officer`      |
| `promotion`                | 3         | 4           | mostly `/defence/*`, in the funding sense     |
| `academy`                  | 2         | 5           | forensic-science context, not police training |
| `career`                   | 8         | 13          | judicial-career sense, not career orientation |
| `education`                | 8         | 8           | reintegration and civic-education senses      |

### Present in volume, but not as career content

`judge` (357), `prosecutor` (351), `communication` (131), `profession` (98), `application` (68),
`investigator` (51), `training` (40). Inspection shows these are the **institutional and legal**
senses — "the judge decides", "the prosecutor directs the investigation", "the application of the
statute". None is career-orientation content.

### Conclusion

**The career surface is empty.** The corpus has a mature institutional and legal layer and seven
good profession records, but nothing that answers "what is this job actually like, and how would
someone get into it". This is a missing layer, not a missing topic — the same finding shape as
Waves 22 and 23, in a different direction.

## 4. Audit of the seven existing profession records (Part J)

All seven are `published` / `fact-checked`: patrol-officer, detective, prosecutor, judge,
forensic-scientist, corrections-officer, defence-lawyer.

Assessed against the brief's nine questions, using `patrol-officer` (the strongest) as the measure:

| Question                                   | Verdict                                                            |
| ------------------------------------------ | ------------------------------------------------------------------ |
| 1. Useful to someone exploring the career? | **Partially** — explains function well, not experience             |
| 2. Day-to-day role at a safe level?        | **Yes** — `responsibilities` is strong                             |
| 3. Working environment?                    | **No** — no field for it; no shifts, environment or teamwork       |
| 4. Education and training?                 | **Weak** — `trainingRouteShape` is a four-bullet structural sketch |
| 5. Adjacent professions?                   | **Weak** — `relatedProfessions: ['detective']`, one entry          |
| 6. Broad international variation?          | **Yes** — `jurisdictionNote` + `countryExamples`                   |
| 7. Links to institutions?                  | **Yes** — `relatedInstitutions`                                    |
| 8. Avoids procedural over-detail?          | **Yes**                                                            |
| 9. Clear next-step learning paths?         | **No** — no field for it                                           |

The records are a good canonical spine that was never asked to do career orientation. The schema
proves it: `Profession` has no field for working environment, skills, career progression or entry
education.

### The constraint that shapes this wave

`src/content/professions.ts` opens with a deliberate prior decision:

> "There is deliberately no field for salary, staffing level, mortality, attrition, or entry
> requirements. Those are country-specific, time-sensitive, and the most common site of
> fabrication in writing about these roles."

Wave 24 **respects this**. It adds structural, comparative career fields — working environment,
skills, progression shape, next steps — and adds no country-specific entry requirement to any
profession record. That also satisfies Part V's instruction to be conservative about
country-specific recruitment content.

## 5. Restricted claims — what this wave may and may not assert

`src/content/restricted-claims.ts` defines ten categories with lexical tripwires, and there is **no
`RESTRICTED_CLAIMS` registry** — zero restricted claims are currently published corpus-wide.

`compensation` is a restricted category with an active tripwire. Combined with Part AA, this wave
publishes **no salary content of any kind**, including figures encountered in official recruitment
material during research.

Training hours are not a restricted category. Where used, they are scoped to the jurisdiction, the
collection, and the publication date.

## 6. What this baseline establishes for the wave

1. Eight of the brief's career terms are at absolute zero. The wave is building a layer that does
   not exist rather than re-cutting one that does.
2. The seven profession records should be **strengthened, not duplicated** — Part J's instruction,
   and the evidence supports it.
3. The `Profession` schema needs career-orientation fields, and the prior decision about
   country-specific requirements must survive the change.
4. No `/careers` route family exists, so the architecture question in Part B is genuinely open and
   is decided on evidence in `docs/research/careers-training-research-plan.md`.
