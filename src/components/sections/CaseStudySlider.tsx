import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { caseStudies } from "@/data/caseStudies";

const catTokens: Record<string, { bg: string; text: string; border: string; glow: string; grad: [string, string] }> = {
  Web:       { bg: "hsl(var(--primary)/0.08)", text: "hsl(var(--primary))", border: "hsl(var(--primary)/0.22)", glow: "hsl(214 100% 50% / 0.15)", grad: ["hsl(214 100% 50% / 0.10)", "hsl(188 97% 44% / 0.05)"] },
  Ecommerce: { bg: "hsl(var(--cyan)/0.08)",    text: "hsl(var(--cyan))",    border: "hsl(var(--cyan)/0.22)",    glow: "hsl(188 97% 44% / 0.14)", grad: ["hsl(188 97% 44% / 0.10)", "hsl(255 82% 62% / 0.05)"] },
  Marketing: { bg: "hsl(var(--violet)/0.08)",  text: "hsl(var(--violet))", border: "hsl(var(--violet)/0.22)",  glow: "hsl(255 82% 62% / 0.14)", grad: ["hsl(255 82% 62% / 0.10)", "hsl(214 100% 50% / 0.05)"] },
  AI:        { bg: "hsl(var(--primary)/0.08)", text: "hsl(var(--primary))", border: "hsl(var(--primary)/0.22)", glow: "hsl(214 100% 50% / 0.15)", grad: ["hsl(214 100% 50% / 0.10)", "hsl(255 82% 62% / 0.05)"] },
  App:       { bg: "hsl(var(--cyan)/0.08)",    text: "hsl(var(--cyan))",    border: "hsl(var(--cyan)/0.22)",    glow: "hsl(188 97% 44% / 0.14)", grad: ["hsl(188 97% 44% / 0.08)", "hsl(214 100% 50% / 0.04)"] },
};

export function CaseStudySlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });

  const scrollPrev = useCallback(() => { emblaApi?.scrollPrev(); setActiveIndex(p => Math.max(0, p - 1)); }, [emblaApi]);
  const scrollNext = useCallback(() => { emblaApi?.scrollNext(); setActiveIndex(p => Math.min(caseStudies.length - 1, p + 1)); }, [emblaApi]);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(220 30% 97%) 0%, hsl(var(--background)) 100%)",
        paddingTop: "clamp(80px, 10vw, 160px)",
        paddingBottom: "clamp(80px, 10vw, 160px)",
      }}
    >
      {/* Ambient */}
      <div className="absolute right-0 top-0 w-[600px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(255 82% 62% / 0.06) 0%, transparent 65%)", filter: "blur(60px)" }} />
      <div className="absolute left-0 bottom-0 w-[500px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(214 100% 50% / 0.05) 0%, transparent 65%)", filter: "blur(60px)" }} />
      <div className="absolute top-0 left-0 right-0 divider-glow" />

      <div className="container relative z-10">

        {/* ── Header ── */}
        <div className="flex items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px w-10" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--cyan)))" }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--primary))" }}>Our Work</span>
            </div>
            <h2
              className="font-black leading-[1.0] tracking-tight"
              style={{ fontSize: "clamp(2.8rem,6vw,76px)", color: "hsl(var(--foreground))" }}
            >
              Real projects.<br />
              <span style={{
                background: "linear-gradient(130deg, hsl(var(--primary)), hsl(var(--cyan)))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Real outcomes.
              </span>
            </h2>
          </motion.div>

          {/* Nav */}
          <div className="hidden sm:flex items-center gap-3">
            {[{ fn: scrollPrev, icon: ChevronLeft }, { fn: scrollNext, icon: ChevronRight }].map(({ fn, icon: Icon }, idx) => (
              <button key={idx} onClick={fn}
                className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300"
                style={{
                  background: "hsl(220 20% 100%)",
                  border: "1px solid hsl(var(--border))",
                  boxShadow: "0 2px 12px hsl(220 30% 10% / 0.05)",
                  color: "hsl(var(--muted-foreground))",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "hsl(var(--primary)/0.30)";
                  el.style.color = "hsl(var(--primary))";
                  el.style.boxShadow = "0 4px 20px hsl(214 100% 50% / 0.15)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "hsl(var(--border))";
                  el.style.color = "hsl(var(--muted-foreground))";
                  el.style.boxShadow = "0 2px 12px hsl(220 30% 10% / 0.05)";
                }}
                aria-label={idx === 0 ? "Previous" : "Next"}
              >
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>

        {/* ── Featured card ── */}
        {caseStudies[0] && (() => {
          const featured = caseStudies[0];
          const cat = catTokens[featured.categoryTag] ?? catTokens.Web;
          return (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-6 rounded-3xl overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${cat.grad[0]}, ${cat.grad[1]})`,
                border: `1px solid ${cat.border}`,
                boxShadow: `0 20px 80px ${cat.glow}`,
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Visual panel */}
                <div
                  className="relative h-[260px] lg:h-auto min-h-[280px] overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${cat.grad[0]}, transparent)` }}
                >
                  {/* Mock browser window */}
                  <div
                    className="absolute inset-8 rounded-2xl overflow-hidden"
                    style={{
                      background: "hsl(220 20% 100% / 0.92)",
                      border: "1px solid hsl(var(--border))",
                      boxShadow: "0 8px 40px hsl(220 30% 10% / 0.12)",
                    }}
                  >
                    <div className="flex items-center gap-1.5 px-4 py-3 border-b"
                      style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--surface))" }}>
                      <div className="flex gap-1.5">
                        {["hsl(0 80% 65%)", "hsl(40 90% 58%)", "hsl(142 70% 45%)"].map((c, ci) => (
                          <div key={ci} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                        ))}
                      </div>
                      <div className="flex-1 mx-4 h-2 rounded-full" style={{ background: "hsl(var(--border))" }} />
                    </div>
                    <div className="p-4 flex flex-col gap-2.5">
                      <div className="h-3 w-1/2 rounded-full" style={{ background: cat.text }} />
                      <div className="h-2 w-full rounded-full" style={{ background: "hsl(var(--border))" }} />
                      <div className="h-2 w-3/4 rounded-full" style={{ background: "hsl(var(--border))" }} />
                      <div className="mt-2 grid grid-cols-3 gap-2">
                        {[1,2,3].map(n => (
                          <div key={n} className="h-12 rounded-xl" style={{ background: "hsl(var(--surface))" }} />
                        ))}
                      </div>
                      <div className="h-8 w-1/3 rounded-xl" style={{ background: `${cat.text.replace(")", "/0.20)")}`, marginTop: "4px" }} />
                    </div>
                  </div>
                  {/* Featured badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest"
                      style={{ background: cat.text, color: "white" }}>
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content panel */}
                <div className="p-10 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wide"
                      style={{ background: cat.bg, color: cat.text, borderColor: cat.border }}>
                      {featured.category}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: cat.text }}>
                      {featured.client}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black mb-6 leading-snug"
                    style={{ color: "hsl(var(--foreground))" }}>
                    {featured.title}
                  </h3>
                  <div className="space-y-4 mb-8">
                    {[
                      { label: "Challenge", text: featured.challenge },
                      { label: "Outcome",   text: featured.outcome },
                    ].map(({ label, text }) => (
                      <div key={label} className="pl-4" style={{ borderLeft: `3px solid ${label === "Outcome" ? cat.text : "hsl(var(--border))"}` }}>
                        <span className="text-[10px] font-black uppercase tracking-widest block mb-1"
                          style={{ color: label === "Outcome" ? cat.text : "hsl(var(--muted-foreground))" }}>
                          {label}
                        </span>
                        <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{text}</p>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact"
                    className="inline-flex items-center gap-2 font-bold text-sm group self-start"
                    style={{ color: cat.text }}
                  >
                    Want similar results?
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })()}

        {/* ── Remaining cards carousel ── */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-5">
            {caseStudies.slice(1).map((study, i) => {
              const cat = catTokens[study.categoryTag] ?? catTokens.Web;
              return (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="flex-none w-[88vw] sm:w-[380px] lg:w-[360px]"
                >
                  <div
                    className="h-full flex flex-col rounded-2xl overflow-hidden transition-all duration-400"
                    style={{
                      background: "hsl(220 20% 100%)",
                      border: "1px solid hsl(var(--border))",
                      boxShadow: "0 2px 16px hsl(220 30% 10% / 0.05)",
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = cat.border;
                      el.style.boxShadow = `0 16px 60px ${cat.glow}`;
                      el.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "hsl(var(--border))";
                      el.style.boxShadow = "0 2px 16px hsl(220 30% 10% / 0.05)";
                      el.style.transform = "";
                    }}
                  >
                    {/* Visual header */}
                    <div className="h-44 relative overflow-hidden"
                      style={{ background: `linear-gradient(135deg, ${cat.grad[0]}, ${cat.grad[1]})` }}>
                      <div className="absolute inset-5 rounded-xl overflow-hidden"
                        style={{ background: "hsl(220 20% 100% / 0.88)", border: "1px solid hsl(var(--border))" }}>
                        <div className="flex items-center gap-1 px-3 py-2 border-b"
                          style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--surface))" }}>
                          {["hsl(0 80% 65%)", "hsl(40 90% 58%)", "hsl(142 70% 45%)"].map((c, ci) => (
                            <div key={ci} className="w-2 h-2 rounded-full mr-0.5" style={{ background: c }} />
                          ))}
                        </div>
                        <div className="p-3 space-y-1.5">
                          <div className="h-2 w-2/3 rounded-full" style={{ background: cat.text }} />
                          <div className="h-1.5 w-full rounded-full" style={{ background: "hsl(var(--border))" }} />
                          <div className="h-1.5 w-3/4 rounded-full" style={{ background: "hsl(var(--border))" }} />
                        </div>
                      </div>
                      <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[9px] font-bold border"
                        style={{ background: cat.bg, color: cat.text, borderColor: cat.border }}>
                        {study.category}
                      </span>
                    </div>

                    <div className="flex-1 flex flex-col p-6">
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: cat.text }}>
                        {study.client}
                      </p>
                      <h3 className="text-base font-bold mb-4 leading-snug flex-1"
                        style={{ color: "hsl(var(--foreground))" }}>
                        {study.title}
                      </h3>
                      <div className="pl-3.5 mb-5" style={{ borderLeft: `2px solid ${cat.text}` }}>
                        <span className="text-[9px] font-black uppercase tracking-widest block mb-0.5" style={{ color: cat.text }}>
                          Outcome
                        </span>
                        <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "hsl(var(--muted-foreground))" }}>
                          {study.outcome}
                        </p>
                      </div>
                      <Link to="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold group"
                        style={{ color: cat.text }}
                      >
                        Similar results?
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {caseStudies.slice(1).map((_, i) => (
            <button key={i}
              onClick={() => { emblaApi?.scrollTo(i); setActiveIndex(i + 1); }}
              className="rounded-full transition-all duration-300"
              style={{
                width: i + 1 === activeIndex ? "24px" : "6px",
                height: "6px",
                background: i + 1 === activeIndex ? "hsl(var(--primary))" : "hsl(var(--border))",
                boxShadow: i + 1 === activeIndex ? "0 0 10px hsl(var(--primary)/0.45)" : "",
              }}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-bold group"
            style={{ color: "hsl(var(--muted-foreground))" }}
            onMouseEnter={e => (e.currentTarget.style.color = "hsl(var(--primary))")}
            onMouseLeave={e => (e.currentTarget.style.color = "hsl(var(--muted-foreground))")}
          >
            View all case studies
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
