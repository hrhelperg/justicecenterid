import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CountryHub } from '@/components/pages/CountryPage';
import { PUBLISHED_DOSSIERS, getDossier } from '@/content/dossiers';
import { buildMetadata } from '@/lib/metadata';

export const dynamicParams = false;

interface RouteParams {
  params: Promise<{ country: string }>;
}

export function generateStaticParams() {
  return PUBLISHED_DOSSIERS.map((dossier) => ({ country: dossier.slug }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { country } = await params;
  const dossier = getDossier(country);
  if (!dossier) return {};

  return buildMetadata({
    title: `Justice and public safety in ${dossier.name}`,
    description: dossier.summary,
    path: `/countries/${dossier.slug}`,
  });
}

export default async function Page({ params }: RouteParams) {
  const { country } = await params;
  const dossier = getDossier(country);
  if (!dossier || dossier.status !== 'published') notFound();

  return <CountryHub dossier={dossier} />;
}
