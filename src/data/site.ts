export const SITE_URL = "https://ramcode.org";

export const CONTACT = {
  name: "Thulani Dube",
  role: "Technical Director",
  phone: "+263 779 035 404",
  phoneTel: "tel:+263779035404",
  email: "enquiries@ramcode.org",
  address: "17 Grenville Avenue, West Somerton, Bulawayo, Zimbabwe",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=17+Grenville+Avenue+West+Somerton+Bulawayo+Zimbabwe",
  mapEmbed: "https://www.google.com/maps?q=17+Grenville+Avenue+West+Somerton+Bulawayo+Zimbabwe&output=embed",
};

export const WHATSAPP_NUMBER = "263779035404";

export function whatsappLink(text?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export const PROFILE_PDF = "/downloads/Ramcode-Mining-Profile.pdf";

/** `to` is a router location; hash links resolve to the homepage from any route. */
export const navItems = [
  { label: "Services", to: "/#services" },
  { label: "Mining Supplies", to: "/mining" },
  { label: "Projects", to: "/#projects" },
  { label: "Case Studies", to: "/#case-studies" },
  { label: "Clients", to: "/#clients" },
  { label: "Company", to: "/#about" },
];
