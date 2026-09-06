# Wave 23 — treaty and instrument status, verified 2026-09-05

Part X requires this wave to audit temporal legal state explicitly rather than assume it. Part S
makes the stages a tested invariant: signature ≠ ratification ≠ entry into force ≠ identical
domestic procedure; adoption ≠ transposition completed.

**The repository's current legal date for this wave is 5 September 2026.** Every status below is
stated as at that date and sourced to a primary instrument or an official database that timestamps
its own currency.

## 1. Convention on Cybercrime (Council of Europe, ETS No. 185)

| Fact                                        | Status                                                     | Evidence                                                                                                                                                                            |
| ------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Opened for signature                        | 23 November 2001, Budapest                                 | The instrument's own heading                                                                                                                                                        |
| In force                                    | **ESTABLISHED — in force**                                 | The existing corpus record `coe-cybercrime-convention` states it, and the Dutch treaty database publishes a consolidated text with an entry-into-force-dated version (`2007-03-01`) |
| Chapter III (Arts. 23–35) is self-executing | **NOT ESTABLISHED — and the Convention says the opposite** | Art. 25(2): "Each Party shall also adopt such legislative and other measures as may be necessary to carry out the obligations set forth in Articles 27 through 35."                 |
| Party list / ratification dates             | **NOT RESEARCHED**                                         | The Council of Europe Treaty Office was unreachable — see §5                                                                                                                        |

**The Art. 25(2) finding is the wave's temporal spine.** A cooperation treaty that is in force still
requires each Party to legislate before its cooperation articles operate domestically. The
Convention states this about its own Chapter III.

## 2. Second Additional Protocol (CETS No. 224)

| Fact                             | Status                                                     | Evidence                                                                                                                                                                                                                                                                                  |
| -------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Concluded / opened for signature | **12 May 2022**                                            | The Dutch official treaty database records a single lifecycle row: _Nieuwe-regeling · Trb. 2022, 66 · 12-05-2022 · Totstandkoming_                                                                                                                                                        |
| Entry into force                 | **NOT ESTABLISHED — no entry-into-force date is recorded** | The same database, on a page stating **"Informatie geldend op 05-09-2026"**, shows the column "Inwerkingtreding / Voorlopige toepassing" **empty**, and every article of the Protocol carries the marker **"[Tekst zonder datum inwerkingtreding]"** — text without entry-into-force date |
| Number of ratifications          | **NOT RESEARCHED**                                         | The Council of Europe Treaty Office, which is the authoritative register, was unreachable — see §5. Secondary summaries were found and are **not** used.                                                                                                                                  |

**Scope of that finding, stated precisely.** What is established is what the official Dutch treaty
database records as at 5 September 2026: the Protocol was concluded on 12 May 2022 and carries no
entry-into-force date there. That is evidence about the register and about the Protocol's
publication in that jurisdiction. It is **not** a claim that the Protocol has no entry-into-force
date anywhere, and the pages relying on it say so.

## 3. Regulation (EU) 2023/1543 — European Production and Preservation Orders

| Fact                                         | Status                                                                   | Evidence                                                                                                                                                                                                                                                                                      |
| -------------------------------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Adopted                                      | **12 July 2023, Strasbourg**                                             | The Regulation's closing line: "Done at Strasbourg, 12 July 2023"                                                                                                                                                                                                                             |
| Entry into force                             | twentieth day following publication in the _Official Journal_            | Art. 34(1)                                                                                                                                                                                                                                                                                    |
| **Application**                              | **ESTABLISHED — "It shall apply from 18 August 2026"**                   | Art. 34(2), verbatim                                                                                                                                                                                                                                                                          |
| Position at 5 September 2026                 | **APPLICABLE — for eighteen days**                                       | Art. 34(2) against the repository's current date                                                                                                                                                                                                                                              |
| Decentralised IT system obligation (Art. 19) | **FUTURE / NOT YET APPLICABLE, and the trigger date is NOT ESTABLISHED** | Art. 34(2) second sentence: the obligation to use the decentralised IT system "shall apply from **one year after the adoption of the implementing acts referred to in Article 25**". Whether those implementing acts have been adopted was **NOT RESEARCHED**, so the trigger date is unknown |

This is the finding the brief anticipated in the opposite direction. Part D warned against
describing the regime as operational before its application date. The application date has in fact
**just passed** — by eighteen days — so the correct representation is that the Regulation applies,
while **one obligation inside it** is conditioned on a later event whose date this wave could not
establish.

## 4. Directive (EU) 2023/1544 — designated establishments and legal representatives

| Fact                                                 | Status                                  | Evidence                                                                                                                                                          |
| ---------------------------------------------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Transposition deadline                               | **ESTABLISHED — 18 February 2026**      | Art. 7(1): Member States "shall bring into force the laws, regulations and administrative provisions necessary to comply with this Directive by 18 February 2026" |
| Position at 5 September 2026                         | the deadline is **past**                | Art. 7(1) against the repository's current date                                                                                                                   |
| Whether any Member State has completed transposition | **NOT RESEARCHED for any Member State** | No national implementing measure was read                                                                                                                         |
| Commission evaluation                                | due by 18 August 2029                   | Art. 8                                                                                                                                                            |

**A passed deadline is not a completed transposition, and the pages say so.** This is exactly the
Part S invariant, and it is the one place in this wave where the temptation to infer is strongest:
the Regulation is directly applicable, the Directive's deadline has passed, and it would be easy
to write as though every Member State therefore has designated addressees in place. Nothing read
for this wave establishes that.

## 5. Source-access failures

| Host                                                                          | Result                                                          | Consequence                                                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `www.coe.int` (Treaty Office, treaty-detail and signatures-by-treaty modules) | **HTTP 403** to automated requests, on three separate URL forms | Party lists, signature dates and ratification counts for ETS 185 and CETS 224 are recorded as **NOT RESEARCHED**. No count is stated anywhere in this wave. |
| `rm.coe.int`                                                                  | **HTTP 403**                                                    | same                                                                                                                                                        |
| `uscode.house.gov`                                                            | timed out with no response                                      | The US provisions were read from the Legal Information Institute's verbatim reproduction, as in Wave 22, with the access note on each record                |
| `www.govinfo.gov`                                                             | **HTTP 502**                                                    | same                                                                                                                                                        |

A search engine returned secondary summaries giving a ratification count for CETS 224. **They are
not used.** Part Y requires primary authoritative sources for legal-status claims, and a treaty
register is precisely the kind of fact that must come from the register.

## 6. `ScheduledChange` decision — none added, and the schema is why

Four records exist and four remain. The decision was made **after reading the schema and the
validator**, not before.

`ScheduledChange` requires `effectiveOn` to be an ISO date — `validateScheduledChange` rejects
anything else — and its certainty gate provides that an active (`pending`) change **must** carry
`certainty: 'enacted-with-date'`, because "only a change that has actually been enacted with a date
may sit in the `pending` pipeline as something the site tells readers will happen". The available
certainty values are `enacted-with-date`, `announced`, `proposed` and `uncertain`; **there is no
value for enacted-without-a-date**, and no way to omit the date.

| Candidate                                                            | Decision      | Why                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regulation (EU) 2023/1543 becoming applicable, 18 August 2026        | **NOT ADDED** | The date is **past**. The model exists to stop a page describing superseded law as current; nothing in the corpus was written against the pre-application state, so there is no earlier position to keep distinguishable. The page states the application date in its own text.                                                                                                                                                                                                                                                         |
| Directive (EU) 2023/1544 transposition deadline, 18 February 2026    | **NOT ADDED** | Also past — and the operative fact, whether any Member State has actually transposed, is **NOT RESEARCHED**. A record would have to assert a transition this wave did not establish.                                                                                                                                                                                                                                                                                                                                                    |
| Second Additional Protocol entry into force                          | **NOT ADDED** | There is **no date**. `effectiveOn` cannot be populated without inventing one, and an invented date would then arm the staleness gate against a deadline with no legal basis.                                                                                                                                                                                                                                                                                                                                                           |
| Regulation (EU) 2023/1543 Art. 19 decentralised IT system obligation | **NOT ADDED** | This was the strongest candidate and it fails for the same reason. The obligation is genuinely future and its trigger is stated in the instrument — "one year after the adoption of the implementing acts referred to in Article 25" — but whether those acts have been adopted was NOT RESEARCHED, so the trigger date is unknown. Representing it would require an invented `effectiveOn` **and** `certainty: 'enacted-with-date'`, which would tell readers a specific thing will happen on a specific date that no source supports. |

**And no new temporal type was created.** Part X permits one only where `ScheduledChange`
demonstrably cannot model the facts. It demonstrably cannot model an enacted-but-undated future
obligation — but the correct response to that is to state the fact in prose, where it can be
expressed exactly ("applies one year after implementing acts whose adoption this wave did not
establish"), rather than to build a second temporal model for one instrument. The finding is
carried on the page, in the source record, and here.
