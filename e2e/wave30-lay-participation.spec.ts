import { expect, test } from '@playwright/test';

/**
 * Wave 30: lay participation in judging.
 *
 * This spec carries one assertion no earlier wave needed: that the characters on the page are the
 * characters that were written. Adversarial QA found ninety corrupted sequences across four files,
 * thirty-three of them already merged and rendering to readers, produced by an authoring step that
 * re-decoded UTF-8 as latin-1. The unit suite now guards the content layer. This guards the thing
 * that actually matters — what a browser paints — because a corpus that quotes statutes in German
 * has no way to be right if its accented characters are not.
 *
 * The check is on character codes rather than on a pattern of broken text. C1 controls
 * (U+0080–U+009F) are the tail bytes every such corruption leaves behind, they are invisible when
 * printed, and they have no business in prose in any language.
 */

const PAGES = [
  '/courts/lay-participation-in-judging',
  '/courts/how-a-lay-court-is-composed',
  '/courts/what-a-lay-judge-decides',
  '/courts/who-may-serve-on-a-lay-court',
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
const DENIAL = /\b(?:no|not|never|nothing|none|neither|nor|must not|rather than)\b/i;
async function assertedSentences(page: import('@playwright/test').Page): Promise<string[]> {
  const text = await page.locator('main').innerText();
  return text
    .split(/(?<=[.!?])\s+|\n+/)
    .filter((s) => !IS_MISCONCEPTION.test(s) && !DENIAL.test(s));
}

test.describe('the pages render the characters that were written', () => {
  for (const path of PAGES) {
    test(`${path} renders no C1 control characters`, async ({ page }) => {
      await page.goto(path);
      const body = await page.locator('main').innerText();
      const c1 = [...body]
        .filter((c) => c.charCodeAt(0) >= 0x80 && c.charCodeAt(0) <= 0x9f)
        .map((c) => `U+${c.charCodeAt(0).toString(16).toUpperCase()}`);
      expect(c1, `${path} renders control characters left by a decoding error`).toEqual([]);
    });
  }

  test('the German statutory quotations render with their umlauts intact', async ({ page }) => {
    await page.goto('/courts/how-a-lay-court-is-composed');
    await expect(page.locator('main')).toContainText(
      'Das Schöffengericht besteht aus dem Richter beim Amtsgericht als Vorsitzenden und zwei Schöffen.',
    );
    await page.goto('/courts/what-a-lay-judge-decides');
    await expect(page.locator('main')).toContainText(
      'das Richteramt in vollem Umfang und mit gleichem Stimmrecht wie die Richter',
    );
  });

  test('the em dash survives rendering', async ({ page }) => {
    await page.goto('/courts/lay-participation-in-judging');
    const body = await page.locator('main').innerText();
    expect(body, 'the em dash has been lost or mangled').toContain('—');
  });
});

test.describe('the pages are correctly described to machines', () => {
  for (const path of PAGES) {
    test(`${path} models nothing it is not`, async ({ page }) => {
      await page.goto(path);
      expect(await page.locator('link[rel="canonical"]').getAttribute('href')).toBe(
        `https://justicecenterid.com${path}`,
      );
      const types = await schemaTypes(page);
      expect(types.length, `${path} emits no structured data`).toBeGreaterThan(0);
      for (const forbidden of [
        'Course',
        'JobPosting',
        'Occupation',
        'Product',
        'Offer',
        'Service',
        'LegalService',
        'GovernmentService',
        'Courthouse',
        'HowTo',
        'FAQPage',
      ]) {
        expect(types, `${path} models ${forbidden}`).not.toContain(forbidden);
      }
    });

    test(`${path} links out only to official legal texts`, async ({ page }) => {
      await page.goto(path);
      const hrefs = await page
        .locator('main')
        .locator('a[href^="http"]')
        .evaluateAll((els) => els.map((e) => (e as HTMLAnchorElement).href));
      expect(hrefs.length, 'no source is linked').toBeGreaterThan(0);
      for (const href of hrefs) {
        expect(href, `not https: ${href}`).toMatch(/^https:\/\//);
        expect(href, `links to a commerce or advice host: ${href}`).not.toMatch(
          /\b(?:shop|store|buy|amazon|find-a-lawyer|legaladvice)\b/i,
        );
      }
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

test.describe('the boundaries hold in rendered text', () => {
  for (const path of PAGES) {
    test(`${path} publishes no jury size`, async ({ page }) => {
      await page.goto(path);
      const body = await page.locator('main').innerText();
      expect(body, 'a jury size is rendered').not.toMatch(
        /\bjury of (?:twelve|fifteen|\d{1,2})\b|\b(?:twelve|fifteen|\d{1,2})\s+jurors\b/i,
      );
    });

    test(`${path} gives no reader advice about serving`, async ({ page }) => {
      await page.goto(path);
      const offenders = (await assertedSentences(page)).filter((s) =>
        /\bif you (?:are|have been) (?:summoned|called)|you (?:must|should) attend|apply to be excused\b/i.test(
          s,
        ),
      );
      expect(offenders, 'the page advises a reader about their own service').toEqual([]);
    });
  }

  test('no page calls a mixed panel a jury', async ({ page }) => {
    for (const path of PAGES) {
      await page.goto(path);
      const offenders = (await assertedSentences(page)).filter(
        (s) =>
          /\b(?:Schöffen|saiban-in|mixed (?:panel|bench))\b/i.test(s) &&
          /\b(?:is|are)\s+(?:a|the)\s+jury\b/i.test(s),
      );
      expect(offenders, `${path} calls a mixed panel a jury`).toEqual([]);
    }
  });

  test('the anchor page states the distinction a reader needs', async ({ page }) => {
    await page.goto('/courts/lay-participation-in-judging');
    const main = page.locator('main');
    await expect(main).toContainText(/separate (?:lay )?body/i);
    await expect(main).toContainText(
      /points in common with a jury|not a jury|not interchangeable/i,
    );
  });
});

test.describe('terminology fits a narrow viewport', () => {
  const CASES: [string, string][] = [
    ['/courts/lay-participation-in-judging', 'Schöffengerichte gebildet'],
    ['/courts/how-a-lay-court-is-composed', 'three judges and six saiban-in'],
    ['/courts/what-a-lay-judge-decides', 'in vollem Umfang und mit gleichem Stimmrecht'],
    ['/courts/who-may-serve-on-a-lay-court', 'eighteen or over but under seventy six'],
  ];
  for (const [path, phrase] of CASES) {
    test(`"${phrase.slice(0, 30)}" fits at 320px`, async ({ page }) => {
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

test.describe('the cluster is joined and claims no new route family', () => {
  test('pages that predate this wave link into it', async ({ page }) => {
    const EDGES: [string, string][] = [
      ['/courts/why-courts-matter', '/courts/lay-participation-in-judging'],
      ['/courts/court-hierarchy', '/courts/how-a-lay-court-is-composed'],
      ['/courts/why-judicial-independence-matters', '/courts/what-a-lay-judge-decides'],
      ['/courts/taking-part-in-your-own-case', '/courts/who-may-serve-on-a-lay-court'],
    ];
    for (const [from, to] of EDGES) {
      await page.goto(from);
      await expect(
        page.locator('main').locator(`a[href="${to}"]`).first(),
        `${from} does not link into the cluster at ${to}`,
      ).toBeVisible();
    }
  });

  test('no jury or jury-service route family exists', async ({ page }) => {
    for (const rejected of [
      '/jury',
      '/juries',
      '/jury-service',
      '/courts/jury-service',
      '/courts/how-to-avoid-jury-service',
    ]) {
      const response = await page.goto(rejected);
      expect(response?.status(), `${rejected} did not 404`).toBe(404);
    }
  });
});
