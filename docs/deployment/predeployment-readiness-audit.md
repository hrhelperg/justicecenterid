# Pre-deployment readiness audit

**Branch:** `feat/law-enforcement-cluster-and-predeployment-ui`
**Base:** `main` at `777197d`
**Date:** 2026-08-10
**Nothing in this audit was deployed.** No Netlify site exists, no repository is
connected, and no DNS record was touched.

Companion to `docs/deployment/netlify-strategy.md`, which holds the standing strategy.
This document records the state of that strategy **as verified on this branch**, plus what
the two new global UI layers changed.

---

## 1. Verdict

**Ready with minor limitations.** Details in §9.

Nothing found in this audit blocks a first production deployment. Three items are
unresolved and each is a decision the owner must make, not a defect: the operator identity,
the contact address, and the log-retention period. All three are already disclosed
honestly on the live pages rather than filled with invented values.

---

## 2. Build and output

| Item                   | Value                    | Status                                                 |
| ---------------------- | ------------------------ | ------------------------------------------------------ |
| Build command          | `npm run build`          | Matches `netlify.toml`                                 |
| Publish directory      | `out`                    | Matches                                                |
| Node version           | 22 (`NODE_VERSION`)      | `.nvmrc` is 22-compatible; `engines` requires ≥20.9    |
| Export mode            | `output: 'export'`       | Fully static; no server runtime                        |
| Post-processing        | `skip_processing = true` | Correct — assets are already hashed and minified       |
| Netlify Next.js plugin | Not installed            | Correct — it would conflict with a static export       |
| Routes                 | 320                      | `verify:output` passes                                 |
| Exported pages         | 322                      | 320 routes + `404.html` + `index` variant, as expected |
| Sitemap URLs           | 320                      | Parity confirmed                                       |
| Environment variables  | **None required**        | The application reads no env var and no `.env` exists  |

`npm run verify:output` checks the exported tree against the route registry in both
directions, confirms every same-origin asset referenced by the output exists, and confirms
the CSP permits the 7,034 inline scripts the build emits.

---

## 3. Canonical host and redirects

Canonical production origin: **`https://justicecenterid.com`** (apex, no `www`, no
trailing slash). Written once, in `src/lib/site.ts`; ESLint forbids the literal elsewhere.

| From                                | To                                       | Mechanism                                 | Status                                |
| ----------------------------------- | ---------------------------------------- | ----------------------------------------- | ------------------------------------- |
| `https://www.justicecenterid.com/*` | `https://justicecenterid.com/:splat` 301 | `netlify.toml`                            | **Present and tested**                |
| `http://justicecenterid.com/*`      | `https://justicecenterid.com/*`          | Netlify automatic HTTPS redirect          | Platform-provided, verify post-deploy |
| `http://www.justicecenterid.com/*`  | `https://justicecenterid.com/*`          | Netlify HTTPS upgrade → then the www rule | Two hops; verify post-deploy          |

**Recommendation, not a defect:** Netlify performs the HTTP→HTTPS upgrade itself once a
certificate is provisioned for both hostnames, so no explicit `http://` rule is added here
— an explicit rule would be redundant and would risk a loop. The `http://www` case
resolves in two hops (upgrade, then apex redirect), which is correct but should be
confirmed with `curl -I` after the domain is attached. Both checks are steps 11 and 12 of
the deployment runbook.

`trailingSlash: false` in `next.config.ts`, and Netlify **`pretty_urls` must stay off** so
the platform does not introduce a second live form of every URL.

---

## 4. Headers, caching and CSP

| Header                       | Value                                                      | Verified by              |
| ---------------------------- | ---------------------------------------------------------- | ------------------------ |
| `Content-Security-Policy`    | `default-src 'self'` … `script-src 'self' 'unsafe-inline'` | `tests/unit/csp.test.ts` |
| `X-Content-Type-Options`     | `nosniff`                                                  | test                     |
| `X-Frame-Options`            | `DENY`                                                     | test                     |
| `Referrer-Policy`            | `strict-origin-when-cross-origin`                          | test                     |
| `Cross-Origin-Opener-Policy` | `same-origin`                                              | test                     |
| `Permissions-Policy`         | camera/microphone/geolocation/payment/usb all `()`         | present                  |
| `Strict-Transport-Security`  | **deliberately unset**                                     | test asserts absence     |

Caching: `/_next/static/*` immutable for a year; HTML, `sitemap.xml` and `feed.xml`
`max-age=0, must-revalidate`. Correct for hashed assets plus frequently-corrected content.

**The two new UI layers required no CSP change.** They add no external origin, no inline
event handler, and no remote fetch; `localStorage` needs no directive. `connect-src` stays
`'self'`, so nothing can beacon off-origin. This is now asserted by a test rather than
recalled — see §7.

`script-src 'unsafe-inline'` remains, for the documented and unavoidable reason: under
`output: 'export'` there is no server to mint a per-request nonce, and Next inlines its
bootstrap and RSC payload into every page. Removing it silently breaks hydration. The
residual risk is bounded — no user input, no dynamic HTML, no third-party script — and
`object-src 'none'`, `base-uri 'self'`, `form-action 'self'` and `frame-ancestors 'none'`
all remain.

**Enable HSTS only after** the domain is live and confirmed HTTPS-only (runbook step 13).

---

## 5. 404 handling

`out/404.html` is generated and marked `noindex`. Netlify serves it automatically for
unmatched paths under a static publish.

Verified locally with no SPA fallback: rejected candidate slugs, deferred country modules,
`/ecosystem`, `/cookie-policy` and an arbitrary path all return **404**, not a soft 200
with the app shell. Full matrix in `docs/audits/law-enforcement-wave-1-qa.md` §7.

---

## 6. The new global layers under static hosting

| Concern                                   | Finding                                                                                                   |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Consent banner under static hosting       | Not rendered — nothing optional is loaded. Armed; see `docs/privacy/cookie-consent-architecture.md`.      |
| `localStorage` availability               | Guarded. Private mode, disabled storage and quota errors all fall back to necessary-only; tested.         |
| Hydration under static export             | `useSyncExternalStore` with a `null` server snapshot; no mismatch possible.                               |
| Ecosystem external links                  | 35 verified URLs, all `https`, all `rel="noopener noreferrer"`.                                           |
| Current-product identity on a preview URL | Resolved from `SITE.origin`, not `window.location`, so deploy previews still identify the site correctly. |
| Registry in the payload                   | Imported into the cached chunk, not serialised per route — ~8 MB smaller `out/`.                          |

---

## 7. Documentation drift found and corrected

`netlify.toml` claimed that `tests/unit/csp.test.ts` pinned the CSP directive "so the two
cannot drift apart again". **That file did not exist.** It does now, and it asserts the
full policy including the absence of any external fetch origin. This is the kind of claim
that is worth more than the header it describes, because it is what a future reader relies
on when deciding whether a change is safe.

---

## 8. Checks performed

```
npm ci                  clean install
npm run format:check    PASS
npm run lint            PASS
npm run typecheck       PASS
npm test                PASS — 53 files, 2219 tests
npm run build           PASS
npm run verify:output   PASS — 320 routes, 322 pages, 320 sitemap URLs
npm run test:e2e        PASS — 158 tests, 4 skipped, desktop + mobile
static HTTP matrix      PASS — 24 paths, no SPA fallback
```

---

## 9. Unresolved before launch

Owner decisions, all currently disclosed honestly rather than invented:

1. **Operator identity.** `SITE.operator` is `null`. `/privacy` and `/terms` state that
   the publishing entity will be named before public launch. GDPR expects a controller to
   be identifiable — **this should be resolved before, not after, the site is public in
   the EU.**
2. **Contact address.** `SITE.contact.email` is `null`; `/contact` renders an interim
   notice. Needed for corrections and for data-protection enquiries.
3. **Log retention period.** `/privacy` states the exact period will be given once
   confirmed with the host. Confirm Netlify's retention and fill it in.
4. **HSTS.** Enable after HTTPS is confirmed on the apex.
5. **Search Console.** Not created; runbook steps 22–23.

None of these blocks a deployment. Items 1–3 should be closed quickly after it, and item 1
is the most consequential.
