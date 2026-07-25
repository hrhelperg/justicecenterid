import { Fragment } from 'react';
import { splitJapaneseRuns } from '@/lib/content';

/**
 * Renders plain text, wrapping any Japanese-script runs in `<span lang="ja">` so that
 * assistive technology and search engines see the language of parts correctly
 * (WCAG 3.1.2). Text with no Japanese script renders as a bare string, so every
 * non-Japanese surface is unaffected.
 */
export function ScriptText({ text }: { text: string }) {
  const runs = splitJapaneseRuns(text);
  if (runs.length === 1 && !runs[0]?.lang) return <>{text}</>;
  return (
    <>
      {runs.map((run, index) =>
        run.lang ? (
          <span key={index} lang={run.lang}>
            {run.text}
          </span>
        ) : (
          <Fragment key={index}>{run.text}</Fragment>
        ),
      )}
    </>
  );
}
