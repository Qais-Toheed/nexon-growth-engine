import { motion } from "framer-motion";
import { CTABanner } from "@/components/sections/CTABanner";

const categories = ["Web Design", "Conversion Optimization", "Paid Ads Strategy", "Shopify Growth", "AI Automation", "Digital Growth Systems"];
const posts = [
  { title: "Why Your Website Loses 70% of Visitors Before They Convert", category: "Conversion Optimization", read: "5 min read", excerpt: "Most websites fail to convert not because of poor design, but because of poor strategy. Here's the conversion architecture framework we apply to every project." },
  { title: "The Shopify CRO Checklist: 12 Changes That Move the Needle", category: "Shopify Growth", read: "7 min read", excerpt: "Conversion rate optimization for Shopify stores isn't complicated — but it is systematic. These are the 12 highest-impact areas we audit in every store." },
  { title: "How to Stop Wasting Your Meta Ads Budget", category: "Paid Ads Strategy", read: "6 min read", excerpt: "The most common reason Meta ad campaigns underperform isn't the budget or the platform — it's the campaign structure and the page the traffic lands on." },
  { title: "AI Automation for Small Businesses: Where to Start", category: "AI Automation", read: "8 min read", excerpt: "AI automation doesn't require a technical team or enterprise budget. Here's a practical framework for identifying and implementing your first automation wins." },
  { title: "What Makes a High-Converting Agency Website", category: "Web Design", read: "5 min read", excerpt: "A great agency website isn't about awards or animations. It's about trust architecture — the specific design and copy decisions that make visitors feel confident enough to reach out." },
  { title: "Building a Digital Growth System From Scratch", category: "Digital Growth Systems", read: "9 min read", excerpt: "Most businesses treat digital marketing as a series of disconnected tactics. A growth system connects your website, your ads, your automations, and your CRM into one compounding machine." },
];

const Blog = () => (
  <main className="pt-20">
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl mb-16">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">Insights</p>
          <h1 className="text-4xl sm:text-5xl font-black mb-5">Practical thinking on <span className="text-gradient">digital growth</span></h1>
          <p className="text-xl text-muted-foreground">Strategy, execution, and systems — written for business owners who want substance, not fluff.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <motion.article key={post.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }} className="flex flex-col p-6 rounded-2xl bg-surface border border-border border-glow-hover group cursor-pointer">
              <div className="h-32 rounded-xl bg-gradient-to-br from-primary/10 to-violet/10 border border-border mb-5" />
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium">{post.category}</span>
                <span className="text-xs text-muted-foreground">{post.read}</span>
              </div>
              <h2 className="text-base font-bold mb-3 leading-snug group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{post.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
    <CTABanner headline="Want growth insights delivered to your inbox?" subheadline="We publish practical, no-fluff content on digital growth, conversion optimization, and AI automation." />
  </main>
);

export default Blog;
