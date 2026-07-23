import type { RcgnzSession } from '../../data/types';
import { getPrimaryTag } from '../../lib/sessionSchedule';

/** The Spline Hana backgrounds available in /public/backgrounds. */
export type BackgroundKey = 'mainstage' | 'social' | 'breakout' | 'default';

const SESSION_TYPE_BACKGROUNDS: Record<string, BackgroundKey> = {
  mainstage: 'mainstage',
  social: 'social',
  breakout: 'breakout',
};

/**
 * Map a session to its background. Uses the session's primary Session-Type tag
 * (Mainstage / Social / Breakout); every other type — Workshop, Break,
 * Registration, Ask the Experts, … — plus untyped or absent sessions fall back
 * to the default background.
 */
export function backgroundKeyForSession(session: RcgnzSession | null | undefined): BackgroundKey {
  if (!session) return 'default';
  const name = getPrimaryTag(session)?.displayName.trim().toLowerCase() ?? '';
  return SESSION_TYPE_BACKGROUNDS[name] ?? 'default';
}
