/**
 * Pure scheduling logic for the signage screen.
 *
 * Everything here is a pure function of `(sessions, now)` so the "what's live /
 * what's next" behaviour is deterministic and unit-testable. Time comparisons
 * use absolute instants (epoch ms), so the display time zone is irrelevant to
 * the logic — it only affects how times are *formatted*.
 */
import type { RcgnzSession, RcgnzTag, SessionStatus } from '../data/types';

/** Time zone used to render clock times (Awardco is US Mountain Time). */
export const EVENT_TIME_ZONE = 'America/Denver';

const ms = (iso: string): number => new Date(iso).getTime();

/** Where a session sits relative to `now`. */
export function getStatus(session: RcgnzSession, now: Date): SessionStatus {
  const t = now.getTime();
  const start = ms(session.startDateTime);
  const end = ms(session.endDateTime);
  if (t >= start && t < end) return 'live';
  if (t < start) return 'upcoming';
  return 'past';
}

export function isPast(session: RcgnzSession, now: Date): boolean {
  return getStatus(session, now) === 'past';
}

/** The single session a room should feature: the live one, else the next upcoming. */
export interface RoomFeature {
  room: string;
  session: RcgnzSession | null;
  /** `null` when the room has nothing live or upcoming left. */
  status: Exclude<SessionStatus, 'past'> | null;
}

const byStart = (a: RcgnzSession, b: RcgnzSession): number =>
  ms(a.startDateTime) - ms(b.startDateTime);

/**
 * For a room, return the currently-live session, or failing that the earliest
 * upcoming one. Past sessions are ignored. If two sessions are live in the same
 * room (shouldn't happen), the earliest-starting wins.
 */
export function getFeatureForRoom(
  sessions: RcgnzSession[],
  room: string,
  now: Date,
): RoomFeature {
  const inRoom = sessions.filter((s) => s.location === room);

  const live = inRoom.filter((s) => getStatus(s, now) === 'live').sort(byStart);
  if (live.length) return { room, session: live[0], status: 'live' };

  const upcoming = inRoom.filter((s) => getStatus(s, now) === 'upcoming').sort(byStart);
  if (upcoming.length) return { room, session: upcoming[0], status: 'upcoming' };

  return { room, session: null, status: null };
}

/** The "In other rooms …" rail: the feature for every room except the current one. */
export function getOtherRoomsFeed(
  sessions: RcgnzSession[],
  currentRoom: string,
  rooms: string[],
  now: Date,
): RoomFeature[] {
  return rooms
    .filter((room) => room !== currentRoom)
    .map((room) => getFeatureForRoom(sessions, room, now));
}

/** All rooms present in the data (sorted), for building a default toggle. */
export function getRooms(sessions: RcgnzSession[]): string[] {
  return [...new Set(sessions.map((s) => s.location).filter(Boolean))].sort();
}

/**
 * Bizzabo agendas include multi-hour "track container" rows (e.g. "Strategy in
 * Action", "Leadership & What's Next") that aren't real sessions — they have no
 * session-type tag and span the whole track. This flags them so they can be
 * excluded from the signage. The mock data is already pre-filtered; the live
 * Webflow client uses this too.
 */
export function isTrackContainer(session: RcgnzSession): boolean {
  const minutes =
    (new Date(session.endDateTime).getTime() - new Date(session.startDateTime).getTime()) / 60_000;
  return session.tags.length === 0 && minutes >= 180;
}

// ---------------------------------------------------------------------------
// Tags
// ---------------------------------------------------------------------------

/**
 * The tag shown on the signage pill. Sessions carry a "Session Type" tag
 * (Mainstage / Social / Breakout / …) plus optional "Theme" tags — we surface
 * the Session Type, falling back to the first tag.
 */
export function getPrimaryTag(session: RcgnzSession): RcgnzTag | null {
  return session.tags.find((t) => t.category === 'Session Type') ?? session.tags[0] ?? null;
}

// ---------------------------------------------------------------------------
// Formatting
// ---------------------------------------------------------------------------

/** e.g. "9:00 am" in the event time zone. */
export function formatTime(iso: string, timeZone: string = EVENT_TIME_ZONE): string {
  const formatted = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    timeZone,
  }).format(new Date(iso));
  // Normalise the narrow no-break space Intl inserts and lowercase AM/PM.
  return formatted.replace(/ /g, ' ').toLowerCase();
}

/** e.g. "9:00 am – 9:45 am". */
export function formatTimeRange(
  startIso: string,
  endIso: string,
  timeZone: string = EVENT_TIME_ZONE,
): string {
  return `${formatTime(startIso, timeZone)} – ${formatTime(endIso, timeZone)}`;
}

/**
 * Countdown until a session starts, e.g. "32m" or "1h 5m". Returns `null` once
 * the start time has passed (nothing to count down to).
 */
export function formatCountdown(startIso: string, now: Date): string | null {
  const diffMs = ms(startIso) - now.getTime();
  if (diffMs <= 0) return null;
  const totalMinutes = Math.max(1, Math.round(diffMs / 60_000));
  if (totalMinutes < 60) return `${totalMinutes}m`;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return minutes ? `${hours}h ${minutes}m` : `${hours}h`;
}
