import { expect, test } from '@playwright/test';

/** Wave 10: the prosecution cluster, against the exported output. */

const HUB = '/prosecution';
const PAGES = [
  '/prosecution/why-public-prosecution-exists',
  '/prosecution/how-charging-decisions-work',
  '/prosecution/prosecutorial-discretion-and-legality',
  '/prosecution/why-prosecutorial-independence-matters',
  '/prosecution/prosecutorial-accountability',
  '/prosecution/prosecutorial-objectivity',
  '/prosecution/prosecution-and-presumption-of-innocence',
  '/prosecution/how-prosecution-systems-are-organised',
];

test.describe('the hub lists the cluster and every page renders in the shell', () => {
  test('the hub links to all eight new guides', async ({ page }) => {
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
  test('the German charging provision renders in the original', async ({ page }) => {
    await page.goto('/prosecution/how-charging-decisions-work');
    const main = page.locator('main');
    await expect(main).toContainText('zureichende tatsächliche Anhaltspunkte');
    await expect(main).toContainText('no universal charging test');
  });

  test('the legality binary is refuted on its own archetype', async ({ page }) => {
    await page.goto('/prosecution/prosecutorial-discretion-and-legality');
    const main = page.locator('main');
    await expect(main).toContainText('unless the law provides otherwise');
    await expect(main).toContainText('kein öffentliches Interesse');
  });

  test('hierarchy is not rendered as political control', async ({ page }) => {
    await page.goto('/prosecution/why-prosecutorial-independence-matters');
    const main = page.locator('main');
    await expect(main).toContainText('Hierarchy is not political control');
    await expect(main).toContainText('unidad de actuación y dependencia jerárquica');
    await expect(main).toContainText('en aucun cas dans les dossiers judiciaires');
  });

  test('the Ministério Público is not flattened', async ({ page }) => {
    await page.goto('/prosecution/how-prosecution-systems-are-organised');
    const main = page.locator('main');
    await expect(main).toContainText('Ministério Público');
    await expect(main).toContainText('true and radically incomplete');
  });

  test('a charge is rendered as an allegation, not a finding', async ({ page }) => {
    await page.goto('/prosecution/prosecution-and-presumption-of-innocence');
    const main = page.locator('main');
    await expect(main).toContainText('undertaking to establish');
    await expect(main).not.toContainText('the accused offender');
  });

  test('the corrected foundational guide attributes the two-stage test', async ({ page }) => {
    await page.goto('/prosecution/what-does-a-prosecutor-do');
    const main = page.locator('main');
    await expect(main).toContainText('This is not a universal structure');
    await expect(main).toContainText('§ 152(2) StPO');
    await expect(
      page.locator('a[href="/prosecution/how-charging-decisions-work"]').first(),
    ).toBeVisible();
  });

  test('the cluster links back to Wave 8 rather than restating it', async ({ page }) => {
    await page.goto('/prosecution/why-public-prosecution-exists');
    await expect(
      page.locator('a[href="/investigations/police-vs-prosecutor-investigation"]').first(),
    ).toBeVisible();
  });
});

test.describe('metadata, structured data, layout and keyboard', () => {
  for (const path of PAGES) {
    test(`${path} has a unique canonical and models no government or legal body`, async ({
      page,
    }) => {
      await page.goto(path);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toBe(`https://justicecenterid.com${path}`);

      const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
      const serialised = JSON.stringify(blocks.map((b) => JSON.parse(b)));
      expect(serialised).not.toContain('GovernmentOrganization');
      expect(serialised).not.toContain('LegalService');
      expect(serialised).not.toContain('"@type":"Attorney"');
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

  test('long multilingual quotations fit at 320px', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 720 });
    await page.goto('/prosecution/why-prosecutorial-independence-matters');
    const main = page.locator('main');
    await expect(main).toContainText('unidad de actuación y dependencia jerárquica');
    await expect(main).toContainText('Generalbundesanwalt');
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow, 'multilingual quotations overflow at 320px').toBeLessThanOrEqual(1);
  });

  test('the German statutory quotation fits at 320px', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 720 });
    await page.goto('/prosecution/how-charging-decisions-work');
    await expect(page.locator('main')).toContainText('zureichende tatsächliche Anhaltspunkte');
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);
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
