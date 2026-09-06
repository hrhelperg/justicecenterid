import { expect, test } from '@playwright/test';

/**
 * Wave 25.5: recruitment coverage completion and country architecture hardening.
 *
 * Three things need a rendered page to check.
 *
 * The England and Wales page must not present itself as a country page. It lives in the global
 * section precisely because it is not one, and the reader has to be able to see that — in the
 * breadcrumb trail, in the scope callout, and in the absence of any `/countries/...` self-reference.
 *
 * The two resolved deferrals must render the freshness the wave was built to protect, and must
 * reach their official sources.
 *
 * And the structured data must still refuse `JobPosting` and `Occupation`, checked by parsing
 * `@type` rather than scanning serialised text.
 */

const NEW_PAGES = [
  '/law-enforcement/police-recruitment-in-england-and-wales',
  '/countries/czechia/police-recruitment',
  '/countries/norway/police-recruitment',
];

const COUNTRY_PAGES = [
  '/countries/czechia/police-recruitment',
  '/countries/norway/police-recruitment',
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

test.describe('the new pages render and are correctly described', () => {
  for (const path of NEW_PAGES) {
    test(`${path} models no job posting or occupation`, async ({ page }) => {
      await page.goto(path);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toBe(`https://justicecenterid.com${path}`);
      const types = await schemaTypes(page);
      expect(types.length, `${path} emits no structured data`).toBeGreaterThan(0);
      for (const forbidden of [
        'JobPosting',
        'Occupation',
        'EmployerAggregateRating',
        'MonetaryAmount',
        'EducationalOccupationalProgram',
        'Course',
        'Offer',
        'HowTo',
        'FAQPage',
      ]) {
        expect(types, `${path} models ${forbidden}`).not.toContain(forbidden);
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

test.describe('England and Wales does not present itself as a country', () => {
  const EW = '/law-enforcement/police-recruitment-in-england-and-wales';

  test('the page states its scope and names the separate systems', async ({ page }) => {
    await page.goto(EW);
    const main = page.locator('main');
    await expect(main).toContainText(/not a United Kingdom page/i);
    await expect(main).toContainText('Scotland');
    await expect(main).toContainText('Northern Ireland');
  });

  test('the page does not sit under, or claim, a country route', async ({ page }) => {
    await page.goto(EW);
    /* No self-reference to a country page for England and Wales, which does not exist. */
    await expect(page.locator('main a[href^="/countries/england"]')).toHaveCount(0);
    await expect(page.locator('main a[href^="/countries/united-kingdom"]')).toHaveCount(0);
  });

  test('no England-and-Wales or United Kingdom country route exists', async ({ page }) => {
    for (const rejected of [
      '/countries/england-and-wales',
      '/countries/united-kingdom',
      '/countries/england-and-wales/police-recruitment',
      '/countries/united-kingdom/police-recruitment',
      '/countries/great-britain',
    ]) {
      const response = await page.goto(rejected);
      expect(response?.status(), `${rejected} did not 404`).toBe(404);
    }
  });
});

test.describe('the resolved deferrals show freshness and reach their sources', () => {
  for (const path of COUNTRY_PAGES) {
    test(`${path} shows when it was verified and disclaims affiliation`, async ({ page }) => {
      await page.goto(path);
      const main = page.locator('main');
      await expect(main).toContainText(/6 September 2026/);
      await expect(main).toContainText(/not affiliated/i);
      await expect(main).toContainText(/does not accept applications/i);
    });

    test(`${path} reaches an official source and claims no vacancy`, async ({ page }) => {
      await page.goto(path);
      const main = page.locator('main');
      await expect(main).not.toContainText(/now recruiting/i);
      await expect(main).not.toContainText(/applications close/i);
      await expect(main).not.toContainText(/apply now/i);
      const external = main.locator('a[href^="http"]');
      expect(await external.count(), 'no official source is linked').toBeGreaterThan(0);
      for (const href of await external.evaluateAll((els) =>
        els.map((e) => (e as HTMLAnchorElement).href),
      )) {
        expect(href, `unexpected internal link in the source list: ${href}`).not.toMatch(
          /justicecenterid\.com/,
        );
        expect(href, `links to a known archive host: ${href}`).not.toMatch(
          /archiv\.policie\.gov\.cz|web\.archive\.org/,
        );
      }
    });
  }

  test('official terminology survives a narrow viewport', async ({ page }) => {
    const CASES: [string, string][] = [
      ['/countries/czechia/police-recruitment', 'Policie České republiky'],
      ['/countries/czechia/police-recruitment', 'maturita'],
      ['/countries/norway/police-recruitment', 'Politihøgskolen'],
      ['/countries/norway/police-recruitment', 'Generell studiekompetanse'],
      ['/countries/norway/police-recruitment', 'samordnaopptak'],
    ];
    await page.setViewportSize({ width: 320, height: 720 });
    for (const [path, phrase] of CASES) {
      await page.goto(path);
      await expect(page.locator('main')).toContainText(phrase);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, `"${phrase}" overflows at 320px`).toBeLessThanOrEqual(1);
    }
  });
});

test.describe('the new pages are joined to the corpus', () => {
  test('each country hub links to its new recruitment page', async ({ page }) => {
    for (const country of ['czechia', 'norway']) {
      await page.goto(`/countries/${country}`);
      await expect(
        page
          .locator('main')
          .locator(`a[href="/countries/${country}/police-recruitment"]`)
          .first(),
        `/countries/${country} does not link to its recruitment page`,
      ).toBeVisible();
    }
  });

  test('pages that predate this wave link into the new pages', async ({ page }) => {
    const EDGES: [string, string][] = [
      [
        '/law-enforcement/who-recruits-police-officers',
        '/law-enforcement/police-recruitment-in-england-and-wales',
      ],
      [
        '/law-enforcement/do-police-officers-need-a-degree',
        '/law-enforcement/police-recruitment-in-england-and-wales',
      ],
      [
        '/law-enforcement/citizenship-nationality-and-residency-in-police-recruitment',
        '/countries/czechia/police-recruitment',
      ],
      [
        '/law-enforcement/when-a-recruitment-requirement-is-campaign-specific',
        '/countries/norway/police-recruitment',
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
});
