# Wave 21 source register — constitutional rights and fundamental safeguards

Two records added, twelve extended, zero duplicated. Every URL was content-confirmed by reading
the document and locating the provisions cited; HTTP 200 was never treated as verification.

## 1. Records added

Only where the corpus genuinely lacked the instrument. Both additions were checked against the
existing register first, and both survived that check for a stated reason.

| ID                  | Jurisdiction | Instrument                                                                                                           | URL                                                                                            | Verified   | Why it is not a duplicate                                                                                                                                                                   |
| ------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cz-listina`        | CZ           | Charter of Fundamental Rights and Freedoms (Resolution No. 2/1993 Coll.), official English translation, Ústavní soud | `usoud.cz/fileadmin/user_upload/ustavni_soud_www/Pravni_uprava/AJ/Listina_English_version.pdf` | 2026-09-05 | **A separate instrument** from the Ústava held as `cz-constitution`. The Czech constitutional order comprises both, and citing one for the other would be wrong. The note says so in terms. |
| `us-bill-of-rights` | US           | Amendments I–X, National Archives transcript                                                                         | `archives.gov/founding-docs/bill-of-rights-transcript`                                         | 2026-09-05 | The corpus held only `us-const-amend-10` and `us-constitution-suspension-clause`. Neither carries Amendments IV, V or VI.                                                                   |

**Propositions supported.** `cz-listina`: Arts. 4(1)–(4), 7(1), 8(1)–(5), 10(2)–(3), 12(1)–(3),
13, 37(1)–(4), 38(1)–(2), 40(2)–(4), each quoted verbatim in the note. `us-bill-of-rights`:
Amendments IV, V and VI verbatim, plus the rights-holder observation that IV is worded for "the
people" and V for "No person".

**Limitations recorded on both.** `cz-listina` records no decision of the Ústavní soud, no
provision of the trestní řád, and nothing about application. `us-bill-of-rights` carries an
unusually long limitation paragraph, because it is the record most likely to be misread: it
supports what the Constitution _says_ and establishes nothing about American doctrine — no tier
of scrutiny, no exclusionary rule, no warning requirement on custodial interrogation, none of
which was researched.

## 2. Records extended

Twelve. Each was already in the register with a content-confirmed URL, so extending was correct
and adding a second record for the same document would have been the error Part W names.

| ID                | Provisions added by Wave 21                                                                                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `de-grundgesetz`  | Arts. 1(3), 2(1)–(2), 3(1),(3), 8(1)–(2), 9(1), 10(1)–(2), 11(1)–(2), 12(1), 13(1)–(7), 19(1)–(4), 103(1), 104(1)–(4), and the German wording of the _Deutschengrundrechte_ |
| `ch-constitution` | Arts. 5(1)–(4), 10(2), 13(1)–(2), 31(2)–(4), 32(1)–(3), 35(1)–(3), 36(1)–(3)                                                                                                |
| `za-constitution` | ss. 12(1)–(2), 14, 35(1)–(3), 36(1)–(2)                                                                                                                                     |
| `ke-constitution` | Arts. 24(1)–(3),(5), 27(1), 31, 49(1), 50(1)                                                                                                                                |
| `ca-charter-1982` | ss. 1, 7, 8, 9, 10, 11, 13, 14, 24(1)–(2)                                                                                                                                   |
| `br-cf-1988`      | Art. 5º caput, X, XI, XII, LIV–LVII, LXI–LXVI, §§ 1º–3º                                                                                                                     |
| `es-constitution` | Arts. 17(1)–(4), 18(1)–(4), 19, 24(1)–(2), 53(1)–(2)                                                                                                                        |
| `jp-constitution` | Arts. 12, 13, 31–35, 37, 38, 82, 98(2)                                                                                                                                      |
| `nl-constitution` | Arts. 10(1)–(3), 12(1)–(3), 13(1)–(2), 15(1)–(2), 93, 94, 120, 121                                                                                                          |
| `ie-constitution` | Arts. 29.6, 40.4.1°, 40.4.2°, 40.5, 40.6.1°                                                                                                                                 |
| `echr-convention` | Arts. 5(1)–(3), 6(1)–(3), 8(1)–(2), 11(1)–(2)                                                                                                                               |
| `iccpr`           | Arts. 9(1)–(4), 14(1), 14(3)(e)–(g), 14(5)                                                                                                                                  |

## 3. Verified negatives

Four records carry one. Each was established by exhaustive search of a primary text and each is
scoped in the record itself to the **text**, never to the legal system.

| Record            | Search performed                                                                                                                                                                                  | Result                                          | Where used                                                            |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | --------------------------------------------------------------------- |
| `de-grundgesetz`  | `Selbstbelastung`, `schweigen`, `Aussage zu verweigern`, `Geständnis` in the authoritative German; `incriminat`, `silent`, `silence`, `confession`, `witness against` in the official translation | 0 in all nine                                   | `/defence/the-right-to-silence`                                       |
| `echr-convention` | `proportion`, `equality of arms`, `silence`, `self-incrimination`                                                                                                                                 | 0 in all four                                   | `/justice/what-proportionality-requires`, `/defence/equality-of-arms` |
| `iccpr`           | `proportion`, `equality of arms`, `remain silent`                                                                                                                                                 | 0 in all three                                  | same two pages                                                        |
| `ca-charter-1982` | s. 10 read in full for a silence right or a duty to inform of one                                                                                                                                 | absent; s. 10 informs of reasons and of counsel | `/defence/the-right-to-silence`                                       |

The `de-grundgesetz` note states the consequence explicitly: **it does not support any claim that
the principle is absent from German law**, only that it is absent from that constitutional text.
The page relying on it repeats the point and adds that German law recognises the principle.

## 4. Source-access problems, recorded honestly

| Source                                 | Problem                                                                                      | What was done                                                                                                                                                                                                                                         |
| -------------------------------------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fedlex.admin.ch` (Swiss Constitution) | The ELI URL serves an Angular shell to an automated request; the document is not in the HTML | Retrieved the consolidated static text of 3 March 2024 from the Fedlex filestore in German and English and read both. Newer consolidated dates return the shell rather than a document. The record's URL remains the canonical ELI, as it was before. |
| `japaneselawtranslation.go.jp`         | The law page carries only the table of contents; article bodies load via script              | Retrieved the site's own XML export (`s21Ak000010101en3.0.xml`) with the law page as referrer and read it.                                                                                                                                            |
| `echr.coe.int`                         | Returns HTTP 403 to an automated request for the Convention PDF                              | Not used. The Convention text was read from `wetten.overheid.nl`, which is the URL the corpus record already carried and is an official government legislation database.                                                                              |
| `justice.gov.za` PDF                   | Text extraction from the Constitution PDF produced no readable output                        | Chapter 2 was read from the South African Government's own HTML at `gov.za`, which is the publisher named on the existing record.                                                                                                                     |
| French constitutional rights material  | The 1789 Declaration and Conseil constitutionnel jurisprudence were not read                 | **France carries no Wave 21 substantive claim.** Recorded in the matrix as NOT RESEARCHED.                                                                                                                                                            |
| Australian rights material             | No constitutional bill of rights; the statutory charters are sub-national                    | **Australia carries no Wave 21 substantive claim.**                                                                                                                                                                                                   |
| EU Charter / EUR-Lex                   | Not read                                                                                     | Not cited anywhere in the wave.                                                                                                                                                                                                                       |

## 5. Audit against duplication

Before adding anything, the register was searched for every instrument this wave needed. Thirty-six
constitution-like records already existed, covering every jurisdiction on the list except the Czech
Charter and the American criminal-procedure amendments. A test now pins the outcome: for each of
the twelve extended records, no second record shares its URL.
