import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Zap, MessageSquare, Key } from "lucide-react";

const pillars = [
  { icon: Layers, number: "01", title: "Systems-First Approach", accent: "primary",
    description: "Every project starts with a clear strategy — a system designed around your revenue goals, not our convenience.",
    stat: "100%", statLabel: "strategy before build",
    bars: [60, 80, 45, 95, 70, 55, 85],
  },
  { icon: Zap, number: "02", title: "Full-Stack Execution", accent: "cyan",
    description: "Strategy, design, development, marketing, automation — one partner, not a fragmented vendor list.",
    stat: "5×", statLabel: "disciplines in one team",
    bars: [40, 72, 55, 88, 62, 78, 95],
  },
  { icon: MessageSquare, number: "03", title: "Direct Communication", accent: "violet",
    description: "You work directly with the people building your project. No account managers. No delays.",
    stat: "48h", statLabel: "avg. response time",
    bars: [70, 55, 85, 40, 92, 65, 78],
  },
  { icon: Key, number: "04", title: "You Own Everything", accent: "primary",
    description: "Code, designs, ad accounts, domains — yours from day one. We build capability, not dependency.",
    stat: "∞", statLabel: "asset ownership",
    bars: [55, 88, 42, 95, 68, 80, 62],
  },
];

const accentColors: Record<string, string> = {
  primary: "hsl(var(--primary))",
  cyan:    "hsl(var(--cyan))",
  violet:  "hsl(var(--violet))",
};

function PillarCard({ pillar, i, isInView }: { pillar: typeof pillars[0]; i: number; isInView: boolean }) {
  const Icon = pillar.icon;
  const accent = accentColors[pillar.accent];
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
      transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ marginTop: i % 2 === 1 ? "40px" : "0" }}
    >
      <div
        className="group relative flex flex-col h-full rounded-3xl overflow-hidden transition-all duration-400 cursor-default"
        style={{
          background: "hsl(220 20% 100%)",
          border: "1px solid hsl(var(--border))",
          boxShadow: "0 2px 20px hsl(220 30% 10% / 0.05)",
          padding: "clamp(24px,3vw,32px)",
        }}
        onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = accent.replace(")", "/0.30)"); el.style.boxShadow = `0 16px 60px ${accent.replace(")", "/0.12)")}, 0 4px 20px hsl(220 30% 10% / 0.06)`; el.style.transform = "translateY(-6px)"; }}
        onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "hsl(var(--border))"; el.style.boxShadow = "0 2px 20px hsl(220 30% 10% / 0.05)"; el.style.transform = ""; }}>

        {/* Top accent line on hover */}
        <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-t-3xl"
          style={{ background: `linear-gradient(to right, ${accent}, transparent)` }} />

        {/* Animated bar chart visual */}
        <div className="w-full h-24 rounded-xl overflow-hidden relative mb-6"
          style={{ background: accent.replace(")", "/0.06)"), border: `1px solid ${accent.replace(")", "/0.12)")}` }}>
          <div className="absolute inset-0 flex items-end justify-center gap-1.5 px-4 pb-3">
            {pillar.bars.map((h, bi) => (
              <motion.div key={bi} className="flex-1 rounded-t-sm"
                style={{ background: accent, opacity: 0.3 + (bi % 3) * 0.22 }}
                initial={{ height: "8%" }}
                animate={isInView ? { height: `${h}%` } : { height: "8%" }}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.08 + bi * 0.05, ease: [0.22, 1, 0.36, 1] }} />
            ))}
          </div>
          <div className="absolute top-2 left-3 flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accent }} />
            <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: accent }}>Live</span>
          </div>
        </div>

        {/* Stat */}
        <div className="mb-4">
          <div className="text-4xl font-black leading-none mb-1" style={{ color: accent }}>{pillar.stat}</div>
          <div className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: accent.replace(")", "/0.55)") }}>{pillar.statLabel}</div>
        </div>

        <h3 className="text-sm font-bold mb-2.5" style={{ color: "hsl(var(--foreground))" }}>{pillar.title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{pillar.description}</p>
      </div>
    </motion.div>
  );
}

export function WhyNexon() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(220 30% 97%) 100%)",
        paddingTop: "clamp(80px,10vw,160px)",
        paddingBottom: "clamp(80px,10vw,160px)",
      }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[700px] h-[400px]"
          style={{ background: "radial-gradient(ellipse, hsl(255 82% 62% / 0.05) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute top-0 left-0 w-[600px] h-[300px]"
          style={{ background: "radial-gradient(ellipse, hsl(214 100% 50% / 0.04) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>
      <div className="absolute top-0 left-0 right-0 divider-glow" />

      <div className="container relative z-10">
        {/* Split header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px w-10" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--cyan)))" }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--primary))" }}>Why Nexon Growth</span>
            </div>
            <h2 className="font-black leading-[1.0] tracking-tight"
              style={{ fontSize: "clamp(2.8rem,6vw,76px)", color: "hsl(var(--foreground))" }}>
              Built different.<br />
              <span style={{
                background: "linear-gradient(130deg, hsl(var(--primary)), hsl(var(--cyan)))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>Run differently.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:pb-2">
            <p className="text-lg leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
              Most agencies optimize for billable hours. We optimize for your outcomes. The difference shows in how we work — and what you get at the end of every engagement.
            </p>
          </motion.div>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} i={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
