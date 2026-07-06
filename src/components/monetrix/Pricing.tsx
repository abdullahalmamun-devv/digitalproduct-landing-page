import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { fetchPricing } from "@/lib/pricing";
import { PricingCard } from "./PricingCard";
import { PricingSkeleton } from "./PricingSkeleton";

export function Pricing() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["pricing"],
    queryFn: fetchPricing,
    staleTime: 5 * 60 * 1000,
  });

  return (
    <section id="pricing" className="relative px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
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

        <div className="mt-14 -mx-4 flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto px-4 pb-6 no-scrollbar md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-5">
          {isLoading || !data
            ? Array.from({ length: 5 }).map((_, i) => <PricingSkeleton key={i} />)
            : data.map((tier, i) => (
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

        <p className="mt-8 text-center text-xs text-muted-foreground">
          ৩০ দিনের মানি-ব্যাক গ্যারান্টি · বিকাশ, নগদ, রকেট, ব্যাংক ট্রান্সফার সাপোর্টেড
        </p>
      </div>
    </section>
  );
}
