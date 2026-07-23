import type { Metadata } from 'next';
import Link from 'next/link';
import { ContentPage } from '@/components/pages/ContentPage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SOURCES, SOURCE_TYPE_LABELS } from '@/content/sources';
import { SOURCE_TYPES } from '@/content/types';
import { buildMetadata } from '@/lib/metadata';

const PATH = '/sources';
const DESCRIPTION =
  'The source hierarchy JusticeCenterID applies, and a complete index of every source cited anywhere on this site, generated from the content registry.';

export const metadata: Metadata = buildMetadata({
  title: 'Research and Sources',
  description: DESCRIPTION,
  path: PATH,
});

const HIERARCHY = [
  {
    tier: 1,
    type: 'legislation',
    use: 'What the law says. The only acceptable support for a claim about legal rules.',
  },
  {
    tier: 2,
    type: 'government',
    use: 'Institutional structure, official process, published official data.',
  },
  { tier: 3, type: 'court-record', use: 'What a court decided, and court procedure.' },
  {
    tier: 4,
    type: 'international-organization',
    use: 'Cross-national comparison, treaty obligations, international standards.',
  },
  {
    tier: 5,
    type: 'academic',
    use: 'Comparative analysis, historical interpretation, methodological limits.',
  },
  { tier: 6, type: 'archive', use: 'Historical fact and provenance.' },
  { tier: 6, type: 'museum', use: 'Historical fact and provenance.' },
  { tier: 7, type: 'book', use: 'Historical and comparative background.' },
  {
    tier: 8,
    type: 'institutional',
    use: 'What an institution says about itself — always attributed as such.',
  },
  {
    tier: 9,
    type: 'journalism',
    use: 'Contemporary context only. Never the sole support for a structural, legal, or historical claim.',
  },
] as const;

export default function SourcesPage() {
  const grouped = SOURCE_TYPES.map((type) => ({
    type,
    sources: SOURCES.filter((source) => source.type === type),
  })).filter((group) => group.sources.length > 0);

  return (
    <ContentPage
      path={PATH}
      eyebrow="Reference"
      title="Research and Sources"
      lead={DESCRIPTION}
      description={DESCRIPTION}
    >
      <div className="max-w-measure">
        <p className="text-ink-muted">
          The index below is generated from the content registry, so it lists exactly the
          sources in use — not a curated selection. If a source appears here, something on this
          site depends on it.
        </p>
      </div>

      <section aria-labelledby="hierarchy" className="mt-12">
        <SectionHeading
          id="hierarchy"
          description="Higher tiers are preferred, and lower tiers may not substitute for higher tiers on the claim types reserved to them."
        >
          The source hierarchy
        </SectionHeading>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line-strong bg-surface-sunken">
                <th scope="col" className="p-3 font-semibold">
                  Tier
                </th>
                <th scope="col" className="p-3 font-semibold">
                  Source type
                </th>
                <th scope="col" className="p-3 font-semibold">
                  What it can support
                </th>
              </tr>
            </thead>
            <tbody>
              {HIERARCHY.map((row) => (
                <tr key={`${row.tier}-${row.type}`} className="border-b border-line align-top">
                  <td className="p-3 text-ink-muted">{row.tier}</td>
                  <td className="p-3 font-medium text-ink">{SOURCE_TYPE_LABELS[row.type]}</td>
                  <td className="p-3 text-ink-muted">{row.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="verification" className="mt-14">
        <SectionHeading id="verification">How sources are verified</SectionHeading>
        <ul className="max-w-measure list-disc space-y-2 pl-6 text-ink-muted">
          <li>
            The URL is opened and confirmed to resolve to the document named, not to a landing
            page or a search result.
          </li>
          <li>
            The publisher is confirmed to be the body actually responsible for the document.
          </li>
          <li>
            The document is confirmed to support the specific claim at the level of generality
            claimed.
          </li>
          <li>The date of that check is recorded and displayed alongside the source.</li>
          <li>
            A note is written recording what the source supports <em>and what it does not</em>,
            so it cannot later be reused for a claim it does not cover.
          </li>
        </ul>
        <p className="mt-4 max-w-measure text-ink-muted">
          Some official publishers block automated access. Where a document&rsquo;s identity
          could not be confirmed, we cite it without a URL — with enough detail to find it — or
          we do not use it. Constructing a plausible URL from a pattern is prohibited. See our{' '}
          <Link href="/methodology" className="link-inline">
            research methodology
          </Link>{' '}
          and{' '}
          <Link href="/editorial-policy" className="link-inline">
            editorial policy
          </Link>
          .
        </p>
      </section>

      <section aria-labelledby="index" className="mt-14">
        <SectionHeading
          id="index"
          description={`${SOURCES.length} sources currently in use, grouped by type.`}
        >
          Source index
        </SectionHeading>
        <div className="space-y-10">
          {grouped.map((group) => (
            <div key={group.type}>
              <h3 className="text-lg font-semibold text-ink">
                {SOURCE_TYPE_LABELS[group.type]}
              </h3>
              <ol className="mt-4 space-y-5">
                {group.sources.map((source) => (
                  <li key={source.id} className="max-w-measure text-sm">
                    <p className="font-medium text-ink">
                      {source.url ? (
                        <a href={source.url} className="link-inline" rel="noopener">
                          {source.title}
                        </a>
                      ) : (
                        source.title
                      )}
                    </p>
                    <p className="mt-1 text-ink-muted">
                      {source.publisher}
                      {source.publishedOn ? ` · ${source.publishedOn}` : ''}
                      {source.verifiedOn ? ` · link verified ${source.verifiedOn}` : ''}
                    </p>
                    {source.note && <p className="mt-1 text-ink-subtle">{source.note}</p>}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>
    </ContentPage>
  );
}
