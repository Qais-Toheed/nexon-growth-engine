import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingBag, Cpu, Briefcase, Building2 } from "lucide-react";

const clients = [
  {
    icon: ShoppingBag, accent: "cyan",
    profile: "Ecommerce Brand",
    headline: "Traffic that doesn't convert is just expense",
    description: "You have a store that could be performing significantly better. The product is solid — the digital systems are holding you back.",
    metric: "+240%", metricLabel: "avg. revenue lift",
  },
  {
    icon: Cpu, accent: "primary",
    profile: "SaaS or Tech Startup",
    headline: "Your product is strong — your digital presence isn't selling it",
    description: "You need a website that communicates your value clearly, a marketing system that generates qualified trials, and automations that scale.",
    metric: "3×", metricLabel: "qualified trials",
  },
  {
    icon: Briefcase, accent: "violet",
    profile: "Professional Service",
    headline: "You need a steady pipeline, not one-off referrals",
    description: "Consultants, agencies, clinics, law firms — if your lead generation depends entirely on word-of-mouth, you're one quiet month away from a problem.",
    metric: "85%", metricLabel: "lead quality score",
  },
  {
    icon: Building2, accent: "primary",
    profile: "Ambitious SME",
    headline: "Ready to invest in growth — not just maintenance",
    description: "You've been running manually and know there are systems that could multiply your output. You need a partner who executes, not just advises.",
    metric: "5×", metricLabel: "output multiplier",
  },
];

const accentColors: Record<string, { color: string; border: string; bg: string; iconBg: string }> = {
  primary: {
    color:   "hsl(var(--primary))",
    border:  "hsl(var(--primary)/0.20)",
    bg:      "hsl(var(--primary)/0.05)",
    iconBg:  "linear-gradient(135deg, hsl(var(--primary)/0.14), hsl(var(--primary)/0.04))",
  },
  cyan: {
    color:   "hsl(var(--cyan))",
    border:  "hsl(var(--cyan)/0.20)",
    bg:      "hsl(var(--cyan)/0.05)",
    iconBg:  "linear-gradient(135deg, hsl(var(--cyan)/0.14), hsl(var(--cyan)/0.04))",
  },
  violet: {
    color:   "hsl(var(--violet))",
    border:  "hsl(var(--violet)/0.20)",
    bg:      "hsl(var(--violet)/0.05)",
    iconBg:  "linear-gradient(135deg, hsl(var(--violet)/0.14), hsl(var(--violet)/0.04))",
  },
};

export function BestFitClients() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(220 30% 97%) 0%, hsl(var(--background)) 100%)",
        paddingTop: "clamp(80px, 10vw, 160px)",
        paddingBottom: "clamp(80px, 10vw, 160px)",
      }}
    >
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(188 97% 44% / 0.06) 0%, transparent 65%)", filter: "blur(60px)" }} />
      <div className="absolute top-0 left-0 right-0 divider-glow" />

      <div className="container relative z-10">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24 items-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px w-10" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--cyan)))" }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--primary))" }}>
                Who We Work With
              </span>
            </div>
            <h2
              className="font-black leading-[1.0] tracking-tight"
              style={{ fontSize: "clamp(2.8rem,6vw,76px)", color: "hsl(var(--foreground))" }}
            >
              Built for{" "}
              <span style={{
                background: "linear-gradient(130deg, hsl(var(--primary)), hsl(var(--cyan)))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                growth-ready
              </span>{" "}
              businesses
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base leading-relaxed lg:pb-2"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            We're not for everyone — and that's by design. We partner with businesses that are ready to invest seriously in digital systems that perform.
          </motion.p>
        </div>

        {/* ── Alternating editorial rows ── */}
        <div className="space-y-5">
          {clients.map((client, i) => {
            const Icon = client.icon;
            const a = accentColors[client.accent];
            const isRight = i % 2 === 1;

            return (
              <motion.div
                key={client.profile}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to="/contact"
                  className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-10 p-8 lg:p-10 rounded-3xl transition-all duration-400 relative overflow-hidden"
                  style={{
                    background: "hsl(220 20% 100%)",
                    border: "1px solid hsl(var(--border))",
                    boxShadow: "0 2px 20px hsl(220 30% 10% / 0.05)",
                    flexDirection: isRight ? "row-reverse" : "row",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = a.border;
                    el.style.boxShadow = `0 16px 60px ${a.color.replace(")", "/0.10)")}, 0 4px 20px hsl(220 30% 10% / 0.06)`;
                    el.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "hsl(var(--border))";
                    el.style.boxShadow = "0 2px 20px hsl(220 30% 10% / 0.05)";
                    el.style.transform = "";
                  }}
                >
                  {/* Hover sweep */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{
                      background: `linear-gradient(${isRight ? "270" : "90"}deg, ${a.color.replace(")", "/0.03)")}, transparent 50%)`,
                    }}
                  />

                  {/* Metric block */}
                  <div
                    className="flex-shrink-0 w-28 h-28 lg:w-36 lg:h-36 rounded-3xl flex flex-col items-center justify-center relative z-10"
                    style={{
                      background: a.bg,
                      border: `1.5px solid ${a.border}`,
                    }}
                  >
                    <span className="text-3xl lg:text-4xl font-black leading-none" style={{ color: a.color }}>
                      {client.metric}
                    </span>
                    <span className="text-[10px] font-semibold text-center leading-tight mt-1.5 max-w-[70px]"
                      style={{ color: a.color.replace(")", "/0.65)") }}>
                      {client.metricLabel}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: a.iconBg, border: `1px solid ${a.border}` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: a.color }} />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: a.color }}>
                        {client.profile}
                      </span>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-2.5 leading-snug"
                      style={{ color: "hsl(var(--foreground))" }}>
                      {client.headline}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                      {client.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 relative z-10"
                    style={{ background: a.bg, border: `1px solid ${a.border}` }}
                  >
                    <ArrowUpRight className="w-4 h-4" style={{ color: a.color }} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
