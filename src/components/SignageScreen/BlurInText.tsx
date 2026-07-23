import { Fragment } from 'react';
import { CHAR_STAGGER_MS } from './animation';

interface BlurInTextProps {
  text: string;
  className?: string;
  charStaggerMs?: number;
}

/**
 * Renders text as per-character spans that blur + fade in with a left-to-right
 * stagger (see `.signage-char` in index.css). Words are kept intact so wrapping
 * behaves normally, and the full string is exposed to assistive tech via
 * `aria-label` while the decorative spans are hidden from it.
 */
export function BlurInText({ text, className, charStaggerMs = CHAR_STAGGER_MS }: BlurInTextProps) {
  const words = text.split(' ');
  let charIndex = 0;

  return (
    <span className={className} aria-label={text}>
      {words.map((word, wordIndex) => (
        <Fragment key={wordIndex}>
          <span className="inline-block whitespace-nowrap" aria-hidden="true">
            {[...word].map((char, ci) => {
              const delay = charIndex * charStaggerMs;
              charIndex += 1;
              return (
                <span key={ci} className="signage-char" style={{ animationDelay: `${delay}ms` }}>
                  {char}
                </span>
              );
            })}
          </span>
          {wordIndex < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </span>
  );
}
