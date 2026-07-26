# Spain country pilot — QA record

**Date:** 2026-07-26 · **Program branch:** `feat/canada-australia-spain-switzerland-program`
**Part A commit:** `01f3b59` · **Pages/tests commit:** `8c673d2`. Third country of the program.

## Model assessment

Spain forced **one** additive schema change — an `autonomous-community` JurisdictionLevel — and
carried its asymmetric decentralisation entirely with existing fields (divergent per-function
scope values across sibling community records). A critic confirmed no new field was needed and
that transferred prison administration is `own` (not `delegated`/`contracted`), with the
legislation/administration split (art. 149.1.6) in prose and `authorityBasis` unset. Full
reasoning: [spain-model-findings.md](../research/spain-model-findings.md). Part A was validated
and committed separately (`01f3b59`).

## Source verification

The Constitution (arts. 2, 137, 145.1, 149.1.5/6/29, 104, 117.5, 122, 123, 124, 152), the
security-forces organic law (LO 2/1986, the Cuerpo Nacional de Policía and Guardia Civil), and the
two prison-transfer decrees (RD 3482/1983 Catalonia; RD 474/2021 Basque Country) were all read
verbatim from the Boletín Oficial del Estado (boe.es).

## Independent adversarial verification — and a correction applied

Two parallel refuters re-checked **10 load-bearing claims**: **9 supported, 0 refuted, 1
uncertain.** The "uncertain" was a genuine, useful correction: the claim that Catalonia, the
Basque Country AND Navarre each have "a full force acting as the ordinary police" overstated
Navarre. Only the Mossos d'Esquadra and the Ertzaintza are _integral_ forces that have displaced
the national police; Navarre's Policía Foral is a real corps but SHARES ordinary policing with the
national forces (its exclusive competence is essentially traffic). **The correction was applied:**
`es-navarre` `policingScope` was changed from `own` to `shared`, and the hub, law-enforcement and
investigations prose were revised — which also sharpened the asymmetry into a genuine gradient
(own → shared → national) rather than a switch.

## Publication scope

**Published (8):** hub + justice-system, law-enforcement, courts, prosecution, investigations,
corrections, sources. **Deferred (5):** forensics, border-and-customs, oversight (would imply
false uniformity without the community bodies researched), history, timeline. **No restricted
claim:** the official prison series are split by administration and could not be reconciled to one
verified, properly scoped figure; the corrections page states this and publishes none.

## Validation

- `npm run test` — **927 passed** (21 files), incl. `countries-spain.test.ts` (22).
- typecheck / lint / format:check — clean. `npm run build` — 112 pages. `verify:output` — clean:
  **110 routes**, 112 pages.
- **Non-vacuity:** removing a Spain module HTML failed the verifier (restored); an unresearched
  community claiming a researched scope fails validation.

## Static HTTP matrix (served from `out/`, no SPA fallback)

| Path                                                                  | Expected | Actual |
| --------------------------------------------------------------------- | -------- | ------ |
| `/countries/spain` + module routes                                    | 200      | 200    |
| `/countries/es`                                                       | 404      | 404    |
| `/countries/spain/{oversight,catalonia,nope}`, `/countries/catalonia` | 404      | 404    |

Rendered HTML confirms the facts date, the "not about Spain" note (no leakage), and the Catalan
name "Mossos d'Esquadra" rendering with its accent.

## Git discipline

Part A (`01f3b59`), pages/tests (`8c673d2`), plus the Navarre correction and docs to follow. No
PR, no merge, no deployment. Switzerland is next.
