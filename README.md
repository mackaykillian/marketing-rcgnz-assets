# marketing-rcgnz-assets

Digital signage for the **RCGNZ Summit**. The `SignageScreen` component is a
16:9 room display that shows the session currently **live** (or coming up next)
in a room, alongside a rail of what's live/next in every other room — so an
attendee who wanders in can orient themselves at a glance.

Built with **Vite + React + TypeScript**, **Tailwind CSS v4**, **Storybook**,
and **Vitest**. Styles come from the Figma _RCGNZ Assets_ design; session data
comes from the Webflow CMS (mocked for development).

## Getting started

```bash
npm install
npm run dev        # Vite app — renders the SignageScreen (App.tsx)
npm run storybook  # Storybook — preview all states with room + time controls
npm run test       # Vitest — schedule-logic unit tests
npm run typecheck  # tsc, no emit
npm run build      # type-check + production build
```

## How it works

- **16:9 stage.** The component is authored at a fixed 1920×1080 (matching Figma
  1:1) inside `.signage-frame` / `.signage-stage`, and scaled to fit any width by
  `useFitScale` (a small ResizeObserver). It always keeps a 16:9 ratio.
- **Time-driven.** Everything is a pure function of `(sessions, now)` in
  [`src/lib/sessionSchedule.ts`](src/lib/sessionSchedule.ts). Past sessions drop
  off; each room shows its live session, else its next upcoming one. Pass a fixed
  `now` to pin the clock (Storybook/demos) or omit it for a live ticking clock.
- **Rooms.** The top-left pill cycles rooms; the rail shows every _other_ room.
- **Tag colors come from the CMS.** `SessionTag` paints each pill with the tag's
  `tag-color` / `text-color` (Mainstage blue, Social green, Breakout grapefruit…).
- **LIVE.** A live session shows the grapefruit `LIVE` badge instead of a time.

## Project structure

```
src/
  components/SignageScreen/   # SignageScreen + sub-components (Feature, RoomToggle,
                              # OtherRoomsPanel, SessionTag, LiveBadge, headshots)
  data/
    types.ts                  # domain + raw Webflow types
    mockData.ts               # seeded mock sessions (RCGNZ Summit 2026) — see below
    sessionService.ts         # SessionService interface + mock impl (default)
    webflowClient.ts          # live Webflow Data API client (mappers + service)
  lib/
    sessionSchedule.ts        # pure schedule logic (+ .test.ts)
    useNow.ts / useFitScale.ts
  App.tsx                     # renders only the SignageScreen
```

## Data: mock now, live later

`sessionService` returns mock data by default and transparently switches to the
live Webflow CMS when a token is present — no component changes:

```bash
# .env
VITE_WEBFLOW_API_TOKEN=your-token
```

The Webflow Data API is server-authenticated (not CORS-enabled for browsers), so
in production call it from a server/proxy or at build time; the mapping logic in
`webflowClient.ts` is reusable wherever the fetch runs.

### Refreshing the mock data

`src/data/mockData.ts` is seeded from **RCGNZ Summit 2026** sessions (tag colors,
speaker headshots and times are real). It is intentionally **not** auto-synced —
ask Claude to _"regenerate the RCGNZ mock data"_ to re-pull the latest 2026 items
via the Webflow MCP. Rooms are assigned during generation because the CMS
`location` field is currently empty for this event.

## Backgrounds (Spline Hana)

Each session type gets an animated frosted-gradient background, exported from
Spline Hana as a looping **WebM** (+ a first-frame **PNG** poster) in
[`public/backgrounds/`](public/backgrounds):

`mainstage`, `social`, `breakout`, and `default` (used for every other type —
Workshop, Break, Registration, Ask the Experts, …).

The background follows the **left-hand feature session**: its primary
Session-Type tag is mapped to a file in
[`backgrounds.ts`](src/components/SignageScreen/backgrounds.ts). Only the active
background plays (one video at a time), and it only reloads when the type
actually changes. A scrim keeps the white content legible; under
`prefers-reduced-motion` the static poster is shown instead of the video.

To swap one out, just replace `public/backgrounds/<type>.webm` (and its `.png`)
— no code changes needed. WebM files are large; consider Git LFS if the repo
grows.

## Fonts

The design uses two proprietary Awardco fonts, **Crystal** (headings/body) and
**Emilio** (italic labels). Drop their `.woff2` files into
[`public/fonts/`](public/fonts/README.md) and they load automatically; until
then, close web-safe fallbacks are used.
