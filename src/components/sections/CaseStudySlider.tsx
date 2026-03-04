import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { caseStudies } from "@/data/caseStudies";

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Web:        { bg: "bg-primary/12",  text: "text-primary", border: "border-primary/25" },
  Ecommerce:  { bg: "bg-cyan/12",     text: "text-cyan",    border: "border-cyan/25" },
  Marketing:  { bg: "bg-violet/12",   text: "text-violet",  border: "border-violet/25" },
  AI:         { bg: "bg-primary/12",  text: "text-primary", border: "border-primary/25" },
  App:        { bg: "bg-cyan/12",     text: "text-cyan",    border: "border-cyan/25" },
};

const visualGradients = [
  "from-primary/30 via-primary/10 to-cyan/15",
  "from-violet/30 via-violet/10 to-primary/15",
  "from-cyan/30 via-cyan/10 to-violet/15",
  "from-primary/25 via-cyan/15 to-violet/20",
  "from-violet/25 via-primary/10 to-cyan/20",
  "from-cyan/20 via-primary/15 to-violet/10",
];

export function CaseStudySlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    setActiveIndex((prev) => Math.max(0, prev - 1));
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    setActiveIndex((prev) => Math.min(caseStudies.length - 1, prev + 1));
  }, [emblaApi]);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-[600px] h-[400px] orb-violet opacity-8" />
      </div>
      <div className="divider-glow absolute top-0 left-0 right-0" />

      <div className="container relative z-10">

        {/* Header */}
        <div className="flex items-end justify-between mb-14">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest mb-4">
              <span className="w-6 h-px bg-gradient-to-r from-primary to-cyan" />
              Our Work
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight">
              Real projects.{" "}
              <span className="text-gradient">Real outcomes.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Each project starts with a specific problem and a commitment to solving it properly.
            </p>
          </motion.div>

          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 rounded-xl border border-border bg-surface hover:border-primary/40 hover:bg-primary/5 flex items-center justify-center transition-all duration-300 group"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
            <button
              onClick={scrollNext}
              className="w-11 h-11 rounded-xl border border-border bg-surface hover:border-primary/40 hover:bg-primary/5 flex items-center justify-center transition-all duration-300 group"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-4 lg:gap-5">
            {caseStudies.map((study, i) => {
              const cat = categoryColors[study.categoryTag] ?? categoryColors.Web;
              const grad = visualGradients[i % visualGradients.length];
              const isActive = i === activeIndex;
              return (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="flex-none w-[88vw] sm:w-[400px] lg:w-[380px]"
                >
                  <div className={`h-full flex flex-col rounded-2xl border border-glow-hover card-tilt card-shimmer overflow-hidden transition-all duration-400 ${isActive ? "border-primary/25 shadow-card-hover" : "border-border"}`}
                    style={{ background: "hsl(var(--surface))" }}
                  >
                    {/* Visual preview panel */}
                    <div className={`h-44 bg-gradient-to-br ${grad} relative overflow-hidden flex-shrink-0`}>
                      {/* Mockup frame lines */}
                      <div className="absolute inset-4 rounded-xl border border-white/10 flex items-center justify-center">
                        <div className="text-center">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border ${cat.bg} ${cat.text} ${cat.border} mb-2`}>
                            {study.category}
                          </span>
                          <p className="text-xs text-white/50 font-medium">{study.client}</p>
                        </div>
                      </div>
                      {/* Corner glow */}
                      <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-40"
                        style={{ background: `hsl(var(--primary) / 0.4)` }} />
                    </div>

                    <div className="flex flex-col flex-1 p-5">
                      <h3 className="text-base font-bold mb-4 leading-snug">{study.title}</h3>

                      <div className="flex flex-col gap-3 mb-5 flex-1">
                        <div className="pl-3 border-l-2 border-border">
                          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block mb-0.5">Challenge</span>
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{study.challenge}</p>
                        </div>
                        <div className="pl-3 border-l-2 border-border">
                          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block mb-0.5">Solution</span>
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{study.solution}</p>
                        </div>
                        <div className="pl-3" style={{ borderLeft: "2px solid hsl(var(--primary) / 0.5)" }}>
                          <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-0.5">Outcome</span>
                          <p className="text-sm leading-relaxed line-clamp-2">{study.outcome}</p>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {study.tags.map((tag) => (
                          <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full border font-medium" style={{ background: "hsl(var(--surface-elevated))", borderColor: "hsl(var(--border))", color: "hsl(var(--muted-foreground))" }}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:gap-3 transition-all duration-300 group"
                      >
                        Want something similar?
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group"
          >
            View all case studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
