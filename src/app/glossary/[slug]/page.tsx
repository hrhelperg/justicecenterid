import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { GlossaryTermPage } from '@/components/pages/ReferencePage';
import { glossaryPath } from '@/content/glossary';
import { ROUTED_GLOSSARY, getRoutedGlossaryTerm } from '@/content/glossary-routes';
import { buildMetadata } from '@/lib/metadata';

/**
 * Only terms that satisfy the glossary publication gate are routed. A hub-only slug —
 * including every term whose intent is owned by an existing guide — resolves to nothing
 * and 404s, rather than rendering a thin page that competes with the guide.
 */
export const dynamicParams = false;

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ROUTED_GLOSSARY.map((term) => ({ slug: term.slug }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const term = getRoutedGlossaryTerm(slug);
  if (!term) return {};

  return buildMetadata({
    title: term.term,
    description: term.definition,
    path: glossaryPath(term),
  });
}

export default async function Page({ params }: RouteParams) {
  const { slug } = await params;
  const term = getRoutedGlossaryTerm(slug);
  if (!term) notFound();

  return <GlossaryTermPage term={term} />;
}
