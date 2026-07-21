import type { Meta, StoryObj } from '@storybook/react-vite';
import { MOCK_ROOMS, MOCK_SESSIONS } from '../../data/mockData';
import { SignageScreen } from './SignageScreen';

/** Storybook's `date` control hands back a timestamp; coerce to a Date. */
const toDate = (value: Date | number | undefined): Date | undefined =>
  typeof value === 'number' ? new Date(value) : value;

const meta = {
  title: 'RCGNZ/Signage Screen',
  component: SignageScreen,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Room signage for the RCGNZ Summit. Use the **now** control to scrub through the event day and watch sessions move from upcoming → live → past, and **initialRoom** to change which room the screen represents. The room pill (top-left) also cycles rooms on click.',
      },
    },
  },
  args: {
    sessions: MOCK_SESSIONS,
    rooms: MOCK_ROOMS,
  },
  argTypes: {
    sessions: { control: false },
    rooms: { control: false },
    initialRoom: {
      control: 'select',
      options: MOCK_ROOMS,
      description: 'Which room this screen is displayed in',
    },
    now: {
      control: 'date',
      description: 'Simulated current time — scrub to see LIVE / next / ended states',
    },
  },
  // Remount when the room or time changes so the scenario resets cleanly.
  render: (args) => (
    <SignageScreen
      {...args}
      now={toDate(args.now)}
      key={`${args.initialRoom}-${String(args.now)}`}
    />
  ),
} satisfies Meta<typeof SignageScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The signature "coming up" state: a countdown to the next session while another room is live. */
export const ComingUp: Story = {
  name: 'Coming up · Breakout Room A',
  args: {
    initialRoom: 'Breakout Room A',
    now: new Date('2026-11-10T20:58:00.000Z'),
  },
};

/** A live mainstage keynote with speaker headshots (matches the Figma feature). */
export const LiveKeynote: Story = {
  name: 'Live keynote · Great Hall',
  args: {
    initialRoom: 'Great Hall',
    now: new Date('2026-11-10T15:50:00.000Z'),
  },
};

/** Mid-afternoon on day two: parallel breakout sessions running across rooms. */
export const ParallelBreakouts: Story = {
  name: 'Parallel breakouts · Great Hall',
  args: {
    initialRoom: 'Great Hall',
    now: new Date('2026-11-11T18:20:00.000Z'),
  },
};

/** After the last session — the screen degrades gracefully. */
export const DayEnded: Story = {
  name: 'Nothing left · after close',
  args: {
    initialRoom: 'Great Hall',
    now: new Date('2026-11-12T00:30:00.000Z'),
  },
};

/** No injected time: uses the real system clock and ticks on its own (production behaviour). */
export const LiveSystemClock: Story = {
  name: 'Live system clock',
  args: {
    initialRoom: 'Great Hall',
    now: undefined,
  },
  parameters: {
    docs: {
      description: {
        story:
          'With no `now` prop the component uses the real clock and updates itself. Before the event this shows each room’s first upcoming session.',
      },
    },
  },
};
