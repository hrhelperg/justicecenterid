# Recruitment maintenance and freshness model

Wave 25.5. Wave 25 established `factsVerifiedOn` as the freshness anchor. This adds the thing Wave
25 did not have: an answer to **which recruitment page needs re-verification first.**

## 1. What the platform actually does, stated honestly

The platform **does not monitor recruitment requirements continuously.** No crawler watches these
pages, no alert fires when a force changes its criteria, and nothing here updates itself. A test
asserts that no page claims otherwise — `continuously monitored`, `always up to date`, `live data`
and `updated today` are all forbidden strings.

What it does is: record the date each page's facts were checked against official sources, record
what each source proves and whether it is campaign-bound, and re-check on a schedule set by
volatility. That is a maintenance discipline, not automation, and describing it as more would be the
same category of false claim as a fabricated verification date.

## 2. The re-verification priority order

Derived from three properties the corpus already stores, in this order:

1. **Is any cited source campaign-specific or cycle-anchored?** Those expire or roll over.
2. **How old is `factsVerifiedOn`?**
3. **How volatile are the facts the page actually publishes?**

Applied to the eight recruitment destinations as at 6 September 2026:

| Page            | Campaign/cycle exposure                  | Volatility published                           | Priority                                                 |
| --------------- | ---------------------------------------- | ---------------------------------------------- | -------------------------------------------------------- |
| Ireland         | **Campaign-specific** — the 2024 booklet | Deliberately low: no age published             | **HIGHEST** — the source is tied to a closed competition |
| Norway          | **Cycle-anchored** — annual deadlines    | Medium: dated deadlines published as recurring | **HIGH** — dates roll over each admission year           |
| England & Wales | None                                     | Medium: two-layer criteria                     | MEDIUM                                                   |
| Czechia         | None — statutory conditions              | Low: conditions sit in legislation             | LOW                                                      |
| Netherlands     | None                                     | Medium                                         | MEDIUM                                                   |
| New Zealand     | None                                     | Medium                                         | MEDIUM                                                   |
| Germany         | None                                     | Very low: no requirement published             | LOWEST                                                   |
| United States   | None                                     | None: no requirement published                 | LOWEST                                                   |

**The two lowest-priority pages are the two that publish no requirements.** That is not a
coincidence — a page that states what a system _is_ rather than what it _demands_ has almost nothing
to go stale.

## 3. Volatility classes, and what may be published in each

| Class      | Examples                                                                                                    | Publication rule                                                        |
| ---------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| **LOW**    | Recruiting institution; centralised or not; broad training architecture; statutory basis                    | May be stated plainly, tied to its system                               |
| **MEDIUM** | Education routes; minimum qualification; training duration; award; broad selection stages                   | Stated with source and verification date                                |
| **HIGH**   | Application windows; age cut-offs; fitness thresholds; campaign requirements; vacancy counts; place numbers | **Not published**, or published only with its scope inside the sentence |

The rule that follows, unchanged from Wave 25 and now tested: **no HIGH-volatility fact appears in a
title, summary, heading or meta description.** The parts search engines cache longest are the parts
that change least.

### The three temporal shapes, now distinguished

Wave 25 had two. Wave 25.5 found a third.

| Shape                 | Example                                                   | How it is written                                          |
| --------------------- | --------------------------------------------------------- | ---------------------------------------------------------- |
| **Durable**           | Czech conditions in § 13 odst. 1 zákona č. 361/2003 Sb.   | Stated plainly                                             |
| **Campaign-specific** | Ireland: "at midnight on Thursday, 8th of February 2024"  | Never restated as a rule; the anchor stays in the sentence |
| **Cycle-anchored**    | Norway: 1 March, 20 March, 1 August of the preceding year | Stated as recurring cycle deadlines, not as one-off terms  |

Cycle-anchored is genuinely different from both: the dates are not permanent, but they do not expire
either — they roll over annually. Collapsing it into "campaign-specific" would understate their
reliability; collapsing it into "durable" would overstate it.

## 4. Source health, observed rather than assumed

Every source was re-checked during this wave, and the results are the reason two countries moved.

| Host                                                               | Status at 2026-09-06                        | Action                        |
| ------------------------------------------------------------------ | ------------------------------------------- | ----------------------------- |
| `nabor.policie.gov.cz/pozadujeme-2`                                | **Live**, no archive notice, 2026 copyright | **Czechia published**         |
| `nabor.policie.gov.cz/clanek/pozadujeme.aspx`                      | 307 → `archiv.policie.gov.cz`               | Not used                      |
| `policie.gov.cz/clanek/...`                                        | 301 → `archiv.policie.gov.cz`               | Not used                      |
| `politihogskolen.no/studier/.../opptakskrav/`                      | **Live**                                    | **Norway published**          |
| `phs.no/.../opptakskrav/` (Wave 25 path)                           | 301 → `politihogskolen.no`, then 404        | Superseded                    |
| `joiningthepolice.co.uk/is-policing-right-for-me/common-questions` | Live, re-verified                           | **England & Wales published** |
| `newcops.govt.nz/can-i-be-a-cop/what-do-i-need`                    | Live (HTTPS 200)                            | Unchanged                     |

**The Czech case is the method in miniature.** Most of that estate still redirects into an archive
carrying "Obsah zde nemusí být aktuální". Only the recruitment portal's own current path carries the
requirements — and the difference between the two is the difference between publishing and
deferring. A guard now enforces it: no source URL anywhere in the corpus may point at a known
archive host, and no published module may cite one.

## 5. Suggested review cadence

| Class                                     | Cadence                                       | Why                                      |
| ----------------------------------------- | --------------------------------------------- | ---------------------------------------- |
| Campaign-specific sources                 | Before any restatement, and at least annually | The source describes a closed event      |
| Cycle-anchored sources                    | Annually, after the cycle turns               | Dates roll over predictably              |
| MEDIUM facts                              | 6–12 months                                   | Education routes shift with policy       |
| LOW facts                                 | Annually                                      | Institutions and statutes rarely move    |
| Source health (redirects, archives, 404s) | With every review                             | Two of eight hosts had moved in one wave |

This is an expectation recorded for maintainers. It is not rendered to readers, and no page implies
it has been met.

## 6. What was deliberately not built

- **No automated link checking or scheduled crawl.** Claiming freshness the platform does not
  maintain is worse than a stale page, because it converts a maintenance gap into a false statement.
- **No `reviewPriority` or `sourceHealth` field on the schema.** The priority order above is derived
  from data the corpus already stores — campaign scope in the source note, `verifiedOn`, and
  `factsVerifiedOn`. Adding fields that would need manual upkeep to stay true would create a second
  thing to go stale.
- **No reader-facing freshness badge beyond the verification date already shown.**
