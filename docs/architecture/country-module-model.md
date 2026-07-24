# Country module model

Implementation: `src/content/country-modules.ts` (definitions),
`src/content/dossiers/` (content), `src/content/public-routes.ts` (routes).

## Route shape

```
/countries/{country}                    country hub
/countries/{country}/{module}           module page
```

`{country}` is the English country name lowercased (`france`), not the ISO code. The ISO code
remains the identifier in data (`countryCode: 'FR'`); the URL uses the readable form. `/countries/fr`
is not a route and returns 404.

## The publication gate is the router

`generateStaticParams` derives params only from modules with `status: 'published'`. A module in
draft therefore has no page, no sitemap entry, no navigation link, and 404s on direct request.
There is no separate "should this be indexed?" decision to get wrong.

Deferred modules are still visible to readers — as a stated gap on the country hub with the
reason given. The reader learns what we have not done rather than inferring the institution
does not exist.

## Modules

`justice-system` · `law-enforcement` · `courts` · `prosecution` · `investigations` ·
`forensics` · `corrections` · `border-and-customs` · `oversight` · `history` · `timeline` ·
`sources`

`slug` is required to equal `id`, so a route can never drift from its definition.

There is deliberately **no `overview` module**: the overview is the country hub itself.
Publishing both would create two URLs competing to be the country's canonical entry point.

## Slug collision review (precondition A2)

Seven module slugs are word-identical to a top-level section — `law-enforcement`, `courts`,
`prosecution`, `investigations`, `forensics`, `corrections`, `history` — and two more share a
name with a Tier 2 hub (`timeline`, `sources`).

**No technical collision.** Sections are depth-1 static routes; country modules are depth-3
under `/countries/{country}/`. Asserted by test: every country-module path has exactly four
segments and matches no section path.

**The real risk is semantic**, for a reader arriving from search. Reusing the vocabulary is
still correct — someone looking for how France polices is looking for the words "law
enforcement", and country-specific synonyms would make the two families harder to relate.
Mitigations:

1. Every country page title carries the country: "Law enforcement in France".
2. Breadcrumbs always render Home › Countries › France › Law enforcement.
3. Each module links to its global counterpart via `relatedSection`; global sections do not
   link back into one country as though it were the default.

## Scaling

12 modules × ~200 countries ≈ 2,400 potential routes. Three things keep that honest:

1. Routes come only from researched, published modules.
2. `verify-output.mjs` imports the same registry, so the exported site and the sitemap are
   checked against it in both directions.
3. No generator produces a module from a template. A module exists because it was researched.
