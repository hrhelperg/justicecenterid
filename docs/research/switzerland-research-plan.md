# Switzerland research plan

## Objective

Test the model against the most decentralised federation on the platform — cantonal sovereignty,
inter-cantonal concordats, multilingual authoritative law, and change by direct democracy — and
determine whether any of it forces new structure. It does not: full reuse, plus one real
ScheduledChange. Results: [switzerland-model-findings.md](./switzerland-model-findings.md).

## Why Switzerland, last

Switzerland combines features tested separately elsewhere: federal unified codes with sub-national
administration (Brazil), residual power reserved to sovereign sub-units (US/Australia), a
peer-pooling arrangement (the concordats — a new shape to test against the Canada `contracted`
value), multilingual law (Canada bilingual, one language further), and a live enacted-but-future
institutional change reached through direct democracy (the ScheduledChange model). It is the
program's stress test of reuse.

## The questions

- **Cantons.** Sovereign, residual power (art. 3), applying federal codes (arts. 122/123). Modelled
  like a US/Australia/Brazil state: `authorityBasis: reserved-powers`, `legalSystemScope: national`,
  `own` police/courts/prosecution. A canton is a federal constituent state, so it uses the existing
  `state` level — no `canton` level, because `state` correctly categorises it (unlike a Spanish
  autonomous community vs `region`).
- **Concordats.** Cantons pool prisons through three inter-cantonal concordats (art. 48). This is
  PEER pooling, not procurement — so `correctionalScope: shared` (jointly exercised), NOT
  `contracted`. No typed concordat entity; the concordats live in prose.
- **Multilingual.** German/French/Italian equal authenticity (art. 70) — prose + per-language names,
  as with Canada, no new field.
- **Direct democracy / ScheduledChange.** The BEKJ (Justitia 4.0) is enacted (20 Dec 2024, optional
  referendum lapsed unused), in force 1 July 2027 (staggered; the örK provision already in force
  from 1 Oct 2025). Modelled as one `pending` ScheduledChange — exercising the referendum and
  staged-commencement handling, with direct democracy in prose and no `directDemocracy` field.

## Jurisdiction samples (4)

ch (Confederation) + Zürich (German), Geneva (French), Ticino (Italian) — one canton per official
language, with identical scope values beneath the multilingualism. No public canton pages.

## Sources and access

The Federal Constitution and the Criminal Procedure Code were read from the official fedlex texts;
the detainee figure from the Federal Statistical Office release; fedpol and the BEKJ from the
agencies' own pages (some via search retrieval, since fedlex serves its text through a single-page
application). Full detail: [switzerland-source-register.md](./switzerland-source-register.md).

## Publication

Published: hub, justice-system, law-enforcement, courts, prosecution, investigations, corrections,
sources. Deferred: forensics, border-and-customs, oversight (overwhelmingly cantonal — would imply
false uniformity), history, timeline.
