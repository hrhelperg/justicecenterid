import type { Metadata } from 'next';
import Link from 'next/link';
import { ContentPage } from '@/components/pages/ContentPage';
import { Callout } from '@/components/ui/Callout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  PUBLISHED_INSTITUTION_TYPES,
  ROUTED_INSTITUTION_TYPES,
  institutionPath,
} from '@/content/institutions';
import { buildMetadata } from '@/lib/metadata';

const PATH = '/institutions';
const DESCRIPTION =
  'Institution types across justice and public safety — what distinguishes each from the adjacent one, and where a familiar name means something materially different.';

export const metadata: Metadata = buildMetadata({
  title: 'Institutions',
  description: DESCRIPTION,
  path: PATH,
});

/**
 * The hub is an INDEX, not a copy of the pages beneath it.
 *
 * Before Wave 2 this page rendered every field of every record inline, because none of them
 * had a route. Giving them routes without changing this page would have produced seven pages
 * duplicating one page word for word — the largest cannibalization risk in the phase, and one
 * created by the routing work rather than by any new content. Each entry now carries its
 * summary and a link, and nothing else.
 */
export default function InstitutionsPage() {
  const routed = ROUTED_INSTITUTION_TYPES;
  const summaryOnly = PUBLISHED_INSTITUTION_TYPES.filter(
    (institution) => institution.review !== 'fact-checked',
  );

  return (
    <ContentPage
      path={PATH}
      eyebrow="Reference"
      title="Institutions"
      lead={DESCRIPTION}
      description={DESCRIPTION}
      schemaType="CollectionPage"
    >
      <div className="max-w-measure">
        <p className="text-ink-muted">
          These are institution <em>types</em>, not named agencies. A type page describes what
          distinguishes it from the bodies it is routinely confused with, how authority reaches
          it, what examines it, and — the most useful field for a reader — where the type does
          and does not exist.
        </p>
        <p className="mt-4 text-ink-muted">
          Named institutions are covered under their country, where a jurisdiction and dated
          official sources are mandatory. Each type below links onward to the{' '}
          <Link href="/countries" className="link-inline">
            country dossiers
          </Link>{' '}
          it has been checked against.
        </p>
      </div>

      <div className="mt-12">
        <SectionHeading id="researched">Researched types</SectionHeading>
        <dl className="max-w-measure space-y-6">
          {routed.map((institution) => (
            <div key={institution.slug}>
              <dt className="text-lg font-semibold">
                <Link href={institutionPath(institution)} className="link-inline">
                  {institution.title}
                </Link>
              </dt>
              <dd className="mt-1 text-ink-muted">{institution.summary}</dd>
            </div>
          ))}
        </dl>
      </div>

      {summaryOnly.length > 0 ? (
        <div className="mt-14">
          <SectionHeading id="summary-only">Summaries pending research</SectionHeading>
          <div className="max-w-measure">
            <Callout variant="note" title="Why these have no page of their own">
              The source registry currently holds no border, customs, coast-guard or maritime
              enforcement source. Rather than build a page on a citation that does not support
              it, these remain short summaries until the research is done. Saying so is more
              useful to a reader than a page that looks complete and is not.
            </Callout>
            <dl className="mt-6 space-y-6">
              {summaryOnly.map((institution) => (
                <div key={institution.slug}>
                  <dt className="text-lg font-semibold text-ink">{institution.title}</dt>
                  <dd className="mt-1 text-ink-muted">{institution.summary}</dd>
                  <dd className="mt-2 text-sm text-ink-subtle">{institution.presenceNote}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      ) : null}
    </ContentPage>
  );
}
