import type { Metadata } from 'next';
import Link from 'next/link';
import { SourceList } from '@/components/content/SourceList';
import { ContentPage } from '@/components/pages/ContentPage';
import { Callout } from '@/components/ui/Callout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getSource } from '@/content/sources';
import { TIMELINE_SORTED } from '@/content/timeline';
import { buildMetadata } from '@/lib/metadata';

const PATH = '/timeline';
const DESCRIPTION =
  'A selected set of institutional milestones in the development of justice systems, each individually verified against a primary or archival source. Not a complete chronology.';

export const metadata: Metadata = buildMetadata({
  title: 'Timeline',
  description: DESCRIPTION,
  path: PATH,
});

export default function TimelinePage() {
  const allSourceIds = [...new Set(TIMELINE_SORTED.flatMap((entry) => entry.sources))];

  return (
    <ContentPage
      path={PATH}
      eyebrow="Reference"
      title="Timeline"
      lead={DESCRIPTION}
      description={DESCRIPTION}
    >
      <div className="max-w-measure">
        <Callout variant="scope" title="This is a selection, not a chronology">
          Every entry below required a source whose URL we opened and confirmed. The list is
          short because verification sets its length, not ambition. A timeline that grows faster
          than its sourcing is how invented dates enter a reference site.
        </Callout>

        <Callout variant="uncertainty" title="A known gap in this selection">
          The current entries are weighted towards European and international instruments. That
          reflects what we have been able to verify so far, not a judgement about where the
          relevant history lies. Expanding beyond it is explicit work in our{' '}
          <Link href="/history" className="link-inline">
            history section
          </Link>
          .
        </Callout>
      </div>

      <section aria-labelledby="entries" className="mt-12">
        <SectionHeading id="entries">Milestones</SectionHeading>
        <ol className="max-w-measure space-y-8 border-l-2 border-line pl-6">
          {TIMELINE_SORTED.map((entry) => (
            <li key={entry.id} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-2 -left-[1.9rem] block h-3 w-3 rounded-full border-2 border-accent bg-surface"
              />
              <p className="text-sm font-semibold tracking-wide text-brand uppercase">
                {entry.displayDate} · {entry.region}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-ink">{entry.title}</h3>
              <p className="mt-2 text-ink-muted">{entry.description}</p>
              <p className="mt-2 text-ink-muted">
                <span className="font-medium text-ink">Why it matters: </span>
                {entry.significance}
              </p>
              {entry.uncertainty && (
                <p className="mt-3 rounded-md border border-gold bg-gold-soft p-3 text-sm text-ink-muted">
                  <span className="font-semibold text-ink">Caution: </span>
                  {entry.uncertainty}
                </p>
              )}
              <p className="mt-3 text-sm text-ink-subtle">
                Sources: {entry.sources.map((id) => getSource(id)?.title ?? id).join('; ')}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <div className="max-w-measure">
        <SourceList ids={allSourceIds} heading="Sources used on this page" />
      </div>
    </ContentPage>
  );
}
