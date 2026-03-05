import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Cpu, Briefcase, Building2 } from "lucide-react";

const clients = [
  {
    icon: ShoppingBag, number: "01", accent: "cyan",
    profile: "Ecommerce Brand",
    headline: "Traffic that doesn't convert is just expense",
    description: "You have a store that could be performing significantly better. The product is solid — the digital systems are holding you back from the revenue you should already be generating.",
  },
  {
    icon: Cpu, number: "02", accent: "primary",
    profile: "SaaS or Tech Startup",
    headline: "Your product is strong — your digital presence isn't selling it",
    description: "You need a website that communicates your value clearly, a marketing system that generates qualified trials, and automations that scale without scaling headcount.",
  },
  {
    icon: Briefcase, number: "03", accent: "violet",
    profile: "Professional Service Business",
    headline: "You need a steady pipeline, not one-off referrals",
    description: "Consultants, agencies, clinics, law firms — if your lead generation depends entirely on word-of-mouth, you're one quiet month away from a real problem.",
  },
  {
    icon: Building2, number: "04", accent: "primary",
    profile: "Ambitious SME",
    headline: "Ready to invest in growth — not just maintenance",
    description: "You've been running the business manually and know there are systems that could multiply your output. You need a partner who executes, not just advises.",
  },
];

const tokens: Record<string, { color: string; border: string; iconBg: string; numColor: string }> = {
  primary: {
    color:    "hsl(var(--primary))",
    border:   "hsl(var(--primary)/0.18)",
    iconBg:   "linear-gradient(135deg, hsl(var(--primary)/0.14), hsl(var(--primary)/0.05))",
    numColor: "hsl(var(--primary)/0.05)",
  },
  cyan: {
    color:    "hsl(var(--cyan))",
    border:   "hsl(var(--cyan)/0.18)",
    iconBg:   "linear-gradient(135deg, hsl(var(--cyan)/0.14), hsl(var(--cyan)/0.04))",
    numColor: "hsl(var(--cyan)/0.05)",
  },
  violet: {
    color:    "hsl(var(--violet))",
    border:   "hsl(var(--violet)/0.18)",
    iconBg:   "linear-gradient(135deg, hsl(var(--violet)/0.14), hsl(var(--violet)/0.04))",
    numColor: "hsl(var(--violet)/0.05)",
  },
};

export function BestFitClients() {
  return (
    <section className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(220 30% 97%) 0%, hsl(var(--background)) 100%)" }}>

      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[500px] orb-cyan opacity-[0.06] pointer-events-none" />
      <div className="divider-glow absolute top-0 left-0 right-0" />

      <div className="container relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] mb-5"
            style={{ color: "hsl(var(--primary))" }}>
            <span className="w-8 h-px" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--cyan)))" }} />
            Who We Work With
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-[68px] font-black leading-[1.0] mb-5"
            style={{ color: "hsl(var(--foreground))" }}>
            Built for{" "}
            <span className="text-gradient">growth-ready</span>
            {" "}businesses
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
            We're not for everyone — and that's by design. We partner with businesses that are ready to invest seriously in digital systems that perform.
          </p>
        </motion.div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {clients.map((client, i) => {
            const Icon = client.icon;
            const a = tokens[client.accent];
            return (
              <motion.div
                key={client.profile}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="group relative p-8 rounded-2xl card-white card-white-hover card-shimmer overflow-hidden h-full"
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
                  <span className="absolute bottom-5 right-6 text-9xl font-black select-none pointer-events-none"
                    style={{ color: a.numColor }}>
                    {client.number}
                  </span>

                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ background: a.iconBg, border: `1px solid ${a.border}` }}>
                      <Icon className="w-5 h-5" style={{ color: a.color }} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: a.color }}>
                      {client.profile}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3.5 leading-snug" style={{ color: "hsl(var(--foreground))" }}>{client.headline}</h3>
                  <p className="text-sm leading-relaxed mb-7" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {client.description}
                  </p>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-300 hover:gap-3"
                    style={{ color: a.color }}
                  >
                    Sound like you? Let's talk
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
