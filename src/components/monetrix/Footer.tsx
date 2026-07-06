import { HeartLogo } from "./HeartLogo";

export function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-black/60 pt-16 pb-8 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 group">
              <HeartLogo className="h-8 w-8" />
              <span className="text-gradient-brand text-lg font-extrabold tracking-tight">
                Monetrix
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              সাশ্রয়ী দামে Lovable Pro সাবস্ক্রিপশন। আমাদের লক্ষ্য বাংলাদেশের ডেভেলপার ও ফ্রিল্যান্সারদের কম খরচে প্রোডাক্টিভিটি বৃদ্ধি করা।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">দ্রুত লিংক</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="#painpoints"
                  onClick={(e) => handleClick(e, "#painpoints")}
                  className="text-sm text-muted-foreground hover:text-white transition"
                >
                  সমস্যা
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  onClick={(e) => handleClick(e, "#solutions")}
                  className="text-sm text-muted-foreground hover:text-white transition"
                >
                  সমাধান
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  onClick={(e) => handleClick(e, "#features")}
                  className="text-sm text-muted-foreground hover:text-white transition"
                >
                  সুবিধা
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => handleClick(e, "#pricing")}
                  className="text-sm text-muted-foreground hover:text-white transition"
                >
                  প্রাইসিং
                </a>
              </li>
            </ul>
          </div>

          {/* Payment Partner & Support */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">পেমেন্ট মেথড</h4>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {/* bKash badge */}
              <div className="glass rounded-xl px-3 py-1.5 flex items-center justify-center text-[10px] font-bold text-[#E2125B]">
                বিকাশ
              </div>
              {/* Nagad badge */}
              <div className="glass rounded-xl px-3 py-1.5 flex items-center justify-center text-[10px] font-bold text-[#F47022]">
                নগদ
              </div>
              {/* Rocket badge */}
              <div className="glass rounded-xl px-3 py-1.5 flex items-center justify-center text-[10px] font-bold text-[#8C2D88]">
                রকেট
              </div>
              {/* Card badge */}
              <div className="glass rounded-xl px-3 py-1.5 flex items-center justify-center text-[10px] font-bold text-sky-400">
                কার্ড পেমেন্ট
              </div>
            </div>
            <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
              তাৎক্ষণিক অ্যাক্টিভেশন। বাংলাদেশের যেকোনো পেমেন্ট মেথড সাপোর্টেড।
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Monetrix. সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex gap-6">
            <span className="text-[10px] text-muted-foreground">
              এটি lovable.dev এর অফিসিয়াল সার্ভিস নয়। গ্রুপ লাইসেন্সিং ডিসকাউন্ট রিসেলার।
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
