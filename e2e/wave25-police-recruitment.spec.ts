import { expect, test } from '@playwright/test';

/**
 * Wave 25: country police recruitment and entry paths.
 *
 * The structured-data check matters more here than on any previous wave. These pages are about
 * getting a job, which makes them the content a generator is most likely to model as `JobPosting`
 * — and a JobPosting asserts a live vacancy with a hiring organisation and, usually, a salary.
 * These are evergreen explanations of official requirements, not vacancies, and this platform is
 * not the employer. Emitting that type would be a false statement in machine-readable form.
 *
 * Per Part AG the check parses `@type` structurally and never scans serialised text — the
 * substring approach Wave 23 identified as weak and Wave 24 saw fire on its own flagship
 * instrument name.
 */

const COUNTRY_PAGES = [
  '/countries/ireland/police-recruitment',
  '/countries/netherlands/police-recruitment',
  '/countries/new-zealand/police-recruitment',
  '/countries/germany/police-recruitment',
  '/countries/united-states/police-recruitment',
];

const COMPARATIVE_PAGES = [
  '/law-enforcement/who-recruits-police-officers',
  '/law-enforcement/citizenship-nationality-and-residency-in-police-recruitment',
  '/law-enforcement/when-a-recruitment-requirement-is-campaign-specific',
  '/law-enforcement/how-police-selection-is-structured',
  '/law-enforcement/police-entry-requirements-across-systems',
];

const ALL_PAGES = [...COUNTRY_PAGES, ...COMPARATIVE_PAGES];

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

test.describe('the recruitment layer renders and is correctly described', () => {
  for (const path of ALL_PAGES) {
    test(`${path} models no job posting, occupation or programme`, async ({ page }) => {
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
        'MonetaryAmountDistribution',
        'EducationalOccupationalProgram',
        'EducationalOrganization',
        'Course',
        'Offer',
        'Product',
        'AggregateRating',
        'Review',
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
      const title = await page.title();
      expect(description).toBeTruthy();
      expect(description!.length).toBeGreaterThan(60);
      expect(description).not.toBe(title);
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

test.describe('freshness and the official-source boundary are visible to readers', () => {
  for (const path of COUNTRY_PAGES) {
    test(`${path} shows when it was verified`, async ({ page }) => {
      await page.goto(path);
      await expect(page.locator('main')).toContainText(/6 September 2026/);
    });

    test(`${path} points at the authority and disclaims affiliation`, async ({ page }) => {
      await page.goto(path);
      const main = page.locator('main');
      await expect(main).toContainText(/not affiliated/i);
      await expect(main).toContainText(/does not accept applications/i);
    });

    test(`${path} offers no application affordance and no vacancy`, async ({ page }) => {
      await page.goto(path);
      const main = page.locator('main');
      await expect(main).not.toContainText(/apply now/i);
      await expect(main).not.toContainText(/now recruiting/i);
      await expect(main).not.toContainText(/applications close/i);
      await expect(main).not.toContainText(/places available/i);
    });

    test(`${path} makes the official sources reachable`, async ({ page }) => {
      /*
       * The first form of this test asserted NO external links, which was wrong. Part AJ wants
       * official sources unusually visible on recruitment pages: they are the only current
       * position, and handing the reader to the authority is part of what the page is for. What
       * must not happen is an external link inside the prose implying endorsement — the content
       * carries none, and the source list carries all of them.
       */
      await page.goto(path);
      const external = page.locator('main a[href^="http"]');
      await expect(await external.count(), 'no official source is linked').toBeGreaterThan(0);
      for (const href of await external.evaluateAll((els) =>
        els.map((e) => (e as HTMLAnchorElement).href),
      )) {
        expect(href, `link leaves the official-source set: ${href}`).not.toMatch(
          /justicecenterid\.com/,
        );
      }
    });
  }
});

test.describe('official terminology survives a narrow viewport', () => {
  const CASES: [string, string][] = [
    ['/countries/ireland/police-recruitment', 'An Garda Síochána'],
    ['/countries/ireland/police-recruitment', 'Public Appointments Service'],
    ['/countries/netherlands/police-recruitment', 'bachelor Politiekunde Wijkagent'],
    ['/countries/netherlands/police-recruitment', 'toelatingstoets'],
    ['/countries/germany/police-recruitment', 'erweiterte Berufsbildungsreife'],
    ['/countries/germany/police-recruitment', 'Qualifikationsebene'],
    ['/countries/new-zealand/police-recruitment', 'no upper age limit'],
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

test.describe('the recruitment layer is joined to the corpus', () => {
  test('each country hub links to its recruitment page', async ({ page }) => {
    for (const path of COUNTRY_PAGES) {
      const country = path.split('/')[2];
      await page.goto(`/countries/${country}`);
      await expect(
        page.locator('main').locator(`a[href="${path}"]`).first(),
        `/countries/${country} does not link to its recruitment page`,
      ).toBeVisible();
    }
  });

  test('pages that predate this wave link into the recruitment layer', async ({ page }) => {
    const EDGES: [string, string][] = [
      [
        '/law-enforcement/do-police-officers-need-a-degree',
        '/law-enforcement/police-entry-requirements-across-systems',
      ],
      [
        '/law-enforcement/what-a-police-academy-is',
        '/law-enforcement/who-recruits-police-officers',
      ],
      [
        '/law-enforcement/rank-role-and-specialisation',
        '/countries/netherlands/police-recruitment',
      ],
      [
        '/law-enforcement/police-training-and-police-education',
        '/countries/germany/police-recruitment',
      ],
      [
        '/law-enforcement/physical-readiness-in-policing-careers',
        '/law-enforcement/how-police-selection-is-structured',
      ],
      ['/professions/patrol-officer', '/law-enforcement/who-recruits-police-officers'],
    ];
    for (const [from, to] of EDGES) {
      await page.goto(from);
      await expect(
        page.locator('main').locator(`a[href="${to}"]`).first(),
        `${from} does not link into the recruitment layer at ${to}`,
      ).toBeVisible();
    }
  });

  test('rejected recruitment routes really 404, with no fallback masking', async ({ page }) => {
    /*
     * WAVE 25.5 AMENDMENT. `/countries/czechia/police-recruitment` was on this list because Wave 25
     * DEFERRED Czechia: every reachable official page redirected into an archive warning its
     * content may not be current. Wave 25.5 retried it from scratch, found the recruitment portal's
     * own live path, and published it — so the route now exists and must not 404.
     *
     * The rule this list enforces is unchanged: a country deferred for want of a current source
     * must not have a route. France, still unresearched, stays.
     */
    for (const rejected of [
      '/careers',
      '/police-recruitment',
      '/law-enforcement/how-to-become-a-police-officer-in-ireland',
      '/law-enforcement/police-salary',
      '/countries/france/police-recruitment',
      '/countries/spain/police-recruitment',
    ]) {
      const response = await page.goto(rejected);
      expect(response?.status(), `${rejected} did not 404`).toBe(404);
    }
  });
});
