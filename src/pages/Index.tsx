import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyNexon } from "@/components/sections/WhyNexon";
import { BestFitClients } from "@/components/sections/BestFitClients";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CaseStudySlider } from "@/components/sections/CaseStudySlider";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { LeadFormSection } from "@/components/sections/LeadForm";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTABanner } from "@/components/sections/CTABanner";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <WhyNexon />
      <BestFitClients />
      <ProcessTimeline />
      <CaseStudySlider />
      <AboutTeaser />
      <LeadFormSection />
      <FAQAccordion />
      <CTABanner />
    </main>
  );
};

export default Index;
