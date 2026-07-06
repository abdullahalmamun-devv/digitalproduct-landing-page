import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    initials: "রা",
    name: "রাকিব আহমেদ",
    role: "ফ্রিল্যান্স ডেভেলপার, ঢাকা",
    quote: "মাসে ৩,০০০ টাকা খরচ কমে গেছে। এখন ক্লায়েন্টের কাজ আরও দ্রুত ডেলিভার করতে পারছি।",
  },
  {
    initials: "সু",
    name: "সুমাইয়া ইসলাম",
    role: "স্টার্টআপ ফাউন্ডার",
    quote: "আমাদের MVP মাত্র ২ সপ্তাহে লঞ্চ করেছি। Lovable Pro না থাকলে এটা কখনোই সম্ভব হতো না।",
    highlight: true,
  },
  {
    initials: "শা",
    name: "শাহরিয়ার কবির",
    role: "এজেন্সি ওনার, চট্টগ্রাম",
    quote: "টিমের সবাইকে অ্যাক্সেস দিয়েছি। প্রোডাক্টিভিটি ডাবল হয়ে গেছে। রেকমেন্ডেড।",
  },
];

export function Testimonials() {
  return (
    <section className="relative px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            যারা ব্যবহার করছেন, <span className="text-gradient-brand">তারাই বলছেন</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >
              {t.highlight && (
                <div
                  aria-hidden
                  className="absolute -inset-0.5 rounded-[26px] opacity-40 blur-md"
                  style={{ background: "var(--gradient-brand)" }}
                />
              )}
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-7 ${
                  t.highlight
                    ? "border-white/20 bg-[#111]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <div
                  aria-hidden
                  className="text-gradient-brand absolute right-5 top-2 select-none font-serif text-7xl leading-none opacity-30"
                >
                  "
                </div>
                <div className="flex items-center gap-1 text-[color:var(--color-brand-orange)]">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="relative mt-4 flex-1 text-base leading-relaxed text-white">
                  {t.quote}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="bg-brand-gradient grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
