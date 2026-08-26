# Wave 18 QA record — history of justice institutions

Branch `feat/knowledge-expansion-waves-16-18`. Written 2026-08-26. No push during this wave.

## 1. What shipped

Seven history pages at `/history/{slug}` — the first child routes `/history` has ever had. Five
new sources (`src/content/sources.ts` 283 → 288). Two new types. One new route segment, one new
page component.

Route counts: **443 routes / 445 exported pages / 443 sitemap entries** (Wave 17 closed at
436/438/436). Suite: **5111 → 5247 tests, 72 files**.

| Route                                          | Era           | Anchor evidence                                                       |
| ---------------------------------------------- | ------------- | --------------------------------------------------------------------- |
| `how-athenian-courts-worked`                   | Ancient       | Aristotle, _Athenian Constitution_ chs. 9, 63 (Perseus/Tufts)         |
| `roman-procedure-without-a-police-force`       | Ancient       | Twelve Tables, Table I (Avalon, Yale)                                 |
| `which-magna-carta`                            | Medieval      | Magna Carta 1297; TNA; Library of Congress                            |
| `what-the-habeas-corpus-act-1679-actually-did` | Early modern  | Habeas Corpus Act 1679                                                |
| `the-1689-declarations-and-what-caused-them`   | Early modern  | Bill of Rights [1688]                                                 |
| `who-wrote-the-principles-of-policing`         | Modernisation | Home Office, _Definition of policing by consent_; Met Police Act 1829 |
| `when-policeman-meant-something-else`          | Modernisation | TNA police research guide; Met Police Act 1829                        |

Target was 10–20. Seven is what the source gate allowed, and the brief is explicit that history
may come in below target because source quality is binding.

## 2. Architecture

**`/history/{slug}`, not a parallel system.** `/countries`, `/institutions`, `/professions` and
`/glossary` are already hubs with `[slug]` children. `/history` was a hub without them. Adding
the child segment introduces no new routing concept, uses the existing route registry, sitemap
and output verifier, and let the existing `/history` page become the real index its own text
promised.

**The schema addition is two types, and it was argued for rather than assumed.** The brief
required testing the existing temporal model first:

| Existing model    | Why it cannot carry this                                                                         |
| ----------------- | ------------------------------------------------------------------------------------------------ |
| `TemporalScope`   | `current \| historical \| mixed` — records _that_ something is historical, nothing about _when_. |
| `ScheduledChange` | Models a known future legal change. Repurposing it would be the abuse the brief names.           |
| `TimelineEntry`   | Models a dated point, not a period a page covers.                                                |

So: `HistoricalPeriod` with a required `precision` and a `datingNote` required whenever precision
is not exact; and `ContinuityClaim` naming the modern counterpart a reader will reach for, what
the evidence supports, and a required `basis`. Both are used on every one of the seven pages,
which is the "two independent cases" threshold the brief set, met several times over.

**Deliberately not added**: predecessor/successor edges, an institutional-lineage graph, or any
ontology of historical relations. Nothing in the researched material needed them, and a lineage
model would invite exactly the descent claims this wave exists to refuse.

## 3. Findings

**F1 — the Home Office says there is no evidence linking the principles of policing to Peel.**
An official publication states: "there is no evidence of any link to Robert Peel and it was
likely devised by the first Commissioners of Police of the Metropolis (Charles Rowan and Richard
Mayne)". The correction comes from the department that would benefit most from leaving the
attribution alone. The hedge — "likely" — is the department's and is preserved: the Rowan and
Mayne attribution is recorded as `contested`, not `documented`, and a mutation proves it.

**F2 — the Habeas Corpus Act 1679 did not create habeas corpus, and says so.** Its recital
describes gaolers evading writs already directed to them "contrary to their Duty and the knowne
Lawes of the Land", leaving people bailable by law "long detained in Prison". What the Act added
was three days. The generalisable point is that rights fail through procedural attrition rather
than through denial — which is why a remedy without a timetable is a remedy an institution can
outlast.

**F3 — the Bill of Rights prints its grievances immediately above its declarations.** Excessive
bail required "to elude the Benefitt of the Lawes made for the Liberty of the Subjects"; partial
and unqualified persons served on juries; fines and forfeitures granted before conviction. Then,
in matching order, "That excessive Baile ought not to be required nor excessive Fines imposed nor
cruell and unusuall Punishments inflicted". Rights language here is the shape of a complaint
turned around.

**F4 — a national archive has to warn researchers about the word "police".** The National
Archives records that from as early as 1826 men were employed as "Policemen" on the railways
whose role was to direct trains, like a signalman, and that their records sit among railway staff
records. If the word misleads professional researchers in the right catalogue, it will mislead
anyone drawing a line from a date and a job title to the present.

**F5 — the source contains its own warning against presentism.** Rejecting a theory about Solon,
the _Athenian Constitution_ says "it is not fair to study his intention in the light of what
happens at the present day, but to judge it from the rest of his constitution". The temptation
this platform guards against is not a modern invention.

**F6 — courts can exist without the apparatus we assume around them.** Athens prosecuted through
"the liberty allowed to anybody who wished to exact redress on behalf of injured persons" — no
public prosecutor. Table I of the Twelve Tables, as printed, puts the burden of producing the
defendant on the plaintiff, who calls a witness and only then seizes him — no state summons
enforcement. Both are controls on the assumption that the modern apparatus is what makes
something a legal system.

**F7 — six of seven continuity claims are `none-established`.** That distribution is the wave's
substantive result, and a test asserts that the wave refuses more connections than it asserts.
The one `documented` claim — railway forces incorporated into the British Transport Commission
Police in 1949, London Transport Police absorbed in 1958 — is documented because an archive
records the events, and a test requires any `documented` claim to name what documents it.

## 4. Deferrals, and why

- **Prison history.** The Gaol Act 1823 and the Prison Act 1877 are both **scanned-PDF-only** on
  legislation.gov.uk; the 1877 page states in terms that the item "is only available to download
  and view as PDF". Only the long titles render as text. OCR was rejected as a source standard in
  an earlier wave. A long title is not a page, so the subject is deferred rather than published
  thin. This is the deferral the brief describes as a successful editorial decision.
- **OPCAT and national preventive mechanisms.** ohchr.org returned HTTP 403 behind a JavaScript
  challenge (this affected Wave 17's inspection page too). An access limitation, never evidence.
- **UK Parliament living-heritage pages.** HTTP 403. Not used.
- **A named "first" of anything.** No page claims one, and nine patterns test for it.
- **Colonial policing history**, which the `/history` hub lists as planned. It needs its own
  sources rather than an appendix to a European narrative, and none were obtained.

## 5. Mutation proofs

Eight, under the programme's validity rule. The brief named five specific mutations and all five
are present.

| ID     | Guard attacked                                       | Brief requirement | Result           |
| ------ | ---------------------------------------------------- | ----------------- | ---------------- |
| W18-M1 | a false "first" claim                                | 1                 | failed correctly |
| W18-M2 | presentist institution equivalence                   | 2                 | failed correctly |
| W18-M3 | fake precise dating                                  | 3                 | failed correctly |
| W18-M4 | a historical body rendered as current                | 4                 | failed correctly |
| W18-M5 | a source removed from a load-bearing claim           | 5                 | failed correctly |
| W18-M6 | the Home Office hedge is not hardened                | —                 | failed correctly |
| W18-M7 | the Twelve Tables provenance warning stays put       | —                 | failed correctly |
| W18-M8 | an entry must answer a modern-counterpart assumption | —                 | failed correctly |

**8/8 valid, none surviving.**

## 6. Defects found and fixed during the wave

**D1 — the history pages rendered nothing.** `params` is a `Promise` in this Next version and
the first route implementation treated it as a plain object; every page exported as
`__next_error__` with no `<h1>`, no `<main>` landmark and no canonical. Caught by
`verify:output`, which checks the exported artifact rather than the build's exit code — the build
returned 0. Fixed by matching the `GuidePage` pattern.

**D2 — five sources looked orphaned.** The source-usage test did not know about the history
family. Fixed by adding `HISTORY_ENTRIES` to `ALL_SOURCE_REFERENCES`, with a comment recording
that this is the same failure the France pilot recorded years of waves earlier: a check that does
not know about a content family reports the content as wrong rather than itself.

**D3 — the link-graph audit did not cover `/history`.** Same failure mode, found immediately
after. With history in scope the audit reported all seven pages reachable only from the hub;
fixed with contextual back-links from the guides each page contextualises. Graph after: 415
content routes, zero orphans, zero weakly linked, zero dead ends.

**D4 — a semantic denial the tripwire could not see.** The misconception "The Habeas Corpus Act
1679 created habeas corpus" was answered with "The Act recites that writs … were already being
directed" — accurate, and containing no negation the helper recognises. Now "It did not."

**D5 — four source notes gave territorial extent without a negative-scope clause.** Found by the
cross-wave suite. All four extended.

## 7. Adversarial review — what a historian would attack

| Attack                                                                                         | Response                                                                                                                                                                                                                       |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| "The Twelve Tables text is not authentic."                                                     | Correct, and the page says so before quoting anything: the Tables do not survive, the printed text is a reconstruction from later quotations, and Avalon names no translator. A mutation proves the warning cannot be removed. |
| "451–450 BCE is traditional, not documented."                                                  | The page says "tradition tells us", precision is `disputed`, and a mutation proves the precision field cannot be quietly upgraded.                                                                                             |
| "Rackham's 'jury' imports modern meaning."                                                     | Stated in the source note and on the page, and the continuity claim against the modern jury is `none-established`.                                                                                                             |
| "The Bill of Rights is 1688 or 1689 depending on convention."                                  | Both are given, with the old-style calendar named, and precision is `disputed`.                                                                                                                                                |
| "Attributing the principles to Rowan and Mayne is as unevidenced as attributing them to Peel." | The department's "likely" is preserved and the claim is recorded as `contested`. A mutation proves it cannot be upgraded to `documented`.                                                                                      |
| "Magna Carta's significance is a reception history."                                           | That is what the page says, and it treats reception history as a legitimate subject rather than as debunking.                                                                                                                  |
| "You are quoting an ancient text as evidence of practice."                                     | The uncertainty block says the work is cited for what it says, attributed to it, and is not treated as an independent record of practice.                                                                                      |
| "Coverage is Eurocentric."                                                                     | True, stated on the `/history` hub before this wave and still true. Recorded as a limitation rather than disguised, and colonial policing history is listed as needing its own sources.                                        |

## 8. What was not done, and why

- **No historical images.** None were added. No image was licence-verified to the standard the
  brief requires, and the brief's own rule applies: no image is better than a legally ambiguous
  one. No asset-provenance model was built for assets that do not exist.
- **No institution or profession records.** A dikasterion is not an institution type in the
  registry's sense, and a railway "Policeman" of 1826 is not a profession record. Tests assert
  neither route exists.
- **No new schema beyond the two types**, and no lineage graph.
