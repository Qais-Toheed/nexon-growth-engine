import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Layers, Users } from "lucide-react";
import { CTABanner } from "@/components/sections/CTABanner";

const About = () => {
  return (
    <main className="pt-20">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="container relative z-10 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">About Nexon Growth</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
              We exist to close the gap between{" "}
              <span className="text-gradient">ambition and execution</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Most businesses know what they want to achieve digitally. The problem isn't the vision — it's the execution. That's where we come in.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-surface/40">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">Our Story</p>
            <h2 className="text-3xl font-black mb-6">Built from a frustration with how agencies work</h2>
            <div className="flex flex-col gap-5 text-muted-foreground leading-relaxed">
              <p>Nexon Growth was built because of a simple observation: most digital agencies are optimized for their own billing, not their clients' outcomes. Projects drag on. Communication is filtered through account managers. And at the end, clients often don't fully own what was built for them.</p>
              <p>We built Nexon Growth to operate differently — as a strategic execution partner that moves fast, communicates directly, and measures success by the same thing our clients do: business results.</p>
              <p>We combine strategy, design, development, and performance marketing into one integrated service model. Every service we offer is connected to the same goal: building digital systems that generate real business growth.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">What makes us <span className="text-gradient">different</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Target, title: "Outcome-obsessed", desc: "We measure everything against one question: is this moving your business forward? Impressions and aesthetics matter only insofar as they drive results." },
              { icon: Layers, title: "Integrated execution", desc: "Strategy, design, development, and marketing — we do all of it. No briefing multiple vendors. No coordination overhead. One partner, full accountability." },
              { icon: Users, title: "Built on transparency", desc: "You work directly with the team. You own all assets from day one. You get honest assessments, not comfortable answers designed to extend an engagement." },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-6 rounded-2xl bg-surface border border-border">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner headline="Ready to work with a partner who cares about your outcomes?" subheadline="Book a free strategy call — we'll give you an honest assessment of what would actually move the needle for your business." />
    </main>
  );
};

export default About;
