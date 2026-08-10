# Knowledge Expansion Wave 2 — baseline

**Date:** 2026-08-10
**Branch:** `feat/knowledge-expansion-wave-2` (local)
**Base SHA:** `869fcd08262639311990665ad16937e7dbc74aa4`

Every figure below was measured from this repository at the base SHA. None is copied
from a previous phase report — several differ from the numbers quoted in earlier
documents, which is precisely why the brief asks for a fresh measurement.

---

## 1. Repository gate

| Check               | Result                                                         |
| ------------------- | -------------------------------------------------------------- |
| Repository          | `hrhelperg/justicecenterid`                                    |
| Refs fetched        | `git fetch --all --prune --tags`                               |
| `main` synchronised | Was 2 commits behind; fast-forwarded to `869fcd0`              |
| Working tree        | Clean                                                          |
| Branch created      | `feat/knowledge-expansion-wave-2` — **local only, not pushed** |

Merged and verified present at the base:

- PR #18 — law-enforcement Wave 1 + pre-deployment UI
- PR #19 — production route matrix + launch report

---

## 2. Build and route metrics

| Metric                   | Value                                               |
| ------------------------ | --------------------------------------------------- |
| Registered public routes | **320**                                             |
| Sitemap URLs             | **320**                                             |
| Exported HTML pages      | **322**                                             |
| `verify:output`          | Pass — registry and output agree in both directions |

The two-page gap between routes and pages is `404.html` and `_not-found.html`, neither of
which is a registered route. `_not-found` is the P2 recorded in the launch report.

## 3. Test metrics

| Metric                    | Value                                   |
| ------------------------- | --------------------------------------- |
| Unit / content test files | **53**                                  |
| Unit / content tests      | **2219**                                |
| Playwright spec files     | **3**                                   |
| Playwright tests          | **162** (158 run, 4 skipped by project) |

## 4. Content registry counts

| Registry               | Records |
| ---------------------- | ------- |
| Institution types      | **8**   |
| Professions            | **6**   |
| Glossary terms         | **32**  |
| Source records         | **224** |
| Law-enforcement guides | **7**   |
| Country dossiers       | **32**  |

## 5. Output size

| Metric                                 | Bytes          |
| -------------------------------------- | -------------- |
| Shared JS (`out/_next/static/**/*.js`) | **663,309**    |
| CSS                                    | **29,658**     |
| RSC payload (`.txt`)                   | **40,179,515** |
| `out/` on disk                         | **72 MB**      |

---

## 6. Existing architecture, as inspected

### Institution types — `src/content/institutions.ts`

Eight records: `municipal-police`, `national-police`, `gendarmerie`,
`federal-investigative-agency`, `prosecution-service`, `border-and-customs-authority`,
`coast-guard`, `correctional-service`.

**They have no routes.** All eight render inline on the `/institutions` hub. The `InstitutionType`
model carries `distinguishingFeatures`, `typicalMandate`, `commonConfusions`, `presenceNote`,
`temporalScope`, `sources`, `status`, `review`, `updatedOn`.

**Two findings that shape this phase:**

1. **The model has no field for country examples, related professions, accountability, or
   governance** — four of the twelve items the Wave 2 institution page contract requires. The
   model must be extended before these can become pages.
2. **Sourcing is thin, and in places the cited source does not support the claim.** Six of the
   eight records cite `unodc-cpcj` alone — a general UNODC crime-prevention landing page. It
   does not establish, for example, what distinguishes a gendarmerie's chain of command from a
   civilian service. Under the brief's source-reuse rule this is exactly the failure mode named:
   a source that exists but does not support the claim at the scope asserted. Publishing these
   as standalone routes without fixing it would promote a weak citation into a canonical page.

### Professions — `src/content/professions.ts`

Six records: `patrol-officer`, `detective`, `prosecutor`, `judge`, `forensic-scientist`,
`corrections-officer`.

Also **no routes**; all render inline on `/professions`. The `Profession` model carries
`responsibilities`, `decisionAuthority`, `constraints`, `oversight`, `trainingRouteShape`,
`commonMisunderstandings`, `jurisdictionNote`, `sources`, `status`, `review`, `updatedOn`.

The hub already states, correctly, that it carries no pay figures, staffing levels, attrition
rates or entry requirements, because those are country-specific and time-sensitive. That
constraint carries forward unchanged.

### The hub-becomes-duplicate problem

Both hubs currently render the **full** content of every record inline. Adding detail routes
without changing the hubs would create sixteen pages that duplicate two existing pages
word-for-word — the single largest cannibalization risk in this phase, and it is created by
the routing work itself rather than by any new content. Resolution is recorded in
`docs/seo/knowledge-expansion-wave-2-cannibalization.md`.

### Law-enforcement cluster

Seven published guides at `/law-enforcement/{slug}`. Wave 1 deliberately deferred all 14
institution-type candidates and all 14 profession candidates on the ground that they were
already-modelled families whose correct fix is to route the existing records. **This phase is
that fix.**

---

## 7. Source-corpus feasibility, tested before writing

The brief requires the Wave 1 history deferral to be "resolved properly". It was tested by
fetching, not assumed:

| Host                                 | Result                 | Usable                         |
| ------------------------------------ | ---------------------- | ------------------------------ |
| `nationalarchives.gov.uk`            | 200, content confirmed | **Yes**                        |
| `bl.uk` (British Library)            | 200                    | Yes, needs a specific document |
| `loc.gov` (Library of Congress)      | 200                    | Yes, needs a specific document |
| `api.parliament.uk/historic-hansard` | 200                    | Partially — see below          |
| `si.edu` (Smithsonian)               | **403**                | No                             |
| `met.police.uk`                      | **403**                | No                             |
| `gendarmerie.interieur.gouv.fr`      | **403**                | No                             |
| `parliament.uk`                      | **403**                | No                             |
| `britannica.com`                     | **403**                | No                             |

**Hansard cannot settle the Peel question.** `sittings/1829` returns 200 but lists its months
unlinked — the digitised set has no sitting records indexed for that year — and every
candidate debate URL returns 404. This matters: the brief specifically asks that the "nine
Peelian principles" not be attributed to Peel without source verification, and the primary
parliamentary record that would settle it is not retrievable here. That constrains what a
Peel page may assert.

**The National Archives police guide is usable and specific.** It supports dated facts about
transport policing — the first railway police force in Britain formed in 1830; men employed
as "Policemen" on railways from as early as 1826 whose role was to direct trains like a
signalman; the four largest railway companies each holding a force under a Chief of Police;
the British Transport Commission Police created in 1949; London Transport Police absorbed in
1958 — and records that The National Archives holds police records only for the Metropolitan
Police, the Royal Irish Constabulary, the Palestine Police and the transport police.

That 1826 detail is independently valuable: it is a documented case of the _word_ "policeman"
denoting a completely different job, which is the anti-presentism point the brief asks the
history cluster to make, evidenced rather than asserted.

---

## 8. What this baseline implies for scope

1. **Routing the two existing registries is the highest-value work available**, and it is what
   Wave 1 itself recommended as the Wave 2 opening.
2. **It cannot be done by routing alone.** The models need extending, the hubs need converting
   to indexes, and the existing citations need strengthening before they become canonical pages.
3. **History remains source-constrained**, but differently and more precisely than in Wave 1:
   the corpus has now been tested host by host, and the specific reason each is unusable is
   recorded above rather than left as a general statement.
