import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

export default defineConfig([
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'playwright-report/**',
    'test-results/**',
  ]),
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Content records are large typed literals; an unused import in them is a real defect.
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      'no-restricted-syntax': [
        'error',
        {
          // Canonical strings live in src/lib/site.ts. Hard-coding the domain anywhere else
          // is how canonical URLs drift.
          selector: 'Literal[value=/^https?:\\/\\/(www\\.)?justicecenterid\\.com/]',
          message: 'Do not hard-code the site origin. Import SITE from "@/lib/site" instead.',
        },
      ],
    },
  },
  {
    // site.ts defines the canonical origin. Tests and the output verifier assert the literal
    // expected value — asserting against the constant would make the check circular.
    files: ['src/lib/site.ts', 'tests/**/*.ts', 'e2e/**/*.ts', 'scripts/**/*.mjs'],
    rules: { 'no-restricted-syntax': 'off' },
  },
]);
