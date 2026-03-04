import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Smartphone, TrendingUp, ShoppingBag, Bot } from "lucide-react";
import { servicesSummary } from "@/data/services";
import { CTABanner } from "@/components/sections/CTABanner";

const iconMap: Record<string, React.ElementType> = {
  Globe, Smartphone, TrendingUp, ShoppingBag, Bot,
};

const Services = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">Our Services</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              Everything you need to{" "}
              <span className="text-gradient">grow digitally</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Five interconnected services, all engineered around one goal: turning your digital presence into your most reliable growth channel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="pb-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesSummary.map((service, i) => {
              const Icon = iconMap[service.icon] || Globe;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className="group flex gap-6 p-7 rounded-2xl bg-surface border border-border border-glow-hover card-tilt"
                  >
                    <div className="w-14 h-14 rounded-xl bg-surface-elevated border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl font-bold mb-2">{service.name}</h2>
                      <p className="text-sm font-medium text-primary mb-2">{service.tagline}</p>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.pain}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                        Explore service
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Not sure section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-violet/5 border border-primary/20 text-center"
          >
            <h3 className="text-xl font-bold mb-3">Not sure what you need?</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Most businesses need a combination. Book a free strategy call and we'll map out exactly what would have the most impact for your specific situation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-4 transition-all"
            >
              Book a free discovery call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
};

export default Services;
