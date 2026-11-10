// Build-time "head prerender": writes one HTML file per route into dist/ with the correct
// <title>, description, canonical, Open Graph tags and JSON-LD already in the HTML, so Google,
// WhatsApp and Slack link previews see real metadata without running JavaScript.
// The page body is still rendered client-side by React.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildJsonLd } from "../src/data/jsonld.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const seo = JSON.parse(readFileSync(join(root, "src/data/seo.json"), "utf8"));
const catalogue = JSON.parse(readFileSync(join(root, "src/data/catalogue.json"), "utf8"));
const categoryNames = [...catalogue.electrical, ...catalogue.consumables].map((c) => c.title);
const template = readFileSync(join(dist, "index.html"), "utf8");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

for (const [path, meta] of Object.entries(seo.routes)) {
  const url = seo.siteUrl + (path === "/" ? "/" : path);
  const img = seo.siteUrl + meta.image;
  const jsonld = buildJsonLd(path, categoryNames)
    .map((o) => `<script type="application/ld+json" data-jsonld="1">${JSON.stringify(o).replace(/</g, "\\u003c")}</script>`)
    .join("\n    ");
  const head = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${img}" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${img}" />`,
    jsonld,
  ].filter(Boolean).join("\n    ");

  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, "")
    .replace(/<meta\s+name="description"[\s\S]*?\/>/, "");
  html = html.includes("<!--SEO_HEAD-->") ? html.replace("<!--SEO_HEAD-->", head) : html.replace("</head>", `    ${head}\n  </head>`);

  const out = path === "/" ? join(dist, "index.html") : join(dist, path, "index.html");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
  console.log("prerendered head:", path);
}
