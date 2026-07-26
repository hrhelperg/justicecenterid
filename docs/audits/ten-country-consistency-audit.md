# Ten-country consistency audit

Adversarial audit of all ten country implementations (France, Germany, United States, Ireland,
Japan, Brazil, Canada, Australia, Spain, Switzerland) on `main` at `93e6aec`, conducted before
designing the country-scaling framework.

## Method

Thirty audit dimensions were swept (data shape, jurisdiction records, publication logic, source
register, restricted claims, scheduled changes, terminology, route/sitemap/metadata derivation,
breadcrumbs, JSON-LD, disclosures, facts-verified dates, demonyms, deferred rendering,
static-output, client/server boundaries, duplicated UI, duplicated tests, doc drift,
accessibility, template leakage, source-language handling, current-vs-historical, unused schema,
prose-vs-structure both ways). Evidence was reproduced against the **built output** and the
**registry census** (`node scripts/country-metrics.mjs`), not read from source alone.

Each material finding was put through three lenses:

- **A — Evidence reproduction:** does it reproduce in the current merged tree?
- **B — Scope/severity attack:** systemic issue, country-specific editorial issue, or normal variation?
- **C — Counter-evidence:** does another country prove the alleged inconsistency is intentional and necessary?

Severity: **P0** integrity/security failure · **P1** materially misleading public behaviour or
scaling blocker · **P2** meaningful consistency / maintenance / accessibility defect · **P3**
low-severity cleanup or documented limitation.

## Headline

The codebase is disciplined: registries are derived, publication is gated by `status`, and
per-country content is internally consistent (demonyms present for all ten, hub and module
`factsVerifiedOn` agree, no country module cites an out-of-country source, no published module
lacks review/facts/safety metadata). The audit therefore reports **four** verified findings, not
a manufactured list. Two are public-facing (F1, F2); two are structural (F3, F4).

---

## F1 — Hardcoded "French jurisdiction" in the jurisdiction-table caption

|                        |                                                                          |
| ---------------------- | ------------------------------------------------------------------------ |
| **Affected countries** | All except France (9 of 10)                                              |
| **Files**              | `src/components/pages/CountryPage.tsx` (`CountryHub`, table `<caption>`) |
| **Severity**           | **P2** (accessibility + inherited template leakage)                      |
| **Classification**     | Architectural (reusable component)                                       |

**Evidence.** The jurisdictions table renders a visually-hidden caption with the literal string
`Functional scope of each modelled French jurisdiction`, while the wrapping scroll region's
`aria-label` is correctly derived (`Functional scope of each modelled {dossier.name}
jurisdiction`). On the Germany hub a screen-reader user meets both: a region announced as
"…Germany jurisdiction" and, inside it, a table captioned "…French jurisdiction".

**Reproduction.** `out/countries/germany.html` (and every non-France hub) contains the literal
"French jurisdiction" in the `<caption class="sr-only">`.

**A — reproduces:** yes, in built HTML on 9 hubs.
**B — scope:** systemic reusable-component leak, exactly the class the component's own comment
warns about for the independence notice ("hardcoded 'a French public body' … every Germany page
shipped claiming independence from the wrong state"). The demonym was fixed at that point; the
caption was missed.
**C — counter-evidence:** none. The adjacent `aria-label` proves the correct pattern is to
derive from `dossier.name`; the caption is simply the one place it was not applied.

**Survived adversarial verification:** yes.
**Smallest correction:** derive the caption from `dossier.name`, identically to the `aria-label`.
**Migration risk:** none — presentation only, no route/canonical/data change.
**Regression test:** semantic snapshot asserting no non-subject country name (e.g. "French")
appears in any other country's rendered hub. **Status: fixed.**

---

## F2 — Published countries shown as "Planned", and a nonsensical coverage count

|                        |                                                                                                                                          |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Affected countries** | France, Germany, Brazil, Canada, Ireland, Japan (shown as Planned); United States, Australia, Spain, Switzerland (absent from the queue) |
| **Files**              | `src/app/countries/page.tsx`; planning registry `src/content/countries.ts`                                                               |
| **Severity**           | **P1** (materially misleading public behaviour)                                                                                          |
| **Classification**     | Architectural drift between two registries                                                                                               |

**Evidence.** `/countries` renders its "Coverage status" queue from the planning `COUNTRIES`
registry (16 entries) and badges **every** entry "Planned", with no filter for countries that
now have a published dossier. Six published countries (FR, DE, BR, CA, IE, JP) are still in that
registry, so they appear in the queue as "Planned" — directly below the notice that links to
their fully researched pages. The other four published countries (US, AU, ES, CH) were removed
from the planning registry by their pilots, so they do not appear in the queue at all. The
count sentence reads **"10 of 16 countries"**: numerator from the dossier registry, denominator
from a planning registry that both overlaps the numerator (6) and excludes part of it (4).

**Reproduction.** `out/countries.html`: all ten published country names appear in the queue
region; "France" carries a "Planned" badge; the header reads "10 of 16 countries".

**A — reproduces:** yes, in built HTML.
**B — scope:** systemic. It is the drift the planning registry invites — a country's pilot had
to remember to delete its own row, and six of ten did not. The public consequence contradicts
the platform's central honesty claim on the very page that states it.
**C — counter-evidence:** none. The US/AU/ES/CH removals show the intended end state (a
published country should not sit in the "Planned" queue); FR/DE/BR/CA/IE/JP simply never got there.

**Survived adversarial verification:** yes.
**Smallest correction:** derive the queue and the denominator from the registries rather than
trusting hand-maintenance — the queue lists only countries **without** a published dossier, and
the count is `published + remaining-planned`. This removes the "remember to delete your row"
failure mode entirely rather than fixing six rows by hand.
**Migration risk:** low — `/countries` content only; no route/canonical change (the page's URL
and the country routes are untouched).
**Regression test:** assert no published-dossier country renders a "Planned" badge, and the
count equals `published + distinct-planned`. **Status: fixed.**

---

## F3 — Two `COUNTRY_MODULES` registries have drifted; the public one is stale

|                        |                                                                                                                                                                                                   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Affected countries** | All (shared model description)                                                                                                                                                                    |
| **Files**              | `src/content/countries.ts` (planning `COUNTRY_MODULES`), `src/content/country-modules.ts` (canonical route registry), `src/content/types.ts` (`COUNTRY_MODULE_IDS`), `src/app/countries/page.tsx` |
| **Severity**           | **P2** (misleading public model description + unused schema)                                                                                                                                      |
| **Classification**     | Architectural drift + dead schema                                                                                                                                                                 |

**Evidence.** Two different arrays are both exported as `COUNTRY_MODULES`:

- `country-modules.ts` — the **canonical route registry** (12 modules) that pages, sitemap,
  breadcrumbs and the verifier derive from.
- `countries.ts` — a **planning list** (15 modules) used only by the `/countries` "How a country
  is modelled" section.

The planning list **omits `investigations` and `forensics`** — both real, published modules —
and **advertises five modules that can never route**: `overview`, `ranks-and-organisation`,
`training-and-academies`, `professional-conditions`, `museums-and-archives`. So the public
"How a country is modelled" section under-describes the model (no investigations/forensics) and
over-promises it (five phantom modules). Those same five (bar `overview`, which is intentionally
the hub, not a module) are **dead members of `COUNTRY_MODULE_IDS`**: used by no dossier and in
no route registry (`node scripts/country-metrics.mjs` + a used-vs-declared diff).

**A — reproduces:** yes — `out/countries.html` lists the phantom modules and omits
investigations/forensics from the model section.
**B — scope:** systemic (one shared section, wrong for every country) plus a schema-hygiene
issue (`overview` excepted, the four are hypothetical architecture described as current).
**C — counter-evidence:** none. The route registry, every dossier, and the enum agree that the
real module set is the 12 in `country-modules.ts`; the planning list is the outlier.

**Survived adversarial verification:** yes.
**Smallest correction:** derive the "How a country is modelled" section from the canonical
`COUNTRY_MODULES` (`country-modules.ts`); delete the duplicate planning `COUNTRY_MODULES` in
`countries.ts`; drop the four dead members from `COUNTRY_MODULE_IDS` (keep `overview`, which a
test pins as intentionally absent from the route registry). Update `content-model.md` to match.
**Migration risk:** low — no route uses the deleted members; `plannedModules` is `[]` everywhere.
**Regression test:** assert every `COUNTRY_MODULE_IDS` member is either the hub (`overview`) or
present in the route registry; assert the model section names investigations and forensics.
**Status: fixed.**

---

## F4 — Demonym lookup lives in the reusable component, not the dossier

|                        |                                                             |
| ---------------------- | ----------------------------------------------------------- |
| **Affected countries** | All (and every future country)                              |
| **Files**              | `src/components/pages/CountryPage.tsx` (`DEMONYMS`)         |
| **Severity**           | **P3** (scaling friction; safe fallback, no current defect) |
| **Classification**     | Structure that should be data (dimension 30)                |

**Evidence.** The independence-notice noun ("a French public body", "a Swiss government body")
is a per-country map keyed by ISO code **inside the shared component**. It is correct today —
all ten codes are present, none falls back — but a new country only gets a polished demonym by
editing this component; a scaffolded country would silently take the generic fallback ("a
government body of X"). The country name is already a prop, per the component's own doctrine;
the demonym is the one country-specific noun still living in the component rather than the data.

**A — reproduces:** it is not a current defect (fallback is grammatical and safe); it is a
locality/scaling issue.
**B — scope:** systemic maintenance friction, low severity.
**C — counter-evidence:** the fallback path is deliberate and safe, so this is not misbehaviour
— it is an opportunity to make each dossier self-contained.

**Survived adversarial verification:** yes, as a P3.
**Smallest correction:** add an optional `independentBodyNoun` to `CountryDossier`; the component
prefers the dossier field, then the map, then the grammatical fallback — so existing behaviour is
byte-identical and a new country can carry its own noun without touching the component.
**Migration risk:** none (optional field; component fallback preserved).
**Status: fixed** — `independentBodyNoun` added to `CountryDossier`; the component prefers it,
then the map, then the grammatical fallback. The ten pilots keep their map entries (so their
output is byte-identical), while the scaffold emits the field and the publication gate requires
it, so a new country is self-contained without editing the shared component.

---

## Non-findings (checked, deliberately not "fixed")

Recording these so they are not re-raised as drift:

- **`GB` and unset-jurisdiction sources.** `magna-carta-1297`, `tna-magna-carta`,
  `met-police-act-1829` (GB) and `loc-magna-carta` (unset) support **global concept guides and
  the timeline**, not any country page. No country module cites an out-of-country source
  (verified). Intentional, not drift.
- **Published-module count varies (6–8).** A research output, not a template — France deferred
  corrections; Ireland reached eight. Enforced per country, not flattened to a quota.
- **France has 15 jurisdiction records; Ireland has 1.** Tier records vs unit records is a
  per-country research decision the model explicitly supports.
- **Multilingual institution names (Swiss `Bundesgericht`/`Tribunal fédéral`/`Tribunale
federale`) are not `lang`-tagged.** They are Latin-script proper nouns; WCAG 3.1.2 exempts
  proper names, and the load-bearing non-Latin case (Japanese) **is** tagged via `ScriptText` in
  `BlockRenderer`. Documented limitation, not a defect. See the framework QA.
- **Per-country test files duplicate structure.** Legitimate — each pins its own load-bearing
  facts. The framework adds a **shared semantic regression** across all ten (Part L) rather than
  refactoring the bespoke tests away.

## Fix summary

| ID  | Severity | Public?             | Status |
| --- | -------- | ------------------- | ------ |
| F1  | P2       | screen-reader users | fixed  |
| F2  | P1       | yes                 | fixed  |
| F3  | P2       | yes                 | fixed  |
| F4  | P3       | no (scaling)        | fixed  |

No P0. No finding was rejected after surviving verification; the four non-findings above were
rejected **at** verification (counter-evidence or normal variation).
