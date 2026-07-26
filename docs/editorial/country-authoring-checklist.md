# Country authoring checklist

The operational checklist for a new country, usable by Claude Code or a human researcher. The
reasoning behind each step is in `docs/editorial/country-research-workflow.md`; the rules are in
`docs/architecture/country-dossier-contract.md`. Each item is tagged **[M]** mandatory,
**[C]** conditional, **[O]** optional, or **[P]** prohibited.

## Start

- **[M]** Scaffold: `npm run scaffold:country -- --slug <slug> --name "<Name>" --code <ISO2>`.
- **[M]** Confirm the ISO code independently (the scaffold checks format only, not membership).
- **[P]** Do NOT register the dossier in `dossiers/index.ts` yet, and do NOT set `status: 'published'`.

## Jurisdiction model

- **[M]** Decide unitary / federal / asymmetric from sources; add jurisdiction records only for
  tiers that do institutional work.
- **[M]** Set each `FunctionScope` from evidence; use `none` only as a researched finding and
  `unknown` for genuinely unresearched — never interchangeably.
- **[C]** Set `authorityBasis` where geography ≠ derivation (reserved powers, inherent sovereign,
  federal-plenary).
- **[C]** Set `legislativeCompetence` where who-legislates ≠ who-administers (federations).
- **[P]** Do NOT add an autonomy/ranking score. Asymmetry is per-function facts.
- **[P]** Do NOT create a public sub-national, tribal, or autonomous-community page.

## Sources

- **[M]** Every source typed, with `note` stating what it supports and nothing more.
- **[M]** Every source with a URL carries `verifiedOn` and `verificationMethod: 'content-confirmed'`.
- **[M]** Country pages cite only own-country or `INT` sources.
- **[C]** Record `translationStatus` / `authoritativeLanguage` for translated sources.
- **[P]** Do NOT cite a source you could not read, or claim you read a WAF-blocked page you did not.

## Modules

- **[M]** Publish at least: `justice-system`, `law-enforcement`, `courts`, `prosecution`,
  `investigations`, `sources`.
- **[C]** Publish `corrections`, `oversight`, and others where the evidence supports them.
- **[M]** Every published module: non-empty blocks, ≥ 1 source, `factsVerifiedOn`,
  `review: 'fact-checked'`, safety review cleared for safety-sensitive modules.
- **[M]** Every deferred module: a stated reason, empty blocks, empty sources.
- **[P]** Do NOT stub a module or write a "coming soon" page. Absence is shown honestly.

## Claims and time

- **[C]** Publish a restricted claim only as a fully specified `RestrictedClaim`; otherwise defer it.
- **[P]** Do NOT manufacture a statistic to fill a category. Deferral is correct.
- **[C]** Record a `ScheduledChange` for any known future/just-completed legal change to cited law.
- **[M]** Keep institution names, compositions, and multilingual names in prose, not schema.

## Publish

- **[M]** `validateCountryPublication` returns nothing (run the gate test).
- **[M]** Register the dossier in `dossiers/index.ts`; set `independentBodyNoun`, `updatedOn`,
  `factsVerifiedOn`, `review`.
- **[M]** Add `tests/content/countries-<slug>.test.ts`; extend the dossier-slug guard in
  `countries-france.test.ts`.
- **[M]** `npm run validate` and `npm run verify:output` pass; the semantic regression covers the
  new hub.
- **[M]** Browser + accessibility QA: desktop + mobile, keyboard, skip link, focus, 320px, 200%.
- **[M]** Adversarial verification of load-bearing facts; apply any surviving correction.
- **[P]** Do NOT open a PR, merge, deploy, or touch Netlify/DNS as part of authoring — that is a
  separate, explicitly authorised step.
