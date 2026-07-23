import type { ReactNode } from 'react';
import type { CalloutVariant } from '@/content/types';

const VARIANTS: Record<CalloutVariant, { classes: string; label: string }> = {
  note: { classes: 'border-line-strong bg-surface-raised', label: 'Note' },
  scope: { classes: 'border-line-strong bg-surface-sunken', label: 'Scope' },
  analysis: { classes: 'border-accent bg-accent-soft', label: 'Analysis' },
  uncertainty: { classes: 'border-gold bg-gold-soft', label: 'Uncertainty' },
  disputed: { classes: 'border-alert bg-alert-soft', label: 'Disputed' },
  safety: { classes: 'border-alert bg-alert-soft', label: 'Important' },
};

/**
 * Every callout carries a visible heading and a variant label, so the distinction between
 * fact, analysis, uncertainty, and dispute never depends on colour alone.
 */
export function Callout({
  variant,
  title,
  children,
}: {
  variant: CalloutVariant;
  title: string;
  children: ReactNode;
}) {
  const { classes, label } = VARIANTS[variant];

  return (
    <aside
      className={`my-6 rounded-md border-l-4 border-y border-r border-y-line border-r-line px-5 py-4 ${classes}`}
    >
      <p className="text-xs font-semibold tracking-wide text-ink-muted uppercase">{label}</p>
      <p className="mt-1 font-semibold text-ink">{title}</p>
      <div className="mt-2 text-ink-muted">{children}</div>
    </aside>
  );
}
