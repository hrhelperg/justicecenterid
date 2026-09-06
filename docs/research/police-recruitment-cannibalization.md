# Police recruitment cannibalization audit

Every candidate tested against `/countries/*`, `/professions/*`, `/institutions/*`,
`/law-enforcement/*`, `/investigations/*`, `/forensics/*`, `/corrections/*`, `/courts/*`,
`/prosecution/*`, `/defence/*` and `/justice/*` before anything was written.

## 1. The collision that decided the architecture

`/countries/{country}/police-recruitment` against `/professions/police-officer/{country}`.

Both would answer "how do I join the police in X". One canonical owner is required, and it is the
country module: every fact is jurisdiction-specific, the freshness field is already mandatory there,
and the registry already generates routes, navigation, breadcrumbs and sitemap entries for it.
Nesting countries under a profession record would have made an eight-record reference family the
owner of up to thirty-two sub-pages, and split ownership with the dossier that already describes
that country's police.

A test asserts no `/careers` family and no top-level `/police-recruitment` route exists.

## 2. Against the existing country module — no overlap

Every dossier already carries a `law-enforcement` module: which bodies enforce the law, under what
legal status, over what territory. The new module answers **how a person joins them**. Different
question, different volatility, different sources. The two are linked, not merged.

## 3. Against Wave 24 — the boundary that took most care

Wave 24 built the global educational layer eleven weeks of corpus-time earlier, and four of its
pages sit close to this wave.

| Wave 24 page                             | Wave 25 page                               | How the boundary holds                                                                                                                                                                                                          |
| ---------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `what-a-police-academy-is`               | `/countries/*/police-recruitment`          | Wave 24 owns **how initial training is organised as an institution**. Wave 25 owns **how a person gets into a specific service**. The academy page is comparative and evergreen; the country pages are jurisdictional and dated |
| `do-police-officers-need-a-degree`       | `police-entry-requirements-across-systems` | Wave 24 owns the **degree question** specifically, with its own evidence. Wave 25 places education **alongside status, age, language and licence** across systems, and links back rather than restating                         |
| `how-policing-careers-develop`           | `who-recruits-police-officers`             | Wave 24 owns **progression after entry**. Wave 25 owns **entry itself**                                                                                                                                                         |
| `physical-readiness-in-policing-careers` | `how-police-selection-is-structured`       | Wave 24 owns **why physical readiness matters in the job**. Wave 25 owns **where a physical assessment sits in a selection process**. Neither publishes a standard                                                              |

Nothing in Wave 25 restates an academy model, a training curriculum, a skills list or the degree
argument. Where a Wave 25 page needs one, it links.

## 4. Search-intent duplication inside the wave

Five comparative guides, five distinct questions, asserted by test. The closest pair is
`police-entry-requirements-across-systems` and
`citizenship-nationality-and-residency-in-police-recruitment` — resolved by ownership: the first
compares **all** criteria across six systems at a summary level, the second owns **one** criterion in
depth because it is the one most often paraphrased wrongly.

The country modules cannot duplicate each other by construction: one route per country, asserted.

## 5. The country pages against each other

A real risk in template-driven country content is five pages saying the same thing with names
swapped. These do not, because the systems genuinely differ: Ireland is a single service with a
campaign-scoped age rule; the Netherlands admits to education programmes; New Zealand states no
upper age limit; Germany has no national recruitment at all; and the United States states no
requirement whatsoever. **Two of the five pages are largely about the absence of what the other
three describe**, which is why they are worth having and why a sixth thin one would not be.

## 6. Deliberate forgone opportunities

Each of these would rank, and each is refused:

- **`how-to-become-a-police-officer-in-<country>` as a title.** The highest-volume phrasing in this
  field. The country module owns the intent under an institutional name.
- **Salary pages.** Excluded under Part AS.
- **"Easiest country to join" comparisons.** Excluded under the trust model, and mutation-tested.
- **Live vacancy and deadline pages.** Excluded under Part AB; they need a maintained real-time
  product, not an evergreen corpus.

Recorded so a later wave knows each was a decision rather than an oversight.
