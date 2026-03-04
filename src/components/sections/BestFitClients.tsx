import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Cpu, Briefcase, Building2 } from "lucide-react";

const clients = [
  {
    icon: ShoppingBag,
    profile: "Ecommerce Brand",
    headline: "You're getting traffic, but not enough of it converts",
    description: "You have a Shopify store or ecommerce site that could be performing significantly better. The product is solid — the digital systems are holding you back.",
    gradient: "from-cyan/10 to-primary/10",
    border: "border-cyan/20",
  },
  {
    icon: Cpu,
    profile: "SaaS or Tech Startup",
    headline: "Your product is strong — your digital presence isn't selling it",
    description: "You need a website that communicates your product's value clearly, a marketing system that generates trials, and automations that scale your operations without scaling headcount.",
    gradient: "from-primary/10 to-violet/10",
    border: "border-primary/20",
  },
  {
    icon: Briefcase,
    profile: "Professional Service Business",
    headline: "You need a steady pipeline, not one-off referrals",
    description: "Consultants, agencies, clinics, and law firms — if your lead generation depends entirely on word-of-mouth, you're one quiet month away from a problem.",
    gradient: "from-violet/10 to-cyan/10",
    border: "border-violet/20",
  },
  {
    icon: Building2,
    profile: "Ambitious SME",
    headline: "You're ready to invest in growth — not just maintenance",
    description: "You've been running the business manually and know there are systems and digital infrastructure that could multiply your output. You need a partner who executes, not just advises.",
    gradient: "from-primary/10 to-cyan/10",
    border: "border-primary/20",
  },
];

export function BestFitClients() {
  return (
    <section className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Who We Work With</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-5">
            We work best with{" "}
            <span className="text-gradient">growth-ready businesses</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're not for everyone — and that's by design. We partner with businesses that are ready to invest seriously in digital systems that perform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {clients.map((client, i) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={client.profile}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className={`group p-7 rounded-2xl bg-gradient-to-br ${client.gradient} border ${client.border} border-glow-hover`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-background/40 border border-border flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{client.profile}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 leading-snug">{client.headline}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{client.description}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all"
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
