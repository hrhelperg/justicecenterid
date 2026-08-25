# Knowledge Expansion Wave 7 — QA record

Police oversight institutions, phase 2. Ten jurisdictions researched, one institution family
published, two relationship guides published, one existing false equivalence corrected.

## 1. Merge gate

The wave was **stopped once** before it began. `origin/main` was at `32e1b7d` — the Wave 5
merge — and Wave 6 existed only as an unmerged feature branch. Wave 7 could not be built on
`main` without recreating Wave 6's France research, and could not be stacked on the unmerged
branch. The stop was reported and the wave resumed only after Wave 6 was merged.

The gate was then re-run substantively, by content rather than by PR title:

| Check                                                     | Result                                                          |
| --------------------------------------------------------- | --------------------------------------------------------------- |
| Repository                                                | `hrhelperg/justicecenterid`                                     |
| `origin/main` after merge                                 | `de2b757` — Merge PR #24 from `feat/knowledge-expansion-wave-6` |
| Wave 6 an ancestor of `origin/main`                       | Yes                                                             |
| `IGPN` / `IGGN` / `inspection générale` present in `src/` | 4 / 2 / 4 files                                                 |
| Source records                                            | 235, including the ten French primary sources                   |
| `/countries/france/oversight`                             | Published, not deferred                                         |
| Wave 5 artifacts                                          | All present, verified individually                              |
| Working tree                                              | Clean                                                           |
| Base SHA                                                  | `de2b7573db873aded12c6fb38d08d6caf7dbd152`                      |

## 2. Research

Ten jurisdictions. France was carried forward from Wave 6 rather than re-researched.

| Jurisdiction | Tier-1 reached                                      | Bodies                            |
| ------------ | --------------------------------------------------- | --------------------------------- |
| Norway       | Yes — påtaleinstruksen ch. 34, in force 15 Aug 2025 | Spesialenheten                    |
| Czechia      | Yes — Act No. 341/2011 Coll., in force 1 Jan 2026   | GIBS                              |
| South Africa | Yes — IPID Act 1 of 2011, Gazette No. 34298         | IPID                              |
| Kenya        | Yes — IPOA Act Cap. 86; NPS Act Cap. 84 s. 87       | IPOA, Internal Affairs Unit       |
| Ireland      | Yes — PSCSA 2024                                    | Fiosrú, PCSA; 3 historical bodies |
| New Zealand  | Partial — the Authority's own statement by section  | IPCA                              |
| Denmark      | Partial — the Authority's own English pages         | Politiklagemyndigheden            |
| Sweden       | Partial — Polismyndigheten's own Swedish page       | SU, Särskilda åklagarkammaren     |
| Austria      | Yes (corpus) — B-VG Art. 148a                       | Volksanwaltschaft                 |
| France       | Yes (Wave 6)                                        | IGPN, IGGN, DDD, CGLPL            |

**Access limitations.** `legislation.govt.nz` returned HTTP 202 with an empty body and 403 to
automated requests; `nzlii.org`, `saflii.org` and Austria's `ris.bka.gv.at` returned 403 or a bot
challenge. Per the rule already carried on `SourceRecord.verificationMethod`, none of that was
treated as evidence against those sources. Nothing is cited from a document that was not read:
New Zealand is cited from the Authority's own statement of its statutory functions, South Africa
from the Government Gazette PDF on `gov.za`, and Austria from the source already in the corpus.

Nine new sources, 235 → 244. All `content-confirmed`.

## 3. Taxonomy

Fourteen candidates assessed; three routes published.

| Outcome   | Count | Members                                                                                                                          |
| --------- | ----- | -------------------------------------------------------------------------------------------------------------------------------- |
| Published | 3     | `independent-police-investigative-body`, `internal-vs-external-police-oversight`, `police-complaints-vs-criminal-investigation`  |
| Merged    | 3     | police conduct authority, police ombudsman, who-disciplines-police                                                               |
| Deferred  | 5     | police inspectorate, internal affairs, professional standards unit, police complaints commissioner, civilian police review board |
| Rejected  | 3     | police integrity commission, external police oversight authority, independent-police-investigations                              |

**Wave 6's open question is closed.** It made reopening `police-inspectorate` conditional on
resolving whether the internal and external forms are one type or two. On Wave 7 evidence they
are **two** — France's inspections belong to the forces they examine and investigate individuals;
Ireland's PCSA is external, statutory and does not investigate individuals at all. A single page
would have to say an inspectorate both is and is not part of the police. The route stays
deferred, now with the question answered rather than open.

**The correction the wave forced.** Wave 5 listed Norway and Czechia as country examples of
`independent-police-complaints-body`. Neither takes complaints: Norway's chief must reject a
report that discloses no offence, and the Czech Act contains no complaint procedure for the
forces it investigates. Both notes were rewritten as limits on that page and both bodies moved to
the new family. This is the substantive reason the new route exists.

## 4. Structured data added

`OversightBodyProfile` records the assertable facts behind the prose: position, police-specificity,
temporal state, successor linkage, translation status, and a `powers` map over nine powers with
five support values. Seven profiles across six jurisdictions.

**`oversightPosture` was left unchanged.** The matrix has many dimensions and the temptation was
to add enums for them. The failure mode they would guard against — claiming independence from
position — is not a posture problem, it is a claim problem, and it is handled by the
assertion-aware independence check instead. The smallest correction was no correction.

**`not-established` is a first-class value.** Whether Denmark's authority holds prosecuting
authority was not reached. Recording that as `no` would publish a limit on the body's powers that
no source establishes. A test asserts the value and asserts the page says so.

## 5. Validation

| Gate                               | Result                                         |
| ---------------------------------- | ---------------------------------------------- |
| `npm ci`                           | clean                                          |
| `npm run format:check`             | pass                                           |
| `npm run lint`                     | pass, no warnings                              |
| `npm run typecheck`                | pass                                           |
| `npm test`                         | **2724 passed / 59 files**                     |
| `npm run build`                    | pass                                           |
| `npm run verify:output`            | **356 routes / 358 pages / 356 sitemap URLs**  |
| `npm run test:e2e`                 | **446 tests, 442 passed, 4 skipped, 0 failed** |
| Route matrix (local static server) | **420/420** — 356 routes + 64 must-404         |

### Deltas against the baseline

| Metric                  | Baseline  | Wave 7    | Delta     |
| ----------------------- | --------- | --------- | --------- |
| Routes                  | 353       | 356       | +3        |
| Exported pages          | 355       | 358       | +3        |
| Sitemap URLs            | 353       | 356       | +3        |
| Unit tests              | 2620      | 2724      | +104      |
| Unit test files         | 58        | 59        | +1        |
| Playwright tests        | 406       | 446       | +40       |
| Institution records     | 15        | 16        | +1        |
| Law-enforcement guides  | 15        | 17        | +2        |
| Source records          | 235       | 244       | +9        |
| ScheduledChange records | 4         | 4         | 0         |
| Restricted claims       | 10        | 10        | 0         |
| **JS bundle**           | 663,403 B | 663,403 B | **0**     |
| **CSS bundle**          | 29,625 B  | 29,625 B  | **0**     |
| `out/`                  | 83,724 KB | 82,684 KB | −1,040 KB |

The `out/` figure fell because the baseline was measured over a directory carrying artefacts from
earlier builds; the Wave 7 figure is from a clean `rm -rf out .next` rebuild. No content was
removed. Both other size figures are byte-identical, which is the meaningful performance result:
**no new client runtime, no graph library, no new CSS rule.**

## 6. Mutation proofs

Six mutations were applied to real source files, the suite was run, and the failure was read
before the proof was accepted. Each was reverted and the tree confirmed clean.

| #   | Mutation                                                                        | Expected | Observed                                                                                |
| --- | ------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------- |
| M1  | Replace Kenya's country-scoped source on `ke-ipoa-body` with a global UN source | FAIL     | FAIL — `ke-ipoa-body has no source scoped to KE`                                        |
| M2  | Flip `cz-gibs-body` from external to internal                                   | FAIL     | FAIL — `cz-gibs-body is not external: expected 'internal' to be 'external'`             |
| M3  | Give Czechia a prosecuting power its Act withholds                              | FAIL     | FAIL — 2 tests: the power assertion, and the "only Norway prosecutes" assertion         |
| M4a | Mark GSOC `current`                                                             | FAIL     | FAIL — 2 tests: the temporal assertion, and the non-vacuity guard on the historical set |
| M4b | Name GSOC as the current Irish country example                                  | FAIL     | FAIL — `expected 'The Garda Síochána Ombudsman Commissi…' to match /Fiosrú/`            |
| M5  | Publish `police-inspectorate` by cloning the investigative family               | FAIL     | FAIL — 4 tests, including the Wave 5 and Wave 6 rejection guards                        |
| M6  | Insert "Every such body is independent." into `presenceNote`                    | FAIL     | FAIL — `unattributed independence claim: Every such body is independent.`               |

No exit code was masked. M3, M4a and M5 each failed more than one assertion, which is the
intended overlap: a taxonomy error should be caught by the wave that rejected the family as well
as by the wave that published its neighbour.

## 7. The independence check, and why it is not a substring block

Part I required an assertion-aware check. The first implementation keyed on vocabulary and failed
immediately on the sentences the wave most wanted to publish — "being outside the police is not
the same as being independent" is the thesis of one of the new guides.

The shipped check keys on **predication**, not vocabulary. `Independent complaints bodies` is a
type name and asserts nothing about any body; `the Directorate is independent` predicates
independence of a subject and must name its instrument. Two further refinements were forced by
its own failures:

- **Definition-list terms carry no full stop**, so a term and the first sentence of its
  description were being read as one sentence. The splitter now breaks on line boundaries first.
- **`Misconception.claim` is a quoted falsehood**, printed beside its correction. Feeding those
  into the check required the page to source propositions it exists to deny. Claims are excluded;
  realities are kept.

The check carries its own non-vacuity guard: six sentences that must NOT be flagged, and one that
must be.

## 8. Adversarial QA

The fifteen questions were run against all three new pages and the two corrected ones. Findings:

| #   | Finding                                                                                                                                                                        | Severity | Resolution                                                                                                          |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------- |
| 1   | Institution page said the rest "must refer to a prosecution service that decides independently of them" — loose phrasing that reads as an independence claim about prosecutors | P2       | Rewritten to "which takes the charging decision itself"                                                             |
| 2   | Stages guide said "two of the most independent bodies in this cluster" — a banned superlative and an unsupported comparison                                                    | P1       | Rewritten to "two bodies in this cluster that sit wholly outside the police"                                        |
| 3   | Stages guide misconception said a prosecutor "decides independently" — same looseness as finding 1                                                                             | P2       | Rewritten to "who takes the charging decision"                                                                      |
| 4   | The Défenseur des droits appeared on the internal/external guide with its powers but not its scope, reading as a French police-oversight body                                  | **P1**   | Its general mandate — one of five, covering security activity generally — added in two places, and locked by a test |
| 5   | The Czech source note did not record the predecessor relationship the page asserts in `historyNote`                                                                            | P2       | Note extended to record §§ 68–70, the transitional provisions establishing it                                       |
| 6   | Two e2e assertions were wrong about which page carried which phrase, and one flagged GSOC appearing inside a legitimate source note                                            | P2       | Assertions corrected; the GSOC check now scopes to body copy above the sources, with the reason recorded            |

All six were fixed. No P0 findings. Nothing was left open.

Questions that returned clean on first pass: is this one institution family (yes — six
jurisdictions, and the two purest cases share a mandate the complaints family does not have); are
we grouping by name (no — the merge decisions exist because three countries use three names for
one function); is the body current (checked structurally); does it prosecute (only Norway, and a
test pins that); does it discipline (none, and a test forbids `yes`); is a one-country structure
presented globally (no — a test requires two jurisdictions); does another country provide a
counterexample (Sweden, and it is published as one); no `watchdog` framing appears anywhere.

## 9. Safety, neutrality and restricted claims

No statistics were added. The new pages carry no percentage, no complaint volume, no
substantiation rate and no trust metric — asserted by test. `ScheduledChange` and restricted-claim
counts are unchanged at 4 and 10.

Neither framing the brief names appears. No procedural guidance for defeating oversight appears;
a test forbids the shapes it would take.

## 10. Accessibility and browser QA

40 Playwright tests over the three new routes, in desktop and mobile Chromium: single `h1`,
sources landmark, breadcrumb navigation, ecosystem banner, cookie-settings control, unique
absolute canonical, JSON-LD carrying no `GovernmentOrganization` or `PoliceStation`, no horizontal
overflow at 320 px or at 200 % text, and keyboard reachability from the skip link into `main`.

One test targets the specific risk this wave introduces: the longest multilingual institution
names — _Generální inspekce bezpečnostních sborů_ and _Den Uafhængige Politiklagemyndighed_ — are
asserted present and asserted not to overflow at 320 px.

## 11. Country oversight modules

**All deferred.** Kenya came closest: two bodies, both from Tier-1 statute, plus the DPP
relationship. It was still deferred, because a country oversight module needs the whole system —
the National Police Service Commission, the courts' supervisory role, and the appointment and
removal of the Inspector-General were not researched. One or two bodies is not a system.

## 12. Limitations

- Denmark, New Zealand and Sweden rest on institutional self-description rather than statute.
  Each is the body's own account of its own legal functions, cited by section where the body
  gives sections, and each source note says what was not established.
- Whether Denmark's authority prosecutes is unresolved and recorded as `not-established`.
- Sweden's SU has no formal legal instrument in the corpus; only the police authority's account
  of its position.
- The internal/external inspectorate question is answered but the external form still has no
  second body. Scotland's HMICS and England and Wales's HMICFRS are the obvious candidates and
  were not researched, so they are named here as a direction and nowhere as evidence.
