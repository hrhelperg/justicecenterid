import type { ReactNode } from 'react';

/** Applies the long-form measure, rhythm, and link styling defined in globals.css. */
export function Prose({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`prose-body text-ink ${className}`}>{children}</div>;
}
