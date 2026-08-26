import { expect, test } from '@playwright/test';

/**
 * Wave 20: public safety, emergency powers and civil protection.
 *
 * Asserted against the exported production artefact. Three things are checked here that the
 * content tests cannot see, because they need a rendered page: that the long constitutional
 * quotations in six languages do not break the layout, that the schema does not model any of
 * these pages as a government body, and that the section hub — which had no children before this
 * wave — now actually lists them.
 */

const HUB = '/public-safety';

const PUBLIC_SAFETY = [
  '/public-safety/what-public-safety-covers',
  '/public-safety/what-civil-protection-is',
  '/public-safety/who-is-in-charge-in-an-emergency',
  '/public-safety/national-and-local-emergency-authority',
  '/public-safety/military-assistance-to-civil-authorities',
  '/public-safety/what-a-state-of-emergency-changes',
  '/public-safety/who-can-declare-a-state-of-emergency',
  '/public-safety/how-emergency-powers-end',
];

const ELSEWHERE = [
  '/justice/which-rights-can-never-be-suspended',
  '/justice/reviewing-an-emergency-declaration',
  '/justice/detention-under-emergency-powers',
  '/courts/courts-during-a-state-of-emergency',
];

const ALL = [...PUBLIC_SAFETY, ...ELSEWHERE];

test.describe('the section that finally has children', () => {
  test('the hub lists every guide published in it', async ({ page }) => {
    await page.goto(HUB);
    const main = page.locator('main');
    for (const path of PUBLIC_SAFETY) {
      await expect(main.locator(`a[href="${path}"]`).first()).toBeVisible();
    }
  });

  test('the hub no longer shows the empty-section notice', async ({ page }) => {
    await page.goto(HUB);
    await expect(page.locator('main')).not.toContainText(
      'No guides published in this section yet',
    );
  });

  test('the hub is keyboard reachable and free of overflow at 320px', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 720 });
    await page.goto(HUB);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);
    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: /Skip to main content/i })).toBeFocused();
  });
});

test.describe('metadata, structured data, layout and keyboard', () => {
  for (const path of ALL) {
    test(`${path} has a unique canonical and models no government body`, async ({ page }) => {
      await page.goto(path);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toBe(`https://justicecenterid.com${path}`);

      const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
      const serialised = JSON.stringify(blocks.map((b) => JSON.parse(b)));
      // These pages describe emergency and public-safety INSTITUTIONS, which makes the temptation
      // to model them as one stronger here than anywhere else in the corpus.
      expect(serialised).not.toContain('GovernmentOrganization');
      expect(serialised).not.toContain('EmergencyService');
      expect(serialised).not.toContain('PoliceStation');
      expect(serialised).not.toContain('FireStation');
      expect(serialised).not.toContain('LegalService');
      expect(serialised).not.toContain('FAQPage');
      expect(serialised).not.toContain('HowTo');
    });

    test(`${path} has exactly one h1 and a sane heading order`, async ({ page }) => {
      await page.goto(path);
      const h1 = page.locator('main h1');
      await expect(h1).toHaveCount(1);
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

test.describe('long statutory quotations in six languages survive a narrow viewport', () => {
  /*
   * This wave quotes German, Czech, Spanish, Portuguese, Norwegian and Japanese statutory text,
   * some of it in single unbroken clauses far longer than anything the corpus carried before.
   * Long words in Germanic and Slavic languages are the classic cause of a 320px overflow, so
   * each is checked on the page that carries it.
   */
  const CASES: [string, string][] = [
    [
      '/public-safety/what-public-safety-covers',
      'Aufrechterhaltung von Sicherheit und Ordnung',
    ],
    ['/public-safety/what-public-safety-covers', 'ozbrojené bezpečnostní sbory'],
    ['/public-safety/what-civil-protection-is', 'bewaffneter Konflikte'],
    ['/public-safety/what-civil-protection-is', 'sivilbeskyttelseslov'],
    ['/public-safety/who-is-in-charge-in-an-emergency', 'annen myndighet er pålagt ansvaret'],
    [
      '/public-safety/what-a-state-of-emergency-changes',
      'só poderão ser tomadas contra as pessoas',
    ],
    ['/public-safety/who-can-declare-a-state-of-emergency', 'estado de excepción'],
    ['/justice/which-rights-can-never-be-suspended', 'Kerngehalt der Grundrechte'],
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

test.describe('the cluster is linked into the corpus, not only to itself', () => {
  const BACKLINKS: [string, string][] = [
    [
      '/law-enforcement/police-and-law-enforcement-difference',
      '/public-safety/what-public-safety-covers',
    ],
    [
      '/law-enforcement/police-command-and-coordination',
      '/public-safety/who-is-in-charge-in-an-emergency',
    ],
    ['/justice/limits-on-public-power', '/justice/which-rights-can-never-be-suspended'],
    ['/justice/reviewing-detention', '/justice/detention-under-emergency-powers'],
    ['/courts/specialized-courts', '/courts/courts-during-a-state-of-emergency'],
  ];

  for (const [from, to] of BACKLINKS) {
    test(`${from} links to ${to}`, async ({ page }) => {
      await page.goto(from);
      await expect(page.locator(`main a[href="${to}"]`).first()).toBeVisible();
    });
  }
});
