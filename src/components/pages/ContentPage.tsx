import type { ReactNode } from 'react';
import { JsonLd } from '@/components/seo/JsonLd';
import { Container } from '@/components/ui/Container';
import { PageIntro } from '@/components/ui/PageIntro';
import { buildBreadcrumbs } from '@/lib/breadcrumbs';
import { breadcrumbSchema, jsonLdGraph, webPageSchema } from '@/lib/jsonld';

/**
 * Shared shell for hub and platform pages: structured data, breadcrumbs, one h1, and a
 * consistent opening. Content-specific markup goes in `children`.
 */
export function ContentPage({
  path,
  eyebrow,
  title,
  lead,
  description,
  schemaType = 'WebPage',
  meta,
  children,
  width = 'wide',
}: {
  path: string;
  eyebrow?: string;
  title: string;
  lead: string;
  description: string;
  schemaType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
  meta?: ReactNode;
  children: ReactNode;
  width?: 'measure' | 'wide';
}) {
  return (
    <>
      <JsonLd
        data={jsonLdGraph([
          webPageSchema({ path, title, description, type: schemaType }),
          breadcrumbSchema(buildBreadcrumbs(path)),
        ])}
      />
      <PageIntro
        width={width}
        path={path}
        eyebrow={eyebrow}
        title={title}
        lead={lead}
        meta={meta}
      />
      <Container width={width}>
        <div className="py-12">{children}</div>
      </Container>
    </>
  );
}
