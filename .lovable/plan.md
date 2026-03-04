
# Nexon Growth — V1 Implementation Plan

## Priority Order
1. Design system + global layout (Navigation, Footer, FloatingWhatsApp, MobileStickyBar)
2. Home page (full, conversion-optimized)
3. Services Hub + 5 individual service pages
4. About page
5. Contact page
6. Portfolio + Blog (structure only, expandable later)

---

## Design System Tokens (index.css)
- Background: `#07080F` (near-black, not pure black — luxurious)
- Surface: `#0D0E1A` (card/glass surfaces)
- Accent Blue: `#3B82F6` (calm electric blue, not neon)
- Accent Cyan: `#22D3EE` (used sparingly)
- Accent Violet: `#8B5CF6` (used for gradients only)
- Text primary: `#F8FAFC`, Text muted: `#94A3B8`
- Gradient glow: subtle radial, used only behind hero + CTA sections
- Font: `Plus Jakarta Sans` via Google Fonts

---

## Package Dependencies to Install
- `framer-motion` — scroll reveals + transitions
- `@react-three/fiber@^8.18` + `three` — hero 3D only
- `@react-three/drei@^9.122.0` — helpers
- `embla-carousel-react` (already installed) — case study slider
- `react-hook-form` + `zod` (already installed) — forms

---

## File Structure
```
src/
  components/
    layout/        Navigation, Footer, FloatingWhatsApp, MobileStickyBar
    sections/      HeroSection, TrustBar, ServicesGrid, WhyNexon, 
                   BestFitClients, ProcessTimeline, CaseStudySlider,
                   AboutTeaser, LeadForm, FAQAccordion, CTABanner
    ui/            (existing shadcn components)
    three/         HeroCanvas (3D scene, isolated)
  pages/
    Index.tsx (Home)
    Services.tsx (Hub)
    ServicePage.tsx (template, receives data props)
    About.tsx
    Contact.tsx
    Portfolio.tsx (structure only)
    Blog.tsx (structure only)
    NotFound.tsx
  data/
    services.ts    (all 5 service page content)
    caseStudies.ts (portfolio sample projects)
    faqs.ts
```

---

## Homepage Sections (in order)

### 1. Hero
- **Headline**: "Turn Clicks Into Clients. Browsers Into Buyers."
- **Subheadline**: Sharp, outcome-focused — digital systems, performance marketing, AI automation
- Layout: Text LEFT (dominant), 3D canvas RIGHT (ambient, not competing)
- CTAs: "Book a Free Strategy Call" (primary filled) + "Get a Proposal" (outline) + WhatsApp inline link
- 3D: Floating geometric particle mesh — calm, slow rotation, subtle glow — degrades to CSS gradient on mobile
- Trust tags below CTAs: "Software Development · Meta & Google Ads · Shopify · AI Automation"

### 2. Trust Bar
- Marquee scroll: service badges + credibility signals ("Outcome-focused" · "You own all assets" · "Strategy before execution" · "No retainer traps")

### 3. Services Overview
- 6 cards in responsive grid — icon, name, 1-line pain-point copy, arrow link
- CSS hover depth tilt (no Three.js)

### 4. Why Nexon Growth
- 4 columns: "Systems-First" / "Full-Stack Execution" / "Direct Communication" / "You Own Everything"
- Each with icon + 2-line explanation

### 5. Who We Work With
- 4 client profile cards: Ecommerce brand / SaaS startup / Service business / Ambitious SME
- Visual card with short description + "Sound like you? →" link to contact

### 6. Process Timeline
- Animated 5-step: Discover → Strategize → Build → Launch → Scale
- Framer Motion connector line draws in on scroll

### 7. Case Studies Slider
- Embla carousel, 4 cards: Challenge / Solution / Outcome / "Want something similar?"
- 6 sample projects (no fake metrics, qualitative outcomes only)

### 8. About Teaser
- Brief founder/agency positioning + "Learn Our Story →" link

### 9. Lead Form Section
- "Get Your Free Proposal" — polished dark form
- Fields: Name, Business Name, Email, Phone, Service (select), Budget Range (select), Timeline (select), Message
- Premium feel: floating labels or clean labeled inputs, custom styled selects

### 10. FAQ Accordion
- 8 objection-handling questions

### 11. Final CTA Banner
- Full-width gradient section: bold headline + "Book a Call" button

### 12. Footer
- Logo, nav links, services list, contact info, WhatsApp, social placeholders, copyright

---

## Service Pages (Template-driven)
All 5 use `ServicePageTemplate.tsx` with data injected from `services.ts`:
1. Hero (headline + pain point)
2. Problem / Solution split
3. What's Included (icon list)
4. Process (3–4 steps)
5. Industries Served
6. Key Benefits (outcome copy)
7. Mini FAQ
8. Inline CTA + condensed lead form

URLs: `/services/web-development`, `/services/app-development`, `/services/digital-marketing`, `/services/shopify-ecommerce`, `/services/ai-automation`

---

## About Page
1. Bold opening statement
2. Our Story (premium copy, no overclaiming)
3. What Makes Us Different (3 pillars)
4. Our Approach (systems + strategy mindset)
5. CTA: "Let's Build Together"

---

## Contact Page
1. Intro headline: "Let's Build Something That Grows"
2. Full lead form (same fields as homepage form, shared component)
3. Calendly section (embed placeholder / styled booking CTA)
4. WhatsApp + email cards

---

## Portfolio & Blog (V1 Lite)
- `/portfolio` — grid structure with 6 sample cards, filterable tabs (All/Web/Marketing/AI/Ecommerce) — full design, placeholder content
- `/blog` — card grid layout, 6 placeholder articles — ready for real content, no full articles yet

---

## Global Conversion Elements
| Element | Behavior |
|---|---|
| Navigation | "Book a Call" button always visible, frosted glass on scroll |
| Floating WhatsApp | Fixed bottom-right on all pages |
| Mobile Sticky Bar | Fixed bottom bar: "Book a Call" + "WhatsApp" — mobile only, hides on desktop |
| Mid-page CTA strips | After services section + after case studies |
| Every service page | Ends with inline form |

---

## Animation Rules
- Framer Motion `whileInView` + `initial={{ opacity: 0, y: 24 }}` → `animate={{ opacity: 1, y: 0 }}` — all section entrances
- Stagger children on grids (0.08s delay per card)
- Process timeline: SVG connector draws in with `pathLength` animation
- 3D hero: ambient only, ~0.3 RPM rotation, subtle mouse parallax
- **No** bounce, elastic, or dramatic easing — `easeOut` only
- Hover states: subtle scale (1.02), border glow color shift only
- Mobile: all 3D disabled, CSS gradient replaces canvas

---

## Copy Principles (enforced throughout)
- Zero fake metrics (no "50+ clients", "3x ROI")
- Headlines: outcome-focused, sharp, punchy (not generic)
- Body: direct, professional, persuasive — not robotic
- CTAs: action verbs + outcome ("Book a Free Strategy Call" not "Submit")
- Service pages: lead with pain points before solutions
