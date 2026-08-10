# Knowledge Expansion Wave 4 — baseline

**Date:** 2026-08-10
**Branch:** `feat/knowledge-expansion-wave-4` (local until the final push)
**Base SHA:** `0eb9425233a44f3f3f24ed875818a44428a9c4fa`

Measured from this tree. Nothing carried over from a previous report.

## 1. Merge gate — PASSED

Wave 3 is an ancestor of `origin/main` via PR #21. Each artefact verified individually:

| Artefact                        | Evidence                                                            |
| ------------------------------- | ------------------------------------------------------------------- |
| Glossary detail route           | `src/app/glossary/[slug]/page.tsx` present                          |
| Glossary publication gate       | `validateGlossaryPublication` present                               |
| Gate-derived routing            | `src/content/glossary-routes.ts` present                            |
| Typed `counterExamples`         | in `types.ts`, on 4 institution records                             |
| Country-scoped source invariant | named test present in `reference-routes.test.ts`                    |
| Wave 3 cannibalization docs     | both present                                                        |
| Wave 3 QA docs                  | both present                                                        |
| Route registry additions        | `glossary-term` kind registered                                     |
| Wave 3 tests                    | `wave3-routes.test.ts`, 304 lines                                   |
| Sub-national records            | state / provincial / prefectural / autonomous-community all present |

**Rebuilt to confirm behaviour:** `/glossary/judicial-review`, `/glossary/chain-of-custody`,
`/institutions/state-police`, `/institutions/provincial-police`,
`/institutions/prefectural-police`, `/institutions/autonomous-community-police` all export;
`/glossary/due-process` and `/institutions/coast-guard` correctly do not.

Working tree clean.

## 2. Baseline metrics

| Metric                 | Value                |
| ---------------------- | -------------------- |
| Registered routes      | **342**              |
| Sitemap URLs           | **342**              |
| Exported pages         | **344**              |
| Unit / content tests   | **2347** in 55 files |
| Playwright tests       | **284** in 5 files   |
| Institution routes     | **11**               |
| Glossary routes        | **5**                |
| Institution records    | 13                   |
| Glossary terms         | 32                   |
| Profession records     | 6                    |
| Country dossiers       | 32                   |
| Source records         | **225**              |
| Law-enforcement guides | 7                    |
| Shared JS              | **663,403 B**        |
| CSS                    | **29,406 B**         |
| `out/` on disk         | **76 MB**            |

## 3. What Wave 4 has to work with

The relationship cluster needs no new route infrastructure: `/law-enforcement/[slug]`
already routes `PUBLISHED_GUIDES`, so a relationship page is a `Guide` record. This is the
first wave in four that adds pages without adding a route family.

Country evidence confirmed present and verified before drafting:

| Country       | Source                                                                                                                                      | Use                                                |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| United States | `us-bjs-csllea-2018` (17,541 agencies; ~67% municipal, 17% sheriffs), `us-bjs-agency-characteristics` (sheriff usually elected, countywide) | fragmentation, sheriff page                        |
| Canada        | `ca-rcmp-contract` (8 provinces, 3 territories, ~150 municipalities; 70/30; to 2032)                                                        | canonical contract policing                        |
| Australia     | `au-afp-actpolicing` (ACT Policing is the AFP's community policing arm, on behalf of the ACT Government), `au-afp-act`                      | second contract case                               |
| Switzerland   | `ch-fedpol` (no national force; fedpol "not a superordinate authority")                                                                     | shared vs contracted; coordination                 |
| Japan         | `jp-npa-police-of-japan-2020`                                                                                                               | coordination not command                           |
| France        | `fr-csi-l511-1`, `fr-code-defense-l3211-3`                                                                                                  | municipal/national tiers; hierarchy counterexample |
| Spain         | `es-lofcs`                                                                                                                                  | three-tier structure                               |
| Germany       | `de-grundgesetz`                                                                                                                            | legislating vs administering                       |
| Brazil        | `br-cf-1988` (Art. 144)                                                                                                                     | functional division                                |
| Nigeria       | `ng-constitution` (s 214(1))                                                                                                                | counterexample                                     |
| Kenya         | `ke-constitution` (Fourth Schedule)                                                                                                         | counterexample                                     |

Several of these sources carry their own limitation statements — `us-bjs-agency-characteristics`
explicitly does not support that every county has a sheriff or that functions are identical
nationally — which map directly onto the cautions this phase was asked to observe.
