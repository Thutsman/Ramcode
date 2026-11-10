import { useRevealAnimation } from "@/lib/hooks";
import { useDocumentMeta } from "@/lib/useDocumentMeta";
import { credits } from "@/data/credits";

export default function Credits() {
  useDocumentMeta("/credits");
  useRevealAnimation();
  return (
    <section className="relative z-10 px-6 pb-20 pt-32 md:px-10 md:pt-40">
      <div className="container max-w-4xl">
        <p className="section-kicker">Attribution</p>
        <h1 className="font-display text-5xl font-bold tracking-[0.02em] md:text-6xl">Image credits</h1>
        <p className="mt-5 text-sm leading-7 text-muted-foreground">
          Product photographs on the mining page are used under Creative Commons licences. Images cropped.
        </p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="sr-only">Photo credits</caption>
            <thead>
              <tr className="border-b border-white/20 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                <th scope="col" className="py-2 pr-4">Photo</th>
                <th scope="col" className="py-2 pr-4">Author</th>
                <th scope="col" className="py-2 pr-4">Licence</th>
                <th scope="col" className="py-2">Source</th>
              </tr>
            </thead>
            <tbody>
              {credits.map((c) => (
                <tr key={c.file} className="border-b border-white/10 align-top">
                  <th scope="row" className="py-3 pr-4 font-medium text-foreground">{c.subject}</th>
                  <td className="py-3 pr-4 text-muted-foreground">{c.author ?? "Being confirmed"}</td>
                  <td className="py-3 pr-4 text-muted-foreground">{c.licence ?? "Being confirmed"}</td>
                  <td className="py-3 text-muted-foreground">
                    {c.url ? <a className="text-primary underline-offset-4 hover:underline" href={c.url} target="_blank" rel="noreferrer">Wikimedia Commons</a> : "Being confirmed"}
                  </td>
                </tr>
              ))}
              <tr className="border-b border-white/10 align-top">
                <th scope="row" className="py-3 pr-4 font-medium text-foreground">WEG logo</th>
                <td className="py-3 pr-4 text-muted-foreground">WEG</td>
                <td className="py-3 pr-4 text-muted-foreground">CC BY-SA 4.0</td>
                <td className="py-3 text-muted-foreground">Wikimedia Commons</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-xs leading-6 text-muted-foreground">
          Brand names and logos are trademarks of their respective owners.
        </p>
      </div>
    </section>
  );
}
