# Law-enforcement cluster — semantic collision matrix

Companion to `docs/research/law-enforcement-cluster-plan.md`. That document decides
_whether_ a candidate is published. This one decides _how candidates relate to each
other_ when their intent overlaps.

**The operating rule:** two pages may not both exist because their keywords differ
slightly. They may both exist only when a reader arriving at one would feel they had
landed on the wrong page.

Verdicts: **separate** · **parent/child** · **merge** · **redirect** · **defer**.

---

## 1. The pairs the brief named

Each of these was flagged in the brief as a likely collision. All nine were assessed.

### L1 — "law enforcement" vs "policing"

**Verdict: merge (already resolved).**

These are not two questions. `police-and-law-enforcement-difference` exists precisely
because the conflation is the confusion, and it answers both by explaining that law
enforcement is a _function_ and police are one _institution_ performing it.

A separate `/law-enforcement/what-is-policing` would rank for the same intent, contain
the same explanation, and split the signal. **No page created.**

### L2 — "public safety" vs "public order"

**Verdict: defer both — and the collision is with a section, not a guide.**

`/public-safety` is an existing Tier-1 section route. A guide called "What is public
safety?" would compete directly with the section page that is already the canonical
answer to that query.

This is the most dangerous collision class on the platform: **guide-vs-section**. It
does not show up when comparing guides to guides, which is why it is recorded here.
Resolution deferred to a public-safety wave where the section page is treated as the
hub and any guides sit beneath it as genuine children.

### L3 — "crime prevention" vs "preventive policing"

**Verdict: merge, then defer.**

Same intent at search level; the second is the institutional-strategy framing of the
first. Merged as one candidate — then deferred, because either framing requires
effectiveness evidence that triggers restricted-claim rules the wave cannot satisfy.

### L4 — "arrest" vs "detention"

**Verdict: merge → `/law-enforcement/arrest-and-detention`.**

The strongest merge in the wave, and the reasoning is evidentiary rather than
editorial. The instruments that govern the subject treat it as **one** subject: the
UDHR formulation is "arbitrary arrest, detention or exile", and the ICCPR guarantee is
against "arbitrary arrest or detention". A page on each would have to explain the
other to be comprehensible, then diverge only in emphasis.

The published page keeps the distinction sharp inside one route — arrest is an _act_,
detention is the _continuing state_ — which is the actual reader confusion, and it is
better served by proximity than by separation.

### L5 — "search" vs "search warrant"

**Verdict: defer both.**

The distinction between a search and a warranted search is drawn most sharply in US
constitutional law. Building two global pages around it would import a national frame
as the organising structure — the specific error the brief prohibits. Deferred until a
non-US framing is sourced; likely a single page when it lands.

### L6 — "federal police" vs "national police"

**Verdict: parent/child — but in the institutions family, not here.**

Genuinely distinct: a national police service exists in unitary and federal states
alike; a federal police force exists only where there is a federation, and its defining
feature is competence limited by subject matter rather than territory.

Both are already modelled in `src/content/institutions.ts` (`national-police`,
`federal-investigative-agency`). Creating guide-family versions would duplicate them.
The parent/child relationship should be expressed when those records are routed at
`/institutions/{slug}`. **No guide created.**

### L7 — "police accountability" vs "civilian oversight"

**Verdict: parent/child, both published — this is the wave's one deliberate split.**

The only pair in the brief's list where two pages were judged genuinely distinct:

|          | `why-police-accountability-matters`                                        | `how-police-are-held-to-account`              |
| -------- | -------------------------------------------------------------------------- | --------------------------------------------- |
| Question | _Why does this exist at all?_                                              | _Who can examine what they did?_              |
| Content  | The structural argument: coercive power plus unavoidable discretion        | Six mechanisms, their powers and their limits |
| Reader   | Wants to understand the principle                                          | Has a specific body or incident in mind       |
| Overlap  | The three-stage framework is stated in the parent and applied in the child |                                               |

Parent: `why-police-accountability-matters`. Child: `how-police-are-held-to-account`.
Each links to the other in `related` and in prose.

Civilian oversight, internal affairs, independent complaints bodies, judicial
oversight, police discipline and prosecuting officers are **all merged into the
child** — six candidates, one page — because they are six answers to its single
question, not six questions.

### L8 — "detective" vs "criminal investigator"

**Verdict: merge (already resolved in another family).**

`src/content/professions.ts` holds one record titled "Detective / investigator". The
two terms are the same role under different national vocabularies. No new page.

### L9 — "policing history" vs "history of law enforcement"

**Verdict: merge (already resolved).**

Pure synonym pair. `how-policing-institutions-changed` covers the concept level. The
14 specific historical candidates are deferred on sourcing grounds (see cluster plan
§4, Group 6), not on collision grounds.

---

## 2. Collisions the brief did not name

Found while mapping the existing content families.

### X1 — new guides vs the `/institutions` hub

**Verdict: defer all 14 institution-type candidates.**

The largest collision surface in the wave. Eight institution types are already
described on `/institutions`. Fourteen Group 5 candidates would have produced up to
fourteen guide pages describing the same objects in a different content family.

Resolution: route the existing records, do not duplicate them.

### X2 — new guides vs the `/professions` hub

**Verdict: defer all 14 profession candidates.** Identical reasoning to X1.

### X3 — `why-police-accountability-matters` vs `/justice/why-justice-systems-need-oversight`

**Verdict: separate — checked carefully, because this one is close.**

The existing justice guide argues that _any_ system exercising power over people needs
external checking — courts, prosecutors, prisons, police alike. The new page argues
something narrower and different: that policing combines coercive power with
discretion that **cannot be specified in advance**, so the answer is not more rules but
answerability for how discretion was used.

A reader searching "why does police oversight exist" is not served by the justice-wide
page, and vice versa. The two cross-link, and the law-enforcement page names the
justice page in `related`.

### X4 — `police-use-of-force` vs country `law-enforcement` modules

**Verdict: parent/child by construction.**

The global page states the international framework; the country modules state national
arrangements. The risk is the reverse of cannibalization — a reader taking the global
framework as the local rule — so the guide carries a `scope` callout, an `uncertainty`
entry, and prose pointing to specific country modules for the applicable test.

### X5 — "why X matters" vs "what X does"

**Verdict: merge four, reject one, defer three.** See cluster plan §4.

Six of the eight sub-cluster candidates are rephrasings of published pages.
`/law-enforcement/why-police-matter` is additionally **rejected on editorial grounds**:
a page arguing why an institution matters is advocacy framing, and the brief forbids
both propaganda and anti-police advocacy.

---

## 3. Result

| Verdict                   | Count                                                |
| ------------------------- | ---------------------------------------------------- |
| Separate (both published) | 1 pair                                               |
| Parent/child              | 3                                                    |
| Merge                     | 20 candidates → 4 pages                              |
| Redirect                  | 0 — no published URL changed, so nothing to redirect |
| Defer                     | 63                                                   |
| Reject                    | 5                                                    |

**No redirects were required.** No existing route was renamed, merged away or removed
in this wave, so `netlify.toml` gains no redirect rules. Had any published slug
changed, the rule would have been added in the same commit as the change, per the
existing convention recorded in that file.

## 4. Canonical integrity

- Every new route is unique in `PUBLIC_ROUTES`; asserted by `tests/unit/routes.test.ts`.
- Canonical URLs are generated from the route registry, so a duplicate slug is a build
  failure rather than a duplicate canonical.
- All four new pages are in `sitemap.xml` (320 URLs, matching 320 registered routes,
  confirmed by `npm run verify:output`).
- No new page targets a query already owned by a section route — the guide-vs-section
  collision class in L2 was checked explicitly for each publish-now candidate.
