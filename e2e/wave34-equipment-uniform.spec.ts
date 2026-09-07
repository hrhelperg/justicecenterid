import { expect, test } from '@playwright/test';

/**
 * Wave 34: uniforms and insignia as institutional history.
 *
 * This is the first wave written with future commerce optionality in mind, so the rendered page is
 * where the separation has to hold. A guard over content data cannot see a template, a related
 * block or a structured-data emitter turning an editorial page into something that reads as a
 * product page — and it is the rendered page that a reader and a search engine judge.
 *
 * Two refusals are specific to this wave. `Product`, `Offer` and `AggregateRating` would describe
 * this platform as selling equipment. `ItemList` is refused as well, because a list of equipment
 * marked up as an ordered list is how a "best of" ranking is expressed to a search engine, and no
 * page here ranks anything.
 */

const PAGES = [
  '/law-enforcement/police-insignia-and-where-it-comes-from',
  '/law-enforcement/when-a-police-uniform-changes',
  '/law-enforcement/whether-a-uniform-is-the-same-for-everyone',
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

const IS_MISCONCEPTION = /^\s*Common belief:/i;
const DENIAL =
  /\b(?:no|not|never|nothing|none|neither|nor|must not|rather than|deliberately|outside|without)\b/i;

/**
 * Rendered misconceptions put the label and the belief on separate lines, and a question is not an
 * assertion. Both corrections were established in Wave 33 and both are needed here.
 */
async function assertedSentences(page: import('@playwright/test').Page): Promise<string[]> {
  const text = await page.locator('main').innerText();
  const lines = text.split(/\n+/);
  const kept: string[] = [];
  for (let i = 0; i < lines.length; i += 1) {
    const line = (lines[i] ?? '').trim();
    if (line === '') continue;
    if (IS_MISCONCEPTION.test(line)) {
      i += 1;
      continue;
    }
    kept.push(line);
  }
  return kept
    .flatMap((line) => line.split(/(?<=[.!?])\s+/))
    .filter((s) => !s.trim().endsWith('?'))
    .filter((s) => !DENIAL.test(s));
}

test.describe('the editorial page does not read as a commercial page', () => {
  for (const path of PAGES) {
    test(`${path} models no product, offer, rating or ranked list`, async ({ page }) => {
      await page.goto(path);
      expect(await page.locator('link[rel="canonical"]').getAttribute('href')).toBe(
        `https://justicecenterid.com${path}`,
      );
      const types = await schemaTypes(page);
      expect(types.length, `${path} emits no structured data`).toBeGreaterThan(0);
      for (const forbidden of [
        'Product',
        'ProductModel',
        'Offer',
        'AggregateOffer',
        'Review',
        'AggregateRating',
        'Brand',
        'ItemList',
        'GovernmentOrganization',
        'PoliceStation',
        'HowTo',
        'FAQPage',
      ]) {
        expect(types, `${path} models ${forbidden}`).not.toContain(forbidden);
      }
    });

    test(`${path} renders no price, supplier or recommendation`, async ({ page }) => {
      await page.goto(path);
      const body = await page.locator('main').innerText();
      expect(body, 'a price is rendered').not.toMatch(/[£$€]\s?\d/);
      const offenders = (await assertedSentences(page)).filter((s) =>
        /\b(?:available from|purchase from|order from|best \w+|top \d+|we recommend|our pick|worth buying)\b/i.test(
          s,
        ),
      );
      expect(offenders, `${path} renders commercial material`).toEqual([]);
    });

    test(`${path} renders no internal commercial classification`, async ({ page }) => {
      /*
       * The opportunity map lives in docs/ and must never surface. This is the rendered half of the
       * content-level assertion; both exist because exposing an internal commercial strategy would
       * be a quiet failure rather than a loud one.
       */
      await page.goto(path);
      const body = await page.locator('main').innerText();
      expect(body, 'internal classification vocabulary is rendered').not.toMatch(
        /\btier [abc]\b|commerce-compatible|affiliate suitability|commercial opportunity/i,
      );
    });

    test(`${path} renders no reproducible marking detail`, async ({ page }) => {
      await page.goto(path);
      const offenders = (await assertedSentences(page)).filter((s) =>
        /\b(?:epaulette|chevron|shoulder loop|\d+\s?cm|embossed|above the right breast|indicates? the rank of)\b/i.test(
          s,
        ),
      );
      expect(offenders, `${path} renders detail that would assist imitation`).toEqual([]);
    });

    test(`${path} loads no third-party media`, async ({ page }) => {
      await page.goto(path);
      const external = await page.evaluate(() =>
        Array.from(document.querySelectorAll('img, video, audio, iframe, source'))
          .map((el) => el.getAttribute('src') ?? '')
          .filter((src) => /^https?:\/\//i.test(src)),
      );
      expect(external, `${path} loads third-party media`).toEqual([]);
    });

    test(`${path} renders no C1 control characters`, async ({ page }) => {
      await page.goto(path);
      const body = await page.locator('main').innerText();
      const c1 = [...body]
        .filter((c) => c.charCodeAt(0) >= 0x80 && c.charCodeAt(0) <= 0x9f)
        .map((c) => `U+${c.charCodeAt(0).toString(16).toUpperCase()}`);
      expect(c1, `${path} renders characters left by a decoding error`).toEqual([]);
    });

    test(`${path} has one h1, ordered headings and a description`, async ({ page }) => {
      await page.goto(path);
      await expect(page.locator('main h1')).toHaveCount(1);
      const levels = await page.evaluate(() =>
        Array.from(document.querySelectorAll('main h1, main h2, main h3, main h4')).map((h) =>
          Number(h.tagName.slice(1)),
        ),
      );
      expect(levels.length).toBeGreaterThan(1);
      for (let i = 1; i < levels.length; i += 1) {
        expect(
          (levels[i] ?? 0) - (levels[i - 1] ?? 0),
          `heading jump at ${i}`,
        ).toBeLessThanOrEqual(1);
      }
      const description = await page
        .locator('meta[name="description"]')
        .getAttribute('content');
      expect(description).toBeTruthy();
      expect(description!.length).toBeGreaterThan(60);
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

test.describe('the findings survive rendering', () => {
  test('the service names its own colonial origin', async ({ page }) => {
    await page.goto('/law-enforcement/police-insignia-and-where-it-comes-from');
    await expect(page.locator('main')).toContainText('origins in our colonial past');
    await expect(page.locator('main')).toContainText(
      'drew on the insignia of rank worn by the British military',
    );
  });

  test('the uniform change renders as rare and dated, not as the present', async ({ page }) => {
    await page.goto('/law-enforcement/when-a-police-uniform-changes');
    const main = page.locator('main');
    await expect(main).toContainText('only the third time');
    await expect(main).toContainText('15 August 2022');
    const offenders = (await assertedSentences(page)).filter((s) =>
      /\b(?:last year|recently|is now the current)\b/i.test(s),
    );
    expect(offenders, 'a dated event is rendered as the present').toEqual([]);
  });

  test('the 1994 decision renders in the service own words', async ({ page }) => {
    await page.goto('/law-enforcement/whether-a-uniform-is-the-same-for-everyone');
    await expect(page.locator('main')).toContainText(
      'Clothing common to men and women to be identical',
    );
  });
});

test.describe('the cluster is joined and claims no commercial route family', () => {
  test('pages that predate this wave link into it', async ({ page }) => {
    const EDGES: [string, string][] = [
      [
        '/law-enforcement/why-police-wear-a-uniform',
        '/law-enforcement/police-insignia-and-where-it-comes-from',
      ],
      [
        '/law-enforcement/what-police-equipment-is-for',
        '/law-enforcement/when-a-police-uniform-changes',
      ],
      [
        '/law-enforcement/working-life-in-policing',
        '/law-enforcement/whether-a-uniform-is-the-same-for-everyone',
      ],
    ];
    for (const [from, to] of EDGES) {
      await page.goto(from);
      await expect(
        page.locator('main').locator(`a[href="${to}"]`).first(),
        `${from} does not link into the cluster at ${to}`,
      ).toBeVisible();
    }
  });

  test('no equipment, shop or ranking route family exists', async ({ page }) => {
    for (const rejected of [
      '/equipment',
      '/gear',
      '/shop',
      '/products',
      '/uniforms',
      '/law-enforcement/best-police-boots',
      '/law-enforcement/police-equipment-buying-guide',
    ]) {
      const response = await page.goto(rejected);
      expect(response?.status(), `${rejected} did not 404`).toBe(404);
    }
  });
});
