import { Suspense } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroCanvas } from "@/components/three/HeroCanvas";
import { useIsMobile } from "@/hooks/use-mobile";

const trustTags = [
  "Web Development",
  "Mobile Apps",
  "Meta & Google Ads",
  "Shopify",
  "AI Automation",
];

export function HeroSection() {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background glows */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute inset-0 bg-hero-glow-violet pointer-events-none" />

      {/* 3D Canvas — right side, desktop only */}
      {!isMobile && (
        <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-[55%] pointer-events-none">
          <Suspense fallback={null}>
            <HeroCanvas />
          </Suspense>
        </div>
      )}

      {/* Mobile gradient fallback */}
      {isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-48 h-48 rounded-full bg-violet/8 blur-3xl" />
        </div>
      )}

      <div className="container relative z-10 py-20 lg:py-32">
        <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary tracking-wide uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Growth-Focused Digital Agency
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.08] tracking-tight mb-6"
          >
            Turn Clicks Into{" "}
            <span className="text-gradient">Clients.</span>
            <br />
            Browsers Into{" "}
            <span className="text-gradient">Buyers.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg"
          >
            We build high-converting websites, mobile apps, performance marketing systems, and AI automations — engineered to grow your business, not just look good doing it.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-10"
          >
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
              className="border-border/60 hover:border-primary/40 text-foreground font-semibold text-base"
            >
              <Link to="/contact">
                Get a Proposal
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              <MessageCircle className="w-4 h-4 text-green-400" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Trust tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-2"
          >
            {trustTags.map((tag, i) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full bg-surface-elevated border border-border text-muted-foreground font-medium"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
