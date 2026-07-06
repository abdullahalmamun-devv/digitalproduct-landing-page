# Monetrix — Bangla Redesign (Sales-Focused)

Convert the landing page to full Bangla using Hind Siliguri, strip the navbar and hero logo, and add conversion-driving sections. Repositioned as an embeddable section pack for a larger full-stack site (no top nav needed).

## Removals
- **Navbar** — deleted from route (used inside another site's own shell).
- **Heart logo at top of Hero** — Hero opens directly with the FOMO badge + headline.
- **Footer** — also removed (parent site owns chrome). Live purchase popup + sticky mobile CTA stay.

## Typography
- Load **Hind Siliguri** (weights 400/500/600/700) via `<link>` in `__root.tsx` head.
- Set `--font-sans: "Hind Siliguri", ...` in `src/styles.css`.
- Update root `<html lang="bn">`.
- Composition rules: hero headline ~clamp(2.5rem, 8vw, 5.5rem), tighter line-height (1.1), section headings 3-4xl, generous letter-spacing on badges/eyebrows (Bangla reads better with slight tracking on small caps-style labels but no uppercase transform since Bangla has no case — use color + weight + size instead of `uppercase`).

## New Section Order
1. **Hero** — FOMO countdown badge, gradient Bangla headline, subhead, dual CTA, demo video placeholder.
2. **FOMO / Urgency strip** — live seat counter, countdown timer (24h rolling), "only X slots left today" — animated.
3. **Painpoint section** — "এই সমস্যাগুলো কি চেনা লাগছে?" — 4 pain cards with red/warning-tinted icons (rate limits, high cost, slow builds, credit exhaustion).
4. **How we help section** — "মনিট্রিক্স যেভাবে সমাধান দেয়" — mirrors painpoints, gradient-tinted checkmark cards showing the fix for each pain.
5. **Why you need this** — "কেন আপনার এটা দরকার?" — 3 large value props with big numbers/stats (95% সাশ্রয়, ১০,০০০+ ব্যবহারকারী, ২৪/৭ সাপোর্ট).
6. **Features grid** — existing 4 features, translated.
7. **Pricing** — existing dynamic 5-tier, all copy translated. "Most Popular" badge → "সবচেয়ে জনপ্রিয়". Buy Now → "এখনই কিনুন".
8. **Social proof / testimonials** — 3 short Bangla testimonial cards (glass, avatar initials, gradient border on one).
9. **FAQ** — 6 Q&As translated to Bangla.
10. **Final CTA band** — full-width gradient panel: "আজই শুরু করুন — অফার শেষ হওয়ার আগে" + big Buy button + countdown.

## Bangla Copy Highlights (finalized in build)
- Hero H1: "মিনিটেই তৈরি করুন প্রোডাকশন-রেডি অ্যাপ। **Lovable Pro** পান নামমাত্র দামে।" (English "Lovable Pro" kept as brand name in gradient.)
- Hero sub: "তাৎক্ষণিক অ্যাক্টিভেশন। আনলিমিটেড জেনারেশন। সব প্রো ফিচার আনলক — আসল দামের ভগ্নাংশে।"
- Primary CTA: "প্যাকেজ দেখুন" / Secondary: "ডেমো দেখুন"
- FOMO badge: "🔥 সীমিত সময়ের অফার — ৯৫% পর্যন্ত ছাড়"

## Premium / Aesthetic Polish
- Add subtle **noise/grain overlay** (SVG feTurbulence) at 3% opacity over background for premium film-grain feel.
- Tighten hero: remove logo, keep gradient orbs, add a thin gradient hairline divider under hero.
- Painpoint cards use **red-tinged glass** (`bg-red-500/5 border-red-500/15`) with muted red icons for emotional contrast against the neutral solutions grid.
- Solutions/how-we-help cards use **gradient-tinged glass** and check icons in brand gradient.
- Testimonials get **quote marks** in large translucent gradient text as decorative element.
- Final CTA: full-bleed gradient background with animated gradient sweep, oversized bold Bangla headline, single large white pill CTA.
- Numbers/stats in "why you need this" use `text-gradient-brand` at very large sizes (text-6xl+) for visual impact.

## File Structure Changes
```
src/components/monetrix/
  FomoStrip.tsx           (new)
  Painpoints.tsx          (new)
  Solutions.tsx           (new) — how we help
  WhyYouNeed.tsx          (new)
  Testimonials.tsx        (new)
  FinalCTA.tsx            (new)
  CountdownTimer.tsx      (new, shared)
  GrainOverlay.tsx        (new)
  Navbar.tsx              (delete)
  Footer.tsx              (delete)
  Hero.tsx                (rewrite — no logo, Bangla)
  Features.tsx            (Bangla)
  Pricing.tsx             (Bangla headings)
  PricingCard.tsx         (Bangla labels: এখনই কিনুন, সবচেয়ে জনপ্রিয়)
  FAQ.tsx                 (Bangla Q&A)
  LivePurchasePopup.tsx   (Bangla)
  StickyMobileCTA.tsx     (Bangla)
src/lib/pricing.ts        (fallback tier names → Bangla)
src/routes/index.tsx      (new section order, drop Navbar/Footer)
src/routes/__root.tsx     (Hind Siliguri font link, lang="bn", Bangla title/description/og)
src/styles.css            (font-family → Hind Siliguri)
```

## Head / SEO (Bangla)
- Title: "Monetrix — সাশ্রয়ী দামে Lovable Pro সাবস্ক্রিপশন"
- Description: "৯৫% পর্যন্ত ছাড়ে Lovable Pro পান। তাৎক্ষণিক ডেলিভারি, আনলিমিটেড জেনারেশন, ২৪/৭ প্রিমিয়াম সাপোর্ট।"
- og:title, og:description, twitter equivalents mirror above.

## Out of Scope
Same as before: no real payment/checkout, no backend for CAPI (stub retained), no real countdown backend (client-side rolling 24h based on `Date.now()`).
