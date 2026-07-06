import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/monetrix/Hero";
import { FomoStrip } from "@/components/monetrix/FomoStrip";
import { Painpoints } from "@/components/monetrix/Painpoints";
import { Solutions } from "@/components/monetrix/Solutions";
import { WhyYouNeed } from "@/components/monetrix/WhyYouNeed";
import { Features } from "@/components/monetrix/Features";
import { Pricing } from "@/components/monetrix/Pricing";
import { Testimonials } from "@/components/monetrix/Testimonials";
import { FAQ } from "@/components/monetrix/FAQ";
import { FinalCTA } from "@/components/monetrix/FinalCTA";
import { StickyMobileCTA } from "@/components/monetrix/StickyMobileCTA";
import { LivePurchasePopup } from "@/components/monetrix/LivePurchasePopup";
import { BackgroundGlows } from "@/components/monetrix/BackgroundGlows";
import { GrainOverlay } from "@/components/monetrix/GrainOverlay";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundGlows />
      <GrainOverlay />
      <main className="relative z-[2]">
        <Hero />
        <FomoStrip />
        <Painpoints />
        <Solutions />
        <WhyYouNeed />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <StickyMobileCTA />
      <LivePurchasePopup />
    </div>
  );
}
