# Wave 7 — police oversight institutions, phase 2: research plan

## What Wave 6 left open

Wave 6 ran the taxonomy-forcing test on French evidence alone and deferred every candidate
institution family. It closed with an explicit brief for the next wave:

> To reopen `police-inspectorate` as a global type, a wave needs current, primary-sourced
> inspection arrangements from **at least two more countries**, and must resolve whether the
> internal and external forms are one type or two. On the French evidence they are two, and the
> answer determines whether one page or two is correct.

Wave 7 answers that question and the wider one behind it: which oversight institution families
recur across systems strongly enough to carry a global page.

## Method

The wave was run function-first, not name-first. For each jurisdiction the question asked was
never "does this country have an inspectorate / internal affairs / conduct authority" but:

1. Where does the body sit — inside or outside the organisation it examines?
2. What can it actually do — receive, investigate, inspect, audit, recommend, refer, prosecute,
   discipline?
3. What is it forbidden or unable to do?
4. What is the legal instrument that establishes each of those answers?

Only then was the body compared to a candidate family. This ordering is what stops an English
label deciding the taxonomy, and it is the reason two candidates that looked strong at the start
of the wave did not survive it.

## Source standard

Tier-1 means the instrument itself: the statute, the consolidated legal text, or the body's own
statement of its statutory functions with section numbers. Where a legal-information system
refused automated requests, that was recorded as an access limitation and never as evidence
against the source — the rule already carried on `SourceRecord.verificationMethod`. Nothing in
this wave is cited from a source that was not read.

## Jurisdictions

Ten were mandated. All ten were researched. France was carried forward from Wave 6 rather than
re-researched, because Wave 6 established its four bodies from Légifrance and re-deriving them
would be recreating prior work.

| Jurisdiction | Bodies researched                                                                                                 | Tier-1 instrument reached                                                                                           |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| France       | IGPN, IGGN, Défenseur des droits, CGLPL                                                                           | Yes (Wave 6 — décret, Code de la défense, organic law)                                                              |
| Ireland      | Fiosrú, Policing and Community Safety Authority; historical GSOC, Policing Authority, Garda Síochána Inspectorate | Yes — Policing, Security and Community Safety Act 2024                                                              |
| South Africa | IPID                                                                                                              | Yes — IPID Act 1 of 2011, Government Gazette No. 34298                                                              |
| Kenya        | IPOA, Internal Affairs Unit                                                                                       | Yes — IPOA Act Cap. 86; National Police Service Act Cap. 84 s. 87                                                   |
| Czechia      | GIBS                                                                                                              | Yes — Act No. 341/2011 Coll., consolidated                                                                          |
| Norway       | Spesialenheten for politisaker                                                                                    | Yes — påtaleinstruksen ch. 34                                                                                       |
| New Zealand  | IPCA                                                                                                              | Partial — the Authority's own statement of its functions by section; legislation.govt.nz refused automated requests |
| Denmark      | Den Uafhængige Politiklagemyndighed                                                                               | Partial — the Authority's own English statement of jurisdiction and legal basis                                     |
| Sweden       | Avdelningen för särskilda utredningar (SU), Särskilda åklagarkammaren                                             | Partial — Polismyndigheten's own statement, in Swedish                                                              |
| Austria      | Volksanwaltschaft                                                                                                 | Yes (already in corpus — B-VG Art. 148a via RIS)                                                                    |

## What the wave was watching for

Four failure modes were named in advance, and each was hit at least once:

- **English-name bias.** New Zealand's body is a "Conduct Authority", Denmark's a "Complaints
  Authority", Ireland's an "Ombudsman". Three names, one function. A global page under any one
  of those names would be that country's label promoted to a global type.
- **False equivalence by shared function.** Norway's and Czechia's bodies both investigate
  crimes by officers, and neither handles conduct complaints. Grouping them with complaint-led
  bodies because both are "independent oversight" would erase the distinction that matters most.
- **Position read as independence.** Sweden's and Kenya's internal units are both described in
  law as insulated from police command. Austria's and France's external bodies cannot sanction.
  Neither direction of the assumption survives.
- **One-country structure presented globally.** "Internal Affairs" is a real statutory
  institution in exactly one researched jurisdiction. That is a fact about Kenya, not a global
  family.

## Outputs

- `docs/research/police-oversight-global-function-matrix.md` — the cross-country function matrix
- `docs/research/police-oversight-country-evidence.md` — per-country evidence with citations
- `docs/seo/knowledge-expansion-wave-7-cannibalization.md` — route decisions
- `docs/audits/knowledge-expansion-wave-7-qa.md` — QA, mutation proofs, adversarial findings
