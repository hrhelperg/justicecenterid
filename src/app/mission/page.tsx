import type { Metadata } from 'next';
import Link from 'next/link';
import { ContentPage } from '@/components/pages/ContentPage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { buildMetadata } from '@/lib/metadata';
import { SITE } from '@/lib/site';

const PATH = '/mission';
const DESCRIPTION =
  'Why JusticeCenterID exists: public understanding of justice institutions is assembled from fiction, event-driven news, and borrowed terminology. We are trying to replace that with an accurate, sourced, comparative account.';

export const metadata: Metadata = buildMetadata({
  title: 'Mission',
  description: DESCRIPTION,
  path: PATH,
});

export default function MissionPage() {
  return (
    <ContentPage
      path={PATH}
      eyebrow="About the platform"
      title="Mission"
      lead={SITE.mission}
      description={DESCRIPTION}
      width="measure"
    >
      <div className="space-y-10">
        <section aria-labelledby="problem">
          <SectionHeading id="problem">The problem we are addressing</SectionHeading>
          <p className="text-ink-muted">
            Most people deal with justice institutions rarely, and when they do, the encounter
            is stressful and specific. Everyday understanding is therefore assembled from three
            unreliable sources.
          </p>
          <ol className="mt-4 list-decimal space-y-3 pl-6 text-ink-muted">
            <li>
              <span className="font-medium text-ink">Fiction.</span> Crime drama compresses
              months of procedure into forty minutes and gives individual officers powers that
              in reality require a warrant, a supervisor, a prosecutor, or a judge.
            </li>
            <li>
              <span className="font-medium text-ink">Event-driven news.</span> Reporting covers
              the failure, the scandal, or the verdict. It rarely covers the ordinary machinery
              that produced it, because that machinery is not news.
            </li>
            <li>
              <span className="font-medium text-ink">Borrowed vocabulary.</span> Terms from one
              country&rsquo;s system — district attorney, grand jury, sheriff, caution — get
              applied to another country&rsquo;s system where the equivalent may not exist or
              may work completely differently.
            </li>
          </ol>
          <p className="mt-4 text-ink-muted">
            The result is a public with strong opinions about institutions whose basic structure
            it cannot describe. That is bad for citizens who cannot recognise when a procedure
            has gone wrong, bad for institutions whose legitimate constraints are read as
            evasion, and bad for reform debates conducted without a shared factual baseline.
          </p>
        </section>

        <section aria-labelledby="approach">
          <SectionHeading id="approach">How we approach it</SectionHeading>
          <p className="text-ink-muted">
            Our broader purpose is to improve public understanding of why justice systems and
            legitimate public-safety institutions are necessary for a functioning society. That
            purpose is served by accuracy, not by advocacy.
          </p>
          <p className="mt-4 text-ink-muted">
            So we do it through documented facts, historical context, transparent sourcing,
            balanced analysis, and accessible explanation — including honest treatment of
            accountability, failures, reforms, and safeguards. We do not claim that institutions
            or individuals always act correctly, and we do not use emotional escalation or moral
            pressure to produce respect.
          </p>
          <p className="mt-4 text-ink-muted">
            Respect that survives contact with the facts is the only kind worth building. A
            reader should be able to finish a page here understanding both why an institution
            exists and what constrains it — and should not be able to tell what the authors
            would vote for.
          </p>
        </section>

        <section aria-labelledby="commitments">
          <SectionHeading id="commitments">What we commit to</SectionHeading>
          <ul className="list-disc space-y-2 pl-6 text-ink-muted">
            <li>
              Never inventing a statistic, quotation, date, salary, ranking, count, source, or
              URL.
            </li>
            <li>Scoping every claim to the jurisdictions its sources actually cover.</li>
            <li>
              Distinguishing fact, our analysis, and other people&rsquo;s opinions on the page.
            </li>
            <li>
              Publishing what we could not establish, rather than closing the gap with an
              assumption.
            </li>
            <li>Showing review status and review dates on every substantive page.</li>
            <li>Correcting errors promptly and visibly, including errors we find ourselves.</li>
            <li>
              Publishing no operational instruction, no sensationalised crime content, and no
              emergency guidance.
            </li>
            <li>Taking no political side, and ranking no country or institution.</li>
          </ul>
          <p className="mt-4 text-ink-muted">
            These are enforced where they can be. Several are checked automatically before the
            site can be built — see our{' '}
            <Link href="/editorial-policy" className="link-inline">
              editorial policy
            </Link>
            .
          </p>
        </section>

        <section aria-labelledby="success">
          <SectionHeading id="success">What success would look like</SectionHeading>
          <p className="text-ink-muted">
            A teacher, journalist, student, new officer, immigrant, or policymaker arrives with
            a specific question about how a justice system is organised, leaves with an
            accurate, sourced, jurisdiction-aware answer, and can see exactly where that answer
            came from.
          </p>
          <p className="mt-4 text-ink-muted">
            We are a long way from that. The{' '}
            <Link href="/about" className="link-inline">
              about page
            </Link>{' '}
            gives the actual current scale, counted rather than claimed.
          </p>
        </section>
      </div>
    </ContentPage>
  );
}
