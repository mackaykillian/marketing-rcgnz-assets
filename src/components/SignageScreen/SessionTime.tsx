import { formatCountdown, formatTimeRange } from '../../lib/sessionSchedule';

interface SessionTimeProps {
  startIso: string;
  endIso: string;
  now: Date;
  /** When true, show the "Starting in …" countdown; otherwise the start–end range. */
  showCountdown: boolean;
  /** Text styling (font size, color, tracking) — inherited by both layers. */
  className?: string;
}

/**
 * A session time that softly crossfades between the start–end range
 * ("9:00 am – 9:45 am") and a countdown ("Starting in 32m"). Both layers are
 * stacked in a single grid cell, so the element reserves the wider of the two
 * (no layout shift) while their opacities transition. The `showCountdown` phase
 * is driven centrally, so every time slot on the screen flips in unison.
 */
export function SessionTime({ startIso, endIso, now, showCountdown, className = '' }: SessionTimeProps) {
  const range = formatTimeRange(startIso, endIso);
  const countdown = formatCountdown(startIso, now);

  // Nothing left to count down to — just show the range, no toggle.
  if (!countdown) {
    return <span className={`whitespace-nowrap ${className}`}>{range}</span>;
  }

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
        }`}
      >
        Starting in {countdown}
      </span>
    </span>
  );
}
