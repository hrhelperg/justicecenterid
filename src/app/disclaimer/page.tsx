import type { Metadata } from 'next';
import Link from 'next/link';
import { ContentPage } from '@/components/pages/ContentPage';
import { Callout } from '@/components/ui/Callout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { buildMetadata } from '@/lib/metadata';
import { SITE } from '@/lib/site';

const PATH = '/disclaimer';
const DESCRIPTION =
  'JusticeCenterID provides general educational information, not legal advice. It is independent, holds no official status, and publishes no emergency guidance.';

export const metadata: Metadata = buildMetadata({
  title: 'Disclaimer',
  description: DESCRIPTION,
  path: PATH,
});

export default function DisclaimerPage() {
  return (
    <ContentPage
      path={PATH}
      eyebrow="Legal"
      title="Disclaimer"
      lead={DESCRIPTION}
      description={DESCRIPTION}
      width="measure"
    >
      <div className="space-y-10">
        <Callout variant="safety" title="This is not legal advice">
          {SITE.legalNotice}
        </Callout>

        <section aria-labelledby="education">
          <SectionHeading id="education">General information only</SectionHeading>
          <p className="text-ink-muted">
            Everything on this site is general educational information about how justice and
            public-safety institutions are organised. It is not advice, and it is not a
            substitute for advice.
          </p>
          <p className="mt-4 text-ink-muted">We do not, in any circumstances:</p>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-ink-muted">
            <li>Advise you on your own legal situation.</li>
            <li>Assess a situation you describe to us.</li>
            <li>Tell you whether conduct was lawful or unlawful.</li>
            <li>Tell you what to do next in a legal matter.</li>
            <li>Represent you, or act for you in any capacity.</li>
          </ul>
          <p className="mt-4 text-ink-muted">
            For a specific legal matter, consult a qualified professional in the relevant
            jurisdiction, or the responsible official authority.
          </p>
        </section>

        <section aria-labelledby="jurisdiction">
          <SectionHeading id="jurisdiction">Laws and procedures vary</SectionHeading>
          <p className="text-ink-muted">
            Legal rules, institutional structures, and procedures differ substantially between
            countries — and frequently between regions within one country. They also change over
            time.
          </p>
          <p className="mt-4 text-ink-muted">
            Where we describe a rule that applies in a specific place, we name that place. Where
            we describe something generally, it is a description of the range of arrangements
            rather than a statement of what applies where you are. Do not assume that a
            description on this site is the law in your jurisdiction.
          </p>
        </section>

        <section aria-labelledby="affiliation">
          <SectionHeading id="affiliation">Independence and non-affiliation</SectionHeading>
          <p className="text-ink-muted">{SITE.independenceNotice}</p>
          <p className="mt-4 text-ink-muted">
            We are not affiliated with, endorsed by, or acting on behalf of any government or
            law-enforcement agency, unless a specific documented partnership is explicitly
            stated on the page concerned. No such partnership currently exists.
          </p>
          <p className="mt-4 text-ink-muted">
            Where we name an institution, we do so to describe it. Naming an institution does
            not imply any relationship with it, and our description of an institution is not
            that institution&rsquo;s statement about itself unless we say so and attribute it.
          </p>
        </section>

        <section
          aria-labelledby="emergency"
          className="rounded-md border border-alert bg-alert-soft p-6"
        >
          <SectionHeading id="emergency">Emergencies</SectionHeading>
          <p className="text-ink-muted">
            This site publishes no emergency guidance of any kind, and no emergency telephone
            numbers. {SITE.emergencyNotice}
          </p>
          <p className="mt-4 text-ink-muted">
            We do not publish emergency numbers by country because a wrong or out-of-date number
            in an emergency is a serious harm, and we cannot maintain that data to the standard
            it would require.
          </p>
        </section>

        <section aria-labelledby="accuracy">
          <SectionHeading id="accuracy">Accuracy and currency</SectionHeading>
          <p className="text-ink-muted">
            We work to a documented{' '}
            <Link href="/editorial-policy" className="link-inline">
              editorial policy
            </Link>{' '}
            and{' '}
            <Link href="/methodology" className="link-inline">
              research methodology
            </Link>
            , and every page shows its review status and the date it was last reviewed. That is
            a statement about our process, not a guarantee of correctness.
          </p>
          <p className="mt-4 text-ink-muted">
            No content on this site has been reviewed by an external subject-matter expert, and
            we do not claim otherwise. If you find an error, please{' '}
            <Link href="/corrections-policy" className="link-inline">
              tell us
            </Link>{' '}
            — we would rather be corrected than be trusted.
          </p>
        </section>

        <section aria-labelledby="external">
          <SectionHeading id="external">External sources</SectionHeading>
          <p className="text-ink-muted">
            We link to external documents so you can check our work. We do not control those
            sites, are not responsible for their content, and a link does not imply endorsement.
            Documents move and are withdrawn; each source carries the date we last confirmed its
            address.
          </p>
        </section>
      </div>
    </ContentPage>
  );
}
