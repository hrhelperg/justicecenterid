import type { NextConfig } from 'next';

/**
 * Static export. Every route is prerendered at build time into `out/`, which is the
 * directory Netlify publishes. See docs/architecture/technical-architecture.md for the
 * reasoning, the accepted limitations, and the documented trigger for revisiting this.
 */
const nextConfig: NextConfig = {
  output: 'export',

  // Static export cannot run the image optimiser. No raster content images ship in this
  // phase; see docs/editorial/image-policy.md.
  images: { unoptimized: true },

  // Canonical URLs carry no trailing slash. Netlify `pretty_urls` must stay off so the
  // platform does not introduce a second live form of every URL.
  trailingSlash: false,

  // Fail the build on type errors rather than shipping them. (Next 16 no longer runs
  // ESLint during `next build`; linting is a separate step in `npm run validate`.)
  typescript: { ignoreBuildErrors: false },

  poweredByHeader: false,
};

export default nextConfig;
