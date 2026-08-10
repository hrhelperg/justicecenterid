/**
 * The first focusable element on every page. Visually hidden until focused, then pinned
 * top-left on a solid background so it is legible over whatever is beneath it.
 *
 * `z-skip` is the highest layer in the system, and it has to be: the ecosystem bar now
 * occupies the top of the viewport at the ecosystem layer, so the previous hard-coded
 * value (50, equal to that layer) would have rendered the skip link *behind* the bar it
 * exists to skip past — a control that is focusable but invisible, which is worse than
 * one that is absent (WCAG 2.2 SC 2.4.1, 2.4.11).
 *
 * NOTE: layer names are written here as prose, never as bare utility tokens. Tailwind
 * scans this file as plain text, so naming a utility in a comment is enough to emit its
 * CSS rule — which is how a dead `z-index: 50` declaration got into the stylesheet on the
 * first pass. See docs/architecture/overlay-hierarchy.md.
 */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-skip focus:inline-flex focus:min-h-11 focus:items-center focus:rounded-md focus:border focus:border-line-strong focus:bg-surface focus:px-4 focus:py-2 focus:font-medium focus:text-ink"
    >
      Skip to main content
    </a>
  );
}
