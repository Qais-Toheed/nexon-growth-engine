import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CTABannerProps {
  headline?: string;
  subheadline?: string;
}

export function CTABanner({
  headline = "Ready to build something that actually grows your business?",
  subheadline = "Book a free 30-minute strategy call. We'll review your situation and give you an honest assessment of what would move the needle.",
}: CTABannerProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-surface to-violet/5" />
      <div className="absolute inset-0 bg-hero-glow opacity-60" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-5 leading-tight">
            {headline}
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 shadow-glow-blue text-base"
            >
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4" />
                Book a Free Strategy Call
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border/60 hover:border-primary/40 text-foreground font-semibold"
            >
              <Link to="#proposal">
                Get a Proposal
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
