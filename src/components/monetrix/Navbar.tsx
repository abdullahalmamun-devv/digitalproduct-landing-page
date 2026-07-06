import { useEffect, useState } from "react";
import { HeartLogo } from "./HeartLogo";
import { ArrowRight, Menu, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const navLinks = [
  { label: "সমস্যা", href: "#painpoints" },
  { label: "সমাধান", href: "#solutions" },
  { label: "কেন আমরা", href: "#why-us" },
  { label: "সুবিধা", href: "#features" },
  { label: "প্রাইসিং", href: "#pricing" },
  { label: "জিজ্ঞাসা", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/70 backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <HeartLogo className="h-9 w-9" withGlow={scrolled} />
          <span className="text-gradient-brand text-xl font-extrabold tracking-tight">
            Monetrix
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-sm font-semibold text-muted-foreground hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#pricing"
            onClick={(e) => {
              handleClick(e, "#pricing");
              trackEvent("InitiateCheckout", { source: "navbar" });
            }}
            className="bg-brand-gradient flex items-center gap-1.5 rounded-full px-5 py-2.5 text-xs font-bold text-white shadow-lg hover:shadow-[0_0_24px_rgba(255,45,85,0.4)] transition hover:scale-[1.03]"
          >
            এখনই কিনুন
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-white hover:bg-white/10 transition"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bottom-0 z-40 bg-black/95 backdrop-blur-lg flex flex-col p-6 animate-in fade-in slide-in-from-top-5 duration-200">
          <nav className="flex flex-col gap-6 mt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-lg font-bold text-muted-foreground hover:text-white transition-colors py-1.5 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-8">
            <a
              href="#pricing"
              onClick={(e) => {
                handleClick(e, "#pricing");
                trackEvent("InitiateCheckout", { source: "navbar_mobile" });
              }}
              className="bg-brand-gradient flex items-center justify-center gap-2 rounded-xl py-4 text-base font-bold text-white shadow-lg"
            >
              এখনই কিনুন
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
