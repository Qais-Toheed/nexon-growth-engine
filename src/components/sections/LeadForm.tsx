import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Send, CheckCircle, Shield, Clock, Star } from "lucide-react";
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

const inputClass = cn(
  "h-12 rounded-xl text-sm font-medium",
  "focus:ring-1 focus:ring-offset-0 transition-all duration-200"
);

const selectStyle = {
  width: "100%",
  height: "48px",
  padding: "0 12px",
  borderRadius: "12px",
  fontSize: "14px",
  fontWeight: "500",
  outline: "none",
  appearance: "none" as const,
  transition: "border-color 0.2s, box-shadow 0.2s",
};

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (_: FormData) => {
    await new Promise(r => setTimeout(r, 1000));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center mb-6"
          style={{ background: "hsl(var(--primary) / 0.12)", border: "1px solid hsl(var(--primary) / 0.3)", boxShadow: "0 0 40px hsl(var(--primary) / 0.18)" }}>
          <CheckCircle className="w-9 h-9 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-3">Proposal request received</h3>
        <p className="text-muted-foreground max-w-sm leading-relaxed">
          We'll review your details and get back to you within one business day with honest recommendations.
        </p>
      </motion.div>
    );
  }

  const fieldStyle = (name: string) => ({
    background: "hsl(220 30% 100%)",
    border: `1px solid ${focused === name ? "hsl(var(--primary) / 0.45)" : "hsl(var(--border))"}`,
    color: "hsl(var(--foreground))",
    boxShadow: focused === name ? "0 0 0 3px hsl(var(--primary) / 0.06)" : "0 1px 4px hsl(220 30% 10% / 0.04)",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className={cn("grid gap-4", compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2")}>
        {[
          { id: "name", label: "Full Name", placeholder: "Your full name", type: "text" },
          { id: "business", label: "Business Name", placeholder: "Your company name", type: "text" },
          { id: "email", label: "Email Address", placeholder: "you@company.com", type: "email" },
          { id: "phone", label: "Phone", placeholder: "+1 234 567 8900", type: "tel", optional: true },
        ].map(({ id, label, placeholder, type, optional }) => (
          <div key={id} className="flex flex-col gap-1.5">
            <Label htmlFor={id} className="text-sm font-semibold">
              {label} {optional && <span className="text-muted-foreground font-normal">(optional)</span>}
            </Label>
            <Input
              id={id}
              type={type}
              {...register(id as keyof FormData)}
              placeholder={placeholder}
              className={inputClass}
              style={fieldStyle(id)}
              onFocus={() => setFocused(id)}
              onBlur={() => setFocused(null)}
            />
            {errors[id as keyof FormData] && (
              <span className="text-xs text-destructive">{errors[id as keyof FormData]?.message}</span>
            )}
          </div>
        ))}
      </div>

      <div className={cn("grid gap-4", compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-3")}>
        {[
          {
            id: "service", label: "Service Needed",
            options: [
              { value: "", label: "Select a service" },
              { value: "web-development", label: "Web Development" },
              { value: "app-development", label: "App Development" },
              { value: "digital-marketing", label: "Digital Marketing" },
              { value: "shopify-ecommerce", label: "Shopify Ecommerce" },
              { value: "ai-automation", label: "AI Automation" },
              { value: "not-sure", label: "Not sure yet" },
            ],
          },
          {
            id: "budget", label: "Budget Range",
            options: [
              { value: "", label: "Select budget" },
              { value: "under-5k", label: "Under $5,000" },
              { value: "5k-10k", label: "$5,000 – $10,000" },
              { value: "10k-25k", label: "$10,000 – $25,000" },
              { value: "25k-50k", label: "$25,000 – $50,000" },
              { value: "50k-plus", label: "$50,000+" },
            ],
          },
          {
            id: "timeline", label: "Project Timeline",
            options: [
              { value: "", label: "Select timeline" },
              { value: "asap", label: "As soon as possible" },
              { value: "1-month", label: "Within 1 month" },
              { value: "1-3-months", label: "1–3 months" },
              { value: "3-6-months", label: "3–6 months" },
              { value: "flexible", label: "Flexible" },
            ],
          },
        ].map(({ id, label, options }) => (
          <div key={id} className="flex flex-col gap-1.5">
            <Label htmlFor={id} className="text-sm font-semibold">{label}</Label>
            <select
              id={id}
              {...register(id as keyof FormData)}
              style={{ ...selectStyle, ...fieldStyle(id) }}
              onFocus={() => setFocused(id)}
              onBlur={() => setFocused(null)}>
              {options.map(o => <option key={o.value} value={o.value} style={{ background: "hsl(220 30% 100%)" }}>{o.label}</option>)}
            </select>
            {errors[id as keyof FormData] && (
              <span className="text-xs text-destructive">{errors[id as keyof FormData]?.message}</span>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message" className="text-sm font-semibold">Tell Us About Your Project</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Describe your project, goals, and what you're looking to achieve. The more context, the better our proposal."
          rows={5}
          className="rounded-xl resize-none text-sm font-medium transition-all duration-200"
          style={fieldStyle("message")}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
        />
        {errors.message && <span className="text-xs text-destructive">{errors.message.message}</span>}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="relative self-start px-8 h-12 text-base font-bold overflow-hidden group rounded-xl"
        style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))", boxShadow: "0 4px 24px hsl(var(--primary) / 0.35)" }}>
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
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      </Button>
    </form>
  );
}

const trustSignals = [
  { icon: Shield, label: "No obligation", sub: "Free consultation" },
  { icon: Clock,  label: "24h response", sub: "Fast turnaround" },
  { icon: Star,   label: "5.0 rated",    sub: "40+ client reviews" },
];

export function LeadFormSection() {
  return (
    <section id="proposal" className="relative overflow-hidden"
      style={{ background: "hsl(220 25% 96%)", paddingTop: "clamp(80px,10vw,140px)", paddingBottom: "clamp(80px,10vw,140px)" }}>
      <div className="divider-glow absolute top-0 left-0 right-0" />
      {/* Animated gradient blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[400px] pointer-events-none animate-orb-float"
        style={{ background: "radial-gradient(ellipse, hsl(214 100% 50% / 0.08) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[350px] pointer-events-none animate-orb-float"
        style={{ background: "radial-gradient(ellipse, hsl(255 82% 62% / 0.06) 0%, transparent 70%)", filter: "blur(60px)", animationDelay: "3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(188 97% 44% / 0.04) 0%, transparent 65%)", filter: "blur(80px)" }} />

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] mb-5"
              style={{ color: "hsl(var(--primary))" }}>
              <span className="w-6 h-px" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--cyan)))" }} />
              Get Started
              <span className="w-6 h-px" style={{ background: "linear-gradient(to left, hsl(var(--primary)), hsl(var(--cyan)))" }} />
            </span>
            <h2 className="font-black leading-tight mb-5" style={{ fontSize: "clamp(2.4rem,6vw,68px)", color: "hsl(var(--foreground))" }}>
              Get your free{" "}
              <span style={{
                background: "linear-gradient(130deg, hsl(var(--primary)), hsl(var(--cyan)))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>project proposal</span>
            </h2>
            <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
              Tell us about your project. We'll review it and come back with a scoped proposal and honest recommendations — no obligation.
            </p>
          </motion.div>

          {/* Trust signals row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-10">
            {trustSignals.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl"
                style={{ background: "hsl(220 20% 100%)", border: "1px solid hsl(var(--border))", boxShadow: "0 1px 8px hsl(220 30% 10% / 0.04)" }}>
                <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <span className="text-xs font-bold block leading-none" style={{ color: "hsl(var(--foreground))" }}>{label}</span>
                  <span className="text-[10px]" style={{ color: "hsl(var(--muted-foreground))" }}>{sub}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Glass form card on gradient bg */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative rounded-3xl overflow-hidden"
            style={{ boxShadow: "0 24px 80px hsl(220 30% 10% / 0.10), 0 2px 12px hsl(220 30% 10% / 0.04)" }}>
            {/* Gradient background layer */}
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, hsl(214 100% 50% / 0.04), hsl(188 97% 44% / 0.02), hsl(255 82% 62% / 0.03))" }} />
            {/* White glass card */}
            <div className="relative z-10 p-8 md:p-12 rounded-3xl"
              style={{ background: "hsl(220 20% 100% / 0.92)", border: "1px solid hsl(214 100% 50% / 0.12)", backdropFilter: "blur(20px)" }}>
              <LeadForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
