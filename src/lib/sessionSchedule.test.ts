import { describe, expect, it } from 'vitest';
import type { RcgnzSession, RcgnzTag } from '../data/types';
import {
  formatCountdown,
  formatTime,
  formatTimeRange,
  getFeatureForRoom,
  getOtherRoomsFeed,
  getPrimaryTag,
  getStatus,
} from './sessionSchedule';

const TZ = 'America/Denver';

const tag = (displayName: string, category: RcgnzTag['category']): RcgnzTag => ({
  id: displayName,
  displayName,
  slug: displayName.toLowerCase(),
  tagColor: '#256cfa',
  textColor: '#ffffff',
  category,
});

const session = (over: Partial<RcgnzSession> & Pick<RcgnzSession, 'id' | 'startDateTime' | 'endDateTime'>): RcgnzSession => ({
  title: over.id,
  location: 'Great Hall',
  description: null,
  tags: [],
  speakers: [],
  ...over,
});

// A fixed reference clock during the event.
const NOW = new Date('2026-11-10T16:20:00.000Z');

describe('getStatus', () => {
  const s = session({ id: 's', startDateTime: '2026-11-10T16:00:00Z', endDateTime: '2026-11-10T16:45:00Z' });

  it('is live while now is within [start, end)', () => {
    expect(getStatus(s, new Date('2026-11-10T16:00:00Z'))).toBe('live'); // inclusive start
    expect(getStatus(s, new Date('2026-11-10T16:44:59Z'))).toBe('live');
  });
  it('is upcoming before start', () => {
    expect(getStatus(s, new Date('2026-11-10T15:59:59Z'))).toBe('upcoming');
  });
  it('is past at/after end (exclusive end)', () => {
    expect(getStatus(s, new Date('2026-11-10T16:45:00Z'))).toBe('past');
    expect(getStatus(s, new Date('2026-11-10T18:00:00Z'))).toBe('past');
  });
});

describe('getFeatureForRoom', () => {
  const live = session({ id: 'live', startDateTime: '2026-11-10T16:00:00Z', endDateTime: '2026-11-10T17:00:00Z' });
  const soon = session({ id: 'soon', startDateTime: '2026-11-10T17:30:00Z', endDateTime: '2026-11-10T18:00:00Z' });
  const later = session({ id: 'later', startDateTime: '2026-11-10T19:00:00Z', endDateTime: '2026-11-10T20:00:00Z' });
  const done = session({ id: 'done', startDateTime: '2026-11-10T09:00:00Z', endDateTime: '2026-11-10T10:00:00Z' });

  it('prefers a live session over upcoming ones', () => {
    const f = getFeatureForRoom([soon, live, later], 'Great Hall', NOW);
    expect(f.status).toBe('live');
    expect(f.session?.id).toBe('live');
  });

  it('falls back to the earliest upcoming when nothing is live', () => {
    const f = getFeatureForRoom([later, soon, done], 'Great Hall', NOW);
    expect(f.status).toBe('upcoming');
    expect(f.session?.id).toBe('soon');
  });

  it('returns null when everything is in the past', () => {
    const f = getFeatureForRoom([done], 'Great Hall', NOW);
    expect(f.status).toBeNull();
    expect(f.session).toBeNull();
  });

  it('only considers sessions in the requested room', () => {
    const other = session({ id: 'other', location: 'Breakout Room A', startDateTime: '2026-11-10T16:00:00Z', endDateTime: '2026-11-10T17:00:00Z' });
    const f = getFeatureForRoom([other], 'Great Hall', NOW);
    expect(f.session).toBeNull();
  });
});

describe('getOtherRoomsFeed', () => {
  const rooms = ['Great Hall', 'Breakout Room A', 'Breakout Room B'];
  const gh = session({ id: 'gh', location: 'Great Hall', startDateTime: '2026-11-10T16:00:00Z', endDateTime: '2026-11-10T17:00:00Z' });
  const a = session({ id: 'a', location: 'Breakout Room A', startDateTime: '2026-11-10T16:00:00Z', endDateTime: '2026-11-10T17:00:00Z' });

  it('excludes the current room and yields one entry per other room', () => {
    const feed = getOtherRoomsFeed([gh, a], 'Great Hall', rooms, NOW);
    expect(feed.map((f) => f.room)).toEqual(['Breakout Room A', 'Breakout Room B']);
    expect(feed[0].session?.id).toBe('a');
    expect(feed[1].session).toBeNull(); // Breakout Room B has no sessions
  });
});

describe('getPrimaryTag', () => {
  it('prefers the Session Type tag over Theme tags', () => {
    const s = session({
      id: 's',
      startDateTime: '2026-11-10T16:00:00Z',
      endDateTime: '2026-11-10T17:00:00Z',
      tags: [tag('Build Whats Next', 'Theme'), tag('Mainstage', 'Session Type')],
    });
    expect(getPrimaryTag(s)?.displayName).toBe('Mainstage');
  });

  it('falls back to the first tag, and null when there are none', () => {
    const themed = session({ id: 't', startDateTime: '2026-11-10T16:00:00Z', endDateTime: '2026-11-10T17:00:00Z', tags: [tag('Theme A', 'Theme')] });
    expect(getPrimaryTag(themed)?.displayName).toBe('Theme A');
    const none = session({ id: 'n', startDateTime: '2026-11-10T16:00:00Z', endDateTime: '2026-11-10T17:00:00Z' });
    expect(getPrimaryTag(none)).toBeNull();
  });
});

describe('formatting', () => {
  it('formats a time in the event time zone (MST in November)', () => {
    expect(formatTime('2026-11-10T16:00:00Z', TZ)).toBe('9:00 am');
    expect(formatTime('2026-11-10T20:30:00Z', TZ)).toBe('1:30 pm');
  });

  it('formats a time range with an en dash', () => {
    expect(formatTimeRange('2026-11-10T16:00:00Z', '2026-11-10T16:45:00Z', TZ)).toBe('9:00 am – 9:45 am');
  });

  it('formats a countdown to start', () => {
    const start = '2026-11-10T17:00:00Z';
    expect(formatCountdown(start, new Date('2026-11-10T16:28:00Z'))).toBe('32m');
    expect(formatCountdown(start, new Date('2026-11-10T15:30:00Z'))).toBe('1h 30m');
    expect(formatCountdown(start, new Date('2026-11-10T16:00:00Z'))).toBe('1h');
  });

  it('returns null once the start has passed', () => {
    expect(formatCountdown('2026-11-10T16:00:00Z', new Date('2026-11-10T16:00:01Z'))).toBeNull();
  });
});
