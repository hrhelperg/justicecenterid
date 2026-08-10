# Cookie consent architecture

**Status:** implemented, armed, and deliberately not displayed.

Enforced by `tests/unit/consent.test.ts` (unit) and `e2e/global-layers.spec.ts` (browser).

---

## 1. The decision

JusticeCenterID loads **no** analytics, **no** marketing or advertising technology, **no**
embeds, **no** third-party fonts and **no** non-essential storage. That was true before
this phase and it is still true after it.

Under GDPR and the ePrivacy Directive, consent is required for **storing or accessing
information on a user's device**. This site does neither. So the consent layer ships in a
state we call _armed but not shown_:

- The full machinery exists — versioned record, centralised gate, preferences panel, and a
  persistent **Cookie settings** control in the footer of every page.
- The **Accept / Reject banner does not appear**, because there is nothing to accept.
- Registering one entry in `src/content/optional-technologies.ts` flips
  `hasOptionalTechnologies` and the banner arms itself on the next visit. **No component
  changes.**

### Why not just show a banner anyway

Three reasons, in order of weight:

1. **It would be inaccurate.** `/privacy` states that no cookies are set. A banner asking
   permission to set them contradicts the page.
2. **It trains readers to dismiss consent UI unread.** A prompt that appears when nothing
   is at stake devalues the prompt that appears when something is.
3. **The brief said so.** _"If the site currently has no analytics or marketing
   technologies: keep those categories disabled/unconfigured; explain that no optional
   tracking is active; do not manufacture cookies simply to populate the UI."_

The preferences panel is still reachable at any time, and states the position in plain
language rather than leaving the reader to infer it from an absent banner.

---

## 2. Module boundaries

```
src/content/optional-technologies.ts   the switch: what optional tech exists (empty)
src/lib/consent.ts                     THE boundary: the only module touching storage
src/components/consent/ConsentBoundary.tsx    banner + preferences dialog
src/components/consent/CookieSettingsLink.tsx footer control (dispatches an event)
src/lib/overlay.ts                     shared modal coordination
```

**`src/lib/consent.ts` is the only module in the codebase that reads or writes consent
state.** No component knows the storage key. The brief's requirement — _"do not scatter
localStorage checks throughout components"_ — is structural, not a convention: components
call `canUseAnalytics()` / `canUseMarketing()`, and the key is exported only under the
name `CONSENT_STORAGE_KEY_FOR_TESTS`.

---

## 3. The record

```jsonc
{
  "version": 1, // CONSENT_VERSION
  "necessary": true, // always; present so the record is self-describing
  "analytics": false,
  "marketing": false,
  "timestamp": "2026-08-10T12:34:56.789Z",
}
```

Stored under one key, `jcid-consent`, in `localStorage`.

**No identifier of any kind.** No user id, no session id, no fingerprint, no IP. Only the
three booleans, the schema version, and when the choice was made — the minimum needed to
honour the choice and to show the reader when they made it. A test asserts the exact key
set, so a field cannot be added without a failing test.

Writing this record is itself _strictly necessary_ processing: it exists only to remember
a preference the reader expressed, which is the textbook exemption. **Nothing is written
until the reader acts** — asserted in the browser by reading `localStorage` after a plain
page visit and expecting it to be empty.

### Versioning

`CONSENT_VERSION` is bumped when the **meaning** of a stored choice changes — a new
category, or a change in what an existing category covers. A record with a different
version is rejected by `parseConsent` and treated as _no choice made_, so the reader is
asked again rather than being held to a decision they never made about new technology.

---

## 4. Necessary-only is a default, not a fallback

Every read path that fails returns `analytics: false, marketing: false`:

| Situation                                      | Result         |
| ---------------------------------------------- | -------------- |
| No record                                      | necessary-only |
| Corrupt JSON                                   | necessary-only |
| `localStorage` throws (private mode, disabled) | necessary-only |
| Record from an older `CONSENT_VERSION`         | necessary-only |
| Record with `necessary` not `true`             | necessary-only |
| Record with a non-boolean flag                 | necessary-only |
| Record missing a timestamp                     | necessary-only |

**There is no branch in `consent.ts` that produces a permissive result without a stored
record explicitly saying so.** Each row above is a test.

---

## 5. The gate

```ts
canUseAnalytics(): boolean
canUseMarketing(): boolean
hasConsentFor(category): boolean
whenConsented(category, load): () => void   // the intended entry point
```

`whenConsented` runs `load` immediately if the category is already permitted, otherwise
subscribes and runs it if consent is given later in the same page view. **This is how a
future provider must be wired up**, because the only reference to the script then sits
inside a callback this function controls — making "the script executed before consent"
structurally impossible rather than merely against policy.

Tested: the callback does not run before consent, does not run after a rejection, does not
run for a category the reader did not accept, and runs exactly once when consent arrives.

---

## 6. UX and accessibility

- **No dark patterns.** _Accept all_ and _Reject non-essential_ are the same element, the
  same size and the same weight. Neither is a ghost button. A browser test compares their
  bounding boxes.
- **Rejection is never hidden** behind _Manage preferences_; it is a primary action in
  both the banner and the panel.
- **Nothing is pre-checked.** Optional toggles start off and stay off.
- **Not a wall.** The banner is a bottom-anchored `role="region"`, not a full-screen
  modal. Every word of every article is readable without interacting with it.
- **Reopenable anywhere** — the footer control is on every page.
- **Real controls.** Native checkboxes, not styled `div`s: keyboard behaviour and disabled
  announcement come free and correct.
- **Dialog semantics** on the preferences panel: `role="dialog"`, `aria-modal`, labelled
  by its heading, focus moved in on open, `Tab` trapped, `Escape` closes, focus returns to
  the control that opened it.
- **Safe areas** respected via `env(safe-area-inset-bottom)`.

### Hydration

Consent lives in `localStorage`, which does not exist during a static export.
`ConsentBoundary` uses **`useSyncExternalStore`** with a server snapshot of `null`, so the
prerendered HTML and the first client render agree and no mismatch is possible. The
snapshot is the **raw string**, not a parsed object — `getSnapshot` must be referentially
stable or React re-renders forever.

The alternative, a `mounted` flag set from an effect, reaches the same pixels via a second
render pass and is the cascading-render pattern React's lint rule rejects. It was the
first implementation, and it was replaced.

A `storage` event listener keeps two open tabs in agreement about a choice made in either.

---

## 7. Why there is no `/cookie-policy` route

Considered and rejected. `/privacy` already carries a dedicated _Cookies and local
storage_ section that states the full position, and the site sets no cookies. A separate
route would be a thin page restating one section of an existing page — the exact
cannibalization this repository's editorial rules prohibit.

The decision is revisited if optional technologies are ever registered, at which point a
per-technology table may justify its own route. `/cookie-policy` returns 404 today, which
is confirmed in the static HTTP matrix rather than assumed.

---

## 8. Adding an analytics provider later

1. Add a record to `OPTIONAL_TECHNOLOGIES` (id, name, category, provider, storage,
   purpose). The banner arms itself; the panel grows a real toggle.
2. Load the script **only** through `whenConsented('analytics', ...)`.
3. Add the provider's origin to `connect-src` / `script-src` in `netlify.toml` — and
   expect `tests/unit/csp.test.ts` to fail until you do, because it asserts that no fetch
   directive names an external origin.
4. Update `/privacy` **before** deploying, per the commitment already on that page.
5. Consider whether the change alters the meaning of an existing category. If it does,
   bump `CONSENT_VERSION`.
