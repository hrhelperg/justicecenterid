# Country-scaling baseline

A dated snapshot of the repository at the point the country-scaling framework work began, so
every later change can be measured against a fixed reference. **Every number here is computed
from the merged tree, not copied from an earlier report.**

## How to reproduce

```bash
npm ci
npm run build                 # → out/ ; page + asset counts
npm test                      # → test count
npm run verify:output         # → route / sitemap parity
node scripts/country-metrics.mjs        # → content-layer census (registry-derived)
```

`scripts/country-metrics.mjs` imports the real content registries under Node's native type
stripping (the same mechanism `verify-output.mjs` uses); it does not parse source text.

## Reference point

| Field                        | Value                                                                                               |
| ---------------------------- | --------------------------------------------------------------------------------------------------- |
| Repository                   | `hrhelperg/justicecenterid`                                                                         |
| Base branch                  | `main`                                                                                              |
| Base SHA                     | `93e6aec879489b6935ca0c3d9d3c98d208ace788`                                                          |
| Feature branch               | `feat/country-scaling-framework` (from synchronized `main`)                                         |
| Previous program             | `feat/canada-australia-spain-switzerland-program` (tip `dcb3f90`) merged into `main` via PRs #9–#12 |
| Snapshot date                | 2026-07-26                                                                                          |
| Working tree at branch point | clean                                                                                               |

### Previous-program merge verification

The four-country program was verified **substantively present in `main`**, not trusted from
the merge commits or branch name:

- `dcb3f90` (Switzerland tip) confirmed an ancestor of `origin/main` (`git merge-base --is-ancestor`).
- Canada, Australia, Spain, Switzerland dossiers, source registers, jurisdiction samples,
  `contracted` FunctionScope, `autonomous-community` level, BEKJ `ScheduledChange`, Navarre
  `policingScope: 'shared'` correction, restricted claims, model-findings and QA docs all
  present and individually inspected.
- Routes rebuilt from `main`: `npm run build` exit 0; `verify:output` clean.
- `npm test` from `main`: **972 passed (22 files)**.

## Toolchain

| Package          | Version  |
| ---------------- | -------- |
| node             | v24.15.0 |
| next             | 16.2.11  |
| react            | 19.2.4   |
| typescript       | 5.9.3    |
| vitest           | 4.1.10   |
| @playwright/test | 1.61.1   |
| tailwindcss      | 4.3.3    |
| eslint           | 9.39.5   |
| prettier         | 3.9.6    |

## Site totals

| Metric                                   | Value                                                                               | Source                                  |
| ---------------------------------------- | ----------------------------------------------------------------------------------- | --------------------------------------- |
| Unit tests                               | 972 passed / 22 files                                                               | `npm test`                              |
| Public routes                            | 118                                                                                 | `country-metrics.mjs` / `verify:output` |
| — by kind                                | home 1 · section 8 · guide 12 · hub 8 · platform 9 · country 10 · country-module 70 | route registry                          |
| Sitemap URLs                             | 118                                                                                 | `out/sitemap.xml`                       |
| Exported HTML pages                      | 120 (118 routes + `404.html` + `_not-found.html`)                                   | `out/`                                  |
| Total static output                      | 24 MB                                                                               | `du -sh out`                            |
| Client JS (`_next/static`, uncompressed) | 624 KB (187 KB gzipped)                                                             | `out/_next/static/**.js`                |
| Client CSS                               | 26 KB                                                                               | `out/_next/static/**.css`               |
| Largest client chunk                     | 256 KB (framework/React)                                                            | `out/_next/static/chunks`               |
| Country dossiers                         | 10 (all `published`)                                                                | dossier registry                        |
| Source records                           | 86                                                                                  | `SOURCES`                               |
| Jurisdiction records                     | 49                                                                                  | `JURISDICTIONS`                         |
| Restricted claims                        | 7                                                                                   | dossier modules                         |
| Scheduled changes                        | 3                                                                                   | `SCHEDULED_CHANGES`                     |

Country content is server-rendered (RSC); no dossier, source, or jurisdiction registry is in
the client bundle. This baseline is the client-bundle reference for Part K.

## Per-country census

| Country       | Code | Published modules | Deferred | Distinct sources | Restricted claims | Facts verified |
| ------------- | ---- | ----------------- | -------- | ---------------- | ----------------- | -------------- |
| France        | FR   | 6                 | 6        | 6                | 0                 | 2026-07-24     |
| Germany       | DE   | 7                 | 5        | 7                | 1                 | 2026-07-24     |
| United States | US   | 7                 | 5        | 11               | 1                 | 2026-07-24     |
| Ireland       | IE   | 8                 | 4        | 8                | 1                 | 2026-07-25     |
| Japan         | JP   | 7                 | 5        | 7                | 0                 | 2026-07-25     |
| Brazil        | BR   | 7                 | 5        | 8                | 1                 | 2026-07-25     |
| Canada        | CA   | 7                 | 5        | 10               | 1                 | 2026-07-26     |
| Australia     | AU   | 7                 | 5        | 7                | 1                 | 2026-07-26     |
| Spain         | ES   | 7                 | 5        | 4                | 0                 | 2026-07-26     |
| Switzerland   | CH   | 7                 | 5        | 5                | 1                 | 2026-07-26     |

Published-module count **varies by country by design** — it is a research output (France
deferred corrections; Ireland reached eight). France/Japan/Spain carry no restricted claim,
each a documented deferral rather than a manufactured statistic.

## Source records by jurisdiction

`INT 9 · US 13 · CA 10 · BR 8 · IE 7 · JP 7 · AU 7 · FR 6 · DE 6 · CH 5 · ES 4 · GB 3 · (unset) 1`

The 3 `GB` records (Magna Carta 1297, TNA Magna Carta, Metropolitan Police Act 1829) and the
1 unset (`loc-magna-carta`, a Library of Congress exhibition) support the **global concept
guides and timeline**, not any country page. Confirmed not drift; see the consistency audit.

## Jurisdiction records by country

`FR 15 · CA 5 · US 5 · ES 5 · DE 4 · AU 4 · CH 4 · JP 3 · BR 3 · IE 1`

Tier records (France, one per uniform tier) versus unit records (federations, one per unit) is
a per-country research decision, not a schema property — hence the spread.

## Exit-gate targets

Public behaviour that must be **identical** after the framework work (Part L / Part P):

- 118 routes, 118 sitemap URLs, all canonicals unchanged.
- 10 country hubs + 70 country-module routes return 200; all deferred modules and all
  sub-national slugs return 404; no SPA fallback.
- No new public country, and no scaffold fixture (`exampleland` / `XZ`) reachable in `out/`,
  `sitemap.xml`, `llms.txt`, or `feed.xml`.

Route/page/sitemap counts may only change if the framework deliberately adds a route — and it
does not; it adds tooling, tests, docs, and fixes that leave the public surface unchanged.
