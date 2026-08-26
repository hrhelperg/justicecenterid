import { expect, test } from '@playwright/test';

/** Accessibility behaviour asserted against the exported production artefact. */

test.describe('skip link', () => {
  test('is the first focusable element and moves focus to main', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');

    const skipLink = page.getByRole('link', { name: 'Skip to main content' });
    await expect(skipLink).toBeFocused();
    await expect(skipLink).toBeVisible();

    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/#main$/);
    await expect(page.locator('main#main')).toBeVisible();

    /*
     * The assertions above are necessary but NOT sufficient, and this test previously
     * stopped there while claiming in its name to check focus. Following an in-page link
     * updates the URL and scrolls in every browser whether or not the target can hold
     * focus, so a hash-and-visibility check passes even when the skip link does nothing for
     * the keyboard users it exists for. It shipped broken: <main> carried no tabIndex, so
     * focus stayed on the skip link and the next Tab went straight back into the header.
     */
    await expect(page.locator('main#main')).toBeFocused();

    // The decisive check: the next Tab must land inside main, not back in the header.
    await page.keyboard.press('Tab');
    const landedInsideMain = await page.evaluate(() => {
      const active = document.activeElement;
      const main = document.querySelector('main#main');
      return Boolean(active && main && main.contains(active));
    });
    expect(landedInsideMain, 'after the skip link, Tab must move into main').toBe(true);
  });
});

test.describe('keyboard navigation', () => {
  test('every primary navigation link is reachable by keyboard', async ({ page }) => {
    test.skip(
      test.info().project.name !== 'desktop-chromium',
      'Desktop navigation is only rendered above the nav breakpoint.',
    );

    await page.goto('/');
    const nav = page.getByRole('navigation', { name: 'Primary' });
    const links = nav.getByRole('link');
    const count = await links.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i += 1) {
      await links.nth(i).focus();
      await expect(links.nth(i)).toBeFocused();
    }
  });

  test('the active section is marked with aria-current', async ({ page }) => {
    test.skip(test.info().project.name !== 'desktop-chromium', 'Desktop navigation only.');

    await page.goto('/courts');
    const current = page
      .getByRole('navigation', { name: 'Primary' })
      .locator('[aria-current="page"]');
    await expect(current).toHaveText('Courts');
  });

  test('focus is visible on interactive elements', async ({ page }) => {
    await page.goto('/glossary');
    const link = page.getByRole('link', { name: 'research and sources' }).first();
    await link.focus();

    const outlineWidth = await link.evaluate(
      (element) => getComputedStyle(element).outlineWidth,
    );
    expect(outlineWidth).not.toBe('0px');
  });
});

test.describe('mobile navigation', () => {
  const MOBILE_ONLY = 'Disclosure navigation only renders below the nav breakpoint.';

  test('opens, moves focus into the panel, closes on Escape, and restores focus', async ({
    page,
  }) => {
    test.skip(test.info().project.name !== 'mobile-chromium', MOBILE_ONLY);
    await page.goto('/');

    const toggle = page.getByRole('button', { name: /menu/i });
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');

    const panelNav = page.getByRole('navigation', { name: 'Primary (mobile)' });
    await expect(panelNav).toBeVisible();

    // Focus is moved into the panel on open.
    await expect(panelNav.getByRole('link').first()).toBeFocused();

    await page.keyboard.press('Escape');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(toggle).toBeFocused();
  });

  test('navigating from the panel closes it', async ({ page }) => {
    test.skip(test.info().project.name !== 'mobile-chromium', MOBILE_ONLY);
    await page.goto('/');
    await page.getByRole('button', { name: /menu/i }).click();

    await page
      .getByRole('navigation', { name: 'Primary (mobile)' })
      .getByRole('link', { name: 'Courts' })
      .click();

    await expect(page).toHaveURL(/\/courts$/);
    await expect(page.getByRole('button', { name: /menu/i })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });
});

test.describe('layout integrity', () => {
  const NARROW = 320;

  for (const path of [
    '/',
    '/glossary',
    '/sources',
    '/justice/what-is-due-process',
    '/countries',
    /*
     * Added by Waves 12-15. The hub is the widest new page — a long ordered list of stages with
     * inline route links — and the corrections and courts pages carry long German and Portuguese
     * statutory terms, which is the other way a page overflows at 320px.
     */
    '/justice-system',
    '/corrections/what-sentencing-is-for',
    '/courts/court-language-and-interpretation',
    '/professions/defence-lawyer',
    /*
     * Added by Wave 16. These carry the longest unbroken tokens the corpus has: German
     * compounds (Gerichtsverfassungsgesetz, Leichenöffnung, Sachverständigen) and statutory
     * citations, which are the two ways a page overflows at 320px.
     */
    '/forensics/who-investigates-a-death',
    '/forensics/what-dna-analysis-establishes',
    '/forensics/who-regulates-forensic-science',
  ]) {
    test(`${path} has no horizontal overflow at ${NARROW}px`, async ({ page }) => {
      await page.setViewportSize({ width: NARROW, height: 800 });
      await page.goto(path);

      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, `${path} overflows horizontally by ${overflow}px`).toBeLessThanOrEqual(
        1,
      );
    });
  }

  test('content remains usable at 200% zoom equivalent', async ({ page }) => {
    // WCAG 2.2 SC 1.4.10: reflow at 320 CSS px wide is the 400% desktop equivalent.
    await page.setViewportSize({ width: 320, height: 512 });
    await page.goto('/justice/what-is-justice');

    await expect(page.locator('h1')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Common misconceptions' })).toBeVisible();

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);
  });
});

test.describe('heading structure', () => {
  for (const path of ['/', '/justice', '/justice/what-is-justice', '/glossary', '/about']) {
    test(`${path} does not skip heading levels`, async ({ page }) => {
      await page.goto(path);

      const levels = await page
        .locator('h1, h2, h3, h4, h5, h6')
        .evaluateAll((elements) => elements.map((el) => Number(el.tagName.slice(1))));

      expect(levels[0], `${path} does not start at h1`).toBe(1);
      expect(levels.filter((level) => level === 1).length, `${path} has multiple h1`).toBe(1);

      for (let i = 1; i < levels.length; i += 1) {
        const previous = levels[i - 1] ?? 1;
        const current = levels[i] ?? 1;
        expect(
          current - previous,
          `${path} skips from h${previous} to h${current}`,
        ).toBeLessThanOrEqual(1);
      }
    });
  }
});

test.describe('landmarks and language', () => {
  test('the document declares its language and landmark structure', async ({ page }) => {
    await page.goto('/about');

    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator('main')).toHaveCount(1);
    await expect(page.locator('header').first()).toBeVisible();
    await expect(page.locator('footer')).toHaveCount(1);
  });

  test('every navigation landmark has a distinct accessible name', async ({ page }) => {
    await page.goto('/justice/what-is-due-process');

    const names = await page
      .locator('nav')
      .evaluateAll((elements) => elements.map((el) => el.getAttribute('aria-label')));

    expect(names.every((name) => name && name.length > 0)).toBe(true);
    expect(new Set(names).size).toBe(names.length);
  });

  test('links do not use non-descriptive text', async ({ page }) => {
    await page.goto('/');

    const texts = await page
      .getByRole('link')
      .evaluateAll((elements) =>
        elements.map((el) => (el.textContent ?? '').trim().toLowerCase()),
      );

    for (const text of texts) {
      expect(['click here', 'here', 'read more', 'more', 'link']).not.toContain(text);
    }
  });
});
