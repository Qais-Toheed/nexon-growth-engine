import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { Globe, Smartphone, TrendingUp, ShoppingBag, Bot } from "lucide-react";
import { services } from "@/data/services";
import { LeadForm } from "@/components/sections/LeadForm";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTABanner } from "@/components/sections/CTABanner";

const iconMap: Record<string, React.ElementType> = {
  Globe, Smartphone, TrendingUp, ShoppingBag, Bot,
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = iconMap[service.icon] || Globe;

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-70" />
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
          >
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/services" className="hover:text-foreground transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{service.name}</span>
          </motion.div>

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-semibold text-primary">{service.name}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight"
            >
              {service.heroHeadline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed mb-8"
            >
              {service.heroPainPoint}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-bold transition-colors shadow-glow-blue"
              >
                Book a Free Strategy Call
              </a>
              <a
                href="#proposal"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-border/60 hover:border-primary/40 text-foreground text-sm font-semibold transition-colors"
              >
                Get a Proposal
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-20 bg-surface/40">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-7 rounded-2xl border border-destructive/20 bg-destructive/5"
            >
              <p className="text-xs font-semibold text-destructive uppercase tracking-wider mb-4">The Problem</p>
              <p className="text-base leading-relaxed text-foreground/90">{service.problemStatement}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-7 rounded-2xl border border-primary/20 bg-primary/5"
            >
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">Our Solution</p>
              <p className="text-base leading-relaxed text-foreground/90">{service.solutionStatement}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">What's Included</p>
            <h2 className="text-3xl sm:text-4xl font-black max-w-xl">
              Everything you need,{" "}
              <span className="text-gradient">nothing you don't</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.included.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-4 p-5 rounded-xl bg-surface border border-border border-glow-hover"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-surface/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-black max-w-xl">
              A clear process with{" "}
              <span className="text-gradient">no surprises</span>
            </h2>
          </motion.div>
          <div className="flex flex-col gap-5 max-w-2xl">
            {service.process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-5 p-6 rounded-xl bg-surface border border-border"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-cyan flex items-center justify-center flex-shrink-0 text-xs font-black text-background">
                  {String(step.step).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1.5">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries + Benefits */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Industries */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">Industries We Serve</p>
              <h2 className="text-2xl font-black mb-6">We've worked across these sectors</h2>
              <div className="flex flex-wrap gap-2.5">
                {service.industries.map((ind) => (
                  <span key={ind} className="px-3 py-1.5 rounded-full bg-surface border border-border text-sm text-muted-foreground font-medium">
                    {ind}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">Key Benefits</p>
              <h2 className="text-2xl font-black mb-6">What you gain from working with us</h2>
              <div className="flex flex-col gap-4">
                {service.benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold mb-0.5">{benefit.title}</p>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion faqs={service.faqs} />

      {/* Inline form */}
      <section id="proposal" className="py-20 bg-surface/40">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl sm:text-4xl font-black mb-4">
                <span className="text-gradient">{service.ctaHeadline}</span>
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll come back with a scoped proposal and honest recommendations within one business day.
              </p>
            </motion.div>
            <div className="p-8 rounded-2xl bg-surface border border-border">
              <LeadForm compact />
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
};

export default ServicePage;
