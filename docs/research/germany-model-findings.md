# Germany pilot — model findings

The Germany pilot existed to test whether the architecture can honestly represent a federal
system. It found six things. Four forced a change, one resolved a France finding, and one is
recorded as an accepted limitation.

Each entry gives: the fact, the source, the affected schema, why the existing representation
was insufficient, the smallest adequate correction, the effect on France, the effect on future
federal countries, migration impact, and status.

---

## G1 — Legislative competence and administrative execution are different questions

**Fact.** The Basic Law separates them in adjacent articles. Article 74(1) no. 1 places "civil
law, criminal law, court organisation and procedure (except for the law on pre-trial
detention)" under _concurrent legislative_ power. Article 83 provides that "the Länder shall
execute federal laws in their own right insofar as this Basic Law does not otherwise provide or
permit". A German criminal court applies federal law in a court the Land administers.

**Source.** `de-grundgesetz` (Arts. 70, 74(1) no. 1, 83).

**Affected.** `JurisdictionRecord`, `FunctionScope`.

**Why insufficient.** `FunctionScope` answers exactly one question — who administers. Recording
Bavaria as `courtScope: 'own'` is correct and, alone, actively misleading: it implies the Land
also writes the law of court organisation, which it largely does not. There was no field in
which to say otherwise.

**Correction.** `legislativeCompetence?: Partial<Record<InstitutionalFunction,
LegislativeCompetence>>`, with values `exclusive-federal` · `concurrent` · `framework` ·
`exclusive-subnational` · `none` · `unknown`. The five `*Scope` fields keep their existing
meaning — administration only — and that meaning is now documented rather than assumed.

**Effect on France.** None. The field is optional and every French record omits it, which is
correct: in a unitary state the two questions collapse.

**Effect on future federal countries.** This is the change that makes the US, Canada and
Switzerland expressible. Validation now requires a researched record under a `federal` parent to
declare it, so the gap cannot be left silently.

**Migration.** None. Optional field.

**Status.** Resolved.

---

## G2 — `federal` was not a root jurisdiction level

**Fact.** The Bund is Germany's national-level record, exactly as `fr` is France's.

**Source.** `de-grundgesetz` (Art. 20(1)).

**Affected.** `validateJurisdiction`, `ROOT_LEVELS`.

**Why insufficient.** `ROOT_LEVELS` listed `international`, `supranational` and `country`. A
record at level `federal` was therefore required to have a parent, and the Bund has none. The
first federal record ever created failed validation.

**Correction.** `federal` added to `ROOT_LEVELS`. The level says how power is organised, not how
deep the record sits.

**Effect on France.** None.

**Effect on future federal countries.** Removes a hard blocker that would have hit every one.

**Migration.** None.

**Status.** Resolved. Worth noting as a category of defect: the France pilot introduced a
14-value level vocabulary of which it exercised five, and the unexercised values were not
merely untested but wrong.

---

## G3 — The restricted-claim categories had no home for a claim about detained people

**Fact.** The pilot's required real statistic is prison population and occupancy.

**Source.** `coe-space-i-2024`.

**Affected.** `RESTRICTED_CLAIM_CATEGORIES`.

**Why insufficient.** The original nine derive from the editorial policy's list of claims about
_institutions and their personnel_ — salaries, staffing, corruption, effectiveness, public
trust, officer mortality, political control, human-rights performance, crime levels. A claim
about the _detained population_ fits none of them, despite being among the most frequently
asserted and most frequently mis-sourced figures in this field.

**Correction.** Added `detention-capacity`, with a lexical pattern covering "overcrowded",
"prisons are full", "record prison population" and similar.

**Effect on France.** None; no French content makes such a claim.

**Effect on future countries.** Every corrections module will need it.

**Migration.** None.

**Status.** Resolved.

---

## G4 — The scheduled-change model (resolves France F3)

**Fact.** France deferred a structured field for known future legal change until a second
country showed the same need. Germany does: the Basic Law translation is stated to reflect
amendments only up to 22 March 2025, and German codes are amended continuously.

**Source.** `de-grundgesetz`; France's `fr-cpp-art-12` and `fr-csi-l511-1`.

**Affected.** New `ScheduledChange` type, registry and validator.

**Correction.** A deliberately narrow model. The load-bearing rule is the staleness gate: once
`effectiveOn` has passed and the change is still `pending`, validation FAILS until
`reviewedAfterEffect` is recorded. `today` is injected rather than read from the clock, because
a validator that reads the wall clock passes in CI today and fails silently on a date nobody is
watching. `certainty` is separate from `status`, so an announced reform is tracked but never
presented as scheduled; `cancelled` and `superseded` are distinguishable from active and require
an explanation.

**Effect on France.** Positive and immediate — the French 2029 recodification is now the first
record, so the France pages will break the build in 2029 rather than quietly describing repealed
law as current.

**Effect on future countries.** Reusable as-is.

**Migration.** None; new registry.

**Status.** Resolved. France finding F3 closed.

---

## G5 — A national statistic in a federal state is an aggregate, and must say so

**Fact.** Destatis states of its prison statistics: "Die Daten der Strafvollzugsstatistik werden
von den Statistischen Ämtern der Länder übermittelt" — the data are transmitted by the Länder
statistical offices. SPACE I separately warns that comparisons of levels between countries "are
always problematic".

**Source.** `de-destatis-strafvollzug-2024`; `coe-space-i-2024`.

**Affected.** `RestrictedClaim.limitation` — content practice rather than schema.

**Why the existing representation held.** `limitation` already existed and is required. Germany
tested whether it was _sufficient_, and it was: the aggregate nature, the alternative adjusted
count, the comparability warning and the "a national density below 100 does not mean no
institution is above capacity" caveat all fit in it.

**Correction.** None to the schema. Recorded here because a negative finding is a finding: the
restricted-claim model survived first contact with a real federal statistic.

**Effect on future countries.** The practice — never publish a national figure in a federal
state without stating that it aggregates sub-national systems — is now demonstrated in content
rather than only asserted in policy.

**Status.** Accepted, no change.

---

## G6 — The lexical claim-guard's use/mention blindness recurs, and it recurs predictably

**Fact.** The guard flagged the Germany prosecution page for "politically directed", in a
sentence saying the platform would _not_ make that claim. France's prosecution page tripped the
same guard on "politically controlled" for the same reason.

**Source.** Test output.

**Affected.** `findRestrictedPhrasing`.

**Why no change.** France recorded this as an accepted limitation. Germany confirms it is not
random: it lands specifically on pages discussing prosecutorial independence, because those
pages must name the claims they decline to make. Loosening the guard to permit negated contexts
would open exactly the evasion it exists to close, and the cost is one rewritten sentence per
occurrence.

**Correction.** Prose rephrased, guard untouched.

**Status.** Accepted, unchanged — now with two data points rather than one.

---

## Questions the brief asked, answered

| Question                                                                     | Answer                                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Does `FunctionScope` need a concurrent/shared value?                         | **No.** Concurrency is a property of _legislation_, not administration, and belongs in `LegislativeCompetence` (G1). `shared` already covers administrative sharing, and is what the Bund carries for policing. Adding `concurrent` to `FunctionScope` would have encoded the confusion rather than resolved it. |
| Must institutional ownership and operational jurisdiction be separated?      | **Not yet.** No source read in this pilot required distinguishing which body _owns_ an institution from where it may _operate_. Deferred rather than speculated.                                                                                                                                                 |
| Do legislative competence and administrative execution need distinct fields? | **Yes** — G1, the pilot's central finding.                                                                                                                                                                                                                                                                       |
| Can a source apply nationally while implementation varies by Land?           | **Yes, and it is the normal case.** The StPO is federal law applied by Land police; the Basic Law allocates functions the Länder then organise themselves. Handled by scoping each claim to what its source establishes, and by `uncertainty` entries stating that no Land detail was researched.                |
| Do country modules need sub-national coverage disclosures?                   | **Yes, and it is currently prose.** The hub discloses that only three Länder are modelled and that none of the other thirteen is described. A structured `subNationalCoverage` field is the obvious next step but is not yet earned — one country is not evidence. Deferred.                                     |
| Did scheduled-change support prove adequate?                                 | **Yes for its purpose**, which is narrow. It records a known dated change and breaks the build when that date passes un-reviewed. It does not model conditional commencement, partial commencement, or amendments that change a provision without repealing it — none of which this pilot needed.                |

---

## Was the research deep enough?

Five of thirteen modules are unpublished, and the honest reading is that the deferred set is
where the remaining model stress lives. Oversight in particular would test whether the model can
represent a function that exists at both levels _in different forms_ — federal and Land data
protection authorities, Land-specific police complaint arrangements — which is a harder case
than anything published here.

What was exercised genuinely: the federal/Land split (G1, G2), a real statistic with real
limitations (G3, G5), city-state and intermediate-tier variation, and the scheduled-change gate.
What was not: any Land's actual institutional organisation, because no Land source was read.
Three Land records exist as structural samples and assert nothing beyond what the Basic Law
supports.
