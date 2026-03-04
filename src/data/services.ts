import { Code, Smartphone, TrendingUp, ShoppingBag, Bot, Globe } from "lucide-react";

export interface ServiceData {
  slug: string;
  icon: string;
  name: string;
  tagline: string;
  heroHeadline: string;
  heroPainPoint: string;
  problemStatement: string;
  solutionStatement: string;
  included: { title: string; description: string }[];
  process: { step: number; title: string; description: string }[];
  industries: string[];
  benefits: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  ctaHeadline: string;
}

export const services: ServiceData[] = [
  {
    slug: "web-development",
    icon: "Globe",
    name: "Web Development",
    tagline: "Websites built to convert — not just impress.",
    heroHeadline: "Your Website Should Be Closing Deals While You Sleep",
    heroPainPoint: "Most business websites look decent but don't perform. Slow load times, unclear messaging, weak CTAs — they cost you clients every day.",
    problemStatement: "A beautiful website that doesn't convert is just an expensive brochure. Most agencies build what looks good. We build what performs.",
    solutionStatement: "We design and develop websites that are engineered for conversion — fast, clear, persuasive, and built around your business goals.",
    included: [
      { title: "Strategy & Architecture", description: "User journey mapping, conversion flow planning, and sitemap strategy before a single pixel is designed." },
      { title: "UI/UX Design", description: "Premium custom design crafted around your brand identity, audience, and conversion goals." },
      { title: "Full-Stack Development", description: "React, Next.js, or custom CMS builds — clean code, fast performance, fully responsive." },
      { title: "Conversion Optimization", description: "CTA placement, form optimization, trust signals, and performance tuning baked in from day one." },
      { title: "SEO Foundation", description: "Technical SEO, semantic HTML, meta tags, and structured data so you rank and get found." },
      { title: "Post-Launch Support", description: "You own all assets. We provide handover documentation, training, and ongoing support options." },
    ],
    process: [
      { step: 1, title: "Discovery Call", description: "We audit your current site, understand your goals, identify your audience, and define what success looks like." },
      { step: 2, title: "Strategy & Design", description: "Wireframes, conversion flow, and high-fidelity mockups reviewed and approved before development starts." },
      { step: 3, title: "Build & Test", description: "Development with quality checkpoints — mobile testing, speed audits, and CRO review built into every sprint." },
      { step: 4, title: "Launch & Handover", description: "Clean deployment, performance audit, full asset handover — your website, your ownership." },
    ],
    industries: ["SaaS & Tech", "Professional Services", "Healthcare & Clinics", "Education", "Real Estate", "Hospitality", "Ecommerce", "Fintech"],
    benefits: [
      { title: "Lower Bounce Rate", description: "Faster load times and clearer messaging keep visitors engaged and moving toward your CTA." },
      { title: "More Qualified Leads", description: "Conversion-engineered layouts guide the right visitors to take action — not just browse." },
      { title: "Built to Scale", description: "Clean architecture and modular components mean your site grows with your business without full rebuilds." },
      { title: "You Own Everything", description: "Full code ownership, no platform lock-in, no recurring fees just to access your own site." },
    ],
    faqs: [
      { question: "How long does a website project take?", answer: "Most projects take 3–6 weeks from kick-off to launch, depending on scope and content readiness. We'll give you a precise timeline after the discovery call." },
      { question: "Will my website rank on Google?", answer: "Yes — every site we build includes a strong technical SEO foundation. Full SEO content strategy is available as an add-on." },
      { question: "What platform do you build on?", answer: "We build custom React/Next.js sites, WordPress, Webflow, or whatever best fits your goals. We'll recommend the right platform, not the easiest one for us." },
      { question: "Can you redesign an existing website?", answer: "Absolutely. Redesigns are one of our most common projects. We start with a full audit of what's not working." },
      { question: "What happens after launch?", answer: "You own all the assets. We offer optional maintenance packages, but you're never locked in or dependent on us to access your site." },
    ],
    ctaHeadline: "Ready to Build a Website That Actually Grows Your Business?",
  },
  {
    slug: "app-development",
    icon: "Smartphone",
    name: "App Development",
    tagline: "Mobile apps that users actually open and businesses rely on.",
    heroHeadline: "Turn Your Product Vision Into a Polished, Performant App",
    heroPainPoint: "Bad apps get deleted. Slow apps get bad reviews. Poorly scoped apps drain budgets and never ship. You can't afford any of those.",
    problemStatement: "Most app projects fail before they launch — not because of the idea, but because of poor planning, bloated scope, and agencies who bill by the hour.",
    solutionStatement: "We build focused, well-scoped mobile applications using modern cross-platform or native architecture — designed for real users, built to perform.",
    included: [
      { title: "Product Scoping & Roadmap", description: "MVP definition, feature prioritization, and technical architecture before any code is written." },
      { title: "UI/UX Design", description: "User-tested, platform-native design that follows iOS and Android conventions while matching your brand." },
      { title: "Cross-Platform or Native Dev", description: "React Native, Flutter, or Swift/Kotlin — we recommend based on your audience, timeline, and budget." },
      { title: "API & Backend Integration", description: "REST APIs, authentication, database integration, and third-party service connections handled end-to-end." },
      { title: "App Store Submission", description: "We handle the full App Store and Google Play submission process, including compliance requirements." },
      { title: "Testing & QA", description: "Device testing, performance profiling, and UAT before every release." },
    ],
    process: [
      { step: 1, title: "Scope & Strategy", description: "Define your MVP, map user flows, select the right tech stack, and plan a realistic timeline." },
      { step: 2, title: "Design & Prototype", description: "Interactive prototype built in Figma for approval — so you see the full experience before development starts." },
      { step: 3, title: "Development", description: "Agile sprints with milestone check-ins. You see progress regularly, not just at the end." },
      { step: 4, title: "Test, Submit & Scale", description: "QA, app store submission, live monitoring, and a clear roadmap for V2 features." },
    ],
    industries: ["SaaS Platforms", "Healthcare", "Retail & Ecommerce", "Fintech", "EdTech", "Logistics", "Hospitality", "On-Demand Services"],
    benefits: [
      { title: "Delivered on Time", description: "Clearly scoped projects with milestone-based delivery mean no surprise delays or budget overruns." },
      { title: "High User Retention", description: "Performance-first builds and intuitive UX keep users engaged beyond the first session." },
      { title: "Scalable Architecture", description: "Built to handle growth — from 100 users to 100,000 without a full rebuild." },
      { title: "Full Ownership", description: "All source code, assets, and accounts are yours from day one." },
    ],
    faqs: [
      { question: "Should I build native or cross-platform?", answer: "Depends on your audience and budget. We'll recommend honestly — cross-platform with React Native is right for most startups, native is better for high-performance, platform-specific needs." },
      { question: "How much does app development cost?", answer: "MVPs typically start from $8,000–$15,000. Full-featured apps vary widely. We'll give you a scoped estimate after a discovery call." },
      { question: "How long does it take to build an app?", answer: "A focused MVP typically takes 8–14 weeks. We scope honestly — we'd rather give you an accurate timeline than overpromise." },
      { question: "Do you provide ongoing maintenance?", answer: "Yes. We offer post-launch maintenance packages for updates, bug fixes, and new features." },
      { question: "What if I already have a design?", answer: "We can build from your existing Figma files or designs. We'll review them for technical feasibility and UX quality first." },
    ],
    ctaHeadline: "Have an App Idea? Let's Scope It the Right Way.",
  },
  {
    slug: "digital-marketing",
    icon: "TrendingUp",
    name: "Digital Marketing",
    tagline: "Performance marketing that generates pipeline — not just impressions.",
    heroHeadline: "Stop Paying for Clicks That Never Become Clients",
    heroPainPoint: "Most ad spend is wasted — broad targeting, weak creatives, landing pages that don't convert. You're paying to get traffic that disappears.",
    problemStatement: "Digital advertising is expensive when it's done wrong. Vanity metrics — impressions, clicks, reach — don't pay your invoices. Revenue does.",
    solutionStatement: "We run outcome-focused paid media campaigns on Meta and Google, paired with landing pages and funnels built to convert your ideal customer.",
    included: [
      { title: "Paid Media Strategy", description: "Full audit of your current spend, audience analysis, and a campaign structure built around your revenue goals." },
      { title: "Meta Ads (Facebook & Instagram)", description: "Creative strategy, audience segmentation, full-funnel campaign builds, and continuous optimization." },
      { title: "Google Ads", description: "Search, Display, and Performance Max campaigns managed with proper negative keyword control and conversion tracking." },
      { title: "Landing Page Optimization", description: "We audit or build the pages your ads send traffic to — because traffic to a weak page is wasted spend." },
      { title: "Conversion Tracking Setup", description: "Pixel setup, Google Tag Manager, GA4 configuration — so every decision is backed by real data." },
      { title: "Reporting & Transparency", description: "Monthly performance reports in plain language — no vanity metrics, no hiding results." },
    ],
    process: [
      { step: 1, title: "Audit & Research", description: "Review existing accounts, understand your market, identify your highest-value audience segments." },
      { step: 2, title: "Strategy & Setup", description: "Campaign architecture, creative briefs, tracking setup, and landing page review before spending a dollar." },
      { step: 3, title: "Launch & Optimize", description: "Campaign launch with daily monitoring — testing creatives, audiences, and bids systematically." },
      { step: 4, title: "Scale What Works", description: "Once we identify winning campaigns, we build scaling strategies to grow revenue without proportionally growing spend." },
    ],
    industries: ["Ecommerce", "Lead Generation", "SaaS", "Real Estate", "Education & Courses", "Professional Services", "Local Business", "Healthcare"],
    benefits: [
      { title: "Higher Quality Leads", description: "Better targeting and better offers attract prospects who are actually ready to buy." },
      { title: "Lower Cost Per Acquisition", description: "Continuous optimization means your cost per lead or sale improves over time, not stays flat." },
      { title: "Full Transparency", description: "You always have access to your ad accounts. We work as an extension of your team, not a black box." },
      { title: "No Retainer Traps", description: "Clear monthly engagements with no long-term lock-in. We earn your continued business by delivering results." },
    ],
    faqs: [
      { question: "What ad budget do you recommend starting with?", answer: "We typically recommend a minimum of $1,500–$3,000/month in ad spend to gather meaningful data quickly. We'll advise specifically based on your market." },
      { question: "How long before I see results?", answer: "Early data appears in the first 2–4 weeks. Proper optimization takes 60–90 days. We set honest expectations, not unrealistic timelines." },
      { question: "Do you manage the ad accounts, or just advise?", answer: "Full management — we build, run, and optimize your campaigns. You retain ownership of all accounts." },
      { question: "What if my current ads aren't performing?", answer: "We start with a full account audit. Most underperforming accounts have fixable structural problems — we'll identify them clearly." },
      { question: "Do you guarantee results?", answer: "No ethical agency guarantees specific ROI — there are too many variables. We guarantee transparent management, systematic optimization, and honest reporting." },
    ],
    ctaHeadline: "Ready to Turn Your Ad Spend into Predictable Pipeline?",
  },
  {
    slug: "shopify-ecommerce",
    icon: "ShoppingBag",
    name: "Shopify Ecommerce",
    tagline: "Shopify stores built to sell — from first visit to repeat purchase.",
    heroHeadline: "Your Shopify Store Should Be Generating Revenue, Not Questions",
    heroPainPoint: "Low conversion rates, high cart abandonment, poor mobile experience — most Shopify stores leave money on the table because they weren't built to sell.",
    problemStatement: "A Shopify store that looks good but doesn't convert is a liability. Every visitor who leaves without buying is a missed opportunity — often because of fixable UX or strategy problems.",
    solutionStatement: "We design, build, and optimize Shopify stores around the buying journey — from landing to checkout — with conversion architecture built into every decision.",
    included: [
      { title: "Store Strategy & Architecture", description: "Product page structure, navigation design, collection organization, and buyer journey mapping." },
      { title: "Custom Shopify Theme Development", description: "Bespoke theme design or premium theme customization — built for speed and conversion, not just aesthetics." },
      { title: "Product Page Optimization", description: "Persuasive product copy, trust elements, image strategy, and CTA design that drives add-to-cart." },
      { title: "Checkout Optimization", description: "Reduced friction at checkout — trust badges, clear shipping info, and optimized checkout flow." },
      { title: "App Stack Integration", description: "Klaviyo email flows, review apps, upsell tools, and loyalty programs integrated strategically." },
      { title: "Analytics & Tracking", description: "Full GA4 + Meta Pixel setup, purchase tracking, and conversion event configuration." },
    ],
    process: [
      { step: 1, title: "Store Audit", description: "Full review of your current store — conversion rate, UX issues, speed, mobile experience, and missed revenue opportunities." },
      { step: 2, title: "Strategy & Design", description: "Buyer journey mapping, design mockups, app stack planning, and CRO strategy before any development." },
      { step: 3, title: "Build & Configure", description: "Theme development, app integrations, product page builds, and checkout flow optimization." },
      { step: 4, title: "Launch & Grow", description: "Live testing, speed audit, post-launch monitoring, and a roadmap for ongoing CRO and email marketing." },
    ],
    industries: ["Fashion & Apparel", "Health & Beauty", "Home & Living", "Sports & Fitness", "Food & Beverage", "Tech & Electronics", "Pets", "Gifts & Lifestyle"],
    benefits: [
      { title: "Higher Conversion Rate", description: "Conversion-engineered product pages and checkout flows turn more browsers into buyers." },
      { title: "Lower Cart Abandonment", description: "Optimized checkout, abandoned cart flows, and trust signals reduce drop-off at the final step." },
      { title: "Better Mobile Experience", description: "Mobile-first builds ensure your store converts on every device — where most of your traffic comes from." },
      { title: "Repeat Purchase Systems", description: "Post-purchase email flows and loyalty strategies build customer lifetime value, not just one-time sales." },
    ],
    faqs: [
      { question: "Do you build from scratch or work with existing stores?", answer: "Both. We build new stores and optimize existing ones. New builds start with strategy; optimizations start with an audit." },
      { question: "Which Shopify plan do I need?", answer: "Shopify Basic covers most small stores. We'll advise on the right plan based on your volume and feature needs." },
      { question: "Can you help with Shopify Plus?", answer: "Yes. We work with Shopify Plus for high-volume merchants who need advanced checkout customization and enterprise features." },
      { question: "Do you handle product photography or copy?", answer: "We specialize in conversion copywriting for product pages and can advise on photography requirements. Full photography is a separate service." },
      { question: "How long does a Shopify build take?", answer: "A full custom build typically takes 4–8 weeks. Store optimizations can be completed in 2–3 weeks depending on scope." },
    ],
    ctaHeadline: "Ready to Build a Shopify Store That Converts Visitors Into Customers?",
  },
  {
    slug: "ai-automation",
    icon: "Bot",
    name: "AI Automation",
    tagline: "Eliminate repetitive work. Build systems that scale without extra headcount.",
    heroHeadline: "Your Business Is Losing Hours Every Week to Work a System Could Do",
    heroPainPoint: "Manual data entry, repetitive follow-ups, slow customer responses, disorganized lead management — these aren't small problems. They compound every day.",
    problemStatement: "Most businesses are still operating with manual processes that were never designed to scale. The result is bottlenecks, human error, and a team buried in admin instead of focused on growth.",
    solutionStatement: "We identify your highest-impact automation opportunities and build AI-powered systems — chatbots, CRM workflows, lead pipelines, and process automations — that run reliably without constant oversight.",
    included: [
      { title: "Process Audit & Opportunity Mapping", description: "We map your current workflows to identify where automation delivers the highest ROI before building anything." },
      { title: "AI Chatbot Development", description: "Custom chatbots trained on your business knowledge — for customer support, lead qualification, or internal Q&A." },
      { title: "Lead Automation Workflows", description: "Automated lead capture, scoring, assignment, and follow-up sequences that keep no prospect cold." },
      { title: "CRM & Process Automation", description: "HubSpot, Go High Level, Salesforce, or custom CRM automation — data flows between systems without manual input." },
      { title: "Document & Email Automation", description: "Automated proposals, contract generation, invoice workflows, and email sequences triggered by real business events." },
      { title: "Integration Architecture", description: "Connect your tools — CRM, email, Slack, calendar, ecommerce platform — into a unified, automated workflow." },
    ],
    process: [
      { step: 1, title: "Workflow Discovery", description: "We spend time understanding your current processes, team structure, and where hours are being lost." },
      { step: 2, title: "Automation Blueprint", description: "A clear map of what gets automated, what tools connect, and what the system looks like end-to-end." },
      { step: 3, title: "Build & Integrate", description: "Automation builds with testing at each stage — no black boxes, no fragile scripts." },
      { step: 4, title: "Train & Handover", description: "We train your team, document everything, and hand over a system you understand and control." },
    ],
    industries: ["Professional Services", "SaaS & Tech", "Real Estate", "Healthcare", "Ecommerce", "Agencies", "Financial Services", "Education"],
    benefits: [
      { title: "Reclaim Team Time", description: "Automating repetitive tasks frees your team to focus on high-value work — the kind that actually moves the business forward." },
      { title: "Faster Lead Response", description: "Automated lead workflows mean every inquiry is acknowledged instantly — no leads go cold from slow follow-up." },
      { title: "Fewer Human Errors", description: "Systems don't miss steps, forget to follow up, or enter data incorrectly. Consistency you can rely on." },
      { title: "Scalable Operations", description: "When your business grows, your systems handle the increased volume — no need to hire for every new workflow." },
    ],
    faqs: [
      { question: "What tools do you build automations with?", answer: "Make (Integromat), Zapier, n8n, custom APIs, OpenAI, and native CRM automation — we choose the right tool for your stack, not our preference." },
      { question: "Do I need technical knowledge to manage the automations?", answer: "No. We build for non-technical users and provide clear documentation and training so you can manage and adjust workflows confidently." },
      { question: "How do I know which processes to automate first?", answer: "We start with a process audit to identify high-frequency, high-cost manual tasks. We'll tell you clearly which automations will have the fastest impact." },
      { question: "What if the automation breaks?", answer: "We include error handling in every build and provide support during a 30-day post-launch window. Ongoing support packages are available." },
      { question: "Can you automate within our existing CRM?", answer: "Yes. We work with most major CRMs including HubSpot, Salesforce, Go High Level, Monday.com, and Pipedrive." },
    ],
    ctaHeadline: "Ready to Build Systems That Work While Your Team Focuses on Growth?",
  },
];

export const servicesSummary = [
  {
    slug: "web-development",
    icon: "Globe",
    name: "Web Development",
    tagline: "Websites built to convert — not just impress.",
    pain: "Your website is costing you clients. Most sites look fine but fail to convert because they weren't engineered for it.",
  },
  {
    slug: "app-development",
    icon: "Smartphone",
    name: "App Development",
    tagline: "Mobile apps that users actually open and businesses rely on.",
    pain: "App projects fail from poor scoping. We build focused, well-scoped apps that ship on time and perform at scale.",
  },
  {
    slug: "digital-marketing",
    icon: "TrendingUp",
    name: "Digital Marketing",
    tagline: "Performance marketing that generates pipeline.",
    pain: "Most ad spend is wasted on broad targeting and weak pages. We build campaigns around the metrics that actually matter.",
  },
  {
    slug: "shopify-ecommerce",
    icon: "ShoppingBag",
    name: "Shopify Ecommerce",
    tagline: "Shopify stores built to sell — end to end.",
    pain: "High traffic, low conversions. Your store needs more than a theme — it needs a conversion architecture.",
  },
  {
    slug: "ai-automation",
    icon: "Bot",
    name: "AI Automation",
    tagline: "Eliminate repetitive work. Build systems that scale.",
    pain: "Your team is buried in manual work that a system should be handling. We build the automations that free them.",
  },
];
