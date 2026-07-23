/** Timing constants shared across the signage entrance animations. */

/** Per-character stagger for the title blur-in (left → right). */
export const CHAR_STAGGER_MS = 22;
/** Must match the `.signage-char` animation duration in index.css. */
export const CHAR_DURATION_MS = 550;
/** Gap after the title finishes before the first speaker fades in. */
export const SPEAKER_START_GAP_MS = 150;
/** Stagger between speaker headshots. */
export const SPEAKER_STAGGER_MS = 1000;

/**
 * How long the title's blur-in takes end-to-end — used to delay the speakers so
 * they begin fading in only after the title has finished.
 */
export function titleAnimationDurationMs(text: string): number {
  const animatedChars = [...text].filter((char) => char !== ' ').length;
  return Math.max(0, animatedChars - 1) * CHAR_STAGGER_MS + CHAR_DURATION_MS;
}
