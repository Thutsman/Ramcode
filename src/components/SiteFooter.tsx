import { Link } from "react-router-dom";
import { CONTACT, PROFILE_PDF, navItems } from "@/data/site";

const linkClass = "font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground/90 transition hover:text-primary";

export function SiteFooter() {
  const links = [...navItems, { label: "Contact", to: "/#contact" }];
  return (
    <footer className="relative z-10 border-t border-white/10 bg-card/80 px-6 py-8 md:px-10">
      <div className="container flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <div className="space-y-2">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground/90">
            © 2026 <span className="text-primary">Ramcode Investments</span> · Bulawayo, Zimbabwe · All rights reserved
          </p>
          <p className="font-mono text-[0.62rem] tracking-[0.08em] text-muted-foreground/90">
            <a className="hover:text-primary" href={CONTACT.phoneTel}>{CONTACT.phone}</a> ·{" "}
            <a className="hover:text-primary" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map((item) => (
            <Link key={`${item.to}-${item.label}`} to={item.to} className={linkClass}>
              {item.label}
            </Link>
          ))}
          <a href={PROFILE_PDF} download className={linkClass}>Mining profile (PDF)</a>
          <Link to="/credits" className={linkClass}>Image credits</Link>
        </div>
      </div>
    </footer>
  );
}
