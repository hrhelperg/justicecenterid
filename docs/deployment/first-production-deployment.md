# First production deployment — runbook

**Nothing in this runbook has been performed.** No Netlify site exists, no repository is
connected, and no DNS record has been changed. This is the procedure for the person who
does it.

Read `docs/deployment/predeployment-readiness-audit.md` first — particularly §9, which
lists three owner decisions that should be closed shortly after launch.

Target origin: **`https://justicecenterid.com`**

---

## 1. Prerequisite merge

- [ ] `feat/law-enforcement-cluster-and-predeployment-ui` reviewed and merged into `main`.
- [ ] `main` is green: `npm ci && npm run validate && npm run test:e2e`.
- [ ] Note the merge commit SHA. It is the rollback target for the _previous_ release and
      the identity of this one.

Deploy from `main` only.

## 2. Create the Netlify project

- [ ] Netlify → **Add new site → Import an existing project**.
- [ ] Team: the account that will own the production domain and the TLS certificate.
- [ ] Site name: something stable — it becomes the fallback `*.netlify.app` hostname and
      is awkward to change once links exist.

## 3. Connect the GitHub repository

- [ ] Authorise Netlify for **`hrhelperg/justicecenterid`** only, not the whole account.
- [ ] Confirm Netlify can read the repository and list branches.

## 4. Production branch

- [ ] Production branch: **`main`**.
- [ ] Deploy previews for pull requests: **on** (useful; they carry `X-Robots-Tag: noindex`
      from Netlify by default — confirm at step 14).
- [ ] Branch deploys for other branches: **off**.

## 5. Build command

- [ ] `npm run build` — should be picked up from `netlify.toml`. Do not override in the UI;
      a UI override silently wins over the file and is invisible in the repository.

## 6. Publish directory

- [ ] `out` — likewise from `netlify.toml`.
- [ ] Confirm **`@netlify/plugin-nextjs` is NOT installed.** It adapts Next into Netlify
      Functions and conflicts with a fully exported build. If Netlify auto-suggests it,
      decline.

## 7. Environment variables

- [ ] **None.** The application reads no environment variable and there is no `.env`.
- [ ] `NODE_VERSION=22` and `NPM_FLAGS=--no-audit --no-fund` come from `netlify.toml`.

## 8. First deploy (before touching DNS)

- [ ] Trigger a deploy and let it finish on the `*.netlify.app` hostname.
- [ ] Read the build log: no warnings about a missing publish directory, no plugin
      injection, no fallback to a server runtime.
- [ ] Smoke the preview hostname before attaching the domain. If something is wrong, it is
      far cheaper to find it here.

## 9. Attach the domain

- [ ] **Domain management → Add domain →** `justicecenterid.com`.
- [ ] Set the **apex as primary**, and add `www.justicecenterid.com` as an alias.
      The alias must exist for the `www → apex` redirect in `netlify.toml` to have a
      certificate to answer on.

## 10. DNS records

**This is the point of no return for the public domain.** Nothing before it is visible to
users.

- [ ] Apex `justicecenterid.com` → Netlify (`ALIAS`/`ANAME`/flattened `CNAME` to the site's
      Netlify target, or Netlify DNS).
- [ ] `www` → `CNAME` to the same Netlify target.
- [ ] Remove any stale A/AAAA/CNAME records for either hostname left by a previous host.
- [ ] Wait for propagation. Verify with `dig justicecenterid.com` and `dig www.justicecenterid.com`.

## 11. HTTPS

- [ ] Wait for Netlify to provision Let's Encrypt certificates for **both** hostnames.
- [ ] `curl -I https://justicecenterid.com` → `200`.
- [ ] `curl -I https://www.justicecenterid.com` → `301` to the apex.

## 12. Redirect verification

```bash
curl -sSI https://www.justicecenterid.com/law-enforcement | head -20
curl -sSI http://justicecenterid.com/                     | head -20
curl -sSI http://www.justicecenterid.com/privacy          | head -20
```

- [ ] `https://www/*` → `301` → apex, **path preserved** (`:splat`).
- [ ] `http://apex` → HTTPS.
- [ ] `http://www` → HTTPS, then apex. Two hops is expected and correct.
- [ ] No redirect loop on any of the three.
- [ ] A deep path such as `/countries/france/law-enforcement` survives the `www` redirect
      intact.

## 13. CSP and headers

```bash
curl -sSI https://justicecenterid.com/ | grep -i -E 'content-security|x-frame|x-content|referrer|permissions|cross-origin'
```

- [ ] All headers from `netlify.toml` are present on an HTML response.
- [ ] Load the site in a browser and confirm the console shows **no CSP violations** and
      that interactive elements work — the mobile menu, the ecosystem drawer and the cookie
      settings dialog all require hydration, so a CSP failure shows up there first.
- [ ] `/_next/static/*` returns `Cache-Control: public, max-age=31536000, immutable`.
- [ ] **Only now**, once HTTPS is confirmed on the apex, consider enabling
      `Strict-Transport-Security`. Add it to `netlify.toml`, update
      `tests/unit/csp.test.ts` (which currently asserts its absence), and redeploy.

## 14. robots.txt

- [ ] `https://justicecenterid.com/robots.txt` returns 200 and points at the apex sitemap.
- [ ] Confirm it does **not** disallow everything.
- [ ] Confirm a deploy-preview URL returns `X-Robots-Tag: noindex` so previews cannot be
      indexed alongside production.

## 15. sitemap.xml

- [ ] `https://justicecenterid.com/sitemap.xml` returns 200.
- [ ] Spot-check: every `<loc>` is `https://justicecenterid.com/...`, apex, no `www`, no
      trailing slash.
- [ ] URL count matches the route count reported by `npm run verify:output` (320 at the
      time of writing).

## 16. Cookie-consent QA

- [ ] No consent banner appears — **this is correct.** The site loads nothing optional.
- [ ] `localStorage` is empty after a plain visit (DevTools → Application → Local storage).
- [ ] **Cookie settings** in the footer opens the preferences dialog.
- [ ] The dialog states that no optional technology is active.
- [ ] Necessary is checked and disabled; Analytics and Marketing are unchecked.
- [ ] _Reject non-essential_ writes `jcid-consent` with both flags `false`.
- [ ] _Accept all_ writes both `true`; reload and confirm it persisted.
- [ ] Reopening preferences reflects the stored choice.
- [ ] `Escape` closes the dialog and focus returns to the footer control.

## 17. Ecosystem-banner QA

- [ ] The bar is present at the top of every page and stays visible while scrolling.
- [ ] It does not cover the article; the first heading sits below it.
- [ ] JusticeCenterID is marked as the current product — **not** rendered as a link to
      itself.
- [ ] **All products** opens the drawer; every link opens the correct external site in a
      new tab.
- [ ] `Escape` closes it and focus returns to the trigger.
- [ ] Mobile: the rail is absent, the drawer is reachable, nothing overflows sideways.

## 18. 404 QA

- [ ] `https://justicecenterid.com/does-not-exist` returns **HTTP 404**, not 200.
- [ ] The 404 page renders with site chrome and carries `noindex`.
- [ ] `/ecosystem` and `/cookie-policy` return 404 — neither route was created.

## 19. Deep-link QA

- [ ] Load `/countries/france/law-enforcement` **directly** (not by navigating) → 200.
- [ ] Load `/law-enforcement/police-use-of-force` directly → 200.
- [ ] Browser Back and Forward behave correctly across several client-side navigations.
- [ ] A hard refresh on a deep route still returns 200 — the check that a stray SPA
      fallback would fail.

## 20. Canonical verification

- [ ] View source on three pages; each `<link rel="canonical">` is the apex URL of _that_
      page.
- [ ] No page canonicalises to `www`, to a trailing-slash form, or to the home page.

## 21. Structured data

- [ ] Google Rich Results Test on the home page and on one guide.
- [ ] `Organization` and `WebSite` on the home page; `Article` with citations on a guide.
- [ ] No errors. Warnings about optional properties are acceptable.

## 22. Search Console

- [ ] Add **`https://justicecenterid.com`** as a URL-prefix property (or a Domain property
      if DNS access is convenient — preferable, since it covers both hostnames).
- [ ] Verify via DNS TXT or the Netlify-served HTML file.
- [ ] Set the preferred reporting view; confirm no manual actions are outstanding.

## 23. Submit the sitemap

- [ ] Search Console → Sitemaps → submit `sitemap.xml`.
- [ ] Confirm it is read without errors. Indexing takes days; do not treat "Discovered —
      currently not indexed" on day one as a fault.

## 24. Post-deploy smoke test

- [ ] Home, one section, one guide, one country hub, one country module, `/privacy`,
      `/sources`, 404.
- [ ] Keyboard-only pass on one article: skip link → header nav → ecosystem drawer →
      content → footer → cookie settings.
- [ ] Mobile device or emulation at 320px: no horizontal scroll on any of the above.
- [ ] 200% text size on the home page: no horizontal scroll, and the ecosystem controls
      remain reachable.
- [ ] Lighthouse on one article: confirm no new accessibility regression.

## 25. Rollback

Netlify keeps every deploy immutable, so rollback is instant and does not require a
revert commit:

- [ ] **Deploys → select the last known-good deploy → Publish deploy.** Traffic moves
      within seconds.
- [ ] Confirm the restored deploy serves correctly (repeat §24's first line).
- [ ] Only then decide whether to `git revert` on `main`. Publishing an older deploy is the
      emergency action; the revert is the follow-up.
- [ ] If the fault is DNS rather than content, rolling back a deploy will not help —
      restore the previous DNS records instead.

**Do not** delete the failed deploy. It is the evidence for the post-mortem.

---

## Sign-off

| Step                          | Owner | Date | Notes |
| ----------------------------- | ----- | ---- | ----- |
| Merge and green `main`        |       |      |       |
| Site created and first deploy |       |      |       |
| Domain attached, DNS changed  |       |      |       |
| HTTPS and redirects verified  |       |      |       |
| Consent and ecosystem QA      |       |      |       |
| Search Console and sitemap    |       |      |       |
| Smoke test complete           |       |      |       |
