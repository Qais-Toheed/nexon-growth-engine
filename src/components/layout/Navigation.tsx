import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe, Smartphone, TrendingUp, ShoppingBag, Bot, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const serviceLinks = [
  { label: "Web Development", href: "/services/web-development", icon: Globe, desc: "Websites built to convert" },
  { label: "App Development", href: "/services/app-development", icon: Smartphone, desc: "Mobile apps that perform" },
  { label: "Digital Marketing", href: "/services/digital-marketing", icon: TrendingUp, desc: "Meta & Google campaigns" },
  { label: "Shopify Ecommerce", href: "/services/shopify-ecommerce", icon: ShoppingBag, desc: "Stores built to sell" },
  { label: "AI Automation", href: "/services/ai-automation", icon: Bot, desc: "Systems that scale for you" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
          scrolled
            ? "glass-bright border-b py-3 shadow-nav"
            : "bg-transparent py-5"
        )}
        style={scrolled ? { borderColor: "hsl(var(--glass-border-bright))" } : {}}
      >
        {/* Glow underline when scrolled */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.2), hsl(var(--cyan) / 0.15), transparent)" }} />
        )}

        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative w-9 h-9 rounded-xl flex items-center justify-center shadow-glow-blue-soft transition-all duration-300 group-hover:shadow-glow-blue"
              style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--cyan) / 0.8))" }}>
              <span className="text-sm font-black" style={{ color: "hsl(var(--background))" }}>N</span>
            </div>
            <span className="font-black text-lg tracking-tight">
              Nexon<span className="text-gradient"> Growth</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    to={link.href}
                    className={cn(
                      "flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200",
                      location.pathname.startsWith("/services")
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.label}
                    <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", servicesOpen && "rotate-180")} />
                  </Link>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72"
                      >
                        <div className="glass-bright rounded-2xl p-2 shadow-nav overflow-hidden"
                          style={{ border: "1px solid hsl(var(--glass-border-bright))" }}>
                          {/* Top glow */}
                          <div className="absolute top-0 left-0 right-0 h-px"
                            style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)" }} />

                          {serviceLinks.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.href}
                                to={item.href}
                                className={cn(
                                  "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group",
                                  location.pathname === item.href
                                    ? "bg-primary/10 text-primary"
                                    : "text-muted-foreground hover:text-foreground hover:bg-surface-elevated"
                                )}
                              >
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:bg-primary/10"
                                  style={{ background: "hsl(var(--surface-elevated))" }}>
                                  <Icon className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                  <p className="text-sm font-semibold leading-tight">{item.label}</p>
                                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                                </div>
                              </Link>
                            );
                          })}

                          <div className="mt-1 pt-1" style={{ borderTop: "1px solid hsl(var(--border))" }}>
                            <Link to="/services" className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-primary hover:bg-primary/8 transition-colors">
                              View all services
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={cn(
                    "px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200",
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground font-semibold text-sm"
            >
              <Link to="/contact">Get Proposal</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="relative font-bold shadow-button-glow overflow-hidden group text-sm px-4"
              style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
            >
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Book a Call
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-600" />
              </a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-colors"
            style={{ background: "hsl(var(--surface-elevated))", color: "hsl(var(--foreground))" }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0"
              style={{ background: "hsl(var(--background) / 0.85)", backdropFilter: "blur(8px)" }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 bottom-0 w-72 flex flex-col pt-20 pb-6 px-5"
              style={{ background: "hsl(var(--surface))", borderLeft: "1px solid hsl(var(--border))" }}
            >
              <nav className="flex flex-col gap-1 flex-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      to={link.href}
                      className={cn(
                        "block px-3 py-3 text-base font-semibold rounded-xl transition-all",
                        location.pathname === link.href || (link.href !== "/" && location.pathname.startsWith(link.href))
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-surface-elevated"
                      )}
                    >
                      {link.label}
                    </Link>
                    {link.hasDropdown && (
                      <div className="ml-3 mt-0.5 flex flex-col gap-0.5">
                        {serviceLinks.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="flex flex-col gap-2.5 mt-6">
                <Button asChild variant="outline" className="w-full font-semibold">
                  <Link to="/contact">Get Proposal</Link>
                </Button>
                <Button
                  asChild
                  className="w-full font-bold shadow-button-glow"
                  style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
                >
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                    Book a Free Call
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
