# Foundation roadmap

Status as of 2026-07-23. "Done" means committed on
`feat/foundation-and-platform-architecture` and covered by the validation suite.

---

## Phase 0 — Repository audit · done

The repository contained one commit (`afb5bd7 Initial commit`) with a Node `.gitignore` and a
one-line `README.md`. No application, no package configuration, no other branch. Nothing
unexpected was found and nothing had to be worked around.

## Phase 1 — Product, architecture, and editorial documentation · done

Eighteen documents under `docs/`. The editorial and safety documents are the load-bearing
ones: they define the rules the content model then enforces in code.

## Phase 2 — Technical scaffold · done

Next.js 16 App Router, TypeScript strict, Tailwind v4, ESLint 9 flat config, Prettier,
Vitest, Playwright, `netlify.toml`, static export, sitemap, robots, feed, `llms.txt`, typed
navigation/route/metadata/JSON-LD registries.

## Phase 3 — Design system · done

Token layer in `globals.css`, layout primitives, content components, one client component.

## Phase 4 — Foundation public pages · done

Eight section hubs, eight reference hubs, nine platform pages, home, 404.

## Phase 5 — Initial content · done

Twelve concept guides, the glossary, the source registry, the country and profession models,
and a small verified timeline.

## Phase 6 — Validation · done

Lint, typecheck, unit and content validation, production build, exported-output verification,
Playwright browser and accessibility checks. Results are in the implementation report.

---

# What comes next

Ordered by dependency, not by appetite. Each phase states its exit condition, because "more
pages" is not one.

## Next phase — Country model proof

**Why first.** The country model is the largest untested assumption in the architecture. It is
designed to represent absence, structural difference, and historical change, and none of that
has met a real jurisdiction yet. Building three country hubs will expose model defects that no
amount of further documentation will.

**Scope.** Three countries from three different legal-system families and three different
policing structures — deliberately including at least one federal system and one country
without a gendarmerie or sheriff equivalent, so the `PresenceState` model is genuinely
exercised.

Per country, only the modules that can be sourced to Tier 1/2 material: `overview`,
`justice-system`, `law-enforcement`, `courts`, `prosecution`, `oversight`, `sources`. Modules
that cannot be sourced are not published, and their absence is visible.

**Exit condition.** Three country hubs published, each module traceable to primary sources,
the coverage ceiling enforced by tests, and a written list of the model changes the exercise
forced. If it forces no changes, the exercise was done too shallowly.

**Explicitly not in scope.** A fourth country. The point is the model, not the coverage.

## Then — Institution types

The `/institutions` registry becomes detail pages for institution _types_ (police,
gendarmerie, sheriff, marshal, constabulary, federal/state/municipal police, border guard,
customs, coast guard, military police, prosecution service, correctional service, probation
service).

Depends on the country phase, because "what distinguishes a gendarmerie" is only answerable
with real examples of where the type exists, where it does not, and where the name means
something different.

**Exit condition.** Each type page states its distinguishing features, where it exists and
does not, and which types it is routinely confused with — all sourced.

## Then — Professions

Detail pages for the roles in the registry. Responsibilities, decision authority, constraints,
oversight, and training-route structure.

**Gate.** No pay, staffing, attrition, or mortality figures at the general-profession level,
ever. Those belong on a country module with a dated Tier 2 source, or nowhere.

## Then — History and timeline expansion

Historical period pages and a substantially expanded timeline. This is where MDX is likely to
earn its place, because narrative history with inline components is genuinely different from
the structured guide format.

**Gate.** Every timeline entry keeps its verified-source requirement. The timeline grows only
as fast as verification allows, and it continues to describe itself as a selected set of
milestones rather than a chronology.

## Then — Forensic and investigative disciplines

The highest-risk content on the platform. Each page goes through the operational-instruction
test in [content-safety.md](../editorial/content-safety.md) before it goes through fact check,
not after.

**Gate.** `safetyReview: 'cleared'` required. Any page that cannot be written within the
"what it establishes and what its limits are" boundary is not written.

## Then — Comparisons

`/comparisons` becomes real once there is enough country data to compare. A comparison
requires an explicit equivalence claim with a source on both sides, and a statement of what is
not comparable.

**Gate.** No comparison ships before its underlying country modules do.

## Later — Images

Governed by [image-policy.md](../editorial/image-policy.md). The first image requires a
complete verified `ImageRecord`, and the deployment model needs revisiting at that point
because static export gives no image optimisation.

## Later — Search

A prebuilt client-side index over titles, summaries, and glossary terms. Static, no backend,
no third-party search service. Justified only once the corpus is large enough that navigation
stops being sufficient — probably after the institutions phase.

## Later — Translation

The audience is international and reads English as a second language; translation is the
single highest-value expansion after coverage. It is deliberately last, because translating an
unstable content model means translating twice, and because translated legal terminology
needs jurisdiction-aware review rather than a translation pass.

---

## Deliberately deferred, with the reason

| Deferred                       | Reason                                                                                                                                                          |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Country detail pages           | Require researched, sourced material. Publishing the model without the research would be the thin-programmatic-page failure the architecture exists to prevent. |
| Comparisons                    | Depend on country data that does not exist yet.                                                                                                                 |
| Dark mode                      | Doubles the contrast-validation surface for no reader requirement. Tokens are already semantic, so it is additive later.                                        |
| Images                         | Licensing, dignity, and tone questions that should not be resolved quickly.                                                                                     |
| MDX                            | No current content need. Introduced when narrative history arrives, alongside the typed model rather than replacing it.                                         |
| Analytics                      | No third-party script ships in this phase. Any future choice must be cookieless and disclosed before it ships.                                                  |
| Search                         | Navigation is sufficient at 38 pages.                                                                                                                           |
| Named editorial board          | There is no editorial team to name, and inventing one is the exact false-authority signal the positioning forbids.                                              |
| Newsletter, accounts, comments | Each adds a data-protection surface and a moderation obligation with no editorial benefit at this stage.                                                        |

## Known limitations of the foundation

Stated plainly so they are not mistaken for completeness:

1. **Coverage is thin by design.** Twelve guides and a glossary. The architecture is built for
   thousands of entities; the content is a demonstration of the standard, not a corpus.
2. **No country has been researched.** `/countries` publishes a model and a coverage table,
   not knowledge.
3. **The timeline is a selected set of verified milestones**, not a chronology, and says so.
4. **Nothing has been reviewed by a subject-matter expert.** Content is sourced to primary
   material and fact-checked against those sources, but no external legal or institutional
   reviewer has seen it. The editorial policy does not claim otherwise.
5. **No images.**
6. **Operator identity and contact addresses are unresolved** and are configuration values,
   not invented content.
7. **Nothing is deployed.** Netlify compatibility rests on a local production build and local
   verification of the exported artefact — not on a deploy.
