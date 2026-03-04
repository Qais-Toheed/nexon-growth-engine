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
    <section className="section-padding relative overflow-hidden">
      <div className="divider-glow absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] orb-blue opacity-6" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest mb-4">
              <span className="w-6 h-px bg-gradient-to-r from-primary to-cyan" />
              FAQ
              <span className="w-6 h-px bg-gradient-to-l from-primary to-cyan" />
            </span>
            <h2 className="text-4xl sm:text-5xl font-black mb-4 leading-tight">
              Questions worth{" "}
              <span className="text-gradient">answering honestly</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
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
                  className="rounded-xl overflow-hidden data-[state=open]:border-primary/25 transition-all duration-300"
                  style={{ border: "1px solid hsl(var(--border))", background: "hsl(var(--surface))" }}
                >
                  <AccordionTrigger className="text-left font-semibold text-sm py-5 px-5 hover:no-underline hover:text-foreground text-foreground/90 [&[data-state=open]]:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5 px-5">
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
