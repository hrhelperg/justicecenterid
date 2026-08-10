/**
 * Mapping from registry records to what the UI renders.
 *
 * Shared by the server-rendered rail and the client-rendered drawer so the two cannot
 * describe the same product differently.
 *
 * ---------------------------------------------------------------------------
 * WHY THE DRAWER IMPORTS THIS INSTEAD OF RECEIVING PROPS
 * ---------------------------------------------------------------------------
 * The first implementation passed the whole product list from the server into the client
 * island as a prop. That is the usual advice — and here it was measurably wrong.
 *
 * This is a static export of 318 routes, and Next emits the RSC payload for every route
 * as a set of `.txt` files: 2,756 of them, 45 MB, roughly 8.7 per route. A prop on a
 * client component is serialised into that payload, so a ~4 KB product list is written
 * to disk about 2,750 times and shipped again on every client-side navigation.
 *
 * Importing the registry here instead puts it in the shared JavaScript chunk: downloaded
 * once, cached under the immutable `/_next/static/*` header, and never duplicated per
 * route. The general rule this codebase follows — "no content module in the client
 * bundle", documented on SiteNav — exists to keep the LARGE content registries out of
 * the browser. This registry is 29 short records with no dependencies, and the payload
 * arithmetic runs the other way.
 *
 * `CURRENT_PRODUCT_ID` and `SITE.origin` are imported rather than `CURRENT_PRODUCT` so
 * the server-only validation in @/lib/ecosystem (which throws on a misconfigured
 * registry) stays on the server.
 */

import {
  CATEGORY_LABELS,
  CURRENT_PRODUCT_ID,
  ORDERED_PRODUCTS,
  productHref,
  productsByCategory,
  type EcosystemProduct,
  type ProductType,
} from '@/content/ecosystem';
import { SITE } from '@/lib/site';

export interface ProductView {
  id: string;
  name: string;
  shortName: string;
  /** Resolved outbound URL. Absent means "no verified link" — render as text. */
  href?: string;
  /** Secondary store link, when a mobile app is listed on both platforms. */
  altHref?: string;
  altLabel?: string;
  /** Reader-facing kind: "Mobile app", "Website", … */
  typeLabel: string;
  isCurrent: boolean;
}

export interface ProductGroupView {
  category: string;
  label: string;
  products: ProductView[];
}

const TYPE_LABELS: Record<ProductType, string> = {
  company: 'Company',
  'personal-site': 'Personal site',
  'knowledge-platform': 'Knowledge platform',
  saas: 'Platform',
  'data-platform': 'Data platform',
  'web-app': 'Web app',
  'content-site': 'Website',
  'mobile-app': 'Mobile app',
};

export function toView(product: EcosystemProduct): ProductView {
  const isCurrent = product.id === CURRENT_PRODUCT_ID;

  /*
   * The current product's URL is SITE.origin. Its registry record deliberately carries
   * no canonicalUrl, so there is exactly one place the origin is written.
   */
  let href = isCurrent ? SITE.origin : productHref(product);
  let altHref: string | undefined;
  let altLabel: string | undefined;

  /*
   * A store-listed app has two equally canonical URLs and no website. Rather than
   * silently dropping one platform, the primary link is iOS when present and the other
   * store is offered as a secondary link.
   */
  if (product.productType === 'mobile-app') {
    href = product.iosUrl ?? product.androidUrl;
    if (product.iosUrl && product.androidUrl) {
      altHref = product.androidUrl;
      altLabel = 'Also on Google Play';
    }
  }

  return {
    id: product.id,
    name: product.name,
    shortName: product.shortName,
    href,
    altHref,
    altLabel,
    typeLabel:
      product.productType === 'mobile-app' && product.iosUrl && !product.androidUrl
        ? 'Mobile app (iOS)'
        : TYPE_LABELS[product.productType],
    isCurrent,
  };
}

export function groupViews(): ProductGroupView[] {
  return productsByCategory().map((group) => ({
    category: group.category,
    label: CATEGORY_LABELS[group.category],
    products: group.products.map(toView),
  }));
}

/** Every product, in ecosystem order, mapped exactly as the UI maps it. */
export function allProductViews(): ProductView[] {
  return ORDERED_PRODUCTS.map(toView);
}
