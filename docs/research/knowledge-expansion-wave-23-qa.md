# Wave 23 QA — cross-border digital evidence and international cooperation

Central question: what legal mechanisms allow justice authorities to obtain digital evidence across
borders without treating national investigative power as globally self-executing?

## 1. Deltas

| Measure          | Before (`3045bc4`) | After | Delta       |
| ---------------- | ------------------ | ----- | ----------- |
| Published routes | 481                | 489   | +8          |
| Exported pages   | 483                | 491   | +8          |
| Sitemap URLs     | 481                | 489   | +8          |
| Source records   | 339                | 344   | +5          |
| Unit tests       | 7,015              | 7,365 | +350        |
| Unit test files  | 77                 | 78    | +1          |
| Playwright tests | 1,200              | 1,322 | +122        |
| E2E specs        | 16                 | 17    | +1          |
| `MUST_404` paths | 147                | 152   | +5          |
| Client JS        | —                  | —     | **0 bytes** |

No file under `src/app`, `src/components` or `src/lib` was touched. No CSS, no component, no
visualisation library. The wave is content, sources, tests and docs.

## 2. Link graph

491 pages, **0 orphans, 0 weakly linked, 0 dead ends** — unchanged from the baseline, with eight
pages added. Six inbound links were added from Wave 21 and Wave 22 pages, so the new cluster is
reachable from the layer above it rather than only from the section hub:

| From (existing page)                                 | To (new)                                          |
| ---------------------------------------------------- | ------------------------------------------------- |
| `legal-authority-and-technical-capability`           | `jurisdiction-over-foreign-held-data`             |
| `preserving-data-and-producing-it`                   | `cross-border-preservation-and-disclosure`        |
| `content-and-communications-data`                    | `data-categories-across-instruments`              |
| `who-authorises-a-digital-investigative-measure`     | `european-production-and-preservation-orders`     |
| `international-rights-and-domestic-law` (W21)        | `when-a-cooperation-instrument-starts-to-operate` |
| `what-happens-to-unlawfully-obtained-evidence` (W19) | `european-production-and-preservation-orders`     |

Route matrix against a local origin: **641 checks, 0 failed**, including the five newly rejected
paths, which 404 with no fallback masking.

## 3. Mutation proofs — 15 run, 15 valid, 15 caught, 1 caught only after the fix it forced

Every proof ran from a clean tree, asserted anchor uniqueness, verified the file hash changed,
confirmed the diff touched exactly one file, read the test exit code directly, and verified the
tree was clean after revert.

| Id     | Mutation                                                  | Result                                  |
| ------ | --------------------------------------------------------- | --------------------------------------- |
| W23M1  | "A domestic warrant is valid worldwide"                   | CAUGHT                                  |
| W23M2  | "All cross-border requests use the same mechanism"        | CAUGHT                                  |
| W23M3  | Delete the Art. 29(3) quotation, overstate its effect     | CAUGHT                                  |
| W23M4  | Over-read Art. 32 into a general access power             | CAUGHT                                  |
| W23M5  | "A Directive applies in the Member States"                | CAUGHT                                  |
| W23M6  | Flatten the Art. 4 authorisation ladder to one authoriser | CAUGHT                                  |
| W23M7  | Extend the Protocol's direct route to content             | CAUGHT                                  |
| W23M8  | Provider compliance scorecard (Part U)                    | CAUGHT                                  |
| W23M9  | Operational evasion guidance (Part T)                     | CAUGHT                                  |
| W23M10 | Response-time average and disclosure rate (Part AB)       | CAUGHT                                  |
| W23M11 | Block cites a source its guide does not declare           | CAUGHT                                  |
| W23M12 | Markdown link in misconception text, which renders raw    | CAUGHT                                  |
| W23M13 | Bare assertion with the whether-frame removed             | CAUGHT                                  |
| W23M14 | "United States law overrides foreign law"                 | CAUGHT                                  |
| W23M15 | "has been ratified by 70 Parties"                         | **SURVIVED**, then CAUGHT after the fix |

### The finding worth more than the proofs

**W23M15 defeated the guard by changing word order.** The first form of the ratification guard
matched `\d+ (Parties|States) … ratified` — "70 Parties have ratified". The mutation wrote "has been
ratified by 70 Parties", which is the same fact in the more natural order, and every one of the 199
tests passed. A Part AB restricted claim could have shipped.

The repair is not a longer regex for its own sake. It covers both orders, and it runs as a **raw
filter** rather than through the denial-aware helper, on the reasoning that a count is a count
wherever the number sits and however it is framed — the honest way to say this is that the number
was not researched, and that sentence carries no digit at all.

**W23M13 exists to check the helper this wave introduced.** `framedAsUnknown` (below) neutralises a
stance that sits inside a "whether … was not researched" frame. A helper that suppresses findings is
a liability unless it is proved not to over-suppress, so W23M13 removes the frame and leaves the
bare assertion — "Member States have transposed Directive (EU) 2023/1544, so the Directive is
implemented" — and confirms it is still caught.

## 4. Adversarial QA

Twenty lenses. Seven findings, all reproduced before being acted on; twenty-one candidates refuted.

### P1 — would have shipped something wrong

**1. The EU page did not link to the Protocol's direct route.** Both instruments address a provider
in another country directly, and that pair is the comparison a reader most needs; the page linked
to three siblings and not to that one. Reproduced by reading the built HTML (five internal links,
none of them the Protocol page). Fixed with a prose link that says what the difference is — the
Protocol route reaches a narrower category — rather than a bare "see also".

**2. The ratification-count guard matched one word order.** See W23M15 above.

### P2 — test defects, no reader impact

**3. The JSON-LD guard searched serialised text rather than `@type`.** It failed on six pages
because this wave's flagship instrument is called "European **Product**ion Orders", and `Product` is
a forbidden schema type. A guard that fires on a correct page is a guard that gets deleted, so it
now walks the parsed JSON and collects `@type` values. _Earlier waves' specs still use the substring
form; they pass today because no source title in those waves contains a schema-type word. Left
unchanged — this wave does not rewrite earlier waves' tests — and recorded here as a known
limitation._

**4. The form-number safety alternative ran under `/i`.** `Form [A-Z0-9-]{2,}` under a
case-insensitive flag matched "in**form the**", "uni**form or**" and "**form of** a criminal
offence" — seven false positives, every one of them quoted primary law. It is now case-sensitive
and requires a digit, because a form number is a proper noun with a number in it.

**5. `deniesForward` misreads a research-boundary disclosure.** "Whether any Member State has
transposed Directive (EU) 2023/1544 was NOT RESEARCHED for any Member State" contains the very
proposition it disclaims, and the disclaimer sits _after_ it — so a check that looks for a governing
negation _before_ the stance reads the sentence as an assertion. Three of the wave's most careful
sentences are that shape. Added `framedAsUnknown`, which requires **both** a subordinating
"whether"/"if" ahead of the stance **and** an epistemic main clause, so a bare assertion cannot be
laundered by prefixing a conjunction. Proved by W23M13.

**6. A misconception carried `**` emphasis.** Misconception text renders raw. Caught on the first
run by the existing corpus guard from Wave 19 — which is that guard working, and is recorded here
because it is the fourth consecutive wave in which this specific mistake was made and caught.

**7. The uncertainty-disclosure guard was too narrow.** It required "not researched" / "was not";
the spine page discloses its limits as "**No** national implementing legislation **was read** for
any country" and "a deliberate limit on the research". The guard demanded one phrasing of honesty
and would have pushed future pages toward it.

### Refuted — checked, not defects

Protocol status consistent across all six mentions; `18 August 2026` consistent across six, `18
February 2026` across three, `12 May 2022` across six, `5 September 2026` across nine; no American
orthography (`-ize` hits were "seize" and "size"); zero occurrences of better / superior / best /
gold standard / should adopt / more advanced; `always` 0, `every State` 0, `all States` 0; all
twelve occurrences of "must" are quotations or an instrument's own obligation, none a directive to
the reader; source-claim fit checked on all 32 fact paragraphs, three flags all resolved as regex
artefacts or correct attribution; all five new sources are both declared and cited at block level;
the Recital 8 claim is attributed to the Regulation and quoted, not an independent claim about the
EIO Directive; **all sixteen load-bearing quotations verified verbatim** against the saved primary
texts; Article 4's three-limb ladder verified against the Regulation's own Article 4; the traffic
data definition verified to include "the location of the device"; Art. 29(4)'s reservation verified
to exist; Art. 32's heading verified to name exactly two situations; Arts. 7(1) and 8(1) of the
Protocol verified for category scope; zero commercial providers named; zero URLs, emails, portals or
form numbers; no ScheduledChange added and the corpus-wide active-change invariant holds; route
parity 489/491 with 489 sitemap URLs; graph 0/0/0.

## 5. Safety architecture

Part T and Part U are enforced by tests that run on a **separate unit set** from the framing guards.
Framing guards exclude misconception `claim` fields, because the schema guarantees `reality` answers
`claim` — a stance there is denied by construction. Safety guards keep them, because an instruction
is an instruction wherever it sits.

- **Part U** — five patterns for compliance/resistance/responsiveness ranking and "safest
  jurisdiction to store data", plus a check that no commercial provider is named anywhere. Both run
  **corpus-wide**, not only on this wave: a spine defended only on the newest pages is not defended.
- **Part T** — five patterns for evasion, relocation-after-notice, delay exploitation, identity
  concealment and server placement to defeat process; plus an imperative check for filing
  directives; plus the channel check (URL, email, portal, form number).
- **Part AB** — five patterns for response-time averages, percentages, disclosure/compliance/success
  rates and request counts, plus every field run through the platform's `findRestrictedPhrasing`.
  **Restricted claims: zero, which was the target.**

## 6. Accessibility

Per page, across desktop and mobile projects: exactly one `h1`, no heading-level jump greater than
one, a description over 60 characters that is not the title, no horizontal overflow at 320px **or**
at 200% text, and skip-link → `main` keyboard focus. Nine instrument citations — the ones carrying
slashes, digits and parentheses, which a naive break-anywhere rule splits mid-number — are asserted
present and non-overflowing at 320px on the page that carries each.

## 7. Final gate

Every exit code read directly.

| Gate                    | Result                                           |
| ----------------------- | ------------------------------------------------ |
| `prettier --check .`    | exit 0                                           |
| `npm run lint`          | exit 0                                           |
| `npm run typecheck`     | exit 0                                           |
| `npm test`              | exit 0 — 7,365 tests / 78 files                  |
| `npm run build`         | exit 0                                           |
| `npm run verify:output` | exit 0 — 489 routes, 491 pages, 489 sitemap URLs |
| `link-graph-audit`      | exit 0 — 0 orphans, 0 weakly linked, 0 dead ends |
| `playwright test`       | exit 0 — 1,322 passed, 4 skipped, 17 specs       |
| `route-matrix`          | exit 0 — 641 checks, 0 failed                    |

## 8. Known limitations

- **Party lists and ratification counts for both Council of Europe instruments were NOT
  RESEARCHED.** The authoritative register returned HTTP 403 to three URL forms; secondary
  summaries giving a count were deliberately not used.
- **No national implementing legislation and no transposition measure was read for any country.**
  Whether any Member State has transposed Directive (EU) 2023/1544 is unknown to this wave, and it
  matters more than usual, because the Regulation addresses an addressee the Directive is what
  obliges providers to have.
- **No case law was read in any system.** Where a connecting factor has been construed by a court,
  that construction is not described.
- **Whether the Article 25 implementing acts have been adopted was not researched**, so no date is
  stated for the Article 19 obligation and it is not described as operative.
- **Earlier waves' JSON-LD guards still use the substring form** (finding 3). They pass today; the
  latent fragility is recorded rather than fixed, because fixing it means editing five earlier
  waves' specs.
- Every status statement is as at **5 September 2026**. Legal status changes.
