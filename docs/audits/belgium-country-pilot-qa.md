# Belgium — country pilot QA

- [x] 8 published modules (justice-system, law-enforcement, courts, prosecution, investigations,
      corrections, oversight, sources), `factsVerifiedOn` 2026-07-26, review fact-checked, safety
      cleared/not-required.
- [x] Deferred modules (forensics, border-and-customs, history, timeline) each carry a stated
      reason, no content, and no route.
- [x] Restricted claim (`be-prison-density-2024`) validates; scoped as an above-capacity national
      aggregate; supports no comparison.
- [x] `validateCountryPublication` returns no problems.
- [x] Jurisdiction record `be` valid: single `federal` record, all functions `own`, every
      `legislativeCompetence` `exclusive-federal`; no Community/Region record.
- [x] Sources: only `BE`/`INT`, each `content-confirmed`.
- [x] Adversarial verification: all six load-bearing facts confirmed; TWO provenance corrections
      applied (the Art. 147 "Supreme Court" translation, and paraphrasing the investigation-direction
      line instead of quoting a search summary).
- [x] Access limits recorded: Federal Police site unreachable, belgium.be bot-walled → internal
      police directorates and the specific prison directorate not asserted; Comité P and the
      federal ombudsman named only in general terms.
- [x] F4 demonym: `independentBodyNoun: 'a Belgian government body'`.

## The model finding

Belgium is a federal state whose justice functions are federal (the inverse of Germany), modelled
with one `federal` record, all functions `own` + `exclusive-federal`, and no sub-national record.
No new schema. The three-court structure, integrated two-level police, investigating judge, and the
minister's power over prosecutions are all prose.

## Verified distinguishing facts

- Court of Cassation (Art. 147; official English "Supreme Court"), Constitutional Court (Art. 142),
  Council of State — three top courts, in Dutch/French/German.
- Prosecution (parquet / parket) constitutionally independent in individual cases, but the minister
  may order prosecutions and set criminal policy (Art. 151 §1).
- Integrated two-level police (Law of 7 December 1998), from the former gendarmerie, municipal and
  judicial police.
- Prisons federal; SPACE I 2024 density 112.7 (above capacity).
