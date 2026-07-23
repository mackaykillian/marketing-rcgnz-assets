/** Timing constants shared across the signage entrance animations. */

/** Per-character stagger for the title blur-in (left → right). */
export const CHAR_STAGGER_MS = 50;
/** Must match the `.signage-char` animation duration in index.css. */
export const CHAR_DURATION_MS = 550;
/** Gap after the title finishes before the first speaker fades in. */
export const SPEAKER_START_GAP_MS = 150;
/** Stagger between speaker headshots. */
export const SPEAKER_STAGGER_MS = 500;
/** How often the title + speaker entrance animation replays. */
export const ANIMATION_REPLAY_MS = 15000;
/** How often the session time crossfades between the range and the countdown. */
export const TIME_TOGGLE_MS = 3000;

/**
 * How long the title's blur-in takes end-to-end — used to delay the speakers so
 * they begin fading in only after the title has finished.
 */
export function titleAnimationDurationMs(text: string): number {
  const animatedChars = [...text].filter((char) => char !== " ").length;
  return Math.max(0, animatedChars - 1) * CHAR_STAGGER_MS + CHAR_DURATION_MS;
}
