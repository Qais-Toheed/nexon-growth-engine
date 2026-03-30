import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, BarChart3, Share2, Palette, Video, Sparkles } from "lucide-react";
import { servicesSummary } from "@/data/services";
import { CTABanner } from "@/components/sections/CTABanner";

const iconMap: Record<string, React.ElementType> = {
  Globe, BarChart3, Share2, Palette, Video,
};

const configs = [
  { accent: "hsl(var(--primary))", grad: ["#0080FF","#52A8FF"],  num: "01", tag: "Paid Ads",     bar: "#0080FF" },
  { accent: "hsl(var(--cyan))",    grad: ["#09BDD6","#6FE0F0"],  num: "02", tag: "Social Media", bar: "#09BDD6" },
  { accent: "hsl(var(--violet))",  grad: ["#7A52F4","#B09AFF"],  num: "03", tag: "Web Dev",      bar: "#7A52F4" },
  { accent: "hsl(var(--primary))", grad: ["#0080FF","#52A8FF"],  num: "04", tag: "Design",       bar: "#0080FF" },
  { accent: "hsl(var(--cyan))",    grad: ["#09BDD6","#6FE0F0"],  num: "05", tag: "Video",        bar: "#09BDD6" },
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

      {/* Services visual grid */}
      <section className="py-24" style={{ background: "hsl(var(--background))" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesSummary.map((service, i) => {
              const Icon = iconMap[service.icon] || Globe;
              const c = configs[i % configs.length];

              return (
                <motion.div key={service.slug}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={i === 0 ? "md:col-span-2" : ""}
                >
                  <Link to={`/services/${service.slug}`}
                    className="group relative flex rounded-2xl overflow-hidden transition-all duration-400"
                    style={{ background: "hsl(220 20% 100%)", border: "1px solid hsl(var(--border))", minHeight: i === 0 ? "220px" : "180px", boxShadow: "0 2px 20px hsl(220 30% 10% / 0.05)" }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = c.accent.replace(")", "/0.30)"); el.style.boxShadow = `0 16px 60px ${c.accent.replace(")", "/0.12)")}`; el.style.transform = "translateY(-3px)"; }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "hsl(var(--border))"; el.style.boxShadow = "0 2px 20px hsl(220 30% 10% / 0.05)"; el.style.transform = ""; }}
                  >
                    {/* Visual left strip */}
                    <div className="w-32 lg:w-40 flex-shrink-0 flex items-center justify-center relative overflow-hidden"
                      style={{ background: `linear-gradient(135deg, ${c.accent.replace(")", "/0.08)")}, ${c.accent.replace(")", "/0.03)")})` }}>
                      {/* Number watermark */}
                      <span
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 select-none pointer-events-none"
                        style={{
                          color: c.accent,
                          fontSize: "clamp(56px, 6vw, 80px)",
                          opacity: 0.18,
                          top: "58%",
                        }}
                      >
                        {c.num}
                      </span>
                      {/* Icon */}
                      <div className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-400"
                        style={{ background: c.accent.replace(")", "/0.12)"), border: `1.5px solid ${c.accent.replace(")", "/0.25)")}` }}>
                        <Icon className="w-7 h-7" style={{ color: c.accent }} />
                      </div>
                      {/* Subtle animated orb */}
                      <div className="absolute bottom-2 right-2 z-0 w-6 h-6 rounded-full opacity-20"
                        style={{ background: c.accent, animation: "float 6s ease-in-out infinite", animationDelay: `${i * 0.5}s` }} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-7 lg:p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2.5 mb-3">
                        <h2 className={`font-bold leading-tight ${i === 0 ? "text-2xl lg:text-3xl" : "text-xl"}`}
                          style={{ color: "hsl(var(--foreground))" }}>
                          {service.name}
                        </h2>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide hidden sm:inline-flex"
                          style={{ background: c.accent.replace(")", "/0.08)"), color: c.accent, border: `1px solid ${c.accent.replace(")", "/0.18)")}` }}>
                          {c.tag}
                        </span>
                      </div>
                      <p className="text-sm font-semibold mb-2" style={{ color: c.accent }}>{service.tagline}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-lg">{service.pain}</p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-bold group-hover:gap-3 transition-all" style={{ color: c.accent }}>
                        Explore service
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 p-10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{ background: "linear-gradient(135deg, hsl(var(--primary)/0.06), hsl(var(--cyan)/0.03))", border: "1px solid hsl(var(--primary)/0.18)" }}
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4" style={{ color: "hsl(var(--primary))" }} />
                <h3 className="text-lg font-black">Not sure what you need?</h3>
              </div>
              <p className="text-muted-foreground text-sm max-w-md">
                Most businesses need a combination. Chat with us on WhatsApp and we'll help you figure out exactly what would have the most impact.
              </p>
            </div>
            <Link to="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2.5 font-bold px-7 py-3.5 rounded-xl transition-all duration-300 group"
              style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))", boxShadow: "0 4px 24px hsl(214 100% 50% / 0.28)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px hsl(214 100% 50% / 0.42)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px hsl(214 100% 50% / 0.28)"; (e.currentTarget as HTMLElement).style.transform = ""; }}
            >
              Get a free consultation
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
