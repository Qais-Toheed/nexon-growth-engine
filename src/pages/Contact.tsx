import { motion } from "framer-motion";
import { LeadForm } from "@/components/sections/LeadForm";
import { Mail, MessageCircle, Calendar, Phone, ArrowRight, CheckCircle, Clock } from "lucide-react";

const WHATSAPP_PRIMARY = "923094278123";

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
          {/* Vertical light beam */}
          <div className="absolute top-0 h-[45vh] w-px opacity-50"
            style={{ right: "35%", background: "linear-gradient(to bottom, transparent, hsl(214 100% 50% / 0.18), transparent)" }} />
        </div>

        <div className="container relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Left: Form (3 cols) */}
            <div className="lg:col-span-3">
              <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
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
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  Tell us about your project. We'll come back within one business day with honest recommendations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="rounded-3xl p-8 lg:p-10"
                style={{ background: "hsl(220 20% 100%)", border: "1px solid hsl(var(--border))", boxShadow: "0 4px 40px hsl(220 30% 10% / 0.06)" }}
              >
                <LeadForm />
              </motion.div>
            </div>

            {/* Right: Visual panel (2 cols) */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="lg:sticky lg:top-28 flex flex-col gap-4"
              >
                {/* Reach us */}
                <div className="rounded-2xl p-6" style={{ background: "hsl(220 20% 100%)", border: "1px solid hsl(var(--border))", boxShadow: "0 2px 20px hsl(220 30% 10% / 0.05)" }}>
                  <h3 className="font-bold mb-5 text-sm uppercase tracking-wider" style={{ color: "hsl(var(--muted-foreground))" }}>Reach us directly</h3>
                  <div className="space-y-3">
                    {/* WhatsApp - Primary */}
                    <a href={`https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent("Hi Nexon Growth! I'd like to discuss a project.")}`} target="_blank" rel="noopener noreferrer"
                      className="flex gap-4 p-4 rounded-xl transition-all duration-300 group"
                      style={{ background: "hsl(var(--surface))", border: "1px solid hsl(var(--border))" }}
                      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "hsl(142 70% 45% / 0.35)"; el.style.boxShadow = "0 4px 20px hsl(142 70% 45% / 0.10)"; }}
                      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "hsl(var(--border))"; el.style.boxShadow = ""; }}
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "hsl(142 70% 45% / 0.10)", border: "1px solid hsl(142 70% 45% / 0.22)" }}>
                        <MessageCircle className="w-5 h-5" style={{ color: "hsl(142 70% 45%)" }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm mb-0.5">Chat on WhatsApp</p>
                        <p className="text-xs text-muted-foreground">Fastest response — typically within minutes</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-0.5 transition-all flex-shrink-0 self-center" style={{ color: "hsl(142 70% 45%)" }} />
                    </a>

                    {/* Calendly */}
                    <a href="https://calendly.com" target="_blank" rel="noopener noreferrer"
                      className="flex gap-4 p-4 rounded-xl transition-all duration-300 group"
                      style={{ background: "hsl(var(--surface))", border: "1px solid hsl(var(--border))" }}
                      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "hsl(var(--primary)/0.35)"; el.style.boxShadow = "0 4px 20px hsl(214 100% 50% / 0.12)"; }}
                      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "hsl(var(--border))"; el.style.boxShadow = ""; }}
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "hsl(var(--primary)/0.10)", border: "1px solid hsl(var(--primary)/0.20)" }}>
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm mb-0.5">Book a Strategy Call</p>
                        <p className="text-xs text-muted-foreground">Free 30-min call — no obligation</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0 self-center" />
                    </a>

                    {/* Phone Numbers */}
                    <div className="flex gap-4 p-4 rounded-xl"
                      style={{ background: "hsl(var(--surface))", border: "1px solid hsl(var(--border))" }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "hsl(var(--primary)/0.10)", border: "1px solid hsl(var(--primary)/0.20)" }}>
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm mb-1">Call Us</p>
                        <a href="tel:+923094278123" className="text-xs text-muted-foreground hover:text-foreground transition-colors block">+92 309 4278123 (Primary)</a>
                        <a href="tel:+923036091877" className="text-xs text-muted-foreground hover:text-foreground transition-colors block">+92 303 6091877</a>
                      </div>
                    </div>

                    {/* Email */}
                    <a href="mailto:hello@nexongrowth.com"
                      className="flex gap-4 p-4 rounded-xl transition-all duration-300 group"
                      style={{ background: "hsl(var(--surface))", border: "1px solid hsl(var(--border))" }}
                      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "hsl(var(--primary)/0.35)"; el.style.boxShadow = "0 4px 20px hsl(214 100% 50% / 0.12)"; }}
                      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "hsl(var(--border))"; el.style.boxShadow = ""; }}
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "hsl(var(--primary)/0.10)", border: "1px solid hsl(var(--primary)/0.20)" }}>
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm mb-0.5">Email Us</p>
                        <p className="text-xs text-muted-foreground">hello@nexongrowth.com</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0 self-center" />
                    </a>
                  </div>
                </div>

                {/* What happens next */}
                <div className="rounded-2xl p-6"
                  style={{ background: "linear-gradient(135deg, hsl(var(--primary)/0.06), hsl(var(--cyan)/0.03))", border: "1px solid hsl(var(--primary)/0.18)" }}>
                  <h3 className="font-bold text-sm mb-5" style={{ color: "hsl(var(--foreground))" }}>What happens next?</h3>
                  <div className="space-y-4">
                    {[
                      { step: "01", text: "We review your submission within 1 business day", icon: Clock },
                      { step: "02", text: "We schedule a discovery call to understand your goals", icon: Calendar },
                      { step: "03", text: "We prepare a scoped proposal with clear deliverables and pricing", icon: CheckCircle },
                    ].map(({ step, text, icon: Icon }) => (
                      <div key={step} className="flex gap-3 items-start">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: "hsl(var(--primary)/0.12)", border: "1px solid hsl(var(--primary)/0.25)" }}>
                          <span className="text-[10px] font-black" style={{ color: "hsl(var(--primary))" }}>{step}</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust indicators */}
                <div className="rounded-2xl p-6" style={{ background: "hsl(220 20% 100%)", border: "1px solid hsl(var(--border))" }}>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: "⚡", label: "Fast response", sub: "Within 24h" },
                      { icon: "🔒", label: "No obligation", sub: "Free consultation" },
                      { icon: "📋", label: "Clear scope", sub: "Before any work" },
                      { icon: "🎯", label: "Direct access", sub: "No account managers" },
                    ].map(item => (
                      <div key={item.label} className="flex items-center gap-2.5">
                        <span className="text-xl">{item.icon}</span>
                        <div>
                          <p className="text-xs font-bold" style={{ color: "hsl(var(--foreground))" }}>{item.label}</p>
                          <p className="text-[10px]" style={{ color: "hsl(var(--muted-foreground))" }}>{item.sub}</p>
                        </div>
                      </div>
                    ))}
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
