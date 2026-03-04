import { motion } from "framer-motion";
import { Layers, Zap, MessageSquare, Key } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    title: "Systems-First Approach",
    description: "We don't execute random tactics. Every project starts with a clear strategy — a system designed around your revenue goals, not our convenience.",
  },
  {
    icon: Zap,
    title: "Full-Stack Execution",
    description: "Strategy, design, development, marketing, automation — we handle the full stack. You get one partner, not a fragmented vendor list.",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description: "You work directly with the people building your project. No account managers relaying messages. No delays. No miscommunication.",
  },
  {
    icon: Key,
    title: "You Own Everything",
    description: "Code, designs, ad accounts, domains — they're yours from day one. We don't create dependency. We build capability.",
  },
];

export function WhyNexon() {
  return (
    <section className="section-padding bg-surface/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Why Nexon Growth</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-5">
            Built different.{" "}
            <span className="text-gradient">Run differently.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Most agencies optimize for billable hours. We optimize for your business outcomes. The difference shows in how we work — and what you get.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="flex flex-col p-6 rounded-2xl bg-surface border border-border border-glow-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-cyan/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:from-primary/30 transition-all">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-bold mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
