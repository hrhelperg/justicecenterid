# Wave 13 QA record — corrections, sentencing and reintegration

Branch `feat/knowledge-expansion-waves-12-15`. Written 2026-08-26. No push during this wave.

## 1. What shipped

Twelve guides under `/corrections`, a section that held none. Six new sources
(`src/content/sources.ts` 257 → 263). `corrections` added to `SAFETY_SENSITIVE_SECTIONS`.
A new `src/app/corrections/[slug]/page.tsx`, which the section had never needed before.

Route counts: **410 routes / 412 exported pages / 410 sitemap entries** (Wave 12 closed at
398/400/398). `npm run verify:output` reports the export matches the route registry.

Suite: **4107 → 4120 tests, 65 files**, all passing. Typecheck, lint and format clean.

## 2. Sources

All six read at the authoritative publisher, in the authoritative language, none a translation.

| Source                              | Read                                      | Verified   |
| ----------------------------------- | ----------------------------------------- | ---------- |
| Sentencing Act 2020 s. 57           | legislation.gov.uk revised text           | 2026-08-26 |
| Criminal Code ss. 718, 718.1, 718.2 | laws-lois.justice.gc.ca consolidated text | 2026-08-26 |
| StGB § 46                           | gesetze-im-internet.de                    | 2026-08-26 |
| StGB § 56                           | gesetze-im-internet.de                    | 2026-08-26 |
| StGB § 57                           | gesetze-im-internet.de                    | 2026-08-26 |
| StVollzG § 2                        | gesetze-im-internet.de                    | 2026-08-26 |

The English text carries a current amendment: the words "(including victims of crime)" in
s. 57(2)(d) were inserted on 22 March 2026 by the Sentencing Act 2026 (c. 2), ss. 4(1), 49(4).
The revised text on the statute book carries it and the page quotes the amended version rather
than the version most secondary sources still reproduce.

## 3. Findings

**F1 — where a legislature states its purposes is informative.** England and Wales and Canada
state sentencing purposes in sentencing law; Germany and Brazil state their reintegration
purpose in the law of execution (StVollzG § 2, LEP Art. 1), and German sentencing law names
culpability as the _basis_ of measurement rather than opening with purposes. Those answer
different questions — why is this sentence being imposed, versus what is the custodial term for
once imposed. Two systems that both "aim at rehabilitation" can mean structurally different
things by it. This drove `what-sentencing-is-for` and is the wave's central result.

**F2 — the German consent requirement.** StGB § 57(1) conditions suspension of the remainder on
the convicted person's consent. Supervised release is not unambiguously better for the person
released — it carries obligations and the possibility of return that serving to the end does
not — and the statute treats it as something that cannot be imposed. Recorded on
`release-before-the-end-of-a-sentence`.

**F3 — "probation" is three unrelated things.** An organisation (Denmark, Sweden), the status
attached to a wholly unserved suspended term (StGB § 56), and the status attached to the
remainder of a partly served term (StGB § 57). Canadian statute enumerates four release
statuses separately in a single provision rather than describing one. Denmark holds all three
senses in a single institution simultaneously, which is the clearest available illustration.

**F4 — Wave 12's proportionality deferral is partly resolved.** Criminal Code s. 718.1 supplies
a clean statutory text for the sentencing domain. The general public-law proportionality test
remains deferred. Checked for contradiction: Wave 12 makes no proportionality statement at all,
so nothing needed correcting.

**F5 — no new institution or profession route.** The pattern holds for the sixth consecutive
wave. `correctional-service` and `corrections-officer` already exist and already carry the
governance and role material; what was missing was the conceptual layer, not the registry
layer.

## 4. Deviation from the brief

The brief proposes `/corrections/prison-capacity-and-overcrowding`. It cannot be built as
named, and the obstruction is the repository's own safeguard rather than an editorial view.

1. `RESTRICTED_PATTERNS` blocks `\bovercrowd\w*\b` under `detention-capacity`.
2. `tests/content/restricted-claims.test.ts` scans every published guide's `definition`,
   `whyItExists`, `howItWorks`, `variation` and `rightsAndAccountability` with the declared
   category list hard-coded to `[]`.
3. `Guide` has no `restrictedClaims` field. Only country dossier modules can declare one.

A guide is therefore structurally incapable of carrying a declared detention-capacity claim.
The brief also requires preserving restricted-claim safeguards, the two instructions conflict
on this slug, and the safeguard wins.

Built instead as `/corrections/how-prison-capacity-is-measured`, about how such figures are
constructed and what each does and does not mean. No architecture was added to create a
declaration channel for guides — that would be speculative architecture for one page.

The page states the four conversions it refuses (population → occupancy rate; raw count →
prevalence; snapshot → annual average; national aggregate → individual facility), and a test
pins each. It publishes no density figure and no derived rate, and it states the Japanese
absence rather than approximating it.

## 5. Defects found and fixed during the wave

**D1 — broken internal link.** `what-remand-detention-is` linked to
`/courts/what-is-the-presumption-of-innocence`; the guide is in `justice`. Caught by the
existing corpus link test on first run, fixed.

**D2 — missing route directory.** `src/app/corrections/` had a `page.tsx` and no `[slug]`
directory, so all twelve routes registered and none exported. Caught by `verify:output`, not by
the test suite — the route registry and the export are separately verified for exactly this
reason. Fixed by adding the segment.

**D3 and D4 — statutory fractions stated without their jurisdiction.** The
"fractions do not travel" callout said "provisions of one criminal code" without naming
Germany, and the two-thirds misconception stated the fraction with no attribution anywhere in
the pair. Both were caught by the new attribution guard on its first run and fixed **in the
content**, not by relaxing the test.

**D5 — an inference marked as fact.** The s. 57(3) paragraph ended with "So the purposes govern
the discretionary sentencing decision", an inference sitting inside a `claim: 'fact'` block
under a statutory citation. Split into a `fact` block and an `analysis` block.

**D6 — imprecise statutory reference.** The same paragraph said subsection (3) provides that
"the section" does not apply. The text provides that _subsection (1)_ does not apply. Corrected
in the guide and in the source note.

## 6. Test-design findings

The suite's first run failed eight tests, and two of those failures were the suite being wrong
rather than the content.

**T1 — misconceptions are pairs, not sentences.** Sentence-level tripwires reported four
misconception _claims_ as undenied assertions of the very things their `reality` fields correct.
The fix is not to exclude misconceptions from the scan, which would create a blind spot: a
misconception is now one unit of `claim + reality`, because the schema guarantees `reality`
answers `claim`. A planted misconception whose reality _endorses_ its claim still fires, and a
test asserts that.

**T2 — attribution is a block-level property, not a sentence-level one.** Requiring the word
"German" in every sentence containing "two-thirds" flagged four sentences that sit in paragraphs
whose opening sentence names the German Criminal Code. The unit was changed to the block, which
is what a reader consumes. A planted detached fraction proves the block-level check still bites.

Wave 11's rule — that a denial must sit in the same sentence as the claim — is preserved for
ordinary prose. Wave 12's `deniesClaim` correction, which strips the matched span before looking
for the negation, is carried forward unchanged.

## 7. Mutation proofs

Ten, run by a harness that enforces the programme's validity rule. For each: the anchor is
asserted unique before patching, the file hash must change, `git diff --stat` must be non-empty,
`npm run typecheck` must still pass (a mutation that breaks the build is not a proof), the test
is run with its exit status read directly and never piped through anything that would mask it,
and the tree is reverted and re-checked clean.

| ID      | Guard attacked                                           | Result           |
| ------- | -------------------------------------------------------- | ---------------- |
| W13-M1  | `corrections` on the safety-sensitive list               | failed correctly |
| W13-M2  | every guide carries a cleared safety review              | failed correctly |
| W13-M3  | no page asserts which theory of punishment is correct    | failed correctly |
| W13-M4  | no page predicts time in custody                         | failed correctly |
| W13-M5  | no page teaches evasion of supervision                   | failed correctly |
| W13-M6  | statutory quantities stay attached to their system       | failed correctly |
| W13-M7  | the detention-capacity restricted-claim safeguard        | failed correctly |
| W13-M8  | country claims rest on country-scoped sources            | failed correctly |
| W13-M9  | no markdown link inside a misconception                  | failed correctly |
| W13-M10 | no occupancy rate derived from a source that prints none | failed correctly |

**10/10 valid.** Every mutation compiled, every one produced exactly one failing test, and every
one named the intended guard. No mutation survived.

## 8. Safety posture

`corrections` joined `SAFETY_SENSITIVE_SECTIONS` for the reason Wave 11 added `defence`:
material about how custody, supervision and release operate is one step from material about
defeating them. All twelve guides carry `safetyReview: 'cleared'`, and a test enforces it.

Excluded by construction and tested for: evasion of supervision, bypassing security, defeating
recall, minimising punishment, sentence prediction, personalised advice, facility-level
conditions reporting. Six pages that describe sentencing, release or supervision carry an
explicit `safety` callout, and a test pins that too.

## 9. What was not done, and why

- **No new institution or profession record.** Nothing in the research produced a recurring
  institutional form the registry lacks.
- **No new glossary terms.** Adding routed glossary entries for "parole", "remand" or
  "probation" was considered and rejected: `probation-is-three-different-things` exists
  precisely because a single definition of that word would be wrong, and a glossary entry is a
  single definition.
- **No sentencing statistics.** No verified sentencing-outcome data was obtained for any of the
  four systems, so the wave makes no claim about how often anything is imposed. Stated in the
  uncertainty block of every page where a reader might expect one.
- **No case law.** Every statement rests on statutory text. How courts apply these provisions
  is a separate research problem the platform has not undertaken.
