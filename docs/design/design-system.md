# Design system

## Direction

Civic, editorial, calm. The interface should read as a serious reference publication — clear
information hierarchy, generous spacing, restrained colour, strong typography — and must never
read as an official state website, a security product, or a crime broadcast.

### Deliberately avoided

Aggressive or tactical imagery · militaristic language and iconography · emergency-light
colour (flashing red/blue) · dark "crime show" surfaces · heavy black-and-red · patriotic
styling tied to any country · badge, shield, seal, crest, eagle, laurel, star, or
scales-of-justice devices · courtroom clichés as decoration · generic AI gradients · oversized
hero type · cluttered card grids · animation as decoration.

The prohibition on badges and seals is not stylistic. It is the mechanism that prevents the
interface from implying official status, and it extends to the wordmark, the favicon, and the
Open Graph card.

### Deliberately pursued

Light neutral surfaces · one restrained navy as the brand anchor · a single accessible link
blue · muted civic gold used sparingly for editorial state · subtle borders rather than
shadows · a comfortable measure for long prose · unambiguous focus states · spacing as the
primary hierarchy device.

---

## Colour tokens

Defined once in `src/app/globals.css` inside Tailwind v4's `@theme` block, so a single
declaration produces both the CSS custom property and the corresponding Tailwind utility. No
colour is written as a literal hex anywhere else in the codebase.

Every ratio below is measured, not estimated. `tests/unit/contrast.test.ts` parses the real
token values out of `globals.css` and asserts each pair, so the table cannot drift from the
implementation.

### Surfaces

| Token | Value | Role |
| --- | --- | --- |
| `--color-surface` | `#ffffff` | Page background, cards |
| `--color-surface-raised` | `#f7f9fb` | Sections needing separation without a border |
| `--color-surface-sunken` | `#eef2f6` | Inset panels, table headers |
| `--color-surface-inverse` | `#12283f` | Footer, occasional emphasis band |

### Text

| Token | Value | On surface | On raised | Role |
| --- | --- | --- | --- | --- |
| `--color-ink` | `#12181f` | 17.85 | 16.92 | Body text, headings |
| `--color-ink-muted` | `#4a5563` | 7.58 | 7.18 | Secondary text, captions |
| `--color-ink-subtle` | `#5b6675` | 5.83 | 5.53 | Metadata, labels |
| `--color-ink-inverse` | `#ffffff` | 14.99 on inverse | — | Text on `surface-inverse` |
| `--color-ink-inverse-muted` | `#c7d3e0` | 9.87 on inverse | — | Secondary text on inverse |

All five clear AA for normal text (4.5:1). The lowest, `ink-subtle` at 5.83:1, is used only
for metadata that is never the sole carrier of meaning.

### Brand and accent

| Token | Value | Contrast | Role |
| --- | --- | --- | --- |
| `--color-brand` | `#1b3a5c` | 11.63 on surface | Wordmark, section eyebrows |
| `--color-brand-deep` | `#12283f` | 14.99 with white | Inverse surface |
| `--color-accent` | `#1f5f96` | 6.70 on surface | Links, active navigation |
| `--color-accent-strong` | `#134a78` | 9.22 on surface | Link hover, focus ring |
| `--color-accent-soft` | `#e8f0f7` | 15.51 with ink | Active nav background, callout fill |
| `--color-accent-inverse` | `#b9d4ec` | 9.77 on inverse | Links on inverse surface |

### Editorial state

Used for review status, uncertainty, and scope notices. Never used to signal danger or
urgency.

| Token | Value | Contrast | Role |
| --- | --- | --- | --- |
| `--color-gold` | `#7a5c14` | 6.23 on surface | Editorial-state text, uncertainty label |
| `--color-gold-soft` | `#f5efdf` | 15.55 with ink | Uncertainty and needs-update callout fill |
| `--color-affirm` | `#255f3a` | 7.56 on surface | Fact-checked state |
| `--color-affirm-soft` | `#e9f2ec` | — | Fact-checked badge fill |
| `--color-alert` | `#a8321f` | 6.69 on surface | Correction notices, disputed claims |
| `--color-alert-soft` | `#fdf3f1` | 16.38 with ink | Correction callout fill |

`--color-alert` is a deep brick rather than a signal red, and appears only in editorial
contexts. There is no emergency colour in the palette, because there is no emergency content.

### Lines

| Token | Value | Contrast on surface | Role |
| --- | --- | --- | --- |
| `--color-line` | `#dde3ea` | 1.29 | Decorative separation only — never the sole indicator of a boundary that carries meaning |
| `--color-line-strong` | `#7f8b9a` | 3.46 | Interactive and meaningful boundaries. Meets the 3:1 non-text contrast requirement of WCAG 2.2 SC 1.4.11 |
| `--color-line-inverse` | `#3c5772` | — | Separation on inverse surface |

The two-tier split exists because a single mid-grey either fails 1.4.11 or looks heavy on
every decorative rule. Any border that communicates state, grouping, or an interactive target
uses `line-strong`.

### Colour is never the only signal

Every state that uses colour also uses text, an icon, or a border weight: review-status badges
carry their label in words; uncertainty callouts carry a heading; active navigation carries
both a background and a bottom border; links are underlined, not merely coloured.

### Dark mode

Not implemented in this phase. `color-scheme: light` is declared explicitly so browsers do not
auto-invert form controls and scrollbars into an untested combination. The tokens are already
semantic rather than literal (`surface`, `ink`, `line` rather than `white`, `grey-900`), so a
dark theme is a second token block, not a refactor. Deferred rather than omitted, and recorded
as such.

---

## Typography

### Font stacks

System fonts only. No web font is loaded, which removes an external request, a privacy
exposure, a render-blocking dependency, and font-swap layout shift.

```css
--font-sans: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto,
             "Helvetica Neue", Arial, "Noto Sans", sans-serif,
             "Apple Color Emoji", "Segoe UI Emoji";
--font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas,
             "Liberation Mono", monospace;
```

Sans throughout, including headings. A serif display face would read more "legal", which is
the association the brief asks us to avoid; Microsoft-like clarity is the target.

The stack includes `Noto Sans` because the platform names institutions in their own languages
and needs broad script coverage without loading anything.

### Scale

Fluid where it matters, fixed where fluidity would cause reflow surprises.

| Token | Size | Line height | Use |
| --- | --- | --- | --- |
| `--text-xs` | `0.8125rem` | 1.5 | Badges, table captions |
| `--text-sm` | `0.875rem` | 1.55 | Metadata, footnotes, footer |
| `--text-base` | `1rem` | 1.65 | Body |
| `--text-lg` | `1.125rem` | 1.6 | Lead paragraphs, summaries |
| `--text-xl` | `1.25rem` | 1.5 | `h3` |
| `--text-2xl` | `1.5rem` | 1.35 | `h2` |
| `--text-3xl` | `clamp(1.75rem, 1.4rem + 1.4vw, 2.25rem)` | 1.25 | Page `h1` |
| `--text-4xl` | `clamp(2rem, 1.5rem + 2.2vw, 2.75rem)` | 1.15 | Home `h1` only |

Body line height of 1.65 is set for a long-form, second-language readership. Headings use
`text-wrap: balance`; lead paragraphs use `text-wrap: pretty`.

The largest type on the site is 2.75rem, and it appears once. There is no oversized hero.

### Measure

`--measure-prose: 68ch`. Long-form content is constrained to it. Tables, source lists, and
comparison layouts are permitted to exceed it inside their own container.

### Weights

400 body, 500 UI labels and navigation, 600 headings. No weight above 600 — heavier weights
read as marketing.

---

## Spacing, radius, elevation

- **Spacing**: 4 px base. `--space-1` (4) through `--space-24` (96). Vertical rhythm is
  spacing-driven; there are no decorative dividers between every block.
- **Radius**: `--radius-sm` 4 px, `--radius-md` 6 px, `--radius-lg` 10 px. Nothing is fully
  rounded; pill shapes read as consumer product.
- **Elevation**: one shadow token, `--shadow-sm`, used sparingly. Separation is normally
  achieved with `--color-line` or a change of surface. There is no floating-card aesthetic.

## Layout

| Container | Width | Use |
| --- | --- | --- |
| `--container-prose` | `44rem` | Guide and policy body text |
| `--container-wide` | `72rem` | Section hubs, listings, tables |
| `--container-full` | `80rem` | Header and footer inner width |

Gutters: 20 px below 640 px, 32 px to 1024 px, 40 px above. Implemented once in `Container`;
no page sets its own horizontal padding.

Layouts are single-column by default. Multi-column appears only where the content is genuinely
parallel (footer navigation, hub listings, comparison tables) and collapses to one column below
768 px.

---

## Components

Server components unless marked otherwise.

| Component | Purpose | Notes |
| --- | --- | --- |
| `SiteShell` | Renders skip link, header, `<main id="main">`, footer | Every route uses it; landmarks are not a per-page decision |
| `SkipLink` | First focusable element on every page | Visually hidden until focused, then pinned top-left with a solid background |
| `SiteHeader` | Wordmark + primary navigation | Sticky; desktop nav is plain links with no JavaScript |
| `MobileNav` | Disclosure navigation below 900 px | **The only client component.** `aria-expanded`, `aria-controls`, focus moved into the panel on open and restored on close, `Escape` closes, background scroll locked |
| `SiteFooter` | Four-column map, independence statement, legal line | On `surface-inverse` |
| `Container` | Width + gutters | Three variants; the only place horizontal padding is defined |
| `PageIntro` | `h1`, lead paragraph, eyebrow, breadcrumbs slot | Guarantees one `h1` per page |
| `SectionHeading` | `h2`/`h3` with optional description and anchor | Anchor links are `aria-label`led |
| `Prose` | Long-form typography scope | Applies measure, rhythm, and link styling |
| `Breadcrumbs` | Trail + `BreadcrumbList` JSON-LD | `<nav aria-label="Breadcrumb">`, current page is `aria-current="page"` |
| `Card` | Linked summary block | Used only where items are genuinely parallel. Whole card is not a link — the title is, so link text stays descriptive |
| `LinkButton` | Prominent navigation affordance | An `<a>`, never a `<button>`, because it navigates |
| `Badge` | Short status label | Always carries its own text |
| `Callout` | `note` · `scope` · `analysis` · `uncertainty` · `disputed` · `safety` | Each has a visible heading; colour is never the only differentiator |
| `DefinitionList` | Term/description pairs | Real `<dl>`/`<dt>`/`<dd>` |
| `BlockRenderer` | Renders the typed `Block` union | Resolves `[text](/route)` links against the route registry |
| `SourceList` | Renders a page's sources | Title, publisher, type label, date, link |
| `ReviewMeta` | Status, last updated, last reviewed | `<time datetime>` for machine readability |
| `RelatedTopics` | Cross-links | Descriptive link text, no "read more" |
| `CoverageNotice` | States what a page does not yet cover | Used on hubs whose entities are not researched |
| `MisconceptionList` | Claim/reality pairs | Semantic list, not a table |
| `JsonLd` | Structured data | Serialises typed builders |

---

## Interaction states

- **Focus**: `outline: 2px solid var(--color-accent-strong)` with `outline-offset: 2px`, via
  `:focus-visible`. On the inverse footer the ring switches to white. `outline: none` without
  a replacement is forbidden and is caught in review. Focus ring contrast is 9.22:1 on light
  surfaces and 14.99:1 on inverse.
- **Links in prose**: underlined at rest with a 0.08em offset; on hover the colour deepens to
  `accent-strong` and the underline thickens. Underlines are never removed — colour alone
  cannot indicate a link.
- **Navigation links**: 500 weight; the active section carries `accent-soft` background, a
  2 px bottom border, and `aria-current="page"`.
- **Hit targets**: minimum 44 × 44 px for every interactive element, meeting WCAG 2.2 SC 2.5.8
  (Target Size) with margin.
- **Transitions**: 120 ms on colour only. Nothing moves, scales, or fades in on scroll.

## Motion

There is almost none, by design. What exists is colour transition on hover and the mobile
panel disclosure. Under `prefers-reduced-motion: reduce`, all transitions and animations are
reduced to 0.01 ms globally in `globals.css`, and `scroll-behavior` returns to `auto`.

---

## Accessibility commitments

Target: **WCAG 2.2 AA**.

| Requirement | Implementation |
| --- | --- |
| Semantic HTML | Real landmarks (`header`, `nav`, `main`, `footer`), real lists, real `dl`, real `time` |
| Skip link | First focusable element, rendered by `SiteShell` on every route |
| Landmarks | One `main` per page with `id="main"`; each `nav` has a distinct `aria-label` |
| Keyboard | Every interactive element reachable and operable; no keyboard trap; mobile panel manages and restores focus |
| Focus visibility | Token-level, 2 px, ≥ 3:1 against every adjacent surface (SC 2.4.11, 2.4.13) |
| Heading order | Exactly one `h1`; no skipped levels; asserted in Playwright |
| Contrast | All text ≥ 4.5:1; meaningful boundaries ≥ 3:1; asserted in `tests/unit/contrast.test.ts` against the real token values |
| Colour independence | Every colour-coded state also carries text |
| Link text | Descriptive and unique in context; no "click here" or bare "read more" |
| Target size | ≥ 44 × 44 px (SC 2.5.8) |
| Reduced motion | Honoured globally |
| Responsive text | Fluid headings; no horizontal scroll or content loss at 320 px width or 200 % zoom (SC 1.4.10) — asserted in Playwright |
| Language | `lang="en"` on `html`; `lang` set inline on non-English institution names |
| Alt text | Governed by [image-policy.md](../editorial/image-policy.md); decorative images do not exist on this platform |

### Verified in Playwright

Skip-link focus and activation · keyboard reachability of primary navigation · mobile-menu
open, focus move, `Escape` close, and focus restoration · single `h1` and heading order on
representative pages · no horizontal overflow at 320 px · presence of the not-legal-advice
statement on content pages.
