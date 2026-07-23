# Research methodology

How a JusticeCenterID page gets from a question to a publishable draft. The rules for
*ranking* sources are in [source-policy.md](./source-policy.md); this document covers the
*process*.

---

## 1. Frame the question

Research starts from the reader's question, written in the reader's words — "what does a
prosecutor actually decide?", not "prosecutorial discretion".

Before searching, write down:

- The question.
- The jurisdictional scope: a named jurisdiction, a legal-system family, or general.
- What would count as an answer, and what would falsify a draft answer.
- Which of the nine restricted claim types the page might touch (see
  [editorial-policy.md](./editorial-policy.md) §9). If any, plan for dated Tier 1/2/4 sources
  from the start rather than discovering the gap at fact check.

## 2. Establish the general shape before the specifics

Comparative work fails when one jurisdiction's arrangement becomes the mental template.
Counter it by establishing the *range* of arrangements first:

1. Identify the function being described (e.g. "deciding whether to bring a criminal charge").
2. Find at least two systems that perform that function through structurally different
   arrangements.
3. Only then describe how any individual system does it.

This ordering is why guides are written with the variation section drafted early rather than
appended at the end.

## 3. Work outward from primary sources

Search order, not preference order — this is the sequence of actions:

1. **The legal instrument.** Constitution, code, statute, or procedural rules that create the
   institution or the power. Read the provision, not a summary of it.
2. **The institution's own official material.** Structure, mandate, published procedure.
   Treat as institutional self-description and attribute it as such.
3. **Official oversight material.** Inspectorate reports, ombudsman findings, audit reports,
   parliamentary committee evidence. These are frequently the best structural descriptions
   available, because their job is to describe how something actually works.
4. **International-organisation comparative material** for cross-national framing.
5. **Academic comparative literature** for the analytical vocabulary and the known limits of
   comparison.
6. **Archives and museum collections** for historical claims.
7. **Journalism** last, and only for contemporary context, always attributed.

If a search begins at step 7 and works backwards, the framing of the reporting will survive
into the page. Start at step 1.

## 4. Read the source, then record it

A source is recorded only after it has been read at the relevant point. Recording includes
writing the `note` field: what this source establishes and what it does not. If the `note`
cannot be written specifically, the source has not been read carefully enough to cite.

Verify the URL at the moment of recording, and set `verifiedOn` to that date. Never construct
a URL from a pattern.

## 5. Handle disagreement between sources

When sources conflict:

- **Different legal instruments in different jurisdictions** — not a conflict. Scope both
  claims and present the variation.
- **A primary source and a secondary summary conflict** — the primary source governs, and the
  discrepancy is worth noting if the summary is widely repeated.
- **Two primary sources conflict (e.g. law as written vs. inspection findings on practice)** —
  present both, and say explicitly that formal rule and observed practice differ. That gap is
  often the most instructive thing on the page.
- **Genuine scholarly disagreement** — present the positions with attribution, mark the
  paragraph `claim: 'disputed'`, and do not adjudicate.

Never resolve a conflict by picking the more convenient source or by splitting the difference.

## 6. Record what could not be established

Failed research is recorded, not discarded. Anything that could not be established goes into
the entity's `uncertainty` array and renders to the reader as a visible note.

Typical entries: a structure that changed on a date we could not source; an institution whose
current mandate could not be confirmed from official material; a widely repeated figure whose
original source could not be located.

Publishing the gap is better than closing it with an assumption, and it tells a future editor
where to work.

## 7. Historical research

- Establish the period first, and use the period label consistently on the entity.
- Do not assume institutional continuity across a name change, a merger, or a regime change.
  Continuity is itself a claim requiring a source.
- Do not read modern categories backwards. A pre-modern body that policed markets is not
  "an early police force" unless a source makes that connection.
- Founding dates are frequently contested or retrospectively assigned. Where dating is
  disputed, record the dispute in `uncertainty` rather than picking a year.
- Prefer archives, official institutional histories, museum collections, and academic
  history over popular history and over the institution's own commemorative material.

## 8. Comparative research

- Never claim two institutions are equivalent without a source that makes the comparison. An
  equivalence claim is a claim.
- Compare *functions*, then note which institution performs them, rather than starting from
  institution names.
- State what is not comparable. Statistics collected under different definitions are not
  comparable, and saying so is more useful than a caveated table.
- Where a term exists in two systems with different meanings, record it in the glossary's
  `falseFriends` field.

## 9. Fact check

A separate pass from editorial review, performed against the source records rather than
against the author's memory of them:

1. Every sentence containing a checkable claim is matched to a source id.
2. Each source is reopened and confirmed to support the claim *at the level of specificity
   stated*.
3. Numbers, dates, names, and institutional titles are checked character by character.
4. Every restricted-claim-type statement is confirmed to have a dated Tier 1/2/4 source with
   a stated measurement definition.
5. Any claim failing any check is removed, rescoped, or moved to `uncertainty`.

The fact-check pass sets `review: 'fact-checked'` and `reviewedOn`.

## 10. Safety review

Mandatory for `investigations`, `forensics`, `law-enforcement`, and `public-safety` content;
performed after fact check. See [content-safety.md](./content-safety.md) for the test applied.
Passing sets `safetyReview: 'cleared'`.

## 11. What research is not

- Not summarising other explainer sites. If the only support for a claim is that other sites
  say it, it is unsourced.
- Not reasoning from what seems institutionally sensible. Systems are frequently organised in
  ways that are not the obvious design.
- Not filling a structural gap in a page because the section looks thin. A thin section with
  an honest scope note is correct; an invented one is not.
- Not generating plausible detail. Plausibility is the failure mode, not the standard.
