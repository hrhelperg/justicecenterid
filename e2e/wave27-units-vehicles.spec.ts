import { expect, test } from '@playwright/test';

/**
 * Wave 27: police units, vehicles and organisational structure.
 *
 * The structured-data check carries Wave 26's refusals forward and adds one. These pages describe
 * organisational bodies, which is content a generator could plausibly model as `Organization` with
 * a `parentOrganization` graph — asserting that this platform holds structured facts about how a
 * police service is composed. It does not: it describes one service's published structure, in
 * prose, and modelling it as an organisational graph would overstate what was researched.
 */

const PAGES = [
  '/law-enforcement/what-a-police-unit-is',
  '/law-enforcement/how-specialist-units-cover-a-country',
  '/law-enforcement/police-vehicles-and-what-they-are-for',
  '/law-enforcement/marked-vehicles-and-police-identification',
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

test.describe('the units and vehicles pages render and are correctly described', () => {
  for (const path of PAGES) {
    test(`${path} models no product, offer or organisational graph`, async ({ page }) => {
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
        'Brand',
        'Vehicle',
        'Car',
        'PoliceStation',
        'GovernmentOrganization',
        'JobPosting',
        'Occupation',
        'HowTo',
        'FAQPage',
      ]) {
        expect(types, `${path} models ${forbidden}`).not.toContain(forbidden);
      }
    });

    test(`${path} links out only to cited official sources`, async ({ page }) => {
      await page.goto(path);
      const main = page.locator('main');
      const hrefs = await main
        .locator('a[href^="http"]')
        .evaluateAll((els) => els.map((e) => (e as HTMLAnchorElement).href));
      expect(hrefs.length, 'no source is linked at all').toBeGreaterThan(0);
      for (const href of hrefs) {
        expect(href, `unexpected internal URL in the source list: ${href}`).not.toMatch(
          /justicecenterid\.com/,
        );
        expect(href, `links to a commerce or review host: ${href}`).not.toMatch(
          /shop|store|\bbuy\b|amazon|ebay|review|cart|checkout/i,
        );
        expect(href, `outbound link is not https: ${href}`).toMatch(/^https:\/\//);
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

test.describe('the boundaries are visible to the reader', () => {
  test('the units page routes the careers question to Wave 24', async ({ page }) => {
    await page.goto('/law-enforcement/what-a-police-unit-is');
    await expect(
      page
        .locator('main')
        .locator('a[href="/law-enforcement/specialist-roles-in-policing"]')
        .first(),
    ).toBeVisible();
  });

  test('the markings page states what it will not describe', async ({ page }) => {
    await page.goto('/law-enforcement/marked-vehicles-and-police-identification');
    await expect(page.locator('main')).toContainText(
      /not describe what any marking looks like/i,
    );
  });

  test('the vehicle page publishes no specification or pursuit detail', async ({ page }) => {
    await page.goto('/law-enforcement/police-vehicles-and-what-they-are-for');
    const main = page.locator('main');
    await expect(main).not.toContainText(/top speed/i);
    await expect(main).not.toContainText(/ANPR/);
    await expect(main).not.toContainText(/pursuit tactics/i);
  });
});

test.describe('official terminology survives a narrow viewport', () => {
  const CASES: [string, string][] = [
    [
      '/law-enforcement/how-specialist-units-cover-a-country',
      'responds to requests for assistance',
    ],
    ['/law-enforcement/police-vehicles-and-what-they-are-for', 'trainingsvoertuig'],
    ['/law-enforcement/marked-vehicles-and-police-identification', 'wettelijk beschermd'],
    ['/law-enforcement/what-a-police-unit-is', 'New Zealand Police'],
  ];
  for (const [path, phrase] of CASES) {
    test(`${phrase.slice(0, 30)}… fits at 320px on ${path}`, async ({ page }) => {
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

test.describe('the layer is joined to the corpus', () => {
  test('pages that predate this wave link into it', async ({ page }) => {
    const EDGES: [string, string][] = [
      [
        '/law-enforcement/specialist-roles-in-policing',
        '/law-enforcement/what-a-police-unit-is',
      ],
      [
        '/law-enforcement/how-police-officers-are-identified',
        '/law-enforcement/marked-vehicles-and-police-identification',
      ],
      [
        '/law-enforcement/what-police-equipment-is-for',
        '/law-enforcement/police-vehicles-and-what-they-are-for',
      ],
      [
        '/law-enforcement/police-command-and-coordination',
        '/law-enforcement/how-specialist-units-cover-a-country',
      ],
    ];
    for (const [from, to] of EDGES) {
      await page.goto(from);
      await expect(
        page.locator('main').locator(`a[href="${to}"]`).first(),
        `${from} does not link into the units layer at ${to}`,
      ).toBeVisible();
    }
  });

  test('no units or fleet commerce route family exists', async ({ page }) => {
    for (const rejected of [
      '/units',
      '/vehicles',
      '/fleet',
      '/law-enforcement/best-police-vehicles',
      '/law-enforcement/police-car-comparison',
    ]) {
      const response = await page.goto(rejected);
      expect(response?.status(), `${rejected} did not 404`).toBe(404);
    }
  });
});
