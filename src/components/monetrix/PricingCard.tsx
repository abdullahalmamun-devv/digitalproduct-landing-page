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

  if (popular) {
    return (
      <div className="group relative min-w-[280px] shrink-0 snap-center md:min-w-0">
        <div
          aria-hidden
          className="absolute -inset-0.5 rounded-[26px] opacity-60 blur-md transition duration-500 group-hover:opacity-100"
          style={{ background: "var(--gradient-brand)" }}
        />
        <div className="relative flex h-full flex-col rounded-3xl border border-white/20 bg-[#111] p-8 transition-transform duration-300 group-hover:-translate-y-2">
          <div className="bg-brand-gradient-warm absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-bold text-white shadow-lg">
            সবচেয়ে জনপ্রিয়
          </div>

          <div className="flex items-baseline justify-between">
            <h3 className="text-sm font-bold text-white">{tier.name}</h3>
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

          <ul className="mt-6 space-y-3">
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
            className="bg-brand-gradient-warm mt-8 flex items-center justify-center rounded-xl py-4 text-sm font-bold text-white shadow-lg transition hover:shadow-[0_0_24px_rgba(255,125,0,0.45)]"
          >
            এখনই কিনুন
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="group flex min-w-[280px] shrink-0 snap-center flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-white/20 md:min-w-0">
      <div>
        <div className="flex items-baseline justify-between">
          <h3 className="text-sm font-semibold text-muted-foreground">{tier.name}</h3>
          {savings > 0 && (
            <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
              -{bnDigits(savings)}%
            </span>
          )}
        </div>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-3xl font-bold text-white">
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
        className="mt-8 flex items-center justify-center rounded-xl bg-white/5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
      >
        এখনই কিনুন
      </a>
    </div>
  );
}
