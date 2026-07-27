# India — research plan

India is country 4 of Batch C and the batch's flagship federal case. Its research centred on one
question above all others, because it drives the data model: **which tier holds each justice
function?**

## Questions the pilot had to answer

1. **Federal or unitary, and which tier runs what?** — a federation. The Seventh Schedule
   (Constitution Art. 246) makes **police** (State List Entry 2), **public order** (Entry 1) and
   **prisons** (Entry 4) exclusive **State** subjects, while **criminal law/procedure** and the
   organisation of subordinate courts are **Concurrent** (List III Entries 1, 2, 11A) — so the codes
   are national but the institutions are State-run. **Prosecution** follows the State Home
   administration (BNSS s. 20). → a Union record **plus** State records.
2. **What is the apex court and review model?** — an **integrated** judiciary: the Supreme Court of
   India (Art. 124; its law binds all courts, Art. 141) over a High Court for each State (Art. 214)
   over the subordinate courts (Art. 235). No separate constitutional court; review is by the
   Supreme Court and High Courts (writ jurisdiction).
3. **Are the codes national?** — yes: the BNS/BNSS/BSA of 2023 came into force on 1 July 2024,
   replacing the IPC, CrPC and Evidence Act (Press Information Bureau).
4. **Who investigates?** — the police (State forces; BNSS s. 175), with magistrate oversight; the
   prosecutor does not run the investigation (common-law model). Federal agencies (CBI, NIA) are
   limited exceptions.
5. **Prisons and numbers?** — a State subject; World Prison Brief (from the NCRB): 511,542 at 31 Dec
   2024 against capacity 453,769 — 112.7%, above capacity, as a national aggregate across State
   systems.

## The model exercise: sub-national records

India is the first Batch C country that genuinely **cannot** be captured at country level, because
the answer to "who runs the police / prosecution / prisons" differs by State. It is modelled with a
Union record (framework, apex courts, national codes, federal agencies) and three illustrative State
records (Maharashtra, Tamil Nadu, Uttar Pradesh) — reusing the "federal record + representative
subset" pattern already used for Germany and the United States. The integrated judiciary is the one
function that stays at Union level (courtScope `own`), unlike Germany's dual-court federation.

## Sources targeted

The official Constitution (Ministry of Law & Justice), the Press Information Bureau, and the World
Prison Brief — all primary/official for the load-bearing points. Federal-agency and oversight detail
is secondary and flagged.

## Model discipline

Reuse of the existing `federal`/`state` levels and `legislativeCompetence` shape — no new schema. The
integrated-judiciary nuance (Union courtScope `own`, State courtScope `shared`) is expressed with
existing values and explained in the notes.
