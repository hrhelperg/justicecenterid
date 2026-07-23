import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/seo/JsonLd';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/LinkButton';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PUBLISHED_GUIDES, guidePath } from '@/content/guides';
import { PUBLISHED_INSTITUTION_TYPES } from '@/content/institutions';
import { PUBLISHED_PROFESSIONS } from '@/content/professions';
import { SECTIONS } from '@/content/sections';
import { SITE_STATS } from '@/lib/content';
import { jsonLdGraph, webPageSchema } from '@/lib/jsonld';
import { buildMetadata } from '@/lib/metadata';
import { SITE } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Understanding Justice Worldwide',
  description: SITE.positioning,
  path: '/',
});

/** Guides surfaced on the home page as the recommended entry points. */
const FEATURED_SLUGS = [
  'what-is-justice',
  'what-is-the-rule-of-law',
  'why-societies-need-law-enforcement',
  'what-do-courts-do',
  'what-is-a-criminal-investigation',
  'what-is-forensic-science',
];

export default function HomePage() {
  const featured = FEATURED_SLUGS.map((slug) =>
    PUBLISHED_GUIDES.find((guide) => guide.slug === slug),
  ).filter((guide) => guide !== undefined);

  return (
    <>
      <JsonLd
        data={jsonLdGraph([
          webPageSchema({
            path: '/',
            title: `${SITE.name} — Understanding Justice Worldwide`,
            description: SITE.positioning,
          }),
        ])}
      />

      {/* 1. Restrained hero. The largest type on the site, and it appears once. */}
      <section className="border-b border-line bg-surface-raised">
        <Container width="wide">
          <div className="max-w-measure py-16 sm:py-20">
            <p className="text-sm font-medium tracking-wide text-brand uppercase">
              Independent educational reference
            </p>
            <h1 className="mt-3 text-4xl text-ink">Understanding justice worldwide</h1>
            <p className="mt-5 text-lg text-ink-muted [text-wrap:pretty]">{SITE.positioning}</p>
            <p className="mt-4 text-ink-muted">
              We explain how these institutions are structured, what authority they hold, what
              limits it, how they differ between countries, and how they came to exist — with
              sources you can check.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="/justice/what-is-justice">
                Start with: what is justice?
              </LinkButton>
              <LinkButton href="/about" variant="secondary">
                What this platform is
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      <Container width="wide">
        {/* 2. Mission. */}
        <section aria-labelledby="mission" className="py-14">
          <SectionHeading id="mission">Our mission</SectionHeading>
          <p className="max-w-measure text-lg text-ink">{SITE.mission}</p>
          <p className="mt-4 max-w-measure text-ink-muted">
            Most people encounter justice institutions rarely, and understanding of them is
            assembled from fiction, from event-driven news, and from terminology borrowed out of
            one country and applied to another. The result is a public with strong views about
            institutions whose basic structure is hard to describe. Read more about{' '}
            <Link href="/mission" className="link-inline">
              why we exist
            </Link>
            .
          </p>
        </section>

        {/* 3. Pathway. */}
        <section aria-labelledby="pathway" className="border-t border-line py-14">
          <SectionHeading
            id="pathway"
            description="Four questions, in the order that makes the rest easier to follow."
          >
            Understand the system
          </SectionHeading>
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: 'One',
                href: '/justice/what-is-justice',
                title: 'What justice means institutionally',
                body: 'Why the process matters as much as the outcome.',
              },
              {
                step: 'Two',
                href: '/justice/what-is-the-rule-of-law',
                title: 'What the rule of law requires',
                body: 'Why the government is bound by law it also enforces.',
              },
              {
                step: 'Three',
                href: '/law-enforcement/police-and-law-enforcement-difference',
                title: 'Who actually enforces law',
                body: 'Why “the police” is not one kind of organisation.',
              },
              {
                step: 'Four',
                href: '/justice/why-justice-systems-need-oversight',
                title: 'Who checks the institutions',
                body: 'Why oversight is designed in, not bolted on.',
              },
            ].map((item) => (
              <li key={item.href}>
                <Card
                  href={item.href}
                  title={item.title}
                  footer={`Step ${item.step.toLowerCase()}`}
                >
                  {item.body}
                </Card>
              </li>
            ))}
          </ol>
        </section>

        {/* 4. Core knowledge areas. */}
        <section aria-labelledby="areas" className="border-t border-line py-14">
          <SectionHeading
            id="areas"
            description="Eight sections, each with a defined scope and an explicit statement of what it does not cover."
          >
            Core knowledge areas
          </SectionHeading>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <Card href={`/${section.id}`} title={section.title}>
                  {section.summary}
                </Card>
              </li>
            ))}
          </ul>
        </section>

        {/* 5. Institutions. */}
        <section aria-labelledby="institutions" className="border-t border-line py-14">
          <SectionHeading
            id="institutions"
            description="Institution types, not named agencies — and, importantly, where each type does not exist."
          >
            Justice institutions explained
          </SectionHeading>
          <p className="max-w-measure text-ink-muted">
            A gendarmerie is not a military police force. A sheriff means something different in
            almost every country that has one. Border control and customs are separate legal
            regimes that often share a building. Our{' '}
            <Link href="/institutions" className="link-inline">
              institution types reference
            </Link>{' '}
            covers {PUBLISHED_INSTITUTION_TYPES.length} types and records where a familiar name
            denotes a materially different role.
          </p>
        </section>

        {/* 6. History and global coverage — honest about what does not exist yet. */}
        <section aria-labelledby="global" className="border-t border-line py-14">
          <SectionHeading id="global">History and global coverage</SectionHeading>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold text-ink">History</h3>
              <p className="mt-2 text-ink-muted">
                Institutions change, merge, are abolished, and keep their names through all of
                it. We treat continuity as a claim requiring evidence. The{' '}
                <Link href="/timeline" className="link-inline">
                  timeline
                </Link>{' '}
                is a selected set of{' '}
                {SITE_STATS.sources > 0 ? 'individually source-verified' : ''} milestones rather
                than a chronology, and it says so.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-ink">Countries</h3>
              <p className="mt-2 text-ink-muted">
                No country has been researched yet. The{' '}
                <Link href="/countries" className="link-inline">
                  countries section
                </Link>{' '}
                publishes the model and the coverage status, not knowledge we do not have. We
                will not claim coverage before it exists.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Professions. */}
        <section aria-labelledby="professions" className="border-t border-line py-14">
          <SectionHeading
            id="professions"
            description="Responsibilities, decision authority, constraints, and oversight — with no invented pay, staffing, or risk figures."
          >
            The professions behind the institutions
          </SectionHeading>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {PUBLISHED_PROFESSIONS.map((profession) => (
              <li key={profession.slug} className="text-ink-muted">
                {profession.title}
              </li>
            ))}
          </ul>
          <p className="mt-4">
            <Link href="/professions" className="link-inline font-medium">
              Read about the roles and what constrains them
            </Link>
          </p>
        </section>

        {/* 8. Editorial standards. */}
        <section aria-labelledby="standards" className="border-t border-line py-14">
          <SectionHeading id="standards">How we work</SectionHeading>
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="font-semibold text-ink">Sources you can check</h3>
              <p className="mt-2 text-ink-muted">
                Every source URL is opened and confirmed before publication, and carries the
                date it was checked. Where a document&rsquo;s identity could not be confirmed,
                we do not cite it.
              </p>
              <p className="mt-2">
                <Link href="/sources" className="link-inline">
                  All {SITE_STATS.sources} sources used on this site
                </Link>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-ink">Visible review state</h3>
              <p className="mt-2 text-ink-muted">
                Every substantive page shows its review status and the date it was last
                reviewed. A page that has not been fact-checked says so.
              </p>
              <p className="mt-2">
                <Link href="/editorial-policy" className="link-inline">
                  Our editorial policy
                </Link>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-ink">Errors get corrected</h3>
              <p className="mt-2 text-ink-muted">
                We will get things wrong. Corrections are made promptly and shown on the page
                where the meaning changed, rather than edited away quietly.
              </p>
              <p className="mt-2">
                <Link href="/corrections-policy" className="link-inline">
                  How to report an error
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* 9. Selected guides. */}
        <section aria-labelledby="guides" className="border-t border-line py-14">
          <SectionHeading
            id="guides"
            description={`${SITE_STATS.guides} guides published so far. Each one includes what people commonly get wrong and how the arrangement differs between countries.`}
          >
            Foundational guides
          </SectionHeading>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((guide) => (
              <li key={guide.slug}>
                <Card
                  href={guidePath(guide)}
                  title={guide.question}
                  footer={`About ${guide.readingTimeMinutes} minutes to read`}
                >
                  {guide.summary}
                </Card>
              </li>
            ))}
          </ul>
        </section>

        {/* 10. Independent-platform disclosure. */}
        <section
          aria-labelledby="independence"
          className="mb-4 rounded-md border border-line-strong bg-surface-sunken p-6"
        >
          <h2 id="independence" className="text-lg font-semibold text-ink">
            An independent platform
          </h2>
          <p className="mt-3 max-w-measure text-ink-muted">{SITE.independenceNotice}</p>
          <p className="mt-3 max-w-measure text-ink-muted">{SITE.legalNotice}</p>
          <p className="mt-3 max-w-measure text-ink-muted">{SITE.emergencyNotice}</p>
        </section>
      </Container>
    </>
  );
}
