# Netherlands — country pilot QA

- [x] Every published module: sources ≥ 1, `factsVerifiedOn` 2026-07-26, review fact-checked,
      safety cleared/not-required. 8 published (justice-system, law-enforcement, courts,
      prosecution, investigations, corrections, oversight, sources).
- [x] Deferred modules (forensics, border-and-customs, history, timeline) each carry a stated
      reason, no content, and no route.
- [x] Restricted claim (`nl-prison-density-2024`) validates; scoped as a single-day national
      aggregate; supports no comparison.
- [x] `validateCountryPublication` returns no problems.
- [x] Jurisdiction record `nl` valid: single unitary country-level record, all functions `own`.
- [x] Sources: only `NL`/`INT`, each `content-confirmed`. Access limits (wetten.overheid.nl
      unreachable) recorded in the source register.
- [x] Adversarial verification: all six load-bearing facts confirmed, no corrections (the OM's
      subordination to the minister and the Art. 120 bar on judicial review both re-verified).
- [x] Honesty: no dedicated police-complaints body claimed (stated as an unresearched gap); the
      2029 Code of Criminal Procedure recorded as proposed, not as a scheduled institutional change.
- [x] F4 demonym: `independentBodyNoun: 'a Dutch government body'` on the dossier drives the
      disclosure without editing the shared component.

## Distinguishing facts verified

- Prosecution (Openbaar Ministerie) is part of the judiciary but under the Minister of Justice and
  Security — not an independent DPP.
- No constitutional court; Art. 120 forbids judicial review of the constitutionality of statutes.
- One national police force (Police Act 2012) under dual authority (prosecutor / mayor).
- Prosecutor-led criminal investigation.
