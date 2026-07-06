import { motion } from "framer-motion";
import { AlertTriangle, DollarSign, Clock, Ban } from "lucide-react";

const pains = [
  {
    icon: DollarSign,
    title: "Lovable Pro এর দাম হাতের বাইরে",
    desc: "মাসে ২৫ ডলার — বাংলাদেশি টাকায় প্রায় ৩,০০০ টাকা। শুধু একটা টুলের জন্য অনেক বেশি।",
  },
  {
    icon: Ban,
    title: "ফ্রি প্ল্যানে হাত-পা বাঁধা",
    desc: "কয়েকটা মেসেজের পরেই লিমিট শেষ। বড় প্রজেক্ট কমপ্লিট করাই যায় না।",
  },
  {
    icon: Clock,
    title: "ক্রেডিট শেষ হলে সব থেমে যায়",
    desc: "কাজের মাঝে হঠাৎ ক্রেডিট শেষ। ক্লায়েন্টের ডেডলাইন মিস হওয়ার ঝুঁকি।",
  },
  {
    icon: AlertTriangle,
    title: "পেমেন্ট গেটওয়ের ঝামেলা",
    desc: "বাংলাদেশ থেকে ইন্টারন্যাশনাল কার্ডে পেমেন্ট করা কঠিন। ডুয়েল কারেন্সি কার্ড দরকার।",
  },
];

export function Painpoints() {
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
          <span className="text-xs font-bold text-red-400/90">সমস্যা</span>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            এই সমস্যাগুলো <span className="text-red-400">কি চেনা লাগছে</span>?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Lovable ব্যবহার করতে গিয়ে বেশিরভাগ ডেভেলপার এই ঝামেলাগুলোতে পড়েন।
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-red-500/15 bg-red-500/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30"
            >
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-red-500/15 text-red-400">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
