/**
 * The wordmark is deliberately typographic.
 *
 * No shield, eagle, laurel, star, scales-of-justice device, crest, or national colour is
 * used anywhere in the identity. That is not a stylistic preference: it is the mechanism
 * that prevents the interface from implying official status. See the image policy.
 */
export function Wordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <span
      className={`text-lg font-semibold tracking-tight ${inverse ? 'text-ink-inverse' : 'text-brand'}`}
    >
      Justice
      <span className={inverse ? 'text-accent-inverse' : 'text-accent'}>Center</span>
      ID
    </span>
  );
}
