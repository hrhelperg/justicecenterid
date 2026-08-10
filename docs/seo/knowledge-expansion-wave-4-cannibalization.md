# Knowledge Expansion Wave 4 — intent collision matrix

Every Wave 4 candidate audited against the institution taxonomy, the existing
law-enforcement guides, the glossary, and country modules.

Verdicts: **SEPARATE** · **MERGE** · **ALIAS** · **DEFER** · **REJECT**

---

## 1. The distinction the whole wave rests on

|          | Institution page                          | Relationship page                         |
| -------- | ----------------------------------------- | ----------------------------------------- |
| Question | _What is a municipal police force?_       | _How does it relate to the national one?_ |
| Owns     | Definition, mandate, governance, presence | Interaction, overlap, control, delivery   |
| Route    | `/institutions/{slug}`                    | `/law-enforcement/{slug}`                 |

The failure mode is a relationship page drifting into a second definition. It is guarded in
two ways: no relationship page carries a "what is X" section, and each links to the
institution page rather than restating it.

---

## 2. Against the institution taxonomy

| Institution page                             | Nearest Wave 4 page                                        | Verdict                                                                                                                                                                            |
| -------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/institutions/municipal-police`             | `municipal-and-national-police`, `local-police-governance` | **SEPARATE** — the institution page defines the type and states where it exists; the relationship pages cover how it shares a territory with a national force, and who directs it. |
| `/institutions/state-police`                 | `how-policing-is-divided-between-levels`                   | **SEPARATE** — one is a type, the other is the allocation question across five countries.                                                                                          |
| `/institutions/provincial-police`            | `contract-policing`                                        | **SEPARATE** — the institution page notes that a province may hold the competence without owning a force; the relationship page is about the arrangement by which that happens.    |
| `/institutions/prefectural-police`           | `police-command-and-coordination`                          | **SEPARATE** — the institution page explains the tier; the relationship page explains why national supervision is not operational command.                                         |
| `/institutions/national-police`              | `municipal-and-national-police`                            | **SEPARATE** — type versus interaction.                                                                                                                                            |
| `/institutions/federal-investigative-agency` | `police-jurisdiction`                                      | **SEPARATE** — the institution page defines subject-matter jurisdiction as a property of the body; the jurisdiction page separates the six senses of the word.                     |
| `/institutions/autonomous-community-police`  | `local-police-governance`                                  | **SEPARATE** — Spain appears on both, as a type and as a governance pattern.                                                                                                       |

**No institution page was rewritten.** Wave 4 adds no institution records and changes none.

## 3. Against existing law-enforcement guides

| Existing guide                                           | Verdict                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/law-enforcement/police-and-law-enforcement-difference` | **SEPARATE** — it distinguishes police from other enforcement bodies; Wave 4 distinguishes levels of government. Both new pages that touch it link to it.                                                                                                                |
| `/law-enforcement/arrest-and-detention`                  | **SEPARATE** — powers over a person, not authority between agencies. No overlap.                                                                                                                                                                                         |
| `/law-enforcement/police-use-of-force`                   | **SEPARATE** — same.                                                                                                                                                                                                                                                     |
| `/law-enforcement/why-police-accountability-matters`     | **SEPARATE** — why answerability exists, not who directs whom.                                                                                                                                                                                                           |
| `/law-enforcement/how-police-are-held-to-account`        | **CLOSEST PAIR, kept separate** — it lists the mechanisms that examine police _after_ the fact; `local-police-governance` covers who directs them _before_. Control and oversight are different relationships, and the governance page says so explicitly. Cross-linked. |
| `/law-enforcement/how-policing-institutions-changed`     | **SEPARATE** — historical.                                                                                                                                                                                                                                               |

## 4. Against the glossary

`jurisdiction` is a hub-only glossary entry (Wave 3) with a one-sentence definition. The
Wave 4 page `police-jurisdiction` is a different object: six senses of the word, concurrent
authority, and why jurisdiction rarely implies command. No competing route was created, and
the glossary entry stays hub-only.

## 5. Against country modules

No collision. Country `law-enforcement` modules describe named institutions in one state;
these pages describe relationships across states. Parent/child by construction, and the risk
runs the other way — a reader taking the pattern for the local rule — which the counterexample
sections exist to prevent.

Eleven dossiers are cited from the cluster: United States, Canada, Australia, Switzerland,
Japan, France, Spain, Germany, Brazil, Nigeria, Kenya.

## 6. Verdicts for all 18 candidates

| Candidate                                 | Verdict                                                               |
| ----------------------------------------- | --------------------------------------------------------------------- |
| Federal vs State vs Local                 | **SEPARATE** → `how-policing-is-divided-between-levels`               |
| State Police vs Local Police              | **MERGE** → above                                                     |
| Sheriff vs Municipal Police               | **SEPARATE** → `sheriffs-and-city-police`                             |
| Municipal Police vs National Police       | **SEPARATE** → `municipal-and-national-police`                        |
| What Is Police Jurisdiction?              | **SEPARATE** → `police-jurisdiction`                                  |
| Overlapping Police Jurisdiction           | **MERGE** → `police-jurisdiction`                                     |
| Contract Policing                         | **SEPARATE** → `contract-policing`                                    |
| Local Police Governance                   | **SEPARATE** → `local-police-governance`                              |
| Who Controls Local Police?                | **MERGE** → `local-police-governance`                                 |
| Police Coordination Between Agencies      | **MERGE** → `police-command-and-coordination`                         |
| Police Command vs Coordination            | **SEPARATE** → `police-command-and-coordination`                      |
| Shared Policing Services                  | **MERGE** → `contract-policing`                                       |
| Local Public Order Authorities            | **DEFER** — no source                                                 |
| County Law Enforcement                    | **MERGE** → `sheriffs-and-city-police`                                |
| City Police and Municipal Government      | **MERGE** → `local-police-governance`                                 |
| Special-Purpose Police Agencies           | **DEFER** — only transport is sourced, and it has an institution page |
| Transit and Transport Police Jurisdiction | **MERGE** → deferred special-purpose                                  |
| Campus Police and Special Jurisdiction    | **DEFER** — no source                                                 |

| Verdict              | Count |
| -------------------- | ----- |
| SEPARATE (published) | 7     |
| MERGE                | 8     |
| DEFER                | 3     |
| ALIAS / REJECT       | 0     |

## 7. Titles

Checked for the "differ by one word" problem the brief warns about. The published titles are
distinct in structure, not only in wording:

- _What does police jurisdiction mean?_
- _How is policing divided between levels of government?_
- _What is contract policing?_
- _Command and coordination between police agencies_
- _How municipal and national police relate_
- _Who controls local police?_
- _Sheriffs and city police in the United States_

A test asserts every Wave 4 title and reader question is unique.

**No redirects.** No existing URL was renamed, removed or re-parented.
