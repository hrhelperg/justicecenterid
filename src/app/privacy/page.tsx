import type { Metadata } from 'next';
import Link from 'next/link';
import { ContentPage } from '@/components/pages/ContentPage';
import { Callout } from '@/components/ui/Callout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { buildMetadata } from '@/lib/metadata';
import { SITE } from '@/lib/site';

const PATH = '/privacy';
const DESCRIPTION =
  'JusticeCenterID sets no cookies, runs no analytics, loads nothing from third-party services, and asks for no personal information. This page explains exactly what that means.';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy',
  description: DESCRIPTION,
  path: PATH,
});

export default function PrivacyPage() {
  return (
    <ContentPage
      path={PATH}
      eyebrow="Legal"
      title="Privacy"
      lead={DESCRIPTION}
      description={DESCRIPTION}
      width="measure"
    >
      <div className="space-y-10">
        <Callout variant="note" title="Short version">
          This site sets no cookies, contains no analytics or tracking code, loads no fonts,
          scripts, or images from other companies, and has no forms, accounts, or newsletter.
          The only data created by your visit is the standard server log kept by our hosting
          provider.
        </Callout>

        <section aria-labelledby="collect">
          <SectionHeading id="collect">What we collect</SectionHeading>
          <p className="text-ink-muted">
            Nothing directly. There is no form on this site, no login, no comment system, no
            newsletter sign-up, and no way for you to submit information to us through these
            pages.
          </p>
        </section>

        <section aria-labelledby="cookies">
          <SectionHeading id="cookies">Cookies and local storage</SectionHeading>
          <p className="text-ink-muted">
            None. This site sets no cookies of any kind — not for analytics, not for
            preferences, not for anything else — and stores nothing in your browser&rsquo;s
            local storage. That is why you have not been shown a cookie banner: there is nothing
            to consent to.
          </p>
        </section>

        <section aria-labelledby="third-party">
          <SectionHeading id="third-party">Third-party services</SectionHeading>
          <p className="text-ink-muted">
            The site loads no resource from any third party. Specifically, there is no analytics
            provider, no tag manager, no advertising network, no font content delivery network,
            no embedded video or map, no social-media widget, and no error-reporting service.
          </p>
          <p className="mt-4 text-ink-muted">
            Typography uses fonts already present on your device. Every script, stylesheet, and
            asset is served from this site&rsquo;s own address. Loading a page here causes your
            browser to contact no other company.
          </p>
          <p className="mt-4 text-ink-muted">
            External links in our source lists point to the publishers of the documents we cite
            — legislatures, ministries, archives, and international organisations. If you follow
            one, you are visiting that organisation&rsquo;s site under its own privacy terms.
            Nothing is loaded from those sites while you are here.
          </p>
        </section>

        <section aria-labelledby="logs">
          <SectionHeading id="logs">Server logs</SectionHeading>
          <p className="text-ink-muted">
            Our hosting provider processes standard server logs when a page is served. These
            typically record the address requested, the time, the response status, and technical
            details such as browser type and network address. This is ordinary operation of a
            web server and is used for delivering the site, security, and diagnosing faults.
          </p>
          <p className="mt-4 text-ink-muted">
            We do not use these logs to build a profile of you, do not combine them with any
            other data, and do not share them.
          </p>
          <p className="mt-4 text-ink-muted">
            The exact retention period is set by the hosting provider and will be stated here
            precisely before public launch. We are not going to state a number we have not
            confirmed.
          </p>
        </section>

        <section aria-labelledby="future">
          <SectionHeading id="future">If this changes</SectionHeading>
          <p className="text-ink-muted">
            If measurement is ever added, it will be privacy-preserving and cookieless, will not
            use cross-site identifiers, and will be described on this page <em>before</em> it is
            deployed — not afterwards.
          </p>
          <p className="mt-4 text-ink-muted">
            The same applies to any future contact form: what it collects, why, and how long it
            is kept will be stated here before it exists.
          </p>
        </section>

        <section aria-labelledby="controller">
          <SectionHeading id="controller">Who is responsible</SectionHeading>
          {SITE.operator ? (
            <p className="text-ink-muted">
              {SITE.operator.legalName} ({SITE.operator.jurisdiction}) is responsible for this
              site.
            </p>
          ) : (
            <p className="text-ink-muted">
              The publishing entity and its jurisdiction will be stated here before public
              launch, together with the contact route for data-protection questions. We have not
              invented an operator identity in the meantime. See{' '}
              <Link href="/contact" className="link-inline">
                contact
              </Link>
              .
            </p>
          )}
        </section>
      </div>
    </ContentPage>
  );
}
