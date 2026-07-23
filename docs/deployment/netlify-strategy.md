# Netlify deployment strategy

**Nothing in this document has been executed.** No Netlify site is connected, no DNS is
configured, no deploy has been run. This is the documented plan plus the configuration
committed to the repository, verified by a local build only.

---

## 1. Deployment model

**Static export published as a plain directory.** `next.config.ts` sets `output: 'export'`;
`next build` writes `out/`; Netlify publishes `out/` to its CDN. There is no serverless
function, no Next.js runtime adapter, and no server-side execution in production.

The reasoning and the accepted limitations are in
[technical-architecture.md](../architecture/technical-architecture.md). In summary: the entire
site is known at build time, so the artefact that is tested locally is byte-for-byte the
artefact that would be served.

`@netlify/plugin-nextjs` is **not** installed and must not be. It exists to run Next.js in
Netlify Functions; installing it alongside `output: 'export'` produces a confusing hybrid where
the plugin tries to adapt a build that has already been fully exported.

---

## 2. `netlify.toml`

Committed at the repository root.

```toml
[build]
  command  = "npm run build"
  publish  = "out"

[build.environment]
  NODE_VERSION = "22"
  NPM_FLAGS    = "--no-audit --no-fund"

# Framework-canonical URLs only; Netlify must not add or strip its own.
[build.processing]
  skip_processing = true
```

Node is pinned in both `netlify.toml` and `.nvmrc` so a local build and a Netlify build cannot
silently use different runtimes.

`skip_processing` is on because Next has already produced the final hashed, minified assets.
Letting the platform post-process them risks breaking integrity and adds nothing.

### Headers

`headers()` in `next.config.ts` is ignored under static export, so security headers are
declared in `netlify.toml` instead. This is the single most common way a static-export Next
site ships without headers.

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options   = "nosniff"
    X-Frame-Options          = "DENY"
    Referrer-Policy          = "strict-origin-when-cross-origin"
    Permissions-Policy       = "camera=(), microphone=(), geolocation=(), interest-cohort=()"
    Cross-Origin-Opener-Policy = "same-origin"
    Content-Security-Policy  = """
      default-src 'self';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'none';
      img-src 'self' data:;
      style-src 'self' 'unsafe-inline';
      script-src 'self';
      font-src 'self';
      connect-src 'self';
      object-src 'none';
      upgrade-insecure-requests
      """

[[headers]]
  for = "/_next/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
```

A strict CSP is achievable here precisely because the site loads nothing from a third party —
no font CDN, no analytics, no embed. `style-src 'unsafe-inline'` is required for Next's
inlined critical CSS and is the one concession; there is no inline script requirement because
the site ships no third-party or inline JavaScript beyond the framework's own hashed bundles.

`Strict-Transport-Security` is deliberately **not** set here. It should be enabled after the
domain is live and confirmed HTTPS-only, because a premature `max-age` on a domain still being
configured is difficult to undo.

### Redirects

```toml
# Canonical host: apex, not www.
[[redirects]]
  from   = "https://www.justicecenterid.com/*"
  to     = "https://justicecenterid.com/:splat"
  status = 301
  force  = true
```

Slug-change redirects are added here, in the same commit as the slug change, and are never
removed. There are none yet.

`pretty_urls` is disabled in the site's build settings so that Netlify does not add a trailing
slash the framework did not generate — otherwise every canonical URL has two live forms.

---

## 3. Pre-connection checklist

To be completed by a human before any Netlify site is created. None of it is done.

| #   | Item                                                                                                              | Status                                 |
| --- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| 1   | `npm run validate` passes locally on the branch                                                                   | run at the end of the foundation phase |
| 2   | `out/` contains every route in the registry, plus `sitemap.xml`, `robots.txt`, `llms.txt`, `feed.xml`, `404.html` | asserted by `verify:output`            |
| 3   | Domain `justicecenterid.com` registered and under our control                                                     | **not verified — owner action**        |
| 4   | Contact addresses provisioned and receiving mail                                                                  | **not done — see §7**                  |
| 5   | Feature branch merged to `main` via pull request                                                                  | not done, by instruction               |
| 6   | Netlify site created and linked to the repository                                                                 | not done, by instruction               |
| 7   | Build settings confirmed: command `npm run build`, publish `out`, `pretty_urls` off                               | not done                               |
| 8   | Deploy preview reviewed on a real device                                                                          | not done                               |
| 9   | Custom domain + Netlify-managed TLS                                                                               | not done                               |
| 10  | `www` → apex redirect verified live                                                                               | not done                               |
| 11  | HSTS enabled _after_ HTTPS is confirmed stable                                                                    | not done                               |
| 12  | Search Console and Bing Webmaster verification (DNS or file method — no client-side script)                       | not done                               |
| 13  | `sitemap.xml` submitted                                                                                           | not done                               |

---

## 4. Branch and preview strategy

| Context          | Behaviour                                                                                                                                                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `main`           | Production. Deploys only after a reviewed pull request.                                                                                                                                                                         |
| Feature branches | Deploy previews, for review only.                                                                                                                                                                                               |
| Deploy previews  | Should be `noindex`. Under static export the site's own robots rules are baked into the artefact, so preview exclusion is configured at the Netlify level via the branch-deploy `X-Robots-Tag` header, not in application code. |

Netlify's automatic deploy-preview `robots.txt` handling must be verified when the site is
first connected. A deploy preview that gets indexed creates exactly the duplicate-content
problem the URL strategy is designed to prevent.

---

## 5. Local verification of the production artefact

This is what makes the compatibility claim meaningful, and it is the only part of this
document that is actually exercised in the foundation phase:

```bash
npm ci
npm run validate          # format:check → lint → typecheck → test → build → verify:output
npx serve out             # serve the exact directory Netlify would publish
npm run test:e2e          # Playwright against that served output
```

Playwright runs against the served static output rather than `next dev`, so the browser tests
exercise the production artefact.

---

## 6. Rollback

Netlify keeps immutable deploys, so rollback is selecting a previous deploy and promoting it —
no rebuild, no revert commit needed to stop the bleeding. The corresponding Git revert follows
separately.

This matters more than usual here: the fastest response to a critical content error (a
fabricated citation, an operational-safety failure) is instant rollback, then a fix, then a
correction notice.

---

## 7. Unresolved before launch

Recorded here rather than guessed at:

- **Legal operator identity.** The privacy policy, terms, and imprint need the name and
  jurisdiction of the entity publishing the site. Nothing has been invented; the pages are
  written so the operator identity is a single configuration value in `src/lib/site.ts`.
- **Contact addresses.** `src/lib/site.ts` currently declares no contact address. The contact
  page renders an honest interim state rather than an address that does not receive mail.
  Setting one constant switches every surface — contact page, corrections policy, structured
  data — to the real address.
- **Hosting-log retention.** The privacy policy states that the host processes standard server
  logs. The retention period is Netlify's and must be confirmed and stated precisely before
  launch.
- **Whether deploy previews are publicly reachable.** Affects whether unreviewed content can be
  read by anyone with the URL.

## 8. Explicitly not done

Per the working instructions for this phase: no merge to `main`, no pull request opened, no
Netlify site created or linked, no deploy of any kind, no DNS change, no domain purchase, no
external service configured, no analytics or verification property created, and no environment
variable or credential invented. The application reads no environment variables at all.
