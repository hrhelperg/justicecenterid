import { defineConfig, devices } from '@playwright/test';

const PORT = 4173;
const BASE_URL = `http://127.0.0.1:${PORT}`;

/**
 * Playwright runs against the exported static output in `out/`, not against `next dev`,
 * so the browser tests exercise the exact artefact that would be published.
 * Run `npm run build` before `npm run test:e2e`.
 */
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['list'], ['html', { open: 'never' }]] : [['list']],
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'desktop-chromium',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 900 } },
    },
    {
      name: 'mobile-chromium',
      use: { ...devices['Pixel 7'] },
    },
  ],
  webServer: {
    // No --single: the site is a multi-page static export, not an SPA. `serve` maps
    // /justice to justice.html via clean URLs and serves 404.html for unmatched paths.
    command: `npx --yes serve@14 out --listen ${PORT} --no-clipboard`,
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
