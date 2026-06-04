import { type ReactNode, useEffect, useRef } from "react";
import {
  ArrowRight,
  Globe2,
  Mail,
  MapPin,
  MonitorCog,
  Phone,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import directorPhoto from "../Thulani.jpg";
import companyLogo from "../Logo.jpg";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Company", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  ["10+", "Years of Engineering Delivery"],
  ["13+", "Industrial, Municipal & Software Projects"],
  ["2020", "Founded in Bulawayo, Zimbabwe"],
  ["2", "Integrated Engineering Divisions"],
];

const services = [
  {
    title: "Electrical & Mechanical Engineering",
    eyebrow: "Industrial · Municipal · Automation",
    icon: Zap,
    points: [
      "Electrical switchgear design, supply & installation",
      "PLC & SCADA programming — Siemens, Delta, Allen-Bradley, Schneider",
      "Motor, pump & valve control systems",
      "Instrumentation & control panel design",
      "Solar street lighting design, DIALux modelling, BCC approvals",
      "IIoT platform development via Node-RED & MQTT",
      "Energy auditing & power systems analysis with ETAP and PowerCAD",
      "Municipal water, wastewater, traffic lighting, and MEP coordination",
      "FIDIC tender documentation, BoQ preparation, and remedial programmes",
    ],
  },
  {
    title: "AI & Web Application Development",
    eyebrow: "SaaS · AI Platforms · Full-Stack",
    icon: MonitorCog,
    points: [
      "Full-stack SaaS platforms with React, TypeScript, Supabase, and Next.js",
      "AI document processing pipelines for invoices, PDFs, and drawings",
      "Multi-tenant ERP systems for accounting, payroll, inventory, and VAT",
      "School and enterprise systems with role-based access",
      "RAG architecture and AI chatbot integration with Gemini, Claude, and GPT",
      "Real estate, KYC, FinTech, and construction intelligence platforms",
      "Web-based SCADA dashboards and real-time monitoring interfaces",
      "Workflow automation for engineering teams and growing businesses",
    ],
  },
];

const projects = [
  {
    badge: "AI · SaaS",
    kind: "ai",
    name: "SnapBuuks",
    desc: "AI-powered accounting automation platform with invoice scanning, reconciliation, and financial reporting. Production SaaS with paying customers.",
    tags: ["React", "Supabase", "AI OCR", "TypeScript"],
    href: "#contact",
    link: "Discuss Platform",
  },
  {
    badge: "Full-Stack · ERP",
    kind: "full",
    name: "SimpliBooks",
    desc: "Multi-tenant accounting ERP with invoicing, payroll, inventory, multi-currency banking reconciliation, and VAT reporting.",
    tags: ["React", "PostgreSQL", "RLS", "Tailwind"],
    href: "https://simplibooks.org",
    link: "simplibooks.org",
  },
  {
    badge: "EdTech · SaaS",
    kind: "full",
    name: "Educore",
    desc: "Multi-school management SaaS with a 9-role hierarchy covering attendance, academics, finance, assignments, assessments, and scheme books.",
    tags: ["TypeScript", "Supabase", "shadcn/ui"],
    href: "#contact",
    link: "Live Platform",
  },
  {
    badge: "AI · Construction",
    kind: "ai",
    name: "ContractorIQ",
    desc: "Construction document intelligence for querying engineering PDFs, extracting BOQs, specs, and drawing data with RAG architecture.",
    tags: ["RAG", "Gemini", "Next.js", "PDF AI"],
    href: "#contact",
    link: "View Project",
  },
  {
    badge: "IIoT · Automation",
    kind: "electrical",
    name: "Oceans Milling Automation",
    desc: "Deployed weighbridge and factory automation system with real-time production tracking, QC checks, shift reporting, and live dashboards.",
    tags: ["Node-RED", "MQTT", "PLC", "Real-time"],
    href: "#contact",
    link: "Case Study",
  },
  {
    badge: "IIoT · Reporting",
    kind: "electrical",
    name: "Business Reporting System",
    desc: "Custom industrial reporting platform built for production and operations management. Real-time data capture, shift-based reporting, automated summaries, and dashboard visualisations for factory floor monitoring and management decision-making.",
    tags: ["Node-RED", "MQTT", "React", "Real-time", "Supabase"],
    href: "#contact",
    link: "View System",
  },
  {
    badge: "FinTech · PropTech",
    kind: "full",
    name: "Mukamba FinTech",
    desc: "Rent-to-buy property platform with KYC authentication, property listings, affordability calculators, and role-based dashboards.",
    tags: ["React", "KYC", "Supabase", "PropTech"],
    href: "#contact",
    link: "View Project",
  },
  {
    badge: "MEP · Civil",
    kind: "electrical",
    name: "Calundike Exports — Shop Alterations",
    desc: "Subcontracted MEP design and supervision for a Bulawayo shop addition covering electrical reticulation, fire alarm, CCTV, lightning protection, HVAC, plumbing, drainage, and FIDIC bidding documents.",
    tags: ["Electrical Design", "HVAC", "Fire Alarm", "FIDIC BoQ", "CCTV"],
    href: "#contact",
    link: "Case Study",
  },
  {
    badge: "Assessment · Wastewater",
    kind: "electrical",
    name: "Aisleby 3 — BNR Plant Assessment",
    desc: "Full electromechanical condition assessment of a dormant Bio-Nutrient Removal wastewater treatment plant, with MCC, pump, bioreactor, clarifier, RAS/WAS, and SCADA remediation scope.",
    tags: ["PLC/MCC", "Pump Systems", "SCADA", "BNR Process"],
    href: "#contact",
    link: "Assessment Report",
  },
  {
    badge: "Streetlighting · Design",
    kind: "electrical",
    name: "Solar Streetlighting Portfolio",
    desc: "Lead electrical designer for multiple BCC-approved solar streetlighting schemes, including Norwood Tracks, Umganini Development, and Glengary Residential.",
    tags: ["DIALux", "EN 13201", "BCC Approved", "Solar"],
    href: "#contact",
    link: "Design Portfolio",
  },
];

const capabilities = [
  "PLC/SCADA Programming",
  "React & TypeScript",
  "ETAP / PowerCAD",
  "Supabase & PostgreSQL",
  "Node-RED & MQTT",
  "AI / RAG Architecture",
  "FIDIC Documentation",
  "Gemini · Claude · GPT",
];

const credentials = [
  ["2020", "Company Founded", "Ramcode Investments established in Bulawayo, Zimbabwe"],
  [
    "10+",
    "Field Engineering Base",
    "Experience across municipal water, wastewater, traffic, lighting, and industrial systems",
  ],
  [
    "2023",
    "Digital Product Division Expanded",
    "AI, SaaS, ERP, and automation platforms added to the company's delivery portfolio",
  ],
  [
    "Now",
    "Regional Delivery",
    "Serving Zimbabwe, South Africa, the SADC region, and remote-first software clients",
  ],
];

const serviceOptions = [
  "Electromechanical / Industrial Automation",
  "Solar Street Lighting Design",
  "PLC / SCADA Programming",
  "AI-Powered Web Application",
  "SaaS Platform Development",
  "IIoT / Web SCADA Dashboard",
  "Engineering Consulting",
  "Other",
];

function useRevealAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring || window.matchMedia("(pointer: coarse)").matches) {
      return undefined;
    }

    document.body.classList.add("cursor-none");
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let frame = 0;

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.transform = `translate3d(${mouseX - 5}px, ${mouseY - 5}px, 0)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX - 18) * 0.14;
      ringY += (mouseY - ringY - 18) * 0.14;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    frame = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove("cursor-none");
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[1000] hidden h-2.5 w-2.5 rounded-full bg-primary mix-blend-screen md:block"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-9 w-9 rounded-full border border-primary/50 md:block"
      />
    </>
  );
}

function Logo() {
  return (
    <a href="#" className="flex items-center gap-3 text-foreground">
      <span className="inline-flex shrink-0 overflow-hidden rounded-md bg-white p-1 shadow-sm ring-1 ring-white/20">
        <img
          src={companyLogo}
          alt="Ramcode Investments logo"
          className="h-10 w-auto max-w-[140px] object-contain object-left"
        />
      </span>
      <span className="hidden font-display text-xl font-bold tracking-[0.16em] sm:inline">
        RAM<span className="text-primary">CODE</span>
      </span>
    </a>
  );
}

function SectionHeading({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="reveal mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="section-kicker">{kicker}</p>
        <h2 className="max-w-2xl font-display text-4xl font-bold leading-none tracking-[0.03em] text-foreground md:text-6xl">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative z-10 overflow-hidden px-6 pb-20 pt-32 md:min-h-screen md:px-10 md:pt-36">
      <div className="absolute left-1/2 top-24 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="container grid items-center gap-14 md:grid-cols-[1.02fr_0.98fr]">
        <div className="reveal">
          <p className="section-kicker">Bulawayo, Zimbabwe · Est. 2020</p>
          <h1 className="mt-6 font-display text-6xl font-bold leading-[0.94] tracking-[0.02em] text-foreground md:text-8xl">
            Engineering
            <br />
            <span className="text-primary">Systems That</span>
            <br />
            Scale.
          </h1>
          <p className="mt-5 font-display text-2xl font-light uppercase tracking-[0.12em] text-muted-foreground">
            Electrical · Mechanical · Automation · AI Software
          </p>
          <p className="mt-8 max-w-xl text-base leading-8 text-muted-foreground">
            <strong className="font-medium text-foreground">Ramcode Investments</strong>{" "}
            is a Bulawayo-based engineering and technology company delivering
            industrial electrical systems, automation platforms, and production-ready
            AI web applications for businesses, municipalities, and growing teams.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#projects">
                View Our Work <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="#about">About Ramcode</a>
            </Button>
          </div>
        </div>

        <div className="reveal relative hidden min-h-[520px] place-items-center md:grid">
          <div className="absolute h-[440px] w-[440px] rounded-full border border-primary/30 animate-orbit" />
          <div className="absolute h-[360px] w-[360px] rounded-full border border-primary/20 animate-orbit-reverse" />
          <div className="absolute h-[270px] w-[270px] rounded-full border border-primary/25 animate-orbit" />
          <Card className="relative grid h-56 w-56 place-items-center rounded-full border-primary/40 bg-secondary/90 text-center shadow-glow">
            <div>
              <p className="font-mono text-[0.65rem] uppercase leading-6 tracking-[0.22em] text-primary">
                Industrial
                <br />
                Systems
              </p>
              <div className="mx-auto my-4 h-px w-12 bg-primary/50" />
              <p className="font-mono text-[0.65rem] uppercase leading-6 tracking-[0.22em] text-primary">
                Digital
                <br />
                Platforms
              </p>
            </div>
          </Card>
          {[
            ["PLC / SCADA", "right-4 top-20 border-primary text-primary"],
            ["React · TypeScript", "bottom-28 left-4"],
            ["Node-RED · MQTT", "right-0 top-1/2"],
            ["AI · Supabase", "bottom-16 right-20 border-primary text-primary"],
          ].map(([label, className], index) => (
            <span
              key={label}
              className={cn(
                "absolute border border-white/10 bg-secondary px-4 py-2 font-mono text-[0.58rem] uppercase tracking-[0.18em] text-muted-foreground shadow-card animate-float",
                className,
              )}
              style={{ animationDelay: `${index * 350}ms` }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="relative z-10 border-y border-white/10 bg-card/80 px-6 py-8 backdrop-blur md:px-10">
      <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([number, label]) => (
          <div key={label} className="reveal border-white/10 lg:border-r lg:pr-8 last:border-r-0">
            <p className="font-display text-5xl font-bold leading-none text-primary">
              {number}
            </p>
            <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground/70">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative z-10 bg-secondary/45 px-6 py-20 md:px-10 md:py-28">
      <div className="container">
        <SectionHeading kicker="What We Build" title="Two Divisions. One Engineering Partner." />
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="reveal border-0 bg-background/95 p-8 md:p-12">
                <CardHeader className="mb-8 border-b border-white/10 pb-8">
                  <div className="flex items-start gap-5">
                    <div className="grid h-14 w-14 shrink-0 place-items-center border border-primary/30 bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{service.title}</CardTitle>
                      <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-primary">
                        {service.eyebrow}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const badgeClass = {
    ai: "border-primary/35 bg-primary/10 text-primary",
    electrical: "border-sky-400/30 bg-sky-400/10 text-sky-300",
    full: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  };

  return (
    <section id="projects" className="relative z-10 px-6 py-20 md:px-10 md:py-28">
      <div className="container">
        <SectionHeading kicker="Portfolio" title="Deployed & Production-Ready.">
          <p className="max-w-sm text-sm leading-7 text-muted-foreground">
            A mix of software platforms, industrial automation, municipal
            infrastructure, and AI systems delivered under the Ramcode portfolio.
          </p>
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.name}
              className="reveal group relative overflow-hidden p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/45"
            >
              <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              <span
                className={cn(
                  "inline-flex border px-3 py-1 font-mono text-[0.55rem] uppercase tracking-[0.2em]",
                  badgeClass[project.kind as keyof typeof badgeClass],
                )}
              >
                {project.badge}
              </span>
              <CardTitle className="mt-5 normal-case">{project.name}</CardTitle>
              <CardDescription className="mt-3">{project.desc}</CardDescription>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/10 bg-white/[0.04] px-2 py-1 font-mono text-[0.58rem] tracking-[0.08em] text-muted-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                className="mt-7 inline-flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-primary/80 transition hover:text-primary"
              >
                {project.link} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative z-10 bg-secondary/45 px-6 py-20 md:px-10 md:py-28">
      <div className="container grid gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
        <div className="reveal">
          <p className="section-kicker">The Company</p>
          <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground/70">
            Ramcode Investments · Bulawayo, Zimbabwe
          </p>
          <h2 className="mt-2 font-display text-6xl font-bold leading-none tracking-[0.04em]">
            Built for the Field and the Cloud.
          </h2>
          <p className="mt-2 font-display text-2xl font-light uppercase tracking-[0.12em] text-primary">
            Industrial Engineering · AI Platforms · Business Systems
          </p>
          <div className="mt-8 space-y-6 text-base leading-8 text-muted-foreground">
            <p>
              Ramcode Investments combines{" "}
              <strong className="font-medium text-foreground">
                field-tested electromechanical engineering
              </strong>{" "}
              with modern software delivery. The company serves clients that need
              practical systems: control panels that work on site, dashboards that
              reveal operations in real time, and business platforms that can scale.
            </p>
            <p>
              Our work spans{" "}
              <strong className="font-medium text-foreground">
                PLC systems, street lighting networks, IIoT automation, SaaS products,
                ERP platforms, and AI document intelligence
              </strong>
              . Ramcode is structured for organisations that want one accountable
              partner across electrical infrastructure and digital transformation.
            </p>
            <p>
              The company is led by{" "}
              <strong className="font-medium text-foreground">
                T. Dube, Director of Ramcode Investments
              </strong>
              , with delivery experience across municipal infrastructure, industrial
              automation, and production software platforms.
            </p>
          </div>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {capabilities.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-3 border border-white/10 bg-background/70 px-4 py-3 text-sm text-muted-foreground transition hover:border-primary/40"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <figure className="reveal overflow-hidden border border-primary/35 bg-background/80 p-3 shadow-card">
            <div className="aspect-[4/5] overflow-hidden bg-primary/10">
              <img
                src={directorPhoto}
                alt="T. Dube, Director of Ramcode Investments"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <figcaption className="mt-4 border-t border-white/10 pt-4">
              <p className="font-display text-2xl font-bold tracking-[0.04em] text-foreground">
                T. Dube
              </p>
              <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-primary">
                Director · Ramcode Investments
              </p>
            </figcaption>
          </figure>

        <Card className="reveal relative p-8 md:p-10">
          <span className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-primary/60" />
          <span className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-primary/60" />
          <div className="mb-8 flex items-center gap-4">
            <div className="grid h-16 w-16 place-items-center border border-primary/35 bg-primary/10 font-display text-3xl font-bold text-primary">
              RC
            </div>
            <div>
              <CardTitle>Ramcode Investments</CardTitle>
              <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground/70">
                Electrical · Mechanical · Automation · AI Software
              </p>
            </div>
          </div>
          <div className="space-y-5">
            {credentials.map(([year, title, text]) => (
              <div key={title} className="grid grid-cols-[58px_1fr] gap-4">
                <p className="font-mono text-xs text-primary">{year}</p>
                <div>
                  <p className="font-medium text-foreground">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative z-10 px-6 py-20 md:px-10 md:py-28">
      <div className="container">
        <SectionHeading kicker="Get In Touch" title="Start Your Engineering or Software Project." />
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr]">
          <div className="reveal space-y-6">
            {[
              {
                icon: MapPin,
                label: "Location",
                value: "17 Grenville Ave, West Somerton\nBulawayo, Zimbabwe",
              },
              { icon: Phone, label: "Phone / WhatsApp", value: "+263 779 035 404" },
              { icon: Mail, label: "Email", value: "ramcodecompany@gmail.com" },
              {
                icon: Globe2,
                label: "Region",
                value: "Zimbabwe · South Africa\nSADC Region · Remote Worldwide",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center border border-white/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground/70">
                      {item.label}
                    </p>
                    <p className="mt-1 whitespace-pre-line text-base leading-7 text-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <Card className="reveal p-6 md:p-8">
            <form
              className="space-y-5"
              action="mailto:ramcodecompany@gmail.com"
              method="post"
              encType="text/plain"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" name="name" placeholder="John Smith" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Service Required</Label>
                <Select name="service">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service..." />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Describe your project or enquiry..."
                />
              </div>
              <Button className="w-full" type="submit">
                Send Message <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

function App() {
  useRevealAnimation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/80 px-6 py-4 backdrop-blur-xl md:px-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <Logo />
          <div className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground transition hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </div>
          <Button asChild size="sm" variant="outline">
            <a href="#contact">Start a Project</a>
          </Button>
        </nav>
      </header>

      <main>
        <Hero />
        <Stats />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-card/80 px-6 py-8 md:px-10">
        <div className="container flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground/70">
            © 2026 <span className="text-primary">Ramcode Investments</span> ·
            Bulawayo, Zimbabwe · All rights reserved
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground/70 transition hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
