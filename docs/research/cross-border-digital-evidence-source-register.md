# Wave 23 source register — cross-border digital evidence

Five records added, two extended, zero duplicated. Every record states the elements Part Y
requires, and every legal-status claim is time-specific.

## 1. Records added

| ID                                       | Scope | Instrument and provisions                                                             | Verified   |
| ---------------------------------------- | ----- | ------------------------------------------------------------------------------------- | ---------- |
| `coe-cybercrime-second-protocol`         | INT   | Second Additional Protocol (CETS 224), **Arts. 6, 7, 8, 9** and the Chapter structure | 2026-09-05 |
| `eu-reg-2023-1543-e-evidence`            | INT   | Regulation (EU) 2023/1543, **Arts. 3, 4, 8, 13, 17, 18, 34** and recital 8            | 2026-09-05 |
| `eu-dir-2023-1544-legal-representatives` | INT   | Directive (EU) 2023/1544, **Arts. 3, 7**                                              | 2026-09-05 |
| `eu-dir-2014-41-eio`                     | INT   | Directive 2014/41/EU, **Art. 1**                                                      | 2026-09-05 |
| `us-18usc-2713-cloud-act`                | US    | **18 U.S.C. § 2713** (added by the CLOUD Act)                                         | 2026-09-05 |

EU instruments take `jurisdiction: 'INT'`, following the convention the existing
`eu-civil-protection-mechanism` record set. The corpus holds no `EU`-scoped source and this wave
did not invent one.

## 2. Records extended

**`coe-cybercrime-convention`** — extended rather than duplicated, because a second record would
have shared the existing record's URL and broken the one-record-per-URL rule the Wave 22 suite
enforces. Its **title was widened** from "Articles 14–21" to "Articles 14–21 and Chapter III
(Articles 23–35)", and the note now carries Arts. 23, 25, 27, 29, 30, 31, 32, 33, 34 and 35. The
STATUS line, which previously recorded that the Second Additional Protocol "was located but NOT
read", now records that it has been read and is held separately.

**`us-18usc-2703-stored-communications`** — extended with **§ 2703(h)**, the comity and
motion-to-quash provision, under the same access note.

## 3. Treaty-status facts recorded as separate facts

Part Y requires signature, ratification and entry into force to be recorded separately and never
inferred from one another. What each record actually establishes:

| Instrument                 | Recorded                                                                                                                                                                                                                          | Not recorded                                                                                                                   |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Convention on Cybercrime   | in force; Art. 25(2) requires Parties to legislate for Arts. 27–35                                                                                                                                                                | **Party list, signature dates, ratification counts — NOT RESEARCHED**                                                          |
| Second Additional Protocol | concluded **12 May 2022**; the official Dutch treaty database, on a page stating "Informatie geldend op 05-09-2026", leaves the entry-into-force column **empty** and marks every article "[Tekst zonder datum inwerkingtreding]" | **entry-into-force date and ratification count — NOT RESEARCHED / NOT ESTABLISHED**                                            |
| Regulation (EU) 2023/1543  | Art. 34(2): **"It shall apply from 18 August 2026"** — applicable at the research date                                                                                                                                            | the Art. 19 decentralised-IT-system trigger, which runs one year after implementing acts whose adoption was **NOT RESEARCHED** |
| Directive (EU) 2023/1544   | Art. 7(1): transposition **by 18 February 2026** — deadline past                                                                                                                                                                  | **whether any Member State has transposed — NOT RESEARCHED for any Member State**                                              |
| Directive 2014/41/EU       | Art. 1 only                                                                                                                                                                                                                       | temporal status, refusal grounds, time limits — not read                                                                       |
| 18 U.S.C. §§ 2713, 2703(h) | current codified text; § 2713 added 23 March 2018                                                                                                                                                                                 | **executive-agreement coverage under § 2523 — NOT RESEARCHED**                                                                 |

## 4. Source-access failures

| Host                                                                              | Result                        | Consequence                                                                                                                     |
| --------------------------------------------------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `www.coe.int` — Treaty Office, `treaty-detail` and `signatures-by-treaty` modules | **HTTP 403** on two URL forms | Party lists and ratification counts for ETS 185 and CETS 224 are **NOT RESEARCHED**, and no count appears anywhere in this wave |
| `rm.coe.int`                                                                      | **HTTP 403**                  | same                                                                                                                            |
| `uscode.house.gov`                                                                | timed out, no response        | US provisions read from the Legal Information Institute's verbatim reproduction, with the access note on each record            |
| `www.govinfo.gov`                                                                 | **HTTP 502**                  | same                                                                                                                            |

Both Council of Europe instruments were therefore read from the **official treaty database of the
Government of the Netherlands**, which publishes the authentic English text and timestamps its own
currency — the same database Wave 21 used for the European Convention on Human Rights and Wave 22
for the Convention on Cybercrime.

**A search engine returned secondary summaries stating a ratification count for CETS 224. They are
not used.** Part Y requires primary authoritative sources for legal-status claims, and a treaty
register is exactly the kind of fact that must come from the register rather than from a summary of
it.

## 5. What each record may not be used for

- **Neither Council of Europe record establishes any Party's domestic law.** Both are obligations
  to legislate, and the Convention says so about itself in Art. 25(2).
- **Neither EU record establishes any Member State's arrangements.** The Regulation is directly
  applicable to Member States bound by it; the Directive requires transposition, and no national
  measure was read.
- **The US records establish statutory wording only** — no constitutional doctrine, no case law,
  and no list of qualifying foreign governments.
- **No record supports a claim about how quickly, how often or how willingly any state or provider
  responds.** No such figure exists in this wave.
