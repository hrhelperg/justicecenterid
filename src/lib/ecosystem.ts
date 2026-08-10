/**
 * Ecosystem identity resolution.
 *
 * Kept separate from the registry itself so the registry stays plain data with no
 * dependency on site configuration, and so the one interesting question — "which of
 * these products am I?" — has exactly one implementation.
 *
 * THE RULE THIS FILE EXISTS TO ENFORCE: identity is resolved from `SITE.origin`, the
 * canonical production origin, and never from the hostname the build happens to be
 * served under. A localhost dev server, a Netlify deploy-preview URL, and the live
 * apex domain must all identify the running site as JusticeCenterID, because they are
 * all the same product. Sniffing `window.location` would make the ecosystem bar say
 * something different on a preview deploy than in production, and would also force the
 * resolution into the client bundle for no benefit.
 */

import {
  CURRENT_PRODUCT_ID,
  ECOSYSTEM_PRODUCTS,
  type EcosystemProduct,
} from '@/content/ecosystem';
import { SITE } from './site';

function hostOf(url: string): string | undefined {
  try {
    return new URL(url).host.replace(/^www\./, '');
  } catch {
    return undefined;
  }
}

/**
 * The product this deployment is, with its canonical URL supplied from `SITE.origin`.
 *
 * The registry record for the current product carries NO `canonicalUrl` of its own. That
 * is the whole mechanism: there is exactly one place the origin is written, so the two
 * cannot drift, and the "current site resolves from the canonical domain" requirement is
 * satisfied by construction rather than by a duplicated literal that happens to match.
 *
 * A record that does declare its own URL is a bug — someone re-introduced the second
 * copy — so it throws rather than silently preferring one of the two.
 */
export function resolveCurrentProduct(): EcosystemProduct {
  const byId = ECOSYSTEM_PRODUCTS.find((p) => p.id === CURRENT_PRODUCT_ID);
  if (!byId) {
    throw new Error(
      `CURRENT_PRODUCT_ID "${CURRENT_PRODUCT_ID}" is not present in the ecosystem registry.`,
    );
  }

  if (byId.canonicalUrl !== undefined) {
    throw new Error(
      `The current product "${byId.id}" must not declare its own canonicalUrl; the origin ` +
        'comes from SITE.origin so the two cannot diverge.',
    );
  }

  if (byId.status !== 'current-site') {
    throw new Error(
      `The current product "${byId.id}" must have status "current-site", not "${byId.status}".`,
    );
  }

  const host = hostOf(SITE.origin);
  if (!host) {
    throw new Error(`SITE.origin is not a valid absolute URL: "${SITE.origin}".`);
  }

  return { ...byId, canonicalUrl: SITE.origin };
}

/** The resolved current product. Evaluated once, on the server. */
export const CURRENT_PRODUCT: EcosystemProduct = resolveCurrentProduct();
