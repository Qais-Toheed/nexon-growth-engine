import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { CTABanner } from "@/components/sections/CTABanner";

const tabs = ["All", "Web", "Ecommerce", "Marketing", "AI", "App"] as const;

const Portfolio = () => {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? caseStudies : caseStudies.filter(c => c.categoryTag === active);

  return (
    <main className="pt-20">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl mb-12">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">Our Work</p>
            <h1 className="text-4xl sm:text-5xl font-black mb-5">Real projects. <span className="text-gradient">Real outcomes.</span></h1>
            <p className="text-xl text-muted-foreground">A selection of projects spanning web, ecommerce, marketing, and AI automation.</p>
          </motion.div>

          <div className="flex flex-wrap gap-2 mb-10">
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActive(tab)} className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${active === tab ? "bg-primary text-primary-foreground border-primary" : "bg-surface border-border text-muted-foreground hover:text-foreground hover:border-primary/40"}`}>{tab}</button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((study, i) => (
              <motion.div key={study.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }} className="flex flex-col p-6 rounded-2xl bg-surface border border-border border-glow-hover group">
                <div className={`h-36 rounded-xl bg-gradient-to-br ${study.gradient} border border-border mb-5 flex items-center justify-center`}>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{study.category}</span>
                </div>
                <h3 className="font-bold mb-2">{study.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">{study.challenge}</p>
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all">
                  Want something similar? <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </main>
  );
};

export default Portfolio;
