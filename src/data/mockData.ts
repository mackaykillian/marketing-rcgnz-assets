/**
 * Mock session data for the RCGNZ Signage Screen.
 *
 * SEEDED FROM THE WEBFLOW CMS via the Webflow MCP server — RCGNZ Summit 2026
 * (event id 828839) only. Tag colors, speaker headshots and times are real;
 * the `location` (room) is assigned here because the CMS field is empty for
 * this event. Times are the real future 2026 timestamps (UTC).
 *
 * This file is intentionally NOT auto-synced. To refresh it, ask Claude to
 * "regenerate the RCGNZ mock data" and it re-pulls the 2026 items via MCP.
 *
 * Generated: 47 sessions across rooms: Great Hall, Breakout Room A, Breakout Room B, Breakout Room C.
 */
import type { RcgnzSession } from './types';

export const MOCK_ROOMS: string[] = ["Great Hall","Breakout Room A","Breakout Room B","Breakout Room C"];

export const MOCK_SESSIONS: RcgnzSession[] = [
  {
    "id": "6a43fad27e825d638f0aa174",
    "title": "Braindates",
    "description": null,
    "location": "Breakout Room A",
    "startDateTime": "2026-11-09T21:00:00.000Z",
    "endDateTime": "2026-11-10T00:00:00.000Z",
    "tags": [
      {
        "id": "6a424bf30b25585afeb82cad",
        "displayName": "Social",
        "slug": "social-1458836",
        "tagColor": "#A8F39B",
        "textColor": "#020e1e",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bff5eff493d194af09e",
        "displayName": "Program DNA",
        "slug": "program-dna-1458848",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43fad1157110d10bd1940b",
    "title": "COE 1:1 Strategy Sessions",
    "description": null,
    "location": "Breakout Room B",
    "startDateTime": "2026-11-09T21:00:00.000Z",
    "endDateTime": "2026-11-10T00:00:00.000Z",
    "tags": [
      {
        "id": "6a424bf1d988ddd3b0bb74d2",
        "displayName": "Ask the Experts",
        "slug": "ask-the-experts-1458835",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      }
    ],
    "speakers": [
      {
        "id": "69c1bd542c5ef20511784f4b",
        "fullName": "Christi Gilhoi",
        "title": "Employee Experience Executive, COE",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a42c09657d616a9a025134f_Christi%20Gilhoi.png",
          "alt": null
        }
      },
      {
        "id": "69c1bd5b0ee18049f5645569",
        "fullName": "Laura Shanley",
        "title": "Employee Experience Executive, COE",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a42bff2d8690a0f4fbb14d8_Laura%20Shanley.png",
          "alt": null
        }
      },
      {
        "id": "69c1bd5b0ee18049f5645565",
        "fullName": "Katie Bundy",
        "title": "Employee Experience Executive, COE",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a4fabe4290780d3a8cad503_Katie%20Bundy.png",
          "alt": null
        }
      },
      {
        "id": "6a3c30229870f1b88f3c0222",
        "fullName": "Kelly Satterfield",
        "title": "Employee Experience Executive, COE",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a42bc1b0c489f84acdf47e2_Kelly%20Satterfield.png",
          "alt": null
        }
      },
      {
        "id": "69c1bd542c5ef20511784f4d",
        "fullName": "ShaNae McCleskey",
        "title": "Director, Technical Account Services",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a42c076fbaeff30d17a73ab_ShaNae%20McCleskey.png",
          "alt": null
        }
      },
      {
        "id": "69c1bd542c5ef20511784f49",
        "fullName": "Nick Frazier",
        "title": "Sr. Director, Client Success Enablement",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a42c0b3d13c54e4096b95a4_Nick%20Frazier.png",
          "alt": null
        }
      },
      {
        "id": "69c1bd5b0ee18049f564556d",
        "fullName": "Sarah Marrs",
        "title": "Head of COE Science",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a42bfd3ea2c229e1e4ce071_Sarah%20Marrs.png",
          "alt": null
        }
      }
    ],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43fad493b79d41a4951365",
    "title": "Demos with a Solution Engineer",
    "description": null,
    "location": "Breakout Room C",
    "startDateTime": "2026-11-09T21:00:00.000Z",
    "endDateTime": "2026-11-10T00:00:00.000Z",
    "tags": [
      {
        "id": "6a424bf1d988ddd3b0bb74d2",
        "displayName": "Ask the Experts",
        "slug": "ask-the-experts-1458835",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfec7903d03a706e5a3",
        "displayName": "Build What's Next",
        "slug": "build-what-s-next-1458846",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bff5eff493d194af09e",
        "displayName": "Program DNA",
        "slug": "program-dna-1458848",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [
      {
        "id": "6a455190cdc3e9ccad1148af",
        "fullName": "Sabina Carlheim-Gyllenskiold",
        "title": "Global Director of Solution Engineering",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a455a1fef03856c06bbe928_Sabina%20Carlheim-Gyllenskiold.png",
          "alt": null
        }
      },
      {
        "id": "6a455191b6489297cdf4470e",
        "fullName": "Katie Bell",
        "title": "Principal Solution Engineer",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a455a0c02cd28aeed63ebf1_Katie%20Bell.png",
          "alt": null
        }
      },
      {
        "id": "6a4551920c0af35545e5c801",
        "fullName": "Shane Stanley",
        "title": "Senior Solutions Engineer",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a4559f80bdb452858cc2163_Shane%20Stanley.png",
          "alt": null
        }
      },
      {
        "id": "6a455194d8ff130ea02147a6",
        "fullName": "Eric Roley",
        "title": "Senior Solutions Engineer",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a4559e28be8af7416c16d7a_Eric%20Roley.png",
          "alt": null
        }
      },
      {
        "id": "6a455196ebe56a13c81cf70e",
        "fullName": "Kevin Mefford",
        "title": "Senior Principal Solutions Engineer",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a4558314db3a8e656a77d71_Kevin%20Mefford.png",
          "alt": null
        }
      }
    ],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43fad3cb493606d30664c1",
    "title": "Ask the Experts: COE + Product + Strategy",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-09T21:00:00.000Z",
    "endDateTime": "2026-11-10T00:00:00.000Z",
    "tags": [
      {
        "id": "6a424bf1d988ddd3b0bb74d2",
        "displayName": "Ask the Experts",
        "slug": "ask-the-experts-1458835",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bf30b25585afeb82cad",
        "displayName": "Social",
        "slug": "social-1458836",
        "tagColor": "#A8F39B",
        "textColor": "#020e1e",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfec7903d03a706e5a3",
        "displayName": "Build What's Next",
        "slug": "build-what-s-next-1458846",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bff5eff493d194af09e",
        "displayName": "Program DNA",
        "slug": "program-dna-1458848",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43fae0b65a1357cd55f039",
    "title": "Registration + Early Networking",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-09T23:00:00.000Z",
    "endDateTime": "2026-11-10T01:30:00.000Z",
    "tags": [
      {
        "id": "6a424bf0d988ddd3b0bb748d",
        "displayName": "Registration",
        "slug": "registration-1458834",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bff5eff493d194af09e",
        "displayName": "Program DNA",
        "slug": "program-dna-1458848",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43fae2ec7d893bdd6a7ac5",
    "title": "Wellness Experience",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-09T23:30:00.000Z",
    "endDateTime": "2026-11-10T00:30:00.000Z",
    "tags": [
      {
        "id": "6a424bfd8312dd9edd8ee232",
        "displayName": "Design More Human Recognition",
        "slug": "design-more-human-recognition-1458845",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43fae31d293c68fe4c42fe",
    "title": "Opening Reception",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-10T01:30:00.000Z",
    "endDateTime": "2026-11-10T03:30:00.000Z",
    "tags": [
      {
        "id": "6a424bf30b25585afeb82cad",
        "displayName": "Social",
        "slug": "social-1458836",
        "tagColor": "#A8F39B",
        "textColor": "#020e1e",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfd8312dd9edd8ee232",
        "displayName": "Design More Human Recognition",
        "slug": "design-more-human-recognition-1458845",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a425444fcf64ab444bb5ff5",
    "title": "Registration + Breakfast + Expo",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-10T14:00:00.000Z",
    "endDateTime": "2026-11-10T15:30:00.000Z",
    "tags": [
      {
        "id": "6a424bef40dba7009091fa3a",
        "displayName": "Meal",
        "slug": "meal-1431992",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bf0d988ddd3b0bb748d",
        "displayName": "Registration",
        "slug": "registration-1458834",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bf4cd8a0e838efe0f82",
        "displayName": "Expo",
        "slug": "expo-1458838",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bff5eff493d194af09e",
        "displayName": "Program DNA",
        "slug": "program-dna-1458848",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a425445b8342385898e0c04",
    "title": "Welcome to Summit",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-10T15:30:00.000Z",
    "endDateTime": "2026-11-10T15:45:00.000Z",
    "tags": [
      {
        "id": "6a424bea5da0254947b90cc7",
        "displayName": "Mainstage",
        "slug": "mainstage-1431989",
        "tagColor": "#256CFA",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfc23768cf96718eede",
        "displayName": "Lead From the Top",
        "slug": "lead-from-the-top-1458844",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [
      {
        "id": "69c1bd542c5ef20511784f47",
        "fullName": "Steve Sonnenberg",
        "title": "CEO",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a42c0da4216d4d1360bc621_Steve%20Sonnenberg.png",
          "alt": null
        }
      },
      {
        "id": "69c1bd542c5ef20511784f4f",
        "fullName": "Paige Bennett Carr",
        "title": "Senior Director of Experiential Marketing",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/69caf2524eb6f14f31e5d29d_Paige-Bennett-Carr.png",
          "alt": "Smiling woman with curly blonde hair wearing a light gray blazer and white top."
        }
      }
    ],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a4254464d6879c4c6ef8178",
    "title": "Solve Tomorrow’s Problems: Harness Human Ingenuity to Navigate What’s Next",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-10T15:45:00.000Z",
    "endDateTime": "2026-11-10T16:45:00.000Z",
    "tags": [
      {
        "id": "6a424bea5da0254947b90cc7",
        "displayName": "Mainstage",
        "slug": "mainstage-1431989",
        "tagColor": "#256CFA",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfc23768cf96718eede",
        "displayName": "Lead From the Top",
        "slug": "lead-from-the-top-1458844",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfd8312dd9edd8ee232",
        "displayName": "Design More Human Recognition",
        "slug": "design-more-human-recognition-1458845",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfe22f4cebf316914a0",
        "displayName": "Intelligence at Work",
        "slug": "intelligence-at-work-1458847",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [
      {
        "id": "6a3ad9e552223203c5c94590",
        "fullName": "Heather McGowan",
        "title": "Future-of-work strategist, Forbes Top Futurist",
        "company": null,
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a42bf879600defdc5c48f44_Heather%20McGowan.png",
          "alt": null
        }
      }
    ],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a42544741017b1af71d62cb",
    "title": "The Science of What's Next: New Research on Recognition, Motivation, and the Future of Work",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-10T16:45:00.000Z",
    "endDateTime": "2026-11-10T17:15:00.000Z",
    "tags": [
      {
        "id": "6a424bea5da0254947b90cc7",
        "displayName": "Mainstage",
        "slug": "mainstage-1431989",
        "tagColor": "#256CFA",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfb4618cd7b78c4bc8b",
        "displayName": "Prove the Impact",
        "slug": "prove-the-impact-1458842",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfd8312dd9edd8ee232",
        "displayName": "Design More Human Recognition",
        "slug": "design-more-human-recognition-1458845",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [
      {
        "id": "69c1bd5b0ee18049f564556d",
        "fullName": "Sarah Marrs",
        "title": "Head of COE Science",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a42bfd3ea2c229e1e4ce071_Sarah%20Marrs.png",
          "alt": null
        }
      }
    ],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a4254480b25585afebb14d2",
    "title": "Break",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-10T17:15:00.000Z",
    "endDateTime": "2026-11-10T17:30:00.000Z",
    "tags": [
      {
        "id": "6a424bf582ea9a4558006a71",
        "displayName": "Break",
        "slug": "break-1458839",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      }
    ],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a42544a72cce31235d24b41",
    "title": "Product Vision: The Future of Recognition",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-10T17:30:00.000Z",
    "endDateTime": "2026-11-10T18:30:00.000Z",
    "tags": [
      {
        "id": "6a424bea5da0254947b90cc7",
        "displayName": "Mainstage",
        "slug": "mainstage-1431989",
        "tagColor": "#256CFA",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfec7903d03a706e5a3",
        "displayName": "Build What's Next",
        "slug": "build-what-s-next-1458846",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfe22f4cebf316914a0",
        "displayName": "Intelligence at Work",
        "slug": "intelligence-at-work-1458847",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [
      {
        "id": "69c1bd542c5ef20511784f51",
        "fullName": "Dillon Winspear",
        "title": "VP, Product",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a4d4e7856782ee89c95a30c_6a42c0589600defdc5c529e4_Dillon%2520Winspear.png",
          "alt": null
        }
      }
    ],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a42544b72cce31235d24bf5",
    "title": "Recognition at Global Scale: Driving Transformation Across a Distributed Workforce",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-10T18:30:00.000Z",
    "endDateTime": "2026-11-10T19:00:00.000Z",
    "tags": [
      {
        "id": "6a424bea5da0254947b90cc7",
        "displayName": "Mainstage",
        "slug": "mainstage-1431989",
        "tagColor": "#256CFA",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bf682ea9a4558006aeb",
        "displayName": "Case Study",
        "slug": "case-study-1458840",
        "tagColor": "white",
        "textColor": "#020e1e",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfc1af28969898212d7",
        "displayName": "Activate Recognition at Scale",
        "slug": "activate-recognition-at-scale-1458843",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfc23768cf96718eede",
        "displayName": "Lead From the Top",
        "slug": "lead-from-the-top-1458844",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a42544ce4523f71734c1e90",
    "title": "Lunch + Expo",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-10T19:00:00.000Z",
    "endDateTime": "2026-11-10T20:30:00.000Z",
    "tags": [
      {
        "id": "6a424bfec7903d03a706e5a3",
        "displayName": "Build What's Next",
        "slug": "build-what-s-next-1458846",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a42544de4523f71734c1f01",
    "title": "HR Thought Leader Session",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-10T20:00:00.000Z",
    "endDateTime": "2026-11-10T20:45:00.000Z",
    "tags": [
      {
        "id": "6a424bea5da0254947b90cc7",
        "displayName": "Mainstage",
        "slug": "mainstage-1431989",
        "tagColor": "#256CFA",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfc23768cf96718eede",
        "displayName": "Lead From the Top",
        "slug": "lead-from-the-top-1458844",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfd8312dd9edd8ee232",
        "displayName": "Design More Human Recognition",
        "slug": "design-more-human-recognition-1458845",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a42544e3cd792de4644c4af",
    "title": "Evolving Enterprise Recognition Strategy at Scale",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-10T20:45:00.000Z",
    "endDateTime": "2026-11-10T21:15:00.000Z",
    "tags": [
      {
        "id": "6a424bea5da0254947b90cc7",
        "displayName": "Mainstage",
        "slug": "mainstage-1431989",
        "tagColor": "#256CFA",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bf682ea9a4558006aeb",
        "displayName": "Case Study",
        "slug": "case-study-1458840",
        "tagColor": "white",
        "textColor": "#020e1e",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfb4618cd7b78c4bc8b",
        "displayName": "Prove the Impact",
        "slug": "prove-the-impact-1458842",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfc1af28969898212d7",
        "displayName": "Activate Recognition at Scale",
        "slug": "activate-recognition-at-scale-1458843",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfc23768cf96718eede",
        "displayName": "Lead From the Top",
        "slug": "lead-from-the-top-1458844",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a42544fe4523f71734c201b",
    "title": "Break",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-10T21:15:00.000Z",
    "endDateTime": "2026-11-10T21:30:00.000Z",
    "tags": [],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a425450b8342385898e12af",
    "title": "Driving Engagement That Lasts",
    "description": null,
    "location": "Breakout Room A",
    "startDateTime": "2026-11-10T21:30:00.000Z",
    "endDateTime": "2026-11-10T22:15:00.000Z",
    "tags": [
      {
        "id": "6a424bed8497cf527f3510d2",
        "displayName": "Breakout",
        "slug": "breakout-1431991",
        "tagColor": "#FC835E",
        "textColor": "#020e1e",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfc23768cf96718eede",
        "displayName": "Lead From the Top",
        "slug": "lead-from-the-top-1458844",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bff5eff493d194af09e",
        "displayName": "Program DNA",
        "slug": "program-dna-1458848",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a425451038facf920fd9c4b",
    "title": "Make It Count: Building a Nominations Program That Drives Visibility, Values, and Participation",
    "description": null,
    "location": "Breakout Room B",
    "startDateTime": "2026-11-10T21:30:00.000Z",
    "endDateTime": "2026-11-10T22:15:00.000Z",
    "tags": [
      {
        "id": "6a424bed8497cf527f3510d2",
        "displayName": "Breakout",
        "slug": "breakout-1431991",
        "tagColor": "#FC835E",
        "textColor": "#020e1e",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfd8312dd9edd8ee232",
        "displayName": "Design More Human Recognition",
        "slug": "design-more-human-recognition-1458845",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfec7903d03a706e5a3",
        "displayName": "Build What's Next",
        "slug": "build-what-s-next-1458846",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a42545241017b1af71d68f3",
    "title": "Global Scale, Local Impact: Strategies, Challenges, and Lessons Learned",
    "description": null,
    "location": "Breakout Room C",
    "startDateTime": "2026-11-10T21:30:00.000Z",
    "endDateTime": "2026-11-10T22:15:00.000Z",
    "tags": [
      {
        "id": "6a424bed8497cf527f3510d2",
        "displayName": "Breakout",
        "slug": "breakout-1431991",
        "tagColor": "#FC835E",
        "textColor": "#020e1e",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfc1af28969898212d7",
        "displayName": "Activate Recognition at Scale",
        "slug": "activate-recognition-at-scale-1458843",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a42545241017b1af71d69af",
    "title": "Solving the Deskless Divide: Recognition for the Workforce You Can't Reach by Laptop",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-10T21:30:00.000Z",
    "endDateTime": "2026-11-10T22:15:00.000Z",
    "tags": [
      {
        "id": "6a424bed8497cf527f3510d2",
        "displayName": "Breakout",
        "slug": "breakout-1431991",
        "tagColor": "#FC835E",
        "textColor": "#020e1e",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfc1af28969898212d7",
        "displayName": "Activate Recognition at Scale",
        "slug": "activate-recognition-at-scale-1458843",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bff5da0254947b9178c",
        "displayName": "Reach Every Worker",
        "slug": "reach-every-worker-1458849",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43fad9746cb2af70d6376b",
    "title": "Break",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-10T22:15:00.000Z",
    "endDateTime": "2026-11-10T22:30:00.000Z",
    "tags": [],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43fadb1d293c68fe4c3de4",
    "title": "Rethinking Service Awards: Why Wait Five Years to Say Thanks?",
    "description": null,
    "location": "Breakout Room A",
    "startDateTime": "2026-11-10T22:30:00.000Z",
    "endDateTime": "2026-11-10T23:15:00.000Z",
    "tags": [
      {
        "id": "6a424bed8497cf527f3510d2",
        "displayName": "Breakout",
        "slug": "breakout-1431991",
        "tagColor": "#FC835E",
        "textColor": "#020e1e",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfd8312dd9edd8ee232",
        "displayName": "Design More Human Recognition",
        "slug": "design-more-human-recognition-1458845",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bff5eff493d194af09e",
        "displayName": "Program DNA",
        "slug": "program-dna-1458848",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [
      {
        "id": "69c1bd5b0ee18049f5645569",
        "fullName": "Laura Shanley",
        "title": "Employee Experience Executive, COE",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a42bff2d8690a0f4fbb14d8_Laura%20Shanley.png",
          "alt": null
        }
      }
    ],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43fadfb88f9ca2599cc3d1",
    "title": "Your Culture Is Hurting—And It's Not About Your Benefits Structure",
    "description": null,
    "location": "Breakout Room B",
    "startDateTime": "2026-11-10T22:30:00.000Z",
    "endDateTime": "2026-11-10T23:15:00.000Z",
    "tags": [
      {
        "id": "6a424bed8497cf527f3510d2",
        "displayName": "Breakout",
        "slug": "breakout-1431991",
        "tagColor": "#FC835E",
        "textColor": "#020e1e",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfc23768cf96718eede",
        "displayName": "Lead From the Top",
        "slug": "lead-from-the-top-1458844",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfd8312dd9edd8ee232",
        "displayName": "Design More Human Recognition",
        "slug": "design-more-human-recognition-1458845",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43fadc43cbfa35f9dacf3c",
    "title": "Beyond the Basics: Innovative Recognition Strategies from Leading Clients",
    "description": null,
    "location": "Breakout Room C",
    "startDateTime": "2026-11-10T22:30:00.000Z",
    "endDateTime": "2026-11-10T23:15:00.000Z",
    "tags": [
      {
        "id": "6a424bed8497cf527f3510d2",
        "displayName": "Breakout",
        "slug": "breakout-1431991",
        "tagColor": "#FC835E",
        "textColor": "#020e1e",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfb4618cd7b78c4bc8b",
        "displayName": "Prove the Impact",
        "slug": "prove-the-impact-1458842",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfec7903d03a706e5a3",
        "displayName": "Build What's Next",
        "slug": "build-what-s-next-1458846",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43fade746cb2af70d63c85",
    "title": "Show Me the Money: Building the Business Case for Recognition",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-10T22:30:00.000Z",
    "endDateTime": "2026-11-10T23:15:00.000Z",
    "tags": [
      {
        "id": "6a424bed8497cf527f3510d2",
        "displayName": "Breakout",
        "slug": "breakout-1431991",
        "tagColor": "#FC835E",
        "textColor": "#020e1e",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfb4618cd7b78c4bc8b",
        "displayName": "Prove the Impact",
        "slug": "prove-the-impact-1458842",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfc23768cf96718eede",
        "displayName": "Lead From the Top",
        "slug": "lead-from-the-top-1458844",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [
      {
        "id": "69c1bd5b0ee18049f5645569",
        "fullName": "Laura Shanley",
        "title": "Employee Experience Executive, COE",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a42bff2d8690a0f4fbb14d8_Laura%20Shanley.png",
          "alt": null
        }
      },
      {
        "id": "69c1bd542c5ef20511784f4b",
        "fullName": "Christi Gilhoi",
        "title": "Employee Experience Executive, COE",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a42c09657d616a9a025134f_Christi%20Gilhoi.png",
          "alt": null
        }
      }
    ],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43fae1cb493606d3066e77",
    "title": "Networking + Expo + COE Office Hours",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-10T23:15:00.000Z",
    "endDateTime": "2026-11-11T00:30:00.000Z",
    "tags": [
      {
        "id": "6a424bf1d988ddd3b0bb74d2",
        "displayName": "Ask the Experts",
        "slug": "ask-the-experts-1458835",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bf30b25585afeb82cad",
        "displayName": "Social",
        "slug": "social-1458836",
        "tagColor": "#A8F39B",
        "textColor": "#020e1e",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bff5eff493d194af09e",
        "displayName": "Program DNA",
        "slug": "program-dna-1458848",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [
      {
        "id": "69c1bd542c5ef20511784f4b",
        "fullName": "Christi Gilhoi",
        "title": "Employee Experience Executive, COE",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a42c09657d616a9a025134f_Christi%20Gilhoi.png",
          "alt": null
        }
      },
      {
        "id": "69c1bd5b0ee18049f5645569",
        "fullName": "Laura Shanley",
        "title": "Employee Experience Executive, COE",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a42bff2d8690a0f4fbb14d8_Laura%20Shanley.png",
          "alt": null
        }
      },
      {
        "id": "69c1bd5b0ee18049f5645565",
        "fullName": "Katie Bundy",
        "title": "Employee Experience Executive, COE",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a4fabe4290780d3a8cad503_Katie%20Bundy.png",
          "alt": null
        }
      },
      {
        "id": "6a3c30229870f1b88f3c0222",
        "fullName": "Kelly Satterfield",
        "title": "Employee Experience Executive, COE",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a42bc1b0c489f84acdf47e2_Kelly%20Satterfield.png",
          "alt": null
        }
      },
      {
        "id": "69c1bd542c5ef20511784f4d",
        "fullName": "ShaNae McCleskey",
        "title": "Director, Technical Account Services",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a42c076fbaeff30d17a73ab_ShaNae%20McCleskey.png",
          "alt": null
        }
      },
      {
        "id": "69c1bd542c5ef20511784f49",
        "fullName": "Nick Frazier",
        "title": "Sr. Director, Client Success Enablement",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a42c0b3d13c54e4096b95a4_Nick%20Frazier.png",
          "alt": null
        }
      },
      {
        "id": "69c1bd5b0ee18049f564556d",
        "fullName": "Sarah Marrs",
        "title": "Head of COE Science",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a42bfd3ea2c229e1e4ce071_Sarah%20Marrs.png",
          "alt": null
        }
      }
    ],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43fae47e825d638f0ab099",
    "title": "Recognize Awards Dinner + Entertainment",
    "description": null,
    "location": "Breakout Room A",
    "startDateTime": "2026-11-11T01:30:00.000Z",
    "endDateTime": "2026-11-11T04:30:00.000Z",
    "tags": [
      {
        "id": "6a424bf30b25585afeb82cad",
        "displayName": "Social",
        "slug": "social-1458836",
        "tagColor": "#A8F39B",
        "textColor": "#020e1e",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfc23768cf96718eede",
        "displayName": "Lead From the Top",
        "slug": "lead-from-the-top-1458844",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfd8312dd9edd8ee232",
        "displayName": "Design More Human Recognition",
        "slug": "design-more-human-recognition-1458845",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "69c1bdc687d98964f92e228c",
    "title": "An Evening of Recognition: Awards Dinner & Celebration",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-11T01:30:00.000Z",
    "endDateTime": "2026-11-11T04:00:00.000Z",
    "tags": [],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43fabf7e825d638f0a91b3",
    "title": "Breakfast + Expo",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-11T14:30:00.000Z",
    "endDateTime": "2026-11-11T16:00:00.000Z",
    "tags": [
      {
        "id": "6a424bef40dba7009091fa3a",
        "displayName": "Meal",
        "slug": "meal-1431992",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bf4cd8a0e838efe0f82",
        "displayName": "Expo",
        "slug": "expo-1458838",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bff5eff493d194af09e",
        "displayName": "Program DNA",
        "slug": "program-dna-1458848",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43fac0388093580c1f8c5f",
    "title": "Welcome Back",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-11T16:00:00.000Z",
    "endDateTime": "2026-11-11T16:10:00.000Z",
    "tags": [
      {
        "id": "6a424bea5da0254947b90cc7",
        "displayName": "Mainstage",
        "slug": "mainstage-1431989",
        "tagColor": "#256CFA",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfc23768cf96718eede",
        "displayName": "Lead From the Top",
        "slug": "lead-from-the-top-1458844",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [
      {
        "id": "69c1bd542c5ef20511784f47",
        "fullName": "Steve Sonnenberg",
        "title": "CEO",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a42c0da4216d4d1360bc621_Steve%20Sonnenberg.png",
          "alt": null
        }
      },
      {
        "id": "69c1bd542c5ef20511784f4f",
        "fullName": "Paige Bennett Carr",
        "title": "Senior Director of Experiential Marketing",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/69caf2524eb6f14f31e5d29d_Paige-Bennett-Carr.png",
          "alt": "Smiling woman with curly blonde hair wearing a light gray blazer and white top."
        }
      }
    ],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43fac293b79d41a4950774",
    "title": "Dominating Disruption and Pushing Limits: Unlocking the mental and social skills of success in a fast-changing world of work",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-11T16:15:00.000Z",
    "endDateTime": "2026-11-11T17:15:00.000Z",
    "tags": [
      {
        "id": "6a424bea5da0254947b90cc7",
        "displayName": "Mainstage",
        "slug": "mainstage-1431989",
        "tagColor": "#256CFA",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfc23768cf96718eede",
        "displayName": "Lead From the Top",
        "slug": "lead-from-the-top-1458844",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfd8312dd9edd8ee232",
        "displayName": "Design More Human Recognition",
        "slug": "design-more-human-recognition-1458845",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [
      {
        "id": "6a3c3023e0a144454ef079c9",
        "fullName": "Henna Pryor",
        "title": "Workplace Performance Expert",
        "company": "Pryority",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a42bbf6aed9d5b271cc560c_Henna%20Pryor.png",
          "alt": null
        }
      }
    ],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43fac3cb493606d3065931",
    "title": "Break",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-11T17:15:00.000Z",
    "endDateTime": "2026-11-11T17:30:00.000Z",
    "tags": [
      {
        "id": "6a424bf582ea9a4558006a71",
        "displayName": "Break",
        "slug": "break-1458839",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      }
    ],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43fac4e93808f7c04f19a1",
    "title": "Recognition in Healthcare: Driving Impact Where It Matters Most",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-11T17:30:00.000Z",
    "endDateTime": "2026-11-11T18:00:00.000Z",
    "tags": [
      {
        "id": "6a424bea5da0254947b90cc7",
        "displayName": "Mainstage",
        "slug": "mainstage-1431989",
        "tagColor": "#256CFA",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bf682ea9a4558006aeb",
        "displayName": "Case Study",
        "slug": "case-study-1458840",
        "tagColor": "white",
        "textColor": "#020e1e",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfc23768cf96718eede",
        "displayName": "Lead From the Top",
        "slug": "lead-from-the-top-1458844",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bff5da0254947b9178c",
        "displayName": "Reach Every Worker",
        "slug": "reach-every-worker-1458849",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43fac843cbfa35f9dac164",
    "title": "AI and Recognition: What’s Useful, What’s Changing, and What Still Needs a Human Touch",
    "description": null,
    "location": "Breakout Room A",
    "startDateTime": "2026-11-11T18:00:00.000Z",
    "endDateTime": "2026-11-11T18:45:00.000Z",
    "tags": [
      {
        "id": "6a424bed8497cf527f3510d2",
        "displayName": "Breakout",
        "slug": "breakout-1431991",
        "tagColor": "#FC835E",
        "textColor": "#020e1e",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfe22f4cebf316914a0",
        "displayName": "Intelligence at Work",
        "slug": "intelligence-at-work-1458847",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43fac64ba27bf262755232",
    "title": "Seen, Safe, Supported: How Recognition Builds Belonging and Wellbeing",
    "description": null,
    "location": "Breakout Room B",
    "startDateTime": "2026-11-11T18:00:00.000Z",
    "endDateTime": "2026-11-11T18:45:00.000Z",
    "tags": [
      {
        "id": "6a424bed8497cf527f3510d2",
        "displayName": "Breakout",
        "slug": "breakout-1431991",
        "tagColor": "#FC835E",
        "textColor": "#020e1e",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfc23768cf96718eede",
        "displayName": "Lead From the Top",
        "slug": "lead-from-the-top-1458844",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfd8312dd9edd8ee232",
        "displayName": "Design More Human Recognition",
        "slug": "design-more-human-recognition-1458845",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [
      {
        "id": "69c1bd542c5ef20511784f4d",
        "fullName": "ShaNae McCleskey",
        "title": "Director, Technical Account Services",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a42c076fbaeff30d17a73ab_ShaNae%20McCleskey.png",
          "alt": null
        }
      },
      {
        "id": "6a3c30229870f1b88f3c0222",
        "fullName": "Kelly Satterfield",
        "title": "Employee Experience Executive, COE",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a42bc1b0c489f84acdf47e2_Kelly%20Satterfield.png",
          "alt": null
        }
      }
    ],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43fac7cfb19a045df89cf0",
    "title": "Engage + Survey Strategy: Turning Feedback Into Program Momentum",
    "description": null,
    "location": "Breakout Room C",
    "startDateTime": "2026-11-11T18:00:00.000Z",
    "endDateTime": "2026-11-11T18:45:00.000Z",
    "tags": [
      {
        "id": "6a424bed8497cf527f3510d2",
        "displayName": "Breakout",
        "slug": "breakout-1431991",
        "tagColor": "#FC835E",
        "textColor": "#020e1e",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfb4618cd7b78c4bc8b",
        "displayName": "Prove the Impact",
        "slug": "prove-the-impact-1458842",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bff5eff493d194af09e",
        "displayName": "Program DNA",
        "slug": "program-dna-1458848",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43fac90833f2d7744491d9",
    "title": "Prove the Impact: ROI, Business Cases, and Winning Leadership Buy-In",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-11T18:00:00.000Z",
    "endDateTime": "2026-11-11T18:45:00.000Z",
    "tags": [
      {
        "id": "6a424bed8497cf527f3510d2",
        "displayName": "Breakout",
        "slug": "breakout-1431991",
        "tagColor": "#FC835E",
        "textColor": "#020e1e",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfb4618cd7b78c4bc8b",
        "displayName": "Prove the Impact",
        "slug": "prove-the-impact-1458842",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfc23768cf96718eede",
        "displayName": "Lead From the Top",
        "slug": "lead-from-the-top-1458844",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43facd5cb58e5c87356829",
    "title": "Beyond Go-Live: Taking Your Recognition Program to the Next Level",
    "description": null,
    "location": "Breakout Room A",
    "startDateTime": "2026-11-11T18:45:00.000Z",
    "endDateTime": "2026-11-11T19:45:00.000Z",
    "tags": [
      {
        "id": "6a424bf8563e514167999723",
        "displayName": "Workshop",
        "slug": "workshop-1458841",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfc23768cf96718eede",
        "displayName": "Lead From the Top",
        "slug": "lead-from-the-top-1458844",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bff5eff493d194af09e",
        "displayName": "Program DNA",
        "slug": "program-dna-1458848",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [
      {
        "id": "69c1bd5b0ee18049f5645569",
        "fullName": "Laura Shanley",
        "title": "Employee Experience Executive, COE",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a42bff2d8690a0f4fbb14d8_Laura%20Shanley.png",
          "alt": null
        }
      },
      {
        "id": "69c1bd5b0ee18049f5645565",
        "fullName": "Katie Bundy",
        "title": "Employee Experience Executive, COE",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a4fabe4290780d3a8cad503_Katie%20Bundy.png",
          "alt": null
        }
      }
    ],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43facc044046a1ca915318",
    "title": "From Set Up to Scaled Up: How to Get More from Your Awardco Platform",
    "description": null,
    "location": "Breakout Room B",
    "startDateTime": "2026-11-11T18:45:00.000Z",
    "endDateTime": "2026-11-11T19:45:00.000Z",
    "tags": [
      {
        "id": "6a424bf8563e514167999723",
        "displayName": "Workshop",
        "slug": "workshop-1458841",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfec7903d03a706e5a3",
        "displayName": "Build What's Next",
        "slug": "build-what-s-next-1458846",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bff5eff493d194af09e",
        "displayName": "Program DNA",
        "slug": "program-dna-1458848",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [
      {
        "id": "69c1bd542c5ef20511784f4d",
        "fullName": "ShaNae McCleskey",
        "title": "Director, Technical Account Services",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a42c076fbaeff30d17a73ab_ShaNae%20McCleskey.png",
          "alt": null
        }
      }
    ],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43faca746cb2af70d62a1a",
    "title": "Recognition Reset: Change Management Strategies for Program Transitions",
    "description": null,
    "location": "Breakout Room C",
    "startDateTime": "2026-11-11T18:45:00.000Z",
    "endDateTime": "2026-11-11T19:45:00.000Z",
    "tags": [
      {
        "id": "6a424bf8563e514167999723",
        "displayName": "Workshop",
        "slug": "workshop-1458841",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfc1af28969898212d7",
        "displayName": "Activate Recognition at Scale",
        "slug": "activate-recognition-at-scale-1458843",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bff5eff493d194af09e",
        "displayName": "Program DNA",
        "slug": "program-dna-1458848",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43facb1d293c68fe4c33bc",
    "title": "Making Recognition Matter: Build the Case, Measure the Impact",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-11T18:45:00.000Z",
    "endDateTime": "2026-11-11T19:45:00.000Z",
    "tags": [
      {
        "id": "6a424bf8563e514167999723",
        "displayName": "Workshop",
        "slug": "workshop-1458841",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfb4618cd7b78c4bc8b",
        "displayName": "Prove the Impact",
        "slug": "prove-the-impact-1458842",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfc23768cf96718eede",
        "displayName": "Lead From the Top",
        "slug": "lead-from-the-top-1458844",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [
      {
        "id": "69c1bd542c5ef20511784f4b",
        "fullName": "Christi Gilhoi",
        "title": "Employee Experience Executive, COE",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a42c09657d616a9a025134f_Christi%20Gilhoi.png",
          "alt": null
        }
      },
      {
        "id": "6a3c30229870f1b88f3c0222",
        "fullName": "Kelly Satterfield",
        "title": "Employee Experience Executive, COE",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a42bc1b0c489f84acdf47e2_Kelly%20Satterfield.png",
          "alt": null
        }
      }
    ],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43facead9534c30a192e58",
    "title": "Lunch",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-11T19:45:00.000Z",
    "endDateTime": "2026-11-11T20:15:00.000Z",
    "tags": [
      {
        "id": "6a424bef40dba7009091fa3a",
        "displayName": "Meal",
        "slug": "meal-1431992",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bf4cd8a0e838efe0f82",
        "displayName": "Expo",
        "slug": "expo-1458838",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bff5eff493d194af09e",
        "displayName": "Program DNA",
        "slug": "program-dna-1458848",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43fad0157110d10bd19281",
    "title": "Special Guest Keynote: To Be Announced",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-11T20:15:00.000Z",
    "endDateTime": "2026-11-11T21:00:00.000Z",
    "tags": [
      {
        "id": "6a424bea5da0254947b90cc7",
        "displayName": "Mainstage",
        "slug": "mainstage-1431989",
        "tagColor": "#256CFA",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfc23768cf96718eede",
        "displayName": "Lead From the Top",
        "slug": "lead-from-the-top-1458844",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfd8312dd9edd8ee232",
        "displayName": "Design More Human Recognition",
        "slug": "design-more-human-recognition-1458845",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43fad6388093580c1fa555",
    "title": "O.W.N. YOUR LEADERSHIP™ ",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-11T21:00:00.000Z",
    "endDateTime": "2026-11-11T22:00:00.000Z",
    "tags": [
      {
        "id": "6a424bea5da0254947b90cc7",
        "displayName": "Mainstage",
        "slug": "mainstage-1431989",
        "tagColor": "#256CFA",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfc23768cf96718eede",
        "displayName": "Lead From the Top",
        "slug": "lead-from-the-top-1458844",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfd8312dd9edd8ee232",
        "displayName": "Design More Human Recognition",
        "slug": "design-more-human-recognition-1458845",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [
      {
        "id": "6a3ad9e652223203c5c945e4",
        "fullName": "Vernice “FlyGirl” Armour",
        "title": "America’s first Black female combat pilot",
        "company": null,
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a42bf9d9600defdc5c49a1e_Vernice%20Armour.png",
          "alt": null
        }
      }
    ],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  },
  {
    "id": "6a43fad81d9bae5dfcdd4f5e",
    "title": "Closing Remarks: Recognize What's Next",
    "description": null,
    "location": "Great Hall",
    "startDateTime": "2026-11-11T22:00:00.000Z",
    "endDateTime": "2026-11-11T22:10:00.000Z",
    "tags": [
      {
        "id": "6a424bea5da0254947b90cc7",
        "displayName": "Mainstage",
        "slug": "mainstage-1431989",
        "tagColor": "#256CFA",
        "textColor": "#ffffff",
        "category": "Session Type",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfc23768cf96718eede",
        "displayName": "Lead From the Top",
        "slug": "lead-from-the-top-1458844",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      },
      {
        "id": "6a424bfd8312dd9edd8ee232",
        "displayName": "Design More Human Recognition",
        "slug": "design-more-human-recognition-1458845",
        "tagColor": "rgba(255, 255, 255, 0.1)",
        "textColor": "#ffffff",
        "category": "Theme",
        "phosphorIconClass": null
      }
    ],
    "speakers": [
      {
        "id": "69c1bd542c5ef20511784f47",
        "fullName": "Steve Sonnenberg",
        "title": "CEO",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/6a42c0da4216d4d1360bc621_Steve%20Sonnenberg.png",
          "alt": null
        }
      },
      {
        "id": "69c1bd542c5ef20511784f4f",
        "fullName": "Paige Bennett Carr",
        "title": "Senior Director of Experiential Marketing",
        "company": "Awardco",
        "speakerType": "General",
        "photo": {
          "url": "https://cdn.prod.website-files.com/6809c7073641f7a4861d5cf7/69caf2524eb6f14f31e5d29d_Paige-Bennett-Carr.png",
          "alt": "Smiling woman with curly blonde hair wearing a light gray blazer and white top."
        }
      }
    ],
    "eventName": "RCGNZ Summit 2026",
    "eventId": "828839",
    "registrationRequired": false
  }
];
