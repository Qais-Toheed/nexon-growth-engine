import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Smartphone, TrendingUp, ShoppingBag, Bot } from "lucide-react";
import { servicesSummary } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  TrendingUp,
  ShoppingBag,
  Bot,
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

export function ServicesGrid() {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mb-14"
        >
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">What We Build</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-5">
            Digital systems that drive{" "}
            <span className="text-gradient">measurable growth</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every service we offer is engineered around one goal: generating qualified leads and converting them into revenue. We build, run, and optimize — you grow.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesSummary.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;
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
                  className="group flex flex-col h-full p-6 rounded-2xl bg-surface border border-border card-tilt border-glow-hover"
                >
                  <div className="w-11 h-11 rounded-xl bg-surface-elevated border border-border flex items-center justify-center mb-5 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-300">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                    {service.pain}
                  </p>
                  <div className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Learn more
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
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="mt-10 text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            View all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
