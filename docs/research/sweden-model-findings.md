# Sweden — model findings

## What reused cleanly

Everything. Sweden is a unitary state — one `country`-level record, all five functions `own`,
identical in shape to the other unitary pilots. `coverage: 'partial'`, sourced. No new field, level,
scope, or authority basis.

## What needed a new field or value

Nothing — though Sweden came closest to suggesting one. The research flagged that the constitutional
prohibition on **ministerstyre** (Instrument of Government Ch. 12 Art. 2 — no authority may direct
how an administrative authority decides an individual case or applies the law) is a _stronger_ form
of agency autonomy than "the prosecution is under the justice ministry", and asked whether the model
needs a distinct executive-control value.

The decision was **no new value**. `prosecutionScope: 'own'` (and the same for policing and
corrections) is correct — Sweden administers its own prosecution, police and prisons nationally. How
independent those agencies are from ministerial direction is an _attribute_, and the model already
carries a spread of them in prose: the Norwegian prosecution (only the King in Council may instruct),
the Dutch (under the minister's political responsibility), the Danish (under the Ministry of Justice),
and now the Swedish (constitutional prohibition on case-level ministerial direction). Encoding a
typed "executive-control" enum would invite exactly the plausible-but-unsourced flagging the model
exists to prevent, and would flatten four genuinely different constitutional arrangements into a few
buckets. The right home is prose backed by the constitutional article.

## What stayed in prose

The ministerstyre prohibition (Ch. 12 Art. 2); the two-branch court structure with two apex courts
(Ch. 11 Art. 1) and diffuse constitutional review (Ch. 11 Art. 14, no constitutional court); the
unified corrections model (Kriminalvården); and the JO-under-Riksdag / JK-under-Government oversight
split. Institution names in Swedish and English throughout.

## Restricted claim

One, in corrections: SPACE I 2024 (9,748 inmates / 9,295 capacity / density 104.9 on 31 January 2024) — above capacity, scoped as a single-day national aggregate supporting no comparison.
