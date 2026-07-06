import { motion } from "framer-motion";

const stats = [
  { value: "৯৫%", label: "খরচ কমান", sub: "আসল দামের তুলনায়" },
  { value: "১০,০০০+", label: "সক্রিয় ব্যবহারকারী", sub: "সারা বাংলাদেশ জুড়ে" },
  { value: "২৪/৭", label: "প্রিমিয়াম সাপোর্ট", sub: "যেকোনো সময় চ্যাট করুন" },
];

export function WhyYouNeed() {
  return (
    <section id="why-us" className="relative px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            কেন <span className="text-gradient-brand">আপনার এটা দরকার</span>?
          </h2>
          <p className="mt-4 text-muted-foreground">
            ফ্রিল্যান্সার, এজেন্সি অথবা স্টার্টআপ ফাউন্ডার — সবাই Monetrix বেছে নিচ্ছেন একটাই কারণে: <span className="text-white font-semibold">রেজাল্ট।</span>
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center"
            >
              <div
                aria-hidden
                className="absolute -inset-x-10 -top-16 h-32 opacity-30 blur-3xl"
                style={{ background: "var(--gradient-brand)" }}
              />
              <div
                className="text-gradient-brand relative font-extrabold leading-none"
                style={{ fontSize: "clamp(3rem, 7vw, 5rem)" }}
              >
                {s.value}
              </div>
              <p className="relative mt-4 text-lg font-bold text-white">{s.label}</p>
              <p className="relative mt-1 text-sm text-muted-foreground">{s.sub}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-12 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center sm:p-8"
        >
          <p className="text-lg leading-relaxed text-white sm:text-xl">
            <span className="text-gradient-brand font-bold">যদি আপনি ডেভেলপার হন</span> — Lovable Pro আপনার দৈনন্দিন কাজ ৫x দ্রুত করবে। মাসে হাজার টাকা বাঁচবে, ঘণ্টার পর ঘণ্টা সময় বাঁচবে।
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            এই দামে এই সুযোগ — আজকেই না নিলে, হয়তো আর কখনো পাবেন না।
          </p>
        </motion.div>
      </div>
    </section>
  );
}
