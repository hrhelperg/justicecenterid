import { expect, test } from '@playwright/test';

/** Wave 9: the courts cluster, against the exported output. */

const HUB = '/courts';
const GUIDES = [
  '/courts/why-courts-matter',
  '/courts/court-hierarchy',
  '/courts/trial-and-appellate-courts',
  '/courts/court-jurisdiction',
  '/courts/supreme-courts-and-final-appeal',
  '/courts/administrative-courts',
  '/courts/specialized-courts',
  '/courts/federal-and-state-court-systems',
  '/courts/why-judicial-independence-matters',
];
const INSTITUTION = '/institutions/constitutional-court';
const ALL = [...GUIDES, INSTITUTION];

test.describe('the hub lists the cluster and every page renders in the shell', () => {
  test('the hub links to all nine new guides', async ({ page }) => {
    const response = await page.goto(HUB);
    expect(response?.status()).toBe(200);
    for (const path of GUIDES) {
      await expect(page.locator(`a[href="${path}"]`).first()).toBeVisible();
    }
  });

  test('the constitutional court is listed on the institutions index', async ({ page }) => {
    await page.goto('/institutions');
    const link = page.locator(`a[href="${INSTITUTION}"]`).first();
    await expect(link).toBeVisible();
    await link.click();
    await expect(page).toHaveURL(new RegExp(`${INSTITUTION}$`));
  });

  for (const path of ALL) {
    test(`${path} renders with one h1, sources and the global chrome`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);

      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.getByRole('heading', { name: 'Sources' }).first()).toBeVisible();
      await expect(page.getByRole('navigation', { name: /breadcrumb/i })).toBeVisible();

      /* Global-layer regression. */
      await expect(page.getByText('HELPERG', { exact: true }).first()).toBeVisible();
      await expect(page.getByRole('button', { name: 'Cookie settings' })).toBeVisible();
    });
  }
});

test.describe('the findings survive rendering', () => {
  test('Germany is rendered as multi-branch, not as one pyramid', async ({ page }) => {
    await page.goto('/courts/court-hierarchy');
    const main = page.locator('main');
    await expect(main).toContainText('three distinct categories');
    await expect(main).toContainText('Federal Administrative Court');
    await expect(main).toContainText('Federal Social Court');
  });

  test('the constitutional court is not equated with a supreme court', async ({ page }) => {
    await page.goto(INSTITUTION);
    const main = page.locator('main');
    await expect(main).toContainText('is not among them');
    await expect(main).toContainText('Article 120');
  });

  test('the Cicero passage renders whole, with the truncation named', async ({ page }) => {
    await page.goto('/courts/why-courts-matter');
    const main = page.locator('main');
    await expect(main).toContainText('Legum ministri magistratus');
    await expect(main).toContainText('legum interpretes iudices');
    await expect(main).toContainText('omnes servi sumus');
  });

  test('appeal scope is qualified in both directions', async ({ page }) => {
    await page.goto('/courts/trial-and-appellate-courts');
    const main = page.locator('main');
    await expect(main).toContainText('not universally a complete new trial');
    await expect(main).toContainText('not universally confined to points of law');
  });

  test('court jurisdiction links to the other two jurisdiction pages', async ({ page }) => {
    await page.goto('/courts/court-jurisdiction');
    await expect(
      page.locator('a[href="/law-enforcement/police-jurisdiction"]').first(),
    ).toBeVisible();
    await expect(
      page.locator('a[href="/investigations/investigative-jurisdiction"]').first(),
    ).toBeVisible();
  });

  test('the foundational guide leads into the cluster', async ({ page }) => {
    await page.goto('/courts/what-do-courts-do');
    await expect(page.locator('a[href="/courts/why-courts-matter"]').first()).toBeVisible();
  });

  test('the independence page links to the judge profession', async ({ page }) => {
    await page.goto('/courts/why-judicial-independence-matters');
    await expect(page.locator('a[href="/professions/judge"]').first()).toBeVisible();
  });
});

test.describe('metadata, structured data, layout and keyboard', () => {
  for (const path of ALL) {
    test(`${path} has a unique canonical and models no court or government body`, async ({
      page,
    }) => {
      await page.goto(path);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toBe(`https://justicecenterid.com${path}`);

      const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
      const serialised = JSON.stringify(blocks.map((b) => JSON.parse(b)));
      expect(serialised).not.toContain('GovernmentOrganization');
      expect(serialised).not.toContain('LegalService');
      expect(serialised).not.toContain('"Courthouse"');
      expect(serialised).not.toContain('"@type":"Court"');
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

  test('multilingual court names fit at 320px', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 720 });
    await page.goto('/courts/supreme-courts-and-final-appeal');
    const main = page.locator('main');
    await expect(main).toContainText('Cour de cassation');
    await expect(main).toContainText('Supremo Tribunal Federal');
    await expect(main).toContainText('Tribunal Supremo');
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow, 'multilingual court names overflow at 320px').toBeLessThanOrEqual(1);
  });

  test('the Latin passage does not overflow at 320px', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 720 });
    await page.goto('/courts/why-courts-matter');
    await expect(page.locator('main')).toContainText('Legum ministri magistratus');
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow, 'the Latin passage overflows at 320px').toBeLessThanOrEqual(1);
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
