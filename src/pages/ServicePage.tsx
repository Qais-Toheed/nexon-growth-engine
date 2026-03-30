import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronRight, Zap, ExternalLink, MessageCircle } from "lucide-react";
import { Globe, BarChart3, Share2, Palette, Video } from "lucide-react";
import { services } from "@/data/services";
import { LeadForm } from "@/components/sections/LeadForm";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTABanner } from "@/components/sections/CTABanner";

const WHATSAPP_PRIMARY = "923094278123";

const iconMap: Record<string, React.ElementType> = {
  Globe, BarChart3, Share2, Palette, Video,
};

const accentBySlug: Record<string, { primary: string; secondary: string; glow: string }> = {
  "performance-marketing": { primary: "hsl(var(--primary))", secondary: "hsl(var(--cyan))",   glow: "hsl(214 100% 50% / 0.12)" },
  "social-media-handling":  { primary: "hsl(var(--cyan))",    secondary: "hsl(var(--primary))", glow: "hsl(188 97% 44% / 0.12)" },
  "website-development":    { primary: "hsl(var(--violet))",  secondary: "hsl(var(--primary))", glow: "hsl(255 82% 62% / 0.10)" },
  "graphic-designing":      { primary: "hsl(var(--primary))", secondary: "hsl(var(--violet))",  glow: "hsl(214 100% 50% / 0.12)" },
  "video-editing":          { primary: "hsl(var(--cyan))",    secondary: "hsl(var(--violet))",  glow: "hsl(188 97% 44% / 0.10)" },
};

const hslAlpha = (color: string, alpha: number) => {
  const m = color.match(/^hsl\(var\((--[^)]+)\)\)$/);
  if (!m) return color;
  return `hsl(var(${m[1]}) / ${alpha})`;
};

// Visual preview mockup for service hero
function ServiceHeroVisual({
  service,
  accent,
}: {
  service: { slug: string; icon: string; name: string };
  accent: { primary: string; secondary: string };
}) {
  // Convert `hsl(var(--primary))` -> `hsl(var(--primary) / 0.22)` reliably.
  const withAlpha = (color: string, alpha: number) => {
    const m = color.match(/^hsl\(var\((--[^)]+)\)\)$/);
    if (!m) return color;
    return `hsl(var(${m[1]}) / ${alpha})`;
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main mockup card */}
      <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl"
        style={{
          background: "hsl(220 20% 100% / 0.96)",
          border: "1px solid hsl(var(--border))",
          boxShadow: `0 24px 80px ${withAlpha(accent.primary, 0.18)}`,
        }}>
        {/* Browser bar */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b"
          style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--surface))" }}>
          {["hsl(0 80% 65%)", "hsl(40 90% 58%)", "hsl(142 70% 45%)"].map((c, i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
          ))}
          <div className="flex-1 h-2 rounded-full mx-3" style={{ background: "hsl(var(--border))" }} />
          <ExternalLink className="w-3 h-3" style={{ color: "hsl(var(--muted-foreground))" }} />
        </div>
        {/* Hero strip */}
        <div className="h-20 flex items-center px-5 gap-4"
          style={{
            background: `linear-gradient(135deg, ${withAlpha(accent.primary, 0.08)}, ${withAlpha(accent.secondary, 0.04)})`,
          }}
        >
          <div className="w-10 h-10 rounded-xl flex-shrink-0" style={{ background: accent.primary, opacity: 0.85 }} />
          <div className="flex-1 space-y-1.5">
            <div className="h-2.5 w-3/5 rounded-full" style={{ background: accent.primary, opacity: 0.75 }} />
            <div className="h-1.5 w-2/5 rounded-full" style={{ background: "hsl(var(--border))" }} />
          </div>
        </div>
        {/* Content skeleton */}
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-3 gap-2">
            {[1,2,3].map(n => (
              <div key={n} className="h-14 rounded-xl" style={{ background: "hsl(var(--surface))", border: "1px solid hsl(var(--border))" }} />
            ))}
          </div>
          <div className="h-2 w-full rounded-full" style={{ background: "hsl(var(--border))" }} />
          <div className="h-2 w-3/4 rounded-full" style={{ background: "hsl(var(--border))" }} />
          <div className="h-9 w-2/5 rounded-xl" style={{ background: accent.primary, opacity: 0.2 }} />
        </div>
        {/* Footer metrics */}
        <div className="px-4 pb-4 flex gap-3">
          {["3×", "48h", "100%"].map((v, i) => (
            <div key={v} className="flex-1 rounded-lg p-2 text-center"
              style={{ background: "hsl(var(--surface))", border: "1px solid hsl(var(--border))" }}>
              <div className="text-sm font-black" style={{ color: accent.primary }}>{v}</div>
              <div className="h-1 w-3/4 rounded-full mx-auto mt-1" style={{ background: "hsl(var(--border))" }} />
            </div>
          ))}
        </div>
      </div>

      {/* Floating decorators */}
      <div className="absolute top-8 right-8 w-12 h-12 rounded-2xl opacity-20"
        style={{ background: accent.primary, animation: "float 6s ease-in-out infinite" }} />
      <div className="absolute bottom-12 left-8 w-8 h-8 rounded-full opacity-15"
        style={{ background: accent.secondary, animation: "float 8s ease-in-out infinite", animationDelay: "2s" }} />

      {/* Service-specific visuals */}
      {service.slug === "performance-marketing" && (
        <>
          <div
            className="absolute top-16 left-6 w-28 h-20 rounded-2xl opacity-90"
            style={{
              background: "hsl(220 20% 100% / 0.75)",
              border: `1px solid ${withAlpha(accent.primary, 0.22)}`,
              backdropFilter: "blur(6px)",
            }}
          >
            <div className="absolute inset-0" style={{ opacity: 0.9, backgroundImage: "radial-gradient(circle at 20% 20%, hsl(214 100% 50% / 0.10) 0%, transparent 55%)" }} />
            <div className="absolute bottom-3 left-4 right-4 flex items-end gap-1">
              {[16, 26, 12, 34, 22, 40].map((h, idx) => (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={idx}
                  className="w-[12%] rounded-full"
                  style={{
                    height: h,
                    background: `linear-gradient(180deg, ${accent.primary}, ${accent.secondary})`,
                    opacity: 0.55 + idx * 0.03,
                  }}
                />
              ))}
            </div>
          </div>
          <div className="absolute -top-2 -left-2 w-20 h-20 rounded-full opacity-20" style={{ border: `1px dashed ${withAlpha(accent.secondary, 0.28)}` }} />
        </>
      )}

      {service.slug === "social-media-handling" && (
        <>
          <div
            className="absolute top-12 right-2 w-32 h-24 rounded-2xl p-3 opacity-95"
            style={{
              background: "hsl(220 20% 100% / 0.78)",
              border: `1px solid ${withAlpha(accent.secondary, 0.22)}`,
              backdropFilter: "blur(6px)",
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: accent.primary, opacity: 0.9 }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: accent.secondary, opacity: 0.9 }} />
              <div className="flex-1 h-1.5 rounded-full" style={{ background: "hsl(var(--border))" }} />
            </div>
            <div className="mt-3 space-y-2">
              {[0, 1].map((row) => (
                <div key={row} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-2xl" style={{ background: `linear-gradient(135deg, ${accent.primary}, ${accent.secondary})`, opacity: 0.25 + row * 0.08 }} />
                  <div className="flex-1">
                    <div className="h-2 rounded-full" style={{ background: "hsl(var(--border))", opacity: 0.9 }} />
                    <div className="h-1.5 rounded-full mt-1" style={{ background: "hsl(var(--border))", opacity: 0.7 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-4 right-6 w-20 h-20 rounded-full opacity-20" style={{ background: `radial-gradient(circle, ${accent.primary} 0%, transparent 60%)` }} />
        </>
      )}

      {service.slug === "website-development" && (
        <>
          <div
            className="absolute top-14 left-4 w-32 h-24 rounded-2xl opacity-95"
            style={{
              background: "hsl(220 20% 100% / 0.78)",
              border: `1px solid ${withAlpha(accent.primary, 0.22)}`,
              backdropFilter: "blur(6px)",
              padding: 12,
            }}
          >
            <div className="h-2 w-3/5 rounded-full" style={{ background: accent.primary, opacity: 0.3 }} />
            <div className="mt-3 space-y-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex gap-2 items-center">
                  <div className="w-2 h-2 rounded-full" style={{ background: accent.secondary, opacity: 0.55 }} />
                  <div className="h-1.5 flex-1 rounded-full" style={{ background: "hsl(var(--border))", opacity: 0.9 }} />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -top-2 right-10 w-16 h-16 rounded-2xl opacity-20" style={{ border: `1px solid ${withAlpha(accent.secondary, 0.32)}` }} />
        </>
      )}

      {service.slug === "graphic-designing" && (
        <>
          <div
            className="absolute top-10 right-4 w-36 h-26 rounded-2xl p-4 opacity-95"
            style={{
              background: "hsl(220 20% 100% / 0.80)",
              border: `1px solid ${withAlpha(accent.secondary, 0.22)}`,
              backdropFilter: "blur(6px)",
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-2xl" style={{ background: `linear-gradient(135deg, ${accent.primary}, ${accent.secondary})`, opacity: 0.22 }} />
              <div className="flex-1">
                <div className="h-2 w-4/5 rounded-full" style={{ background: accent.secondary, opacity: 0.35 }} />
                <div className="h-1.5 w-2/3 rounded-full mt-2" style={{ background: "hsl(var(--border))", opacity: 0.9 }} />
              </div>
            </div>
            <div className="mt-3 flex gap-2 items-center">
              {[accent.primary, accent.secondary, "hsl(var(--violet))"].slice(0, 3).map((col, idx) => (
                <div key={idx} className="w-3 h-3 rounded-full" style={{ background: col, opacity: 0.9 }} />
              ))}
              <div className="flex-1 h-px" style={{ background: "hsl(var(--border))" }} />
            </div>
          </div>
          <div className="absolute bottom-2 left-2 w-24 h-24 rounded-full opacity-20" style={{ background: `radial-gradient(circle, ${accent.secondary} 0%, transparent 60%)` }} />
        </>
      )}

      {service.slug === "video-editing" && (
        <>
          <div
            className="absolute top-12 left-4 w-34 h-26 rounded-2xl opacity-95 p-3"
            style={{
              background: "hsl(220 20% 100% / 0.78)",
              border: `1px solid ${withAlpha(accent.primary, 0.22)}`,
              backdropFilter: "blur(6px)",
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{ background: i === 0 ? "hsl(0 80% 65%)" : i === 1 ? "hsl(40 90% 58%)" : accent.secondary, opacity: 0.85 }}
                  />
                ))}
              </div>
              <div className="w-10 h-2 rounded-full" style={{ background: "hsl(var(--border))" }} />
            </div>
            <div className="mt-3 space-y-2">
              <div
                className="relative h-10 rounded-xl"
                style={{
                  background: `linear-gradient(135deg, ${withAlpha(accent.primary, 0.18)}, ${withAlpha(accent.secondary, 0.10)})`,
                }}
              >
                <div className="absolute inset-0 rounded-xl" style={{ backgroundImage: "linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)", backgroundSize: "14px 100%", opacity: 0.35 }} />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${accent.primary}, ${accent.secondary})`, opacity: 0.25 }}>
                  <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-l-white/80 border-t-transparent border-b-transparent" />
                </div>
              </div>
              <div className="h-2 rounded-full" style={{ background: "hsl(var(--border))", opacity: 0.9 }} />
            </div>
          </div>
          <div className="absolute -bottom-4 right-2 w-20 h-20 rounded-2xl opacity-20" style={{ border: `1px dashed ${withAlpha(accent.secondary, 0.28)}` }} />
        </>
      )}
    </div>
  );
}

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = iconMap[service.icon] || Globe;
  const accent = accentBySlug[service.slug] ?? accentBySlug["website-development"];

  const whatsappMessage = encodeURIComponent(`Hi Nexon Growth! I'm interested in your ${service.name} service and would like to get a proposal.`);

  return (
    <main className="pt-20">
      {/* Hero — cinematic split */}
      <section className="relative overflow-hidden py-24 lg:py-32"
        style={{ background: "linear-gradient(160deg, hsl(220 35% 100%) 0%, hsl(218 40% 98%) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-[700px] h-[600px]"
            style={{ background: `radial-gradient(ellipse, ${accent.glow.replace("0.12)", "0.09)")}, transparent 65%)`, filter: "blur(60px)" }} />
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle, hsl(214 100% 50% / 0.04) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }} />
        </div>

        <div className="container relative z-10">
          {/* Breadcrumb */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/services" className="hover:text-foreground transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{service.name}</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: hslAlpha(accent.primary, 0.10), border: `1.5px solid ${hslAlpha(accent.primary, 0.22)}` }}>
                  <Icon className="w-6 h-6" style={{ color: accent.primary }} />
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-px w-6" style={{ background: `linear-gradient(to right, ${accent.primary}, ${accent.secondary})` }} />
                  <span className="text-sm font-bold" style={{ color: accent.primary }}>{service.name}</span>
                </div>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                className="font-black leading-[1.02] tracking-tight mb-6"
                style={{ fontSize: "clamp(2.2rem,5.5vw,68px)", color: "hsl(var(--foreground))" }}>
                {service.heroHeadline}
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-muted-foreground leading-relaxed mb-10">
                {service.heroPainPoint}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3">
                <a href={`https://wa.me/${WHATSAPP_PRIMARY}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm transition-all duration-300 group"
                  style={{
                    background: "linear-gradient(135deg, #1DA851, #25D366)",
                    color: "white",
                    boxShadow: "0 6px 28px hsl(142 70% 45% / 0.35)",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 40px hsl(142 70% 45% / 0.45)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px hsl(142 70% 45% / 0.35)"; }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
                <a href="#proposal"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border font-semibold text-sm transition-all duration-300 group"
                  style={{ borderColor: "hsl(var(--border))", color: "hsl(var(--foreground))", background: "hsl(220 20% 100%)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = hslAlpha(accent.primary, 0.35); }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--border))"; }}
                >
                  Get a Proposal
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </motion.div>
            </div>

            {/* Right visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[400px] hidden lg:block"
            >
              {/* Glow behind mockup */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{ background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${accent.glow.replace("0.12)", "0.08)")}, transparent 70%)`, filter: "blur(30px)" }} />
              <ServiceHeroVisual service={service} accent={accent} />
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 divider-glow" />
      </section>

      {/* Problem / Solution — visual split */}
      <section className="py-20" style={{ background: "hsl(220 30% 98%)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{ background: "hsl(220 20% 100%)", border: "1px solid hsl(0 80% 65% / 0.20)", boxShadow: "0 2px 20px hsl(0 80% 65% / 0.06)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ background: "linear-gradient(to right, hsl(0 80% 65% / 0.6), transparent)" }} />
              <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-5">The Problem</p>
              <p className="text-base leading-relaxed text-foreground/90">{service.problemStatement}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{ background: "hsl(220 20% 100%)", border: `1px solid ${hslAlpha(accent.primary, 0.22)}`, boxShadow: `0 2px 20px ${accent.glow}` }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ background: `linear-gradient(to right, ${accent.primary}, transparent)` }} />
              <p className="text-[10px] font-black uppercase tracking-widest mb-5" style={{ color: accent.primary }}>Our Solution</p>
              <p className="text-base leading-relaxed text-foreground/90">{service.solutionStatement}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included — visual card grid */}
      <section className="py-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10" style={{ background: `linear-gradient(to right, ${accent.primary}, ${accent.secondary})` }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: accent.primary }}>What's Included</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black max-w-xl">
              Everything you need,{" "}
              <span style={{
                background: `linear-gradient(130deg, ${accent.primary}, ${accent.secondary})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>nothing you don't</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.included.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group flex gap-4 p-6 rounded-2xl transition-all duration-400"
                style={{ background: "hsl(220 20% 100%)", border: "1px solid hsl(var(--border))" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = hslAlpha(accent.primary, 0.28); el.style.boxShadow = `0 8px 32px ${accent.glow}`; el.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "hsl(var(--border))"; el.style.boxShadow = ""; el.style.transform = ""; }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                  style={{ background: hslAlpha(accent.primary, 0.10), border: `1.5px solid ${hslAlpha(accent.primary, 0.22)}` }}>
                  <Check className="w-4 h-4" style={{ color: accent.primary }} />
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1.5">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process — horizontal visual steps */}
      <section className="py-20" style={{ background: "hsl(220 30% 98%)" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10" style={{ background: `linear-gradient(to right, ${accent.primary}, ${accent.secondary})` }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: accent.primary }}>How It Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black">
              A clear process with{" "}
              <span style={{
                background: `linear-gradient(130deg, ${accent.primary}, ${accent.secondary})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>no surprises</span>
            </h2>
          </motion.div>
          <div className="flex flex-col gap-4 max-w-2xl">
            {service.process.map((step, i) => (
              <motion.div key={step.step}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 p-6 rounded-2xl"
                style={{ background: "hsl(220 20% 100%)", border: "1px solid hsl(var(--border))" }}
              >
                <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black text-white"
                  style={{ background: `linear-gradient(135deg, ${accent.primary}, ${accent.secondary})` }}>
                  {String(step.step).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1.5">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries + Benefits */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ background: accent.primary }} />
                <p className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: accent.primary }}>Industries We Serve</p>
              </div>
              <h2 className="text-2xl font-black mb-6">We've worked across these sectors</h2>
              <div className="flex flex-wrap gap-2.5">
                {service.industries.map((ind) => (
                  <span key={ind} className="px-3 py-1.5 rounded-full text-sm text-muted-foreground font-medium"
                    style={{ background: "hsl(var(--surface))", border: "1px solid hsl(var(--border))" }}>
                    {ind}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8" style={{ background: accent.primary }} />
                <p className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: accent.primary }}>Key Benefits</p>
              </div>
              <h2 className="text-2xl font-black mb-6">What you gain from working with us</h2>
              <div className="flex flex-col gap-4">
                {service.benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: hslAlpha(accent.primary, 0.10), border: `1px solid ${hslAlpha(accent.primary, 0.22)}` }}>
                      <Check className="w-3 h-3" style={{ color: accent.primary }} />
                    </div>
                    <div>
                      <p className="text-sm font-bold mb-0.5">{benefit.title}</p>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion faqs={service.faqs} />

      {/* Form */}
      <section id="proposal" className="py-20" style={{ background: "hsl(220 30% 98%)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-black mb-4">
                <span style={{
                  background: `linear-gradient(130deg, ${accent.primary}, ${accent.secondary})`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>{service.ctaHeadline}</span>
              </h2>
              <p className="text-muted-foreground">Fill out the form below and we'll come back with a scoped proposal within one business day.</p>
            </motion.div>
            <div className="p-8 rounded-2xl" style={{ background: "hsl(220 20% 100%)", border: "1px solid hsl(var(--border))" }}>
              <LeadForm compact />
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
};

export default ServicePage;
