import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "ডেলিভারি কত দ্রুত?",
    a: "সম্পূর্ণ অটোমেটেড। পেমেন্ট সফল হওয়ার সেকেন্ডেই আপনার প্রো অ্যাক্সেস পেয়ে যাবেন।",
  },
  {
    q: "আমার অ্যাকাউন্ট কি নিরাপদ থাকবে?",
    a: "হ্যাঁ, ১০০% নিরাপদ। আমরা কখনোই আপনার Lovable পাসওয়ার্ড চাই না। লেজিটিমেট সাবস্ক্রিপশন চ্যানেলের মাধ্যমে অ্যাক্টিভেশন হয়।",
  },
  {
    q: "lovable.dev এর চেয়ে এত সস্তা কেন?",
    a: "Monetrix গ্রুপ সাবস্ক্রিপশন পুল করে ভলিউম ডিসকাউন্ট পায়, এবং সেই সাশ্রয়টা সরাসরি আপনাকে দেয়।",
  },
  {
    q: "কেনার পরে সমস্যা হলে কী করবো?",
    a: "২৪/৭ চ্যাটে আমাদের জানান — বেশিরভাগ সমস্যা ১০ মিনিটের মধ্যে সমাধান হয়ে যায়।",
  },
  {
    q: "পরে প্ল্যান আপগ্রেড করা যাবে?",
    a: "অবশ্যই। যেকোনো সময় টপ-আপ বা আপগ্রেড করতে পারবেন — দামের পার্থক্য প্রোরেট করা হবে।",
  },
  {
    q: "রিফান্ড পাওয়া যাবে?",
    a: "আমাদের পক্ষ থেকে অ্যাক্টিভেশন ফেইল হলে এবং সমাধান করতে না পারলে ফুল রিফান্ড। কোনো প্রশ্ন নেই।",
  },
  {
    q: "পেমেন্ট কীভাবে করবো?",
    a: "বিকাশ, নগদ, রকেট, ব্যাংক ট্রান্সফার — বাংলাদেশের সব পপুলার পেমেন্ট মেথড সাপোর্টেড।",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            সাধারণ <span className="text-gradient-brand">জিজ্ঞাসা</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            কেনার আগে যা জানা জরুরি — সব এখানে।
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md p-4 shadow-2xl hover:border-white/15 transition duration-300">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/5 last:border-b-0">
                <AccordionTrigger className="px-4 text-left text-base font-bold hover:no-underline hover:text-[color:var(--color-brand-pink)] transition-colors duration-200">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground font-medium">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
