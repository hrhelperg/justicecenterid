# Waves 16–18 — programme baseline

Measured 2026-08-26 from the merged tree, before any Wave 16 change. Nothing here is copied
from an earlier report; every figure was produced by the command in its row.

- **Repository**: `hrhelperg/justicecenterid` (confirmed by `git remote -v`)
- **Base SHA**: `746f482fc5a6652126d5c6c9c3e86d88e7ecc334` — `main`, fast-forwarded from
  `origin/main`, working tree clean
- **Branch**: `feat/knowledge-expansion-waves-16-18`, created from that SHA

## 1. Merge gate — Waves 12–15 in merged main

Waves 12–15 reached `main` through merge commit `746f482` ("Merge pull request #30"). The merge
commit message was **not** treated as evidence. The tree was inspected artifact by artifact and
representative routes were rebuilt and confirmed present in `out/`.

| Wave | Artifact verified                                                                                                                                                   | Result  |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| 12   | All ten justice-principles guides by slug in `src/content/guides/justice.ts`                                                                                        | present |
| 13   | `src/content/guides/corrections.ts` (12 guides); `corrections` in `SAFETY_SENSITIVE_SECTIONS`; `src/app/corrections/[slug]/page.tsx`                                | present |
| 14   | Four courts guides, two defence guides, `defence-lawyer` profession record                                                                                          | present |
| 15   | `src/content/lifecycle.ts`, `/justice-system` page, `Connections.tsx`, `scripts/link-graph-audit.mjs`, hub in route registry, `Connections` rendered by `GuidePage` | present |
| all  | 10 research/QA documents; roadmap Phases 26–29 and the programme close                                                                                              | present |

Representative routes rebuilt and exported: `/justice-system`,
`/corrections/what-sentencing-is-for`, `/corrections/how-prison-capacity-is-measured`,
`/courts/court-language-and-interpretation`, `/defence/who-may-act-as-a-lawyer`,
`/professions/defence-lawyer`, `/justice/no-single-path-through-a-justice-system`,
`/justice/victims-in-the-justice-process`. `npm run verify:output` exit 0.

`Connections` confirmed rendering on a guide page (the Wave 15 fix survived the merge). The hub
emits 91 distinct internal links from `<main>`.

**Gate result: PASS.** Waves 12–15 are substantively present. Wave 16 may proceed.

### 1.1 Documentation discrepancy, verified before correcting

The previous programme's final QA document was reported to misstate its commit count. Verified
independently rather than accepted from the prompt:

- `docs/research/waves-12-15-final-qa.md` line 149 reads "Nineteen local commits".
- `git log --oneline 6fedbe9..3dd8ed4 | wc -l` returns **20**.

Confirmed. Corrected on this branch.

## 2. Baseline measurements

| Metric                                | Value        | Command                                                |
| ------------------------------------- | ------------ | ------------------------------------------------------ |
| Public routes / sitemap URLs          | 421          | `npm run verify:output`                                |
| Exported HTML pages                   | 423          | `find out -name '*.html' \| wc -l`                     |
| Source records                        | 268          | `grep -c '^  {' src/content/sources.ts`                |
| Guide records (all sections)          | 87 published | parsed from `src/content/guides/*.ts`                  |
| Institution records / routed          | 17 / 15      | registry + sitemap                                     |
| Profession records / routed           | 7 / 7        | registry + sitemap                                     |
| Glossary terms / routed               | 32 / 5       | registry + sitemap                                     |
| Country dossiers                      | 32           | `ls src/content/dossiers`                              |
| Unit + content tests / files          | 4543 / 68    | `npm test`                                             |
| Playwright tests / spec files         | 794 / 13     | `npx playwright test --list`                           |
| Restricted-claim patterns             | 10           | `src/content/restricted-claims.ts`                     |
| Declared restricted claims (dossiers) | 29           | `grep -c restrictedClaims src/content/dossiers/*.ts`   |
| ScheduledChange records               | 4            | `src/content/scheduled-changes.ts`                     |
| Timeline entries                      | 7            | `src/content/timeline.ts`                              |
| JS bytes (`out/_next`)                | 663,463 B    | `find out/_next -name '*.js' -exec cat {} + \| wc -c`  |
| CSS bytes (`out/_next`)               | 29,749 B     | `find out/_next -name '*.css' -exec cat {} + \| wc -c` |
| `out/` size                           | 107,616 KB   | `du -sk out`                                           |

### 2.1 Published guides by section — where the gaps are

| Section           | Published guides |
| ----------------- | ---------------- |
| justice           | 18               |
| law-enforcement   | 17               |
| courts            | 14               |
| corrections       | 12               |
| prosecution       | 9                |
| defence           | 9                |
| investigations    | 7                |
| **forensics**     | **1**            |
| **public-safety** | **0**            |

`/forensics` holds a single guide — `what-is-forensic-science`, which lives in
`src/content/guides/process.ts` rather than a forensics module. It is the thinnest routed
section on the platform and is Wave 16's subject. `public-safety` is emptier still but is not
this programme's subject and is recorded here so it is not mistaken for covered.

### 2.2 Corrections and sentencing coverage — Wave 17's starting point

Twelve guides from Wave 13: `why-correctional-systems-exist`, `what-sentencing-is-for`,
`conviction-sentence-and-execution`, `custodial-and-non-custodial-sentences`,
`what-a-suspended-sentence-is`, `probation-is-three-different-things`,
`release-before-the-end-of-a-sentence`, `why-a-sentence-length-is-not-time-served`,
`what-remand-detention-is`, `who-runs-prisons`, `how-prison-capacity-is-measured`,
`what-reintegration-means`. Plus `/institutions/correctional-service` and
`/professions/corrections-officer`.

Wave 13 already owns: sentencing purposes across four systems, the probation false friend,
suspended sentences, release fractions, and who administers custody. Wave 17 must not restate
any of it.

### 2.3 History coverage — Wave 18's starting point

`/history` and `/timeline` are single hub pages with **no child routes**. `TIMELINE` holds
**7 entries**, each requiring an individually verified source. There is no `/history/[slug]`
segment and no historical entity model.

## 3. Method note

Route, page and sitemap counts come from `npm run verify:output`, which reads the canonical
route registry (`src/content/public-routes.ts`) rather than parsing source with regexes — the
approach the architecture already fixed. Byte counts are from a clean rebuild.
