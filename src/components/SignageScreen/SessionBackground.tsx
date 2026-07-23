import { useEffect, useRef } from 'react';
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const poster = `${BG_DIR}/${bgKey}.png`;

  // Kick off playback imperatively. The `muted` JSX prop isn't reliably applied
  // to the DOM before the browser's autoplay check runs, which silently blocks
  // autoplay — so we force `muted` + `play()` here, and resume whenever the page
  // becomes visible again (signage screens can pause when backgrounded).
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const play = () => {
      video.muted = true;
      const attempt = video.play();
      if (attempt) attempt.catch(() => {});
    };

    play();
    const onVisibility = () => {
      if (document.visibilityState === 'visible') play();
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, [bgKey]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {reducedMotion ? (
        <img src={poster} alt="" className="h-full w-full object-cover" />
      ) : (
        <video
          key={bgKey}
          ref={videoRef}
          className="signage-bg h-full w-full object-cover"
          poster={poster}
          src={`${BG_DIR}/${bgKey}.webm`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onCanPlay={(e) => {
            const v = e.currentTarget;
            v.muted = true;
            v.play().catch(() => {});
          }}
        />
      )}
      <div className="signage-scrim" />
    </div>
  );
}
