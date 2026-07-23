import type { Metadata } from 'next';
import Link from 'next/link';
import { ContentPage } from '@/components/pages/ContentPage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { buildMetadata } from '@/lib/metadata';

const PATH = '/methodology';
const DESCRIPTION =
  'How research is conducted at JusticeCenterID: framing the question, establishing the range of arrangements before the specifics, working outward from primary sources, and recording what could not be established.';

export const metadata: Metadata = buildMetadata({
  title: 'Research Methodology',
  description: DESCRIPTION,
  path: PATH,
});

export default function MethodologyPage() {
  return (
    <ContentPage
      path={PATH}
      eyebrow="Editorial standards"
      title="Research methodology"
      lead={DESCRIPTION}
      description={DESCRIPTION}
      width="measure"
    >
      <div className="space-y-10">
        <section aria-labelledby="frame">
          <SectionHeading id="frame">1. Frame the question</SectionHeading>
          <p className="text-ink-muted">
            Research starts from the reader&rsquo;s question in the reader&rsquo;s words —
            &ldquo;what does a prosecutor actually decide?&rdquo;, not &ldquo;prosecutorial
            discretion&rdquo;. Before searching, we write down the question, the jurisdictional
            scope, what would count as an answer, and what would falsify a draft answer.
          </p>
        </section>

        <section aria-labelledby="range">
          <SectionHeading id="range">
            2. Establish the range before the specifics
          </SectionHeading>
          <p className="text-ink-muted">
            Comparative work fails when one country&rsquo;s arrangement becomes the mental
            template. We counter that by identifying the function first, then finding at least
            two systems that perform it through structurally different arrangements, and only
            then describing how any individual system does it.
          </p>
          <p className="mt-4 text-ink-muted">
            This is why the jurisdictional-variation section of a guide is drafted early rather
            than appended at the end.
          </p>
        </section>

        <section aria-labelledby="outward">
          <SectionHeading
            id="outward"
            description="This is the sequence of actions, not merely an order of preference."
          >
            3. Work outward from primary sources
          </SectionHeading>
          <ol className="list-decimal space-y-2 pl-6 text-ink-muted">
            <li>
              The legal instrument that creates the institution or the power — read, not
              summarised.
            </li>
            <li>
              The institution&rsquo;s own official material, treated as self-description and
              attributed as such.
            </li>
            <li>
              Official oversight material — inspectorate reports, ombudsman findings, audit
              reports, parliamentary evidence. Frequently the best structural descriptions
              available, because their job is to describe how something actually works.
            </li>
            <li>International-organisation comparative material.</li>
            <li>
              Academic comparative literature, for analytical vocabulary and the known limits of
              comparison.
            </li>
            <li>Archives and museum collections, for historical claims.</li>
            <li>Journalism, last, for contemporary context only, always attributed.</li>
          </ol>
          <p className="mt-4 text-ink-muted">
            If research begins at step seven and works backwards, the framing of the reporting
            survives into the page. We start at step one.
          </p>
        </section>

        <section aria-labelledby="record">
          <SectionHeading id="record">4. Read the source, then record it</SectionHeading>
          <p className="text-ink-muted">
            A source is recorded only after it has been read at the relevant point, and
            recording includes writing down what it establishes <em>and what it does not</em>.
            If that note cannot be written specifically, the source has not been read carefully
            enough to cite.
          </p>
          <p className="mt-4 text-ink-muted">
            The URL is verified at the moment of recording and the date is stored. Constructing
            a plausible URL from a pattern is prohibited — see{' '}
            <Link href="/sources" className="link-inline">
              research and sources
            </Link>
            .
          </p>
        </section>

        <section aria-labelledby="conflict">
          <SectionHeading id="conflict">5. Handling sources that disagree</SectionHeading>
          <dl className="divide-y divide-line border-y border-line">
            {[
              {
                term: 'Different jurisdictions',
                description:
                  'Not a conflict at all. Both claims are scoped and the variation is presented.',
              },
              {
                term: 'Primary source vs secondary summary',
                description:
                  'The primary source governs, and the discrepancy is worth noting if the summary is widely repeated.',
              },
              {
                term: 'Law as written vs inspection findings on practice',
                description:
                  'Both are presented, with an explicit statement that formal rule and observed practice differ. That gap is often the most instructive thing on the page.',
              },
              {
                term: 'Genuine scholarly disagreement',
                description:
                  'Positions are presented with attribution, the paragraph is marked as disputed, and we do not adjudicate.',
              },
            ].map((item) => (
              <div
                key={item.term}
                className="grid gap-1 py-4 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-6"
              >
                <dt className="font-semibold text-ink">{item.term}</dt>
                <dd className="text-ink-muted">{item.description}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-ink-muted">
            We never resolve a conflict by picking the more convenient source or splitting the
            difference.
          </p>
        </section>

        <section aria-labelledby="gaps">
          <SectionHeading id="gaps">6. Record what could not be established</SectionHeading>
          <p className="text-ink-muted">
            Failed research is recorded rather than discarded. Anything we could not establish
            goes into the page&rsquo;s uncertainty list and is shown to you — a structure that
            changed on a date we could not source, an institution whose current mandate could
            not be confirmed, a widely repeated figure whose original source could not be
            located.
          </p>
          <p className="mt-4 text-ink-muted">
            Publishing the gap is better than closing it with an assumption, and it tells a
            future editor exactly where to work.
          </p>
        </section>

        <section aria-labelledby="checks">
          <SectionHeading id="checks">7. Fact check and safety review</SectionHeading>
          <p className="text-ink-muted">
            Fact-checking is a separate pass from editorial review, performed against the source
            records rather than the author&rsquo;s memory of them. Every sentence containing a
            checkable claim is matched to a source; each source is reopened and confirmed to
            support the claim at the level of specificity stated; numbers, dates, names, and
            institutional titles are checked character by character. Anything that fails is
            removed, rescoped, or moved to the uncertainty list.
          </p>
          <p className="mt-4 text-ink-muted">
            Safety review follows, for law enforcement, investigations, forensics, and public
            safety. It asks a different question: not whether the content is true, but what it
            could be used for.
          </p>
        </section>

        <section aria-labelledby="not">
          <SectionHeading id="not">What research is not</SectionHeading>
          <ul className="list-disc space-y-2 pl-6 text-ink-muted">
            <li>
              Summarising other explainer sites. If the only support for a claim is that other
              sites say it, the claim is unsourced.
            </li>
            <li>
              Reasoning from what seems institutionally sensible. Systems are frequently
              organised in ways that are not the obvious design.
            </li>
            <li>
              Filling a structural gap because a section looks thin. A thin section with an
              honest scope note is correct; an invented one is not.
            </li>
            <li>
              Generating plausible detail. Plausibility is the failure mode, not the standard.
            </li>
          </ul>
        </section>
      </div>
    </ContentPage>
  );
}
