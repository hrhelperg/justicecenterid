'use client';

/**
 * The persistent "Cookie settings" control in the footer.
 *
 * The brief requires that consent can be reopened and changed at any time. That control
 * has to live in the footer, while the dialog lives in the consent island at the end of
 * the shell — so the two communicate by event rather than by lifting state into a
 * provider that would wrap (and therefore client-ify) the whole document.
 *
 * It is a <button>, not a link. It performs an action on the current page rather than
 * navigating, and giving it an href would put a dead route in the footer and in the
 * crawlable link graph.
 */

import { OPEN_COOKIE_SETTINGS_EVENT } from './ConsentBoundary';

export function CookieSettingsLink() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent(OPEN_COOKIE_SETTINGS_EVENT))}
      className="inline-flex min-h-11 items-center text-left text-sm underline underline-offset-2"
    >
      Cookie settings
    </button>
  );
}
