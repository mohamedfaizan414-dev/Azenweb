export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-black">
      {/* Subtle monochrome vignette / soft silver radial glow */}
      <div className="absolute top-1/4 right-0 h-[600px] w-[600px] rounded-full bg-white/[0.025] blur-[140px]" />
      <div className="absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-white/[0.015] blur-[120px]" />
      {/* Top subtle fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
    </div>
  );
}
