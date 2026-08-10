import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ProfessionPage } from '@/components/pages/ReferencePage';
import { ROUTED_PROFESSIONS, getProfession, professionPath } from '@/content/professions';
import { buildMetadata } from '@/lib/metadata';

/** See the institution route: only `fact-checked` records are reachable. */
export const dynamicParams = false;

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ROUTED_PROFESSIONS.map((profession) => ({ slug: profession.slug }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const profession = getProfession(slug);
  if (!profession) return {};

  return buildMetadata({
    title: profession.title,
    description: profession.summary,
    path: professionPath(profession),
  });
}

export default async function Page({ params }: RouteParams) {
  const { slug } = await params;
  const profession = getProfession(slug);
  if (!profession) notFound();

  return <ProfessionPage profession={profession} />;
}
