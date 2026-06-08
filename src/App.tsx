import { type ReactNode, useEffect, useRef } from "react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  ClipboardList,
  Gauge,
  Globe2,
  Lightbulb,
  Mail,
  MapPin,
  MonitorCog,
  Phone,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import directorPhoto from "../Thulani.jpg";
import companyLogo from "../Logo.jpg";
import motorTestingImg from "../motor-testing.jpg";
import streetlightingImg from "../streetlighting.jpg";
import snapbuuksImg from "../snapbuuks-app.jpg";
import panelInstallPhoto from "../20190213_152616.jpg";
import transformerTestingPhoto from "../20220616_123346.jpg";
import simplibooksImg from "../simplibooks-app.jpg";
import businessReportingImg from "../business-reporting.png";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Clients", href: "#clients" },
  { label: "Company", href: "#about" },
];

const stats = [
  ["10+", "Years Engineering Experience"],
  ["Industrial", "& Municipal Projects Delivered"],
  ["2020", "Founded in Bulawayo, Zimbabwe"],
  ["2", "Engineering + Digital Divisions"],
];

const heroPillars = [
  {
    title: "Industrial Engineering",
    points: ["PLC/SCADA", "Instrumentation & Control", "Power Systems"],
    accent: "text-sky-300 border-sky-400/30 bg-sky-400/10",
  },
  {
    title: "Digital Solutions",
    points: ["Web Applications", "AI Automation", "IoT Platforms"],
    accent: "text-primary border-primary/30 bg-primary/10",
  },
];

const primaryServices = [
  {
    title: "Industrial Automation & PLC/SCADA",
    icon: Zap,
    desc: "Design, programming, commissioning, and optimisation of industrial control systems across Siemens, Delta, Allen-Bradley, and Schneider platforms.",
    outcomes: ["Reliable process control", "Real-time operations visibility", "Reduced downtime and faults"],
  },
  {
    title: "Instrumentation & Control Engineering",
    icon: Gauge,
    desc: "Instrumentation architecture, P&IDs, control loops, flow metering, RTU design, and SCADA integration for water and industrial systems.",
    outcomes: ["Accurate measurement", "Stable process regulation", "Audit-ready engineering documentation"],
  },
  {
    title: "Power Systems Engineering",
    icon: BarChart3,
    desc: "Load analysis, transformer and switchgear design, protection coordination, ETAP/PowerCAD studies, and electrical infrastructure assessments.",
    outcomes: ["Safer power distribution", "Compliance-aligned designs", "Optimised network performance"],
  },
];

const secondaryServices = [
  {
    title: "Street Lighting",
    icon: Lightbulb,
    desc: "DIALux-based design, BCC submissions, installation supervision, and commissioning for solar and conventional lighting schemes.",
  },
  {
    title: "Electrical Testing & Motor Management",
    icon: Activity,
    desc: "Megger and insulation resistance testing, transformer condition assessment, and motor management for critical systems.",
  },
  {
    title: "Project & Contract Management",
    icon: ClipboardList,
    desc: "PRINCE2/FIDIC-aligned delivery management, procurement support, bid evaluation, and multidisciplinary site coordination.",
  },
];

const digitalSupport = [
  {
    title: "Web Applications",
    icon: MonitorCog,
    desc: "Business applications, ERP modules, and operational dashboards tailored to engineering workflows.",
  },
  {
    title: "AI Automation",
    icon: Brain,
    desc: "Document intelligence, automated reporting, and AI-assisted decision support for technical and operational teams.",
  },
  {
    title: "IoT Platforms",
    icon: Workflow,
    desc: "Node-RED, MQTT, and cloud-connected telemetry for industrial monitoring and data-driven operations.",
  },
];

const serviceEvidence = [
  {
    title: "Electrical Panel Design and Installation",
    description:
      "Control panel design, assembly, wiring, and commissioning for pump stations, industrial plants, and municipal infrastructure.",
    image: panelInstallPhoto,
  },
  {
    title: "Transformer Testing",
    description:
      "On-site electrical testing and condition assessment using specialist diagnostic equipment for transformers and switchgear.",
    image: transformerTestingPhoto,
  },
];

const projects = [
  {
    badge: "AI · SaaS",
    kind: "ai",
    name: "SnapBuuks",
    image: snapbuuksImg,
    desc: "AI-powered accounting automation with invoice intelligence, reconciliation, and VAT-ready financial workflows.",
    tags: ["React", "Supabase", "AI OCR", "TypeScript"],
    href: "https://snapbuuks.app",
    link: "Visit snapbuuks.app",
  },
  {
    badge: "IIoT · Automation",
    kind: "electrical",
    name: "Oceans Milling Automation",
    desc: "Factory automation with real-time production tracking, quality checks, and shift-level reporting dashboards.",
    tags: ["Node-RED", "MQTT", "PLC", "Real-time"],
    href: "#contact",
    link: "Case Study",
  },
  {
    badge: "Streetlighting · Design & Install",
    kind: "electrical",
    name: "Solar Streetlighting Portfolio",
    image: streetlightingImg,
    desc: "BCC-approved solar streetlighting projects from design and modelling through to installation and commissioning.",
    tags: ["DIALux", "EN 13201", "Solar", "Installation"],
    href: "#contact",
    link: "Design Portfolio",
  },
  {
    badge: "Water · Wastewater · Design",
    kind: "electrical",
    name: "Water & Wastewater Treatment Plant Assessment & Design",
    image: motorTestingImg,
    desc: "Electromechanical assessment and design for water and wastewater treatment plants — covering MCC, motors, pumps, instrumentation, SCADA, and full rehabilitation scope definition.",
    tags: ["Megger Testing", "Transformer Inspection", "PLC/MCC", "SCADA", "Plant Design"],
    href: "#contact",
    link: "Discuss Project",
  },
  {
    badge: "IIoT · Reporting",
    kind: "electrical",
    name: "Business Reporting System",
    image: businessReportingImg,
    desc: "Real-time reporting platform for operations management with shift reports, automated summaries, and decision dashboards.",
    tags: ["Node-RED", "MQTT", "React", "Supabase"],
    href: "#contact",
    link: "View System",
  },
  {
    badge: "Full-Stack · ERP",
    kind: "full",
    name: "SimpliBooks",
    image: simplibooksImg,
    desc: "Multi-tenant accounting ERP for invoicing, payroll, inventory, reconciliation, and VAT reporting.",
    tags: ["React", "PostgreSQL", "RLS", "Tailwind"],
    href: "https://simplibooks.org",
    link: "simplibooks.org",
  },
];

const caseStudies = [
  {
    title: "Wastewater Treatment Plant Rehabilitation",
    client: "Municipal Water & Wastewater",
    challenge: "Dormant treatment assets, unreliable control systems, and high operational risk.",
    solution: "Electromechanical assessment, MCC and motor testing, SCADA scope definition, phased remedial programme.",
    outcome: "Clear, fundable rehabilitation roadmap and reduced restart risk.",
  },
  {
    title: "Industrial Automation Systems",
    client: "Manufacturing & Milling",
    challenge: "Limited visibility into production, QC, and shift performance.",
    solution: "PLC/SCADA integration, IIoT telemetry, real-time dashboards, and reporting automation.",
    outcome: "Faster decision-making and improved production accountability.",
  },
  {
    title: "Street Lighting Projects",
    client: "Urban Infrastructure Development",
    challenge: "Need for compliant, efficient lighting across expanding urban corridors.",
    solution: "DIALux modelling, standards-based design, approvals support, and installation supervision.",
    outcome: "Energy-efficient lighting networks delivered to municipal standards.",
  },
  {
    title: "Water Infrastructure Projects",
    client: "Municipal Utilities",
    challenge: "Aging infrastructure and inconsistent instrumentation data.",
    solution: "Instrumentation redesign, control loop improvements, and automation upgrades.",
    outcome: "More stable plant operation and stronger process visibility.",
  },
  {
    title: "Digital Platforms & SaaS Solutions",
    client: "SMEs & Enterprise Operations",
    challenge: "Fragmented financial and operational workflows across teams.",
    solution: "Custom SaaS products, ERP modules, AI automation, and role-based access.",
    outcome: "Streamlined workflows and measurable reporting consistency.",
  },
];

const industries = [
  "Municipal Infrastructure",
  "Industrial Manufacturing",
  "Water & Wastewater",
  "Energy & Utilities",
  "Construction & Civil",
  "SMEs & Enterprise Operations",
];

const whyChoose = [
  "Multi-disciplinary engineering capability in one partner",
  "Strong automation depth from field devices to dashboards",
  "Software development that supports physical engineering outcomes",
  "Local delivery using international-standard technologies",
];

const capabilities = [
  "PLC/SCADA Programming",
  "Instrumentation & P&IDs",
  "ETAP / PowerCAD",
  "Node-RED & MQTT",
  "RAG / AI Automation",
  "PRINCE2 & FIDIC Delivery",
];

const credentials = [
  [
    "2012",
    "City of Bulawayo — Electrical Engineer",
    "12 years in the Water Department responsible for the design, procurement, installation and commissioning of electrical, instrumentation and control systems across water treatment plants, wastewater treatment plants, pump stations, traffic lighting, and radio communication infrastructure.",
  ],
  [
    "2014",
    "B.Eng Electronic Engineering",
    "National University of Science and Technology (NUST), Bulawayo, Zimbabwe.",
  ],
  [
    "2020",
    "Ramcode Investments Founded",
    "Established to extend field-proven municipal engineering delivery to private and commercial clients, incorporating IIoT, automation, and AI software platforms.",
  ],
  [
    "CEA",
    "Certified Energy Auditor",
    "Association of Energy Engineers — membership #90987. PRINCE2 Foundation certified project manager (certificate #GR656227718TD).",
  ],
  [
    "2024",
    "Technical Director, Ramcode",
    "Transitioned to full-time leadership of Ramcode after 12 years at the City of Bulawayo, driving industrial automation, digital platforms, and AI-enabled engineering solutions across the SADC region.",
  ],
];

const serviceOptions = [
  "Industrial Automation / PLC / SCADA",
  "Instrumentation & Control Engineering",
  "Power Systems Engineering",
  "Street Lighting Design & Installation",
  "Electrical Testing & Motor Management",
  "Project & Contract Management",
  "Web Application Development",
  "AI Automation",
  "IoT Platform Development",
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
        <img src={companyLogo} alt="Ramcode Investments logo" className="h-10 w-auto max-w-[140px] object-contain object-left" />
      </span>
      <span className="hidden font-display text-xl font-bold tracking-[0.16em] sm:inline">
        RAM<span className="text-primary">CODE</span>
      </span>
    </a>
  );
}

function SectionHeading({ kicker, title, children }: { kicker: string; title: string; children?: ReactNode }) {
  return (
    <div className="reveal mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="section-kicker">{kicker}</p>
        <h2 className="max-w-3xl font-display text-4xl font-bold leading-none tracking-[0.03em] text-foreground md:text-6xl">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative z-10 overflow-hidden px-6 pb-20 pt-32 md:px-10 md:pt-36">
      <div className="absolute left-1/2 top-24 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="container grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <div className="reveal">
          <p className="section-kicker">Bulawayo, Zimbabwe · Est. 2020</p>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-[0.02em] text-foreground md:text-7xl">
            Engineering Systems
            <br />
            <span className="text-primary">That Scale</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
            Ramcode delivers engineering expertise combined with modern software, automation, AI, and industrial digitalization.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#contact">
                Start a Project <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
              <a href="#projects">View Our Work</a>
            </Button>
          </div>
        </div>

        <div className="reveal hero-signal-system relative">
          <div className="hero-signal-line" aria-hidden />
          <div className="hero-signal-pulse" aria-hidden />
          <div className="hero-signal-node hero-signal-node-1" aria-hidden />
          <div className="hero-signal-node hero-signal-node-2" aria-hidden />
          <div className="hero-signal-arrow hero-signal-arrow-1" aria-hidden />
          <div className="hero-signal-arrow hero-signal-arrow-2" aria-hidden />

          <div className="grid gap-4">
            {heroPillars.map((pillar, index) => (
              <Card
                key={pillar.title}
                className={cn(
                  "hero-signal-card border-white/10 bg-background/90 p-6",
                  index === 0 && "hero-signal-card-1",
                  index === 1 && "hero-signal-card-2",
                )}
              >
                <CardHeader className="relative p-0">
                  <div className={cn("inline-flex w-fit border px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.18em]", pillar.accent)}>
                    {pillar.title}
                  </div>
                  <div className="hero-status-indicator absolute right-0 top-0 inline-flex items-center gap-2 border border-primary/25 bg-primary/10 px-2 py-1 font-mono text-[0.52rem] uppercase tracking-[0.15em] text-primary">
                    <span className="hero-status-dot" />
                    Online
                  </div>
                </CardHeader>
                <CardContent className="mt-4 p-0">
                  <ul className="space-y-2">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
            <Card className="hero-signal-card hero-signal-card-3 border-primary/30 bg-primary/10 p-5">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-primary">
                Positioning
              </p>
              <p className="mt-2 text-sm leading-7 text-foreground">
                Software capabilities at Ramcode do not replace engineering delivery. They strengthen field engineering through better control, visibility, and decision support.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="relative z-10 border-y border-white/10 bg-card/80 px-6 py-8 backdrop-blur md:px-10">
      <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([value, label]) => (
          <div key={label} className="reveal border-white/10 lg:border-r lg:pr-8 last:border-r-0">
            <p className="font-display text-5xl font-bold leading-none text-primary">{value}</p>
            <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground/70">{label}</p>
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
        <SectionHeading kicker="Services" title="Structured for Clarity and Delivery">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#contact">Start a Project</a>
          </Button>
        </SectionHeading>

        <div className="reveal mb-6 inline-flex border border-primary/30 bg-primary/10 px-4 py-2 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-primary">
          Primary Services
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {primaryServices.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="reveal border-primary/30 bg-background/95 p-7">
                <CardHeader className="p-0">
                  <div className="mb-4 grid h-12 w-12 place-items-center border border-primary/30 bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="mt-4 p-0">
                  <CardDescription className="text-sm leading-7">{service.desc}</CardDescription>
                  <ul className="mt-4 space-y-2">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/80" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="reveal mb-6 mt-12 inline-flex border border-white/15 bg-background/70 px-4 py-2 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
          Secondary Services
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {secondaryServices.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="reveal border-white/10 bg-background/90 p-6">
                <CardHeader className="p-0">
                  <div className="mb-3 grid h-10 w-10 place-items-center border border-white/15 bg-white/[0.04]">
                    <Icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-base">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="mt-3 p-0">
                  <CardDescription>{service.desc}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="reveal mt-12 border border-sky-400/20 bg-sky-400/[0.06] p-6">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-sky-300">Engineering + Software Positioning</p>
          <p className="mt-3 text-sm leading-7 text-foreground">
            Ramcode uses digital platforms to support engineering execution: monitoring assets, automating reports, and creating visibility for municipal and industrial operations.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {digitalSupport.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="border border-sky-400/20 bg-background/70 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Icon className="h-4 w-4 text-sky-300" />
                    <p className="font-medium text-foreground">{item.title}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="reveal mt-16">
          <p className="section-kicker">Services Rendered</p>
          <h3 className="mt-3 font-display text-4xl font-bold tracking-[0.03em] text-foreground md:text-5xl">Delivered On Site</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {serviceEvidence.map((service) => (
              <figure key={service.title} className="overflow-hidden border border-white/10 bg-background/95 shadow-card">
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                </div>
                <figcaption className="border-t border-white/10 p-5">
                  <p className="font-display text-2xl font-bold tracking-[0.03em] text-foreground">{service.title}</p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{service.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
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
        <SectionHeading kicker="Featured Projects" title="Industrial, Infrastructure, and Digital Delivery">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#contact">Discuss Your Project</a>
          </Button>
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.name} className="reveal group relative overflow-hidden p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/45">
              <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              {"image" in project && project.image && (
                <div className="relative -mx-7 -mt-7 mb-6 h-44 overflow-hidden">
                  <img src={project.image as string} alt={project.name} className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/70" />
                </div>
              )}
              <span className={cn("inline-flex border px-3 py-1 font-mono text-[0.55rem] uppercase tracking-[0.2em]", badgeClass[project.kind as keyof typeof badgeClass])}>
                {project.badge}
              </span>
              <CardTitle className="mt-5 normal-case">{project.name}</CardTitle>
              <CardDescription className="mt-3">{project.desc}</CardDescription>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="border border-white/10 bg-white/[0.04] px-2 py-1 font-mono text-[0.58rem] tracking-[0.08em] text-muted-foreground/80">
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

function CaseStudies() {
  return (
    <section id="case-studies" className="relative z-10 bg-secondary/45 px-6 py-20 md:px-10 md:py-28">
      <div className="container">
        <SectionHeading kicker="Credibility" title="Case Studies and Project Highlights">
          <p className="max-w-md text-sm leading-7 text-muted-foreground">
            Each engagement is structured around operational challenges, practical engineering solutions, and measurable outcomes.
          </p>
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((study) => (
            <Card key={study.title} className="reveal border-white/10 bg-background/90 p-6">
              <CardHeader className="p-0">
                <div className="inline-flex w-fit border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[0.55rem] uppercase tracking-[0.18em] text-primary">
                  {study.client}
                </div>
                <CardTitle className="mt-4 text-xl">{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="mt-4 space-y-3 p-0 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Challenge:</strong> {study.challenge}</p>
                <p><strong className="text-foreground">Solution:</strong> {study.solution}</p>
                <p><strong className="text-foreground">Outcome:</strong> {study.outcome}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientTrust() {
  return (
    <section id="clients" className="relative z-10 px-6 py-20 md:px-10 md:py-28">
      <div className="container grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="reveal border-white/10 bg-background/90 p-7">
          <CardHeader className="p-0">
            <p className="section-kicker">Industries Served</p>
            <CardTitle className="text-3xl md:text-4xl">Municipal, Industrial, Infrastructure</CardTitle>
          </CardHeader>
          <CardContent className="mt-6 p-0">
            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <span key={industry} className="border border-primary/20 bg-primary/[0.06] px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-primary">
                  {industry}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="reveal border-primary/25 bg-primary/[0.06] p-7">
          <CardHeader className="p-0">
            <p className="section-kicker">Why Clients Choose Ramcode</p>
            <CardTitle className="text-3xl md:text-4xl">Trusted Delivery Model</CardTitle>
          </CardHeader>
          <CardContent className="mt-6 p-0">
            <ul className="space-y-3">
              {whyChoose.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-7 text-foreground">
                  <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#contact">Start a Project</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative z-10 bg-secondary/45 px-6 py-20 md:px-10 md:py-28">
      <div className="container grid gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
        <div className="reveal">
          <p className="section-kicker">Company Profile</p>
          <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground/70">
            Ramcode Investments · Bulawayo, Zimbabwe
          </p>
          <h2 className="mt-2 font-display text-5xl font-bold leading-none tracking-[0.04em] md:text-6xl">
            Engineering Depth. Digital Execution.
          </h2>
          <div className="mt-8 space-y-4 text-base leading-8 text-muted-foreground">
            <p>
              Ramcode is led by <strong className="font-medium text-foreground">Thulani Dube</strong>, an electrical engineer with over 12 years of municipal infrastructure delivery at the City of Bulawayo — covering water treatment, wastewater treatment, pump stations, traffic lighting, and high-voltage systems.
            </p>
            <p>
              That field experience underpins everything Ramcode delivers: from PLC and instrumentation design to AI platforms and automation software.
            </p>
          </div>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {capabilities.map((skill) => (
              <div key={skill} className="flex items-center gap-3 border border-white/10 bg-background/70 px-4 py-3 text-sm text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <figure className="reveal overflow-hidden border border-primary/35 bg-background/80 p-3 shadow-card">
            <div className="aspect-[4/5] overflow-hidden bg-primary/10">
              <img src={directorPhoto} alt="T. Dube, Director of Ramcode Investments" className="h-full w-full object-cover object-top" />
            </div>
            <figcaption className="mt-4 border-t border-white/10 pt-4">
              <p className="font-display text-2xl font-bold tracking-[0.04em] text-foreground">Thulani Dube</p>
              <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-primary">Technical Director · Ramcode Investments</p>
              <p className="mt-0.5 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted-foreground/70">CEA · PRINCE2 Foundation · B.Eng Electronic Engineering</p>
            </figcaption>
          </figure>

          <Card className="reveal relative p-8 md:p-10">
            <span className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-primary/60" />
            <span className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-primary/60" />
            <p className="section-kicker">About the Director</p>
            <CardTitle className="mt-3 text-2xl">Thulani Dube</CardTitle>
            <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-primary">
              Technical Director · Ramcode Investments
            </p>
            <div className="mt-6 space-y-3">
              {[
                ["12+ Yrs", "Municipal engineering — water & wastewater treatment, pump stations, traffic lighting"],
                ["AI Eng", "RAG architecture, LLM orchestration, vector databases — 3 production AI apps shipped (SnapBuuks, ContractorIQ, Fluxpoint)"],
                ["Full-Stack", "React, Next.js 14, TypeScript, Node.js, Python, Supabase, AWS — production SaaS platforms with paying customers"],
                ["B.Eng", "Electronic Engineering — NUST Bulawayo, 2014"],
                ["CEA", "Certified Energy Auditor — Association of Energy Engineers #90987"],
                ["PRINCE2", "Foundation Certificate in Project Management"],
              ].map(([label, text]) => (
                <div key={label} className="flex items-start gap-4 border border-white/10 bg-background/60 px-4 py-3">
                  <p className="shrink-0 pt-0.5 font-mono text-xs font-bold text-primary">{label}</p>
                  <p className="text-sm leading-6 text-muted-foreground">{text}</p>
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
        <SectionHeading kicker="Get In Touch" title="Start Your Engineering or Software Project">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="mailto:ramcodecompany@gmail.com">Email Ramcode</a>
          </Button>
        </SectionHeading>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr]">
          <div className="reveal space-y-6">
            {[
              { icon: MapPin, label: "Location", value: "17 Grenville Ave, West Somerton\nBulawayo, Zimbabwe" },
              { icon: Phone, label: "Phone / WhatsApp", value: "+263 779 035 404" },
              { icon: Mail, label: "Email", value: "ramcodecompany@gmail.com" },
              { icon: Globe2, label: "Region", value: "Zimbabwe · South Africa\nSADC Region · Remote Worldwide" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center border border-white/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground/70">{item.label}</p>
                    <p className="mt-1 whitespace-pre-line text-base leading-7 text-foreground">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Card className="reveal p-6 md:p-8">
            <form className="space-y-5" action="mailto:ramcodecompany@gmail.com" method="post" encType="text/plain">
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
                <Label htmlFor="message">Project Brief</Label>
                <Textarea id="message" name="message" placeholder="Describe scope, timeline, and location..." />
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" type="submit">
                Start a Project <ArrowRight className="h-4 w-4" />
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
              <a key={item.href} href={item.href} className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground transition hover:text-primary">
                {item.label}
              </a>
            ))}
          </div>
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#contact">Start a Project</a>
          </Button>
        </nav>
      </header>

      <main>
        <Hero />
        <Stats />
        <Services />
        <Projects />
        <CaseStudies />
        <ClientTrust />
        <About />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-card/80 px-6 py-8 md:px-10">
        <div className="container flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground/70">
            © 2026 <span className="text-primary">Ramcode Investments</span> · Bulawayo, Zimbabwe · All rights reserved
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[...navItems, { label: "Contact", href: "#contact" }].map((item) => (
              <a key={`${item.href}-${item.label}`} href={item.href} className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground/70 transition hover:text-primary">
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
