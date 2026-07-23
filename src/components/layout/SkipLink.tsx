/**
 * The first focusable element on every page. Visually hidden until focused, then pinned
 * top-left on a solid background so it is legible over whatever is beneath it.
 */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:inline-flex focus:min-h-11 focus:items-center focus:rounded-md focus:border focus:border-line-strong focus:bg-surface focus:px-4 focus:py-2 focus:font-medium focus:text-ink"
    >
      Skip to main content
    </a>
  );
}
