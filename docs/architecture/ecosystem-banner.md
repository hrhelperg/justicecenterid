# The HELPERG ecosystem banner

JusticeCenterID is one product in a wider portfolio. The banner is how the site says so
without stopping being a JusticeCenterID page.

Design direction: **Variant 7 — company / ecosystem timeline.**

Enforced by `tests/content/ecosystem.test.ts` and `e2e/global-layers.spec.ts`.

---

## 1. What the registry claims, and what it refuses to claim

`src/content/ecosystem.ts` holds 29 owner-supplied records. Being listed means **exactly
two things**:

1. the owner of this repository supplied the name and the URL, and
2. on `verifiedOn` that URL was fetched and returned a page whose own `<title>` identifies
   that product — recorded verbatim in `confirmedTitle`.

It does **not** claim any product is launched, active, maintained, commercially available,
or operated by the same legal entity as any other. None of that was independently
established, so none of it is asserted anywhere — not in the data, not in the types, not
in the UI:

- **`status` has no `active` member.** The vocabulary is `current-site` | `listed` |
  `unverified`. `listed` means "supplied and URL-verified" and nothing more.
- **There are no authored descriptions.** `confirmedTitle` holds the observed page title
  as _evidence_. The UI never renders it as a tagline. Writing marketing copy about a
  product whose scope was not researched would be inventing claims.
- **The timeline carries order, not dates.** No launch dates were supplied. Inventing them
  to make a timeline look like a timeline is exactly the fabrication the brief forbids, so
  `timelineOrder` is a sequence and the UI presents an ordered rail with no dates on it.
- **An unverified record never becomes a link.** `productHref()` returns `undefined` for
  it and the drawer renders it as text reading "Link not available". A test asserts this.

The verification vocabulary deliberately mirrors `SourceRecord.verificationMethod`: the
editorial standard the platform applies to its sources is the standard it applies to its
own product links.

### Verification performed (2026-08-10)

All 22 websites and all 13 store listings were **content-confirmed**, not merely
status-probed: each was fetched with a browser user-agent, followed through redirects, and
its `<title>` read back and recorded.

One record is `unverified`: **JusticeCenterID itself**, because the canonical domain does
not resolve yet — the site has not been deployed. That is honest rather than awkward, and
it does not affect identity resolution (see §2).

---

## 2. How the site knows which product it is

The registry record for the current product carries **no `canonicalUrl`**.

The origin comes from `SITE.origin` via `resolveCurrentProduct()` in `src/lib/ecosystem.ts`.
This is not a stylistic choice:

- `src/lib/site.ts` is the single place the canonical origin is written, and ESLint's
  `no-restricted-syntax` rule forbids the literal anywhere else — because a second copy of
  a canonical URL is how canonical tags drift from sitemaps.
- So "the current site resolves itself from the canonical domain" is **true by
  construction** rather than by a duplicated string that happens to match.
- `resolveCurrentProduct()` **throws** if the record re-introduces its own `canonicalUrl`,
  if the id is missing from the registry, or if its status is not `current-site`.

Identity is therefore never derived from `window.location`. A localhost dev server, a
Netlify deploy preview and the live apex domain all identify the running site as
JusticeCenterID — which is the correct answer, because they are the same product.

---

## 3. Components

```
EcosystemBar.tsx     SERVER — identity, ordered rail, current-product indicator
EcosystemMenu.tsx    CLIENT — the drawer; the only interactive part
product-view.ts      shared mapping from registry records to rendered views
```

Only the drawer's open/closed state is client-side. The bar, the rail and the
current-product marker are static HTML on all 320 routes.

### The payload decision

`EcosystemMenu` **imports** the registry rather than receiving it as a prop. That inverts
the rule `SiteNav` documents ("no content module in the client bundle"), deliberately and
with measurements.

This is a static export of 320 routes, and Next emits the RSC payload for every route as a
set of `.txt` files — **2,756 of them, ~45 MB, roughly 8.7 per route**. A prop on a client
component is serialised into that payload, so a ~4 KB product list gets written to disk
about 2,750 times and re-shipped on every client-side navigation.

Measured, on this repository:

| Approach               | Shared JS | Static output |
| ---------------------- | --------- | ------------- |
| Registry as a **prop** | 652,141 B | 78 MB         |
| Registry **imported**  | 663,309 B | 70 MB         |

**+11 KB in a chunk cached under `immutable` bought back ~8 MB of static output and ~6 MB
of RSC payload.** The rule exists to keep the _large_ content registries out of the
browser; this registry is 29 short records with no dependencies, and the arithmetic runs
the other way. `ConsentBoundary` imports its (empty) technology registry for the same
reason.

---

## 4. Layout and behaviour

- **Sticky, not fixed.** The bar and the site header share one `sticky top-0` wrapper, so
  they reserve their own space and nothing jumps or hides beneath them. Full reasoning in
  `docs/architecture/overlay-hierarchy.md` §3.
- **Desktop:** HELPERG identity · ordered rail of featured products with the current one
  marked · "All products" disclosure.
- **Mobile:** identity and disclosure only. The rail is `hidden nav:block`, so the brief's
  "no horizontally overflowing timeline on mobile" is met by not rendering a rail there
  rather than by letting one scroll sideways.
- **The rail wraps** (`flex-wrap` + `min-w-0`). Hiding it at a breakpoint is not
  sufficient, because a media query resolves `rem` against the browser's initial font
  size — at 200% text the breakpoint does not move and the rail stayed rendered, overflowing
  the document by 51px. Wrapping keeps every node visible and focusable; clipping would
  have traded a reflow failure for a focus-visibility one.
- **Drawer:** right-side sheet, full height, `role="dialog"` + `aria-modal`, focus moved to
  Close on open, `Tab` trapped, `Escape` closes, focus returns to the trigger, body scroll
  locked through the shared reference-counted coordinator, safe-area insets respected.
- **External links:** `target="_blank"` with `rel="noopener noreferrer"` and a visually
  hidden "(opens in a new tab)", satisfying WCAG 2.2 SC 3.2.5.

---

## 5. Visual intent

A corporate utility layer, not a promotion: one type size, no colour beyond the existing
tokens, no animation, no auto-scrolling, no marquee, no dismissal, no imagery.
JusticeCenterID stays visually primary — the bar sits above the masthead and is
deliberately smaller, lighter and lower-contrast than it.

It must never be mistaken for the consent banner. The two differ on every axis; the table
is in `docs/architecture/overlay-hierarchy.md` §4.

---

## 6. Why there is no `/ecosystem` route

Considered and not created in this phase. The brief conditioned it on the registry
containing "enough legitimate products to justify it" — which it does — but a useful
`/ecosystem` page needs something to _say_ about each product, and the registry
deliberately holds no descriptions, no dates, no statuses beyond "listed", and no company
history. A page built from it today would be a list of names and links, which the drawer
already is.

Creating it would also invite exactly the fabrication the registry refuses: launch dates,
user counts, market position, a founding narrative.

**Revisit when** the owner supplies verified per-product descriptions and, if they exist,
real launch dates. `/ecosystem` returns 404 today, confirmed in the static HTTP matrix.

---

## 7. Adding or changing a product

1. Append a record to `ECOSYSTEM_PRODUCTS` with a unique `id` and a unique `timelineOrder`.
2. **Fetch the URL and record the `<title>` you actually got** in `confirmedTitle`, with
   `verificationStatus: 'content-confirmed'` and today's date in `verifiedOn`.
3. If the URL cannot be confirmed, set `status: 'unverified'` and omit the URL. Do not
   guess a domain. The drawer will render the name as text.
4. A mobile app gets `iosUrl` / `androidUrl` and **no** `canonicalUrl` — a store-listed app
   has no website, and inventing one is the failure mode this registry exists to prevent.
5. Set `featured: true` only if it belongs on the desktop rail; the tests cap the rail at
   eight entries so it cannot grow until it overflows.
6. Run `npm test` — the registry suite checks uniqueness of ids, orders, names and URLs,
   store hostnames, and that every listed product has a link and every unverified one
   does not.
