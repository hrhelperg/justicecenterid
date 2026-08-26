import type { Metadata } from 'next';
import { BlockRenderer } from '@/components/content/BlockRenderer';
import { MisconceptionList } from '@/components/content/MisconceptionList';
import { SourceList } from '@/components/content/SourceList';
import { Callout } from '@/components/ui/Callout';
import { Container } from '@/components/ui/Container';
import { PageIntro } from '@/components/ui/PageIntro';
import { Prose } from '@/components/ui/Prose';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildBreadcrumbs } from '@/lib/breadcrumbs';
import { breadcrumbSchema, jsonLdGraph, webPageSchema } from '@/lib/jsonld';
import { buildMetadata } from '@/lib/metadata';
import { PUBLISHED_HISTORY, getHistoryEntry, historyPath } from '@/content/history';
import { getGuide, guidePath } from '@/content/guides';
import type { ContinuityRelationship } from '@/content/types';
import Link from 'next/link';
import { notFound } from 'next/navigation';

/** `params` is a Promise in this Next version — the same shape GuidePage uses. */
export interface HistoryRouteParams {
  params: Promise<{ slug: string }>;
}

export function historyStaticParams(): { slug: string }[] {
  return PUBLISHED_HISTORY.map((entry) => ({ slug: entry.slug }));
}

export async function historyMetadata(params: HistoryRouteParams['params']): Promise<Metadata> {
  const { slug } = await params;
  const entry = getHistoryEntry(slug);
  if (!entry) return buildMetadata({ title: 'Not found', description: '', path: '/history' });
  return buildMetadata({
    title: entry.title,
    description: entry.summary,
    path: historyPath(entry),
  });
}

/**
 * How a continuity claim reads to a reader.
 *
 * `none-established` is the common case and the useful one, so it is phrased as a finding rather
 * than as an absence — "no established connection" rather than "unknown". A historical page that
 * looked evasive about the question it exists to answer would defeat its own purpose.
 */
const RELATIONSHIP_LABEL: Record<ContinuityRelationship, string> = {
  'none-established': 'No established connection',
  contested: 'Contested',
  documented: 'Documented',
};

export async function HistoryPage({ params }: HistoryRouteParams) {
  const { slug } = await params;
  const entry = getHistoryEntry(slug);
  if (!entry) notFound();
  const path = historyPath(entry);
  const related = (entry.relatedGuides ?? [])
    .map((slug) => getGuide(slug))
    .filter((guide) => guide !== undefined);

  return (
    <>
      <JsonLd
        data={jsonLdGraph([
          webPageSchema({
            path,
            title: entry.title,
            description: entry.summary,
            type: 'WebPage',
          }),
          breadcrumbSchema(buildBreadcrumbs(path)),
        ])}
      />
      <PageIntro
        path={path}
        eyebrow="History"
        title={entry.title}
        lead={entry.summary}
        meta={
          <p className="text-sm text-ink-subtle">
            <span className="font-medium text-ink">{entry.period.display}</span>
            {entry.period.precision !== 'exact'
              ? ` · dating ${entry.period.precision}`
              : ''} · {entry.scope}
          </p>
        }
      />
      <Container>
        <div className="py-12">
          <Prose>
            <p className="text-lg text-ink-muted">{entry.question}</p>
            <BlockRenderer blocks={entry.definition} />

            <section aria-labelledby="sources-say" className="mt-12">
              <SectionHeading id="sources-say">What the sources say</SectionHeading>
              <BlockRenderer blocks={entry.whatTheSourcesSay} />
            </section>

            <section aria-labelledby="why" className="mt-12">
              <SectionHeading id="why">Why it matters</SectionHeading>
              <BlockRenderer blocks={entry.whyItMatters} />
            </section>
          </Prose>

          <section aria-labelledby="continuity" className="mt-12">
            <SectionHeading
              id="continuity"
              description="What a reader will be tempted to connect this to, and what the evidence supports."
            >
              Connections to modern institutions
            </SectionHeading>
            <dl className="max-w-measure divide-y divide-line border-y border-line">
              {entry.continuity.map((claim) => (
                <div key={claim.modernCounterpart} className="py-4">
                  <dt className="font-semibold text-ink">
                    {claim.modernCounterpart}{' '}
                    <span className="font-normal text-ink-subtle">
                      — {RELATIONSHIP_LABEL[claim.relationship]}
                    </span>
                  </dt>
                  <dd className="mt-1 text-ink-muted">{claim.basis}</dd>
                </div>
              ))}
            </dl>
          </section>

          {entry.period.datingNote ? (
            <div className="mt-10 max-w-measure">
              <Callout variant="uncertainty" title="A note on the dating">
                {entry.period.datingNote}
              </Callout>
            </div>
          ) : null}

          <div className="mt-10">
            <MisconceptionList items={entry.misconceptions} />
          </div>

          <section aria-labelledby="uncertainty" className="mt-12">
            <SectionHeading id="uncertainty">What we could not establish</SectionHeading>
            <ul className="max-w-measure list-disc space-y-2 pl-6 text-ink-muted">
              {entry.uncertainty.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {related.length > 0 ? (
            <section aria-labelledby="context" className="mt-12">
              <SectionHeading
                id="context"
                description="What this page provides historical context for. Context is not descent."
              >
                Related topics
              </SectionHeading>
              <ul className="max-w-measure space-y-3">
                {related.map((guide) => (
                  <li key={guide.slug}>
                    <Link href={guidePath(guide)} className="link-inline font-medium">
                      {guide.question}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {entry.furtherReading ? (
            <Prose>
              <section aria-labelledby="further" className="mt-12">
                <SectionHeading id="further">Where to go next</SectionHeading>
                <BlockRenderer blocks={entry.furtherReading} />
              </section>
            </Prose>
          ) : null}

          <div className="max-w-measure">
            <SourceList ids={entry.sources} />
          </div>
        </div>
      </Container>
    </>
  );
}
