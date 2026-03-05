import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      colors: {
        border:         "hsl(var(--border))",
        "border-subtle":"hsl(var(--border-subtle))",
        input:          "hsl(var(--input))",
        ring:           "hsl(var(--ring))",
        background:     "hsl(var(--background))",
        foreground:     "hsl(var(--foreground))",
        surface: {
          DEFAULT:  "hsl(var(--surface))",
          elevated: "hsl(var(--surface-elevated))",
        },
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow:       "hsl(var(--primary-glow))",
          dim:        "hsl(var(--primary-dim))",
        },
        cyan: {
          DEFAULT: "hsl(var(--cyan))",
          dim:     "hsl(var(--cyan-dim))",
        },
        violet: {
          DEFAULT: "hsl(var(--violet))",
          dim:     "hsl(var(--violet-dim))",
        },
        amber: "hsl(var(--amber))",
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT:    "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT:    "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT:              "hsl(var(--sidebar-background))",
          foreground:           "hsl(var(--sidebar-foreground))",
          primary:              "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent:               "hsl(var(--sidebar-accent))",
          "accent-foreground":  "hsl(var(--sidebar-accent-foreground))",
          border:               "hsl(var(--sidebar-border))",
          ring:                 "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%":   { opacity: "0", transform: "scale(0.93)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.4" },
        },
        "orb-float": {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "35%":      { transform: "translateY(-22px) scale(1.04)" },
          "68%":      { transform: "translateY(12px) scale(0.97)" },
        },
        "spin-slow": {
          "0%":   { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 24px hsl(214 100% 60% / 0.22)" },
          "50%":      { boxShadow: "0 0 60px hsl(214 100% 60% / 0.55), 0 0 110px hsl(214 100% 60% / 0.22)" },
        },
        "line-draw": {
          "0%":   { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        "slide-reveal": {
          "0%":   { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        marquee:          "marquee 36s linear infinite",
        "fade-up":        "fade-up 0.7s ease-out forwards",
        "fade-in":        "fade-in 0.5s ease-out forwards",
        "scale-in":       "scale-in 0.4s ease-out forwards",
        pulse:            "pulse 2.5s cubic-bezier(0.4,0,0.6,1) infinite",
        "orb-float":      "orb-float 8s ease-in-out infinite",
        "spin-slow":      "spin-slow 24s linear infinite",
        float:            "float 6s ease-in-out infinite",
        shimmer:          "shimmer 3s ease-in-out infinite",
        "glow-pulse":     "glow-pulse 3s ease-in-out infinite",
        "slide-reveal":   "slide-reveal 0.5s ease-out forwards",
      },
      backgroundImage: {
        "gradient-radial":    "radial-gradient(var(--tw-gradient-stops))",
        /* Hero — rich layered glow fields */
        "hero-glow":          "radial-gradient(ellipse 100% 75% at 62% 42%, hsl(214 100% 60% / 0.16) 0%, transparent 65%)",
        "hero-glow-violet":   "radial-gradient(ellipse 65% 55% at 88% 52%, hsl(255 92% 68% / 0.10) 0%, transparent 65%)",
        "hero-glow-cyan":     "radial-gradient(ellipse 55% 45% at 12% 58%, hsl(188 97% 56% / 0.07) 0%, transparent 58%)",
        "cta-gradient":       "linear-gradient(135deg, hsl(230 52% 5%) 0%, hsl(228 46% 8%) 50%, hsl(230 50% 6%) 100%)",
        "card-gradient":      "linear-gradient(145deg, hsl(228 46% 7%) 0%, hsl(228 42% 9%) 100%)",
        "section-fade-top":   "linear-gradient(to bottom, hsl(230 52% 4%), transparent)",
        "section-fade-bottom":"linear-gradient(to top, hsl(230 52% 4%), transparent)",
      },
      boxShadow: {
        "glow-blue":        "0 0 50px hsl(214 100% 60% / 0.22)",
        "glow-blue-strong": "0 0 100px hsl(214 100% 60% / 0.38)",
        "glow-blue-soft":   "0 0 24px hsl(214 100% 60% / 0.12)",
        "glow-cyan":        "0 0 50px hsl(188 97% 56% / 0.18)",
        "glow-cyan-strong": "0 0 80px hsl(188 97% 56% / 0.30)",
        "glow-violet":      "0 0 70px hsl(255 92% 68% / 0.18)",
        "card":             "0 4px 36px hsl(230 52% 2% / 0.65), 0 1px 0 hsl(210 55% 97% / 0.04) inset",
        "card-hover":       "0 20px 65px hsl(214 100% 60% / 0.14), 0 8px 24px hsl(230 52% 2% / 0.55)",
        "nav":              "0 1px 50px hsl(230 52% 2% / 0.7)",
        "button-glow":      "0 0 35px hsl(214 100% 60% / 0.45), 0 4px 18px hsl(230 52% 2% / 0.55)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
