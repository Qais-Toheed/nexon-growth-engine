const items = [
  { text: "Web Development",            accent: "primary" },
  { text: "Mobile Apps",                accent: "none" },
  { text: "Meta Ads",                   accent: "none" },
  { text: "Google Ads",                 accent: "cyan" },
  { text: "Shopify Ecommerce",          accent: "none" },
  { text: "AI Automation",              accent: "primary" },
  { text: "CRM Integration",            accent: "none" },
  { text: "Outcome-Focused",            accent: "violet" },
  { text: "You Own All Assets",         accent: "none" },
  { text: "Strategy Before Execution",  accent: "cyan" },
  { text: "No Retainer Traps",          accent: "primary" },
  { text: "Direct Communication",       accent: "none" },
  { text: "Full-Stack Execution",       accent: "violet" },
  { text: "Systems-First Approach",     accent: "none" },
];

const dotColors: Record<string, string> = {
  primary: "hsl(var(--primary))",
  cyan:    "hsl(var(--cyan))",
  violet:  "hsl(var(--violet))",
  none:    "hsl(var(--border))",
};

const textColors: Record<string, string> = {
  primary: "hsl(var(--primary))",
  cyan:    "hsl(var(--cyan))",
  violet:  "hsl(var(--violet))",
  none:    "hsl(var(--muted-foreground))",
};

const repeated = [...items, ...items];

export function TrustBar() {
  return (
    <div
      className="relative py-5 overflow-hidden"
      style={{
        borderTop:    "1px solid hsl(var(--border))",
        borderBottom: "1px solid hsl(var(--border))",
        background:   "hsl(var(--surface))",
      }}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, hsl(var(--surface)), transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, hsl(var(--surface)), transparent)" }} />

      <div className="marquee-track">
        {repeated.map((item, i) => (
          <div key={i} className="flex items-center gap-5 px-5 flex-shrink-0">
            <span
              className="text-sm font-semibold whitespace-nowrap tracking-wide"
              style={{ color: textColors[item.accent] }}
            >
              {item.text}
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{
                background: dotColors[item.accent],
                boxShadow: item.accent !== "none" ? `0 0 6px ${dotColors[item.accent]}` : "none",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
