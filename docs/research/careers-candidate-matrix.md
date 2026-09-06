# Careers candidate matrix — Wave 24

Fifty-six candidates assessed. Verdicts: **PUBLISH 13**, **MERGE 17**, **ALIAS 6**, **DEFER 9**,
**REJECT 7**, **OUT OF PRODUCT SCOPE 4**. A 77% non-publication rate — lower than the deep legal
waves, which is deliberate: Part I asks for the growth-wave threshold rather than the
ultra-conservative one, because a good career page is valuable without revealing a novel
comparative-law distinction.

## PUBLISH — 13

| #   | Route                                                      | Question it owns                                            |
| --- | ---------------------------------------------------------- | ----------------------------------------------------------- |
| 1   | `/law-enforcement/what-a-police-academy-is`                | What is a police academy, and does every country have one?  |
| 2   | `/law-enforcement/do-police-officers-need-a-degree`        | Do you need a university degree to become a police officer? |
| 3   | `/law-enforcement/police-training-and-police-education`    | What is the difference between training and education?      |
| 4   | `/law-enforcement/what-police-recruits-are-taught`         | What subjects are studied in police training?               |
| 5   | `/law-enforcement/rank-role-and-specialisation`            | Is "detective" a rank, a job, or something else?            |
| 6   | `/law-enforcement/how-policing-careers-develop`            | What career paths exist, and how does promotion work?       |
| 7   | `/law-enforcement/specialist-roles-in-policing`            | What specialisations exist in policing?                     |
| 8   | `/law-enforcement/civilian-roles-in-police-organisations`  | Do you have to be an officer to work for the police?        |
| 9   | `/law-enforcement/skills-that-policing-relies-on`          | What skills do police officers need?                        |
| 10  | `/law-enforcement/physical-readiness-in-policing-careers`  | How fit do you have to be?                                  |
| 11  | `/law-enforcement/working-life-in-policing`                | What is the working life actually like?                     |
| 12  | `/law-enforcement/professional-standards-in-policing-work` | What does professional conduct mean in policing?            |
| 13  | `/professions/emergency-dispatcher`                        | What does an emergency dispatcher do?                       |

Plus **seven existing profession records substantially expanded** with working environment, skills,
career progression and adjacent careers: patrol-officer, detective, prosecutor, judge,
forensic-scientist, corrections-officer, defence-lawyer.

**Twenty pages new or substantially expanded**, inside the 15–25 target.

## MERGE — 17

Absorbed into a page above rather than given their own route.

| Candidate                                 | Merged into                                             |
| ----------------------------------------- | ------------------------------------------------------- |
| `what-does-a-police-officer-do`           | `/professions/patrol-officer` — the canonical owner     |
| `what-does-a-patrol-officer-do`           | same                                                    |
| `what-does-a-detective-do`                | `/professions/detective`                                |
| `what-does-a-criminal-investigator-do`    | same — the same role under another label                |
| `detective-vs-police-officer`             | `/law-enforcement/rank-role-and-specialisation`         |
| `detective-vs-criminal-investigator`      | same                                                    |
| `what-does-a-community-police-officer-do` | `/law-enforcement/specialist-roles-in-policing`         |
| `what-does-a-traffic-police-officer-do`   | same                                                    |
| `what-does-a-k9-officer-do`               | same                                                    |
| `what-does-a-mounted-police-officer-do`   | same                                                    |
| `moving-from-patrol-to-investigation`     | `/law-enforcement/how-policing-careers-develop`         |
| `police-ranks-and-career-progression`     | `/law-enforcement/rank-role-and-specialisation`         |
| `how-police-promotion-works`              | `/law-enforcement/how-policing-careers-develop`         |
| `leadership-in-policing`                  | same                                                    |
| `classroom-vs-practical-police-training`  | `/law-enforcement/police-training-and-police-education` |
| `communication-training-for-police`       | `/law-enforcement/skills-that-policing-relies-on`       |
| `report-writing-in-policing`              | same, and `/law-enforcement/working-life-in-policing`   |

## ALIAS — 6

Same question in different words; the canonical page answers it.

`police-academy` → #1. `police-education-requirements` → #2. `police-officer-skills` → #9.
`police-specialisations` → #7. `police-shift-work` → #11. `sworn-vs-civilian-law-enforcement-careers`
→ #8.

## DEFER — 9

Wanted, but not on evidence this wave obtained.

| Candidate                                       | Why deferred                                                                                                                                                                        |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `corrections-officer-career` (expanded page)    | The record was expanded; a standalone comparative page needs corrections-specific training evidence that was not researched                                                         |
| `forensic-scientist-career`                     | same                                                                                                                                                                                |
| `prosecutor-career`                             | Legal-qualification routes differ so much that a comparative page needs at least four researched systems; none was researched for this wave                                         |
| `judge-career-path`                             | same                                                                                                                                                                                |
| `defence-lawyer-career`                         | same                                                                                                                                                                                |
| `court-administration-careers`                  | No court-administration source was obtained                                                                                                                                         |
| `crime-analyst-career` (as a routed profession) | **Removed during the wave.** Drafted, then withdrawn when the reference publication gate showed it could not be anchored in a researched country example. Covered inside #8 instead |
| `police-academies-around-the-world`             | Would need far more than five systems to justify the title                                                                                                                          |
| `degree-vs-academy-models`                      | The distinction is real and is covered by #3; a separate comparative page needs more systems                                                                                        |

## REJECT — 7

| Candidate                                     | Reason                                                                                                       |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `/careers` and `/careers/[slug]`              | Would cannibalise `/professions` by construction. See the architecture decision                              |
| `how-to-become-a-police-officer-in-<country>` | Part V. Requirements change and are employer-set; a maintained country layer is a later wave's work          |
| `police-salary` / `average-police-salary`     | Part AA, and `compensation` is a restricted claim category                                                   |
| `best-police-academies`                       | Ranking educational providers is precisely what Part Y forbids the commercial layer from buying              |
| `police-fitness-test-preparation`             | Part N. A preparation programme is physical-training advice to strangers, and needs a separate safety review |
| `is-policing-right-for-me`                    | Individualised guidance, which Part AH excludes                                                              |
| `police-recruitment-tips`                     | Application coaching, not institutional education                                                            |

## OUT OF PRODUCT SCOPE — 4

Part G. These are legal-procedure subjects that surfaced during research and are **not** logged as
a future legal wave.

| Subject                                           | Where it surfaced                                                                                                   |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Police powers of arrest, procedure and thresholds | Repeatedly, in training curricula. Used only as the minimum context needed to explain what recruits are taught      |
| Evidence-handling and disclosure procedure        | In the detective role. Named as a professional duty; the procedure is not described                                 |
| Interview and interrogation procedure             | In the detective role and in training curricula. Named as a trained skill governed by law; no technique appears     |
| Recruitment appeal and vetting challenge routes   | In official recruitment material. Excluded under Part AH — describing them invites individual eligibility questions |

## The distinction that decided the shape

Every candidate was tested against one question: **is this about one role, or about something that
crosses roles?** A question about one role belongs on `/professions/[slug]`, which already exists,
already carries the institution links, and already passes a publication gate. A question that
crosses roles — academies, degrees, ranks, skills, working life — has no owner, and that is the
layer this wave built.

The test also decided the rejections. `/careers/detective` fails it because the question is about
one role and already has an owner.
