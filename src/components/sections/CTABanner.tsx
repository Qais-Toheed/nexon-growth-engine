import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface CTABannerProps {
  headline?: string;
  subheadline?: string;
}

export function CTABanner({
  headline = "Ready to build something that actually grows your business?",
  subheadline = "Book a free 30-minute strategy call. We'll review your situation and give you an honest assessment of what would move the needle.",
}: CTABannerProps) {
  return (
    <section className="relative py-36 md:py-44 overflow-hidden"
      style={{ background: "linear-gradient(160deg, hsl(224 47% 9%) 0%, hsl(228 50% 13%) 50%, hsl(224 47% 9%) 100%)" }}>

      {/* Atmospheric glows — luminous on dark */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, hsl(var(--primary)/0.15) 0%, transparent 65%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 60% at 85% 40%, hsl(var(--violet)/0.12) 0%, transparent 58%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 45% 55% at 15% 60%, hsl(var(--cyan)/0.08) 0%, transparent 58%)" }} />
      </div>

      {/* Orbs */}
      <div className="absolute left-[6%]  top-[12%]  w-80 h-80 orb-blue   opacity-[0.22] pointer-events-none animate-orb-float" />
      <div className="absolute right-[6%] bottom-[12%] w-64 h-64 orb-violet opacity-[0.16] pointer-events-none" style={{ animationDelay: "3.5s" }} />

      {/* Light streaks */}
      <div className="absolute top-0 left-[32%] w-px h-[28%] pointer-events-none opacity-25"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--primary)/0.6), transparent)" }} />
      <div className="absolute top-0 right-[36%] w-px h-[18%] pointer-events-none opacity-18"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--cyan)/0.5), transparent)" }} />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 divider-glow" />
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, hsl(214 100% 50% / 0.2), transparent)" }} />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.16em]"
            style={{
              background: "hsl(214 100% 50% / 0.12)",
              border: "1px solid hsl(214 100% 50% / 0.25)",
              color: "hsl(214 100% 72%)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Let's Build Together
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-[62px] font-black mb-7 leading-[1.05] text-white">
            {headline}
          </h2>
          <p className="text-lg leading-relaxed mb-14 max-w-xl mx-auto"
            style={{ color: "hsl(218 22% 65%)" }}>
            {subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild size="lg"
              className="relative font-bold px-10 text-base group overflow-hidden rounded-xl"
              style={{
                background: "hsl(var(--primary))",
                color: "white",
                boxShadow: "0 4px 30px hsl(214 100% 50% / 0.45), 0 2px 10px hsl(214 100% 50% / 0.25)",
              }}
            >
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4" />
                Book a Free Strategy Call
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </a>
            </Button>
            <Button
              asChild variant="outline" size="lg"
              className="font-semibold rounded-xl transition-all duration-300"
              style={{
                borderColor: "hsl(210 55% 97% / 0.15)",
                background: "hsl(210 55% 97% / 0.06)",
                backdropFilter: "blur(12px)",
                color: "hsl(210 55% 97%)",
              }}
            >
              <Link to="/contact">
                Get a Proposal
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
