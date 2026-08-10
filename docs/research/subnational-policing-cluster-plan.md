# Sub-national policing cluster — plan

**Status:** 4 of 8 candidates published, 2026-08-10.

Wave 2 named this the largest genuine gap in the institution taxonomy and deferred it for
per-system sourcing. That sourcing existed in the registry; what was missing was the
editorial apparatus to use it without flattening four different constitutional
arrangements into one English phrase.

## 1. The problem this cluster has to solve

English supplies one vocabulary for things that are not alike. A United States state police
force, a Brazilian _polícia civil_, a Japanese prefectural force and a Catalan force all get
described as "regional" or "state" police in ordinary writing, and they are:

- differently **sourced in law** — reserved powers, constitutional enumeration, national
  statute, or a region's own statute of autonomy;
- differently **accountable** — to a state government, to Governors, to a prefectural public
  safety commission, to a regional government;
- differently **complete** — some own a force, some buy the service, some have neither.

The failure mode is not a wrong fact. It is a reader concluding that _having sub-national
government implies having sub-national police_.

## 2. The counterexample requirement

Every page in this cluster carries a typed `counterExamples` field: countries with
government at the same geographic level that do **not** own the function.

This is a schema field rather than a paragraph, for two reasons. A "but" inside prose is the
first thing lost when a page is edited later, and a typed field can be asserted by test —
`wave3-routes.test.ts` requires every sub-national page to carry at least one counterexample,
drawn from a published dossier, backed by a source scoped to that country, and never naming
a country that also appears as a positive example.

The counterexamples used:

| Page                        | Counterexample | What it establishes                                                                                                                                                                                                             |
| --------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| State police                | **Nigeria**    | 36 states, and s 214(1) of the 1999 Constitution provides that "There shall be a police force for Nigeria … no other police force shall be established for the Federation or any part thereof". Not merely absent — prohibited. |
| Provincial police           | **Kenya**      | 47 counties with substantial devolved competences; the Fourth Schedule keeps police services, criminal law and correctional services national.                                                                                  |
| Prefectural police          | **France**     | Comparable administrative geography, no general policing at that tier: the national police holds general competence and municipal agents act under the mayor.                                                                   |
| Autonomous-community police | **Kenya**      | Devolution and policing competence are separable, and in Kenya they are separated.                                                                                                                                              |

## 3. Classification of the 8 candidates

| Candidate                       | Verdict                                       | Reason                                                                                                                                                                                             |
| ------------------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **State Police**                | **PUBLISH**                                   | Distinct constitutional pattern; three sourced examples and a decisive counterexample.                                                                                                             |
| **Provincial Police**           | **PUBLISH**                                   | Distinct from state police because the competence can be held without owning a force — the Canadian contract model has no equivalent in the state-police pattern.                                  |
| **Prefectural Police**          | **PUBLISH**                                   | Distinct because the state is unitary: no sub-national criminal law, no sovereignty, supervision by commission. Publishing it _is_ the anti-equivalence work.                                      |
| **Autonomous-Community Police** | **PUBLISH**                                   | Distinct because the competence flows from each region's own statute, making asymmetry structural rather than incidental.                                                                          |
| Regional Police                 | **MERGE → provincial / autonomous-community** | "Regional" is a descriptive adjective, not a constitutional category. Whichever of the two applies is the useful answer.                                                                           |
| Territorial Police              | **MERGE → state police**                      | Australia's Northern Territory runs its own force and the ACT is policed federally — the variation is captured inside the state-police page, where it also serves as the internal counterexample.  |
| Highway Patrol                  | **REJECT**                                    | A United States term for a function that some states place in a single general force and others separate. Not a category; recorded as a `commonConfusions` entry on the state-police page instead. |
| Local Police                    | **ALIAS of `municipal-police`**               | Decided in Wave 2 and unchanged.                                                                                                                                                                   |

## 4. The cautions the brief set, and how each is met

- **Highway patrol ≠ state police.** The state-police page states that some states run one
  force doing both, others separate them, and others use neither term. A test asserts the
  page mentions highway patrol at all, so the caution cannot be silently dropped.
- **Prefectural police are not US state police.** The page says prefectures are not
  sovereign and hold no legislative power over criminal law. Both phrases are asserted by
  test.
- **Spain is asymmetric.** The page turns on the conditional wording of Organic Law 2/1986 —
  autonomous communities _that so provide in their statutes_ create their own forces — and
  says the conditional is the point. No claim is made about which specific communities
  currently operate which bodies, because the cited law establishes the framework rather
  than the current roster.
- **Canada is asymmetric.** The page separates _holding the competence_ from _owning the
  force_: policing is provincial under the Constitution Act 1867, and the RCMP delivers it
  under contract to eight provinces, three territories and around 150 municipalities, while
  Ontario and Quebec maintain their own services. The contracted force remains federally
  governed.
- **Brazil is not the American model.** Article 144 divides state policing by function
  between the _polícias civis_, exercising judicial-police functions, and the _polícias
  militares_, holding ostensive policing and preservation of public order — both subordinate
  to the Governors.

## 5. Restricted claims

None introduced. No crime rate, staffing count, trust metric, effectiveness or corruption
claim appears anywhere in the cluster. These pages are institutional explanation, and they
do not need statistics to be useful — which is fortunate, because sub-national comparative
policing statistics are among the least comparable figures in this field.

## 6. Deferred

`regional-police` and `territorial-police` are merged rather than deferred; nothing in this
cluster is left in a pending state. The nearest adjacent gap is **municipal policing in
federal systems** — the interaction between a state force and the city forces inside it —
which needs sourcing this platform does not yet hold.
