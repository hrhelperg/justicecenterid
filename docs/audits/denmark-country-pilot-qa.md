# Denmark — country pilot QA

- [x] 8 published modules; `factsVerifiedOn` 2026-07-26; review fact-checked; safety cleared/not-required.
- [x] Deferred modules (forensics, border-and-customs, history, timeline): stated reason, no content, no route.
- [x] Restricted claim (`dk-prison-density-2024`) validates; single-day national aggregate; no comparison.
- [x] `validateCountryPublication` returns no problems.
- [x] Jurisdiction record `dk` valid: single unitary country-level record, all functions `own`.
- [x] Sources only `DK`/`INT`, each `content-confirmed`; access limits recorded (Constitution PDF
      Cloudflare-walled → reproduction of the official translation; domstol.dk bot-walled → e-Justice).
- [x] Adversarial verification: no factual errors; three refinements applied (ombudsman section
      number not asserted; Police Complaints Authority dated 2010/2012; police leadership limited to source).
- [x] F4 demonym: `independentBodyNoun: 'a Danish government body'`.

## Verified distinguishing facts

- Integrated police-prosecution: the Police Commissioner heads the police district AND is the local
  prosecutor; both under the Ministry of Justice.
- No constitutional or separate administrative court (Constitution §63); courts independent of the
  executive (§62), prosecution under the Ministry of Justice.
- Independent Police Complaints Authority (enacted 2010, operational 2012) — a check that sits
  outside both the police and the prosecution.
- Prisons: SPACE I 2024 density 93.9 (below capacity).
