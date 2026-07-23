import type { ReactNode } from 'react';

/**
 * Headings describe content. They are never used for size, and never contain a call to
 * action. `level` must not skip a level from its parent — Playwright asserts heading order.
 */
export function SectionHeading({
  level = 2,
  id,
  children,
  description,
}: {
  level?: 2 | 3;
  id?: string;
  children: ReactNode;
  description?: string;
}) {
  const Tag = level === 2 ? 'h2' : 'h3';
  const size = level === 2 ? 'text-2xl' : 'text-xl';

  return (
    <div className="mb-5">
      <Tag id={id} className={`${size} text-ink`}>
        {children}
      </Tag>
      {description && <p className="mt-2 max-w-measure text-ink-muted">{description}</p>}
    </div>
  );
}
