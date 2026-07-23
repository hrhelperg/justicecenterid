import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { JsonLd } from '@/components/seo/JsonLd';
import { ROOT_METADATA } from '@/lib/metadata';
import { jsonLdGraph, organizationSchema, websiteSchema } from '@/lib/jsonld';
import { SITE } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = ROOT_METADATA;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={SITE.htmlLang} className="h-full">
      <body className="flex min-h-full flex-col bg-surface text-ink">
        <JsonLd data={jsonLdGraph([organizationSchema(), websiteSchema()])} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
