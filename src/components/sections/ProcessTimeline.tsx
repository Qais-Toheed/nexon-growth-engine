import { motion, useInView } from "framer-motion";
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
    description: "Launch is the start, not the end. We build foundations designed for growth — then help you use them to scale." },
];

const tokens: Record<string, { color: string; border: string; bg: string; iconBg: string; shadow: string }> = {
  primary: {
    color:  "hsl(var(--primary))",
    border: "hsl(var(--primary)/0.22)",
    bg:     "hsl(var(--primary)/0.06)",
    iconBg: "linear-gradient(135deg, hsl(var(--primary)/0.16), hsl(var(--primary)/0.06))",
    shadow: "0 0 30px hsl(214 100% 50% / 0.22)",
  },
  cyan: {
    color:  "hsl(var(--cyan))",
    border: "hsl(var(--cyan)/0.22)",
    bg:     "hsl(var(--cyan)/0.06)",
    iconBg: "linear-gradient(135deg, hsl(var(--cyan)/0.16), hsl(var(--cyan)/0.05))",
    shadow: "0 0 28px hsl(188 97% 44% / 0.20)",
  },
  violet: {
    color:  "hsl(var(--violet))",
    border: "hsl(var(--violet)/0.22)",
    bg:     "hsl(var(--violet)/0.06)",
    iconBg: "linear-gradient(135deg, hsl(var(--violet)/0.16), hsl(var(--violet)/0.05))",
    shadow: "0 0 28px hsl(255 82% 62% / 0.20)",
  },
};

export function ProcessTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}
      style={{ background: "hsl(var(--background))" }}>

      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] orb-blue opacity-[0.06] pointer-events-none" />
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
          <h2 className="text-5xl sm:text-6xl font-black mb-5 leading-[1.0]"
            style={{ color: "hsl(var(--foreground))" }}>
            A process built for{" "}
            <span className="text-gradient">clarity and results</span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
            We don't just execute — we execute with a system. Every engagement follows a clear process so you always know what's happening and why.
          </p>
        </motion.div>

        {/* ── Desktop: horizontal timeline ── */}
        <div className="hidden lg:block relative">
          {/* Base track */}
          <div className="absolute top-[50px] left-[calc(10%+42px)] right-[calc(10%+42px)] h-px"
            style={{ background: "hsl(var(--border))" }} />

          {/* Animated connector */}
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
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex flex-col items-center text-center"
                >
                  <div
                    className="relative z-10 w-[100px] h-[100px] rounded-2xl flex flex-col items-center justify-center mb-7 cursor-default card-white card-white-hover transition-all duration-400"
                    style={{ border: `1.5px solid ${t.border}` }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = t.shadow; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
                  >
                    <Icon className="w-6 h-6 mb-1" style={{ color: t.color }} />
                    <span className="step-number" style={{ color: t.color }}>{step.number}</span>
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

        {/* ── Mobile: vertical ── */}
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
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center card-white"
                    style={{ border: `1.5px solid ${t.border}` }}>
                    <Icon className="w-5 h-5" style={{ color: t.color }} />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 mt-2"
                      style={{
                        background: `linear-gradient(to bottom, ${t.color}, transparent)`,
                        minHeight: "36px", opacity: 0.3,
                      }} />
                  )}
                </div>
                <div className="pb-10">
                  <span className="step-number block mb-1" style={{ color: t.color }}>{step.number}</span>
                  <h3 className="text-base font-bold mb-1.5" style={{ color: "hsl(var(--foreground))" }}>{step.title}</h3>
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
