/**
 * Optional (non-essential) technologies this site loads.
 *
 * THIS LIST IS EMPTY, AND THAT IS THE POINT.
 *
 * JusticeCenterID currently loads no analytics, no marketing or advertising tag, no
 * embed, no third-party font, and no non-essential storage of any kind. The privacy
 * page has always said so, and it is still true after this phase.
 *
 * The consent layer is therefore built ARMED BUT NOT SHOWN:
 *
 *   - The full machinery exists — versioned consent record, centralised gate,
 *     preferences panel, persistent "Cookie settings" control in the footer.
 *   - The Accept / Reject banner does NOT appear, because under GDPR and the
 *     ePrivacy Directive consent is required for storing or accessing information on
 *     a user's device, and this site does neither. Showing an "Accept all / Reject
 *     non-essential" prompt when there is nothing to accept would ask for permission
 *     that is not needed, contradict the privacy page, and train readers to dismiss
 *     consent UI without reading it.
 *   - Registering a single entry in this array flips that: `hasOptionalTechnologies`
 *     becomes true, the banner arms itself on the next visit, and the preferences
 *     panel grows a real toggle for that category. No component changes.
 *
 * The brief's instruction was explicit — "do not manufacture cookies simply to populate
 * the UI" — and this is the shape that obeys it without leaving the site unprepared.
 */

export const CONSENT_CATEGORIES = ['necessary', 'analytics', 'marketing'] as const;
export type ConsentCategory = (typeof CONSENT_CATEGORIES)[number];

/** Categories a reader can decline. `necessary` is deliberately absent. */
export const OPTIONAL_CATEGORIES: readonly ConsentCategory[] = ['analytics', 'marketing'];

export interface OptionalTechnology {
  id: string;
  name: string;
  /** Which consent category gates it. Never 'necessary'. */
  category: Exclude<ConsentCategory, 'necessary'>;
  /** The party that receives data. */
  provider: string;
  /** What it stores on the device, in plain language. */
  storage: string;
  purpose: string;
}

/** Empty by design. See the module comment. */
export const OPTIONAL_TECHNOLOGIES: readonly OptionalTechnology[] = [];

/** True once any optional technology is registered. Arms the consent banner. */
export const hasOptionalTechnologies: boolean = OPTIONAL_TECHNOLOGIES.length > 0;

/** The optional categories actually in use right now. Empty while the list is empty. */
export const ACTIVE_OPTIONAL_CATEGORIES: readonly ConsentCategory[] =
  OPTIONAL_CATEGORIES.filter((category) =>
    OPTIONAL_TECHNOLOGIES.some((technology) => technology.category === category),
  );
