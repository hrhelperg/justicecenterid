# Knowledge Expansion Wave 10 — baseline

Measured directly from `main` immediately before the Wave 10 branch was cut.

## Provenance

| Field                       | Value                                                         |
| --------------------------- | ------------------------------------------------------------- |
| Repository                  | `hrhelperg/justicecenterid`                                   |
| Base branch                 | `main`                                                        |
| Base SHA                    | `5fcd0f01d8e07d53487dacea1dc15de8ec8ee500`                    |
| Base commit                 | Merge pull request #27 from `feat/knowledge-expansion-wave-9` |
| Working tree at measurement | clean                                                         |
| Wave branch                 | `feat/knowledge-expansion-wave-10` (local only)               |
| Measured on                 | 2026-08-25                                                    |
| Node / npm                  | v24.15.0 / 11.12.1                                            |

## Merge-gate result

Wave 9 is substantively present in `main`, verified by content rather than by merge message:

- `git merge-base --is-ancestor origin/feat/knowledge-expansion-wave-9 origin/main` → true
- All nine Wave 9 court guides present in `src/content/guides/courts.ts`, and the
  `constitutional-court` institution present in `institutions.ts`
- Five representative Wave 9 routes plus the institution route **rebuilt to HTML** from a clean
  `rm -rf out .next && npm run build`
- `courts-wave-9-plan.md`, `court-systems-country-matrix.md`,
  `knowledge-expansion-wave-9-cannibalization.md` and `knowledge-expansion-wave-9-qa.md` present
- `tests/content/wave9-courts.test.ts` and `e2e/wave9-courts.spec.ts` present
- Wave 9 safeguards live: the unsourced-independence gate, the `hasSourceFor` country invariant,
  and the profession-intent guard that mutation proof M7 forced
- `cicero-pro-cluentio-146` present; source records total 247

**The boundary tests Wave 10 inherits.** Wave 8 asserts that no investigations page discusses
court hierarchy or appellate structure. Wave 9 asserts that no courts page discusses charging
standards, prosecutorial discretion, plea bargaining or prosecution independence — **all four of
which are Wave 10's subject**. Both assertions must keep passing, which means Wave 10's material
goes into `/prosecution` and is never pulled back into `/courts` or `/investigations`.

## Build and route metrics

| Metric               | Baseline | Command                            |
| -------------------- | -------- | ---------------------------------- |
| Routes in registry   | 372      | `npm run verify:output`            |
| Exported pages       | 374      | `npm run verify:output`            |
| Sitemap URLs         | 372      | `npm run verify:output`            |
| HTML files in `out/` | 374      | `find out -name '*.html' \| wc -l` |

## Test metrics

| Metric                | Baseline | Command                      |
| --------------------- | -------- | ---------------------------- |
| Unit test files       | 61       | `npm test`                   |
| Unit tests            | 3088     | `npm test`                   |
| Playwright spec files | 11       | `npx playwright test --list` |
| Playwright tests      | 614      | `npx playwright test --list` |

## Content records

| Record type             | Baseline | Note                                                                                   |
| ----------------------- | -------- | -------------------------------------------------------------------------------------- |
| **Prosecution routes**  | **1**    | `what-does-a-prosecutor-do`                                                            |
| Courts routes           | 10       | Wave 9                                                                                 |
| Investigation routes    | 7        | Wave 8                                                                                 |
| Institution routes      | 15       | none is a prosecution type                                                             |
| Profession routes       | 6        | includes `prosecutor`                                                                  |
| Glossary routes         | 5        | `appeal`, `chain-of-custody`, `disclosure`, `judicial-independence`, `judicial-review` |
| Country dossiers        | 32       | **all 32 carry a `prosecution` module**                                                |
| Source records          | 247      |                                                                                        |
| Restricted claims       | 10       |                                                                                        |
| ScheduledChange records | 4        |                                                                                        |

### Prosecution-related glossary terms

Eight terms bear on this wave: `prosecutor`, `charging-decision`, `prosecutorial-discretion`,
`disclosure`, `presumption-of-innocence`, `due-process`, `evidence`, `expert-evidence`.

Of these, `prosecutor`, `presumption-of-innocence` and `due-process` are **owned elsewhere** —
they carry no glossary route because a fuller page holds them. `disclosure` is routed.
`charging-decision` and `prosecutorial-discretion` are glossary entries with **no route**, which
means Wave 10 may own those reader intents, but may not reproduce their definitions.

### Prosecution-related sources at baseline

Counted by reading `sources.ts` for records whose `note` supports a prosecution-structure,
charging or prosecutorial-independence claim: **29**. This is the figure Wave 10's source growth
is measured against, not the total of 247.

### The architecture already exists

`/prosecution/[slug]` is already wired to every guide carrying `section: 'prosecution'`.
Adding a guide with that section value routes it automatically. **Part A is satisfied by
construction** — Wave 10 creates no route file and no competing hub, for the fourth wave running.

### An accuracy problem found in the existing guide, before any authoring

`what-does-a-prosecutor-do` states that "prosecution services typically apply a two-stage test to
the charging decision" and describes the evidential stage as asking whether there is "a realistic
prospect of conviction". Its entire source list is two international instruments:
`un-prosecutors-guidelines` and `iccpr`.

That is a **structural claim about national prosecution services resting on no country-scoped
source**, and the formulation is the England-and-Wales Full Code Test presented as a general
pattern. Germany's § 152(2) StPO obliges the prosecution to act on _sufficient factual
indications_ and does not ask about prospects of conviction at all.

Part A therefore resolves to **EXPAND AND CORRECT**, and Part E's warning about the
"reasonable prospect of conviction" standard is not hypothetical here — the site already carries
a version of it.

## Bundle and output size

| Metric                  | Baseline  | Command                                             |
| ----------------------- | --------- | --------------------------------------------------- |
| JS bytes (`out/_next`)  | 663,403 B | `find out/_next -name '*.js' -exec stat -f%z {} +`  |
| CSS bytes (`out/_next`) | 29,625 B  | `find out/_next -name '*.css' -exec stat -f%z {} +` |
| Total `out/` size       | 88,324 KB | `du -sk out` (clean rebuild)                        |

Wave 10 adds no client runtime, no visualization framework and no charging calculator. The JS
figure is expected to move by zero.
