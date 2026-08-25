import { expect, test } from '@playwright/test';

/** Wave 7: the oversight institution route and the two relationship guides. */

const INVESTIGATIVE = '/institutions/independent-police-investigative-body';
const INTERNAL_EXTERNAL = '/law-enforcement/internal-vs-external-police-oversight';
const STAGES = '/law-enforcement/police-complaints-vs-criminal-investigation';
const COMPLAINTS = '/institutions/independent-police-complaints-body';

const ALL = [INVESTIGATIVE, INTERNAL_EXTERNAL, STAGES];

test.describe('every new route renders inside the global shell', () => {
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

  test('the new institution is listed on the institutions index', async ({ page }) => {
    await page.goto('/institutions');
    const link = page.locator(`a[href="${INVESTIGATIVE}"]`).first();
    await expect(link).toBeVisible();
    await link.click();
    await expect(page).toHaveURL(new RegExp(`${INVESTIGATIVE}$`));
  });
});

test.describe('the findings that decide the taxonomy survive rendering', () => {
  test('states that the purest cases must reject non-criminal reports', async ({ page }) => {
    await page.goto(INVESTIGATIVE);
    const main = page.locator('main');
    await expect(main).toContainText('reject');
    await expect(main).toContainText('not criminal');
  });

  test('renders the Swedish clause that separates independent from external', async ({
    page,
  }) => {
    await page.goto(INTERNAL_EXTERNAL);
    await expect(page.locator('main')).toContainText(
      'oberoende avdelning inom Polismyndigheten',
    );
  });

  test('renders the Kenyan insulation clause on an internal unit', async ({ page }) => {
    await page.goto(INTERNAL_EXTERNAL);
    await expect(page.locator('main')).toContainText(
      'not be subject to the control, direction or command',
    );
  });

  test('states that a duty to act is not a power to decide', async ({ page }) => {
    await page.goto(STAGES);
    const main = page.locator('main');
    await expect(main).toContainText('30 days');
    await expect(main).toContainText('not a power in the oversight body to decide');
  });

  test('names the current Irish body and never presents it as current', async ({ page }) => {
    await page.goto(INVESTIGATIVE);
    await expect(page.locator('main')).toContainText('Fiosrú');

    /*
     * GSOC may legitimately appear in a SOURCE NOTE — one of the cited sources is the
     * announcement that Fiosrú replaced it, and quoting that note is how the succession is
     * evidenced. What must not happen is the predecessor appearing in the body copy as though
     * it were a current example, so the assertion is scoped to the prose above the sources.
     */
    const body = await page.evaluate(() => {
      const main = document.querySelector('main');
      const text = main?.textContent ?? '';
      const cut = text.lastIndexOf('Sources');
      return cut > 0 ? text.slice(0, cut) : text;
    });
    expect(body).toContain('Fiosrú');
    expect(body).not.toContain('Garda Síochána Ombudsman Commission');
  });

  test('the two families link to each other', async ({ page }) => {
    await page.goto(INVESTIGATIVE);
    await expect(page.locator(`a[href="${COMPLAINTS}"]`).first()).toBeVisible();
    await page.goto(COMPLAINTS);
    await expect(page.locator(`a[href="${INVESTIGATIVE}"]`).first()).toBeVisible();
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
      expect(serialised).not.toContain('GovernmentOrganization');
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

  test('long multilingual institution names do not overflow at 320px', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 720 });
    await page.goto(INVESTIGATIVE);
    /* The longest names in the cluster, in three scripts of Latin diacritics. */
    const main = page.locator('main');
    await expect(main).toContainText('Generální inspekce bezpečnostních sborů');
    await expect(main).toContainText('Den Uafhængige Politiklagemyndighed');
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow, 'long institution names overflow at 320px').toBeLessThanOrEqual(1);
  });
});
