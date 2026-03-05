import { Suspense } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, Calendar, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroCanvas } from "@/components/three/HeroCanvas";
import { useIsMobile } from "@/hooks/use-mobile";
import { useRef } from "react";

const pills = [
  { label: "Web Development",   type: "primary", x: "66%", y: "18%", delay: 1.4  },
  { label: "Mobile Apps",        type: "default", x: "74%", y: "36%", delay: 1.65 },
  { label: "Meta & Google Ads",  type: "cyan",    x: "61%", y: "56%", delay: 1.9  },
  { label: "Shopify",            type: "primary", x: "75%", y: "72%", delay: 2.1  },
  { label: "AI Automation",      type: "default", x: "64%", y: "84%", delay: 2.3  },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const item = {
  hidden:   { opacity: 0, y: 32 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

export function HeroSection() {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yCanvas  = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity  = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: "linear-gradient(160deg, hsl(220 30% 99%) 0%, hsl(218 35% 97%) 50%, hsl(214 45% 96%) 100%)" }}>

      {/* ── Ambient glow light fields ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[8%] top-[8%] w-[700px] h-[700px] orb-blue opacity-[0.18] animate-orb-float" />
        <div className="absolute right-[30%] bottom-[5%] w-[400px] h-[400px] orb-violet opacity-[0.10]" style={{ animationDelay: "2.5s" }} />
        <div className="absolute left-[3%] top-[40%] w-[350px] h-[350px] orb-cyan opacity-[0.09] animate-orb-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Fine grid texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(hsl(214 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(214 100% 50%) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />

      {/* Diagonal light beam */}
      <div className="absolute top-0 left-[50%] w-[1px] h-[45vh] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--primary)/0.3), transparent)", opacity: 0.6 }} />
      <div className="absolute top-0 left-[55%] w-[1px] h-[30vh] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--cyan)/0.25), transparent)", opacity: 0.4 }} />

      {/* ── 3D Canvas — right side desktop ── */}
      {!isMobile && (
        <motion.div style={{ y: yCanvas }} className="absolute right-0 top-0 bottom-0 w-[58%] pointer-events-none z-[1]">
          <Suspense fallback={null}>
            <HeroCanvas />
          </Suspense>
        </motion.div>
      )}

      {/* Mobile gradient fallback */}
      {isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-64 h-64 orb-blue opacity-20 animate-orb-float" />
          <div className="absolute bottom-1/3 left-1/4 w-48 h-48 orb-violet opacity-10" />
        </div>
      )}

      {/* ── Floating service pills ── */}
      {!isMobile && pills.map((pill) => (
        <motion.div
          key={pill.label}
          initial={{ opacity: 0, scale: 0.7, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: pill.delay, ease: "easeOut" }}
          className="absolute z-[2] hidden xl:flex pointer-events-none"
          style={{ left: pill.x, top: pill.y }}
        >
          <span className={`pill-tag${pill.type === "primary" ? "-primary" : pill.type === "cyan" ? "-cyan" : ""} text-xs shadow-sm`}>
            {pill.label}
          </span>
        </motion.div>
      ))}

      {/* ── Main content ── */}
      <motion.div style={{ y: yContent, opacity }} className="container relative z-10 py-24 lg:py-40">
        <div className="max-w-[640px] xl:max-w-[680px]">
          <motion.div variants={stagger} initial="hidden" animate="visible">

            {/* Eyebrow */}
            <motion.div variants={item}>
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs font-bold tracking-[0.15em] uppercase glass-ultra"
                style={{ color: "hsl(var(--primary))" }}>
                <Sparkles className="w-3 h-3" />
                Growth-Focused Digital Agency
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={item}
              className="text-[clamp(2.8rem,7.5vw,86px)] font-black leading-[1.02] tracking-tight mb-6"
              style={{ color: "hsl(var(--foreground))" }}
            >
              Turn Clicks Into{" "}
              <span className="text-gradient text-glow-blue">Clients.</span>
              <br />
              <span style={{ color: "hsl(var(--foreground))" }}>Browsers Into </span>
              <span className="text-gradient-violet">Buyers.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p variants={item}
              className="text-lg sm:text-xl leading-relaxed mb-10 max-w-[520px]"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              We engineer high-converting websites, mobile apps, performance marketing, and AI automations — built around one goal:{" "}
              <span style={{ color: "hsl(var(--foreground))", fontWeight: 600 }}>growing your revenue.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-10">
              <Button asChild size="lg"
                className="relative font-bold px-8 text-base group overflow-hidden rounded-xl"
                style={{
                  background: "hsl(var(--primary))",
                  color: "hsl(var(--primary-foreground))",
                  boxShadow: "0 4px 24px hsl(214 100% 50% / 0.35), 0 2px 8px hsl(214 100% 50% / 0.2)",
                }}
              >
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-4 h-4" />
                  Book a Free Strategy Call
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </a>
              </Button>

              <Button asChild variant="outline" size="lg"
                className="font-semibold text-base transition-all duration-300 group rounded-xl"
                style={{
                  borderColor: "hsl(var(--border))",
                  background: "hsl(220 30% 100% / 0.8)",
                  backdropFilter: "blur(12px)",
                  color: "hsl(var(--foreground))",
                  boxShadow: "0 2px 12px hsl(220 30% 10% / 0.08)",
                }}
              >
                <Link to="/contact">
                  Get a Proposal
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium py-2 px-1 transition-colors"
                style={{ color: "hsl(var(--muted-foreground))" }}
                onMouseEnter={e => (e.currentTarget.style.color = "hsl(var(--foreground))")}
                onMouseLeave={e => (e.currentTarget.style.color = "hsl(var(--muted-foreground))")}
              >
                <span className="w-7 h-7 rounded-full flex items-center justify-center border"
                  style={{ background: "hsl(142 70% 45%/0.10)", borderColor: "hsl(142 70% 45%/0.25)" }}>
                  <MessageCircle className="w-3.5 h-3.5" style={{ color: "hsl(142 70% 45%)" }} />
                </span>
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Trust tags */}
            <motion.div variants={item}>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs"
                style={{ color: "hsl(var(--muted-foreground))" }}>
                {["Strategy-first", "You own all assets", "No retainer traps", "Direct communication"].map((t, i) => (
                  <span key={t} className="flex items-center gap-1.5">
                    {i > 0 && <span className="w-px h-3 rounded-full" style={{ background: "hsl(var(--border))" }} />}
                    <span className="w-1 h-1 rounded-full" style={{ background: "hsl(var(--primary)/0.6)" }} />
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
        style={{ color: "hsl(var(--muted-foreground)/0.5)" }}
      >
        <span className="text-[10px] font-semibold tracking-[0.18em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-[3]"
        style={{ background: "linear-gradient(to top, hsl(var(--background)), transparent)" }} />

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 divider-glow pointer-events-none z-[3]" />
    </section>
  );
}
