# Country expansion batches

Evidence-based **proposals** for the next country batches. This document plans; it implements
nothing. It creates no country file, no public route, and no planning-registry entry. It is
**not** a ranking of justice systems — the order is a research-sequencing convenience (source
availability, model pressure, language), and each country is described only by the kind of
research it needs.

Each candidate is characterised by five neutral dimensions:

- **Architecture value** — what it would test in the jurisdiction model.
- **Source quality** — expected availability of authoritative primary sources.
- **Language complexity** — the languages the primary sources are in.
- **Model pressure** — likely reuse vs a possible new field/value.
- **Editorial risk** — the specific accuracy trap to watch.

No completion dates are assigned. Batches are grouped for sequencing, not priority.

## Batch A — Northern and Western Europe

Mostly civil-law unitary or lightly federal systems with excellent official sources; a low-risk
batch that mostly exercises **reuse** and hardens the model on well-documented ground.

| Country     | Architecture value                                                            | Source quality            | Language            | Model pressure                                    | Editorial risk                                                           |
| ----------- | ----------------------------------------------------------------------------- | ------------------------- | ------------------- | ------------------------------------------------- | ------------------------------------------------------------------------ |
| Netherlands | Unitary civil-law; prosecution-led investigation (Openbaar Ministerie)        | High (wetten.overheid.nl) | Dutch               | Low — reuse                                       | Distinguishing OM's role from a common-law prosecutor                    |
| Belgium     | Federal, trilingual, with community/region asymmetry over justice             | High (Justel/Moniteur)    | Dutch/French/German | Medium — asymmetry like Spain, plus language      | Federal vs community competence split                                    |
| Denmark     | Unitary; unified courts administration; distinctive lay-judge system          | High                      | Danish              | Low — reuse                                       | Greenland/Faroe autonomy stays out of scope unless researched            |
| Norway      | Unitary; non-EU; police districts reorganised recently                        | High (Lovdata)            | Norwegian           | Low–medium — a scheduled/completed reorganisation | Post-reform current-status accuracy                                      |
| Sweden      | Unitary; prosecutor-led; strong open-government tradition                     | High                      | Swedish             | Low — reuse                                       | Agency-vs-ministry independence phrasing (restricted: political control) |
| Finland     | Unitary; distinctive prosecutor and Chancellor of Justice/Ombudsman oversight | High                      | Finnish/Swedish     | Low–medium — oversight module                     | Two official languages in institution names                              |

## Batch B — Central and Southern Europe

Civil-law systems, several with regional or historically layered structures; a moderate batch
that tests decentralisation and codified-procedure variety.

| Country  | Architecture value                                                                  | Source quality    | Language   | Model pressure                                                 | Editorial risk                                                  |
| -------- | ----------------------------------------------------------------------------------- | ----------------- | ---------- | -------------------------------------------------------------- | --------------------------------------------------------------- |
| Italy    | Regionalised unitary; autonomous regions/provinces; multiple national police forces | High (Normattiva) | Italian    | Medium — special-autonomy regions; several forces in prose     | Carabinieri vs Polizia di Stato roles kept in prose             |
| Portugal | Unitary; autonomous Azores/Madeira; investigating-magistrate tradition              | High (DRE)        | Portuguese | Low–medium — autonomous regions                                | Cross-linking to Brazil without conflating the two systems      |
| Austria  | Federal; nine Länder; federal criminal law                                          | High (RIS)        | German     | Low — reuse of the German administration/legislation split     | Land vs federal administration precision                        |
| Czechia  | Unitary; post-1993 institutions; state prosecution hierarchy                        | High              | Czech      | Low — reuse                                                    | Continuity/discontinuity across 1993 stated as a claim          |
| Poland   | Unitary; recent, contested judicial-governance changes                              | High (ISAP)       | Polish     | Medium — scheduled changes; political-control restricted claim | Neutral, attributed treatment of contested reforms              |
| Greece   | Unitary; distinctive prosecutorial and areios pagos court structure                 | Medium–high       | Greek      | Low–medium — non-Latin script in names                         | Greek-script institution names (`lang` handling, like Japanese) |

## Batch C — Selected non-European systems

Deliberately diverse in legal tradition and structure; a higher-effort batch that is most likely
to test the model and the source/translation controls.

| Country      | Architecture value                                                                       | Source quality              | Language            | Model pressure                                                                       | Editorial risk                                                       |
| ------------ | ---------------------------------------------------------------------------------------- | --------------------------- | ------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| New Zealand  | Unitary common-law; no codified constitution; distinctive Māori legal dimension          | High                        | English             | Medium — uncodified constitution; Treaty settlements need careful, sourced treatment | Representing the Māori/Treaty dimension accurately, not decoratively |
| South Korea  | Unitary civil-law; recent prosecution-vs-police investigative-power reform               | High                        | Korean              | Medium — a real reform (scheduled/completed change); non-Latin script                | Post-reform current status; Hangul name handling                     |
| Singapore    | Unitary common-law; unified prosecution (AGC); distinctive structure                     | High                        | English             | Low–medium — reuse                                                                   | Restricted claims (effectiveness/trust) must stay strictly sourced   |
| Mexico       | Federal; 2016–2021 accusatory-system transition; state + federal justice                 | Medium–high                 | Spanish             | Medium — federal/state split like Brazil; a completed transition                     | Uneven state-level implementation stated honestly, not uniformly     |
| Argentina    | Federal; province-level justice; ongoing procedural-code transition                      | Medium                      | Spanish             | Medium — federal/provincial split; scheduled changes                                 | Province-by-province variation not flattened                         |
| South Africa | Constitutional supremacy; single national system with provincial divisions; multilingual | High (constitution, gov.za) | English + 10 others | Medium — strong constitutional court; multilingual names                             | Post-apartheid continuity/discontinuity as sourced claims            |

## Sequencing notes

- **Batch A first.** It is the lowest-risk way to add volume and to exercise the model on
  well-documented civil-law ground before the harder decentralised and non-European systems.
- **Belgium and Italy** are the model-pressure countries in A/B — Belgium re-tests the Spanish
  asymmetry pattern with trilingual sources; Italy re-tests special-autonomy regions.
- **Batch C** should follow, not lead: Korea, Mexico and Argentina each carry a real reform that
  exercises `ScheduledChange`, and Greece/Korea/South Africa exercise non-Latin or multilingual
  name handling.
- Each batch is authored one country at a time through the full workflow and gate; a batch is a
  grouping for planning, never a bulk import.

## Explicitly out of scope for this document

No country files, no public routes, no planning-registry edits, no rankings, no dates. When a
batch is authorised, each country begins with `npm run scaffold:country` and the authoring
checklist.
