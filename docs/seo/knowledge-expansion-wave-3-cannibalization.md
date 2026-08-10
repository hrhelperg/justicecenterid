# Knowledge Expansion Wave 3 — cross-cluster collision matrix

Whole-platform view. The glossary-specific analysis is in
`docs/seo/glossary-route-cannibalization.md`; this document audits the Wave 3 routes against
**everything else** — Wave 1 guides, Wave 2 institution and profession pages, section
routes, and country modules.

Verdicts: **SEPARATE** · **MERGE** · **ALIAS** · **REDIRECT** · **HUB-ONLY** · **DEFER** · **REJECT**

---

## 1. Glossary terms against Wave 1 guides

The brief names six terms to check. All six resolve without a new page:

| Term                   | Wave 1 guide                            | Verdict                                                                                                                                                                         |
| ---------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `arrest`               | `/law-enforcement/arrest-and-detention` | **Not a glossary term at all.** The registry has no `arrest` entry — Wave 1 merged arrest and detention into one guide, and the glossary never split them. Nothing to decide.   |
| `detention`            | as above                                | Same.                                                                                                                                                                           |
| `probable cause`       | —                                       | **Absent by design.** Wave 1 rejected it as a page title: a jurisdiction-bound US term of art that a global page would misdescribe. It is not in the glossary and is not added. |
| `reasonable suspicion` | —                                       | Same.                                                                                                                                                                           |
| `due process`          | `/justice/what-is-due-process`          | **HUB-ONLY** — owned by the guide.                                                                                                                                              |
| `judicial review`      | none                                    | **SEPARATE, routed.** No guide covers it; the diffuse/concentrated distinction has no other home.                                                                               |

That two of the six named terms do not exist in the glossary is itself the useful finding:
the Wave 1 rejection of US-bound terms of art was applied to the glossary as well, so there
was nothing to collide with.

## 2. Glossary terms against Wave 2 institution and profession pages

| Term                    | Wave 2 page                                                                | Verdict                                                                                                                                                                             |
| ----------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gendarmerie`           | `/institutions/gendarmerie`                                                | **HUB-ONLY** — the institution page owns it outright.                                                                                                                               |
| `prosecutor`            | `/professions/prosecutor` **and** `/prosecution/what-does-a-prosecutor-do` | **HUB-ONLY** — owned twice.                                                                                                                                                         |
| `inspectorate`          | `/law-enforcement/how-police-are-held-to-account`                          | **HUB-ONLY.**                                                                                                                                                                       |
| `disclosure`            | `/professions/prosecutor` lists it as a duty                               | **SEPARATE, routed** — the profession page states the duty; the term page explains why it exists and where adversarial and inquisitorial systems locate it. Cross-linked both ways. |
| `judicial-independence` | `/professions/judge`                                                       | **SEPARATE, routed** — the profession page describes the role; the term page describes the structural guarantees. Cross-linked.                                                     |
| `chain-of-custody`      | `/professions/forensic-scientist`                                          | **SEPARATE, routed** — a record, not a role.                                                                                                                                        |

The two "separate" verdicts here are the only close calls in Wave 3, and both were kept
apart on the same role-versus-concept split Wave 2 used for prosecutor. **Recorded as the
first thing to revisit** if either pair converges in content.

## 3. Sub-national institutions against Wave 2 institutions

| New page                      | Existing page                                       | Verdict                                                                                                                                                                                                                                                                                                                                    |
| ----------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `state-police`                | `federal-investigative-agency`                      | **SEPARATE** — territorial general policing at state level versus subject-matter jurisdiction nationwide. Each names the other in `commonConfusions`.                                                                                                                                                                                      |
| `state-police`                | `national-police`                                   | **SEPARATE** — the national-police page already distinguishes a unitary national service from federal division.                                                                                                                                                                                                                            |
| `provincial-police`           | `state-police`                                      | **SEPARATE** — the distinguishing fact is that a province can hold the competence without owning a force. No state-police system in the cluster works that way.                                                                                                                                                                            |
| `prefectural-police`          | `national-police`                                   | **SEPARATE** — but the closest pair in the cluster. Japan is _both_: a national framework administered prefecturally. The national-police page uses Japan to show national standards with local execution; the prefectural page explains the local tier and states explicitly that prefectures are not sovereign. Each links to the other. |
| `autonomous-community-police` | `municipal-police`                                  | **SEPARATE** — different tier, different legal source.                                                                                                                                                                                                                                                                                     |
| `highway-patrol`              | `state-police`                                      | **REJECT** — folded into `commonConfusions` on the state-police page.                                                                                                                                                                                                                                                                      |
| `regional-police`             | `provincial-police` / `autonomous-community-police` | **MERGE** — a descriptive adjective, not a category.                                                                                                                                                                                                                                                                                       |
| `territorial-police`          | `state-police`                                      | **MERGE** — Australia's NT/ACT contrast lives inside the state-police page, where it also does duty as an internal counterexample.                                                                                                                                                                                                         |
| `local-police`                | `municipal-police`                                  | **ALIAS** — unchanged from Wave 2.                                                                                                                                                                                                                                                                                                         |

## 4. Against country modules

No collision. Country `law-enforcement` modules describe **named institutions in one state**;
these pages describe **patterns across states**. The relationship is parent/child by
construction, and the direction of risk is the reverse of cannibalization — a reader taking
the global pattern for the local rule — which is what the counterexample sections exist to
prevent.

Nine dossiers are now cited from the sub-national cluster: United States, Brazil, Australia,
Canada, Japan, Spain, Nigeria, Kenya, France.

## 5. Against section routes

Checked explicitly, because this is the collision class that does not appear when comparing
pages to pages:

- `public-safety` (glossary) vs `/public-safety` (section) → **HUB-ONLY**. Same finding as
  Wave 1.
- No Wave 3 route sits at a path that a section owns.

## 6. Totals

|                       | Candidates | Published | Merged/Aliased | Hub-only | Rejected |
| --------------------- | ---------- | --------- | -------------- | -------- | -------- |
| Glossary              | 32         | 5         | 0              | 27       | 0        |
| Sub-national policing | 8          | 4         | 3              | 0        | 1        |
| **Total**             | **40**     | **9**     | **3**          | **27**   | **1**    |

**No redirects were required.** No existing URL was renamed, removed or re-parented, so
`netlify.toml` gains no redirect rule and Part G is satisfied: the glossary hub changed its
content, not its path.
