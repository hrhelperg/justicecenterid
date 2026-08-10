import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { InstitutionTypePage } from '@/components/pages/ReferencePage';
import {
  ROUTED_INSTITUTION_TYPES,
  getInstitutionType,
  institutionPath,
} from '@/content/institutions';
import { buildMetadata } from '@/lib/metadata';

/**
 * Only `fact-checked` institution types are routed. `dynamicParams = false` means a slug
 * outside that set is a 404 rather than a rendered page, so an `editorial-review` record
 * cannot be reached by guessing its URL.
 */
export const dynamicParams = false;

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ROUTED_INSTITUTION_TYPES.map((institution) => ({ slug: institution.slug }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const institution = getInstitutionType(slug);
  if (!institution) return {};

  return buildMetadata({
    title: institution.title,
    description: institution.summary,
    path: institutionPath(institution),
  });
}

export default async function Page({ params }: RouteParams) {
  const { slug } = await params;
  const institution = getInstitutionType(slug);
  if (!institution) notFound();

  return <InstitutionTypePage institution={institution} />;
}
