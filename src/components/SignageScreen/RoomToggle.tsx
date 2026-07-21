import { MapPinArea } from '@phosphor-icons/react';

interface RoomToggleProps {
  /** Contextual lead-in, e.g. "Coming next in" or "Live now in". */
  label: string;
  room: string;
  /** Advance to the next room. */
  onCycle: () => void;
}

/**
 * Top-left header: the italic lead-in label plus a room pill. The pill is a
 * button — clicking it cycles the screen to the next room (mirrors the single
 * pill in the Figma design while giving an easy way to switch rooms).
 */
export function RoomToggle({ label, room, onCycle }: RoomToggleProps) {
  return (
    <div className="flex items-center gap-5">
      <span className="whitespace-nowrap font-display text-label italic tracking-[-0.4px] text-white">
        {label}
      </span>
      <button
        type="button"
        onClick={onCycle}
        title="Switch room"
        className="flex items-center gap-3 bg-white/15 px-4 py-2.5 transition-colors hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
      >
        <MapPinArea size={32} weight="regular" className="text-white" />
        <span className="whitespace-nowrap font-heading text-h5 tracking-[-0.25px] text-body">
          {room}
        </span>
      </button>
    </div>
  );
}
