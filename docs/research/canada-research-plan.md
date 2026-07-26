# Canada research plan

## Objective

Test the platform's most-deferred architecture question: does contracted service delivery
between orders of government — RCMP contract policing — finally earn a structured
inter-institutional relationship model? The answer (a single additive `FunctionScope` value,
`contracted`, and NO relationship graph) is the finding. Results:
[canada-model-findings.md](./canada-model-findings.md).

## Why Canada

Canada combines a federal criminal law with provincial administration (like Germany and Brazil)
but adds the feature every prior pilot avoided: a function that is constitutionally the
province's yet delivered by a federal institution under a fixed-term, cost-shared agreement. It
is also the first bijural country (common law + Quebec civil law for private law) and the first
where both language versions of the law are equally authoritative.

## The central architecture question (Part A)

Does RCMP contract policing require a typed `InstitutionRelationship` model (provider, client,
funding, governance, term)? The evidence was gathered precisely — RCMP Act ss.3/5/20, the RCMP's
own contract-policing page (eight provinces, three territories, ~150 municipalities; 70/30
cost-share; term to 2032), and the Ontario/Quebec exceptions. Both sides were argued (a research
critic pushed for a typed model). The decision: **no relationship graph.** The s.96 superior
courts are the structural analogue — a function the province owns, with federally appointed
judges — and the platform models them with scope + prose. But a single scope value could not
state the policing case honestly (the province owns no force; it procures a federal one), so one
additive `FunctionScope` value, `contracted`, closes the gap. Institution identity (RCMP, OPP,
Sûreté du Québec) stays in prose, per the "institution types, not named agencies" invariant.

## Jurisdiction samples (5)

- **Canada** (federal): all functions `shared`.
- **Ontario**: common-law province that runs its OWN police (Ontario Provincial Police) —
  `policingScope: own`, the contrast that makes `contracted` meaningful.
- **Quebec**: the bijural case (civil-law private law) with its own police (Sûreté du Québec).
- **British Columbia**: an RCMP contract province — `policingScope: contracted`.
- **Yukon**: a territory — `federal-plenary` (the DC value reused), `policingScope: contracted`,
  and `prosecutionScope: national` (the federal PPSC is the only prosecutor in the territories).

Not all provinces/territories; no public sub-national pages; no public Indigenous-jurisdiction
pages (First Nations policing is described only in prose).

## Sources and access

Tier-1 official sources in the authoritative (bilingual) form. laws-lois.justice.gc.ca serves
the full consolidated statutes to a browser user-agent; the Constitution Acts, Criminal Code,
RCMP Act, Charter, Supreme Court Act and DPP Act were read verbatim that way. The RCMP
contract-policing figures were read from the RCMP page, the corrections statistic from the
Statistics Canada primary CSV, and the Sûreté du Québec name from its official site. Full detail:
[canada-source-register.md](./canada-source-register.md).

## Publication

Published: hub, justice-system, law-enforcement, courts, prosecution, investigations, corrections,
sources. Deferred (no route/sitemap/nav): forensics, border-and-customs, **oversight** (Canadian
police oversight is deliberately non-uniform — the CRCC for the RCMP, separate provincial bodies
otherwise — and could not be shown without implying a national uniformity that does not exist),
history (the Indigenous-justice and residential-school legacy needs careful sourcing), timeline.
