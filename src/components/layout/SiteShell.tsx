import type { ReactNode } from 'react';
import { ConsentBoundary } from '@/components/consent/ConsentBoundary';
import { EcosystemBar } from '@/components/ecosystem/EcosystemBar';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';
import { SkipLink } from './SkipLink';

/**
 * Renders the landmark structure on every route, so landmarks are never a per-page
 * decision: skip link first, then the sticky chrome, then exactly one <main id="main">,
 * then footer, then the consent island.
 *
 * `tabIndex={-1}` is required, not decorative. Following an in-page link moves the *scroll*
 * position in every browser, but only moves keyboard focus if the target is focusable.
 * Without it the skip link scrolls past the header and leaves focus exactly where it was,
 * so the next Tab lands back in the navigation: the link appears to work visually while
 * failing the users it exists for (WCAG 2.2 SC 2.4.1).
 *
 * `outline-none` suppresses the ring on this programmatic focus target only. Every real
 * interactive element keeps its :focus-visible ring.
 *
 * ---------------------------------------------------------------------------
 * WHY THE ECOSYSTEM BAR AND THE HEADER SHARE ONE STICKY WRAPPER
 * ---------------------------------------------------------------------------
 * The obvious implementation — bar `sticky` at the top, header `sticky` at an offset —
 * requires the header's offset to equal the bar's rendered height. That equality holds at
 * exactly one text size. At 200% zoom (WCAG 2.2 SC 1.4.4) the bar grows and wraps while a
 * hard-coded offset does not, so the header docks on top of the bar and covers the
 * ecosystem controls — precisely the overlap the brief prohibits.
 *
 * One wrapper removes the arithmetic entirely: the two stick as a single block at whatever
 * height they happen to be. Sticky rather than fixed also keeps the chrome in normal flow,
 * so it reserves its own space — content cannot jump on load or hide underneath it.
 */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SkipLink />
      <div className="sticky top-0 z-ecosystem">
        <EcosystemBar />
        <SiteHeader />
      </div>
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>
      <SiteFooter />
      {/*
        Rendered last so it is last in the DOM order, and therefore last in the tab order,
        for readers who never open it.
      */}
      <ConsentBoundary />
    </>
  );
}
