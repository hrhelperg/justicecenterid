import { expect, test } from '@playwright/test';

/**
 * Wave 32: police functions, described from named services.
 *
 * Two assertions here are specific to this wave.
 *
 * The first is that nothing operational reached the rendered page. Every source read for this
 * cluster contains material this platform does not publish — the dog page describes handling, the
 * maritime page gives berths and unit establishment. The unit suite checks the content layer; this
 * checks what a browser actually paints, because that is what a reader and a search engine see.
 *
 * The second is structured data. A page describing a police function is exactly the shape a
 * generator models as `GovernmentOrganization` or `PoliceStation`, either of which would present
 * this platform as an arm of a police service rather than an independent description of one.
 */

const PAGES = [
  '/law-enforcement/transport-and-railway-policing',
  '/law-enforcement/police-dog-sections',
  '/law-enforcement/neighbourhood-policing-as-a-function',
  '/law-enforcement/maritime-and-marine-policing',
  '/law-enforcement/police-search-and-rescue',
  '/law-enforcement/when-a-specialisation-is-a-later-assignment',
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
  /\b(?:no|not|never|nothing|none|neither|nor|must not|rather than|deliberately|outside)\b/i;
async function assertedSentences(page: import('@playwright/test').Page): Promise<string[]> {
  const text = await page.locator('main').innerText();
  return text
    .split(/(?<=[.!?])\s+|\n+/)
    .filter((s) => !IS_MISCONCEPTION.test(s) && !DENIAL.test(s));
}

test.describe('the pages render correctly and describe themselves honestly', () => {
  for (const path of PAGES) {
    test(`${path} models no organisation, job or product`, async ({ page }) => {
      await page.goto(path);
      expect(await page.locator('link[rel="canonical"]').getAttribute('href')).toBe(
        `https://justicecenterid.com${path}`,
      );
      const types = await schemaTypes(page);
      expect(types.length, `${path} emits no structured data`).toBeGreaterThan(0);
      for (const forbidden of [
        'GovernmentOrganization',
        'PoliceStation',
        'EmergencyService',
        'Organization',
        'JobPosting',
        'Occupation',
        'Course',
        'Product',
        'Offer',
        'Service',
        'HowTo',
        'FAQPage',
      ]) {
        expect(types, `${path} models ${forbidden}`).not.toContain(forbidden);
      }
    });

    test(`${path} renders no C1 control characters`, async ({ page }) => {
      await page.goto(path);
      const body = await page.locator('main').innerText();
      const c1 = [...body]
        .filter((c) => c.charCodeAt(0) >= 0x80 && c.charCodeAt(0) <= 0x9f)
        .map((c) => `U+${c.charCodeAt(0).toString(16).toUpperCase()}`);
      expect(c1, `${path} renders characters left by a decoding error`).toEqual([]);
    });

    test(`${path} links out only to official bodies`, async ({ page }) => {
      await page.goto(path);
      const hrefs = await page
        .locator('main')
        .locator('a[href^="http"]')
        .evaluateAll((els) => els.map((e) => (e as HTMLAnchorElement).href));
      expect(hrefs.length, 'no source is linked').toBeGreaterThan(0);
      for (const href of hrefs) {
        expect(href, `not https: ${href}`).toMatch(/^https:\/\//);
        expect(href, `links to a commerce or teaching host: ${href}`).not.toMatch(
          /\b(?:shop|store|buy|amazon|ebay|courses?|tutor|coaching|bootcamp)\b/i,
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

test.describe('nothing operational reached the rendered page', () => {
  test('no berth, building or unit establishment is rendered', async ({ page }) => {
    await page.goto('/law-enforcement/maritime-and-marine-policing');
    const body = await page.locator('main').innerText();
    expect(body, 'a berth or building is named').not.toMatch(
      /Mechanics Bay|Waterloo Quay|Old Ferry Building|Marine Rescue Centre/i,
    );
    expect(body, 'unit establishment is rendered').not.toMatch(/10 constables|ten constables/i);
  });

  test('no page renders deployment or handling detail', async ({ page }) => {
    for (const path of PAGES) {
      await page.goto(path);
      const offenders = (await assertedSentences(page)).filter((s) =>
        /\b(?:handling technique|how the dog is worked|search pattern|pursuit|interception|entry team|takedown)\b/i.test(
          s,
        ),
      );
      expect(offenders, `${path} renders operational detail`).toEqual([]);
    }
  });

  test('the search and rescue page redirects anyone who needs help', async ({ page }) => {
    await page.goto('/law-enforcement/police-search-and-rescue');
    await expect(page.locator('main')).toContainText(/local emergency services/i);
  });
});

test.describe('the findings survive rendering', () => {
  test('the transport force is described by estate, not territory', async ({ page }) => {
    await page.goto('/law-enforcement/transport-and-railway-policing');
    const main = page.locator('main');
    await expect(main).toContainText('national footprint');
    await expect(main).toContainText(/Department for Transport/i);
  });

  test('patrol teams remain the ninety per cent, not detection', async ({ page }) => {
    await page.goto('/law-enforcement/police-dog-sections');
    const body = await page.locator('main').innerText();
    expect(body).toMatch(/90 percent of capability|ninety per cent/i);
    const misattributed = body
      .split(/(?<=[.!?])\s+|\n+/)
      .filter(
        (s) => /\b(?:90|ninety)\b/i.test(s) && /\bdetect/i.test(s) && !/\bpatrol\b/i.test(s),
      );
    expect(misattributed, 'the ninety per cent is attributed to detection').toEqual([]);
  });

  test('the Dutch seniority statement renders with its own wording', async ({ page }) => {
    await page.goto('/law-enforcement/neighbourhood-policing-as-a-function');
    await expect(page.locator('main')).toContainText(
      'De wijkagent is een ervaren politieagent',
    );
  });

  test('search and rescue renders as coordination', async ({ page }) => {
    await page.goto('/law-enforcement/police-search-and-rescue');
    await expect(page.locator('main')).toContainText(/Police coordinates Category One/i);
    await expect(page.locator('main')).toContainText(/Rescue Coordination Centre/i);
  });
});

test.describe('the cluster is joined and claims no new route family', () => {
  test('pages that predate this wave link into it', async ({ page }) => {
    const EDGES: [string, string][] = [
      [
        '/law-enforcement/police-jurisdiction',
        '/law-enforcement/transport-and-railway-policing',
      ],
      ['/law-enforcement/specialist-roles-in-policing', '/law-enforcement/police-dog-sections'],
      [
        '/law-enforcement/municipal-and-national-police',
        '/law-enforcement/neighbourhood-policing-as-a-function',
      ],
      [
        '/law-enforcement/how-specialist-units-cover-a-country',
        '/law-enforcement/maritime-and-marine-policing',
      ],
      [
        '/law-enforcement/police-command-and-coordination',
        '/law-enforcement/police-search-and-rescue',
      ],
      [
        '/law-enforcement/how-policing-careers-develop',
        '/law-enforcement/when-a-specialisation-is-a-later-assignment',
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

  test('no units or specialisations route family exists', async ({ page }) => {
    for (const rejected of [
      '/units',
      '/specialisations',
      '/functions',
      '/roles',
      '/law-enforcement/k9',
      '/law-enforcement/how-police-dogs-are-trained',
    ]) {
      const response = await page.goto(rejected);
      expect(response?.status(), `${rejected} did not 404`).toBe(404);
    }
  });
});
