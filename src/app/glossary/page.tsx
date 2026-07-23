import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/seo/JsonLd';
import { ContentPage } from '@/components/pages/ContentPage';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PUBLISHED_GLOSSARY } from '@/content/glossary';
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
            {PUBLISHED_GLOSSARY.length} terms, each linked to the sources that support it.
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
                  <p className="flex flex-wrap items-center gap-2">
                    <Badge tone="affirm">Fact-checked</Badge>
                    <span className="text-sm text-ink-subtle">
                      Sourced — see{' '}
                      <Link href="/sources" className="link-inline">
                        research and sources
                      </Link>
                    </span>
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
