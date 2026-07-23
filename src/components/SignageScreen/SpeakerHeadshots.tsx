import { Heart } from "@phosphor-icons/react";
import type { RcgnzSpeaker } from "../../data/types";
import { SPEAKER_STAGGER_MS } from "./animation";

/** Fixed number of speaker slots — empty ones show a placeholder. */
const SLOT_COUNT = 5;
const SLOT_SIZE = 160;
const SLOT_GAP = 20;

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
}

/**
 * A single 160×160 slot: a speaker headshot (faithful to the Figma frame — soft
 * glow + translucent surface), an initials fallback when a speaker has no photo,
 * or a heart placeholder for an empty slot.
 */
function SpeakerSlot({
  speaker,
  size,
}: {
  speaker: RcgnzSpeaker | null;
  size: number;
}) {
  if (!speaker) {
    return (
      <div
        className="flex shrink-0 items-center justify-center bg-white/10"
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        <img
          src={`${import.meta.env.BASE_URL}backgrounds/speaker-placeholder.png`}
          className="relative h-full w-full object-cover object-top"
          loading="lazy"
        />
        <Heart
          size={Math.round(size * 0.45)}
          weight="fill"
          className="text-white/80"
        />
      </div>
    );
  }

  return (
    <div
      className="relative shrink-0 overflow-hidden bg-white/10"
      style={{ width: size, height: size }}
    >
      {/* soft top glow, echoing the Figma "Glow" layer */}
      <div className="pointer-events-none absolute -inset-x-1/4 -top-1/3 h-2/3 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.22),transparent_70%)]" />
      {speaker.photo ? (
        <img
          src={speaker.photo.url}
          alt={speaker.photo.alt ?? speaker.fullName}
          className="relative h-full w-full object-cover object-top"
          loading="lazy"
        />
      ) : (
        <div
          className="relative flex h-full w-full items-center justify-center font-heading text-white/70"
          style={{ fontSize: size * 0.3 }}
          aria-label={speaker.fullName}
        >
          {initials(speaker.fullName)}
        </div>
      )}
    </div>
  );
}

interface SpeakerHeadshotsProps {
  speakers: RcgnzSpeaker[];
  /** Delay before the first slot fades in (so it starts after the title). */
  baseDelayMs?: number;
}

/**
 * The feature's speaker row — always `SLOT_COUNT` slots. Real speakers fill from
 * the left; the rest are heart placeholders so the row is always full (even for
 * sessions with no speakers). Each slot fades in left-to-right on the shared
 * stagger.
 */
export function SpeakerHeadshots({
  speakers,
  baseDelayMs = 0,
}: SpeakerHeadshotsProps) {
  const slots: (RcgnzSpeaker | null)[] = Array.from(
    { length: SLOT_COUNT },
    (_, i) => speakers[i] ?? null,
  );

  return (
    <div className="flex items-center" style={{ gap: SLOT_GAP }}>
      {slots.map((speaker, index) => (
        <div
          key={speaker?.id ?? `placeholder-${index}`}
          className="signage-fade"
          style={{
            animationDelay: `${baseDelayMs + index * SPEAKER_STAGGER_MS}ms`,
          }}
        >
          <SpeakerSlot speaker={speaker} size={SLOT_SIZE} />
        </div>
      ))}
    </div>
  );
}
