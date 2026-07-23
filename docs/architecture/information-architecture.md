# Information architecture

## Organising idea

The site is organised around **stable topic entities**, not around publication events. A
blog's unit is "a post published on a date"; ours is "a topic that is maintained". Topics are
revised and re-reviewed in place. Nothing is ever "old" — it is either current, historical
(deliberately, with a period attached), or flagged `needs-update`.

Three tiers:

```
Tier 1  Knowledge sections    8 topical domains — where explanation lives
Tier 2  Reference hubs        8 cross-cutting indexes — where entities are enumerated
Tier 3  Platform pages        9 pages — who we are and how we work
```

Every content entity belongs to exactly one Tier 1 section (its home) and may appear in any
number of Tier 2 hubs (its indexes). This keeps a single canonical URL per entity while
allowing multiple discovery paths.

---

## Tier 1 — Knowledge sections

Each section is a crawlable hub with its own overview, its own guides, and explicit
statements of what it does and does not cover.

| Section | Route | Scope | Explicitly out of scope |
| --- | --- | --- | --- |
| Justice | `/justice` | Justice as a concept; rule of law; due process; presumption of innocence; legal-system families; rights; oversight as a system property. | Individual legal advice; political theory beyond what is needed to explain institutions. |
| Law Enforcement | `/law-enforcement` | Policing models and mandates; national/federal/regional/municipal structures; gendarmeries, constabularies, sheriffs, marshals; use-of-force as a legally constrained power; police accountability. | Tactics, equipment reviews, operational procedure, recruitment marketing. |
| Courts | `/courts` | Court functions, hierarchies, jurisdiction, adversarial vs inquisitorial procedure, judicial independence, appeals, lay participation. | Case outcomes, profiles of individual judges, litigation strategy. |
| Prosecution | `/prosecution` | Prosecutorial function, charging decisions, discretion, independence from the executive, relationship to investigation, disclosure duties. | Named prosecutions; commentary on live cases. |
| Investigations | `/investigations` | What an investigation is; the evidence chain; authorisation and warrants as constraints; investigative oversight; interview safeguards; miscarriage-of-justice mechanisms. | Investigative technique at operational specificity; surveillance capability detail; countermeasures. |
| Forensics | `/forensics` | What forensic disciplines establish, their evidentiary limits, error rates as a concept, quality assurance, accreditation, expert evidence and its scrutiny. | Laboratory protocols; method detail sufficient to perform or defeat an analysis. |
| Corrections | `/corrections` | Purposes of sentencing; custodial and non-custodial systems; probation and parole; rehabilitation and reintegration; prison oversight and inspection; rights in detention. | Facility-by-facility conditions reporting; individual case advocacy. |
| Public Safety | `/public-safety` | Border, customs, coast guard, civil protection, emergency coordination, public-safety administration, and the civilian roles that sit alongside policing. | Emergency instructions of any kind. Readers in an emergency are directed to local emergency services. |

### Section page anatomy

Every Tier 1 page uses the same structure so readers learn it once:

1. **What this section covers** — one paragraph, plain language.
2. **Start here** — the section's foundational guides, in reading order.
3. **Key ideas** — 4–6 short framings of what makes the domain hard to understand.
4. **How this varies internationally** — the comparative caveat, stated up front.
5. **Coverage status** — what exists now, what is planned, computed from the registry.
6. **Related sections** — lateral links.

---

## Tier 2 — Reference hubs

Hubs enumerate entities across sections. They are indexes, not essays.

| Hub | Route | What it enumerates | Foundation-phase state |
| --- | --- | --- | --- |
| Countries | `/countries` | Jurisdictions, their legal-system family, and their coverage state. | Model and coverage registry published; no country detail pages yet. |
| History | `/history` | Historical development of justice and policing institutions, by theme and period. | Framework page: periods defined, standards stated, coverage declared as planned. |
| Timeline | `/timeline` | Dated, sourced institutional milestones. | Small set of individually source-verified milestones; explicitly not a complete chronology. |
| Professions | `/professions` | Roles across justice and public safety, with responsibilities and constraints. | Registry published with responsibilities, decision authority, oversight, and training-route *structure*. No pay, staffing, or risk statistics. |
| Institutions | `/institutions` | Institution *types* (police, gendarmerie, sheriff, prosecution service, coast guard, …) and what distinguishes them. | Registry published, including the presence model that records where a type does not exist. |
| Glossary | `/glossary` | Defined terms, with `DefinedTerm` structured data. | Published. Definitions are general; jurisdictional divergence is noted per term. |
| Comparisons | `/comparisons` | Structured side-by-side comparisons of institutional arrangements. | Framework page: comparison standards and the equivalence-claim rule. No comparisons published — they require researched country data. |
| Research and Sources | `/sources` | The source hierarchy, the source registry, and how to check our work. | Published, listing every source actually cited on the site, computed from the registry. |

A hub whose entities do not yet exist states that plainly. It never renders an empty grid,
and it never fabricates a count.

---

## Tier 3 — Platform pages

| Page | Route | Job |
| --- | --- | --- |
| About | `/about` | What the platform is, who it is for, and — prominently — what it is not. |
| Mission | `/mission` | Why the platform exists and the standard it holds itself to. |
| Editorial Policy | `/editorial-policy` | How content is commissioned, written, reviewed, and labelled. |
| Corrections Policy | `/corrections-policy` | How to report an error and what we do about it. |
| Methodology | `/methodology` | How research is conducted and how sources are ranked. |
| Research and Sources | `/sources` | Also serves as a Tier 2 hub; see above. |
| Contact | `/contact` | Which channel handles what, and what to include. |
| Privacy | `/privacy` | What we collect (in this phase: nothing beyond hosting logs). |
| Terms | `/terms` | Terms of use, including the reuse position on our text. |
| Disclaimer | `/disclaimer` | Not legal advice; jurisdictional variation; non-affiliation; no emergency guidance. |

---

## Navigation

### Primary navigation (header)

Six items. The header is a wayfinding device, not a site map.

```
Justice · Law Enforcement · Courts · Investigations · Countries · About
```

Rationale: the four topical entries are the highest-intent entry points; `Countries` signals
the international frame; `About` carries the independence and non-affiliation message that
first-time visitors need. Everything else is reachable within one click of a hub.

### Footer navigation

Four columns, full coverage:

- **Knowledge** — all eight Tier 1 sections.
- **Reference** — all eight Tier 2 hubs.
- **Editorial** — About, Mission, Methodology, Editorial Policy, Corrections Policy, Sources.
- **Legal** — Privacy, Terms, Disclaimer, Contact.

The footer also carries the standing independence statement and the not-legal-advice line on
every page.

### Breadcrumbs

Every page below the home page renders a breadcrumb trail and matching `BreadcrumbList`
structured data. Trails are derived from the route registry, never hand-written, so they
cannot drift from the URL.

```
Home › Justice › What is due process?
Home › Glossary
```

### Internal linking rules

- Every guide links to its parent section, at least two sibling guides, and every glossary
  term it defines inline.
- Every hub links to each entity it enumerates; every entity links back to each hub that
  enumerates it.
- Cross-section links are encouraged where the relationship is real (an investigations guide
  linking to a forensics guide), and forbidden where it is decorative.
- Link text is descriptive. No "click here", no "read more" as the only link text.
- Every internal link in content is validated against the route registry at test time. A link
  to a route that does not exist fails the suite.

---

## Scaling model

The architecture must carry thousands of entities without becoming a content farm. Three
constraints do that work:

1. **Entities are created from research, never from a template sweep.** There is no
   generator that produces a page per country × per module. A country module exists because
   someone researched and sourced it.
2. **Coverage state is explicit and public.** `none` → `planned` → `in-research` → `partial` →
   `established`. Only `partial` and `established` produce indexable pages. Everything else
   is a row in a coverage table, not a URL.
3. **A published entity must clear the publication gate**: a definition, required sections,
   at least one source of an acceptable tier for its claim types, a review status, and — for
   safety-sensitive sections — a cleared safety review. This is enforced by the content
   validation suite, not by good intentions.

The practical consequence: the sitemap grows slower than the ambition, and that is the
intended behaviour.

---

## Foundation-phase inventory

What actually exists at the end of this phase:

- 8 Tier 1 section pages
- 8 Tier 2 hub pages
- 9 Tier 3 platform pages
- 12 concept guides, nested under their section
- 1 home page, 1 404 page
- `sitemap.xml`, `robots.txt`, `llms.txt`, `feed.xml`

Everything else — country modules, comparisons, institution detail pages, profession detail
pages, historical period essays — is modelled and documented but not published, because it
has not been researched. See [the foundation roadmap](../roadmap/foundation-roadmap.md).
