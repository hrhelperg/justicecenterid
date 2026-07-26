# Finland — country pilot QA

- [x] 8 published modules; `factsVerifiedOn` 2026-07-26; review fact-checked; safety cleared/not-required.
- [x] Deferred modules (forensics, border-and-customs, history, timeline): stated reason, no content, no route.
- [x] Restricted claim (`fi-prison-density-2024`) validates; above-capacity national aggregate; no comparison.
- [x] `validateCountryPublication` returns no problems.
- [x] Jurisdiction records valid: `fi` (country, all own) and `fi-aland` (autonomous-community,
      policing own / courts+prosecution+corrections national), reusing the Spain-minted level.
- [x] No public Åland page (`/countries/aland` is 404); Åland appears only in Finland's jurisdiction table.
- [x] Sources only `FI`/`INT`, each `content-confirmed`; Constitution and Autonomy Act from MoJ
      official English translations (personally re-verified from the FAOLEX PDF).
- [x] Adversarial verification: no factual errors; the twin-apex and Åland-competence facts re-verified verbatim.
- [x] F4 demonym: `independentBodyNoun: 'a Finnish government body'`.

## Verified distinguishing facts

- Two co-equal supreme courts (Supreme Court + Supreme Administrative Court, s. 3/99); no
  constitutional court (diffuse review, s. 106; ex-ante parliamentary review).
- Two constitutional guardians of legality: Chancellor of Justice (s. 108) and Parliamentary Ombudsman (s. 109).
- Police under the Ministry of the Interior; courts, prosecution and prisons under the Ministry of Justice.
- Prosecution decisionally independent within the MoJ administrative branch (Act 32/2019; Prosecutor-General appointed by the President).
- Åland asymmetry: regional policing competence, State courts/prosecution/corrections — validating `autonomous-community` in a second country.
- Prisons: SPACE I 2024 density 102.8 (above capacity).
