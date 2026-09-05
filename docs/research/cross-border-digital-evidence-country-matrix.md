# Cross-border digital evidence — comparative matrix (Wave 23)

Status vocabulary is the brief's: **ESTABLISHED** (primary text read and confirmed),
**PARTIALLY ESTABLISHED**, **NOT ESTABLISHED** (text read and it does not say this),
**NOT RESEARCHED** (never rendered as "no"), **FUTURE / NOT YET APPLICABLE**.

**Three international and supranational systems were researched to primary text. No national
implementation was researched for any country.** Part F lists thirteen jurisdictions; the position
on each is in §7, and it is the same position for twelve of them.

## 1. The instruments read

| System            | Instrument                                          | Provisions read                              | Status at 2026-09-05                                                                                                |
| ----------------- | --------------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Council of Europe | Convention on Cybercrime (ETS 185), **Chapter III** | Arts. 23, 25, 27, 29, 30, 31, 32, 33, 34, 35 | in force; Art. 25(2) requires Parties to legislate for Arts. 27–35                                                  |
| Council of Europe | Second Additional Protocol (CETS 224)               | Arts. 6, 7, 8, 9 and the Chapter structure   | concluded 12 May 2022; **no entry-into-force date recorded** in the official Dutch treaty database as at 05-09-2026 |
| European Union    | Regulation (EU) 2023/1543                           | Arts. 3, 4, 8, 13, 17, 18, 34; recital 8     | **applies from 18 August 2026** (Art. 34(2)) — eighteen days before the research date                               |
| European Union    | Directive (EU) 2023/1544                            | Arts. 3, 7                                   | transposition deadline **18 February 2026** (Art. 7(1)); national completion NOT RESEARCHED                         |
| European Union    | Directive 2014/41/EU (EIO)                          | Art. 1                                       | —                                                                                                                   |
| United States     | 18 U.S.C. §§ 2713, 2703(h)                          | full                                         | § 2713 added by Pub. L. 115–141 (CLOUD Act), 23 March 2018                                                          |

## 2. What connects an authority to foreign-held data

This is the wave's central finding, and the three instruments do not agree.

| Instrument                              | Connecting factor                                             | Text                                                                                                                                                                                                                                                                                   |
| --------------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Convention Arts. 29, 31                 | **Where the data is stored**                                  | preservation and access concern data "located within the territory of that other Party" / "located within the territory of the requested Party"                                                                                                                                        |
| Regulation (EU) 2023/1543 Art. 3(1)–(2) | **Where the addressee is**                                    | an order addressed "to a designated establishment or to a legal representative of a service provider offering services in the Union, where that designated establishment or legal representative is located in another Member State bound by this Regulation"                          |
| 18 U.S.C. § 2713                        | **The provider's control, expressly not the data's location** | a provider "shall comply with the obligations of this chapter to preserve, backup, or disclose … within such provider's possession, custody, or control, **regardless of whether such communication, record, or other information is located within or outside of the United States**" |

**Finding.** There is no universal data-location rule, and Part I's warning is vindicated in the
strongest possible way: one instrument keys on the data's territory, one on the addressee's
establishment, and one expressly makes the data's location irrelevant. A page asserting any single
rule would be wrong about two of the three.

## 3. Who a request is addressed to

| Mechanism                                | Runs                                                                                                    | Instrument                              |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| Mutual legal assistance                  | **state → state**                                                                                       | Convention Arts. 25, 27, 29, 31, 33, 34 |
| European Investigation Order             | **state → state**, on mutual recognition, to have measures "carried out in another Member State"        | Directive 2014/41/EU Art. 1(1)–(2)      |
| European Production / Preservation Order | **authority → the provider's designated establishment or legal representative** in another Member State | Regulation (EU) 2023/1543 Art. 3(1)–(2) |
| Protocol Art. 6 request                  | **authority → a domain name registration entity** in another Party                                      | Second Additional Protocol Art. 6(1)    |
| Protocol Art. 7 order                    | **authority → a service provider** in another Party, directly                                           | Second Additional Protocol Art. 7(1)    |
| Protocol Art. 8 order                    | **authority → Party → provider** in the requested Party                                                 | Second Additional Protocol Art. 8(1)    |
| Protocol Art. 9 emergency                | **24/7 point of contact → point of contact**, "without a request for mutual assistance"                 | Second Additional Protocol Art. 9(1)(a) |

**Finding.** Part J's distinction is not a nuance; it is the organising fact. And the EU instrument
is not purely provider-addressed: Regulation Art. 8(1) requires the issuing authority to **notify
the enforcing authority** where the order seeks traffic data (other than identification data) or
content data, and Art. 8(4) gives that notification **suspensive effect** on the addressee's
obligations except in emergencies.

## 4. Preservation and disclosure across borders

| Provision                 | What it does                                                                                                                                                                                                                                                                       | Status      |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Convention Art. 29(1)     | a Party may ask another to preserve data, **in respect of which the requesting Party intends to submit a request for mutual assistance** for search, seizure or disclosure                                                                                                         | ESTABLISHED |
| Convention Art. 29(2)(f)  | the request must state that intention                                                                                                                                                                                                                                              | ESTABLISHED |
| **Convention Art. 29(3)** | "For the purposes of responding to a request, **dual criminality shall not be required** as a condition to providing such preservation"                                                                                                                                            | ESTABLISHED |
| **Convention Art. 29(4)** | a Party that requires dual criminality for _disclosure_ may reserve the right to refuse preservation where it believes the condition cannot be met at disclosure                                                                                                                   | ESTABLISHED |
| Convention Art. 30        | where the requested Party discovers another State's provider was involved, it discloses **enough traffic data to identify that provider and the path** — and may withhold only for a political offence or a threat to sovereignty, security, _ordre public_ or essential interests | ESTABLISHED |
| Convention Art. 31        | mutual assistance to search, seize and **disclose** stored data, "including data that has been preserved pursuant to Article 29"; expedited where data is particularly vulnerable to loss                                                                                          | ESTABLISHED |
| Regulation Art. 3(2)      | a European Preservation Order preserves evidence "**for the purposes of a subsequent request for production**"                                                                                                                                                                     | ESTABLISHED |

**Finding.** Both instruments state the preservation→production relationship _inside the
preservation provision itself_, and the Convention adds something the domestic layer has no
analogue for: **the same data can attract different answers at the two stages**, because dual
criminality is excluded for preservation and may be reserved for disclosure.

## 5. Who may issue, by data category

Regulation (EU) 2023/1543 Art. 4 is the most precisely graduated provision read in this wave.

| Order            | Data                                                                  | May be issued by                                                                                                                                                     | Text      |
| ---------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Production       | subscriber data, or data for the sole purpose of identifying the user | a judge, a court, an investigating judge **or a public prosecutor** — or another competent investigating authority **whose order is then validated** by one of those | Art. 4(1) |
| Production       | traffic data (other than identification data), **or content data**    | a judge, a court **or an investigating judge** — **not a public prosecutor** — or another authority validated by one of those                                        | Art. 4(2) |
| **Preservation** | **any category, including content**                                   | a judge, a court, an investigating judge **or a public prosecutor**                                                                                                  | Art. 4(3) |

**Finding.** One article encodes three distinctions at once: the data category determines the
authoriser; **preservation of content may be ordered by a prosecutor where production of the same
content may not**; and issuing is separable from validating.

## 6. Data categories are not the same across instruments

| Category       | Convention (Art. 18(3), read in Wave 22)                                                                                  | Regulation (EU) 2023/1543                                                                                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Subscriber     | "subscriber information": information held by a provider relating to subscribers "**other than traffic or content data**" | Art. 3(9) "subscriber data": subscription-related identity data and service type/duration, **expressly excluding passwords or other authentication means**                       |
| Identification | **no counterpart**                                                                                                        | Art. 3(10) "**data requested for the sole purpose of identifying the user**" — a distinct fourth category with its own authorisation rule in Art. 4(1)–(2)                       |
| Traffic        | traffic data (Arts. 20, 30)                                                                                               | Art. 3(11), an enumerated definition including source and destination, **device location**, date, time, duration, size, route, format, protocol, and session log-in/log-off data |
| Content        | content data (Art. 21)                                                                                                    | Art. 3(12): any data in digital format "other than subscriber data or traffic data"                                                                                              |

**Finding.** The EU instrument defines **four** categories where the Convention defines three, and
the fourth is not a sub-case: it carries its own authorisation rule and its own carve-out from the
notification duty in Art. 8(1). A reader who learned the categories from the domestic layer would
be wrong about the EU instrument.

## 7. Jurisdictions — what was and was not researched

**NOT RESEARCHED, and therefore asserted about nowhere in this wave:** Germany, Spain, France,
Ireland, the Netherlands, Czechia, Canada, the United Kingdom, Switzerland, Japan, Australia and
New Zealand. No national implementing legislation, no national central authority designation, no
national transposition measure and no Party-status record was read for any of them.

**United States — PARTIALLY ESTABLISHED.** 18 U.S.C. § 2713 and § 2703(h) were read. Nothing else:
executive-agreement coverage under § 2523 was **NOT RESEARCHED**, and Part R expressly permits
deferring it.

**Party and ratification status for ETS 185 and CETS 224 — NOT RESEARCHED.** The Council of Europe
Treaty Office returned HTTP 403 to three separate URL forms. Secondary summaries giving a
ratification count were found and are **not used**, because a treaty register is exactly the kind
of fact that must come from the register.

## 8. NOT ESTABLISHED findings

Stated as facts about texts, never about legal systems.

- **The Convention's cooperation chapter is not self-executing.** Art. 25(2) requires each Party to
  adopt legislative and other measures to carry out the obligations in Arts. 27 to 35.
- **The Convention's own MLA procedure is a fallback.** Art. 27(1) applies only "where there is no
  mutual assistance treaty or arrangement on the basis of uniform or reciprocal legislation in
  force between the requesting and requested Parties".
- **Transborder access under the Convention is narrow.** Art. 32 permits access without another
  Party's authorisation in exactly two situations: publicly available (open source) data, and data
  accessed or received with "the lawful and voluntary consent of the person who has the lawful
  authority to disclose the data". There is **no unilateral remote-access provision**.
- **The Protocol's direct-to-provider route is the narrowest.** Art. 7 reaches **specified, stored
  subscriber information only**. Traffic data requires the authority-to-authority route in Art. 8.
  Content data appears in neither, and stays with Convention MLA.
- **The Protocol does not impose a uniform authorisation rule.** Art. 7(2)(b) allows a Party to
  _declare_ that orders to providers in its territory must be issued by or under the supervision of
  a prosecutor or other judicial authority, or otherwise under independent supervision. It is a
  declaration, not a default.
- **§ 2713 does not confer access anywhere.** It removes the data's location as an answer for a
  provider already subject to the chapter's obligations; it operates on providers, not territory.
