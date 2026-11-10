import { useEffect } from "react";
import seo from "@/data/seo.json";
import catalogue from "@/data/catalogue.json";
import { buildJsonLd } from "@/data/jsonld";

type RouteMeta = { title: string; description: string; image: string };

function setMeta(attr: "name" | "property", key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

/** Keeps title/description/canonical/OG/JSON-LD in sync on client-side navigation.
 *  Crawlers get the same values from the prerendered HTML (scripts/prerender.mjs). */
export function useDocumentMeta(path: keyof typeof seo.routes) {
  useEffect(() => {
    const meta = seo.routes[path] as RouteMeta;
    const url = seo.siteUrl + (path === "/" ? "/" : path);
    document.title = meta.title;
    setMeta("name", "description", meta.description);
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", seo.siteUrl + meta.image);
    setMeta("name", "twitter:title", meta.title);
    setMeta("name", "twitter:description", meta.description);
    setMeta("name", "twitter:image", seo.siteUrl + meta.image);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    document.head.querySelectorAll("script[data-jsonld]").forEach((n) => n.remove());
    const names = catalogue.electrical.concat(catalogue.consumables).map((c) => c.title);
    buildJsonLd(path, names).forEach((obj) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.jsonld = "1";
      s.text = JSON.stringify(obj);
      document.head.appendChild(s);
    });
  }, [path]);
}
