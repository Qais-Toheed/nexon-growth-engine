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
    <section className="relative py-28 md:py-36 overflow-hidden">

      {/* Rich layered background */}
      <div className="absolute inset-0" style={{ background: "hsl(var(--surface))" }} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, hsl(var(--primary) / 0.10), transparent 70%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 60% at 80% 40%, hsl(var(--violet) / 0.07), transparent 60%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 40% 50% at 20% 60%, hsl(var(--cyan) / 0.05), transparent 60%)" }} />
      </div>

      {/* Top/bottom glow lines */}
      <div className="absolute top-0 left-0 right-0 divider-glow" />
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "1px", background: "linear-gradient(90deg, transparent, hsl(var(--border)), transparent)" }} />

      {/* Orbs */}
      <div className="absolute left-[10%] top-[20%] w-64 h-64 orb-blue opacity-15 pointer-events-none animate-orb-float" />
      <div className="absolute right-[10%] bottom-[20%] w-48 h-48 orb-violet opacity-12 pointer-events-none" style={{ animationDelay: "3s" }} />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full border text-xs font-semibold uppercase tracking-widest text-primary"
            style={{ background: "hsl(var(--primary) / 0.08)", borderColor: "hsl(var(--primary) / 0.2)" }}>
            <Sparkles className="w-3.5 h-3.5" />
            Let's Build Together
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
            {headline}
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
            {subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="relative bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 shadow-button-glow text-base group overflow-hidden"
            >
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4" />
                Book a Free Strategy Call
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-semibold transition-all duration-300"
              style={{ borderColor: "hsl(var(--border) / 0.6)" }}
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
