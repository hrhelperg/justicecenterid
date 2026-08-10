import { expect, test, type Page } from '@playwright/test';

/**
 * The two global overlay layers: the HELPERG ecosystem bar and the consent UI.
 *
 * Runs against the exported static output in `out/`, so these assertions are about the
 * artefact that would actually be published — including the fact that the consent banner
 * is NOT in the HTML, which is a deliberate product decision rather than an oversight.
 */

const SAMPLE_PAGES = [
  '/',
  '/law-enforcement',
  '/law-enforcement/police-use-of-force',
  '/law-enforcement/how-police-are-held-to-account',
  '/countries/united-states',
  '/countries/france/law-enforcement',
  '/privacy',
];

async function openEcosystemDrawer(page: Page) {
  await page.getByRole('button', { name: /All products/i }).click();
  await expect(page.getByRole('dialog', { name: 'HELPERG ecosystem' })).toBeVisible();
}

async function openCookieSettings(page: Page) {
  await page.getByRole('button', { name: 'Cookie settings' }).click();
  await expect(page.getByRole('dialog', { name: 'Cookie settings' })).toBeVisible();
}

test.describe('the ecosystem bar is global', () => {
  for (const path of SAMPLE_PAGES) {
    test(`${path} carries the bar and identifies the current product`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);

      await expect(page.getByText('HELPERG', { exact: true }).first()).toBeVisible();
      /* The current product is marked, not merely present. */
      const current = page.locator('[aria-current="true"]').first();
      await expect(current).toContainText('JusticeCenterID');
    });
  }

  test('stays visible while scrolling and never covers the main content', async ({ page }) => {
    await page.goto('/law-enforcement/police-use-of-force');

    const bar = page.getByText('Ecosystem', { exact: true }).first();
    await expect(bar).toBeVisible();

    await page.evaluate(() => window.scrollBy(0, 2000));
    await expect(bar).toBeVisible();

    /*
     * The real check: sticky chrome must RESERVE its space rather than float over the
     * article. The first heading in <main> must sit below the bottom of the chrome.
     */
    const chrome = await page.locator('body > div.sticky').boundingBox();
    const heading = await page.locator('main h1').boundingBox();
    expect(chrome).not.toBeNull();
    expect(heading).not.toBeNull();
    expect(heading!.y).toBeGreaterThanOrEqual(chrome!.y + chrome!.height - 1);
  });

  test('marks external product links safely', async ({ page }) => {
    await page.goto('/');
    await openEcosystemDrawer(page);

    const links = page.getByRole('dialog').getByRole('link');
    const count = await links.count();
    expect(count).toBeGreaterThan(10);

    for (let i = 0; i < count; i += 1) {
      const link = links.nth(i);
      const href = await link.getAttribute('href');
      const rel = await link.getAttribute('rel');
      expect(href, 'no empty or placeholder href').toMatch(/^https:\/\//);
      expect(rel ?? '').toContain('noopener');
    }
  });
});

test.describe('the ecosystem drawer is a real dialog', () => {
  test('opens, closes on Escape, and returns focus to its trigger', async ({ page }) => {
    await page.goto('/');
    const toggle = page.getByRole('button', { name: /All products/i });

    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await openEcosystemDrawer(page);
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');

    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog', { name: 'HELPERG ecosystem' })).toHaveCount(0);
    await expect(toggle).toBeFocused();
  });

  test('closes with the visible Close control and restores focus', async ({ page }) => {
    await page.goto('/');
    await openEcosystemDrawer(page);
    await page.getByRole('dialog').getByRole('button', { name: 'Close' }).click();
    await expect(page.getByRole('dialog')).toHaveCount(0);
    await expect(page.getByRole('button', { name: /All products/i })).toBeFocused();
  });

  test('traps Tab inside the dialog', async ({ page }) => {
    await page.goto('/');
    await openEcosystemDrawer(page);

    for (let i = 0; i < 40; i += 1) {
      await page.keyboard.press('Tab');
      const inside = await page.evaluate(() => {
        const dialog = document.querySelector('[role="dialog"]');
        return dialog ? dialog.contains(document.activeElement) : false;
      });
      expect(inside, `focus escaped the dialog after ${i + 1} tabs`).toBe(true);
    }
  });

  test('restores body scrolling when closed, with no deadlock', async ({ page }) => {
    await page.goto('/');
    const before = await page.evaluate(() => document.body.style.overflow);

    await openEcosystemDrawer(page);
    expect(await page.evaluate(() => document.body.style.overflow)).toBe('hidden');

    await page.keyboard.press('Escape');
    expect(await page.evaluate(() => document.body.style.overflow)).toBe(before);
  });

  test('is reachable by keyboard alone', async ({ page }) => {
    await page.goto('/');
    const toggle = page.getByRole('button', { name: /All products/i });
    await toggle.focus();
    await page.keyboard.press('Enter');
    await expect(page.getByRole('dialog', { name: 'HELPERG ecosystem' })).toBeVisible();
  });
});

test.describe('consent is armed but not shown', () => {
  test('ships no consent banner, because nothing optional is loaded', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('region', { name: 'Cookie consent' })).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Accept all' })).toHaveCount(0);
  });

  test('writes nothing to storage on a plain visit', async ({ page }) => {
    await page.goto('/');
    const keys = await page.evaluate(() => Object.keys(window.localStorage));
    expect(keys).toEqual([]);
  });

  test('offers Cookie settings from the footer of every sampled page', async ({ page }) => {
    for (const path of ['/', '/privacy', '/law-enforcement/arrest-and-detention']) {
      await page.goto(path);
      await expect(page.getByRole('button', { name: 'Cookie settings' })).toBeVisible();
    }
  });

  test('states plainly that no optional technology is active', async ({ page }) => {
    await page.goto('/');
    await openCookieSettings(page);
    await expect(page.getByRole('dialog')).toContainText(
      /No optional cookies or tracking technologies are active/i,
    );
  });

  test('shows necessary as always-on and the optional categories as unchecked', async ({
    page,
  }) => {
    await page.goto('/');
    await openCookieSettings(page);

    const necessary = page.getByRole('checkbox', { name: /Necessary/ });
    await expect(necessary).toBeChecked();
    await expect(necessary).toBeDisabled();

    for (const name of [/Analytics/, /Marketing/]) {
      const box = page.getByRole('checkbox', { name });
      await expect(box).not.toBeChecked();
    }
  });

  test('gives Reject the same prominence as Accept', async ({ page }) => {
    await page.goto('/');
    await openCookieSettings(page);

    const accept = page.getByRole('button', { name: 'Accept all' });
    const reject = page.getByRole('button', { name: 'Reject non-essential' });
    await expect(accept).toBeVisible();
    await expect(reject).toBeVisible();

    const a = await accept.boundingBox();
    const r = await reject.boundingBox();
    /* Same height and comparable width — neither is a de-emphasised ghost control. */
    expect(Math.abs(a!.height - r!.height)).toBeLessThanOrEqual(2);
    expect(r!.width).toBeGreaterThan(a!.width * 0.6);
  });

  test('persists a rejection and reflects it when preferences reopen', async ({ page }) => {
    await page.goto('/');
    await openCookieSettings(page);
    await page.getByRole('button', { name: 'Reject non-essential' }).click();
    await expect(page.getByRole('dialog')).toHaveCount(0);

    const stored = await page.evaluate(() => window.localStorage.getItem('jcid-consent'));
    expect(stored).toBeTruthy();
    expect(JSON.parse(stored!)).toMatchObject({
      necessary: true,
      analytics: false,
      marketing: false,
    });

    await page.reload();
    await openCookieSettings(page);
    await expect(page.getByRole('checkbox', { name: /Analytics/ })).not.toBeChecked();
  });

  test('persists an acceptance across a reload', async ({ page }) => {
    await page.goto('/');
    await openCookieSettings(page);
    await page.getByRole('button', { name: 'Accept all' }).click();

    await page.reload();
    const stored = await page.evaluate(() => window.localStorage.getItem('jcid-consent'));
    expect(JSON.parse(stored!)).toMatchObject({ analytics: true, marketing: true });
  });

  test('closes on Escape and returns focus to the footer control', async ({ page }) => {
    await page.goto('/');
    const trigger = page.getByRole('button', { name: 'Cookie settings' });
    await trigger.click();
    await expect(page.getByRole('dialog', { name: 'Cookie settings' })).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog')).toHaveCount(0);
    await expect(trigger).toBeFocused();
  });
});

test.describe('the two layers coexist', () => {
  test('never opens two modal overlays at once', async ({ page }) => {
    await page.goto('/');
    await openEcosystemDrawer(page);

    /*
     * The ecosystem drawer is modal and traps focus, so the footer control is not
     * clickable while it is open. Dispatching the event directly is the adversarial
     * case: it simulates any future caller opening consent while the drawer is open,
     * and the coordinator must close the drawer rather than stack two focus traps.
     */
    await page.evaluate(() => window.dispatchEvent(new CustomEvent('jc:open-cookie-settings')));

    await expect(page.getByRole('dialog')).toHaveCount(1);
    await expect(page.getByRole('dialog', { name: 'Cookie settings' })).toBeVisible();
  });

  test('leaves the page scrollable after both overlays have been opened and closed', async ({
    page,
  }) => {
    await page.goto('/law-enforcement/police-use-of-force');

    await openEcosystemDrawer(page);
    await page.keyboard.press('Escape');
    await openCookieSettings(page);
    await page.keyboard.press('Escape');

    expect(await page.evaluate(() => document.body.style.overflow)).toBe('');
    await page.evaluate(() => window.scrollBy(0, 500));
    expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(0);
  });

  test('keeps the skip link the first control, above the ecosystem bar', async ({ page }) => {
    await page.goto('/law-enforcement');
    await page.keyboard.press('Tab');

    const skip = page.getByRole('link', { name: /Skip to main content/i });
    await expect(skip).toBeFocused();

    /* Visible means not painted behind the sticky chrome. */
    await expect(skip).toBeVisible();
    const box = await skip.boundingBox();
    expect(box!.width).toBeGreaterThan(0);

    await page.keyboard.press('Enter');
    await expect(page.locator('main')).toBeFocused();
  });
});

test.describe('layout holds at the required sizes', () => {
  test('no horizontal overflow at 320px', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 720 });
    for (const path of ['/', '/law-enforcement/police-use-of-force', '/countries/france']) {
      await page.goto(path);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, `${path} overflows horizontally at 320px`).toBeLessThanOrEqual(1);
    }
  });

  test('no horizontal overflow at 320px with the drawer open', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 720 });
    await page.goto('/');
    await openEcosystemDrawer(page);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);
  });

  test('no horizontal overflow at 200% text size', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.addStyleTag({ content: 'html { font-size: 200% !important; }' });

    for (const path of ['/', '/law-enforcement/arrest-and-detention']) {
      await page.goto(path);
      await page.addStyleTag({ content: 'html { font-size: 200% !important; }' });
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, `${path} overflows at 200% text`).toBeLessThanOrEqual(1);
    }
  });

  test('the header does not cover the ecosystem bar at 200% text size', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/');
    await page.addStyleTag({ content: 'html { font-size: 200% !important; }' });
    await page.evaluate(() => window.scrollBy(0, 1200));

    /* The "All products" control must remain clickable rather than sit behind the masthead. */
    const toggle = page.getByRole('button', { name: /All products/i });
    await expect(toggle).toBeVisible();
    await toggle.click();
    await expect(page.getByRole('dialog', { name: 'HELPERG ecosystem' })).toBeVisible();
  });
});
