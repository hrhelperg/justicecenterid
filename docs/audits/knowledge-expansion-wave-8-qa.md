# Knowledge Expansion Wave 8 — QA record

Criminal investigations and investigative institutions. Fourteen jurisdictions used, six routes
published, no new institution family, two sources added.

## 1. Merge gate

| Check                               | Result                                                                                                                                |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Repository                          | `hrhelperg/justicecenterid`                                                                                                           |
| `origin/main`                       | `46ce9872aac1e87405115b77083481f37a65ebf9` — Merge PR #25 from Wave 7                                                                 |
| Wave 7 an ancestor of `origin/main` | Yes                                                                                                                                   |
| The three Wave 7 routes             | Present in the registry and **rebuilt to HTML** from a clean `rm -rf out .next && npm run build`                                      |
| Wave 7 research and QA docs         | `police-oversight-global-function-matrix.md`, `wave-7-oversight-taxonomy-findings.md`, `knowledge-expansion-wave-7-qa.md` all present |
| Wave 7 safeguards                   | `OversightBodyProfile`, `OVERSIGHT_POWERS` in `types.ts`; `not-established` used 15×                                                  |
| Wave 7 tests                        | `wave7-oversight-powers.test.ts`, `e2e/wave7-oversight-institutions.spec.ts` present                                                  |
| Sources / routes / tests at base    | 244 / 356 / 2724                                                                                                                      |
| Working tree                        | Clean                                                                                                                                 |

## 2. The architecture decision

`/investigations/[slug]` was **already wired** to every guide carrying `section: 'investigations'`,
and `/investigations` was already a `SectionPage` with its own `outOfScope` list. Wave 8 therefore
created **no route file, no hub and no parallel taxonomy** — six guide records, six routes. Part
A's instruction is satisfied by construction rather than by discipline, and a `/criminal-investigation`
tree would have been strictly worse than what existed.

The section's existing `outOfScope` list — investigative technique, surveillance capability,
anything assisting evasion — is the boundary this wave inherited rather than invented.

## 3. Sources

**Reuse was the correct answer.** All 32 dossiers already carry an `investigations` module with
country-scoped, content-confirmed sources, so the comparative evidence was largely already
verified. Two sources were added, each because a claim was made that no existing source carried:

- `de-stpo-162-ermittlungsrichter` — the authoritative German § 162 StPO
- `de-stpo-english-translation` — the Ministry's own English text, cited for the single fact that
  it renders § 162's heading as "Investigating judge"

244 → 246.

### The error the wave nearly shipped

The working hypothesis was that Germany has **no** investigating judge — a clean proof that the
office is not universal in civil-law systems. Reading § 162 disproved it. Germany has an office
its own ministry calls an investigating judge in English. What differs is function: § 162(1) has
the prosecution _submit applications_, and § 162(2) requires the court only to examine "ob die
beantragte Handlung nach den Umständen des Falles gesetzlich zulässig ist".

That is a better finding than the hypothesis, and it became the spine of the page. It is recorded
because a QA document that hides its corrections is not a record.

## 4. Cannibalization

22 guide candidates and 8 institution candidates assessed. **PUBLISH 6 · MERGE 6 · DEFER 4 ·
REJECT 6**, and **zero institution routes**.

The constraint that shaped the wave: `what-is-a-criminal-investigation` already exists and owns
authorisation, preservation, recording, chain of custody, interviews and disclosure; the glossary
owns `chain-of-custody`, `warrant`, `evidence` and `disclosure`; `arrest-and-detention` owns
arrest. What was left unowned is _who is legally competent to investigate, and how systems differ_
— which is what all six published pages hold.

**Zero institution routes is a finding, not an omission.** The one candidate with genuine
cross-jurisdiction recurrence — judicial police — is precisely the one whose evidence shows it is
not a single institution: a legal _function_ in France, an institutional _role_ in Brazil,
personnel _status_ in Italy. It is published as a guide about the terminology.

## 5. Validation

| Gate                               | Result                                                 |
| ---------------------------------- | ------------------------------------------------------ |
| `npm ci`                           | clean, exit 0                                          |
| `npm run format:check`             | pass                                                   |
| `npm run lint`                     | pass, no warnings                                      |
| `npm run typecheck`                | pass                                                   |
| `npm test`                         | **2882 passed / 60 files**, exit 0                     |
| `npm run build`                    | pass                                                   |
| `npm run verify:output`            | **362 routes / 364 pages / 362 sitemap URLs**          |
| `npm run test:e2e`                 | **510 tests, 506 passed, 4 skipped, 0 failed**, exit 0 |
| Route matrix (local static server) | **439/439** — 362 routes + 77 must-404                 |

### Deltas against the baseline

| Metric                  | Baseline  | Wave 8    | Delta     |
| ----------------------- | --------- | --------- | --------- |
| Routes                  | 356       | 362       | +6        |
| Exported pages          | 358       | 364       | +6        |
| Sitemap URLs            | 356       | 362       | +6        |
| Investigation routes    | 1         | 7         | +6        |
| Unit tests              | 2724      | 2882      | +158      |
| Unit test files         | 59        | 60        | +1        |
| Playwright tests        | 446       | 510       | +64       |
| Source records          | 244       | 246       | +2        |
| Institution routes      | 14 routed | 14 routed | 0         |
| Restricted claims       | 10        | 10        | 0         |
| ScheduledChange records | 4         | 4         | 0         |
| **JS bundle**           | 663,403 B | 663,403 B | **0**     |
| **CSS bundle**          | 29,625 B  | 29,625 B  | **0**     |
| `out/`                  | 82,684 KB | 84,928 KB | +2,244 KB |

Both bundle figures are byte-identical: **no new client runtime, no framework, no new CSS rule.**
The `out/` growth is six prerendered pages and their text variants.

## 6. Mutation proofs

Six mutations applied to real source files, suite run, failure read before acceptance, each
reverted and the tree confirmed clean. No exit codes masked.

| #   | Mutation                                                       | Expected | Observed                                                                              |
| --- | -------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------- |
| M1  | Remove `ke-constitution` from `who-investigates-crime`         | FAIL     | FAIL — 2 tests: the country-scoped invariant, and an existing citation-integrity test |
| M2  | Rewrite the opening as the common-law / civil-law dichotomy    | FAIL     | FAIL — `who-investigates-crime asserts the dichotomy`                                 |
| M3  | Present investigating judges as universal to civil-law systems | FAIL     | FAIL — 2 tests: the Germany assertion, and the universality prohibition               |
| M4  | Insert jurisdictional-gap and warrant-avoidance content        | FAIL     | FAIL — **4** safety patterns tripped simultaneously                                   |
| M5  | Duplicate `what-is-a-criminal-investigation`'s question        | FAIL     | FAIL — `restates an existing question`                                                |
| M6  | Relabel France's police judiciaire a national detective agency | FAIL     | FAIL — `expected … to match /a function, not an agency/i`                             |

M1 tripping an _existing_ test as well as the new invariant is worth noting: the corpus already
had a citation-integrity check, and the two caught the same mutation from different directions.

## 7. Safety

The twelve operational patterns cover evasion of police and surveillance, evidence destruction and
concealment, forensic defeat, warrant avoidance, jurisdiction exploitation, interview resistance,
witness interference, chain-of-custody defeat, threshold exploitation and how-to framing.

**They are proved non-vacuous.** A fixture of twelve sentences — one per pattern — is asserted to
match every pattern. Without that, a typo in any regex would silently disable it forever.

Every page carries a `scope` callout, every scope callout disclaims legal advice, and the three
pages most exposed to operational drift are asserted to state their exclusions.

Four candidates were **deferred on safety grounds specifically**: suspect interviews, witness
interviews, crime-scene investigation and evidence. Suspect interviews was the highest-risk item
in the brief's list and was deferred deliberately rather than attempted at a safe altitude.

## 8. Adversarial QA

The fifteen questions were run against all six new pages and the two enhanced ones.

| #   | Finding                                                                                                                                                                                                                              | Severity | Resolution                                                                                                                                                                                     |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Four pages named a country with no source scoped to or naming it — Spain, Germany, Belgium and Italy                                                                                                                                 | **P1**   | Three were genuine omissions and the sources were added. The fourth exposed a real subtlety, below                                                                                             |
| 2   | The country-source invariant rejected the EU e-Justice portal's Belgium page, which is `INT`-scoped because its publisher is supranational although the page is entirely about Belgium                                               | **P1**   | The rule was _tightened_, not loosened: a supranational source counts only if it **names the country in its own title**. A non-vacuity test proves the UNODC source still satisfies no country |
| 3   | `investigative-jurisdiction`'s scope callout omitted the technique/surveillance/threshold exclusions the other pages carry                                                                                                           | P2       | Added                                                                                                                                                                                          |
| 4   | The word "safest" tripped the platform's existing crime-level restricted-claim detector                                                                                                                                              | P2       | Reworded to "most reliable". The guard was not weakened                                                                                                                                        |
| 5   | **The cluster stated the constraint side of the editorial principle 58 times and the capacity side twice.** Written that way, investigative capacity reads as a regrettable necessity rather than as something a legal system is for | **P1**   | A capacity-side passage and a "both halves are the design" callout were added to the entry page, and locked by a test                                                                          |
| 6   | An e2e assertion targeted a phrase that lives on a different page                                                                                                                                                                    | P2       | Corrected to terms actually on `judicial-police`                                                                                                                                               |

All six fixed. No P0. Nothing left open.

Questions returning clean on first pass: reader intent is distinct on all six (asserted against
every other guide's question); these are process pages, not institution pages (all six
`entityType: 'concept'`, zero institution routes); no named agency became a global family; no
prosecution, courts or forensics duplication (asserted by test); no accusation treated as guilt —
six explicit statements across the cluster; no unsupported effectiveness claim — every occurrence
of "more objective", "more thorough" and "more reliable" is inside a denial or a disclaimer.

## 9. Neutrality and restricted claims

No model is ranked. No statistics were added; the pages carry no percentage, clearance rate,
conviction rate or case-closure figure, asserted by test. Restricted-claim and ScheduledChange
counts are unchanged at 10 and 4.

Safeguards are not framed as obstacles to policing and investigative powers are not framed as
inherently abusive — both asserted by test.

## 10. Temporal integrity

Two temporal facts were carried forward from verified dossier content rather than restated as
current: Belgium's separate judicial police was **abolished** by the Law of 7 December 1998 with
effect from 1 January 2001, and the page says a reader meeting it in an older text is meeting a
body that no longer exists. Argentina's federal system **replaced** its investigating-judge model.

**No ScheduledChange record was added.** France's CPP Article 12 is recorded in the France dossier
as due to be repealed by Ordonnance n° 2025-1091 with effect from 1 January 2029, and that
handling already exists on the country module. Wave 8 quotes Article 12 as the current law and did
not duplicate the scheduled-change record onto a global page, where it would have to be maintained
twice.

## 11. Boundaries

**Prosecution.** No page discusses charging standards, prosecutorial discretion, plea bargaining,
prosecution ethics or prosecution independence — asserted by test. `investigation-to-prosecution`
stops at the charging decision and hands the standard onward by link.

**Courts.** No court hierarchy, trial procedure, appellate structure or rules of evidence —
asserted by test. Judges appear only as authorisers, directors or reviewers of investigative acts.
Wave 9's material is untouched.

**Forensics and evidence.** Named and linked, never redefined — asserted by a test that forbids
definitional phrasing for chain of custody and forensic science.

## 12. Limitations

- The Dutch rechter-commissaris is named as an instance of the office with its powers not
  established; the page says so and claims nothing about what it may do.
- Belgian and Portuguese investigating-judge powers rest on official descriptions rather than a
  full reading of the codes of criminal procedure.
- Whether Ireland's DPP may direct an ordinary Garda investigation was not established and is not
  claimed — the sources support the separation of investigation from charging, not a direction
  power.
- **Six routes were published against a suggested range of 10–18.** The brief subordinates count
  to evidence and cannibalization, and the audit is where the difference went: six candidates
  merged into published pages, four deferred on safety or scope grounds, six rejected as already
  owned. Publishing to the range would have meant splitting `police-vs-prosecutor-investigation`
  into two half-pages and building an evidence cluster the brief reserves.
