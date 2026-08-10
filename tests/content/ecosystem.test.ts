import { describe, expect, it } from 'vitest';
import {
  CURRENT_PRODUCT_ID,
  ECOSYSTEM_PRODUCTS,
  ORDERED_PRODUCTS,
  PRODUCT_CATEGORIES,
  PRODUCT_TYPES,
  RAIL_PRODUCTS,
  getProduct,
  isExternal,
  productHref,
  productsByCategory,
} from '@/content/ecosystem';
import { CURRENT_PRODUCT, resolveCurrentProduct } from '@/lib/ecosystem';
import { SITE } from '@/lib/site';

/**
 * The ecosystem registry.
 *
 * The registry is owner-supplied data about products this repository does not control,
 * so the tests are about INTEGRITY rather than truth: they cannot check that a product
 * exists, but they can check that nothing here is invented, that an unverified entry
 * never becomes a clickable link, and that the current site resolves from the canonical
 * origin rather than from a duplicated string.
 */

describe('registry integrity', () => {
  it('has unique ids', () => {
    const ids = ECOSYSTEM_PRODUCTS.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('has a unique timelineOrder for every product', () => {
    const orders = ECOSYSTEM_PRODUCTS.map((p) => p.timelineOrder);
    expect(new Set(orders).size).toBe(orders.length);
  });

  it('uses only declared categories and product types', () => {
    for (const product of ECOSYSTEM_PRODUCTS) {
      expect(PRODUCT_CATEGORIES).toContain(product.category);
      expect(PRODUCT_TYPES).toContain(product.productType);
    }
  });

  it('names every product and gives it a short name for the rail', () => {
    for (const product of ECOSYSTEM_PRODUCTS) {
      expect(product.name.trim().length).toBeGreaterThan(0);
      expect(product.shortName.trim().length).toBeGreaterThan(0);
    }
  });

  it('lists no product twice under different ids', () => {
    const names = ECOSYSTEM_PRODUCTS.map((p) => p.name.toLowerCase());
    expect(new Set(names).size).toBe(names.length);
  });

  it('orders the timeline deterministically', () => {
    const orders = ORDERED_PRODUCTS.map((p) => p.timelineOrder);
    expect(orders).toEqual([...orders].sort((a, b) => a - b));
  });
});

describe('no invented data', () => {
  it('gives every URL an absolute https form', () => {
    for (const product of ECOSYSTEM_PRODUCTS) {
      for (const url of [product.canonicalUrl, product.iosUrl, product.androidUrl]) {
        if (!url) continue;
        expect(() => new URL(url), `${product.id}: ${url}`).not.toThrow();
        expect(new URL(url).protocol, `${product.id}: ${url}`).toBe('https:');
      }
    }
  });

  it('never reuses one URL for two products', () => {
    const urls = ECOSYSTEM_PRODUCTS.flatMap((p) =>
      [p.canonicalUrl, p.iosUrl, p.androidUrl].filter(Boolean),
    ) as string[];
    expect(new Set(urls).size).toBe(urls.length);
  });

  it('has no empty-string URL masquerading as a link', () => {
    for (const product of ECOSYSTEM_PRODUCTS) {
      for (const url of [product.canonicalUrl, product.iosUrl, product.androidUrl]) {
        expect(url === undefined || url.trim().length > 0).toBe(true);
      }
    }
  });

  /*
   * The load-bearing honesty check. A record that could not be verified must not produce
   * a link — the UI is required to render it as text instead.
   */
  it('produces no href for an unverified product', () => {
    for (const product of ECOSYSTEM_PRODUCTS) {
      if (product.status === 'unverified') {
        expect(productHref(product), `${product.id} must not be linkable`).toBeUndefined();
      }
    }
  });

  it('records how every linked URL was verified, and when', () => {
    for (const product of ECOSYSTEM_PRODUCTS) {
      if (product.status !== 'listed') continue;
      expect(product.verificationStatus, product.id).toBe('content-confirmed');
      expect(product.verifiedOn, product.id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      /* Content confirmation means a page title was actually read back. */
      expect((product.confirmedTitle ?? '').length, product.id).toBeGreaterThan(0);
    }
  });

  it('gives every listed product at least one URL to link to', () => {
    for (const product of ECOSYSTEM_PRODUCTS) {
      if (product.status !== 'listed') continue;
      expect(productHref(product), `${product.id} is listed but has no URL`).toBeDefined();
    }
  });

  it('gives every mobile app a store URL and no invented website', () => {
    for (const product of ECOSYSTEM_PRODUCTS) {
      if (product.productType !== 'mobile-app') continue;
      expect(product.canonicalUrl, `${product.id} should have no website`).toBeUndefined();
      expect(Boolean(product.iosUrl || product.androidUrl), product.id).toBe(true);
    }
  });

  it('points app-store URLs at the real stores', () => {
    for (const product of ECOSYSTEM_PRODUCTS) {
      if (product.iosUrl) expect(new URL(product.iosUrl).host).toBe('apps.apple.com');
      if (product.androidUrl) expect(new URL(product.androidUrl).host).toBe('play.google.com');
    }
  });
});

describe('the current site resolves to JusticeCenterID', () => {
  it('has exactly one current-site record', () => {
    const current = ECOSYSTEM_PRODUCTS.filter((p) => p.status === 'current-site');
    expect(current).toHaveLength(1);
    expect(current[0]!.id).toBe(CURRENT_PRODUCT_ID);
  });

  it('resolves to the product named JusticeCenterID', () => {
    expect(CURRENT_PRODUCT.id).toBe('justicecenterid');
    expect(CURRENT_PRODUCT.name).toBe(SITE.name);
  });

  /*
   * The whole reason the current record carries no canonicalUrl: one origin, one place.
   * A second copy is how a canonical URL drifts from the sitemap.
   */
  it('takes its origin from SITE.origin, not from a duplicated literal', () => {
    expect(getProduct(CURRENT_PRODUCT_ID)!.canonicalUrl).toBeUndefined();
    expect(CURRENT_PRODUCT.canonicalUrl).toBe(SITE.origin);
  });

  it('does not treat the current site as external', () => {
    expect(isExternal(CURRENT_PRODUCT)).toBe(false);
    for (const product of ECOSYSTEM_PRODUCTS) {
      if (product.id !== CURRENT_PRODUCT_ID) expect(isExternal(product)).toBe(true);
    }
  });

  it('resolves identically on every call, so a preview host cannot change identity', () => {
    expect(resolveCurrentProduct().id).toBe(resolveCurrentProduct().id);
    expect(resolveCurrentProduct().canonicalUrl).toBe(SITE.origin);
  });
});

describe('presentation views', () => {
  it('always shows the current product on the rail', () => {
    expect(RAIL_PRODUCTS.map((p) => p.id)).toContain(CURRENT_PRODUCT_ID);
  });

  it('keeps the rail short enough not to overflow the bar', () => {
    expect(RAIL_PRODUCTS.length).toBeLessThanOrEqual(8);
  });

  it('reaches every product through the grouped view', () => {
    const grouped = productsByCategory().flatMap((group) => group.products);
    expect(grouped).toHaveLength(ECOSYSTEM_PRODUCTS.length);
    expect(new Set(grouped.map((p) => p.id)).size).toBe(ECOSYSTEM_PRODUCTS.length);
  });

  it('emits no empty category group', () => {
    for (const group of productsByCategory()) {
      expect(group.products.length).toBeGreaterThan(0);
    }
  });
});
