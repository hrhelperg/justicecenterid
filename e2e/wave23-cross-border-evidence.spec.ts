import { expect, test } from '@playwright/test';

/**
 * Wave 23: cross-border digital evidence and international cooperation.
 *
 * Asserted against the exported production artefact, for the four things the content tests cannot
 * see because they need a rendered page: that instrument citations carrying slashes and
 * parentheses survive a 320px viewport, that no page is modelled as a legal service or a how-to,
 * that the boundary links the cannibalization audit relies on resolve in the built output, and
 * that the candidates the audit rejected on Part U and Part AD grounds really 404.
 */

const WAVE_23 = [
  '/investigations/jurisdiction-over-foreign-held-data',
  '/investigations/mutual-legal-assistance',
  '/investigations/cross-border-preservation-and-disclosure',
  '/investigations/asking-a-state-and-ordering-a-provider',
  '/investigations/direct-cooperation-with-foreign-providers',
  '/investigations/european-production-and-preservation-orders',
  '/investigations/when-a-cooperation-instrument-starts-to-operate',
  '/investigations/data-categories-across-instruments',
];

test.describe('the eight routes render and are correctly described', () => {
  for (const path of WAVE_23) {
    test(`${path} has a unique canonical and models no service or procedure`, async ({
      page,
    }) => {
      await page.goto(path);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toBe(`https://justicecenterid.com${path}`);

      const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
      /*
       * TYPES, not substrings. The earlier waves' guard searched the serialised JSON for forbidden
       * words, which works only until a cited instrument is called "European PRODUCTion Orders" —
       * this wave's flagship Regulation, whose title made the substring check fire on six pages
       * that model nothing of the kind. What the guard is actually about is the schema type, so it
       * collects `@type` values and tests those.
       *
       * The temptation on this cluster is its own. These pages describe procedures that States and
       * providers follow, so the types a generator reaches for are the ones that would turn a
       * comparative description into an instruction sheet or a professional offering.
       */
      const types: string[] = [];
      const walk = (node: unknown): void => {
        if (Array.isArray(node)) return node.forEach(walk);
        if (!node || typeof node !== 'object') return;
        for (const [key, value] of Object.entries(node as Record<string, unknown>)) {
          if (key === '@type') {
            if (typeof value === 'string') types.push(value);
            else if (Array.isArray(value))
              types.push(...value.filter((v): v is string => typeof v === 'string'));
          } else walk(value);
        }
      };
      blocks.forEach((b) => walk(JSON.parse(b)));
      expect(types.length, `${path} emits no structured data`).toBeGreaterThan(0);

      for (const forbidden of [
        'HowTo',
        'HowToStep',
        'LegalService',
        'GovernmentService',
        'GovernmentOrganization',
        'Service',
        'Product',
        'FAQPage',
        'Legislation',
        'AggregateRating',
        'Review',
        'Offer',
      ]) {
        expect(types, `${path} models ${forbidden}`).not.toContain(forbidden);
      }
    });

    test(`${path} has exactly one h1 and a sane heading order`, async ({ page }) => {
      await page.goto(path);
      await expect(page.locator('main h1')).toHaveCount(1);
      const levels = await page.evaluate(() =>
        Array.from(document.querySelectorAll('main h1, main h2, main h3, main h4')).map((h) =>
          Number(h.tagName.slice(1)),
        ),
      );
      expect(levels.length).toBeGreaterThan(1);
      for (let i = 1; i < levels.length; i += 1) {
        const step = (levels[i] ?? 0) - (levels[i - 1] ?? 0);
        expect(step, `heading level jumps at index ${i}`).toBeLessThanOrEqual(1);
      }
    });

    test(`${path} has a description that is not the title`, async ({ page }) => {
      await page.goto(path);
      const description = await page
        .locator('meta[name="description"]')
        .getAttribute('content');
      const title = await page.title();
      expect(description).toBeTruthy();
      expect(description!.length).toBeGreaterThan(60);
      expect(description).not.toBe(title);
    });

    test(`${path} has no horizontal overflow at 320px or at 200% text`, async ({ page }) => {
      await page.setViewportSize({ width: 320, height: 720 });
      await page.goto(path);
      let overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, 'overflows at 320px').toBeLessThanOrEqual(1);

      await page.setViewportSize({ width: 1280, height: 900 });
      await page.goto(path);
      await page.addStyleTag({ content: 'html { font-size: 200% !important; }' });
      overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, 'overflows at 200% text').toBeLessThanOrEqual(1);
    });

    test(`${path} is reachable by keyboard from the skip link`, async ({ page }) => {
      await page.goto(path);
      await page.keyboard.press('Tab');
      await expect(page.getByRole('link', { name: /Skip to main content/i })).toBeFocused();
      await page.keyboard.press('Enter');
      await expect(page.locator('main')).toBeFocused();
    });

    test(`${path} carries its scope callout to the reader`, async ({ page }) => {
      await page.goto(path);
      await expect(page.locator('main')).toContainText(/not legal advice/i);
    });
  }
});

test.describe('instrument citations survive a narrow viewport', () => {
  /*
   * This wave's hard tokens are not compound words. They are citations carrying slashes, digits
   * and parentheses — "Regulation (EU) 2023/1543" — which a naive break-anywhere rule splits in
   * the middle of a number, and long enumerated statutory phrases that must not force the page
   * sideways. Each is checked on the page that carries it.
   */
  const CASES: [string, string][] = [
    ['/investigations/jurisdiction-over-foreign-held-data', 'possession, custody, or control'],
    [
      '/investigations/jurisdiction-over-foreign-held-data',
      'located within or outside of the United States',
    ],
    ['/investigations/mutual-legal-assistance', 'to the widest extent possible'],
    [
      '/investigations/cross-border-preservation-and-disclosure',
      'dual criminality shall not be required',
    ],
    ['/investigations/direct-cooperation-with-foreign-providers', 'Second Additional Protocol'],
    [
      '/investigations/european-production-and-preservation-orders',
      'Regulation (EU) 2023/1543',
    ],
    [
      '/investigations/when-a-cooperation-instrument-starts-to-operate',
      'Directive (EU) 2023/1544',
    ],
    [
      '/investigations/data-categories-across-instruments',
      'data requested for the sole purpose of identifying the user',
    ],
    [
      '/investigations/data-categories-across-instruments',
      'other than traffic or content data',
    ],
  ];

  for (const [path, phrase] of CASES) {
    test(`${phrase.slice(0, 34)}… fits at 320px on ${path}`, async ({ page }) => {
      await page.setViewportSize({ width: 320, height: 720 });
      await page.goto(path);
      await expect(page.locator('main')).toContainText(phrase);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, `"${phrase}" overflows at 320px`).toBeLessThanOrEqual(1);
    });
  }
});

test.describe('the cluster is joined to the corpus, not bolted onto it', () => {
  test('the investigations hub lists all eight new guides', async ({ page }) => {
    await page.goto('/investigations');
    const main = page.locator('main');
    for (const path of WAVE_23) {
      await expect(main.locator(`a[href="${path}"]`).first()).toBeVisible();
    }
  });

  test('each page links to the layer that owns the question it declines', async ({ page }) => {
    const EDGES: [string, string][] = [
      [
        '/investigations/data-categories-across-instruments',
        '/investigations/content-and-communications-data',
      ],
      [
        '/investigations/when-a-cooperation-instrument-starts-to-operate',
        '/justice/international-rights-and-domestic-law',
      ],
      [
        '/investigations/european-production-and-preservation-orders',
        '/investigations/direct-cooperation-with-foreign-providers',
      ],
      [
        '/investigations/cross-border-preservation-and-disclosure',
        '/investigations/mutual-legal-assistance',
      ],
    ];
    for (const [from, to] of EDGES) {
      await page.goto(from);
      await expect(
        page.locator('main').locator(`a[href="${to}"]`).first(),
        `${from} does not link to ${to}`,
      ).toBeVisible();
    }
  });

  test('the Wave 21 and 22 pages that signposted this layer now link into it', async ({
    page,
  }) => {
    const EDGES: [string, string][] = [
      [
        '/investigations/legal-authority-and-technical-capability',
        '/investigations/jurisdiction-over-foreign-held-data',
      ],
      [
        '/investigations/preserving-data-and-producing-it',
        '/investigations/cross-border-preservation-and-disclosure',
      ],
      [
        '/investigations/content-and-communications-data',
        '/investigations/data-categories-across-instruments',
      ],
      [
        '/investigations/who-authorises-a-digital-investigative-measure',
        '/investigations/european-production-and-preservation-orders',
      ],
      [
        '/justice/international-rights-and-domestic-law',
        '/investigations/when-a-cooperation-instrument-starts-to-operate',
      ],
    ];
    for (const [from, to] of EDGES) {
      await page.goto(from);
      await expect(
        page.locator('main').locator(`a[href="${to}"]`).first(),
        `${from} does not link back to ${to}`,
      ).toBeVisible();
    }
  });

  test('routes the audit rejected really 404, with no fallback masking', async ({ page }) => {
    for (const rejected of [
      '/investigations/provider-cooperation-comparison',
      '/investigations/sovereignty-and-cross-border-digital-investigation',
      '/investigations/can-police-get-your-data-from-another-country',
      '/investigations/what-is-a-digital-investigation',
      '/investigations/mlat',
    ]) {
      const response = await page.goto(rejected);
      expect(response?.status(), `${rejected} did not 404`).toBe(404);
    }
  });
});
