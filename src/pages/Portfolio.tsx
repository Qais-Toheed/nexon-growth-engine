import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { CTABanner } from "@/components/sections/CTABanner";

const tabs = ["All", "Web", "Marketing", "Social", "Design", "Video"] as const;

const catColors: Record<string, { text: string; bg: string; border: string; bar: string }> = {
  Web:       { text: "hsl(var(--primary))", bg: "hsl(var(--primary)/0.08)", border: "hsl(var(--primary)/0.22)", bar: "#0080FF" },
  Marketing: { text: "hsl(var(--violet))",  bg: "hsl(var(--violet)/0.08)",  border: "hsl(var(--violet)/0.22)",  bar: "#7A52F4" },
  Social:    { text: "hsl(var(--cyan))",    bg: "hsl(var(--cyan)/0.08)",    border: "hsl(var(--cyan)/0.22)",    bar: "#09BDD6" },
  Design:    { text: "hsl(var(--primary))", bg: "hsl(var(--primary)/0.08)", border: "hsl(var(--primary)/0.22)", bar: "#0080FF" },
  Video:     { text: "hsl(var(--cyan))",    bg: "hsl(var(--cyan)/0.08)",    border: "hsl(var(--cyan)/0.22)",    bar: "#09BDD6" },
};

const Portfolio = () => {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? caseStudies : caseStudies.filter(c => c.categoryTag === active);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(160deg, hsl(220 35% 100%) 0%, hsl(218 40% 98%) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-[700px] h-[500px]"
            style={{ background: "radial-gradient(ellipse, hsl(214 100% 50% / 0.07) 0%, transparent 65%)", filter: "blur(60px)" }} />
          <div className="absolute left-0 bottom-0 w-[500px] h-[400px]"
            style={{ background: "radial-gradient(ellipse, hsl(255 82% 62% / 0.05) 0%, transparent 65%)", filter: "blur(60px)" }} />
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle, hsl(214 100% 50% / 0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }} />
        </div>
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--cyan)))" }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--primary))" }}>Our Work</span>
            </div>
            <h1 className="font-black leading-[1.02] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.8rem,7vw,88px)", color: "hsl(var(--foreground))" }}>
              Real projects.<br />
              <span style={{
                background: "linear-gradient(130deg, hsl(var(--primary)), hsl(var(--cyan)))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>Real outcomes.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A selection of work spanning web development, marketing, social media, design, and video.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 divider-glow" />
      </section>

      <section className="py-20" style={{ background: "hsl(var(--background))" }}>
        <div className="container">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-14">
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActive(tab)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300"
                style={active === tab
                  ? { background: "hsl(var(--primary))", color: "white", borderColor: "hsl(var(--primary))", boxShadow: "0 4px 20px hsl(214 100% 50% / 0.30)" }
                  : { background: "hsl(220 20% 100%)", borderColor: "hsl(var(--border))", color: "hsl(var(--muted-foreground))" }
                }>
                {tab}
              </button>
            ))}
          </div>

          {/* Portfolio grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((study, i) => {
              const cat = catColors[study.categoryTag] ?? catColors.Web;
              return (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-400 cursor-pointer"
                  style={{ background: "hsl(220 20% 100%)", border: "1px solid hsl(var(--border))", boxShadow: "0 2px 16px hsl(220 30% 10% / 0.05)" }}
                  onClick={() => study.link ? window.open(study.link, '_blank') : null}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = cat.border; el.style.boxShadow = `0 16px 56px hsl(220 30% 10% / 0.10), 0 4px 24px ${cat.text.replace(")", "/0.10)")}`; el.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "hsl(var(--border))"; el.style.boxShadow = "0 2px 16px hsl(220 30% 10% / 0.05)"; el.style.transform = ""; }}
                >
                  {/* Visual thumbnail */}
                  <div className="h-52 relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${cat.bg}, transparent)` }}>
                    
                    {study.image ? (
                      <div className="absolute inset-0 p-4">
                        <img 
                          src={study.image} 
                          alt={study.title} 
                          className="w-full h-full object-cover rounded-xl shadow-lg border"
                          style={{ borderColor: "hsl(var(--border))" }}
                        />
                      </div>
                    ) : (
                      /* Mockup frame */
                      <div className="absolute inset-4 rounded-xl overflow-hidden shadow-lg"
                        style={{ background: "hsl(220 20% 100% / 0.96)", border: "1px solid hsl(var(--border))" }}>
                        <div className="flex items-center gap-1.5 px-3 py-2 border-b"
                          style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--surface))" }}>
                          {["hsl(0 80% 65%)", "hsl(40 90% 58%)", "hsl(142 70% 45%)"].map((c, ci) => (
                            <div key={ci} className="w-2 h-2 rounded-full" style={{ background: c }} />
                          ))}
                          <div className="flex-1 h-1.5 rounded-full ml-2" style={{ background: "hsl(var(--border))" }} />
                        </div>
                        <div className="p-3">
                          <div className="h-12 rounded-lg mb-2 flex items-center px-3"
                            style={{ background: `${cat.bg}`, border: `1px solid ${cat.border}` }}>
                            <div className="h-2 w-3/5 rounded-full" style={{ background: cat.bar, opacity: 0.7 }} />
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="h-8 rounded-lg" style={{ background: "hsl(var(--surface))" }} />
                            <div className="h-8 rounded-lg" style={{ background: "hsl(var(--surface))" }} />
                          </div>
                          <div className="mt-2 space-y-1">
                            <div className="h-1.5 w-full rounded-full" style={{ background: "hsl(var(--border))" }} />
                            <div className="h-1.5 w-4/5 rounded-full" style={{ background: "hsl(var(--border))" }} />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold border"
                        style={{ background: cat.bg, color: cat.text, borderColor: cat.border, backdropFilter: "blur(8px)" }}>
                        {study.category}
                      </span>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      style={{ background: `${cat.text.replace(")", "/0.06)")}` }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ background: cat.text, color: "white" }}>
                        {study.link ? <ExternalLink className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col p-6">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: cat.text }}>
                      {study.client}
                    </p>
                    <h3 className="text-base font-bold mb-3 leading-snug flex-1" style={{ color: "hsl(var(--foreground))" }}>
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                      {study.challenge}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {study.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] font-medium"
                          style={{ background: "hsl(var(--surface))", color: "hsl(var(--muted-foreground))", border: "1px solid hsl(var(--border))" }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {study.link ? (
                      <a href={study.link} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2 transition-all"
                        style={{ color: cat.text }}>
                        Visit Website
                        <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    ) : (
                      <Link to="/contact"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2 transition-all"
                        style={{ color: cat.text }}>
                        Want something similar?
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
};

export default Portfolio;
