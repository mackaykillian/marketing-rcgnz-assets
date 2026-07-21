/**
 * Data-source abstraction for the signage screen.
 *
 * The UI never talks to a specific source directly — it asks a `SessionService`
 * for sessions + rooms. Today that's the seeded mock data; set
 * `VITE_WEBFLOW_API_TOKEN` and it transparently switches to the live Webflow
 * CMS (see `webflowClient.ts`) with no component changes.
 */
import type { RcgnzSession } from './types';
import { MOCK_ROOMS, MOCK_SESSIONS } from './mockData';
import { WebflowSessionService, isWebflowConfigured } from './webflowClient';

export interface SessionService {
  getSessions(): Promise<RcgnzSession[]>;
  getRooms(): Promise<string[]>;
}

/** Default dev source: returns the mock data seeded from RCGNZ Summit 2026. */
export class MockSessionService implements SessionService {
  async getSessions(): Promise<RcgnzSession[]> {
    return MOCK_SESSIONS;
  }
  async getRooms(): Promise<string[]> {
    return MOCK_ROOMS;
  }
}

export const sessionService: SessionService = isWebflowConfigured()
  ? new WebflowSessionService()
  : new MockSessionService();
