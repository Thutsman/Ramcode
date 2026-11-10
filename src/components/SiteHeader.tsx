import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { navItems } from "@/data/site";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const onMining = pathname.startsWith("/mining");
  const cta = onMining ? { label: "Request a Quote", to: "/mining/request-quote" } : { label: "Start a Project", to: "/#contact" };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Logo />
        <div className="hidden items-center gap-6 md:flex lg:gap-9">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground transition hover:text-primary">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden bg-primary text-primary-foreground hover:bg-primary/90 sm:inline-flex">
            <Link to={cta.to}>{cta.label}</Link>
          </Button>
          <button
            className="grid h-9 w-9 place-items-center border border-white/10 bg-background/60 text-muted-foreground transition hover:border-primary/40 hover:text-primary md:hidden"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-background/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-white/[0.06] py-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground transition hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to={cta.to}
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center bg-primary px-4 py-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-primary-foreground transition hover:bg-primary/90"
            >
              {cta.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
