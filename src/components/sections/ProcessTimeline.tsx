import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, Code2, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { number: "01", icon: Search,     title: "Discover",   color: "primary",
    description: "We audit your business, goals, audience, and what's currently failing. Proper research that shapes everything." },
  { number: "02", icon: Lightbulb,  title: "Strategize", color: "cyan",
    description: "Before building anything, we map the full strategy. Architecture, messaging, funnel, tools. You approve it all." },
  { number: "03", icon: Code2,      title: "Build",      color: "violet",
    description: "Execution with milestone check-ins. You're never waiting blindly — progress is visible throughout." },
  { number: "04", icon: Rocket,     title: "Launch",     color: "primary",
    description: "Rigorous pre-launch testing, clean deployment, and thorough handover. You own every asset." },
  { number: "05", icon: TrendingUp, title: "Scale",      color: "cyan",
    description: "Launch is the start, not the end. We build foundations designed for growth — then help you use them." },
];

const accentColors: Record<string, string> = {
  primary: "hsl(var(--primary))",
  cyan:    "hsl(var(--cyan))",
  violet:  "hsl(var(--violet))",
};

export function ProcessTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background: "hsl(var(--background))",
        paddingTop: "clamp(80px, 10vw, 160px)",
        paddingBottom: "clamp(80px, 10vw, 160px)",
      }}
    >
      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(214 100% 50% / 0.05) 0%, transparent 65%)", filter: "blur(50px)" }} />
      <div className="absolute top-0 left-0 right-0 divider-glow" />

      <div className="container relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px w-10" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--cyan)))" }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--primary))" }}>
                How We Work
              </span>
            </div>
            <h2
              className="font-black leading-[1.0] tracking-tight"
              style={{ fontSize: "clamp(2.8rem,6vw,76px)", color: "hsl(var(--foreground))" }}
            >
              A process built<br />
              for{" "}
              <span style={{
                background: "linear-gradient(130deg, hsl(var(--primary)), hsl(var(--cyan)))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                clarity.
              </span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-md text-base leading-relaxed lg:pb-2"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            We don't just execute — we execute with a system. Every engagement follows a clear process so you always know what's happening and why.
          </motion.p>
        </div>

        {/* ── Desktop: large numbered steps with left border ── */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-0 relative">

          {/* Animated base track */}
          <div className="absolute top-[52px] left-[80px] right-[80px] h-px"
            style={{ background: "hsl(var(--border))" }} />

          {/* Animated progress line */}
          <motion.div
            className="absolute top-[52px] h-px process-connector"
            initial={{ width: 0 }}
            animate={isInView ? { width: "calc(100% - 160px)" } : { width: 0 }}
            transition={{ duration: 2.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ left: "80px" }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            const accent = accentColors[step.color];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col items-center text-center px-4"
              >
                {/* Node */}
                <div
                  className="relative z-10 w-[104px] h-[104px] rounded-3xl flex flex-col items-center justify-center mb-8 transition-all duration-400 cursor-default"
                  style={{
                    background: "hsl(220 20% 100%)",
                    border: `2px solid ${accent.replace(")", "/0.25)")}`,
                    boxShadow: `0 4px 24px ${accent.replace(")", "/0.10)")}`,
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.boxShadow = `0 8px 40px ${accent.replace(")", "/0.28)")}`;
                    el.style.borderColor = accent;
                    el.style.transform = "scale(1.08) translateY(-4px)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.boxShadow = `0 4px 24px ${accent.replace(")", "/0.10)")}`;
                    el.style.borderColor = accent.replace(")", "/0.25)");
                    el.style.transform = "";
                  }}
                >
                  <Icon className="w-6 h-6 mb-1.5" style={{ color: accent }} />
                  <span
                    className="text-[10px] font-black uppercase tracking-widest"
                    style={{ color: accent }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3 className="text-sm font-black mb-2 uppercase tracking-wide" style={{ color: accent }}>
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ── Mobile: large vertical ── */}
        <div className="lg:hidden">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const accent = accentColors[step.color];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex gap-6"
              >
                {/* Left connector */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center z-10"
                    style={{
                      background: "hsl(220 20% 100%)",
                      border: `2px solid ${accent.replace(")", "/0.30)")}`,
                      boxShadow: `0 4px 20px ${accent.replace(")", "/0.12)")}`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: accent }} />
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="w-px flex-1 mt-2"
                      style={{
                        background: `linear-gradient(to bottom, ${accent}, transparent)`,
                        minHeight: "40px", opacity: 0.25,
                      }}
                    />
                  )}
                </div>
                <div className="pb-12 pt-1">
                  <span className="text-[10px] font-black uppercase tracking-widest block mb-1" style={{ color: accent }}>
                    {step.number} — {step.title}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
