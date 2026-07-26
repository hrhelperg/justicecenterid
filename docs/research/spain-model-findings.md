# Spain pilot — model findings

Spain forced **one** additive schema change — an `autonomous-community` JurisdictionLevel — and
handled its defining feature, ASYMMETRIC decentralisation, entirely with existing fields.

---

## ES1 — Asymmetric decentralisation is divergent per-community scope values (no new field)

**Real-world fact.** What is devolved differs by community: Catalonia (Mossos d'Esquadra) and the
Basque Country (Ertzaintza) run their own police AND their own prisons; Navarre (Policía Foral) has its own police corps that shares policing with the national forces and no prison transfer; most communities run neither. Courts and prosecution are
national for all (judicial unity, art. 117.5; the national Ministerio Fiscal, art. 124).

**Authoritative source.** `es-constitution` (arts. 117.5, 124, 149.1.6, 149.1.29 — read verbatim);
`es-prison-transfer-cat`, `es-prison-transfer-basque` (the transfers — read verbatim).

**Existing-model test.** Could the asymmetry force a new field (e.g. an `autonomyLevel` score)?

**Decision: no new field.** The model's tier-vs-unit rule already states that a non-uniform system
gets one record per unit with divergent scopes. So the asymmetry is: `policingScope`/`correctionalScope`
= `own` where devolved, `national` where not, varying community by community — and `courtScope`/`prosecutionScope`
= `national` for every community. A universal autonomy score was explicitly declined: it would rank
communities where the honest model is a set of per-function facts.

**Transferred competence = `own`.** The Catalan/Basque prison competence is Statute-grounded and
discharged through the community's own prison service — genuinely `own`, not `delegated` (a weaker,
revocable agency relationship) and not `contracted` (no other order delivers it). The
administration/legislation split (legislation stays the State's, art. 149.1.6) is stated in prose,
not a field. `authorityBasis` is left unset for every community (competences assumed via Statute
within the Constitution — the default relationship).

**Effect on prior countries.** None; the scope values already existed.

**Status.** Resolved with existing fields.

---

## ES2 — An `autonomous-community` level

**Fact.** A Spanish comunidad autónoma is a politically autonomous region with its own Statute,
assembly and (for some) its own police and prisons. Spain is a decentralised UNITARY state — its
Constitution (art. 145.1) forbids federation.

**Decision.** Added `autonomous-community` to `JURISDICTION_LEVELS`. Filing it under `region` (a
French administrative tier with no legislative power or police) would group two categorically
different things — the miscategorisation the Japan pilot avoided by adding `prefecture`. One
additive level; cheap by design; every prior record unaffected.

**Status.** Accepted (the one schema change).

---

## ES3 — The statistic was deferred, not manufactured

Spain's prison figures are split by administration: the most-cited central series excludes
Catalonia and the Basque Country, while an all-Spain figure combines three administrations, and the
two are easily confused. No single properly scoped figure could be verified from a directly
readable official source. Per the rule against manufacturing a statistic, none is published; the
corrections page states the split. The absence of a clean figure is itself a consequence of the
asymmetry — a finding, not a gap.

---

## Was one change too little?

No. Spain forced the `autonomous-community` level where the existing levels would have miscategorised
its defining unit, and it exercised the model's tier-vs-unit design under real asymmetry — three
different devolution profiles among four communities, discriminated by scope values, with courts
and prosecution held national throughout. It also declined an autonomy score (over-modelling) and
declined to manufacture a statistic. A model that carries three-way asymmetry with one new level
and otherwise reused fields is doing exactly what it should.
