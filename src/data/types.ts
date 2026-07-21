/**
 * Domain model for the RCGNZ Signage Screen.
 *
 * These are the *resolved* shapes the UI consumes: a session already has its
 * Tags and Speakers expanded (the Webflow CMS stores them as reference IDs).
 * The raw Webflow item shapes live at the bottom of this file and are mapped
 * into the domain model by `webflowClient.ts`.
 */

// ---------------------------------------------------------------------------
// Domain model (what components render)
// ---------------------------------------------------------------------------

export type TagCategory = 'Session Type' | 'Theme' | 'Other';

export interface RcgnzTag {
  id: string;
  /** Human label shown on the pill, e.g. "Mainstage". */
  displayName: string;
  slug: string;
  /** Pill background — from the CMS. Hex, rgba, or a CSS keyword (e.g. "white", "transparent"). */
  tagColor: string;
  /** Pill text color — from the CMS. */
  textColor: string;
  category: TagCategory | null;
  /** Optional Phosphor icon class from the CMS, e.g. "ph-bold ph-confetti". */
  phosphorIconClass?: string | null;
}

export type SpeakerType = 'Mainstage' | 'General';

export interface RcgnzSpeaker {
  id: string;
  fullName: string;
  firstName?: string;
  lastName?: string;
  /** Job title, e.g. "Head of Employee Engagement". */
  title?: string | null;
  company?: string | null;
  speakerType?: SpeakerType | null;
  /** Headshot; may be absent for speakers without a photo yet. */
  photo?: { url: string; alt: string | null } | null;
}

export interface RcgnzSession {
  id: string;
  title: string;
  /** Rich-text HTML description (unused on signage, kept for completeness). */
  description?: string | null;
  /** Room / venue area this session takes place in (drives the signage location). */
  location: string;
  /** ISO 8601 date-time (UTC) for the session start. */
  startDateTime: string;
  /** ISO 8601 date-time (UTC) for the session end. */
  endDateTime: string;
  tags: RcgnzTag[];
  speakers: RcgnzSpeaker[];
  eventName?: string;
  eventId?: string;
  registrationRequired?: boolean;
}

/** Where a session sits relative to "now". */
export type SessionStatus = 'live' | 'upcoming' | 'past';

// ---------------------------------------------------------------------------
// Raw Webflow Data API v2 shapes (mapped into the domain model above)
// ---------------------------------------------------------------------------

export interface WebflowImage {
  fileId?: string;
  url: string;
  alt: string | null;
}

export interface WebflowItem<TFields> {
  id: string;
  cmsLocaleId?: string;
  lastPublished?: string | null;
  lastUpdated?: string;
  createdOn?: string;
  isArchived?: boolean;
  isDraft?: boolean;
  fieldData: TFields;
}

export interface WebflowSessionFields {
  'event-name-2'?: string;
  title?: string;
  'description-2'?: string | null;
  /** Tag reference IDs (→ RCGNZ Tags). */
  'session-types'?: string[];
  'start-date-time'?: string;
  'end-date-time'?: string;
  /** Speaker reference IDs (→ RCGNZ Speakers). */
  'speakers-ref'?: string[];
  'session-registration-required'?: boolean;
  location?: string | null;
  'event-id'?: string;
  /** Session ID (matches Bizzabo). */
  name: string;
  slug: string;
}

export interface WebflowSpeakerFields {
  'event-name-3'?: string;
  'speaker-type'?: string;
  'first-name'?: string;
  'last-name'?: string;
  'full-name'?: string;
  title?: string | null;
  'bio-2'?: string | null;
  'photo-2'?: WebflowImage | null;
  company?: string | null;
  'session-ref'?: string[] | null;
  name: string;
  slug: string;
}

export interface WebflowTagFields {
  'display-name'?: string;
  'phosphor-icon-class'?: string | null;
  'tag-color'?: string;
  'text-color'?: string;
  category?: string;
  name: string;
  slug: string;
}
