import { expect, test } from '@playwright/test';

/** Wave 6: the France oversight module, against the exported output. */

const OVERSIGHT = '/countries/france/oversight';

test.describe('the page renders inside the global shell', () => {
  test('renders with one h1, sources and the global chrome', async ({ page }) => {
    const response = await page.goto(OVERSIGHT);
    expect(response?.status()).toBe(200);

    await expect(page.locator('h1')).toHaveCount(1);
    /* Country modules render a sources landmark and a sources section; both are legitimate. */
    await expect(page.getByRole('heading', { name: 'Sources' }).first()).toBeVisible();
    await expect(page.getByRole('navigation', { name: /breadcrumb/i })).toBeVisible();

    /* Global-layer regression. */
    await expect(page.getByText('HELPERG', { exact: true }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: 'Cookie settings' })).toBeVisible();
  });

  test('is reachable from the France hub, which no longer lists it as a gap', async ({
    page,
  }) => {
    await page.goto('/countries/france');
    const link = page.locator(`a[href="${OVERSIGHT}"]`).first();
    await expect(link).toBeVisible();
    await link.click();
    await expect(page).toHaveURL(new RegExp(`${OVERSIGHT}$`));
  });
});

test.describe('the structural facts survive rendering', () => {
  test('places both inspections inside the forces they examine', async ({ page }) => {
    await page.goto(OVERSIGHT);
    const main = page.locator('main');
    await expect(main).toContainText(
      'service actif de la direction générale de la police nationale',
    );
    await expect(main).toContainText(
      "Le directeur général de la gendarmerie nationale dispose de l'inspection générale de la gendarmerie nationale",
    );
  });

  test('states that being outside is not the same as being more powerful', async ({ page }) => {
    await page.goto(OVERSIGHT);
    await expect(page.locator('main')).toContainText(
      /Being outside is not the same as being more powerful/i,
    );
  });

  test('warns that an inspection générale is not an inspectorate', async ({ page }) => {
    await page.goto(OVERSIGHT);
    await expect(page.locator('main')).toContainText(/is not an .inspectorate./i);
  });

  test('names the current IGGN arrêté and marks the 2019 one as abrogated', async ({
    page,
  }) => {
    await page.goto(OVERSIGHT);
    const main = page.locator('main');
    await expect(main).toContainText('arrêté of 23 April 2025');
    await expect(main).toContainText(/abrogated the arrêté of 15 January 2019/);
  });

  test('says on the page that it does not assess effectiveness', async ({ page }) => {
    await page.goto(OVERSIGHT);
    await expect(page.locator('main')).toContainText(
      /does not assess how well any of them works/i,
    );
  });
});

test.describe('the knowledge graph connects', () => {
  test('France now appears on the pages that gained it', async ({ page }) => {
    await page.goto('/institutions/ombuds-and-rights-institution');
    await expect(page.locator('a[href="/countries/france"]').first()).toBeVisible();

    await page.goto('/law-enforcement/who-investigates-police');
    await expect(page.locator('a[href="/countries/france"]').first()).toBeVisible();
  });

  test('the complaints-body page shows France where the pattern does not hold', async ({
    page,
  }) => {
    await page.goto('/institutions/independent-police-complaints-body');
    const section = page.locator('section', {
      has: page.getByRole('heading', { name: 'Where the pattern does not hold' }),
    });
    await expect(section).toContainText(/France/);
    await expect(section).toContainText(/No external, police-specific complaints body/i);
  });
});

test.describe('rejected labels have no page', () => {
  for (const path of [
    '/institutions/police-inspectorate',
    '/institutions/internal-affairs-unit',
    '/institutions/professional-standards-unit',
  ]) {
    test(`${path} returns 404`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(404);
    });
  }
});

test.describe('metadata, layout and keyboard', () => {
  test('has an apex canonical and no government-entity JSON-LD', async ({ page }) => {
    await page.goto(OVERSIGHT);
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toBe(`https://justicecenterid.com${OVERSIGHT}`);

    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
    const serialised = JSON.stringify(blocks.map((b) => JSON.parse(b)));
    expect(serialised).not.toContain('GovernmentOrganization');
    expect(serialised).not.toContain('PoliceStation');
  });

  test('no horizontal overflow at 320px or at 200% text', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 720 });
    await page.goto(OVERSIGHT);
    let overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow, 'overflows at 320px').toBeLessThanOrEqual(1);

    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto(OVERSIGHT);
    await page.addStyleTag({ content: 'html { font-size: 200% !important; }' });
    overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow, 'overflows at 200% text').toBeLessThanOrEqual(1);
  });

  test('is reachable by keyboard from the skip link', async ({ page }) => {
    await page.goto(OVERSIGHT);
    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: /Skip to main content/i })).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.locator('main')).toBeFocused();
  });
});
