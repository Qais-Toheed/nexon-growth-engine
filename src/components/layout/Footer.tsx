import { Link } from "react-router-dom";
import { Mail, MessageCircle, ArrowUpRight, Twitter, Linkedin, Instagram } from "lucide-react";

const footerServices = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "App Development", href: "/services/app-development" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Shopify Ecommerce", href: "/services/shopify-ecommerce" },
  { label: "AI Automation", href: "/services/ai-automation" },
];

const footerNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "hsl(var(--surface))" }}>

      {/* Top glow separator */}
      <div className="divider-glow" />

      {/* Background depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] orb-blue opacity-5" />
      </div>

      <div className="container relative z-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-6 group">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-glow-blue-soft group-hover:shadow-glow-blue transition-all duration-300"
                style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--cyan) / 0.8))" }}>
                <span className="text-sm font-black" style={{ color: "hsl(var(--background))" }}>N</span>
              </div>
              <span className="font-black text-lg tracking-tight">
                Nexon<span className="text-gradient"> Growth</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-7">
              A growth-focused digital agency building websites, apps, marketing systems, and AI automations that help ambitious businesses scale.
            </p>

            {/* Contact links */}
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-200 group-hover:border-[#25D366]/40"
                  style={{ background: "hsl(var(--surface-elevated))", borderColor: "hsl(var(--border))" }}>
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                </div>
                WhatsApp
              </a>
              <a href="mailto:hello@nexongrowth.com"
                className="inline-flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-200 group-hover:border-primary/40"
                  style={{ background: "hsl(var(--surface-elevated))", borderColor: "hsl(var(--border))" }}>
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                hello@nexongrowth.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "hsl(var(--foreground))" }}>Services</h4>
            <ul className="flex flex-col gap-2.5">
              {footerServices.map((s) => (
                <li key={s.href}>
                  <Link to={s.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group">
                    {s.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "hsl(var(--foreground))" }}>Company</h4>
            <ul className="flex flex-col gap-2.5">
              {footerNav.map((n) => (
                <li key={n.href}>
                  <Link to={n.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "hsl(var(--foreground))" }}>Get In Touch</h4>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Ready to build something that grows? Start with a free strategy call — no obligation.
            </p>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors group"
            >
              Book a Free Strategy Call
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Social placeholder */}
            <div className="mt-7 flex items-center gap-2">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg flex items-center justify-center border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200"
                  style={{ background: "hsl(var(--surface-elevated))", borderColor: "hsl(var(--border))" }}>
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid hsl(var(--border))" }}>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nexon Growth. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
