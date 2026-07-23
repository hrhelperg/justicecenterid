import type { Metadata } from 'next';
import Link from 'next/link';
import { ContentPage } from '@/components/pages/ContentPage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SITE_STATS } from '@/lib/content';
import { buildMetadata } from '@/lib/metadata';
import { SITE } from '@/lib/site';

const PATH = '/about';
const DESCRIPTION =
  'JusticeCenterID is an independent educational reference explaining how justice, law-enforcement, court, and public-safety institutions work — and, equally importantly, what it is not.';

export const metadata: Metadata = buildMetadata({
  title: 'About',
  description: DESCRIPTION,
  path: PATH,
});

export default function AboutPage() {
  return (
    <ContentPage
      path={PATH}
      eyebrow="About the platform"
      title="About JusticeCenterID"
      lead={DESCRIPTION}
      description={DESCRIPTION}
      width="measure"
      schemaType="AboutPage"
    >
      <div className="space-y-10">
        <section aria-labelledby="what">
          <SectionHeading id="what">What this is</SectionHeading>
          <p className="text-ink-muted">
            JusticeCenterID is an independent international educational and reference platform.
            It explains justice systems, law-enforcement institutions, courts, prosecution
            services, criminal investigations, forensic science, corrections, and public-safety
            organisations: why they exist, how they are structured, what constrains them, how
            they differ between countries, and how they came to be.
          </p>
          <p className="mt-4 text-ink-muted">
            It is a reference site. It is not a news site, not a campaign, and not a legal
            service.
          </p>
        </section>

        <section
          aria-labelledby="not"
          className="rounded-md border border-line-strong bg-surface-sunken p-6"
        >
          <SectionHeading id="not">What this is not</SectionHeading>
          <p className="text-ink-muted">{SITE.independenceNotice}</p>
          <p className="mt-4 text-ink-muted">{SITE.legalNotice}</p>
          <p className="mt-4 text-ink-muted">
            We publish no emergency guidance of any kind. {SITE.emergencyNotice}
          </p>
          <p className="mt-4 text-ink-muted">
            Our visual identity uses no badge, shield, seal, crest, or national colour. That is
            deliberate: nothing here should ever be mistakeable for an official state website.
          </p>
        </section>

        <section aria-labelledby="why-different">
          <SectionHeading id="why-different">What makes this different</SectionHeading>
          <ul className="list-disc space-y-3 pl-6 text-ink-muted">
            <li>
              <span className="font-medium text-ink">Comparative by default.</span> Every guide
              states how arrangements differ between jurisdictions before describing any one of
              them. Terminology from one country is never treated as the general case.
            </li>
            <li>
              <span className="font-medium text-ink">Absence is modelled.</span> Our content
              system can record &ldquo;this country has no equivalent institution&rdquo;,
              &ldquo;this structure no longer exists&rdquo;, and &ldquo;the same name means
              something different here&rdquo; — and it shows those states to you.
            </li>
            <li>
              <span className="font-medium text-ink">Editorial state is public.</span> Every
              substantive page shows its review status and review date. A page that has not been
              fact-checked says so.
            </li>
            <li>
              <span className="font-medium text-ink">Sources are checked and dated.</span> Every
              source URL was opened and confirmed before publication. Where a document&rsquo;s
              identity could not be confirmed, it is not cited.
            </li>
            <li>
              <span className="font-medium text-ink">Respect without promotion.</span> We take
              professional responsibility, difficulty, and risk seriously, and we take
              accountability, error, and reform equally seriously. Neither is a concession to
              the other.
            </li>
          </ul>
        </section>

        <section aria-labelledby="scale">
          <SectionHeading id="scale">How much exists today</SectionHeading>
          <p className="text-ink-muted">
            We will not claim coverage before it exists, so here is the actual state of the
            site, counted from the content registry rather than written by hand:
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-6 text-ink-muted">
            <li>{SITE_STATS.guides} concept guides</li>
            <li>{SITE_STATS.glossaryTerms} glossary terms</li>
            <li>{SITE_STATS.institutionTypes} institution types</li>
            <li>{SITE_STATS.professions} professions</li>
            <li>{SITE_STATS.sources} verified sources</li>
            <li>{SITE_STATS.countriesResearched} countries researched</li>
          </ul>
          <p className="mt-4 text-ink-muted">
            The architecture is built for thousands of entities. The content is a demonstration
            of the standard, not a corpus, and the difference matters.
          </p>
        </section>

        <section aria-labelledby="who">
          <SectionHeading id="who">Who writes this</SectionHeading>
          <p className="text-ink-muted">
            Content is published under the platform&rsquo;s name rather than individual bylines.
            There is no editorial board, advisory panel, or named expert reviewer, and none is
            implied — inventing one would be exactly the false-authority signal this platform
            exists to avoid. Responsibility sits with the platform. When named reviewers exist,
            they will be named, with their actual affiliation.
          </p>
          <p className="mt-4 text-ink-muted">
            No content here has been reviewed by an external subject-matter expert. It is
            sourced to primary material and checked against those sources, and we do not claim
            more than that.
          </p>
        </section>

        <section aria-labelledby="more">
          <SectionHeading id="more">Read further</SectionHeading>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Link href="/mission" className="link-inline">
                Our mission
              </Link>{' '}
              — why the platform exists
            </li>
            <li>
              <Link href="/editorial-policy" className="link-inline">
                Editorial policy
              </Link>{' '}
              — how content is written, reviewed, and labelled
            </li>
            <li>
              <Link href="/methodology" className="link-inline">
                Research methodology
              </Link>{' '}
              — how a page gets from a question to a draft
            </li>
            <li>
              <Link href="/corrections-policy" className="link-inline">
                Corrections policy
              </Link>{' '}
              — how to tell us we are wrong
            </li>
            <li>
              <Link href="/disclaimer" className="link-inline">
                Disclaimer
              </Link>{' '}
              — the limits of what this site is
            </li>
          </ul>
        </section>
      </div>
    </ContentPage>
  );
}
