import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function AboutTeaser() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="divider-glow absolute top-0 left-0 right-0" />

      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] orb-blue opacity-7 pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left visual — cinematic statement */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden"
              style={{ background: "linear-gradient(145deg, hsl(var(--surface-elevated)), hsl(var(--surface)))", border: "1px solid hsl(var(--border))" }}>

              {/* Inner glow */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 80% 70% at 30% 30%, hsl(var(--primary) / 0.12), transparent 60%)" }} />

              {/* Large N mark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-3xl mx-auto mb-5 flex items-center justify-center shadow-glow-blue"
                    style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--cyan) / 0.8))" }}>
                    <span className="text-5xl font-black" style={{ color: "hsl(var(--background))" }}>N</span>
                  </div>
                  <p className="text-xl font-black">Nexon Growth</p>
                  <p className="text-sm text-muted-foreground mt-1">Growth-Focused Digital Agency</p>
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-20 h-20 rounded-xl border opacity-20"
                style={{ borderColor: "hsl(var(--primary))", background: "hsl(var(--primary) / 0.05)" }} />
              <div className="absolute bottom-4 right-4 w-16 h-16 rounded-lg border opacity-15"
                style={{ borderColor: "hsl(var(--cyan))", background: "hsl(var(--cyan) / 0.05)" }} />

              {/* Orbiting dot */}
              <div className="absolute top-1/2 left-1/2 w-[140px] h-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full animate-spin-slow opacity-30 pointer-events-none"
                style={{ border: "1px dashed hsl(var(--primary) / 0.4)" }} />
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest mb-5">
              <span className="w-6 h-px bg-gradient-to-r from-primary to-cyan" />
              About Us
            </span>

            <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
              We exist to close the gap between{" "}
              <span className="text-gradient">ambition and execution</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
              Nexon Growth is a growth-focused digital agency that combines strategy, design, development, and performance marketing into one integrated service model.
            </p>
            <p className="text-base text-muted-foreground mb-10 leading-relaxed">
              We work with ecommerce brands, SaaS startups, and ambitious businesses that are serious about building digital infrastructure that performs — not just digital assets that exist.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-4 transition-all duration-300"
              >
                Learn our story
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
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
