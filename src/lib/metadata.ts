import type { Metadata } from 'next';
import { SITE, absoluteUrl } from './site';

/**
 * The home page title. Shared by `ROOT_METADATA.title.default` and `app/page.tsx` so the
 * two cannot drift.
 */
export const HOME_TITLE = `${SITE.name} — Understanding Justice Worldwide`;

export interface PageMetadataInput {
  /** Page title WITHOUT the brand suffix — the root layout template adds it. */
  title: string;
  /**
   * Emit `title` verbatim instead of letting the root template append the brand.
   *
   * Required for the home page. Next.js does not apply a layout's `title.template` to the
   * page of the *same* segment, so the root template never reaches `app/page.tsx`. Before
   * this flag the home page shipped `<title>Understanding Justice Worldwide</title>` — the
   * single most important title on the site, with no brand in it at all.
   */
  absoluteTitle?: boolean;
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
  absoluteTitle = false,
  description,
  path,
  type = 'website',
  publishedTime,
  modifiedTime,
  section,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const socialTitle = absoluteTitle ? title : `${title} — ${SITE.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      title: socialTitle,
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
      // 'summary', not 'summary_large_image': no Open Graph image is generated yet, and a
      // large-image card that resolves to no image degrades to an empty card. Upgrade this
      // together with the OG image, not before it.
      card: 'summary',
      title: socialTitle,
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
    default: HOME_TITLE,
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
    title: HOME_TITLE,
    description: SITE.positioning,
    url: SITE.origin,
    siteName: SITE.name,
    locale: SITE.locale,
  },
  twitter: {
    card: 'summary',
    title: HOME_TITLE,
    description: SITE.positioning,
  },
  formatDetection: { telephone: false, address: false, email: false },
};
