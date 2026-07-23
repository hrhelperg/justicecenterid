import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { FOOTER_NAV } from '@/lib/navigation';
import { SITE } from '@/lib/site';
import { Wordmark } from './Wordmark';

export function SiteFooter() {
  return (
    <footer className="on-inverse mt-20 border-t border-line-inverse bg-surface-inverse text-ink-inverse-muted">
      <Container width="shell">
        <div className="py-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {FOOTER_NAV.map((group) => (
              <nav key={group.heading} aria-label={group.heading}>
                <h2 className="text-sm font-semibold tracking-wide text-ink-inverse uppercase">
                  {group.heading}
                </h2>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={`${group.heading}-${item.href}`}>
                      <Link href={item.href} className="text-sm">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="mt-12 border-t border-line-inverse pt-8">
            <Wordmark inverse />
            <p className="mt-3 max-w-measure text-sm">{SITE.independenceNotice}</p>
            <p className="mt-3 max-w-measure text-sm">{SITE.legalNotice}</p>
            <p className="mt-3 max-w-measure text-sm">{SITE.emergencyNotice}</p>
            <p className="mt-6 text-sm text-ink-inverse-muted">
              {SITE.name} — {SITE.descriptor}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
