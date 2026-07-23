import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SECTIONS } from '@/content/sections';

// The explicit override is required: without it the root layout's `index, follow` is emitted
// on 404.html alongside Next's automatic noindex, which would advertise the error page as
// indexable. Two noindex tags is untidy; an indexable 404 is a defect.
export const metadata: Metadata = {
  title: 'Page not found',
  description: 'The page you requested does not exist on JusticeCenterID.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container width="wide">
      <div className="max-w-measure py-20">
        <p className="text-sm font-medium tracking-wide text-brand uppercase">Error 404</p>
        <h1 className="mt-3 text-3xl text-ink">We could not find that page</h1>
        <p className="mt-4 text-lg text-ink-muted">
          The address may be mistyped, or the page may never have existed. We do not publish
          placeholder pages, so a topic we have not researched has no URL at all.
        </p>
        <h2 className="mt-10 text-xl text-ink">Knowledge sections</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <Link href={`/${section.id}`} className="link-inline">
                {section.title}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <Link href="/" className="link-inline font-medium">
            Return to the home page
          </Link>
        </p>
      </div>
    </Container>
  );
}
