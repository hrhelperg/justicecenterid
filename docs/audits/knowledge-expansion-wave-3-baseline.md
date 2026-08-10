# Knowledge Expansion Wave 3 — baseline

**Date:** 2026-08-10
**Branch:** `feat/knowledge-expansion-wave-3` (local until the final push)
**Base SHA:** `547d7eb90386c40248b2ff2e71d5b022f9e1a7a8`

Measured from this repository at the base SHA. Nothing is carried over from a previous
report.

## 1. Merge gate — PASSED

Wave 2 (`feat/knowledge-expansion-wave-2`) is an ancestor of `origin/main` via PR #20, and
each artefact was verified individually rather than inferred from the merge:

| Artefact                        | Evidence                                                    |
| ------------------------------- | ----------------------------------------------------------- |
| Institution detail route        | `src/app/institutions/[slug]/page.tsx` present              |
| Profession detail route         | `src/app/professions/[slug]/page.tsx` present               |
| Institutions hub is an index    | references `ROUTED_INSTITUTION_TYPES`; zero detail headings |
| Professions hub is an index     | references `ROUTED_PROFESSIONS`                             |
| Source additions                | `tna-police-records` present                                |
| Country-scoped source invariant | the named test present in `reference-routes.test.ts`        |
| History deferral documented     | Peelian-provenance section present in the Wave 2 matrix     |
| Wave 2 cannibalization matrix   | 214 lines                                                   |
| Reference gate + tests          | `reference-publication-gate.ts`, `reference-routes.test.ts` |
| `transport-police` record       | present                                                     |

**Rebuilt to confirm behaviour, not just presence:** `/institutions/gendarmerie`,
`/institutions/transport-police`, `/institutions/federal-investigative-agency`,
`/professions/judge` and `/professions/detective` all export; `/institutions/coast-guard`
and `/institutions/border-and-customs-authority` correctly do not.

Working tree clean.

## 2. Baseline metrics

| Metric                    | Value                |
| ------------------------- | -------------------- |
| Registered routes         | **333**              |
| Sitemap URLs              | **333**              |
| Exported pages            | **335**              |
| Unit / content tests      | **2289** in 54 files |
| Playwright tests          | **220** in 4 files   |
| Glossary terms            | **32**               |
| **Routed glossary terms** | **0**                |
| Institution records       | **9** (7 routed)     |
| Profession records        | **6** (6 routed)     |
| Source records            | **225**              |
| Shared JS                 | **663,374 B**        |
| CSS                       | **29,406 B**         |
| `out/` on disk            | **74 MB**            |

## 3. Glossary model audit

All 32 terms profiled field by field before any routing decision. The result decided the
shape of Part A:

- **Definition length: 107–228 characters.** Every term is one or two sentences. The brief
  is explicit that one-sentence definitions must not be routed.
- **Sources: 1 for 29 terms, 2 for three.** The Wave 2 routed-page floor is two.
- `expandedNote` on 11, `jurisdictionNote` on 20, `falseFriends` on 8, `alternateTerms` on 4.
- **All 32 are already `review: 'fact-checked'`**, so the Wave 2 routing discriminator
  (`review`) carries no information here and a different mechanism was required.
- **15 terms restate a page that already exists** — see the cannibalization matrix.

The honest reading: this is a glossary, not a page corpus in waiting. Most entries are
correct as entries and would become thin pages competing with better ones.

## 4. Sub-national policing evidence base

Confirmed available in the existing source registry before any page was drafted:

| Country       | Sources                                             | Role in the cluster                                                          |
| ------------- | --------------------------------------------------- | ---------------------------------------------------------------------------- |
| United States | `us-bjs-csllea-2018`                                | state police example                                                         |
| Brazil        | `br-cf-1988`                                        | state police example (Art. 144 division by function)                         |
| Australia     | `au-nt-police`                                      | example _and_ internal counterexample (NT own force / ACT policed federally) |
| Canada        | `ca-sq`, `ca-rcmp-contract`, `ca-constitution-1867` | provincial police example and the contract asymmetry                         |
| Japan         | `jp-npa-police-of-japan-2020`                       | prefectural policing                                                         |
| Spain         | `es-lofcs`, `es-constitution`                       | autonomous-community policing and its asymmetry                              |
| **Nigeria**   | `ng-constitution`                                   | **counterexample** — s 214(1) forbids any other police force                 |
| **Kenya**     | `ke-constitution`                                   | **counterexample** — Fourth Schedule keeps policing national                 |
| France        | `fr-csi-l511-1`                                     | counterexample to prefectural/administrative-tier policing                   |

Nigeria and Kenya are the reason this cluster can be written honestly: without them the
pages would describe a pattern and imply a rule.
