# Spain research plan

## Objective

Test the model against ASYMMETRIC decentralisation — a unitary state where some sub-national
units run their own police and prisons and others do not, while the law and the judiciary stay
national. The finding (one additive level, the asymmetry carried by divergent per-community scope
values) is in [spain-model-findings.md](./spain-model-findings.md).

## Why Spain

Spain is neither the federal case (Canada, Australia, Brazil, US) nor the simple unitary case
(France, Ireland): it is a decentralised unitary state whose Constitution (art. 145.1) _forbids_
federation, yet devolves the administration of policing and prisons to some Autonomous
Communities and not others. That asymmetry is the test.

## The central question

Can existing fields represent an asymmetric system? Yes. The critic confirmed: the asymmetry is a
set of divergent per-function scope values across sibling records (Catalonia/Basque `own` police

- `own` prisons; Navarre `shared` police (own corps, shares with national forces), `national` prisons; Andalusia all `national`) — exactly
  what the tier-vs-unit rule was built to carry. Transferred administration is `own` (not
  `delegated`, not `contracted`), with the legislation/administration split (legislation is the
  State's, art. 149.1.6) stated in prose. `authorityBasis` is left unset for all communities.

## The one schema change

An `autonomous-community` JurisdictionLevel. A Spanish comunidad autónoma has a Statute of
Autonomy, an assembly and (for some) its own police and prisons — categorically distinct from a
French administrative `region`. Filing it under `region` would repeat the miscategorisation the
Japan pilot avoided with `prefecture`, so a level is added.

## Jurisdiction samples (5)

es (unitary national), es-catalonia and es-basque (own police + own prisons — the transfers by RD
3482/1983 and RD 474/2021), es-navarre (own police corps that shares with the national forces, central prisons — the middle of the gradient), and
es-andalusia (neither — the majority case). No public sub-national pages.

## The deferred statistic

No prison-population figure is published. Spain's official series are split by administration (the
most-cited central figure excludes Catalonia and the Basque Country) and could not be reconciled
to one verified, properly scoped number from a directly readable official source (the statistical
portals block automated fetching). Per the program rule against manufacturing a statistic, the
corrections page states the split and publishes no figure — which itself demonstrates the
asymmetry.

## Sources and access

The Constitution, the security-forces law (LO 2/1986) and the two prison-transfer decrees were
read verbatim from the Boletín Oficial del Estado (boe.es). Full detail:
[spain-source-register.md](./spain-source-register.md).

## Publication

Published: hub, justice-system, law-enforcement, courts, prosecution, investigations, corrections,
sources. Deferred: forensics, border-and-customs, oversight (would need the community bodies
researched to avoid implying national uniformity), history, timeline.
