import { expect, test } from '@playwright/test';

/**
 * Wave 28: how the justice professions are entered.
 *
 * The structured-data refusals matter more here than in any previous wave. A page describing a
 * qualification route is exactly the shape a generator models as `Course` or
 * `EducationalOccupationalProgram` — and either would assert that this platform offers training,
 * which it does not and must never appear to. `JobPosting` and `Occupation` are refused for the
 * same reason on the recruitment side. These pages describe what public bodies publish about
 * entry to public offices; they are not a prospectus and not a vacancy board.
 */

const PAGES = [
  '/courts/how-you-become-a-judge',
  '/prosecution/judges-and-prosecutors-one-career-or-two',
  '/defence/what-qualifying-as-a-lawyer-requires',
  '/defence/the-supervised-stage-in-legal-qualification',
  '/corrections/entering-prison-work-as-a-career',
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

test.describe('the qualification pages are correctly described to machines', () => {
  for (const path of PAGES) {
    test(`${path} models no course, programme, job or offer`, async ({ page }) => {
      await page.goto(path);
      expect(await page.locator('link[rel="canonical"]').getAttribute('href')).toBe(
        `https://justicecenterid.com${path}`,
      );
      const types = await schemaTypes(page);
      expect(types.length, `${path} emits no structured data`).toBeGreaterThan(0);
      for (const forbidden of [
        'Course',
        'CourseInstance',
        'EducationalOccupationalProgram',
        'EducationalOccupationalCredential',
        'JobPosting',
        'Occupation',
        'Product',
        'Offer',
        'AggregateOffer',
        'Review',
        'AggregateRating',
        'EducationalOrganization',
        'CollegeOrUniversity',
        'HowTo',
        'FAQPage',
      ]) {
        expect(types, `${path} models ${forbidden}`).not.toContain(forbidden);
      }
    });

    test(`${path} links out only to official regulators and bodies`, async ({ page }) => {
      await page.goto(path);
      const hrefs = await page
        .locator('main')
        .locator('a[href^="http"]')
        .evaluateAll((els) => els.map((e) => (e as HTMLAnchorElement).href));
      expect(hrefs.length, 'no source is linked at all').toBeGreaterThan(0);
      for (const href of hrefs) {
        expect(href, `not https: ${href}`).toMatch(/^https:\/\//);
        expect(href, `links to a commerce or teaching host: ${href}`).not.toMatch(
          /\b(?:shop|store|buy|amazon|ebay|courses?|tutor|coaching|academy|bootcamp|revision|prep)\b/i,
        );
      }
    });

    test(`${path} publishes no fee, salary or award figure`, async ({ page }) => {
      await page.goto(path);
      const body = (await page.locator('main').innerText()).replace(/\s+/g, ' ');
      /*
       * Every regulator cited here publishes money. Reproducing any of it would be accurate and
       * would turn an institutional page into a comparison of what routes cost and pay.
       */
      expect(body, 'a currency figure is rendered').not.toMatch(/[£$€]\s?\d/);
      expect(body, 'a salary is rendered').not.toMatch(/\bper annum\b|\bsalary of\b/i);
    });

    test(`${path} tells the reader what it is not`, async ({ page }) => {
      await page.goto(path);
      await expect(page.locator('main')).toContainText(
        /not (?:careers )?advice|not affiliated|accepts no applications|not a recruitment page|not a route into/i,
      );
    });

    test(`${path} has one h1, ordered headings and a real description`, async ({ page }) => {
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

/*
 * A prohibition-shaped assertion has to be denial-aware at this layer too, and both checks below
 * failed on the first run because they were not.
 *
 * The reason is structural rather than accidental: this corpus states its own prohibitions in
 * rendered prose. Source notes appear inside <main>, and they are where an editor records what a
 * citation must NOT be turned into — the SRA note says in terms that the finding "must not be
 * softened into 'usually a law degree'". A flat page-wide search for the forbidden wording
 * therefore finds the sentence forbidding it and reports the page as broken.
 *
 * So these read sentence by sentence and ignore any sentence carrying a denial. The same
 * correction was needed in the unit suite for this wave and in each of the two waves before it.
 */
const DENIAL =
  /\b(?:no|not|never|nothing|none|neither|nor|must not|rather than|deliberately)\b/i;

async function assertedSentences(page: import('@playwright/test').Page): Promise<string[]> {
  const text = await page.locator('main').innerText();
  return text.split(/(?<=[.!?])\s+|\n+/).filter((sentence) => !DENIAL.test(sentence));
}

test.describe('the findings survive rendering', () => {
  test('the any-subject degree wording is on the page and not softened', async ({ page }) => {
    await page.goto('/defence/what-qualifying-as-a-lawyer-requires');
    await expect(page.locator('main')).toContainText('can be in any subject');
    const softened = (await assertedSentences(page)).filter((s) =>
      /usually a law degree|normally a law degree/i.test(s),
    );
    expect(softened, 'the finding is asserted in its softened form').toEqual([]);
  });

  test('both French durations appear and are separated', async ({ page }) => {
    await page.goto('/courts/how-you-become-a-judge');
    const main = page.locator('main');
    await expect(main).toContainText('31 months');
    await expect(main).toContainText('12 months');
    await expect(main).toContainText(/must not be merged|different routes/i);
  });

  test('the organic-law sentence renders with its accents intact', async ({ page }) => {
    await page.goto('/prosecution/judges-and-prosecutors-one-career-or-two');
    await expect(page.locator('main')).toContainText(
      'Tout magistrat a vocation à être nommé, au cours de sa carrière, à des fonctions du siège et du parquet.',
    );
  });

  test('the prison page reports an absence rather than a claim', async ({ page }) => {
    await page.goto('/corrections/entering-prison-work-as-a-career');
    await expect(page.locator('main')).toContainText(/no (?:published )?academic/i);
    const asserted = (await assertedSentences(page)).filter((s) =>
      /qualifications (?:are|do not) (?:irrelevant|not matter|not needed)/i.test(s),
    );
    expect(asserted, 'the absence has been rendered as a positive claim').toEqual([]);
  });
});

test.describe('French and legal terminology fits a narrow viewport', () => {
  const CASES: [string, string][] = [
    ['/courts/how-you-become-a-judge', 'auditeur de justice'],
    ['/courts/how-you-become-a-judge', 'diplôme de niveau Bac + 4'],
    ['/prosecution/judges-and-prosecutors-one-career-or-two', 'corps judiciaire'],
    ['/defence/what-qualifying-as-a-lawyer-requires', 'SQE1 and SQE2'],
    ['/defence/the-supervised-stage-in-legal-qualification', 'usually of six months'],
  ];
  for (const [path, phrase] of CASES) {
    test(`"${phrase.slice(0, 28)}" fits at 320px`, async ({ page }) => {
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

test.describe('the cluster is joined to the corpus and claims no new route family', () => {
  test('pages that predate this wave link into it', async ({ page }) => {
    const EDGES: [string, string][] = [
      ['/courts/why-judicial-independence-matters', '/courts/how-you-become-a-judge'],
      [
        '/prosecution/how-prosecution-systems-are-organised',
        '/prosecution/judges-and-prosecutors-one-career-or-two',
      ],
      ['/defence/who-may-act-as-a-lawyer', '/defence/what-qualifying-as-a-lawyer-requires'],
      [
        '/defence/what-defence-counsel-does',
        '/defence/the-supervised-stage-in-legal-qualification',
      ],
      ['/corrections/who-runs-prisons', '/corrections/entering-prison-work-as-a-career'],
    ];
    for (const [from, to] of EDGES) {
      await page.goto(from);
      await expect(
        page.locator('main').locator(`a[href="${to}"]`).first(),
        `${from} does not link into the cluster at ${to}`,
      ).toBeVisible();
    }
  });

  test('no careers, jobs or courses route family exists', async ({ page }) => {
    for (const rejected of [
      '/careers',
      '/jobs',
      '/courses',
      '/training',
      '/how-to-become-a-judge',
      '/defence/best-route-to-qualify',
    ]) {
      const response = await page.goto(rejected);
      expect(response?.status(), `${rejected} did not 404`).toBe(404);
    }
  });
});
