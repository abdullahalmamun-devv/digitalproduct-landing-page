export type PricingTier = {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  currency: string;
  features: string[];
  badge?: string;
  ctaUrl: string;
};

export const PRICING_ENDPOINT = "https://api.monetrix.com/v1/pricing";

const FALLBACK_TIERS: PricingTier[] = [
  {
    id: "trial-1d",
    name: "১ দিনের ট্রায়াল",
    price: 99,
    originalPrice: 500,
    currency: "BDT",
    features: ["২৪ ঘণ্টা অ্যাক্সেস", "ফুল প্রো ফিচার", "তাৎক্ষণিক ডেলিভারি", "ইমেইল সাপোর্ট"],
    ctaUrl: "#",
  },
  {
    id: "3d",
    name: "৩ দিন",
    price: 199,
    originalPrice: 1500,
    currency: "BDT",
    features: ["৩ দিন অ্যাক্সেস", "ফুল প্রো ফিচার", "প্রায়োরিটি ডেলিভারি", "ইমেইল সাপোর্ট"],
    ctaUrl: "#",
  },
  {
    id: "weekly",
    name: "সাপ্তাহিক",
    price: 399,
    originalPrice: 3500,
    currency: "BDT",
    features: ["৭ দিন অ্যাক্সেস", "ফুল প্রো ফিচার", "প্রায়োরিটি ডেলিভারি", "চ্যাট সাপোর্ট"],
    ctaUrl: "#",
  },
  {
    id: "monthly",
    name: "মাসিক",
    price: 999,
    originalPrice: 15000,
    currency: "BDT",
    features: [
      "৩০ দিন অ্যাক্সেস",
      "আনলিমিটেড জেনারেশন",
      "তাৎক্ষণিক অ্যাক্টিভেশন",
      "প্রায়োরিটি চ্যাট সাপোর্ট",
      "আর্লি ফিচার অ্যাক্সেস",
    ],
    badge: "সবচেয়ে জনপ্রিয়",
    ctaUrl: "#",
  },
  {
    id: "lifetime",
    name: "লাইফটাইম",
    price: 4999,
    originalPrice: 180000,
    currency: "BDT",
    features: [
      "আজীবন অ্যাক্সেস",
      "সব ভবিষ্যৎ আপডেট",
      "আনলিমিটেড সবকিছু",
      "VIP চ্যাট সাপোর্ট",
      "একবার পে করুন",
    ],
    ctaUrl: "#",
  },
];

export async function fetchPricing(): Promise<PricingTier[]> {
  try {
    const res = await fetch(PRICING_ENDPOINT, {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = (await res.json()) as { tiers?: PricingTier[] };
    if (!data?.tiers?.length) throw new Error("Empty pricing response");
    return data.tiers;
  } catch {
    return FALLBACK_TIERS;
  }
}
