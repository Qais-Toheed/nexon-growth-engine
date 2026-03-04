import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, Code2, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description: "We start by understanding your business, your goals, your audience, and what's currently not working. No assumptions — proper research.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategize",
    description: "Before building anything, we map the strategy — the architecture, the messaging, the funnel, the tools. You approve it before we execute.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build",
    description: "Execution with milestone check-ins. You're never waiting blindly for a final reveal. Progress is visible and reviewable throughout.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description: "Rigorous pre-launch testing, deployment, and a clean handover. You own every asset and understand every system delivered.",
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Scale",
    description: "Launch is the start, not the end. We build foundations designed to scale — then support you in using them to grow.",
  },
];

export function ProcessTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-surface/30" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">How We Work</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-5">
            A process built for{" "}
            <span className="text-gradient">clarity and results</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We don't just execute — we execute with a system. Every engagement follows a clear process so you always know what's happening and why.
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connector line */}
          <div className="absolute top-10 left-[calc(10%+20px)] right-[calc(10%+20px)] h-px bg-border" />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
            style={{ originX: 0 }}
            className="absolute top-10 left-[calc(10%+20px)] right-[calc(10%+20px)] h-px process-connector"
          />

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative z-10 w-20 h-20 rounded-2xl bg-surface border-2 border-border flex flex-col items-center justify-center mb-5 group-hover:border-primary/40">
                    <Icon className="w-6 h-6 text-primary mb-1" />
                    <span className="text-xs font-bold text-primary">{step.number}</span>
                  </div>
                  <h3 className="text-base font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical stack */}
        <div className="lg:hidden flex flex-col gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-5"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-surface border-2 border-primary/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 mt-2 bg-gradient-to-b from-primary/30 to-transparent" />
                  )}
                </div>
                <div className="pb-6">
                  <span className="text-xs font-bold text-primary mb-1 block">{step.number}</span>
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
