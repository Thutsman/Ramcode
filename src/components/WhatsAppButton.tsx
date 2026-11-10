import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/50 transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white print:hidden"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
