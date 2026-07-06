import { motion } from "framer-motion";
import { Terminal, ShieldAlert } from "lucide-react";

const pains = [
  {
    code: "ERR_PRICE_OUT_OF_BOUNDS",
    title: "Lovable Pro এর দাম হাতের বাইরে ($২৫/মাস)",
    desc: "মাসে ২৫ ডলার — বাংলাদেশি টাকায় প্রায় ৩,০০০ টাকা। শুধু একটা টুলের জন্য অনেক বেশি।",
  },
  {
    code: "ERR_FREE_PLAN_THROTTLED",
    title: "ফ্রি প্ল্যানে হাত-পা বাঁধা",
    desc: "কয়েকটা মেসেজের পরেই লিমিট শেষ। বড় প্রজেক্ট কমপ্লিট করাই যায় না।",
  },
  {
    code: "ERR_CREDIT_DEPLETED",
    title: "কাজের মাঝে হঠাৎ ক্রেডিট শেষ",
    desc: "কাজের মাঝে হঠাৎ ক্রেডিট শেষ। ক্লায়েন্টের ডেডলাইন মিস হওয়ার ঝুঁকি।",
  },
  {
    code: "ERR_LOCAL_CARD_DECLINED",
    title: "পেমেন্ট গেটওয়ের ঝামেলা",
    desc: "বাংলাদেশ থেকে ইন্টারন্যাশনাল কার্ডে পেমেন্ট করা কঠিন। ডুয়েল কারেন্সি কার্ড দরকার।",
  },
];

export function Painpoints() {
  return (
    <section id="painpoints" className="relative px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-bold text-red-400/90 uppercase tracking-widest">সমস্যা</span>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            এই সমস্যাগুলো <span className="text-red-400">কি চেনা লাগছে</span>?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Lovable ব্যবহার করতে গিয়ে বেশিরভাগ ডেভেলপার এই ঝামেলাগুলোতে পড়েন।
          </p>
        </motion.div>

        {/* Terminal Audit Log Simulator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mt-14 overflow-hidden rounded-3xl border border-red-500/15 bg-black/60 shadow-[0_0_40px_-10px_rgba(239,68,68,0.15)]"
        >
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between border-b border-red-500/10 bg-red-950/10 px-4 py-3">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-500/30" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/30" />
              <span className="h-3 w-3 rounded-full bg-green-500/30" />
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-red-400 font-mono font-bold tracking-wider">
              <Terminal className="h-3 w-3" />
              bash - 4 issues detected
            </div>
            <div className="w-3" />
          </div>

          {/* Terminal Output Content */}
          <div className="p-5 sm:p-6 font-mono text-left bg-black/40">
            <div className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6 border-b border-white/5 pb-4">
              <p className="text-red-400">$ npx audit-lovable-workspace --issues</p>
              <p className="text-gray-500 mt-1">🔍 Scanning lovable.dev project environment...</p>
              <p className="text-red-400/90 font-bold mt-2 flex items-center gap-1.5">
                <ShieldAlert className="h-4 w-4 shrink-0" />
                ⚠️ [CRITICAL WARNING] 4 errors found in current workspace!
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {pains.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative overflow-hidden rounded-2xl border border-red-500/10 bg-red-500/[0.02] p-5 transition-all duration-300 hover:border-red-500/25 hover:bg-red-500/[0.04]"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-[10px] font-bold text-red-500 bg-red-500/10 px-2 py-0.5 rounded font-mono">
                      {p.code}
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-bold text-white group-hover:text-red-300 transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground font-sans">
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

