import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function Hero() {
  return (
    <section className="relative px-4 pt-20 pb-16 sm:pt-28 sm:pb-20">
      <div className="mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass mx-auto mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-white"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-brand-orange)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--color-brand-orange)]" />
          </span>
          সীমিত সময়ের অফার · ৯৫% পর্যন্ত ছাড়
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-4xl text-balance font-bold leading-[1.15] tracking-tight"
          style={{ fontSize: "clamp(2.25rem, 6vw, 4.75rem)" }}
        >
          মিনিটেই তৈরি করুন প্রোডাকশন-রেডি অ্যাপ।
          <br className="hidden sm:block" />
          <span className="text-gradient-brand font-extrabold">Lovable Pro</span> পান নামমাত্র দামে।
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          তাৎক্ষণিক অ্যাক্টিভেশন। আনলিমিটেড জেনারেশন। সব প্রো ফিচার আনলক — আসল দামের সামান্য একটা অংশে।
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#pricing"
            onClick={() => trackEvent("InitiateCheckout", { source: "hero_primary" })}
            className="bg-brand-gradient group inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold text-white glow-brand transition hover:scale-[1.03]"
          >
            প্যাকেজ দেখুন
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#features"
            className="glass inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
          >
            <Play className="h-4 w-4" />
            ডেমো দেখুন
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-xs font-medium text-muted-foreground"
        >
          তাৎক্ষণিক ডেলিভারি · ১০,০০০+ সক্রিয় ব্যবহারকারী · ৪.৯/৫ রেটিং
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div
            aria-hidden
            className="absolute -inset-1 rounded-[2rem] opacity-40 blur-2xl"
            style={{ background: "var(--gradient-brand)" }}
          />
          <div className="glass-strong relative overflow-hidden rounded-[2rem] p-2">
            <div className="relative aspect-video w-full overflow-hidden rounded-[1.75rem] bg-black">
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 20%, #ff7d00 0%, transparent 40%), radial-gradient(circle at 70% 80%, #8a2be2 0%, transparent 40%), radial-gradient(circle at 50% 50%, #ff2d55 0%, transparent 30%)",
                }}
              />
              <div className="absolute inset-0 grid place-items-center">
                <button className="group flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition hover:scale-110">
                  <div className="ml-1 h-0 w-0 border-b-[12px] border-l-[20px] border-t-[12px] border-b-transparent border-l-white border-t-transparent" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
