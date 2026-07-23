# Positioning

## Canonical strings

These strings are authoritative. They are defined once in `src/lib/site.ts` and must not be
re-typed by hand in components or content.

| Field | Value |
| --- | --- |
| Brand name | `JusticeCenterID` |
| Domain | `https://justicecenterid.com` |
| Repository | `hrhelperg/justicecenterid` |
| Short descriptor | `Understanding Justice Worldwide.` |
| Positioning line | `An independent global knowledge center explaining justice systems, law enforcement, public safety, and their history.` |
| Mission statement | `JusticeCenterID explains how justice systems, law-enforcement institutions, courts, investigations, and public-safety organizations work, why they exist, and how they have evolved throughout history.` |

### Spelling rules

- The brand is always written `JusticeCenterID` — one word, capital `J`, capital `C`,
  trailing `ID` in capitals. Never `Justice Center ID`, `JusticeCentreID`, `JCID`, or
  `Justice Center`.
- American spelling `Center` is used in the brand. Body copy uses consistent international
  English elsewhere; where a spelling differs between variants, prefer the form used by the
  institution being described when quoting its name (e.g. the UK *Ministry of Defence*, the
  Irish *An Garda Síochána*).
- The domain is always `justicecenterid.com`, lowercase.

### The "ID" suffix

`ID` is treated as an unexpanded part of the brand. It may be allowed to suggest
*identification*, *understanding*, and *structured knowledge*, but the site never spells out
an artificial expansion such as "Justice Center Identification" or "Justice Center
International Directory". No page, meta description, or structured-data field expands it.

## Positioning statement

> For readers anywhere who need to understand how justice and public-safety institutions
> actually work, JusticeCenterID is an independent educational reference that explains those
> institutions comparatively, historically, and with visible sources — unlike national
> government portals, which describe only one system and only its current state, and unlike
> news coverage, which explains events rather than structures.

## Category

**Independent educational reference platform.** Adjacent categories we are deliberately not
in:

| Adjacent category | Why we are not in it |
| --- | --- |
| Government / institutional portal | We have no official status and must never appear to. |
| Legal-advice or lawyer-marketplace | We describe systems, never a reader's situation. |
| Legal-research database (case law, statutes) | We point to primary sources; we do not host or index them. |
| News / true crime | We explain structures, not incidents. |
| Advocacy / reform campaigning | We describe reform debates without taking a side. |
| Encyclopedia (general purpose) | We are narrow and comparative by design, with an explicit editorial and review process. |

## Differentiators

1. **Comparative framing as the default.** Structure is presented as one of several possible
   arrangements, with the variation stated, rather than as the way things are.
2. **Absence and uncertainty are modelled.** The content system can say "this country has no
   equivalent institution", "this structure was abolished in year X", or "we could not source
   this" — and those states render visibly to the reader.
3. **Visible editorial state.** Every substantive page carries its content status, review
   status, and last-review date. A page that has not been fact-checked says so.
4. **Source hierarchy enforced in the model.** Sources are typed (`legislation`,
   `government`, `court-record`, `international-organization`, `academic`, `archive`,
   `museum`, `book`, `journalism`, `institutional`), and the editorial policy states which
   claim types require which source tiers.
5. **Institutional respect without institutional PR.** We take professional responsibility,
   risk, and constraint seriously, and we take accountability, oversight, and documented
   failure equally seriously. Neither is a concession to the other.

## Claims we may make

- That we are independent.
- That we are educational.
- That we cite our sources and show our review state.
- That our coverage is international *in intent and architecture* — coverage breadth is
  stated as a fact only where it exists.

## Claims we may not make

Prohibited until independently verifiable, with the reason:

| Prohibited claim | Reason |
| --- | --- |
| "Covering 200 countries" / any coverage count not derived from published pages | Fabricated scale. Counts must be computed from the content registry, never written by hand. |
| "Trusted by millions", "leading global authority", "world's largest" | Unverifiable audience/authority claims. |
| "Revolutionising justice", "redefining law enforcement", "the ultimate platform" | Empty marketing language; also implies operational influence we do not have. |
| "Official", "certified", "accredited", "in partnership with \<agency>" | False affiliation, unless a specific documented partnership exists and is named. |
| "Expert legal guidance", "know your rights in your case" | Implies individualised legal advice. |
| Any superlative about a country's institutions ("most effective police force") | Requires measurement methodology we do not have. |

Any number displayed on the site — sections covered, guides published, sources cited — is
computed from the content registry at build time. Hand-written statistics are a content
validation failure.

## Voice

Plain professional English at roughly a B2/upper-intermediate reading level, aimed at an
international audience for whom English may be a second language.

- Short sentences. One idea per sentence.
- Define a term the first time it is used on a page, even if it is defined in the glossary.
- Prefer the concrete noun to the abstract one: "the prosecutor decides whether to charge",
  not "charging determinations are effectuated".
- Attribute contested framings: "critics of the practice argue…", "the ministry states…".
- No exclamation marks, no rhetorical questions used as section headings, no second-person
  imperative urgency ("You need to understand this").
- Avoid idiom, sporting metaphor, and country-specific cultural reference.

## Naming of institutions

Use the institution's own name, in its own language, with an English gloss on first use:
*An Garda Síochána* (the national police service of Ireland). Do not translate an
institution into the nearest foreign equivalent — do not call a *Gendarmerie* "the state
police" or a *Staatsanwaltschaft* "the district attorney's office". Equivalence claims are
themselves content and require sourcing.

See also: [Vision](./vision.md), [Principles](./principles.md),
[Content safety](../editorial/content-safety.md).
