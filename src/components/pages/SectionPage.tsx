import type { Metadata } from 'next';
import Link from 'next/link';
import { CoverageNotice } from '@/components/content/CoverageNotice';
import { JsonLd } from '@/components/seo/JsonLd';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { PageIntro } from '@/components/ui/PageIntro';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getGuidesForSection, guidePath } from '@/content/guides';
import { getSection } from '@/content/sections';
import type { SectionId } from '@/content/types';
import { buildBreadcrumbs } from '@/lib/breadcrumbs';
import { breadcrumbSchema, collectionPageSchema, jsonLdGraph } from '@/lib/jsonld';
import { buildMetadata } from '@/lib/metadata';

export function sectionMetadata(id: SectionId): Metadata {
  const section = getSection(id);
  return buildMetadata({
    title: section.title,
    description: section.summary,
    path: `/${id}`,
  });
}

/** Every Tier 1 section page uses this structure, so readers learn it once. */
export function SectionPage({ id }: { id: SectionId }) {
  const section = getSection(id);
  const path = `/${id}`;
  const guides = getGuidesForSection(id);

  return (
    <>
      <JsonLd
        data={jsonLdGraph([
          collectionPageSchema({
            path,
            title: section.title,
            description: section.summary,
            parts: guides.map((guide) => ({
              path: guidePath(guide),
              title: guide.question,
              description: guide.summary,
            })),
          }),
          breadcrumbSchema(buildBreadcrumbs(path)),
        ])}
      />

      <PageIntro
        path={path}
        eyebrow="Knowledge section"
        title={section.title}
        lead={section.intro}
      />

      <Container width="wide">
        <div className="py-12">
          {guides.length > 0 ? (
            <section aria-labelledby="start-here">
              <SectionHeading
                id="start-here"
                description="Foundational guides in this section, in reading order."
              >
                Start here
              </SectionHeading>
              <ul className="grid gap-5 sm:grid-cols-2">
                {guides.map((guide) => (
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
          ) : (
            <CoverageNotice title="No guides published in this section yet">
              <p>
                This section has a defined scope and an editorial standard, but no guides have
                been researched and published in it. We publish a page when it has been
                researched and sourced, not to fill a gap in the navigation.
              </p>
              <p>
                In the meantime, the{' '}
                <Link href="/glossary" className="link-inline">
                  glossary
                </Link>{' '}
                covers several terms used in this area, and the{' '}
                <Link href="/institutions" className="link-inline">
                  institution types reference
                </Link>{' '}
                describes the bodies involved.
              </p>
            </CoverageNotice>
          )}

          <section aria-labelledby="key-ideas" className="mt-16">
            <SectionHeading
              id="key-ideas"
              description="What makes this area difficult to understand from the outside."
            >
              Key ideas
            </SectionHeading>
            <ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {section.keyIdeas.map((idea) => (
                <li key={idea.title}>
                  <h3 className="font-semibold text-ink">{idea.title}</h3>
                  <p className="mt-1 text-ink-muted">{idea.body}</p>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="variation" className="mt-16">
            <SectionHeading id="variation">How this varies internationally</SectionHeading>
            <p className="max-w-measure text-ink-muted">{section.variationNote}</p>
          </section>

          <section aria-labelledby="out-of-scope" className="mt-16">
            <SectionHeading
              id="out-of-scope"
              description="Stated explicitly. Scope discipline is a reader service, and in some cases an editorial safety rule."
            >
              What this section does not cover
            </SectionHeading>
            <ul className="max-w-measure list-disc space-y-2 pl-6 text-ink-muted">
              {section.outOfScope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="related-sections" className="mt-16">
            <SectionHeading id="related-sections">Related sections</SectionHeading>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {section.relatedSections.map((related) => (
                <li key={related}>
                  <Link href={`/${related}`} className="link-inline font-medium">
                    {getSection(related).title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Container>
    </>
  );
}
