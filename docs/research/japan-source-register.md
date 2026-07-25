# Japan source register

**Research date:** all sources read or retrieved and confirmed **2026-07-25**.
**Registry:** `src/content/sources.ts`, ids prefixed `jp-`.

## Access standard, stated plainly

Some Japanese official sites block or truncate automated requests while serving normally to a
browser, and the National Police Agency's flagship overview is a large PDF. The master
specification permits a script-blocked or awkward-to-fetch official source to be used where it
can be independently verified through a reader-accessible official document. Applied here:

| Access path                                                                                                                                 | Sources                                                                                                                                                             | What it means                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Direct read** (WebFetch reached the page)                                                                                                 | `jp-constitution`, `jp-code-criminal-procedure`, `jp-law-translation-policy` (japaneselawtranslation.go.jp); `jp-moj-prosecutors`, `jp-moj-corrections` (moj.go.jp) | Strongest. Verbatim quotes are taken only from these.                                                      |
| **Direct PDF extraction** (report fetched as a file and its text extracted)                                                                 | `jp-npa-police-of-japan-2020` (npa.go.jp)                                                                                                                           | The NPA's own report; wording and figures read from the extracted text.                                    |
| **Search retrieval of the exact official page** (per-page fetch truncated; content obtained via search of that page and cross-corroborated) | `jp-courts-judicial-system` (courts.go.jp)                                                                                                                          | The reader-accessible official document behind the block. Stated as sourced facts, not verbatim quotation. |

No verbatim quotation is attributed to a source that was not read in full.

## Translation status — the distinctive column for this country

Two sources are **statute translations**. The Ministry of Justice's Japanese Law Translation
database states its English texts "are to be used solely as reference materials … with only the
original Japanese texts having legal effect". Both therefore carry `translationStatus:
'official-reference'` and `authoritativeLanguage: 'ja'` in the registry, and the pages rely on
the English only for what a provision does, never for its precise wording. Every other source is
an institution's own English description of itself (`translationStatus: 'not-a-translation'`).

## The register

| id                            | Publisher                              | Supports                                                                                                                                                                                                                                                                                                                                                                                                                           | Translation status                    |
| ----------------------------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| `jp-constitution`             | MOJ, Japanese Law Translation database | Diet as sole law-making organ (Art 41); judicial power vested in the Supreme Court and lower courts, no extraordinary tribunal, independent judges (Art 76); local self-government fixed by law (Art 92)                                                                                                                                                                                                                           | official-reference (ja authoritative) |
| `jp-code-criminal-procedure`  | MOJ, Japanese Law Translation database | Police as judicial police officials investigating offences (Art 189); prosecutor may investigate (Art 191); prosecution instituted by a public prosecutor (Art 247)                                                                                                                                                                                                                                                                | official-reference (ja authoritative) |
| `jp-npa-police-of-japan-2020` | National Police Agency                 | NPSC + NPA as the national police organisation; Police Act power to "control and supervise prefectural police forces on matters of national concern"; each prefecture's authority to carry out police duties; Regional Police Bureaus subordinate to the NPA; Koban/Chuzaisho as subordinate units; Tokyo Metropolitan Police Department is Tokyo's prefectural police; the Prime Minister may not directly command the Commission | not-a-translation                     |
| `jp-courts-judicial-system`   | Supreme Court of Japan                 | Supreme Court + high, district, family and summary courts under the Court Act; concrete-case constitutional review; the saiban-in (lay judge) system — begun 21 May 2009, mixed lay/professional panel, certain serious criminal cases only                                                                                                                                                                                        | not-a-translation                     |
| `jp-moj-prosecutors`          | Ministry of Justice                    | Four types of Public Prosecutors' Office (Supreme, high, district, local), corresponding to the courts; attached to the courts but not part of them                                                                                                                                                                                                                                                                                | not-a-translation                     |
| `jp-moj-corrections`          | MOJ, Correction Bureau                 | "Penal institutions" = prisons, juvenile prisons, detention houses; under the jurisdiction of the MOJ, supervised by the Correction Bureau and the eight regional correction headquarters                                                                                                                                                                                                                                          | not-a-translation                     |
| `jp-law-translation-policy`   | MOJ, Japanese Law Translation database | The database's own statement that its translations are reference materials only and the Japanese text alone has legal effect — the evidence for the translation-status treatment                                                                                                                                                                                                                                                   | not-a-translation                     |

## Stated limitations

- **No detention statistic.** Japan's official prison figures are published in linked
  spreadsheet tables and the annual White Paper on Crime (a large PDF that exceeded the fetch
  limit). No properly scoped, verifiable figure could be obtained, so **no Japanese
  detention-capacity claim is published** (A4 deferred). See the model-findings document.
- **No Minister-of-Justice direction over prosecutors.** The Public Prosecutor's Office Act,
  which governs that relationship, is not available in official English translation and was not
  read; the prosecution page states the structure and the charging power only.
- **Constitutional and code provisions** are cited from reference translations; the authoritative
  text of each is Japanese, and no precise legal point rests on the English wording.
