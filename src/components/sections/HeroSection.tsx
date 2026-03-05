import { Suspense } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Calendar, Zap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroCanvas } from "@/components/three/HeroCanvas";
import { useIsMobile } from "@/hooks/use-mobile";

const floatingPills = [
  { label: "Web Development",  delay: 0.2,  x: "64%",  y: "16%", type: "primary" },
  { label: "Mobile Apps",      delay: 0.5,  x: "72%",  y: "34%", type: "default" },
  { label: "Meta & Google Ads",delay: 0.8,  x: "60%",  y: "54%", type: "cyan" },
  { label: "Shopify",          delay: 1.1,  x: "74%",  y: "70%", type: "primary" },
  { label: "AI Automation",    delay: 1.35, x: "63%",  y: "82%", type: "default" },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};
const item = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export function HeroSection() {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">

      {/* ── Layered atmospheric glows ── */}
      <div className="absolute inset-0 bg-hero-glow         pointer-events-none" />
      <div className="absolute inset-0 bg-hero-glow-violet  pointer-events-none" />
      <div className="absolute inset-0 bg-hero-glow-cyan    pointer-events-none" />

      {/* Extra luminous orbs */}
      <div className="absolute right-[8%]  top-[12%]  w-[560px] h-[560px] orb-blue   opacity-[0.28] pointer-events-none animate-orb-float" />
      <div className="absolute right-[25%] bottom-[8%] w-[320px] h-[320px] orb-violet opacity-[0.18] pointer-events-none" style={{ animationDelay: "2.5s" }} />
      <div className="absolute left-[5%]  top-[35%]  w-[280px] h-[280px] orb-cyan   opacity-[0.12] pointer-events-none animate-orb-float" style={{ animationDelay: "4s" }} />

      {/* Diagonal light streak */}
      <div className="absolute top-0 left-[45%] w-px h-[40vh] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--primary)/0.5), transparent)", opacity: 0.4 }} />

      {/* ── 3D Canvas — full-height right side, desktop only ── */}
      {!isMobile && (
        <div className="absolute right-0 top-0 bottom-0 w-[58%] pointer-events-none z-[1]">
          <Suspense fallback={null}>
            <HeroCanvas />
          </Suspense>
        </div>
      )}

      {/* Mobile gradient fallback */}
      {isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-80 h-80 orb-blue opacity-25 blur-3xl animate-orb-float" />
          <div className="absolute bottom-1/3 left-1/4 w-52 h-52 orb-violet opacity-14 blur-3xl" />
          <div className="absolute top-2/3 right-1/4 w-40 h-40 orb-cyan opacity-12 blur-3xl" />
        </div>
      )}

      {/* ── Floating service pills (desktop xl only) ── */}
      {!isMobile && floatingPills.map((pill) => (
        <motion.div
          key={pill.label}
          initial={{ opacity: 0, scale: 0.7, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: pill.delay + 1.4, ease: "easeOut" }}
          className="absolute z-[2] hidden xl:flex pointer-events-none"
          style={{ left: pill.x, top: pill.y }}
        >
          <span className={`pill-tag${pill.type === "primary" ? "-primary" : pill.type === "cyan" ? "-cyan" : ""} text-xs shadow-card`}>
            {pill.label}
          </span>
        </motion.div>
      ))}

      {/* ── Main content ── */}
      <div className="container relative z-10 py-24 lg:py-40">
        <div className="max-w-[660px] xl:max-w-[700px]">

          <motion.div variants={stagger} initial="hidden" animate="visible">

            {/* Eyebrow pill */}
            <motion.div variants={item}>
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass-ultra text-xs font-bold tracking-[0.16em] uppercase"
                style={{ color: "hsl(var(--primary))" }}>
                <Zap className="w-3 h-3 fill-current" />
                Growth-Focused Digital Agency
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              </div>
            </motion.div>

            {/* Headline — dramatic scale + gradient accent */}
            <motion.h1
              variants={item}
              className="text-[clamp(3rem,8vw,90px)] font-black leading-[1.0] tracking-tight mb-7"
            >
              Turn Clicks Into{" "}
              <span className="text-gradient text-glow-blue">Clients.</span>
              <br />
              <span style={{ color: "hsl(var(--foreground)/0.88)" }}>Browsers Into </span>
              <span className="text-gradient-violet text-glow-violet">Buyers.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={item}
              className="text-lg sm:text-xl leading-relaxed mb-10 max-w-[530px]"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              We engineer high-converting websites, mobile apps, performance
              marketing systems, and AI automations — built around one goal:{" "}
              <span style={{ color: "hsl(var(--foreground)/0.85)" }}>growing your revenue.</span>
            </motion.p>

            {/* CTA cluster */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-10"
            >
              {/* Primary CTA */}
              <Button
                asChild
                size="lg"
                className="relative font-bold px-8 text-base group overflow-hidden"
                style={{
                  background: "hsl(var(--primary))",
                  color: "hsl(var(--primary-foreground))",
                  boxShadow: "var(--glow-blue-strong), 0 4px 20px hsl(230 52% 2%/0.5)",
                }}
              >
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-4 h-4" />
                  Book a Free Strategy Call
                  {/* Shimmer sweep */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </a>
              </Button>

              {/* Secondary CTA */}
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-semibold text-base transition-all duration-300 group"
                style={{
                  borderColor: "hsl(var(--border))",
                  background: "hsl(var(--surface)/0.5)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <Link to="/contact">
                  Get a Proposal
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              {/* WhatsApp inline */}
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium py-2 px-1 transition-colors"
                style={{ color: "hsl(var(--muted-foreground))" }}
                onMouseEnter={e => (e.currentTarget.style.color = "hsl(var(--foreground))")}
                onMouseLeave={e => (e.currentTarget.style.color = "hsl(var(--muted-foreground))")}
              >
                <span className="w-6 h-6 rounded-full flex items-center justify-center border"
                  style={{ background: "hsl(142 70% 45%/0.14)", borderColor: "hsl(142 70% 45%/0.3)" }}>
                  <MessageCircle className="w-3 h-3" style={{ color: "hsl(142 70% 45%)" }} />
                </span>
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Trust micro-copy */}
            <motion.div variants={item}>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs"
                style={{ color: "hsl(var(--muted-foreground))" }}>
                {["Strategy-first", "You own all assets", "No retainer traps", "Direct communication"].map((t, i) => (
                  <span key={t} className="flex items-center gap-1.5">
                    {i > 0 && <span className="w-px h-3 rounded-full" style={{ background: "hsl(var(--border))" }} />}
                    <span className="w-1 h-1 rounded-full" style={{ background: "hsl(var(--primary)/0.7)" }} />
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
        style={{ color: "hsl(var(--muted-foreground)/0.5)" }}
      >
        <span className="text-[10px] font-semibold tracking-[0.18em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>

      {/* Cinematic bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-[3]"
        style={{ background: "linear-gradient(to top, hsl(var(--background)), transparent)" }} />

      {/* Subtle bottom divider glow */}
      <div className="absolute bottom-0 left-0 right-0 divider-glow pointer-events-none z-[3]" />
    </section>
  );
}
