import { motion } from "framer-motion";
import { LeadForm } from "@/components/sections/LeadForm";
import { Mail, MessageCircle, Calendar, ArrowRight, CheckCircle, Clock, Zap, Shield } from "lucide-react";

const whatHappensNext = [
  { step: "01", icon: Clock, title: "We review your submission", desc: "Within 1 business day — a real person reads your brief.", accent: "hsl(var(--primary))" },
  { step: "02", icon: Calendar, title: "Discovery call scheduled", desc: "30-min call to understand your goals, timeline, and scope.", accent: "hsl(var(--cyan))" },
  { step: "03", icon: CheckCircle, title: "Proposal delivered", desc: "Scoped proposal with clear deliverables, timeline, and pricing.", accent: "hsl(var(--violet))" },
];

const Contact = () => {
  return (
    <main className="pt-20">
      <section className="relative min-h-screen overflow-hidden"
        style={{ background: "linear-gradient(160deg, hsl(220 35% 100%) 0%, hsl(218 40% 98%) 100%)" }}>
        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-[700px] h-[600px]"
            style={{ background: "radial-gradient(ellipse, hsl(214 100% 50% / 0.09) 0%, transparent 65%)", filter: "blur(60px)" }} />
          <div className="absolute left-0 bottom-0 w-[500px] h-[500px]"
            style={{ background: "radial-gradient(ellipse, hsl(255 82% 62% / 0.06) 0%, transparent 65%)", filter: "blur(70px)" }} />
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle, hsl(214 100% 50% / 0.04) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }} />
          {/* Animated orb blob */}
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] animate-orb-float pointer-events-none"
            style={{ background: "radial-gradient(ellipse, hsl(188 97% 44% / 0.06) 0%, transparent 65%)", filter: "blur(50px)" }} />
        </div>

        <div className="container relative z-10 py-20">

          {/* Page header */}
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="mb-16 max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--cyan)))" }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--primary))" }}>Get In Touch</span>
            </div>
            <h1 className="font-black leading-[1.02] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.4rem,5.5vw,72px)", color: "hsl(var(--foreground))" }}>
              Let's build something{" "}
              <span style={{
                background: "linear-gradient(130deg, hsl(var(--primary)), hsl(var(--cyan)))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>that grows</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tell us about your project. We'll come back within one business day with honest recommendations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Left: Form (3 cols) */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="rounded-3xl p-8 lg:p-10"
                style={{ background: "hsl(220 20% 100%)", border: "1px solid hsl(var(--border))", boxShadow: "0 4px 40px hsl(220 30% 10% / 0.06)" }}>
                <LeadForm />
              </motion.div>
            </div>

            {/* Right: Visual panel (2 cols) */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="lg:sticky lg:top-28 flex flex-col gap-4">

                {/* Contact channels with visual cards */}
                <div className="rounded-2xl overflow-hidden" style={{ background: "hsl(220 20% 100%)", border: "1px solid hsl(var(--border))", boxShadow: "0 2px 20px hsl(220 30% 10% / 0.05)" }}>
                  {/* Card header with gradient */}
                  <div className="relative h-24 overflow-hidden flex items-center px-6"
                    style={{ background: "linear-gradient(135deg, hsl(214 100% 50% / 0.07), hsl(188 97% 44% / 0.04), hsl(255 82% 62% / 0.04))" }}>
                    <div className="absolute inset-0" style={{
                      backgroundImage: "radial-gradient(circle, hsl(214 100% 50% / 0.08) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }} />
                    <div className="relative z-10">
                      <h3 className="font-bold text-sm" style={{ color: "hsl(var(--foreground))" }}>Reach us directly</h3>
                      <p className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>Three ways to start a conversation</p>
                    </div>
                    {/* Decorative orbs */}
                    <div className="absolute right-4 top-4 w-8 h-8 rounded-full opacity-30 animate-orb-float"
                      style={{ background: "hsl(var(--primary))" }} />
                    <div className="absolute right-12 bottom-4 w-5 h-5 rounded-full opacity-20 animate-orb-float"
                      style={{ background: "hsl(var(--cyan))", animationDelay: "2s" }} />
                  </div>

                  {/* Contact options */}
                  <div className="p-4 space-y-2.5">
                    {[
                      {
                        href: "https://calendly.com", label: "Book a Strategy Call",
                        sub: "Free 30-min call — no obligation",
                        icon: Calendar, color: "hsl(var(--primary))",
                      },
                      {
                        href: "https://wa.me/1234567890", label: "Chat on WhatsApp",
                        sub: "Typically replies within minutes",
                        icon: MessageCircle, color: "hsl(142 70% 45%)",
                      },
                      {
                        href: "mailto:hello@nexongrowth.com", label: "Email Us",
                        sub: "hello@nexongrowth.com",
                        icon: Mail, color: "hsl(var(--primary))",
                      },
                    ].map(item => {
                      const Icon = item.icon;
                      return (
                        <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                          className="flex gap-4 p-4 rounded-xl transition-all duration-300 group"
                          style={{ background: "hsl(var(--surface))", border: "1px solid hsl(var(--border))" }}
                          onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = item.color.replace(")", "/0.35)"); el.style.boxShadow = `0 4px 20px ${item.color.replace(")", "/0.12)")}`; }}
                          onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "hsl(var(--border))"; el.style.boxShadow = ""; }}>
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ background: item.color.replace(")", "/0.10)"), border: `1px solid ${item.color.replace(")", "/0.20)")}` }}>
                            <Icon className="w-5 h-5" style={{ color: item.color }} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm mb-0.5" style={{ color: "hsl(var(--foreground))" }}>{item.label}</p>
                            <p className="text-xs text-muted-foreground">{item.sub}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 flex-shrink-0 self-center transition-transform group-hover:translate-x-0.5" style={{ color: item.color }} />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* What happens next — stepper */}
                <div className="rounded-2xl p-6"
                  style={{ background: "linear-gradient(135deg, hsl(var(--primary)/0.06), hsl(var(--cyan)/0.03))", border: "1px solid hsl(var(--primary)/0.18)" }}>
                  <h3 className="font-bold text-sm mb-6" style={{ color: "hsl(var(--foreground))" }}>What happens next?</h3>
                  <div className="space-y-5">
                    {whatHappensNext.map(({ step, icon: Icon, title, desc, accent }) => (
                      <div key={step} className="flex gap-4 items-start">
                        <div className="flex flex-col items-center gap-1 flex-shrink-0">
                          <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                            style={{ background: accent.replace(")", "/0.12)"), border: `1px solid ${accent.replace(")", "/0.25)")}` }}>
                            <Icon className="w-4 h-4" style={{ color: accent }} />
                          </div>
                          {step !== "03" && <div className="w-px h-5 rounded-full" style={{ background: `linear-gradient(to bottom, ${accent}, transparent)`, opacity: 0.3 }} />}
                        </div>
                        <div className="pt-1">
                          <div className="text-[9px] font-black uppercase tracking-widest mb-0.5" style={{ color: accent }}>Step {step}</div>
                          <p className="text-xs font-bold mb-0.5" style={{ color: "hsl(var(--foreground))" }}>{title}</p>
                          <p className="text-[11px] leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust indicators */}
                <div className="rounded-2xl p-5" style={{ background: "hsl(220 20% 100%)", border: "1px solid hsl(var(--border))" }}>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Zap,    label: "Fast response", sub: "Within 24h" },
                      { icon: Shield, label: "No obligation", sub: "Free consultation" },
                      { icon: Clock,  label: "Clear scope", sub: "Before any work" },
                      { icon: CheckCircle, label: "Direct access", sub: "No account managers" },
                    ].map(item => {
                      const Icon = item.icon;
                      return (
                        <div key={item.label} className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ background: "hsl(var(--primary)/0.08)", border: "1px solid hsl(var(--primary)/0.15)" }}>
                            <Icon className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs font-bold" style={{ color: "hsl(var(--foreground))" }}>{item.label}</p>
                            <p className="text-[10px]" style={{ color: "hsl(var(--muted-foreground))" }}>{item.sub}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
