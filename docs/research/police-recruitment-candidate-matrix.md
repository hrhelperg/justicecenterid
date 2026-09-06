# Police recruitment candidate matrix

Sixty-two candidates assessed. **PUBLISH 10, MERGE 16, ALIAS 7, DEFER 12, REJECT 11,
OUT OF PRODUCT SCOPE 6.** An 84% non-publication rate — higher than Wave 24, because recruitment
facts decay and a page that cannot be maintained is worse than no page.

## PUBLISH — 10

### Country recruitment modules (5)

| Route                                         | Why it earns a page                                                |
| --------------------------------------------- | ------------------------------------------------------------------ |
| `/countries/ireland/police-recruitment`       | Richest official evidence; demonstrates every scope rule at once   |
| `/countries/netherlands/police-recruitment`   | Nationality genuinely required; entry organised by education route |
| `/countries/new-zealand/police-recruitment`   | Centralised; states expressly that no upper age limit exists       |
| `/countries/germany/police-recruitment`       | Published as Länder fragmentation, not German requirements         |
| `/countries/united-states/police-recruitment` | Published as the decentralised model, stating no requirement       |

### Comparative guides (5)

| Route                                                                          | Question it owns                              |
| ------------------------------------------------------------------------------ | --------------------------------------------- |
| `/law-enforcement/who-recruits-police-officers`                                | Who actually recruits police officers?        |
| `/law-enforcement/citizenship-nationality-and-residency-in-police-recruitment` | Do you have to be a citizen?                  |
| `/law-enforcement/when-a-recruitment-requirement-is-campaign-specific`         | Is a requirement permanent or one round's?    |
| `/law-enforcement/how-police-selection-is-structured`                          | What happens between applying and training?   |
| `/law-enforcement/police-entry-requirements-across-systems`                    | How do requirements differ between countries? |

Ten pages — inside the 10–18 target, at the conservative end deliberately.

## MERGE — 16

`how-to-become-a-police-officer-in-ireland`, `how-police-recruitment-works-in-the-netherlands`,
`how-police-recruitment-works-in-germany`, `how-police-recruitment-works-in-the-united-states`,
`how-police-recruitment-works-in-new-zealand` → the country modules, which are the canonical owner.

`police-entry-requirements`, `police-education-requirements`, `police-age-requirements`,
`citizenship-and-police-recruitment`, `residency-and-police-recruitment`,
`language-requirements-for-police`, `driving-licence-and-police-careers` → the comparative guides.

`police-recruitment-process`, `police-recruitment-interviews`, `trainee-police-officers`,
`police-probation` → `how-police-selection-is-structured` and the country modules.

## ALIAS — 7

`join-the-police-ireland` → Ireland module. `police-requirements-nz` → New Zealand module.
`german-police-requirements` → Germany module (which explains why the phrase misleads).
`us-police-requirements` → United States module (same). `who-hires-police` → who recruits.
`police-nationality-requirements` → citizenship page. `police-entry-requirements-by-country` →
entry requirements across systems.

## DEFER — 12

| Candidate                                                                 | Why                                                                                            |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `how-to-join-the-police-in-czechia`                                       | **Only source is archived and self-declares it may not be current**                            |
| Norway recruitment                                                        | Official admission path returns HTTP 404                                                       |
| France, Poland, Spain, Canada, Australia recruitment                      | NOT RESEARCHED; France blocked in Wave 24                                                      |
| `police-apprenticeships`, `degree-entry-policing`, `police-college-entry` | Wave 24 owns the training-route layer; a recruitment-side page needs evidence not obtained     |
| `police-medical-assessment`                                               | Would need official standards to be more than a stub, and publishing them raises Part R issues |
| `police-fitness-assessment`                                               | Same, plus Part Q                                                                              |

## REJECT — 11

| Candidate                                              | Reason                                                                           |
| ------------------------------------------------------ | -------------------------------------------------------------------------------- |
| `how-to-pass-police-vetting`                           | Part S. Tactical evasion; a guard and mutation proof W25M8 enforce it            |
| `how-to-pass-police-medical`                           | Part R. Concealment; W25M9                                                       |
| `how-to-pass-police-interview`                         | Part U. Gaming; W25M10                                                           |
| `how-to-pass-police-fitness-test`                      | Part Q                                                                           |
| `reasons-police-applications-are-rejected`             | Invites individualised inference from scattered rules                            |
| `appeal-a-police-recruitment-decision`                 | Part AK. **OUT OF PRODUCT SCOPE**, and W25M13 enforces it                        |
| `can-i-become-a-police-officer-with-a-criminal-record` | Part T. Evidence insufficient, and any answer would be individualised. See below |
| `police-salary-by-country`                             | Part AS; `compensation` restricted category                                      |
| `easiest-country-to-become-a-police-officer`           | Incompatible with the trust model; W25M15                                        |
| `police-vacancies` / `now-recruiting`                  | Part AB. Requires a maintained real-time product                                 |
| `/careers/police` route family                         | Would split canonical ownership with the country modules                         |

### On criminal history specifically (Part T)

The brief permits publication only if the page makes clear that rules vary, that offence type and
elapsed time may matter, that the recruiting body assesses suitability, and that jurisdiction-specific
official rules control. **Deferred rather than published.** Two systems name conviction disclosure
as a requirement; neither publishes the criteria applied. A page built on that would consist almost
entirely of "it depends", and every reader would still be asking the individualised question the
platform must not answer.

## OUT OF PRODUCT SCOPE — 6

Not logged as a future legal wave (Part AK): recruitment appeal procedure; administrative review of
appointment decisions; discrimination litigation arising from selection; procedural remedies against
a recruiting authority; judicial review of vetting; and the internal disciplinary procedure applying
to probationers.

Legal material **was** used where it establishes a recruitment fact — the Irish Admissions and
Appointments Regulations, and Czech zákon č. 361/2003 Sb. as the instrument the archived page points
to — because "a durable legal basis exists behind this campaign document" is itself a recruitment
fact, and the distinction between the two layers is the wave's temporal model.

## The test that decided the shape

**Can this page name who recruits, what the routes are, what verified requirements apply, how
selection is broadly structured, where training happens, and where the reader verifies the current
position?** Six answers, or no page. Czechia failed on the fourth and sixth; Norway on all of them.
