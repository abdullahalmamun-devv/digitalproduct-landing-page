import { motion } from "framer-motion";
import { Flame, Users } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";

export function FomoStrip() {
  return (
    <section className="relative px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-5xl"
      >
        <div className="relative overflow-hidden rounded-3xl">
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,125,0,0.15) 0%, rgba(255,45,85,0.15) 50%, rgba(138,43,226,0.15) 100%)",
            }}
          />
          <div className="glass-strong relative flex flex-col items-center justify-between gap-6 rounded-3xl p-6 sm:p-8 md:flex-row md:gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-brand-gradient grid h-12 w-12 shrink-0 place-items-center rounded-xl shadow-lg">
                <Flame className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-lg font-bold text-white sm:text-xl">
                  আজকের অফার শেষ হতে বাকি
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Users className="h-3 w-3" />
                  আজ মাত্র <span className="font-bold text-[color:var(--color-brand-pink)]">১২টি</span> স্লট অবশিষ্ট
                </p>
              </div>
            </div>
            <CountdownTimer />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
