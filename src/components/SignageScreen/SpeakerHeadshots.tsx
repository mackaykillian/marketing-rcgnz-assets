import type { RcgnzSpeaker } from '../../data/types';
import { SPEAKER_STAGGER_MS } from './animation';

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join('');
}

/**
 * A single 140×140 stylized headshot. Faithful to the Figma frame (soft glow +
 * translucent surface) without cloning its decorative sub-shapes. Falls back to
 * the speaker's initials when there's no photo (common for not-yet-published
 * speakers in the CMS).
 */
function Headshot({ speaker, size = 140 }: { speaker: RcgnzSpeaker; size?: number }) {
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
  max?: number;
  /** Delay before the first headshot fades in (so it starts after the title). */
  baseDelayMs?: number;
}

/** Row of speaker headshots for the feature panel (caps at `max`). */
export function SpeakerHeadshots({ speakers, max = 4, baseDelayMs = 0 }: SpeakerHeadshotsProps) {
  const shown = speakers.slice(0, max);
  if (shown.length === 0) return null;
  return (
    <div className="flex items-center gap-[17.57px]">
      {shown.map((speaker, index) => (
        <div
          key={speaker.id}
          className="signage-fade"
          style={{ animationDelay: `${baseDelayMs + index * SPEAKER_STAGGER_MS}ms` }}
        >
          <Headshot speaker={speaker} />
        </div>
      ))}
    </div>
  );
}
