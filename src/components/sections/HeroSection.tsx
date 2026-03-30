import { Suspense, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, ChevronDown, Zap, Globe, BarChart3, Share2, Palette, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroCanvas } from "@/components/three/HeroCanvas";
import { useIsMobile } from "@/hooks/use-mobile";

const WHATSAPP_PRIMARY = "923094278123";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = {
  hidden:  { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] } },
};

const servicePills = [
  { icon: BarChart3,   label: "Performance Marketing", color: "hsl(var(--primary))" },
  { icon: Share2,      label: "Social Media",          color: "hsl(var(--cyan))" },
  { icon: Globe,       label: "Web Development",       color: "hsl(var(--violet))" },
  { icon: Palette,     label: "Graphic Design",        color: "hsl(var(--primary))" },
  { icon: Video,       label: "Video Editing",         color: "hsl(var(--cyan))" },
];

const metrics = [
  { value: "3×",   label: "Average revenue lift",  accent: "hsl(var(--primary))" },
  { value: "48h",  label: "Strategy delivered",    accent: "hsl(var(--cyan))" },
  { value: "120+", label: "Projects delivered",    accent: "hsl(var(--violet))" },
];

export function HeroSection() {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yCanvas  = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const opacity  = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        background: "linear-gradient(160deg, hsl(220 35% 100%) 0%, hsl(218 40% 98%) 50%, hsl(216 50% 96%) 100%)",
      }}
    >
      {/* ── Rich layered background glows ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary right orb */}
        <div className="absolute animate-orb-float"
          style={{ right: "-8%", top: "0%", width: "80vw", height: "90vh",
            background: "radial-gradient(ellipse, hsl(214 100% 50% / 0.09) 0%, hsl(214 100% 50% / 0.03) 40%, transparent 70%)",
            filter: "blur(50px)" }} />
        {/* Cyan depth */}
        <div className="absolute animate-orb-float"
          style={{ right: "5%", bottom: "5%", width: "55vw", height: "55vh", animationDelay: "3s",
            background: "radial-gradient(ellipse, hsl(188 97% 44% / 0.07) 0%, transparent 65%)",
            filter: "blur(60px)" }} />
        {/* Violet left */}
        <div className="absolute"
          style={{ left: "-10%", top: "30%", width: "50vw", height: "60vh",
            background: "radial-gradient(ellipse, hsl(255 82% 62% / 0.05) 0%, transparent 65%)",
            filter: "blur(70px)" }} />
        {/* Subtle dot grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle, hsl(214 100% 50% / 0.05) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }} />
      </div>

      {/* ── Vertical light beams ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 h-[60vh] w-px opacity-60"
          style={{ left: "50%", background: "linear-gradient(to bottom, transparent, hsl(214 100% 50% / 0.20), transparent)" }} />
        <div className="absolute top-0 h-[40vh] w-px opacity-40"
          style={{ left: "56%", background: "linear-gradient(to bottom, transparent, hsl(188 97% 44% / 0.15), transparent)" }} />
      </div>

      {/* ── 3D Canvas ── */}
      {!isMobile && (
        <motion.div style={{ y: yCanvas }}
          className="absolute right-0 top-0 bottom-0 w-[62%] pointer-events-none z-[1]">
          <Suspense fallback={null}>
            <HeroCanvas />
          </Suspense>
        </motion.div>
      )}

      {/* Mobile glow fallback */}
      {isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-72 h-72 animate-orb-float"
            style={{ background: "radial-gradient(circle, hsl(214 100% 50% / 0.12) 0%, transparent 70%)", filter: "blur(40px)" }} />
        </div>
      )}

      {/* ── Floating metric chips — desktop ── */}
      {!isMobile && (
        <div className="absolute right-[3%] bottom-[16%] z-[3] hidden xl:flex flex-col gap-3">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 2.2 + i * 0.18, ease: "easeOut" }}
              className="glass-ultra rounded-2xl px-5 py-3.5 flex items-center gap-4"
              style={{ boxShadow: `0 4px 24px ${m.accent.replace(")", "/0.10)")}` }}
            >
              <span className="text-2xl font-black leading-none" style={{ color: m.accent }}>{m.value}</span>
              <span className="text-xs font-medium leading-tight max-w-[80px]" style={{ color: "hsl(var(--muted-foreground))" }}>{m.label}</span>
            </motion.div>
          ))}
        </div>
      )}

      {/* ── Service pills — floating behind hero ── */}
      {!isMobile && (
        <div className="absolute top-[24%] right-[26%] z-[2] hidden lg:flex flex-col gap-2.5">
          {servicePills.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl"
                style={{
                  background: "hsl(220 30% 100% / 0.82)",
                  border: `1px solid ${p.color.replace(")", "/0.18)")}`,
                  backdropFilter: "blur(20px)",
                  boxShadow: `0 2px 16px ${p.color.replace(")", "/0.10)")}`,
                  animation: `float ${6 + i * 0.8}s ease-in-out infinite`,
                  animationDelay: `${i * 1.2}s`,
                }}
              >
                <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: p.color }} />
                <span className="text-[11px] font-bold" style={{ color: "hsl(var(--foreground))" }}>{p.label}</span>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* ── Main content ── */}
      <motion.div style={{ y: yContent, opacity }} className="container relative z-10 py-28 lg:py-44">
        <div className="max-w-[680px] xl:max-w-[740px]">
          <motion.div variants={stagger} initial="hidden" animate="visible">

            {/* Eyebrow */}
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2.5 mb-9 pl-1.5 pr-5 py-1.5 rounded-full"
                style={{
                  background: "hsl(214 100% 50% / 0.07)",
                  border: "1px solid hsl(214 100% 50% / 0.18)",
                }}>
                <span className="w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: "hsl(214 100% 50% / 0.15)" }}>
                  <Zap className="w-3 h-3" style={{ color: "hsl(var(--primary))" }} />
                </span>
                <span className="text-[11px] font-bold tracking-[0.16em] uppercase" style={{ color: "hsl(var(--primary))" }}>
                  Growth-Focused Digital Agency
                </span>
              </div>
            </motion.div>

            {/* Headline — cinematic */}
            <motion.h1
              variants={fadeUp}
              className="font-black leading-[1.0] tracking-[-0.035em] mb-8"
              style={{ fontSize: "clamp(3.4rem,8.8vw,106px)", color: "hsl(var(--foreground))" }}
            >
              Turn Clicks<br className="hidden sm:block" />
              Into{" "}
              <span className="relative inline-block" style={{
                background: "linear-gradient(130deg, hsl(var(--primary)) 0%, hsl(var(--cyan)) 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                filter: "drop-shadow(0 0 40px hsl(214 100% 50% / 0.22))",
              }}>
                Clients.
              </span>
              <br />
              <span style={{ color: "hsl(var(--foreground))" }}>Browsers Into </span>
              <span style={{
                background: "linear-gradient(130deg, hsl(var(--primary)) 0%, hsl(var(--violet)) 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Buyers.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="text-xl sm:text-2xl leading-relaxed mb-12 max-w-[540px] font-light"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              We deliver performance marketing, social media management, stunning websites, graphic design & video editing —{" "}
              <span style={{ color: "hsl(var(--foreground))", fontWeight: 600 }}>built to grow your revenue.</span>
            </motion.p>

            {/* CTA row */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-14">
              <Button asChild size="lg"
                className="relative font-bold px-9 text-base group overflow-hidden rounded-2xl h-14"
                style={{
                  background: "linear-gradient(135deg, #1DA851, #25D366)",
                  color: "white",
                  boxShadow: "0 6px 36px hsl(142 70% 45% / 0.40), 0 2px 8px hsl(142 70% 45% / 0.2), inset 0 1px 0 hsl(142 70% 60% / 0.2)",
                }}>
                <a href={`https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent("Hi Nexon Growth! I'm interested in your services and would like to get a free strategy consultation.")}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </a>
              </Button>

              <Button asChild variant="outline" size="lg"
                className="font-semibold text-base transition-all duration-300 group rounded-2xl h-14"
                style={{
                  borderColor: "hsl(var(--border))",
                  background: "hsl(220 30% 100% / 0.9)",
                  backdropFilter: "blur(16px)",
                  color: "hsl(var(--foreground))",
                  boxShadow: "0 2px 16px hsl(220 30% 10% / 0.07), inset 0 1px 0 hsl(0 0% 100%)",
                }}>
                <Link to="/contact">
                  Get a Proposal
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            {/* Trust line */}
            <motion.div variants={fadeUp}>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
                {["Strategy-first", "You own all assets", "No retainer traps", "Direct communication"].map((t, i) => (
                  <span key={t} className="flex items-center gap-2">
                    {i > 0 && <span className="w-px h-3.5 rounded-full" style={{ background: "hsl(var(--border))" }} />}
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "hsl(var(--primary)/0.55)" }} />
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
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ color: "hsl(var(--muted-foreground)/0.45)" }}
      >
        <span className="text-[9px] font-bold tracking-[0.22em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-[4]"
        style={{ background: "linear-gradient(to top, hsl(var(--background)), transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 divider-glow pointer-events-none z-[4]" />
    </section>
  );
}
