# Finland — model findings

## The finding: Åland validates `autonomous-community` by reuse — and nothing else needs a new value

Finland is the batch's real model-pressure test, and the model absorbs it **with no new field, level
or scope value** — the important result is that the `autonomous-community` level, minted by the Spain
pilot, is now VALIDATED BY REUSE.

### Åland: an autonomous region with a single devolved justice function

Finland is unitary, but its autonomous region **Åland** holds legislative competence over
**policing** ("public order and security", Autonomy Act s. 18(6)), while criminal law, the courts,
the prosecution framework and the enforcement of sentences are reserved to the **State** (s. 27,
subparagraphs 22–24). This is a genuine asymmetry, and it maps onto existing values:

- `fi` (country): all functions `own` — the mainland/State baseline.
- `fi-aland` (**autonomous-community**, parent `fi`): `policingScope: 'own'`, but `courtScope`,
  `prosecutionScope`, `correctionalScope` `national`, with `legislativeCompetence.policing:
'exclusive-subnational'`.

Åland is filed at `autonomous-community`, the level Spain introduced, because it is the **same
category of thing** — an autonomous, legislature-bearing region (the Lagting), not a French
administrative `region`. Using `region` would repeat the exact miscategorisation the Spain pilot
avoided. Two countries now use `autonomous-community` (Spain's comunidades and Finland's Åland),
which is what earns a level — the same "validated by repetition" test the Canada `contracted` scope
passed with Australia.

Åland is modelled as a jurisdiction RECORD (it does institutional work — it legislates its own
policing) but produces NO public page: there is no `/countries/aland`. It appears only as a row in
Finland's jurisdiction table, where it visibly shows the asymmetry (own policing, national
everything else).

## What did NOT need a new value (though it was considered)

- **Two co-equal supreme courts and no constitutional court** — prose. The model does not encode an
  apex-court count; the twin apex and diffuse review (s. 106) are described in prose, as for Sweden.
- **Police under a different ministry (the Interior) from the courts, prosecution and prisons (the
  Justice ministry)** — prose. Which ministry an institution reports to is institutional
  composition, not a jurisdiction scope.
- **Decisional independence within a ministry branch** for the prosecution — an attribute in prose,
  joining the batch's spread (Norway's King-in-Council, Sweden's ministerstyre bar, Denmark's
  ministry subordination, the Netherlands' minister responsibility).
- **Only the competence, not the administration, of Åland policing is sourced.** So the record
  states the verified competence allocation and flags the unconfirmed administrative detail.

## Restricted claim

One, in corrections: SPACE I 2024 (3,041 inmates / 2,958 capacity / density 102.8 on 31 January 2024) — above capacity, scoped as a single-day national aggregate supporting no comparison.
