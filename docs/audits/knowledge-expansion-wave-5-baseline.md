# Knowledge Expansion Wave 5 — baseline

**Date:** 2026-08-10
**Branch:** `feat/knowledge-expansion-wave-5` (local until the final push)
**Base SHA:** `d8932c1cb400e95d7476dc5e8794686644317b29`

Measured from this tree.

## 1. Merge gate — PASSED

Wave 4 is an ancestor of `origin/main` via PR #22. Each artefact verified individually:
all seven relationship guides present (7/7 by slug), the Wave 4 cannibalization document
(111 lines), the country-scoped source invariant, the contract/shared distinction test, the
sheriff US-scope test, the command/coordination suite, counterexample coverage, the Wave 4 QA
document, the 394-line test file, and `counterExamples` on the `Guide` type.

**Rebuilt to confirm behaviour:** `/law-enforcement/police-jurisdiction`,
`/law-enforcement/contract-policing`, `/law-enforcement/police-command-and-coordination` and
`/law-enforcement/sheriffs-and-city-police` all export.

Working tree clean.

## 2. Baseline metrics

| Metric                       | Value                |
| ---------------------------- | -------------------- |
| Registered routes            | **349**              |
| Sitemap URLs                 | **349**              |
| Exported pages               | **351**              |
| Unit / content tests         | **2527** in 56 files |
| Playwright tests             | **346** in 6 files   |
| Institution routes           | **11**               |
| Law-enforcement guides       | **14**               |
| Country dossiers             | **32**               |
| Source records               | **225**              |
| Restricted claims (dossiers) | **29**               |
| Scheduled changes            | **4**                |
| Shared JS                    | **663,403 B**        |
| CSS                          | **29,406 B**         |
| `out/` on disk               | **78 MB**            |

## 3. Oversight evidence available before drafting

23 of 32 dossiers carry a published `oversight` module. The usable oversight-body sources:

**Dedicated external police bodies (6):** `ie-fiosru`, `nz-ipca`, `za-ipid`,
`no-spesialenheten`, `cz-gibs`, `dk-police-complaints`.

**General-mandate ombuds / rights bodies (5+):** `se-jo`, `no-sivilombudet`,
`at-volksanwaltschaft`, `cz-ochrance`, `dk-ombudsman`, and Kenya's Article 59 commissions via
`ke-constitution`.

**Counterexample:** `ng-constitution` — the Police Service Commission and Nigeria Police
Council under s 153 and the Third Schedule, with no separate independent police-complaints
board.

**Absent entirely:** any internal-affairs source, any police-inspectorate source, any
anti-corruption body with a sourced police-conduct mandate, any audit institution, and any
police-related data-protection substance. Established by searching the registry, not assumed.

Temporal case already modelled: `ie-policing-oversight-reform-2025`, `effectiveOn`
2025-04-02, recording GSOC → Fiosrú and the PCSA replacing the Policing Authority and the
Garda Síochána Inspectorate.
