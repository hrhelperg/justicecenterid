# Greece — model findings

What Greece added to the comparative picture, and what it reused.

## 1. Three co-equal supreme courts and NO constitutional court — a shape the model already tolerates

Greece has three courts of last resort in distinct branches — Areios Pagos (civil/criminal), the
Council of State (administrative), and the Court of Audit (financial) — and, unlike Italy, Austria,
Czechia and Poland, **no dedicated constitutional court at all**. Constitutional review is diffuse
(Art. 93§4: every court must decline to apply an unconstitutional statute), with the Special Highest
Court (Art. 100) convening only to resolve conflicts between the three supreme courts. This
combination — multiple co-equal apexes + diffuse review + a conflict-court, no Kelsenian court — is
new to Batch B but needs no new schema: it is expressed entirely in prose. It also completes the
constitutional-review spectrum across the site:

| review model                                | examples                           |
| ------------------------------------------- | ---------------------------------- |
| dedicated constitutional court only         | (concentrated)                     |
| dedicated court **and** diffuse review      | Portugal, Czechia                  |
| diffuse review, **no** constitutional court | **Greece** (with a conflict-court) |

## 2. Prosecution inside the judiciary — the Italy end, confirming the spectrum

Greece's prosecution is an independent part of the judiciary, staffed by magistrates, with the
Ministry of Justice responsible only for general service conditions — the same family as Italy, and
the opposite end from Poland (where the prosecutor-general is the justice minister). Batch B now
spans the whole range in a single batch, and Greece anchors the independent-judicial-branch end.
Reuse of `prosecutionScope: 'own'`; carried in prose.

## 3. Police and prisons under the SAME non-Justice ministry — a new ministerial split

A quietly distinctive fact: in Greece the police **and** the prisons both sit under the **Ministry
of Citizen Protection**, while the courts and prosecution fall under the Ministry of Justice for
service conditions. That is a different executive split from the others in the batch (where prisons
typically sit with Justice). No schema change — function scopes are still all `own` — but the prose
records the co-location of policing and corrections under one ministry, because it is true and
comparatively interesting.

## 4. Honest sourcing under bot walls — the harder lesson

Greece is the batch's clearest case of authoring honestly when primary sources are unreachable:

- The Hellenic Parliament's official English Constitution was HTTP 403, so an **unofficial**
  translation (Constitute) was used, cross-checked against e-Justice, and labelled unofficial.
- The Greek police and Citizen-Protection ministry sites were HTTP 403, so the **U.S. State
  Department** report supplied the ministerial placement — a foreign-government secondary source,
  named as such on the page, with the facts stated no more firmly than it supports.
- The CPC article numbers and the corrections-transfer instrument were **not** fetched, so neither
  is asserted.

The rule the batch has followed throughout — report exactly what the source supports and name the
source's limits — is what let Greece ship without either overstating or dropping load-bearing facts.

## Net schema change

**None.** Greece reused unitary/national values, the multi-apex prose pattern, and the
prosecution-inside-the-judiciary and diffuse-review handling; the distinctiveness and the sourcing
caveats live in prose and in the tests.
