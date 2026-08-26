# Wave 17 QA record — sentencing institutions and community corrections

Branch `feat/knowledge-expansion-waves-16-18`. Written 2026-08-26. No push during this wave.

## 1. What shipped

Seven guides added to `/corrections`, which already held twelve from Wave 13. Five new sources
plus one existing record extended (`src/content/sources.ts` 278 → 283). No new institution
record, no new profession record, no schema change.

Route counts: **436 routes / 438 exported pages / 436 sitemap entries** (Wave 16 closed at
429/431/429). Suite: **4856 → 5111 tests, 70 files**. Route matrix 567/567. Accessibility spec
50 passed, 4 skipped.

| Route                                       | Anchor evidence                                       |
| ------------------------------------------- | ----------------------------------------------------- |
| `how-fines-are-calculated`                  | StGB §§ 40, 43; Sentencing Act 2020 s. 125            |
| `when-a-court-may-imprison`                 | Sentencing Act 2020 ss. 204, 230, 231                 |
| `sentencing-guidelines-and-who-writes-them` | CJA 2009 s. 118; Sentencing Act 2020 s. 59; StGB § 46 |
| `what-a-community-order-requires`           | Sentencing Act 2020 ss. 201, 204                      |
| `what-a-pre-sentence-report-is`             | Sentencing Act 2020 ss. 30, 31                        |
| `who-inspects-a-prison`                     | Mandela Rules 83–85; Prison Act 1952 s. 5A            |
| `how-a-prisoner-raises-a-complaint`         | Mandela Rules 54–57                                   |

## 2. The cannibalization finding that set the scope

Wave 13 owns most of the brief's candidate list: sentencing purposes and principles,
custodial versus non-custodial, suspension, probation as a false friend, release, reintegration,
and who administers custody. Twelve candidates map onto existing pages, and restating any of
them would be the thin pages the constraints forbid.

Four things were genuinely absent, and each is institutionally central: how a fine is
calculated; what must be true before each kind of sentence becomes available; who writes
sentencing guidelines and how binding they are; and how prisons are inspected and complaints
raised. Seven routes, against a target of 8–16 that the brief expressly says is not a quota.

## 3. Findings

**F1 — the day-fine separates the offence from the offender.** StGB § 40 imposes a number of
daily units (at least five, normally at most 360) for what the offence merits, and values each
unit on the offender's circumstances — as a rule the net income they have or could have in a
day, leaving at least the minimum indispensable for living, between €1 and €30,000. Section
40(4) requires the decision to state **both**, so an appeal can attack the number without
disturbing the value or the reverse. England and Wales fixes one amount that must reflect
seriousness (s. 125(1)) and take account of financial circumstances (s. 125(2)) — and s. 125(3)
says expressly that this applies "whether ... increasing or reducing". Neither is a hardship
discount.

**F2 — the conversion rate is a policy lever hidden in arithmetic.** StGB § 43 replaces an
irrecoverable fine with default custody at two daily units to one day, minimum one day. That
number can be changed without touching anything about fines or custody, and it determines how
much imprisonment an unpaid fine ultimately represents.

**F3 — the custody threshold is framed against the alternatives, not against a level.**
Sentencing Act 2020 s. 230(2): a court must not pass a custodial sentence unless the offence was
"so serious that **neither a fine alone nor a community sentence can be justified**". A court
reaching for custody has necessarily formed a view about both lesser sanctions. Below it,
s. 204(2) requires the offence to be "serious enough to warrant" a community order and s. 204(5)
says that being able to make one "does not require it to do so"; above it, s. 231(2) requires
the shortest commensurate term.

**F4 — guidelines are neither advisory nor mandatory.** Sentencing Act 2020 s. 59(1): a court
must follow relevant guidelines "unless the court is satisfied that it would be contrary to the
interests of justice to do so". The default is compliance and the exit requires a stated
conclusion, so guidelines bind by requiring an explanation rather than by removing the choice.
Section 59(2) makes the duty subject to the statutory thresholds — statute, then guideline, then
judgement. Germany has no equivalent body; StGB § 46 constrains the reasoning instead of the
outcome.

**F5 — a community order is a container, not a sanction.** Sentencing Act 2020 s. 201 lists
sixteen requirement types, and they do three different jobs: take something away (unpaid work,
curfew, exclusion, residence, foreign travel prohibition), address a cause (rehabilitation
activity, programme, mental health, drug and alcohol treatment), and make the others verifiable
(electronic compliance monitoring, electronic whereabouts monitoring). The table is amended by
statute — drug testing was inserted on 28 June 2022.

**F6 — probation shapes the sentence before it administers one.** For an adult, the
pre-sentence report is written by "an officer of a provider of probation services" (s. 31(2)(a))
and the court must obtain and consider it unless it considers that unnecessary (s. 30(2)). The
community-corrections service therefore influences sentencing before it has any role in the
case, which is the structural link between the two halves of this section.

**F7 — a duty whose breach produces no nullity, twice.** Section 30(4) provides that a missing
pre-sentence report invalidates no custodial or community sentence. That is the same design
Wave 16 found in the Forensic Science Regulator Act, where breaching the code is not an offence
but is admissible and weighable. Systems reach for this shape when voiding the outcome would
harm the person the duty protects. Recorded as a cross-wave pattern.

**F8 — "prison inspection" names two different things.** Mandela Rule 83 requires a **twofold**
system: internal inspection by the central prison administration, and external inspection by a
body **independent of** it. Both are called inspection and only one is independent. Rule 84
supplies the powers that make the external limb real — full information access, free choice of
which prisons to visit including unannounced visits at the inspectors' own initiative, free
choice of which prisoners to interview, and private and fully confidential interviews — and
requires teams to encompass health-care professionals. Rule 85 requires a written report every
time and requires the administration to say, within a reasonable time, whether it will implement
the recommendations. The obligation is to answer, not to obey.

**F9 — a prison complaints system needs three routes because one runs through the institution
complained of.** Rule 56: daily to the director or authorised staff; to the inspector during
inspections, freely and in full confidentiality without staff present; and without censorship as
to substance to the central administration and to judicial or other competent authorities. Rule
57 treats undue delay the same as rejection, protects complainants from retaliation in terms,
and removes torture allegations from the process entirely to a prompt impartial investigation by
an independent national authority.

## 4. Source-currency and access decisions

**CJA 2009 s. 125 is repealed.** The guidelines duty was fetched first at s. 125 and
legislation.gov.uk records it repealed on 1 December 2020 by the Sentencing Act 2020, Sch. 28.
Section 59 of the 2020 Act was used instead. This is the **second** currency trap in this
programme after the revoked Criminal Procedure Rules 2020 in Wave 16 — both found by reading the
revised text rather than assuming. A test asserts the source note records the repeal, and
mutation W17-M10 proves it.

**OHCHR could not be reached.** The OPCAT instrument page and the national-preventive-mechanism
page both returned HTTP 403 behind a JavaScript challenge. Nothing is quoted from OPCAT and no
claim is made about national preventive mechanisms. The limitation is stated **on the page
itself**, not only in this document, and a test asserts both that the page says so and that no
OPCAT or OHCHR source is cited. Mutation W17-M9 proves the guard.

## 5. Restricted claims

No page in this wave carries a prison population, capacity, occupancy or caseload figure. The
Wave 13 architectural finding is unchanged and was not worked around: `Guide` has no
`restrictedClaims` field and the guide scan hard-codes the declared list to `[]`. Three separate
tests enforce this — no page trips a pattern, no page carries a `restrictedClaims` field the
scanner would not read, and no population, per-100,000 or occupancy figure appears anywhere.

## 6. Mutation proofs

Twelve, under the programme's validity rule.

| ID      | Guard attacked                                        | Result                                                |
| ------- | ----------------------------------------------------- | ----------------------------------------------------- |
| W17-M1  | probation is not parole                               | failed correctly                                      |
| W17-M2  | parole is not universal                               | failed correctly                                      |
| W17-M3  | prison oversight is not prison management             | failed correctly                                      |
| W17-M4  | a community sentence is not leniency                  | failed correctly                                      |
| W17-M5  | the independence clause stays with the twofold system | failed correctly                                      |
| W17-M6  | no restricted claim slips into a guide                | failed correctly                                      |
| W17-M7  | country claims are country-sourced                    | failed correctly                                      |
| W17-M8  | every fact block carries a source                     | failed correctly                                      |
| W17-M9  | the OHCHR access limitation is stated                 | failed correctly                                      |
| W17-M10 | the repeal of the old guidelines duty is recorded     | failed correctly                                      |
| W17-M11 | no ideological framing                                | failed correctly                                      |
| W17-M12 | no Wave 13 paragraph is reproduced                    | **first attempt mis-aimed**; redone, failed correctly |

**12/12 valid.** Two process notes, recorded rather than smoothed over:

- **One anchor assertion refused to no-op.** W17-M8's first anchor did not match because prettier
  had reflowed the target. The harness asserted the anchor was unique and stopped rather than
  silently patching nothing — the safeguard Wave 12 introduced after exactly that failure.
- **W17-M12's first attempt was a mis-aimed mutation, not a test defect.** It planted a
  _paraphrase_ of a Wave 13 paragraph, which an exact-substring guard never claimed to catch. It
  was redone with a real paragraph extracted at run time and failed correctly. The gap it
  revealed was still worth closing, so a **near-duplication** guard was added: overlap measured
  on word 5-grams, with a companion test that prepends a word to a real Wave 13 paragraph and
  confirms the measure notices. Both guards fire on the redone mutation.

## 7. Defects found and fixed during the wave

**D1 — a keyTerm that is not a glossary term.** `equality-before-the-law` was used as a
`keyTerm`; it is a guide slug, and the glossary has no such entry. Caught by the corpus-wide
cross-reference test.

**D2 — Wave 13's exact-set assertion blocked its own section from growing.** The Wave 13 suite
asserted `CORRECTIONS_GUIDES` contained exactly its twelve slugs — correct when the section had
held none, but now meaning "no later wave may extend this section", which was never the guarantee
being made. Narrowed to require every Wave 13 slug still present, with the reasoning recorded in
the test file. This is the second time a wave's exact-count assertion has had to be narrowed;
the first was Wave 11's route-absence list in Wave 14.

## 8. Adversarial review

| Lens                        | Result                                                                                                                                                                                 |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Legal/comparative integrity | No P0/P1. Two currency traps caught by reading revised text.                                                                                                                           |
| Source interpretation       | No P0/P1. The OHCHR failure is stated on the page, not hidden.                                                                                                                         |
| Universality                | No P0/P1. Parole-is-universal and probation-equals-parole both tested across the whole section.                                                                                        |
| Taxonomy                    | No P0/P1. Parole board, probation service and prison inspectorate families all examined and rejected — the statute's own "a provider of probation services" argues against the second. |
| Normative balance           | No P0/P1. Six ideological patterns tested in both directions; the community-order requirement list is quoted rather than characterised.                                                |
| Restricted claims           | No P0/P1. Three independent checks.                                                                                                                                                    |
| Cannibalization             | No P0/P1. Exact and near-duplicate guards, both non-vacuous.                                                                                                                           |
| Accessibility               | No P0/P1. Accessibility spec passes; no new long-token risk introduced.                                                                                                                |
| Architecture                | No P0/P1. No schema change, no new route segment, no client JavaScript.                                                                                                                |

## 9. What was not done, and why

- **Who decides release.** Wave 13 sets out judicial release under StGB § 57. The English
  life-sentence provisions (Crime (Sentences) Act 1997 s. 28) are heavily amended and would need
  care this wave could not give them. Deferred.
- **No parole-board institution record.** The brief warned specifically against it and the
  evidence supports the warning: a parole-board family would have no German member.
- **No probation-service institution record.** England and Wales legislates for "a provider of
  probation services", a formulation presupposing plural providers. That is a finding against an
  institution record, not for one. **Ninth consecutive wave** without a new institution record.
- **No OPCAT or national-preventive-mechanism material**, on access grounds, stated on the page.
- **No sentencing statistics** for any system. None was obtained to the platform's standard.
