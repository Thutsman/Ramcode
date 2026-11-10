import { RfqForm } from "@/components/RfqForm";
import { useRevealAnimation } from "@/lib/hooks";
import { useDocumentMeta } from "@/lib/useDocumentMeta";
import { CONTACT } from "@/data/site";

export default function RequestQuote() {
  useDocumentMeta("/mining/request-quote");
  useRevealAnimation();
  return (
    <section className="relative z-10 px-6 pb-20 pt-32 md:px-10 md:pt-40">
      <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="reveal">
          <p className="section-kicker">Mining & Industrial Supply</p>
          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-[0.02em] md:text-6xl">Request a quote</h1>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            List the items, quantities and the date you need them. We reply with a USD quotation (VAT shown separately) and a confirmed lead time.
          </p>
          <address className="mt-8 space-y-1 text-sm not-italic leading-7 text-muted-foreground">
            <p className="font-medium text-foreground">{CONTACT.name}, {CONTACT.role}</p>
            <p><a className="hover:text-primary" href={CONTACT.phoneTel}>{CONTACT.phone}</a></p>
            <p><a className="hover:text-primary" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
            <p>{CONTACT.address}</p>
          </address>
        </div>
        <div className="reveal border border-white/10 bg-card p-6 md:p-8">
          <RfqForm />
        </div>
      </div>
    </section>
  );
}
