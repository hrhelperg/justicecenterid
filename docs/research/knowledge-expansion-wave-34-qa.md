# Wave 34 — adversarial QA

Independent pass over the equipment and uniform wave. Findings classified P0/P1/P2/P3/REFUTED.

## Candidate audit — 74 assessed

| Disposition                            | Count | Reason                                                                                                                                                    |
| -------------------------------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PUBLISH                                | 3     | Primary source read, no existing owner, safe to publish                                                                                                   |
| REJECT — already owned                 | 19    | Wave 26 owns equipment purpose, uniform purpose, identification, issued vs personal, standards, documentation, body-worn video                            |
| DEFER — source unreachable or unusable | 24    | Second equipment list, procurement (only a 2018 release found), personal-purchase permissions, second standards regime, radios, most protective equipment |
| SAFETY-REJECT                          | 18    | Anything whose useful form is a specification, a placement, a technique or a defeat                                                                       |
| OUT OF PRODUCT SCOPE                   | 10    | Use, configuration, carriage, maintenance                                                                                                                 |

Three published against a brief target of 15–25. **The dominant reducer is ownership, and the shape
of what remains.** Wave 26 answered the institutional questions about equipment, and its declared
gap is specification-shaped — placement, colour schemes, insignia systems — which is precisely what
this programme forbids publishing. The safe residue is history, and history is what was published.

## Architecture decision

**No `/equipment` hub.** The brief asked the question directly. Ten pages across two waves does not
compel a first-class family, and moving the seven Wave 26 pages would churn canonicals that have
been live and linked since. Recorded as a decision, with a test asserting no such family exists.

## The commercial classification

`docs/research/equipment-commercial-opportunity-map.md` was created as required, with the three
tiers and a HIGH/MEDIUM/LOW/INAPPROPRIATE evaluation. It is internal: `docs/` is never routed or
exported, and this is now asserted rather than assumed, in content and again in rendered output.

Its honest conclusion is worth surfacing here: **equipment is a good knowledge subject and a poor
commerce subject for this platform**, because the parts people want to buy are the parts we should
not rank, and the parts we can describe honestly are institutional. The map points the durable
commercial value at training institutions, careers and books instead.

## Mutation proofs — 15 run, 15 caught

| #   | Mutation                                                    | Result                        |
| --- | ----------------------------------------------------------- | ----------------------------- |
| M1  | Reproducible insignia placement and dimensions              | CAUGHT                        |
| M2  | A rank-recognition guide                                    | CAUGHT                        |
| M3  | Supplier naming and a price                                 | CAUGHT                        |
| M4  | A ranking and recommendation                                | CAUGHT                        |
| M5  | A protection level and defeat analysis                      | CAUGHT                        |
| M6  | Use and configuration instruction                           | CAUGHT                        |
| M7  | Interception and camera-disabling material                  | CAUGHT                        |
| M8  | **A dated announcement presented as the present**           | **SURVIVED → fixed → CAUGHT** |
| M9  | A jurisdiction declared that no source carries              | CAUGHT                        |
| M10 | A claim that exists only in a search summary                | CAUGHT                        |
| M11 | Pre-existing inbound link removed                           | CAUGHT                        |
| M12 | Re-answering what a uniform is for                          | CAUGHT                        |
| M13 | Character corruption in rendered prose                      | CAUGHT                        |
| M14 | **Internal commercial classification leaking into content** | **SURVIVED → fixed → CAUGHT** |
| M15 | A purchasing route published                                | CAUGHT                        |

### M8 — a limit recorded in one field does not bind another

The temporal guard checked that the _uncertainty list_ recorded the source date. It said nothing
about the body, so "The uniform was changed again last year and is the current design" passed while
the page had begun asserting a present state from a 2022 announcement. The body is now checked for
vague recency.

### M14 — the export is the last place a leak appears, not the first

The leak guard examined only the built `out/` directory. Two things were wrong. A mutation run
against the unit suite does not rebuild, so the export was stale and could not contain the injected
text. More importantly, content is where such a leak would arrive; the export is downstream of it.
Content is now checked first, with the export check kept as a second line.

## Findings

### The commercial guard was too broad on first run

It flagged `equipment-standards-and-testing` for "A manufacturer whose model meets the standard is
subject to six follow-up inspections". That is **regulatory oversight of manufacturers — the
opposite of commerce** — and the bare nouns could not distinguish it from naming a supplier.
Narrowed to naming and to commercial action.

### REFUTED — three flags, all correct behaviour

- Two "untraceable quotations" differed from their source notes only by a sentence-final period.
  Notes aligned so provenance checks stay clean.
- "worn on the uniform" appeared in the insignia page's own uncertainty, recording that where
  insignia have been worn at different times was NOT ESTABLISHED.
- "1977" appeared only in an uncertainty entry recording that a search summary offered a 1977
  trouser trial which is **not on the page and is therefore not published.**

### Three claims rejected at the source

Content-confirming rejected a 1995 insignia change, the force's founding ranks, and the 1977 trial —
all present in search summaries, none on the pages. Each is recorded as `DOES NOT SUPPORT` in the
relevant note, so the next editor meeting the same summary knows it was checked.

## Dimension sweep

| Dimension              | Result                                                                              |
| ---------------------- | ----------------------------------------------------------------------------------- |
| Factual accuracy       | 11/11 published claims traced to a read source                                      |
| Primary-source quality | Tier 1 only: two national police services, their own pages                          |
| Claim/source alignment | Every claim itemised; three `DOES NOT SUPPORT` clauses recording rejected summaries |
| Geographic scope       | 2 services, jurisdiction checked against source jurisdiction                        |
| Temporal scope         | One dated 2022 announcement, cited as dated, guarded in body and uncertainty        |
| Safety / impersonation | No placement, dimension, appearance or rank-recognition material                    |
| Commercial bias        | No supplier, manufacturer, model, price, ranking or recommendation                  |
| Commercial separation  | Internal classification asserted absent from content and from rendered output       |
| Fabricated data        | Every date and figure traced to a source note                                       |
| Character integrity    | 0 C1 controls; rendered check per page                                              |
| Visual licensing       | No images shipped; the Wave 33 image invariant continues to apply                   |
| Accessibility          | Keyboard, headings, 320px, 200% text                                                |
| Performance            | Client JS +0 KB, CSS +0 bytes, no component changed                                 |
| Graph                  | 0/0/0 plus three editorial inbound links from Wave 26 pages                         |

## Validation

| Step                                             | Result                                      |
| ------------------------------------------------ | ------------------------------------------- |
| `npm ci` / `format:check` / `lint` / `typecheck` | exit 0                                      |
| `vitest run`                                     | **9,278 tests / 92 files**                  |
| `next build`                                     | exit 0                                      |
| `verify:output`                                  | **552 routes**, 554 pages, 552 sitemap URLs |
| `route-matrix`                                   | 704 passed, 0 failed                        |
| `playwright test`                                | **2,278 passed**                            |
| link graph                                       | 0 orphans, 0 weakly linked, 0 dead ends     |

400 sources. 15/15 mutation proofs valid, two caught only after the fixes they forced.
