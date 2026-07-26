# The country publication gate

Implementation: `src/content/publication-gate.ts` (`validateCountryPublication`,
`isPublicationReady`, `REQUIRED_PUBLISHED_MODULES`) and `src/content/placeholders.ts`. Enforced
by `tests/content/country-publication-gate.test.ts`.

## The one thing it guarantees

**Publication cannot happen through one accidental boolean change.** Setting a dossier's
`status` to `'published'` does generate its routes — but it does not satisfy the gate. The gate
test asserts that every dossier whose status is `published` produces an empty
`validateCountryPublication` result, so flipping the boolean on an incomplete country makes CI
fail rather than shipping it.

## Why it checks substance, not the boolean

`validateCountryPublication(dossier, ctx)` deliberately does **not** read `dossier.status`. It
returns the list of publication conditions the dossier does not satisfy. The status boolean and
that list are bound together only in the test:

```ts
for (const d of COUNTRY_DOSSIERS) {
  // Every dossier we ship as published must satisfy the whole gate.
  expect(validateCountryPublication(d, ctx)).toEqual([]);
}
```

This separation is what makes the guarantee hold: an author who flips the boolean has not
silenced the gate, they have made the gate test report exactly what is still missing.

## The conditions

A coherent set, drawn from the ten working countries — not arbitrary thresholds:

- `factsVerifiedOn` is a real ISO date (not the build clock).
- The hub has a non-empty summary, substantive blocks, ≥ 1 source, a non-`unreviewed` review,
  and ≥ 1 jurisdiction record.
- The **required module set is published**: `justice-system`, `law-enforcement`, `courts`,
  `prosecution`, `investigations`, `sources`. This is the intersection actually published by all
  ten countries. `corrections` is intentionally **not** required — France defers it and is still
  a legitimate, publishable country.
- Every published module is itself complete: content, ≥ 1 source, an ISO facts date, review
  `fact-checked`, no pending safety review, and — when `routePaths` is supplied — a registered
  route.
- Every deferred module is a real gap: a stated reason, no content, no sources.
- Every restricted claim is a fully valid `RestrictedClaim` (delegates to `validateRestrictedClaim`).
- No reader-facing string contains placeholder residue (delegates to `findDossierResidue`).

## What it deliberately does NOT do

- **No word-count minimum.** An empty-content check catches a blank placeholder; length cannot
  establish quality. Quality is the job of editorial review and adversarial verification, which
  the authoring workflow covers — the gate is the floor, not the ceiling.
- **No factual verification.** The gate cannot know whether a cited statute says what the page
  claims. It checks that the structure required for honesty is present, not that the content is
  true. Never describe it as verifying facts.

## Placeholder / template-leak detection

`src/content/placeholders.ts` scans the **editorial registry strings** — the prose an author
writes — not rendered HTML. Rendered HTML is full of innocent noise (`}}` in minified CSS, a
`::placeholder` rule, RSC fragments), which is why the output-level backstop in
`verify-output.mjs` uses only very specific markers. The content layer is clean by construction,
so it can carry broad, high-confidence markers without use/mention false positives: `TODO`,
`TBD`/`TBC`, `FIXME`, `lorem ipsum`, `{{tokens}}`, `<UPPER_TOKENS>`, bare `placeholder`,
`replace me`, `example source`, and the `SCAFFOLD` sentinel. The ten published countries match
none; a scaffold skeleton matches many. Word boundaries keep it safe — `todos` and `custody` do
not fire.

## Non-vacuity

A gate that never fails proves nothing. The test injects six controlled defects into in-memory
clones of real dossiers and asserts each is caught: a missing required module, no hub sources,
placeholder residue, a malformed restricted claim, a deferred module carrying content, and a
published module with no registered route. The registry is never mutated. A freshly scaffolded
skeleton is also asserted to fail with many problems at once.

## Relationship to the router and the output verifier

Three independent layers, fail-closed at each:

1. **Router / sitemap** — only `status: 'published'` produces a route or sitemap entry.
2. **Publication gate (this)** — a published dossier must be substantively complete.
3. **`verify:output`** — the exported HTML must match the route registry, with no placeholder
   markers and no missing assets.

A country has to pass all three to be live.
