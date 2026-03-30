import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_PRIMARY = "923094278123";

interface CTABannerProps {
  headline?: string;
  subheadline?: string;
}

export function CTABanner({
  headline = "Ready to build something that actually grows your business?",
  subheadline = "Chat with us on WhatsApp for the fastest response, or book a strategy call. We'll review your situation and give you an honest assessment of what would move the needle.",
}: CTABannerProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(150deg, hsl(224 52% 8%) 0%, hsl(228 55% 12%) 40%, hsl(230 50% 9%) 100%)",
        paddingTop: "clamp(100px, 12vw, 180px)",
        paddingBottom: "clamp(100px, 12vw, 180px)",
      }}
    >
      {/* ── Layered atmospheric glows ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 90% 80% at 50% 50%, hsl(214 100% 50% / 0.14) 0%, transparent 65%)" }} />
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 70% at 88% 38%, hsl(255 82% 62% / 0.10) 0%, transparent 58%)" }} />
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 50% 60% at 12% 65%, hsl(188 97% 44% / 0.07) 0%, transparent 58%)" }} />
      </div>

      {/* Orbs */}
      <div
        className="absolute left-[4%] top-[10%] w-96 h-96 pointer-events-none animate-orb-float"
        style={{ background: "radial-gradient(circle, hsl(214 100% 50% / 0.18) 0%, transparent 70%)", filter: "blur(40px)" }}
      />
      <div
        className="absolute right-[5%] bottom-[10%] w-80 h-80 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(255 82% 62% / 0.14) 0%, transparent 70%)",
          filter: "blur(50px)",
          animation: "orb-float 10s ease-in-out infinite",
          animationDelay: "3.5s",
        }}
      />

      {/* Light beams */}
      <div className="absolute top-0 left-[30%] w-px h-[35%] opacity-25 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(214 100% 50% / 0.55), transparent)" }} />
      <div className="absolute top-0 right-[33%] w-px h-[22%] opacity-15 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(188 97% 44% / 0.45), transparent)" }} />

      {/* Fine grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(214 100% 80% / 0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Top/bottom dividers */}
      <div className="absolute top-0 left-0 right-0 divider-glow" />
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, hsl(214 100% 50% / 0.2), transparent)" }} />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2.5 mb-9 px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.16em]"
            style={{
              background: "hsl(214 100% 50% / 0.12)",
              border: "1px solid hsl(214 100% 50% / 0.25)",
              color: "hsl(214 100% 78%)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Let's Build Together
          </div>

          <h2
            className="font-black text-white leading-[1.05] tracking-tight mb-7"
            style={{ fontSize: "clamp(2.6rem,6vw,72px)" }}
          >
            {headline}
          </h2>

          <p
            className="text-lg leading-relaxed mb-14 max-w-2xl mx-auto"
            style={{ color: "hsl(218 22% 62%)" }}
          >
            {subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild size="lg"
              className="relative font-bold px-10 text-base group overflow-hidden rounded-2xl h-14"
              style={{
                background: "linear-gradient(135deg, #1DA851, #25D366)",
                color: "white",
                boxShadow: "0 6px 40px hsl(142 70% 45% / 0.50), 0 2px 12px hsl(142 70% 45% / 0.30), inset 0 1px 0 hsl(142 70% 60% / 0.25)",
              }}
            >
              <a href={`https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent("Hi Nexon Growth! I'm interested in discussing a project. Can we chat?")}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </a>
            </Button>

            <Button
              asChild variant="outline" size="lg"
              className="font-semibold rounded-2xl transition-all duration-300 group h-14"
              style={{
                borderColor: "hsl(210 55% 97% / 0.14)",
                background: "hsl(210 55% 97% / 0.06)",
                backdropFilter: "blur(16px)",
                color: "hsl(210 55% 92%)",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "hsl(210 55% 97% / 0.28)";
                el.style.background = "hsl(210 55% 97% / 0.10)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "hsl(210 55% 97% / 0.14)";
                el.style.background = "hsl(210 55% 97% / 0.06)";
              }}
            >
              <Link to="/contact">
                Get a Proposal
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
