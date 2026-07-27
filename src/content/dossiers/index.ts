import { COUNTRY_MODULES, countryModulePath, countryPath } from '../country-modules';
import type { CountryDossier, CountryModuleContent } from '../types';
import { ARGENTINA } from './argentina';
import { AUSTRALIA } from './australia';
import { AUSTRIA } from './austria';
import { BELGIUM } from './belgium';
import { BRAZIL } from './brazil';
import { CANADA } from './canada';
import { CZECHIA } from './czechia';
import { DENMARK } from './denmark';
import { FINLAND } from './finland';
import { GREECE } from './greece';
import { INDIA } from './india';
import { INDONESIA } from './indonesia';
import { ITALY } from './italy';
import { MEXICO } from './mexico';
import { NETHERLANDS } from './netherlands';
import { NEW_ZEALAND } from './new-zealand';
import { NORWAY } from './norway';
import { POLAND } from './poland';
import { PORTUGAL } from './portugal';
import { SINGAPORE } from './singapore';
import { SOUTH_KOREA } from './south-korea';
import { SPAIN } from './spain';
import { SWEDEN } from './sweden';
import { SWITZERLAND } from './switzerland';
import { FRANCE } from './france';
import { GERMANY } from './germany';
import { IRELAND } from './ireland';
import { JAPAN } from './japan';
import { UNITED_STATES } from './united-states';

/** Every country dossier. A country appears here only once it has been researched. */
export const COUNTRY_DOSSIERS: readonly CountryDossier[] = [
  FRANCE,
  GERMANY,
  UNITED_STATES,
  IRELAND,
  JAPAN,
  BRAZIL,
  CANADA,
  AUSTRALIA,
  SPAIN,
  SWITZERLAND,
  NETHERLANDS,
  BELGIUM,
  DENMARK,
  NORWAY,
  SWEDEN,
  FINLAND,
  ITALY,
  PORTUGAL,
  AUSTRIA,
  CZECHIA,
  POLAND,
  GREECE,
  NEW_ZEALAND,
  SOUTH_KOREA,
  SINGAPORE,
  INDIA,
  INDONESIA,
  MEXICO,
  ARGENTINA,
];

export const PUBLISHED_DOSSIERS: readonly CountryDossier[] = COUNTRY_DOSSIERS.filter(
  (d) => d.status === 'published',
);

export function getDossier(slug: string): CountryDossier | undefined {
  return COUNTRY_DOSSIERS.find((d) => d.slug === slug);
}

export function getDossierByCode(code: string): CountryDossier | undefined {
  return COUNTRY_DOSSIERS.find((d) => d.countryCode === code);
}

/**
 * Modules that produce a route.
 *
 * `status === 'published'` is the only gate. A draft module has no page, no sitemap entry
 * and no navigation link — it is visible to readers only as a stated gap on the country hub.
 */
export function publishedModules(dossier: CountryDossier): CountryModuleContent[] {
  return dossier.modules.filter((m) => m.status === 'published');
}

export function deferredModules(dossier: CountryDossier): CountryModuleContent[] {
  return dossier.modules.filter((m) => m.status !== 'published');
}

export function getModule(
  dossier: CountryDossier,
  moduleSlug: string,
): CountryModuleContent | undefined {
  const definition = COUNTRY_MODULES.find((m) => m.slug === moduleSlug);
  if (!definition) return undefined;
  return dossier.modules.find((m) => m.moduleId === definition.id);
}

/** Module definitions for a dossier's published modules, in registry order. */
export function publishedModuleDefinitions(dossier: CountryDossier) {
  const published = new Set(publishedModules(dossier).map((m) => m.moduleId));
  return COUNTRY_MODULES.filter((definition) => published.has(definition.id));
}

export { countryPath, countryModulePath };
