import { ScriptText } from '@/components/content/ScriptText';

/** A real dl/dt/dd, not a styled table. */
export function DefinitionList({
  items,
}: {
  items: readonly { term: string; description: string }[];
}) {
  return (
    <dl className="my-6 divide-y divide-line border-y border-line">
      {items.map((item) => (
        <div
          key={item.term}
          className="grid gap-1 py-4 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-6"
        >
          <dt className="font-semibold text-ink">
            <ScriptText text={item.term} />
          </dt>
          <dd className="text-ink-muted">
            <ScriptText text={item.description} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
