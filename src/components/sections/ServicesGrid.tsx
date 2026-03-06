import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Smartphone, TrendingUp, ShoppingBag, Bot, Sparkles, ExternalLink } from "lucide-react";
import { servicesSummary } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Globe, Smartphone, TrendingUp, ShoppingBag, Bot,
};

const configs = [
  {
    accent: "hsl(var(--primary))", bar: "#0080FF", num: "01", tag: "Web & Mobile",
    outcomes: ["Conversion-first architecture", "Fast load, SEO-ready", "You own everything"],
    mockupBars: [55, 80, 45, 92, 68, 85, 72],
    gradient: ["hsl(214 100% 50% / 0.07)", "hsl(188 97% 44% / 0.03)"],
  },
  {
    accent: "hsl(var(--cyan))",    bar: "#09BDD6", num: "02", tag: "Paid Media",
    outcomes: ["Lower cost per lead", "Conversion-tracked", "No retainer traps"],
    mockupBars: [40, 72, 55, 88, 62, 78, 95],
    gradient: ["hsl(188 97% 44% / 0.07)", "hsl(214 100% 50% / 0.03)"],
  },
  {
    accent: "hsl(var(--violet))",  bar: "#7A52F4", num: "03", tag: "Ecommerce",
    outcomes: ["Higher conversion rate", "Mobile-first checkout", "Repeat purchase systems"],
    mockupBars: [65, 45, 88, 55, 78, 40, 92],
    gradient: ["hsl(255 82% 62% / 0.07)", "hsl(214 100% 50% / 0.03)"],
  },
  {
    accent: "hsl(var(--primary))", bar: "#0080FF", num: "04", tag: "AI Systems",
    outcomes: ["Automate repetitive tasks", "24/7 lead qualification", "Scale without headcount"],
    mockupBars: [72, 55, 92, 40, 85, 62, 78],
    gradient: ["hsl(214 100% 50% / 0.07)", "hsl(255 82% 62% / 0.03)"],
  },
  {
    accent: "hsl(var(--cyan))",    bar: "#09BDD6", num: "05", tag: "Strategy",
    outcomes: ["48h strategy delivery", "Full audit included", "Direct communication"],
    mockupBars: [80, 62, 45, 90, 55, 75, 88],
    gradient: ["hsl(188 97% 44% / 0.07)", "hsl(255 82% 62% / 0.03)"],
  },
];

// Mini browser mockup for service card
function ServiceMockupCard({ c, Icon }: { c: typeof configs[0]; Icon: React.ElementType }) {
  return (
    <div className="w-44 h-28 rounded-xl overflow-hidden flex-shrink-0"
      style={{ background: "hsl(220 20% 100%)", border: "1px solid hsl(var(--border))", boxShadow: `0 8px 32px ${c.accent.replace(")", "/0.12)")}` }}>
      {/* Browser chrome */}
      <div className="flex items-center gap-1 px-2 py-1.5 border-b"
        style={{ borderColor: "hsl(var(--border))", background: "hsl(220 25% 97%)" }}>
        {["hsl(0 80% 65%)", "hsl(40 90% 58%)", "hsl(142 70% 45%)"].map((col, ci) => (
          <div key={ci} className="w-1.5 h-1.5 rounded-full" style={{ background: col }} />
        ))}
        <div className="flex-1 h-1.5 rounded-full ml-1" style={{ background: "hsl(var(--border))" }} />
      </div>
      {/* Gradient header strip */}
      <div className="h-8 flex items-center px-2 gap-1.5"
        style={{ background: `linear-gradient(135deg, ${c.gradient[0]}, ${c.gradient[1]})` }}>
        <div className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0"
          style={{ background: c.bar, opacity: 0.85 }}>
          <Icon className="w-2 h-2 text-white" />
        </div>
        <div className="h-1.5 w-16 rounded-full" style={{ background: c.bar, opacity: 0.6 }} />
      </div>
      {/* Bar chart */}
      <div className="flex items-end gap-0.5 px-2 pb-1.5 h-[44px]">
        {c.mockupBars.slice(0, 6).map((h, i) => (
          <div key={i} className="flex-1 rounded-t-[2px]"
            style={{ height: `${h}%`, background: c.bar, opacity: 0.25 + (i % 3) * 0.22 }} />
        ))}
      </div>
    </div>
  );
}

export function ServicesGrid() {
  return (
    <section id="services" className="relative overflow-hidden"
      style={{ background: "hsl(var(--background))", paddingTop: "clamp(80px,10vw,160px)", paddingBottom: "clamp(80px,10vw,160px)" }}>

      <div className="absolute top-0 left-0 right-0 h-px divider-glow pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(214 100% 50% / 0.06) 0%, transparent 70%)", filter: "blur(40px)" }} />

      <div className="container relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--cyan)))" }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--primary))" }}>What We Build</span>
            </div>
            <h2 className="font-black leading-[1.0] tracking-tight" style={{ fontSize: "clamp(2.8rem,6.5vw,80px)", color: "hsl(var(--foreground))" }}>
              Digital systems<br />
              <span style={{
                background: "linear-gradient(130deg, hsl(var(--primary)), hsl(var(--cyan)))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>that drive revenue.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-sm lg:pb-3">
            <p className="text-base leading-relaxed mb-5" style={{ color: "hsl(var(--muted-foreground))" }}>
              Five interconnected services engineered around one goal: generating qualified leads and converting them into revenue.
            </p>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold group" style={{ color: "hsl(var(--primary))" }}>
              View all services
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Service tile cards — visual grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {servicesSummary.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;
            const c = configs[i % configs.length];

            return (
              <motion.div key={service.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={i === 0 ? "md:col-span-2 lg:col-span-2" : ""}
              >
                <Link to={`/services/${service.slug}`}
                  className="group relative flex flex-col rounded-3xl overflow-hidden h-full transition-all duration-400 block"
                  style={{ background: "hsl(220 20% 100%)", border: "1px solid hsl(var(--border))", boxShadow: "0 2px 20px hsl(220 30% 10% / 0.05)" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = c.accent.replace(")", "/0.30)"); el.style.boxShadow = `0 16px 60px ${c.accent.replace(")", "/0.12)")}`; el.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "hsl(var(--border))"; el.style.boxShadow = "0 2px 20px hsl(220 30% 10% / 0.05)"; el.style.transform = ""; }}
                >
                  {/* Top accent line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-t-3xl"
                    style={{ background: `linear-gradient(to right, ${c.accent}, transparent)` }} />

                  {/* Visual mockup header */}
                  <div className="h-32 relative overflow-hidden flex items-end justify-between px-6 pb-0 pt-4"
                    style={{ background: `linear-gradient(135deg, ${c.accent.replace(")", "/0.07)")}, ${c.accent.replace(")", "/0.02)")})` }}>
                    {/* Number watermark */}
                    <span className="absolute top-3 right-4 text-6xl font-black select-none"
                      style={{ color: c.accent, opacity: 0.07, fontSize: "clamp(40px,4vw,56px)", lineHeight: 1 }}>{c.num}</span>
                    {/* Mini bar chart */}
                    <div className="flex items-end gap-1 h-20 flex-1 max-w-[120px]">
                      {c.mockupBars.slice(0, 5).map((h, bi) => (
                        <motion.div key={bi} className="flex-1 rounded-t-sm"
                          style={{ background: c.bar, opacity: 0.25 + (bi % 2) * 0.2 }}
                          initial={{ height: "10%" }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.1 + bi * 0.07 }} />
                      ))}
                    </div>
                    {/* Icon badge */}
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                      style={{ background: c.accent.replace(")", "/0.12)"), border: `1.5px solid ${c.accent.replace(")", "/0.22)")}` }}>
                      <Icon className="w-5 h-5" style={{ color: c.accent }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2.5">
                      <h3 className={`font-bold leading-tight ${i === 0 ? "text-xl" : "text-lg"}`}
                        style={{ color: "hsl(var(--foreground))" }}>
                        {service.name}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wide hidden sm:inline-flex"
                        style={{ background: c.accent.replace(")", "/0.08)"), color: c.accent, border: `1px solid ${c.accent.replace(")", "/0.18)")}` }}>
                        {c.tag}
                      </span>
                    </div>
                    <p className="text-sm font-semibold mb-2" style={{ color: c.accent }}>{service.tagline}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">{service.pain}</p>

                    {/* Outcomes bullets */}
                    <div className="flex flex-col gap-1.5 mb-5 flex-1">
                      {c.outcomes.map(o => (
                        <div key={o} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: c.accent }} />
                          <span className="text-xs font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>{o}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="inline-flex items-center gap-1.5 text-sm font-bold group-hover:gap-2.5 transition-all" style={{ color: c.accent }}>
                      Explore service
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(214 100% 50% / 0.06), hsl(188 97% 44% / 0.04), hsl(255 82% 62% / 0.04))",
            border: "1px solid hsl(var(--border))",
          }}>
          <div className="p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4" style={{ color: "hsl(var(--primary))" }} />
                <p className="text-sm font-bold uppercase tracking-widest" style={{ color: "hsl(var(--primary))" }}>Not sure where to start?</p>
              </div>
              <h3 className="text-2xl lg:text-3xl font-black" style={{ color: "hsl(var(--foreground))" }}>
                Let us audit your digital presence — free.
              </h3>
            </div>
            <Link to="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2.5 font-bold px-8 py-4 rounded-2xl transition-all duration-300 group"
              style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))", boxShadow: "0 4px 24px hsl(214 100% 50% / 0.30)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px hsl(214 100% 50% / 0.45)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px hsl(214 100% 50% / 0.30)"; (e.currentTarget as HTMLElement).style.transform = ""; }}>
              Request Free Audit
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
