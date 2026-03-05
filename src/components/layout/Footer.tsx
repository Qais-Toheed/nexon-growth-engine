import { Link } from "react-router-dom";
import { Mail, MessageCircle, ArrowUpRight, Twitter, Linkedin, Instagram } from "lucide-react";

const footerServices = [
  { label: "Web Development",   href: "/services/web-development" },
  { label: "App Development",   href: "/services/app-development" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Shopify Ecommerce", href: "/services/shopify-ecommerce" },
  { label: "AI Automation",     href: "/services/ai-automation" },
];

const footerNav = [
  { label: "Home",      href: "/" },
  { label: "Services",  href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About",     href: "/about" },
  { label: "Blog",      href: "/blog" },
  { label: "Contact",   href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, hsl(224 47% 9%) 0%, hsl(228 50% 12%) 100%)" }}>

      {/* Top glow */}
      <div className="divider-glow" />

      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] orb-blue opacity-[0.06] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[300px] orb-violet opacity-[0.05] pointer-events-none" />

      <div className="container relative z-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-6 group">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_hsl(214_100%_60%_/_0.3)]"
                style={{ background: "linear-gradient(135deg, hsl(214 100% 60%), hsl(188 97% 56% / 0.85))" }}>
                <span className="text-sm font-black text-white">N</span>
              </div>
              <span className="font-black text-lg tracking-tight text-white">
                Nexon<span className="text-gradient"> Growth</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-7" style={{ color: "hsl(218 22% 58%)" }}>
              A growth-focused digital agency building websites, apps, marketing systems, and AI automations that help ambitious businesses scale.
            </p>

            <div className="flex flex-col gap-3">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm transition-colors group"
                style={{ color: "hsl(218 22% 55%)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "hsl(210 55% 92%)")}
                onMouseLeave={e => (e.currentTarget.style.color = "hsl(218 22% 55%)")}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-200 group-hover:border-[#25D366]/40"
                  style={{ background: "hsl(228 40% 14%)", borderColor: "hsl(228 32% 18%)" }}>
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                </div>
                WhatsApp
              </a>
              <a href="mailto:hello@nexongrowth.com"
                className="inline-flex items-center gap-2.5 text-sm transition-colors group"
                style={{ color: "hsl(218 22% 55%)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "hsl(210 55% 92%)")}
                onMouseLeave={e => (e.currentTarget.style.color = "hsl(218 22% 55%)")}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-200 group-hover:border-primary/40"
                  style={{ background: "hsl(228 40% 14%)", borderColor: "hsl(228 32% 18%)" }}>
                  <Mail className="w-4 h-4" style={{ color: "hsl(214 100% 60%)" }} />
                </div>
                hello@nexongrowth.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5 text-white">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {footerServices.map((s) => (
                <li key={s.href}>
                  <Link to={s.href}
                    className="text-sm inline-flex items-center gap-1 group transition-colors"
                    style={{ color: "hsl(218 22% 55%)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "hsl(210 55% 90%)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "hsl(218 22% 55%)")}
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
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5 text-white">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {footerNav.map((n) => (
                <li key={n.href}>
                  <Link to={n.href}
                    className="text-sm transition-colors"
                    style={{ color: "hsl(218 22% 55%)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "hsl(210 55% 90%)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "hsl(218 22% 55%)")}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5 text-white">Get In Touch</h4>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "hsl(218 22% 55%)" }}>
              Ready to build something that grows? Start with a free strategy call — no obligation.
            </p>
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold transition-colors group"
              style={{ color: "hsl(214 100% 65%)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "hsl(214 100% 75%)")}
              onMouseLeave={e => (e.currentTarget.style.color = "hsl(214 100% 65%)")}
            >
              Book a Free Strategy Call
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <div className="mt-7 flex items-center gap-2">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-200"
                  style={{
                    background: "hsl(228 40% 14%)",
                    borderColor: "hsl(228 32% 18%)",
                    color: "hsl(218 22% 55%)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(214 100% 60% / 0.4)";
                    (e.currentTarget as HTMLElement).style.color = "hsl(210 55% 90%)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(228 32% 18%)";
                    (e.currentTarget as HTMLElement).style.color = "hsl(218 22% 55%)";
                  }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid hsl(228 32% 15%)" }}>
          <p className="text-xs" style={{ color: "hsl(218 22% 45%)" }}>
            © {new Date().getFullYear()} Nexon Growth. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="text-xs transition-colors"
              style={{ color: "hsl(218 22% 45%)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "hsl(210 55% 80%)")}
              onMouseLeave={e => (e.currentTarget.style.color = "hsl(218 22% 45%)")}
            >Privacy Policy</Link>
            <Link to="/terms" className="text-xs transition-colors"
              style={{ color: "hsl(218 22% 45%)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "hsl(210 55% 80%)")}
              onMouseLeave={e => (e.currentTarget.style.color = "hsl(218 22% 45%)")}
            >Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
