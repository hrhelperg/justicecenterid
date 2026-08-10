# The global overlay hierarchy

Two global UI layers were added in the pre-deployment phase — the HELPERG ecosystem bar
and the consent UI — on top of a sticky header and a skip link. Four things now compete
for the top of the viewport. This document is the contract between them.

Enforced by `tests/unit/layers.test.ts` and `e2e/global-layers.spec.ts`.

---

## 1. The layers

Declared once, as `@theme` tokens in `src/app/globals.css`, so no component invents a
number:

| Token                 | Value | What sits here                                  |
| --------------------- | ----- | ----------------------------------------------- |
| `--z-index-content`   | 0     | Page content, in normal flow                    |
| `--z-index-nav`       | 40    | The sticky site header                          |
| `--z-index-ecosystem` | 50    | The HELPERG utility bar (outermost chrome)      |
| `--z-index-consent`   | 60    | The consent banner — bottom-anchored, non-modal |
| `--z-index-overlay`   | 70    | Modal dialogs and their backdrops               |
| `--z-index-skip`      | 80    | The skip link                                   |

`z-content` is declared but currently unused: it exists so that "in flow, above nothing"
has a name if a component ever needs to say so explicitly.

### Why this order

- **Ecosystem above nav.** The bar is the outermost chrome; the header scrolls up and
  docks beneath it. Reversing them would let the masthead cover the ecosystem controls.
- **Consent above both bars, but they never collide.** The consent banner is
  bottom-anchored and the two bars are top-anchored, so the ordering only matters if a
  viewport is short enough for them to meet. It outranks them so that, when that happens,
  the thing asking for a decision is not the thing hidden.
- **Overlay above consent.** A modal must cover the banner that opened it.
- **Skip above everything.** Non-negotiable. The skip link is the first focusable control
  on the page (WCAG 2.2 SC 2.4.1) and it renders at the top-left — exactly where the
  ecosystem bar now sits. At any lower layer it would be focusable but painted behind the
  chrome, which is worse than absent: the user tabs to a control they cannot see.

**This was a real bug, not a hypothetical.** `SkipLink` previously used a hard-coded
`z-index: 50`, identical to the value the ecosystem layer took. It was moved to `z-skip`
in the same commit that introduced the bar.

---

## 2. The one-modal rule

**At most one modal overlay is open at any time.**

Two independent client islands can open one — the ecosystem drawer
(`EcosystemMenu`) and the consent preferences panel (`ConsentBoundary`). They are
deliberately unaware of each other: neither imports the other, and either can be deleted
without touching the other.

That independence creates exactly one hazard, and `src/lib/overlay.ts` removes it. Two
simultaneously-open dialogs would mean:

1. **Two focus traps** competing for `Tab`, with unpredictable results.
2. **Two Escape handlers**, so one keypress could close both or neither.
3. **A body-scroll deadlock.** Each would capture `document.body.style.overflow` on open
   and restore it on close. If B opens while A is open, B captures `'hidden'` as the
   "original" value and writes it back on close — leaving the page permanently
   unscrollable after both are shut.

### How it is enforced

Coordination is by DOM event rather than shared state, so neither island needs a provider,
a context, or an import of the other:

- `announceOverlayOpen(id)` — fired when an overlay opens.
- `onOverlayDisplaced(id, fn)` — every overlay listens; if the announced id is not its
  own, it closes itself.
- `lockScroll()` — **reference-counted**, with the original value captured on the first
  lock only, and a single restore when the count returns to zero. This is the direct fix
  for hazard 3, and it holds even if the one-modal rule were somehow violated.
- `trapFocus(container)` — wraps `Tab` at the container's edges rather than rewriting
  `tabindex`, preserving the document's natural focus order inside the dialog.

`e2e/global-layers.spec.ts` tests the adversarial case directly: it opens the ecosystem
drawer, then dispatches the consent-open event, and asserts that exactly **one** dialog is
present afterwards.

---

## 3. Sticky, not fixed

The ecosystem bar and the site header share **one** `sticky top-0` wrapper in `SiteShell`.

The obvious alternative — bar sticky at the top, header sticky at an offset equal to the
bar's height — is wrong, and the reason is worth recording because it is not obvious:

> A CSS media query resolves `rem` against the browser's **initial** font size, not the
> root element's computed size. A breakpoint therefore does not move when a reader sets
> 200% text.

So a hard-coded `top-9` offset holds at exactly one text size. At 200% the bar grows and
wraps, the offset does not, and the header docks on top of the bar — covering the
ecosystem controls, which is precisely what the brief prohibits. One wrapper removes the
arithmetic: the two stick as a single block at whatever height they happen to be.

The same fact caused a second, separate bug — the rail's `hidden nav:block` did not stop
it rendering at 200%, and it overflowed the document by 51px. See
`docs/audits/law-enforcement-wave-1-qa.md` §4.

**Sticky rather than fixed** because sticky elements stay in normal flow: they reserve
their own space, so content cannot jump on load and cannot hide underneath them. This is
asserted by bounding-box comparison in the e2e suite rather than assumed from the CSS
keyword.

---

## 4. Visual separation

The brief requires that the ecosystem bar and the consent banner are never mistaken for
each other. They differ on every available axis:

|             | Ecosystem bar            | Consent UI                          |
| ----------- | ------------------------ | ----------------------------------- |
| Anchor      | Top                      | Bottom                              |
| Behaviour   | Sticky, in flow          | Fixed, overlaid                     |
| Persistence | Permanent                | Dismissed by a choice               |
| Modality    | Non-modal                | Banner non-modal; preferences modal |
| Border      | `border-line` (hairline) | `border-line-strong`                |
| Surface     | `surface-raised`         | `surface`                           |
| Type scale  | `text-xs`                | `text-sm`                           |
| Actions     | Navigation only          | Decision buttons                    |

---

## 5. Rules for adding a layer

1. Add a token to `@theme` in `globals.css`, positioned in the documented order.
2. Update the table above and the order assertion in `tests/unit/layers.test.ts`.
3. If it is modal, route it through `announceOverlayOpen` / `onOverlayDisplaced` /
   `lockScroll` / `trapFocus`. Do not hand-roll any of the four.
4. Never write a bare or arbitrary z-index utility. The layers test greps application
   source and fails on anything that is not a declared layer name.

> **Naming layers in comments.** Tailwind scans source files as plain text for class
> candidates, so writing a utility name inside a comment is enough to emit its CSS rule.
> A doc comment mentioning the old hard-coded value produced a dead `z-index: 50`
> declaration in the stylesheet on the first pass. Refer to layers by name in prose.
