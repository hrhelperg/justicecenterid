import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { ContentPage } from '@/components/pages/ContentPage';
import { REVIEW_LABELS } from '@/components/content/ReviewMeta';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PUBLISHED_GLOSSARY } from '@/content/glossary';
import { getSources } from '@/content/sources';
import { definedTermSetSchema, jsonLdGraph } from '@/lib/jsonld';
import { buildMetadata } from '@/lib/metadata';

const PATH = '/glossary';
const DESCRIPTION =
  'Terms used across justice, law-enforcement, court, prosecution, investigative, forensic, corrections, and public-safety systems, defined without assuming any one jurisdiction.';

export const metadata: Metadata = buildMetadata({
  title: 'Glossary',
  description: DESCRIPTION,
  path: PATH,
});

export default function GlossaryPage() {
  return (
    <>
      <JsonLd data={jsonLdGraph([definedTermSetSchema(PUBLISHED_GLOSSARY, PATH)])} />
      <ContentPage
        path={PATH}
        eyebrow="Reference"
        title="Glossary"
        lead={DESCRIPTION}
        description={DESCRIPTION}
        schemaType="CollectionPage"
      >
        <div className="max-w-measure">
          <p className="text-ink-muted">
            Definitions here are general. Where a term means different things in different
            systems, that is stated on the entry rather than resolved in favour of one country.
            Entries marked <em>often confused with</em> record the terms most frequently
            mistaken for each other — the single largest source of error when reading about a
            justice system that is not your own.
          </p>
          <p className="mt-4 text-ink-muted">
            {PUBLISHED_GLOSSARY.length} terms. Each entry lists the sources that support it and
            its current review state.
          </p>
        </div>

        <div className="mt-12 max-w-measure">
          <SectionHeading id="terms">Terms</SectionHeading>
          <dl className="divide-y divide-line border-y border-line">
            {PUBLISHED_GLOSSARY.map((term) => (
              <div key={term.slug} id={term.slug} className="py-6">
                <dt className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-lg font-semibold text-ink">{term.term}</span>
                  {term.alternateTerms && term.alternateTerms.length > 0 && (
                    <span className="text-sm text-ink-subtle">
                      also: {term.alternateTerms.join(', ')}
                    </span>
                  )}
                </dt>
                <dd className="mt-2 space-y-3">
                  <p className="text-ink">{term.definition}</p>
                  {term.expandedNote && <p className="text-ink-muted">{term.expandedNote}</p>}
                  {term.jurisdictionNote && (
                    <p className="text-ink-muted">
                      <span className="font-medium text-ink">Across jurisdictions: </span>
                      {term.jurisdictionNote}
                    </p>
                  )}
                  {term.falseFriends && term.falseFriends.length > 0 && (
                    <p className="text-sm text-ink-subtle">
                      Often confused with: {term.falseFriends.join(', ')}
                    </p>
                  )}
                  {/*
                    Both the badge and the source list are derived from the term record.
                    They were previously hardcoded to "Fact-checked" with a generic link to
                    /sources, which made the page's own sourcing claim untrue: it asserted
                    per-term sourcing while showing none, and would have asserted
                    "Fact-checked" over a term that was not.
                  */}
                  <p className="flex flex-wrap items-center gap-2">
                    <Badge tone={REVIEW_LABELS[term.review].tone}>
                      {REVIEW_LABELS[term.review].label}
                    </Badge>
                    {getSources(term.sources).length > 0 && (
                      <span className="text-sm text-ink-subtle">
                        Sources:{' '}
                        {getSources(term.sources).map((source, index) => (
                          <span key={source.id}>
                            {index > 0 && ', '}
                            {source.url ? (
                              <a href={source.url} className="link-inline" rel="noopener">
                                {source.title}
                              </a>
                            ) : (
                              source.title
                            )}
                            <span className="text-ink-subtle"> ({source.publisher})</span>
                          </span>
                        ))}
                      </span>
                    )}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </ContentPage>
    </>
  );
}
