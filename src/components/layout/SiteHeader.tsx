import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PRIMARY_NAV } from '@/lib/navigation';
import { SiteNav } from './SiteNav';
import { Wordmark } from './Wordmark';

/*
 * Positioning moved to the shared sticky wrapper in SiteShell, which now carries both this
 * header and the ecosystem bar as one block. Keeping `sticky top-0` here as well would pin
 * the header to the top of that wrapper — i.e. underneath the bar — instead of below it.
 * `relative z-nav` keeps the mobile disclosure panel above page content without
 * reintroducing a second sticky context.
 */
export function SiteHeader() {
  return (
    <header className="relative z-nav border-b border-line bg-surface/95 backdrop-blur">
      <Container width="shell">
        <div className="relative flex min-h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center rounded-sm"
            aria-label={`JusticeCenterID — home`}
          >
            <Wordmark />
          </Link>
          {/*
            PRIMARY_NAV is resolved here, in a server component, and handed to the client
            island as a prop. If SiteNav imported it directly it would pull
            lib/navigation → content/sections into the client bundle.
          */}
          <SiteNav items={PRIMARY_NAV} />
        </div>
      </Container>
    </header>
  );
}
