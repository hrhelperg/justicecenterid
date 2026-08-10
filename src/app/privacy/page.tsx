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
          provider. The one thing this site can store on your device is a record of a choice you
          make yourself in <strong>Cookie settings</strong>, and nothing is stored unless you
          make one.
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
            This site sets no cookies of any kind — not for analytics, not for advertising, not
            for anything else. No analytics or marketing technology is active, so there is
            currently nothing to consent to, and that is why you are not shown a consent banner.
            Asking permission for something we do not do would be misleading rather than
            careful.
          </p>
          <p className="mt-4 text-ink-muted">
            There is one exception, and it exists only because you asked for it. If you open{' '}
            <strong>Cookie settings</strong> in the footer and record a preference, this site
            saves that preference in your browser&rsquo;s local storage so it can be honoured on
            your next visit. It is stored under a single key,{' '}
            <code className="font-mono text-sm">jcid-consent</code>, and contains only three
            true/false values, a version number, and the date you made the choice. It contains
            no name, no identifier, no session token, and nothing that could be used to
            recognise you here or anywhere else.
          </p>
          <p className="mt-4 text-ink-muted">
            Nothing is written until you act. Reading these pages, following links, and using
            the navigation all store nothing. You can change your choice at any time from{' '}
            <strong>Cookie settings</strong>, and clearing your browser&rsquo;s site data
            removes the record entirely.
          </p>
          <p className="mt-4 text-ink-muted">
            The consent mechanism is built and ready so that if measurement is ever added, it
            cannot run before you have agreed to it. Optional categories are switched off by
            default and stay off unless you turn them on — declining is never assumed from
            silence, and it is not something we can change without changing this page first.
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
            The bar at the top of every page identifies JusticeCenterID as one product in the
            HELPERG ecosystem and links to the others. Those are ordinary links: nothing is
            loaded from any of those sites while you are here, and following one is a normal
            navigation to a site with its own privacy terms.
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
