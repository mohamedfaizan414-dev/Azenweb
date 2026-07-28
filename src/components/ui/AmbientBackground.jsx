export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-dots opacity-60">
      <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet/20 blur-[110px] animate-drift" />
      <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-cyan/10 blur-[110px] animate-drift-slow" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
    </div>
  );
}
