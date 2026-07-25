# Brazil research plan

## Objective

Test the model against the **most institutionally complex country** on the platform: a
federation whose criminal law is unified and federal but whose institutions are decentralised,
with **six constitutional police forces**, an **autonomous Ministério Público**, and a
**five-branch judiciary**. Publishing Brazil was the means; establishing what the model needed
(nothing new — see below) was the goal. Results:
[brazil-model-findings.md](./brazil-model-findings.md).

## Why Brazil, after France, Germany, the US, Ireland and Japan

Brazil is the case that combines the earlier stress tests rather than adding a new axis:

- **Federal** like Germany and the US — but with a decisive twist: penal and procedural law are
  the **exclusive** competence of the Union (CF Art. 22, I), so the states administer justice
  without writing the criminal law. That is Germany's federal-law / sub-national-administration
  split, sharpened, and the reverse of the US, where states write their own criminal codes.
- **Portuguese-language** — the first non-English, non-French country, so the translation
  discipline the Japan pilot introduced applies (Portuguese authoritative; no official English).
- **Institutionally rich** in ways no prior pilot met: two police forces per state, and a
  prosecution service that is a branch-like autonomous institution rather than a prosecutor's
  office.

## The two hard questions decided before writing (Part A)

1. **Function-split state policing.** A single state runs both an investigative Polícia Civil
   (Art. 144 §4) and a preventive Polícia Militar (Art. 144 §5). Does a single `policingScope`
   per jurisdiction misrepresent this? **No.** `policingScope: 'own'` records that the state
   administers its own policing; the two-force composition is institutional and is described in
   prose, exactly as the US pilot described its thousands of agencies under one scope. No new
   field.
2. **The Ministério Público.** An autonomous institution independent of all three branches
   (Art. 127), both prosecutor and guardian of the legal order (Art. 129). Does it force a
   first-class institution entity? **No.** The jurisdiction model's `prosecutionScope` records
   who administers prosecution (federal MPU + state MPE → `shared`/`own`); the institution's
   autonomous character is described in the prosecution module prose, as the US pilot held that
   typed institution records are earned only by a cross-country comparison need, not by a single
   country pilot.

The generic research critic recommended heavier structures (a typed Force entity, a first-class
MP entity); both were considered and declined as inconsistent with the model's settled
philosophy (tier-of-administration in the schema; institutional composition in prose). Full
reasoning in the model findings.

## Scope decision

Twelve candidate modules; **seven published, five deferred**. The gate applied per module: can
every claim be traced to a source read in full, AND can it be stated without (a) implying a
federal-to-state chain of police command, or (b) flattening the Ministério Público into a
foreign template?

Published: `justice-system`, `law-enforcement`, `courts`, `prosecution`, `investigations`,
`corrections`, `sources`. Deferred (no route/sitemap/nav, reason on hub): `forensics`,
`border-and-customs`, `oversight`, `history` (the military-dictatorship legacy needs careful
sourcing), `timeline`.

## Jurisdiction samples

The federation (`br`), one ordinary state (`br-sp`, São Paulo) and the sui-generis Federal
District (`br-df`). Not all 26 states; no public state pages. The Federal District was chosen as
the second sample because it is genuinely distinctive — its police, courts and Ministério
Público are organised and maintained by the Union (Art. 21, XIII–XIV) while it accumulates state
and municipal competences (Art. 32 §1) — and it exercises the France `alsoExercisesLevels` field.

## Sources and access

Primary/official sources only, in the authoritative Portuguese. planalto.gov.br resets an
ordinary programmatic fetch but serves the full text to a browser user-agent; the Constitution,
the Código de Processo Penal and the Lei de Execução Penal were retrieved that way and read in
full, and the prison statistic was extracted from the primary SISDEPEN PDF. Every constitutional
and statutory fact on the pages was verified verbatim against the Planalto text. Full detail per
source: [brazil-source-register.md](./brazil-source-register.md).

## What this pilot deliberately did not do

No new schema field, level or enum value; no typed institution registry; no public state pages;
no more than two state samples; no `lang` wrapping (Portuguese is Latin script, handled as the
France and Germany pages handle French and German terms); no history or oversight module; and
nothing beyond Brazil.
