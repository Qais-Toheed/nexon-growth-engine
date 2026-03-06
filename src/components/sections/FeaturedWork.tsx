import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

const catTokens: Record<string, { bg: string; text: string; border: string; bar: string; grad: [string, string] }> = {
  Web:       { bg: "hsl(var(--primary)/0.07)", text: "hsl(var(--primary))", border: "hsl(var(--primary)/0.20)", bar: "#0080FF", grad: ["hsl(214 100% 50% / 0.07)", "hsl(188 97% 44% / 0.03)"] },
  Ecommerce: { bg: "hsl(var(--cyan)/0.07)",    text: "hsl(var(--cyan))",    border: "hsl(var(--cyan)/0.20)",    bar: "#09BDD6", grad: ["hsl(188 97% 44% / 0.07)", "hsl(255 82% 62% / 0.03)"] },
  Marketing: { bg: "hsl(var(--violet)/0.07)",  text: "hsl(var(--violet))", border: "hsl(var(--violet)/0.20)",  bar: "#7A52F4", grad: ["hsl(255 82% 62% / 0.07)", "hsl(214 100% 50% / 0.03)"] },
  AI:        { bg: "hsl(var(--primary)/0.07)", text: "hsl(var(--primary))", border: "hsl(var(--primary)/0.20)", bar: "#0080FF", grad: ["hsl(214 100% 50% / 0.07)", "hsl(255 82% 62% / 0.03)"] },
  App:       { bg: "hsl(var(--cyan)/0.07)",    text: "hsl(var(--cyan))",    border: "hsl(var(--cyan)/0.20)",    bar: "#09BDD6", grad: ["hsl(188 97% 44% / 0.06)", "hsl(214 100% 50% / 0.02)"] },
};

// Rich browser mockup
function BrowserMockup({ cat, index }: { cat: typeof catTokens[string]; index: number }) {
  const bars = index === 0
    ? [85, 60, 92, 45, 78, 55, 88]
    : [55, 80, 38, 95, 62, 40, 75];

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl"
      style={{ background: "hsl(220 20% 100% / 0.97)", border: "1px solid hsl(var(--border))" }}>
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b"
        style={{ borderColor: "hsl(var(--border))", background: "hsl(220 25% 97%)" }}>
        {["hsl(0 80% 65%)", "hsl(40 90% 58%)", "hsl(142 70% 45%)"].map((c, i) => (
          <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
        ))}
        <div className="flex-1 h-2 rounded-full mx-3 flex items-center px-3"
          style={{ background: "hsl(220 20% 92%)" }}>
          <div className="h-1 w-24 rounded-full" style={{ background: "hsl(220 20% 80%)" }} />
        </div>
        <ExternalLink className="w-3.5 h-3.5" style={{ color: "hsl(var(--muted-foreground))" }} />
      </div>

      {/* Hero strip */}
      <div className="h-16 flex items-center px-5 gap-4 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${cat.grad[0]}, ${cat.grad[1]})` }}>
        <div className="w-8 h-8 rounded-lg flex-shrink-0" style={{ background: cat.bar, opacity: 0.9 }} />
        <div className="flex-1 space-y-1.5">
          <div className="h-2.5 w-1/2 rounded-full" style={{ background: cat.bar, opacity: 0.75 }} />
          <div className="h-1.5 w-1/3 rounded-full" style={{ background: "hsl(var(--border))" }} />
        </div>
        <div className="px-3 py-1.5 rounded-lg text-[9px] font-bold text-white" style={{ background: cat.bar }}>
          CTA
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2 px-4 pt-3 pb-2">
        {["Revenue", "Leads", "Conv."].map((label, i) => (
          <div key={label} className="rounded-xl p-2 text-center"
            style={{ background: "hsl(var(--surface))", border: "1px solid hsl(var(--border))" }}>
            <div className="h-2 w-8 rounded-full mx-auto mb-1" style={{ background: cat.bar, opacity: 0.6 }} />
            <span className="text-[8px]" style={{ color: "hsl(var(--muted-foreground))" }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="px-4 pb-3">
        <div className="rounded-xl p-3" style={{ background: "hsl(var(--surface))", border: "1px solid hsl(var(--border))" }}>
          <div className="flex items-end gap-1 h-12">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: cat.bar, opacity: 0.35 + (i % 3) * 0.2 }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Mobile mockup
function MobileMockup({ cat }: { cat: typeof catTokens[string] }) {
  return (
    <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-xl"
      style={{ background: "hsl(220 20% 100% / 0.97)", border: "2px solid hsl(var(--border))" }}>
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-2.5"
        style={{ background: "hsl(220 25% 97%)" }}>
        <div className="h-1.5 w-8 rounded-full" style={{ background: "hsl(var(--border))" }} />
        <div className="w-10 h-2.5 rounded-full" style={{ background: "hsl(var(--foreground) / 0.15)" }} />
        <div className="flex gap-1">
          {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: "hsl(var(--border))" }} />)}
        </div>
      </div>
      {/* Hero card */}
      <div className="mx-3 rounded-2xl overflow-hidden mb-2"
        style={{ background: `linear-gradient(135deg, ${cat.grad[0]}, ${cat.grad[1]})`, height: "72px" }}>
        <div className="flex items-center h-full px-4 gap-3">
          <div className="w-8 h-8 rounded-xl flex-shrink-0" style={{ background: cat.bar, opacity: 0.85 }} />
          <div className="space-y-1.5">
            <div className="h-2 w-20 rounded-full" style={{ background: cat.bar, opacity: 0.7 }} />
            <div className="h-1.5 w-14 rounded-full" style={{ background: "hsl(var(--border))" }} />
          </div>
        </div>
      </div>
      {/* Content rows */}
      {[1, 2, 3].map(i => (
        <div key={i} className="mx-3 mb-2 rounded-xl p-2.5 flex items-center gap-2.5"
          style={{ background: "hsl(var(--surface))", border: "1px solid hsl(var(--border))" }}>
          <div className="w-6 h-6 rounded-lg flex-shrink-0" style={{ background: cat.bar, opacity: 0.2 }} />
          <div className="flex-1 space-y-1">
            <div className="h-1.5 rounded-full" style={{ background: "hsl(var(--border))", width: `${60 + i * 12}%` }} />
            <div className="h-1 rounded-full" style={{ background: "hsl(var(--border))", width: `${40 + i * 8}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function FeaturedWork() {
  const featured = caseStudies.slice(0, 2);

  return (
    <section className="relative overflow-hidden"
      style={{ background: "hsl(220 30% 97%)", paddingTop: "clamp(80px,10vw,140px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
      <div className="absolute top-0 left-0 right-0 divider-glow" />
      <div className="absolute right-0 top-0 w-[600px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(255 82% 62% / 0.05) 0%, transparent 65%)", filter: "blur(60px)" }} />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--cyan)))" }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--primary))" }}>Featured Work</span>
            </div>
            <h2 className="font-black leading-[1.0] tracking-tight" style={{ fontSize: "clamp(2.4rem,5.5vw,66px)", color: "hsl(var(--foreground))" }}>
              Projects that{" "}
              <span style={{
                background: "linear-gradient(130deg, hsl(var(--primary)), hsl(var(--cyan)))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>moved the needle</span>
            </h2>
          </div>
          <Link to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-bold group self-start lg:pb-2"
            style={{ color: "hsl(var(--primary))" }}>
            View all work
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* 2-up featured project grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featured.map((study, i) => {
            const cat = catTokens[study.categoryTag] ?? catTokens.Web;
            return (
              <motion.div key={study.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl overflow-hidden transition-all duration-400"
                style={{ background: "hsl(220 20% 100%)", border: "1px solid hsl(var(--border))", boxShadow: "0 4px 24px hsl(220 30% 10% / 0.06)" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = `0 24px 80px ${cat.text.replace(")", "/0.12)")}, 0 4px 24px hsl(220 30% 10% / 0.06)`; el.style.borderColor = cat.border; el.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = "0 4px 24px hsl(220 30% 10% / 0.06)"; el.style.borderColor = "hsl(var(--border))"; el.style.transform = ""; }}
              >
                {/* Mockup visual */}
                <div className="h-56 relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${cat.grad[0]}, ${cat.grad[1]})` }}>
                  <div className="absolute inset-4 grid grid-cols-5 gap-3">
                    {/* Browser mockup takes 3/5 */}
                    <div className="col-span-3">
                      <BrowserMockup cat={cat} index={i} />
                    </div>
                    {/* Mobile mockup takes 2/5 */}
                    <div className="col-span-2 pt-4">
                      <MobileMockup cat={cat} />
                    </div>
                  </div>
                  {/* Featured tag */}
                  {i === 0 && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white"
                        style={{ background: cat.bar }}>★ Featured</span>
                    </div>
                  )}
                  {/* Category badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold border"
                      style={{ background: cat.bg, color: cat.text, borderColor: cat.border }}>
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: cat.text }}>{study.client}</p>
                  <h3 className="text-lg font-bold mb-3 leading-snug" style={{ color: "hsl(var(--foreground))" }}>{study.title}</h3>

                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {[{ label: "Challenge", text: study.challenge }, { label: "Outcome", text: study.outcome }].map(({ label, text }) => (
                      <div key={label} className="pl-3" style={{ borderLeft: `2px solid ${label === "Outcome" ? cat.text : "hsl(var(--border))"}` }}>
                        <span className="text-[9px] font-black uppercase tracking-widest block mb-1"
                          style={{ color: label === "Outcome" ? cat.text : "hsl(var(--muted-foreground))" }}>{label}</span>
                        <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "hsl(var(--muted-foreground))" }}>{text}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {study.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] font-medium"
                        style={{ background: "hsl(var(--surface))", color: "hsl(var(--muted-foreground))", border: "1px solid hsl(var(--border))" }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-bold group-hover:gap-2.5 transition-all" style={{ color: cat.text }}>
                    Want similar results?
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
