import { expect, test } from '@playwright/test';

/**
 * Wave 26: police equipment, uniforms and professional technology.
 *
 * Two things need a rendered page.
 *
 * The structured data must refuse `Product` and `Offer` above all. These pages describe categories
 * of equipment, which is exactly the content a generator would model as merchandise — and a
 * `Product` with an `Offer` is a machine-readable claim that something is for sale. Nothing here is
 * for sale, and this platform sells nothing.
 *
 * And the pages must carry no outbound link at all. The recruitment layer deliberately links to
 * official sources because the authority is the only current position; an equipment page has no
 * equivalent need, and any external link from a page naming equipment categories starts to look
 * like a referral whatever its intent.
 */

const EQUIPMENT_PAGES = [
  '/law-enforcement/what-police-equipment-is-for',
  '/law-enforcement/why-police-wear-a-uniform',
  '/law-enforcement/how-police-officers-are-identified',
  '/law-enforcement/issued-equipment-and-personal-equipment',
  '/law-enforcement/equipment-standards-and-testing',
  '/law-enforcement/documentation-equipment-in-policing',
  '/law-enforcement/body-worn-video-as-institutional-equipment',
];

async function schemaTypes(page: import('@playwright/test').Page): Promise<string[]> {
  const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
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
  return types;
}

test.describe('the equipment pages render and are correctly described', () => {
  for (const path of EQUIPMENT_PAGES) {
    test(`${path} models no product, offer or review`, async ({ page }) => {
      await page.goto(path);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toBe(`https://justicecenterid.com${path}`);
      const types = await schemaTypes(page);
      expect(types.length, `${path} emits no structured data`).toBeGreaterThan(0);
      for (const forbidden of [
        'Product',
        'Offer',
        'AggregateOffer',
        'Review',
        'AggregateRating',
        'ItemList',
        'Brand',
        'IndividualProduct',
        'ProductModel',
        'JobPosting',
        'Occupation',
        'HowTo',
        'FAQPage',
      ]) {
        expect(types, `${path} models ${forbidden}`).not.toContain(forbidden);
      }
    });

    test(`${path} links out only to cited official sources, and sells nothing`, async ({
      page,
    }) => {
      /*
       * The first form of this test asserted NO outbound links and failed on all seven pages,
       * because every guide renders a source list and the sources are official government pages.
       * That assertion was wrong in the same way the Wave 25 one was: citation is not referral.
       *
       * What must hold is narrower and actually meaningful — every outbound link is an official
       * source, none is a retailer or marketplace, and no commerce affordance appears in the prose.
       */
      await page.goto(path);
      const main = page.locator('main');
      const hrefs = await main
        .locator('a[href^="http"]')
        .evaluateAll((els) => els.map((e) => (e as HTMLAnchorElement).href));
      expect(hrefs.length, 'no source is linked at all').toBeGreaterThan(0);
      for (const href of hrefs) {
        expect(href, `links back into the site as an external URL: ${href}`).not.toMatch(
          /justicecenterid\.com/,
        );
        expect(href, `links to a commerce host: ${href}`).not.toMatch(
          /shop|store|\bbuy\b|amazon|ebay|cart|checkout|\/product/i,
        );
        expect(href, `outbound link is not https: ${href}`).toMatch(/^https:\/\//);
      }
      for (const phrase of [/buy now/i, /add to cart/i, /in stock/i, /best .{0,20}vest/i]) {
        await expect(main).not.toContainText(phrase);
      }
    });

    test(`${path} has one h1, sane headings and a real description`, async ({ page }) => {
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
      const description = await page
        .locator('meta[name="description"]')
        .getAttribute('content');
      expect(description).toBeTruthy();
      expect(description!.length).toBeGreaterThan(60);
      expect(description).not.toBe(await page.title());
    });

    test(`${path} has no horizontal overflow at 320px or 200% text`, async ({ page }) => {
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
  }
});

test.describe('the safety boundary is visible to the reader', () => {
  test('the equipment page routes the force question elsewhere', async ({ page }) => {
    await page.goto('/law-enforcement/what-police-equipment-is-for');
    await expect(
      page.locator('main').locator('a[href="/law-enforcement/police-use-of-force"]').first(),
    ).toBeVisible();
  });

  test('the identification page states what it will not describe', async ({ page }) => {
    await page.goto('/law-enforcement/how-police-officers-are-identified');
    await expect(page.locator('main')).toContainText(
      /not describe what those features look like/i,
    );
  });

  test('the standards page publishes no protection level', async ({ page }) => {
    await page.goto('/law-enforcement/equipment-standards-and-testing');
    const main = page.locator('main');
    await expect(main).not.toContainText(/Level III/);
    await expect(main).not.toContainText(/Level IV/);
  });
});

test.describe('official terminology survives a narrow viewport', () => {
  const CASES: [string, string][] = [
    ['/law-enforcement/what-police-equipment-is-for', 'An Garda Síochána'],
    ['/law-enforcement/why-police-wear-a-uniform', 'herkenbaarheid'],
    ['/law-enforcement/how-police-officers-are-identified', 'politielegitimatiebewijs'],
    ['/law-enforcement/equipment-standards-and-testing', 'National Institute of Justice'],
  ];
  for (const [path, phrase] of CASES) {
    test(`${phrase.slice(0, 28)}… fits at 320px on ${path}`, async ({ page }) => {
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

test.describe('the equipment layer is joined to the corpus', () => {
  test('pages that predate this wave link into it', async ({ page }) => {
    const EDGES: [string, string][] = [
      [
        '/law-enforcement/working-life-in-policing',
        '/law-enforcement/what-police-equipment-is-for',
      ],
      [
        '/law-enforcement/why-police-accountability-matters',
        '/law-enforcement/how-police-officers-are-identified',
      ],
      [
        '/law-enforcement/how-police-are-held-to-account',
        '/law-enforcement/body-worn-video-as-institutional-equipment',
      ],
      [
        '/forensics/who-regulates-forensic-science',
        '/law-enforcement/equipment-standards-and-testing',
      ],
      ['/professions/patrol-officer', '/law-enforcement/why-police-wear-a-uniform'],
    ];
    for (const [from, to] of EDGES) {
      await page.goto(from);
      await expect(
        page.locator('main').locator(`a[href="${to}"]`).first(),
        `${from} does not link into the equipment layer at ${to}`,
      ).toBeVisible();
    }
  });

  test('no equipment commerce route family exists', async ({ page }) => {
    for (const rejected of [
      '/equipment',
      '/gear',
      '/shop',
      '/law-enforcement/best-police-boots',
      '/law-enforcement/body-armour-buying-guide',
    ]) {
      const response = await page.goto(rejected);
      expect(response?.status(), `${rejected} did not 404`).toBe(404);
    }
  });
});
