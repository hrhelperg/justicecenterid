import type { ReactNode } from 'react';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';
import { SkipLink } from './SkipLink';

/**
 * Renders the landmark structure on every route, so landmarks are never a per-page
 * decision: skip link first, then header, then exactly one <main id="main">, then footer.
 *
 * `tabIndex={-1}` is required, not decorative. Following an in-page link moves the *scroll*
 * position in every browser, but only moves keyboard focus if the target is focusable.
 * Without it the skip link scrolls past the header and leaves focus exactly where it was,
 * so the next Tab lands back in the navigation: the link appears to work visually while
 * failing the users it exists for (WCAG 2.2 SC 2.4.1).
 *
 * `outline-none` suppresses the ring on this programmatic focus target only. Every real
 * interactive element keeps its :focus-visible ring.
 */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
