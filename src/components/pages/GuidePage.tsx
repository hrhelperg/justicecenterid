import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BlockRenderer } from '@/components/content/BlockRenderer';
import { MisconceptionList } from '@/components/content/MisconceptionList';
import { RelatedTopics } from '@/components/content/RelatedTopics';
import { ReviewMeta } from '@/components/content/ReviewMeta';
import { SourceList } from '@/components/content/SourceList';
import { getDossier } from '@/content/dossiers';
import type { CountryExample } from '@/content/types';
import { JsonLd } from '@/components/seo/JsonLd';
import { Callout } from '@/components/ui/Callout';
import { Container } from '@/components/ui/Container';
import { PageIntro } from '@/components/ui/PageIntro';
import { Prose } from '@/components/ui/Prose';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getGuide, getGuidesForSection, guidePath } from '@/content/guides';
import { getSection } from '@/content/sections';
import type { Guide, SectionId } from '@/content/types';
import { buildBreadcrumbs } from '@/lib/breadcrumbs';
import { articleSchema, breadcrumbSchema, jsonLdGraph } from '@/lib/jsonld';
import { buildMetadata } from '@/lib/metadata';
import { SITE } from '@/lib/site';

export interface GuideRouteParams {
  params: Promise<{ slug: string }>;
}

export function guideStaticParams(section: SectionId): { slug: string }[] {
  return getGuidesForSection(section).map((guide) => ({ slug: guide.slug }));
}

function resolve(section: SectionId, slug: string): Guide {
  const guide = getGuide(slug);
  if (!guide || guide.section !== section) notFound();
  return guide;
}

export async function guideMetadata(
  section: SectionId,
  params: GuideRouteParams['params'],
): Promise<Metadata> {
  const { slug } = await params;
  const guide = resolve(section, slug);
  return buildMetadata({
    title: guide.question,
    description: guide.summary,
    path: guidePath(guide),
    type: 'article',
    publishedTime: guide.publishedOn,
    modifiedTime: guide.updatedOn,
    section: getSection(section).title,
  });
}

/**
 * The guide template. The required blocks are rendered in a fixed order — definition, why
 * it exists, how it works, misconceptions, jurisdictional variation, rights and
 * accountability — because that order is the editorial standard, not a layout choice.
 */
export async function GuidePage({
  section,
  params,
}: {
  section: SectionId;
  params: GuideRouteParams['params'];
}) {
  const { slug } = await params;
  const guide = resolve(section, slug);
  const path = guidePath(guide);
  const sectionDefinition = getSection(section);

  return (
    <>
      <JsonLd
        data={jsonLdGraph([
          articleSchema(guide, path),
          breadcrumbSchema(buildBreadcrumbs(path)),
        ])}
      />

      <PageIntro
        width="measure"
        path={path}
        eyebrow={sectionDefinition.title}
        title={guide.question}
        lead={guide.summary}
        meta={
          <ReviewMeta
            review={guide.review}
            updatedOn={guide.updatedOn}
            reviewedOn={guide.reviewedOn}
            safetyReview={guide.safetyReview}
          />
        }
      />

      <Container width="measure">
        <div className="py-12">
          <Prose>
            {guide.review === 'needs-update' && (
              <Callout variant="uncertainty" title="This page needs updating">
                We know this page is out of date. It is kept online with this notice rather than
                withdrawn, because a stale page with an honest warning serves you better than a
                missing one. See our{' '}
                <Link href="/corrections-policy" className="link-inline">
                  corrections policy
                </Link>
                .
              </Callout>
            )}

            <section aria-labelledby="definition">
              <SectionHeading id="definition">In short</SectionHeading>
              <BlockRenderer blocks={guide.definition} />
            </section>

            <section aria-labelledby="why" className="mt-12">
              <SectionHeading id="why">Why it exists</SectionHeading>
              <BlockRenderer blocks={guide.whyItExists} />
            </section>

            <section aria-labelledby="how" className="mt-12">
              <SectionHeading id="how">How it works</SectionHeading>
              <BlockRenderer blocks={guide.howItWorks} />
            </section>

            <section aria-labelledby="misconceptions" className="mt-12">
              <SectionHeading
                id="misconceptions"
                description="Widely held beliefs that do not match how the system actually operates."
              >
                Common misconceptions
              </SectionHeading>
              <MisconceptionList items={guide.misconceptions} />
            </section>

            <section aria-labelledby="variation" className="mt-12">
              <SectionHeading
                id="variation"
                description="A required section on every guide. Arrangements differ between countries, and we say how."
              >
                How this varies between jurisdictions
              </SectionHeading>
              <BlockRenderer blocks={guide.variation} />
            </section>

            <CountryEvidence
              id="examples"
              heading="Worked examples"
              description="Systems this platform has researched. Each example links to the dossier it draws on."
              examples={guide.countryExamples}
            />

            <CountryEvidence
              id="counterexamples"
              heading="Where the pattern does not hold"
              description="Systems at the same level that arrange this differently. The pattern above is a pattern, not a rule."
              examples={guide.counterExamples}
            />

            <section aria-labelledby="rights" className="mt-12">
              <SectionHeading id="rights">Rights and accountability</SectionHeading>
              <BlockRenderer blocks={guide.rightsAndAccountability} />
            </section>

            {guide.uncertainty && guide.uncertainty.length > 0 && (
              <section aria-labelledby="uncertainty" className="mt-12">
                <SectionHeading id="uncertainty">What we could not establish</SectionHeading>
                <ul className="my-5 list-disc space-y-2 pl-6 text-ink-muted">
                  {guide.uncertainty.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {guide.furtherReading && guide.furtherReading.length > 0 && (
              <section aria-labelledby="further" className="mt-12">
                <SectionHeading id="further">Where to go next</SectionHeading>
                <BlockRenderer blocks={guide.furtherReading} />
              </section>
            )}
          </Prose>

          <div>
            <Callout variant="note" title="This is general educational information">
              {SITE.legalNotice}
            </Callout>

            <RelatedTopics slugs={guide.related} />
            <SourceList ids={guide.sources} />
          </div>
        </div>
      </Container>
    </>
  );
}

/**
 * Country evidence on a relationship guide (Wave 4).
 *
 * Shared by the examples and counterexamples sections, which differ only in framing. The
 * counterexample section exists because a comparative page's characteristic failure is a
 * reader taking the pattern for a rule — giving it its own heading is what stops it being
 * skimmed past as a caveat inside the prose.
 *
 * An example whose dossier is not published renders nothing rather than a dead link.
 */
function CountryEvidence({
  id,
  heading,
  description,
  examples,
}: {
  id: string;
  heading: string;
  description: string;
  examples?: CountryExample[];
}) {
  const resolved = (examples ?? [])
    .map((example) => ({ example, dossier: getDossier(example.countrySlug) }))
    .filter((entry) => entry.dossier !== undefined);

  if (resolved.length === 0) return null;

  return (
    <section aria-labelledby={id} className="mt-12">
      <SectionHeading id={id} description={description}>
        {heading}
      </SectionHeading>
      <dl className="max-w-measure space-y-5">
        {resolved.map(({ example, dossier }) => (
          <div key={example.countrySlug}>
            <dt className="font-semibold text-ink">
              <Link href={`/countries/${example.countrySlug}`} className="link-inline">
                {dossier!.name}
              </Link>
            </dt>
            <dd className="mt-1 text-ink-muted">{example.note}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
