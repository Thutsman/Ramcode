import { Link } from "react-router-dom";
import companyLogo from "../../Logo.jpg";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 text-foreground">
      <span className="inline-flex shrink-0 overflow-hidden rounded-md bg-white p-1 shadow-sm ring-1 ring-white/20">
        <img src={companyLogo} alt="Ramcode Investments logo" className="h-10 w-auto max-w-[140px] object-contain object-left" />
      </span>
      <span className="hidden font-display text-xl font-bold tracking-[0.16em] sm:inline">
        RAM<span className="text-primary">CODE</span>
      </span>
    </Link>
  );
}
