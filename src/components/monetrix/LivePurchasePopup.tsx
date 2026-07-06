import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const purchases = [
  { name: "রাকিব", initials: "রা", plan: "মাসিক", city: "ঢাকা" },
  { name: "সুমাইয়া", initials: "সু", plan: "লাইফটাইম", city: "চট্টগ্রাম" },
  { name: "আরিফ", initials: "আ", plan: "সাপ্তাহিক", city: "সিলেট" },
  { name: "নুসরাত", initials: "নু", plan: "মাসিক", city: "রাজশাহী" },
  { name: "তানভীর", initials: "তা", plan: "৩ দিন", city: "খুলনা" },
  { name: "ফারজানা", initials: "ফা", plan: "মাসিক", city: "বরিশাল" },
  { name: "শাহরিয়ার", initials: "শা", plan: "লাইফটাইম", city: "ময়মনসিংহ" },
];

const bnDigits = (n: number) => String(n).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);

export function LivePurchasePopup() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const start = setTimeout(() => setVisible(true), 3000);
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % purchases.length);
        setVisible(true);
      }, 500);
    }, 8000);
    return () => {
      clearTimeout(start);
      clearInterval(cycle);
    };
  }, [dismissed]);

  if (dismissed) return null;

  const p = purchases[idx];
  const minutes = ((idx * 3) % 12) + 1;

  return (
    <div className="pointer-events-none fixed bottom-6 left-6 z-50 hidden sm:block">
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="glass-strong pointer-events-auto flex items-center gap-3.5 rounded-2xl p-3 pr-8 shadow-2xl border border-white/10 relative group"
          >
            {/* Pulsing online green dot on avatar */}
            <div className="relative shrink-0">
              <div className="bg-brand-gradient grid h-10 w-10 place-items-center rounded-full text-sm font-bold text-white">
                {p.initials}
              </div>
              <span className="absolute bottom-0 right-0 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500 border border-[#0a0a0a]" />
              </span>
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-bold text-muted-foreground">
                {p.name} · {p.city}
              </p>
              <p className="text-xs font-extrabold text-white mt-0.5">
                {p.plan} প্ল্যান কিনলেন
              </p>
            </div>
            
            <span className="ml-2 rounded bg-white/5 border border-white/5 px-2 py-0.5 text-[9px] font-bold text-muted-foreground font-mono">
              {bnDigits(minutes)}m ago
            </span>

            {/* Close Button on hover */}
            <button
              onClick={() => {
                setVisible(false);
                setDismissed(true);
              }}
              className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 p-1 rounded-full text-muted-foreground hover:text-white transition-opacity duration-200"
            >
              <X className="h-3 w-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

