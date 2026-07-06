import { motion } from "framer-motion";
import { ArrowRight, Flame } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { CountdownTimer } from "./CountdownTimer";

export function FinalCTA() {
  return (
    <section className="relative px-4 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-5xl"
      >
        <div className="relative overflow-hidden rounded-[2rem]">
          <div
            aria-hidden
            className="bg-brand-gradient absolute inset-0"
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.3) 0%, transparent 40%)",
            }}
          />
          <div className="relative flex flex-col items-center px-6 py-16 text-center sm:px-12 sm:py-20">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/25 px-4 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
              <Flame className="h-3.5 w-3.5" />
              অফার শেষ হতে চলেছে
            </div>

            <h2
              className="mt-6 max-w-3xl font-extrabold leading-[1.1] tracking-tight text-white"
              style={{ fontSize: "clamp(2rem, 6vw, 3.75rem)" }}
            >
              আজই শুরু করুন —<br />
              অফার শেষ হওয়ার আগে।
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              এই দামে পরের বার আর নাও পেতে পারেন। এখনই নিজের প্ল্যান বেছে নিন।
            </p>

            <div className="mt-8">
              <CountdownTimer />
            </div>

            <a
              href="#pricing"
              onClick={() => trackEvent("InitiateCheckout", { source: "final_cta" })}
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-black shadow-2xl transition hover:scale-105"
            >
              এখনই কিনুন
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <p className="mt-4 text-xs font-medium text-white/80">
              ৩০ দিনের মানি-ব্যাক গ্যারান্টি · তাৎক্ষণিক ডেলিভারি
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
