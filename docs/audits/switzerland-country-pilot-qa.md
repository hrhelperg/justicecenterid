# Switzerland country pilot — QA record

**Date:** 2026-07-26 · **Program branch:** `feat/canada-australia-spain-switzerland-program`
**Model commit:** `9203ed4` · **Pages/tests commit:** `983515b`. Fourth and final country of the program.

## Model assessment

Switzerland forced **no new schema** — no field, level or scope value: a pure-reuse pilot, plus
one exercise of the existing `ScheduledChange` model. Cantons are `reserved-powers` (Constitution
art. 3) applying federal unified codes (`legalSystemScope: national`, arts. 122/123 — the Brazil
pattern), modelled at the existing `state` level (a canton is a federal constituent unit, so
`state` fits — no `canton` level). Corrections are `shared` — the cantons pool prisons through
three inter-cantonal concordats (art. 48), PEER pooling, explicitly NOT `contracted` — which draws
the boundary of the Canada value from the other side. Multilingual authoritative law is prose. Full
reasoning: [switzerland-model-findings.md](../research/switzerland-model-findings.md).

## The ScheduledChange (the referendum / staged-commencement test)

The BEKJ (Justitia 4.0) is recorded as one `ScheduledChange`: enacted 20 Dec 2024, optional
referendum lapsed unused, in force 1 July 2027 (the justitia.swiss public-law corporation provision
already in force from 1 Oct 2025). `status: pending`, `certainty: enacted-with-date`. This validated
the model against a real direct-democracy change and showed no `directDemocracy` field is needed
(the referendum step lives in the certainty and notes). Three lifecycles are now exercised across
the pilots: France (pending), Ireland (taken-effect), Switzerland (pending, post-referendum).

## Source verification

The Federal Constitution (art. 3, 122/123, 188, 48, 70) and the Criminal Procedure Code (art. 22)
were read from the official fedlex texts; the FSO figure (7,119 detainees on 31 January 2026,
highest since 1988) verified from the FSO release; the BEKJ dates from the Federal Office of Justice
and the project pages.

## Independent adversarial verification

Two parallel refuters re-checked **9 load-bearing claims** against official sources: **9 supported,
0 refuted, 0 uncertain.** No correction required.

## Publication & validation

**Published (8):** hub + justice-system, law-enforcement, courts, prosecution, investigations,
corrections, sources. **Deferred (5):** forensics, border-and-customs, oversight (overwhelmingly
cantonal), history, timeline.

- `npm run test` — **972 passed** (22 files), incl. `countries-switzerland.test.ts` (23).
- typecheck / lint / format:check — clean. `npm run build` — 120 pages. `verify:output` — clean:
  **118 routes**, 120 pages.
- **Non-vacuity:** removing a Switzerland module HTML failed the verifier (restored); a canton
  stripped of `legislativeCompetence` fails validation; the restricted claim fails without its
  reference period.

## Static HTTP matrix (served from `out/`, no SPA fallback)

| Path                                                                  | Expected | Actual |
| --------------------------------------------------------------------- | -------- | ------ |
| `/countries/switzerland` + module routes                              | 200      | 200    |
| `/countries/ch`                                                       | 404      | 404    |
| `/countries/switzerland/{oversight,zurich,nope}`, `/countries/zurich` | 404      | 404    |

Rendered HTML confirms the facts date, the "not about Switzerland" note (no leakage), and the
French "Tribunal fédéral" rendering with its accent.

## Git discipline

Model checkpoint (`9203ed4`), pages/tests + ScheduledChange (`983515b`), docs to follow. No PR, no
merge, no deployment. This is the final country; the program then runs its full final validation.
