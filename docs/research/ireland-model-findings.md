# Ireland pilot — model findings

Ireland forced **no schema change**. That is itself the headline finding, and — because the
brief warns that "if the research forces no model changes at all, explicitly examine whether the
research was too shallow" — most of this document is the examination that confirms it is not
shallowness but a mature model absorbing a fourth legal tradition.

The pilot's one structural contribution is behavioural, not schematic: it is the first exercise
of the `ScheduledChange` **`taken-effect`** lifecycle, which the Germany record (pending) never
reached.

---

## IE1 — A unitary common-law state needs no new structure

**Fact.** Ireland is a unitary state: one national police service, one independent prosecutor,
one court system, one prison service, none duplicated at a sub-national level.

**Affected.** Nothing.

**Why no change.** The model already represents a unitary state — France is one. Ireland is a
single country-level `JurisdictionRecord` with every function `own`, exactly as `fr`. The
common-law tradition (versus France's and Germany's civil law) is a matter of legal _content_,
stated in prose, not of jurisdiction _structure_. `FunctionScope`, `legislativeCompetence`,
`authorityBasis` and the sub-national machinery built by the earlier pilots simply do not need
to fire for a unitary state, and correctly stay silent.

**Status.** No change. The model fit on the first attempt.

---

## IE2 — Scope integrity (Ireland ≠ the island ≠ Northern Ireland) is a content discipline

**Fact.** "Ireland" is the sovereign State; the island of Ireland also contains Northern
Ireland, a separate United Kingdom jurisdiction. The Nineteenth Amendment (1998) replaced the
Constitution's territorial claim over the island with an aspiration to unity by consent.

**Considered.** A structured "coverage excludes X" field, or a structured Northern-Ireland
exclusion notice, as the brief's Ireland model questions raise.

**Decision: no schema change.** Scope integrity is a statement the reader must see, and the
existing `callout variant: 'scope'` delivers it — a mandatory scope callout leads the hub and
recurs on the justice-system and courts modules. A structured exclusion field would add schema
for something that is fundamentally prose the reader reads. The jurisdiction record's `notes`
also state the point. A structured field is not earned by one country.

**Status.** Handled in prose; considered and declined as a schema change.

---

## IE3 — Bilingual official names are prose, not structured aliases

**Fact.** Irish institutions carry official Irish names used in preference to translation: An
Garda Síochána (not "the Irish police"), An Chúirt Uachtarach (the Supreme Court), Fiosrú.

**Considered.** A structured `officialName` / alias field on institutions, per the brief's
model question.

**Decision: no schema change.** Institutions are described in prose within the dossier, not as
typed records at that granularity — the same conclusion the US pilot reached for elected
offices. The Irish name and an English gloss sit together in the prose ("An Garda Síochána …
the national police and security service"). A structured alias field would need typed
institution records to attach to, which no pilot has yet needed. The jurisdiction record already
carries `name` and `shortName` for the country itself.

**Status.** Handled in prose; declined as a schema change, consistent with the US finding.

---

## IE4 — The oversight reform: first exercise of ScheduledChange 'taken-effect'

**Fact.** The Policing, Security and Community Safety Act 2024 commenced on 2 April 2025. It
reconstituted GSOC as Fiosrú (Office of the Police Ombudsman) and established the Policing and
Community Safety Authority, dissolving the Policing Authority and the Garda Síochána
Inspectorate. GSOC, the Policing Authority and the Garda Síochána Inspectorate are now
historical; Fiosrú and the PCSA are current.

**Source.** `ie-fiosru` (direct read), `ie-gov-pscsa-2024`.

**Affected.** No schema — but a genuine use of existing schema that was previously untested.

**How handled.** Two ways, deliberately layered:

1. **Reader-facing prose.** The oversight module names the current bodies and marks the
   historical ones with the 2 April 2025 date. This is what a reader needs and what the brief's
   "historical status" guidance points to. A page naming GSOC as the current complaints body
   would now be wrong; the module makes sure it cannot be read that way.

2. **A structured `ScheduledChange` record**, status **`taken-effect`**. Germany's scheduled
   change is `pending` (a future repeal with a staleness gate). Ireland's is the opposite end of
   the lifecycle: a change that has already happened, recorded with `reviewedAfterEffect` to
   attest that the affected content was written with the post-commencement position confirmed.
   This is the first time the model's `taken-effect` path carries a real record, and it
   validated without modification.

**Why record it structurally at all, when prose suffices for the reader.** Because a completed,
dated institutional transition is exactly what `ScheduledChange` is for, and recording it gives
a future editor a structured, dated link from the historical bodies to their successors — the
kind of cross-reference a "recent reforms" view would consume. It is not schema for its own
sake; it is the model's existing lifecycle finally exercised end to end.

**Status.** Resolved by existing schema; a behavioural first for the model.

---

## Three latent bugs surfaced (not model findings, but recorded)

Ireland's different research date and its position as the fourth country exposed three
hardcoded values inherited from the France pilot, none caught by any test, all found by reading
the built pages:

1. The facts-verified date was hardcoded to "24 July 2026" — correct for the first three
   countries by coincidence, wrong for Ireland (25 July). Now formatted from the record.
2. The "What has not been researched" note said "not about France" on every country's hub.
3. The independence disclosure had no Ireland demonym and fell through to an awkward fallback.

All three are fixed with regression tests. They are the recurring lesson of this programme:
a value that is correct for the country a component was first written for is a latent defect for
every country after it, and only a differently-shaped country reveals it.

---

## Was the research too shallow?

The brief requires this question when a pilot forces no schema change. The evidence that the
model genuinely fit, rather than the research being thin:

- The pilot reached the **independence of the DPP** and its double separation from police and
  government — the institutional heart of the Irish system — and quoted the office's own words.
- It caught a **same-year institutional reform** (2 April 2025) and represented current and
  historical bodies correctly, which a shallow pass would have missed by naming GSOC as current.
- It found a **real, over-capacity prison figure** (density 105.4) and scoped it honestly.
- It held **scope integrity** — the single hardest discipline for Ireland — on every page.

Five of thirteen modules are deferred, and the deferred set again holds the hardest content:
border-and-customs (where the Common Travel Area, the EU frame and the land border make scope
integrity most fragile) and history (the foundation of the State, inseparable from the
relationship with the United Kingdom). Those are deferred for the right reason.

The honest conclusion: the jurisdiction model, stretched by a unitary civil-law state, a
symmetric federation and a decentralised federation with multiple sovereignties, has reached the
point where a unitary common-law state is a configuration it already covers. That is a sign of
maturity, not of shallow research — and it is exactly the outcome the sequence of pilots was
designed to test for.
