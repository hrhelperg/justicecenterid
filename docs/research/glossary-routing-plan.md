# Glossary route expansion — plan and classification

**Status:** 5 of 32 terms routed, 2026-08-10.
Companion: `docs/seo/glossary-route-cannibalization.md`.

## 1. The finding that shaped this

The glossary was audited field by field before any route was created. Three facts decided
the outcome:

1. **Every definition is one or two sentences** (107–228 characters). The brief prohibits
   routing one-sentence definitions, and it is right to: a page built on one would need
   padding to feel like a page, and padding is how a glossary becomes an SEO essay farm.
2. **29 of 32 terms cite a single source.** The routed-page floor established in Wave 2 is
   two.
3. **15 terms restate a page that already exists.** Routing them would put two of this
   platform's own URLs against one query.

**A glossary entry and a glossary page are different objects.** An entry is a definition a
reader meets in passing; a page asserts the platform has something to say about the
concept. Most of these entries are correct as entries.

## 2. The routing mechanism

Wave 2 used `review: 'fact-checked'` to mark institution and profession records as routed.
That does not transfer: **all 32 glossary terms are already fact-checked**, so the flag
would carry no information and every term would route.

Routing is therefore **derived from the gate**: a term is routed if and only if
`validateGlossaryPublication` returns no problems. There is no field an author can set to
publish a page. The only way to route a term is to give it what the gate asks for:

- a reader question;
- institutional context — where the concept actually operates;
- a stated purpose — the problem it solves;
- a jurisdiction note;
- **two or more sources**;
- at least one worked country example drawn from a published dossier;
- two or more related concepts;
- `fact-checked` with `reviewedOn` and `factsVerifiedOn`;
- **no existing owner elsewhere on the platform**.

## 3. Classification of all 32 terms

### ROUTE (5)

| Term                    | Why it earns a page                                                                                                                                                                                                              |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `judicial-independence` | Distinct from "what do courts do". The interesting content is structural — tenure, appointment, why accountability for judges is deliberately narrow. Sourced to ICCPR plus the German and Japanese constitutional arrangements. |
| `appeal`                | A genuinely misunderstood mechanism: most appellate courts review rather than re-decide. Sourced to ICCPR plus the Canadian and Japanese court structures.                                                                       |
| `judicial-review`       | The least portable term in the glossary, and the brief names it. Diffuse versus concentrated review is a real structural fork, evidenced by Czechia and Germany.                                                                 |
| `chain-of-custody`      | Distinct from both `evidence` and forensic science; the "a gap can remove evidence entirely" point is not made anywhere else.                                                                                                    |
| `disclosure`            | The adversarial/inquisitorial contrast — a duty to hand over, versus a duty to investigate exculpatory material in the first place — has no other home.                                                                          |

### HUB-ONLY — intent owned elsewhere (15)

`justice`, `rule-of-law`, `due-process`, `presumption-of-innocence`, `court`, `prosecutor`,
`criminal-investigation`, `forensic-science`, `police`, `law-enforcement`, `accountability`,
`oversight`, `gendarmerie`, `inspectorate`, `public-safety`.

Each names a published route that already answers the query. `prosecutor` is owned twice
over — by `/prosecution/what-does-a-prosecutor-do` and `/professions/prosecutor`.
`public-safety` collides with a **section** route, the collision class first recorded in the
Wave 1 matrix.

### HUB-ONLY — insufficient substance (12)

`fair-trial`, `burden-of-proof`, `standard-of-proof`, `acquittal`, `jurisdiction`,
`legal-certainty`, `charging-decision`, `prosecutorial-discretion`, `evidence`, `warrant`,
`expert-evidence`, `accreditation`.

All are legitimate entries with a single source and a one-to-two-sentence definition. Each
could be routed later by acquiring what the gate asks for; none is routed on the strength
of the definition alone.

Two are worth naming as the nearest misses:

- **`standard-of-proof`** has the best unrouted content in the glossary — "beyond
  reasonable doubt" against the civil-law judge's inner conviction, with an explicit note
  that the formulations are not straightforwardly equivalent. It is not routed because no
  second source in the registry supports the comparative claim.
- **`warrant`** is jurisdiction-sensitive in exactly the way the brief warns about, and
  routing it without sourcing the variation would risk presenting one system's procedure as
  the general case.

### MERGE / ALIAS / REDIRECT (0)

No term was merged, aliased or redirected. No existing URL changed, so `netlify.toml`
gains no redirect rule.

## 4. Totals

| Verdict                           | Count  |
| --------------------------------- | ------ |
| ROUTE                             | 5      |
| HUB-ONLY (owned elsewhere)        | 15     |
| HUB-ONLY (insufficient substance) | 12     |
| MERGE / ALIAS / REDIRECT / DEFER  | 0      |
| **Total**                         | **32** |

## 5. What the hub now says

`/glossary` still shows every definition — that is what a glossary is for, and stripping it
to an index would have made it worse. What changed is that the five routed terms link to
their pages, and the hub states plainly how many have pages and why the rest do not:
because a longer guide already answers the question, or because the term is a definition
and does not have more to say.

Telling a reader that is more useful than padding 27 definitions into articles.
