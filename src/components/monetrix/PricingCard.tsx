import { Check } from "lucide-react";
import type { PricingTier } from "@/lib/pricing";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const DOT_COLORS = ["#ff7d00", "#ff5580", "#ff2d55", "#c43ac7", "#8a2be2"];

const bnDigits = (n: number | string) =>
  String(n).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);

const formatPrice = (n: number) =>
  bnDigits(new Intl.NumberFormat("en-IN").format(n));

export function PricingCard({
  tier,
  popular,
  index = 0,
}: {
  tier: PricingTier;
  popular: boolean;
  index?: number;
}) {
  const savings = Math.max(0, Math.round(100 - (tier.price / tier.originalPrice) * 100));
  const dot = DOT_COLORS[index % DOT_COLORS.length];
  const cur = tier.currency === "BDT" ? "৳" : "$";

  const getPlanTag = (id: string) => {
    switch (id) {
      case "trial-1d": return "টেস্ট ড্রাইভ";
      case "3d": return "জনপ্রিয় ট্রায়াল";
      case "weekly": return "স্মার্ট চয়েস";
      case "monthly": return "সেরা ভ্যালু";
      case "lifetime": return "আজীবন সাশ্রয়";
      default: return "";
    }
  };

  const tag = getPlanTag(tier.id);

  if (popular) {
    return (
      <div className="group relative min-w-[280px] shrink-0 snap-center md:min-w-0">
        <div
          aria-hidden
          className="bg-brand-gradient animate-border-rainbow absolute -inset-[1px] rounded-[26px] opacity-65 blur-[3px] transition duration-500 group-hover:opacity-100 group-hover:blur-[6px]"
        />
        <div className="relative flex h-full flex-col rounded-3xl border border-white/20 bg-[#0c0c0d] p-8 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(255,45,85,0.15)]">
          <div className="bg-brand-gradient-warm absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3.5 py-1 text-[10px] font-extrabold text-white shadow-lg uppercase tracking-wider animate-pulse">
            সবচেয়ে জনপ্রিয়
          </div>

          <div className="flex items-baseline justify-between">
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-extrabold text-white">{tier.name}</h3>
              {tag && (
                <span className="rounded bg-brand-gradient/10 border border-brand-pink/20 px-1.5 py-0.5 text-[9px] font-bold text-[color:var(--color-brand-pink)]">
                  {tag}
                </span>
              )}
            </div>
            {savings > 0 && (
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white">
                -{bnDigits(savings)}%
              </span>
            )}
          </div>

          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-white">
              {cur}{formatPrice(tier.price)}
            </span>
            {tier.originalPrice > tier.price && (
              <span className="text-sm text-muted-foreground line-through">
                {cur}{formatPrice(tier.originalPrice)}
              </span>
            )}
          </div>

          <ul className="mt-6 space-y-3 flex-1">
            {tier.features.map((f, i) => (
              <li key={f} className="flex items-start gap-2 text-sm font-medium text-gray-300">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0"
                  style={{ color: DOT_COLORS[i % DOT_COLORS.length] }}
                />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <a
            href={tier.ctaUrl}
            data-event="purchase_intent"
            data-tier={tier.id}
            onClick={() =>
              trackEvent("InitiateCheckout", {
                tier_id: tier.id,
                tier_name: tier.name,
                value: tier.price,
                currency: tier.currency,
              })
            }
            className="bg-brand-gradient-warm mt-8 flex items-center justify-center rounded-xl py-4 text-sm font-bold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(255,125,0,0.45)]"
          >
            এখনই কিনুন
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="group flex min-w-[280px] shrink-0 snap-center flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/20 hover:scale-[1.02] hover:-translate-y-1 hover:bg-white/[0.04] md:min-w-0">
      <div>
        <div className="flex items-baseline justify-between">
          <div className="flex items-center gap-1.5">
            <h3 className="text-sm font-bold text-gray-300">{tier.name}</h3>
            {tag && (
              <span className="rounded bg-white/5 border border-white/5 px-1.5 py-0.5 text-[9px] font-semibold text-muted-foreground">
                {tag}
              </span>
            )}
          </div>
          {savings > 0 && (
            <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
              -{bnDigits(savings)}%
            </span>
          )}
        </div>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-3xl font-extrabold text-white">
            {cur}{formatPrice(tier.price)}
          </span>
          {tier.originalPrice > tier.price && (
            <span className="text-xs text-muted-foreground line-through">
              {cur}{formatPrice(tier.originalPrice)}
            </span>
          )}
        </div>

        <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
          {tier.features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span
                className={cn("mt-1.5 h-1 w-1 shrink-0 rounded-full")}
                style={{ backgroundColor: dot }}
              />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={tier.ctaUrl}
        data-event="purchase_intent"
        data-tier={tier.id}
        onClick={() =>
          trackEvent("InitiateCheckout", {
            tier_id: tier.id,
            tier_name: tier.name,
            value: tier.price,
            currency: tier.currency,
          })
        }
        className="mt-8 flex items-center justify-center rounded-xl bg-white/5 py-3.5 text-sm font-bold text-white transition hover:bg-white/10 hover:text-white"
      >
        এখনই কিনুন
      </a>
    </div>
  );
}

