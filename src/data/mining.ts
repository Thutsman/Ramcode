import {
  BatteryCharging, Cable, Cog, Cpu, Disc3, Droplet, Droplets, Drill, FlaskConical, Flashlight, Gauge, HardHat,
  Lightbulb, Settings2, ShieldAlert, SprayCan, Waypoints, Zap, type LucideIcon,
} from "lucide-react";
import catalogue from "@/data/catalogue.json";

const icons: Record<string, LucideIcon> = {
  Zap, Cable, Cog, Lightbulb, Flashlight, Droplets, Gauge, Cpu, BatteryCharging,
  HardHat, ShieldAlert, SprayCan, Waypoints, Disc3, Droplet, Drill, Settings2, FlaskConical,
};

export type Category = { title: string; icon: LucideIcon; items: string[] };
const hydrate = (list: { title: string; icon: string; items: string[] }[]): Category[] =>
  list.map((c) => ({ ...c, icon: icons[c.icon] ?? Zap }));

export const electricalCategories = hydrate(catalogue.electrical);
export const consumableCategories = hydrate(catalogue.consumables);
export const miningCategories = [...electricalCategories, ...consumableCategories];

/**
 * Product photo grid. `src: null` renders a neutral category tile until the photo is added to
 * public/mining/products/ (see README "How to add products"). 
 */
export const productPhotos: { label: string; icon: LucideIcon; src: string | null; alt: string }[] = [
  { label: "Electrical cables", icon: Cable, src: "/mining/products/cables.webp", alt: "Large wooden drums of black armoured power cable at a site" },
  { label: "Switchgear", icon: Zap, src: null, alt: "" }, // TODO(photo): switchgear.webp
  { label: "Electric motors", icon: Cog, src: null, alt: "" }, // TODO(photo): motors.webp
  { label: "Variable speed drives", icon: Cpu, src: null, alt: "" }, // TODO(photo): vsd.webp
  { label: "LED floodlights", icon: Lightbulb, src: "/mining/products/led-floodlight.webp", alt: "Grey LED floodlight fitting with mounting bracket and cable" },
  { label: "Pumps & valves", icon: Droplets, src: "/mining/products/pumps-valves.webp", alt: "Large blue pumps and green pipework inside a pump station" },
  { label: "PPE", icon: HardHat, src: "/mining/products/ppe.webp", alt: "Yellow safety hard hat" },
  { label: "Hoses & fittings", icon: Waypoints, src: null, alt: "" }, // TODO(photo): hoses-fittings.webp
  { label: "Bearings & belts", icon: Disc3, src: "/mining/products/bearings.webp", alt: "Open steel deep-groove ball bearing" },
  { label: "Lubricants", icon: Droplet, src: null, alt: "" }, // TODO(photo): lubricants.webp
  { label: "Drill bits", icon: Drill, src: "/mining/products/drill-bits.webp", alt: "Blue tricone drill bit with threaded pin" },
  { label: "Grinding media", icon: Settings2, src: "/mining/products/grinding-media.webp", alt: "Polished steel grinding balls in a container" },
];

/** Logos live in public/mining/brands/<file>.svg. A missing file falls back to the brand name. */
export const brands = [
  { name: "ABB", file: "abb" },
  { name: "Siemens", file: "siemens" },
  { name: "Schneider Electric", file: "schneider" },
  { name: "WEG", file: "weg" },
  { name: "Phoenix Contact", file: "phoenix-contact" },
  { name: "Legrand", file: "legrand" },
  { name: "SKF", file: "skf" },
  { name: "Atlas Copco", file: "atlas-copco" },
  { name: "Parker", file: "parker" },
  { name: "Bosch", file: "bosch" },
  { name: "Fluke", file: "fluke" },
  { name: "3M", file: "3m" },
];

export const engineeringServices = [
  "Electrical testing & motor management",
  "Panels, MCCs & installations",
  "Instrumentation & control",
  "Power systems engineering (ETAP / PowerCAD)",
  "Energy auditing (Certified Energy Auditor)",
  "Project & contract management (PRINCE2, FIDIC)",
];

export const operationPoints = [
  ["HV & power reliability", "Designs and protection settings that keep supply stable under real mining loads."],
  ["Pumps, motors & MCCs", "Right-sized equipment, tested and aligned before it goes into service."],
  ["Process instrumentation", "Measurement you can trust, from field device to SCADA screen."],
  ["Procurement discipline", "Specifications, bid evaluation and documentation done the way large utilities expect."],
];

export const qualityPoints = [
  "Engineer review before dispatch",
  "Datasheets and certificates where available",
  "Lockout-tagout and permit-to-work on site",
  "Delivery across Zimbabwe from Bulawayo",
  "USD quotations with VAT shown separately",
  "Lead time confirmed on every quote",
];

export const experienceRows = [
  ["City of Bulawayo", "Principal Electromechanical Engineer, 2012–2022: water and wastewater, pump stations, traffic lighting, HV systems"],
  ["Water & wastewater plant assessment", "Electromechanical assessment and rehabilitation scope definition"],
  ["Solar street lighting", "DIALux design to EN 13201, BCC-approved, installed and commissioned"],
  ["Control panels & transformer testing", "Panel design and build, Megger testing and condition assessment"],
  ["Industrial automation", "PLC/SCADA integration, IIoT telemetry and reporting"],
];

export const references = [
  ["Eng S. Zondo", "City of Bulawayo"],
  ["Mr M. Nkomo", "Gwanda Rural District Council"],
  ["Mr F. Maphosa", "Electrical Foreman, How Mine"],
];
