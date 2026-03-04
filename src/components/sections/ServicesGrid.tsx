import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Smartphone, TrendingUp, ShoppingBag, Bot } from "lucide-react";
import { servicesSummary } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Globe, Smartphone, TrendingUp, ShoppingBag, Bot,
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

const gradients = [
  { bg: "from-primary/10 via-primary/5 to-transparent", border: "border-primary/15", icon: "from-primary/25 to-primary/10", glow: "group-hover:shadow-glow-blue" },
  { bg: "from-cyan/10 via-cyan/5 to-transparent", border: "border-cyan/15", icon: "from-cyan/25 to-cyan/10", glow: "group-hover:shadow-glow-cyan" },
  { bg: "from-violet/10 via-violet/5 to-transparent", border: "border-violet/15", icon: "from-violet/25 to-violet/10", glow: "group-hover:shadow-glow-violet" },
  { bg: "from-primary/10 via-cyan/5 to-transparent", border: "border-primary/15", icon: "from-primary/20 to-cyan/15", glow: "group-hover:shadow-glow-blue" },
  { bg: "from-violet/10 via-primary/5 to-transparent", border: "border-violet/15", icon: "from-violet/20 to-primary/15", glow: "group-hover:shadow-glow-violet" },
];

export function ServicesGrid() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Section ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] orb-blue opacity-10" />
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
            What We Build
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 leading-tight">
            Digital systems that drive{" "}
            <span className="text-gradient">measurable growth</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every service is engineered around one goal: generating qualified leads and converting them into revenue. We build, run, and optimize — you grow.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {servicesSummary.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;
            const g = gradients[i % gradients.length];
            return (
              <motion.div
                key={service.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className={`group relative flex flex-col h-full p-6 rounded-2xl bg-gradient-to-br ${g.bg} border ${g.border} border-glow-hover card-tilt card-shimmer overflow-hidden transition-all duration-400`}
                >
                  {/* Card inner glow on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse 80% 60% at 30% 30%, hsl(var(--primary) / 0.05), transparent)" }} />

                  {/* Icon */}
                  <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${g.icon} border border-white/8 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5 text-primary" />
                    <div className="absolute inset-0 rounded-xl glow-blue opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                  </div>

                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">{service.name}</h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed flex-1">{service.pain}</p>

                  <div className="flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                    Explore service
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group"
          >
            View all services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
