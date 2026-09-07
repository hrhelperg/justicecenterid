# Wave 33 — adversarial QA

Independent pass over the police-mobility wave. Findings classified P0/P1/P2/P3/REFUTED.

## Candidate audit

54 candidates audited against ownership, safety and source availability.

| Disposition                | Count | Reason                                                                                                                    |
| -------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------- |
| PUBLISH                    | 2     | Primary source read, no existing owner, safe to publish                                                                   |
| REJECT — already owned     | 9     | Wave 27 owns vehicle categories and marking protection                                                                    |
| DEFER — source unreachable | 21    | Air support (403 ×3), unmarked vehicles (PDF font-encoded), signal permissions (404), red-light exemption (not located)   |
| SAFETY-REJECT              | 14    | Performance comparison, pursuit, unmarked-vehicle recognition, ANPR and tracking, radio, fleet mapping, aircraft tracking |
| OUT OF PRODUCT SCOPE       | 8     | Driving technique, response tactics, vehicle specification                                                                |

Two published against a brief target of 12–20. The reducers are ownership and, dominantly, source
access: **three official hosts returned 403, one page 404'd, and one official PDF proved
font-encoded rather than text-extractable.** Publishing any of that material would have meant
promoting search snippets to evidence, which the programme forbids in terms.

## Architecture decision

**No `/vehicles` route family.** The brief permits one only with sufficient long-term entity volume.
Two pages is not that, and the Wave 27 vehicle pages already live in `/law-enforcement`. A test
asserts no such family exists.

## The visual-asset programme — what was found and what was done

The brief asked this wave to establish or expand a rigorous visual-asset provenance layer. The
audit found that **the provenance model already existed and was excellent**, and that nothing
enforced it:

- `ImageRecord` is fully specified in `types.ts` — creator, licence, attribution, alt, caption,
  `verification`. **Zero entities use it.**
- `docs/editorial/image-policy.md` is complete and deliberate: "No content images ship in the
  foundation phase", permitted and prohibited sources, and the rule that `verification: 'verified'`
  is "required to render", set by a person.
- **No renderer exists**, and no derivative pipeline. The policy itself notes that `next/image`
  optimisation is unavailable under static export.
- The privacy page publicly tells readers the site "loads no fonts, scripts, or images from other
  companies."

Shipping images would therefore have required binary assets, a build-time derivative pipeline, a
renderer with visible attribution, and licence verification on every file — while contradicting a
published phase position and risking a public privacy commitment. **No images were shipped.**

What was built instead is the missing half: an executable form of the policy. The new invariant
validates every required field, rejects a vague licence, rejects a hotlink in place of a licence
page, rejects aggregator and stock sources, rejects alt text that duplicates the caption or
describes the medium, requires attribution even for public-domain material, and refuses to render
anything not marked `verified`.

Because there are no images, a check that only walked the corpus would pass by having nothing to
examine. The validator is therefore also run against a table of records that must each be rejected,
so it is tested today and applies the moment a real image arrives.

**Writing it found two defects in itself**, both caught by its own fixtures: a hotlink check that
would have rejected a legitimate Wikimedia Commons `File:` page — the second source the policy
prefers — and a literal control character in a fixture. A test about control characters must not
contain one.

## Mutation proofs — 17 run, 17 caught

| #   | Mutation                                                  | Result |
| --- | --------------------------------------------------------- | ------ |
| M1  | Speed and performance figure published                    | CAUGHT |
| M2  | Performance comparison against civilian vehicles          | CAUGHT |
| M3  | Pursuit tactics published                                 | CAUGHT |
| M4  | Unmarked-vehicle recognition guidance                     | CAUGHT |
| M5  | Tracking and ANPR countermeasure material                 | CAUGHT |
| M6  | Radio frequency detail                                    | CAUGHT |
| M7  | Operational siting and shift patterns                     | CAUGHT |
| M8  | Vehicle equated with unit and profession                  | CAUGHT |
| M9  | An unread provision turned into a negative finding        | CAUGHT |
| M10 | Contradiction: the signal decision given to the driver    | CAUGHT |
| M11 | A jurisdiction declared that no source carries            | CAUGHT |
| M12 | Pre-existing inbound link removed                         | CAUGHT |
| M13 | Air support material published from an unreachable source | CAUGHT |
| M14 | Re-answering the Wave 27 question without routing to it   | CAUGHT |
| M15 | Character corruption in rendered prose                    | CAUGHT |
| M16 | The verified-to-render rule disabled                      | CAUGHT |
| M17 | The vague-licence rule disabled                           | CAUGHT |

No survivors. M16 and M17 mutate the image invariant itself, which is how a guard for data that
does not yet exist can be proved to work.

## Findings

### P2 — quotation marks around an illustrative formulation

An analysis callout read: a rule that says "may exceed the limit" and one that says "may exceed the
limit where obeying it would hinder the purpose" describe different arrangements. Neither string is
a quotation; the second closely paraphrases the statute, **on a page that quotes that statute
verbatim elsewhere**, so a reader could reasonably take it as a citation. Reworded without quotation
marks, and the sentence now states which of the two the section actually says.

Found by comparing every quoted string on the pages against the source notes: 10 quotations, 2
untraceable, both these.

### The character invariant caught me making the Wave 30 mistake again

While adding sources I used the same `unicode_escape` step that corrupted Wave 29, and introduced
**8 C1 control characters**. The corpus-wide invariant promoted in Wave 31 failed immediately,
before the change was committed. Repaired by re-decoding rather than deleting, restoring the
original characters. This is the guard paying for itself within three waves of being written.

### Three wave guards were wrong on first run, all guard defects

- "only **where** obeying them would hinder" is a _condition_, not a claim that speed is the only
  exemption. The exclusivity guard could not tell them apart and failed on two correct sentences.
- A sentence **routing** a question to the page that owns it is correct behaviour, not
  cannibalisation. The ownership guard flagged the link.
- Requiring an access limitation inside a source **note** was the wrong premise. None of the three
  sources is about aviation, and attaching an air-support note to a traffic statute would be worse
  than recording it in the registry comment where provenance decisions belong.

### Two corrections to the rendered-assertion helper

- Wave 29 established that misconceptions are labelled "Common belief:" and must be skipped. That
  fix assumed label and claim shared a line. **They do not** — the template renders them as separate
  lines, so filtering the label left the claim behind, and the claim is the part that reads as an
  assertion.
- **A question is not an assertion.** Every guide opens with the reader's question; this page's is
  "Does a police driver decide to switch on the lights and siren?", which the page exists to answer
  no. Counting it as a claim inverted the page's meaning.

## Dimension sweep

| Dimension              | Result                                                                    |
| ---------------------- | ------------------------------------------------------------------------- |
| Factual accuracy       | 10/10 published claims traced to a read source                            |
| Primary-source quality | Tier 1 only: one national police service, one statute                     |
| Claim/source alignment | Every claim itemised; three `DOES NOT SUPPORT` / limit clauses            |
| Geographic scope       | 2 systems, jurisdiction checked against source jurisdiction               |
| Temporal scope         | All sources accessed and verified 2026-09-07                              |
| Safety                 | Six separate prohibitions guarded in content and again in rendered output |
| Commercial bias        | No manufacturer, model, brand or ranking anywhere                         |
| Fabricated data        | No number appears in prose that is not in a source note                   |
| Character integrity    | 0 C1 controls after repair; rendered check per page                       |
| Visual licensing       | No images shipped; policy now enforced before the first one               |
| Accessibility          | Keyboard, headings, 320px, 200% text                                      |
| Performance            | Client JS +0 KB, CSS +0 bytes, no component changed                       |
| Graph                  | 0/0/0 plus two editorial inbound links from pre-existing pages            |

## Validation

| Step                                             | Result                                      |
| ------------------------------------------------ | ------------------------------------------- |
| `npm ci` / `format:check` / `lint` / `typecheck` | exit 0                                      |
| `vitest run`                                     | **9,158 tests / 91 files**                  |
| `next build`                                     | exit 0                                      |
| `verify:output`                                  | **549 routes**, 551 pages, 549 sitemap URLs |
| `route-matrix`                                   | 701 passed, 0 failed                        |
| `playwright test`                                | **2,214 passed**                            |
| link graph                                       | 0 orphans, 0 weakly linked, 0 dead ends     |

396 sources. 17/17 mutation proofs valid, no survivors.
