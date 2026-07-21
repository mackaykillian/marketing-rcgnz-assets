import type { RcgnzTag } from '../../data/types';

interface SessionTagProps {
  tag: RcgnzTag;
  /** `md` for the feature panel (25px), `sm` for the other-rooms cards (20px). */
  size?: 'md' | 'sm';
}

/**
 * A session-type pill. Its background and text colors come straight from the
 * Webflow CMS (`tag-color` / `text-color`), so Mainstage renders blue, Social
 * green, Breakout grapefruit, etc. — driven by data, not hard-coded here.
 */
export function SessionTag({ tag, size = 'md' }: SessionTagProps) {
  const sizeClasses =
    size === 'md' ? 'text-h5 tracking-[-0.25px]' : 'text-h6 tracking-[-0.2px]';
  return (
    <span
      className={`inline-flex items-center px-2 py-1 font-heading leading-[1.35] ${sizeClasses}`}
      style={{ backgroundColor: tag.tagColor, color: tag.textColor }}
    >
      {tag.displayName}
    </span>
  );
}
