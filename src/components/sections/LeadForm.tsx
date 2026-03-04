import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Send, CheckCircle } from "lucide-react";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  business: z.string().min(2, "Business name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  message: z.string().min(10, "Tell us a bit more"),
});

type FormData = z.infer<typeof schema>;

const selectClass = cn(
  "w-full h-11 px-3 rounded-xl border border-input bg-surface text-foreground text-sm",
  "focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent",
  "transition-colors appearance-none"
);

const inputClass = cn(
  "h-11 rounded-xl border-input bg-surface text-foreground placeholder:text-muted-foreground/60",
  "focus:ring-ring focus:border-transparent focus:ring-2",
);

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise(r => setTimeout(r, 1000));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-3">Proposal request received</h3>
        <p className="text-muted-foreground max-w-sm">
          We'll review your details and get back to you within one business day with honest recommendations.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className={cn("grid gap-4", compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2")}>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Your full name"
            className={inputClass}
          />
          {errors.name && <span className="text-xs text-destructive">{errors.name.message}</span>}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="business" className="text-sm font-medium">Business Name</Label>
          <Input
            id="business"
            {...register("business")}
            placeholder="Your company name"
            className={inputClass}
          />
          {errors.business && <span className="text-xs text-destructive">{errors.business.message}</span>}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="you@company.com"
            className={inputClass}
          />
          {errors.email && <span className="text-xs text-destructive">{errors.email.message}</span>}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="phone" className="text-sm font-medium">Phone <span className="text-muted-foreground/50">(optional)</span></Label>
          <Input
            id="phone"
            {...register("phone")}
            placeholder="+1 234 567 8900"
            className={inputClass}
          />
        </div>
      </div>

      <div className={cn("grid gap-4", compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-3")}>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="service" className="text-sm font-medium">Service Needed</Label>
          <select id="service" {...register("service")} className={selectClass}>
            <option value="">Select a service</option>
            <option value="web-development">Web Development</option>
            <option value="app-development">App Development</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="shopify-ecommerce">Shopify Ecommerce</option>
            <option value="ai-automation">AI Automation</option>
            <option value="not-sure">Not sure yet</option>
          </select>
          {errors.service && <span className="text-xs text-destructive">{errors.service.message}</span>}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="budget" className="text-sm font-medium">Budget Range</Label>
          <select id="budget" {...register("budget")} className={selectClass}>
            <option value="">Select budget</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-10k">$5,000 – $10,000</option>
            <option value="10k-25k">$10,000 – $25,000</option>
            <option value="25k-50k">$25,000 – $50,000</option>
            <option value="50k-plus">$50,000+</option>
          </select>
          {errors.budget && <span className="text-xs text-destructive">{errors.budget.message}</span>}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="timeline" className="text-sm font-medium">Project Timeline</Label>
          <select id="timeline" {...register("timeline")} className={selectClass}>
            <option value="">Select timeline</option>
            <option value="asap">As soon as possible</option>
            <option value="1-month">Within 1 month</option>
            <option value="1-3-months">1–3 months</option>
            <option value="3-6-months">3–6 months</option>
            <option value="flexible">Flexible</option>
          </select>
          {errors.timeline && <span className="text-xs text-destructive">{errors.timeline.message}</span>}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message" className="text-sm font-medium">Tell Us About Your Project</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Describe your project, goals, and what you're looking to achieve. The more context, the better our proposal."
          rows={5}
          className="rounded-xl border-input bg-surface text-foreground placeholder:text-muted-foreground/60 focus:ring-ring focus:border-transparent focus:ring-2 resize-none"
        />
        {errors.message && <span className="text-xs text-destructive">{errors.message.message}</span>}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 text-base shadow-glow-blue self-start px-8"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" />
            Sending...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send className="w-4 h-4" />
            Get My Free Proposal
          </span>
        )}
      </Button>
    </form>
  );
}

export function LeadFormSection() {
  return (
    <section id="proposal" className="section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Get Started</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-5">
              Get your free{" "}
              <span className="text-gradient">project proposal</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Tell us about your project. We'll review it, ask the right questions, and come back with a scoped proposal and honest recommendations — no obligation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 md:p-10 rounded-2xl bg-surface border border-border"
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
