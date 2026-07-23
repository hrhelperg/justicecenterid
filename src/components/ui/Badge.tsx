import type { ReactNode } from 'react';

export type BadgeTone = 'neutral' | 'accent' | 'affirm' | 'gold' | 'alert';

const TONES: Record<BadgeTone, string> = {
  neutral: 'bg-surface-sunken text-ink-muted border-line-strong',
  accent: 'bg-accent-soft text-accent-strong border-accent',
  affirm: 'bg-affirm-soft text-affirm border-affirm',
  gold: 'bg-gold-soft text-gold border-gold',
  alert: 'bg-alert-soft text-alert border-alert',
};

/**
 * A badge always carries its own text. Colour is never the only signal — see WCAG 2.2
 * SC 1.4.1 and the colour-independence rule in the design system.
 */
export function Badge({
  children,
  tone = 'neutral',
}: {
  children: ReactNode;
  tone?: BadgeTone;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5 text-xs font-medium ${TONES[tone]}`}
    >
      {children}
    </span>
  );
}
