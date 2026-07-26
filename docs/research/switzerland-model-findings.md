# Switzerland pilot — model findings

Switzerland is the most decentralised federation on the platform, and it forced **no new schema**
— no field, no level, no scope value. It is a pure reuse pilot, plus one exercise of the existing
`ScheduledChange` model. That is the finding for the final country of the program: the model,
built across ten countries, absorbs cantonal sovereignty, inter-cantonal pooling, multilingual law
and a direct-democracy change with the values it already has.

---

## CH1 — Cantons: reserved-powers + national law, at the `state` tier

**Fact.** The cantons are sovereign, exercising all rights not vested in the Confederation
(Constitution art. 3); but the civil and criminal law and procedure are federal and unified (arts.
122/123 — one Civil Code, one Criminal Code, one Criminal Procedure Code since 2011), and the
cantons administer the courts, prosecution and the execution of penalties.

**Decision: full reuse.** `authorityBasis: reserved-powers` (like US/Australia/Brazil states);
`legalSystemScope: national` and `legislativeCompetence['legal-system']: exclusive-federal` (the
Brazil pattern — federal codes, sub-national administration); `own` police/courts/prosecution. A
canton is a federal constituent state, so it uses the existing `state` level: `state` correctly
categorises it, so no `canton` level is minted. (Contrast Spain, where `region` would have
miscategorised an autonomous community, forcing a level; here the existing level fits.)

**Effect on prior countries.** None. **Status.** Resolved by reuse.

---

## CH2 — Concordats are `shared`, not `contracted`

**Fact.** There is no federal prison system; the execution of penalties is cantonal (art. 123), and
the cantons pool their correctional institutions through three inter-cantonal concordats (art. 48).

**Existing-model test.** Does the Canada `contracted` value fit? Or a new relationship/entity?

**Decision: `shared`, no new field.** A concordat is PEER pooling — cantons exercising their own
competence jointly — not one order procuring a service from another. `contracted` is therefore the
wrong value (it means procured delivery from another order); `shared` — "shared with, or exercised
jointly with, another jurisdiction" — is exactly right. The three concordats, their membership and
their art. 48 basis live in prose, not a typed concordat entity (which would be gold-plating for a
pilot). This is the third arrangement the `own`/`shared`/`contracted` vocabulary has now
discriminated (own force, procured force, pooled force) without a relationship graph.

**Status.** Resolved by reuse; sharpens the meaning of `shared` vs `contracted`.

---

## CH3 — Multilingual authority: prose, not a field

**Fact.** Federal law is equally authentic in German, French and Italian (art. 70); Romansh is a
national language.

**Decision.** No schema change — the Canada bilingual approach extended by one language. The
authoritative-language point is a source-note and prose fact (institutions named in all three
languages); no `authoritativeLanguage` field is needed, and no `lang` wrapping (all Latin script).

**Status.** Resolved by reuse.

---

## CH4 — Direct democracy exercises `ScheduledChange`; no `directDemocracy` field

**Fact.** The BEKJ (Justitia 4.0) — creating a joint Confederation–cantons public-law corporation
(justitia.swiss) for electronic justice communication — was adopted 20 December 2024, its optional
referendum lapsed unused, and it enters into force on 1 July 2027 (the corporation provision earlier,
1 October 2025).

**Decision.** Modelled as one `ScheduledChange`: `status: pending`, `certainty: enacted-with-date`
(the referendum deadline passed, so it is enacted), `enactedOn: 2024-12-20`, `effectiveOn:
2027-07-01`, with the staggered commencement in the notes. This exercises the model's referendum
and staged-commencement handling. **No `directDemocracy` field** was added — the referendum step is
carried by `certainty` and the notes, per the instruction not to add such a field unless a concrete
fact required it. The negative finding (no 2026 justice-institution referendum) is also recorded.

**Status.** Resolved by reuse of `ScheduledChange`; a real referendum-processed change now
validates that model.

---

## Was reuse-only too shallow?

No — for the final country, reuse IS the result the program was testing for. Switzerland is the
hardest decentralisation case on the platform (26 sovereign cantons, three languages, concordat
pooling, direct-democratic change), and the model absorbed all of it with values earned by earlier
pilots: reserved-powers (US), national legal system + exclusive-federal legislation (Brazil),
`shared` for pooled functions (sharpened here against `contracted`), multilingual-in-prose (Canada),
and the `ScheduledChange` model (France/Ireland) now exercised against a referendum-processed,
staged-commencement change. A model that can represent the most decentralised federation without a
new field, while still discriminating a pooled prison system from a procured police force, is a
mature model — which is exactly what a four-country program ending on the hardest case set out to
show.
