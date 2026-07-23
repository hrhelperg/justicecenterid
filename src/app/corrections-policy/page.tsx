import type { Metadata } from 'next';
import Link from 'next/link';
import { ContentPage } from '@/components/pages/ContentPage';
import { Callout } from '@/components/ui/Callout';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { buildMetadata } from '@/lib/metadata';
import { SITE } from '@/lib/site';

const PATH = '/corrections-policy';
const DESCRIPTION =
  'How JusticeCenterID handles its own errors: what counts as an error, how quickly each class is fixed, how corrections are shown, and how to report one.';

export const metadata: Metadata = buildMetadata({
  title: 'Corrections Policy',
  description: DESCRIPTION,
  path: PATH,
});

const CLASSES = [
  {
    name: 'Factual error',
    example:
      'Wrong date, wrong institutional name, wrong legal provision, a claim the cited source does not support, or a structure described as current that has changed.',
    handling: 'Corrected and logged, with a correction notice on the page.',
  },
  {
    name: 'Sourcing error',
    example:
      'A citation that does not exist, points to the wrong document, or has been misattributed.',
    handling:
      'Corrected and logged. Always treated as critical, regardless of how minor the underlying claim is.',
  },
  {
    name: 'Scope error',
    example:
      'A claim stated more broadly than its sources support, or one country’s rule presented as general.',
    handling: 'Rescoped and logged.',
  },
  {
    name: 'Framing error',
    example:
      'Loss of neutrality, analysis presented as fact, or an institution described only by its powers or only by its failures.',
    handling: 'Rewritten and logged.',
  },
  {
    name: 'Omission',
    example:
      'A material qualification, limitation, or oversight mechanism left out such that the page misleads.',
    handling: 'Added and logged.',
  },
  {
    name: 'Staleness',
    example: 'Accurate when written, no longer accurate.',
    handling: 'Updated, with a dated notice on the page. Logged if the change alters meaning.',
  },
  {
    name: 'Presentation defect',
    example: 'Typography, formatting, layout, or a broken internal link.',
    handling: 'Fixed. Not logged.',
  },
];

export default function CorrectionsPolicyPage() {
  return (
    <ContentPage
      path={PATH}
      eyebrow="Editorial standards"
      title="Corrections policy"
      lead={DESCRIPTION}
      description={DESCRIPTION}
      width="measure"
    >
      <div className="space-y-10">
        <section aria-labelledby="principle">
          <SectionHeading id="principle">The principle</SectionHeading>
          <p className="text-ink-muted">
            We will get things wrong. A platform about institutional accountability that handles
            its own errors badly has failed at the thing it claims to explain.
          </p>
          <p className="mt-4 text-ink-muted">
            So: errors are fixed promptly, shown visibly where they changed meaning, and not
            quietly edited out of existence.
          </p>
        </section>

        <section aria-labelledby="report">
          <SectionHeading id="report">How to report an error</SectionHeading>
          <p className="text-ink-muted">A useful report includes:</p>
          <ol className="mt-3 list-decimal space-y-1 pl-6 text-ink-muted">
            <li>The page address.</li>
            <li>The specific sentence or claim.</li>
            <li>What is wrong with it.</li>
            <li>A source supporting the correction, where you have one.</li>
          </ol>
          <p className="mt-4 text-ink-muted">
            Reports without a source are still assessed. They simply take longer, because we
            have to do the sourcing.
          </p>
          {SITE.contact.correctionsEmail ? (
            <p className="mt-4 text-ink-muted">
              Send corrections to{' '}
              <a href={`mailto:${SITE.contact.correctionsEmail}`} className="link-inline">
                {SITE.contact.correctionsEmail}
              </a>
              .
            </p>
          ) : (
            <Callout variant="note" title="Our corrections channel is not yet open">
              This platform is in its foundation phase and the corrections address is being
              finalised before public launch. We would rather show you this than publish an
              address that does not receive mail. See{' '}
              <Link href="/contact" className="link-inline">
                contact
              </Link>{' '}
              for the current position.
            </Callout>
          )}
          <p className="mt-4 text-ink-muted">
            Reports are welcome from anyone, including the institutions we describe. An
            institution reporting an error about itself is treated exactly like any other
            reporter: the report is assessed against sources, not accepted or rejected on the
            basis of who sent it.
          </p>
        </section>

        <section aria-labelledby="classes">
          <SectionHeading id="classes">What counts as an error</SectionHeading>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line-strong bg-surface-sunken">
                  <th scope="col" className="p-3 font-semibold">
                    Class
                  </th>
                  <th scope="col" className="p-3 font-semibold">
                    Examples
                  </th>
                  <th scope="col" className="p-3 font-semibold">
                    How it is handled
                  </th>
                </tr>
              </thead>
              <tbody>
                {CLASSES.map((row) => (
                  <tr key={row.name} className="border-b border-line align-top">
                    <td className="p-3 font-medium text-ink">{row.name}</td>
                    <td className="p-3 text-ink-muted">{row.example}</td>
                    <td className="p-3 text-ink-muted">{row.handling}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="severity">
          <SectionHeading id="severity">Severity and response time</SectionHeading>
          <dl className="divide-y divide-line border-y border-line">
            <div className="grid gap-1 py-4 sm:grid-cols-[minmax(0,10rem)_1fr] sm:gap-6">
              <dt className="font-semibold text-ink">Critical</dt>
              <dd className="text-ink-muted">
                The error could mislead you about your rights, about what the law requires, or
                about whether we are an official body — or it is a fabricated or misattributed
                citation. The page is marked or withdrawn the same day the error is confirmed,
                and corrected within three working days.
              </dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-[minmax(0,10rem)_1fr] sm:gap-6">
              <dt className="font-semibold text-ink">Substantive</dt>
              <dd className="text-ink-muted">
                Changes the meaning of a claim without meeting the critical threshold. Corrected
                within ten working days.
              </dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-[minmax(0,10rem)_1fr] sm:gap-6">
              <dt className="font-semibold text-ink">Minor</dt>
              <dd className="text-ink-muted">
                Does not change meaning. Corrected at the next scheduled review of the page.
              </dd>
            </div>
          </dl>
          <p className="mt-4 text-ink-muted">
            A fabricated or misattributed citation is always critical, however minor the
            underlying claim, because it undermines every other citation on the site.
          </p>
        </section>

        <section aria-labelledby="outcomes">
          <SectionHeading id="outcomes">What happens to a report</SectionHeading>
          <p className="text-ink-muted">
            We acknowledge it, reopen the cited sources and check what they actually support,
            and then reach one of four outcomes:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-ink-muted">
            <li>
              <span className="font-medium text-ink">Correction</span> — we were wrong. Fixed,
              logged, and you are told.
            </li>
            <li>
              <span className="font-medium text-ink">Clarification</span> — we were not wrong
              but were unclear or under-scoped. Rewritten and logged.
            </li>
            <li>
              <span className="font-medium text-ink">No change</span> — the claim is supported,
              and we tell you which source supports it.
            </li>
            <li>
              <span className="font-medium text-ink">Under investigation</span> — we cannot yet
              establish who is right, and the claim is marked as uncertain on the page while the
              question is open.
            </li>
          </ul>
          <p className="mt-4 text-ink-muted">
            We do not decline a report because it is inconvenient, because it comes from an
            interested party, or because the error is embarrassing.
          </p>
        </section>

        <section aria-labelledby="notices">
          <SectionHeading id="notices">Correction notices</SectionHeading>
          <p className="text-ink-muted">
            Where a correction changes meaning, the page carries a dated notice stating what it
            previously said, what it now says, and why it changed. The notice stays; it is not
            removed after a period.
          </p>
          <p className="mt-4 text-ink-muted">We do not:</p>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-ink-muted">
            <li>Silently edit a substantive error out of existence.</li>
            <li>
              Delete a page to make an error disappear. If a page must be withdrawn, the address
              states that it was withdrawn and why.
            </li>
            <li>Backdate an updated or reviewed date.</li>
          </ul>
        </section>

        <section aria-labelledby="log">
          <SectionHeading id="log">The corrections log</SectionHeading>
          <p className="text-ink-muted">
            A dated log of substantive corrections is maintained, recording the date, the page,
            what was wrong, what it now says, and the source of the correction. It will be
            published once there is something in it. An empty corrections page on a site with no
            publication history would be a trust signal we have not earned.
          </p>
          <p className="mt-4 text-ink-muted">
            Most errors will be found by us during scheduled re-review rather than reported.
            Those are logged identically — there is no distinction between an error we found and
            an error we were told about.
          </p>
        </section>

        <section aria-labelledby="systemic">
          <SectionHeading id="systemic">When the same error recurs</SectionHeading>
          <p className="text-ink-muted">
            If a class of error occurs more than twice, the response is not another correction.
            It is a change to the process or to our automated checks so the class cannot recur.
            Several checks exist for exactly this reason: mandatory verification dates on every
            source URL, a ceiling on what a country page may claim relative to its research
            status, and a required jurisdictional-variation section on every guide.
          </p>
        </section>
      </div>
    </ContentPage>
  );
}
