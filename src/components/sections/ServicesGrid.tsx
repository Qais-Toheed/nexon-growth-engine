import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Smartphone, TrendingUp, ShoppingBag, Bot } from "lucide-react";
import { servicesSummary } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Globe, Smartphone, TrendingUp, ShoppingBag, Bot,
};

const configs = [
  { accent: "hsl(var(--primary))", accentDim: "hsl(var(--primary)/0.09)", border: "hsl(var(--primary)/0.18)", glow: "hsl(214 100% 50% / 0.14)" },
  { accent: "hsl(var(--cyan))",    accentDim: "hsl(var(--cyan)/0.08)",    border: "hsl(var(--cyan)/0.18)",    glow: "hsl(188 97% 44% / 0.12)" },
  { accent: "hsl(var(--violet))",  accentDim: "hsl(var(--violet)/0.08)",  border: "hsl(var(--violet)/0.18)",  glow: "hsl(255 82% 62% / 0.12)" },
  { accent: "hsl(var(--primary))", accentDim: "hsl(var(--primary)/0.07)", border: "hsl(var(--primary)/0.15)", glow: "hsl(214 100% 50% / 0.12)" },
  { accent: "hsl(var(--cyan))",    accentDim: "hsl(var(--cyan)/0.07)",    border: "hsl(var(--cyan)/0.15)",    glow: "hsl(188 97% 44% / 0.10)" },
];

export function ServicesGrid() {
  return (
    <section id="services" className="section-padding relative overflow-hidden"
      style={{ background: "hsl(var(--background))" }}>

      {/* Ambient top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] orb-blue opacity-[0.08] pointer-events-none" />
      <div className="divider-glow absolute top-0 left-0 right-0" />

      <div className="container relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] mb-5"
              style={{ color: "hsl(var(--primary))" }}>
              <span className="w-8 h-px" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--cyan)))" }} />
              What We Build
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-[68px] font-black leading-[1.0]"
              style={{ color: "hsl(var(--foreground))" }}>
              Digital systems<br />that drive{" "}
              <span className="text-gradient">measurable</span>
              <br />
              <span className="text-gradient-violet">growth.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="max-w-sm leading-relaxed lg:text-right lg:pb-2"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Every service engineered around one goal: generating qualified leads and converting them into revenue. We build, run, and optimize — you grow.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesSummary.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;
            const c = configs[i % configs.length];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group relative flex flex-col h-full p-7 rounded-2xl card-white card-white-hover card-shimmer overflow-hidden"
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 48px ${c.glow}, 0 4px 16px hsl(220 30% 10% / 0.08)`;
                    (e.currentTarget as HTMLElement).style.borderColor = c.border;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--border))";
                  }}
                >
                  {/* Top accent line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-t-2xl"
                    style={{ background: `linear-gradient(to right, ${c.accent}, transparent)` }} />

                  {/* Background number */}
                  <span className="absolute bottom-4 right-5 text-8xl font-black select-none pointer-events-none transition-opacity duration-300"
                    style={{ color: c.accentDim }}>
                    0{i + 1}
                  </span>

                  {/* Icon */}
                  <div className="w-[52px] h-[52px] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `linear-gradient(135deg, ${c.accentDim}, transparent)`, border: `1px solid ${c.border}` }}>
                    <Icon className="w-5 h-5" style={{ color: c.accent }} />
                  </div>

                  <h3 className="text-lg font-bold mb-2.5"
                    style={{ color: "hsl(var(--foreground))" }}>
                    {service.name}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1 mb-6"
                    style={{ color: "hsl(var(--muted-foreground))" }}>
                    {service.pain}
                  </p>

                  <div className="flex items-center gap-1.5 text-sm font-bold group-hover:gap-3 transition-all duration-300"
                    style={{ color: c.accent }}>
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
          className="mt-14 text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group"
            style={{ color: "hsl(var(--muted-foreground))" }}
            onMouseEnter={e => (e.currentTarget.style.color = "hsl(var(--primary))")}
            onMouseLeave={e => (e.currentTarget.style.color = "hsl(var(--muted-foreground))")}
          >
            View all services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
