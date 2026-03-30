import { BarChart3, Share2, Globe, Palette, Video } from "lucide-react";

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
    slug: "performance-marketing",
    icon: "BarChart3",
    name: "Performance Marketing",
    tagline: "Paid campaigns that generate leads — not just impressions.",
    heroHeadline: "Stop Paying for Clicks That Never Become Clients",
    heroPainPoint: "Most ad spend is wasted — broad targeting, weak creatives, landing pages that don't convert. You're paying to get traffic that disappears.",
    problemStatement: "Digital advertising is expensive when it's done wrong. Vanity metrics — impressions, clicks, reach — don't pay your invoices. Revenue does.",
    solutionStatement: "We run outcome-focused paid media campaigns on Meta and Google, paired with landing pages and funnels built to convert your ideal customer into a paying client.",
    included: [
      { title: "Paid Media Strategy", description: "Full audit of your current spend, audience analysis, and a campaign structure built around your revenue goals." },
      { title: "Meta Ads (Facebook & Instagram)", description: "Creative strategy, audience segmentation, full-funnel campaign builds, and continuous optimization for maximum ROI." },
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
      { question: "What ad budget do you recommend starting with?", answer: "We typically recommend starting with a budget that allows us to gather meaningful data quickly. We'll advise specifically based on your market and goals." },
      { question: "How long before I see results?", answer: "Early data appears in the first 2–4 weeks. Proper optimization takes 60–90 days. We set honest expectations, not unrealistic timelines." },
      { question: "Do you manage the ad accounts, or just advise?", answer: "Full management — we build, run, and optimize your campaigns. You retain ownership of all accounts." },
      { question: "What if my current ads aren't performing?", answer: "We start with a full account audit. Most underperforming accounts have fixable structural problems — we'll identify them clearly." },
      { question: "Do you guarantee results?", answer: "No ethical agency guarantees specific ROI — there are too many variables. We guarantee transparent management, systematic optimization, and honest reporting." },
    ],
    ctaHeadline: "Ready to Turn Your Ad Spend into Predictable Pipeline?",
  },
  {
    slug: "social-media-handling",
    icon: "Share2",
    name: "Social Media Handling",
    tagline: "Strategic social presence that builds brand and drives engagement.",
    heroHeadline: "Your Social Media Should Be Building Your Brand 24/7",
    heroPainPoint: "Posting randomly without a strategy is just noise. Your competitors have a plan — you need one too, or you'll keep losing attention to them.",
    problemStatement: "Most businesses treat social media as an afterthought — inconsistent posting, no content strategy, zero engagement tracking. That's not social media management, that's wasting time.",
    solutionStatement: "We handle your entire social presence — strategy, content creation, scheduling, community management, and performance reporting — so your brand stays active, relevant, and engaging.",
    included: [
      { title: "Social Media Strategy", description: "Platform selection, audience mapping, content pillars, and a posting calendar aligned with your business goals." },
      { title: "Content Creation & Curation", description: "Scroll-stopping posts, stories, reels, and carousels designed by our creative team — on brand, every time." },
      { title: "Community Management", description: "We monitor comments, DMs, and mentions — responding promptly and building real connections with your audience." },
      { title: "Hashtag & Trend Research", description: "Data-driven hashtag strategies and trend analysis to maximize your organic reach and visibility." },
      { title: "Analytics & Reporting", description: "Monthly insights on growth, engagement, reach, and what's actually driving results — no vanity metrics." },
      { title: "Platform Optimization", description: "Profile optimization, link-in-bio setup, highlights curation, and platform-specific best practices." },
    ],
    process: [
      { step: 1, title: "Brand Audit", description: "We analyze your current social presence, competitors, and audience to build a clear picture of where you stand." },
      { step: 2, title: "Strategy & Calendar", description: "We create a content strategy with defined pillars, tone of voice, and a full monthly content calendar." },
      { step: 3, title: "Create & Publish", description: "Our creative team designs and writes all content. You approve, we publish — consistently and strategically." },
      { step: 4, title: "Engage & Report", description: "Active community management, performance tracking, and monthly strategy refinements based on real data." },
    ],
    industries: ["Ecommerce", "Restaurants & Food", "Real Estate", "Fashion & Lifestyle", "Education", "Healthcare", "Professional Services", "Startups"],
    benefits: [
      { title: "Consistent Brand Presence", description: "Never worry about gaps in your posting schedule again. Your brand stays active and professional." },
      { title: "Higher Engagement", description: "Strategic content and active community management build genuine audience relationships." },
      { title: "More Brand Awareness", description: "Consistent, quality posting builds recognition and trust with your target market over time." },
      { title: "Save Your Time", description: "Stop spending hours on social media. We handle everything — you focus on running your business." },
    ],
    faqs: [
      { question: "Which platforms do you manage?", answer: "We manage Instagram, Facebook, LinkedIn, TikTok, and Twitter/X. We'll recommend the right platforms for your audience." },
      { question: "How many posts per week?", answer: "Our standard packages include 3–5 posts per week plus stories. We'll customize based on your needs and goals." },
      { question: "Do you create the content or do we provide it?", answer: "We create everything — graphics, copy, captions, hashtags. We may ask for raw photos/videos occasionally for authenticity." },
      { question: "Can you handle paid social ads too?", answer: "Yes! Our Performance Marketing service handles paid campaigns. Social media handling focuses on organic growth and engagement." },
      { question: "How do I approve content before posting?", answer: "We share a content calendar for your approval each week. You review and approve before anything goes live." },
    ],
    ctaHeadline: "Ready to Build a Social Presence That Actually Grows Your Business?",
  },
  {
    slug: "website-development",
    icon: "Globe",
    name: "Website Development",
    tagline: "Websites built to convert — not just impress.",
    heroHeadline: "Your Website Should Be Closing Deals While You Sleep",
    heroPainPoint: "Most business websites look decent but don't perform. Slow load times, unclear messaging, weak CTAs — they cost you clients every day.",
    problemStatement: "A beautiful website that doesn't convert is just an expensive brochure. Most agencies build what looks good. We build what performs.",
    solutionStatement: "We design and develop websites that are engineered for conversion — fast, clear, persuasive, and built around your business goals.",
    included: [
      { title: "Strategy & Architecture", description: "User journey mapping, conversion flow planning, and sitemap strategy before a single pixel is designed." },
      { title: "UI/UX Design", description: "Premium custom design crafted around your brand identity, audience, and conversion goals." },
      { title: "Full-Stack Development", description: "React, Next.js, WordPress, or custom CMS builds — clean code, fast performance, fully responsive." },
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
    slug: "graphic-designing",
    icon: "Palette",
    name: "Graphic Designing",
    tagline: "Visual identity that captures attention and builds trust.",
    heroHeadline: "Design That Speaks Before You Say a Word",
    heroPainPoint: "Generic templates and inconsistent visuals make your brand look amateur. In a crowded market, weak design means lost credibility and lost clients.",
    problemStatement: "Your brand's visual identity is the first thing people judge. If it looks inconsistent, unprofessional, or like a template — you're losing trust before the conversation even starts.",
    solutionStatement: "We create premium graphic design — from brand identity systems to marketing collateral — that makes your business look as good as it actually is.",
    included: [
      { title: "Brand Identity Design", description: "Logo design, color palette, typography system, and brand guidelines that create a cohesive visual language." },
      { title: "Social Media Graphics", description: "Scroll-stopping post designs, story templates, highlight covers, and carousel layouts — consistent and on-brand." },
      { title: "Marketing Collateral", description: "Business cards, brochures, flyers, banners, presentations — everything your team needs to look professional." },
      { title: "Ad Creative Design", description: "High-converting ad visuals for Meta, Google, and other platforms — designed to stop the scroll and drive clicks." },
      { title: "Packaging & Print Design", description: "Product packaging, labels, letterheads, and print-ready files for any physical touchpoint." },
      { title: "UI/UX Design Assets", description: "Icons, illustrations, infographics, and custom visual elements for your website and app interfaces." },
    ],
    process: [
      { step: 1, title: "Brief & Discovery", description: "We understand your brand, audience, competitors, and the specific design needs of each project." },
      { step: 2, title: "Concept Development", description: "Initial concepts and mood boards presented for your feedback — we refine until it feels right." },
      { step: 3, title: "Design & Refinement", description: "High-fidelity designs with built-in revision rounds. You see every iteration before final approval." },
      { step: 4, title: "Delivery & Assets", description: "All final files delivered in every format you need — print-ready, web-optimized, and fully editable." },
    ],
    industries: ["Startups", "Ecommerce", "Real Estate", "Food & Restaurant", "Fashion", "Healthcare", "Education", "Corporate"],
    benefits: [
      { title: "Professional Brand Image", description: "Consistent, high-quality design across all touchpoints builds immediate credibility with your audience." },
      { title: "Higher Conversion Rates", description: "Well-designed marketing materials and ad creatives convert significantly better than generic templates." },
      { title: "Brand Consistency", description: "A comprehensive design system ensures your brand looks the same everywhere — building recognition." },
      { title: "Fast Turnaround", description: "Our streamlined process means you get premium design without weeks of waiting." },
    ],
    faqs: [
      { question: "Do you offer one-off design projects or only packages?", answer: "Both. We handle individual projects like logo design and also offer monthly design retainers for ongoing needs." },
      { question: "How many revisions do I get?", answer: "Standard projects include 2–3 revision rounds. We've found that our discovery process means we rarely need more." },
      { question: "What file formats do you deliver?", answer: "All relevant formats — AI, PSD, PDF, PNG, SVG, and any specific formats you need for print or web." },
      { question: "Can you match my existing brand guidelines?", answer: "Absolutely. We work within your existing brand guidelines or help you create new ones from scratch." },
      { question: "Do you design for print and digital?", answer: "Yes — we handle both. All files are optimized for their intended use, whether that's a billboard or an Instagram story." },
    ],
    ctaHeadline: "Ready for Design That Makes Your Brand Impossible to Ignore?",
  },
  {
    slug: "video-editing",
    icon: "Video",
    name: "Video Editing",
    tagline: "Video content that captures, engages, and converts.",
    heroHeadline: "Video Content That Stops the Scroll and Starts Conversations",
    heroPainPoint: "Raw footage sitting on your phone isn't content. Without professional editing, pacing, and storytelling — your videos won't cut through the noise.",
    problemStatement: "Video is the most powerful content format — but only when it's edited with purpose. Unedited or poorly edited videos damage your brand more than no video at all.",
    solutionStatement: "We transform your raw footage into polished, engaging video content — optimized for every platform, designed to capture attention, and edited to tell your story compellingly.",
    included: [
      { title: "Short-Form Video Editing", description: "Reels, TikToks, YouTube Shorts — punchy, fast-paced edits optimized for maximum engagement and platform algorithms." },
      { title: "Long-Form Video Editing", description: "YouTube videos, podcasts, webinars, and course content — professionally paced with clean cuts and engaging flow." },
      { title: "Motion Graphics & Titles", description: "Animated text, lower thirds, transitions, and branded elements that elevate your video production quality." },
      { title: "Color Grading & Audio", description: "Professional color correction, audio cleanup, background music, and sound effects for a cinematic feel." },
      { title: "Social Media Optimization", description: "Videos formatted and optimized for each platform — aspect ratios, captions, thumbnails, and hooks that drive views." },
      { title: "Ad Video Production", description: "High-converting video ads for Meta, YouTube, and TikTok — edited to capture attention in the first 3 seconds." },
    ],
    process: [
      { step: 1, title: "Brief & Raw Footage", description: "Share your footage, tell us the goal, and we'll plan the edit strategy — pacing, style, platform, and CTA." },
      { step: 2, title: "First Cut", description: "We deliver a rough cut for your review — focusing on storytelling, pacing, and key message delivery." },
      { step: 3, title: "Refinement & Polish", description: "Based on your feedback, we refine — adding motion graphics, color grading, sound design, and captions." },
      { step: 4, title: "Final Delivery", description: "Export in all required formats and resolutions — ready to upload and start getting views." },
    ],
    industries: ["Content Creators", "Ecommerce", "Real Estate", "Education", "Restaurants & Food", "Fitness & Health", "Corporate", "Personal Brands"],
    benefits: [
      { title: "More Engagement", description: "Professionally edited videos get significantly more views, shares, and saves than raw or poorly edited content." },
      { title: "Platform-Optimized", description: "Every video is formatted and optimized specifically for the platform it's going on — not one-size-fits-all." },
      { title: "Consistent Content Flow", description: "With a dedicated editing team, you can maintain a consistent posting schedule without burning out." },
      { title: "Save Hours Every Week", description: "Stop spending hours editing. Send us the footage, we handle the rest — so you can focus on creating." },
    ],
    faqs: [
      { question: "What kind of footage do you need from us?", answer: "Any resolution works, but higher quality raw footage gives the best results. We'll guide you on how to shoot for maximum impact." },
      { question: "How fast is the turnaround?", answer: "Standard turnaround is 2–3 business days for short-form and 5–7 days for long-form. Rush delivery is available." },
      { question: "Do you add subtitles/captions?", answer: "Yes — we add professional captions to every video. Captioned videos get significantly more engagement across all platforms." },
      { question: "Can you handle ongoing monthly editing?", answer: "Absolutely. Most of our clients are on monthly plans — it's the best way to maintain consistent content output." },
      { question: "What software and formats do you deliver in?", answer: "We edit in Premiere Pro and After Effects. We deliver in MP4, MOV, and any other format you need — optimized for each platform." },
    ],
    ctaHeadline: "Ready for Video Content That Actually Gets Results?",
  },
];

export const servicesSummary = [
  {
    slug: "performance-marketing",
    icon: "BarChart3",
    name: "Performance Marketing",
    tagline: "Paid campaigns that generate leads — not just impressions.",
    pain: "Most ad spend is wasted on broad targeting and weak pages. We build campaigns around the metrics that actually matter — revenue.",
  },
  {
    slug: "social-media-handling",
    icon: "Share2",
    name: "Social Media Handling",
    tagline: "Strategic social presence that builds brand and drives engagement.",
    pain: "Random posting without strategy is just noise. We build a consistent, engaging social presence that grows your brand.",
  },
  {
    slug: "website-development",
    icon: "Globe",
    name: "Website Development",
    tagline: "Websites built to convert — not just impress.",
    pain: "Your website is costing you clients. Most sites look fine but fail to convert because they weren't engineered for it.",
  },
  {
    slug: "graphic-designing",
    icon: "Palette",
    name: "Graphic Designing",
    tagline: "Visual identity that captures attention and builds trust.",
    pain: "Generic templates and inconsistent visuals make your brand look amateur. We create design that builds credibility.",
  },
  {
    slug: "video-editing",
    icon: "Video",
    name: "Video Editing",
    tagline: "Video content that captures, engages, and converts.",
    pain: "Raw footage isn't content. We turn your videos into scroll-stopping, professionally edited content that converts.",
  },
];
