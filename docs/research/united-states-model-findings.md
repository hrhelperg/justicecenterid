# United States pilot — model findings

The US is the decentralisation stress test. It forced **one** schema change, added **one**
jurisdiction level, and confirmed that several distinctions the brief asked about are already
expressible or belong in prose rather than the schema.

Each entry: the fact, the source, the affected schema, why the existing representation was
insufficient, the smallest correction, the effect on earlier pilots, and status.

---

## US1 — Geographic inclusion is not legal subordination (`authorityBasis`)

**Fact.** A tribal nation sits geographically within the United States and usually within a
state, but its sovereignty is inherent: it predates the Constitution and is not derived from the
federal government or the state. The Bureau of Indian Affairs records that Public Law 280 (1953)
did not terminate tribal jurisdiction and that jurisdiction may be exercised concurrently.

**Source.** `us-bia-pl280`, `us-const-amend-10`.

**Affected.** `JurisdictionRecord.parentJurisdictionId`.

**Why insufficient.** In the France and Germany pilots the parent link meant one thing: the
child _derives_ its competences from the parent. Recording a tribal record with
`parentJurisdictionId: 'us'` under that meaning asserts that a tribe is a subdivision of the
federal government — false, and precisely the assumption the brief forbids ("geographic
inclusion means legal subordination").

**Correction.** An optional `authorityBasis` field:
`delegated | reserved-powers | inherent-sovereign | federal-plenary | unknown`. Where it is
`inherent-sovereign`, the parent link records **geographic containment only**, not derivation.
Two validation rules back it: an inherent-sovereign record must explain the non-derivation in
its notes, and such records are exempt from the federal legislative-competence rule (inherent
sovereignty is not a division of the parent's legislative competence).

**Effect on France and Germany.** None. The field is optional; every France and Germany record
omits it, and the default meaning (`delegated`) is exactly what those pilots assumed. Verified
by a regression test.

**Why the field earns its place beyond the tribal case.** It also records the **reserved-powers
inversion** on US states (the Tenth Amendment gives states residual authority, the opposite
emphasis from a system where sub-national bodies derive powers from the centre) and DC's
**federal-plenary** status (Congress can override; neither a reserved-power state nor a
sovereign). Three distinct values from three real examples.

**Status.** Resolved.

---

## US2 — A tribal nation is not a "special" subdivision (`tribal` level)

**Fact.** A tribal nation is not a state, a territory, or an administrative special-status
region.

**Source.** `us-bia-pl280`.

**Affected.** `JURISDICTION_LEVELS`.

**Why insufficient.** The nearest existing level was `special`, previously used for New
Caledonia and Martinique — administrative special-status regions whose authority _is_ derived
from a national constitution. Filing an inherent sovereign there would group two categorically
different things.

**Correction.** Added a `tribal` level. Adding a level is cheap by design (the model doc says
so); this one prevents a real miscategorisation.

**Status.** Resolved.

---

## US3 — Elected office is a real US feature, and it belongs in prose, not the schema

**Fact.** The head of a sheriff's office is usually an _elected_ official (BJS); chief local
prosecutors are "elected or appointed" and carry varying titles (BJS); US Attorneys are
_appointed_ by the President (28 U.S.C. § 541).

**Source.** `us-bjs-agency-characteristics`, `us-bjs-prosecutors`, `us-attorneys-28usc541-547`.

**Considered schema change.** A `leadershipSelection` field (elected / appointed) on
institutions.

**Decision: no schema change.** Selection method attaches to an _office or institution_, and the
dossiers model institutions in prose blocks, not as typed records at that granularity. Adding a
field with no typed institution to hang it on would be premature. The elected/appointed contrast
is stated on the law-enforcement and prosecution modules directly. If a future country pilot
needs typed institution records (e.g. to compare selection methods across countries), that is
when the field is earned.

**Status.** Considered, handled in prose, deferred as a schema change.

---

## US4 — Coordination, contract, and command are distinct — but the US did not force a field

**Fact.** Federal agencies assist state and local police (the Marshals "assist" with fugitives;
§ 533 preserves other agencies' authority) but do not command them.

**Affected.** Potentially `FunctionScope`.

**Why no change.** The federal record's `policingScope` is `shared` — federal and sub-national
bodies both police, in their own spheres — and the prose states plainly that assistance is not
command and that no federal power to direct state or local police was found. `FunctionScope`
already carries `shared`, and the command-vs-coordination distinction is a relationship _between
institutions_, which this pilot expresses in prose. The genuine contract-policing test (a
provider policing for a client jurisdiction) is Canada's RCMP, not the US, and is the right
place to decide whether a structured relationship field is earned. Flagged for the Canada pilot.

**Status.** Deferred to a later pilot with a clearer forcing example.

---

## US5 — Concurrent jurisdiction is already expressible

**Fact.** Under Public Law 280, criminal jurisdiction in Indian country may be exercised
concurrently by a tribe, a state and the federal government.

**Why no change.** `FunctionScope` already carries `shared`, which is what concurrent
jurisdiction is. The specifics (which offences, which states, the effect of the Major Crimes
Act) are content to be researched, not a schema gap. The tribal record's prosecution and
corrections scopes are `unknown` precisely because those specifics vary and were not researched.

**Status.** No change; handled by existing `shared` plus honest `unknown`.

---

## US6 — Names take articles (`articleName`)

**Fact.** "Justice and public safety in United States" is ungrammatical; the name takes a
definite article.

**Affected.** Presentation only.

**Correction.** An optional `articleName` on the dossier ("the United States"), used in
"...in X" title contexts and falling back to `name`. Not a model-integrity change, but recorded
because it is a real, if small, correction found by reading the rendered page rather than by a
test. France and Germany are unaffected.

**Status.** Resolved.

---

## Questions the brief asked, answered

| Question                                                                   | Answer                                                                                                                                                                                       |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Territorial vs subject-matter jurisdiction                                 | Territorial is the jurisdiction record's scope; subject-matter is content (federal offences vs state crime), stated in prose. No field needed yet.                                           |
| Institutional ownership vs operational jurisdiction                        | Not forced by US sources. The federal/state/local split is ownership; operational overlap (e.g. task forces) was not researched. Deferred.                                                   |
| Elected vs appointed leadership                                            | US3 — real, handled in prose, no schema field yet.                                                                                                                                           |
| Constitutional office vs statutory agency                                  | Not forced. The sheriff is a constitutional/statutory office in many states, but this pilot did not research any state constitution to that depth.                                           |
| Command vs coordination; funding vs control; contract-service vs ownership | US4 — distinct, expressed in prose; the structured-relationship question is deferred to Canada, whose RCMP contract policing is the clean forcing example.                                   |
| Tribal sovereignty; PL 280; concurrent authority                           | US1, US2, US5 — the core of the pilot; `authorityBasis` + `tribal` level + existing `shared`.                                                                                                |
| County-equivalent structures; home-rule variation                          | Handled by existing levels: Louisiana's parish is a `county`-level record with a name note; DC's home rule is captured by `federal-plenary` + `legislativeCompetence: framework`. No change. |

---

## Was the research deep enough?

Five of thirteen modules are unpublished, and the deferred set again holds the hardest content:
history (inseparable from slavery, Reconstruction and the treatment of Native nations) and
oversight (as fragmented as the institutions it watches). Those are deferred for the right
reason — a national summary would erase exactly the complexity that matters.

What was genuinely exercised: the decentralisation thesis end to end (reserved powers, 17,541
agencies, dual courts, split prosecution, prisons-not-jails), a real statistic with real limits,
and — the reason this pilot mattered — a kind of sovereignty the model could not previously
represent without asserting a falsehood. What was not: any individual state, county or named
tribe, and the detailed criminal-jurisdiction map of Indian country, which is a research
programme in itself.
