import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Star, Globe, Zap } from "lucide-react";
import { useRef } from "react";

const stats = [
  { value: "3×",   label: "Avg revenue lift",    accent: "primary" },
  { value: "120+", label: "Projects delivered",  accent: "cyan"    },
  { value: "48h",  label: "Strategy turnaround", accent: "violet"  },
];

const accentColors: Record<string, string> = {
  primary: "hsl(var(--primary))",
  cyan:    "hsl(var(--cyan))",
  violet:  "hsl(var(--violet))",
};

// Visual studio scene
function StudioVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      {/* Main card */}
      <div className="w-full max-w-[340px] rounded-3xl overflow-hidden"
        style={{
          background: "hsl(220 20% 100% / 0.96)",
          border: "1px solid hsl(var(--border))",
          boxShadow: "0 24px 80px hsl(214 100% 50% / 0.10)",
        }}>
        {/* Header brand strip */}
        <div className="relative h-36 flex items-center justify-center overflow-hidden"
          style={{ background: "linear-gradient(135deg, hsl(214 100% 50% / 0.08), hsl(188 97% 44% / 0.06), hsl(255 82% 62% / 0.05))" }}>
          {/* Orbiting rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full"
            style={{ border: "1px dashed hsl(var(--primary)/0.22)", animation: "spin-slow 22s linear infinite" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full"
            style={{ border: "1px dashed hsl(var(--violet)/0.12)", animation: "spin-slow 38s linear infinite reverse" }} />
          {/* Brand mark */}
          <motion.div
            animate={{ boxShadow: ["0 8px 30px hsl(214 100% 50% / 0.22)", "0 10px 50px hsl(214 100% 50% / 0.40)", "0 8px 30px hsl(214 100% 50% / 0.22)"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 rounded-2xl flex items-center justify-center z-10"
            style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--cyan)/0.85))" }}>
            <span className="text-3xl font-black text-white">N</span>
          </motion.div>
        </div>
        {/* Content */}
        <div className="p-5">
          <div className="text-center mb-5">
            <p className="text-sm font-black mb-0.5" style={{ color: "hsl(var(--foreground))" }}>Nexon Growth</p>
            <p className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>Growth-Focused Digital Agency</p>
          </div>
          {/* Mini metrics */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[["3×","Revenue"], ["120+","Projects"], ["100%","Ownership"]].map(([v, l]) => (
              <div key={v} className="rounded-xl p-2 text-center"
                style={{ background: "hsl(var(--surface))", border: "1px solid hsl(var(--border))" }}>
                <p className="text-sm font-black" style={{ color: "hsl(var(--primary))" }}>{v}</p>
                <p className="text-[9px] text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
          </div>
          <p className="text-[10px] text-center text-muted-foreground">5.0 from 40+ clients</p>
        </div>
      </div>
    </div>
  );
}

export function AboutTeaser() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const floatY = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, hsl(220 35% 98%) 0%, hsl(var(--background)) 100%)",
        paddingTop: "clamp(80px,10vw,160px)",
        paddingBottom: "clamp(80px,10vw,160px)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 divider-glow" />
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(214 100% 50% / 0.05) 0%, transparent 65%)", filter: "blur(60px)" }} />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* Visual panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, hsl(214 100% 50% / 0.07), hsl(188 97% 44% / 0.04), hsl(255 82% 62% / 0.06))",
                border: "1px solid hsl(var(--border))",
                boxShadow: "0 24px 80px hsl(214 100% 50% / 0.08)",
              }}>
              <StudioVisual />
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
                }}>
                <span className="text-2xl font-black" style={{ color: accentColors[stat.accent] }}>{stat.value}</span>
                <span className="text-[11px] font-medium leading-tight max-w-[70px]" style={{ color: "hsl(var(--muted-foreground))" }}>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Content */}
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

            <h2 className="font-black leading-[1.0] tracking-tight mb-7"
              style={{ fontSize: "clamp(2.4rem,5vw,62px)", color: "hsl(var(--foreground))" }}>
              We close the gap between{" "}
              <span style={{
                background: "linear-gradient(130deg, hsl(var(--primary)), hsl(var(--cyan)))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>ambition and execution</span>
            </h2>

            <p className="text-lg mb-5 leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
              Nexon Growth is a growth-focused digital agency that combines strategy, design, development, marketing, and content creation into one integrated service model.
            </p>
            <p className="text-base mb-12 leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
              We work with ecommerce brands, startups, and ambitious businesses that are serious about building digital infrastructure that performs — not just digital assets that exist.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {[
                { icon: Globe, label: "Full-stack execution", color: "hsl(var(--primary))" },
                { icon: Zap,   label: "48h strategy delivery", color: "hsl(var(--cyan))" },
              ].map(item => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-3 p-4 rounded-xl"
                    style={{ background: "hsl(220 20% 100%)", border: "1px solid hsl(var(--border))" }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: item.color.replace(")", "/0.10)"), border: `1px solid ${item.color.replace(")", "/0.20)")}` }}>
                      <Icon className="w-4 h-4" style={{ color: item.color }} />
                    </div>
                    <span className="text-xs font-semibold">{item.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group"
                style={{ color: "hsl(var(--primary))" }}>
                Learn our story
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                style={{ color: "hsl(var(--muted-foreground))" }}
                onMouseEnter={e => (e.currentTarget.style.color = "hsl(var(--foreground))")}
                onMouseLeave={e => (e.currentTarget.style.color = "hsl(var(--muted-foreground))")}>
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
