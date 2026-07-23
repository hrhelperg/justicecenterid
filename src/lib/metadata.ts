import type { Metadata } from 'next';
import { SITE, absoluteUrl } from './site';

export interface PageMetadataInput {
  /** Page title WITHOUT the brand suffix — the root layout template adds it. */
  title: string;
  /** The entity summary. One string, one meaning: the reader sees the same sentence. */
  description: string;
  /** Site-relative canonical path. */
  path: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
}

/**
 * The only place page metadata is constructed.
 *
 * No page writes a title, canonical, or Open Graph tag by hand, so the templates cannot
 * drift and a canonical cannot diverge from the route registry.
 */
export function buildMetadata({
  title,
  description,
  path,
  type = 'website',
  publishedTime,
  modifiedTime,
  section,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      title: `${title} — ${SITE.name}`,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      ...(type === 'article'
        ? {
            publishedTime,
            modifiedTime,
            section,
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} — ${SITE.name}`,
      description,
    },
  };
}

/**
 * Root metadata. `metadataBase` is set once here so every relative URL Next resolves is
 * anchored to the canonical origin.
 */
export const ROOT_METADATA: Metadata = {
  metadataBase: new URL(SITE.origin),
  title: {
    default: `${SITE.name} — Understanding Justice Worldwide`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.positioning,
  applicationName: SITE.name,
  alternates: { canonical: SITE.origin },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    title: `${SITE.name} — Understanding Justice Worldwide`,
    description: SITE.positioning,
    url: SITE.origin,
    siteName: SITE.name,
    locale: SITE.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — Understanding Justice Worldwide`,
    description: SITE.positioning,
  },
  formatDetection: { telephone: false, address: false, email: false },
};
