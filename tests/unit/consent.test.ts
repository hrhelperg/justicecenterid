import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  CONSENT_STORAGE_KEY_FOR_TESTS,
  CONSENT_VERSION,
  acceptAll,
  canUseAnalytics,
  canUseMarketing,
  clearConsent,
  consentFromSnapshot,
  getConsent,
  getConsentSnapshot,
  getServerConsentSnapshot,
  getStoredConsent,
  parseConsent,
  rejectOptional,
  setConsent,
  whenConsented,
} from '@/lib/consent';
import {
  OPTIONAL_TECHNOLOGIES,
  hasOptionalTechnologies,
} from '@/content/optional-technologies';

/**
 * The consent boundary.
 *
 * The suite runs in Node, where `window` does not exist, so a minimal localStorage and
 * window are installed per test. That is not a workaround — it is the point: it lets the
 * "storage is unavailable" path be tested as a first-class case rather than assumed, and
 * the first block below runs deliberately WITHOUT the stub.
 */

class MemoryStorage {
  private data = new Map<string, string>();
  getItem(key: string) {
    return this.data.get(key) ?? null;
  }
  setItem(key: string, value: string) {
    this.data.set(key, value);
  }
  removeItem(key: string) {
    this.data.delete(key);
  }
}

function installBrowser(storage: Partial<MemoryStorage> = new MemoryStorage()) {
  const listeners = new Map<string, Set<(event: Event) => void>>();
  const win = {
    localStorage: storage,
    addEventListener: (type: string, fn: (event: Event) => void) => {
      if (!listeners.has(type)) listeners.set(type, new Set());
      listeners.get(type)!.add(fn);
    },
    removeEventListener: (type: string, fn: (event: Event) => void) => {
      listeners.get(type)?.delete(fn);
    },
    dispatchEvent: (event: Event) => {
      for (const fn of listeners.get(event.type) ?? []) fn(event);
      return true;
    },
  };
  vi.stubGlobal('window', win);
  return win;
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('with no browser storage at all', () => {
  it('defaults to necessary-only rather than throwing or permitting', () => {
    expect(getStoredConsent()).toBeNull();
    expect(canUseAnalytics()).toBe(false);
    expect(canUseMarketing()).toBe(false);
    expect(getConsent()).toMatchObject({ necessary: true, analytics: false, marketing: false });
  });

  it('reports no stored choice to the server snapshot, so hydration matches', () => {
    expect(getServerConsentSnapshot()).toBeNull();
  });
});

describe('default state', () => {
  beforeEach(() => installBrowser());

  it('is necessary-only before any choice is made', () => {
    expect(getStoredConsent()).toBeNull();
    expect(canUseAnalytics()).toBe(false);
    expect(canUseMarketing()).toBe(false);
  });

  it('writes nothing to storage until the reader acts', () => {
    canUseAnalytics();
    getConsent();
    expect(getConsentSnapshot()).toBeNull();
  });
});

describe('recording a choice', () => {
  beforeEach(() => installBrowser());

  it('persists a rejection, and rejection is the state that survives a reload', () => {
    rejectOptional();
    expect(canUseAnalytics()).toBe(false);
    expect(canUseMarketing()).toBe(false);
    /* A stored rejection is distinguishable from no choice at all. */
    expect(getStoredConsent()).not.toBeNull();
    expect(getStoredConsent()?.analytics).toBe(false);
  });

  it('persists an acceptance', () => {
    acceptAll();
    expect(canUseAnalytics()).toBe(true);
    expect(canUseMarketing()).toBe(true);
  });

  it('persists a partial choice exactly as made', () => {
    setConsent({ analytics: true, marketing: false });
    expect(canUseAnalytics()).toBe(true);
    expect(canUseMarketing()).toBe(false);
  });

  it('stores no identifier of any kind', () => {
    acceptAll();
    const raw = JSON.parse(getConsentSnapshot()!);
    expect(Object.keys(raw).sort()).toEqual([
      'analytics',
      'marketing',
      'necessary',
      'timestamp',
      'version',
    ]);
  });

  it('clearing the record returns the reader to being asked again', () => {
    acceptAll();
    clearConsent();
    expect(getStoredConsent()).toBeNull();
    expect(canUseAnalytics()).toBe(false);
  });
});

describe('the stored record is validated, not trusted', () => {
  beforeEach(() => installBrowser());

  it('rejects a record written by a previous consent version', () => {
    const stale = JSON.stringify({
      version: CONSENT_VERSION - 1,
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: '2026-01-01T00:00:00.000Z',
    });
    window.localStorage.setItem(CONSENT_STORAGE_KEY_FOR_TESTS, stale);

    /* The reader is asked again rather than held to a choice about different technology. */
    expect(getStoredConsent()).toBeNull();
    expect(canUseAnalytics()).toBe(false);
  });

  it.each([
    ['corrupt JSON', '{not json'],
    ['an array', '[]'],
    ['null', 'null'],
    ['a missing timestamp', '{"version":1,"necessary":true,"analytics":true,"marketing":true}'],
    [
      'a non-boolean flag',
      '{"version":1,"necessary":true,"analytics":"yes","marketing":false,"timestamp":"x"}',
    ],
    [
      'necessary turned off',
      '{"version":1,"necessary":false,"analytics":true,"marketing":false,"timestamp":"x"}',
    ],
  ])('rejects %s and falls back to necessary-only', (_label, raw) => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY_FOR_TESTS, raw);
    expect(getStoredConsent()).toBeNull();
    expect(canUseAnalytics()).toBe(false);
    expect(canUseMarketing()).toBe(false);
  });

  it('parseConsent accepts a well-formed current-version record', () => {
    const record = parseConsent({
      version: CONSENT_VERSION,
      necessary: true,
      analytics: false,
      marketing: true,
      timestamp: '2026-08-10T00:00:00.000Z',
    });
    expect(record).toMatchObject({ analytics: false, marketing: true });
  });

  it('consentFromSnapshot survives a corrupt snapshot string', () => {
    expect(consentFromSnapshot('{broken')).toBeNull();
    expect(consentFromSnapshot(null)).toBeNull();
  });
});

describe('storage that throws is treated as no consent, never as consent', () => {
  it('does not throw and does not permit when localStorage is unavailable', () => {
    installBrowser({
      getItem() {
        throw new Error('SecurityError: storage disabled');
      },
      setItem() {
        throw new Error('SecurityError: storage disabled');
      },
      removeItem() {
        throw new Error('SecurityError: storage disabled');
      },
    } as unknown as MemoryStorage);

    expect(() => getStoredConsent()).not.toThrow();
    expect(getStoredConsent()).toBeNull();
    expect(canUseAnalytics()).toBe(false);

    /* The write fails, but the call still returns the record and does not throw. */
    expect(() => acceptAll()).not.toThrow();
    /* And because nothing persisted, the gate stays closed on the next read. */
    expect(canUseAnalytics()).toBe(false);
  });
});

describe('the gate cannot be bypassed', () => {
  beforeEach(() => installBrowser());

  it('does not run a gated callback before consent', () => {
    const load = vi.fn();
    whenConsented('analytics', load);
    expect(load).not.toHaveBeenCalled();
  });

  it('runs a gated callback once consent is given during the page view', () => {
    const load = vi.fn();
    whenConsented('analytics', load);
    expect(load).not.toHaveBeenCalled();

    acceptAll();
    expect(load).toHaveBeenCalledTimes(1);
  });

  it('does not run a marketing callback when only analytics was accepted', () => {
    const load = vi.fn();
    whenConsented('marketing', load);
    setConsent({ analytics: true, marketing: false });
    expect(load).not.toHaveBeenCalled();
  });

  it('runs immediately when consent already exists', () => {
    acceptAll();
    const load = vi.fn();
    whenConsented('analytics', load);
    expect(load).toHaveBeenCalledTimes(1);
  });

  it('does not run a gated callback after a rejection', () => {
    rejectOptional();
    const load = vi.fn();
    whenConsented('analytics', load);
    expect(load).not.toHaveBeenCalled();
  });
});

describe('the optional-technology registry', () => {
  it('is empty, so the banner is armed but not shown', () => {
    expect(OPTIONAL_TECHNOLOGIES).toHaveLength(0);
    expect(hasOptionalTechnologies).toBe(false);
  });

  it('never gates anything behind the necessary category', () => {
    for (const technology of OPTIONAL_TECHNOLOGIES) {
      expect(['analytics', 'marketing']).toContain(technology.category);
    }
  });
});
