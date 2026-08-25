import { expect, test } from '@playwright/test';

/** Wave 8: the criminal-investigation cluster, against the exported output. */

const HUB = '/investigations';
const PAGES = [
  '/investigations/who-investigates-crime',
  '/investigations/police-vs-prosecutor-investigation',
  '/investigations/judicial-police',
  '/investigations/investigating-judge',
  '/investigations/investigative-jurisdiction',
  '/investigations/investigation-to-prosecution',
];

test.describe('the hub lists the cluster and every page renders in the shell', () => {
  test('the hub links to all six new guides', async ({ page }) => {
    const response = await page.goto(HUB);
    expect(response?.status()).toBe(200);
    for (const path of PAGES) {
      await expect(page.locator(`a[href="${path}"]`).first()).toBeVisible();
    }
  });

  for (const path of PAGES) {
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
  test('the German provision is quoted in the original', async ({ page }) => {
    await page.goto('/investigations/investigating-judge');
    const main = page.locator('main');
    await expect(main).toContainText('Ermittlungsrichter');
    await expect(main).toContainText('gesetzlich zulässig');
  });

  test('France’s police judiciaire is rendered as a function, not an agency', async ({
    page,
  }) => {
    await page.goto('/investigations/judicial-police');
    const main = page.locator('main');
    await expect(main).toContainText('a function, not an agency');
    await expect(main).toContainText('sous la direction du procureur de la République');
  });

  test('investigative jurisdiction states the distinction from police jurisdiction', async ({
    page,
  }) => {
    await page.goto('/investigations/investigative-jurisdiction');
    const main = page.locator('main');
    await expect(main).toContainText('Police jurisdiction asks which force may act');
    await expect(
      page.locator('a[href="/law-enforcement/police-jurisdiction"]').first(),
    ).toBeVisible();
  });

  test('the foundational guide now leads into the cluster', async ({ page }) => {
    await page.goto('/investigations/what-is-a-criminal-investigation');
    await expect(
      page.locator('a[href="/investigations/who-investigates-crime"]').first(),
    ).toBeVisible();
  });

  test('the handoff page hands the charging standard onward', async ({ page }) => {
    await page.goto('/investigations/investigation-to-prosecution');
    await expect(
      page.locator('a[href="/prosecution/what-does-a-prosecutor-do"]').first(),
    ).toBeVisible();
  });
});

test.describe('metadata, structured data, layout and keyboard', () => {
  for (const path of PAGES) {
    test(`${path} has a unique canonical and models no government body`, async ({ page }) => {
      await page.goto(path);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toBe(`https://justicecenterid.com${path}`);

      const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
      const serialised = JSON.stringify(blocks.map((b) => JSON.parse(b)));
      expect(serialised).not.toContain('GovernmentOrganization');
      expect(serialised).not.toContain('LegalService');
      expect(serialised).not.toContain('PoliceStation');
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

  test('the terminology warning and long multilingual terms fit at 320px', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 720 });
    await page.goto('/investigations/judicial-police');
    const main = page.locator('main');
    await expect(main).toContainText('polícia judiciária');
    await expect(main).toContainText('polizia giudiziaria');
    await expect(main).toContainText('Mossos d’Esquadra');
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow, 'multilingual terms overflow at 320px').toBeLessThanOrEqual(1);
  });

  test('the hub is reachable by keyboard and free of overflow at 320px', async ({ page }) => {
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
