/**
 * The HELPERG ecosystem product registry.
 *
 * JusticeCenterID is one product inside a wider portfolio. This module is the single
 * source of truth for what that portfolio contains; the ecosystem bar, the ecosystem
 * drawer, and any future /ecosystem page all read from here, and nothing renders a
 * product link that is not a record in this file.
 *
 * ---------------------------------------------------------------------------
 * WHAT THIS REGISTRY DOES NOT CLAIM
 * ---------------------------------------------------------------------------
 * Every entry below is OWNER-SUPPLIED seed data. Being listed here means exactly two
 * things and nothing more:
 *
 *   1. the owner of this repository supplied the name and the URL, and
 *   2. on `verifiedOn` the URL was fetched and returned a page whose own <title>
 *      identifies that product (recorded verbatim in `confirmedTitle`).
 *
 * It does NOT claim the product is launched, active, maintained, commercially
 * available, or operated by the same legal entity as any other entry. Those are
 * separate factual claims and none of them was independently established, so none of
 * them is asserted — in the data, in the type system, or in the UI. `status` is a
 * neutral vocabulary for exactly that reason: there is no 'active' or 'live' member.
 *
 * The verification vocabulary deliberately mirrors `SourceRecord.verificationMethod`
 * in ./types — the editorial standard the rest of the platform already applies to its
 * sources is the same standard applied to its own product links.
 *
 * Adding a product later is a data edit: append a record, give it a `timelineOrder`,
 * and both the bar and the drawer pick it up. No component changes.
 */

/** Owner-supplied grouping. A presentation concern, not a claim about the products. */
export const PRODUCT_CATEGORIES = [
  'core',
  'web-data',
  'telecom',
  'business',
  'knowledge',
  'mobile-apps',
] as const;
export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

/**
 * What kind of thing the entry is. The brief is explicit that these must not be
 * flattened into one type: a company page, a hosted application, and a store-listed
 * mobile app are different objects and link differently.
 */
export const PRODUCT_TYPES = [
  'company',
  'personal-site',
  'knowledge-platform',
  'saas',
  'data-platform',
  'web-app',
  'content-site',
  'mobile-app',
] as const;
export type ProductType = (typeof PRODUCT_TYPES)[number];

/**
 * Neutral status vocabulary.
 *
 * `listed` is deliberately the only value an ordinary entry can hold. It records that
 * the entry exists and its URL resolved — not that the product is live or supported.
 */
export const PRODUCT_STATUSES = [
  /** This site. Exactly one record may hold it, enforced by test. */
  'current-site',
  /** Owner-supplied and URL-verified. Asserts nothing about launch or availability. */
  'listed',
  /** URL could not be confirmed. Renders as text, never as a link. */
  'unverified',
] as const;
export type ProductStatus = (typeof PRODUCT_STATUSES)[number];

/** How the URL was checked. Same vocabulary the source registry uses. */
export const VERIFICATION_METHODS = [
  'content-confirmed',
  'status-probe',
  'unverified',
] as const;
export type VerificationMethod = (typeof VERIFICATION_METHODS)[number];

export interface EcosystemProduct {
  id: string;
  name: string;
  /** Compact label for the timeline rail. */
  shortName: string;
  category: ProductCategory;
  productType: ProductType;
  /**
   * The product's own canonical URL. Optional: a store-listed mobile app has no
   * website of its own, and omitting the field is how that is expressed honestly.
   */
  canonicalUrl?: string;
  iosUrl?: string;
  androidUrl?: string;
  status: ProductStatus;
  /** Shown on the desktop rail. Everything else is reachable from the drawer. */
  featured: boolean;
  /** Position in the ordered ecosystem presentation. No dates — none were supplied. */
  timelineOrder: number;
  verificationStatus: VerificationMethod;
  /** ISO date the URLs on this record were checked. */
  verifiedOn?: string;
  /**
   * The <title> the canonical URL actually served, verbatim, at `verifiedOn`.
   *
   * This is EVIDENCE, not marketing copy. It is recorded instead of an authored
   * description precisely because a description would be an invented claim about a
   * product whose scope was not researched. The UI does not render it as a tagline.
   */
  confirmedTitle?: string;
}

/**
 * The id of the product this deployment is.
 *
 * Resolved against `SITE.origin` (see src/lib/ecosystem.ts), never against
 * `window.location` — a localhost or Netlify preview hostname must still identify the
 * running site as JusticeCenterID.
 */
export const CURRENT_PRODUCT_ID = 'justicecenterid';

const VERIFIED_ON = '2026-08-10';

export const ECOSYSTEM_PRODUCTS: readonly EcosystemProduct[] = [
  /* ---------------------------------------------------------------- core -- */
  {
    id: 'helperg',
    name: 'HELPERG',
    shortName: 'HELPERG',
    category: 'core',
    productType: 'company',
    canonicalUrl: 'https://helperg.com',
    status: 'listed',
    featured: true,
    timelineOrder: 1,
    verificationStatus: 'content-confirmed',
    verifiedOn: VERIFIED_ON,
    confirmedTitle: 'HELPERG LLC — Mobile Apps & Digital Products',
  },
  {
    id: 'petro-hrys',
    name: 'Petro Hrys',
    shortName: 'Petro Hrys',
    category: 'core',
    productType: 'personal-site',
    canonicalUrl: 'https://petrohrys.com',
    status: 'listed',
    featured: false,
    timelineOrder: 2,
    verificationStatus: 'content-confirmed',
    verifiedOn: VERIFIED_ON,
    confirmedTitle: 'Petro Hrys — Digital infrastructure builder',
  },
  {
    /*
     * This site.
     *
     * `canonicalUrl` is deliberately ABSENT. The origin is not written here because it is
     * already written in src/lib/site.ts, and a second copy of a canonical URL is exactly
     * how canonical tags drift from sitemaps — the reason ESLint forbids the literal
     * anywhere else in the codebase. `resolveCurrentProduct()` fills the field from
     * SITE.origin, so "the current site resolves itself from the canonical domain" is
     * structurally true rather than a duplicated string that happens to match.
     *
     * `verificationStatus` is 'unverified' and the reason is honest: on the verification
     * date the canonical domain did not resolve, because the site has not been deployed
     * yet — that is the whole point of this phase. It is still the current product,
     * because identity comes from SITE.origin, not from whether the domain answers.
     */
    id: 'justicecenterid',
    name: 'JusticeCenterID',
    shortName: 'JusticeCenterID',
    category: 'core',
    productType: 'knowledge-platform',
    status: 'current-site',
    featured: true,
    timelineOrder: 3,
    verificationStatus: 'unverified',
    verifiedOn: VERIFIED_ON,
  },

  /* ------------------------------------------------------------ web-data -- */
  {
    id: 'webmasterid',
    name: 'WebmasterID',
    shortName: 'WebmasterID',
    category: 'web-data',
    productType: 'saas',
    canonicalUrl: 'https://webmasterid.com',
    status: 'listed',
    featured: true,
    timelineOrder: 4,
    verificationStatus: 'content-confirmed',
    verifiedOn: VERIFIED_ON,
    confirmedTitle: 'WebmasterID — Privacy-first analytics for the AI-search era',
  },
  {
    id: 'webmasterid-signal',
    name: 'WebmasterID Signal',
    shortName: 'Signal',
    category: 'web-data',
    productType: 'saas',
    canonicalUrl: 'https://signal.webmasterid.com',
    status: 'listed',
    featured: false,
    timelineOrder: 5,
    verificationStatus: 'content-confirmed',
    verifiedOn: VERIFIED_ON,
    confirmedTitle: 'Signal — Operator-controlled publishing infrastructure · Signal',
  },
  {
    id: 'webmasterid-models',
    name: 'WebmasterID Models',
    shortName: 'Models',
    category: 'web-data',
    productType: 'saas',
    canonicalUrl: 'https://models.webmasterid.com',
    status: 'listed',
    featured: false,
    timelineOrder: 6,
    verificationStatus: 'content-confirmed',
    verifiedOn: VERIFIED_ON,
    confirmedTitle: 'WebmasterID Models',
  },
  {
    id: 'webmasterid-agent',
    name: 'WebmasterID Agent',
    shortName: 'Agent',
    category: 'web-data',
    productType: 'saas',
    canonicalUrl: 'https://agent-webmasterid.com',
    status: 'listed',
    featured: false,
    timelineOrder: 7,
    verificationStatus: 'content-confirmed',
    verifiedOn: VERIFIED_ON,
    confirmedTitle: 'WebmasterID Agent — free companion for WebmasterID and Claude MCP',
  },
  {
    id: 'global-city-intelligence',
    name: 'Global City Intelligence',
    shortName: 'City Intelligence',
    category: 'web-data',
    productType: 'data-platform',
    canonicalUrl: 'https://globalcityintelligence.com',
    status: 'listed',
    featured: false,
    timelineOrder: 8,
    verificationStatus: 'content-confirmed',
    verifiedOn: VERIFIED_ON,
    confirmedTitle: 'Global City Intelligence Platform | Global City Intelligence',
  },
  {
    id: 'geobusinessiq',
    name: 'GeoBusinessIQ',
    shortName: 'GeoBusinessIQ',
    category: 'web-data',
    productType: 'data-platform',
    canonicalUrl: 'https://geobusinessiq.com',
    status: 'listed',
    featured: false,
    timelineOrder: 9,
    verificationStatus: 'content-confirmed',
    verifiedOn: VERIFIED_ON,
    confirmedTitle: 'GeoBusinessIQ — Global Business Intelligence for Founders',
  },

  /* ------------------------------------------------------------- telecom -- */
  {
    id: 'twin-phone',
    name: 'Twin Phone',
    shortName: 'Twin Phone',
    category: 'telecom',
    productType: 'web-app',
    canonicalUrl: 'https://twin-phone.com',
    status: 'listed',
    featured: true,
    timelineOrder: 10,
    verificationStatus: 'content-confirmed',
    verifiedOn: VERIFIED_ON,
    confirmedTitle: 'Cheap Calls from Your Browser — TwinPhone',
  },
  {
    id: 'twin-phone-enterprise',
    name: 'Twin Phone Enterprise',
    shortName: 'Twin Phone Enterprise',
    category: 'telecom',
    productType: 'saas',
    canonicalUrl: 'https://enterprise.twin-phone.com/en',
    status: 'listed',
    featured: false,
    timelineOrder: 11,
    verificationStatus: 'content-confirmed',
    verifiedOn: VERIFIED_ON,
    confirmedTitle: 'TwinPhone — the cloud phone platform that turns calls into revenue',
  },
  {
    id: 'esimky',
    name: 'eSIMky',
    shortName: 'eSIMky',
    category: 'telecom',
    productType: 'web-app',
    canonicalUrl: 'https://esimky.com',
    status: 'listed',
    featured: true,
    timelineOrder: 12,
    verificationStatus: 'content-confirmed',
    verifiedOn: VERIFIED_ON,
    confirmedTitle: 'Esimky — travel eSIM rental, QR by email in a minute',
  },

  /* ------------------------------------------------------------ business -- */
  {
    id: 'cash-workspace',
    name: 'Cash Workspace',
    shortName: 'Cash Workspace',
    category: 'business',
    productType: 'web-app',
    canonicalUrl: 'https://cashworkspace.com',
    status: 'listed',
    featured: false,
    timelineOrder: 13,
    verificationStatus: 'content-confirmed',
    verifiedOn: VERIFIED_ON,
    confirmedTitle: 'Cash Workspace | Finance templates for freelancers and small businesses',
  },
  {
    id: 'talent-partner-id',
    name: 'Talent Partner ID',
    shortName: 'Talent Partner ID',
    category: 'business',
    productType: 'content-site',
    canonicalUrl: 'https://talentpartnerid.com',
    status: 'listed',
    featured: false,
    timelineOrder: 14,
    verificationStatus: 'content-confirmed',
    verifiedOn: VERIFIED_ON,
    confirmedTitle:
      'Personální agentura pro zaměstnavatele — výroba a logistika | TalentPartnerID',
  },
  {
    /*
     * Listed by the owner as a distinct website. It is NOT recorded as the marketing
     * site of the PDF Editor mobile app below: that relationship was not established,
     * and asserting it would be an invented claim.
     */
    id: 'pdf-edit-convert',
    name: 'PDF Edit & Convert',
    shortName: 'PDF Edit & Convert',
    category: 'business',
    productType: 'web-app',
    canonicalUrl: 'https://pdfeditconvert.top',
    status: 'listed',
    featured: false,
    timelineOrder: 15,
    verificationStatus: 'content-confirmed',
    verifiedOn: VERIFIED_ON,
    confirmedTitle: 'PDF Editor — Edit, Convert, Sign and Scan PDFs on Mobile',
  },

  /* ----------------------------------------------------------- knowledge -- */
  {
    id: 'hr-helperg',
    name: 'HR HELPERG',
    shortName: 'HR HELPERG',
    category: 'knowledge',
    productType: 'content-site',
    canonicalUrl: 'https://hrhelperg.com',
    status: 'listed',
    featured: true,
    timelineOrder: 16,
    verificationStatus: 'content-confirmed',
    verifiedOn: VERIFIED_ON,
    confirmedTitle: 'HRHelperG — HR Resources, Hiring Guides & Workforce Knowledge',
  },
  {
    id: 'builddesignhub',
    name: 'BuildDesignHub',
    shortName: 'BuildDesignHub',
    category: 'knowledge',
    productType: 'content-site',
    canonicalUrl: 'https://builddesignhub.com',
    status: 'listed',
    featured: false,
    timelineOrder: 17,
    verificationStatus: 'content-confirmed',
    verifiedOn: VERIFIED_ON,
    confirmedTitle: 'Build Design Hub — Construction, Architecture & Landscape Design Guides',
  },
  {
    id: 'faunahub',
    name: 'FaunaHub',
    shortName: 'FaunaHub',
    category: 'knowledge',
    productType: 'content-site',
    canonicalUrl: 'https://faunahub.com',
    status: 'listed',
    featured: false,
    timelineOrder: 18,
    verificationStatus: 'content-confirmed',
    verifiedOn: VERIFIED_ON,
    confirmedTitle: 'FaunaHub — Pet Care, Animal Facts & Wildlife Intelligence',
  },
  {
    id: 'printer-archive',
    name: 'Printer Archive',
    shortName: 'Printer Archive',
    category: 'knowledge',
    productType: 'content-site',
    canonicalUrl: 'https://printerarchive.net',
    status: 'listed',
    featured: false,
    timelineOrder: 19,
    verificationStatus: 'content-confirmed',
    verifiedOn: VERIFIED_ON,
    confirmedTitle: 'PrinterArchive — The internet archive of printing knowledge.',
  },
  {
    id: 'virtue-and-power',
    name: 'Virtue & Power',
    shortName: 'Virtue & Power',
    category: 'knowledge',
    productType: 'content-site',
    canonicalUrl: 'https://virtueandpower.com',
    status: 'listed',
    featured: false,
    timelineOrder: 20,
    verificationStatus: 'content-confirmed',
    verifiedOn: VERIFIED_ON,
    confirmedTitle:
      'Virtue & Power — Classical wisdom for leadership, civilization and the modern world.',
  },
  {
    id: 'agricultureid',
    name: 'AgricultureID',
    shortName: 'AgricultureID',
    category: 'knowledge',
    productType: 'content-site',
    canonicalUrl: 'https://agricultureid.com',
    status: 'listed',
    featured: false,
    timelineOrder: 21,
    verificationStatus: 'content-confirmed',
    verifiedOn: VERIFIED_ON,
    confirmedTitle: 'AgricultureID — Global Agriculture Knowledge and Intelligence',
  },
  {
    id: 'asteria-star',
    name: 'Asteria Star',
    shortName: 'Asteria Star',
    category: 'knowledge',
    productType: 'content-site',
    canonicalUrl: 'https://asteriastar.com',
    status: 'listed',
    featured: false,
    timelineOrder: 22,
    verificationStatus: 'content-confirmed',
    verifiedOn: VERIFIED_ON,
    confirmedTitle: 'Asteria Star — Everything Above Earth',
  },

  /* --------------------------------------------------------- mobile-apps --
   * Store-listed apps. These carry NO canonicalUrl: no website was supplied for
   * them, and inventing one is exactly what the brief forbids. Each store URL was
   * fetched and the listing's own title recorded.
   */
  {
    id: 'app-zip',
    name: 'Zip',
    shortName: 'Zip',
    category: 'mobile-apps',
    productType: 'mobile-app',
    iosUrl: 'https://apps.apple.com/app/id6753772583',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.ziparchivator.zip',
    status: 'listed',
    featured: false,
    timelineOrder: 23,
    verificationStatus: 'content-confirmed',
    verifiedOn: VERIFIED_ON,
    confirmedTitle:
      'ZIP & RAR File Extractor (Google Play) / Unzip - RAR, Zip, Unrar, 7zip+ (App Store)',
  },
  {
    id: 'app-printer',
    name: 'Smart Printer',
    shortName: 'Smart Printer',
    category: 'mobile-apps',
    productType: 'mobile-app',
    iosUrl: 'https://apps.apple.com/app/id6746067890',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.helperg.smart.printer',
    status: 'listed',
    featured: false,
    timelineOrder: 24,
    verificationStatus: 'content-confirmed',
    verifiedOn: VERIFIED_ON,
    confirmedTitle:
      'Printer Smart: Scan, Print PDF (Google Play) / Smart Printer: Scan Master Pro (App Store)',
  },
  {
    id: 'app-fax',
    name: 'Fax',
    shortName: 'Fax',
    category: 'mobile-apps',
    productType: 'mobile-app',
    iosUrl: 'https://apps.apple.com/app/id6760895885',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.helperg.fax.app',
    status: 'listed',
    featured: false,
    timelineOrder: 25,
    verificationStatus: 'content-confirmed',
    verifiedOn: VERIFIED_ON,
    confirmedTitle: 'FAX: send from phone',
  },
  {
    id: 'app-pdf-editor',
    name: 'PDF Editor',
    shortName: 'PDF Editor',
    category: 'mobile-apps',
    productType: 'mobile-app',
    iosUrl: 'https://apps.apple.com/app/id6747341672',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.helperg.editor.documents',
    status: 'listed',
    featured: false,
    timelineOrder: 26,
    verificationStatus: 'content-confirmed',
    verifiedOn: VERIFIED_ON,
    confirmedTitle: 'PDF Editor: Converter Files',
  },
  {
    /* iOS only. No Android URL was supplied, so none is recorded or rendered. */
    id: 'app-cv-builder',
    name: 'CV Builder',
    shortName: 'CV Builder',
    category: 'mobile-apps',
    productType: 'mobile-app',
    iosUrl: 'https://apps.apple.com/app/id6745150815',
    status: 'listed',
    featured: false,
    timelineOrder: 27,
    verificationStatus: 'content-confirmed',
    verifiedOn: VERIFIED_ON,
    confirmedTitle: 'CV Builder: Make Resume',
  },
  {
    id: 'app-invoice-maker',
    name: 'Invoice Maker',
    shortName: 'Invoice Maker',
    category: 'mobile-apps',
    productType: 'mobile-app',
    iosUrl: 'https://apps.apple.com/app/id6747311276',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.helperg.invoicer',
    status: 'listed',
    featured: false,
    timelineOrder: 28,
    verificationStatus: 'content-confirmed',
    verifiedOn: VERIFIED_ON,
    confirmedTitle:
      'Invoice Maker & Estimates (Google Play) / Invoice Maker - Easy creation (App Store)',
  },
  {
    id: 'app-pocket-manager',
    name: 'Pocket Manager',
    shortName: 'Pocket Manager',
    category: 'mobile-apps',
    productType: 'mobile-app',
    iosUrl: 'https://apps.apple.com/app/id6743084126',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.helperg.money',
    status: 'listed',
    featured: false,
    timelineOrder: 29,
    verificationStatus: 'content-confirmed',
    verifiedOn: VERIFIED_ON,
    confirmedTitle: 'Pocket Manager: Budget Tracker',
  },
];

/* -------------------------------------------------------------------------- */
/* Derived views                                                              */
/* -------------------------------------------------------------------------- */

/** Ordered for the timeline presentation. No dates are claimed — only sequence. */
export const ORDERED_PRODUCTS: readonly EcosystemProduct[] = [...ECOSYSTEM_PRODUCTS].sort(
  (a, b) => a.timelineOrder - b.timelineOrder,
);

/** The compact desktop rail. The current site is always present, featured or not. */
export const RAIL_PRODUCTS: readonly EcosystemProduct[] = ORDERED_PRODUCTS.filter(
  (p) => p.featured || p.status === 'current-site',
);

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  core: 'Core',
  'web-data': 'Web and data',
  telecom: 'Telecom',
  business: 'Business tools',
  knowledge: 'Knowledge platforms',
  'mobile-apps': 'Mobile apps',
};

export function getProduct(id: string): EcosystemProduct | undefined {
  return ECOSYSTEM_PRODUCTS.find((p) => p.id === id);
}

/**
 * The single outbound URL for a product, or `undefined` when there is none to give.
 *
 * `undefined` is a real answer, not a failure: an `unverified` record must never
 * become a link, and the UI renders those as plain text. Websites link to
 * themselves; a store-listed app links to whichever store URL exists.
 */
export function productHref(product: EcosystemProduct): string | undefined {
  if (product.status === 'unverified') return undefined;
  return product.canonicalUrl ?? product.iosUrl ?? product.androidUrl;
}

/** True when the product is somewhere other than this site. */
export function isExternal(product: EcosystemProduct): boolean {
  return product.status !== 'current-site';
}

export function productsByCategory(): {
  category: ProductCategory;
  products: EcosystemProduct[];
}[] {
  return PRODUCT_CATEGORIES.map((category) => ({
    category,
    products: ORDERED_PRODUCTS.filter((p) => p.category === category),
  })).filter((group) => group.products.length > 0);
}
