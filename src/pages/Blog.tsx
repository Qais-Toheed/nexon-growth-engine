import { motion } from "framer-motion";
import { CTABanner } from "@/components/sections/CTABanner";
import { Clock, ArrowUpRight, BookOpen, TrendingUp, Bot, Globe, ShoppingBag, Zap } from "lucide-react";

const categories = ["Web Design", "Conversion Optimization", "Paid Ads Strategy", "Shopify Growth", "AI Automation", "Digital Growth Systems"];

const catIcons: Record<string, React.ElementType> = {
  "Web Design": Globe,
  "Conversion Optimization": TrendingUp,
  "Paid Ads Strategy": TrendingUp,
  "Shopify Growth": ShoppingBag,
  "AI Automation": Bot,
  "Digital Growth Systems": Zap,
};

const catColors: Record<string, string> = {
  "Web Design": "hsl(var(--primary))",
  "Conversion Optimization": "hsl(var(--cyan))",
  "Paid Ads Strategy": "hsl(var(--violet))",
  "Shopify Growth": "hsl(var(--cyan))",
  "AI Automation": "hsl(var(--primary))",
  "Digital Growth Systems": "hsl(var(--violet))",
};

const posts = [
  { title: "Why Your Website Loses 70% of Visitors Before They Convert", category: "Conversion Optimization", read: "5 min read", featured: true,
    excerpt: "Most websites fail to convert not because of poor design, but because of poor strategy. Here's the conversion architecture framework we apply to every project." },
  { title: "The Shopify CRO Checklist: 12 Changes That Move the Needle", category: "Shopify Growth", read: "7 min read", featured: false,
    excerpt: "Conversion rate optimization for Shopify stores isn't complicated — but it is systematic. These are the 12 highest-impact areas we audit in every store." },
  { title: "How to Stop Wasting Your Meta Ads Budget", category: "Paid Ads Strategy", read: "6 min read", featured: false,
    excerpt: "The most common reason Meta ad campaigns underperform isn't the budget or the platform — it's the campaign structure and the landing page." },
  { title: "AI Automation for Small Businesses: Where to Start", category: "AI Automation", read: "8 min read", featured: false,
    excerpt: "AI automation doesn't require a technical team or enterprise budget. Here's a practical framework for identifying your first automation wins." },
  { title: "What Makes a High-Converting Agency Website", category: "Web Design", read: "5 min read", featured: false,
    excerpt: "A great agency website isn't about awards or animations. It's about trust architecture — the design and copy decisions that make visitors confident enough to reach out." },
  { title: "Building a Digital Growth System From Scratch", category: "Digital Growth Systems", read: "9 min read", featured: false,
    excerpt: "Most businesses treat digital marketing as disconnected tactics. A growth system connects your website, ads, automations, and CRM into one compounding machine." },
];

// Inline blog thumbnail visual
function BlogThumbnail({ category, featured }: { category: string; featured?: boolean }) {
  const color = catColors[category] ?? "hsl(var(--primary))";
  const Icon = catIcons[category] ?? BookOpen;
  return (
    <div className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${color.replace(")", "/0.08)")}, ${color.replace(")", "/0.03)")})` }}>
      {/* Abstract pattern */}
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, ${color.replace(")", "/0.25)")} 0%, transparent 60%), radial-gradient(circle at 80% 20%, ${color.replace(")", "/0.15)")} 0%, transparent 50%)`,
        }} />
      {/* Center icon */}
      <div className="relative flex items-center justify-center h-full">
        <div className="flex flex-col items-center gap-3">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ background: color.replace(")", "/0.15)"), border: `1px solid ${color.replace(")", "/0.25)")}` }}>
            <Icon className="w-7 h-7" style={{ color }} />
          </div>
          {featured && (
            <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white"
              style={{ background: color }}>
              Featured
            </span>
          )}
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-8 h-8 rounded-lg opacity-20"
        style={{ background: color, animation: "float 6s ease-in-out infinite" }} />
      <div className="absolute bottom-4 left-4 w-5 h-5 rounded-full opacity-15"
        style={{ background: color, animation: "float 8s ease-in-out infinite", animationDelay: "2s" }} />
    </div>
  );
}

const Blog = () => (
  <main className="pt-20">
    {/* Hero */}
    <section className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(160deg, hsl(220 35% 100%) 0%, hsl(218 40% 98%) 100%)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-[700px] h-[500px]"
          style={{ background: "radial-gradient(ellipse, hsl(214 100% 50% / 0.07) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle, hsl(214 100% 50% / 0.04) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }} />
      </div>
      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--cyan)))" }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(var(--primary))" }}>Insights</span>
          </div>
          <h1 className="font-black leading-[1.02] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.8rem,7vw,90px)", color: "hsl(var(--foreground))" }}>
            Practical thinking on{" "}
            <span style={{
              background: "linear-gradient(130deg, hsl(var(--primary)), hsl(var(--cyan)))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>digital growth</span>
          </h1>
          <p className="text-xl text-muted-foreground">Strategy, execution, and systems — written for business owners who want substance, not fluff.</p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2">
          {["All", ...categories].map((cat, i) => (
            <motion.span key={cat}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.04 }}
              className="px-4 py-2 rounded-full text-xs font-semibold cursor-pointer transition-all duration-300"
              style={{
                background: i === 0 ? "hsl(var(--primary))" : "hsl(220 20% 100%)",
                color: i === 0 ? "white" : "hsl(var(--muted-foreground))",
                border: `1px solid ${i === 0 ? "hsl(var(--primary))" : "hsl(var(--border))"}`,
              }}>
              {cat}
            </motion.span>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 divider-glow" />
    </section>

    {/* Featured post */}
    <section className="py-16" style={{ background: "hsl(220 20% 100%)" }}>
      <div className="container">
        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group rounded-3xl overflow-hidden cursor-pointer transition-all duration-400 mb-14"
          style={{ border: "1px solid hsl(var(--border))", boxShadow: "0 4px 32px hsl(220 30% 10% / 0.06)" }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = "0 20px 80px hsl(220 30% 10% / 0.10)"; el.style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = "0 4px 32px hsl(220 30% 10% / 0.06)"; el.style.transform = ""; }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-64 lg:h-auto min-h-[280px]">
              <BlogThumbnail category={posts[0].category} featured />
            </div>
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold border"
                  style={{
                    background: `${(catColors[posts[0].category] ?? "hsl(var(--primary))").replace(")", "/0.08)")}`,
                    color: catColors[posts[0].category] ?? "hsl(var(--primary))",
                    borderColor: `${(catColors[posts[0].category] ?? "hsl(var(--primary))").replace(")", "/0.22)")}`,
                  }}>
                  {posts[0].category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />{posts[0].read}
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-black mb-4 leading-snug group-hover:text-primary transition-colors" style={{ color: "hsl(var(--foreground))" }}>
                {posts[0].title}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">{posts[0].excerpt}</p>
              <div className="inline-flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all" style={{ color: "hsl(var(--primary))" }}>
                Read article <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </motion.article>

        {/* Post grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((post, i) => (
            <motion.article key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group flex flex-col rounded-2xl overflow-hidden cursor-pointer transition-all duration-400"
              style={{ background: "hsl(var(--background))", border: "1px solid hsl(var(--border))" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = "0 12px 48px hsl(220 30% 10% / 0.08)"; el.style.transform = "translateY(-3px)"; el.style.borderColor = "hsl(var(--primary)/0.25)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = ""; el.style.transform = ""; el.style.borderColor = "hsl(var(--border))"; }}
            >
              <div className="h-44">
                <BlogThumbnail category={post.category} />
              </div>
              <div className="flex-1 flex flex-col p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold border"
                    style={{
                      background: `${(catColors[post.category] ?? "hsl(var(--primary))").replace(")", "/0.08)")}`,
                      color: catColors[post.category] ?? "hsl(var(--primary))",
                      borderColor: `${(catColors[post.category] ?? "hsl(var(--primary))").replace(")", "/0.20)")}`,
                    }}>
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />{post.read}
                  </span>
                </div>
                <h2 className="text-sm font-bold mb-3 leading-snug flex-1 group-hover:text-primary transition-colors" style={{ color: "hsl(var(--foreground))" }}>
                  {post.title}
                </h2>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-5">{post.excerpt}</p>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold group-hover:gap-2.5 transition-all" style={{ color: "hsl(var(--primary))" }}>
                  Read more <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    <CTABanner headline="Want growth insights delivered to your inbox?" subheadline="We publish practical, no-fluff content on digital growth, conversion optimization, and AI automation." />
  </main>
);

export default Blog;
