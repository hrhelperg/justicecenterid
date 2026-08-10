/**
 * The consent boundary.
 *
 * This is the ONLY module in the codebase that reads or writes consent state. Nothing
 * else may touch the storage key, and nothing else may decide whether an optional
 * technology is allowed to run. The brief's requirement — "do not scatter localStorage
 * checks throughout components" — is enforced structurally: components import
 * `canUseAnalytics()` / `canUseMarketing()`, never the key.
 *
 * THE DEFAULT IS NECESSARY-ONLY, AND IT IS A DEFAULT, NOT A FALLBACK. Every read path
 * that fails — no record, unreadable record, storage disabled, a record written by an
 * older consent version — returns analytics:false and marketing:false. There is no
 * branch in this file that can produce a permissive result without a stored record
 * saying so explicitly.
 *
 * STORAGE. One key, one JSON object, no identifier of any kind. The record carries no
 * user id, no session id, no fingerprint, no IP — only the three booleans, the schema
 * version, and the timestamp the choice was made, which is the minimum needed to honour
 * the choice and to show the reader when they made it.
 *
 * NECESSARY STORAGE. Writing this record is itself "strictly necessary" processing: it
 * exists only to remember a preference the reader expressed, which is the textbook
 * exemption. Nothing is written until the reader acts.
 */

import type { ConsentCategory } from '@/content/optional-technologies';

/**
 * Bump when the MEANING of a stored choice changes — a new category, or a change in
 * what an existing category covers. A version bump invalidates stored records, so the
 * reader is asked again rather than being held to a decision they did not make about
 * the new technology.
 */
export const CONSENT_VERSION = 1;

const STORAGE_KEY = 'jcid-consent';

/** Fired on the window whenever consent changes, so gated code can react in-page. */
export const CONSENT_CHANGED_EVENT = 'jc:consent-changed';

export interface ConsentRecord {
  version: number;
  /** Always true. Present so the record is self-describing when read back. */
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  /** ISO 8601, when the choice was recorded. */
  timestamp: string;
}

/** The state before any choice is made, and after any failed read. */
export const DEFAULT_CONSENT: Omit<ConsentRecord, 'timestamp'> = {
  version: CONSENT_VERSION,
  necessary: true,
  analytics: false,
  marketing: false,
};

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

/**
 * Validate an unknown value as a consent record for the CURRENT version.
 *
 * Exported because the tests drive it directly: a record from a previous version, a
 * truncated record, or hand-edited JSON must all be rejected rather than partially
 * trusted.
 */
export function parseConsent(raw: unknown): ConsentRecord | null {
  if (typeof raw !== 'object' || raw === null) return null;
  const value = raw as Record<string, unknown>;

  if (value.version !== CONSENT_VERSION) return null;
  if (value.necessary !== true) return null;
  if (typeof value.analytics !== 'boolean') return null;
  if (typeof value.marketing !== 'boolean') return null;
  if (typeof value.timestamp !== 'string' || value.timestamp.length === 0) return null;

  return {
    version: CONSENT_VERSION,
    necessary: true,
    analytics: value.analytics,
    marketing: value.marketing,
    timestamp: value.timestamp,
  };
}

/**
 * The stored record, or null when the reader has not chosen (or the choice is stale).
 * Null is the signal the banner uses to decide whether to ask.
 */
export function getStoredConsent(): ConsentRecord | null {
  if (!isBrowser()) return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return parseConsent(JSON.parse(raw));
  } catch {
    /* Private mode, disabled storage, or corrupt JSON. Treat as "not chosen". */
    return null;
  }
}

/** The effective consent — the stored record, or the necessary-only default. */
export function getConsent(): ConsentRecord {
  return getStoredConsent() ?? { ...DEFAULT_CONSENT, timestamp: '' };
}

export function setConsent(choice: { analytics: boolean; marketing: boolean }): ConsentRecord {
  const record: ConsentRecord = {
    version: CONSENT_VERSION,
    necessary: true,
    analytics: choice.analytics,
    marketing: choice.marketing,
    timestamp: new Date().toISOString(),
  };

  if (isBrowser()) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    } catch {
      /* Storage unavailable. The choice still applies for this page view. */
    }
    window.dispatchEvent(
      new CustomEvent<ConsentRecord>(CONSENT_CHANGED_EVENT, { detail: record }),
    );
  }

  return record;
}

/** Accept every optional category. */
export function acceptAll(): ConsentRecord {
  return setConsent({ analytics: true, marketing: true });
}

/** Decline every optional category. Exactly as reachable as `acceptAll`. */
export function rejectOptional(): ConsentRecord {
  return setConsent({ analytics: false, marketing: false });
}

/** Forget the stored choice, so the reader is asked again. */
export function clearConsent(): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* Nothing to do. */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: null }));
}

/* -------------------------------------------------------------------------- */
/* The gates. The only sanctioned way to ask "may this run?"                   */
/* -------------------------------------------------------------------------- */

export function hasConsentFor(category: ConsentCategory): boolean {
  if (category === 'necessary') return true;
  const stored = getStoredConsent();
  if (!stored) return false;
  return category === 'analytics' ? stored.analytics : stored.marketing;
}

export function canUseAnalytics(): boolean {
  return hasConsentFor('analytics');
}

export function canUseMarketing(): boolean {
  return hasConsentFor('marketing');
}

/** Subscribe to consent changes. Returns an unsubscribe function. */
export function onConsentChanged(listener: (record: ConsentRecord | null) => void): () => void {
  if (!isBrowser()) return () => {};
  const handler = (event: Event) =>
    listener((event as CustomEvent<ConsentRecord | null>).detail);
  window.addEventListener(CONSENT_CHANGED_EVENT, handler);
  return () => window.removeEventListener(CONSENT_CHANGED_EVENT, handler);
}

/* -------------------------------------------------------------------------- */
/* useSyncExternalStore adapter                                                */
/* -------------------------------------------------------------------------- */

/*
 * Consent is external state that React does not own, read from a store that does not
 * exist during a static export. `useSyncExternalStore` is the primitive built for
 * exactly that: it renders the server snapshot during hydration — so the prerendered
 * HTML and the first client render agree — and swaps to the live snapshot immediately
 * afterwards. The alternative, a `mounted` flag set from an effect, produces the same
 * visual result by triggering a second render pass, which is the cascading-render
 * pattern React's lint rule (correctly) rejects.
 *
 * The snapshot is the RAW STRING, not a parsed object. getSnapshot must be referentially
 * stable between calls or React re-renders forever; a fresh object literal every call
 * would do precisely that. Callers parse the string with `parseConsent`.
 */

export function subscribeToConsent(onChange: () => void): () => void {
  if (!isBrowser()) return () => {};
  const handler = () => onChange();
  window.addEventListener(CONSENT_CHANGED_EVENT, handler);
  /* Keeps two open tabs in agreement about a choice made in either of them. */
  window.addEventListener('storage', handler);
  return () => {
    window.removeEventListener(CONSENT_CHANGED_EVENT, handler);
    window.removeEventListener('storage', handler);
  };
}

export function getConsentSnapshot(): string | null {
  if (!isBrowser()) return null;
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

/** No storage exists at build time, so no choice has been made. */
export function getServerConsentSnapshot(): string | null {
  return null;
}

/** Parse a raw snapshot string into a record, or null. */
export function consentFromSnapshot(raw: string | null): ConsentRecord | null {
  if (!raw) return null;
  try {
    return parseConsent(JSON.parse(raw));
  } catch {
    return null;
  }
}

/**
 * Run `load` only once the category is permitted — now, or later if the reader
 * consents during this page view.
 *
 * The intended entry point for any future analytics or marketing script. Using it means
 * a provider can never be wired up in a way that executes before consent, because the
 * only reference to the script sits inside a callback this function controls.
 */
export function whenConsented(
  category: Exclude<ConsentCategory, 'necessary'>,
  load: () => void,
): () => void {
  if (hasConsentFor(category)) {
    load();
    return () => {};
  }
  let done = false;
  return onConsentChanged(() => {
    if (done) return;
    if (hasConsentFor(category)) {
      done = true;
      load();
    }
  });
}

/** The storage key, exported for tests only. Application code must not read it. */
export const CONSENT_STORAGE_KEY_FOR_TESTS = STORAGE_KEY;
