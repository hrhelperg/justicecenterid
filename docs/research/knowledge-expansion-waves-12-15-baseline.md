# Waves 12–15 — program baseline

Measured directly from `main` immediately before the program branch was cut. Every figure was
produced by running the command named beside it against this tree; none is carried over from an
earlier report.

## Provenance

| Field | Value |
| --- | --- |
| Repository | `hrhelperg/justicecenterid` |
| Base branch | `main` |
| Base SHA | `6fedbe929f52cd90af9dc6f05b81cd50103646af` |
| Base commit | Merge pull request #29 from `feat/knowledge-expansion-wave-11` |
| Working tree at measurement | clean |
| Program branch | `feat/knowledge-expansion-waves-12-15` (local only) |
| Measured on | 2026-08-26 |
| Node / npm | v24.15.0 / 11.12.1 |

## Wave 11 merge gate — verified by artifact, not by claim

| Check | Result |
| --- | --- |
| `git merge-base --is-ancestor origin/feat/knowledge-expansion-wave-11 origin/main` | true |
| All seven Wave 11 defence guides in `src/content/guides/defence.ts` | present |
| `defence` in `SECTION_IDS` | present |
| `defence` in `SAFETY_SENSITIVE_SECTIONS` | present |
| `id: 'defence'` in `sections.ts` | present |
| `src/app/defence` router | present |
| Wave 11 research plan, country matrix, cannibalization, QA docs | all present |
| `tests/content/wave11-defence.test.ts`, `e2e/wave11-defence.spec.ts` | present |
| Wave 11 sources `de-stpo-137/140/141/147/148`, `fr-service-public-aide-juridictionnelle` | all present |
| Wave 11 safeguards (free-counsel guard, Defensoria guard) | present |
| Clean `rm -rf out .next && npm run build` | exit 0 |
| `/defence` index and four representative guide routes exported to HTML | present |
| `/defence` in `out/sitemap.xml` | present |

## Build and route metrics

| Metric | Baseline | Command |
| --- | --- | --- |
| Public routes in registry | 388 | `npm run verify:output` |
| Sitemap URLs | 388 | `npm run verify:output` |
| Exported HTML pages | 390 | `find out -name '*.html' \| wc -l` |

## Test metrics

| Metric | Baseline | Command |
| --- | --- | --- |
| Unit/content test files | 63 | `npm test` |
| Unit/content tests | 3490 | `npm test` |
| Playwright spec files | 13 | `npx playwright test --list` |
| Playwright tests | 786 | `npx playwright test --list` |

## Content records

| Record type | Baseline |
| --- | --- |
| Source records | 256 |
| Country dossiers | 32 |
| Institution records | 17 (15 routed) |
| Profession routes | 6 |
| Glossary terms | 32 (5 routed) |
| Restricted-claim patterns | 10 |
| ScheduledChange records | 4 |

### Guides by section — the shape the program starts from

| Section | Guides | Routed pages in `out/` |
| --- | --- | --- |
| `law-enforcement` | 17 | 17 |
| `courts` | 10 | 10 |
| `prosecution` | 9 | 9 |
| `investigations` | 7 | 7 |
| `defence` | 7 | 7 |
| **`justice`** | **5** | **5** |
| `forensics` | 1 | 1 |
| **`corrections`** | **0** | **0** |
| **`public-safety`** | **0** | **0** |

**Two registered sections carry no guides at all.** `corrections` and `public-safety` exist in
`SECTION_IDS` and in `sections.ts` with full section metadata, and neither has ever had a guide
published beneath it. Wave 13 fills the first. `public-safety` is out of scope for this program
and stays empty.

### Existing `/justice` guides — the Wave 12 constraint

Five guides already own the normative vocabulary:

| Slug | Owns |
| --- | --- |
| `what-is-justice` | Justice as equal treatment under rules applied by authorised, constrained, answerable bodies |
| `what-is-the-rule-of-law` | Everyone including government subject to public law interpreted by independent courts |
| `what-is-due-process` | The state following fair established procedures before acting against a person |
| `what-is-the-presumption-of-innocence` | Treatment as not guilty until guilt is proved |
| `why-justice-systems-need-oversight` | Why coercive, low-visibility, hard-to-reverse decisions need oversight |

Wave 12 must own *different reader questions* from these five. The rule-of-law and due-process
definitions in particular are already taken.

### Corrections evidence position

All 32 dossiers carry a `corrections` module, and they are already written to the project's
restricted-claim discipline. Germany's is representative: it states prison administration is a
Land function, quotes Destatis on the data being transmitted by Land statistical offices, gives a
SPACE I figure with four explicit qualifications, and then records that **non-custodial sanctions,
probation and community supervision, rehabilitation and reintegration programmes, prison
inspection and complaint mechanisms, and the legislative history of prison law were not
researched**.

So Wave 13 begins with strong material on administration, custody and capacity, and a documented
gap on probation, parole, rehabilitation and oversight.

### Restricted-claim patterns already in force

Ten patterns, including `detention-capacity` — which blocks `overcrowd*`, "prisons are full",
"rising/record prison population" and "beyond capacity" without an official statistic, its
reference date and its counting definition. **Wave 13 inherits this and must not weaken it.**

## Bundle and output size

| Metric | Baseline | Command |
| --- | --- | --- |
| JS bytes (`out/_next`) | 663,431 B | `find out/_next -name '*.js' -exec stat -f%z {} +` |
| CSS bytes (`out/_next`) | 29,685 B | `find out/_next -name '*.css' -exec stat -f%z {} +` |
| Total `out/` size | 93,900 KB | `du -sk out` (clean rebuild) |

These are the figures the final Wave 15 comparison is made against.
