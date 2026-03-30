const items = [
  { text: "Performance Marketing",       accent: "primary" },
  { text: "Social Media Handling",       accent: "none" },
  { text: "Website Development",         accent: "cyan" },
  { text: "Graphic Designing",           accent: "none" },
  { text: "Video Editing",               accent: "primary" },
  { text: "Meta Ads",                    accent: "none" },
  { text: "Google Ads",                  accent: "cyan" },
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
      className="relative py-4 overflow-hidden"
      style={{
        borderTop:    "1px solid hsl(var(--border))",
        borderBottom: "1px solid hsl(var(--border))",
        background:   "hsl(220 28% 98%)",
      }}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, hsl(220 28% 98%), transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, hsl(220 28% 98%), transparent)" }} />

      <div className="marquee-track">
        {repeated.map((item, i) => (
          <div key={i} className="flex items-center gap-6 px-6 flex-shrink-0">
            <span
              className="text-[13px] font-semibold whitespace-nowrap tracking-wide"
              style={{ color: textColors[item.accent] }}
            >
              {item.text}
            </span>
            <span
              className="w-1 h-1 rounded-full flex-shrink-0"
              style={{
                background: dotColors[item.accent],
                boxShadow: item.accent !== "none" ? `0 0 5px ${dotColors[item.accent]}` : "none",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
