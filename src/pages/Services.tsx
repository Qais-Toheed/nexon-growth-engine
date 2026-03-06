import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Smartphone, TrendingUp, ShoppingBag, Bot, Sparkles, CheckCircle, Package, Zap } from "lucide-react";
import { servicesSummary } from "@/data/services";
import { CTABanner } from "@/components/sections/CTABanner";

const iconMap: Record<string, React.ElementType> = {
  Globe, Smartphone, TrendingUp, ShoppingBag, Bot,
};

const configs = [
  { accent: "hsl(var(--primary))", bar: "#0080FF", num: "01", tag: "Web & Mobile",
    outcomes: ["Conversion-first architecture", "Fast load, SEO-ready", "You own all code"],
    mockupBars: [55, 80, 45, 92, 68, 85, 72],
    gradient: ["hsl(214 100% 50% / 0.08)", "hsl(188 97% 44% / 0.03)"],
  },
  { accent: "hsl(var(--cyan))", bar: "#09BDD6", num: "02", tag: "Paid Media",
    outcomes: ["Lower cost per lead", "Conversion-tracked", "No retainer traps"],
    mockupBars: [40, 72, 55, 88, 62, 78, 95],
    gradient: ["hsl(188 97% 44% / 0.08)", "hsl(214 100% 50% / 0.03)"],
  },
  { accent: "hsl(var(--violet))", bar: "#7A52F4", num: "03", tag: "Ecommerce",
    outcomes: ["Higher conversion rate", "Mobile-first checkout", "Repeat purchase systems"],
    mockupBars: [65, 45, 88, 55, 78, 40, 92],
    gradient: ["hsl(255 82% 62% / 0.08)", "hsl(214 100% 50% / 0.03)"],
  },
  { accent: "hsl(var(--primary))", bar: "#0080FF", num: "04", tag: "AI Systems",
    outcomes: ["Automate repetitive tasks", "24/7 lead qualification", "Scale without headcount"],
    mockupBars: [72, 55, 92, 40, 85, 62, 78],
    gradient: ["hsl(214 100% 50% / 0.08)", "hsl(255 82% 62% / 0.03)"],
  },
  { accent: "hsl(var(--cyan))", bar: "#09BDD6", num: "05", tag: "Strategy",
    outcomes: ["48h strategy delivery", "Full audit included", "Direct communication"],
    mockupBars: [80, 62, 45, 90, 55, 75, 88],
    gradient: ["hsl(188 97% 44% / 0.08)", "hsl(255 82% 62% / 0.03)"],
  },
];

// Browser mockup for service tile
function ServiceMockup({ c, Icon }: { c: typeof configs[0]; Icon: React.ElementType }) {
  return (
    <div className="w-full h-40 rounded-2xl overflow-hidden"
      style={{ background: "hsl(220 20% 100%)", border: "1px solid hsl(var(--border))", boxShadow: `0 8px 32px ${c.accent.replace(")", "/0.10)")}` }}>
      {/* Chrome */}
      <div className="flex items-center gap-1 px-3 py-2 border-b"
        style={{ borderColor: "hsl(var(--border))", background: "hsl(220 25% 97%)" }}>
        {["hsl(0 80% 65%)", "hsl(40 90% 58%)", "hsl(142 70% 45%)"].map((col, ci) => (
          <div key={ci} className="w-2 h-2 rounded-full" style={{ background: col }} />
        ))}
        <div className="flex-1 h-2 rounded-full mx-2" style={{ background: "hsl(220 20% 90%)" }} />
      </div>
      {/* Header strip */}
      <div className="h-10 flex items-center px-3 gap-2"
        style={{ background: `linear-gradient(135deg, ${c.gradient[0]}, ${c.gradient[1]})` }}>
        <div className="w-6 h-6 rounded-lg flex items-center justify-center"
          style={{ background: c.bar, opacity: 0.85 }}>
          <Icon className="w-3 h-3 text-white" />
        </div>
        <div className="h-2 w-20 rounded-full" style={{ background: c.bar, opacity: 0.6 }} />
      </div>
      {/* Bar chart */}
      <div className="flex items-end gap-1 px-3 pb-2 h-[72px]">
        {c.mockupBars.map((h, i) => (
          <motion.div key={i} className="flex-1 rounded-t-sm"
            style={{ background: c.bar, opacity: 0.2 + (i % 3) * 0.18 }}
            initial={{ height: "10%" }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 + i * 0.06 }} />
        ))}
      </div>
    </div>
  );
}

const bundles = [
  { name: "Startup Launch Pack", icon: Zap, accent: "hsl(var(--primary))",
    description: "Everything a new business needs to launch professionally and start generating leads.",
    includes: ["Web Design & Dev", "Brand Identity", "SEO Foundation", "Google Ads Setup"],
    badge: "Most Popular",
  },
  { name: "Ecommerce Growth Pack", icon: ShoppingBag, accent: "hsl(var(--cyan))",
    description: "For Shopify stores ready to scale revenue through better UX and targeted marketing.",
    includes: ["Shopify Redesign", "CRO Audit", "Meta + Google Ads", "Klaviyo Email Flows"],
    badge: null,
  },
  { name: "Ads + Landing Page Pack", icon: TrendingUp, accent: "hsl(var(--violet))",
    description: "High-converting campaigns backed by a landing page built for a single action.",
    includes: ["Paid Media Strategy", "Landing Page Build", "A/B Testing", "Monthly Reporting"],
    badge: null,
  },
  { name: "Automation Pack", icon: Bot, accent: "hsl(var(--primary))",
    description: "Eliminate manual work and build systems that run your business on autopilot.",
    includes: ["AI Chatbot", "CRM Workflows", "Lead Pipeline", "Process Documentation"],
    badge: "New",
  },
];

const Services = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden"
        style={{ background: "linear-gradient(160deg, hsl(220 35% 100%) 0%, hsl(218 40% 98%) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-[700px] h-[500px]"
            style={{ background: "radial-gradient(ellipse, hsl(214 100% 50% / 0.08) 0%, transparent 65%)", filter: "blur(60px)" }} />
          <div className="absolute left-0 bottom-0 w-[500px] h-[400px]"
            style={{ background: "radial-gradient(ellipse, hsl(255 82% 62% / 0.05) 0%, transparent 65%)", filter: "blur(60px)" }} />
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle, hsl(214 100% 50% / 0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }} />
        </div>
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--cyan)))" }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--primary))" }}>Our Services</span>
            </div>
            <h1 className="font-black leading-[1.02] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.8rem,7vw,90px)", color: "hsl(var(--foreground))" }}>
              Everything you need to{" "}
              <span style={{
                background: "linear-gradient(130deg, hsl(var(--primary)), hsl(var(--cyan)))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>grow digitally</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Five interconnected services, all engineered around one goal: turning your digital presence into your most reliable growth channel.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 divider-glow" />
      </section>

      {/* Services visual tiles */}
      <section className="py-24" style={{ background: "hsl(var(--background))" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesSummary.map((service, i) => {
              const Icon = iconMap[service.icon] || Globe;
              const c = configs[i % configs.length];
              return (
                <motion.div key={service.slug}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={i === 0 ? "md:col-span-2 lg:col-span-2" : ""}>
                  <Link to={`/services/${service.slug}`}
                    className="group relative flex flex-col rounded-3xl overflow-hidden h-full transition-all duration-400 block"
                    style={{ background: "hsl(220 20% 100%)", border: "1px solid hsl(var(--border))", boxShadow: "0 2px 20px hsl(220 30% 10% / 0.05)" }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = c.accent.replace(")", "/0.30)"); el.style.boxShadow = `0 16px 60px ${c.accent.replace(")", "/0.12)")}`; el.style.transform = "translateY(-4px)"; }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "hsl(var(--border))"; el.style.boxShadow = "0 2px 20px hsl(220 30% 10% / 0.05)"; el.style.transform = ""; }}>
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-t-3xl"
                      style={{ background: `linear-gradient(to right, ${c.accent}, transparent)` }} />

                    {/* Mockup preview */}
                    <div className="p-5 pb-0">
                      <ServiceMockup c={c} Icon={Icon} />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-black uppercase tracking-widest" style={{ color: c.accent }}>{c.num}</span>
                        <span className="w-px h-3" style={{ background: "hsl(var(--border))" }} />
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wide"
                          style={{ background: c.accent.replace(")", "/0.08)"), color: c.accent, border: `1px solid ${c.accent.replace(")", "/0.18)")}` }}>
                          {c.tag}
                        </span>
                      </div>
                      <h2 className={`font-bold leading-tight mb-1.5 ${i === 0 ? "text-xl" : "text-lg"}`}
                        style={{ color: "hsl(var(--foreground))" }}>
                        {service.name}
                      </h2>
                      <p className="text-sm font-semibold mb-2" style={{ color: c.accent }}>{service.tagline}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-4">{service.pain}</p>

                      {/* Outcomes */}
                      <div className="flex flex-col gap-1.5 mb-5 flex-1">
                        {c.outcomes.map(o => (
                          <div key={o} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: c.accent }} />
                            <span className="text-xs font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>{o}</span>
                          </div>
                        ))}
                      </div>

                      <div className="inline-flex items-center gap-1.5 text-sm font-bold group-hover:gap-2.5 transition-all" style={{ color: c.accent }}>
                        Explore service <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bundles section */}
      <section className="py-24" style={{ background: "hsl(220 30% 97%)" }}>
        <div className="absolute top-0 left-0 right-0 divider-glow" />
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--cyan)))" }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--primary))" }}>Service Bundles</span>
              <div className="h-px w-10" style={{ background: "linear-gradient(to left, hsl(var(--primary)), hsl(var(--cyan)))" }} />
            </div>
            <h2 className="font-black leading-tight mb-4" style={{ fontSize: "clamp(2rem,5vw,60px)", color: "hsl(var(--foreground))" }}>
              Pre-packaged growth systems
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "hsl(var(--muted-foreground))" }}>
              Most clients need a combination of services. These bundles are designed for the most common growth scenarios.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {bundles.map((bundle, i) => {
              const Icon = bundle.icon;
              return (
                <motion.div key={bundle.name}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.09 }}>
                  <Link to="/contact"
                    className="group relative flex flex-col rounded-3xl overflow-hidden h-full transition-all duration-400 block"
                    style={{ background: "hsl(220 20% 100%)", border: "1px solid hsl(var(--border))", padding: "24px" }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = bundle.accent.replace(")", "/0.30)"); el.style.boxShadow = `0 16px 56px ${bundle.accent.replace(")", "/0.12)")}`; el.style.transform = "translateY(-4px)"; }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "hsl(var(--border))"; el.style.boxShadow = ""; el.style.transform = ""; }}>

                    <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-t-3xl"
                      style={{ background: `linear-gradient(to right, ${bundle.accent}, transparent)` }} />

                    <div className="flex items-start justify-between mb-4">
                      <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                        style={{ background: bundle.accent.replace(")", "/0.10)"), border: `1.5px solid ${bundle.accent.replace(")", "/0.20)")}` }}>
                        <Icon className="w-5 h-5" style={{ color: bundle.accent }} />
                      </div>
                      {bundle.badge && (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wide text-white"
                          style={{ background: bundle.accent }}>
                          {bundle.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold mb-2" style={{ color: "hsl(var(--foreground))" }}>{bundle.name}</h3>
                    <p className="text-xs leading-relaxed mb-5 flex-1" style={{ color: "hsl(var(--muted-foreground))" }}>{bundle.description}</p>

                    <div className="flex flex-col gap-1.5 mb-5">
                      {bundle.includes.map(inc => (
                        <div key={inc} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: bundle.accent }} />
                          <span className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>{inc}</span>
                        </div>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-bold mt-auto" style={{ color: bundle.accent }}>
                      Enquire about this bundle <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Not sure CTA */}
      <section className="py-20" style={{ background: "hsl(var(--background))" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-10 lg:p-14 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-8"
            style={{ background: "linear-gradient(135deg, hsl(var(--primary)/0.06), hsl(var(--cyan)/0.03))", border: "1px solid hsl(var(--primary)/0.18)" }}>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4" style={{ color: "hsl(var(--primary))" }} />
                <h3 className="text-lg font-black">Not sure what you need?</h3>
              </div>
              <p className="text-muted-foreground text-sm max-w-md">
                Most businesses need a combination. Book a free strategy call and we'll map out exactly what would have the most impact.
              </p>
            </div>
            <Link to="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2.5 font-bold px-7 py-3.5 rounded-xl transition-all duration-300 group"
              style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))", boxShadow: "0 4px 24px hsl(214 100% 50% / 0.28)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px hsl(214 100% 50% / 0.42)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px hsl(214 100% 50% / 0.28)"; (e.currentTarget as HTMLElement).style.transform = ""; }}>
              Book a free discovery call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
};

export default Services;
