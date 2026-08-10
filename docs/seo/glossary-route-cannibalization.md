# Glossary routes — semantic collision matrix

Every one of the 32 glossary terms audited against published guides, institution pages,
profession pages, section routes and country modules.

Verdicts: **ROUTE** · **HUB-ONLY** · **MERGE** · **ALIAS** · **REDIRECT** · **DEFER**

---

## 1. The dominant finding

**Fifteen of 32 terms restate a page that already exists.** That is the single largest
cannibalization surface examined in any wave so far, and it is entirely self-inflicted: the
platform wrote long-form guides first and a glossary second, so a large part of the glossary
is a short version of the guide corpus.

Routing them would put two of this site's own URLs against one query — twice over in one
case, since `prosecutor` is owned by both a guide and a profession page.

| Term                       | Owned by                                                                   | Verdict  |
| -------------------------- | -------------------------------------------------------------------------- | -------- |
| `justice`                  | `/justice/what-is-justice`                                                 | HUB-ONLY |
| `rule-of-law`              | `/justice/what-is-the-rule-of-law`                                         | HUB-ONLY |
| `due-process`              | `/justice/what-is-due-process`                                             | HUB-ONLY |
| `presumption-of-innocence` | `/justice/what-is-the-presumption-of-innocence`                            | HUB-ONLY |
| `court`                    | `/courts/what-do-courts-do`                                                | HUB-ONLY |
| `prosecutor`               | `/prosecution/what-does-a-prosecutor-do` **and** `/professions/prosecutor` | HUB-ONLY |
| `criminal-investigation`   | `/investigations/what-is-a-criminal-investigation`                         | HUB-ONLY |
| `forensic-science`         | `/forensics/what-is-forensic-science`                                      | HUB-ONLY |
| `police`                   | `/law-enforcement/police-and-law-enforcement-difference`                   | HUB-ONLY |
| `law-enforcement`          | as above                                                                   | HUB-ONLY |
| `accountability`           | `/law-enforcement/why-police-accountability-matters`                       | HUB-ONLY |
| `oversight`                | `/justice/why-justice-systems-need-oversight`                              | HUB-ONLY |
| `gendarmerie`              | `/institutions/gendarmerie` (Wave 2)                                       | HUB-ONLY |
| `inspectorate`             | `/law-enforcement/how-police-are-held-to-account`                          | HUB-ONLY |
| `public-safety`            | `/public-safety` — a **section** route                                     | HUB-ONLY |

The ownership map is held in code (`GLOSSARY_OWNED_ELSEWHERE`) and **tested**: every slug it
names must exist, must not be routed, and for the eight owned by a guide, that guide's path
must be in the published route set. A map that suppressed a page by pointing at a guide
that did not exist would otherwise look identical to a correct one.

---

## 2. Terms with no owner but insufficient substance (12)

`fair-trial`, `burden-of-proof`, `standard-of-proof`, `acquittal`, `jurisdiction`,
`legal-certainty`, `charging-decision`, `prosecutorial-discretion`, `evidence`, `warrant`,
`expert-evidence`, `accreditation` — all **HUB-ONLY**.

Each is a one-to-two-sentence definition citing a single source. The brief forbids routing
one-sentence definitions, and the routed-page floor is two sources. These are correct as
entries.

Three near-collisions inside this group are worth recording:

- **`fair-trial` vs `due-process`** — near-synonyms across systems, and `due-process`
  already has a guide. Routing `fair-trial` alone would create a page competing with that
  guide under a different name.
- **`burden-of-proof` vs `standard-of-proof`** — each lists the other as a false friend,
  which is precisely why they belong adjacent on one hub page rather than on two pages a
  reader must navigate between.
- **`charging-decision` and `prosecutorial-discretion` vs the prosecutor guide and
  profession page** — both are sub-topics of an area already covered twice.

---

## 3. Terms routed (5)

| Term                    | Nearest competitor                                | Why it is still distinct                                                                                                                                                                        |
| ----------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `judicial-independence` | `/courts/what-do-courts-do`, `/professions/judge` | The guide covers what courts do; the profession page covers the role. Neither explains the _structural_ arrangements — tenure, appointment, why judicial accountability is deliberately narrow. |
| `appeal`                | `/courts/what-do-courts-do`                       | The guide does not distinguish review from rehearing, which is the misunderstanding this page exists to correct.                                                                                |
| `judicial-review`       | `appeal` (its own false friend)                   | Distinct mechanism and distinct question. The diffuse/concentrated fork is not covered anywhere else on the platform.                                                                           |
| `chain-of-custody`      | `evidence`, `/forensics/what-is-forensic-science` | `evidence` is hub-only; the forensic guide covers the discipline, not the custody record.                                                                                                       |
| `disclosure`            | `/professions/prosecutor`                         | The profession page lists disclosure as a duty; this page explains why the duty exists and how adversarial and inquisitorial systems locate it differently.                                     |

Each was expanded before routing — reader question, institutional context, purpose, second
and third source, worked country example — rather than routed on the strength of its
existing definition.

---

## 4. The hub is not an index

Unlike `/institutions` and `/professions` in Wave 2, `/glossary` **keeps** its full
definitions. That is deliberate and it is not the same situation:

- An institutions hub that repeated every field duplicated its detail pages exactly.
- A glossary hub that shows definitions _is_ the product. Stripping it to a link list would
  make it worse for the 27 terms that have no page.

The five routed terms link out; the detail pages add purpose, context, examples and sources
that the hub does not carry. The overlap is a definition sentence, which is the correct
amount for a glossary entry and its page to share.

---

## 5. Totals

| Verdict                           | Count |
| --------------------------------- | ----- |
| ROUTE                             | 5     |
| HUB-ONLY — owned elsewhere        | 15    |
| HUB-ONLY — insufficient substance | 12    |
| MERGE / ALIAS / REDIRECT / DEFER  | 0     |

**No redirects.** No existing URL was renamed, removed or re-parented.
