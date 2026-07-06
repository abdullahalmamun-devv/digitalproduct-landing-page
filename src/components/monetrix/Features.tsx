import { motion } from "framer-motion";
import { Zap, Rocket, Infinity as InfinityIcon, Headphones } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "তাৎক্ষণিক ডেলিভারি",
    desc: "পেমেন্ট কনফার্ম হওয়ার সাথে সাথেই অ্যাক্টিভেশন। কোনো অপেক্ষা নেই।",
    color: "#ff7d00",
  },
  {
    icon: Rocket,
    title: "হাই-স্পিড জেনারেশন",
    desc: "ফুল প্রো কম্পিউট — দ্রুত বিল্ড, রিচ প্রম্পট, কোনো থ্রটলিং নেই।",
    color: "#ff2d55",
  },
  {
    icon: InfinityIcon,
    title: "কোনো লিমিট নেই",
    desc: "যত ইচ্ছা প্রজেক্ট, যত ইচ্ছা জেনারেশন — সবকিছু আনলিমিটেড।",
    color: "#c43ac7",
  },
  {
    icon: Headphones,
    title: "প্রিমিয়াম সাপোর্ট",
    desc: "২৪/৭ প্রায়োরিটি চ্যাট সাপোর্ট। যেকোনো সমস্যায় সাথে আছি।",
    color: "#8a2be2",
  },
];

export function Features() {
  return (
    <section id="features" className="relative px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            <span className="text-gradient-brand">Lovable Pro</span> এ যা যা পাচ্ছেন
          </h2>
          <p className="mt-4 text-muted-foreground">
            সব প্রিমিয়াম ফিচার — কোনো প্রিমিয়াম দাম ছাড়াই।
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                style={{ backgroundColor: f.color }}
              />
              <div
                className="relative mb-5 grid h-11 w-11 place-items-center rounded-xl"
                style={{ backgroundColor: `${f.color}20`, color: f.color }}
              >
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="relative text-lg font-bold">{f.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
