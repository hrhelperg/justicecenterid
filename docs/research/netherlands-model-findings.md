# Netherlands — model findings

## What reused cleanly

Everything. The Netherlands forced **no new field, level, scope, or authority-basis** — it is the
purest reuse in the batch. As a decentralised unitary state, it is a single `country`-level
jurisdiction record with all five functions `own`, identical in shape to Ireland. `coverage:
'partial'`, sourced.

## What needed a new field or value

Nothing. Two facts that a naïve model might be tempted to encode were deliberately kept in prose:

1. **The OM is not independent of the executive.** It is part of the judiciary yet under the
   political responsibility of the Minister of Justice and Security, who with the Board of
   Prosecutors General sets its priorities. This is an _attribute_ of the prosecution arrangement,
   not a new jurisdiction level or scope — `prosecutionScope: 'own'` (the country administers its
   own prosecution) is still correct; the independence question is prose.
2. **No constitutional court / no judicial review of statutes** (Art. 120). Again an attribute of
   the court system, stated in prose, not a schema field. The model does not (and should not)
   carry a "has constitutional review" boolean — that would invite exactly the kind of
   plausible-but-unsourced flag the content model exists to prevent.

## What stayed in prose

Institution names (Openbaar Ministerie, Politie, Hoge Raad, DJI, Nationale ombudsman); the dual
authority over the single police force (prosecutor for criminal enforcement, mayor for public
order); the separate highest administrative courts; the Kingdom-level asymmetry; and the proposed
2029 Code of Criminal Procedure (in the legislative process, so prose — NOT a `ScheduledChange`,
which is reserved for enacted-with-date changes).

## Restricted claim

One, in corrections: the SPACE I 2024 national detention figure (9,683 inmates / 10,344 capacity /
density 93.6 on 31 January 2024), scoped as a single-day national aggregate supporting no
comparison. Below capacity, unlike Belgium/Sweden/Finland in the same batch.
