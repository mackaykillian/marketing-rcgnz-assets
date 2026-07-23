import type { Meta, StoryObj } from '@storybook/react-vite';
import { MOCK_ROOMS, MOCK_SESSIONS } from '../../data/mockData';
import { SignageScreen } from './SignageScreen';

/** Storybook's `date` control hands back a timestamp; coerce to a Date. */
const toDate = (value: Date | number | undefined): Date | undefined =>
  typeof value === 'number' ? new Date(value) : value;

interface AllRoomsArgs {
  now?: Date;
}

/** A 2×2 wall of every room's signage, all pinned to the same moment. */
function AllRoomsView({ now }: AllRoomsArgs) {
  return (
    <div className="grid grid-cols-2 gap-3 bg-black p-3">
      {MOCK_ROOMS.map((room) => (
        <div key={room} className="ring-1 ring-white/10">
          <SignageScreen
            sessions={MOCK_SESSIONS}
            rooms={MOCK_ROOMS}
            initialRoom={room}
            now={now}
          />
        </div>
      ))}
    </div>
  );
}

const meta = {
  title: 'RCGNZ/All Rooms',
  component: AllRoomsView,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Every room at once (2×2). Scrub the **now** control to see what each room is showing at any moment during RCGNZ Summit 2026 — a session goes upcoming → live → past across the day.',
      },
    },
  },
  argTypes: {
    now: {
      control: 'date',
      description: 'Simulated current time, shared across all four rooms',
    },
  },
  render: (args) => <AllRoomsView now={toDate(args.now)} />,
} satisfies Meta<AllRoomsArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Mid-morning day one: Great Hall live, breakouts counting down. */
export const AllRooms: Story = {
  args: {
    now: new Date('2026-11-10T20:58:00.000Z'),
  },
};
