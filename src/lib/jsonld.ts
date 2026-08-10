import type { Guide, GlossaryTerm } from '@/content/types';
import { getSources } from '@/content/sources';
import type { Crumb } from './breadcrumbs';
import { SITE, absoluteUrl } from './site';

/**
 * Typed structured-data builders.
 *
 * Every field is derived from real data. No field is populated to satisfy a validator, and
 * the schema types we deliberately do not use — GovernmentOrganization, LegalService,
 * FAQPage, HowTo, Review, EducationalOrganization — are listed with reasons in
 * docs/seo/seo-architecture.md.
 */

type JsonLdValue = string | number | boolean | null | JsonLdObject | JsonLdValue[];
export interface JsonLdObject {
  [key: string]: JsonLdValue | undefined;
}

const ORGANIZATION_ID = `${SITE.origin}/#organization`;
const WEBSITE_ID = `${SITE.origin}/#website`;

/**
 * No address, telephone, founder, foundingDate, or sameAs. We do not have them, and a
 * structured-data field is not a place to invent one.
 */
export function organizationSchema(): JsonLdObject {
  return {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: SITE.name,
    url: SITE.origin,
    description: SITE.positioning,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/wordmark.svg'),
      caption: `${SITE.name} wordmark`,
    },
    knowsAbout: [
      'Justice systems',
      'Law enforcement institutions',
      'Courts',
      'Prosecution',
      'Criminal investigation',
      'Forensic science',
      'Corrections',
      'Public safety institutions',
      'History of justice institutions',
    ],
  };
}

export function websiteSchema(): JsonLdObject {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE.name,
    alternateName: SITE.descriptor,
    url: SITE.origin,
    description: SITE.positioning,
    inLanguage: SITE.locale,
    publisher: { '@id': ORGANIZATION_ID },
  };
}

export function breadcrumbSchema(crumbs: Crumb[]): JsonLdObject | null {
  if (crumbs.length < 2) return null;
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: absoluteUrl(crumb.href),
    })),
  };
}

export function webPageSchema(input: {
  path: string;
  title: string;
  description: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
}): JsonLdObject {
  return {
    '@type': input.type ?? 'WebPage',
    '@id': `${absoluteUrl(input.path)}#webpage`,
    url: absoluteUrl(input.path),
    name: input.title,
    description: input.description,
    inLanguage: SITE.locale,
    isPartOf: { '@id': WEBSITE_ID },
    publisher: { '@id': ORGANIZATION_ID },
  };
}

export function collectionPageSchema(input: {
  path: string;
  title: string;
  description: string;
  parts: { path: string; title: string; description: string }[];
}): JsonLdObject {
  return {
    ...webPageSchema({ ...input, type: 'CollectionPage' }),
    hasPart: input.parts.map((part) => ({
      '@type': 'WebPage',
      url: absoluteUrl(part.path),
      name: part.title,
      description: part.description,
    })),
  };
}

/**
 * `citation` carries the page's source records. Unusual, and deliberate: the sourcing is the
 * product, and it should be machine-readable rather than only visible.
 */
export function articleSchema(guide: Guide, path: string): JsonLdObject {
  const sources = getSources(guide.sources);
  return {
    '@type': 'Article',
    '@id': `${absoluteUrl(path)}#article`,
    headline: guide.question,
    name: guide.title,
    description: guide.summary,
    url: absoluteUrl(path),
    inLanguage: SITE.locale,
    isAccessibleForFree: true,
    datePublished: guide.publishedOn,
    dateModified: guide.updatedOn,
    articleSection: guide.section,
    publisher: { '@id': ORGANIZATION_ID },
    isPartOf: { '@id': WEBSITE_ID },
    citation: sources.map((source) => ({
      '@type': 'CreativeWork',
      name: source.title,
      publisher: { '@type': 'Organization', name: source.publisher },
      ...(source.url ? { url: source.url } : {}),
      ...(source.publishedOn ? { datePublished: source.publishedOn } : {}),
    })),
  };
}

/** The one place DefinedTerm genuinely applies. */
export function definedTermSetSchema(
  terms: readonly GlossaryTerm[],
  path: string,
): JsonLdObject {
  return {
    '@type': 'DefinedTermSet',
    '@id': `${absoluteUrl(path)}#glossary`,
    name: `${SITE.name} Glossary`,
    description:
      'Terms used across justice, law-enforcement, court, prosecution, investigative, forensic, corrections, and public-safety systems, defined without assuming any one jurisdiction.',
    url: absoluteUrl(path),
    inLanguage: SITE.locale,
    publisher: { '@id': ORGANIZATION_ID },
    hasDefinedTerm: terms.map((term) => ({
      '@type': 'DefinedTerm',
      '@id': `${absoluteUrl(path)}#${term.slug}`,
      name: term.term,
      description: term.definition,
      inDefinedTermSet: `${absoluteUrl(path)}#glossary`,
      ...(term.alternateTerms?.length ? { alternateName: term.alternateTerms } : {}),
    })),
  };
}

/** Wraps a set of schema objects into a single graph document. */
export function jsonLdGraph(nodes: (JsonLdObject | null)[]): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes.filter((node): node is JsonLdObject => node !== null),
  };
}

/**
 * A single glossary term as its own DefinedTerm node (Wave 3).
 *
 * Distinct from `definedTermSetSchema`, which describes the whole glossary on the hub. A
 * routed term needs a node whose `@id` is its own URL, and it declares `inDefinedTermSet`
 * so the relationship to the hub survives — the term page and the hub describe the same
 * object at different scopes rather than competing for it.
 *
 * Deliberately minimal: name, description, url, the set it belongs to. No invented
 * relationships, and nothing that would imply this platform is an official body.
 */
export function definedTermSchema(term: GlossaryTerm, path: string): JsonLdObject {
  return {
    '@type': 'DefinedTerm',
    '@id': `${absoluteUrl(path)}#term`,
    name: term.term,
    description: term.definition,
    url: absoluteUrl(path),
    inLanguage: SITE.locale,
    inDefinedTermSet: { '@id': `${absoluteUrl('/glossary')}#glossary` },
    ...(term.alternateTerms && term.alternateTerms.length > 0
      ? { alternateName: term.alternateTerms }
      : {}),
  };
}
