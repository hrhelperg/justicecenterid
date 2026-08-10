# Knowledge Expansion Wave 5 — taxonomy collision matrix

Every oversight candidate audited against the accountability guides, the institution
taxonomy, country oversight modules, the glossary, and the justice/courts/prosecution pages.

Verdicts: **SEPARATE** · **MERGE** · **ALIAS** · **HUB-ONLY** · **DEFER** · **REJECT**

---

## 1. Mechanism versus institution — the boundary this wave rests on

|          | Mechanism (existing guides)                                          | Institution (Wave 5)                           |
| -------- | -------------------------------------------------------------------- | ---------------------------------------------- |
| Question | _Why does accountability matter? How may police be held to account?_ | _Which kind of body does the examining?_       |
| Owns     | The concept, the six mechanisms, the design argument                 | The institutional form, its powers, its limits |
| Route    | `/law-enforcement/{slug}`                                            | `/institutions/{slug}`                         |

`why-police-accountability-matters` and `how-police-are-held-to-account` remain the
conceptual overview and were **not rewritten**. One sentence was added to the second linking
onward to the new family; its canonical intent is unchanged.

## 2. The named collisions

| Pair                                                        | Verdict                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Internal Affairs vs Professional Standards Unit             | **MERGE** — the same object under two names. Both deferred: no source.                                                                                                                                                                                                                                                                                                                              |
| Civilian Review Board vs Independent Police Complaints Body | **MERGE** — a civilian-composed variant of the same external form. The distinguishing feature is composition, and no source in the corpus establishes it separately.                                                                                                                                                                                                                                |
| Police Ombudsman vs general Ombudsman                       | **SPLIT, and this is the wave's most important distinction.** Ireland's Fiosrú is the _Office of the Police Ombudsman_ and is a police complaints body; Sweden's JO and Austria's Volksanwaltschaft are general-mandate bodies that reach police because police are public administration. The first is on the complaints page, the second on the ombuds page, and each page states the difference. |
| Police Integrity Commission vs Anti-Corruption Commission   | **BOTH DEFERRED** — no source, and Part O is right that many anti-corruption bodies investigate public officials generally rather than police conduct specifically. Classifying them as police oversight without a mandate source would be exactly the error.                                                                                                                                       |
| Police Inspectorate vs Police Conduct Authority             | **Inspectorate DEFERRED** (no source); **Conduct Authority ALIASED** to the complaints body — New Zealand's IPCA is an instance of that form, not a separate type.                                                                                                                                                                                                                                  |
| Judicial Oversight vs Courts                                | **REJECT as an institution.** Courts own the entity intent; judicial supervision is covered as a mechanism on the accountability guides and as a relationship in Wave 4.                                                                                                                                                                                                                            |
| Prosecutorial Oversight vs Prosecution                      | **REJECT as an institution.** `/institutions/prosecution-service` and `/professions/prosecutor` already exist. Norway's investigate-and-prosecute body is covered _inside_ the complaints page, where it belongs as a variation in powers.                                                                                                                                                          |

## 3. Against the existing institution taxonomy

| Existing page                                               | Wave 5 page                          | Verdict                                                                                                                                                                                                          |
| ----------------------------------------------------------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/institutions/prosecution-service`                         | `independent-police-complaints-body` | **SEPARATE** — one prosecutes crime generally; the other examines police conduct, and in Norway's case also prosecutes it. Cross-linked.                                                                         |
| `/institutions/correctional-service`                        | `ombuds-and-rights-institution`      | **SEPARATE** — but genuinely adjacent, because several ombuds inspect places of detention under OPCAT. The ombuds page owns the inspection function; the correctional page owns the institution being inspected. |
| `/institutions/national-police` and the sub-national family | both Wave 5 pages                    | **SEPARATE** — the examined and the examiner.                                                                                                                                                                    |

## 4. Against country oversight modules

No collision. Twenty-three dossiers carry a published `oversight` module describing **named
bodies in one country**; the Wave 5 pages describe **recurring forms across countries**.
Parent/child by construction, and each worked example links to its dossier.

## 5. Against the glossary

`oversight`, `accountability` and `inspectorate` are all hub-only glossary entries whose
intent was already assigned to the accountability guides in the Wave 3 ownership map. Wave 5
adds no competing route and does not change that assignment.

## 6. Against justice / courts / prosecution

`/justice/why-justice-systems-need-oversight` is the justice-wide argument; the Wave 5 pages
are institutional forms within policing. `/courts/what-do-courts-do` owns judicial function.
No overlap, and no new page competes with either.

## 7. Verdict summary

| Verdict                        | Count                          |
| ------------------------------ | ------------------------------ |
| PUBLISH                        | 2 institution types (+1 guide) |
| MERGE                          | 5                              |
| ALIAS                          | 2                              |
| DEFER                          | 8                              |
| REJECT (as institution entity) | 2                              |
| **Candidates assessed**        | **18**                         |

Two guide candidates from Parts H and J were also assessed and **deferred**:
`internal-vs-external-police-oversight` (restates `how-police-are-held-to-account`) and
`how-police-complaints-are-investigated` (no process source, and a real risk of drifting into
jurisdiction-specific procedural advice).

**No redirects.** No existing URL was renamed, removed or re-parented.
