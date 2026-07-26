# Australia country pilot — QA record

**Date:** 2026-07-26 · **Program branch:** `feat/canada-australia-spain-switzerland-program`
**Pages/tests commit:** `2df75f4` (docs to follow). Second country of the four-country program.

## Model assessment

Australia forced **no new schema**. It independently validated the Canada pilot's `contracted`
FunctionScope: the ACT runs no police of its own, and the Commonwealth AFP delivers its community
policing "on behalf of the ACT Government", so au-act `policingScope: contracted`; the Northern
Territory runs its own force (`own`). A critic tasked to refute the value returned
**survives-with-refinement** — earned by repetition in a second federation. The
source-of-power difference from Canada is captured by the existing `authorityBasis`: states are
`reserved-powers` (Constitution s.107) with their own criminal law (`legalSystemScope: own`), the
ACT and NT are `federal-plenary` (the DC/Yukon value). Full reasoning:
[australia-model-findings.md](../research/australia-model-findings.md).

## Source verification

Constitution s.107 (residual to states) read verbatim from the official Parliament of Australia
PDF; the AFP/ACT arrangement ("ACT Policing is the community policing arm of the AFP … on behalf of
the ACT Government") verbatim from the AFP page; the NT Police Force from its own page; the ABS
figures (46,998 at 30 June 2025; 27,051 sentenced / 19,850 unsentenced) verbatim from the ABS
release. legislation.gov.au and the CDPP site serve body text via a single-page application or
block automated fetch; those facts were obtained by search retrieval and stated as sourced.

## Independent adversarial verification

Three parallel refuters (defaulting to "uncertain") re-checked **11 load-bearing claims** against
official sources: **11 supported, 0 refuted, 0 uncertain.** No correction required.

## Publication & validation

**Published (8):** hub + justice-system, law-enforcement, courts, prosecution, investigations,
corrections, sources. **Deferred (5):** forensics, border-and-customs, oversight (non-uniform
state/territory + Commonwealth bodies), history, timeline.

- `npm run test` — **884 passed** (20 files), incl. `countries-australia.test.ts` (20).
- typecheck / lint / format:check — clean. `npm run build` — 104 pages. `verify:output` — clean:
  **102 routes**, 104 pages, sitemap 102.
- **Non-vacuity:** removing `out/countries/australia/law-enforcement.html` failed the verifier
  (restored); an au-nsw record stripped of legislativeCompetence fails validation; the restricted
  claim fails without its reference period.

## Static HTTP matrix (served from `out/`, no SPA fallback)

| Path                                                    | Expected | Actual |
| ------------------------------------------------------- | -------- | ------ |
| `/countries/australia` + module routes                  | 200      | 200    |
| `/countries/au`                                         | 404      | 404    |
| `/countries/australia/{oversight,new-south-wales,nope}` | 404      | 404    |

Rendered HTML confirms the facts date (26 July 2026), the "not about Australia" note (no
Canada/France leakage), and `<html lang="en">`.

## Git discipline

Model checkpoint (`eb56b79`), pages/tests (`2df75f4`), docs to follow. No PR, no merge, no
deployment. Spain is next in the program.
