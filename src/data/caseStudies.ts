export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  categoryTag: "Web" | "Ecommerce" | "Marketing" | "AI" | "App";
  client: string;
  challenge: string;
  solution: string;
  outcome: string;
  tags: string[];
  gradient: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "saas-redesign",
    title: "SaaS Platform Website Redesign",
    category: "Web Development",
    categoryTag: "Web",
    client: "B2B SaaS Product",
    challenge: "A fast-growing SaaS company had a website that couldn't communicate their product's value clearly. Visitors were landing on the homepage and leaving without exploring pricing or booking a demo.",
    solution: "Full website redesign with a new messaging architecture — leading with outcomes rather than features. Rebuilt the homepage, pricing page, and demo flow with conversion-focused copy and layout.",
    outcome: "Clearer product positioning, reduced bounce rate, and a significantly shorter path from homepage to demo booking — validated through user testing before and after launch.",
    tags: ["React", "Conversion Design", "Technical SEO"],
    gradient: "from-primary/20 to-cyan/10",
  },
  {
    id: "shopify-brand-store",
    title: "Premium Shopify Brand Store Build",
    category: "Shopify Ecommerce",
    categoryTag: "Ecommerce",
    client: "Lifestyle Apparel Brand",
    challenge: "A premium fashion brand was operating on a basic Shopify theme that didn't reflect their brand identity. Mobile experience was poor and product pages weren't converting.",
    solution: "Custom Shopify theme build with brand-led design, optimized product page layout, mobile-first checkout flow, and Klaviyo abandoned cart and post-purchase email sequences.",
    outcome: "A store that now matches the brand's premium positioning — with improved mobile UX, a streamlined checkout experience, and an automated email system working in the background.",
    tags: ["Shopify", "Custom Theme", "Klaviyo", "CRO"],
    gradient: "from-violet/20 to-primary/10",
  },
  {
    id: "lead-gen-campaign",
    title: "Lead Generation Ad Campaign",
    category: "Digital Marketing",
    categoryTag: "Marketing",
    client: "Professional Services Firm",
    challenge: "A professional services firm was running Meta ads that generated clicks but very few qualified inquiries. Cost per lead was high and lead quality was inconsistent.",
    solution: "Full campaign restructure — new audience segmentation, value-led ad creatives, and a dedicated landing page built specifically for the campaign (replacing the homepage as a landing destination).",
    outcome: "Significantly improved lead quality with a more targeted audience, a landing page designed for a single action, and a systematic follow-up sequence for every inquiry.",
    tags: ["Meta Ads", "Landing Page", "Lead Qualification"],
    gradient: "from-cyan/20 to-violet/10",
  },
  {
    id: "ai-chatbot",
    title: "AI Customer Support Chatbot",
    category: "AI Automation",
    categoryTag: "AI",
    client: "Ecommerce Business",
    challenge: "A growing ecommerce brand was spending significant team time answering repetitive customer service questions — order status, return policies, sizing guides — through email and live chat.",
    solution: "Custom AI chatbot trained on product catalogue, policies, and FAQs. Integrated into their website and WhatsApp Business. Escalation logic built in for complex queries that need a human.",
    outcome: "The majority of routine inquiries now resolved automatically — freeing the customer service team to focus on complex issues and high-value interactions.",
    tags: ["AI Chatbot", "WhatsApp API", "Process Automation"],
    gradient: "from-primary/20 to-violet/15",
  },
  {
    id: "mobile-app",
    title: "Mobile App Concept & MVP Launch",
    category: "App Development",
    categoryTag: "App",
    client: "On-Demand Service Startup",
    challenge: "An early-stage startup had a strong idea for an on-demand service app but needed to scope a viable MVP, build investor-ready prototypes, and launch without wasting budget on features users didn't need.",
    solution: "Product scoping workshop to define the true MVP, Figma prototype built for user testing, followed by React Native development — iOS and Android from a single codebase.",
    outcome: "Launched a focused, functional MVP within budget and timeline. Early user testing feedback was incorporated before the full public launch.",
    tags: ["React Native", "MVP Strategy", "iOS & Android"],
    gradient: "from-violet/20 to-cyan/10",
  },
  {
    id: "shopify-optimization",
    title: "Shopify Store Performance Optimization",
    category: "Shopify Ecommerce",
    categoryTag: "Ecommerce",
    client: "Health & Wellness Brand",
    challenge: "An established Shopify store with good traffic was underperforming on conversions. The checkout abandonment rate was high, the site was slow on mobile, and there was no post-purchase email strategy.",
    solution: "Full CRO audit, speed optimization (image compression, theme code cleanup), product page restructure, checkout trust signal additions, and a complete Klaviyo email flow setup.",
    outcome: "Measurable improvement in mobile page speed, a cleaner checkout experience with stronger trust signals, and an automated email stack converting a portion of abandons into completed purchases.",
    tags: ["Shopify CRO", "Speed Optimization", "Klaviyo"],
    gradient: "from-cyan/15 to-primary/20",
  },
];
