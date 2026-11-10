// Plain JS so both the browser bundle and scripts/prerender.mjs can import it.
const SITE_URL = "https://ramcode.org";

const organization = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: "Ramcode Investments",
  url: SITE_URL,
  logo: `${SITE_URL}/icon-512.png`,
  image: `${SITE_URL}/og-home.jpg`,
  telephone: "+263779035404",
  email: "enquiries@ramcode.org",
  address: {
    "@type": "PostalAddress",
    streetAddress: "17 Grenville Avenue, West Somerton",
    addressLocality: "Bulawayo",
    addressCountry: "ZW",
  },
  areaServed: { "@type": "Country", name: "Zimbabwe" },
};

/** @param {string} path @param {string[]} categoryNames */
export function buildJsonLd(path, categoryNames) {
  if (path === "/") return [organization];
  if (path === "/mining") {
    return [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Mining & Industrial Supplies",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "Zimbabwe" },
        url: `${SITE_URL}/mining`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Product categories",
          itemListElement: categoryNames.map((name) => ({ "@type": "OfferCatalog", name })),
        },
      },
    ];
  }
  return [];
}
