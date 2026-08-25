# Knowledge Expansion Wave 11 — baseline

Measured directly from `main` immediately before the Wave 11 branch was cut.

## Provenance

| Field                       | Value                                                          |
| --------------------------- | -------------------------------------------------------------- |
| Repository                  | `hrhelperg/justicecenterid`                                    |
| Base branch                 | `main`                                                         |
| Base SHA                    | `2a01b1dcd180886d572e108467916cc3fa16a3eb`                     |
| Base commit                 | Merge pull request #28 from `feat/knowledge-expansion-wave-10` |
| Working tree at measurement | clean                                                          |
| Wave branch                 | `feat/knowledge-expansion-wave-11` (local only)                |
| Measured on                 | 2026-08-26                                                     |
| Node / npm                  | v24.15.0 / 11.12.1                                             |

## Merge-gate result

Wave 10 is substantively present in `main`, verified by content:

- `git merge-base --is-ancestor origin/feat/knowledge-expansion-wave-10 origin/main` → true
- All eight Wave 10 prosecution guides present in `src/content/guides/prosecution.ts`; five
  **rebuilt to HTML** from a clean `rm -rf out .next && npm run build`
- `prosecution-systems-wave-10-plan.md`, `prosecution-systems-country-matrix.md`,
  `knowledge-expansion-wave-10-cannibalization.md` and `knowledge-expansion-wave-10-qa.md` present
- `tests/content/wave10-prosecution.test.ts` and `e2e/wave10-prosecution.spec.ts` present
- Wave 10 safeguards live: the guilt-implying-language guard, the **defence-boundary guard**, the
  `hasSourceFor` country invariant, and the corpus-wide markdown-in-misconception guard
- `de-stpo-152-legalitaetsgrundsatz` present; source records total 250

**The boundary Wave 11 inherits, and must now satisfy from the other side.** Wave 10 asserts that
no prosecution page discusses public defenders, legal aid, privilege, equality of arms as a topic,
or defence strategy. That test must keep passing: Wave 11 builds the defence material in its own
section and does not pull it back into `/prosecution`.

## Build and route metrics

| Metric               | Baseline | Command                            |
| -------------------- | -------- | ---------------------------------- |
| Routes in registry   | 380      | `npm run verify:output`            |
| Exported pages       | 382      | `npm run verify:output`            |
| Sitemap URLs         | 380      | `npm run verify:output`            |
| HTML files in `out/` | 382      | `find out -name '*.html' \| wc -l` |

## Test metrics

| Metric                | Baseline | Command                      |
| --------------------- | -------- | ---------------------------- |
| Unit test files       | 62       | `npm test`                   |
| Unit tests            | 3308     | `npm test`                   |
| Playwright spec files | 12       | `npx playwright test --list` |
| Playwright tests      | 700      | `npx playwright test --list` |

## Content records

| Record type                | Baseline | Note                                                                                                                      |
| -------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Defence-related routes** | **0**    | no defence section exists                                                                                                 |
| Prosecution routes         | 9        | Wave 10                                                                                                                   |
| Courts routes              | 10       | Wave 9                                                                                                                    |
| Investigation routes       | 7        | Wave 8                                                                                                                    |
| Institution routes         | 15       | none is a defence institution                                                                                             |
| Profession routes          | 6        | `corrections-officer`, `detective`, `forensic-scientist`, `judge`, `patrol-officer`, `prosecutor` — **no defence lawyer** |
| Glossary routes            | 5        | `appeal`, `chain-of-custody`, `disclosure`, `judicial-independence`, `judicial-review`                                    |
| Country dossiers           | 32       |                                                                                                                           |
| Source records             | 250      |                                                                                                                           |
| Restricted claims          | 10       |                                                                                                                           |
| ScheduledChange records    | 4        |                                                                                                                           |

### Defence-related sources at baseline

Counted by reading `sources.ts` for records whose `note` supports a defence-rights, legal-aid or
right-to-counsel claim: **6** — the international instruments (`iccpr`, `udhr`,
`un-prosecutors-guidelines`) and a handful of constitutional records that mention counsel in
passing. **This is the thinnest starting position of any wave so far**, and it is the reason the
source plan was built before authoring rather than alongside it.

## Part C — the canonical hub, decided on evidence

**There is no defence section.** `SECTION_IDS` contains exactly eight entries: `justice`,
`law-enforcement`, `courts`, `prosecution`, `investigations`, `forensics`, `corrections`,
`public-safety`. Wave 11 therefore requires a genuine new top-level section, added through the
canonical registry rather than hardcoded.

The brief named `/defense` as the preferred candidate and `/legal-defense` as the alternative, and
required the choice be made on route conventions, terminology, international neutrality and
extensibility rather than preference. On that instruction the evidence points elsewhere.

**Spelling convention.** The corpus is consistently British English:

| Form                            | Occurrences in `src/content/`                                                                                                                                                   |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `defence`                       | **39**                                                                                                                                                                          |
| `defense`                       | 14 — **all of them French proper nouns**: the `fr-code-defense-*` source ids for the _Code de la défense_, and the `defenseurdesdroits.fr` URL. **Zero uses as English prose.** |
| `organisation` / `organization` | 212 / 36                                                                                                                                                                        |
| `recognised` / `recognized`     | 6 / 0                                                                                                                                                                           |

`SITE.htmlLang` is the neutral `'en'`, so the locale does not settle it; the prose does.

**Route convention.** Every existing section is the bare function noun — `prosecution`, not
`public-prosecution`; `courts`, not `court-system`. The exact parallel to `prosecution` is
`defence`. `legal-defence` breaks that pattern and reads as though it might include civil matters.

**International neutrality.** `defense` is the United States spelling. Of the 32 country dossiers,
the Commonwealth and Irish jurisdictions — Ireland, Australia, Canada, New Zealand, South Africa,
Kenya, Nigeria, India, Singapore — all use `defence`. A site that has spent four waves refusing to
let American terminology stand in for global categories should not adopt an American spelling for
a top-level section.

**Decision: `/defence`.** One hub, added to `SECTION_IDS`, `sections.ts`, the app router, the
route registry, the sitemap and the tests. `/defense` and `/legal-defence` are not created, and
both are added to the route matrix's must-404 list.

This differs from the brief's preferred candidate, and the deviation is recorded here rather than
made silently.

### Safety classification

`SAFETY_SENSITIVE_SECTIONS` currently contains `law-enforcement`, `investigations`, `forensics`
and `public-safety`. Given the brief's safety boundary — no interrogation-evasion, no evidence
concealment, no manufactured privilege, no obstruction guidance — **`defence` is added to that
list**, so a safety review is mandatory before any page in it can publish.

## Bundle and output size

| Metric                  | Baseline  | Command                                             |
| ----------------------- | --------- | --------------------------------------------------- |
| JS bytes (`out/_next`)  | 663,403 B | `find out/_next -name '*.js' -exec stat -f%z {} +`  |
| CSS bytes (`out/_next`) | 29,625 B  | `find out/_next -name '*.css' -exec stat -f%z {} +` |
| Total `out/` size       | 91,268 KB | `du -sk out` (clean rebuild)                        |

Wave 11 adds no client runtime, no eligibility tool and no lawyer matching. The JS figure is
expected to move by zero.
