import { useEffect, useRef, useState } from 'react';
import { SignageScreen } from './components/SignageScreen';
import { MOCK_ROOMS, MOCK_SESSIONS } from './data/mockData';

/**
 * Demo clock. RCGNZ Summit 2026 is months away, so a real clock would just show
 * "everything upcoming". We anchor to a moment *during* the event and let it
 * advance in real time — so the screen looks alive AND you can watch the
 * countdown tick and sessions roll over (upcoming → live → past).
 *
 * For a real deployment, delete this and drop the `now` prop below — the
 * SignageScreen then uses the live system clock.
 */
const DEMO_ANCHOR = new Date('2026-11-10T20:58:00.000Z');

function useSimulatedNow(anchor: Date, intervalMs = 1000): Date {
  const offsetRef = useRef(anchor.getTime() - Date.now());
  const [now, setNow] = useState(() => new Date(Date.now() + offsetRef.current));
  useEffect(() => {
    const id = setInterval(() => setNow(new Date(Date.now() + offsetRef.current)), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return now;
}

export default function App() {
  const now = useSimulatedNow(DEMO_ANCHOR);

  return (
    <div className="flex min-h-full items-center justify-center bg-black p-6">
      <div className="w-full max-w-[1600px]">
        <SignageScreen
          sessions={MOCK_SESSIONS}
          rooms={MOCK_ROOMS}
          initialRoom="Breakout Room A"
          now={now}
        />
      </div>
    </div>
  );
}
