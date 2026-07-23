import type { ReactNode } from 'react';

/**
 * States plainly what a page does not yet cover.
 *
 * A hub whose entities do not exist yet says so here rather than rendering an empty grid.
 * This is the visible half of the coverage model: `none`, `planned`, and `in-research`
 * produce a notice, not a URL.
 */
export function CoverageNotice({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section
      aria-label="Coverage status"
      className="rounded-md border border-line-strong bg-surface-sunken p-6"
    >
      <h2 className="text-lg font-semibold text-ink">{title}</h2>
      <div className="mt-3 max-w-measure space-y-3 text-ink-muted">{children}</div>
    </section>
  );
}
