import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Globe, Smartphone, TrendingUp, ShoppingBag, Bot } from "lucide-react";
import { servicesSummary } from "@/data/services";
import { useRef } from "react";

const iconMap: Record<string, React.ElementType> = {
  Globe, Smartphone, TrendingUp, ShoppingBag, Bot,
};

const configs = [
  { accent: "hsl(var(--primary))", num: "01", tag: "Web & Mobile" },
  { accent: "hsl(var(--cyan))",    num: "02", tag: "Paid Media" },
  { accent: "hsl(var(--violet))",  num: "03", tag: "Ecommerce" },
  { accent: "hsl(var(--primary))", num: "04", tag: "AI Systems" },
  { accent: "hsl(var(--cyan))",    num: "05", tag: "Strategy" },
];

export function ServicesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section id="services" ref={sectionRef} className="relative overflow-hidden"
      style={{ background: "hsl(var(--background))", paddingTop: "clamp(80px, 10vw, 160px)", paddingBottom: "clamp(80px, 10vw, 160px)" }}>

      {/* Ambient top glow */}
      <div className="absolute top-0 left-0 right-0 h-px divider-glow pointer-events-none" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(214 100% 50% / 0.06) 0%, transparent 70%)", filter: "blur(30px)" }} />

      <div className="container relative z-10">

        {/* ── Editorial header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px w-10" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--cyan)))" }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--primary))" }}>
                What We Build
              </span>
            </div>
            <h2
              className="font-black leading-[1.0] tracking-tight"
              style={{
                fontSize: "clamp(2.8rem,6.5vw,80px)",
                color: "hsl(var(--foreground))",
              }}
            >
              Digital systems<br />
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
              Every service is engineered around one goal: generating qualified leads and converting them into revenue. We build, run, and optimize — you grow.
            </p>
            <Link to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold group"
              style={{ color: "hsl(var(--primary))" }}
            >
              View all services
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* ── Large editorial service rows ── */}
        <div className="flex flex-col divide-y" style={{ borderColor: "hsl(var(--border))" }}>
          {servicesSummary.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;
            const c = configs[i % configs.length];

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group flex items-center justify-between gap-6 py-8 lg:py-10 transition-all duration-300 relative overflow-hidden"
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.paddingLeft = "16px";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.paddingLeft = "";
                  }}
                  style={{ transition: "padding 0.4s cubic-bezier(0.22,1,0.36,1)" }}
                >
                  {/* Hover background sweep */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-xl"
                    style={{
                      background: `linear-gradient(90deg, ${c.accent.replace(")", "/0.04)")}, transparent 60%)`,
                    }}
                  />

                  <div className="relative flex items-center gap-6 lg:gap-10 flex-1 min-w-0">
                    {/* Number */}
                    <span
                      className="text-sm font-black tabular-nums flex-shrink-0 opacity-40 group-hover:opacity-70 transition-opacity"
                      style={{ color: c.accent }}
                    >
                      {c.num}
                    </span>

                    {/* Icon container */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: `${c.accent.replace(")", "/0.08)")}`,
                        border: `1.5px solid ${c.accent.replace(")", "/0.18)")}`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: c.accent }} />
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-3 mb-1.5">
                        <h3
                          className="text-xl lg:text-2xl font-bold leading-none"
                          style={{ color: "hsl(var(--foreground))" }}
                        >
                          {service.name}
                        </h3>
                        <span
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide hidden sm:inline-flex"
                          style={{
                            background: `${c.accent.replace(")", "/0.08)")}`,
                            color: c.accent,
                            border: `1px solid ${c.accent.replace(")", "/0.18)")}`,
                          }}
                        >
                          {c.tag}
                        </span>
                      </div>
                      <p
                        className="text-sm leading-relaxed max-w-xl opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-400 overflow-hidden"
                        style={{ color: "hsl(var(--muted-foreground))" }}
                      >
                        {service.pain}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0"
                    style={{
                      background: `${c.accent.replace(")", "/0.10)")}`,
                      border: `1.5px solid ${c.accent.replace(")", "/0.22)")}`,
                    }}
                  >
                    <ArrowUpRight className="w-5 h-5" style={{ color: c.accent }} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom featured block ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8"
          style={{
            background: "linear-gradient(135deg, hsl(214 100% 50% / 0.06) 0%, hsl(188 97% 44% / 0.04) 50%, hsl(255 82% 62% / 0.04) 100%)",
            border: "1px solid hsl(var(--border))",
          }}
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "hsl(var(--primary))" }}>Not sure where to start?</p>
            <h3 className="text-2xl lg:text-3xl font-black" style={{ color: "hsl(var(--foreground))" }}>
              Let us audit your current digital presence — free.
            </h3>
          </div>
          <Link to="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2.5 font-bold px-8 py-4 rounded-2xl transition-all duration-300 group"
            style={{
              background: "hsl(var(--primary))",
              color: "hsl(var(--primary-foreground))",
              boxShadow: "0 4px 24px hsl(214 100% 50% / 0.30)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px hsl(214 100% 50% / 0.45)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px hsl(214 100% 50% / 0.30)";
              (e.currentTarget as HTMLElement).style.transform = "";
            }}
          >
            Request Free Audit
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
