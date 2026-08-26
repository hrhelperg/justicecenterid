# Wave 16 — Forensics & Evidence Systems

Branch `feat/knowledge-expansion-waves-16-18`. Researched and written 2026-08-26. No push.

`/forensics` held **one** guide. It is the thinnest routed section on the platform and the
largest genuine gap in the corpus.

## 1. What already exists, and what may therefore not be repeated

| Surface                                            | What it establishes                                                                                                                                                                                                                                                |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/forensics` section page                          | Five key ideas: forensic science answers narrow questions; interpretation is not measurement; scientific foundation varies by discipline; quality systems are part of the evidence; expert evidence is meant to be challenged.                                     |
| `/forensics/what-is-forensic-science`              | The definition; the narrow-questions point; that a result does not establish who committed an offence; the NAS 2009 finding of variation between disciplines; NIST foundation-review and standards work; contestability. Lives in `src/content/guides/process.ts`. |
| `/professions/forensic-scientist`                  | The role, its limits, the duty to the court over the instructing party, laboratory placement (police / state institute / private provider), NAS 2009, accreditation and proficiency testing as oversight.                                                          |
| `/glossary`                                        | `forensic-science`, `evidence`, `chain-of-custody` (routed), `expert-evidence`, `accreditation`, `standard-of-proof`, `disclosure`.                                                                                                                                |
| `/investigations/what-is-a-criminal-investigation` | Investigation as a legally constrained activity.                                                                                                                                                                                                                   |

The section page and the single guide already carry the **general** case for forensic humility.
Wave 16 may not restate it. What is absent everywhere is the **institutional and procedural**
layer: who appoints the expert, what a report must contain, who regulates quality and with what
sanction, who investigates a death, what a statute permits a DNA sample to be asked, and what
the published scientific-foundation work actually found.

## 2. Candidate matrix

Every candidate from the brief, classified. `PUBLISH` = routed this wave. `MERGE` = folded into
a published page. `DEFER` = real topic, evidence not obtained. `REJECT` = should not exist here.

### Foundation

| Candidate                               | Decision                                             | Reason                                                                                |
| --------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------- |
| what-is-forensic-science                | **EXISTS**                                           | Owned by the current guide. Untouched.                                                |
| why-forensic-science-matters            | REJECT                                               | Would restate the existing guide's `whyItExists`.                                     |
| forensic-science-and-the-justice-system | **PUBLISH** as `what-forensic-science-cannot-decide` | The brief requires a boundary page. Framed as the boundary, not as a second overview. |
| forensic-evidence-vs-other-evidence     | MERGE                                                | Into the boundary page.                                                               |
| what-forensic-laboratories-do           | **PUBLISH**                                          | Institutional; nothing covers it. NL / E+W / DE contrast.                             |
| forensic-science-quality-assurance      | **PUBLISH** as `who-regulates-forensic-science`      | FSR Act 2021 gives a statutory anchor no other topic here has.                        |
| forensic-accreditation                  | MERGE                                                | Into the regulation page; the glossary owns the definition.                           |
| limitations-of-forensic-evidence        | **PUBLISH** as `the-limits-of-forensic-evidence`     | Brief requires it. NISTIR 8351 supplies specifics the existing guide lacks.           |
| forensic-error-and-uncertainty          | MERGE                                                | Into the limits page — one page, not two.                                             |
| expert-evidence                         | **PUBLISH** as `expert-evidence-in-court`            | The DE/E+W structural contrast is the strongest single finding of the wave.           |
| expert-witnesses                        | MERGE                                                | Into expert-evidence-in-court.                                                        |
| forensic-reports                        | MERGE                                                | CrimPR 19.4 content list sits inside expert-evidence-in-court.                        |
| forensic-science-and-courts             | MERGE                                                | Same page.                                                                            |

### Evidence systems

| Candidate                                            | Decision                                              | Reason                                                                                                                                                         |
| ---------------------------------------------------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| chain-of-custody                                     | **PUBLISH** as `evidence-integrity-and-admissibility` | Glossary owns the definition; the guide owns the distinction between integrity and admissibility, which nothing covers.                                        |
| evidence-preservation / authentication / integrity   | MERGE                                                 | Same page.                                                                                                                                                     |
| physical / documentary / biological / trace evidence | DEFER                                                 | No authoritative source obtained that distinguishes them institutionally rather than technically. Categorising them from general knowledge would be invention. |
| digital-evidence                                     | DEFER                                                 | Highest operational-risk topic in the wave and the one where no primary institutional source was obtained. Deferred on both grounds.                           |

### Disciplines

| Candidate                                                           | Decision                                       | Reason                                                                                                                                                                     |
| ------------------------------------------------------------------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| forensic-dna-analysis                                               | **PUBLISH** as `what-dna-analysis-establishes` | StGB/StPO § 81e bounds it in statute; NISTIR 8351 bounds it in science. Both primary.                                                                                      |
| forensic-pathology / forensic-medicine / medical-examiner / coroner | **PUBLISH** as `who-investigates-a-death`      | One page, because the four are the same question answered differently.                                                                                                     |
| fingerprint-examination                                             | DEFER                                          | No final NIST foundation review; the discipline's terminology dispute could not be sourced to a primary institutional statement.                                           |
| firearms-examination / ballistics                                   | DEFER                                          | NIST review page exists; no final report obtained.                                                                                                                         |
| forensic-toxicology / chemistry / anthropology / odontology         | DEFER                                          | No primary institutional source obtained for any. Bitemark analysis has only a **draft** NIST review (NISTIR 8352-DRAFT); a draft is not authority for a limitation claim. |

### Institutions and professions

| Candidate                                                                | Decision   | Reason                                                                                                                                 |
| ------------------------------------------------------------------------ | ---------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `/institutions/forensic-laboratory`                                      | **REJECT** | See §4. The arrangements differ in kind, not in design.                                                                                |
| `/professions/forensic-scientist`                                        | **EXISTS** | Untouched.                                                                                                                             |
| medical-examiner / coroner / forensic-pathologist as profession records  | DEFER      | Would require qualification-route and appointment evidence not obtained. The comparative material lives in `who-investigates-a-death`. |
| forensic-toxicologist / digital-forensic-examiner / fingerprint-examiner | REJECT     | No evidence of a recurring institutional role distinct from `forensic-scientist`.                                                      |

**Published: 8 routes.** Target was 8–16. Eight is what the evidence carries, and the brief is
explicit that this is not a quota.

## 3. Evidence obtained

Ten new source records, all read at the authoritative publisher.

| Source id                            | Instrument                                        | Establishes                                                                                                               |
| ------------------------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `uk-fsr-act-2021`                    | Forensic Science Regulator Act 2021 ss. 1–7       | A statutory regulator; a code Parliament must approve; the sanction is evidential, not penal                              |
| `uk-fsr-about`                       | Forensic Science Regulator, "About us" (GOV.UK)   | Mixed provision — private companies, public labs, police forces, individuals — under one standards regime                 |
| `uk-crimpr-2025-part19`              | Criminal Procedure Rules 2025 Part 19             | Expert's duty overrides the instructing party; the required report content list                                           |
| `uk-coroners-justice-act-2009`       | Coroners and Justice Act 2009 ss. 1, 19           | Mandatory coronial investigation, including death in state detention; medical examiners as a separate office              |
| `de-stpo-87-leichenschau`            | StPO § 87                                         | Prosecution conducts the external examination; the judge orders the autopsy; two physicians; the treating doctor excluded |
| `de-stpo-73-78-sachverstaendiger`    | StPO §§ 73, 78                                    | The judge selects the experts and directs their activity                                                                  |
| `de-stpo-81e-dna`                    | StPO § 81e                                        | What a molecular-genetic examination may determine — and that other findings are inadmissible                             |
| `nist-ir-8351-dna-mixtures`          | NISTIR 8351 (December 2024, final)                | Different laboratories can produce a wide range of results interpreting the same DNA mixture                              |
| `nist-scientific-foundation-reviews` | NIST Scientific Foundation Reviews programme page | The review programme, its method, and what it is for                                                                      |
| `nl-nfi-about`                       | Netherlands Forensic Institute, "About the NFI"   | A national forensic institute inside the Ministry of Justice and Security                                                 |

Reused from the corpus: `nas-forensic-2009`, `nist-forensic-science`, `enfsi`.

### 3.1 Source-integrity decisions

- **The NIST DNA report was taken in its final form, not its draft.** The draft (NISTIR
  8351-DRAFT, June 2021) was fetched first. The programme page revealed a final December 2024
  version, which was fetched and used. A draft is not authority for a load-bearing claim.
- **The bitemark review was rejected as a source.** NISTIR 8352 remains a **draft** with its
  comment period closed. NIST's own news release characterises the draft finding, but a draft
  cannot support a claim that a discipline lacks scientific foundation. The _existence and
  status_ of the review is cited on the limits page as a fact about the programme; nothing is
  quoted from the draft.
- **The Criminal Procedure Rules 2020 were revoked.** SI 2020/759 Part 19 was fetched first and
  legislation.gov.uk showed it revoked on 6 October 2025 by SI 2025/909. The current 2025 Rules
  were fetched instead. Assuming the 2020 Rules were current would have produced a page citing
  revoked law.

## 4. Why no `/institutions/forensic-laboratory` record

Three systems, three arrangements that are not variants of one another:

- **Netherlands** — the Netherlands Forensic Institute, a body of the **Ministry of Justice and
  Security**, describing itself as a centre of knowledge and expertise with nearly forty areas
  of expertise.
- **England and Wales** — **no** national forensic service. Provision is mixed: the Regulator's
  own statement of priorities names "private companies, public laboratories, police forces or
  individuals" as providers to whom standards apply equally. The unifying institution is a
  **regulator**, not a laboratory.
- **Germany** — statute presupposes public forensic-medical and pathological **institutes**:
  StPO § 87(2) requires that one of the two physicians performing an autopsy be a court
  physician or the head of a public forensic-medical or pathological institute, or a physician
  of that institute with forensic-medical expertise.

An institution record needs a recurring form with `presenceNote`, `countryExamples` and
`counterExamples`. Here the third system has no member of the family: its answer to "who does
forensic science" is "a regulated market". Forcing a taxonomy would require inventing a category
for England and Wales or excluding it silently. The comparison lives in
`what-forensic-laboratories-do` as prose. This is the **eighth consecutive wave** in which the
recurring thing is a function whose institutional embodiments differ in kind.

## 5. Safety posture

`forensics` is already in `SAFETY_SENSITIVE_SECTIONS`, so every guide requires a completed
safety review before publication.

Nothing in this wave describes how a technique is performed, how a result could be defeated,
avoided, degraded or contaminated, how a device could be sanitised, or how any threshold could
be exploited. `digital-evidence` was deferred partly on that ground: it is the topic where the
line between institutional description and anti-forensic instruction is thinnest, and no primary
institutional source was obtained that would let the page stay on the right side of it.

The wave adds an **anti-forensics tripwire** to the test suite. It is directional rather than
lexical: a sentence is only an offence if it is an affirmative operational instruction, so a
sentence saying the site does _not_ provide such material must not fire. That distinction is
mutation-tested in both directions.

## 6. Scientific-integrity posture

Forbidden formulations, each tested for: "DNA proves guilt"; "fingerprints are infallible";
"ballistics can always identify the exact gun"; unqualified "forensic science is objective";
"scientific evidence cannot be wrong"; "coroner = medical examiner"; "forensic scientist =
police officer"; "the expert witness decides the case".

Terminology differences preserved rather than harmonised: coroner vs medical examiner (both
exist in England and Wales and do different things; Germany has neither); _Leichenschau_ vs
_Leichenöffnung_; court-appointed vs party-instructed expert; integrity vs admissibility.
