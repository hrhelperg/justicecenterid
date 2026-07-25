# Japan research plan

## Objective

Test the model against a **unitary, civil-law state whose police are administered
sub-nationally** — the first country on the platform where one core justice function (policing)
sits at a level below the national one while everything else (courts, prosecution, corrections)
stays national. The pilot also carries a discipline the earlier ones did not: **translation
integrity**, because every Japanese institution is named in Japanese and every statute is
authoritative only in Japanese. Publishing Japan was the means; establishing what the model
needed (two small, evidence-driven additions) was the goal. Results:
[japan-model-findings.md](./japan-model-findings.md).

## Why Japan, after France, Germany, the US and Ireland

- **France** — unitary, civil-law, policing national.
- **Germany** — symmetric federal; federal law, Land administration (the administration ≠
  legislation split).
- **United States** — decentralised federal, multiple sovereignties, fragmented policing.
- **Ireland** — unitary common-law; scope integrity (State vs island).

Japan is the case none of them is: **unitary** (so not Germany or the US) but with **prefectural
policing** (so not France or Ireland, where policing is national). It is the cleanest available
test of the claim that administration and legislation are separate questions — here for policing
rather than, as in Germany, for courts. On top of that it forces the translation problem the
four English-and-French pilots never had to solve.

## The three questions the pilot had to answer before writing (Part A)

1. **Translation integrity (A1).** Does the model need a way to record that a cited English
   statute is a reference translation whose authoritative text is Japanese? **Yes** — two
   optional `SourceRecord` fields (`translationStatus`, `authoritativeLanguage`).
2. **Coordination vs command (A2).** Does the National Police Agency's relationship to the
   prefectural police need a new structured field? **No** — national `policingScope: 'shared'`
   plus prefectural `'own'`, with prose, represents it honestly. (Consistent with the US
   finding.)
3. **Prefectural samples (A3).** Add a `prefecture` jurisdiction level and **two** samples
   (Tokyo, the special case; Osaka, the ordinary model) — not all 47, and no public prefecture
   pages.

A fourth (A4) governed the restricted claim: publish one only if a properly scoped official
statistic could be verified. It could not, so it was **deferred with a documented blocker**.

## Scope decision

Twelve candidate modules; **seven published, five deferred**. The gate applied per module: can
every claim be traced to a source read or reader-accessibly retrieved, AND can it be stated
while (a) never implying a national operational police command, and (b) never treating an
English translation, a romanization or a Western analogy as the authoritative name?

Published: `justice-system`, `law-enforcement`, `courts`, `prosecution`, `investigations`,
`corrections`, `sources`.

Deferred (no route, no sitemap entry, no navigation, reason on the hub): `forensics`,
`border-and-customs`, `oversight`, `history`, `timeline`. Note that **oversight is deferred
here**, unlike Ireland where a recent reform made it a strength; Japan's oversight runs through
several channels (national and prefectural public safety commissions, the courts, prosecutorial
review) that were not researched to the required standard. The public safety commissions are
named on the law-enforcement page for context, which is as far as the sources support.

## Sources and access

Primary/official sources only, hierarchy: constitution and codes (Japanese Law Translation
database) → the institutions' own English descriptions (National Police Agency, Supreme Court,
Ministry of Justice). Some Japanese official sites block or truncate automated fetches; the
National Police Agency's "Police of Japan 2020" was extracted directly from the report PDF, and
other pages were read directly or retrieved by searching the exact official page and
cross-corroborated. Full detail and access path per source:
[japan-source-register.md](./japan-source-register.md).

## What this pilot deliberately did not do

No public prefecture pages; no more than two prefectural samples; no detention-capacity
statistic (deferred, blocker documented); no Minister-of-Justice power over prosecutors asserted
from the untranslated Public Prosecutor's Office Act; no operational policing, interrogation or
detention detail; no localization, search, analytics, CMS or auth; and nothing about Brazil.
