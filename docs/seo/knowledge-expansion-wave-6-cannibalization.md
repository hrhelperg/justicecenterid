# Knowledge Expansion Wave 6 — intent collision matrix

Wave 6 adds **one route**. That makes the collision question narrow but not trivial: a France
oversight page has four plausible competitors already in the corpus, and the France dossier
itself already describes French policing on another module.

Verdicts: **SEPARATE** · **MERGE** · **ALIAS** · **DEFER** · **REJECT**

---

## 1. The new route

| Route                         | Question it owns                                                                         |
| ----------------------------- | ---------------------------------------------------------------------------------------- |
| `/countries/france/oversight` | Who examines the French police, where does each body sit, and what may each actually do? |

## 2. Against the existing France modules

| France module                       | Verdict                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/countries/france/law-enforcement` | **SEPARATE** — it establishes what the French forces _are_: the gendarmerie as an armed force, the police municipale under a mayor. The oversight module never redefines them; it names who examines them. The nearest overlap is that both mention the gendarmerie's military status, and the oversight module uses it only to explain why one deontology code covering both forces is notable.                                    |
| `/countries/france/justice-system`  | **SEPARATE** — court orders and the constitutional position of judicial authority. The oversight module touches Article 65 for one paragraph, purely to say that judicial discipline is a different system, and does not describe the CSM further.                                                                                                                                                                                  |
| `/countries/france/prosecution`     | **CLOSEST PAIR, kept separate** — the prosecution module owns the parquet and its relationship to the executive. The oversight module states that the IGPN conducts judicial investigations under the direction of the judicial authority. That is the inspection's position in a criminal case, not a description of the parquet, and the oversight module does not restate the independence question the prosecution module owns. |
| `/countries/france/investigations`  | **SEPARATE** — how criminal investigation works generally, not who investigates police.                                                                                                                                                                                                                                                                                                                                             |
| `/countries/france/sources`         | **PARENT** — extended with the ten new instruments rather than duplicated.                                                                                                                                                                                                                                                                                                                                                          |

**No France module was rewritten.** The only edits outside the oversight module are the added
source ids and the updated source-count sentence.

## 3. Against the global institution pages

| Institution page                                                  | Verdict                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/institutions/independent-police-complaints-body`                | **SEPARATE, and strengthened** — France is added as a _counterexample_, because it has no body of that type. The global page owns the type; the France module owns the French architecture. A French page could not have been an example without misdescribing the country. |
| `/institutions/ombuds-and-rights-institution`                     | **SEPARATE, and strengthened** — the Défenseur des droits is added as a country example. The global page owns the type. Creating a French ombuds page would have split one concept across two URLs.                                                                         |
| `/institutions/national-police`, `/institutions/municipal-police` | **SEPARATE** — institution types, not oversight.                                                                                                                                                                                                                            |

## 4. Against the law-enforcement guides

| Guide                                                | Verdict                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/law-enforcement/who-investigates-police`           | **CLOSEST PAIR overall, kept separate and cross-linked** — the guide owns the comparative question across countries and now carries France as an example where two of its arrangements operate at once. The France module owns the depth: named instruments, dates, the signalement/plainte boundary. The guide does not gain French detail beyond one example, and the module does not restate the comparative typology. |
| `/law-enforcement/how-police-are-held-to-account`    | **SEPARATE** — mechanism-level, and the module links to it rather than restating the internal/external distinction.                                                                                                                                                                                                                                                                                                       |
| `/law-enforcement/why-police-accountability-matters` | **SEPARATE** — why answerability exists at all.                                                                                                                                                                                                                                                                                                                                                                           |

## 5. Against the glossary

`oversight` and `inspectorate` are hub-only glossary entries with one-sentence definitions.
The France module does not compete with either; it argues that the English word _inspectorate_
does not fit the French institution, which is a different object from a definition of the
English term. **No glossary route was created or changed.**

This is worth stating plainly because it is the one place Wave 6 could have gone wrong: the
temptation was to route `/glossary/inspectorate` to host the internal-versus-external
distinction. That would have created a glossary page whose content is a comparative argument,
which is the category error Wave 3 settled.

## 6. Candidates considered and not published

| Candidate                                   | Verdict                                                   | Reason                                                                                                                                                            |
| ------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/institutions/police-inspectorate`         | **DEFER**                                                 | The two sourced instances are internal; the label denotes an external body. One country is not recurrence.                                                        |
| `/institutions/internal-affairs-unit`       | **DEFER**                                                 | The French bodies exceed the label (criminal investigation, organisational audit) and fall short of it (the IGPN needs instruction for administrative enquiries). |
| `/institutions/professional-standards-unit` | **DEFER**                                                 | Same object; France sets standards by regulation binding both forces, not by a unit.                                                                              |
| `/institutions/anti-corruption-commission`  | **DEFER**                                                 | France has an anti-corruption _delegation_ inside the IGPN since 1 September 2025 — a sub-unit, not a commission.                                                 |
| `/countries/france/inspections`             | **REJECT**                                                | A second France page about the inspections would compete directly with the oversight module. Added to the must-404 list.                                          |
| A France-specific ombuds page               | **MERGE** → `/institutions/ombuds-and-rights-institution` | One concept, one URL.                                                                                                                                             |

| Verdict              | Count |
| -------------------- | ----- |
| SEPARATE (published) | 1     |
| MERGE                | 1     |
| DEFER                | 4     |
| REJECT               | 1     |

## 7. Titles

The new title, _Oversight and accountability in France_, follows the pattern used by every
other country oversight module (Ireland, Norway, Sweden, Czechia and others), so it competes
with none of them: each is scoped by its country name, and the modules differ in substance
rather than in wording.

**No redirects.** No existing URL was renamed, removed or re-parented. `/countries/france` gains
one link and loses one deferred-module gap entry.
