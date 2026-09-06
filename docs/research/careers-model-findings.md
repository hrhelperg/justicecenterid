# Careers and training — model findings

Wave 24. Five systems, researched to content-confirmed Tier 1 sources on 5–6 September 2026:
England and Wales, Ireland, Germany (Berlin), the Netherlands and the United States. Every
statement is about what those official sources say, on that date.

## 1. The finding that reorganises the comparison

**In the Netherlands, investigation is an entry route, not a promotion.**

The national police list five entry programmes: a two-year `politieopleiding mbo 4-niveau`, and
four three-year hbo bachelors — `bachelor Politiekunde Politieagent`, `bachelor Politiekunde
Wijkagent`, **`bachelor Rechercheur`**, and `bachelor Politieleider`.

Investigator and community officer are not stages a person reaches after years in uniform. They are
programmes a person can be admitted to. So is police leader.

That single fact changes what "how do I become a detective" means. In systems where investigation
follows service in uniform, the answer is about qualifying periods and selection. In the
Netherlands it is about applying to a bachelor programme. The word _detective_ names an
occupational entry route in one system and a later assignment in another, and nothing in the word
distinguishes them — which is why rank, role, specialisation and assignment needed their own page
rather than a paragraph.

## 2. No researched system requires a degree, and two award one

| System                   | Entry qualification                                                                                     | Award for completing training                           |
| ------------------------ | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| England and Wales        | Level 3 in at least two subjects, or equivalent experience                                              | Level 6 Degree in Professional Policing Practice (PCDA) |
| Ireland                  | Leaving Certificate D3/O6 in five subjects at Ordinary Level, or NFQ Level 5 Major award, or comparable | Associated with a BA in Applied Policing                |
| Berlin, mittlerer Dienst | Erweiterte Berufsbildungsreife, or Berufsbildungsreife plus vocational training and work                | Appointment as Polizeimeisterin/Polizeimeister          |
| Berlin, gehobener Dienst | "mindestens die Fachhochschulreife bzw. das Abitur"                                                     | "Bachelor of Arts (B. A.)"                              |
| Netherlands              | mbo-4 or hbo level; specific prior qualification NOT RESEARCHED                                         | Four routes are named bachelor programmes               |

The official recruitment service for England and Wales states it in five words: **"You don't need a
degree to join the police."**

The confusion is structural rather than accidental. The route is called the Police Constable
_Degree_ Apprenticeship because it _awards_ a degree. Reading the award as the requirement inverts
the arrangement, and the name invites exactly that reading.

## 3. "Police academy" does not travel

Of the five systems, only the United States material uses _academy_ as the ordinary term.

| System            | Structure                                                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- |
| United States     | Decentralised. Academies run by law enforcement agencies **and** by colleges and technical schools; no national programme |
| Ireland           | One national college, one phased programme — Garda College, Templemore                                                    |
| Netherlands       | One national Politieacademie offering six programmes at two education levels                                              |
| Berlin            | Two service tracks, one of them a three-year course of study in 15 modules                                                |
| England and Wales | No academy — parallel entry routes delivered with higher education providers                                              |

Asking "what is the police academy like in country X" presupposes a structure four of the five do
not have.

## 4. There is no single answer inside one country either

The Bureau of Justice Statistics 2022 census of United States training academies records an average
of **806 hours** of core basic training. The average conceals the finding:

| Academy type                       | Average hours |
| ---------------------------------- | ------------- |
| State POST or equivalent           | 681           |
| Sheriff's office                   | 734           |
| Academies run by two-year colleges | 759           |
| State police / highway patrol      | 969           |

The longest is roughly 40% longer than the shortest, inside one country. An average across that
range describes no individual academy's timetable.

## 5. The curriculum is not what the popular image says

Average hours of instruction, same census:

| Subject                         | Hours |
| ------------------------------- | ----- |
| Firearms skills                 | 73    |
| Defensive tactics               | 64    |
| Health and fitness              | 56    |
| Criminal and constitutional law | 51    |
| Traffic law                     | 26    |
| Juvenile justice law            | 10    |

**Legal subjects together average 87 hours** — more than firearms skills, and more than defensive
tactics. Over 97% of recruits were instructed in legal subjects; over 80% in at least one
community-related topic. Skill or proficiency assessments were the most common formal test, with
97% of academies requiring an average of 16; 95% required written and physical fitness assessments.

## 6. Formal instruction is a minority of supervised preparation

The same census records that **89.2%** of academies reported mandatory field training after basic
training for some or all recruits, averaging **503 hours**. Ireland alternates residential stages
with an observational placement in an operational station. The Netherlands splits between the
academy and the region of posting. In every researched system, classroom time is one component of a
longer structure.

## 7. Whether you are an officer during training differs

In England and Wales an apprentice is "a police officer from your first day on the job". In Ireland
a trainee attests after 36 weeks and then enters a probationary period. In Berlin the mittlerer
Dienst leads to a Beamtenverhältnis auf Probe on completion. The same question has three different
answers.

## 8. Police organisations are not composed only of sworn officers

The Dutch national police describe the control-room role, `centralist meldkamer`, in one sentence
carrying both halves of the job: _"je neemt de spoedeisende meldingen (112) aan en stuurt de
eenheden op straat aan"_ — you take the emergency 112 reports and direct the units on the street.

The official page does **not** state whether the role is held by civilian staff or sworn officers,
and this platform does not assert it. What the example establishes is narrower and still useful: a
decision-making role inside a police organisation, defined by neither rank nor police powers.

## 9. Structured data: `Occupation` was evaluated and declined

Part Z asks whether `Occupation` is appropriate and warns against implementing it because the
schema exists. It was checked against Schema.org semantics rather than assumed.

`Occupation` describes an occupation **in a labour market**. Its properties are
`estimatedSalary`, `occupationalCategory`, `experienceRequirements`, `qualifications`,
`occupationLocation`, `responsibilities`. This wave publishes **no salary**, and the entire finding
above is that qualifications and requirements are jurisdiction-specific and employer-set — so
`qualifications` and `occupationalCategory` could only be populated by inventing them, and
`estimatedSalary` is excluded by policy.

Emitting the type with those properties absent would still assert the labour-market frame, because
the type carries it. **Declined.** The pages remain modelled as they were, and an e2e test walks
every `@type` and fails on `Occupation`, `JobPosting`, `Course` and
`EducationalOccupationalProgram`.

## 10. The product-scope guard, and why it is proportional

Part AJ asks for a safeguard against career pages drifting into procedural law, and warns that it
must not break "A detective may prepare material used by prosecutors and courts."

Keyword matching cannot do this. The legitimate sentence contains _prosecutors_ and _courts_; a
page that has become a filing manual may contain neither. The guard therefore counts
procedural-depth sentences both as a **proportion** of the page and as an **absolute count**, and
separately fires on **step-sequenced procedural instruction** at any proportion.

Mutation W24M6 proved the first version inadequate: three procedural paragraphs on a long page
stayed under the 8% share, and the how-to pattern required a comma after "first" that the injected
text did not have. Both were fixed and re-proved. All twelve career pages currently carry **zero**
procedural-depth sentences.

## Sources

| Id                                    | Publisher                                           | Access                                |
| ------------------------------------- | --------------------------------------------------- | ------------------------------------- |
| `ew-joining-police-entry-routes`      | Join the Police (England and Wales)                 | content-confirmed                     |
| `ie-garda-trainee-booklet-2024`       | An Garda Síochána / Public Appointments Service     | content-confirmed (PDF read directly) |
| `ie-garda-educational-requirements`   | An Garda Síochána                                   | content-confirmed                     |
| `de-berlin-polizei-ausbildung`        | Polizei Berlin                                      | content-confirmed                     |
| `de-berlin-polizei-studium`           | Polizei Berlin                                      | content-confirmed                     |
| `nl-politieacademie-basisopleidingen` | Politieacademie                                     | content-confirmed                     |
| `nl-politie-opleidingsoverzicht`      | Nationale Politie                                   | content-confirmed                     |
| `nl-politie-meldkamer`                | Nationale Politie                                   | content-confirmed                     |
| `us-bjs-training-academies-2022`      | Bureau of Justice Statistics, June 2025, NCJ 310041 | content-confirmed (PDF read directly) |

**Access failures, recorded not worked around:** `college.police.uk` returned HTTP 403 to four URL
forms; `post.ca.gov` refused connections; `police-nationale.interieur.gouv.fr` returned HTTP 403 to
both attempted paths. **France is described nowhere in this wave**, and no California-specific claim
appears. No search-engine summary was promoted to evidence.

## What was deliberately not published

- **Any pay figure.** Encountered in official Irish, German and English recruitment material.
  Excluded under Part AA and the `compensation` restricted-claim category.
- **Any fitness standard, test or preparation programme.** Excluded under Part N.
- **Any vetting, medical or background-screening criterion.** Excluded under Part AH.
- **Any country-specific "how to become" page.** Excluded under Part V.
- **Any ranking of academies, universities, forces or employers.** Excluded under Part Y.
