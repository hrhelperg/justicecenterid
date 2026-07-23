import type { Metadata } from 'next';
import Link from 'next/link';
import { ContentPage } from '@/components/pages/ContentPage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { buildMetadata } from '@/lib/metadata';

const PATH = '/editorial-policy';
const DESCRIPTION =
  'How JusticeCenterID content is commissioned, researched, written, reviewed, and labelled — including the neutrality checklist and the list of things we will not publish.';

export const metadata: Metadata = buildMetadata({
  title: 'Editorial Policy',
  description: DESCRIPTION,
  path: PATH,
});

export default function EditorialPolicyPage() {
  return (
    <ContentPage
      path={PATH}
      eyebrow="Editorial standards"
      title="Editorial policy"
      lead={DESCRIPTION}
      description={DESCRIPTION}
      width="measure"
    >
      <div className="space-y-10">
        <section aria-labelledby="independence">
          <SectionHeading id="independence">Independence</SectionHeading>
          <p className="text-ink-muted">
            No institution, agency, ministry, political party, campaign group, or commercial
            sponsor has review rights over our content, approval rights over publication, or the
            ability to require a change. If that ever changes for a specific piece of work, the
            arrangement will be disclosed on the page itself, naming the party and the nature of
            the arrangement.
          </p>
          <p className="mt-4 text-ink-muted">
            We publish no sponsored content, advertorial, or paid placement, and we carry no
            advertising.
          </p>
        </section>

        <section aria-labelledby="lifecycle">
          <SectionHeading
            id="lifecycle"
            description="A page cannot be published as unreviewed. This is enforced by an automated check that fails the build, not by process discipline."
          >
            How a page is made
          </SectionHeading>
          <ol className="list-decimal space-y-3 pl-6 text-ink-muted">
            <li>
              <span className="font-medium text-ink">Commissioned.</span> The reader question,
              the jurisdictional scope, what the page will not cover, and whether it is
              safety-sensitive are written down before research begins.
            </li>
            <li>
              <span className="font-medium text-ink">Researched.</span> Sources are gathered
              from primary material first, and each is recorded with a note stating what it
              supports and what it does not.
            </li>
            <li>
              <span className="font-medium text-ink">Drafted.</span> All required sections are
              written: definition, why it exists, how it works, common misconceptions,
              jurisdictional variation, and rights and accountability.
            </li>
            <li>
              <span className="font-medium text-ink">Editorially reviewed.</span> Structure,
              neutrality, accessibility of language, and internal linking are checked.
            </li>
            <li>
              <span className="font-medium text-ink">Fact-checked.</span> A separate pass, made
              against the source records rather than the author&rsquo;s memory of them. Every
              checkable claim is matched to a source and confirmed at the level of specificity
              stated.
            </li>
            <li>
              <span className="font-medium text-ink">Safety-reviewed.</span> Mandatory for law
              enforcement, investigations, forensics, and public safety. A different question
              from fact-checking: not &ldquo;is this true?&rdquo; but &ldquo;what could this be
              used for?&rdquo;
            </li>
            <li>
              <span className="font-medium text-ink">Published, then re-reviewed.</span>{' '}
              Structural content at least every 24 months; content depending on current law at
              least every 12.
            </li>
          </ol>
        </section>

        <section aria-labelledby="scoping">
          <SectionHeading id="scoping">Scoping every claim</SectionHeading>
          <p className="text-ink-muted">
            A claim must be scoped to the jurisdictions its sources actually cover. In practice
            this is the single most frequent edit we make.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line-strong bg-surface-sunken">
                  <th scope="col" className="p-3 font-semibold">
                    Not acceptable
                  </th>
                  <th scope="col" className="p-3 font-semibold">
                    Acceptable
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-line align-top">
                  <td className="p-3 text-ink-muted">
                    &ldquo;Prosecutors are independent of government.&rdquo;
                  </td>
                  <td className="p-3 text-ink-muted">
                    &ldquo;The degree of prosecutorial independence from the executive varies
                    substantially; in some systems the prosecution service is formally part of a
                    ministry of justice, in others it is constitutionally separate.&rdquo;
                  </td>
                </tr>
                <tr className="border-b border-line align-top">
                  <td className="p-3 text-ink-muted">&ldquo;Courts are adversarial.&rdquo;</td>
                  <td className="p-3 text-ink-muted">
                    &ldquo;Common-law systems are typically adversarial and civil-law systems
                    typically inquisitorial, though the distinction is a spectrum and most
                    systems mix elements of both.&rdquo;
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-ink-muted">
            Where we genuinely cannot scope a claim, we do not make it.
          </p>
        </section>

        <section aria-labelledby="registers">
          <SectionHeading id="registers">Fact, analysis, and opinion</SectionHeading>
          <ul className="list-disc space-y-2 pl-6 text-ink-muted">
            <li>
              <span className="font-medium text-ink">Fact</span> — sourced and checkable. The
              default register, rendered as plain body text.
            </li>
            <li>
              <span className="font-medium text-ink">Analysis</span> — our own synthesis.
              Labelled and rendered in a marked callout. Analysis may connect sourced facts; it
              may not introduce new ones.
            </li>
            <li>
              <span className="font-medium text-ink">Attributed opinion</span> — someone
              else&rsquo;s position, always named. Never &ldquo;it is widely accepted
              that&hellip;&rdquo;
            </li>
          </ul>
          <p className="mt-4 text-ink-muted">
            Evaluative adjectives applied to institutions — ineffective, robust, politicised —
            are analysis or attributed opinion, never fact.
          </p>
        </section>

        <section aria-labelledby="neutrality">
          <SectionHeading
            id="neutrality"
            description="Applied at editorial review. Any 'no' blocks publication."
          >
            The neutrality checklist
          </SectionHeading>
          <ol className="list-decimal space-y-2 pl-6 text-ink-muted">
            <li>Could this page have been written by that institution&rsquo;s press office?</li>
            <li>
              Could it have been written by that institution&rsquo;s most committed critic?
            </li>
            <li>Are contested positions attributed to identifiable holders?</li>
            <li>
              Is any country used as the unmarked default, the implicit norm, or the recurring
              negative example?
            </li>
            <li>Are evaluative adjectives sourced or marked as analysis?</li>
            <li>Would a reader be able to infer the author&rsquo;s political position?</li>
            <li>
              Does the page state a power without its limits, or a limit without the power it
              constrains?
            </li>
            <li>
              If the page covers a reform debate, are the strongest versions of the main
              positions presented — not the easiest to dismiss?
            </li>
          </ol>
        </section>

        <section aria-labelledby="respect">
          <SectionHeading id="respect">Respect without propaganda</SectionHeading>
          <p className="text-ink-muted">
            We take seriously that public-service work is difficult, carries real responsibility
            and real risk, and is performed under legal and resource constraints outsiders
            rarely see. We take equally seriously that these institutions hold coercive powers,
            that those powers have been misused, and that oversight and reform exist because of
            documented failures.
          </p>
          <p className="mt-4 text-ink-muted">
            Both are content. Neither is a disclaimer attached to the other. We do not use
            &ldquo;a few bad apples&rdquo; framing and we do not use &ldquo;systemically
            corrupt&rdquo; framing — both substitute a conclusion for a description.
          </p>
        </section>

        <section
          aria-labelledby="never"
          className="rounded-md border border-line-strong bg-surface-sunken p-6"
        >
          <SectionHeading id="never">What we will not publish</SectionHeading>
          <ul className="list-disc space-y-2 pl-6 text-ink-muted">
            <li>
              Fabricated statistics, quotations, dates, salaries, rankings, counts, source
              titles, or URLs.
            </li>
            <li>
              A citation to a real institution for a document that does not exist, or a URL
              constructed by pattern rather than verified.
            </li>
            <li>
              Any hand-written site statistic. All counts are computed from the content
              registry.
            </li>
            <li>
              Case-by-case crime narration, victim or perpetrator detail, or graphic
              description.
            </li>
            <li>
              Content that could function as instruction for evading law enforcement, concealing
              an offence, defeating a forensic or security control, conducting surveillance on a
              person, or interfering with an investigation, a witness, or a proceeding.
            </li>
            <li>Emergency instructions of any kind.</li>
            <li>
              Any statement implying we are an official body, or that we provide legal advice.
            </li>
            <li>
              Claims about a country&rsquo;s crime levels, corruption, institutional
              effectiveness, public trust, officer mortality, staffing, political control, or
              human-rights performance without a dated source of appropriate standing. These
              nine are named individually because they are the ones most often asserted from
              memory.
            </li>
          </ul>
        </section>

        <section aria-labelledby="related">
          <SectionHeading id="related">Related policies</SectionHeading>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Link href="/methodology" className="link-inline">
                Research methodology
              </Link>
            </li>
            <li>
              <Link href="/sources" className="link-inline">
                Source hierarchy and index
              </Link>
            </li>
            <li>
              <Link href="/corrections-policy" className="link-inline">
                Corrections policy
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="link-inline">
                Disclaimer
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </ContentPage>
  );
}
