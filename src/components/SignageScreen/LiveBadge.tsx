interface LiveBadgeProps {
  /** `lg` for the feature panel, `sm` for the other-rooms cards. */
  size?: 'lg' | 'sm';
}

/**
 * The "LIVE" indicator — a grapefruit-outlined badge shown in place of the time
 * when a session is currently happening.
 */
export function LiveBadge({ size = 'sm' }: LiveBadgeProps) {
  const sizeClasses =
    size === 'lg'
      ? 'text-h4 tracking-[-0.31px] px-3 py-1'
      : 'text-h6 tracking-[-0.2px] px-2 py-[3px]';
  return (
    <span
      className={`inline-flex items-center justify-center border-2 border-grapefruit-500 font-heading leading-[1.35] text-white ${sizeClasses}`}
    >
      LIVE
    </span>
  );
}
