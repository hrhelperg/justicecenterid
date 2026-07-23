# JusticeCenterID

An independent global knowledge center explaining justice systems, law enforcement, public
safety, and their history.

JusticeCenterID is an independent educational publisher. It is **not** a government body,
police agency, court, prosecution service, regulator, international organisation, law firm,
or emergency service, and it holds no official status in any jurisdiction. It does not
provide legal advice.

- **Domain:** https://justicecenterid.com (not yet deployed)
- **Hosting target:** Netlify, static export
- **Status:** foundation phase

## Quick start

```bash
npm ci
npm run dev          # http://localhost:3000
```

## Scripts

| Script                            | Purpose                                                                    |
| --------------------------------- | -------------------------------------------------------------------------- |
| `npm run dev`                     | Development server.                                                        |
| `npm run build`                   | Static export to `out/`.                                                   |
| `npm run serve`                   | Serve the built `out/` directory on port 4173.                             |
| `npm run lint`                    | ESLint 9 flat config.                                                      |
| `npm run typecheck`               | `tsc --noEmit`, strict.                                                    |
| `npm run test`                    | Vitest: content validation + unit tests.                                   |
| `npm run test:e2e`                | Playwright, against the built `out/` directory. Run `npm run build` first. |
| `npm run format` / `format:check` | Prettier.                                                                  |
| `npm run verify:output`           | Asserts `out/` matches the route registry in both directions.              |
| `npm run validate`                | format:check → lint → typecheck → test → build → verify:output.            |

`npm run validate` is the gate. Run it before opening a pull request.

## Architecture in one paragraph

Next.js 16 App Router, TypeScript strict, Tailwind CSS v4, React Server Components
throughout with a single client component (`SiteNav`). `output: 'export'` produces a static
`out/` directory that Netlify publishes directly — no serverless function, no runtime
adapter, no database, no environment variables, no third-party script. Content is authored
as typed TypeScript records in `src/content/`, which knows nothing about React or routing,
so the whole validation suite runs in Node.

Full documentation is in [`docs/`](./docs):

| Area         | Start here                                                                                                                                                                                                                                                                                                                                   |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Product      | [vision](./docs/product/vision.md) · [positioning](./docs/product/positioning.md) · [audiences](./docs/product/audiences.md) · [principles](./docs/product/principles.md)                                                                                                                                                                    |
| Architecture | [technical](./docs/architecture/technical-architecture.md) · [information](./docs/architecture/information-architecture.md) · [content model](./docs/architecture/content-model.md) · [URL strategy](./docs/architecture/url-strategy.md)                                                                                                    |
| Editorial    | [editorial policy](./docs/editorial/editorial-policy.md) · [research methodology](./docs/editorial/research-methodology.md) · [source policy](./docs/editorial/source-policy.md) · [corrections](./docs/editorial/corrections-policy.md) · [images](./docs/editorial/image-policy.md) · [content safety](./docs/editorial/content-safety.md) |
| SEO & design | [SEO architecture](./docs/seo/seo-architecture.md) · [design system](./docs/design/design-system.md)                                                                                                                                                                                                                                         |
| Deployment   | [Netlify strategy](./docs/deployment/netlify-strategy.md)                                                                                                                                                                                                                                                                                    |
| Roadmap      | [foundation roadmap](./docs/roadmap/foundation-roadmap.md)                                                                                                                                                                                                                                                                                   |

## Editorial rules that are enforced in code

These are not conventions — the test suite fails the build if they are broken:

- A published page may not be unreviewed, and must carry a review date.
- A published page needs at least one source and at least two related topics.
- Every guide must have a definition, a why-it-exists section, a how-it-works section, at
  least two misconceptions, a jurisdictional-variation section, and a
  rights-and-accountability section.
- Every source URL must carry the date it was verified. Unverified URLs are not published.
- Every internal link in content must resolve to a route in the registry.
- Pages in safety-sensitive sections cannot be published with a pending safety review.
- A country may not carry claims beyond its recorded coverage state.
- No two routes may produce the same canonical URL, and the exported output must match the
  route registry in both directions.
- Colour tokens are re-checked against WCAG 2.2 AA contrast thresholds by parsing the real
  stylesheet.

## Content authoring

Content lives in `src/content/` as typed records:

| File                                               | Contents                                            |
| -------------------------------------------------- | --------------------------------------------------- |
| `types.ts`                                         | The content model. Single source of truth.          |
| `sources.ts`                                       | Source registry. Every URL verified, with the date. |
| `sections.ts`                                      | The eight knowledge sections.                       |
| `guides/`                                          | Concept guides, one file per section group.         |
| `glossary.ts`                                      | Glossary terms.                                     |
| `countries.ts`                                     | Country model and coverage registry.                |
| `professions.ts`, `institutions.ts`, `timeline.ts` | Reference registries.                               |

To add a guide: add a record to the relevant file in `src/content/guides/`, set
`status: 'published'` only once it passes fact check, and run `npm run validate`.

## Before launch

The following are unresolved and deliberately not invented. See
[the Netlify strategy](./docs/deployment/netlify-strategy.md) §7.

- Legal operator identity and jurisdiction (`SITE.operator` in `src/lib/site.ts`).
- Contact and corrections addresses (`SITE.contact`). Currently `null`, and the contact page
  renders an honest interim state rather than a dead address.
- Hosting-log retention period, to be stated precisely in the privacy policy.

## Not done, by instruction

No merge to `main`, no pull request, no Netlify site, no deploy, no DNS, no external
service, no analytics property, and no invented environment variable or credential. The
application reads no environment variables at all.
