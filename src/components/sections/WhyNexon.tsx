import { motion } from "framer-motion";
import { Layers, Zap, MessageSquare, Key } from "lucide-react";

const pillars = [
  {
    icon: Layers, number: "01", title: "Systems-First Approach", accent: "primary",
    description: "Every project starts with a clear strategy — a system designed around your revenue goals, not our convenience.",
  },
  {
    icon: Zap, number: "02", title: "Full-Stack Execution", accent: "cyan",
    description: "Strategy, design, development, marketing, automation — one partner, not a fragmented vendor list.",
  },
  {
    icon: MessageSquare, number: "03", title: "Direct Communication", accent: "violet",
    description: "You work directly with the people building your project. No account managers. No delays. No miscommunication.",
  },
  {
    icon: Key, number: "04", title: "You Own Everything", accent: "primary",
    description: "Code, designs, ad accounts, domains — yours from day one. We build capability, not dependency.",
  },
];

const tokens: Record<string, { color: string; border: string; accentBg: string; iconBg: string; numColor: string }> = {
  primary: {
    color:    "hsl(var(--primary))",
    border:   "hsl(var(--primary)/0.18)",
    accentBg: "hsl(var(--primary)/0.07)",
    iconBg:   "linear-gradient(135deg, hsl(var(--primary)/0.14), hsl(var(--primary)/0.05))",
    numColor: "hsl(var(--primary)/0.06)",
  },
  cyan: {
    color:    "hsl(var(--cyan))",
    border:   "hsl(var(--cyan)/0.18)",
    accentBg: "hsl(var(--cyan)/0.06)",
    iconBg:   "linear-gradient(135deg, hsl(var(--cyan)/0.14), hsl(var(--cyan)/0.04))",
    numColor: "hsl(var(--cyan)/0.06)",
  },
  violet: {
    color:    "hsl(var(--violet))",
    border:   "hsl(var(--violet)/0.18)",
    accentBg: "hsl(var(--violet)/0.06)",
    iconBg:   "linear-gradient(135deg, hsl(var(--violet)/0.14), hsl(var(--violet)/0.04))",
    numColor: "hsl(var(--violet)/0.06)",
  },
};

export function WhyNexon() {
  return (
    <section className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(220 30% 97%) 100%)" }}>

      {/* Ambient glows */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] orb-violet opacity-[0.07] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[350px] orb-blue opacity-[0.06] pointer-events-none" />
      <div className="divider-glow absolute top-0 left-0 right-0" />

      <div className="container relative z-10">

        {/* Header */}
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
            <h2 className="text-5xl sm:text-6xl md:text-[68px] font-black leading-[1.0]"
              style={{ color: "hsl(var(--foreground))" }}>
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
            Most agencies optimize for billable hours. We optimize for your outcomes. The difference shows in how we work — and what you get.
          </motion.p>
        </div>

        {/* 4-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const a = tokens[pillar.accent];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="group relative flex flex-col h-full p-7 rounded-2xl card-white card-white-hover overflow-hidden cursor-default"
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = a.border;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--border))";
                  }}
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-t-2xl"
                    style={{ background: `linear-gradient(to right, ${a.color}, transparent)` }} />

                  {/* Background number */}
                  <span className="absolute top-4 right-5 text-7xl font-black select-none pointer-events-none"
                    style={{ color: a.numColor }}>
                    {pillar.number}
                  </span>

                  {/* Icon */}
                  <div className="w-[50px] h-[50px] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: a.iconBg, border: `1px solid ${a.border}` }}>
                    <Icon className="w-5 h-5" style={{ color: a.color }} />
                  </div>

                  <h3 className="text-base font-bold mb-3" style={{ color: "hsl(var(--foreground))" }}>{pillar.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
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
