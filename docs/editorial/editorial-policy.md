# Editorial policy

This policy governs everything published on JusticeCenterID. It is published to readers at
`/editorial-policy` in condensed form; this document is the working version.

---

## 1. Independence and status

JusticeCenterID is an independent educational publisher. It is not a government body, police
agency, court, prosecution service, regulator, international organisation, law firm, or
emergency service, and it holds no official status in any jurisdiction.

No institution, agency, ministry, political party, campaign group, or commercial sponsor has
review rights over our content, approval rights over publication, or the ability to require a
change. If that ever changes for a specific piece of work, the arrangement is disclosed on the
page itself, naming the party and the nature of the arrangement.

We do not publish sponsored content, advertorial, or paid placement.

---

## 2. What we publish

**In scope:** how justice, law-enforcement, court, prosecution, investigative, forensic,
corrections, and public-safety institutions are structured, what authority they hold, what
constrains that authority, how they are overseen, how they differ between jurisdictions, and
how they developed historically.

**Out of scope:**

- Advice on any reader's legal situation.
- Coverage of live or recent individual cases.
- Emergency instructions of any kind.
- Rankings or scoring of countries, institutions, or officers.
- Political endorsement, campaign material, or reform advocacy.
- Anything meeting the exclusions in [content-safety.md](./content-safety.md).

---

## 3. The content lifecycle

```
commission → research → draft → editorial review → fact check → safety review → publish → re-review
```

| Stage | `status` | `review` | Exit condition |
| --- | --- | --- | --- |
| Commission | `draft` | `unreviewed` | Scope, section, audience, and the questions the page must answer are written down. |
| Research | `research` | `unreviewed` | Sources gathered and recorded as `SourceRecord`s with the scope each supports. |
| Draft | `draft` | `unreviewed` | All required blocks present. |
| Editorial review | `review` | `editorial-review` | Structure, neutrality, accessibility, and internal linking checked. |
| Fact check | `review` | `fact-checked` | Every factual claim traced to a source at the claimed level of specificity. |
| Safety review | `review` | `fact-checked` | `safetyReview: 'cleared'`. Mandatory for investigations, forensics, law-enforcement, and public-safety content. |
| Publish | `published` | `fact-checked` | Passes the publication gate in the validation suite. |
| Re-review | `published` | `needs-update` if stale | See §8. |

A page cannot be published as `unreviewed`. This is enforced by validation, not by process
discipline.

---

## 4. Commissioning

A page is commissioned by writing down, before research begins:

1. The reader question it answers, in the reader's words.
2. The section it belongs to and the entity type it is.
3. What it will *not* cover, and where that content lives instead.
4. The jurisdictional scope of its claims.
5. Whether it is safety-sensitive.

Topics are not commissioned because of a current news event, a political controversy, or
search volume alone. Search demand may inform *how* a question is phrased; it does not decide
whether a topic is worth explaining.

---

## 5. Writing standard

### Structure

Every guide answers, in this order: what it is → why it exists → how it works → what people
get wrong → how it varies between jurisdictions → how it relates to rights and
accountability. Deviating from that order requires a reason; omitting a block is not possible.

### Language

- Plain international English at roughly B2 level. Short sentences, one idea each.
- Define every technical term on first use, even where it is also in the glossary.
- Prefer concrete verbs and named actors: "the prosecutor decides whether to charge", not
  "charging determinations are made".
- No idiom, sporting metaphor, or country-specific cultural reference.
- No rhetorical questions as headings, no exclamation marks, no urgency framing.
- Latin terms are glossed on first use or avoided.

### Scoping every claim

A claim must be scoped to the jurisdictions the source actually covers.

| Not acceptable | Acceptable |
| --- | --- |
| "Police must caution a suspect before questioning." | "In England and Wales, a suspect must be cautioned before questioning under PACE Code C." |
| "Prosecutors are independent of government." | "The degree of prosecutorial independence from the executive varies substantially; in some systems the prosecution service is formally part of the ministry of justice, in others it is constitutionally separate." |
| "Courts are adversarial." | "Common-law systems are typically adversarial and civil-law systems typically inquisitorial, though the distinction is a spectrum rather than a binary and most systems mix elements of both." |

Where we genuinely cannot scope a claim, we do not make it.

### Fact, analysis, and opinion

Three distinct registers, visibly distinguished:

- **Fact** — sourced, checkable. Default register. Rendered as plain body text.
- **Analysis** — our own synthesis or framing. Marked `claim: 'analysis'` and rendered in a
  labelled callout. Analysis may connect sourced facts; it may not introduce new ones.
- **Attributed opinion** — someone else's position, always named. "The Council of Europe's
  anti-torture committee has recommended…", never "it is widely accepted that…".

Evaluative adjectives applied to institutions ("ineffective", "robust", "politicised") are
analysis or attributed opinion, never fact.

---

## 6. Neutrality checklist

Applied at editorial review. Any "no" blocks publication.

1. Could this page have been written by that institution's press office? (If yes, it is
   promotional.)
2. Could this page have been written by that institution's most committed critic? (If yes, it
   is advocacy.)
3. Are contested positions attributed to identifiable holders?
4. Is any country used as the unmarked default, the implicit norm, or the recurring negative
   example?
5. Are evaluative adjectives sourced or marked as analysis?
6. Would a reader be able to infer the author's political position? (They should not.)
7. Does the page state a power without stating its limits, or a limit without stating the
   power it constrains?
8. If the page discusses a reform debate, are the strongest versions of the main positions
   presented — not the easiest to dismiss?

---

## 7. Institutional respect without institutional propaganda

The platform takes seriously that public-service work is difficult, carries real
responsibility and real risk, and is performed under legal and resource constraints that
outsiders rarely see. It takes equally seriously that these institutions hold coercive powers,
that those powers have been misused, and that oversight, complaint routes, and reform exist
because of documented failures.

**Both are content.** Neither is a disclaimer attached to the other.

Rules:

- An institution page that omits its oversight mechanism is incomplete.
- An institution page that reduces the institution to its worst documented conduct is also
  incomplete.
- We do not use "a few bad apples" framing, and we do not use "systemically corrupt" framing.
  Both substitute a conclusion for a description.
- We describe the demands of a role without heroic language, and its failures without
  contempt.
- Documented institutional failures are covered where they are structurally instructive —
  because they explain why a safeguard exists — and are sourced to inquiry reports, court
  records, or official findings, never to reconstruction.

---

## 8. Maintenance and re-review

- Every entity carries `updatedOn` and `reviewedOn`, both rendered to the reader.
- Structural content (how a system is organised) is re-reviewed at least every 24 months.
- Content that depends on current law or current institutional arrangements is re-reviewed at
  least every 12 months.
- A page known to be out of date is set to `review: 'needs-update'` and keeps a visible dated
  notice. It is not silently withdrawn: a stale page with an honest notice serves the reader
  better than a 404.
- Substantive changes to a published page are recorded in the corrections log where they
  change meaning. Typographical and formatting fixes are not.

---

## 9. Prohibited content

Absolute, without exception:

- Fabricated statistics, quotations, dates, salaries, rankings, counts, source titles, or
  URLs.
- A citation to a real institution for a document that does not exist, or a URL constructed by
  pattern rather than verified.
- Any hand-written site statistic. All counts are computed from the content registry.
- Case-by-case crime narration, victim or perpetrator detail, or graphic description.
- Content that could function as instruction for evading law enforcement, committing or
  concealing an offence, defeating a forensic or security control, conducting surveillance on
  a person, or interfering with an investigation, a witness, or a proceeding.
- Emergency instructions. The only permitted response is to direct readers to their local
  emergency services.
- Any statement implying we are an official body, or that we provide legal advice.
- Claims about a specific country's crime levels, corruption, institutional effectiveness,
  public trust, officer mortality, staffing, political control, or human-rights performance
  without a dated source of an appropriate tier. These nine claim types are individually
  named because they are the ones most often asserted from memory.

---

## 10. Legal-information boundary

Every substantive page and the site footer carry the standing statement:

> JusticeCenterID provides general educational information about justice systems and
> public-safety institutions. It does not provide legal advice. Laws and procedures vary by
> jurisdiction and change over time. For a specific legal matter, consult a qualified
> professional in the relevant jurisdiction or the responsible official authority.

We never tell a reader what to do in their situation, never assess a situation described to
us, and never characterise a described scenario as lawful or unlawful.

---

## 11. Attribution and bylines

Content is published under the platform's name, not under individual bylines. There is no
editorial board, advisory panel, or named expert reviewer, and none is implied — inventing one
would be exactly the false-authority signal this policy exists to prevent.

Responsibility sits with the platform. When named reviewers exist, they will be named, with
their actual affiliation, and `reviewedBy` will be recorded alongside `reviewedOn`.

---

## 12. Corrections

See [corrections-policy.md](./corrections-policy.md). In summary: errors are corrected
promptly, the correction is visible on the page where it materially changed meaning, and we
do not quietly edit a substantive error out of existence.
