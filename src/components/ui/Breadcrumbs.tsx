import Link from 'next/link';
import { buildBreadcrumbs } from '@/lib/breadcrumbs';

/**
 * Trails are derived from the route registry, never hand-written.
 * The matching BreadcrumbList structured data is emitted by the page's JsonLd.
 */
export function Breadcrumbs({ path }: { path: string }) {
  const crumbs = buildBreadcrumbs(path);
  if (crumbs.length < 2) return null;

  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-ink-subtle">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden="true" className="text-line-strong">
                  /
                </span>
              )}
              {isLast ? (
                <span aria-current="page" className="text-ink-muted">
                  {crumb.label}
                </span>
              ) : (
                <Link href={crumb.href} className="link-inline">
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
