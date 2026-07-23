import type { Misconception } from '@/content/types';

/** A semantic list, not a table — the pairs are prose, not tabular data. */
export function MisconceptionList({ items }: { items: readonly Misconception[] }) {
  return (
    <ul className="space-y-6">
      {items.map((item) => (
        <li key={item.claim} className="rounded-md border border-line bg-surface-raised p-5">
          <p className="font-semibold text-ink">
            <span className="text-ink-subtle">Common belief: </span>
            {item.claim}
          </p>
          <p className="mt-2 text-ink-muted">
            <span className="font-semibold text-ink">In practice: </span>
            {item.reality}
          </p>
          {item.note && <p className="mt-2 text-sm text-ink-subtle">{item.note}</p>}
        </li>
      ))}
    </ul>
  );
}
