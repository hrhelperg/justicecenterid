import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SiteNav } from './SiteNav';
import { Wordmark } from './Wordmark';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur">
      <Container width="shell">
        <div className="relative flex min-h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center rounded-sm"
            aria-label={`JusticeCenterID — home`}
          >
            <Wordmark />
          </Link>
          <SiteNav />
        </div>
      </Container>
    </header>
  );
}
