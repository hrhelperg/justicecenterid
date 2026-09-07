import { expect, test } from '@playwright/test';

/**
 * Wave 35: training institutions, as institutions rather than as courses.
 *
 * These are the first pages in the corpus built around named real organisations, and the rendered
 * page is where that becomes a risk. A search engine reading a page about a named institution will
 * try to make an `EducationalOrganization` or a `CollegeOrUniversity` of it, and either would assert
 * a status neither source establishes — the Norwegian institution names bachelor and master
 * programmes but does not describe itself as a høgskole on the page read. Calling a police training
 * centre a university for SEO is exactly what the brief forbids.
 *
 * `ItemList` is refused for the same reason as in Wave 34: a set of named institutions marked up as
 * an ordered list is how a ranking is expressed to a machine, and nothing here ranks.
 */

const PAGES = [
  '/law-enforcement/what-a-police-training-institution-is-in-law',
  '/law-enforcement/most-police-training-is-not-recruit-training',
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

test.describe('a named institution is not marked up as a university or a ranked entry', () => {
  for (const path of PAGES) {
    test(`${path} models no educational organisation, course or ranked list`, async ({
      page,
    }) => {
      await page.goto(path);
      expect(await page.locator('link[rel="canonical"]').getAttribute('href')).toBe(
        `https://justicecenterid.com${path}`,
      );
      const types = await schemaTypes(page);
      expect(types.length, `${path} emits no structured data`).toBeGreaterThan(0);
      for (const forbidden of [
        'EducationalOrganization',
        'CollegeOrUniversity',
        'School',
        'Course',
        'EducationalOccupationalProgram',
        'EducationalOccupationalCredential',
        'ItemList',
        'Rating',
        'AggregateRating',
        'Review',
        'Product',
        'Offer',
        'GovernmentOrganization',
        'HowTo',
        'FAQPage',
      ]) {
        expect(types, `${path} models ${forbidden}`).not.toContain(forbidden);
      }
    });

    test(`${path} renders no ranking, rating or fabricable directory figure`, async ({
      page,
    }) => {
      await page.goto(path);
      const body = await page.locator('main').innerText();
      expect(body, 'a currency figure is rendered').not.toMatch(/[£$€]\s?\d/);
      const offenders = (await assertedSentences(page)).filter((s) =>
        /\b(?:best (?:police )?(?:academy|college)|top \d+|ranked|tuition|acceptance rate|graduation rate|job guarantee|leading institution)\b/i.test(
          s,
        ),
      );
      expect(offenders, `${path} renders ranking or fabricable directory data`).toEqual([]);
    });

    test(`${path} renders no internal B2B or commercial strategy`, async ({ page }) => {
      await page.goto(path);
      const body = await page.locator('main').innerText();
      expect(body, 'internal strategy vocabulary is rendered').not.toMatch(
        /paid visibility|sponsored profile|commercial potential|\baffiliate\b/i,
      );
    });

    test(`${path} renders no C1 control characters`, async ({ page }) => {
      await page.goto(path);
      const body = await page.locator('main').innerText();
      const c1 = [...body]
        .filter((c) => c.charCodeAt(0) >= 0x80 && c.charCodeAt(0) <= 0x9f)
        .map((c) => `U+${c.charCodeAt(0).toString(16).toUpperCase()}`);
      expect(c1, `${path} renders characters left by a decoding error`).toEqual([]);
    });

    test(`${path} links out only to official institution sources`, async ({ page }) => {
      await page.goto(path);
      const hrefs = await page
        .locator('main')
        .locator('a[href^="http"]')
        .evaluateAll((els) => els.map((e) => (e as HTMLAnchorElement).href));
      expect(hrefs.length, 'no source is linked').toBeGreaterThan(0);
      for (const href of hrefs) {
        expect(href, `not https: ${href}`).toMatch(/^https:\/\//);
        expect(href, `links to a commerce or ranking host: ${href}`).not.toMatch(
          /\b(?:shop|store|buy|amazon|rankings?|league-?table|studyportals)\b/i,
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

test.describe('the findings survive rendering', () => {
  test('both halves of the Dutch position render together', async ({ page }) => {
    await page.goto('/law-enforcement/what-a-police-training-institution-is-in-law');
    const main = page.locator('main');
    await expect(main).toContainText('onderdeel van de politie');
    await expect(main).toContainText('zelfstandig bestuursorgaan (zbo)');
    const offenders = (await assertedSentences(page)).filter((s) =>
      /\b(?:simply a department|no separate standing)\b/i.test(s),
    );
    expect(offenders, 'the both-at-once finding is reversed in rendered text').toEqual([]);
  });

  test('the Norwegian distribution renders with the continuing majority intact', async ({
    page,
  }) => {
    await page.goto('/law-enforcement/most-police-training-is-not-recruit-training');
    const main = page.locator('main');
    await expect(main).toContainText('3,600');
    await expect(main).toContainText('1,490');
    await expect(main).toContainText('Politihøgskolen');
  });

  test('no university or degree-awarding status is asserted', async ({ page }) => {
    await page.goto('/law-enforcement/most-police-training-is-not-recruit-training');
    const offenders = (await assertedSentences(page)).filter((s) =>
      /\b(?:is a university|university status|accredited university|degree-awarding)\b/i.test(
        s,
      ),
    );
    expect(offenders, 'a university status is asserted in rendered text').toEqual([]);
  });
});

test.describe('the cluster is joined and no directory route family exists', () => {
  test('pages that predate this wave link into it', async ({ page }) => {
    const EDGES: [string, string][] = [
      [
        '/law-enforcement/what-a-police-academy-is',
        '/law-enforcement/what-a-police-training-institution-is-in-law',
      ],
      [
        '/law-enforcement/police-training-and-police-education',
        '/law-enforcement/most-police-training-is-not-recruit-training',
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

  test('no academies, directory or ranking route family exists', async ({ page }) => {
    for (const rejected of [
      '/academies',
      '/training-institutions',
      '/directory',
      '/colleges',
      '/law-enforcement/best-police-academies',
      '/law-enforcement/police-academy-rankings',
    ]) {
      const response = await page.goto(rejected);
      expect(response?.status(), `${rejected} did not 404`).toBe(404);
    }
  });
});
