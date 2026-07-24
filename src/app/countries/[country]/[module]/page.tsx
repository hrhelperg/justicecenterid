import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CountryModulePage } from '@/components/pages/CountryPage';
import { COUNTRY_MODULES } from '@/content/country-modules';
import {
  PUBLISHED_DOSSIERS,
  getDossier,
  getModule,
  publishedModules,
} from '@/content/dossiers';
import { buildMetadata } from '@/lib/metadata';

export const dynamicParams = false;

interface RouteParams {
  params: Promise<{ country: string; module: string }>;
}

/**
 * Only published modules produce params. A module still in research generates no route at
 * all, so it cannot be reached, indexed, or linked — the publication gate is the router.
 */
export function generateStaticParams() {
  return PUBLISHED_DOSSIERS.flatMap((dossier) =>
    publishedModules(dossier).flatMap((content) => {
      const definition = COUNTRY_MODULES.find((m) => m.id === content.moduleId);
      return definition ? [{ country: dossier.slug, module: definition.slug }] : [];
    }),
  );
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { country, module: moduleSlug } = await params;
  const dossier = getDossier(country);
  const content = dossier ? getModule(dossier, moduleSlug) : undefined;
  if (!dossier || !content) return {};

  return buildMetadata({
    title: content.title,
    description: content.summary,
    path: `/countries/${dossier.slug}/${moduleSlug}`,
  });
}

export default async function Page({ params }: RouteParams) {
  const { country, module: moduleSlug } = await params;
  const dossier = getDossier(country);
  if (!dossier || dossier.status !== 'published') notFound();

  const content = getModule(dossier, moduleSlug);
  if (!content || content.status !== 'published') notFound();

  return <CountryModulePage dossier={dossier} content={content} moduleSlug={moduleSlug} />;
}
