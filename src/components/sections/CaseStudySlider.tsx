import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { caseStudies } from "@/data/caseStudies";

const catTokens: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  Web:       { bg: "hsl(var(--primary)/0.08)", text: "hsl(var(--primary))", border: "hsl(var(--primary)/0.22)", glow: "hsl(214 100% 50% / 0.14)" },
  Ecommerce: { bg: "hsl(var(--cyan)/0.08)",    text: "hsl(var(--cyan))",    border: "hsl(var(--cyan)/0.22)",    glow: "hsl(188 97% 44% / 0.12)" },
  Marketing: { bg: "hsl(var(--violet)/0.08)",  text: "hsl(var(--violet))", border: "hsl(var(--violet)/0.22)",  glow: "hsl(255 82% 62% / 0.12)" },
  AI:        { bg: "hsl(var(--primary)/0.08)", text: "hsl(var(--primary))", border: "hsl(var(--primary)/0.22)", glow: "hsl(214 100% 50% / 0.14)" },
  App:       { bg: "hsl(var(--cyan)/0.08)",    text: "hsl(var(--cyan))",    border: "hsl(var(--cyan)/0.22)",    glow: "hsl(188 97% 44% / 0.12)" },
};

const previewGrads = [
  ["hsl(var(--primary)/0.12)", "hsl(var(--cyan)/0.06)"],
  ["hsl(var(--violet)/0.12)",  "hsl(var(--primary)/0.06)"],
  ["hsl(var(--cyan)/0.12)",    "hsl(var(--violet)/0.06)"],
  ["hsl(var(--primary)/0.10)", "hsl(var(--violet)/0.08)"],
  ["hsl(var(--violet)/0.10)",  "hsl(var(--cyan)/0.08)"],
  ["hsl(var(--cyan)/0.10)",    "hsl(var(--primary)/0.08)"],
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
    <section className="section-padding relative overflow-hidden"
      style={{ background: "hsl(var(--background))" }}>

      {/* Ambient */}
      <div className="absolute right-0 top-0 w-[600px] h-[500px] orb-violet opacity-[0.06] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-[400px] h-[350px] orb-blue opacity-[0.05] pointer-events-none" />
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
            <h2 className="text-5xl sm:text-6xl md:text-[68px] font-black leading-[1.0] mb-4"
              style={{ color: "hsl(var(--foreground))" }}>
              Real projects.<br />
              <span className="text-gradient">Real outcomes.</span>
            </h2>
            <p className="leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
              Each project starts with a specific problem and a commitment to solving it properly.
            </p>
          </motion.div>

          {/* Nav buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {[{ fn: scrollPrev, icon: ChevronLeft }, { fn: scrollNext, icon: ChevronRight }].map(({ fn, icon: Icon }, idx) => (
              <button key={idx} onClick={fn}
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 card-white card-white-hover"
                aria-label={idx === 0 ? "Previous" : "Next"}
              >
                <Icon className="w-5 h-5" style={{ color: "hsl(var(--muted-foreground))" }} />
              </button>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-5">
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
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                  className="flex-none w-[88vw] sm:w-[400px] lg:w-[385px]"
                >
                  <div
                    className="h-full flex flex-col rounded-2xl card-white card-shimmer overflow-hidden transition-all duration-400 card-white-hover"
                    style={{
                      borderColor: isActive ? cat.border : "hsl(var(--border))",
                      boxShadow: isActive ? `0 8px 40px ${cat.glow}` : "",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = cat.border;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 48px ${cat.glow}`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = isActive ? cat.border : "hsl(var(--border))";
                      (e.currentTarget as HTMLElement).style.boxShadow = isActive ? `0 8px 40px ${cat.glow}` : "";
                    }}
                  >
                    {/* Visual panel */}
                    <div className="h-48 relative overflow-hidden flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${grad[0]}, ${grad[1]})` }}>

                      {/* UI mockup frame */}
                      <div className="absolute inset-5 rounded-xl overflow-hidden"
                        style={{ border: "1px solid hsl(var(--border))", background: "hsl(220 30% 100% / 0.85)" }}>
                        {/* Browser bar */}
                        <div className="flex items-center gap-1.5 px-3 py-2 border-b"
                          style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--surface))" }}>
                          <div className="flex gap-1">
                            {["hsl(0 80% 65%)", "hsl(40 90% 58%)", "hsl(142 70% 45%)"].map((c, ci) => (
                              <div key={ci} className="w-2 h-2 rounded-full" style={{ background: c }} />
                            ))}
                          </div>
                          <div className="flex-1 mx-3 h-1.5 rounded-full" style={{ background: "hsl(var(--border))" }} />
                        </div>
                        {/* Content mockup */}
                        <div className="p-3 flex flex-col gap-1.5">
                          <div className="h-2 w-2/3 rounded-full" style={{ background: cat.text }} />
                          <div className="h-1.5 w-full rounded-full" style={{ background: "hsl(var(--border))" }} />
                          <div className="h-1.5 w-4/5 rounded-full" style={{ background: "hsl(var(--border))" }} />
                          <div className="mt-1.5 grid grid-cols-3 gap-1.5">
                            {[1,2,3].map(n => (
                              <div key={n} className="h-8 rounded-lg" style={{ background: "hsl(var(--surface))" }} />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Category badge */}
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold border"
                          style={{ background: cat.bg, color: cat.text, borderColor: cat.border }}>
                          {study.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col flex-1 p-6">
                      <p className="text-[11px] font-semibold uppercase tracking-widest mb-2"
                        style={{ color: cat.text }}>{study.client}</p>
                      <h3 className="text-base font-bold mb-5 leading-snug"
                        style={{ color: "hsl(var(--foreground))" }}>{study.title}</h3>

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

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {study.tags.map(tag => (
                          <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                            style={{
                              background: "hsl(var(--surface))",
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
            <button key={i}
              onClick={() => { emblaApi?.scrollTo(i); setActiveIndex(i); }}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? "20px" : "6px",
                height: "6px",
                background: i === activeIndex ? "hsl(var(--primary))" : "hsl(var(--border))",
                boxShadow: i === activeIndex ? "0 0 8px hsl(var(--primary)/0.4)" : "",
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
            onMouseEnter={e => (e.currentTarget.style.color = "hsl(var(--primary))")}
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
