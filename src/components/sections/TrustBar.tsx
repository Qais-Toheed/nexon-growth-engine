const items = [
  "Web Development",
  "Mobile Apps",
  "Meta Ads",
  "Google Ads",
  "Shopify Ecommerce",
  "AI Automation",
  "CRM Integration",
  "Outcome-Focused",
  "You Own All Assets",
  "Strategy Before Execution",
  "No Retainer Traps",
  "Direct Communication",
  "Full-Stack Execution",
  "Systems-First Approach",
];

const repeated = [...items, ...items];

export function TrustBar() {
  return (
    <div className="relative py-6 bg-surface border-y border-border overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

      <div className="marquee-track">
        {repeated.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-4 flex-shrink-0"
          >
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
