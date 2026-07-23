import { Timer } from '@phosphor-icons/react';
import type { RoomFeature } from '../../lib/sessionSchedule';
import { formatCountdown, formatTimeRange, getPrimaryTag } from '../../lib/sessionSchedule';
import { BlurInText } from './BlurInText';
import { LiveBadge } from './LiveBadge';
import { SessionTag } from './SessionTag';
import { SpeakerHeadshots } from './SpeakerHeadshots';

interface FeaturePanelProps {
  feature: RoomFeature;
  now: Date;
}

/**
 * The main left-hand feature: the live-or-next session for the current room —
 * big title, then either a LIVE badge (when live) or the time range + a
 * countdown to start (when upcoming), then the session-type tag.
 */
export function FeaturePanel({ feature, now }: FeaturePanelProps) {
  const { session, status, room } = feature;

  if (!session) {
    return (
      <p className="w-[1023px] font-heading text-h4 leading-[1.35] text-body">
        No more sessions today in {room}.
      </p>
    );
  }

  const tag = getPrimaryTag(session);
  const countdown = status === 'upcoming' ? formatCountdown(session.startDateTime, now) : null;

  return (
    <div className="flex w-[1023px] flex-col gap-5">
      <h1 className="font-heading text-display leading-[1.2] tracking-[-0.8px] text-white [text-wrap:balance]">
        <BlurInText text={session.title} />
      </h1>

      <div className="flex items-center gap-5">
        {status === 'live' ? (
          <LiveBadge size="lg" />
        ) : (
          <span className="whitespace-nowrap font-heading text-h4 tracking-[-0.31px] text-body">
            {formatTimeRange(session.startDateTime, session.endDateTime)}
          </span>
        )}

        {countdown && (
          <span className="flex items-center gap-2">
            <Timer size={32} weight="regular" className="text-body" />
            <span className="whitespace-nowrap font-heading text-h5 tracking-[-0.25px] text-body">
              {countdown}
            </span>
          </span>
        )}
      </div>

      {tag && (
        <div>
          <SessionTag tag={tag} size="md" />
        </div>
      )}
    </div>
  );
}

/** The bottom-left row of speaker headshots for the featured session. */
export function FeatureSpeakers({
  feature,
  baseDelayMs,
}: {
  feature: RoomFeature;
  baseDelayMs?: number;
}) {
  return <SpeakerHeadshots speakers={feature.session?.speakers ?? []} baseDelayMs={baseDelayMs} />;
}
