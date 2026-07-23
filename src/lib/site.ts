/**
 * Canonical site constants.
 *
 * This is the ONLY place the origin, brand name, and standing legal statements are
 * written. ESLint forbids hard-coding the origin anywhere else (see eslint.config.mjs),
 * because a second copy of a canonical URL is how canonical tags drift from sitemaps.
 *
 * The application reads no environment variables. There is no .env file and no secret is
 * required to build or run the site.
 */

export const SITE = {
  name: 'JusticeCenterID',
  origin: 'https://justicecenterid.com',
  locale: 'en',
  htmlLang: 'en',

  descriptor: 'Understanding Justice Worldwide.',

  positioning:
    'An independent global knowledge center explaining justice systems, law enforcement, public safety, and their history.',

  mission:
    'JusticeCenterID explains how justice systems, law-enforcement institutions, courts, investigations, and public-safety organizations work, why they exist, and how they have evolved throughout history.',

  /**
   * Repeated verbatim in the footer, on every guide, in the disclaimer, and in llms.txt.
   * Defined once so the wording cannot diverge between surfaces.
   */
  legalNotice:
    'JusticeCenterID provides general educational information about justice systems and public-safety institutions. It does not provide legal advice. Laws and procedures vary by jurisdiction and change over time. For a specific legal matter, consult a qualified professional in the relevant jurisdiction or the responsible official authority.',

  independenceNotice:
    'JusticeCenterID is an independent educational publisher. It is not a government body, police agency, court, prosecution service, regulator, international organisation, law firm, or emergency service, and it holds no official status in any jurisdiction.',

  emergencyNotice:
    'If you are in immediate danger or need urgent assistance, contact your local emergency services.',

  /**
   * Contact channels are unresolved before launch and are NOT invented here.
   *
   * `email: null` is a deliberate honest state: the contact page renders an interim
   * notice rather than an address that does not receive mail. Setting these values
   * switches every surface — contact page, corrections policy, structured data — at once.
   *
   * See docs/deployment/netlify-strategy.md §7.
   */
  contact: {
    email: null as string | null,
    correctionsEmail: null as string | null,
  },

  /**
   * The legal entity publishing the site. Unresolved; see the deployment strategy.
   * Rendered only when set — the privacy and terms pages state plainly that it is being
   * finalised rather than naming an invented operator.
   */
  operator: null as { legalName: string; jurisdiction: string } | null,
} as const;

export type SiteConfig = typeof SITE;

/** Absolute canonical URL for a site-relative path. */
export function absoluteUrl(path: string): string {
  if (path === '/') return SITE.origin;
  const normalised = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.origin}${normalised.replace(/\/+$/, '')}`;
}
