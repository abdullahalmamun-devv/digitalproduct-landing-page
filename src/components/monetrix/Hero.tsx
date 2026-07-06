import { motion } from "framer-motion";
import { ArrowRight, Play, Loader2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { useState, useEffect } from "react";

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


        {/* Lovable Workspace Simulator */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          {/* Outer glow */}
          <div
            aria-hidden
            className="absolute -inset-1.5 rounded-[2rem] opacity-35 blur-3xl animate-float-medium"
            style={{ background: "var(--gradient-brand)" }}
          />

          <div className="glass-strong relative overflow-hidden rounded-3xl p-1.5 shadow-[0_0_50px_-10px_rgba(255,45,85,0.25)]">
            {/* Browser top-bar */}
            <div className="flex items-center justify-between border-b border-white/5 bg-black/60 px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="flex max-w-md flex-1 items-center justify-center rounded-lg bg-white/5 py-1 text-[11px] text-muted-foreground font-mono">
                lovable.app/editor/monetrix-payment-flow
              </div>
              <div className="h-3 w-3 opacity-0" />
            </div>

            {/* Editor Workspace Mockup */}
            <div className="grid grid-cols-1 md:grid-cols-3 bg-[#0a0a0a] min-h-[380px]">
              {/* Left Column: AI Assistant Chat */}
              <div className="border-r border-white/5 p-4 flex flex-col justify-between bg-black/40">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                    <div className="bg-brand-gradient flex h-5 w-5 items-center justify-center rounded text-[9px] font-bold text-white">L</div>
                    <span className="text-xs font-bold text-white">Lovable AI</span>
                    <span className="rounded bg-white/10 px-1 py-0.5 text-[8px] text-muted-foreground uppercase">Active</span>
                  </div>

                  {/* Messages container */}
                  <div className="space-y-3.5 text-left">
                    <div className="rounded-2xl bg-white/5 p-3">
                      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">You</p>
                      <p className="mt-1 text-xs text-white">"বাংলাদেশি বিকাশ এবং নগদের জন্য একটি গ্লয়িং পেমেন্ট গেটওয়ে কার্ড তৈরি কর।"</p>
                    </div>

                    <WorkspaceChatBubble />
                  </div>
                </div>

                {/* Input mock */}
                <div className="mt-4 flex items-center justify-between rounded-xl bg-white/5 p-2 text-xs border border-white/5">
                  <span className="text-muted-foreground">বিকাশ পেমেন্ট বোতাম যোগ করো...</span>
                  <button className="bg-brand-gradient rounded-lg px-3 py-1.5 text-[10px] font-bold text-white">প্রম্পট</button>
                </div>
              </div>

              {/* Right Columns: Live App Canvas Preview */}
              <div className="col-span-2 p-6 flex flex-col justify-center items-center bg-[#070707] relative overflow-hidden">
                <div className="absolute top-3 left-4 flex items-center gap-2 text-[10px] font-bold text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  PREVIEW CANVAS
                </div>

                <WorkspacePreviewCanvas />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Partners Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-20 max-w-4xl text-center"
        >
          <p className="text-xs font-bold tracking-wider uppercase text-muted-foreground/60">
            ১০,০০০+ ডেভেলপার ও ফ্রিল্যান্সারদের বিশ্বস্ত সঙ্গী
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-55">
            <span className="text-lg font-extrabold text-white font-mono hover:opacity-100 transition">Vercel</span>
            <span className="text-lg font-extrabold text-white font-mono hover:opacity-100 transition">Stripe</span>
            <span className="text-lg font-extrabold text-white font-mono hover:opacity-100 transition">Supabase</span>
            <span className="text-lg font-extrabold text-white font-mono hover:opacity-100 transition">GitHub</span>
            <span className="text-lg font-extrabold text-white font-mono hover:opacity-100 transition">Figma</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Subcomponents to handle dynamic workspace rendering

function WorkspaceChatBubble() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setStep((s) => (s + 1) % 3);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  if (step === 0) {
    return (
      <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-3 flex items-center gap-2.5">
        <Loader2 className="h-3.5 w-3.5 text-[color:var(--color-brand-pink)] animate-spin" />
        <span className="text-xs text-muted-foreground">কোড জেনারেট হচ্ছে...</span>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-[#ff2d55]/10 border border-[#ff2d55]/20 p-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <p className="text-[10px] text-[color:var(--color-brand-pink)] uppercase font-bold tracking-wider">Lovable AI</p>
      <p className="mt-1 text-xs text-gray-200">
        "অবশ্যই! একটি রেসপন্সিভ গ্লাস কার্ড এবং বিকাশ/নগদ পেমেন্ট চ্যানেল মডিউল তৈরি করেছি।"
      </p>
    </div>
  );
}

function WorkspacePreviewCanvas() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setStep((s) => (s + 1) % 3);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  if (step === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center animate-pulse">
        <Loader2 className="h-10 w-10 text-muted-foreground animate-spin mb-4" />
        <span className="text-xs text-muted-foreground font-mono">RENDERING IN REALTIME...</span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm rounded-2xl glass-strong p-6 text-left border border-white/10 shadow-2xl animate-in scale-in duration-300">
      <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
        <div>
          <h4 className="text-sm font-bold text-white">Monetrix Checkout</h4>
          <p className="text-[10px] text-muted-foreground">বিকাশ / নগদ পেমেন্ট মডিউল</p>
        </div>
        <span className="text-xs font-bold text-[color:var(--color-brand-orange)]">BDT ৪৯৯</span>
      </div>

      <div className="space-y-3.5">
        {/* bKash select button */}
        <button className="w-full flex items-center justify-between rounded-xl bg-[#E2125B]/10 hover:bg-[#E2125B]/20 border border-[#E2125B]/20 p-3.5 text-xs text-white font-bold transition shadow-inner">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#E2125B] animate-ping" />
            বিকাশ (bKash) পেমেন্ট
          </div>
          <span>৳</span>
        </button>

        {/* Nagad select button */}
        <button className="w-full flex items-center justify-between rounded-xl bg-[#F47022]/5 hover:bg-[#F47022]/10 border border-white/5 p-3.5 text-xs text-gray-300 transition">
          <span>নগদ (Nagad) পেমেন্ট</span>
          <span>৳</span>
        </button>
      </div>

      <button className="bg-brand-gradient w-full mt-6 rounded-xl py-3.5 text-xs font-bold text-white glow-brand transition active:scale-[0.98]">
        পেমেন্ট কনফার্ম করুন
      </button>
    </div>
  );
}

