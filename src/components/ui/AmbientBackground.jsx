export default function AmbientBackground() {
  return (
<<<<<<< HEAD
    <div className="pointer-events-none fixed inset-0 -z-10 bg-black">
      {/* Subtle monochrome vignette / soft silver radial glow */}
      <div className="absolute top-1/4 right-0 h-[600px] w-[600px] rounded-full bg-white/[0.025] blur-[140px]" />
      <div className="absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-white/[0.015] blur-[120px]" />
      {/* Top subtle fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
=======
    <div className="pointer-events-none fixed inset-0 -z-10 bg-dots opacity-60">
      <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet/20 blur-[110px] animate-drift" />
      <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-cyan/10 blur-[110px] animate-drift-slow" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
>>>>>>> 56792d3bb0982ac11f84e0b2dca95d6c8ff1564c
    </div>
  );
}
