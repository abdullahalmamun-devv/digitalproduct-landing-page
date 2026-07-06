import { motion } from "framer-motion";
import { Check, Wallet, Zap, ShieldCheck, CreditCard } from "lucide-react";

const solutions = [
  {
    icon: Wallet,
    title: "৯৫% পর্যন্ত সাশ্রয়",
    desc: "মাসে ৩,০০০ টাকার প্ল্যান পাচ্ছেন মাত্র ২০০-৫০০ টাকায়। বাজেট নিয়ে আর দুশ্চিন্তা নেই।",
  },
  {
    icon: Zap,
    title: "আনলিমিটেড ব্যবহার",
    desc: "কোনো লিমিট নেই, কোনো থ্রটলিং নেই। ইচ্ছামতো প্রম্পট করুন, প্রজেক্ট বানান।",
  },
  {
    icon: ShieldCheck,
    title: "১০০% নিরাপদ ও গ্যারান্টিড",
    desc: "লেজিটিমেট চ্যানেলের মাধ্যমে অ্যাক্টিভেশন। কোনো সমস্যা হলে সাথে সাথে রিফান্ড।",
  },
  {
    icon: CreditCard,
    title: "সহজ লোকাল পেমেন্ট",
    desc: "বিকাশ, নগদ, রকেট, ব্যাংক ট্রান্সফার — যেকোনো উপায়ে পেমেন্ট করুন।",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="relative px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-gradient-brand text-xs font-bold">সমাধান</span>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Monetrix <span className="text-gradient-brand">যেভাবে সমাধান</span> দেয়
          </h2>
          <p className="mt-4 text-muted-foreground">
            প্রতিটা সমস্যার জন্য আমাদের একটা প্রমাণিত সমাধান আছে।
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
                style={{ background: "var(--gradient-brand)" }}
              />
              <div className="bg-brand-gradient relative mb-5 grid h-11 w-11 place-items-center rounded-xl text-white shadow-lg">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="relative text-lg font-bold text-white">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <div className="relative mt-4 flex items-center gap-1.5 text-xs font-semibold text-[color:var(--color-brand-orange)]">
                <Check className="h-3.5 w-3.5" />
                সমস্যার সমাধান
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
