import type { JsonLdObject } from '@/lib/jsonld';

/**
 * Serialises a typed structured-data graph. `<` is escaped so a value can never terminate
 * the script element early.
 */
export function JsonLd({ data }: { data: JsonLdObject }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
