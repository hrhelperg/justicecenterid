import type { Metadata } from 'next';
import Link from 'next/link';
import { CoverageNotice } from '@/components/content/CoverageNotice';
import { ContentPage } from '@/components/pages/ContentPage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { buildMetadata } from '@/lib/metadata';
import { HISTORY_CHRONOLOGICAL, historyPath } from '@/content/history';

const PATH = '/history';
const DESCRIPTION =
  'How justice and public-safety institutions developed, and the standards we apply to writing that history — including why we do not name a first police force.';

export const metadata: Metadata = buildMetadata({
  title: 'History',
  description: DESCRIPTION,
  path: PATH,
});

export default function HistoryPage() {
  return (
    <ContentPage
      path={PATH}
      eyebrow="Reference"
      title="History"
      lead={DESCRIPTION}
      description={DESCRIPTION}
    >
      <div className="max-w-measure">
        <p className="text-ink-muted">
          Institutional history is where reference sites most often go wrong, because the errors
          are comfortable: a clean origin story, an unbroken lineage, a founding date that turns
          out to have been assigned retrospectively. This page sets out how we intend to avoid
          them, and what exists so far.
        </p>
      </div>

      <CoverageNotice title="What exists now">
        <p>
          The pages indexed below, the{' '}
          <Link href="/timeline" className="link-inline">
            timeline
          </Link>{' '}
          of individually source-verified milestones, and the guide on{' '}
          <Link
            href="/law-enforcement/how-policing-institutions-changed"
            className="link-inline"
          >
            how policing institutions changed over time
          </Link>
          .
        </p>
        <p>
          Coverage is thin and uneven by design. Every page below required primary or archival
          sourcing, and far more candidates were deferred than published — regional coverage
          outside Europe most of all. Deferred subjects are not represented by placeholder pages
          and do not appear in our sitemap.
        </p>
      </CoverageNotice>

      <section aria-labelledby="entries" className="mt-14">
        <SectionHeading
          id="entries"
          description="Oldest first. Each states the period it covers, how firmly that period is dated, and what it does not claim."
        >
          Historical pages
        </SectionHeading>
        <ol className="max-w-measure space-y-6 border-l-2 border-line pl-6">
          {HISTORY_CHRONOLOGICAL.map((entry) => (
            <li key={entry.slug} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-2 -left-[1.9rem] block h-3 w-3 rounded-full border-2 border-accent bg-surface"
              />
              <p className="text-sm font-semibold tracking-wide text-brand uppercase">
                {entry.period.display}
                {entry.period.precision !== 'exact'
                  ? ` · dating ${entry.period.precision}`
                  : ''}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-ink">
                <Link href={historyPath(entry)} className="link-inline">
                  {entry.question}
                </Link>
              </h3>
              <p className="mt-2 text-ink-muted">{entry.summary}</p>
              <p className="mt-2 text-sm text-ink-subtle">{entry.scope}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="standards" className="mt-14">
        <SectionHeading
          id="standards"
          description="Applied to every historical claim on this platform."
        >
          Our historical standards
        </SectionHeading>
        <dl className="max-w-measure divide-y divide-line border-y border-line">
          {[
            {
              term: 'Continuity is a claim, not an assumption',
              description:
                'An institution that kept its name through a merger, an abolition and recreation, or a change of political system is not thereby the same institution. Continuity requires evidence like any other claim.',
            },
            {
              term: 'Founding dates are frequently contested',
              description:
                'Many are assigned retrospectively, often by the institution itself. Where dating is disputed, we record the dispute rather than picking a year.',
            },
            {
              term: 'No reading modern categories backwards',
              description:
                'A pre-modern body that policed markets is not "an early police force" unless a source makes that connection. Applying today’s categories to earlier institutions produces a tidy narrative and a false one.',
            },
            {
              term: 'Historical is never written as current',
              description:
                'Every entity declares whether it describes a current arrangement, a historical one, or a mixture, and historical entities must carry their period. This is enforced by the content model, not by memory.',
            },
            {
              term: 'Both directions of the record',
              description:
                'Institutional histories written by institutions emphasise continuity and public service; histories written by critics emphasise control and coercion. Both draw on real evidence, and a page that presents only one will not survive contact with the sources.',
            },
            {
              term: 'Archives over commemoration',
              description:
                'We prefer archives, official institutional histories, museum collections, and academic history over popular history and over an institution’s own anniversary material.',
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

      <section aria-labelledby="planned" className="mt-14">
        <SectionHeading
          id="planned"
          description="Declared so the gaps are visible. None of this exists yet."
        >
          Planned coverage
        </SectionHeading>
        <ul className="max-w-measure list-disc space-y-2 pl-6 text-ink-muted">
          <li>
            Further historical pages, framed by institutional change rather than by political
            era. Seven exist; the subjects below do not.
          </li>
          <li>
            The development of court systems and of judicial independence as a structural idea.
          </li>
          <li>
            The emergence of public prosecution as a function separate from investigation.
          </li>
          <li>
            The history of imprisonment as a sentence, and of independent prison inspection.
          </li>
          <li>
            Policing institutions established under colonial administration, and their
            post-independence history — a distinct subject requiring its own sources rather than
            an appendix to a European narrative.
          </li>
          <li>
            The development of forensic disciplines and, importantly, of the scrutiny applied to
            them.
          </li>
        </ul>
      </section>

      <section aria-labelledby="gap" className="mt-14">
        <SectionHeading id="gap">A limitation we are stating up front</SectionHeading>
        <p className="max-w-measure text-ink-muted">
          The historical material we have verified so far is weighted towards European and
          international instruments. That is a limitation of our current sourcing, not a claim
          about where the relevant history lies, and correcting it is explicit work rather than
          an aspiration. We would rather publish the gap than disguise it with a thin page.
        </p>
      </section>
    </ContentPage>
  );
}
