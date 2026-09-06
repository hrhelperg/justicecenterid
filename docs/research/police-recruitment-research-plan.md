# Police recruitment — research plan, architecture and scope decisions

Wave 25. Architecture settled before content, on the repository's actual route model rather than on
search intent.

## 1. Architecture decision (Part B)

### Decision: OPTION B — a country module at `/countries/{country}/police-recruitment`

A thirteenth entry in `COUNTRY_MODULES`. No new route family, no new routing concept.

### Why

| Option                                          | Verdict                                                                                                                                                                                                                                                                  |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **A** `/countries/{country}/police-careers`     | Rejected. "Careers" is the layer Wave 24 built globally at `/professions` and `/law-enforcement`. Reusing the word here would put two different things under one label                                                                                                   |
| **B** `/countries/{country}/police-recruitment` | **Chosen**                                                                                                                                                                                                                                                               |
| **C** `/professions/police-officer/{country}`   | Rejected. `/professions/[slug]` is a flat reference family with a publication gate built for one record per role; nesting countries under it would make the profession record the owner of 32 potential sub-pages and split canonical ownership with the country dossier |
| **D** other                                     | Considered and not needed — the existing model already fits                                                                                                                                                                                                              |

Four reasons, in order of weight.

1. **Every fact is jurisdiction-specific.** Who recruits, what routes exist, what eligibility
   applies, and how fast each changes are all properties of a jurisdiction. The country is the
   natural owner.
2. **It inherits the freshness anchor.** `CountryModuleContent.factsVerifiedOn` is already
   mandatory for a published module — the country publication gate rejects one without an ISO
   date. Recruitment content needs that more than anything else in the corpus, and it already
   exists.
3. **It inherits the registry.** Routes, navigation, breadcrumbs, sitemap and `verify-output` all
   derive from `COUNTRY_MODULES`. A new family would need each of those taught about it.
4. **It keeps one canonical owner.** The comparative questions stay global under
   `/law-enforcement/…`, exactly where Wave 24 put comparative educational questions. The
   country pages answer _this system_; the global pages answer _how systems differ_. No page
   answers both.

### Deliberately not required

`police-recruitment` is **not** added to `REQUIRED_PUBLISHED_MODULES`. Thirty-two dossiers exist and
this wave researched six. Making it required would either break twenty-six countries or invite the
thin template pages Part C forbids.

## 2. The maintenance model (Part C)

The constraint that shapes this wave: **recruitment information decays faster than anything else in
the corpus.** Six countries, not thirty-two.

| Rule                                                                                     | Consequence                                                                                                                                                            |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A country page exists only where all six questions can be answered from official sources | Who recruits, what routes, what verified requirements, how selection is broadly structured, where training happens, and where the reader verifies the current position |
| Volatile facts carry their scope in the sentence                                         | An age window tied to a campaign closing date is written as tied to it, never as a standing rule                                                                       |
| `factsVerifiedOn` is a real verification date                                            | It is the date the sources were read, not the date the file was edited                                                                                                 |
| Official destinations are named on every country page                                    | The page's job includes handing the reader to the authority, because the authority is the only current source                                                          |

## 3. Scope invariants — the wave's central discipline

Two rules, both mechanically tested, both proved by mutation.

**SOURCE SCOPE ≥ CLAIM SCOPE.** A Berlin source proves Berlin. It does not prove Germany. A
municipal department proves that department. A campaign booklet proves that campaign.

**CAMPAIGN SCOPE ≠ PERMANENT RULE.** The Irish evidence makes this concrete: the 2024 Garda Trainee
booklet requires an applicant to "be 18 years of age but not yet 50 years of age **at midnight on
Thursday, 8th of February 2024**". The age window is anchored to one competition's closing date.
Stating "Garda applicants must be 18 to 49" as a standing rule would be false in form even where it
happens to be true in substance.

## 4. Freshness: no ScheduledChange (Part H)

**Evaluated and declined.** `ScheduledChange` models an announced change to a legal position, with a
required ISO `effectiveOn` and a certainty gate requiring `enacted-with-date` for an active change.
A recruitment campaign is not that. A campaign closing date is not a law commencing; a campaign that
has closed has not "taken effect".

Forcing campaign data into it would misuse a model built for something else and would put volatile
campaign facts into a structure designed for durable legal ones. The wave uses the lighter mechanism
that already exists — `factsVerifiedOn` on the module, plus explicit scope wording in the prose and
in each source's `note` — and adds no schema for campaigns. Details in
`police-recruitment-freshness-model.md`.

## 5. Countries: six published, and why

| System              | Why it earns a page                                                                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ireland**         | The richest official evidence obtained, and the clearest illustration of every scope rule at once                                                       |
| **England & Wales** | National criteria plus forces applying their own local criteria — stated by the source itself                                                           |
| **New Zealand**     | Centralised, and explicitly states there is **no upper age limit**, which is the counter-example to inferring one                                       |
| **Netherlands**     | Nationality genuinely required, and entry organised by education route                                                                                  |
| **Germany**         | Published as a page about **Länder fragmentation**, not as national requirements. Berlin and Bavaria appear as labelled examples of separate recruiters |
| **United States**   | Published as a page about the **decentralised model**, stating no national requirement, because none was established                                    |

**Deferred: Czechia.** The only reachable official page redirects to `archiv.policie.gov.cz`,
carries the notice "Nacházíte se na archivní verzi webu Policie České republiky. Obsah zde nemusí
být aktuální", is dated 17 May 2024, and does not contain the conditions — it points to
zákon č. 361/2003 Sb. §§ 13–16. Publishing entry requirements from a page that declares its own
content may be out of date is precisely the failure this wave exists to prevent.

**Not researched:** Poland, Spain, France, Canada, Australia. France was blocked in Wave 24 and was
not retried. None is described anywhere in this wave.

## 6. Product scope preserved (Part AK)

Recruitment research reaches legal material — Ireland's entry is governed by the Garda Síochána
(Admissions & Appointments) Regulations 2013 as amended, and Czech admission by
zákon č. 361/2003 Sb. Those are cited to establish _that a durable legal basis exists behind a
campaign document_, which is a recruitment fact.

**OUT OF PRODUCT SCOPE**, and not logged as a future legal wave: appealing a recruitment decision,
administrative review, discrimination litigation, procedural remedies, and court challenges. The
Wave 24 procedural-depth guard is extended to the new country modules.

## 7. Safety and advice boundaries (Parts L, Q, R, S, T, U, AM)

The wave explains **the official path** and never how to game it. Concretely: it states that a
medical assessment exists and never what would disqualify anyone; that a physical assessment exists
and never a standard, protocol or preparation strategy; that background and integrity assessment
exists and never how it is conducted; that selection may include interviews and assessments and
never what to say.

No page tells any individual whether they qualify. Every eligibility statement is tied to a named
system and a dated source, and every country page points to the official authority as the place the
current position lives.

No application form, no lead form, no "apply now" affordance, no vacancy, no deadline, no salary.
