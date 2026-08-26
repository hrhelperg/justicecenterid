# Wave 20 model findings — what the schema had to change, and what it did not

Branch `feat/knowledge-expansion-wave-20`. Written 2026-08-26.

**Nothing was added to the schema. No new type, no new enum, no new route family, no new
institution record, no new country module.** Each of those was evaluated against real researched
evidence and each was declined for a reason the evidence supplies. This document is the record of
why, because a decision not to model something is only defensible if it was actually taken.

## 1. Route architecture — `/public-safety/[slug]` is reuse

`/public-safety` was the only section in the corpus that was a hub with no children: one route,
zero guides, six editorial outbound links all pointing at other hubs, and six editorial inbound of
which two were the 404 pages.

It needed no new routing concept. `public-safety` was already a member of the `SectionId` union,
already a `SECTIONS` entry with a summary, an intro, five key ideas and three out-of-scope
statements, and `PUBLIC_ROUTE_PATHS` already derives guide routes generically from
`PUBLISHED_GUIDES` through `guidePath`. Eight sections already carry an identical eighteen-line
`[slug]/page.tsx` delegating to the shared `GuidePage`. Adding the ninth is the same file.

`SectionPage` already renders `getGuidesForSection(id)` and already carries a "No guides published
in this section yet" empty state. Publishing guides therefore populates the hub automatically —
the hub work in this wave is content, not components.

One constraint inherited and honoured: `public-safety` is on `SAFETY_SENSITIVE_SECTIONS`, so every
guide in it must carry `safetyReview: 'cleared'`. All eight do.

One constraint inherited and not disturbed: `/glossary/public-safety` must continue to return 404.
`scripts/route-matrix.mjs` and `e2e/wave3-routes.spec.ts` both assert it, and the Wave 3 decision
that made it hub-only stands. Wave 20 gives the concept a guide, not a glossary route.

## 2. Temporal model — `ScheduledChange` is sufficient, and the reason is a distinction

Emergency law is the most temporally loaded subject the corpus has covered. The brief required an
explicit evaluation of whether `ScheduledChange` can represent it honestly.

It can, and the reason is worth stating because it is easy to get wrong:

> **`ScheduledChange` models a change to the world that will require this platform's content to be
> updated on a known date. It does not model a clock that a legal regime carries inside itself.**

A declaration that lasts thirty days and may be renewed once is not a scheduled change. Nothing
about the corpus needs updating when it expires; the thirty days is a _fact about the regime_ and
belongs in the page's prose, where it is quoted from the constitutional text. Modelling it as a
`ScheduledChange` would produce a registry full of hypothetical expiries for declarations that may
never be made.

Tested against the six temporal shapes the brief named:

| Shape                               | Representable? | How                                                                                       |
| ----------------------------------- | -------------- | ----------------------------------------------------------------------------------------- |
| Emergency legislation expiring      | Yes            | `changeType: 'repeal'`, `effectiveOn` = the sunset date, `certainty: 'enacted-with-date'` |
| Reform with future commencement     | Yes            | `'amendment'` or `'replacement'`                                                          |
| Emergency institution replaced      | Yes            | `'replacement'` or `'reorganization'`                                                     |
| Temporary regime becoming permanent | Yes            | `'amendment'`, with `supersedes` pointing at the sunset it removed                        |
| Powers repealed                     | Yes            | `'repeal'`                                                                                |
| Sunset clause                       | Yes            | `'repeal'` with a date, or `'planned'` where the date is conditional                      |

Two real cases were found and neither needs a new type:

- **Ireland, Health (Preservation and Protection and other Emergency Measures in the Public
  Interest) Act 2020** — Part 3 was to continue in operation only until 9 November 2020 unless
  both Houses resolved to continue it. A textbook sunset, and a textbook `repeal` with a date.
- **Sweden, förordning (2008:1002) med instruktion** — the agency instituted by it was renamed
  from _Myndigheten för samhällsskydd och beredskap_ (MSB) to _Myndigheten för civilt försvar_,
  and riksdagen.se's own URL for the superseded heading carries the effective date `2026-01-01`.
  A `renaming`, and one already in the past.

Neither is recorded as a `ScheduledChange`, for the same reason in both cases: the corpus does not
carry the affected content. Ireland's 2020 Act is cited only for the sunset structure, and the
Swedish agency has never been described on this platform under either name. A `ScheduledChange`
whose `affectedEntityIds` point at nothing would be a registry entry pretending to be a control.

The Swedish rename **is** recorded, as a currency note on the source record, because it is a live
trap: most secondary writing still calls the agency MSB.

**Decision: no schema change. `ScheduledChange` was not extended and no new temporal type exists.**

## 3. Institution taxonomy — the function recurs, the institution does not

The brief asked whether `civil-protection agency`, `emergency-management agency`, `emergency
coordination centre` or `disaster-management authority` had earned an `InstitutionType` record.
The test the corpus applies is recurrence across multiple systems, comparable institutional
function, sufficient Tier-1 sourcing, and meaningful cross-country identity. The first three are
satisfied. **The fourth is not, and it fails badly.**

Fourteen systems were researched on this dimension. What the statutes actually constitute:

| Form                                                    | Systems                                                                                                                                                                                                                                                 |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A standing **agency**                                   | United States (FEMA, `6 U.S.C. §313`, inside DHS); Sweden (_Myndigheten för civilt försvar_, by instruction); Germany (BBK, by ZSKG § 4 — but _Katastrophenschutz_ is a Land matter, so the federal office is not the responsible body for most events) |
| A **centre** inside a department                        | South Africa (National Disaster Management Centre, "an institution within which the Minister is responsible")                                                                                                                                           |
| A **council** in a cabinet office                       | Japan (National Disaster Management Council, Cabinet Office)                                                                                                                                                                                            |
| A statutory **system** with no single body              | Brazil (SINPDEC); Spain (Sistema Nacional de Protección Civil); Czechia (_integrovaný záchranný systém_, four named basic components); Switzerland (_Bevölkerungsschutz_, five named partner organisations under **cantonal** command)                  |
| A **section of a ministry**                             | Ireland — the NDFEM "is not a free-standing agency but a section within the Department"                                                                                                                                                                 |
| A **ministerial responsibility** with no dedicated body | Canada (Emergency Management Act s. 4: the Minister exercises leadership by coordinating)                                                                                                                                                               |
| A brand-new statutory **authority**                     | Kenya (National Disaster Risk Management Authority, Act No. 16 of 2026)                                                                                                                                                                                 |

That is seven institutional forms for one function. An `InstitutionType` record would have to
assert a cross-country identity that the sources refute: in four systems there is no body to point
at, because the statute constitutes a _system of partners_ rather than an institution, and in one
the answer is a section of a department.

This is the same shape the corpus has now found eleven waves running — a function whose
institutional embodiments differ in kind — and it is the sharpest case yet, because here three
systems have no member of the family at all.

**Decision: no `InstitutionType` record. The function is described in prose, on
`/public-safety/who-is-in-charge-in-an-emergency`, with the seven forms shown as the finding.**

Nothing was added to `INSTITUTION_TYPES`, `PROFESSIONS` or `GLOSSARY`, and a test asserts the
absence negatively so a later wave cannot introduce one by accident.

## 4. Restricted claims — nothing needed one

The wave publishes **no statistic of any kind**. No disaster death count, no casualty figure, no
response time, no detention total, no emergency-response performance ranking, no crime-change
claim, no public-safety index.

That is not restraint applied at the end; it follows from the research. The evidence sweep was
scoped to institutional and legal architecture, and no page's argument needs a number. Where a
quantity appears it is a **statutory quantity** quoted from the instrument — twenty-one days,
sixty per cent, three months — which is a fact about the text, not a measurement of the world.

`findRestrictedPhrasing` reports nothing across all twelve pages, and a test asserts it.

**Decision: no `RestrictedClaim` records added, and the existing ten patterns are untouched.**

## 5. Country modules — none earned

The brief required an audit before publishing any `/countries/{country}/public-safety` module, and
warned that a module must describe a _system_ rather than one law or one agency.

Applying that honestly disqualifies every candidate, including the best-evidenced:

- **Germany** has the deepest source base in the wave (29 documents). But the German evidence is
  overwhelmingly _federal constitutional_ — GG Arts. 35, 87a, 91, 115a–115l, and the ZSKG. The
  operational level is _Katastrophenschutz_, which is a **Land** competence, and not a single Land
  statute was read. A module would describe the federal frame and imply the system.
- **Spain** has the cleanest statutory system (Ley 17/2015 plus LO 4/1981) and two Constitutional
  Court judgments. But the Autonomous Communities' own civil-protection legislation was not read,
  and Art. 3 of Ley 17/2015 makes the system expressly multi-level.
- **Switzerland** is constitutionally decentralised to the cantons by BV Arts. 3, 5a and 57, and
  BZG Arts. 14–16 make the cantons the operational level. No cantonal instrument was read.
- **New Zealand** would be the worst candidate: the CDEM Act itself was never readable.

The pattern is the same in each case. The federal or national instrument is the easy half, and
publishing it as a country module would assert coverage of the half that was not researched.

**Decision: no country module published. Every one is deferred with the specific gap named, and
`scripts/route-matrix.mjs` asserts that the deferred module paths return 404.**

## 6. Comparative model — `countryExamples` and `counterExamples` reused, not reinvented

Wave 4 established typed `countryExamples` and `counterExamples` on `Guide`, with an invariant that
each counterexample must be backed by a country-scoped source and that no country may appear on
both sides. The field comment calls `counterExamples` the load-bearing one, because _"federal
country" does not imply "sub-national police"_.

That is exactly the shape of Wave 20's risk, so the field is reused rather than replaced. The
counterexamples this wave carries are the ones a general account would get wrong:

- **Ireland** as the counterexample to "exceptional courts are prohibited" — Art. 38.3.1 permits
  them where the ordinary courts are determined inadequate.
- **Czechia** as the counterexample to "a court can always be asked whether the declaration was
  lawful" — Pl. ÚS 8/20 holds the declaration is in principle not subject to review.
- **Norway** as the counterexample to "an emergency reallocates competence" — the
  _ansvarsprinsippet_ keeps it where it was.
- **Canada** as the counterexample to "every system has a derogation mechanism" — it has none.
- **Japan** as the counterexample to "every constitution has an emergency chapter" — it has none.

## 7. Summary

| Question                | Decision                               | Basis                                                                        |
| ----------------------- | -------------------------------------- | ---------------------------------------------------------------------------- |
| New route family?       | **No** — reuse `/public-safety/[slug]` | Eight sections already carry the identical file                              |
| New temporal type?      | **No** — `ScheduledChange` suffices    | It models corpus maintenance, not a regime's internal clock                  |
| New `InstitutionType`?  | **No**                                 | Seven institutional forms for one function; four systems have no body at all |
| New `RestrictedClaim`?  | **No**                                 | The wave publishes no statistic                                              |
| New country module?     | **No**                                 | Every candidate's sub-national half was unresearched                         |
| New comparative fields? | **No** — reuse Wave 4's                | `counterExamples` is already the right instrument                            |
