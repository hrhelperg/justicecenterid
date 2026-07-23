import type { ReactNode } from 'react';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';
import { SkipLink } from './SkipLink';

/**
 * Renders the landmark structure on every route, so landmarks are never a per-page
 * decision: skip link first, then header, then exactly one <main id="main">, then footer.
 */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
