import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden glass border-t border-border px-4 py-3 flex items-center gap-3">
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-green-500 hover:bg-green-400 text-white text-sm font-semibold transition-colors"
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp
      </a>
      <a
        href="https://calendly.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold transition-colors"
      >
        <Phone className="w-4 h-4" />
        Book a Call
      </a>
    </div>
  );
}
