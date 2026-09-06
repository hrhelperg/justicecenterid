import { expect, test } from '@playwright/test';

/**
 * Wave 24: law enforcement careers, training and professional pathways.
 *
 * Asserted against the exported production artefact, for what the content tests cannot see.
 *
 * The structured-data check is the one that matters most on this wave. These pages describe jobs,
 * which makes them the first content in the corpus a generator would be tempted to model as
 * `Occupation` or `JobPosting` — and both carry labour-market semantics (`estimatedSalary`,
 * `hiringOrganization`, `occupationalCategory`) that this wave deliberately publishes none of.
 * Emitting either would assert a frame the pages do not support, so the test walks `@type` values
 * and fails on them.
 */

const CAREER_GUIDES = [
  '/law-enforcement/what-a-police-academy-is',
  '/law-enforcement/do-police-officers-need-a-degree',
  '/law-enforcement/police-training-and-police-education',
  '/law-enforcement/what-police-recruits-are-taught',
  '/law-enforcement/rank-role-and-specialisation',
  '/law-enforcement/how-policing-careers-develop',
  '/law-enforcement/specialist-roles-in-policing',
  '/law-enforcement/civilian-roles-in-police-organisations',
  '/law-enforcement/skills-that-policing-relies-on',
  '/law-enforcement/physical-readiness-in-policing-careers',
  '/law-enforcement/working-life-in-policing',
  '/law-enforcement/professional-standards-in-policing-work',
];

const PROFESSION_PAGES = [
  '/professions/patrol-officer',
  '/professions/detective',
  '/professions/emergency-dispatcher',
  '/professions/corrections-officer',
  '/professions/forensic-scientist',
];

const ALL_CAREER_PAGES = [...CAREER_GUIDES, ...PROFESSION_PAGES];

/** Collect every @type in every JSON-LD block, however deeply nested. */
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

test.describe('the career surface renders and is correctly described', () => {
  for (const path of ALL_CAREER_PAGES) {
    test(`${path} models no occupation, job posting or product`, async ({ page }) => {
      await page.goto(path);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toBe(`https://justicecenterid.com${path}`);

      const types = await schemaTypes(page);
      expect(types.length, `${path} emits no structured data`).toBeGreaterThan(0);
      for (const forbidden of [
        'Occupation',
        'JobPosting',
        'EmployerAggregateRating',
        'MonetaryAmount',
        'MonetaryAmountDistribution',
        'Course',
        'EducationalOccupationalProgram',
        'EducationalOrganization',
        'Product',
        'Offer',
        'AggregateRating',
        'Review',
        'HowTo',
        'FAQPage',
      ]) {
        expect(types, `${path} models ${forbidden}`).not.toContain(forbidden);
      }
    });

    test(`${path} has one h1, a sane heading order and a real description`, async ({
      page,
    }) => {
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
  }
});

test.describe('long official terms survive a narrow viewport', () => {
  /*
   * This wave's hard tokens are official names in four languages that cannot be translated without
   * losing the fact: German compounds, Dutch programme names, and an Irish institution.
   */
  const CASES: [string, string][] = [
    ['/law-enforcement/do-police-officers-need-a-degree', 'erweiterte Berufsbildungsreife'],
    ['/law-enforcement/do-police-officers-need-a-degree', 'Fachhochschulreife'],
    ['/law-enforcement/what-a-police-academy-is', 'basispolitieopleiding'],
    ['/law-enforcement/what-a-police-academy-is', 'Templemore'],
    ['/law-enforcement/rank-role-and-specialisation', 'bachelor Rechercheur'],
    ['/law-enforcement/rank-role-and-specialisation', 'bachelor Politiekunde Wijkagent'],
    ['/law-enforcement/police-training-and-police-education', 'Vorbereitungsdienst'],
    ['/professions/emergency-dispatcher', 'centralist meldkamer'],
  ];

  for (const [path, phrase] of CASES) {
    test(`${phrase.slice(0, 32)}… fits at 320px on ${path}`, async ({ page }) => {
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

test.describe('the career layer is joined to the corpus', () => {
  test('the professions hub groups roles by part of the system', async ({ page }) => {
    await page.goto('/professions');
    const main = page.locator('main');
    for (const path of PROFESSION_PAGES) {
      await expect(main.locator(`a[href="${path}"]`).first()).toBeVisible();
    }
    /* Wave 24's polish: the grouping headings the hub did not previously have. */
    for (const heading of ['Law enforcement', 'Courts', 'Corrections']) {
      await expect(main.getByRole('heading', { name: heading, level: 3 })).toBeVisible();
    }
  });

  test('the hub still states what it deliberately does not publish', async ({ page }) => {
    await page.goto('/professions');
    await expect(page.locator('main')).toContainText(/no pay figures/i);
  });

  test('the law enforcement hub lists all twelve new guides', async ({ page }) => {
    await page.goto('/law-enforcement');
    const main = page.locator('main');
    for (const path of CAREER_GUIDES) {
      await expect(main.locator(`a[href="${path}"]`).first()).toBeVisible();
    }
  });

  test('pages that predate this wave now link into the career layer', async ({ page }) => {
    const EDGES: [string, string][] = [
      [
        '/law-enforcement/police-use-of-force',
        '/law-enforcement/what-police-recruits-are-taught',
      ],
      [
        '/law-enforcement/why-police-accountability-matters',
        '/law-enforcement/professional-standards-in-policing-work',
      ],
      [
        '/law-enforcement/how-policing-institutions-changed',
        '/law-enforcement/what-a-police-academy-is',
      ],
      ['/professions/patrol-officer', '/law-enforcement/working-life-in-policing'],
      [
        '/forensics/what-forensic-laboratories-do',
        '/law-enforcement/civilian-roles-in-police-organisations',
      ],
      [
        '/investigations/legal-authority-and-technical-capability',
        '/law-enforcement/specialist-roles-in-policing',
      ],
    ];
    for (const [from, to] of EDGES) {
      await page.goto(from);
      await expect(
        page.locator('main').locator(`a[href="${to}"]`).first(),
        `${from} does not link into the career layer at ${to}`,
      ).toBeVisible();
    }
  });

  test('the profession pages render the new career sections', async ({ page }) => {
    await page.goto('/professions/patrol-officer');
    const main = page.locator('main');
    for (const heading of [
      'What the work is like',
      'Skills the role relies on',
      'How the career tends to develop',
      'Related careers worth looking at',
    ]) {
      await expect(main.getByRole('heading', { name: heading })).toBeVisible();
    }
  });

  test('rejected career routes really 404, with no fallback masking', async ({ page }) => {
    for (const rejected of [
      '/careers',
      '/careers/police-officer',
      '/law-enforcement/how-to-become-a-police-officer',
      '/law-enforcement/police-salary',
      '/law-enforcement/best-police-academies',
      '/professions/crime-analyst',
    ]) {
      const response = await page.goto(rejected);
      expect(response?.status(), `${rejected} did not 404`).toBe(404);
    }
  });
});
