import { motion } from "framer-motion";
import { LeadForm } from "@/components/sections/LeadForm";
import { Mail, MessageCircle, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <main className="pt-20">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl mb-16">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">Get In Touch</p>
            <h1 className="text-4xl sm:text-5xl font-black mb-5">
              Let's build something{" "}
              <span className="text-gradient">that grows</span>
            </h1>
            <p className="text-xl text-muted-foreground">Tell us about your project. We'll come back within one business day with honest recommendations.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="lg:col-span-2 p-8 rounded-2xl bg-surface border border-border">
              <LeadForm />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="flex flex-col gap-4">
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="flex gap-4 p-5 rounded-xl bg-surface border border-border hover:border-primary/40 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm mb-1">Book a Strategy Call</p>
                  <p className="text-xs text-muted-foreground">Free 30-min call — no obligation</p>
                </div>
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex gap-4 p-5 rounded-xl bg-surface border border-border hover:border-primary/40 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="font-bold text-sm mb-1">Chat on WhatsApp</p>
                  <p className="text-xs text-muted-foreground">Typically replies within minutes</p>
                </div>
              </a>
              <a href="mailto:hello@nexongrowth.com" className="flex gap-4 p-5 rounded-xl bg-surface border border-border hover:border-primary/40 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm mb-1">Email Us</p>
                  <p className="text-xs text-muted-foreground">hello@nexongrowth.com</p>
                </div>
              </a>

              <div className="p-5 rounded-xl bg-gradient-to-br from-primary/10 to-violet/5 border border-primary/20 mt-2">
                <h3 className="font-bold text-sm mb-2">What happens next?</h3>
                <ol className="flex flex-col gap-2">
                  {["We review your submission within 1 business day", "We schedule a discovery call to understand your goals", "We prepare a scoped proposal with clear deliverables and pricing"].map((step, i) => (
                    <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                      <span className="w-4 h-4 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0 text-primary font-bold text-[10px] mt-0.5">{i+1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
