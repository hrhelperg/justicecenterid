import type { Metadata } from 'next';
import Link from 'next/link';
import { CoverageNotice } from '@/components/content/CoverageNotice';
import { ContentPage } from '@/components/pages/ContentPage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { buildMetadata } from '@/lib/metadata';

const PATH = '/comparisons';
const DESCRIPTION =
  'How JusticeCenterID compares institutional arrangements between countries, and the rules a comparison must satisfy before it is published.';

export const metadata: Metadata = buildMetadata({
  title: 'Comparisons',
  description: DESCRIPTION,
  path: PATH,
});

export default function ComparisonsPage() {
  return (
    <ContentPage
      path={PATH}
      eyebrow="Reference"
      title="Comparisons"
      lead={DESCRIPTION}
      description={DESCRIPTION}
    >
      <CoverageNotice title="No comparisons have been published">
        <p>
          A comparison requires researched, sourced material on both sides and must meet the
          standard set out below. Individual country dossiers now exist, but no side-by-side
          comparison has yet been published — this page states the standard one will have to
          meet, and points to the researched country pages any comparison would draw on.
        </p>
        <p>
          See the{' '}
          <Link href="/countries" className="link-inline">
            country model and coverage status
          </Link>
          .
        </p>
      </CoverageNotice>

      <section aria-labelledby="rules" className="mt-14">
        <SectionHeading
          id="rules"
          description="Comparison is the most error-prone thing this platform will do. These are the rules that make it defensible."
        >
          What a comparison must satisfy
        </SectionHeading>
        <dl className="max-w-measure divide-y divide-line border-y border-line">
          {[
            {
              term: 'Compare functions, not names',
              description:
                'Start from the function — "who decides whether a charge is brought" — and then identify which body performs it in each system. Starting from institution names imports one system’s categories into another.',
            },
            {
              term: 'Equivalence is itself a claim',
              description:
                'Saying two institutions correspond requires a source that makes the comparison. We do not assert equivalence because the roles look similar.',
            },
            {
              term: 'State what is not comparable',
              description:
                'Statistics collected under different definitions are not comparable, and saying so is more useful than a heavily caveated table. Where the underlying definitions differ, we say that instead of presenting numbers side by side.',
            },
            {
              term: 'Sources on both sides',
              description:
                'Each side of a comparison needs its own primary or official sources. A well-sourced account of one country plus a general impression of another is not a comparison.',
            },
            {
              term: 'No ranking',
              description:
                'We do not score or rank countries or institutions. Ranking requires a measurement methodology, and any ranking is only as defensible as the methodology behind it. Where an authoritative body has published an assessment, we would cite and attribute it rather than produce our own.',
            },
            {
              term: 'No implicit default',
              description:
                'No country is used as the baseline against which others deviate. A comparison that treats one arrangement as normal and the other as a variation has already made an argument.',
            },
          ].map((item) => (
            <div
              key={item.term}
              className="grid gap-1 py-4 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-6"
            >
              <dt className="font-semibold text-ink">{item.term}</dt>
              <dd className="text-ink-muted">{item.description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="candidates" className="mt-14">
        <SectionHeading
          id="candidates"
          description="Genuine institutional questions, listed so the direction is visible. None is published."
        >
          Comparisons worth making
        </SectionHeading>
        <ul className="max-w-measure list-disc space-y-2 pl-6 text-ink-muted">
          <li>
            Who directs a criminal investigation: police, prosecutor, or investigating judge.
          </li>
          <li>Where the prosecution service sits in relation to the executive.</li>
          <li>Who decides the facts at trial: professional judges, juries, or mixed panels.</li>
          <li>How police complaints are investigated, and by whom.</li>
          <li>How places of detention are inspected, and who may enter unannounced.</li>
          <li>Whether courts may set aside primary legislation, and through which court.</li>
        </ul>
        <p className="mt-6 max-w-measure text-ink-muted">
          In the meantime, every guide on this site contains a required section on how the topic
          varies between jurisdictions — see, for example,{' '}
          <Link href="/prosecution/what-does-a-prosecutor-do" className="link-inline">
            what a prosecutor does
          </Link>
          .
        </p>
      </section>
    </ContentPage>
  );
}
