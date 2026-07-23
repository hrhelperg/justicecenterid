import Link from 'next/link';
import type { ReactNode } from 'react';

/**
 * An anchor, never a button, because it navigates.
 * Minimum target size 44px (WCAG 2.2 SC 2.5.8).
 */
export function LinkButton({
  href,
  children,
  variant = 'primary',
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  const base =
    'inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-base font-medium transition-colors';
  const styles =
    variant === 'primary'
      ? 'bg-brand text-ink-inverse hover:bg-brand-deep'
      : 'border border-line-strong bg-surface text-ink hover:bg-surface-sunken';

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
