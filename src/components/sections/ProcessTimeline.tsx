import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, Code2, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { number: "01", icon: Search, title: "Discover", description: "We audit your business, your goals, your audience, and what's currently failing. No assumptions — proper research that shapes everything that follows.", color: "primary" },
  { number: "02", icon: Lightbulb, title: "Strategize", description: "Before building anything, we map the full strategy — architecture, messaging, funnel, tools. You approve it all before we execute a single line.", color: "cyan" },
  { number: "03", icon: Code2, title: "Build", description: "Execution with milestone check-ins. You're never waiting blindly for a final reveal — progress is visible and reviewable throughout.", color: "violet" },
  { number: "04", icon: Rocket, title: "Launch", description: "Rigorous pre-launch testing, clean deployment, and a thorough handover. You own every asset and understand every system delivered.", color: "primary" },
  { number: "05", icon: TrendingUp, title: "Scale", description: "Launch is the start, not the end. We build foundations designed for growth — then support you in using them to scale.", color: "cyan" },
];

const colorMap: Record<string, { text: string; bg: string; border: string; glow: string }> = {
  primary: { text: "text-primary", bg: "bg-primary/12", border: "border-primary/25", glow: "shadow-glow-blue" },
  cyan: { text: "text-cyan", bg: "bg-cyan/10", border: "border-cyan/25", glow: "shadow-glow-cyan" },
  violet: { text: "text-violet", bg: "bg-violet/10", border: "border-violet/25", glow: "shadow-glow-violet" },
};

export function ProcessTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] orb-blue opacity-6" />
      </div>
      <div className="divider-glow absolute top-0 left-0 right-0" />

      <div className="container relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest mb-4">
            <span className="w-6 h-px bg-gradient-to-r from-primary to-cyan" />
            How We Work
            <span className="w-6 h-px bg-gradient-to-l from-primary to-cyan" />
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 leading-tight">
            A process built for{" "}
            <span className="text-gradient">clarity and results</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We don't just execute — we execute with a system. Every engagement follows a clear process so you always know what's happening and why.
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Static track */}
          <div className="absolute top-[42px] left-[calc(10%+26px)] right-[calc(10%+26px)] h-px" style={{ background: "hsl(var(--border))" }} />
          {/* Animated glow line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
            className="absolute top-[42px] left-[calc(10%+26px)] right-[calc(10%+26px)] h-px process-connector"
          />

          <div className="grid grid-cols-5 gap-3">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const c = colorMap[step.color];
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step circle */}
                  <div className={`relative z-10 w-[84px] h-[84px] rounded-2xl ${c.bg} border-2 ${c.border} flex flex-col items-center justify-center mb-6 group-hover:${c.glow} transition-all duration-300`}>
                    <Icon className={`w-6 h-6 ${c.text} mb-0.5`} />
                    <span className={`text-[10px] font-black ${c.text} tracking-widest`}>{step.number}</span>

                    {/* Inner glow */}
                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                      style={{ background: `radial-gradient(circle, hsl(var(--primary) / 0.08), transparent)` }} />
                  </div>

                  <h3 className={`text-sm font-bold mb-2 ${c.text}`}>{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden flex flex-col gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const c = colorMap[step.color];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-5"
              >
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${c.text}`} />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 mt-2 mb-0"
                      style={{ background: `linear-gradient(to bottom, hsl(var(--primary) / 0.3), transparent)`, minHeight: "32px" }} />
                  )}
                </div>
                <div className="pb-8">
                  <span className={`text-[10px] font-black ${c.text} tracking-widest block mb-1`}>{step.number}</span>
                  <h3 className="text-base font-bold mb-1.5">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
