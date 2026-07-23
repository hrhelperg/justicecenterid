import type { Metadata } from 'next';
import Link from 'next/link';
import { ContentPage } from '@/components/pages/ContentPage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { buildMetadata } from '@/lib/metadata';
import { SITE } from '@/lib/site';

const PATH = '/terms';
const DESCRIPTION =
  'Terms of use for JusticeCenterID, including what the site is, how our material may be reused, and the limits of what we provide.';

export const metadata: Metadata = buildMetadata({
  title: 'Terms',
  description: DESCRIPTION,
  path: PATH,
});

export default function TermsPage() {
  return (
    <ContentPage
      path={PATH}
      eyebrow="Legal"
      title="Terms of use"
      lead={DESCRIPTION}
      description={DESCRIPTION}
      width="measure"
    >
      <div className="space-y-10">
        <section aria-labelledby="what">
          <SectionHeading id="what">What this site provides</SectionHeading>
          <p className="text-ink-muted">
            {SITE.name} publishes general educational information about justice systems and
            public-safety institutions. Using this site does not create any professional
            relationship between you and us.
          </p>
          <p className="mt-4 text-ink-muted">
            {SITE.legalNotice} The full position is set out in our{' '}
            <Link href="/disclaimer" className="link-inline">
              disclaimer
            </Link>
            , which forms part of these terms.
          </p>
        </section>

        <section aria-labelledby="accuracy">
          <SectionHeading id="accuracy">Accuracy</SectionHeading>
          <p className="text-ink-muted">
            We work to a published{' '}
            <Link href="/editorial-policy" className="link-inline">
              editorial policy
            </Link>{' '}
            and show review status and review dates on every substantive page. We do not warrant
            that the site is free of error, and we do not warrant that any description remains
            current after its stated review date — laws and institutions change.
          </p>
          <p className="mt-4 text-ink-muted">
            Do not rely on this site as the basis for a legal decision. Consult a qualified
            professional in the relevant jurisdiction, or the responsible official authority.
          </p>
        </section>

        <section aria-labelledby="reuse">
          <SectionHeading id="reuse">Using our material</SectionHeading>
          <p className="text-ink-muted">
            Teachers, students, journalists, and researchers are welcome to quote from this site
            with attribution. When you do, please:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-ink-muted">
            <li>
              Name {SITE.name} and link to the page you used, so a reader can check the sourcing
              themselves.
            </li>
            <li>
              Preserve any scope wording. Our claims are scoped to particular jurisdictions on
              purpose, and removing that scoping turns an accurate statement into an inaccurate
              one.
            </li>
            <li>
              Do not present quoted material as legal advice, and do not present {SITE.name} as
              an official body. We are an independent educational publisher with no official
              status in any jurisdiction.
            </li>
            <li>
              Check the underlying source rather than citing us as the authority. We cite
              primary material precisely so you can go to it directly.
            </li>
          </ul>
          <p className="mt-4 text-ink-muted">
            A formal licence covering reuse of our text will be published before public launch.
            Until then, treat the above as our stated position on reuse.
          </p>
        </section>

        <section aria-labelledby="third-party">
          <SectionHeading id="third-party">Third-party material</SectionHeading>
          <p className="text-ink-muted">
            The documents we cite belong to their publishers — legislatures, ministries, courts,
            archives, and international organisations — and are subject to those
            publishers&rsquo; own terms. Our source list points to them; it does not license
            them.
          </p>
          <p className="mt-4 text-ink-muted">
            Institutional names and marks mentioned on this site belong to those institutions.
            We name them to describe them; naming an institution implies no relationship with it
            and no endorsement in either direction.
          </p>
        </section>

        <section aria-labelledby="acceptable">
          <SectionHeading id="acceptable">Acceptable use</SectionHeading>
          <p className="text-ink-muted">
            This site is published for education and reference. Do not use it, or material taken
            from it, to imply official status, to present yourself as affiliated with us, or as
            a component of anything designed to mislead about a legal system or a legal
            obligation.
          </p>
        </section>

        <section aria-labelledby="liability">
          <SectionHeading id="liability">Limits</SectionHeading>
          <p className="text-ink-muted">
            This site is provided as it is. To the extent permitted by applicable law, we are
            not liable for loss arising from reliance on it, from its unavailability, or from
            the content of external sites we link to. Nothing here excludes liability that
            cannot lawfully be excluded.
          </p>
        </section>

        <section aria-labelledby="changes">
          <SectionHeading id="changes">Changes and governing terms</SectionHeading>
          <p className="text-ink-muted">
            These terms may be updated as the platform develops. The governing law and the
            publishing entity will be stated here before public launch; we have not invented
            either in the meantime. See{' '}
            <Link href="/contact" className="link-inline">
              contact
            </Link>
            .
          </p>
        </section>
      </div>
    </ContentPage>
  );
}
