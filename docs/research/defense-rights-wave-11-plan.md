# Wave 11 — right to defence and legal representation: research plan and source feasibility

## The canonical hub, and why it is `/defence`

The brief named `/defense` as the preferred candidate and required the choice be made on route
conventions, terminology, international neutrality and extensibility rather than preference. On
that instruction the evidence points to `/defence`, and the deviation is recorded rather than made
silently.

| Test                     | Result                                                                                                                                                                                                                                                                                                                               |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Corpus spelling          | `defence` appears 39 times in prose. `defense` appears 14 times — **every one a French proper noun**: the `fr-code-defense-*` ids for the _Code de la défense_, and the `defenseurdesdroits.fr` URL. Zero uses as English prose                                                                                                      |
| Wider convention         | `organisation` 212 / `organization` 36; `recognised` 6 / `recognized` 0. The corpus is consistently British English                                                                                                                                                                                                                  |
| Route convention         | Every section is the bare function noun — `prosecution`, `courts`, `corrections`. The exact parallel is `defence`; `legal-defence` breaks the pattern and reads as though it might include civil matters                                                                                                                             |
| International neutrality | `defense` is the United States spelling. Ireland, Australia, Canada, New Zealand, South Africa, Kenya, Nigeria, India and Singapore — nine of the 32 dossiers — use `defence`. A site that has spent four waves refusing to let American terminology stand for global categories should not adopt an American spelling for a section |
| `SITE.htmlLang`          | `'en'`, neutral. The locale does not settle it; the prose does                                                                                                                                                                                                                                                                       |

`/defence` is created as a genuine new section through `SECTION_IDS`, `sections.ts`, the app
router, the route registry and the sitemap. `/defense` and `/legal-defence` are added to the
route matrix's must-404 list so neither can appear later by accident.

**`defence` is also added to `SAFETY_SENSITIVE_SECTIONS`**, alongside `law-enforcement`,
`investigations`, `forensics` and `public-safety`. The brief's boundary — no interrogation
evasion, no evidence concealment, no manufactured privilege, no obstruction guidance — is exactly
the risk profile that list exists for, so a safety review is mandatory before anything in the
section publishes.

## The starting position was the thinnest of any wave

Where Waves 8, 9 and 10 each found 30–48 relevant existing sources and a per-country module
already written, Wave 11 began with **six** defence-related sources and **no** defence content of
any kind. There is no defence section, no defence guide, and no defence profession — while
`/professions/prosecutor` and `/professions/judge` both exist.

That shaped the wave: the source plan was built before authoring, and the route list was cut to
what primary sources actually support rather than to the brief's suggested range.

## Source feasibility, established before authoring

### Reached, Tier-1

| Source                       | Establishes                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **StPO § 137** (DE)          | "Der Beschuldigte kann sich in jeder Lage des Verfahrens des Beistandes eines Verteidigers bedienen" — the accused may use defence counsel's assistance **at any stage**; chosen counsel capped at three                                                                                                                                                                                                                                       |
| **StPO § 140** (DE)          | _Notwendige Verteidigung_ — an enumerated list of situations in which defence is **mandatory**, triggered by the seriousness of the matter and the accused's situation, **not by means**                                                                                                                                                                                                                                                       |
| **StPO § 141** (DE)          | _Zeitpunkt der Bestellung eines Pflichtverteidigers_ — appointment without delay on request after instruction, decided at latest before questioning or a confrontation; and **independent of any request** in defined situations including detention                                                                                                                                                                                           |
| **StPO § 147** (DE)          | Defence counsel's right to inspect the files and view officially held evidence; the investigation-purpose limit; and the **limit on that limit** where the accused is in remand detention                                                                                                                                                                                                                                                      |
| **StPO § 148** (DE)          | Written and oral communication with defence counsel is permitted **even when the accused is not at liberty**; a narrow, court-supervised statutory exception exists                                                                                                                                                                                                                                                                            |
| **CF/88 Art. 134** (BR)      | The Defensoria Pública as a **permanent institution essential to the jurisdictional function of the State**, an expression and instrument of the democratic regime; legal guidance, promotion of human rights, and defence of individual **and collective** rights, judicial **and extrajudicial**, in all degrees, integrally and free, to those in need; career posts by public competition; **inamovibilidade**; private practice forbidden |
| **CF/88 Art. 5º LXXIV** (BR) | The State shall provide full and free legal assistance to **those who prove insufficiency of resources**                                                                                                                                                                                                                                                                                                                                       |
| **service-public.fr** (FR)   | _Aide juridictionnelle_: three conditions including resource ceilings; the State covers **all or part** of costs and of the **avocat's** fees; the residence condition does not apply to persons involved in criminal proceedings                                                                                                                                                                                                              |

### Reused

`iccpr` and `udhr`, for declared international principles only. Their notes already state that they
bind only states party and do not support claims about how any individual state applies them.

### Not reached — and the consequence

**The European Convention on Human Rights could not be read from an authoritative source.**
`echr.coe.int` returned HTTP 403 to automated requests on three separate paths, the Council of
Europe treaty list returned 403, and two PDF mirrors were scanned images rather than text. The
UN Treaty Series PDF of the ICCPR is likewise a scanned image.

A web-search summary supplied wording for Article 6(3)(c). **That is not a read of an official
document, and nothing is quoted from it.** No ECHR source was added, Article 6(3)(c) is not quoted
anywhere in this wave, and the equality-of-arms page was deferred as a direct consequence.

This follows the rule already recorded on `SourceRecord.verificationMethod`: blocking is an access
limitation, not evidence against a source — and it is equally not a licence to quote text that was
not read.

## What the source position permitted, and what it did not

**Published**, each Tier-1 backed: why the right matters; right to counsel; what defence counsel
does; how defence is funded; defence counsel and prosecutor; access to the case file;
lawyer–client confidentiality.

**Deferred for want of sources**: equality of arms (ECHR unreachable); the right to examine
witnesses; self-representation and waiver; defence rights on appeal; defence rights at trial as a
distinct page; effective assistance of counsel; bar associations; conflicts of interest.

> **Amended by Wave 21 (2026-09-05).** The equality-of-arms deferral is lifted, and only that one.
> Its stated ground was source access rather than ownership, and the source was obtained: the
> Convention text is now content-confirmed from the official Dutch treaty database as
> `echr-convention`, carrying Arts. 6(3)(b) and 6(3)(d) verbatim, and the Czech Charter was added
> as `cz-listina`, carrying Art. 37(3) — "All parties to such proceedings are equal", the only
> statement of the principle itself found in any constitutional text read across both waves.
> `/defence/equality-of-arms` is published on those two records plus ICCPR Art. 14(3)(e),
> ZA s. 35(3)(b) and (i), GG Art. 103(1), JP Art. 37 and CE Art. 24(1). The Wave 11 guard in
> `tests/content/wave11-defence.test.ts` keeps every other deferred slug forbidden, and a
> companion test now pins the route to the two records that lifted the deferral, so the route
> cannot survive their removal. Wave 21 obtained no evidence for the other deferrals and did not
> revisit them.

## Method

Structure first, label second. For each system: who may have counsel and from when; what triggers
an entitlement; who pays; who employs the lawyer; and what the lawyer may see and say. Only then
was any comparative label used — which matters more here than in any previous wave, because the
vocabulary of publicly funded defence is where translation fails worst.

## The forcing question, answered in advance of writing

The brief asked whether Brazil's Defensoria Pública belongs to the same family as a United States
public defender office, and warned against answering yes automatically.

**It does not**, and the difference is constitutional rather than administrative. Article 134
places the Defensoria on the same footing as the Ministério Público — a permanent institution
essential to the jurisdictional function of the State — gives its members _inamovibilidade_,
forbids them private practice, and gives the institution a remit covering human-rights promotion
and collective rights, judicially and extrajudicially. A public defender office provides criminal
defence to indigent defendants. Those are different kinds of institution that happen to share a
function.

That finding is why this wave publishes **no defence institution family**: the recurrence the
taxonomy requires is absent, and the absence is the result.
