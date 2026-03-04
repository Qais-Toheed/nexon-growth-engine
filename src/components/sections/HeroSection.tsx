import { Suspense } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, Calendar, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroCanvas } from "@/components/three/HeroCanvas";
import { useIsMobile } from "@/hooks/use-mobile";

const floatingPills = [
  { label: "Web Development", delay: 0, x: "70%", y: "18%", color: "pill-tag-primary" },
  { label: "Mobile Apps", delay: 0.3, x: "75%", y: "40%", color: "pill-tag" },
  { label: "Meta & Google Ads", delay: 0.6, x: "62%", y: "62%", color: "pill-tag" },
  { label: "Shopify", delay: 0.9, x: "78%", y: "78%", color: "pill-tag-primary" },
  { label: "AI Automation", delay: 1.1, x: "66%", y: "84%", color: "pill-tag" },
];

export function HeroSection() {
  const isMobile = useIsMobile();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">

      {/* ── Layered background glows ── */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute inset-0 bg-hero-glow-violet pointer-events-none" />
      <div className="absolute inset-0 bg-hero-glow-cyan pointer-events-none" />

      {/* Large ambient orb behind 3D */}
      <div className="absolute right-[5%] top-[15%] w-[500px] h-[500px] orb-blue opacity-30 pointer-events-none animate-orb-float" />
      <div className="absolute right-[20%] bottom-[10%] w-[300px] h-[300px] orb-violet opacity-20 pointer-events-none" style={{ animationDelay: "2s" }} />

      {/* ── 3D Canvas — full-height right side, desktop only ── */}
      {!isMobile && (
        <div className="absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none z-[1]">
          <Suspense fallback={null}>
            <HeroCanvas />
          </Suspense>
        </div>
      )}

      {/* Mobile gradient fallback */}
      {isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-72 h-72 orb-blue opacity-25 blur-3xl animate-orb-float" />
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 orb-violet opacity-15 blur-3xl" />
        </div>
      )}

      {/* ── Floating service pills (desktop only) ── */}
      {!isMobile && floatingPills.map((pill) => (
        <motion.div
          key={pill.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: pill.delay + 1.2, ease: "easeOut" }}
          className={`absolute ${pill.color} hidden xl:flex z-[2] pointer-events-none`}
          style={{ left: pill.x, top: pill.y }}
        >
          <span className={`pill-tag ${pill.color === "pill-tag-primary" ? "pill-tag-primary" : ""} text-xs shadow-card`}>
            {pill.label}
          </span>
        </motion.div>
      ))}

      {/* ── Main content ── */}
      <div className="container relative z-10 py-24 lg:py-36">
        <div className="max-w-[640px] xl:max-w-[680px]">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 mb-7 px-3.5 py-1.5 rounded-full glass-bright border border-primary/25 text-xs font-semibold text-primary tracking-widest uppercase">
                <Zap className="w-3 h-3 fill-primary" />
                Growth-Focused Digital Agency
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-black leading-[1.02] tracking-tight mb-6"
            >
              Turn Clicks Into{" "}
              <span className="text-gradient text-glow-blue">Clients.</span>
              <br />
              <span className="text-foreground/90">Browsers Into </span>
              <span className="text-gradient-violet">Buyers.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-[520px]"
            >
              We engineer high-converting websites, mobile apps, performance marketing systems, and AI automations — built around one goal: growing your revenue.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-10"
            >
              <Button
                asChild
                size="lg"
                className="relative bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 shadow-button-glow text-base group overflow-hidden"
              >
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-4 h-4" />
                  Book a Free Strategy Call
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border/50 hover:border-primary/40 hover:bg-primary/5 text-foreground font-semibold text-base transition-all duration-300"
              >
                <Link to="/contact">
                  Get a Proposal
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors py-2 px-1"
              >
                <span className="w-6 h-6 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center">
                  <MessageCircle className="w-3 h-3 text-[#25D366]" />
                </span>
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.div variants={itemVariants}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                {["Strategy-first", "You own all assets", "No retainer traps", "Direct communication"].map((t, i) => (
                  <span key={t} className="flex items-center gap-1.5">
                    {i > 0 && <span className="w-0.5 h-0.5 rounded-full bg-border" />}
                    <span className="w-1 h-1 rounded-full bg-primary/60" />
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Cinematic bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none z-[3]" />

      {/* Subtle horizontal line */}
      <div className="absolute bottom-0 left-0 right-0 divider-glow pointer-events-none z-[3]" />
    </section>
  );
}
