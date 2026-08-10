# Local and municipal policing — relationship cluster plan

**Status:** 7 of 18 candidates published, 2026-08-10.

## 1. What makes this a relationship cluster

An institution page answers _what is a municipal police force?_ A relationship page answers
_how does it relate to the national one, who controls it, and what happens when two agencies
both have authority in the same street?_

Waves 2 and 3 built the institution taxonomy — municipal, national, federal investigative,
state, provincial, prefectural, autonomous-community. Wave 4 adds no institution pages and
rewrites none. Every page here is a `Guide` at `/law-enforcement/{slug}`, using route
infrastructure that already existed.

## 2. Classification of all 18 candidates

| #   | Candidate                                 | Verdict                                                 | Reason                                                                                                                                                        |
| --- | ----------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Federal vs State vs Local                 | **PUBLISH** as `how-policing-is-divided-between-levels` | Retitled to the reader's actual question and made genuinely comparative — see §3.                                                                             |
| 2   | State Police vs Local Police              | **MERGE → #1**                                          | Same question at a narrower scope; a separate page would restate it.                                                                                          |
| 3   | Sheriff vs Municipal Police               | **PUBLISH** as `sheriffs-and-city-police`               | Distinct, high-intent, and US-scoped by declaration.                                                                                                          |
| 4   | Municipal vs National Police              | **PUBLISH** as `municipal-and-national-police`          | Distinct from #3: France/Spain rather than US, and about tiers rather than offices.                                                                           |
| 5   | What Is Police Jurisdiction?              | **PUBLISH** as `police-jurisdiction`                    | The foundation of the cluster.                                                                                                                                |
| 6   | Overlapping Police Jurisdiction           | **MERGE → #5**                                          | Concurrent jurisdiction is a section of the jurisdiction page. Standalone it would be thin and would compete.                                                 |
| 7   | Contract Policing                         | **PUBLISH**                                             | Canonical, and the best-sourced page in the wave.                                                                                                             |
| 8   | Local Police Governance                   | **PUBLISH** as `local-police-governance`                | Absorbs #9 and #15.                                                                                                                                           |
| 9   | Who Controls Local Police?                | **MERGE → #8**                                          | Identical intent, phrased as a question.                                                                                                                      |
| 10  | Police Coordination Between Agencies      | **MERGE → #11**                                         | Coordination cannot be explained without command; one page.                                                                                                   |
| 11  | Police Command vs Coordination            | **PUBLISH** as `police-command-and-coordination`        | Flagged by the brief for special treatment; distinct and well sourced.                                                                                        |
| 12  | Shared Policing Services                  | **MERGE → #7**                                          | The contracted/shared distinction is what makes contract policing legible. As a standalone it would be a page about what something is _not_.                  |
| 13  | Local Public Order Authorities            | **DEFER**                                               | No source in the registry covers municipal public-order bodies as a category.                                                                                 |
| 14  | County Law Enforcement                    | **MERGE → #3**                                          | US-specific and already the subject of the sheriff page.                                                                                                      |
| 15  | City Police and Municipal Government      | **MERGE → #8**                                          | Governance, under a different name.                                                                                                                           |
| 16  | Special-Purpose Police Agencies           | **DEFER**                                               | `/institutions/transport-police` covers the best-sourced instance. A global page would need port, airport, campus and park sourcing that does not exist here. |
| 17  | Transit and Transport Police Jurisdiction | **MERGE → #16** (deferred)                              |                                                                                                                                                               |
| 18  | Campus Police and Special Jurisdiction    | **DEFER**                                               | No source.                                                                                                                                                    |

**Published: 7. Merged: 8. Deferred: 3. Rejected: 0.**

Eleven of eighteen candidates were the same reader question in different words. That is the
characteristic shape of a relationship cluster brief, and merging them is the work.

## 3. Why the flagship page is comparative rather than US-focused

The brief offered a choice, and warned against "a supposedly global page whose substance is
90% United States".

Chosen: **comparative**, retitled _How is policing divided between levels of government?_

The reasoning is that the corpus genuinely supports it. Four allocation patterns are
evidenced from five countries — dispersed sub-national policing (United States), functional
division at one level (Brazil, Art. 144), national framework with sub-national administration
(Japan), and wholly national policing (Kenya, Nigeria) — plus Germany's separation of who
legislates from who administers. A US-titled page would have had to discard four of those.

The US-specific material has its own page instead, `sheriffs-and-city-police`, declared
`jurisdiction: ['US']` in the data and stating on the page that the office does not travel.
Splitting this way means neither page pretends to a scope it does not have.

## 4. The typed-vocabulary decision

**No relationship vocabulary was implemented, and no architecture document was created.**

Part E asked whether a typed enum — command, coordination, concurrent-jurisdiction,
contract-service, shared-service — was needed, and warned that the project had previously
rejected a universal relationship graph.

It is not needed. The distinctions are the _subject_ of the prose rather than metadata about
it: a page explaining why coordination is not command does that in sentences a reader
reads, and tagging the page `coordination` would add a field nothing renders and nothing
validates. The two things that genuinely needed to be machine-checkable — that a country
example is backed by a country-scoped source, and that a comparative page carries a
counterexample — are checkable through `CountryExample`, which already existed.

The bar for reversing the earlier decision is "prevents factual confusion", and an enum
whose values only ever appear in a test does not clear it.

## 5. Restricted claims

**None introduced.** No crime rate, staffing level, effectiveness, trust or corruption claim
appears in the cluster. One figure is used — 17,541 general-purpose state and local agencies
and their proportional split — and it is institutional composition rather than any restricted
category. The personnel count available in the same source (about 1,214,000 full-time staff)
was deliberately **not** used, because staffing is a restricted category and the pages do not
need it.

## 6. Safety

No page describes how jurisdictional boundaries could be used to anyone's advantage. The
jurisdiction page carries a scope callout stating it is not guidance for any encounter, and a
test asserts that no page in the cluster contains evasion framing.

The framing throughout is that overlap is a design feature producing redundancy — several
bodies with independent authority and no single point at which all of it can be switched off
— which is the opposite of a gap to be exploited.
