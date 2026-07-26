# The country scaffold

Implementation: `scripts/scaffold-country.mjs` (`planScaffold`, `validateScaffoldInput`, CLI).
Command: `npm run scaffold:country`. Tests: `tests/content/scaffold.test.ts`.

## What it is for

To remove the _mechanical_ cost of starting a new country — the file layout, the module list,
the document templates, the wiring checklist — so a researcher spends their effort on research,
not boilerplate. It automates **structure**. It never touches **truth**.

```
npm run scaffold:country -- --slug new-zealand --name "New Zealand" --code NZ --dry-run
npm run scaffold:country -- --slug new-zealand --name "New Zealand" --code NZ
```

Flags: `--slug`, `--name`, `--code`, `--dry-run`. There is **no `--publish`** — publication is a
deliberate, reviewed step, and passing `--publish` exits with an error.

## What it writes

Only unpublished, incomplete structures:

| File                                      | Contents                                                                                                                                                                                                              |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/content/dossiers/<slug>.ts`          | An unpublished `CountryDossier` skeleton: `status: 'research'`, `review: 'unreviewed'`, no sources, no `factsVerifiedOn`, and every module a `draft` stub. Prose is `{{tokens}}`, `TODO`s, and a `SCAFFOLD` sentinel. |
| `docs/research/<slug>-research-plan.md`   | Template with the sections to fill.                                                                                                                                                                                   |
| `docs/research/<slug>-source-register.md` | Empty register with the verification rules.                                                                                                                                                                           |
| `docs/research/<slug>-model-findings.md`  | Template for the model stress-test.                                                                                                                                                                                   |
| `docs/audits/<slug>-country-pilot-qa.md`  | QA checklist template.                                                                                                                                                                                                |

It writes **no** source URL, **no** statistic, **no** institutional claim, **no** verification
date, and **no** route, sitemap entry, or "coming soon" page. It does **not** register the dossier
in `dossiers/index.ts` — that is a deliberate step on the checklist, so a scaffold cannot slip
into the site.

## What makes a scaffold impossible to publish by accident

Belt and braces:

1. `status: 'research'` → no route, no sitemap entry, no nav.
2. No sources, no facts date, no published modules → fails the **publication gate** on many counts.
3. `{{tokens}}`, `TODO`, and `SCAFFOLD` in prose → fails **placeholder detection**.

To publish, a researcher must replace the skeleton with sourced content until
`validateCountryPublication` returns nothing — the scaffold cannot shortcut that.

## Guarantees (all unit-tested)

- **Format validation only.** Slug must be kebab-case; code must be two uppercase letters; name
  must be a plain capitalised country name. The code check is **format only** — the scaffold does
  not claim, and must not claim, that the code is a registered ISO 3166-1 alpha-2 country. That is
  a research question for the source register.
- **Collision rejection.** Duplicate slug, duplicate code (including planning-registry codes),
  `/countries/<slug>` route collision, and reserved module-slug collision (e.g. `courts`) are all
  refused before anything is written.
- **Deterministic.** No `Date`, no randomness — the same inputs always plan byte-identical output,
  so a dry run and the real run agree.
- **Dry run.** `--dry-run` prints the file manifest and the checklist and writes nothing.
- **No-clobber.** On a real run, if any target file already exists the scaffold refuses and writes
  nothing — safe to re-run, never destructive.
- **Pure core.** `planScaffold(input, existing)` takes the registries as an argument and returns
  `{ ok, errors, files, checklist }` with no filesystem access, so its guarantees are tested with a
  fictional fixture (Exampleland / `XZ`) without ever writing a real file or a real country.

## The test fixture never ships

Exampleland (`XZ`) exists only in `tests/content/scaffold.test.ts`. A test asserts it appears in
no production dossier, route, planning registry, or sitemap. A fictional fixture is used
deliberately: a real unimplemented country's generated placeholder data could later be mistaken
for research.

## The next-step checklist

After scaffolding, the researcher (or Claude Code) follows the printed checklist and
`docs/editorial/country-authoring-checklist.md`: research from primary sources, add jurisdiction
records and verified sources, fill the dossier, register it in `dossiers/index.ts`, add a
per-country test, and publish only once the gate passes.
