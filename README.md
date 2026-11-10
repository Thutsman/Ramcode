# Ramcode Investments

Company website for Ramcode Investments: two divisions, **Engineering & Software** and **Mining & Industrial Supplies**.

## Stack

- React + TypeScript, Vite, Tailwind CSS 3, shadcn/ui-style components
- `react-router-dom` (client-side routing), Vercel serverless function for forms

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build     # tsc -b && vite build && node scripts/prerender.mjs
npm run preview
npm run lint
```

## Routes

| Route | Page |
| --- | --- |
| `/` | Homepage (division split, services, projects, case studies, clients, about, contact). Anchors `#services #projects #case-studies #clients #about #contact` are unchanged |
| `/mining` | Mining & Industrial Supplies catalogue |
| `/mining/request-quote` | RFQ form |
| `/credits` | Image credits |

`vercel.json` rewrites unknown paths to `index.html` so deep links work on refresh. Header hash links (`/#services`) work from any route.

### SEO / prerendering

`scripts/prerender.mjs` runs after `vite build` and writes one HTML file per route
(`dist/mining/index.html`, ...) with the right `<title>`, description, canonical, Open Graph tags and JSON-LD already in
the HTML, so Google and WhatsApp previews work without running JavaScript. The page body is still rendered
client-side. Route metadata lives in `src/data/seo.json`; JSON-LD in `src/data/jsonld.js`. On client-side navigation
`src/lib/useDocumentMeta.ts` keeps the tags in sync.

## Environment variables (set in Vercel)

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | yes | Sends RFQ and contact-form email via [Resend](https://resend.com). Without it `/api/rfq` returns 503 and the forms suggest WhatsApp |
| `RFQ_TO_EMAIL` | no | Recipient, default `enquiries@ramcode.org` |
| `RFQ_FROM_EMAIL` | no | Sender, default `Ramcode Website <onboarding@resend.dev>`. Verify `ramcode.org` in Resend and use e.g. `Ramcode <quotes@ramcode.org>` |

`api/rfq.ts` has a honeypot field and a best-effort in-memory rate limit (5 per 10 minutes per IP per instance).

## How to add products

- Categories and typical items: edit `src/data/catalogue.json` (`electrical` / `consumables`; `icon` is a name from `src/data/mining.ts`).
- Photos: put a 900x600 JPG in a folder, run `python3 scripts/optimize-product-images.py <folder>` (needs Pillow), then set `src` for the entry in `productPhotos` (`src/data/mining.ts`). Entries with `src: null` show a neutral category tile.
- Credits: add a row in `src/data/credits.ts` (author, licence, Commons URL). Attribution is required for CC BY / CC BY-SA photos.

## How to add brands

Drop `public/mining/brands/<file>.svg` and add `{ name, file }` to `brands` in `src/data/mining.ts`. A missing SVG falls back to the brand name on a light tile.

## Open TODOs

- `TODO(Thulani): confirm` the "Quotes within 24 hours on working days" promise (grep for it).
- Photos still missing: switchgear, motors, VSD, hoses-fittings, lubricants. Brand SVGs (12) are not yet added.
- `src/data/credits.ts`: author / licence / URL for the 7 photos are still blank, so fill them in before the photos go live.
