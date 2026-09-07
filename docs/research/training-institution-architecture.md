# Training institutions: entity architecture and future B2B model

**INTERNAL STRATEGY DOCUMENT. NOT PUBLISHED.** `docs/` is never routed or exported; asserted by
test, not assumed.

---

## 1. The architecture question, answered

The Wave 35 brief asked whether training institutions deserve first-class entities, and whether an
existing model could carry them. Both were investigated before any content was written.

### `/institutions` is a type taxonomy, not a directory

All 17 slugs are **categories**: `municipal-police`, `gendarmerie`, `constitutional-court`,
`coast-guard`. The `InstitutionType` interface is built for kinds of body — `distinguishingFeatures`,
`typicalMandate`, `presenceNote` ("where this type does and does not exist"), `counterExamples`.

It has **no field for an official website, an operator, an operating status, or a named
organisation**, and it should not. "Gendarmerie" has no website; "Politieacademie" is not a type.
Adding those fields would corrupt a clean taxonomy in order to store something it was not built for
— the "duplicate or wrong entity family" error the brief warns against.

**Conclusion: the existing model cannot carry named institutions, and extending it would be wrong.**

### A named institution is therefore genuinely a new entity — and it was not built

Building it properly requires all of:

1. a `TrainingInstitution` type (~12 fields: canonical name, local name, country, institution type,
   operator, official URL, status, training functions, degree-awarding status, recruitment
   relationship, `factsVerifiedOn`, source ids);
2. a registry and route generation;
3. a page component and a hub;
4. a status model (ACTIVE / HISTORICAL / RENAMED / MERGED / REPLACED / NOT ESTABLISHED);
5. conservative structured data;
6. and **15–30 institutions each content-confirmed on an official site**.

Items 1–5 are a day's work. Item 6 is the constraint, and it is the one that decided this.

### Why it was not built this wave

**Two institutions were verified to the standard a directory entry would need** — the
Politieacademie and Politihøgskolen, both on their own official pages, both with operator,
statutory position and function established.

Two entries is not a directory. A page that looks like a directory and contains two entries makes a
claim about coverage that is false, and the brief's own standard — "a smaller verified set is better
than a large stale directory" — argues against building the shelf before there is anything to put on
it. Route families are also close to permanent: `/academies/[slug]` published with two entries is a
commitment that a later wave has to either fill or retire.

So the evidence was published as comparative guides, which the existing machinery carries, and the
architecture is specified here rather than half-built.

### The threshold that would change this

Build the entity family when **12 or more institutions are content-confirmed on official sources**,
across at least 6 systems, each with: canonical name, operator, official URL, active status, and at
least one training function. Below that, extend the guides.

Access is the binding constraint, not effort. In Waves 33–35 the following official hosts returned
403 or 404 to automated requests: `npas.police.uk`, `hmicfrs.justiceinspectorates.gov.uk`,
`ukas.com`, `911.gov`, `rijksoverheid.nl` (one path), `ris.bka.gv.at`. A directory whose entries
cannot be re-verified on a schedule decays into exactly the stale directory the brief forbids, so
**freshness capability is part of the build decision, not a later concern.**

---

## 2. Status model, specified for when it is built

| Status                   | Meaning                                              | Publication rule                                        |
| ------------------------ | ---------------------------------------------------- | ------------------------------------------------------- |
| `active`                 | Currently operating, confirmed on an official source | Publishable as current                                  |
| `historical`             | Closed; no successor claimed                         | Publishable, never as current                           |
| `renamed`                | Same body, new name                                  | One entity; former name an alias, never a second entity |
| `merged`                 | Absorbed into another body                           | Points to successor                                     |
| `replaced`               | Function transferred to a different body             | Points to successor                                     |
| `status-not-established` | Existence known, current status unverified           | **Not publishable**                                     |

Two rules matter more than the list. A historical institution must never render as active. And an
old and a new name must never become two entities, because a directory that double-counts is worse
than one that is incomplete.

---

## 3. Future B2B model — evaluation, not a plan

| Model                          | User value | Maintenance | Source freshness                           | Legal / reputational risk                          | Commercial potential |
| ------------------------------ | ---------- | ----------- | ------------------------------------------ | -------------------------------------------------- | -------------------- |
| Verified institution profiles  | High       | High        | Critical — annual re-verification minimum  | Low if factual                                     | Medium               |
| Official recruitment links     | High       | Medium      | High — recruitment pages change constantly | Low                                                | Medium               |
| Programme discovery            | Medium     | Very high   | Very high                                  | Medium — course catalogues decay fast              | Low                  |
| Sponsored profile enhancement  | Low        | Medium      | —                                          | **High** — the reader cannot tell paid from earned | Medium               |
| Recruitment advertising        | Medium     | Low         | —                                          | Medium                                             | High                 |
| Education-provider advertising | Low        | Low         | —                                          | **High** — nearest thing to selling a ranking      | Medium               |
| Academy preparation products   | Medium     | Low         | —                                          | Medium                                             | Medium               |

**Best candidates:** verified institution profiles and official recruitment links. Both are things a
reader actually wants, both are factual, and neither requires an editorial judgement to be for sale.

**Worst candidate:** sponsored profile enhancement. It is the model most likely to be adopted
because it is easy, and it is the one that destroys the asset, because a reader who cannot tell a
paid profile from an earned one has to discount both.

### The standing principle

> **PAID VISIBILITY ≠ EDITORIAL RANKING.**

An institution may pay to be _seen_. No institution may pay to be _assessed favourably_, to be
ordered above another, or to have a factual claim altered. If those ever blur, the directory is
worth nothing precisely to the people it was built for.

---

## 4. What this wave established that a future build can rest on

- The Netherlands: a training institution can be **part of the police and a legally independent
  body at once**, reporting to a ministry, with teaching assessed by the national higher-education
  accreditor as well as a justice inspectorate.
- Norway: **continuing education outnumbers initial training by more than two to one** — so an
  institution profile that describes only recruit training would misdescribe the institution.

Both are the kind of fact a directory field has to be designed around. `trainingFunctions` cannot be
a single value, and `degreeAwarding` cannot be inferred from a name.
