import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { homepageFaqs } from "@/data/faqs";

export function FAQAccordion({ faqs = homepageFaqs }: { faqs?: typeof homepageFaqs }) {
  return (
    <section className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(220 30% 97%) 100%)" }}>
      <div className="divider-glow absolute top-0 left-0 right-0" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] orb-blue opacity-[0.05] pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] mb-5"
              style={{ color: "hsl(var(--primary))" }}>
              <span className="w-6 h-px" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--cyan)))" }} />
              FAQ
              <span className="w-6 h-px" style={{ background: "linear-gradient(to left, hsl(var(--primary)), hsl(var(--cyan)))" }} />
            </span>
            <h2 className="text-4xl sm:text-5xl font-black mb-4 leading-tight"
              style={{ color: "hsl(var(--foreground))" }}>
              Questions worth{" "}
              <span className="text-gradient">answering honestly</span>
            </h2>
            <p className="leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
              If you're considering working with us, these are the questions we'd want answered too.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Accordion type="single" collapsible className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-xl overflow-hidden transition-all duration-300 card-white"
                  style={{ border: "1px solid hsl(var(--border))" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "hsl(var(--primary)/0.2)")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "hsl(var(--border))")}
                >
                  <AccordionTrigger
                    className="text-left font-semibold text-sm py-5 px-5 hover:no-underline transition-colors"
                    style={{ color: "hsl(var(--foreground))" }}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed pb-5 px-5"
                    style={{ color: "hsl(var(--muted-foreground))" }}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
