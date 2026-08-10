# First production launch report

**Date:** 2026-08-10
**Phase:** JusticeCenterID First Production Deployment & Real-World QA

> ## Launch verdict: **NOT READY**
>
> **No deployment was performed. No Netlify site exists. No DNS record was changed.**
>
> This is not a code defect. Every local gate passes and the build artefact is sound. The
> launch is blocked by two things, both requiring the owner:
>
> 1. **The legal configuration is entirely unresolved** (§2). The site has no identified
>    operator, data controller, contact address or jurisdiction. For a site intended to be
>    publicly accessible in Europe, publishing without an identifiable controller is a
>    compliance problem, not a cosmetic gap.
> 2. **There is no deployment access in this environment** (§3). No Netlify CLI, no Netlify
>    credentials, no GitHub CLI, and no DNS control. Steps 4–11 of the execution order —
>    create the site, connect the repository, attach the domain, change DNS, verify HTTPS,
>    and run real production QA — cannot be performed here.
>
> Everything that does not depend on those two things has been completed and is reported
> below. **All production-only sections are marked NOT VERIFIED rather than assumed.**

---

## 1. Merge gate — PASSED

| Item                | Result                                                                                                                            |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Repository          | `hrhelperg/justicecenterid` confirmed via `git remote -v`                                                                         |
| Refs fetched        | `git fetch --all --prune --tags`                                                                                                  |
| `main` synchronised | Was 10 commits behind; fast-forwarded                                                                                             |
| Branch merged       | `feat/law-enforcement-cluster-and-predeployment-ui` confirmed an **ancestor of `origin/main`** via `git merge-base --is-ancestor` |
| Merge commit        | `cfcbc71` — "Merge pull request #18"                                                                                              |
| Working tree        | Clean                                                                                                                             |

### Production base SHA

```
cfcbc7160154eaf86765826908b010249a2d7924
```

**Substantive verification** — each artefact checked individually, not inferred from the
merge commit:

| #   | Artefact                    | Evidence                                                     |
| --- | --------------------------- | ------------------------------------------------------------ |
| 1   | Four law-enforcement pages  | 4/4 slugs present in `src/content/guides/law-enforcement.ts` |
| 2   | Cluster research plan       | 321 lines                                                    |
| 3   | Cannibalization matrix      | 201 lines                                                    |
| 4   | Cookie consent architecture | 190 lines + `src/lib/consent.ts` present                     |
| 5   | Privacy correction          | `jcid-consent` disclosed on `/privacy`                       |
| 6   | HELPERG product registry    | 29 product records                                           |
| 7   | Global ecosystem banner     | `EcosystemBar.tsx`, wired into `SiteShell`                   |
| 8   | z-index / overlay system    | 6 layer tokens + `src/lib/overlay.ts`                        |
| 9   | CSP regression test         | `tests/unit/csp.test.ts`, 130 lines                          |
| 10  | Deployment readiness docs   | Readiness audit + runbook both present                       |

---

## 2. Legal configuration — **P0 LAUNCH BLOCKER**

No legal values were supplied in this phase's instructions, and none exist in the
repository. Per the brief, these are identified as blockers rather than filled with
placeholders. **Nothing was invented.**

| Required value                  | Current state | Where it lives                     |
| ------------------------------- | ------------- | ---------------------------------- |
| Legal operator                  | `null`        | `SITE.operator`, `src/lib/site.ts` |
| Data controller                 | Not modelled  | —                                  |
| Business / company name         | `null`        | `SITE.operator.legalName`          |
| Registered address              | Not modelled  | —                                  |
| Registration / company number   | Not modelled  | —                                  |
| Contact email                   | `null`        | `SITE.contact.email`               |
| Privacy contact                 | `null`        | —                                  |
| Corrections contact             | `null`        | `SITE.contact.correctionsEmail`    |
| Log retention period            | Unstated      | `/privacy`                         |
| Legal jurisdiction              | `null`        | `SITE.operator.jurisdiction`       |
| Copyright / operator disclosure | Unstated      | `/terms`                           |
| Content reuse licence           | Unstated      | `/terms`                           |

**The current behaviour is correct and honest, not broken.** Five pages state plainly that
the value is being finalised rather than showing a placeholder:

- `/contact` — interim notice instead of a dead address
- `/privacy` — retention period "will be stated here precisely before public launch"
- `/terms` — publishing entity and licence, both explicitly not invented
- `/corrections-policy` — corrections route being finalised

No `TODO`, `unknown`, `null`, sample company, fake address or fake support email is
rendered anywhere. That was verified by scanning `src/app` and `src/lib/site.ts`.

**Owner action.** Supply the real values. They belong in `SITE` in `src/lib/site.ts`,
which is already the single source — setting `operator` and `contact` switches every
surface at once (contact page, privacy, terms, corrections policy, structured data). Do
not add them page by page.

---

## 3. Deployment access — **P0 LAUNCH BLOCKER**

| Capability                          | Available | Consequence                              |
| ----------------------------------- | --------- | ---------------------------------------- |
| Netlify CLI                         | **No**    | Cannot create or configure a site        |
| Netlify credentials / MCP connector | **No**    | No API access                            |
| GitHub CLI (`gh`)                   | **No**    | Cannot open a PR or manage repo settings |
| DNS control                         | **No**    | Cannot change records                    |
| `curl`, `dig`                       | Yes       | Read-only verification only              |

A Vercel MCP connector is present in this environment. It was **not** used: this project is
configured for Netlify, and moving hosting platforms is outside this phase's scope and was
not authorised.

---

## 4. Current DNS state — verified read-only, 2026-08-10

**The domain is registered and parked. It is not connected to Netlify.**

| Record                  | Value                                                      | Note                                |
| ----------------------- | ---------------------------------------------------------- | ----------------------------------- |
| NS                      | `dns1.registrar-servers.com`, `dns2.registrar-servers.com` | Namecheap BasicDNS                  |
| A `justicecenterid.com` | `192.64.119.124`                                           | **Namecheap parking — conflicting** |
| CNAME `www`             | `parkingpage.namecheap.com` → `104.219.250.36`             | **Namecheap parking — conflicting** |
| SOA serial              | `1784813558`                                               | —                                   |

Live behaviour:

```
http://justicecenterid.com    302 → http://www.justicecenterid.com/   Server: namecheap-nginx
https://justicecenterid.com   connection timed out (no TLS on apex)
https://www.justicecenterid.com  TLS handshake failure
```

`Server: namecheap-nginx`, zero Netlify headers. The served page is a registrar parking
page with an empty `<title>`.

**Both existing records conflict** and must be removed when the domain is attached to
Netlify. The replacement values must be taken from Netlify's own Domain management panel
after the site is created — they are **not** guessed here:

| Host                         | Type                                                     | Destination                                                  |
| ---------------------------- | -------------------------------------------------------- | ------------------------------------------------------------ |
| `justicecenterid.com` (apex) | `ALIAS` / `ANAME` (Namecheap calls this an ALIAS Record) | the value Netlify displays for the site                      |
| `www`                        | `CNAME`                                                  | the site's `*.netlify.app` hostname, as displayed by Netlify |

---

## 5. Local gate — PASSED (clean install, on the merged `main`)

```
npm ci                  clean install
npm run format:check    PASS  — all files match Prettier style
npm run lint            PASS
npm run typecheck       PASS
npm test                PASS  — 53 files, 2219 tests
npm run build           PASS
npm run verify:output   PASS  — 320 routes / 322 pages / 320 sitemap URLs
npm run test:e2e        PASS  — 158 passed, 4 skipped (desktop + mobile Chromium)
```

### Additional artefact audit across all 322 exported pages

| Check                                                                         | Result                                                                                    |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Canonicals found                                                              | 321, all absolute `https://justicecenterid.com`                                           |
| Canonical format errors                                                       | **0**                                                                                     |
| Duplicate canonical assignments                                               | 1 — see D3 below                                                                          |
| `noindex` on a real indexable route                                           | 0 (only `404.html` and `_not-found.html`)                                                 |
| JSON-LD blocks                                                                | 643, **0 parse errors**                                                                   |
| `GovernmentOrganization` claim                                                | **0** — correct; no fabricated government affiliation                                     |
| Hostname leakage (`netlify.app`, `deploy-preview`, `vercel.app`, `127.0.0.1`) | **none**                                                                                  |
| `localhost` occurrences                                                       | 1, inside a vendored WHATWG URL host-parser state machine — not our origin. Not a defect. |
| Draft content / scaffold placeholders                                         | none (enforced by the publication gate and placeholder tests)                             |
| Unpublished country routes                                                    | none — deferred modules 404                                                               |

### Route matrix, registry-derived — 337/337 against the local artefact

A new tool, `scripts/route-matrix.mjs`, derives the matrix from
`src/content/public-routes.ts` — the same registry the sitemap and `verify-output.mjs`
read — so it cannot drift from what the site publishes. **This is the tool intended for the
production run.**

```
320 registered routes + 17 must-404 paths
passed : 337
failed : 0
```

Per route it asserts HTTP 200, exactly one absolute apex `https` canonical pointing at that
route, no redirect away from the route, no 404 shell served with 200, and no `noindex`. The
17 must-404 paths cover deferred country modules, every rejected cluster slug, ISO-code
aliases (`/countries/fr`), a nonexistent country, nested nonsense under a real country, and
arbitrary paths — the set that catches an SPA fallback.

Run against production once deployed:

```bash
node scripts/route-matrix.mjs https://justicecenterid.com
```

---

## 6. Build configuration — verified from the repository, not assumed

| Setting                    | Value                                                                                        | Source                         |
| -------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------ |
| Build command              | `npm run build` → `next build`                                                               | `netlify.toml`, `package.json` |
| Publish directory          | `out`                                                                                        | `netlify.toml`                 |
| Output mode                | `output: 'export'` — fully static                                                            | `next.config.ts`               |
| Trailing slash             | `trailingSlash: false`                                                                       | `next.config.ts`               |
| Images                     | `unoptimized: true` (required for export)                                                    | `next.config.ts`               |
| Node version               | 22                                                                                           | `netlify.toml`                 |
| `@netlify/plugin-nextjs`   | **Not installed — correct.** The build is a full static export and needs no runtime adapter. | verified                       |
| Netlify Functions          | None                                                                                         | verified                       |
| Server runtime requirement | None                                                                                         | verified                       |

### Environment variables

**No production environment variables required.**

Verified: no `process.env` reference in `src/` or `scripts/` other than `NODE_ENV`/`CI`, and
no `.env` file of any kind exists. No database, authentication, analytics, marketing or API
credential is needed. No secret was created for deployment.

---

## 7. Production verification — NOT VERIFIED (no deployment)

Every item below requires a live origin. None is claimed as passing.

| #     | Item                                                 | Status                                                           |
| ----- | ---------------------------------------------------- | ---------------------------------------------------------------- |
| 2     | Deployment ID                                        | **NOT PERFORMED**                                                |
| 3     | Netlify site identity                                | **NOT CREATED**                                                  |
| 4     | Deployed production branch                           | **NOT DEPLOYED** (would be `main`)                               |
| 8     | HTTPS state                                          | **NOT VERIFIED** — no certificate exists                         |
| 9     | `www` redirect                                       | **NOT VERIFIED** — rule present in `netlify.toml`, untested live |
| 10    | HTTP redirect                                        | **NOT VERIFIED**                                                 |
| 11    | Trailing slash                                       | **NOT VERIFIED** — see §8                                        |
| 12    | Case sensitivity                                     | **NOT VERIFIED** — see §8                                        |
| 13    | CSP in production                                    | **NOT VERIFIED** — see §9                                        |
| 14–15 | Cookie/consent, real storage and network observation | **NOT VERIFIED**                                                 |
| 16    | HELPERG banner in production                         | **NOT VERIFIED**                                                 |
| 17    | Production route matrix                              | **NOT RUN** (tool ready; passes locally)                         |
| 18–21 | sitemap, robots, llms.txt, feed on the real origin   | **NOT VERIFIED**                                                 |
| 22–23 | Canonical audit, meta robots in production           | **NOT VERIFIED**                                                 |
| 24    | Structured data on the real origin                   | **NOT VERIFIED**                                                 |
| 25    | 404 behaviour in production                          | **NOT VERIFIED**                                                 |
| 26    | Accessibility in production                          | **NOT VERIFIED**                                                 |
| 27    | Performance (LCP/CLS/INP)                            | **NOT MEASURED** — requires a real origin                        |
| 28    | Cache headers                                        | **NOT VERIFIED** — declared in `netlify.toml`                    |
| 29    | Security headers                                     | **NOT VERIFIED** — declared in `netlify.toml`                    |
| 31    | Search Console                                       | **NOT CONFIGURED** — see §11                                     |

---

## 8. Trailing slash and case sensitivity — local results are NOT transferable

Tested against `serve@14` on macOS. **Both results are artefacts of the local environment
and must be re-tested against Netlify.**

| Path                                                    | Local     | Interpretation                      |
| ------------------------------------------------------- | --------- | ----------------------------------- |
| `/justice`                                              | 200       | expected                            |
| `/justice/`                                             | 200       | `serve` accepts both forms          |
| `/countries/france` · `/countries/france/`              | 200 · 200 | both forms                          |
| `/law-enforcement/police-use-of-force` · trailing slash | 200 · 200 | both forms                          |
| `/JUSTICE`, `/countries/FRANCE`, `/Law-Enforcement`     | 200       | **meaningless locally — see below** |
| `/_not-found`                                           | 200       | see D3                              |

**The case-sensitivity result is invalid.** The machine's filesystem is APFS,
case-insensitive by default — `ls out/JUSTICE.html` resolves to `out/justice.html`. The
local server therefore _cannot_ return 404 for a wrong-case URL regardless of
configuration. Netlify's CDN is case-sensitive, so production will almost certainly 404
correctly, but **that must be confirmed, not assumed.**

Trailing-slash behaviour on Netlify is also genuinely different from `serve` and depends on
the `pretty_urls` setting, which `docs/deployment/netlify-strategy.md` requires be left
**off**. The canonical policy is unambiguous in the artefact — `trailingSlash: false`, and
every canonical tag is non-slashed — so a slashed URL that returns 200 would still
self-canonicalise correctly. Whether Netlify 301s, 200s or 404s the slashed form is a
production question.

---

## 9. Why the production CSP test cannot be substituted locally

The brief is right to insist this is production-only, and it is the single highest-value
check after launch.

`netlify.toml` sets `script-src 'self' 'unsafe-inline'`, and the `'unsafe-inline'` is
load-bearing: under `output: 'export'` there is no server to mint a per-request nonce, and
Next inlines its bootstrap and RSC flight payload into every page — **6,823 inline scripts**
in the current build, counted by `verify:output`. If the deployed CSP differs from the file
for any reason, React never hydrates, and the failure is **silent**: prerendered HTML still
renders and every link still works. Pages look fine.

That is exactly why "it rendered" is not evidence. After deployment, verify by _interaction_:
the mobile menu, the ecosystem drawer, and the cookie settings dialog all require hydration
and are the fastest way to detect a CSP break, plus a clean browser console and a header
comparison against `netlify.toml`. Steps 13 and 16–17 of the runbook cover this.

---

## 10. Defects

### P0 — unresolved

- **P0-1 — Legal configuration absent.** §2. Owner must supply.
- **P0-2 — No deployment access.** §3. Owner must perform the deployment.

Neither is a code defect. There are **no P0 defects in the artefact.**

### P1 — none

No P1 defect was found in the local gate.

### P2 — recorded, not fixed

- **D3 — `/_not-found` is served with HTTP 200 and canonicalises to the home page.**
  Next's App Router emits `out/_not-found.html` in addition to `out/404.html`. It is
  reachable at `/_not-found`, returns 200 on a static host, and its canonical is
  `https://justicecenterid.com` — the only duplicate canonical in the build.

  **Impact is low and bounded:** the page carries `noindex`, it is absent from the sitemap,
  it is not in the route registry, and nothing links to it. It is not fixed in this phase
  because doing so means either a redirect rule or a build-time deletion, and shipping an
  untested `netlify.toml` change immediately before a first deployment is the larger risk.
  Recommended fix after launch: a 301 from `/_not-found` to `/404` or removal of the file in
  a post-build step, with a regression test.

### Fixes applied this phase

None to application code. One tool added: `scripts/route-matrix.mjs` (§5), which is
deployment verification tooling rather than a product change.

---

## 11. Search Console readiness — prepared, NOT configured

Not configured. It cannot be, before the domain resolves.

When ready:

1. **Property type: Domain** — `justicecenterid.com`. A Domain property covers apex, `www`
   and both schemes in one, which suits a site whose canonical policy normalises everything
   to the apex.
2. **Verification: DNS TXT.** Preferred over the HTML-file method — it survives redeploys
   and does not depend on a file staying in `out/`. Add the TXT record Search Console
   supplies at the same time as the A/CNAME changes in §4, so DNS is touched once.
3. **Submit** `https://justicecenterid.com/sitemap.xml` (320 URLs).
4. Do **not** use the Indexing API for ordinary pages — it is for job postings and live
   streams only. Do not mass-submit individual URLs.
5. Expect "Discovered — currently not indexed" on day one. That is normal and is not a fault.

---

## 12. External source links

Not re-verified in this phase; no content changed since the pre-deployment phase, where
every source URL was verified at authoring time.

The standing rule remains, and it matters for anyone auditing the site later: **a 403 from
an official source is not a broken link.** `ohchr.org`, `echr.coe.int` and `rm.coe.int` all
refuse automated requests while serving normally to a browser — this is recorded in
`src/content/sources.ts` and is why the law-enforcement cluster cites a UNODC module that
quotes those instruments. Legitimate government and IGO sources must not be removed because
a bot received 403.

---

## 13. Summary

| Field                 | Value                                                                                                                                   |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Production base SHA   | `cfcbc7160154eaf86765826908b010249a2d7924`                                                                                              |
| Final production SHA  | **No production deployment exists**                                                                                                     |
| Rollback point        | **N/A** — nothing deployed. First deploy has no predecessor; the rollback target for the _next_ release is the first successful deploy. |
| Deployment ID         | **None**                                                                                                                                |
| Netlify site          | **Not created**                                                                                                                         |
| Production origin     | `https://justicecenterid.com` — **not serving; parked at Namecheap**                                                                    |
| Local gate            | **PASS** (2219 unit, 158 e2e, 320/320 routes, 337/337 matrix)                                                                           |
| Environment variables | **None required**                                                                                                                       |
| **Launch verdict**    | **NOT READY**                                                                                                                           |

### The two things standing between this artefact and launch

1. Supply the legal configuration (§2) into `SITE` in `src/lib/site.ts`.
2. Perform the deployment (§3, §4) following
   `docs/deployment/first-production-deployment.md`, then run
   `node scripts/route-matrix.mjs https://justicecenterid.com` and the production-only
   checks in §7.

The artefact itself is sound. No code change is required to make it deployable.
