import { useEffect, useState } from "react";

// Rolls at midnight local time — a fresh 24h countdown daily.
function nextMidnight() {
  const d = new Date();
  d.setHours(24, 0, 0, 0);
  return d.getTime();
}

const bnDigits = (n: number) =>
  String(n).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);

export function CountdownTimer({ className = "" }: { className?: string }) {
  const [target, setTarget] = useState(nextMidnight);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => {
      const cur = Date.now();
      if (cur >= target) setTarget(nextMidnight());
      setNow(cur);
    }, 1000);
    return () => clearInterval(t);
  }, [target]);

  const diff = Math.max(0, target - now);
  const h = Math.floor(diff / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const s = Math.floor((diff % 60_000) / 1000);

  const Unit = ({ v, label }: { v: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="glass-strong min-w-[3.25rem] rounded-xl px-2 py-2 text-center font-bold text-white tabular-nums text-2xl leading-none sm:text-3xl">
        {bnDigits(v).padStart(2, "০")}
      </div>
      <span className="mt-1.5 text-[10px] font-medium text-muted-foreground">{label}</span>
    </div>
  );

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Unit v={h} label="ঘণ্টা" />
      <span className="text-xl font-bold text-muted-foreground pb-4">:</span>
      <Unit v={m} label="মিনিট" />
      <span className="text-xl font-bold text-muted-foreground pb-4">:</span>
      <Unit v={s} label="সেকেন্ড" />
    </div>
  );
}
