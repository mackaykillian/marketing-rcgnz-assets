import { MapPinArea } from '@phosphor-icons/react';
import type { RoomFeature } from '../../lib/sessionSchedule';
import { getPrimaryTag } from '../../lib/sessionSchedule';
import { LiveBadge } from './LiveBadge';
import { SessionTag } from './SessionTag';
import { SessionTime } from './SessionTime';

/** One card in the "In other rooms …" rail — a room's live-or-next session. */
function OtherRoomCard({
  feature,
  now,
  showCountdown,
}: {
  feature: RoomFeature;
  now: Date;
  showCountdown: boolean;
}) {
  const { room, session, status } = feature;
  const tag = session ? getPrimaryTag(session) : null;

  return (
    <div className="flex w-[548px] flex-col gap-5 p-5">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3">
          <MapPinArea size={24} weight="regular" className="text-white" />
          <span className="whitespace-nowrap font-heading text-h6 tracking-[-0.2px] text-white">
            {room}
          </span>
        </div>

        {session &&
          (status === 'live' ? (
            <LiveBadge size="sm" />
          ) : (
            <SessionTime
              startIso={session.startDateTime}
              endIso={session.endDateTime}
              now={now}
              showCountdown={showCountdown}
              className="font-heading text-h6 tracking-[-0.2px] text-white"
            />
          ))}
      </div>

      <p className="line-clamp-2 font-heading text-h4 leading-[1.35] tracking-[-0.31px] text-white">
        {session ? session.title : 'No more sessions today'}
      </p>

      {tag && (
        <div>
          <SessionTag tag={tag} size="sm" />
        </div>
      )}
    </div>
  );
}

interface OtherRoomsPanelProps {
  feed: RoomFeature[];
  now: Date;
  showCountdown: boolean;
}

/** The stacked cards for every room other than the current one. */
export function OtherRoomsPanel({ feed, now, showCountdown }: OtherRoomsPanelProps) {
  return (
    <div className="flex w-[548px] flex-col gap-20">
      {feed.map((feature) => (
        <OtherRoomCard
          key={feature.room}
          feature={feature}
          now={now}
          showCountdown={showCountdown}
        />
      ))}
    </div>
  );
}
