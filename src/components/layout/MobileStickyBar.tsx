import { Phone, MessageCircle } from "lucide-react";

const WHATSAPP_PRIMARY = "923094278123";

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden px-4 py-3 flex items-center gap-2.5"
      style={{
        background: "hsl(var(--surface) / 0.92)",
        borderTop: "1px solid hsl(var(--border))",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}>
      <a
        href={`https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent("Hi Nexon Growth! I'd like to discuss a project with you.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white transition-all duration-200"
        style={{ background: "linear-gradient(135deg, #1DA851, #25D366)" }}
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp
      </a>
      <a
        href="https://calendly.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-200 shadow-button-glow"
        style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
      >
        <Phone className="w-4 h-4" />
        Book a Call
      </a>
    </div>
  );
}
