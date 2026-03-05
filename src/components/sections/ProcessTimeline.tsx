import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, Code2, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { number: "01", icon: Search,     title: "Discover",   color: "primary",
    description: "We audit your business, goals, audience, and what's currently failing. No assumptions — proper research that shapes everything." },
  { number: "02", icon: Lightbulb,  title: "Strategize", color: "cyan",
    description: "Before building anything, we map the full strategy. Architecture, messaging, funnel, tools. You approve it all before a single line of code." },
  { number: "03", icon: Code2,      title: "Build",      color: "violet",
    description: "Execution with milestone check-ins. You're never waiting blindly — progress is visible and reviewable throughout." },
  { number: "04", icon: Rocket,     title: "Launch",     color: "primary",
    description: "Rigorous pre-launch testing, clean deployment, and thorough handover. You own every asset and understand every system." },
  { number: "05", icon: TrendingUp, title: "Scale",      color: "cyan",
    description: "Launch is the start, not the end. We build foundations designed for growth — then support you in using them to scale." },
];

const tokens: Record<string, { color: string; glow: string; border: string; bg: string; shadow: string }> = {
  primary: {
    color:  "hsl(var(--primary))",
    glow:   "hsl(var(--primary)/0.55)",
    border: "hsl(var(--primary)/0.35)",
    bg:     "hsl(var(--primary)/0.10)",
    shadow: "0 0 30px hsl(var(--primary)/0.35)",
  },
  cyan: {
    color:  "hsl(var(--cyan))",
    glow:   "hsl(var(--cyan)/0.5)",
    border: "hsl(var(--cyan)/0.32)",
    bg:     "hsl(var(--cyan)/0.09)",
    shadow: "0 0 30px hsl(var(--cyan)/0.30)",
  },
  violet: {
    color:  "hsl(var(--violet))",
    glow:   "hsl(var(--violet)/0.55)",
    border: "hsl(var(--violet)/0.35)",
    bg:     "hsl(var(--violet)/0.10)",
    shadow: "0 0 30px hsl(var(--violet)/0.30)",
  },
};

export function ProcessTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>

      {/* Rich central glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] orb-blue opacity-[0.07]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] orb-violet opacity-[0.07]" />
      </div>
      <div className="divider-glow absolute top-0 left-0 right-0" />

      <div className="container relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-24"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] mb-5"
            style={{ color: "hsl(var(--primary))" }}>
            <span className="w-6 h-px" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--cyan)))" }} />
            How We Work
            <span className="w-6 h-px" style={{ background: "linear-gradient(to left, hsl(var(--primary)), hsl(var(--cyan)))" }} />
          </span>
          <h2 className="text-5xl sm:text-6xl font-black mb-5 leading-[1.0]">
            A process built for{" "}
            <span className="text-gradient">clarity and results</span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
            We don't just execute — we execute with a system. Every engagement follows a clear
            process so you always know what's happening and why.
          </p>
        </motion.div>

        {/* ── Desktop: premium horizontal timeline ── */}
        <div className="hidden lg:block relative">

          {/* Static track base */}
          <div className="absolute top-[50px] left-[calc(10%+42px)] right-[calc(10%+42px)] h-px"
            style={{ background: "hsl(var(--border))" }} />

          {/* Animated gradient connector */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
            className="absolute top-[50px] left-[calc(10%+42px)] right-[calc(10%+42px)] h-px process-connector"
          />

          <div className="grid grid-cols-5 gap-4 px-[10%]">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const t = tokens[step.color];
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex flex-col items-center text-center"
                >
                  {/* Step node */}
                  <div
                    className="relative z-10 w-[100px] h-[100px] rounded-2xl flex flex-col items-center justify-center mb-7 transition-all duration-400 cursor-default"
                    style={{
                      background: t.bg,
                      border: `2px solid ${t.border}`,
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.boxShadow = t.shadow;
                      (e.currentTarget as HTMLElement).style.borderColor = t.color;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "";
                      (e.currentTarget as HTMLElement).style.borderColor = t.border;
                    }}
                  >
                    <Icon className="w-6 h-6 mb-1" style={{ color: t.color }} />
                    <span className="step-number" style={{ color: t.color }}>{step.number}</span>

                    {/* Inner glow on hover */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background: `radial-gradient(circle at center, ${t.glow.replace("0.55", "0.06")}, transparent)` }} />
                  </div>

                  <h3 className="text-sm font-bold mb-2" style={{ color: t.color }}>{step.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile: vertical timeline ── */}
        <div className="lg:hidden flex flex-col">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const t = tokens[step.color];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.09 }}
                className="flex gap-5"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: t.bg, border: `1px solid ${t.border}` }}>
                    <Icon className="w-5 h-5" style={{ color: t.color }} />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 mt-2"
                      style={{
                        background: `linear-gradient(to bottom, ${t.color.replace(")", "/0.35)")}, transparent)`,
                        minHeight: "36px",
                      }} />
                  )}
                </div>
                <div className="pb-10">
                  <span className="step-number block mb-1" style={{ color: t.color }}>{step.number}</span>
                  <h3 className="text-base font-bold mb-1.5">{step.title}</h3>
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
