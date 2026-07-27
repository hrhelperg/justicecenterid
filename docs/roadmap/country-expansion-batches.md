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

## Batch A — Northern and Western Europe · SHIPPED 2026-07-26

**Delivered** on `feat/batch-a-northern-western-europe` (see
`docs/audits/batch-a-northern-western-europe-qa.md` and roadmap Phase 13). All six countries below
are published: the Netherlands, Belgium, Denmark, Norway, Sweden and Finland, 8 modules each, no new
schema — Belgium validated the federal-but-justice-centralised shape (inverse of Germany) and Finland
validated the `autonomous-community` level via Åland. The characterisation below is what was
researched; it proved accurate.

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

## Batch B — Central and Southern Europe · SHIPPED 2026-07-26

**Delivered** on `feat/batch-b-central-southern-europe` (see
`docs/audits/batch-b-central-southern-europe-qa.md`). All six countries below are published — Italy,
Portugal, Austria, Czechia, Poland and Greece — 8 published + 4 deferred modules each, one
detention restricted claim each, no new schema. The batch mapped a full spectrum of prosecution
independence (Portugal autonomous → Greece/Italy inside the judiciary → Austria under the minister →
Czechia inside the ministry → Poland where the prosecutor-general _is_ the minister); confirmed the
Belgium `federal`/`exclusive-federal` shape via Austria; handled Poland's contested judiciary
governance strictly by dated attribution (with a mechanical neutrality tripwire test); reported
Austria honestly with no density where the source gave no capacity; and authored Greece under
bot-walled official sites with named unofficial-translation and foreign-government-secondary
substitutions. The characterisation below is what was researched; it proved accurate.

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

## Batch C — Global diversity · SHIPPED 2026-07-27

**Delivered** on `feat/batch-c-global-ten` (see `docs/audits/batch-c-global-diversity-qa.md`). The
authorised set was widened from the six proposed non-European systems to a **ten-country global
sweep** — the six below plus **India, Indonesia, Kenya and Nigeria** — 8 published + 4 deferred
modules each, one detention restricted claim each, and **no new schema**. The batch delivered the
site's widest range of constitutional and federal shapes to date:

- **The review spectrum, end to end.** New Zealand's parliamentary sovereignty (courts cannot strike
  down a statute) at one pole; South Africa's constitutional supremacy with an apex constitutional
  court at the other; concentrated constitutional courts (South Korea, Indonesia); and diffuse review
  (Argentina; Kenya's High Court with a 2010 apex Supreme Court; Nigeria).
- **Every federal/decentralised shape.** Genuine sub-national justice modelled with a federal record
  - representative sub-national records (India, Mexico, Argentina); the honest counter-cases where a
    decentralised state runs **no** sub-national justice (South Africa's provinces, Kenya's counties →
    one country record); and the **inverse federation** (Nigeria: federal police and prisons but state
    courts, prosecution and criminal law).
- **The prosecution-independence axis extended** — Kenya's constitutionally independent DPP that can
  direct the police to investigate; Nigeria's executive-embedded, dual AGF/State-AG prosecution.
- **Contested/sensitive matter by dated attribution** — South Korea's genuinely pending prosecution
  restructuring (the batch's first `enacted-with-date` `ScheduledChange`); Mexico's 2024 judicial
  elections and Nigeria's Sharia penal codes and pending state-police bill, each stated by dated
  attribution with a mechanical neutrality tripwire test; special-autonomy features (Indonesia's
  Aceh, Nigeria's Kadhis'/Sharia courts) kept in prose.
- **Honest prison figures** — over- and under-capacity handled with per-country nuance, non-Latin and
  multilingual names, and — for Kenya and Nigeria — restricted claims that keep two World-Prison-Brief
  reference dates distinct rather than mixing them.

| Country      | Architecture value                                                                    | Source quality              | Language            | Model pressure                                                                     | Editorial risk                                                         |
| ------------ | ------------------------------------------------------------------------------------- | --------------------------- | ------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| New Zealand  | Unitary common-law; no codified constitution; parliamentary sovereignty               | High                        | English             | Medium — uncodified constitution; parliamentary-sovereignty pole                   | Representing the Māori/Treaty dimension accurately, not decoratively   |
| South Korea  | Unitary civil-law; separate constitutional court; prosecution-vs-police reform        | High                        | Korean              | Medium — a real pending reform (`ScheduledChange`); non-Latin script               | Post-reform current status; Hangul name handling                       |
| Singapore    | Unitary common-law; unified prosecution (AGC); distinctive structure                  | High                        | English             | Low–medium — reuse                                                                 | Restricted claims (effectiveness/trust) must stay strictly sourced     |
| India        | Federal; police/prosecution/prisons at the state level; integrated judiciary          | High (constitution)         | English             | High — federal record + representative states; integrated-court `own`              | Union-vs-state split; Union Territories noted not modelled             |
| Indonesia    | Unitary; separate constitutional court; Aceh special-autonomy sharia                  | High                        | Indonesian          | Medium — Aceh in prose, not a record                                               | Aceh's special status stated precisely, not sensationally              |
| Mexico       | Federal; 2016–2021 accusatory transition; 2024 judicial elections                     | Medium–high                 | Spanish             | Medium — federal record + representative states; contested reform                  | Uneven state implementation; 2024 reform by dated attribution          |
| Argentina    | Federal; province-level justice; diffuse review with strike-down                      | Medium                      | Spanish             | Medium — federal record + representative provinces                                 | Province variation not flattened; custody-total nuance                 |
| South Africa | Constitutional supremacy; quasi-federal but justice national; rich oversight          | High (constitution, gov.za) | English + 10 others | Medium — one country record (provinces run no justice)                             | Post-apartheid continuity; contested corruption directorate attributed |
| Kenya        | Devolved unitary; justice national; independent DPP that can direct investigations    | High (constitution)         | English/Kiswahili   | Medium — one country record (counties run no justice)                              | Sharia (Kadhis') courts; two prison reference dates; office-holders    |
| Nigeria      | Federation with federal police and prisons, but state courts/prosecution/criminal law | High (constitution)         | English             | High — inverse federation: federal record + representative states, inverted scopes | Sharia penal codes + pending state-police bill by dated attribution    |

## Sequencing notes

- **Batch A first.** It is the lowest-risk way to add volume and to exercise the model on
  well-documented civil-law ground before the harder decentralised and non-European systems.
- **Belgium and Italy** are the model-pressure countries in A/B — Belgium re-tests the Spanish
  asymmetry pattern with trilingual sources; Italy re-tests special-autonomy regions.
- **Batch C** followed A and B (shipped 2026-07-27) and was widened to a ten-country global sweep.
  The rationale held: South Korea supplied the first genuine `enacted-with-date` `ScheduledChange`
  (a pending prosecution restructuring), Mexico's 2024 judicial elections and Nigeria's Sharia
  penal codes / pending state-police bill exercised the neutrality controls by dated attribution,
  and Korea exercised non-Latin name handling. India, Argentina and Nigeria stress-tested the
  federal model (representative sub-national records), with Nigeria adding the inverse-federation
  case (federal police/prisons, state courts/prosecution/law) and Kenya/South Africa the
  decentralised-but-justice-national counter-cases.
- Each batch is authored one country at a time through the full workflow and gate; a batch is a
  grouping for planning, never a bulk import.

## Explicitly out of scope for this document

No country files, no public routes, no planning-registry edits, no rankings, no dates. When a
batch is authorised, each country begins with `npm run scaffold:country` and the authoring
checklist.
