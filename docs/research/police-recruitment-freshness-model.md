# Police recruitment — freshness and volatility model

Wave 25. Recruitment information decays faster than anything else in this corpus. This records how
the platform represents that honestly without inventing machinery.

## 1. The decision: reuse `factsVerifiedOn`, add no schema

`CountryModuleContent.factsVerifiedOn` already exists and is already **mandatory for a published
module** — `validateCountryPublication` rejects a published module with no ISO date. It is the
date the sources were read, not the date the file was edited.

That is the whole freshness mechanism. No new field, no new type, no campaign model.

### Why not `ScheduledChange` (Part H)

`ScheduledChange` models an announced change to a legal position. It requires an ISO `effectiveOn`,
and an active change must carry `certainty: 'enacted-with-date'`. A recruitment campaign fits none
of that:

- A campaign **closing date** is not a legal position taking effect.
- A campaign that has **closed** has not "commenced".
- A campaign is **not announced in advance as a change**; it opens and shuts on operational grounds.

Forcing campaigns into it would put the most volatile facts in the corpus into a structure built for
the most durable ones. Declined, and no campaign schema was added in its place.

## 2. Volatility classes (Part AA)

Every fact on a country recruitment page falls into one of three classes, and the class determines
how it may be written.

### LOW — structural, changes rarely

Who recruits. Whether recruitment is national or local. The training institution. The broad
architecture of entry routes. Whether appointment precedes or follows training.

_May be stated plainly, tied to its system._

### MEDIUM — durable but revisable

Education routes and minimum qualification levels. Training duration. Award on completion. Broad
selection stages. The legal instrument governing admission.

_Stated with the source and the verification date._

### HIGH — volatile, frequently campaign-bound

Age windows tied to a closing date. Whether a campaign is open. Fitness thresholds. Application
dates. Temporary eligibility rules. Numbers of posts.

_Either not published at all, or published with its scope inside the sentence._

### The rule that follows

**No HIGH-volatility fact appears in a title, a summary, a heading, or a meta description.** Titles
and summaries carry only LOW and MEDIUM facts, so the parts of a page that search engines cache
longest are the parts that change least.

## 3. Campaign scope — the invariant, with its worked example

The Garda Trainee 2024 Information Booklet states that an applicant must:

> "be 18 years of age but not yet 50 years of age at midnight on Thursday, 8th of February 2024"

That is not "the Irish police age requirement". It is one competition's age window, anchored to that
competition's closing date. The same booklet names the durable basis separately: the Garda Síochána
(Admissions & Appointments) Regulations 2013, as amended by S.I. 602/2020, S.I. 757/2021 and
S.I. 611/2023.

So the honest structure is two-layered:

| Layer                | What it is                        | How it is written                                             |
| -------------------- | --------------------------------- | ------------------------------------------------------------- |
| The Regulations      | Durable legal basis for admission | Named as the governing instrument                             |
| The campaign booklet | One competition's terms           | Attributed to that competition, with its date in the sentence |

**A campaign-specific source may never be rendered as a permanent requirement.** Tested, and proved
by mutation.

## 4. Source scope — the second invariant

| Source                                     | Proves                                      | Does NOT prove                                                                       |
| ------------------------------------------ | ------------------------------------------- | ------------------------------------------------------------------------------------ |
| Polizei Berlin recruitment pages           | Berlin                                      | Germany, or any other Land                                                           |
| Bayerische Polizei pages                   | Bavaria                                     | Germany                                                                              |
| A municipal department's standards         | That department                             | Its state, or the United States                                                      |
| Garda Trainee 2024 booklet                 | That competition                            | A standing Irish rule                                                                |
| `joiningthepolice.co.uk` national criteria | The national criteria for England and Wales | Any individual force's additional local criteria, which the source itself says exist |

The last row is the subtle one, and the source states it: "Police forces are also allowed to apply
their own local criteria in addition to the national eligibility aspects". A national criterion is
therefore a floor, not the whole requirement — and the page says so.

## 5. Link rot, observed rather than assumed (Part M)

Checked during research. Two of the systems considered had moved:

| Host                                | Behaviour                                                                                                             |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `newcops.govt.nz/eligibility`       | 307 → `/can-i-be-a-cop/what-do-i-need`. Followed; the destination is current and was used                             |
| `policie.cz/…prijimaci-rizeni.aspx` | 301 → `policie.gov.cz` → 301 → **`archiv.policie.gov.cz`**, carrying an explicit archive notice and dated 17 May 2024 |

The Czech chain is why Czechia is deferred. A source that redirects into an archive and declares
"Obsah zde nemusí být aktuální" cannot support a current requirement.

**Redirects are followed and the destination is what gets recorded**, never the original URL with an
assumption that it still resolves to the same content.

## 6. What the reader sees

Each country page states, in ordinary language, when its information was verified against official
sources, and names the official authority as the place the current position lives. It does not
display "updated today", a relative freshness badge, or any date not derived from actual source
verification.

**A fake freshness date is worse than a stale one**, because it converts a maintenance failure into
a false claim. Tested.

## 7. Review expectations

| Class        | Suggested review                                     | Reason                                             |
| ------------ | ---------------------------------------------------- | -------------------------------------------------- |
| LOW facts    | Annually                                             | Institutions and training architecture rarely move |
| MEDIUM facts | Every 6–12 months                                    | Education routes and durations shift with policy   |
| HIGH facts   | Not published, or re-verified before any restatement | The reason most of them are not published at all   |

This is an expectation recorded for maintainers, not a promise rendered to readers.
