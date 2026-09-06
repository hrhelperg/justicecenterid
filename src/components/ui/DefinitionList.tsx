import { InlineText } from '@/components/content/InlineText';

/**
 * A real dl/dt/dd, not a styled table.
 *
 * WAVE 24: renders through InlineText rather than ScriptText. It had rendered content text
 * without resolving link markers, so four pages that predate this wave were shipping literal
 * `[text](/path)` syntax inside definition descriptions.
 */
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
            <InlineText text={item.term} />
          </dt>
          <dd className="text-ink-muted">
            <InlineText text={item.description} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
