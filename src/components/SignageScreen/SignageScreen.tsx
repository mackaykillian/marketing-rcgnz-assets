import { useEffect, useMemo, useState } from 'react';
import type { RcgnzSession } from '../../data/types';
import {
  getFeatureForRoom,
  getOtherRoomsFeed,
  getRooms,
} from '../../lib/sessionSchedule';
import { useFitScale } from '../../lib/useFitScale';
import { useNow } from '../../lib/useNow';
import {
  ANIMATION_REPLAY_MS,
  SPEAKER_START_GAP_MS,
  TIME_TOGGLE_MS,
  titleAnimationDurationMs,
} from './animation';
import { backgroundKeyForSession } from './backgrounds';
import { FeaturePanel, FeatureSpeakers } from './FeaturePanel';
import { SessionBackground } from './SessionBackground';
import { OtherRoomsPanel } from './OtherRoomsPanel';
import { RoomToggle } from './RoomToggle';

export interface SignageScreenProps {
  /** All sessions to consider (any event/room). */
  sessions: RcgnzSession[];
  /** Rooms available on the toggle. Defaults to every room found in `sessions`. */
  rooms?: string[];
  /** Which room this screen starts on. Defaults to the first room. */
  initialRoom?: string;
  /**
   * The "current time". Omit for a live ticking clock (production behaviour);
   * pass a fixed `Date` to pin the clock (Storybook / demos).
   */
  now?: Date;
}

/**
 * RCGNZ Signage Screen — a 16:9 room display.
 *
 * Left: the live-or-next session for the selected room. Right: what's live/next
 * in every other room. The room pill (top-left) cycles rooms; everything
 * updates as `now` advances.
 *
 * The visual is authored at a fixed 1920×1080 (matching Figma exactly) and
 * scaled to fit its container by the `.signage-frame` / `.signage-stage` rules.
 */
export function SignageScreen({ sessions, rooms, initialRoom, now: controlledNow }: SignageScreenProps) {
  const { ref: frameRef, scale } = useFitScale<HTMLDivElement>();
  const now = useNow(controlledNow);
  const roomList = useMemo(
    () => (rooms && rooms.length ? rooms : getRooms(sessions)),
    [rooms, sessions],
  );

  const [roomIndex, setRoomIndex] = useState(() => {
    const idx = initialRoom ? roomList.indexOf(initialRoom) : 0;
    return idx >= 0 ? idx : 0;
  });
  const room = roomList[roomIndex] ?? roomList[0] ?? '';

  const feature = getFeatureForRoom(sessions, room, now);
  const feed = getOtherRoomsFeed(sessions, room, roomList, now);
  const headerLabel = feature.status === 'live' ? 'Live now in' : 'Coming next in';
  const cycleRoom = () => setRoomIndex((i) => (roomList.length ? (i + 1) % roomList.length : 0));

  // Re-run the entrance animation on a fixed cadence so the screen keeps feeling
  // "live", even when the same session stays featured for a while.
  const [animationCycle, setAnimationCycle] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setAnimationCycle((c) => c + 1), ANIMATION_REPLAY_MS);
    return () => clearInterval(id);
  }, []);

  // Every few seconds, all session times crossfade between the start–end range
  // and a "Starting in …" countdown. Driven centrally so they flip in unison.
  const [showCountdown, setShowCountdown] = useState(false);
  useEffect(() => {
    const id = setInterval(() => setShowCountdown((v) => !v), TIME_TOGGLE_MS);
    return () => clearInterval(id);
  }, []);

  // Speakers begin fading in once the title has finished its blur-in. The
  // `replayKey` remounts the animated pieces when the featured session/room
  // changes OR every `ANIMATION_REPLAY_MS` — so the entrance animation re-plays,
  // but not on every clock tick.
  const speakerBaseDelayMs = titleAnimationDurationMs(feature.session?.title ?? '') + SPEAKER_START_GAP_MS;
  const replayKey = `${room}:${feature.session?.id ?? 'none'}:${animationCycle}`;
  const bgKey = backgroundKeyForSession(feature.session);

  return (
    <div ref={frameRef} className="signage-frame">
      <div
        className="signage-stage bg-canvas font-heading text-white"
        style={{ transform: `scale(${scale})` }}
      >
        {/* Session-type background (behind everything) */}
        <SessionBackground bgKey={bgKey} />

        {/* Header + feature as one top-anchored column. gap-20 keeps a fixed
            80px between the "Coming next in" row and the title, so a long title
            grows downward instead of creeping up toward the header. */}
        <div className="absolute left-[83px] top-[80px] flex flex-col gap-20">
          <RoomToggle label={headerLabel} room={room} onCycle={cycleRoom} />
          <FeaturePanel key={replayKey} feature={feature} now={now} showCountdown={showCountdown} />
        </div>

        {/* Speaker headshots pinned near the bottom-left */}
        <div className="absolute left-[80px] top-[860px]">
          <FeatureSpeakers key={replayKey} feature={feature} baseDelayMs={speakerBaseDelayMs} />
        </div>

        {/* "In other rooms …" heading */}
        <p className="absolute left-[1314px] top-[79px] whitespace-nowrap font-display text-label italic tracking-[-0.4px] text-white">
          In other rooms&nbsp;…
        </p>

        {/* Vertical divider */}
        <div className="absolute left-[1247px] top-[80px] h-[920px] w-px bg-white/15" />

        {/* Other-rooms rail */}
        <div className="absolute left-[1292px] top-[213px]">
          <OtherRoomsPanel feed={feed} now={now} showCountdown={showCountdown} />
        </div>
      </div>
    </div>
  );
}
