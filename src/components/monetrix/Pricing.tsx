import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { AlertCircle, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { fetchPricing, type PricingTier } from "@/lib/pricing";
import { PricingCard } from "./PricingCard";
import { PricingSkeleton } from "./PricingSkeleton";
import { useState } from "react";

export function Pricing() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["pricing"],
    queryFn: fetchPricing,
    staleTime: 5 * 60 * 1000,
  });

  const [activeTab, setActiveTab] = useState<"pro" | "trial">("pro");

  const isTrial = (tier: PricingTier) => 
    ["trial-1d", "3d", "weekly"].includes(tier.id) || 
    tier.name.includes("ট্রায়াল") || 
    tier.name.includes("দিন") || 
    tier.name.includes("সাপ্তাহিক") ||
    tier.price < 500;

  const trialTiers = data ? data.filter(tier => isTrial(tier)) : [];
  const proTiers = data ? data.filter(tier => !isTrial(tier)) : [];

  const activeTiers = activeTab === "pro" ? proTiers : trialTiers;

  return (
    <section id="pricing" className="relative px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            আপনার জন্য <span className="text-gradient-brand">সেরা প্ল্যান</span> বেছে নিন
          </h2>
          <p className="mt-4 text-muted-foreground">
            প্রতিটা প্ল্যানে ফুল প্রো অ্যাক্সেস। আপনার কাজের ধরন অনুযায়ী বেছে নিন।
          </p>
        </motion.div>

        {isError && (
          <div className="glass mx-auto mt-10 flex max-w-md items-center justify-between rounded-2xl p-4 text-sm">
            <span className="flex items-center gap-2 text-muted-foreground">
              <AlertCircle className="h-4 w-4 text-destructive" />
              প্রাইসিং লোড করা যায়নি।
            </span>
            <button
              onClick={() => refetch()}
              className="rounded-lg bg-white/10 px-3 py-1.5 text-xs hover:bg-white/15"
            >
              আবার চেষ্টা
            </button>
          </div>
        )}

        {/* Dynamic Tab Switcher */}
        {!isLoading && !isError && data && (
          <div className="mt-10 flex justify-center">
            <div className="relative flex rounded-full bg-white/5 p-1 border border-white/5">
              <button
                onClick={() => setActiveTab("pro")}
                className={`relative rounded-full px-6 py-2.5 text-xs font-bold transition-all duration-300 ${
                  activeTab === "pro" ? "bg-brand-gradient text-white shadow-md" : "text-gray-400 hover:text-white"
                }`}
              >
                প্রো মেম্বারশিপ (Pro Membership)
              </button>
              <button
                onClick={() => setActiveTab("trial")}
                className={`relative rounded-full px-6 py-2.5 text-xs font-bold transition-all duration-300 ${
                  activeTab === "trial" ? "bg-brand-gradient text-white shadow-md" : "text-gray-400 hover:text-white"
                }`}
              >
                শর্ট-টার্ম ট্রায়াল (Trial Plans)
              </button>
            </div>
          </div>
        )}

        {/* Pricing Cards Container */}
        <div
          className={`mt-14 -mx-4 flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto px-4 pb-6 no-scrollbar md:mx-auto md:grid md:overflow-visible md:px-0 md:pb-0 ${
            activeTab === "pro"
              ? "md:grid-cols-2 md:max-w-2xl"
              : "md:grid-cols-3 md:max-w-4xl"
          }`}
        >
          {isLoading || !data
            ? Array.from({ length: activeTab === "pro" ? 2 : 3 }).map((_, i) => <PricingSkeleton key={i} />)
            : activeTiers.map((tier, i) => (
                <PricingCard
                  key={tier.id}
                  tier={tier}
                  index={i}
                  popular={
                    tier.badge?.includes("জনপ্রিয়") ||
                    tier.name.toLowerCase().includes("monthly") ||
                    tier.name.includes("মাসিক")
                  }
                />
              ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10 text-xs text-muted-foreground opacity-90 border-t border-white/5 pt-8">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span>৩০ দিনের রিফান্ড গ্যারান্টি</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-[color:var(--color-brand-orange)]" />
            <span>তাৎক্ষণিক অর্ডার অ্যাক্টিভেশন</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[color:var(--color-brand-pink)]" />
            <span>সব প্রো ফিচার ১০০% আনলকড</span>
          </div>
        </div>
      </div>
    </section>
  );
}

