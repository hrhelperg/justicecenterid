# Wave 19 — baseline

Measured 2026-08-26 from the merged tree, before any Wave 19 change. Every figure produced by the
command in its row; nothing copied from an earlier report.

- **Repository**: `hrhelperg/justicecenterid` (confirmed by `git remote -v`)
- **Base SHA**: `c8ac5ff94daa15fdd7eda988781e965a1461d1e7` — `main`, fast-forwarded from
  `origin/main`, working tree clean
- **Branch**: `feat/knowledge-expansion-wave-19`, created from that SHA

## 1. Merge gate — Waves 16–18 in merged main

Waves 16–18 reached `main` through merge commit `c8ac5ff` ("Merge pull request #31"). The merge
commit was not treated as evidence; the tree was inspected artifact by artifact.

| Wave | Artifacts verified                                                                                                                                                                     | Result  |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| 16   | All eight forensics guides by slug; `isOperationalInstruction` anti-forensics guard; `OVERCLAIMS` scientific-overclaim tests                                                           | present |
| 17   | All seven sentencing/community-corrections guides; probation-vs-parole conflation guard; restricted-claim protection group                                                             | present |
| 18   | `src/content/history.ts` (7 entries); `/history/[slug]` route; `HistoryPage`; `HistoricalPeriod` and `ContinuityClaim` in types; `PRESENTIST_CLAIMS` guards; research and QA documents | present |
| all  | `history-entry` in the route registry; `history` in the link-graph audit scope                                                                                                         | present |

Build and validation on merged main: `npm ci` exit 0; `npm test` **5247 passed / 72 files**;
`npm run build` exit 0; `verify:output` **443 routes / 445 pages / 443 sitemap**, exit 0;
link-graph audit **415 content routes, zero orphans, zero weakly linked, zero dead ends**. Four
representative routes across the three waves confirmed exported.

**Gate result: PASS.**

## 2. Baseline measurements

| Metric                       | Value      |
| ---------------------------- | ---------- |
| Public routes / sitemap URLs | 443        |
| Exported HTML pages          | 445        |
| Source records               | 288        |
| Published guides             | 102        |
| History entries              | 7          |
| Unit + content tests / files | 5247 / 72  |
| Playwright tests             | 800        |
| Institution records routed   | 15         |
| Profession records routed    | 7          |
| Glossary terms / routed      | 32 / 5     |
| Restricted-claim patterns    | 10         |
| ScheduledChange records      | 4          |
| JS bytes (`out/_next`)       | 663,491 B  |
| CSS bytes (`out/_next`)      | 29,961 B   |
| `out/` size                  | 114,724 KB |

### 2.1 Published guides by section

| Section           | Guides |
| ----------------- | ------ |
| corrections       | 19     |
| justice           | 18     |
| law-enforcement   | 17     |
| courts            | 14     |
| prosecution       | 9      |
| forensics         | 9      |
| defence           | 9      |
| investigations    | 7      |
| **public-safety** | **0**  |

`/justice` (18) and `/courts` (14) are Wave 19's target sections. `public-safety` remains the only
routed section with no guides; it is outside this wave's scope and is recorded so it is not
mistaken for covered.
