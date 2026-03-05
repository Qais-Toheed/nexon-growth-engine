import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { caseStudies } from "@/data/caseStudies";

const catTokens: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  Web:       { bg: "hsl(var(--primary)/0.12)", text: "hsl(var(--primary))", border: "hsl(var(--primary)/0.28)", glow: "hsl(var(--primary)/0.22)" },
  Ecommerce: { bg: "hsl(var(--cyan)/0.10)",    text: "hsl(var(--cyan))",    border: "hsl(var(--cyan)/0.25)",    glow: "hsl(var(--cyan)/0.20)" },
  Marketing: { bg: "hsl(var(--violet)/0.12)",  text: "hsl(var(--violet))", border: "hsl(var(--violet)/0.28)",  glow: "hsl(var(--violet)/0.22)" },
  AI:        { bg: "hsl(var(--primary)/0.12)", text: "hsl(var(--primary))", border: "hsl(var(--primary)/0.28)", glow: "hsl(var(--primary)/0.22)" },
  App:       { bg: "hsl(var(--cyan)/0.10)",    text: "hsl(var(--cyan))",    border: "hsl(var(--cyan)/0.25)",    glow: "hsl(var(--cyan)/0.20)" },
};

const previewGrads = [
  ["hsl(var(--primary)/0.35)", "hsl(var(--cyan)/0.18)"],
  ["hsl(var(--violet)/0.35)",  "hsl(var(--primary)/0.18)"],
  ["hsl(var(--cyan)/0.32)",    "hsl(var(--violet)/0.18)"],
  ["hsl(var(--primary)/0.28)", "hsl(var(--violet)/0.22)"],
  ["hsl(var(--violet)/0.28)",  "hsl(var(--cyan)/0.22)"],
  ["hsl(var(--cyan)/0.25)",    "hsl(var(--primary)/0.22)"],
];

export function CaseStudySlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    setActiveIndex(p => Math.max(0, p - 1));
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    setActiveIndex(p => Math.min(caseStudies.length - 1, p + 1));
  }, [emblaApi]);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-[700px] h-[500px] orb-violet opacity-[0.09]" />
        <div className="absolute left-0 bottom-0 w-[500px] h-[400px] orb-blue opacity-[0.07]" />
      </div>
      <div className="divider-glow absolute top-0 left-0 right-0" />

      <div className="container relative z-10">

        {/* Header */}
        <div className="flex items-end justify-between mb-16">
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
              Our Work
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-[68px] font-black leading-[1.0] mb-4">
              Real projects.<br />
              <span className="text-gradient">Real outcomes.</span>
            </h2>
            <p className="leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
              Each project starts with a specific problem and a commitment to solving it properly.
            </p>
          </motion.div>

          {/* Nav buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={scrollPrev}
              className="group w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
              style={{
                background: "hsl(var(--surface-elevated))",
                border: "1px solid hsl(var(--border))",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--primary)/0.4)";
                (e.currentTarget as HTMLElement).style.background = "hsl(var(--primary)/0.06)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--border))";
                (e.currentTarget as HTMLElement).style.background = "hsl(var(--surface-elevated))";
              }}
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 transition-colors" style={{ color: "hsl(var(--muted-foreground))" }} />
            </button>
            <button
              onClick={scrollNext}
              className="group w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
              style={{
                background: "hsl(var(--surface-elevated))",
                border: "1px solid hsl(var(--border))",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--primary)/0.4)";
                (e.currentTarget as HTMLElement).style.background = "hsl(var(--primary)/0.06)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--border))";
                (e.currentTarget as HTMLElement).style.background = "hsl(var(--surface-elevated))";
              }}
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 transition-colors" style={{ color: "hsl(var(--muted-foreground))" }} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-4 lg:gap-5">
            {caseStudies.map((study, i) => {
              const cat  = catTokens[study.categoryTag] ?? catTokens.Web;
              const grad = previewGrads[i % previewGrads.length];
              const isActive = i === activeIndex;

              return (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="flex-none w-[88vw] sm:w-[400px] lg:w-[390px]"
                >
                  <div
                    className="h-full flex flex-col rounded-2xl card-tilt card-shimmer overflow-hidden transition-all duration-400"
                    style={{
                      background: "hsl(var(--surface))",
                      border: `1px solid ${isActive ? cat.border : "hsl(var(--border))"}`,
                      boxShadow: isActive ? `0 0 35px ${cat.glow}, var(--shadow-card)` : "",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = cat.border;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${cat.glow}, 0 24px 50px hsl(230 52% 2%/0.55)`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = isActive ? cat.border : "hsl(var(--border))";
                      (e.currentTarget as HTMLElement).style.boxShadow = isActive ? `0 0 35px ${cat.glow}` : "";
                    }}
                  >
                    {/* Cinematic visual preview panel */}
                    <div
                      className="h-48 relative overflow-hidden flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${grad[0]}, ${grad[1]})` }}
                    >
                      {/* UI mockup frame */}
                      <div className="absolute inset-5 rounded-xl overflow-hidden"
                        style={{ border: "1px solid hsl(var(--foreground)/0.08)", background: "hsl(var(--background)/0.4)" }}>
                        {/* Fake browser bar */}
                        <div className="flex items-center gap-1.5 px-3 py-2 border-b"
                          style={{ borderColor: "hsl(var(--foreground)/0.08)", background: "hsl(var(--background)/0.3)" }}>
                          <div className="flex gap-1">
                            {[cat.text, "hsl(var(--muted-foreground)/0.4)", "hsl(var(--muted-foreground)/0.3)"].map((c, ci) => (
                              <div key={ci} className="w-2 h-2 rounded-full" style={{ background: ci === 0 ? c : "hsl(var(--border))" }} />
                            ))}
                          </div>
                          <div className="flex-1 mx-3 h-1.5 rounded-full" style={{ background: "hsl(var(--border))" }} />
                        </div>
                        {/* Content mockup */}
                        <div className="p-3 flex flex-col gap-1.5">
                          <div className="h-2 w-2/3 rounded-full" style={{ background: `${cat.text.replace(")", "/0.5)")}` }} />
                          <div className="h-1.5 w-full rounded-full" style={{ background: "hsl(var(--border))" }} />
                          <div className="h-1.5 w-4/5 rounded-full" style={{ background: "hsl(var(--border))" }} />
                          <div className="mt-1.5 grid grid-cols-3 gap-1.5">
                            {[1,2,3].map(n => (
                              <div key={n} className="h-8 rounded-lg" style={{ background: "hsl(var(--border)/0.5)" }} />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Category badge overlay */}
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold border"
                          style={{ background: cat.bg, color: cat.text, borderColor: cat.border }}>
                          {study.category}
                        </span>
                      </div>

                      {/* Corner glow */}
                      <div className="absolute top-0 left-0 w-32 h-32 rounded-full blur-3xl opacity-50"
                        style={{ background: grad[0] }} />
                    </div>

                    <div className="flex flex-col flex-1 p-6">
                      <p className="text-[11px] font-semibold uppercase tracking-widest mb-2"
                        style={{ color: cat.text }}>{study.client}</p>
                      <h3 className="text-base font-bold mb-5 leading-snug">{study.title}</h3>

                      <div className="flex flex-col gap-3.5 mb-5 flex-1">
                        {[
                          { label: "Challenge", text: study.challenge, borderColor: "hsl(var(--border))", labelColor: "hsl(var(--muted-foreground))" },
                          { label: "Solution",  text: study.solution,  borderColor: "hsl(var(--border))", labelColor: "hsl(var(--muted-foreground))" },
                          { label: "Outcome",   text: study.outcome,   borderColor: cat.text,            labelColor: cat.text },
                        ].map(({ label, text, borderColor, labelColor }) => (
                          <div key={label} className="pl-3.5" style={{ borderLeft: `2px solid ${borderColor}` }}>
                            <span className="text-[10px] font-black uppercase tracking-widest block mb-0.5"
                              style={{ color: labelColor }}>{label}</span>
                            <p className="text-sm leading-relaxed line-clamp-2"
                              style={{ color: "hsl(var(--muted-foreground))" }}>{text}</p>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {study.tags.map(tag => (
                          <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                            style={{
                              background: "hsl(var(--surface-elevated))",
                              border: "1px solid hsl(var(--border))",
                              color: "hsl(var(--muted-foreground))",
                            }}>{tag}</span>
                        ))}
                      </div>

                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-300 group hover:gap-3"
                        style={{ color: cat.text }}
                      >
                        Want something similar?
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          {caseStudies.map((_, i) => (
            <button key={i} onClick={() => { emblaApi?.scrollTo(i); setActiveIndex(i); }}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? "20px" : "6px",
                height: "6px",
                background: i === activeIndex ? "hsl(var(--primary))" : "hsl(var(--border))",
                boxShadow: i === activeIndex ? "0 0 10px hsl(var(--primary)/0.5)" : "",
              }} />
          ))}
        </div>

        {/* Bottom link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group"
            style={{ color: "hsl(var(--muted-foreground))" }}
            onMouseEnter={e => (e.currentTarget.style.color = "hsl(var(--foreground))")}
            onMouseLeave={e => (e.currentTarget.style.color = "hsl(var(--muted-foreground))")}
          >
            View all case studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
