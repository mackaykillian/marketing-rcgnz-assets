/**
 * Live Webflow CMS data source — REFERENCE IMPLEMENTATION / STUB.
 *
 * During development the app runs on the seeded `mockData.ts`. This module is
 * the "flip the switch to live" path: it reads the RCGNZ Sessions / Speakers /
 * Tags collections from the Webflow Data API v2, resolves the reference fields,
 * and maps them into the same `RcgnzSession` domain shape the components use.
 *
 * To enable, provide a `.env`:
 *   VITE_WEBFLOW_API_TOKEN=xxxxx
 *   VITE_WEBFLOW_SITE_ID=6809c7073641f7a4861d5cc1        (optional, defaults below)
 *
 * NOTE: The Webflow Data API is server-authenticated and not CORS-enabled for
 * browsers. In production, call it from a small server/proxy (or a build-time
 * data fetch) rather than directly from the client. The mapping logic here is
 * the reusable part regardless of where the fetch runs.
 */
import type {
  RcgnzSession,
  RcgnzSpeaker,
  RcgnzTag,
  SpeakerType,
  TagCategory,
  WebflowItem,
  WebflowSessionFields,
  WebflowSpeakerFields,
  WebflowTagFields,
} from './types';
import type { SessionService } from './sessionService';
import { isTrackContainer } from '../lib/sessionSchedule';

/** RCGNZ collection IDs on the Awardco Company Website site. */
export const COLLECTIONS = {
  sessions: '69a8be4e4326f39245af6eb9',
  speakers: '69a8b523aff6a57d901dfbb5',
  tags: '69a9c233a01b6450a45f1505',
} as const;

/** Only surface a single event on the signage. */
export const RCGNZ_2026_EVENT_ID = '828839';

const API_BASE = 'https://api.webflow.com/v2';

const TAG_CATEGORY_BY_ID: Record<string, TagCategory> = {
  '1c39636556c32d8ff01acebff9b1911b': 'Session Type',
  e794de46dba1382753a4b42446596028: 'Theme',
  '8e22df5607d19f8ee07a6a1509e818c5': 'Other',
};

const SPEAKER_TYPE_BY_ID: Record<string, SpeakerType> = {
  c75ad16c4354523a8818e0961c3af443: 'Mainstage',
  '0d6f11602629c8808658718666041ad5': 'General',
};

function env(key: string): string | undefined {
  // import.meta.env is populated by Vite from .env files.
  return (import.meta.env as Record<string, string | undefined>)[key];
}

export function isWebflowConfigured(): boolean {
  return Boolean(env('VITE_WEBFLOW_API_TOKEN'));
}

// ---- Mappers (raw Webflow item → domain model) ---------------------------

export function mapTag(item: WebflowItem<WebflowTagFields>): RcgnzTag {
  const f = item.fieldData;
  return {
    id: item.id,
    displayName: f['display-name'] ?? f.name,
    slug: f.slug,
    tagColor: f['tag-color'] ?? 'rgba(255,255,255,0.1)',
    textColor: f['text-color'] ?? '#ffffff',
    category: f.category ? (TAG_CATEGORY_BY_ID[f.category] ?? null) : null,
    phosphorIconClass: f['phosphor-icon-class'] ?? null,
  };
}

export function mapSpeaker(item: WebflowItem<WebflowSpeakerFields>): RcgnzSpeaker {
  const f = item.fieldData;
  return {
    id: item.id,
    fullName: f['full-name'] ?? [f['first-name'], f['last-name']].filter(Boolean).join(' '),
    firstName: f['first-name'],
    lastName: f['last-name'],
    title: f.title ?? null,
    company: f.company ?? null,
    speakerType: f['speaker-type'] ? (SPEAKER_TYPE_BY_ID[f['speaker-type']] ?? null) : null,
    photo: f['photo-2'] ? { url: f['photo-2'].url, alt: f['photo-2'].alt } : null,
  };
}

export function mapSession(
  item: WebflowItem<WebflowSessionFields>,
  tagsById: Map<string, RcgnzTag>,
  speakersById: Map<string, RcgnzSpeaker>,
): RcgnzSession {
  const f = item.fieldData;
  return {
    id: item.id,
    title: f.title ?? '',
    description: f['description-2'] ?? null,
    location: f.location ?? '',
    startDateTime: f['start-date-time'] ?? '',
    endDateTime: f['end-date-time'] ?? '',
    tags: (f['session-types'] ?? []).map((id) => tagsById.get(id)).filter(Boolean) as RcgnzTag[],
    speakers: (f['speakers-ref'] ?? [])
      .map((id) => speakersById.get(id))
      .filter(Boolean) as RcgnzSpeaker[],
    eventName: f['event-name-2'],
    eventId: f['event-id'],
    registrationRequired: f['session-registration-required'],
  };
}

// ---- Service --------------------------------------------------------------

export class WebflowSessionService implements SessionService {
  private token: string;

  constructor(token: string | undefined = env('VITE_WEBFLOW_API_TOKEN')) {
    if (!token) throw new Error('WebflowSessionService requires VITE_WEBFLOW_API_TOKEN');
    this.token = token;
  }

  private async listItems<T>(collectionId: string): Promise<WebflowItem<T>[]> {
    const items: WebflowItem<T>[] = [];
    let offset = 0;
    const limit = 100;
    // Webflow paginates at 100 items/request.
    for (;;) {
      const res = await fetch(
        `${API_BASE}/collections/${collectionId}/items/live?limit=${limit}&offset=${offset}`,
        { headers: { Authorization: `Bearer ${this.token}`, accept: 'application/json' } },
      );
      if (!res.ok) throw new Error(`Webflow ${collectionId} ${res.status}: ${await res.text()}`);
      const data = (await res.json()) as { items: WebflowItem<T>[]; pagination: { total: number } };
      items.push(...data.items);
      offset += limit;
      if (offset >= data.pagination.total) break;
    }
    return items;
  }

  async getSessions(): Promise<RcgnzSession[]> {
    const [rawSessions, rawSpeakers, rawTags] = await Promise.all([
      this.listItems<WebflowSessionFields>(COLLECTIONS.sessions),
      this.listItems<WebflowSpeakerFields>(COLLECTIONS.speakers),
      this.listItems<WebflowTagFields>(COLLECTIONS.tags),
    ]);

    const tagsById = new Map(rawTags.map((t) => [t.id, mapTag(t)]));
    const speakersById = new Map(rawSpeakers.map((s) => [s.id, mapSpeaker(s)]));

    return rawSessions
      .filter((s) => s.fieldData['event-id'] === RCGNZ_2026_EVENT_ID)
      .map((s) => mapSession(s, tagsById, speakersById))
      .filter((s) => s.startDateTime && s.location)
      .filter((s) => !isTrackContainer(s));
  }

  async getRooms(): Promise<string[]> {
    const sessions = await this.getSessions();
    return [...new Set(sessions.map((s) => s.location))].sort();
  }
}
