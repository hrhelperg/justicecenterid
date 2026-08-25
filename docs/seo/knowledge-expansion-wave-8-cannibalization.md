# Wave 8 — cannibalization analysis

Twenty-two guide candidates and eight institution candidates were assessed against everything
JusticeCenterID already publishes. **Six routes were published.** No new institution route was
created.

Comparison set: `/investigations/what-is-a-criminal-investigation`, the seventeen
`/law-enforcement/*` guides, `/glossary/*`, `/institutions/*`, `/professions/*`,
`/prosecution/what-does-a-prosecutor-do`, `/courts/what-do-courts-do`,
`/forensics/what-is-forensic-science`, and the 32 country `investigations` modules.

## The constraint that shaped the wave

`what-is-a-criminal-investigation` already exists and already owns: authorisation, preservation,
recording, chain of custody, interviews under safeguards, testing the theory, and disclosure.
`/glossary` already owns `chain-of-custody`, `warrant`, `evidence`, `disclosure` and
`criminal-investigation`. `/law-enforcement/arrest-and-detention` owns arrest.

So the space left for Wave 8 is not *what an investigation is* — that is taken — but **who is
legally competent to run one, and how systems differ**. Every published page owns a comparative
or relational intent that no existing page holds.

## Guide candidates

| # | Candidate | Decision | Nearest existing page | Reason |
| --- | --- | --- | --- | --- |
| 1 | What is a criminal investigation? | **REJECT** | `/investigations/what-is-a-criminal-investigation` | Already published. Enhanced with links instead |
| 2 | Who investigates crime? | **PUBLISH** | `/law-enforcement/who-investigates-police` | Genuinely distinct: that page is about investigating *police*; this is about who investigates *crime* |
| 3 | Police vs prosecutorial investigation | **PUBLISH** | — | Flagship relational intent; nothing owns it |
| 4 | Investigative jurisdiction | **PUBLISH** | `/law-enforcement/police-jurisdiction` | That page: which agency may act where. This page: which institution is legally competent to investigate a given matter. Distinction held throughout and asserted by test |
| 5 | Prosecutor-led investigations | **MERGE** → #3 | — | A half of #3. Two pages would split one intent |
| 6 | Police-led investigations | **MERGE** → #3 | — | The other half of #3 |
| 7 | Judicial police | **PUBLISH** | — | Terminology-critical; three distinct meanings across five sourced jurisdictions |
| 8 | Investigating judge | **PUBLISH** | `/courts/what-do-courts-do` | Distinct office, distinct intent; the courts guide does not mention it |
| 9 | Preliminary investigation | **MERGE** → #12 | — | The phase structure is the substance of the handoff page |
| 10 | Case referral between agencies | **MERGE** → #4 | — | Referral is a consequence of competence; it has no separate reader intent |
| 11 | Investigative oversight | **REJECT** | Wave 7's entire cluster | `who-investigates-police`, `internal-vs-external-police-oversight` and `how-police-are-held-to-account` own this completely |
| 12 | Investigation and prosecution | **PUBLISH** | `/prosecution/what-does-a-prosecutor-do` | The handoff, not the prosecutor's role. Stops at the charging decision by design |
| 13 | Criminal investigation and the courts | **MERGE** → #8 | `/courts/what-do-courts-do` | Judicial authorisation is the substance, and it belongs with the investigating-judge page. A separate page would pre-empt Wave 9 |
| 14 | Evidence in criminal investigations | **DEFER** | `/glossary/evidence`, `/forensics/*` | The brief reserves the evidence cluster. Deferred to a forensics/evidence wave |
| 15 | Chain of custody | **REJECT** | `/glossary/chain-of-custody` | Glossary owns the term; the brief says so explicitly |
| 16 | Search warrants | **MERGE** → #8 | `/glossary/warrant` | Judicial authorisation covered without a page that invites operational detail |
| 17 | Arrest warrants | **REJECT** | `/law-enforcement/arrest-and-detention`, `/glossary/warrant` | Owned twice over |
| 18 | Witness interviews | **DEFER** | existing guide's "Interviews under safeguards" | Safety-sensitive and already covered at the right altitude |
| 19 | Suspect interviews | **DEFER** | existing guide's "Interviews under safeguards" | Highest operational-risk candidate in the list. Deferred deliberately |
| 20 | Investigative case files | **MERGE** → #12 | — | The dossier/inquérito is the artefact the handoff transfers; sourced only in part |
| 21 | Crime scene investigation | **DEFER** | `/forensics/what-is-forensic-science` | Cannot be written usefully without procedural detail the safety boundary forbids. Belongs to a forensics wave with a safety review of its own |
| 22 | Specialized investigations | **REJECT** | — | Not an intent. A container for topics that each need their own evidence |

**PUBLISH 6 · MERGE 6 · DEFER 4 · REJECT 6**

## Institution candidates

| Candidate | Decision | Reason |
| --- | --- | --- |
| Criminal investigation agency | **REJECT** | `/institutions/federal-investigative-agency` already exists. A near-synonym would compete with it directly |
| Judicial police | **REJECT as an institution type** | The evidence forbids it. France's is a legal *function*, Brazil's an *institutional* role, Italy's *personnel drawn from* other forces. Forcing them into one institution family is exactly the false equivalence Wave 7 was built to prevent — so it is published as a **guide about the terminology**, not as an institution |
| Criminal police | **DEFER** | No recurring structural definition found |
| Special investigation unit | **DEFER** | No recurrence established |
| Anti-corruption investigation agency | **DEFER** | Deferred by Waves 5 and 6 already; Wave 8 adds no evidence. The bodies range across investigators, prosecutors, commissions and audit institutions |
| Financial investigation unit | **DEFER** | The brief's caution is correct: many FIUs receive and analyse financial intelligence rather than conduct criminal investigations. Treating them as police agencies would be a category error |
| Organized crime investigation unit | **DEFER** | No recurrence established |
| National investigative agency | **REJECT** | This is "FBI-like agency" with the serial numbers filed off. A named agency is not a global family |

**Zero new institution routes.** This is a finding, not an omission: the investigative material
that recurs across systems is *functional and relational*, and it belongs in guides. The one
candidate with genuine cross-jurisdiction recurrence — judicial police — is precisely the one
whose evidence shows it is not a single institution.

## Published routes and their exclusive intent

| Route | Owns |
| --- | --- |
| `/investigations/who-investigates-crime` | Which institutions hold investigative competence, and why "the police" is an incomplete answer |
| `/investigations/police-vs-prosecutor-investigation` | Who owns an investigation versus who performs it |
| `/investigations/investigative-jurisdiction` | Which institution is legally competent for a given matter |
| `/investigations/judicial-police` | What the term means, and why it means different things |
| `/investigations/investigating-judge` | An office that exists in two incompatible forms under one English name, and judicial authorisation |
| `/investigations/investigation-to-prosecution` | The transition from investigative record to charging decision |

## Boundary compliance

**Prosecution.** No page discusses charging standards, prosecutorial discretion, plea bargaining,
prosecution ethics or prosecution independence. `investigation-to-prosecution` stops at the point
the charge is decided; a test asserts the reserved topics are absent.

**Courts.** No court taxonomy, no trial process, no appellate structure. Judges appear only as
authorisers, directors or reviewers of investigative acts. A test asserts the absence of trial and
appellate material.

**Forensics and evidence.** Named and linked, never re-explained. No page describes collection
technique, preservation method or examination procedure.

**No redirects.** No existing URL was renamed, removed or re-parented. Six URLs were added.
