# Japan pilot — model findings

Japan forced **two small, evidence-driven schema additions** and no more. Both are the smallest
change that lets the model state a fact honestly rather than by convention. A third candidate (a
structured coordination/command relationship) was considered and **declined**, consistent with
the United States finding. This document records each decision and — because the brief warns
against a pilot that changes too little out of shallowness — why the additions are exactly two,
not zero and not a redesign.

---

## JP1 — Translation integrity needs a structured, testable marker (A1)

**Fact.** Every Japanese statute cited on the pages is legally authoritative only in Japanese.
The Ministry of Justice's Japanese Law Translation database states its English texts "are to be
used solely as reference materials … with only the original Japanese texts having legal effect".

**Change.** Two optional fields on `SourceRecord`:

- `translationStatus`: `not-a-translation` | `official-reference` | `official-authoritative` |
  `unofficial`
- `authoritativeLanguage`: the BCP-47 language whose text has legal effect (here, `ja`)

**Why a field and not prose.** Translation authority is the _whole point_ of the Japan phase.
Leaving it in prose would mean a later editor could cite an English translation as if it were
authoritative and nothing would catch it. The field makes the distinction machine-checkable:
`tests/content/countries-japan.test.ts` asserts that every Japanese `legislation` source carries
`official-reference` + `ja`, so the invariant cannot silently rot. It is the minimum change —
two optional fields, defaulting to "not a translation", leaving every existing source untouched.

**Why not more.** No enum for "how the institution's name was translated", no per-string language
tagging in the content model. Inline Japanese script is handled at the _render_ layer
(`splitJapaneseRuns` → `lang="ja"`), an accessibility concern, not a content-model one.

---

## JP2 — Coordination is not command, and scope already says so (A2)

**Fact.** The National Public Safety Commission and National Police Agency coordinate, set
standards and supervise the prefectural police _on matters of national concern_; they do not run
operational policing, which the 47 prefectures administer under their own prefectural public
safety commissions.

**Change.** **None.** National `policingScope: 'shared'` + prefectural `policingScope: 'own'`,
plus prose, represents the relationship honestly.

**Why no change.** This is the United States finding again. There, a tempting "supervises" or
"commands" relationship field was declined because the scope fields plus prose already carried
it. Japan is the same shape: encoding a `commands` edge would be worse than useless — it would
assert exactly the operational chain of command that does not exist. A structured relationship
type stays deferred to a country where the scope fields genuinely cannot represent the
relationship (a candidate for Canada, whose contract policing may force it).

**Guard.** The Japan test asserts `policingScope` is `shared` nationally and `own` prefecturally,
and that no `relationshipType`-style field was introduced.

---

## JP3 — A `prefecture` jurisdiction level (A3)

**Fact.** Japanese prefectures (todofuken) are the first-level sub-national division and the
level at which police are administered.

**Change.** Added `'prefecture'` to `JURISDICTION_LEVELS`, and three records: `jp` (country,
policing `shared`), `jp-tokyo` and `jp-osaka` (prefecture level).

**Why a new level and not `province`.** `province` was the nearest existing fit, but Japan's
prefectures are institutionally central to _this_ pilot — prefectural police, prefectural public
safety commissions — so labelling them `province` would obscure precisely what the pilot tests.
Adding a level is cheap and the honest choice.

**Why two samples and this shape.** Tokyo is the special case (its police is the Metropolitan
Police Department, Keishicho); Osaka is the ordinary model (Osaka Prefectural Police under a
Prefectural Public Safety Commission). The pair shows the prefectural pattern is the general
rule and Tokyo's specially named force the exception — not all 47, and no public prefecture
pages. Osaka is administratively a _fu_, not a _ken_, which the record states; for _policing_
purposes it is the standard model, which is the axis the sample tests.

**The framework/administration split.** Each prefecture record carries `legislativeCompetence:
{ policing: 'framework' }`: police are _administered_ prefecturally (`policingScope: 'own'`) but
_legislated_ nationally (the Police Act). This is the Germany finding applied to policing rather
than courts — the same "who administers ≠ who legislates" distinction, reused, not reinvented.

**Authority basis.** Prefecture records use `authorityBasis: 'delegated'`, the France default for
a unitary state's sub-national tier: local self-government is constitutionally guaranteed but its
organisation is "fixed by law", so authority is derived within the national order — not the
`reserved-powers` of a US state and not the `inherent-sovereign` of a tribal nation.

---

## JP4 — The restricted claim was deferred, not forced (A4)

**Fact.** Japan runs a single national prison system under the Ministry of Justice's Correction
Bureau, so a scoped detention figure _would_ have been publishable in principle.

**Decision.** **Deferred with a documented blocker.** Japan's official prison figures are
released only in linked spreadsheet tables and the annual White Paper on Crime (a large PDF that
exceeded the fetch limit); no properly scoped, verifiable statistic could be extracted without
approximating or lifting from a secondary source. The corrections page states this plainly and
publishes no number. A4 explicitly permits deferral over fabrication, and this is the honest
call — not a gap hidden, but a gap stated.

---

## Was two changes too few?

The brief asks a pilot that changes little to check that the restraint is maturity, not
shallowness. The evidence it is maturity:

- Japan **did** force change where the earlier pilots' model genuinely could not speak —
  translation authority (JP1) and a policing-administering sub-national level (JP3). A shallow
  pilot forces _nothing_; this one forced the two things a unitary-but-prefecturally-policed,
  Japanese-language state actually requires.
- Japan **reused** two hard-won earlier findings rather than reinventing them — the Germany
  administration/legislation split (now applied to policing) and the US decision not to encode a
  coordination relationship as a structured edge.
- Japan **declined** to over-model: no command relationship, no name-translation enum, no public
  prefecture pages, no forced statistic.

The additions are exactly the ones the facts demanded, and no others.
