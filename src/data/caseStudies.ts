export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  categoryTag: "Web" | "Marketing" | "Social" | "Design" | "Video";
  client: string;
  challenge: string;
  solution: string;
  outcome: string;
  tags: string[];
  gradient: string;
  image?: string;
  link?: string;
}

export const caseStudies: CaseStudy[] = [
  // WEB PROJECTS
  {
    id: "ilandintservice",
    title: "Iland International Service Website",
    category: "Website Development",
    categoryTag: "Web",
    client: "Iland International",
    challenge: "Developing a professional corporate website to showcase international services.",
    solution: "Built a responsive, modern website with clear service navigation and contact forms.",
    outcome: "Increased online presence and professional brand image for the international service provider.",
    tags: ["React", "Corporate", "Responsive"],
    gradient: "from-primary/20 to-cyan/10",
    link: "https://www.ilandintservice.com",
  },
  {
    id: "futuregatewaytravel",
    title: "Future Gateway Travel Portal",
    category: "Website Development",
    categoryTag: "Web",
    client: "Future Gateway Travel",
    challenge: "Creating an engaging travel portal for booking and information.",
    solution: "Designed an intuitive UI/UX for travel seekers with easy navigation.",
    outcome: "Enhanced user engagement and streamlined travel inquiry process.",
    tags: ["Travel", "UI/UX", "Next.js"],
    gradient: "from-violet/20 to-primary/10",
    link: "https://www.futuregatewaytravel.com",
  },
  {
    id: "m-anas-meals-hub",
    title: "M-Anas Meals Hub",
    category: "Website Development",
    categoryTag: "Web",
    client: "Meals Hub",
    challenge: "A food delivery and meal discovery platform needing a modern look.",
    solution: "Developed a fast, mobile-optimized web application for food discovery.",
    outcome: "Improved user retention and simplified meal ordering experience.",
    tags: ["E-commerce", "Mobile-First", "Vercel"],
    gradient: "from-cyan/20 to-violet/10",
    link: "https://m-anas-meals-hub.vercel.app",
  },
  {
    id: "tasty-buds-app",
    title: "Tasty Buds Application",
    category: "Website Development",
    categoryTag: "Web",
    client: "Tasty Buds",
    challenge: "Building a delightful food-related application with interactive features.",
    solution: "Created a vibrant, user-friendly interface with interactive menus.",
    outcome: "High user satisfaction and increased brand loyalty through a superior digital experience.",
    tags: ["Food App", "Interactive", "Vercel"],
    gradient: "from-primary/20 to-violet/15",
    link: "https://tasty-buds-app.vercel.app",
  },

  // MARKETING PROJECTS
  {
    id: "marketing-1",
    title: "Performance Marketing Campaign",
    category: "Performance Marketing",
    categoryTag: "Marketing",
    client: "Growth Partners",
    challenge: "Scaling brand reach through targeted visual marketing.",
    solution: "Developed high-impact visual assets for performance-driven campaigns.",
    outcome: "Higher conversion rates and better brand recall through professional imagery.",
    tags: ["Ads", "Visuals", "Growth"],
    gradient: "from-violet/20 to-cyan/10",
    image: "/marketing/WhatsApp Image 2026-03-30 at 6.19.48 PM.jpeg",
  },
  {
    id: "marketing-2",
    title: "Strategic Marketing Visuals",
    category: "Performance Marketing",
    categoryTag: "Marketing",
    client: "Creative Solutions",
    challenge: "Creating consistent marketing collateral for multi-channel distribution.",
    solution: "Curated a set of professional marketing images optimized for social and web.",
    outcome: "Unified brand voice across all marketing touchpoints.",
    tags: ["Strategy", "Multi-channel", "Design"],
    gradient: "from-cyan/15 to-primary/20",
    image: "/marketing/WhatsApp Image 2026-03-30 at 6.19.49 PM.jpeg",
  },

  // DESIGN PROJECTS
  {
    id: "design-1",
    title: "Iland Facebook Post Design",
    category: "Graphic Designing",
    categoryTag: "Design",
    client: "Iland",
    challenge: "Creating eye-catching social media posts for engagement.",
    solution: "Designed high-quality Facebook post visuals with clear calls to action.",
    outcome: "Significantly higher engagement and brand visibility on social platforms.",
    tags: ["Facebook", "Social Media", "Graphics"],
    gradient: "from-primary/20 to-cyan/10",
    image: "/Design/iland_facebook_post_v2.jpg",
  },
  {
    id: "design-2",
    title: "Corporate Identity Design",
    category: "Graphic Designing",
    categoryTag: "Design",
    client: "Tech Innovations",
    challenge: "Establishing a strong visual identity through professional design.",
    solution: "Developed a cohesive design language for corporate branding.",
    outcome: "Enhanced brand credibility and professional presentation.",
    tags: ["Identity", "Branding", "Creative"],
    gradient: "from-violet/20 to-primary/10",
    image: "/Design/WhatsApp Image 2026-03-30 at 5.21.21 PM.jpeg",
  },

  // SOCIAL, VIDEO & OTHERS (Call for Meeting)
  {
    id: "social-media",
    title: "Social Media Management",
    category: "Social Media Handling",
    categoryTag: "Social",
    client: "Social Media Partners",
    challenge: "Looking for our social media portfolio?",
    solution: "Call us for a meeting for a proper visit to the social media pages we handle.",
    outcome: "Personalized walkthrough of our successful social media strategies.",
    tags: ["Management", "Strategy", "Meeting"],
    gradient: "from-cyan/20 to-violet/10",
  },
  {
    id: "video-portfolio",
    title: "Video Content Portfolio",
    category: "Video Editing",
    categoryTag: "Video",
    client: "Video Production",
    challenge: "Want to check our professional videos?",
    solution: "For checking our videos, call us for meeting.",
    outcome: "Direct presentation of our high-quality video production work.",
    tags: ["Video", "Editing", "Meeting"],
    gradient: "from-primary/20 to-violet/15",
  },
  {
    id: "more-info",
    title: "More Details & Information",
    category: "Consultation",
    categoryTag: "Web", // Defaulting to Web but can be anything
    client: "Information Request",
    challenge: "Need more details about our services?",
    solution: "For more details and information, call meeting.",
    outcome: "Comprehensive understanding of how we can grow your business.",
    tags: ["Consultation", "Strategy", "Meeting"],
    gradient: "from-violet/20 to-cyan/10",
  },
];
