import { motion } from "framer-motion";
import { Layers, Zap, MessageSquare, Key } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    number: "01",
    title: "Systems-First Approach",
    description: "Every project starts with a clear strategy — a system designed around your revenue goals, not our convenience.",
    color: "primary",
  },
  {
    icon: Zap,
    number: "02",
    title: "Full-Stack Execution",
    description: "Strategy, design, development, marketing, automation — we handle the full stack. One partner, not a fragmented vendor list.",
    color: "cyan",
  },
  {
    icon: MessageSquare,
    number: "03",
    title: "Direct Communication",
    description: "You work directly with the people building your project. No account managers. No delays. No miscommunication.",
    color: "violet",
  },
  {
    icon: Key,
    number: "04",
    title: "You Own Everything",
    description: "Code, designs, ad accounts, domains — yours from day one. We build capability, not dependency.",
    color: "primary",
  },
];

const colorMap: Record<string, { bg: string; border: string; iconBg: string; num: string }> = {
  primary: {
    bg: "from-primary/8 to-transparent",
    border: "border-primary/15",
    iconBg: "from-primary/20 to-primary/8",
    num: "text-primary/30",
  },
  cyan: {
    bg: "from-cyan/8 to-transparent",
    border: "border-cyan/15",
    iconBg: "from-cyan/20 to-cyan/8",
    num: "text-cyan/30",
  },
  violet: {
    bg: "from-violet/8 to-transparent",
    border: "border-violet/15",
    iconBg: "from-violet/20 to-violet/8",
    num: "text-violet/30",
  },
};

export function WhyNexon() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background glow layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] orb-violet opacity-10" />
        <div className="absolute top-0 left-0 w-[400px] h-[300px] orb-blue opacity-8" />
      </div>

      {/* Top divider */}
      <div className="divider-glow mb-0 absolute top-0 left-0 right-0" />

      <div className="container relative z-10">

        {/* Header — split layout */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest mb-4">
              <span className="w-6 h-px bg-gradient-to-r from-primary to-cyan" />
              Why Nexon Growth
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
              Built different.{" "}
              <span className="text-gradient">Run differently.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-md text-muted-foreground lg:text-right leading-relaxed"
          >
            Most agencies optimize for billable hours. We optimize for your outcomes. The difference shows in how we work — and what you get.
          </motion.p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const c = colorMap[pillar.color];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative flex flex-col p-6 rounded-2xl bg-gradient-to-br ${c.bg} border ${c.border} border-glow-hover card-shimmer overflow-hidden`}
              >
                {/* Large background number */}
                <span className={`absolute top-3 right-4 text-6xl font-black ${c.num} select-none pointer-events-none`}>
                  {pillar.number}
                </span>

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.iconBg} border border-white/8 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                <h3 className="text-base font-bold mb-2.5 relative z-10">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
