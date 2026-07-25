import { SOURCE_TYPE_LABELS, getSources } from '@/content/sources';
import { ScriptText } from '@/components/content/ScriptText';
import { SectionHeading } from '@/components/ui/SectionHeading';

/**
 * Sources are rendered on the page, not hidden in markup. Each entry shows title,
 * publisher, type label, and dates, so a reader can see at a glance whether a claim rests
 * on legislation or on an institution's account of itself.
 */
export function SourceList({
  ids,
  heading = 'Sources',
}: {
  ids: readonly string[];
  heading?: string;
}) {
  const sources = getSources(ids);
  if (sources.length === 0) return null;

  return (
    <section aria-labelledby="sources" className="mt-14 border-t border-line pt-8">
      <SectionHeading id="sources">{heading}</SectionHeading>
      <ol className="space-y-5">
        {sources.map((source) => (
          <li key={source.id} className="text-sm">
            <p className="font-medium text-ink">
              {source.url ? (
                <a href={source.url} className="link-inline" rel="noopener">
                  <ScriptText text={source.title} />
                </a>
              ) : (
                <ScriptText text={source.title} />
              )}
            </p>
            <p className="mt-1 text-ink-muted">
              {source.publisher} · {SOURCE_TYPE_LABELS[source.type]}
              {source.publishedOn ? ` · ${source.publishedOn}` : ''}
              {source.verifiedOn ? ` · link verified ${source.verifiedOn}` : ''}
            </p>
            {source.note && <p className="mt-1 text-ink-subtle">{source.note}</p>}
          </li>
        ))}
      </ol>
    </section>
  );
}
