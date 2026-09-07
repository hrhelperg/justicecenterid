import { expect, test } from '@playwright/test';

/**
 * Wave 29: forensic science and emergency call handling.
 *
 * ONE REFUSAL HERE IS DIFFERENT IN KIND FROM EVERY OTHER IN THE CORPUS.
 *
 * The dispatch pages are about the people who answer emergency calls. Marking such a page up as
 * `EmergencyService`, or attaching a `ContactPoint` or telephone number to it, would let a search
 * engine or assistant present this platform as somewhere to contact in an emergency. It is not,
 * and the harm from that is immediate rather than reputational. So these pages are asserted to
 * carry no emergency-service markup, no telephone-shaped text, and no `tel:` link at all — and to
 * tell a reader in an emergency, in visible prose, to contact their local emergency number.
 *
 * The forensic pages carry the ordinary refusals plus one of their own: nothing may model this
 * platform as offering a forensic `Service`, and nothing may model a `Course`, since Wave 28
 * established that a page about entering a profession is exactly the shape a generator reaches
 * for a prospectus with.
 */

const FORENSIC = [
  '/forensics/what-forensic-accreditation-requires',
  '/forensics/how-forensic-competence-is-established',
];
const DISPATCH = [
  '/public-safety/entering-emergency-call-handling',
  '/public-safety/taking-the-call-and-sending-the-unit',
];
const PAGES = [...FORENSIC, ...DISPATCH];

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

test.describe('the pages are correctly described to machines', () => {
  for (const path of PAGES) {
    test(`${path} models no course, programme, job, offer or service`, async ({ page }) => {
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
        'Service',
        'ProfessionalService',
        'MedicalTest',
        'HowTo',
        'FAQPage',
      ]) {
        expect(types, `${path} models ${forbidden}`).not.toContain(forbidden);
      }
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
        expect(href, `links to a commerce, teaching or membership host: ${href}`).not.toMatch(
          /\b(?:shop|store|buy|amazon|ebay|courses?|tutor|coaching|bootcamp|association|membership)\b/i,
        );
      }
    });

    test(`${path} publishes no pay figure`, async ({ page }) => {
      await page.goto(path);
      const body = (await page.locator('main').innerText()).replace(/\s+/g, ' ');
      expect(body, 'a currency figure is rendered').not.toMatch(/[£$€]\s?\d/);
      expect(body, 'a salary is rendered').not.toMatch(/\bper annum\b|\bsalary of\b/i);
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

test.describe('the dispatch pages cannot be mistaken for an emergency contact', () => {
  for (const path of DISPATCH) {
    test(`${path} carries no emergency-service markup`, async ({ page }) => {
      await page.goto(path);
      const types = await schemaTypes(page);
      for (const forbidden of [
        'EmergencyService',
        'PoliceStation',
        'FireStation',
        'Hospital',
        'ContactPoint',
        'ContactPage',
        'LocalBusiness',
        'GovernmentOrganization',
      ]) {
        expect(types, `${path} models ${forbidden}`).not.toContain(forbidden);
      }
    });

    test(`${path} offers no telephone number or tel: link`, async ({ page }) => {
      await page.goto(path);
      expect(await page.locator('a[href^="tel:"]').count(), 'a tel: link is present').toBe(0);
      const body = await page.locator('main').innerText();
      /*
       * 111, 112, 105 and 999 appear in this material as the names of call streams, which is
       * unavoidable and correct. What must never appear is one of them formatted as something to
       * dial — preceded by an instruction verb, or written as a telephone number.
       */
      expect(body, 'a number is presented as something to dial').not.toMatch(
        /\b(?:call|dial|ring|phone|contact)\s+(?:on\s+)?(?:1{3}|112|999|911|105)\b/i,
      );
      expect(body, 'a telephone-shaped number is rendered').not.toMatch(
        /\+\d[\d\s().-]{7,}|\b\d{3}[\s.-]\d{3}[\s.-]\d{4}\b/,
      );
    });

    test(`${path} tells a reader in an emergency to go elsewhere`, async ({ page }) => {
      await page.goto(path);
      await expect(page.locator('main')).toContainText(
        /contact (?:their|your) local emergency|emergency number directly|not guidance for anyone contacting/i,
      );
    });
  }
});

test.describe('the findings survive rendering', () => {
  const DENIAL =
    /\b(?:no|not|never|nothing|none|neither|nor|must not|rather than|overstate)\b/i;
  async function assertedSentences(page: import('@playwright/test').Page): Promise<string[]> {
    const text = await page.locator('main').innerText();
    /*
     * The rendered corpus labels each misconception "Common belief:" and its correction "In
     * practice:". A prohibition guard reading rendered text has to skip the first, exactly as the
     * unit suite skips the `claim` field it comes from — otherwise every belief the page exists to
     * correct reads as the page asserting it. This caught it: "Common belief: Forensic scientists
     * are licensed the way lawyers are admitted" carries no denial word, so the denial filter
     * alone let it through.
     */
    return text
      .split(/(?<=[.!?])\s+|\n+/)
      .filter((s) => !/^\s*Common belief:/i.test(s) && !DENIAL.test(s));
  }

  test('the accreditation page states the limit and never overstates it', async ({ page }) => {
    await page.goto('/forensics/what-forensic-accreditation-requires');
    await expect(page.locator('main')).toContainText(/though not all|but not all|not all/i);
    const overstated = (await assertedSentences(page)).filter((s) =>
      /accreditation is required for (?:all|every)|without exception/i.test(s),
    );
    expect(overstated, 'accreditation is described as universally required').toEqual([]);
  });

  test('a single practitioner can be a forensic unit, and the page says so', async ({
    page,
  }) => {
    await page.goto('/forensics/what-forensic-accreditation-requires');
    await expect(page.locator('main')).toContainText(
      'can be a team, a unit or a single practitioner',
    );
  });

  test('the competence page does not render forensic scientists as licensed individuals', async ({
    page,
  }) => {
    await page.goto('/forensics/how-forensic-competence-is-established');
    const asserted = (await assertedSentences(page)).filter((s) =>
      /forensic scientists? (?:are|is) (?:licensed|admitted|certified)/i.test(s),
    );
    expect(asserted, 'individual licensing is asserted').toEqual([]);
    await expect(page.locator('main')).toContainText(/declar/i);
  });

  test('the Dutch level renders with its own wording, not as a degree', async ({ page }) => {
    await page.goto('/public-safety/entering-emergency-call-handling');
    await expect(page.locator('main')).toContainText('mbo 3 werk- en denkniveau');
    const asserted = (await assertedSentences(page)).filter((s) =>
      /require[sd]?[^.]{0,60}(?:university degree|bachelor)/i.test(s),
    );
    expect(asserted, 'a degree requirement is asserted').toEqual([]);
  });

  test('no count of communications centres is published', async ({ page }) => {
    await page.goto('/public-safety/taking-the-call-and-sending-the-unit');
    await expect(page.locator('main')).not.toContainText(
      /\b(?:four|five|\d+) communications? centres\b/i,
    );
  });
});

test.describe('terminology fits a narrow viewport', () => {
  const CASES: [string, string][] = [
    ['/forensics/what-forensic-accreditation-requires', 'ISO/IEC 17025:2017'],
    [
      '/forensics/how-forensic-competence-is-established',
      'directly involved in undertaking an FSA',
    ],
    [
      '/public-safety/entering-emergency-call-handling',
      'stressbestendigheid en mentale weerbaarheid',
    ],
    ['/public-safety/taking-the-call-and-sending-the-unit', 'spoedeisende meldingen'],
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
      [
        '/forensics/who-regulates-forensic-science',
        '/forensics/what-forensic-accreditation-requires',
      ],
      [
        '/forensics/expert-evidence-in-court',
        '/forensics/how-forensic-competence-is-established',
      ],
      [
        '/public-safety/what-public-safety-covers',
        '/public-safety/entering-emergency-call-handling',
      ],
      [
        '/public-safety/who-is-in-charge-in-an-emergency',
        '/public-safety/taking-the-call-and-sending-the-unit',
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

  test('no emergency, dispatch or laboratory route family exists', async ({ page }) => {
    for (const rejected of [
      '/emergency',
      '/dispatch',
      '/laboratories',
      '/forensics/how-to-become-a-forensic-scientist',
      '/public-safety/call-999',
    ]) {
      const response = await page.goto(rejected);
      expect(response?.status(), `${rejected} did not 404`).toBe(404);
    }
  });
});
