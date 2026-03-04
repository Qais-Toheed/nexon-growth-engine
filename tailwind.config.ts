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
        border: "hsl(var(--border))",
        "border-subtle": "hsl(var(--border-subtle))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: {
          DEFAULT: "hsl(var(--surface))",
          elevated: "hsl(var(--surface-elevated))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
          dim: "hsl(var(--primary-dim))",
        },
        cyan: {
          DEFAULT: "hsl(var(--cyan))",
          dim: "hsl(var(--cyan-dim))",
        },
        violet: {
          DEFAULT: "hsl(var(--violet))",
          dim: "hsl(var(--violet-dim))",
        },
        amber: "hsl(var(--amber))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
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
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.94)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        "orb-float": {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "33%": { transform: "translateY(-20px) scale(1.05)" },
          "66%": { transform: "translateY(10px) scale(0.97)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(217 100% 62% / 0.2)" },
          "50%": { boxShadow: "0 0 50px hsl(217 100% 62% / 0.5), 0 0 100px hsl(217 100% 62% / 0.2)" },
        },
        "line-draw": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 32s linear infinite",
        "fade-up": "fade-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        pulse: "pulse 2.5s cubic-bezier(0.4,0,0.6,1) infinite",
        "orb-float": "orb-float 8s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(ellipse 90% 70% at 60% 40%, hsl(217 100% 62% / 0.13) 0%, transparent 70%)",
        "hero-glow-violet": "radial-gradient(ellipse 60% 55% at 85% 55%, hsl(258 95% 68% / 0.09) 0%, transparent 70%)",
        "hero-glow-cyan": "radial-gradient(ellipse 50% 40% at 15% 60%, hsl(191 97% 55% / 0.06) 0%, transparent 60%)",
        "cta-gradient": "linear-gradient(135deg, hsl(228 47% 5%) 0%, hsl(228 40% 8%) 50%, hsl(228 45% 6%) 100%)",
        "card-gradient": "linear-gradient(145deg, hsl(228 40% 8%) 0%, hsl(228 36% 10%) 100%)",
        "section-fade-top": "linear-gradient(to bottom, hsl(228 47% 4%), transparent)",
        "section-fade-bottom": "linear-gradient(to top, hsl(228 47% 4%), transparent)",
      },
      boxShadow: {
        "glow-blue": "0 0 40px hsl(217 100% 62% / 0.18)",
        "glow-blue-strong": "0 0 80px hsl(217 100% 62% / 0.30)",
        "glow-blue-soft": "0 0 20px hsl(217 100% 62% / 0.10)",
        "glow-cyan": "0 0 40px hsl(191 97% 55% / 0.15)",
        "glow-violet": "0 0 60px hsl(258 95% 68% / 0.15)",
        "card": "0 4px 32px hsl(228 47% 2% / 0.6), 0 1px 0 hsl(214 60% 97% / 0.04) inset",
        "card-hover": "0 20px 60px hsl(217 100% 62% / 0.12), 0 8px 20px hsl(228 47% 2% / 0.5)",
        "nav": "0 1px 40px hsl(228 47% 2% / 0.6)",
        "button-glow": "0 0 30px hsl(217 100% 62% / 0.4), 0 4px 15px hsl(228 47% 2% / 0.5)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
