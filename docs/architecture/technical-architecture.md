# Technical architecture

## Stack

| Layer | Choice | Version at foundation | Why |
| --- | --- | --- | --- |
| Framework | Next.js, App Router | 16.2.x | Server Components by default, file-system routing, first-class metadata/sitemap/robots APIs, static export support. |
| Language | TypeScript, `strict: true` | 5.x | The content model is the product's safety mechanism; it must be enforced at compile time. |
| UI runtime | React | 19.2.x | Bundled with Next 16. |
| Styling | Tailwind CSS v4 (CSS-first `@theme`) | 4.x | Design tokens live in CSS, are consumed by both utilities and raw CSS, and require no JS config file. |
| Linting | ESLint 9 flat config + `eslint-config-next` | 9.x / 16.2.x | Matches the framework's own recommended config. |
| Formatting | Prettier | 3.x | Single formatter, checked in CI script. |
| Unit / validation tests | Vitest | 4.x | Runs the content-validation suite in Node, no browser needed. |
| Browser tests | Playwright | 1.61.x | Smoke, keyboard, and layout checks against the built static output. |
| Package manager | npm | 11.x | No prior lockfile existed in the repository; npm is the default. |

### Deliberate omissions

No database, no CMS, no authentication, no payments, no user accounts, no server-side API
routes, no analytics vendor, no error-reporting vendor, no third-party script of any kind.
None are required to publish a static reference site, and each would add a runtime
dependency, a privacy surface, and a deployment risk to a phase whose job is to be
verifiable.

No Vercel-specific package is used. No Vercel-only runtime behaviour (`@vercel/*`, Edge
Runtime primitives, Vercel Analytics, Vercel Blob, Image Optimization API) is relied upon.

### MDX

Not used in this phase. Content is authored as typed TypeScript records (see
[content-model.md](./content-model.md)). The editorial requirements — a required definition
block, a required jurisdictional-variation block, required misconceptions, typed source
references, per-claim fact/analysis labelling, and machine-checkable review metadata — are
structural. Enforcing them over MDX would mean parsing prose to discover whether required
sections exist; enforcing them over typed records is a compile error plus a unit test.

MDX becomes justified when we need long-form narrative essays with inline custom components
(likely in the History section). At that point it will be introduced *alongside* the typed
model, with frontmatter validated by the same schema, not as a replacement for it.

## Rendering and deployment model

**Every route is statically prerendered at build time. The output is a static site.**

`next.config.ts` sets `output: 'export'`, producing a plain directory of HTML, CSS, JS, and
assets in `out/`. Netlify publishes that directory directly. There is no serverless function,
no Next.js runtime adapter, and no server component executing at request time in production.

### Why static export rather than the Netlify Next.js runtime

The content is fully known at build time. Nothing on the site varies per request, per user,
or per region. Under those conditions static export gives us:

- **Verifiability.** `npm run build` produces the exact artefact that will be served. The
  production behaviour can be tested locally, which is a hard requirement of this phase.
- **Portability.** The output is a static directory. It can be served by Netlify, any CDN, or
  a local static server with no adapter and no platform-specific configuration.
- **No runtime surface.** No functions means no cold starts, no runtime secrets, no
  function-level failure mode, and no per-invocation cost.

### Accepted limitations of static export

Documented rather than discovered later:

| Limitation | Impact here | Mitigation |
| --- | --- | --- |
| `next/image` optimisation is unavailable; `images.unoptimized` must be `true`. | None in this phase — no raster content images ship. | Images arrive with the image-policy work. At that point we either pre-generate responsive derivatives at build time, or move to the Netlify Next.js runtime. Decision deferred with a documented trigger. |
| No Route Handlers other than static `GET`. | None. `/feed.xml` and `/llms.txt` are static `GET` handlers with `dynamic = 'force-static'`. | — |
| No `middleware.ts`. | None. No redirects, rewrites, or personalisation are needed. | Netlify `[[redirects]]` covers any future need at the CDN edge. |
| No ISR / on-demand revalidation. | None. Content changes ship via a commit and a rebuild. | — |
| No Draft Mode / preview. | Editors cannot preview unpublished content on the production URL. | Netlify deploy previews on the pull request cover this; unpublished entities are also excluded from the build. |
| `headers()` / `redirects()` in `next.config.ts` are ignored. | Security headers must be declared in `netlify.toml` instead. | Done — see [netlify-strategy.md](../deployment/netlify-strategy.md). |
| `notFound()` renders a static `404.html`. | Acceptable. | Netlify serves `404.html` for unmatched paths automatically. |

**Reversal trigger.** If we later need request-time behaviour — image optimisation at scale,
localisation negotiation, search that cannot be served from a prebuilt index, or on-demand
revalidation — the migration is: remove `output: 'export'`, add `@netlify/plugin-nextjs`,
change `publish` from `out` to `.next`. No application code changes, because no code depends
on export-only behaviour.

## Directory layout

```
docs/                          Architecture, editorial, SEO, design, deployment docs
public/                        Static assets served verbatim
scripts/                       Build-time validation and generation scripts
src/
  app/                         App Router: routes, layout, metadata, sitemap, robots
    (routes are documented in url-strategy.md)
  components/
    layout/                    SiteHeader, SiteFooter, SkipLink, MobileNav, SiteShell
    ui/                        Container, PageIntro, SectionHeading, Prose, Card,
                               Breadcrumbs, Callout, LinkButton, Badge, DefinitionList
    content/                   BlockRenderer, SourceList, ReviewMeta, RelatedTopics,
                               CoverageNotice, MisconceptionList
    seo/                       JsonLd
  content/                     Typed content records — the editorial data layer
    types.ts                   Content model (single source of truth)
    sources.ts                 Source registry
    sections.ts                Knowledge-area registry
    guides/                    Concept guides, one file per guide
    glossary.ts                Glossary terms
    countries.ts               Country model + coverage registry
    professions.ts             Profession registry
    institutions.ts            Institution-type registry
    timeline.ts                Historical milestone registry
  lib/                         Framework-facing helpers
    site.ts                    Canonical site constants
    navigation.ts              Typed navigation registry
    routes.ts                  Route registry (sitemap, link validation)
    metadata.ts                Typed metadata builders
    jsonld.ts                  Typed structured-data builders
    breadcrumbs.ts             Breadcrumb derivation
    content.ts                 Content lookup/query helpers
tests/
  content/                     Vitest content-validation suites
  unit/                        Vitest unit tests for lib helpers
e2e/                           Playwright specs
```

### The `content` / `lib` boundary

`src/content` knows nothing about React, Next.js, or routing. It is plain typed data plus
pure query functions, so the entire validation suite runs in Node with no framework
involvement. `src/lib` and `src/components` depend on `src/content`; the dependency never
runs the other way. This is what makes the content model independently testable and what
would let the same records feed a future API, export, or static-search index without
rewriting.

## Server / client boundary

Server Components are the default. Client Components are permitted only where browser state
is unavoidable.

At the end of this phase the complete client-component inventory is:

| Component | Reason |
| --- | --- |
| `components/layout/MobileNav.tsx` | Disclosure state for the mobile navigation panel, focus management, and `Escape` handling. |

Everything else — including all navigation on desktop, all content rendering, breadcrumbs,
source lists, and structured data — is server-rendered with zero client JavaScript.

Rules:

- `'use client'` requires a one-line justification comment naming the browser API or state
  that makes it necessary.
- No client component may import from `src/content` directly; content is passed in as props
  so it cannot be pulled into the client bundle.
- No component fetches at runtime. All data is resolved at build time.

## Configuration and secrets

There are none. The application reads no environment variables, has no `.env` file, and
requires no secret to build or run. `src/lib/site.ts` holds every canonical string
(domain, brand, descriptor, contact configuration) as typed constants.

This is deliberate: no fabricated environment variables, IDs, analytics properties, or
service credentials exist in the repository, and the build cannot silently depend on an
unset value.

## Build pipeline

```
npm run validate   →  format:check → lint → typecheck → test → build → verify:output
```

| Script | Command | Purpose |
| --- | --- | --- |
| `dev` | `next dev` | Local development. |
| `build` | `next build` | Static export to `out/`. |
| `start` | `npx serve out` (documented) | Serve the built artefact locally. |
| `lint` | `eslint` | ESLint 9 flat config. |
| `typecheck` | `tsc --noEmit` | Strict type check. |
| `test` | `vitest run` | Content validation + unit tests. |
| `test:e2e` | `playwright test` | Browser smoke tests against the built output. |
| `format` / `format:check` | `prettier` | Formatting. |
| `verify:output` | `node scripts/verify-output.mjs` | Asserts the exported `out/` tree contains every registered route, plus `sitemap.xml`, `robots.txt`, `llms.txt`, `feed.xml`, and `404.html`. |
| `validate` | chained | Everything above, in order. |

`verify:output` exists because static export failures are silent: a route that fails to
prerender simply produces no file. Asserting the exported tree against the route registry
turns that into a build failure.

## Performance posture

- No web fonts loaded from a third party. Typography uses a system font stack, so there is no
  external request, no layout shift from font swap, and no privacy exposure.
- No client-side router prefetch tuning is required; pages are small static documents.
- No runtime CSS-in-JS. Tailwind v4 emits a single stylesheet.
- Target: every page ships zero application JavaScript except the mobile navigation island.

## Accessibility posture

Target WCAG 2.2 AA. The implementation details are in
[design-system.md](../design/design-system.md); the architectural commitments are:

- Semantic landmarks rendered by `SiteShell` on every route, with a skip link as the first
  focusable element.
- Focus visibility is a token-level concern, not a per-component decision.
- `prefers-reduced-motion` is honoured globally in `globals.css`.
- Playwright specs assert skip-link behaviour, keyboard reachability of primary navigation,
  mobile-menu focus behaviour, heading order, and absence of horizontal overflow at 320 px.

## Testing strategy

Three layers, each with a distinct job:

1. **Content validation** (`tests/content`) — the editorial safety net. Duplicate slugs,
   missing required fields, dangling `related` references, malformed source records, missing
   review state, published entities with no sources, draft entities leaking into the sitemap,
   internal links pointing at routes that do not exist, duplicate canonical URLs, and country
   claims that exceed the recorded coverage state. These run without a browser and without a
   build.
2. **Unit tests** (`tests/unit`) — metadata builders, breadcrumb derivation, route registry
   integrity, JSON-LD shape.
3. **Browser tests** (`e2e`) — smoke and accessibility behaviour against the real exported
   output, not a dev server, so what is tested is what would be deployed.

## Node version

Pinned in `.nvmrc` and `netlify.toml` so local and CI builds agree. Next 16 requires Node
20.9 or newer; the project targets the active LTS line.
