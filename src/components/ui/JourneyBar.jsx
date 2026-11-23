import { motion, useScroll, useSpring } from "framer-motion";

export default function JourneyBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] sm:h-[3px] bg-white/5"
    >
      <motion.div
        style={{ scaleX, transformOrigin: "0%" }}
        className="h-full w-full bg-gradient-to-r from-white/60 via-white to-white/90 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
      />
    </div>
  );
}
