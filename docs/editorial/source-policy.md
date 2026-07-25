# Source policy

## The hierarchy

Sources are ranked. Higher tiers are preferred; lower tiers may not substitute for higher
tiers on the claim types reserved to them.

| Tier | `SourceType`                 | Examples                                                                                                                      | What it can support                                                                                                         |
| ---- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 1    | `legislation`                | Statutes, codes, constitutions, statutory instruments, official consolidated texts                                            | What the law says. The only acceptable support for a claim about legal rules.                                               |
| 2    | `government`                 | Ministry publications, official statistics agencies, published inspection and inquiry reports, official organisational charts | Institutional structure, official process, published official data.                                                         |
| 3    | `court-record`               | Judgments, official case reports, published court procedure rules                                                             | What a court decided, and court procedure.                                                                                  |
| 4    | `international-organization` | UN, Council of Europe, OSCE, INTERPOL, UNODC, EU institutions, regional courts                                                | Cross-national comparison, treaty obligations, international standards.                                                     |
| 5    | `academic`                   | Peer-reviewed journals, university presses, systematic reviews                                                                | Comparative analysis, historical interpretation, methodological limits.                                                     |
| 6    | `archive`, `museum`          | National archives, university and museum collections, official institutional histories                                        | Historical fact and provenance.                                                                                             |
| 7    | `book`                       | Recognised reference works and scholarly monographs                                                                           | Historical and comparative background.                                                                                      |
| 8    | `institutional`              | An institution's own website and published material                                                                           | What an institution says about itself — always attributed as such.                                                          |
| 9    | `journalism`                 | Established news organisations with editorial standards                                                                       | Contemporary context and reporting of events **only**. Never the sole support for a structural, legal, or historical claim. |
| —    | `other`                      | Anything else                                                                                                                 | Requires an explicit note justifying its use.                                                                               |

## Claim-to-tier requirements

| Claim type                                                                                                                                                                  | Minimum acceptable support                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| What the law requires or permits                                                                                                                                            | Tier 1. An institution's summary of the law is Tier 8 and does not suffice alone.                                      |
| How an institution is formally structured                                                                                                                                   | Tier 1 or 2.                                                                                                           |
| What a court decided                                                                                                                                                        | Tier 3.                                                                                                                |
| Official statistics of any kind                                                                                                                                             | Tier 2 or 4, with the collection date and the definition used.                                                         |
| Cross-national comparison                                                                                                                                                   | Tier 4 or 5, or Tier 1/2 sources for each jurisdiction compared.                                                       |
| Historical fact                                                                                                                                                             | Tier 1, 2, 3, 6, or 7.                                                                                                 |
| Institutional self-description                                                                                                                                              | Tier 8, attributed in the text as the institution's own account.                                                       |
| Contemporary events                                                                                                                                                         | Tier 9, with the outlet named in the text.                                                                             |
| The nine restricted claim types (crime levels, corruption, effectiveness, public trust, officer mortality, staffing, political control, human-rights performance, salaries) | Tier 1, 2, or 4 **with a collection date**, and the measurement definition stated. Absent that, the claim is not made. |

## Source records

Every source is a `SourceRecord` in `src/content/sources.ts`, referenced by id. This means a
source is described once, its type and publisher are explicit, and reuse is visible.

Required on every record: `id`, `type`, `title`, `publisher`.

Conditionally required:

- `url` — for any source with a stable public web location.
- `verifiedOn` — mandatory whenever `url` is present. It records the date the URL was
  confirmed to resolve to the cited document. **A URL that has not been verified is not
  published.**
- `publishedOn` — mandatory for any source supporting a time-sensitive claim.
- `accessedOn` — for sources whose content may change at the URL.
- `note` — the scope of what this source actually supports.
- `translationStatus` / `authoritativeLanguage` — for a source that is a **translation**. Added
  by the Japan pilot.

### Translation status (Japan pilot)

When a source is cited in one language but is legally authoritative in another, that must be
recorded, not left implicit. The Ministry of Justice's Japanese Law Translation database states
its English texts "are to be used solely as reference materials … with only the original
Japanese texts having legal effect", so the Constitution and the Code of Criminal Procedure are
cited with `translationStatus: 'official-reference'` and `authoritativeLanguage: 'ja'`. The
pages then rely on the English for what a provision does, never for its precise wording.

`translationStatus` is one of `not-a-translation` (the default — an institution's own English
description of itself, left unset), `official-reference` (an official but non-authoritative
translation), `official-authoritative` (a translation that itself has legal effect) or
`unofficial`. The regression suite asserts that every Japanese `legislation` source carries
`official-reference` + `ja`, so the distinction cannot silently rot. Do not present a reference
translation, a literal gloss, a romanization or a Western analogy as an authoritative name.

### The `note` field

`note` is the most important field for accuracy. It records what the source establishes, so a
later author cannot reuse it for something it does not cover.

```ts
{
  id: 'echr-convention',
  type: 'international-organization',
  title: 'European Convention on Human Rights',
  publisher: 'Council of Europe',
  note: 'Supports Article 6 fair-trial guarantees and Article 5 liberty and security '
      + 'for Council of Europe member states. Does not support claims about how any '
      + 'individual state implements them.',
}
```

## Verification procedure

Before a source is added:

1. Open the URL and confirm it resolves to the document named, not to a landing page, a
   search result, or a redirect to a homepage.
2. Confirm the publisher is the body actually responsible for the document.
3. Confirm the document supports the specific claim at the specific level of generality
   claimed. A source about one member state does not support a claim about a region.
4. Record `verifiedOn` as the date of that check.
5. Write `note` describing the scope.

Some official sources block automated access. If a URL cannot be confirmed to resolve, the
source is either cited without a URL (with enough bibliographic detail to locate it) or not
used. **Constructing a plausible URL from a pattern is prohibited** and has produced errors on
other projects; a URL is either verified or absent.

## Link rot

Web sources decay. Mitigations:

- Prefer stable, official permalinks over search-result and session URLs.
- Record enough bibliographic detail (title, publisher, date) that the source is findable
  without the URL.
- Where a source has an archival copy at a recognised web archive, record the archived URL in
  `note` alongside the live one.
- Re-verify sources during scheduled entity re-review.

## Prohibited sources

- Any source that cannot be independently checked.
- Content farms, SEO listicles, and AI-generated summaries.
- Anonymous or pseudonymous blogs, forums, and social media posts.
- Wikipedia and other user-editable encyclopedias **as a source**. They are legitimate as a
  route to primary material; cite what they cite, after verifying it.
- Press releases used as evidence of effectiveness rather than as evidence of what was
  announced.
- Advocacy-organisation material used as a factual source without attribution. It may be
  cited as an attributed position.
- Any source we have not actually read.

## Presentation to the reader

Sources are rendered on the page, not hidden in markup. Each entry shows title, publisher,
type label, date where recorded, and a link where public. The `/sources` hub lists every
source cited anywhere on the site, generated from the registry, grouped by type.

`SourceType` is shown as a human-readable label so readers can see at a glance whether a claim
rests on legislation or on journalism.

## Non-negotiable

Never fabricate a citation. This includes:

- Inventing a title, author, publisher, or date.
- Attributing a real document to the wrong body.
- Citing a document that exists but does not contain the claim.
- Constructing a URL that was never opened.

A claim without a source is either removed, or rewritten as an explicitly marked uncertainty.
There is no third option.
