import { motion } from "framer-motion";
import { CTABanner } from "@/components/sections/CTABanner";
import { Target, Layers, Users, Zap, Award, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const values = [
  { icon: Target, title: "Outcome-obsessed", accent: "primary",
    desc: "We measure everything against one question: is this moving your business forward? Impressions and aesthetics matter only insofar as they drive results." },
  { icon: Layers, title: "Integrated execution", accent: "cyan",
    desc: "Strategy, design, development, and marketing — we do all of it. No briefing multiple vendors. One partner, full accountability." },
  { icon: Users, title: "Built on transparency", accent: "violet",
    desc: "You work directly with the team. You own all assets from day one. Honest assessments, not comfortable answers." },
  { icon: Zap, title: "Speed without compromise", accent: "primary",
    desc: "We deliver fast because we've built systems that let us. Speed isn't about rushing — it's about having the right process." },
  { icon: Award, title: "Quality as standard", accent: "cyan",
    desc: "We build things we'd want to use ourselves. Every project is treated like a flagship — no shortcuts, no cookie-cutter templates." },
  { icon: Shield, title: "Long-term partnership", accent: "violet",
    desc: "The best client relationships are long ones. We structure engagements to earn continued trust through results, not contracts." },
];

const accentColors: Record<string, string> = {
  primary: "hsl(var(--primary))",
  cyan:    "hsl(var(--cyan))",
  violet:  "hsl(var(--violet))",
};

const stats = [
  { value: "120+", label: "Projects delivered", accent: "primary" },
  { value: "3×",   label: "Average revenue lift", accent: "cyan" },
  { value: "48h",  label: "Strategy turnaround", accent: "violet" },
  { value: "100%", label: "Asset ownership", accent: "primary" },
];

const About = () => {
  return (
    <main className="pt-20">
      {/* ── Hero ── */}
      <section className="relative py-28 overflow-hidden"
        style={{ background: "linear-gradient(160deg, hsl(220 35% 100%) 0%, hsl(218 40% 98%) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-[700px] h-[600px]"
            style={{ background: "radial-gradient(ellipse, hsl(214 100% 50% / 0.08) 0%, transparent 65%)", filter: "blur(60px)" }} />
          <div className="absolute left-0 bottom-0 w-[500px] h-[400px]"
            style={{ background: "radial-gradient(ellipse, hsl(255 82% 62% / 0.05) 0%, transparent 65%)", filter: "blur(60px)" }} />
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle, hsl(214 100% 50% / 0.045) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }} />
        </div>
        <div className="container relative z-10 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--cyan)))" }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--primary))" }}>About Nexon Growth</span>
            </div>
            <h1 className="font-black leading-[1.02] tracking-tight mb-8"
              style={{ fontSize: "clamp(2.8rem,7vw,90px)", color: "hsl(var(--foreground))" }}>
              We exist to close the gap<br />between{" "}
              <span style={{
                background: "linear-gradient(130deg, hsl(var(--primary)), hsl(var(--cyan)))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>ambition and execution</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Most businesses know what they want to achieve digitally. The problem isn't the vision — it's the execution. That's where we come in.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 divider-glow" />
      </section>

      {/* ── Stats bar ── */}
      <section className="py-16 border-b" style={{ borderColor: "hsl(var(--border))", background: "hsl(220 20% 100%)" }}>
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center lg:text-left"
              >
                <div className="text-4xl lg:text-5xl font-black mb-1" style={{ color: accentColors[stat.accent] }}>
                  {stat.value}
                </div>
                <p className="text-sm font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story — visual split layout ── */}
      <section className="py-24" style={{ background: "hsl(var(--background))" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Visual panel */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Main card */}
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative"
                style={{
                  background: "linear-gradient(135deg, hsl(214 100% 50% / 0.07), hsl(188 97% 44% / 0.05), hsl(255 82% 62% / 0.06))",
                  border: "1px solid hsl(var(--border))",
                  boxShadow: "0 24px 80px hsl(214 100% 50% / 0.10)",
                }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  {/* Brand mark */}
                  <motion.div
                    animate={{ boxShadow: ["0 8px 40px hsl(214 100% 50% / 0.25)", "0 12px 60px hsl(214 100% 50% / 0.42)", "0 8px 40px hsl(214 100% 50% / 0.25)"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-24 h-24 rounded-3xl flex items-center justify-center mb-6"
                    style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--cyan)/0.85))" }}>
                    <span className="text-5xl font-black text-white">N</span>
                  </motion.div>
                  <p className="text-2xl font-black mb-1" style={{ color: "hsl(var(--foreground))" }}>Nexon Growth</p>
                  <p className="text-sm font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>Growth-Focused Digital Agency</p>

                  {/* Orbiting rings */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full pointer-events-none"
                    style={{ border: "1px dashed hsl(var(--primary)/0.20)", animation: "spin-slow 22s linear infinite" }} />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none"
                    style={{ border: "1px dashed hsl(var(--violet)/0.12)", animation: "spin-slow 38s linear infinite reverse" }} />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
                    style={{ border: "1px solid hsl(var(--cyan)/0.07)", animation: "spin-slow 55s linear infinite" }} />
                </div>
              </div>

              {/* Floating stat chips */}
              {[
                { value: "3×", label: "Revenue lift", color: "hsl(var(--primary))", pos: { top: "14%", right: "-15%" } },
                { value: "48h", label: "Fast delivery", color: "hsl(var(--cyan))", pos: { bottom: "28%", right: "-18%" } },
              ].map((chip, i) => (
                <motion.div key={chip.value}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.2 }}
                  className="absolute glass-ultra rounded-2xl px-5 py-3 flex items-center gap-3"
                  style={{ ...chip.pos, boxShadow: `0 4px 24px ${chip.color.replace(")", "/0.12)")}` }}>
                  <span className="text-2xl font-black" style={{ color: chip.color }}>{chip.value}</span>
                  <span className="text-[11px] font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>{chip.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-7">
                <div className="h-px w-10" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--cyan)))" }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--primary))" }}>Our Story</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight">
                Built from a frustration with{" "}
                <span style={{
                  background: "linear-gradient(130deg, hsl(var(--primary)), hsl(var(--violet)))",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>how agencies work</span>
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
                <p>Nexon Growth was built because of a simple observation: most digital agencies are optimized for their own billing, not their clients' outcomes. Projects drag on. Communication is filtered through account managers. Clients often don't fully own what was built for them.</p>
                <p>We built Nexon Growth to operate differently — as a strategic execution partner that moves fast, communicates directly, and measures success by the same thing our clients do: business results.</p>
                <p>We combine strategy, design, development, and performance marketing into one integrated service model. Every service we offer is connected to the same goal: building digital systems that generate real business growth.</p>
              </div>
              <Link to="/contact"
                className="inline-flex items-center gap-2 font-bold text-sm group"
                style={{ color: "hsl(var(--primary))" }}>
                Start a conversation
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values visual grid ── */}
      <section className="py-24" style={{ background: "hsl(220 30% 98%)" }}>
        <div className="absolute top-0 left-0 right-0 divider-glow" />
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--cyan)))" }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--primary))" }}>What Makes Us Different</span>
              <div className="h-px w-10" style={{ background: "linear-gradient(to left, hsl(var(--primary)), hsl(var(--cyan)))" }} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black">
              Built different.{" "}
              <span style={{
                background: "linear-gradient(130deg, hsl(var(--primary)), hsl(var(--cyan)))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>Run differently.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              const accent = accentColors[v.accent];
              return (
                <motion.div key={v.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group relative rounded-2xl overflow-hidden transition-all duration-400"
                  style={{ background: "hsl(220 20% 100%)", border: "1px solid hsl(var(--border))", padding: "28px" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = accent.replace(")", "/0.30)"); el.style.boxShadow = `0 16px 56px ${accent.replace(")", "/0.10)")}`; el.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "hsl(var(--border))"; el.style.boxShadow = ""; el.style.transform = ""; }}
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-t-2xl"
                    style={{ background: `linear-gradient(to right, ${accent}, transparent)` }} />

                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: accent.replace(")", "/0.10)"), border: `1.5px solid ${accent.replace(")", "/0.22)")}` }}>
                    <Icon className="w-5 h-5" style={{ color: accent }} />
                  </div>
                  <h3 className="text-base font-bold mb-2.5" style={{ color: "hsl(var(--foreground))" }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner headline="Ready to work with a partner who cares about your outcomes?" subheadline="Book a free strategy call — we'll give you an honest assessment of what would actually move the needle." />
    </main>
  );
};

export default About;
