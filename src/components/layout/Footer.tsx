import { Link } from "react-router-dom";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";

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
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-cyan flex items-center justify-center">
                <span className="text-xs font-black text-background">N</span>
              </div>
              <span className="font-bold text-lg tracking-tight">
                Nexon<span className="text-gradient"> Growth</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              A growth-focused digital agency building websites, apps, marketing systems, and AI automations that help ambitious businesses scale.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-border flex items-center justify-center group-hover:border-primary/40 transition-colors">
                  <MessageCircle className="w-4 h-4 text-green-400" />
                </div>
                WhatsApp
              </a>
              <a
                href="mailto:hello@nexongrowth.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-border flex items-center justify-center group-hover:border-primary/40 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                Email
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-5 uppercase tracking-wider">Services</h4>
            <ul className="flex flex-col gap-3">
              {footerServices.map((s) => (
                <li key={s.href}>
                  <Link
                    to={s.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {s.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-5 uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-3">
              {footerNav.map((n) => (
                <li key={n.href}>
                  <Link
                    to={n.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-5 uppercase tracking-wider">Get In Touch</h4>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Ready to build something that grows? Start with a free strategy call — no obligation.
            </p>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Book a Free Strategy Call
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="mt-5 pt-5 border-t border-border">
              <p className="text-xs text-muted-foreground">hello@nexongrowth.com</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nexon Growth. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
