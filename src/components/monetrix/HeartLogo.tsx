import { useId } from "react";
import { cn } from "@/lib/utils";

export function HeartLogo({ className, withGlow = false }: { className?: string; withGlow?: boolean }) {
  const id = useId();
  return (
    <div className={cn("relative", className)}>
      {withGlow && (
        <div
          aria-hidden
          className="absolute inset-0 rounded-full opacity-60 blur-xl"
          style={{ background: "var(--gradient-brand)" }}
        />
      )}
      <svg viewBox="0 0 100 100" className="relative h-full w-full drop-shadow-2xl">
        <defs>
          <linearGradient id={`heart-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF7D00" />
            <stop offset="50%" stopColor="#FF2D55" />
            <stop offset="100%" stopColor="#8A2BE2" />
          </linearGradient>
        </defs>
        <path
          d="M50 85C50 85 15 65 15 40C15 25 25 15 40 15C46 15 50 20 50 20C50 20 54 15 60 15C75 15 85 25 85 40C85 65 50 85 50 85Z"
          fill={`url(#heart-${id})`}
        />
      </svg>
    </div>
  );
}
