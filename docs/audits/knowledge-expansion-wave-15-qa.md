# Wave 15 QA record — justice-system lifecycle and knowledge graph

Branch `feat/knowledge-expansion-waves-12-15`. Written 2026-08-26. No push during this wave.

Wave 15 was not a topical silo. Its job was to make the corpus legible as one connected system,
and most of its value is in the audit and the hub rather than in page count.

## 1. What shipped

- **`/justice-system`** — the primary hub, a top-level route.
- **`src/content/lifecycle.ts`** — a typed model of eleven stages and seven cross-cutting layers.
- **`/justice/no-single-path-through-a-justice-system`**
- **`/justice/how-justice-institutions-work-together`**
- **`scripts/link-graph-audit.mjs`** — a read-only audit of the rendered link graph.
- A rendering fix that the audit found, described in §4.

Route counts: **421 routes / 423 exported pages / 421 sitemap entries**. Suite: **4499 → 4543**
tests across 68 files after the cross-wave audit was added.

## 2. Architecture decisions, and the evidence for each

**The hub is at `/justice-system`, not `/justice/how-the-justice-system-works`.** The brief
offered both and asked which the architecture favoured. Three things settled it. The page is
about all nine sections rather than about justice principles, so nesting it under one section
would misdescribe it. `/timeline` and `/comparisons` already establish the pattern for a
corpus-spanning page at top level, driven by a typed content module and rendered through
`ContentPage`. And the corpus already uses the term: every country dossier has a
`/countries/{slug}/justice-system` module, so the hub is the general case of a vocabulary that
exists. A test asserts the two do not collide.

**The relationship model adds exactly one term.** The brief offered nine and instructed that it
be implemented only where existing models cannot express what is needed. Eight are already
expressible: `relatedInstitutions` is performedBy, oversight guides are overseenBy, `related` is
relatedTo, `counterExamples` is contrastsWith, the `review` fields are reviewedBy, `sources` and
constraint prose are constrainedBy, and `explainedBy` is a route list. **Order** is the one thing
nothing in the corpus recorded, so `mayPrecede` is the whole of what was added.

`mayPrecede` is named for what it asserts. It does not say a case moves from one stage to the
next; it says the sequence is one a system may use. That distinction is the model's entire
purpose.

**No graph library, no client JavaScript.** The brief permitted one only on evidence that a
static representation was materially inadequate. It is not: an ordered list with exits,
variation notes and inline links carries the model completely, renders at build time, and costs
32 bytes of JS — a manifest entry for the new route.

## 3. How the model is stopped from becoming a fake universal procedure

The brief names this as the highest-risk error in the wave. Four mechanisms, all enforced.

- **`required: false` on nine of eleven stages.** Only law and, trivially, the model's entry
  point are unconditional.
- **`exits` is a required field with at least one entry everywhere.** Leaving is the normal
  outcome, not the exception, and the model says so at every stage.
- **`variation` is a required field.** A stage that stated no variation fails validation, so the
  comparative caveat cannot be dropped in an edit.
- **The validator rejects a collapsed model.** If fewer than half the stages branch, validation
  fails with "the model has collapsed into a single path". A four-stage chain is fed to it in a
  test to prove the check has teeth — that rule is the one that would still pass every other
  check while teaching exactly the wrong thing.

Cycles are permitted and are correct: a disposition may return to adjudication on appeal or
retrial, and decisions during execution are judicial in systems with an execution court. A test
asserts at least two back-edges exist, so a future edit that straightens the graph fails.

## 4. The link-graph audit, and the defect it found

**`Guide.relatedInstitutions` was populated on 58 guides, validated by the content tests, and
never rendered.** Institution, profession and glossary pages rendered it through a `Connections`
component local to `ReferencePage`; `GuidePage` did not. It was dead data on every guide: readers
could not follow it, crawlers could not see it, and three institution pages were reachable only
from the institutions index as a direct consequence.

`Connections` is extracted to `src/components/content/Connections.tsx` and used by both, so they
cannot drift apart again. The single fix added 82 edges.

| Metric                      | Before Wave 15 | After the hub | After the fix and two contextual links |
| --------------------------- | -------------- | ------------- | -------------------------------------- |
| Orphan content pages        | 0              | 0             | 0                                      |
| Weakly linked (one inbound) | 6              | 3             | **0**                                  |
| Dead ends                   | 0              | 0             | 0                                      |
| Content routes audited      | 391            | 393           | 393                                    |

The last two weak pages were fixed with contextual links rather than mechanical ones, which the
brief forbids: transport police are jurisdiction defined by **function** rather than territory,
which is the distinction `/law-enforcement/police-jurisdiction` exists to draw, and
`sheriffs-and-city-police` is the municipal tier worked through in one country, which is what
`municipal-and-national-police` is about. Both carry a comment saying so.

**P3, recorded and not fixed.** `/justice/what-is-due-process` receives 75 identical anchors and
`/courts/what-do-courts-do` 71, because `related` cards render the target's own question as link
text. That is descriptive and honest, and varying it artificially would be worse for readers
using a screen reader.

## 5. Cannibalization against Waves 8–14

Six of the brief's eight supporting-page candidates duplicate existing pages:

| Candidate                                                  | Already owned by                                           |
| ---------------------------------------------------------- | ---------------------------------------------------------- |
| `/justice/how-rights-limit-public-power`                   | `/justice/limits-on-public-power` (Wave 12)                |
| `/justice/appeals-and-review`                              | `/justice/appeal-and-the-rule-of-law` (Wave 12)            |
| `/justice/from-judgment-to-sentence`                       | `/corrections/conviction-sentence-and-execution` (Wave 13) |
| `/justice/why-prosecution-and-defence-are-both-necessary`  | `/defence/defence-counsel-and-prosecutor` (Wave 11)        |
| `/justice/how-accountability-fits-into-the-justice-system` | `/justice/why-justice-systems-need-oversight`              |
| `/justice/from-investigation-to-court`                     | `/investigations/investigation-to-prosecution` (Wave 8)    |

The brief permitted "potentially fewer if a single strong hub plus typed connections does the
job better", and that is what the evidence supported. A test asserts the two new pages reproduce
no paragraph from the eight pages they draw on, and mutation W15-M10 plants a real paragraph
from `/courts/what-do-courts-do` to prove the check works.

## 6. Mutation proofs

Ten, under the programme's validity rule. Three needed a second pass.

| ID      | Guard attacked                                           | First pass       | After fix        |
| ------- | -------------------------------------------------------- | ---------------- | ---------------- |
| W15-M1  | every stage offers a way out                             | failed correctly | —                |
| W15-M2  | no stage cites an unpublished route                      | failed correctly | —                |
| W15-M3  | every stage states how systems differ                    | failed correctly | —                |
| W15-M4  | successors must resolve                                  | failed correctly | —                |
| W15-M5  | a jury is never presented as universal                   | **PASSED**       | failed correctly |
| W15-M6  | no unsupported deference claim                           | failed correctly | —                |
| W15-M7  | no unsupported delegitimising claim                      | failed correctly | —                |
| W15-M8  | the hub reaches every content section                    | **PASSED**       | failed correctly |
| W15-M9  | a guide may not declare a non-existent institution       | failed correctly | —                |
| W15-M10 | the integrative pages do not reproduce what they draw on | **INVALID**      | failed correctly |

**10/10 valid after the fixes.** Three did not produce a valid proof on the first attempt, for
three different reasons, and the distinction matters:

- **M5 exposed a test defect.** The jury guard joined a stage's summary, variation and exits into
  one unit, so the variation field — which names professional judges, lay judges and mixed panels
  — qualified a summary replaced with "a jury hears the evidence and decides". They render as
  separate elements, so they are now separate units.
- **M8 was a badly chosen mutation, not a test defect.** It removed one of two forensics links, so
  the hub still reached `/forensics` and the test correctly passed. Redone to remove both.
- **M10 was invalid: it broke the build.** An unescaped apostrophe in a single-quoted TypeScript
  string — the same failure mode as Wave 11's M5. A mutation that does not compile proves nothing.
  Redone by extracting a real paragraph from `/courts/what-do-courts-do` at run time, so the
  mutation reproduces text the guard is actually looking for.

## 7. Defects found and fixed during the wave

**D1 — the hub cited two unpublished routes.** The evidence layer cited `/glossary/evidence` and
`/glossary/standard-of-proof`. Only five of thirty-two glossary terms are routed; the rest sit on
the hub under the publication gate. The most heavily linking page on the site was pointing at two
pages that do not exist. The model's own validator caught it on its first run, which is what the
brief's "prohibit links to deferred routes" rule is for.

**D2 — a same-sentence guard flagged a set-up sentence.** The `no-single-path` page states the
false picture in order to demolish it in the next sentence. The jury guard is now block-level, on
the reasoning Waves 13 and 14 arrived at independently, with a planted unqualified assertion
proving it still fires.

## 8. Safety and neutrality

No new safety-sensitive surface: the hub and both guides are institutional description, and
neither describes any procedure. `SAFETY_SENSITIVE_SECTIONS` is unchanged and every guide in one
of those sections still carries a cleared safety review, now enforced corpus-wide by the
cross-wave suite rather than per wave.

Neutrality tripwires run in **both** directions, which the brief requires and which is the harder
half: twelve deference patterns and six delegitimising ones, sentence-level and denial-aware, with
a test confirming that the sentence stating the correction — "Institutional respect does not mean
courts are always right, and saying so is not a claim that courts merely serve the government" —
fires neither.
