# Wave 13 — Corrections, Sentencing & Reintegration

Branch: `feat/knowledge-expansion-waves-12-15`. No push during this wave.
Researched and written 2026-08-26. Section `/corrections` held **zero** guides at the start
of this wave; it is the emptiest routed section on the platform.

## 1. What already exists, and what this wave may therefore not repeat

The corrections cluster is not empty of content — it is empty of _guides_. Before writing
anything, the existing surfaces were read in full:

| Surface                              | What it already establishes                                                                                                                                                                   |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/corrections` (section page)        | Five key ideas: purposes are in tension; most sentences are not custodial; detention removes liberty, not rights; closed institutions need external eyes; release is a process, not an event. |
| `/institutions/correctional-service` | The function, its distinguishing features, mandate, governance (ministry / agency / regional / contracted), and why independent inspection is a standing function.                            |
| `/professions/corrections-officer`   | Responsibilities, decision authority, constraints, oversight, training shape.                                                                                                                 |
| 32 country dossiers                  | Corrections modules present in all 32. Topic frequency: remand 24, alternatives 14, probation 9, parole 5, reintegration 3, oversight 3, rehabilitation 2, **purposes 0**.                    |

The dossier sweep is the load-bearing finding. Country modules are strong on **who
administers** corrections — national versus sub-national, and the statistical consequence
that follows — and they explicitly disclaim probation, parole, rehabilitation and oversight
where those were not verified. **No dossier, and no page anywhere on the platform, addresses
why custodial systems exist or what a legislature says punishment is for.** That is the gap
this wave fills, and it is a real one rather than a manufactured one.

Cannibalisation rule applied throughout: a Wave 13 guide may _cite_ a section key idea, but
must add statutory text, a comparative structure, or a measurement caveat that the existing
surface does not contain. Restating a key idea in longer form is not a page.

## 2. Evidence obtained

Six new source records were added (`src/content/sources.ts`, 257 → 263). All were read at the
authoritative publisher, in the authoritative language, and none is a translation.

| Source id                    | Instrument                               | Establishes                                                                                                                    |
| ---------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `uk-sentencing-act-2020-s57` | Sentencing Act 2020 s. 57 (E+W)          | Five purposes a court **must have regard to**; the s. 57(3) exclusions.                                                        |
| `ca-criminal-code-718`       | Criminal Code ss. 718, 718.1, 718.2 (CA) | One fundamental purpose, six objectives; proportionality as _fundamental principle_; parity, totality, restraint, s. 718.2(e). |
| `de-stgb-46-strafzumessung`  | StGB § 46 (DE)                           | Culpability is the **basis** for determining sentence; enumerated factors.                                                     |
| `de-stgb-56-strafaussetzung` | StGB § 56 (DE)                           | Suspension on probation at ≤ 1 year; ≤ 2 years on special circumstances.                                                       |
| `de-stgb-57-reststrafe`      | StGB § 57 (DE)                           | Release of the remainder at two-thirds, and at half for a first sentence ≤ 2 years — **with the convicted person's consent**.  |
| `de-stvollzg-2-vollzugsziel` | StVollzG § 2 (DE)                        | The `Vollzugsziel`; and that execution _also_ serves protection of the public.                                                 |

Already in the corpus and reused: `mandela-rules`, `coe-space-i-2024`, `jp-moj-corrections`,
`ca-statcan-corrections`, `br-lep-1984`, `br-senappen-institucional`, `br-sisdepen-2s2024`.

### 2.1 The structural finding

The four statutory statements are not four versions of one thing. They are different _kinds_
of provision, and where a legislature puts its purpose statement turns out to be informative:

- **England and Wales** and **Canada** state purposes in **sentencing** law. They answer the
  question _why is this sentence being imposed_.
- **Germany** and **Brazil** state their reintegration purpose in the law of **execution** —
  StVollzG § 2 and LEP Art. 1. German sentencing law does not open with a purposes list at
  all; StGB § 46(1) instead names culpability as the _basis_ of measurement. These answer the
  question _what is the custodial term for, once imposed_.

Two systems that both "aim at rehabilitation" can therefore mean structurally different
things by it, and a page that flattens the four into a single list of purposes would be
wrong in a way that is invisible to a reader. This finding drives the wave's central page.

### 2.2 A Wave 12 deferral now resolved

Wave 12 deferred proportionality for want of a clean statutory text. Criminal Code s. 718.1
supplies one for the sentencing domain: _"A sentence must be proportionate to the gravity of
the offence and the degree of responsibility of the offender."_ The deferral is resolved here
for sentencing only; the general public-law proportionality test remains deferred.

## 3. Deviation from the brief — the capacity page

The brief proposes `/corrections/prison-capacity-and-overcrowding`. **This route cannot be
built as named, and the reason is the repository's own safeguard rather than an editorial
preference.**

1. `RESTRICTED_PATTERNS` blocks `\bovercrowd\w*\b` under the `detention-capacity` category.
2. `tests/content/restricted-claims.test.ts` scans every published guide's `definition`,
   `whyItExists`, `howItWorks`, `variation` and `rightsAndAccountability` with the declared
   category list hard-coded to `[]`.
3. `Guide` has **no `restrictedClaims` field**. Only country dossier modules can declare one.

So a guide is structurally incapable of carrying a declared detention-capacity claim, and the
word cannot appear in its body. The brief also instructs: _"Preserve all restricted-claim
safeguards."_ The two instructions conflict on this slug, and the safeguard wins.

**Resolution.** The page is built as `/corrections/how-prison-capacity-is-measured` — about
how capacity and population figures are _constructed_, why they are not comparable, and what
each published figure does and does not mean. This is not a retreat from the topic; it is the
part of the topic the sources actually support. SPACE I warns in its own text that _"any
comparisons of the levels … shown by the countries according to different indicators are
always problematic"_, and the three national figures the platform holds are each built on a
different counting rule. Documented as a deviation; no architectural change was made to
create a declaration channel for guides, because that would be speculative architecture.

## 4. Route plan

Twelve routes. Every one carries statutory text, a measurement caveat, or a comparative
structure that no existing surface holds.

| Slug                                       | Load-bearing evidence                                                      |
| ------------------------------------------ | -------------------------------------------------------------------------- |
| `why-correctional-systems-exist`           | StVollzG § 2; LEP Art. 1 — descriptive purpose, not normative theory       |
| `what-sentencing-is-for`                   | Sentencing Act 2020 s. 57; CC ss. 718–718.2; StGB § 46; LEP Art. 1         |
| `conviction-sentence-and-execution`        | LEP Arts. 61, 71, 74 — the Juízo da Execução as a separate judicial office |
| `custodial-and-non-custodial-sentences`    | CC s. 718.2(d)–(e); StGB § 56                                              |
| `what-a-suspended-sentence-is`             | StGB § 56(1)–(2) — a false-friend page                                     |
| `probation-is-three-different-things`      | Cross-corpus: sentence / suspension / post-release supervision             |
| `release-before-the-end-of-a-sentence`     | StGB § 57(1)–(2), including the consent requirement                        |
| `why-a-sentence-length-is-not-time-served` | CC s. 718.2(c) totality; StGB § 57 — institutional, never predictive       |
| `what-remand-detention-is`                 | StatCan 2023/24: remand 19,334.5 of a 25,349.8 average daily count         |
| `who-runs-prisons`                         | Japan MoJ; Canada federal/provincial; Brazil LEP Art. 74; German Länder    |
| `how-prison-capacity-is-measured`          | SPACE I methodology warning; SISDEPEN; StatCan; the Japan deferral         |
| `what-reintegration-means`                 | LEP Art. 1 `harmônica integração social`; StVollzG § 2 `Vollzugsziel`      |

Target was 8–14. Twelve is what the evidence carries.

## 5. Safety posture

`corrections` is added to `SAFETY_SENSITIVE_SECTIONS`. The risk profile matches the sections
already on that list and matches Wave 11's reason for adding `defence`: material about how
custody, supervision and release operate is one step from material about defeating them.
Every Wave 13 guide therefore requires a completed `safetyReview` before it can publish.

Excluded by construction, and tested for: anything teaching evasion of supervision, bypassing
prison security, defeating recall or licence conditions, or minimising punishment; sentence
prediction in any form; personalised advice; facility-by-facility conditions reporting.

## 6. Normative neutrality

The wave describes what legislatures and international standards **say**. It does not tell a
reader which theory of punishment is correct, and it does not treat any national arrangement
as the default from which others deviate. The four statutory frameworks are presented as four
answers, not as one answer and three variants. Where the platform has no verified figure — as
with Japanese detention capacity — the absence is stated rather than approximated.
