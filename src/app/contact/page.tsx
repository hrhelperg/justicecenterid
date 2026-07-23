import type { Metadata } from 'next';
import Link from 'next/link';
import { ContentPage } from '@/components/pages/ContentPage';
import { Callout } from '@/components/ui/Callout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { buildMetadata } from '@/lib/metadata';
import { SITE } from '@/lib/site';

const PATH = '/contact';
const DESCRIPTION =
  'How to reach JusticeCenterID about a correction, a source question, or an editorial concern — and what to include so we can act on it.';

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description: DESCRIPTION,
  path: PATH,
});

const CHANNELS = [
  {
    title: 'Report a factual error',
    what: 'A claim that is wrong, unsupported by the source cited, or stated more broadly than the source allows.',
    include:
      'The page address, the exact sentence, what is wrong with it, and a source supporting the correction if you have one.',
    handling:
      'Assessed against our source records under the corrections policy. You are told the outcome.',
  },
  {
    title: 'Question a source',
    what: 'A citation you believe does not exist, points to the wrong document, is misattributed, or does not support the claim it is attached to.',
    include:
      'The page address, the source in question, and what you found when you checked it.',
    handling:
      'Always treated as critical, however minor the underlying claim. We reopen the source and check.',
  },
  {
    title: 'Correct something about your institution',
    what: 'A description of an institution you work for or represent that is inaccurate or out of date.',
    include:
      'The page address, what is inaccurate, and an official publication we can cite. We cannot make a change on the basis of an assertion alone, including an official one.',
    handling:
      'Assessed exactly like any other report. Being the institution described gives your report neither more nor less weight — only your sources do.',
  },
  {
    title: 'Editorial feedback',
    what: 'Framing that reads as promotional or as advocacy, a missing qualification, or an explanation that is not clear enough.',
    include: 'The page address and what specifically did not work.',
    handling: 'Reviewed against the neutrality checklist in our editorial policy.',
  },
];

export default function ContactPage() {
  return (
    <ContentPage
      path={PATH}
      eyebrow="About the platform"
      title="Contact"
      lead={DESCRIPTION}
      description={DESCRIPTION}
      width="measure"
      schemaType="ContactPage"
    >
      <div className="space-y-10">
        {SITE.contact.email ? (
          <section aria-labelledby="address">
            <SectionHeading id="address">How to reach us</SectionHeading>
            <p className="text-ink-muted">
              Write to{' '}
              <a href={`mailto:${SITE.contact.email}`} className="link-inline">
                {SITE.contact.email}
              </a>
              .
            </p>
          </section>
        ) : (
          <Callout variant="note" title="Our contact channels are not open yet">
            <span>
              This platform is in its foundation phase. Contact addresses are being finalised
              before public launch, and we would rather tell you that than publish an address
              that does not receive mail. The sections below set out what each channel will
              handle and what to include, so a report is ready when the channel opens.
            </span>
          </Callout>
        )}

        <section aria-labelledby="channels">
          <SectionHeading
            id="channels"
            description="Knowing which kind of report you are making helps us act on it faster."
          >
            What to send, and what to include
          </SectionHeading>
          <div className="space-y-8">
            {CHANNELS.map((channel) => (
              <div
                key={channel.title}
                className="rounded-md border border-line bg-surface-raised p-5"
              >
                <h3 className="text-lg font-semibold text-ink">{channel.title}</h3>
                <dl className="mt-3 space-y-2 text-sm">
                  <div>
                    <dt className="inline font-semibold text-ink">Use this for: </dt>
                    <dd className="inline text-ink-muted">{channel.what}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-ink">Please include: </dt>
                    <dd className="inline text-ink-muted">{channel.include}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-ink">What we do: </dt>
                    <dd className="inline text-ink-muted">{channel.handling}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="cannot"
          className="rounded-md border border-line-strong bg-surface-sunken p-6"
        >
          <SectionHeading id="cannot">What we cannot help with</SectionHeading>
          <p className="text-ink-muted">
            We are an educational publisher with no official status and no legal practice. We
            cannot, and will not, respond to:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-ink-muted">
            <li>Requests for advice about your own legal situation.</li>
            <li>Requests to assess whether something that happened to you was lawful.</li>
            <li>Requests to intervene in, review, or comment on a case.</li>
            <li>
              Complaints about an institution — those go to that institution&rsquo;s own
              oversight body.
            </li>
            <li>
              Requests for contact details of officials, officers, or legal representatives.
            </li>
            <li>Anything requiring an urgent response.</li>
          </ul>
          <p className="mt-4 text-ink-muted">{SITE.emergencyNotice}</p>
          <p className="mt-4 text-ink-muted">
            See our{' '}
            <Link href="/disclaimer" className="link-inline">
              disclaimer
            </Link>{' '}
            for the full position.
          </p>
        </section>

        <section aria-labelledby="operator">
          <SectionHeading id="operator">Who operates this platform</SectionHeading>
          {SITE.operator ? (
            <p className="text-ink-muted">
              {SITE.name} is published by {SITE.operator.legalName} (
              {SITE.operator.jurisdiction}).
            </p>
          ) : (
            <p className="text-ink-muted">
              The publishing entity and its jurisdiction will be stated here before public
              launch. We have deliberately not invented one in the meantime — a fabricated
              operator identity on a platform about institutional accountability would be
              self-defeating.
            </p>
          )}
          <p className="mt-4 text-ink-muted">{SITE.independenceNotice}</p>
        </section>
      </div>
    </ContentPage>
  );
}
