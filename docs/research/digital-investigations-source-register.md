# Wave 22 source register — digital investigations and investigative authority

Twelve records added, one extended, zero duplicated. Every record states the elements Part D
requires: jurisdiction, publisher, instrument, relevant sections, language, verification date,
propositions supported, limitations, and current/amended status.

## 1. Records added

| ID                                    | Jurisdiction | Instrument and sections                                                    | Language           | Verified   |
| ------------------------------------- | ------------ | -------------------------------------------------------------------------- | ------------------ | ---------- |
| `coe-cybercrime-convention`           | INT          | Convention on Cybercrime (ETS 185), **Arts. 14–21**                        | en, fr (authentic) | 2026-09-05 |
| `de-stpo-94-beschlagnahme`            | DE           | StPO **§ 94** — Sicherstellung und Beschlagnahme                           | de (authoritative) | 2026-09-05 |
| `de-stpo-110-durchsicht`              | DE           | StPO **§ 110** — Durchsicht von Papieren und elektronischen Speichermedien | de                 | 2026-09-05 |
| `de-stpo-100a-tkue`                   | DE           | StPO **§ 100a** — Telekommunikationsüberwachung                            | de                 | 2026-09-05 |
| `de-stpo-100b-online-durchsuchung`    | DE           | StPO **§ 100b** — Online-Durchsuchung                                      | de                 | 2026-09-05 |
| `de-stpo-100e-verfahren`              | DE           | StPO **§ 100e** — Verfahren bei Maßnahmen nach den §§ 100a bis 100c        | de                 | 2026-09-05 |
| `de-stpo-100g-verkehrsdaten`          | DE           | StPO **§ 100g** — Erhebung von Verkehrsdaten                               | de                 | 2026-09-05 |
| `de-stpo-100j-bestandsdaten`          | DE           | StPO **§ 100j** — Bestandsdatenauskunft                                    | de                 | 2026-09-05 |
| `de-stpo-101-verdeckte-massnahmen`    | DE           | StPO **§ 101** — Verfahrensregelungen bei verdeckten Maßnahmen             | de                 | 2026-09-05 |
| `es-lecrim-medidas-tecnologicas`      | ES           | LECrim **arts. 588 bis a, 588 bis b, 588 bis e**                           | es                 | 2026-09-05 |
| `us-18usc-2703-stored-communications` | US           | **18 U.S.C. § 2703** (Stored Communications Act)                           | en                 | 2026-09-05 |
| `us-18usc-3127-pen-register`          | US           | **18 U.S.C. § 3127(3)**                                                    | en                 | 2026-09-05 |

The eight German records follow the register's established per-section convention for the StPO —
seventeen such records already existed — because each section has its own official URL and keeping
one record per URL is what makes the URL↔claim alignment exact.

## 2. Record extended

`jp-code-criminal-procedure` — extended rather than duplicated, with **Arts. 197(1), 218(1) and
(3), 219(1) and 222-2**, read from the Japanese Law Translation database's own XML export of the
Code fetched with the law page as referrer.

## 3. Source-access problems, recorded honestly

Part D forbids claiming a blocked source was read. Three occurred.

| Source                                              | Problem                                          | What was done                                                                                                                                                                                                                                                                                    |
| --------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **coe.int / rm.coe.int** (Convention on Cybercrime) | Both returned **HTTP 403** to automated requests | The Convention was read from the **official treaty database of the Government of the Netherlands** (wetten.overheid.nl, BWBV0001839), which publishes the authentic English text. This is the same official database Wave 21 used for the European Convention. The access note is on the record. |
| **uscode.house.gov**                                | Timed out with no response, twice                | —                                                                                                                                                                                                                                                                                                |
| **govinfo.gov**                                     | Returned **HTTP 502**                            | The two US sections were read from the **Legal Information Institute**, which reproduces the United States Code verbatim rather than summarising it. Both records carry the access note in their first sentence, and both are cited **for statutory wording only**.                              |

The LII fallback is a Tier-2 host carrying Tier-1 text, and Part D's warning is against letting a
_secondary summary_ carry the scope of a coercive power. Every proposition drawn from those two
records is a quotation or a close paraphrase of one, and both records say so.

## 4. Temporal status of each record

Part U requires an amendment, repeal and commencement audit. The result:

| Record                           | Temporal position                                                                                                                                                                                                                                                                  |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| All eight German records         | Current consolidated text at the verification date. The gesetze-im-internet pages display no _Stand_ date, so currency rests on the publisher — a limitation carried on each record, following the convention the existing StPO records set.                                       |
| `es-lecrim-medidas-tecnologicas` | The articles were **inserted by Ley Orgánica 13/2015 of 5 October**, published 06/10/2015 and **in force from 06/12/2015**. The BOE prints that provenance against each article and the record reproduces it, because the chapter postdates the rest of the 1882 Act by 133 years. |
| Both US records                  | Current codified text as reproduced at the verification date.                                                                                                                                                                                                                      |
| `coe-cybercrime-convention`      | In force. Two additional protocols exist; the **Second Additional Protocol** on enhanced co-operation and disclosure of electronic evidence was located but **not read**, and the record says so.                                                                                  |
| `jp-code-criminal-procedure`     | **The most significant temporal limitation in the wave.** The translation's version identifier indicates amendments to 2006 and **may lag later amendments**. Only structural propositions present in that version are drawn from it, and the record states this.                  |

**No `ScheduledChange` was added.** Four exist and four remain. No provision cited carries a future
commencement date: the Spanish articles commenced in 2015, the German and US texts are current
consolidations, and the Convention is in force. The Netherlands' new Code of Criminal Procedure
(in force 1 April 2029) is already recorded in prose on `nl-gov-ccp-2029` with a stated reason, and
this wave makes no Dutch claim, so nothing there changes.

## 5. NOT ESTABLISHED and NOT RESEARCHED, by name

Recorded so a later wave does not mistake absence for a finding.

**NOT ESTABLISHED (text read, and it does not say this):**

- The Japanese Code of Criminal Procedure contains **no interception power**. Art. 222-2 states
  that such measures "shall be executed based upon other acts". This is a fact about the Code and
  says nothing about whether Japan has such a power elsewhere — the Act referred to was not read.
- Convention Art. 15(2) does **not** require judicial authorisation. It requires "judicial **or
  other independent** supervision".
- US § 2703(c)(2) requires **no court order at all** for the six enumerated subscriber items.
- German § 100j states **no judicial order** for the ordinary subscriber-data request.

**NOT RESEARCHED (not looked at, and therefore not asserted about):**

- Twelve of the sixteen jurisdictions the brief listed: France, Canada, the United Kingdom,
  Ireland, the Netherlands, Czechia, Switzerland, Brazil, South Africa, Kenya, Australia, New
  Zealand.
- Case law in every system.
- The US Wiretap Act (18 U.S.C. ch. 119) and Fourth Amendment device-search doctrine.
- Spanish LECrim arts. 588 ter to 588 octies in full.
- The Japanese Act on Wiretapping for Criminal Investigation.
- The Convention's Second Additional Protocol; the EU e-Evidence Regulation; the European
  Investigation Order Directive.
- Data-retention mandates, deletion regimes and intelligence-service powers in every system.

## 6. Terminology mismatches recorded

The wave's pages use each system's own term and do not translate one into another:

- German law distinguishes **Sicherstellung** from **Beschlagnahme**, and **Durchsicht** from
  either. English "seizure" covers the first two and "search" is used for the third; none maps
  cleanly.
- **Bestandsdaten**, **Verkehrsdaten** and the Convention's **subscriber information**, **traffic
  data** and **content data** are not interchangeable, and the German and Convention categories
  were not assumed to align.
- **"Warrant"** is a jurisdiction-specific instrument. It appears on these pages only where the
  cited text uses it — Japan's Art. 218, the US § 2703 — and never as this platform's own
  general word for an authorisation.
- **"Wiretap"** appears nowhere. Part I forbids it as universal terminology and no source read
  uses it.
