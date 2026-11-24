import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useRevealAnimation } from "@/lib/hooks";
import { useDocumentMeta } from "@/lib/useDocumentMeta";
import { CONTACT, whatsappLink } from "@/data/site";

const section = "relative z-10 px-6 py-16 md:px-10 md:py-24";
const h2 = "max-w-3xl font-display text-3xl font-bold leading-tight tracking-[0.03em] text-foreground md:text-5xl";

function Kicker({ children }: { children: string }) {
  return <p className="section-kicker">{children}</p>;
}

export default function LeachMonitoring() {
  useDocumentMeta("/mining/leach-monitoring");
  useRevealAnimation();
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string } | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative z-10 px-6 pb-16 pt-32 md:px-10 md:pt-40">
        <div className="container">
          <div className="reveal max-w-4xl">
            <Kicker>Leach plant monitoring & automation · Zimbabwe</Kicker>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-[0.02em] text-foreground md:text-7xl">
              Leaching is where your gold is <span className="text-primary">recovered or lost.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
              See pH, dissolved oxygen, cyanide, redox, density and temperature live on your phone, with SMS and email alarms. Then control them with automatic dosing and plant control.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#assessment">
                  Book a free 1-hour plant assessment <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
                <a href={whatsappLink()} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" /> WhatsApp us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative z-10 px-6 pb-10 md:px-10">
        <div className="container">
          <div className="reveal overflow-hidden border border-primary/35">
            <img
              src="/mining/monitoring/monitoring-tablet-line-dashboard.jpg"
              alt="Live dashboard on tablet showing oxygen and slurry line gauges with real-time measurements"
              width={1920}
              height={1080}
              loading="eager"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className={`${section} bg-secondary/45`}>
        <div className="container">
          <div className="reveal max-w-3xl">
            <h2 className={h2}>The problem</h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              By the time ore reaches your leach tanks, most of the money has already been spent to mine, haul, crush and mill it. If the pH drifts, oxygen drops or cyanide runs low and nobody acts until the next manual check, gold leaves with the tails. Overdose to be safe, and reagent is wasted.
            </p>
          </div>
        </div>
      </section>

      {/* Live Screens and Parameters */}
      <section className={section}>
        <div className="container">
          <div className="reveal mb-10">
            <h2 className={h2}>Live on your phone, tablet or PC</h2>
          </div>
          <div className="reveal grid gap-6 md:grid-cols-2 lg:gap-10">
            <button
              onClick={() => setLightboxImage({
                src: "/mining/monitoring/monitoring-tablet-alarm-popup.jpg",
                caption: "Alarm pop-up: O₂ line high pressure"
              })}
              className="group overflow-hidden border border-primary/25 bg-background/90 transition-all hover:border-primary/50"
              type="button"
            >
              <img
                src="/mining/monitoring/monitoring-tablet-alarm-popup.jpg"
                alt="Tablet screen showing alarm pop-up for oxygen line high pressure"
                width={1600}
                height={1200}
                loading="lazy"
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />
              <p className="border-t border-white/10 px-4 py-3 text-left text-sm text-muted-foreground">
                <strong className="text-foreground">Alarm pop-up:</strong> O₂ line high pressure
              </p>
            </button>
            <button
              onClick={() => setLightboxImage({
                src: "/mining/monitoring/monitoring-tablet-line-dashboard.jpg",
                caption: "Live dashboard: oxygen & slurry lines"
              })}
              className="group overflow-hidden border border-primary/25 bg-background/90 transition-all hover:border-primary/50"
              type="button"
            >
              <img
                src="/mining/monitoring/monitoring-tablet-line-dashboard.jpg"
                alt="Live dashboard showing Line 1 and Line 2 oxygen and slurry gauges with real-time values"
                width={1600}
                height={1200}
                loading="lazy"
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />
              <p className="border-t border-white/10 px-4 py-3 text-left text-sm text-muted-foreground">
                <strong className="text-foreground">Live dashboard:</strong> oxygen & slurry lines
              </p>
            </button>
          </div>
          <div className="reveal mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {["pH", "Dissolved O₂", "Cyanide", "Redox", "Density", "Temperature"].map((param) => (
              <div key={param} className="border border-primary/25 bg-primary/[0.05] px-4 py-3 text-center">
                <p className="font-display text-lg font-bold tracking-[0.03em] text-primary">{param}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitor / Automate Two-Column */}
      <section className={`${section} bg-secondary/45`}>
        <div className="container">
          <div className="reveal mb-10">
            <img
              src="/mining/monitoring/monitoring-system-architecture.png"
              alt="System architecture diagram showing field sensors and remote unit connecting to control centre, maintenance staff and customers via internet and GPRS"
              width={800}
              height={400}
              loading="lazy"
              className="mx-auto max-w-2xl"
            />
          </div>
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Step 1 · Monitor */}
            <div className="reveal border border-primary/25 bg-background/90 p-8">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.26em] text-primary">Step 1 · Monitor</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-[0.03em] text-foreground">
                See where gold & reagent are lost
              </h2>
              <ul className="mt-6 space-y-3">
                {[
                  { title: "Live leach chemistry", text: "on a mobile app and web portal: tables, gauges and plant screens." },
                  { title: "SMS & email alarms", text: "for power trips, blockages and pressure faults." },
                  { title: "Owner visibility off site", text: "including whether each alarm got a timely response." },
                  { title: "History & reports", text: "super-trends, production reports and data export for your metallurgist." },
                  { title: "Faults shown at their location", text: "on the plant screen, and confirmed when cleared." },
                  { title: "Proven", text: "already running on an oxygen-injection pilot plant." },
                ].map(({ title, text }) => (
                  <li key={title} className="flex items-start gap-3 text-sm leading-7">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <p>
                      <strong className="font-bold text-foreground">{title}:</strong>{" "}
                      <span className="text-muted-foreground">{text}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 2 · Automate */}
            <div className="reveal border border-primary/25 bg-background/90 p-8">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.26em] text-primary">Step 2 · Automate</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-[0.03em] text-foreground">
                Let the plant act on it
              </h2>
              <ul className="mt-6 space-y-3">
                {[
                  "Automatic lime dosing on measured pH.",
                  "Cyanide dosing control based on measured free cyanide.",
                  "Dissolved oxygen control by modulating oxygen or air injection.",
                  "Pump, agitator and valve control with interlocks and auto-restart sequences after power trips.",
                  "Level and density control.",
                  "Remote start/stop and setpoint changes from the HMI, with access control.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-7">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Brings Strip */}
      <section className="relative z-10 bg-primary px-6 py-8 md:px-10">
        <div className="container">
          <div className="reveal flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <p className="font-display text-xl font-bold uppercase tracking-[0.08em] text-primary-foreground md:text-2xl">
              Automation brings
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {[
                "Steadier chemistry",
                "Less reagent wasted from overdosing",
                "Less gold lost from underdosing",
                "Fewer manual checks",
                "Faster recovery after outages",
              ].map((benefit) => (
                <span
                  key={benefit}
                  className="border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground"
                >
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proven Results */}
      <section className={section}>
        <div className="container">
          <div className="reveal mb-8">
            <h2 className={h2}>Proven results at other gold plants</h2>
            <p className="mt-4 text-base text-muted-foreground">
              Published results from gold plants that automated cyanide and pH control:
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                figure: "30%",
                label: "Gold plant, South America",
                text: "~30% less cyanide (≈ US$3.6M/yr), gold recovery up 2–2.5%, detox peroxide down ~70% — automated cyanide analysis and dosing.",
              },
              {
                figure: "US$1M/yr",
                label: "CIL plant, South Africa",
                text: "Cyanide use down 5–10%, ≈ US$1M/yr benefit — online cyanide analyser with feedback control.",
              },
              {
                figure: "6.55%",
                label: "Gold mine, West Africa",
                text: "Lime use down 6.55%, flocculant down 9.32% — advanced density and CIL pH control.",
              },
              {
                figure: "73%",
                label: "Cyanide control study",
                text: "Model-predictive cyanide control: cyanide in range 73% of the time vs 30% before; 22% less cyanide at one site.",
              },
            ].map(({ figure, label, text }) => (
              <div key={label} className="reveal border border-primary/25 bg-background/90 p-6">
                <p className="font-display text-5xl font-bold tracking-tight text-primary">{figure}</p>
                <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-foreground">{label}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
          <p className="reveal mt-8 max-w-4xl text-xs leading-6 text-muted-foreground">
            Published industry case studies (conference papers and technical journals). Results achieved by other suppliers at other plants; results vary by ore and plant, which is why we start with a free assessment.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className={`${section} bg-secondary/45`}>
        <div className="container">
          <div className="reveal mb-10">
            <h2 className={h2}>How it works</h2>
            <p className="mt-4 text-base text-muted-foreground">Monitor first, then automate</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "1", title: "Assessment visit", text: "We walk your plant and see how it is run today." },
              { step: "2", title: "Monitor", text: "Instruments, live dashboards and alarms on a first circuit." },
              { step: "3", title: "Automate", text: "Closed-loop dosing and control where the data shows the need." },
              { step: "4", title: "Expand / optimise", text: "Add circuits, tune setpoints and extend control at your pace." },
            ].map(({ step, title, text }) => (
              <div key={step} className="reveal border border-white/10 bg-background/70 p-6">
                <p className="font-display text-5xl font-bold tracking-tight text-primary/40">{step}</p>
                <h3 className="mt-3 font-display text-xl font-bold tracking-[0.03em] text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plant Types We Serve */}
      <section className={section}>
        <div className="container">
          <div className="reveal mb-10">
            <h2 className={h2}>Plant types we serve</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "CIL / CIP",
                monitor: "Tank-by-tank pH, DO and cyanide monitoring, with a full history for your metallurgist.",
                automate: "lime, cyanide and O₂ dosing per tank.",
              },
              {
                title: "Vat leach",
                monitor: "Simple pH, cyanide and level monitoring on every vat, with alerts straight to your phone.",
                automate: "pH and cyanide dosing.",
              },
              {
                title: "Heap leach",
                monitor: "Solution flow, pH, cyanide and pond levels across your pads, with spill alarms.",
                automate: "pump and solution flow control.",
              },
              {
                title: "Intensive leach / elution",
                monitor: "Batch tracking through each run, with security alerts on the high-value end of the plant.",
                automate: "batch sequencing.",
              },
            ].map(({ title, monitor, automate }) => (
              <div key={title} className="reveal border border-primary/25 bg-background/90 p-6">
                <h3 className="font-display text-2xl font-bold tracking-[0.03em] text-primary">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{monitor}</p>
                <p className="mt-3 text-sm leading-7">
                  <strong className="font-bold text-foreground">Automate:</strong>{" "}
                  <span className="text-muted-foreground">{automate}</span>
                </p>
              </div>
            ))}
          </div>
          <p className="reveal mt-8 text-base text-foreground">
            <strong className="font-bold">From small-scale plants to mid-tier operations.</strong>{" "}
            <span className="text-muted-foreground">We build on the instruments you already have.</span>
          </p>
        </div>
      </section>

      {/* Your Project Team */}
      <section className={`${section} bg-secondary/45`}>
        <div className="container">
          <div className="reveal mb-10">
            <h2 className={h2}>Your project team</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Kudzai Manditereza */}
            <div className="reveal border border-primary/25 bg-background/90 p-8">
              <div className="mb-4 grid h-16 w-16 place-items-center border border-primary/40 bg-primary/10">
                <span className="font-display text-2xl font-bold tracking-tight text-primary">KM</span>
              </div>
              <h3 className="font-display text-2xl font-bold tracking-[0.03em] text-foreground">Kudzai Manditereza</h3>
              <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-primary">
                Project Lead · Automation & Industrial IoT
              </p>
              <ul className="mt-6 space-y-2 text-sm leading-7 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  Implemented this real-time leach monitoring system on a South African gold processing pilot plant (the screens shown on this page).
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  BEng (Hons) Electronic Engineering, NUST Zimbabwe.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  Background in embedded gas-detection instruments for mines, industrial automation and PLC programming, then industrial IoT (MQTT, OPC UA).
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  Germany-based. Founder of Industry40.tv; named Smart Manufacturing Executive of the Year; recognised as a top Industry 4.0 influencer.
                </li>
              </ul>
            </div>

            {/* Thulani Dube */}
            <div className="reveal border border-primary/25 bg-background/90 p-8">
              <div className="mb-4 grid h-16 w-16 place-items-center border border-primary/40 bg-primary/10">
                <span className="font-display text-2xl font-bold tracking-tight text-primary">TD</span>
              </div>
              <h3 className="font-display text-2xl font-bold tracking-[0.03em] text-foreground">Thulani Dube</h3>
              <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-primary">
                Director · Zimbabwe delivery & support
              </p>
              <ul className="mt-6 space-y-2 text-sm leading-7 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  B.Eng Electronic Engineering, NUST.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  Former Principal Electromechanical Engineer, City of Bulawayo (2012–2022).
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  Certified Energy Auditor · PRINCE2 Foundation.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  Based in Bulawayo: your local contact for site visits, installation and support.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className={section}>
        <div className="container">
          <div className="reveal mb-10">
            <h2 className={h2}>Live dashboard screens</h2>
          </div>
          <div className="reveal grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: "/mining/monitoring/monitoring-tablet-process-view.jpg",
                caption: "Live process view on a tablet: oxygen and slurry lines, pumps and pressures",
                alt: "Tablet showing live process view with oxygen and slurry lines, pump status and pressure gauges",
              },
              {
                src: "/mining/monitoring/monitoring-mobile-process-view.png",
                caption: "Mobile app process view",
                alt: "Mobile phone showing process view with tank levels and control buttons",
              },
              {
                src: "/mining/monitoring/monitoring-mobile-gauges.png",
                caption: "High-performance mobile app HMI",
                alt: "Mobile phone showing high-performance HMI with multiple circular gauges and indicators",
              },
              {
                src: "/mining/monitoring/monitoring-historical-trend.png",
                caption: "Historical trend display",
                alt: "Historical trend chart showing parameter values over time",
              },
              {
                src: "/mining/monitoring/monitoring-production-chart.png",
                caption: "Production charts",
                alt: "Production dashboard with bar charts and metrics",
              },
              {
                src: "/mining/monitoring/monitoring-web-portal-process-view.png",
                caption: "Web portal process view",
                alt: "Web portal showing comprehensive process view with multiple tanks and flow lines",
              },
              {
                src: "/mining/monitoring/monitoring-local-hmi.png",
                caption: "Local HMI",
                alt: "Local human-machine interface display showing plant overview",
              },
            ].map(({ src, caption, alt }) => (
              <button
                key={src}
                onClick={() => setLightboxImage({ src, caption })}
                className="group overflow-hidden border border-white/10 bg-background/90 transition-all hover:border-primary/40"
                type="button"
              >
                <img
                  src={src}
                  alt={alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <p className="border-t border-white/10 px-3 py-2 text-left text-xs text-muted-foreground">{caption}</p>
              </button>
            ))}
          </div>
          <p className="reveal mt-6 text-xs leading-6 text-muted-foreground">
            Live dashboard screens from a client installation. The client name in the app title bar has been masked. Each installation is configured to the plant.
          </p>
        </div>
      </section>

      {/* CTA: Book Assessment */}
      <section id="assessment" className={`${section} bg-secondary/45`}>
        <div className="container max-w-4xl">
          <div className="reveal">
            <h2 className={h2}>Book a free 1-hour plant monitoring & automation assessment</h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              We look at how your leach circuit is run today and show you what monitoring and automation could look like on your plant. No obligation.
            </p>
          </div>
          <div className="reveal mt-10 border border-primary/25 bg-background/90 p-8">
            <h3 className="font-display text-2xl font-bold tracking-[0.03em] text-foreground">Talk to Thulani Dube</h3>
            <address className="mt-6 space-y-2 text-base not-italic leading-8 text-muted-foreground">
              <p>
                <strong className="text-foreground">Cell:</strong>{" "}
                <a className="text-primary hover:underline" href="tel:+263779035404">+263 779 035 404</a>
              </p>
              <p>
                <strong className="text-foreground">WhatsApp:</strong>{" "}
                <a className="text-primary hover:underline" href={whatsappLink()} target="_blank" rel="noreferrer">
                  +263 779 035 404
                </a>
              </p>
              <p>
                <strong className="text-foreground">Email:</strong>{" "}
                <a className="text-primary hover:underline" href="mailto:enquiries@ramcode.org">enquiries@ramcode.org</a>
              </p>
              <p>
                <strong className="text-foreground">Web:</strong>{" "}
                <a className="text-primary hover:underline" href="https://www.ramcode.org">www.ramcode.org</a>
              </p>
            </address>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a
                  href={`mailto:enquiries@ramcode.org?subject=${encodeURIComponent("Plant monitoring & automation assessment")}`}
                >
                  Send email enquiry <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
                <a href={whatsappLink("I'd like to book the plant monitoring assessment")} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
                <a href="tel:+263779035404">Call now</a>
              </Button>
            </div>
          </div>
          <p className="reveal mt-6 text-center text-sm text-muted-foreground">
            Delivered in Zimbabwe by Ramcode Investments
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4"
          onClick={() => setLightboxImage(null)}
          onKeyDown={(e) => e.key === "Escape" && setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          tabIndex={-1}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center border border-primary/40 bg-background/90 text-primary transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
            aria-label="Close"
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="max-h-[90vh] max-w-6xl">
            <img
              src={lightboxImage.src}
              alt={lightboxImage.caption}
              className="max-h-[80vh] w-auto max-w-full"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="mt-4 text-center text-sm text-muted-foreground">{lightboxImage.caption}</p>
          </div>
        </div>
      )}
    </>
  );
}
