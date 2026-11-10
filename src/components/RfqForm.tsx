import { type FormEvent, useRef, useState } from "react";
import { AlertCircle, CheckCircle2, MessageCircle, Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitForm } from "@/lib/submit";
import { whatsappLink } from "@/data/site";

type Line = { id: number; description: string; quantity: string; unit: string };
const UNITS = ["pcs", "m", "kg", "set", "box", "litre", "drum", "other"];
const emptyLine = (id: number): Line => ({ id, description: "", quantity: "", unit: "pcs" });

const fieldClass = "space-y-2";
const errClass = "text-xs text-red-300";
const selectClass =
  "h-12 w-full border border-input bg-secondary/70 px-3 text-sm text-foreground focus-visible:border-primary/60 focus-visible:outline-none";

export function RfqForm() {
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [site, setSite] = useState("");
  const [delivery, setDelivery] = useState("");
  const [notes, setNotes] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [lines, setLines] = useState<Line[]>([emptyLine(1)]);
  const nextId = useRef(2);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const summaryRef = useRef<HTMLDivElement>(null);

  const updateLine = (id: number, patch: Partial<Line>) =>
    setLines((ls) => ls.map((l) => (l.id === id ? { ...l, ...patch } : l)));

  function validate() {
    const e: Record<string, string> = {};
    if (!company.trim()) e.company = "Enter your company or mine name.";
    if (!contact.trim()) e.contact = "Enter a contact name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email address.";
    if (phone.replace(/\D/g, "").length < 7) e.phone = "Enter a phone or WhatsApp number.";
    const filled = lines.filter((l) => l.description.trim());
    if (filled.length === 0) e.lines = "Add at least one item with a description or part number.";
    lines.forEach((l) => {
      if (l.description.trim() && !(Number(l.quantity) > 0)) e[`qty-${l.id}`] = "Enter a quantity above 0.";
    });
    return e;
  }

  function whatsappText() {
    const items = lines
      .filter((l) => l.description.trim())
      .map((l, i) => `${i + 1}. ${l.description.trim()}${l.quantity ? ` x ${l.quantity} ${l.unit}` : ""}`)
      .join("\n");
    const parts = [
      "Hello Ramcode, I would like a quote.",
      company && `Company: ${company}`,
      contact && `Contact: ${contact}`,
      email && `Email: ${email}`,
      site && `Site: ${site}`,
      delivery && `Needed by: ${delivery}`,
      items && `Items:\n${items}`,
      notes && `Notes: ${notes}`,
    ].filter(Boolean);
    return parts.join("\n");
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      setTimeout(() => summaryRef.current?.focus(), 0);
      return;
    }
    setStatus("sending");
    const result = await submitForm({
      type: "rfq",
      company, contact, email, phone, site, delivery, notes,
      lines: lines.filter((l) => l.description.trim()).map(({ description, quantity, unit }) => ({ description, quantity, unit })),
      website: honeypot,
    });
    if (result.ok) {
      setStatus("success");
    } else {
      setStatus("error");
      setServerError(result.error);
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="space-y-3 border border-primary/30 bg-primary/[0.05] p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-primary" aria-hidden="true" />
        <p className="font-display text-3xl font-bold">Quote request received</p>
        <p className="text-sm text-muted-foreground">Thank you. We will reply to {email} with a quotation and confirmed lead time.</p>
      </div>
    );
  }

  const errorList = Object.entries(errors);

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div className="hidden" aria-hidden="true">
        <label>Leave this field empty<input tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} /></label>
      </div>

      {errorList.length > 0 && (
        <div ref={summaryRef} tabIndex={-1} role="alert" className="border border-red-400/40 bg-red-400/10 p-4 text-sm text-red-200">
          <p className="font-medium">Please fix the following:</p>
          <ul className="mt-2 list-disc pl-5">{errorList.map(([k, m]) => <li key={k}>{m}</li>)}</ul>
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <div className={fieldClass}>
          <Label htmlFor="company">Company / mine name</Label>
          <Input id="company" value={company} onChange={(e) => setCompany(e.target.value)} autoComplete="organization" aria-invalid={!!errors.company} aria-describedby={errors.company ? "company-err" : undefined} required />
          {errors.company && <p id="company-err" className={errClass}>{errors.company}</p>}
        </div>
        <div className={fieldClass}>
          <Label htmlFor="contact">Contact name</Label>
          <Input id="contact" value={contact} onChange={(e) => setContact(e.target.value)} autoComplete="name" aria-invalid={!!errors.contact} aria-describedby={errors.contact ? "contact-err" : undefined} required />
          {errors.contact && <p id="contact-err" className={errClass}>{errors.contact}</p>}
        </div>
        <div className={fieldClass}>
          <Label htmlFor="rfq-email">Email</Label>
          <Input id="rfq-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} required />
          {errors.email && <p id="email-err" className={errClass}>{errors.email}</p>}
        </div>
        <div className={fieldClass}>
          <Label htmlFor="phone">Phone / WhatsApp</Label>
          <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-err" : undefined} required />
          {errors.phone && <p id="phone-err" className={errClass}>{errors.phone}</p>}
        </div>
      </div>

      <fieldset className="space-y-3">
        <legend className="mb-1 text-sm font-medium text-foreground">Items</legend>
        {lines.map((l, i) => (
          <div key={l.id} className="grid grid-cols-[1fr_1fr_auto] items-start gap-2 md:grid-cols-[1fr_7rem_7rem_auto]">
            <div className="col-span-3 space-y-1 md:col-span-1">
              <Label htmlFor={`desc-${l.id}`} className="sr-only">Item {i + 1} description or part number</Label>
              <Input id={`desc-${l.id}`} placeholder="Description / part no." value={l.description} onChange={(e) => updateLine(l.id, { description: e.target.value })} />
            </div>
            <div className="space-y-1">
              <Label htmlFor={`qty-${l.id}`} className="sr-only">Item {i + 1} quantity</Label>
              <Input id={`qty-${l.id}`} type="number" min="0" step="any" inputMode="decimal" placeholder="Qty" value={l.quantity} onChange={(e) => updateLine(l.id, { quantity: e.target.value })} aria-invalid={!!errors[`qty-${l.id}`]} aria-describedby={errors[`qty-${l.id}`] ? `qty-err-${l.id}` : undefined} />
              {errors[`qty-${l.id}`] && <p id={`qty-err-${l.id}`} className={errClass}>{errors[`qty-${l.id}`]}</p>}
            </div>
            <div>
              <Label htmlFor={`unit-${l.id}`} className="sr-only">Item {i + 1} unit</Label>
              <select id={`unit-${l.id}`} className={selectClass} value={l.unit} onChange={(e) => updateLine(l.id, { unit: e.target.value })}>
                {UNITS.map((u) => <option key={u} value={u}>{u}</option>)}
              </select>
            </div>
            <Button type="button" variant="ghost" size="sm" className="h-12 px-3" disabled={lines.length === 1} onClick={() => setLines((ls) => ls.filter((x) => x.id !== l.id))} aria-label={`Remove item ${i + 1}`}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button type="button" variant="outline" size="sm" onClick={() => setLines((ls) => [...ls, emptyLine(nextId.current++)])}>
          <Plus className="h-4 w-4" /> Add item
        </Button>
      </fieldset>

      <div className="grid gap-5 md:grid-cols-2">
        <div className={fieldClass}>
          <Label htmlFor="site">Site / location</Label>
          <Input id="site" value={site} onChange={(e) => setSite(e.target.value)} />
        </div>
        <div className={fieldClass}>
          <Label htmlFor="delivery">Required delivery date</Label>
          <Input id="delivery" type="date" value={delivery} onChange={(e) => setDelivery(e.target.value)} />
        </div>
      </div>
      <div className={fieldClass}>
        <Label htmlFor="notes">Notes</Label>
        <Textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Specifications, standards, alternatives acceptable..." />
      </div>

      {status === "error" && (
        <p role="alert" className="flex items-start gap-2 text-sm text-red-300">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> {serverError}
        </p>
      )}

      <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send quote request"}
      </Button>
      {/* TODO(Thulani): confirm */}
      <p className="text-xs text-muted-foreground">Quotes within 24 hours on working days.</p>

      <div className="border-t border-white/10 pt-6">
        <p className="mb-3 text-sm text-muted-foreground">Prefer WhatsApp?</p>
        <Button asChild variant="outline" className="border-[#25D366]/60 text-[#25D366] hover:bg-[#25D366]/10">
          <a href={whatsappLink(whatsappText())} target="_blank" rel="noreferrer">
            <MessageCircle className="h-4 w-4" /> Send via WhatsApp
          </a>
        </Button>
      </div>
    </form>
  );
}
