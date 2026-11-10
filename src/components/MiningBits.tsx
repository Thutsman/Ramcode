import { useState } from "react";
import type { Category } from "@/data/mining";

export function CategoryCard({ category }: { category: Category }) {
  const Icon = category.icon;
  return (
    <li className="reveal flex flex-col border border-white/10 bg-background/90 p-6">
      <div className="mb-4 grid h-10 w-10 place-items-center border border-primary/30 bg-primary/10">
        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
      </div>
      <h3 className="font-display text-xl font-bold tracking-[0.03em] text-foreground">{category.title}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {category.items.map((item) => (
          <li key={item} className="border border-white/10 bg-white/[0.04] px-2 py-1 text-xs leading-5 text-muted-foreground">
            {item}
          </li>
        ))}
      </ul>
    </li>
  );
}

export function BrandTile({ name, file }: { name: string; file: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <li className="grid h-20 place-items-center rounded-sm bg-white px-4">
      {failed ? (
        <span className="font-display text-lg font-bold text-slate-700">{name}</span>
      ) : (
        <img
          src={`/mining/brands/${file}.svg`}
          alt={name}
          width={140}
          height={48}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-10 w-auto max-w-full object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
        />
      )}
    </li>
  );
}
