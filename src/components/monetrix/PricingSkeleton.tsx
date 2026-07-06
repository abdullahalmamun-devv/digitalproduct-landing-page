import { Skeleton } from "@/components/ui/skeleton";

export function PricingSkeleton() {
  return (
    <div className="flex min-w-[280px] shrink-0 snap-center flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:min-w-0">
      <div>
        <Skeleton className="h-3 w-16" />
        <Skeleton className="mt-4 h-9 w-24" />
        <div className="mt-6 space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-3 w-full" />
          ))}
        </div>
      </div>
      <Skeleton className="mt-8 h-11 w-full rounded-xl" />
    </div>
  );
}
