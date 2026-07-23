import { usePrefersReducedMotion } from '../../lib/usePrefersReducedMotion';
import type { BackgroundKey } from './backgrounds';

const BG_DIR = `${import.meta.env.BASE_URL}backgrounds`;

/**
 * Full-bleed Spline Hana background for the current session type, with a scrim
 * for text legibility. A single looping WebM plays, keyed by `bgKey` so it only
 * reloads when the session type actually changes (consecutive same-type sessions
 * keep playing uninterrupted). Under reduced-motion the static poster is shown.
 */
export function SessionBackground({ bgKey }: { bgKey: BackgroundKey }) {
  const reducedMotion = usePrefersReducedMotion();
  const poster = `${BG_DIR}/${bgKey}.png`;

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {reducedMotion ? (
        <img src={poster} alt="" className="h-full w-full object-cover" />
      ) : (
        <video
          key={bgKey}
          className="signage-bg h-full w-full object-cover"
          poster={poster}
          src={`${BG_DIR}/${bgKey}.webm`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      )}
      <div className="signage-scrim" />
    </div>
  );
}
