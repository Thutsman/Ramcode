// Vercel serverless function: POST /api/rfq  (quote requests + homepage contact form).
// Env: RESEND_API_KEY (required), RFQ_TO_EMAIL (default enquiries@ramcode.org), RFQ_FROM_EMAIL.
// Self-contained on purpose: no imports from src/, so Vercel's ESM bundler has nothing to resolve.

type Req = { method?: string; body?: unknown; headers: Record<string, string | string[] | undefined> };
type Res = { status: (n: number) => Res; json: (b: unknown) => void; setHeader: (k: string, v: string) => void };

declare const process: { env: Record<string, string | undefined> };

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
// Best-effort per-instance limiter (serverless instances do not share memory). Upgrade to
// Vercel KV / Upstash if abuse appears.
const hits = new Map<string, number[]>();

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const str = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export default async function handler(req: Req, res: Res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }
  const fwd = req.headers["x-forwarded-for"];
  const ip = (Array.isArray(fwd) ? fwd[0] : fwd)?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) return res.status(429).json({ error: "Too many requests. Please try again in a few minutes or use WhatsApp." });

  const b = (typeof req.body === "string" ? safeParse(req.body) : req.body) as Record<string, unknown> | null;
  if (!b || typeof b !== "object") return res.status(400).json({ error: "Invalid request." });

  // Honeypot: bots fill this hidden field. Pretend success, send nothing.
  if (str(b.website)) return res.status(200).json({ ok: true });

  const type = b.type === "rfq" ? "rfq" : "general";
  const email = str(b.email, 200);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: "Please enter a valid email address." });

  const rows: [string, string][] = [];
  let subject: string;
  if (type === "rfq") {
    const lines = Array.isArray(b.lines) ? (b.lines as Record<string, unknown>[]).slice(0, 50) : [];
    if (!str(b.company) || !str(b.contact) || lines.length === 0) return res.status(400).json({ error: "Please complete the required fields." });
    subject = `RFQ from ${str(b.company, 100)}`;
    rows.push(["Company", str(b.company)], ["Contact", str(b.contact)], ["Email", email], ["Phone", str(b.phone)], ["Site", str(b.site)], ["Delivery date", str(b.delivery)]);
    rows.push(["Items", lines.map((l, i) => `${i + 1}. ${str(l.description, 300)} x ${str(l.quantity, 20)} ${str(l.unit, 20)}`).join("\n")]);
    rows.push(["Notes", str(b.notes)]);
  } else {
    if (!str(b.name) || !str(b.message)) return res.status(400).json({ error: "Please complete the required fields." });
    subject = `Website enquiry from ${str(b.name, 100)}`;
    rows.push(["Name", str(b.name)], ["Email", email], ["Service", str(b.service)], ["Message", str(b.message)]);
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) return res.status(503).json({ error: "Online forms are temporarily unavailable. Please use WhatsApp or email enquiries@ramcode.org." });

  const html = `<table cellpadding="6">${rows.filter(([, v]) => v).map(([k, v]) => `<tr><td valign="top"><b>${esc(k)}</b></td><td style="white-space:pre-wrap">${esc(v)}</td></tr>`).join("")}</table>`;
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.RFQ_FROM_EMAIL || "Ramcode Website <onboarding@resend.dev>",
      to: [process.env.RFQ_TO_EMAIL || "enquiries@ramcode.org"],
      reply_to: email,
      subject,
      html,
    }),
  });
  if (!r.ok) return res.status(502).json({ error: "We could not send your message. Please try WhatsApp or email instead." });
  return res.status(200).json({ ok: true });
}

function safeParse(s: string) {
  try { return JSON.parse(s); } catch { return null; }
}
