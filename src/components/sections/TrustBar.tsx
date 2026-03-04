const items = [
  { text: "Web Development", accent: true },
  { text: "Mobile Apps", accent: false },
  { text: "Meta Ads", accent: false },
  { text: "Google Ads", accent: false },
  { text: "Shopify Ecommerce", accent: true },
  { text: "AI Automation", accent: false },
  { text: "CRM Integration", accent: false },
  { text: "Outcome-Focused", accent: true },
  { text: "You Own All Assets", accent: false },
  { text: "Strategy Before Execution", accent: false },
  { text: "No Retainer Traps", accent: true },
  { text: "Direct Communication", accent: false },
  { text: "Full-Stack Execution", accent: false },
  { text: "Systems-First Approach", accent: true },
];

const repeated = [...items, ...items];

export function TrustBar() {
  return (
    <div className="relative py-5 border-y overflow-hidden" style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--surface))" }}>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, hsl(var(--surface)), transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, hsl(var(--surface)), transparent)" }} />

      <div className="marquee-track">
        {repeated.map((item, i) => (
          <div key={i} className="flex items-center gap-4 px-4 flex-shrink-0">
            <span
              className={`text-sm font-semibold whitespace-nowrap tracking-wide ${
                item.accent
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.text}
            </span>
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "hsl(var(--primary) / 0.3)" }} />
          </div>
        ))}
      </div>
    </div>
  );
}
