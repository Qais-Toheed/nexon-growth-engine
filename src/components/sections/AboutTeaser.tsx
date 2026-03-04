import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function AboutTeaser() {
  return (
    <section className="section-padding bg-surface/40">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            {/* Visual */}
            <div className="relative w-full lg:w-80 flex-shrink-0">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-violet/10 to-cyan/10 border border-border flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent" />
                <div className="text-center z-10">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-cyan mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-black text-background">N</span>
                  </div>
                  <p className="text-sm font-bold text-foreground">Nexon Growth</p>
                  <p className="text-xs text-muted-foreground">Digital Agency</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">About Us</p>
              <h2 className="text-3xl sm:text-4xl font-black mb-5 leading-tight">
                We exist to close the gap between{" "}
                <span className="text-gradient">ambition and execution</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
                Nexon Growth is a growth-focused digital agency that combines strategy, design, development, and performance marketing into one integrated service model.
              </p>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                We work with ecommerce brands, SaaS startups, and ambitious businesses that are serious about building digital infrastructure that performs — not just digital assets that exist.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-4 transition-all"
                >
                  Learn our story
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                >
                  Start a conversation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
