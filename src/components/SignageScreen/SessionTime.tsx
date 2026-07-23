import { formatCountdown, formatTimeRange } from '../../lib/sessionSchedule';

interface SessionTimeProps {
  startIso: string;
  endIso: string;
  now: Date;
  /** When true, show the status message layer; otherwise the start–end range. */
  showCountdown: boolean;
  /** Text styling (font size, color, tracking) — inherited by both layers. */
  className?: string;
}

/**
 * A session time that softly crossfades between the start–end range
 * ("9:00 am – 9:45 am") and a status message. The message is a live countdown
 * to the start ("Starting in 32m"), computed from `now`; once the session has
 * started it becomes "LIVE NOW" in the brand blue.
 *
 * Both layers are stacked in a single grid cell, so the slot reserves the wider
 * of the two (no layout shift) while their opacities transition. The
 * `showCountdown` phase is driven centrally so every time slot flips in unison.
 */
export function SessionTime({ startIso, endIso, now, showCountdown, className = '' }: SessionTimeProps) {
  const range = formatTimeRange(startIso, endIso);
  // `formatCountdown` returns the time remaining until start, or null once the
  // start time has passed (i.e. the session is live).
  const countdown = formatCountdown(startIso, now);
  const isLive = countdown === null;

  return (
    <span className={`grid ${className}`}>
      <span
        aria-hidden={showCountdown}
        className={`col-start-1 row-start-1 whitespace-nowrap transition-opacity duration-500 ${
          showCountdown ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {range}
      </span>
      <span
        aria-hidden={!showCountdown}
        className={`col-start-1 row-start-1 whitespace-nowrap transition-opacity duration-500 ${
          showCountdown ? 'opacity-100' : 'opacity-0'
        } ${isLive ? 'text-blue-500' : ''}`}
      >
        {isLive ? 'LIVE NOW' : `Starting in ${countdown}`}
      </span>
    </span>
  );
}
