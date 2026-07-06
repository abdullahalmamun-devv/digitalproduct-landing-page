import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

  useEffect(() => {
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
  }, []);

  const p = purchases[idx];
  const minutes = ((idx * 3) % 12) + 1;

  return (
    <div className="pointer-events-none fixed bottom-6 left-6 z-30 hidden sm:block">
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="glass-strong pointer-events-auto flex items-center gap-3 rounded-2xl p-3 pr-4 shadow-2xl"
          >
            <div className="bg-brand-gradient grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold text-white">
              {p.initials}
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-medium text-muted-foreground">
                {p.name} · {p.city}
              </p>
              <p className="text-sm font-bold text-white">
                {p.plan} প্ল্যান কিনলেন
              </p>
            </div>
            <span className="ml-2 rounded-md bg-black/40 px-2 py-1 text-[10px] font-semibold text-muted-foreground">
              {bnDigits(minutes)} মিনিট আগে
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
