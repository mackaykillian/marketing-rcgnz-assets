import { useLayoutEffect, useRef, useState } from 'react';

/**
 * Scales a fixed-size design canvas to fit its parent width while preserving
 * aspect ratio. Returns a ref to attach to the frame and the unitless scale
 * factor to apply as `transform: scale(scale)` on the 1920-wide stage.
 *
 * (A pure-CSS `scale(calc(100cqw / 1920))` doesn't work — `scale()` requires a
 * unitless number, and dividing a container-query length never yields one.)
 */
export function useFitScale<T extends HTMLElement = HTMLDivElement>(designWidth = 1920) {
  const ref = useRef<T>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / designWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [designWidth]);

  return { ref, scale };
}
