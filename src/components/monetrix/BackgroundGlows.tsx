export function BackgroundGlows() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -left-[10%] -top-[10%] h-[60%] w-[60%] rounded-full opacity-25 blur-[140px] animate-float-slow"
        style={{ backgroundColor: "#ff7d00" }}
      />
      <div
        className="absolute -right-[15%] top-[30%] h-[55%] w-[55%] rounded-full opacity-20 blur-[140px] animate-float-medium"
        style={{ backgroundColor: "#8a2be2" }}
      />
      <div
        className="absolute left-[20%] bottom-[-10%] h-[45%] w-[50%] rounded-full opacity-15 blur-[140px] animate-float-slow"
        style={{ backgroundColor: "#ff2d55" }}
      />
    </div>
  );
}

