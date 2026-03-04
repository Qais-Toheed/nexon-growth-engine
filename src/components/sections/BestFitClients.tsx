import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Cpu, Briefcase, Building2 } from "lucide-react";

const clients = [
  {
    icon: ShoppingBag,
    profile: "Ecommerce Brand",
    headline: "Traffic that doesn't convert is just expense",
    description: "You have a store that could be performing significantly better. The product is solid — the digital systems are holding you back from the revenue you should already be generating.",
    accent: "cyan",
    number: "01",
  },
  {
    icon: Cpu,
    profile: "SaaS or Tech Startup",
    headline: "Your product is strong — your digital presence isn't selling it",
    description: "You need a website that communicates your value clearly, a marketing system that generates qualified trials, and automations that scale without scaling headcount.",
    accent: "primary",
    number: "02",
  },
  {
    icon: Briefcase,
    profile: "Professional Service Business",
    headline: "You need a steady pipeline, not one-off referrals",
    description: "Consultants, agencies, clinics, law firms — if your lead generation depends entirely on word-of-mouth, you're one quiet month away from a real problem.",
    accent: "violet",
    number: "03",
  },
  {
    icon: Building2,
    profile: "Ambitious SME",
    headline: "Ready to invest in growth — not just maintenance",
    description: "You've been running the business manually and know there are systems that could multiply your output. You need a partner who executes, not just advises.",
    accent: "primary",
    number: "04",
  },
];

const accentMap: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
  primary: { bg: "from-primary/10 via-primary/4", border: "border-primary/20", text: "text-primary", iconBg: "bg-primary/15" },
  cyan: { bg: "from-cyan/10 via-cyan/4", border: "border-cyan/20", text: "text-cyan", iconBg: "bg-cyan/15" },
  violet: { bg: "from-violet/10 via-violet/4", border: "border-violet/20", text: "text-violet", iconBg: "bg-violet/15" },
};

export function BestFitClients() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 w-[500px] h-[400px] orb-cyan opacity-8" />
      </div>

      <div className="container relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest mb-4">
            <span className="w-6 h-px bg-gradient-to-r from-primary to-cyan" />
            Who We Work With
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 leading-tight">
            Built for{" "}
            <span className="text-gradient">growth-ready</span>
            {" "}businesses
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're not for everyone — and that's by design. We partner with businesses that are ready to invest seriously in digital systems that perform.
          </p>
        </motion.div>

        {/* 2-col grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {clients.map((client, i) => {
            const Icon = client.icon;
            const a = accentMap[client.accent];
            return (
              <motion.div
                key={client.profile}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative p-7 rounded-2xl bg-gradient-to-br ${a.bg} to-transparent border ${a.border} border-glow-hover card-shimmer overflow-hidden`}
              >
                {/* Background number */}
                <span className={`absolute bottom-4 right-5 text-8xl font-black ${a.text} opacity-[0.07] select-none pointer-events-none`}>
                  {client.number}
                </span>

                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-11 h-11 rounded-xl ${a.iconBg} border border-white/8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-5 h-5 ${a.text}`} />
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-widest ${a.text}`}>{client.profile}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 leading-snug">{client.headline}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{client.description}</p>

                <Link
                  to="/contact"
                  className={`inline-flex items-center gap-1.5 text-sm font-bold ${a.text} hover:gap-3 transition-all duration-300`}
                >
                  Sound like you? Let's talk
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
