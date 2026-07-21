import { useEffect, useState } from 'react';

/**
 * Returns the "current time" that drives the signage.
 *
 * - Uncontrolled (no `controlled` arg): a live clock that ticks every
 *   `intervalMs`, so sessions roll over from upcoming → live → past on their own.
 * - Controlled (a `Date` passed in): returns exactly that instant and does NOT
 *   tick — used by Storybook / demos to scrub through the event day.
 */
export function useNow(controlled?: Date, intervalMs = 1000): Date {
  const [now, setNow] = useState<Date>(() => controlled ?? new Date());

  useEffect(() => {
    if (controlled) return; // controlled: pinned, no ticking
    const id = setInterval(() => setNow(new Date()), intervalMs);
    return () => clearInterval(id);
  }, [controlled, intervalMs]);

  return controlled ?? now;
}
