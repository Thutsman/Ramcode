import { Link } from "react-router-dom";
import { ArrowRight, Download, FileCheck2, Layers, MessageCircle, Repeat, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BrandTile, CategoryCard } from "@/components/MiningBits";
import { useRevealAnimation } from "@/lib/hooks";
import { useDocumentMeta } from "@/lib/useDocumentMeta";
import { CONTACT, PROFILE_PDF, whatsappLink } from "@/data/site";
import {
  brands, consumableCategories, electricalCategories, engineeringServices, experienceRows, operationPoints,
  productPhotos, qualityPoints, references,
} from "@/data/mining";
import directorPhoto from "../../Thulani.webp";

const section = "relative z-10 px-6 py-16 md:px-10 md:py-24";
const h2 = "max-w-3xl font-display text-3xl font-bold leading-tight tracking-[0.03em] text-foreground md:text-5xl";

function Kicker({ children }: { children: string }) {
  return <p className="section-kicker">{children}</p>;
}

export default function Mining() {
  useDocumentMeta("/mining");
  useRevealAnimation();

  return (
    <>
      <section className="relative z-10 px-6 pb-16 pt-32 md:px-10 md:pt-40">
        <div className="container">
          <div className="reveal max-w-4xl">
            <Kicker>Mining & Industrial Supply · Bulawayo, Zimbabwe</Kicker>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-[0.02em] text-foreground md:text-7xl">
              Spares and consumables that arrive on time and <span className="text-primary">match the spec.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
              Electrical, instrumentation and control materials, mining consumables and on-site engineering for mines and plants across Zimbabwe.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/mining/request-quote">
                  Request a quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
                <a href={whatsappLink()} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" /> WhatsApp us
                </a>
              </Button>
              <a href={PROFILE_PDF} download className="inline-flex max-w-[calc(100%-4.5rem)] items-center gap-2 px-2 text-sm text-primary underline underline-offset-4 hover:no-underline">
                <Download className="h-4 w-4" aria-hidden="true" /> Download company profile (PDF)
              </a>
            </div>
            {/* TODO(Thulani): confirm */}
            <p className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
              Quotes within 24 hours on working days
            </p>
          </div>
        </div>
      </section>

      <section id="range" className={`${section} bg-secondary/45`}>
        <div className="container">
          <div className="reveal mb-10">
            <Kicker>Product range · Part 1</Kicker>
            <h2 className={h2}>Electrical &amp; Instrumentation</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              Our main supply lines, specified and checked by an engineer before they leave our hands. Typical items shown.
            </p>
          </div>
          <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {electricalCategories.map((c) => <CategoryCard key={c.title} category={c} />)}
          </ul>

          <div className="reveal mb-10 mt-20">
            <Kicker>Product range · Part 2</Kicker>
            <h2 className={h2}>Mining consumables</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              General, mechanical and plant consumables for underground, plant and surface teams, specified to your requirements and delivered to site.
            </p>
          </div>
          <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {consumableCategories.map((c) => <CategoryCard key={c.title} category={c} />)}
          </ul>
        </div>
      </section>

      <section aria-labelledby="how-we-supply" className={section}>
        <div className="container">
          <div className="reveal mb-10">
            <Kicker>How we supply</Kicker>
            <h2 id="how-we-supply" className={h2}>Fewer vendors. Fewer surprises.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { icon: Layers, title: "Consolidated orders", text: "Mixed electrical, mechanical and general items combined on one quotation and one delivery, so your stores team manages fewer vendors." },
              { icon: FileCheck2, title: "Matched to specification", text: "Items checked against your part numbers, sizes, ratings and standards before dispatch, with any alternative clearly proposed." },
              { icon: Repeat, title: "Repeat supply", text: "Regular stores items can be quoted on a repeat basis, with quantities and delivery frequency agreed to suit your consumption." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="reveal border border-primary/25 bg-primary/[0.05] p-6">
                <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-bold tracking-[0.03em]">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
          <p className="reveal mt-8 border-l-2 border-primary pl-4 text-sm leading-7 text-foreground">
            Not on the list? Send us the description or part number.
          </p>
        </div>
      </section>

      <section id="photos" aria-labelledby="photos-h" className={`${section} bg-secondary/45`}>
        <div className="container">
          <div className="reveal mb-10">
            <Kicker>Product range at a glance</Kicker>
            <h2 id="photos-h" className={h2}>What we supply most often</h2>
          </div>
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 xl:grid-cols-4">
            {productPhotos.map((p) => {
              const Icon = p.icon;
              return (
                <li key={p.label} className="reveal overflow-hidden border border-white/10 bg-background/90">
                  {p.src ? (
                    <img src={p.src} alt={p.alt} width={900} height={600} loading="lazy" decoding="async" className="aspect-[3/2] w-full object-cover" />
                  ) : (
                    <div className="grid aspect-[3/2] w-full place-items-center bg-secondary" role="img" aria-label={p.label}>
                      <Icon className="h-10 w-10 text-primary/60" aria-hidden="true" />
                    </div>
                  )}
                  <p className="border-t border-white/10 px-3 py-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">{p.label}</p>
                </li>
              );
            })}
          </ul>
          <p className="mt-5 text-xs text-muted-foreground">
            Photos show typical products, not specific brands or stock. <Link to="/credits" className="text-primary underline underline-offset-4 hover:no-underline">Image credits</Link>
          </p>
        </div>
      </section>

      <section id="brands" aria-labelledby="brands-h" className={section}>
        <div className="container">
          <div className="reveal mb-8">
            <Kicker>Brands</Kicker>
            <h2 id="brands-h" className={h2}>Brands we supply</h2>
          </div>
          <ul className="reveal grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((b) => <BrandTile key={b.file} {...b} />)}
          </ul>
          <p className="mt-4 text-xs leading-6 text-muted-foreground">
            Brands shown are trademarks of their respective owners; Ramcode supplies genuine products through authorised distribution channels. WEG logo: WEG, CC BY-SA 4.0, via Wikimedia Commons.
          </p>
        </div>
      </section>

      <section id="engineering" aria-labelledby="eng-h" className={`${section} bg-secondary/45`}>
        <div className="container">
          <div className="reveal mb-10">
            <Kicker>Engineering services</Kicker>
            <h2 id="eng-h" className={h2}>More than a supplier</h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {engineeringServices.map((s) => (
              <li key={s} className="reveal flex items-center gap-3 border border-white/10 bg-background/70 px-4 py-4 text-sm text-foreground">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" /> {s}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Digital tools, if useful: dashboards, reporting and automation for your assets.{" "}
            <Link to="/#services" className="text-primary underline underline-offset-4 hover:no-underline">See our software work</Link>.
          </p>
        </div>
      </section>

      <section id="credibility" aria-labelledby="cred-h" className={section}>
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <figure className="reveal overflow-hidden border border-primary/35 bg-background/80 p-3">
            <img src={directorPhoto} alt="Thulani Dube, Technical Director of Ramcode Investments" width={800} height={1000} loading="lazy" className="aspect-[4/5] w-full object-cover object-top" />
            <figcaption className="mt-3 border-t border-white/10 pt-3">
              <p className="font-display text-2xl font-bold tracking-[0.04em]">Thulani Dube</p>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-primary">Technical Director</p>
            </figcaption>
          </figure>
          <div className="reveal">
            <Kicker>Credibility</Kicker>
            <h2 id="cred-h" className={h2}>Large-organisation experience, local responsiveness</h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Thulani Dube spent 10 years (2012–2022) as Principal Electromechanical Engineer at the City of Bulawayo, covering water and wastewater treatment, pump stations, traffic lighting and HV systems.
            </p>
            <h3 className="mt-8 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">What that means for your operation</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {operationPoints.map(([t, d]) => (
                <li key={t} className="border border-white/10 bg-background/70 p-4">
                  <p className="flex items-center gap-2 font-medium text-foreground"><ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />{t}</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{d}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">
              B.Eng Electronic Engineering (NUST, 2014) · CEA (AEE #90987) · PRINCE2 Foundation
            </p>
          </div>
        </div>
      </section>

      <section id="quality" aria-labelledby="quality-h" className={`${section} bg-secondary/45`}>
        <div className="container">
          <div className="reveal mb-10">
            <Kicker>Quality, safety & delivery</Kicker>
            <h2 id="quality-h" className={h2}>Checked before it ships</h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {qualityPoints.map((q) => (
              <li key={q} className="reveal flex items-start gap-3 border border-white/10 bg-background/70 px-4 py-4 text-sm text-foreground">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" /> {q}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="experience" aria-labelledby="exp-h" className={section}>
        <div className="container grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="reveal">
            <Kicker>Past experience</Kicker>
            <h2 id="exp-h" className={h2}>Delivered, not just supplied</h2>
            <table className="mt-8 w-full border-collapse text-left text-sm">
              <caption className="sr-only">Past experience</caption>
              <tbody>
                {experienceRows.map(([a, b]) => (
                  <tr key={a} className="border-t border-white/10">
                    <th scope="row" className="w-2/5 py-3 pr-4 align-top font-medium text-foreground">{a}</th>
                    <td className="py-3 text-muted-foreground">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="reveal">
            <h3 className="font-display text-2xl font-bold tracking-[0.03em]">References</h3>
            <ul className="mt-4 space-y-3">
              {references.map(([n, r]) => (
                <li key={n} className="border border-white/10 bg-background/70 p-4">
                  <p className="font-medium text-foreground">{n}</p>
                  <p className="text-sm text-muted-foreground">{r}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">Contact details for references available on request.</p>
          </div>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-h" className={`${section} bg-secondary/45`}>
        <div className="container grid gap-10 lg:grid-cols-2">
          <div className="reveal">
            <Kicker>Request a quote</Kicker>
            <h2 id="contact-h" className={h2}>Send us your list</h2>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/mining/request-quote">Request a quote <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
                <a href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4" /> WhatsApp us</a>
              </Button>
            </div>
            {/* TODO(Thulani): confirm */}
            <p className="mt-4 text-sm text-muted-foreground">Quotes within 24 hours on working days.</p>
            <address className="mt-8 space-y-1 text-sm not-italic leading-7 text-muted-foreground">
              <p className="font-medium text-foreground">{CONTACT.name}, {CONTACT.role}</p>
              <p><a className="hover:text-primary" href={CONTACT.phoneTel}>{CONTACT.phone}</a> (call / WhatsApp)</p>
              <p><a className="hover:text-primary" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
              <p><a className="hover:text-primary" href={CONTACT.mapUrl} target="_blank" rel="noreferrer">{CONTACT.address}</a></p>
            </address>
            <a href={PROFILE_PDF} download className="mt-6 inline-flex items-center gap-2 text-sm text-primary underline underline-offset-4 hover:no-underline">
              <Download className="h-4 w-4" aria-hidden="true" /> Download our mining company profile (PDF, 2 MB)
            </a>
          </div>
          <div className="reveal overflow-hidden border border-white/10">
            <iframe
              title="Map: Ramcode Investments, 17 Grenville Avenue, West Somerton, Bulawayo"
              src={CONTACT.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full border-0 lg:h-full lg:min-h-80"
            />
          </div>
        </div>
      </section>
    </>
  );
}
