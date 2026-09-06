# Careers source register — Wave 24

Every source below was **content-confirmed**: the URL was fetched and the document read. No URL was
guessed, and no fact in this wave rests on a search-engine summary.

## Sources added

| Id                                    | Publisher                                                                      | Document                                                                                                                              | Verified   | Method                                |
| ------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------- |
| `ew-joining-police-entry-routes`      | Police Digital Service / national police recruitment service (England & Wales) | Join the Police — entry routes into policing                                                                                          | 2026-09-06 | content-confirmed                     |
| `ie-garda-trainee-booklet-2024`       | An Garda Síochána / Public Appointments Service                                | Candidate Information Booklet, Garda Trainee 2024 (PDF)                                                                               | 2026-09-06 | content-confirmed                     |
| `ie-garda-educational-requirements`   | An Garda Síochána                                                              | Careers FAQ — What are the educational requirements?                                                                                  | 2026-09-06 | content-confirmed                     |
| `de-berlin-polizei-ausbildung`        | Polizei Berlin                                                                 | Ausbildung (mittlerer Dienst) — Polizistin/Polizist werden                                                                            | 2026-09-06 | content-confirmed                     |
| `de-berlin-polizei-studium`           | Polizei Berlin                                                                 | Studium (gehobener Dienst) — Polizistin/Polizist werden                                                                               | 2026-09-06 | content-confirmed                     |
| `nl-politieacademie-basisopleidingen` | Politieacademie                                                                | Basispolitieopleidingen                                                                                                               | 2026-09-06 | content-confirmed                     |
| `nl-politie-opleidingsoverzicht`      | Nationale Politie                                                              | Overzicht politieopleidingen                                                                                                          | 2026-09-06 | content-confirmed                     |
| `us-bjs-training-academies-2022`      | Bureau of Justice Statistics, U.S. Department of Justice                       | State and Local Law Enforcement Training Academies' Training Topics and Instructors, 2022 — Statistical Tables, June 2025, NCJ 310041 | 2026-09-06 | content-confirmed (PDF read directly) |

## What each source supports, and what it does not

- **`ew-joining-police-entry-routes`** supports the PCDA route name, its three-year duration, the
  Level 3 entry qualification, the Level 6 degree outcome, employment from day one, and the
  sentence "You don't need a degree to join the police." It does **not** establish anything about
  Scotland or Northern Ireland, which have separate services and were not researched.
- **`ie-garda-trainee-booklet-2024`** supports the Foundation Training Programme phase structure,
  the 36-week Phase I, the Garda College at Templemore, attestation after 36 weeks, and the
  eligibility criteria. It is tied to the **2024 competition** and is not a standing statement of
  Irish law. Pay figures in it are deliberately not used.
- **`ie-garda-educational-requirements`** supports the three alternative educational routes and
  the language requirement.
- **`de-berlin-polizei-ausbildung`** and **`de-berlin-polizei-studium`** support the two Berlin
  tracks, their durations, their entry qualifications and their outcomes. They establish nothing
  about the other fifteen German Länder or the Bundespolizei, each of which recruits separately.
- **`nl-politieacademie-basisopleidingen`** supports the mbo-4 route at two years and the
  academy-plus-region structure. **`nl-politie-opleidingsoverzicht`** supports the five named
  routes and their durations.
- **`us-bjs-training-academies-2022`** supports the hour averages, the academy-type breakdown, the
  field-training percentages and the subject-hour table, all for **2022**, all for state and local
  academies in the United States. It establishes nothing about federal agencies and nothing about
  any other country.

## Access failures — recorded, not worked around

| Host                                 | Attempted                                                                      | Result                                                                                                                                                                                                                                                                                                |
| ------------------------------------ | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `college.police.uk`                  | 4 URL forms including the article page, the print/PDF node and an S3 asset PDF | **HTTP 403** on every form. The College of Policing is the authoritative body for the England & Wales entry routes; because it could not be read, route facts are cited to the official recruitment service instead, and the PCEP start date is recorded as PARTIALLY ESTABLISHED rather than quoted. |
| `post.ca.gov`                        | 2 URLs (selection standards, basic training)                                   | **connect ECONNREFUSED**. No California-specific claim appears in this wave.                                                                                                                                                                                                                          |
| `police-nationale.interieur.gouv.fr` | 2 URLs (concours externe, training FAQ)                                        | **HTTP 403** on both. **France is not described anywhere in this wave.**                                                                                                                                                                                                                              |
| `garda.ie` training page             | 1 URL                                                                          | HTTP 403; the same facts were obtained from the official PDF booklet instead.                                                                                                                                                                                                                         |

In each case the fact was either obtained from another Tier 1 source or **not asserted**. No
search-engine summary was promoted to evidence.

## Deliberate exclusions

- **Pay and allowances.** Encountered in the Garda booklet and referenced on German and English
  recruitment pages. Excluded under Part AA and the `compensation` restricted-claim category.
- **Physical fitness test standards.** Encountered as named tests. Excluded under Part N: this wave
  is educational orientation only, and publishing a specific standard invites it to be read as a
  training target.
- **Medical, vetting and background-screening criteria.** Excluded under Part AH — describing them
  invites individual eligibility questions this platform must not answer.
- **Age limits.** Quoted only where they appear inside a broader entry-requirement quotation, and
  never presented as a general rule.
