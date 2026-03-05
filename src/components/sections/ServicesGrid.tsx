import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Smartphone, TrendingUp, ShoppingBag, Bot } from "lucide-react";
import { servicesSummary } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Globe, Smartphone, TrendingUp, ShoppingBag, Bot,
};

const configs = [
  {
    bgGrad: "linear-gradient(145deg, hsl(var(--primary)/0.12) 0%, hsl(var(--primary)/0.04) 100%)",
    border: "hsl(var(--primary)/0.2)",
    iconGrad: "linear-gradient(135deg, hsl(var(--primary)/0.3), hsl(var(--cyan)/0.18))",
    glow: "hsl(var(--primary)/0.2)",
    iconColor: "hsl(var(--primary))",
    labelColor: "hsl(var(--primary))",
  },
  {
    bgGrad: "linear-gradient(145deg, hsl(var(--cyan)/0.10) 0%, hsl(var(--cyan)/0.03) 100%)",
    border: "hsl(var(--cyan)/0.18)",
    iconGrad: "linear-gradient(135deg, hsl(var(--cyan)/0.28), hsl(var(--primary)/0.15))",
    glow: "hsl(var(--cyan)/0.18)",
    iconColor: "hsl(var(--cyan))",
    labelColor: "hsl(var(--cyan))",
  },
  {
    bgGrad: "linear-gradient(145deg, hsl(var(--violet)/0.12) 0%, hsl(var(--violet)/0.04) 100%)",
    border: "hsl(var(--violet)/0.2)",
    iconGrad: "linear-gradient(135deg, hsl(var(--violet)/0.3), hsl(var(--primary)/0.12))",
    glow: "hsl(var(--violet)/0.18)",
    iconColor: "hsl(var(--violet))",
    labelColor: "hsl(var(--violet))",
  },
  {
    bgGrad: "linear-gradient(145deg, hsl(var(--primary)/0.10) 0%, hsl(var(--cyan)/0.06) 100%)",
    border: "hsl(var(--primary)/0.18)",
    iconGrad: "linear-gradient(135deg, hsl(var(--primary)/0.22), hsl(var(--cyan)/0.18))",
    glow: "hsl(var(--primary)/0.16)",
    iconColor: "hsl(var(--primary))",
    labelColor: "hsl(var(--primary))",
  },
  {
    bgGrad: "linear-gradient(145deg, hsl(var(--violet)/0.10) 0%, hsl(var(--primary)/0.05) 100%)",
    border: "hsl(var(--violet)/0.18)",
    iconGrad: "linear-gradient(135deg, hsl(var(--violet)/0.25), hsl(var(--primary)/0.14))",
    glow: "hsl(var(--violet)/0.16)",
    iconColor: "hsl(var(--violet))",
    labelColor: "hsl(var(--violet))",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">

      {/* Deep ambient glow behind section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] orb-blue opacity-[0.12]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] orb-violet opacity-[0.08]" />
      </div>
      <div className="divider-glow absolute top-0 left-0 right-0" />

      <div className="container relative z-10">

        {/* Header — split layout with oversized label */}
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
            <h2 className="text-5xl sm:text-6xl md:text-[68px] font-black leading-[1.0] mb-0">
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
            Every service is engineered around one goal: generating qualified leads and
            converting them into revenue. We build, run, and optimize — you grow.
          </motion.p>
        </div>

        {/* Cards — first 3 in top row, 2 in bottom row (offset) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
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
                /* Offset last 2 cards slightly on desktop for asymmetry */
                className={i >= 3 ? "lg:col-span-1" : ""}
                style={i === 3 ? { marginTop: "0" } : {}}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group relative flex flex-col h-full p-7 rounded-2xl card-tilt card-shimmer overflow-hidden transition-all duration-400"
                  style={{
                    background: c.bgGrad,
                    border: `1px solid ${c.border}`,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${c.glow}, 0 24px 50px hsl(230 52% 2%/0.6)`;
                    (e.currentTarget as HTMLElement).style.borderColor = c.glow;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                    (e.currentTarget as HTMLElement).style.borderColor = c.border;
                  }}
                >
                  {/* Corner glow on hover */}
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at top right, ${c.glow}, transparent 70%)`, filter: "blur(20px)" }} />

                  {/* Large background number */}
                  <span className="absolute bottom-4 right-5 text-7xl font-black select-none pointer-events-none transition-opacity duration-300"
                    style={{ color: c.glow, opacity: 0.12 }}>
                    0{i + 1}
                  </span>

                  {/* Icon box */}
                  <div className="relative w-13 h-13 w-[52px] h-[52px] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: c.iconGrad, border: "1px solid hsl(var(--foreground)/0.07)" }}>
                    <Icon className="w-5 h-5" style={{ color: c.iconColor }} />
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ boxShadow: `0 0 20px ${c.glow}` }} />
                  </div>

                  <h3 className="text-lg font-bold mb-2.5 transition-colors duration-300"
                    style={{ color: "hsl(var(--foreground))" }}
                    onMouseEnter={e => (e.currentTarget.style.color = c.iconColor)}
                    onMouseLeave={e => (e.currentTarget.style.color = "hsl(var(--foreground))")}
                  >
                    {service.name}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {service.pain}
                  </p>

                  <div className="flex items-center gap-1.5 text-sm font-bold group-hover:gap-3 transition-all duration-300"
                    style={{ color: c.labelColor }}>
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
            onMouseEnter={e => (e.currentTarget.style.color = "hsl(var(--foreground))")}
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
