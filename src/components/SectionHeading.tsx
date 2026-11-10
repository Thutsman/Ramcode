import type { ReactNode } from "react";

export function SectionHeading({ kicker, title, children }: { kicker: string; title: string; children?: ReactNode }) {
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
