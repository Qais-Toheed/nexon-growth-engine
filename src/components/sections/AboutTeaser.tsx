import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function AboutTeaser() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="divider-glow absolute top-0 left-0 right-0" />

      {/* Multi-layer ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[800px] h-[600px] orb-blue opacity-[0.08]" />
        <div className="absolute right-0 top-0 w-[400px] h-[400px] orb-violet opacity-[0.07]" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left — cinematic brand visual */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(145deg, hsl(var(--surface-elevated)), hsl(var(--surface)))",
                border: "1px solid hsl(var(--border))",
              }}
            >
              {/* Strong inner glow */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 80% 70% at 35% 35%, hsl(var(--primary)/0.15), transparent 60%)" }} />
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 60% 50% at 70% 70%, hsl(var(--violet)/0.10), transparent 60%)" }} />

              {/* Center N brand mark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div
                    className="w-24 h-24 rounded-3xl mx-auto mb-5 flex items-center justify-center animate-glow-pulse"
                    style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--cyan)/0.85))" }}
                  >
                    <span className="text-5xl font-black" style={{ color: "hsl(var(--background))" }}>N</span>
                  </div>
                  <p className="text-xl font-black">Nexon Growth</p>
                  <p className="text-sm mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>Growth-Focused Digital Agency</p>
                </div>
              </div>

              {/* Orbiting decorations */}
              <div className="absolute top-1/2 left-1/2 w-[160px] h-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none animate-spin-slow"
                style={{ border: "1px dashed hsl(var(--primary)/0.35)", opacity: 0.5 }} />
              <div className="absolute top-1/2 left-1/2 w-[220px] h-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                style={{ border: "1px dashed hsl(var(--violet)/0.2)", opacity: 0.4, animation: "spin-slow 36s linear infinite reverse" }} />

              {/* Corner accent boxes */}
              <div className="absolute top-5 left-5 w-16 h-16 rounded-xl"
                style={{ border: "1px solid hsl(var(--primary)/0.3)", background: "hsl(var(--primary)/0.05)" }} />
              <div className="absolute bottom-5 right-5 w-12 h-12 rounded-lg"
                style={{ border: "1px solid hsl(var(--cyan)/0.25)", background: "hsl(var(--cyan)/0.04)" }} />

              {/* Top glow edge */}
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary)/0.4), transparent)" }} />
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] mb-6"
              style={{ color: "hsl(var(--primary))" }}>
              <span className="w-8 h-px" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--cyan)))" }} />
              About Us
            </span>

            <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-[1.05]">
              We exist to close the gap between{" "}
              <span className="text-gradient">ambition and execution</span>
            </h2>

            <p className="text-lg mb-5 leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
              Nexon Growth is a growth-focused digital agency that combines strategy, design,
              development, and performance marketing into one integrated service model.
            </p>
            <p className="text-base mb-10 leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
              We work with ecommerce brands, SaaS startups, and ambitious businesses that are
              serious about building digital infrastructure that performs — not just digital assets
              that exist.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 hover:gap-4"
                style={{ color: "hsl(var(--primary))" }}
              >
                Learn our story
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                style={{ color: "hsl(var(--muted-foreground))" }}
                onMouseEnter={e => (e.currentTarget.style.color = "hsl(var(--foreground))")}
                onMouseLeave={e => (e.currentTarget.style.color = "hsl(var(--muted-foreground))")}
              >
                Start a conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
