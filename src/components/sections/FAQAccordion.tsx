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
    <section className="section-padding bg-surface/30">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Questions worth{" "}
              <span className="text-gradient">answering honestly</span>
            </h2>
            <p className="text-muted-foreground">
              If you're considering working with us, these are the questions we'd want answered too.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Accordion type="single" collapsible className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-border rounded-xl bg-surface px-5 overflow-hidden data-[state=open]:border-primary/20"
                >
                  <AccordionTrigger className="text-left font-semibold text-sm py-5 hover:no-underline hover:text-foreground text-foreground/90">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
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
