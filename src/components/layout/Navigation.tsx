import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "App Development", href: "/services/app-development" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "Shopify Ecommerce", href: "/services/shopify-ecommerce" },
      { label: "AI Automation", href: "/services/ai-automation" },
    ],
  },
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
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "glass border-b border-border/50 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-cyan flex items-center justify-center">
              <span className="text-xs font-black text-background">N</span>
            </div>
            <span className="font-bold text-lg tracking-tight text-foreground">
              Nexon<span className="text-gradient"> Growth</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    to={link.href}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      location.pathname.startsWith("/services")
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </Link>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 pt-2 w-56"
                      >
                        <div className="glass border border-border rounded-xl p-2 shadow-card">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className={cn(
                                "block px-3 py-2 text-sm rounded-lg transition-colors",
                                location.pathname === item.href
                                  ? "text-primary bg-primary/10"
                                  : "text-muted-foreground hover:text-foreground hover:bg-surface-elevated"
                              )}
                            >
                              {item.label}
                            </Link>
                          ))}
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
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors",
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

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40"
            >
              <Link to="/contact">Get Proposal</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-glow-blue"
            >
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Book a Call
              </a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-72 glass border-l border-border flex flex-col pt-20 pb-6 px-6">
              <nav className="flex flex-col gap-1 flex-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      to={link.href}
                      className={cn(
                        "block px-3 py-3 text-base font-medium rounded-lg transition-colors",
                        location.pathname === link.href || (link.href !== "/" && location.pathname.startsWith(link.href))
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-surface-elevated"
                      )}
                    >
                      {link.label}
                    </Link>
                    {link.dropdown && (
                      <div className="ml-3 mt-1 flex flex-col gap-0.5">
                        {link.dropdown.map((sub) => (
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
              <div className="flex flex-col gap-3 mt-6">
                <Button asChild variant="outline" className="w-full border-border/60">
                  <Link to="/contact">Get Proposal</Link>
                </Button>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                    Book a Free Call
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
