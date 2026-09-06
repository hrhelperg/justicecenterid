# Police recruitment — model findings

Wave 25. Six systems, content-confirmed against Tier 1 official sources on 6 September 2026. Every
statement below is about what those sources say, on that date.

## 1. "You must be a citizen" is wrong in three of four systems

The single most repeated claim about police recruitment, and the four researched rules ask four
different questions.

| System              | The actual condition                                                                                                                                                                                                                                                                           |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ireland**         | A national of an EU Member State, EEA State, the UK or Switzerland; **or** refugee or subsidiary protection status (or a family member), with the declaration in force throughout the process; **or** one continuous year of residence plus four years' total residence in the preceding eight |
| **England & Wales** | "no restrictions on your right to live and work in the UK"                                                                                                                                                                                                                                     |
| **New Zealand**     | "a New Zealand or Australian citizen or have New Zealand residency or New Zealand permanent residency"                                                                                                                                                                                         |
| **Netherlands**     | Dutch nationality, and it "mag ook je tweede nationaliteit zijn"                                                                                                                                                                                                                               |

Only the Netherlands requires nationality outright. Ireland's condition is the most structurally
interesting rule read for this wave: **nationality of a group of states, an international-protection
status, and a residence history are three separate routes to one threshold.** Writing it as "you
must be an Irish citizen" excludes, on paper, most of the people the rule admits — and nothing was
mistranslated. A category was replaced with a narrower one.

## 2. Two age thresholds, and one system that closes the inference

England & Wales: "You can now apply to join the police service at age 17, though you'll need to wait
until you're 18 before you can officially become a police officer."

New Zealand: "You must be at least 17 years old to apply and 18 when you start at Police College",
and — unusually — **"There's no upper age limit."**

Two findings. First, **applying and being appointed are separate events with separate rules**, and a
single "minimum age" collapses them. Second, most sources are silent about a maximum, and silence is
not an absence. New Zealand says so explicitly; where a source does not, this wave infers nothing.

## 3. The Irish age window belongs to a competition, not to the service

The 2024 booklet requires an applicant to "be 18 years of age but not yet 50 years of age **at
midnight on Thursday, 8th of February 2024**".

That is one competition's window, measured against its closing date. The same booklet separately
names the durable basis: the Garda Síochána (Admissions & Appointments) Regulations 2013, as amended
by S.I. 602/2020, S.I. 757/2021 and S.I. 611/2023.

**Two layers, two lifespans, in one document, unlabelled.** This platform therefore publishes no
Irish police age requirement at all. The error that produces "the Irish police age limit is 18 to
49" is one of scope, not of fact — which is precisely why it survives fact-checking and spreads.

## 4. Two of six systems have no national requirement to state

**Germany.** Each Land recruits separately and the Bundespolizei separately again. Berlin runs a
mittlerer Dienst (Vorbereitungsdienst, "2 ½ Jahre") and a gehobener Dienst ("Das Studium dauert 3
Jahre", awarding a Bachelor of Arts). Bavaria organises by Qualifikationsebene, with a 2. QE
Ausbildung of "2,5 Jahre" in five six-month sections. Different vocabulary, different structures,
separate recruiters. **The comparison is the finding**: not a German rule, but the absence of one.

**United States.** Municipal, county, state and federal employers hiring on their own terms. The BJS
2022 census shows the fragmentation measurably — academies run by agencies **and** by colleges, with
average basic training from 681 hours (state POST) to 969 (state police), 734 (sheriff's office) and
759 (two-year colleges).

Because Berlin publishes accessibly, Berlin's rules are easy to repeat as though they were German.
The Germany page names the Land beside every fact for that reason, and the United States page states
**no entry requirement at all**, because none was established from a current official source.

## 5. A national criterion is a floor, not the requirement

The England & Wales recruitment service states its own limit: "Police forces are also allowed to
apply their own local criteria in addition to the national eligibility aspects, so make sure you
check your chosen force's website for a full list of the role criteria."

Anyone reading only the national criteria has read something true and incomplete — **and the source
itself is the thing saying so.** A page quoting a national criterion without that caveat has quietly
changed its meaning.

## 6. Requirements attach to the start of training, not to the application

New Zealand: a restricted licence is enough to apply; a full licence is required before Police
College. The Netherlands: a category B licence within **nine months after training starts**. Both
age rules above work the same way.

A system wanting a wide applicant pool but a qualified intake can admit people who do not yet meet a
requirement, provided they meet it before they start. That is a deliberate design, and it is
invisible if the two moments are collapsed.

## 7. Entry-route structure is not universal, and Wave 24's finding holds

The Netherlands publishes six entry programmes: `politieopleiding mbo 4-niveau` (2 years) and four
three-year hbo bachelors — `Politiekunde Politieagent`, `Politiekunde Wijkagent`, **`Rechercheur`**
and `Politieleider`. Investigation and community policing are **entry routes**, not later
assignments. Nothing in this wave rewrites that into "become a patrol officer, then get promoted".

## 8. No researched system requires a degree — confirmed, not regressed

Ireland states it in terms: "There is no requirement to have a degree prior to entering An Garda
Síochána as a Garda Trainee." England & Wales requires Level 3. The Netherlands accepts vmbo-tl/gl,
mbo-3 or mbo-4 — or an admission test for those without them. Berlin requires school-leaving
qualifications for both tracks and awards the degree at the end of one.

## 9. Selection is several separate judgements, and not all are the recruiter's

The Irish condition requires certification **by a Registered Medical Practitioner** nominated by the
Commissioner that the candidate is "in good health, of sound constitution and suited physically and
mentally to performing the duties". The medical question is a professional judgement, not a
recruitment one — which is exactly why no page here attempts to answer it for anyone.

The same material places a standing obligation on candidates to show they **continue** to meet the
requirements throughout, and states that "success through to any stage of the selection process is
not a guarantee of acceptance".

## 10. Freshness: `factsVerifiedOn` was already there, and `ScheduledChange` was declined

`CountryModuleContent.factsVerifiedOn` is already mandatory for a published module. That is the
whole freshness mechanism; no field, type or campaign model was added.

`ScheduledChange` was evaluated and **declined**: it models an announced change to a legal position
with a required `effectiveOn` and a certainty gate. A campaign closing date is not a legal position
taking effect, and a closed campaign has not "commenced". Forcing campaigns into it would put the
most volatile facts in the corpus into a structure built for the most durable ones.

## 11. Structured data: `JobPosting` and `Occupation` both declined

These pages explain official requirements; they are not vacancies, and this platform is not the
employer. `JobPosting` asserts a live vacancy with a hiring organisation. `Occupation` asserts a
labour-market frame with `estimatedSalary` and `occupationalCategory`, neither of which this wave
publishes. Emitting either would be a false statement in machine-readable form.

The e2e check parses `@type` structurally and never scans serialised text — the weakness Wave 23
identified and Wave 24 saw fire on its own flagship instrument name.

## Access failures and link rot

`policie.cz` → `policie.gov.cz` → **`archiv.policie.gov.cz`**, carrying "Obsah zde nemusí být
aktuální", dated 17 May 2024, conditions absent → **Czechia deferred**. `phs.no` →
`politihogskolen.no` → **HTTP 404** → **Norway abandoned**. `post.ca.gov` refused connections.
`police-nationale.interieur.gouv.fr` blocked in Wave 24 → **France described nowhere**.

One method note worth keeping: a search summary asserted that the England & Wales
`am-i-eligible-to-apply` page contained age and nationality criteria. Reading it showed it contains
neither — it is an interactive quiz. **Content-confirmation is not a formality.**

## What was deliberately not published

No pay. No fitness standard, protocol or preparation. No medical criterion. No vetting method. No
interview content. No application deadline, place count or vacancy. No acceptance or rejection
statistic. No ranking of any kind. No individualised eligibility conclusion.
