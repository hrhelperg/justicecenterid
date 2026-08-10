/**
 * The canonical list of public routes.
 *
 * This module is the machine-readable registry boundary between the content layer and the
 * tooling that checks it. Two rules keep it importable by plain Node:
 *
 *   1. **Relative imports only.** No `@/` path alias, because Node does not resolve the
 *      TypeScript path mapping.
 *   2. **No framework imports.** Nothing here touches React, Next, or any browser API.
 *
 * Together those let `scripts/verify-output.mjs` do `await import('../src/content/public-routes.ts')`
 * under Node's native type stripping and get the real registry — replacing the previous
 * approach of regex-parsing TypeScript source, which duplicated the source of truth and would
 * have become unmaintainable once country modules generated routes.
 *
 * `src/lib/routes.ts` builds its richer RouteRecord list from this same array, so the app and
 * the verifier cannot disagree about what exists.
 */

import { COUNTRY_MODULES } from './country-modules';
import { PUBLISHED_DOSSIERS, publishedModules } from './dossiers';
import { PUBLISHED_GUIDES, guidePath } from './guides';
import { glossaryPath } from './glossary';
import { ROUTED_GLOSSARY } from './glossary-routes';
import { ROUTED_INSTITUTION_TYPES, institutionPath } from './institutions';
import { ROUTED_PROFESSIONS, professionPath } from './professions';
import { SECTIONS } from './sections';

export type PublicRouteKind =
  | 'home'
  | 'section'
  | 'guide'
  | 'hub'
  | 'platform'
  | 'country'
  | 'country-module'
  | 'institution'
  | 'profession'
  | 'glossary-term';

export interface PublicRoute {
  path: string;
  kind: PublicRouteKind;
  title: string;
  /** The entity's own updatedOn. Never a build timestamp. */
  lastModified?: string;
  parent?: string;
}

const HUB_SLUGS = [
  ['countries', 'Countries'],
  ['history', 'History'],
  ['timeline', 'Timeline'],
  ['professions', 'Professions'],
  ['institutions', 'Institutions'],
  ['glossary', 'Glossary'],
  ['comparisons', 'Comparisons'],
  ['sources', 'Research and Sources'],
] as const;

const PLATFORM_SLUGS = [
  ['about', 'About'],
  ['mission', 'Mission'],
  ['editorial-policy', 'Editorial Policy'],
  ['corrections-policy', 'Corrections Policy'],
  ['methodology', 'Research Methodology'],
  ['contact', 'Contact'],
  ['privacy', 'Privacy'],
  ['terms', 'Terms'],
  ['disclaimer', 'Disclaimer'],
] as const;

function buildRoutes(): PublicRoute[] {
  const routes: PublicRoute[] = [{ path: '/', kind: 'home', title: 'Home' }];

  for (const section of SECTIONS) {
    routes.push({
      path: `/${section.id}`,
      kind: 'section',
      title: section.title,
      parent: '/',
    });
  }

  for (const guide of PUBLISHED_GUIDES) {
    routes.push({
      path: guidePath(guide),
      kind: 'guide',
      title: guide.shortTitle ?? guide.title,
      lastModified: guide.updatedOn,
      parent: `/${guide.section}`,
    });
  }

  for (const [slug, title] of HUB_SLUGS) {
    routes.push({ path: `/${slug}`, kind: 'hub', title, parent: '/' });
  }

  for (const [slug, title] of PLATFORM_SLUGS) {
    routes.push({ path: `/${slug}`, kind: 'platform', title, parent: '/' });
  }

  /*
   * Reference detail routes (Wave 2). Only records marked `fact-checked` are routed —
   * `editorial-review` records remain summaries on their hub and produce nothing here,
   * which is how two unsourceable institution types stay off the sitemap.
   */
  for (const institution of ROUTED_INSTITUTION_TYPES) {
    routes.push({
      path: institutionPath(institution),
      kind: 'institution',
      title: institution.shortTitle ?? institution.title,
      lastModified: institution.updatedOn,
      parent: '/institutions',
    });
  }

  /*
   * Glossary detail routes (Wave 3). ROUTED_GLOSSARY is derived from the publication gate
   * rather than from a flag — see src/content/glossary-routes.ts — so a term appears here
   * only if it actually carries the substance a page needs.
   */
  for (const term of ROUTED_GLOSSARY) {
    routes.push({
      path: glossaryPath(term),
      kind: 'glossary-term',
      title: term.term,
      lastModified: term.updatedOn,
      parent: '/glossary',
    });
  }

  for (const profession of ROUTED_PROFESSIONS) {
    routes.push({
      path: professionPath(profession),
      kind: 'profession',
      title: profession.shortTitle ?? profession.title,
      lastModified: profession.updatedOn,
      parent: '/professions',
    });
  }

  /*
   * Country routes. Only published dossiers and only published modules — a draft module
   * produces nothing here, which is what keeps unfinished research out of the sitemap.
   */
  for (const dossier of PUBLISHED_DOSSIERS) {
    routes.push({
      path: `/countries/${dossier.slug}`,
      kind: 'country',
      title: dossier.name,
      lastModified: dossier.updatedOn,
      parent: '/countries',
    });

    for (const content of publishedModules(dossier)) {
      const definition = COUNTRY_MODULES.find((m) => m.id === content.moduleId);
      if (!definition) continue;
      routes.push({
        path: `/countries/${dossier.slug}/${definition.slug}`,
        kind: 'country-module',
        title: content.title,
        lastModified: content.updatedOn,
        parent: `/countries/${dossier.slug}`,
      });
    }
  }

  return routes;
}

export const PUBLIC_ROUTES: readonly PublicRoute[] = buildRoutes();

export const PUBLIC_ROUTE_PATHS: readonly string[] = PUBLIC_ROUTES.map((r) => r.path);
