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
    <section className="relative py-36 md:py-44 overflow-hidden">

      {/* Deep layered background */}
      <div className="absolute inset-0" style={{ background: "hsl(var(--surface))" }} />

      {/* Multi-layer luminous glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 90% 80% at 50% 50%, hsl(var(--primary)/0.12) 0%, transparent 65%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 65% at 82% 40%, hsl(var(--violet)/0.09) 0%, transparent 58%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 45% 55% at 18% 58%, hsl(var(--cyan)/0.07) 0%, transparent 58%)" }} />
      </div>

      {/* Glow orbs */}
      <div className="absolute left-[8%]  top-[15%]  w-80 h-80 orb-blue   opacity-[0.20] pointer-events-none animate-orb-float" />
      <div className="absolute right-[8%] bottom-[15%] w-64 h-64 orb-violet opacity-[0.15] pointer-events-none" style={{ animationDelay: "3.5s" }} />
      <div className="absolute left-[40%] top-[10%]  w-40 h-40 orb-cyan   opacity-[0.10] pointer-events-none animate-orb-float" style={{ animationDelay: "1.8s" }} />

      {/* Light streaks */}
      <div className="absolute top-0 left-[30%] w-px h-[30%] pointer-events-none opacity-30"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--primary)/0.5), transparent)" }} />
      <div className="absolute top-0 right-[35%] w-px h-[20%] pointer-events-none opacity-20"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--cyan)/0.4), transparent)" }} />

      {/* Top/bottom glow dividers */}
      <div className="absolute top-0 left-0 right-0 divider-glow" />
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, hsl(var(--border)), transparent)" }} />

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
              background: "hsl(var(--primary)/0.09)",
              border: "1px solid hsl(var(--primary)/0.22)",
              color: "hsl(var(--primary))",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Let's Build Together
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-[64px] font-black mb-7 leading-[1.05]">
            {headline}
          </h2>
          <p className="text-lg leading-relaxed mb-14 max-w-xl mx-auto"
            style={{ color: "hsl(var(--muted-foreground))" }}>
            {subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="relative font-bold px-10 text-base group overflow-hidden transition-all duration-300"
              style={{
                background: "hsl(var(--primary))",
                color: "hsl(var(--primary-foreground))",
                boxShadow: "var(--glow-blue-strong), 0 4px 20px hsl(230 52% 2%/0.5)",
              }}
            >
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4" />
                Book a Free Strategy Call
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/14 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-semibold transition-all duration-300"
              style={{
                borderColor: "hsl(var(--border))",
                background: "hsl(var(--surface)/0.5)",
                backdropFilter: "blur(12px)",
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
