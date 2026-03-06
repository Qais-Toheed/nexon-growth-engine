import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, Code2, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search, num: "01", title: "Discovery & Strategy", accent: "hsl(var(--primary))",
    headline: "We map your growth system before writing a line of code",
    body: "Every engagement starts with a full audit of your business, audience, and competitive landscape. We define the strategy, architecture, and KPIs that everything else is built around.",
    visual: { bars: [40, 70, 55, 85, 65, 90, 72], label: "Audit Score", value: "92" },
  },
  {
    icon: Lightbulb, num: "02", title: "Design & Architecture", accent: "hsl(var(--cyan))",
    headline: "Conversion-engineered before a pixel is placed",
    body: "User journey mapping, wireframes, and high-fidelity mockups — all reviewed and approved by you before development begins. No surprises.",
    visual: { bars: [60, 40, 80, 55, 92, 45, 78], label: "UX Score", value: "4.9" },
  },
  {
    icon: Code2, num: "03", title: "Build & Launch", accent: "hsl(var(--violet))",
    headline: "Clean execution with milestone check-ins",
    body: "Development with sprint reviews at every milestone. You see real progress — not just a delivery at the end. Full asset handover on launch.",
    visual: { bars: [80, 92, 65, 88, 75, 96, 82], label: "Performance", value: "99" },
  },
];

function StepVisual({ step, isActive }: { step: typeof steps[0]; isActive: boolean }) {
  return (
    <motion.div
      animate={{ opacity: isActive ? 1 : 0.3, scale: isActive ? 1 : 0.95, y: isActive ? 0 : 12 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-3xl overflow-hidden"
      style={{
        background: "hsl(220 20% 100%)",
        border: `1px solid ${isActive ? step.accent.replace(")", "/0.30)") : "hsl(var(--border))"}`,
        boxShadow: isActive ? `0 24px 80px ${step.accent.replace(")", "/0.12)")}` : "0 4px 20px hsl(220 30% 10% / 0.05)",
        height: "360px",
      }}>
      {/* Visual top band */}
      <div className="h-40 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${step.accent.replace(")", "/0.08)")}, ${step.accent.replace(")", "/0.03)")})` }}>
        {/* Animated bars */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-0 flex items-end gap-1.5 h-32">
          {step.visual.bars.map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t-sm"
              style={{ background: step.accent, opacity: 0.3 + (i % 3) * 0.2 }}
              animate={{ height: isActive ? `${h}%` : "15%" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
        </div>
        {/* Metric chip */}
        <div className="absolute top-4 right-4 rounded-xl px-3 py-2"
          style={{ background: "hsl(220 20% 100% / 0.9)", border: `1px solid ${step.accent.replace(")", "/0.20)")}`, backdropFilter: "blur(12px)" }}>
          <div className="text-xl font-black leading-none" style={{ color: step.accent }}>{step.visual.value}</div>
          <div className="text-[9px] font-semibold uppercase tracking-wider" style={{ color: "hsl(var(--muted-foreground))" }}>{step.visual.label}</div>
        </div>
        {/* Floating orb */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{ background: step.accent.replace(")", "/0.12)"), border: `1.5px solid ${step.accent.replace(")", "/0.25)")}` }}>
          <step.icon className="w-7 h-7" style={{ color: step.accent }} />
        </div>
      </div>

      {/* Step content */}
      <div className="p-6">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: step.accent }}>{step.num}</span>
          <span className="w-px h-3 rounded-full" style={{ background: "hsl(var(--border))" }} />
          <span className="text-xs font-bold uppercase tracking-wide" style={{ color: step.accent }}>{step.title}</span>
        </div>
        <h3 className="text-base font-bold mb-2 leading-snug" style={{ color: "hsl(var(--foreground))" }}>{step.headline}</h3>
        <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{step.body}</p>
      </div>
    </motion.div>
  );
}

export function StickyHowWeBuild() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const activeStep = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 1, 2, 2]);

  return (
    <section ref={sectionRef} className="relative" style={{ height: "240vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden"
        style={{ background: "linear-gradient(160deg, hsl(220 35% 100%) 0%, hsl(218 40% 98%) 100%)" }}>
        <div className="absolute top-0 left-0 right-0 divider-glow" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, hsl(214 100% 50% / 0.04) 1px, transparent 1px)", backgroundSize: "52px 52px" }} />

        <div className="container h-full flex flex-col justify-center py-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--cyan)))" }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--primary))" }}>How We Build Growth Systems</span>
            </div>
            <h2 className="font-black leading-[1.0] tracking-tight" style={{ fontSize: "clamp(2.2rem,5vw,60px)", color: "hsl(var(--foreground))" }}>
              Three phases.{" "}
              <span style={{
                background: "linear-gradient(130deg, hsl(var(--primary)), hsl(var(--cyan)))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>Zero guesswork.</span>
            </h2>
          </motion.div>

          {/* Step cards + progress */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Progress tracker left */}
            <div className="lg:col-span-3 flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {steps.map((step, i) => (
                <motion.div key={step.num}
                  animate={{
                    opacity: 1,
                  }}
                  className="flex items-center gap-3 p-4 rounded-2xl flex-shrink-0 transition-all duration-400"
                  style={{
                    background: "hsl(220 20% 100%)",
                    border: "1px solid hsl(var(--border))",
                    minWidth: "160px",
                  }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: step.accent.replace(")", "/0.10)"), border: `1.5px solid ${step.accent.replace(")", "/0.20)")}` }}>
                    <step.icon className="w-4.5 h-4.5 w-[18px] h-[18px]" style={{ color: step.accent }} />
                  </div>
                  <div>
                    <div className="text-[9px] font-black uppercase tracking-widest mb-0.5" style={{ color: step.accent }}>{step.num}</div>
                    <div className="text-xs font-bold leading-tight" style={{ color: "hsl(var(--foreground))" }}>{step.title}</div>
                  </div>
                  <CheckCircle className="w-4 h-4 ml-auto flex-shrink-0" style={{ color: step.accent, opacity: 0.5 }} />
                </motion.div>
              ))}
            </div>

            {/* Visual cards */}
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {steps.map((step, i) => (
                <StepVisual key={step.num} step={step} isActive={true} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
