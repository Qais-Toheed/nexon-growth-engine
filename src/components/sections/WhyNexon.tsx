import { motion } from "framer-motion";
import { Layers, Zap, MessageSquare, Key } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    number: "01",
    title: "Systems-First Approach",
    description: "Every project starts with a clear strategy — a system designed around your revenue goals, not our convenience.",
    accent: "primary",
  },
  {
    icon: Zap,
    number: "02",
    title: "Full-Stack Execution",
    description: "Strategy, design, development, marketing, automation — we handle the full stack. One partner, not a fragmented vendor list.",
    accent: "cyan",
  },
  {
    icon: MessageSquare,
    number: "03",
    title: "Direct Communication",
    description: "You work directly with the people building your project. No account managers. No delays. No miscommunication.",
    accent: "violet",
  },
  {
    icon: Key,
    number: "04",
    title: "You Own Everything",
    description: "Code, designs, ad accounts, domains — yours from day one. We build capability, not dependency.",
    accent: "cyan",
  },
];

const accentTokens: Record<string, {
  color: string; glow: string; border: string; bg: string; iconBg: string; numColor: string;
}> = {
  primary: {
    color:    "hsl(var(--primary))",
    glow:     "hsl(var(--primary)/0.22)",
    border:   "hsl(var(--primary)/0.22)",
    bg:       "linear-gradient(145deg, hsl(var(--primary)/0.10) 0%, hsl(var(--primary)/0.03) 100%)",
    iconBg:   "linear-gradient(135deg, hsl(var(--primary)/0.28), hsl(var(--primary)/0.12))",
    numColor: "hsl(var(--primary)/0.10)",
  },
  cyan: {
    color:    "hsl(var(--cyan))",
    glow:     "hsl(var(--cyan)/0.20)",
    border:   "hsl(var(--cyan)/0.20)",
    bg:       "linear-gradient(145deg, hsl(var(--cyan)/0.09) 0%, hsl(var(--cyan)/0.02) 100%)",
    iconBg:   "linear-gradient(135deg, hsl(var(--cyan)/0.26), hsl(var(--cyan)/0.10))",
    numColor: "hsl(var(--cyan)/0.09)",
  },
  violet: {
    color:    "hsl(var(--violet))",
    glow:     "hsl(var(--violet)/0.22)",
    border:   "hsl(var(--violet)/0.22)",
    bg:       "linear-gradient(145deg, hsl(var(--violet)/0.10) 0%, hsl(var(--violet)/0.03) 100%)",
    iconBg:   "linear-gradient(135deg, hsl(var(--violet)/0.28), hsl(var(--violet)/0.10))",
    numColor: "hsl(var(--violet)/0.10)",
  },
};

export function WhyNexon() {
  return (
    <section className="section-padding relative overflow-hidden">

      {/* Rich ambient background — deeper light fields */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[700px] h-[500px] orb-violet opacity-[0.10]" />
        <div className="absolute top-0 left-0 w-[500px] h-[350px] orb-blue opacity-[0.08]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] orb-cyan opacity-[0.04]" />
      </div>
      <div className="divider-glow absolute top-0 left-0 right-0" />

      <div className="container relative z-10">

        {/* Header — dramatic, asymmetric */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] mb-5"
              style={{ color: "hsl(var(--primary))" }}>
              <span className="w-8 h-px" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--cyan)))" }} />
              Why Nexon Growth
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-[68px] font-black leading-[1.0]">
              Built different.<br />
              <span className="text-gradient">Run differently.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="max-w-md leading-relaxed lg:text-right lg:pb-2"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Most agencies optimize for billable hours. We optimize for your outcomes.
            The difference shows in how we work — and what you get.
          </motion.p>
        </div>

        {/* Pillars — 4-column grid, staggered z-depth */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const a = accentTokens[pillar.accent];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.11, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="group relative flex flex-col h-full p-7 rounded-2xl card-tilt card-shimmer overflow-hidden cursor-default"
                  style={{ background: a.bg, border: `1px solid ${a.border}` }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${a.glow}, 0 24px 50px hsl(230 52% 2%/0.55)`;
                    (e.currentTarget as HTMLElement).style.borderColor = a.glow;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                    (e.currentTarget as HTMLElement).style.borderColor = a.border;
                  }}
                >
                  {/* Background number */}
                  <span className="absolute top-3 right-4 text-7xl font-black select-none pointer-events-none"
                    style={{ color: a.numColor }}>
                    {pillar.number}
                  </span>

                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: `linear-gradient(to right, ${a.color}, transparent)` }} />

                  {/* Icon */}
                  <div className="relative w-[50px] h-[50px] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: a.iconBg, border: "1px solid hsl(var(--foreground)/0.08)" }}>
                    <Icon className="w-5 h-5" style={{ color: a.color }} />
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ boxShadow: `0 0 18px ${a.glow}` }} />
                  </div>

                  <h3 className="text-base font-bold mb-3 relative z-10">{pillar.title}</h3>
                  <p className="text-sm leading-relaxed relative z-10" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {pillar.description}
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
