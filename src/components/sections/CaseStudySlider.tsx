import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { caseStudies } from "@/data/caseStudies";

const categoryColors: Record<string, string> = {
  Web: "bg-primary/10 text-primary border-primary/20",
  Ecommerce: "bg-cyan/10 text-cyan border-cyan/20",
  Marketing: "bg-violet/10 text-violet border-violet/20",
  AI: "bg-primary/10 text-primary border-primary/20",
  App: "bg-cyan/10 text-cyan border-cyan/20",
};

export function CaseStudySlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="section-padding overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Our Work</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              Real projects.{" "}
              <span className="text-gradient">Real outcomes.</span>
            </h2>
            <p className="text-muted-foreground">
              Each project starts with a specific problem and a commitment to solving it properly. Here's what that looks like in practice.
            </p>
          </motion.div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-xl border border-border bg-surface hover:border-primary/40 flex items-center justify-center transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-xl border border-border bg-surface hover:border-primary/40 flex items-center justify-center transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-5">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex-none w-[85vw] sm:w-[420px] lg:w-[400px]"
              >
                <div className="h-full flex flex-col p-6 rounded-2xl bg-surface border border-border border-glow-hover group">
                  {/* Visual placeholder */}
                  <div className={`h-40 rounded-xl bg-gradient-to-br ${study.gradient} border border-border mb-5 flex items-center justify-center`}>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{study.category}</span>
                  </div>

                  {/* Category badge */}
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border mb-3 w-fit ${categoryColors[study.categoryTag]}`}>
                    {study.category}
                  </span>

                  <h3 className="text-base font-bold mb-4 leading-snug">{study.title}</h3>

                  <div className="flex flex-col gap-3 mb-5 flex-1">
                    <div>
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">Challenge</span>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{study.challenge}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">Solution</span>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{study.solution}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-1">Outcome</span>
                      <p className="text-sm text-foreground leading-relaxed line-clamp-2">{study.outcome}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {study.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-surface-elevated border border-border text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all"
                  >
                    Want something similar?
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            View all case studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
