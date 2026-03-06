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
    pattern: "circles",
  },
  {
    icon: Cpu, accent: "primary",
    profile: "SaaS or Tech Startup",
    headline: "Your product is strong — your digital presence isn't selling it",
    description: "You need a website that communicates your value clearly, a marketing system that generates qualified trials, and automations that scale.",
    metric: "3×", metricLabel: "qualified trials",
    pattern: "grid",
  },
  {
    icon: Briefcase, accent: "violet",
    profile: "Professional Service",
    headline: "You need a steady pipeline, not one-off referrals",
    description: "Consultants, agencies, clinics, law firms — if your lead generation depends entirely on word-of-mouth, you're one quiet month away from a problem.",
    metric: "85%", metricLabel: "lead quality score",
    pattern: "dots",
  },
  {
    icon: Building2, accent: "primary",
    profile: "Ambitious SME",
    headline: "Ready to invest in growth — not just maintenance",
    description: "You've been running manually and know there are systems that could multiply your output. You need a partner who executes, not just advises.",
    metric: "5×", metricLabel: "output multiplier",
    pattern: "lines",
  },
];

const accentColors: Record<string, { color: string; border: string; bg: string; iconBg: string }> = {
  primary: {
    color:  "hsl(var(--primary))",
    border: "hsl(var(--primary)/0.22)",
    bg:     "hsl(var(--primary)/0.06)",
    iconBg: "linear-gradient(135deg, hsl(var(--primary)/0.14), hsl(var(--primary)/0.04))",
  },
  cyan: {
    color:  "hsl(var(--cyan))",
    border: "hsl(var(--cyan)/0.22)",
    bg:     "hsl(var(--cyan)/0.06)",
    iconBg: "linear-gradient(135deg, hsl(var(--cyan)/0.14), hsl(var(--cyan)/0.04))",
  },
  violet: {
    color:  "hsl(var(--violet))",
    border: "hsl(var(--violet)/0.22)",
    bg:     "hsl(var(--violet)/0.06)",
    iconBg: "linear-gradient(135deg, hsl(var(--violet)/0.14), hsl(var(--violet)/0.04))",
  },
};

// Visual background tile pattern
function PatternTile({ pattern, color }: { pattern: string; color: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-40">
      {pattern === "circles" && (
        <>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
            style={{ border: `1px solid ${color.replace(")", "/0.25)")}` }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full"
            style={{ border: `1px solid ${color.replace(")", "/0.15)")}` }} />
        </>
      )}
      {pattern === "grid" && (
        <div className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${color.replace(")", "/0.12)")} 1px, transparent 1px), linear-gradient(90deg, ${color.replace(")", "/0.12)")} 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }} />
      )}
      {pattern === "dots" && (
        <div className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, ${color.replace(")", "/0.30)")} 1.5px, transparent 1.5px)`,
            backgroundSize: "16px 16px",
          }} />
      )}
      {pattern === "lines" && (
        <>
          {[0, 1, 2, 3, 4].map(i => (
            <div key={i} className="absolute h-px w-full"
              style={{ top: `${20 + i * 20}%`, background: `linear-gradient(to right, transparent, ${color.replace(")", "/0.20)")}, transparent)` }} />
          ))}
        </>
      )}
    </div>
  );
}

export function BestFitClients() {
  return (
    <section className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(220 30% 97%) 0%, hsl(var(--background)) 100%)",
        paddingTop: "clamp(80px, 10vw, 160px)",
        paddingBottom: "clamp(80px, 10vw, 160px)",
      }}>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(188 97% 44% / 0.06) 0%, transparent 65%)", filter: "blur(60px)" }} />
      <div className="absolute top-0 left-0 right-0 divider-glow" />

      <div className="container relative z-10">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 items-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px w-10" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--cyan)))" }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--primary))" }}>Who We Work With</span>
            </div>
            <h2 className="font-black leading-[1.0] tracking-tight" style={{ fontSize: "clamp(2.8rem,6vw,76px)", color: "hsl(var(--foreground))" }}>
              Built for{" "}
              <span style={{
                background: "linear-gradient(130deg, hsl(var(--primary)), hsl(var(--cyan)))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>growth-ready</span>{" "}businesses
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base leading-relaxed lg:pb-2"
            style={{ color: "hsl(var(--muted-foreground))" }}>
            We're not for everyone — and that's by design. We partner with businesses that are ready to invest seriously in digital systems that perform.
          </motion.p>
        </div>

        {/* Visual tile grid — 2x2 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {clients.map((client, i) => {
            const Icon = client.icon;
            const a = accentColors[client.accent];
            return (
              <motion.div key={client.profile}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}>
                <Link to="/contact"
                  className="group relative flex flex-col rounded-3xl overflow-hidden transition-all duration-400 h-full block"
                  style={{
                    background: "hsl(220 20% 100%)",
                    border: "1px solid hsl(var(--border))",
                    boxShadow: "0 2px 20px hsl(220 30% 10% / 0.05)",
                    minHeight: "240px",
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = a.border; el.style.boxShadow = `0 16px 60px ${a.color.replace(")", "/0.10)")}, 0 4px 20px hsl(220 30% 10% / 0.06)`; el.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "hsl(var(--border))"; el.style.boxShadow = "0 2px 20px hsl(220 30% 10% / 0.05)"; el.style.transform = ""; }}>

                  {/* Top visual band with pattern */}
                  <div className="relative h-24 overflow-hidden flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${a.bg}, transparent)` }}>
                    <PatternTile pattern={client.pattern} color={a.color} />
                    <div className="relative z-10 flex items-center justify-between h-full px-6">
                      {/* Icon badge */}
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{ background: a.iconBg, border: `1.5px solid ${a.border}` }}>
                        <Icon className="w-5 h-5" style={{ color: a.color }} />
                      </div>
                      {/* Metric block */}
                      <div className="text-right">
                        <div className="text-3xl font-black leading-none" style={{ color: a.color }}>{client.metric}</div>
                        <div className="text-[10px] font-semibold" style={{ color: a.color.replace(")", "/0.65)") }}>{client.metricLabel}</div>
                      </div>
                    </div>
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      style={{ background: `linear-gradient(to right, ${a.color}, transparent)` }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <span className="text-[10px] font-black uppercase tracking-widest block mb-3" style={{ color: a.color }}>
                      {client.profile}
                    </span>
                    <h3 className="text-lg font-bold mb-2.5 leading-snug" style={{ color: "hsl(var(--foreground))" }}>
                      {client.headline}
                    </h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: "hsl(var(--muted-foreground))" }}>
                      {client.description}
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: a.color }}>
                      Talk to us
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
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
