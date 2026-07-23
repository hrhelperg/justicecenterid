import Link from 'next/link';
import type { ReactNode } from 'react';

/**
 * The whole card is deliberately NOT a link. The title is, so link text stays descriptive
 * and screen-reader users get a meaningful link rather than the card's entire contents.
 */
export function Card({
  href,
  title,
  children,
  footer,
}: {
  href: string;
  title: string;
  children?: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <article className="flex h-full flex-col rounded-md border border-line bg-surface p-5 transition-colors hover:border-line-strong">
      <h3 className="text-lg font-semibold">
        <Link href={href} className="link-inline">
          {title}
        </Link>
      </h3>
      {children && <div className="mt-2 text-ink-muted">{children}</div>}
      {footer && <div className="mt-4 pt-3 text-sm text-ink-subtle">{footer}</div>}
    </article>
  );
}
