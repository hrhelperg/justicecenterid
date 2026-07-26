# Canada pilot — model findings

Canada forced **one** additive schema change — a new `FunctionScope` value, `contracted` — and
**rejected** the larger structure it was expected to force (a typed inter-institutional
relationship model). This document records both decisions against the model-findings standard.

---

## CA1 — Contract policing earns `contracted`, not a relationship graph

**Real-world fact.** Policing is constitutionally the province's (Constitution Act 1867 s.92(14)),
but in eight provinces and the three territories it is DELIVERED by the RCMP — a federal
institution that stays federally governed (RCMP Act ss.3, 5) — under a cost-shared Police Service
Agreement (RCMP Act s.20; provinces/territories pay 70%, term to 2032). Ontario (OPP) and Quebec
(Sûreté du Québec) run their own forces.

**Authoritative source.** `ca-rcmp-act`, `ca-rcmp-contract`, `ca-constitution-1867` — all read
verbatim.

**Existing-model limitation.** The `FunctionScope` values (own | national | shared | delegated |
none | unknown) could not state this honestly. `own` is false (the province owns no force);
`delegated` is inverted (delegation runs parent→child, but here a province procures a federal
service); `national` erases that the province decides and funds most of the cost; `shared`
implies concurrent authority that does not exist.

**Representations considered.**

1. A typed `InstitutionRelationship` / service-arrangement model (provider, client, funding,
   governance, term) — the program brief's candidate, and a research critic's fallback shape.
2. Zero new types: `shared` + a mandatory structural note.
3. A single additive `FunctionScope` value, `contracted`.

**Smallest adequate correction.** Option 3. A relationship graph (option 1) was rejected: the
s.96 superior courts are the exact structural analogue (a function the province OWNS, staffed by
federally appointed judges) and the platform models them with scope + prose, no graph; a
named-agency registry would break the deliberate "institution types, not named agencies"
invariant for one country's one function — the definition of premature generality. Option 2 was
rejected as imprecise (`shared` conflates concurrent authority with procured delivery). Option 3
adds one enum member, defined as: _the jurisdiction holds the function but procures its delivery
from an institution of another order of government under an agreement; the provider's identity
and the agreement's terms live in the module prose._ The distinction from the s.96 courts is
principled: the province OWNS the courts (courtScope `own`, judges a note) but does NOT own the
police it contracts (`contracted`).

**Effect on France / Germany / United States / Ireland / Japan / Brazil.** None. `contracted` is
additive; no existing record uses it, and `isResearchedScope` already treats every non-`unknown`
value as researched, so no validator changed. Verified by the cross-country regression test.

**Migration impact.** None (additive union member). **Validation impact.** None; a non-vacuity
test confirms an unresearched record may not claim `contracted`.

**Status.** Accepted (the one schema change); the relationship graph is **rejected**, to be
revisited only if a THIRD independent country produces the same provider≠owner pattern — which
Australia (AFP/ACT) tests next.

---

## CA2 — Federal residual power: `reserved-powers` rejected, `authorityBasis` left unset

**Fact.** In Canada the residual "Peace, Order, and good Government" power is FEDERAL (Constitution
Act 1867 s.91); provincial powers are constitutionally enumerated and exclusive (s.92).

**Limitation & decision.** `authorityBasis: 'reserved-powers'` (the US/Brazil value) would INVERT
Canadian federalism — the residual is not provincial. No existing value fits a co-ordinate
federation whose residual is central, so `authorityBasis` is left UNSET on the provinces (its
default carries no positive claim) and the arrangement is stated in the record notes, following
the Germany precedent (which also left it unset for a constitutional federation). A new value was
considered and declined: the note carries the truth, and minting a value used by one country's
provinces is not the smallest change. **Territories** differ — their powers are delegated by and
amendable by Parliament — so the Yukon uses `authorityBasis: 'federal-plenary'` (the value the US
pilot added for the District of Columbia, reused unchanged), which also makes the
province/territory distinction machine-visible.

**Status.** Resolved in prose + reuse; no new value.

---

## CA3 — Bijural, bilingual: handled in prose and existing fields

**Fact.** Quebec applies civil law to private law (the others common law); federal law is equally
authoritative in English and French.

**Decision.** No schema change. Quebec's distinct private-law system is `legalSystemScope: 'own'`
(the others `own` too, for their own provincial private law) with the federal-criminal-law point
in prose. Bilingual equal authenticity is a source-note fact, not a field — Canadian statutes are
cited in their authoritative English, so the Japan `translationStatus`/`authoritativeLanguage`
fields are simply unused. No `lang` wrapping (French terms are Latin script, as the France and
Germany pages already carry French and German terms).

**Status.** Resolved in prose + existing fields.

---

## Was one change too few, or too many?

The shallowness check runs both ways here. Too few? No — Canada forced the `contracted` value
where six prior pilots' model genuinely could not speak, and it did so with verbatim-verified
evidence and an independent adversarial pass. Too many? Also no — the pilot REJECTED the larger
relationship model it was expected to force, on the principled ground that the s.96 courts (the
same shape) are handled with scope + prose, and reused two prior findings (the DC `federal-plenary`
value for territories; Germany's "leave authorityBasis unset for a constitutional federation").
One additive enum member, no graph, no named-agency registry: the smallest change that removes a
falsehood at the exact point of the gap.
