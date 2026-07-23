# Principles

Fifteen operating principles. Each states the rule, what it forbids, and how it is enforced.
"Enforced by" names an automated check where one exists; otherwise it names the review step.

---

### 1. Factual accuracy

Every factual claim must be traceable to a source that supports it, at the level of
specificity claimed. A source that supports "many European countries" does not support "all
European countries".

Forbids: inference presented as fact; extrapolating one jurisdiction's rule to a region.

Enforced by: source-record validation (`tests/content/sources.test.ts`); editorial review.

---

### 2. Source transparency

Sources are visible to the reader on the page, not hidden in markup. Each carries a title,
publisher, type, URL where public, and — for anything time-sensitive — a date.

Forbids: "studies show", "according to experts", bare hyperlinks with no publisher, sources
listed in JSON-LD but not rendered.

Enforced by: `SourceList` is rendered by the guide template for every guide; validation fails
a published entity with an empty source list.

---

### 3. Political neutrality

We describe political and policy disputes; we do not join them. Contested positions are
attributed to those who hold them.

Forbids: partisan labels used as description; "reformers correctly argue"; treating one
country's arrangement as the norm against which others deviate; selecting examples so that
one political tradition is consistently the illustration of failure.

Enforced by: editorial review; the neutrality checklist in
[editorial-policy.md](../editorial/editorial-policy.md).

---

### 4. International perspective

The default frame is comparative. A claim is scoped to the jurisdictions it actually covers.

Forbids: "the police can…", "a suspect has the right to…" without a jurisdiction; using
US or UK procedure as the unmarked default.

Enforced by: every guide includes a required _jurisdictional variation_ section; validation
fails a guide missing it.

---

### 5. Accessible explanation

Write for an international B2 reader. Define before you elaborate.

Forbids: opening a page with history or etymology; unglossed Latin; undefined jargon;
sentences with three subordinate clauses.

Enforced by: guide template requires a plain-language definition as the first section;
editorial review.

---

### 6. Historical context, correctly scoped

Historical structures are labelled as historical with their period attached. Change over time
is stated rather than smoothed away.

Forbids: describing an abolished body in the present tense; implying institutional continuity
across a rupture without evidence; using a founding date as a claim of unbroken lineage.

Enforced by: `historicalPeriod` and `temporalScope` fields on entities; validation requires
`temporalScope: 'historical'` entities to carry a period.

---

### 7. Institutional literacy

Explain the machinery: who decides, on what authority, subject to what check, reviewable by
whom. Institutional literacy is the product.

Forbids: describing an institution only by its mission statement; omitting the oversight
body; omitting the appeal or complaint route where one is central to how the function works.

Enforced by: editorial review against the country-page and institution-page standards.

---

### 8. Fact, interpretation, and opinion are visibly separated

Established fact, our analysis, and other parties' opinions are distinguishable at a glance.

Forbids: analysis in the voice of fact; unattributed evaluative adjectives ("an ineffective
oversight body").

Enforced by: `Callout` variants (`analysis`, `uncertainty`, `disputed`) and inline
`claimType` on structured claims; editorial review.

---

### 9. Respect for public service without institutional propaganda

Take responsibility, difficulty, training, and risk seriously. Take accountability, error,
and reform equally seriously. Never present either as a concession to the other.

Forbids: heroic framing; "a few bad apples" framing; omitting documented failures from an
institution page; also — equally — reducing an institution to its worst documented conduct.

Enforced by: neutrality checklist; the institutional-respect rules in
[editorial-policy.md](../editorial/editorial-policy.md).

---

### 10. Oversight, rights, and due process are core content, not a disclaimer

Accountability mechanisms and procedural rights are explained as part of how the system
works, in the same register and at the same depth as institutional powers.

Forbids: relegating rights to a closing paragraph; describing a power without its
limitations.

Enforced by: guide template requires a _rights and accountability_ section.

---

### 11. No fabricated specifics

No invented statistics, quotations, salaries, dates, rankings, counts, source titles, or
URLs. If it is not sourced, it is not published — as a number or as anything else.

Forbids in particular: plausible-looking figures; a citation to a real institution for a
document that does not exist; a URL constructed by pattern rather than verified.

Enforced by: source-record validation; every URL in the source registry carries a
`verifiedOn` date and is checked before publication; site statistics are computed from the
content registry at build time and never hand-written.

---

### 12. No sensational crime content

No case-by-case crime narration, no victim or perpetrator detail, no graphic description, no
imagery of violence, injury, or human remains.

Forbids: a named crime used as a page hook; "shocking", "horrific", "brutal" as descriptive
register; real case detail beyond what is required to explain a legal principle, and then
only from court or official record.

Enforced by: content-safety rules; editorial review.

---

### 13. No partisan political framing

See principle 3. Stated separately because it also governs _selection_: which topics we
cover, which examples we choose, and which countries we use as illustration.

Forbids: an example set that consistently flatters or indicts one political tradition;
topic selection driven by a current political controversy.

Enforced by: editorial review at commissioning, not only at publication.

---

### 14. No glorification of violence

Force is explained as a legally constrained power with thresholds, authorisation, review,
and consequences — never as spectacle, capability, or aesthetic.

Forbids: tactical or weapons-focused imagery and language; equipment described admiringly;
"elite unit" framing; any presentation that reads as recruitment or as entertainment.

Enforced by: content-safety rules; design direction (no tactical or militaristic aesthetics).

---

### 15. No operational instruction

Nothing on the platform is written so that it could be followed to evade law enforcement,
commit or conceal an offence, defeat a forensic or security control, conduct surveillance on
a person, or interfere with an investigation, a witness, or a proceeding.

Forbids: procedural detail at a level of specificity that only matters to someone performing
or defeating the procedure; countermeasure discussion; specific technical thresholds of
detection.

The line we hold: explain **what a discipline establishes, what its limits are, and what
safeguards govern it**. Do not explain **how to perform it or how to defeat it**.

Enforced by: content-safety rules; mandatory safety review on all forensics, investigation,
border, and surveillance topics before publication.

---

## Precedence

Where principles conflict, the order is:

**15 and 12 (safety)** → **1 and 11 (accuracy)** → **3, 4, 8, 9, 13 (neutrality and framing)**
→ **5 (accessibility)** → everything else.

Accessibility never wins against accuracy: the resolution is layering, not simplification
into error.
