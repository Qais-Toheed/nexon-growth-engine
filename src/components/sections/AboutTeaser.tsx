import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const stats = [
  { value: "3×",   label: "Avg revenue lift",       accent: "primary" },
  { value: "120+", label: "Projects delivered",     accent: "cyan"    },
  { value: "48h",  label: "Strategy turnaround",    accent: "violet"  },
];

const accentColors: Record<string, string> = {
  primary: "hsl(var(--primary))",
  cyan:    "hsl(var(--cyan))",
  violet:  "hsl(var(--violet))",
};

export function AboutTeaser() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, hsl(220 35% 98%) 0%, hsl(var(--background)) 100%)",
        paddingTop: "clamp(80px, 10vw, 160px)",
        paddingBottom: "clamp(80px, 10vw, 160px)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 divider-glow" />
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(214 100% 50% / 0.05) 0%, transparent 65%)", filter: "blur(60px)" }} />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* ── Left — visual brand panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main visual card */}
            <div
              className="relative aspect-[3/4] rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, hsl(214 100% 50% / 0.08), hsl(188 97% 44% / 0.05), hsl(255 82% 62% / 0.06))",
                border: "1px solid hsl(var(--border))",
                boxShadow: "0 24px 80px hsl(214 100% 50% / 0.10), 0 4px 24px hsl(220 30% 10% / 0.06)",
              }}
            >
              {/* Layered glows inside */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 70% 60% at 35% 30%, hsl(214 100% 50% / 0.10), transparent 60%)" }} />
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 55% 50% at 72% 72%, hsl(255 82% 62% / 0.07), transparent 60%)" }} />

              {/* Center brand mark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ boxShadow: [
                      "0 8px 40px hsl(214 100% 50% / 0.25)",
                      "0 12px 60px hsl(214 100% 50% / 0.45)",
                      "0 8px 40px hsl(214 100% 50% / 0.25)",
                    ]}}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-28 h-28 rounded-3xl mx-auto mb-6 flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--cyan)/0.85))",
                    }}
                  >
                    <span className="text-6xl font-black text-white">N</span>
                  </motion.div>
                  <p className="text-2xl font-black" style={{ color: "hsl(var(--foreground))" }}>Nexon Growth</p>
                  <p className="text-sm mt-1.5 font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>Growth-Focused Digital Agency</p>
                </div>
              </div>

              {/* Orbiting rings */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full pointer-events-none"
                style={{ border: "1px dashed hsl(var(--primary)/0.22)", animation: "spin-slow 22s linear infinite" }}
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full pointer-events-none"
                style={{ border: "1px dashed hsl(var(--violet)/0.14)", animation: "spin-slow 38s linear infinite reverse" }}
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full pointer-events-none"
                style={{ border: "1px solid hsl(var(--cyan)/0.08)", animation: "spin-slow 55s linear infinite" }}
              />

              {/* Corner decorative squares */}
              <div className="absolute top-6 left-6 w-16 h-16 rounded-2xl"
                style={{ border: "1px solid hsl(var(--primary)/0.18)", background: "hsl(var(--primary)/0.04)" }} />
              <div className="absolute bottom-6 right-6 w-12 h-12 rounded-xl"
                style={{ border: "1px solid hsl(var(--cyan)/0.18)", background: "hsl(var(--cyan)/0.03)" }} />
            </div>

            {/* Floating stat chips */}
            {stats.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                className="absolute glass-ultra rounded-2xl px-5 py-3 flex items-center gap-3"
                style={{
                  ...(i === 0 ? { top: "12%", right: "-14%" } :
                      i === 1 ? { bottom: "25%", right: "-18%" } :
                               { bottom: "8%", left: "4%" }),
                  boxShadow: `0 4px 24px ${accentColors[stat.accent].replace(")", "/0.12)")}`,
                }}
              >
                <span className="text-2xl font-black" style={{ color: accentColors[stat.accent] }}>
                  {stat.value}
                </span>
                <span className="text-[11px] font-medium leading-tight max-w-[70px]"
                  style={{ color: "hsl(var(--muted-foreground))" }}>
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Right — content ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px w-10" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--cyan)))" }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--primary))" }}>About Us</span>
            </div>

            <h2
              className="font-black leading-[1.0] tracking-tight mb-7"
              style={{ fontSize: "clamp(2.4rem,5vw,62px)", color: "hsl(var(--foreground))" }}
            >
              We close the gap between{" "}
              <span style={{
                background: "linear-gradient(130deg, hsl(var(--primary)), hsl(var(--cyan)))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                ambition and execution
              </span>
            </h2>

            <p className="text-lg mb-5 leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
              Nexon Growth is a growth-focused digital agency that combines strategy, design, development, and performance marketing into one integrated service model.
            </p>
            <p className="text-base mb-12 leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
              We work with ecommerce brands, SaaS startups, and ambitious businesses that are serious about building digital infrastructure that performs — not just digital assets that exist.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group"
                style={{ color: "hsl(var(--primary))" }}
              >
                Learn our story
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                style={{ color: "hsl(var(--muted-foreground))" }}
                onMouseEnter={e => (e.currentTarget.style.color = "hsl(var(--foreground))")}
                onMouseLeave={e => (e.currentTarget.style.color = "hsl(var(--muted-foreground))")}
              >
                Start a conversation
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
