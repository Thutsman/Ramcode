/**
 * Image credits. The photos are CC BY / CC BY-SA, so attribution is REQUIRED.
 * TODO(Thulani): fill author, licence and Commons URL for each row from docs/CREDITS.md
 * (the bundle did not include it). Rows with null fields render as "being confirmed".
 */
export type Credit = { file: string; subject: string; author: string | null; licence: string | null; url: string | null };

export const credits: Credit[] = [
  { file: "cables.webp", subject: "Electrical cables", author: null, licence: null, url: null },
  { file: "led-floodlight.webp", subject: "LED floodlight", author: null, licence: null, url: null },
  { file: "pumps-valves.webp", subject: "Pumps and pipework", author: null, licence: null, url: null },
  { file: "ppe.webp", subject: "Hard hat", author: null, licence: null, url: null },
  { file: "bearings.webp", subject: "Ball bearing", author: null, licence: null, url: null },
  { file: "drill-bits.webp", subject: "Drill bit", author: null, licence: null, url: null },
  { file: "grinding-media.webp", subject: "Grinding media", author: null, licence: null, url: null },
];
