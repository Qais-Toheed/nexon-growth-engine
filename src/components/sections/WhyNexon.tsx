import { motion } from "framer-motion";
import { Layers, Zap, MessageSquare, Key } from "lucide-react";

const pillars = [
  {
    icon: Layers, number: "01", title: "Systems-First Approach", accent: "primary",
    description: "Every project starts with a clear strategy — a system designed around your revenue goals, not our convenience.",
    stat: "100%", statLabel: "strategy before build",
  },
  {
    icon: Zap, number: "02", title: "Full-Stack Execution", accent: "cyan",
    description: "Strategy, design, development, marketing, automation — one partner, not a fragmented vendor list.",
    stat: "5×", statLabel: "disciplines in one team",
  },
  {
    icon: MessageSquare, number: "03", title: "Direct Communication", accent: "violet",
    description: "You work directly with the people building your project. No account managers. No delays.",
    stat: "48h", statLabel: "avg. response time",
  },
  {
    icon: Key, number: "04", title: "You Own Everything", accent: "primary",
    description: "Code, designs, ad accounts, domains — yours from day one. We build capability, not dependency.",
    stat: "∞", statLabel: "asset ownership",
  },
];

const accentColors: Record<string, string> = {
  primary: "hsl(var(--primary))",
  cyan:    "hsl(var(--cyan))",
  violet:  "hsl(var(--violet))",
};

export function WhyNexon() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(220 30% 97%) 100%)",
        paddingTop: "clamp(80px, 10vw, 160px)",
        paddingBottom: "clamp(80px, 10vw, 160px)",
      }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[700px] h-[400px]"
          style={{ background: "radial-gradient(ellipse, hsl(255 82% 62% / 0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute top-0 left-0 w-[600px] h-[300px]"
          style={{ background: "radial-gradient(ellipse, hsl(214 100% 50% / 0.05) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>
      <div className="absolute top-0 left-0 right-0 divider-glow" />

      <div className="container relative z-10">

        {/* ── Split header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px w-10" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--cyan)))" }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--primary))" }}>
                Why Nexon Growth
              </span>
            </div>
            <h2
              className="font-black leading-[1.0] tracking-tight"
              style={{ fontSize: "clamp(2.8rem,6vw,76px)", color: "hsl(var(--foreground))" }}
            >
              Built different.<br />
              <span style={{
                background: "linear-gradient(130deg, hsl(var(--primary)), hsl(var(--cyan)))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Run differently.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:pb-2"
          >
            <p className="text-lg leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
              Most agencies optimize for billable hours. We optimize for your outcomes. The difference shows in how we work — and what you get at the end of every engagement.
            </p>
          </motion.div>
        </div>

        {/* ── Asymmetric pillar grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const accent = accentColors[pillar.accent];

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ marginTop: i % 2 === 1 ? "40px" : "0" }}
              >
                <div
                  className="group relative flex flex-col h-full rounded-3xl overflow-hidden transition-all duration-400 cursor-default"
                  style={{
                    background: "hsl(220 20% 100%)",
                    border: "1px solid hsl(var(--border))",
                    boxShadow: "0 2px 20px hsl(220 30% 10% / 0.05)",
                    padding: "clamp(24px, 3vw, 36px)",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = accent.replace(")", "/0.30)");
                    el.style.boxShadow = `0 16px 60px ${accent.replace(")", "/0.12)")}, 0 4px 20px hsl(220 30% 10% / 0.06)`;
                    el.style.transform = "translateY(-6px)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "hsl(var(--border))";
                    el.style.boxShadow = "0 2px 20px hsl(220 30% 10% / 0.05)";
                    el.style.transform = "";
                  }}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-t-3xl"
                    style={{ background: `linear-gradient(to right, ${accent}, transparent)` }}
                  />

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: accent.replace(")", "/0.10)"),
                      border: `1.5px solid ${accent.replace(")", "/0.22)")}`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: accent }} />
                  </div>

                  {/* Stat */}
                  <div className="mb-5">
                    <div
                      className="text-5xl font-black leading-none mb-1"
                      style={{ color: accent }}
                    >
                      {pillar.stat}
                    </div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider"
                      style={{ color: accent.replace(")", "/0.6)") }}>
                      {pillar.statLabel}
                    </div>
                  </div>

                  <h3 className="text-base font-bold mb-3" style={{ color: "hsl(var(--foreground))" }}>
                    {pillar.title}
                  </h3>
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
