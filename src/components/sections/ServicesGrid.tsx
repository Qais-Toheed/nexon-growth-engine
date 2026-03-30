import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Globe, BarChart3, Share2, Palette, Video, Sparkles } from "lucide-react";
import { servicesSummary } from "@/data/services";
import { useRef } from "react";

const iconMap: Record<string, React.ElementType> = {
  Globe, BarChart3, Share2, Palette, Video,
};

const configs = [
  { accent: "hsl(var(--primary))", num: "01", tag: "Paid Ads",       mockupColors: ["#0080FF","#E8F0FF","#C5D9FF"] },
  { accent: "hsl(var(--cyan))",    num: "02", tag: "Social Media",   mockupColors: ["#09BDD6","#E0F8FC","#A8EDF6"] },
  { accent: "hsl(var(--violet))",  num: "03", tag: "Web Dev",        mockupColors: ["#7A52F4","#EDE8FF","#C4B3FF"] },
  { accent: "hsl(var(--primary))", num: "04", tag: "Design",         mockupColors: ["#0080FF","#E8F0FF","#C5D9FF"] },
  { accent: "hsl(var(--cyan))",    num: "05", tag: "Video",          mockupColors: ["#09BDD6","#E0F8FC","#A8EDF6"] },
];

// Inline mini browser mockup component
function ServiceMockup({ accent, mockupColors }: { accent: string; mockupColors: string[] }) {
  return (
    <div className="w-36 h-24 rounded-xl overflow-hidden flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0"
      style={{
        background: "hsl(220 20% 100%)",
        border: "1px solid hsl(var(--border))",
        boxShadow: `0 8px 32px ${accent.replace(")", "/0.14)")}`,
      }}>
      {/* Browser chrome */}
      <div className="flex items-center gap-1 px-2 py-1.5 border-b" style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--surface))" }}>
        {["hsl(0 80% 65%)", "hsl(40 90% 58%)", "hsl(142 70% 45%)"].map((c, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: c }} />
        ))}
        <div className="flex-1 h-1.5 rounded-full ml-1" style={{ background: "hsl(var(--border))" }} />
      </div>
      {/* Content */}
      <div className="p-2 space-y-1.5">
        <div className="h-2 w-3/5 rounded-full" style={{ background: mockupColors[0], opacity: 0.8 }} />
        <div className="h-1.5 w-full rounded-full" style={{ background: mockupColors[1] }} />
        <div className="h-1.5 w-4/5 rounded-full" style={{ background: mockupColors[2] }} />
        <div className="flex gap-1.5 mt-1">
          <div className="h-5 flex-1 rounded" style={{ background: mockupColors[1] }} />
          <div className="h-5 flex-1 rounded" style={{ background: mockupColors[1] }} />
        </div>
      </div>
    </div>
  );
}

export function ServicesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section id="services" ref={sectionRef} className="relative overflow-hidden"
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
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--cyan)))" }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--primary))" }}>What We Do</span>
            </div>
            <h2 className="font-black leading-[1.0] tracking-tight" style={{ fontSize: "clamp(2.8rem,6.5vw,80px)", color: "hsl(var(--foreground))" }}>
              Digital services<br />
              <span style={{
                background: "linear-gradient(130deg, hsl(var(--primary)), hsl(var(--cyan)))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                that drive revenue.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-sm lg:pb-3"
          >
            <p className="text-base leading-relaxed mb-5" style={{ color: "hsl(var(--muted-foreground))" }}>
              Five interconnected services engineered around one goal: building your brand, generating qualified leads, and converting them into revenue.
            </p>
            <Link to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold group"
              style={{ color: "hsl(var(--primary))" }}>
              View all services
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Service rows with mockup preview */}
        <div className="flex flex-col divide-y" style={{ borderColor: "hsl(var(--border))" }}>
          {servicesSummary.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;
            const c = configs[i % configs.length];

            return (
              <motion.div key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}>
                <Link to={`/services/${service.slug}`}
                  className="group flex items-center justify-between gap-4 py-7 lg:py-9 relative overflow-hidden transition-all duration-400"
                  style={{ transition: "padding 0.4s cubic-bezier(0.22,1,0.36,1)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.paddingLeft = "16px"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.paddingLeft = ""; }}
                >
                  {/* Hover sweep */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-xl"
                    style={{ background: `linear-gradient(90deg, ${c.accent.replace(")", "/0.04)")}, transparent 60%)` }} />

                  <div className="relative flex items-center gap-5 lg:gap-8 flex-1 min-w-0">
                    {/* Number */}
                    <span className="text-sm font-black tabular-nums flex-shrink-0 opacity-35 group-hover:opacity-65 transition-opacity"
                      style={{ color: c.accent }}>{c.num}</span>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: `${c.accent.replace(")", "/0.08)")}`,
                        border: `1.5px solid ${c.accent.replace(")", "/0.18)")}`,
                      }}>
                      <Icon className="w-6 h-6" style={{ color: c.accent }} />
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-3 mb-1.5">
                        <h3 className="text-xl lg:text-2xl font-bold leading-none" style={{ color: "hsl(var(--foreground))" }}>
                          {service.name}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide hidden sm:inline-flex"
                          style={{
                            background: `${c.accent.replace(")", "/0.08)")}`,
                            color: c.accent,
                            border: `1px solid ${c.accent.replace(")", "/0.18)")}`,
                          }}>{c.tag}</span>
                      </div>
                      <p className="text-sm leading-relaxed max-w-lg opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-16 transition-all duration-500 overflow-hidden"
                        style={{ color: "hsl(var(--muted-foreground))" }}>
                        {service.pain}
                      </p>
                    </div>
                  </div>

                  {/* Mockup preview */}
                  <div className="hidden lg:flex items-center gap-4">
                    <ServiceMockup accent={c.accent} mockupColors={c.mockupColors} />
                  </div>

                  {/* Arrow */}
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0"
                    style={{
                      background: `${c.accent.replace(")", "/0.10)")}`,
                      border: `1.5px solid ${c.accent.replace(")", "/0.22)")}`,
                    }}>
                    <ArrowUpRight className="w-5 h-5" style={{ color: c.accent }} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(214 100% 50% / 0.06), hsl(188 97% 44% / 0.04), hsl(255 82% 62% / 0.04))",
            border: "1px solid hsl(var(--border))",
          }}
        >
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
              style={{
                background: "hsl(var(--primary))",
                color: "hsl(var(--primary-foreground))",
                boxShadow: "0 4px 24px hsl(214 100% 50% / 0.30)",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px hsl(214 100% 50% / 0.45)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px hsl(214 100% 50% / 0.30)"; (e.currentTarget as HTMLElement).style.transform = ""; }}
            >
              Request Free Audit
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
