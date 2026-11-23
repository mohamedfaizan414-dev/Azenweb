import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const EASE = [0.16, 1, 0.3, 1];

export function Reveal({ children, delay = 0, y = 24, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? {} : { opacity: 0, y }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className = "", gap = 0.08 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: reduce ? 0 : gap } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", y = 20 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduce ? {} : { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children, className = "" }) {
  return (
    <span
      className={
        "inline-flex items-center gap-2 font-display text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#8E8D94] font-medium " +
        className
      }
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#FFFFFF]" />
      {children}
    </span>
  );
}

/* Primary Button: Solid Azenweb Cream/White with Deep Black Text (Matched to Image 1 & 3 Hero) */
export function PrimaryButton({ children, href, onClick, className = "", type = "button" }) {
  const Comp = href ? motion.a : motion.button;
  return (
    <Comp
      href={href}
      onClick={onClick}
      type={href ? undefined : type}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={
        "inline-flex items-center justify-center gap-2.5 rounded-full bg-[#F8F7F4] text-[#000000] px-7 py-3 text-sm font-semibold transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.35)] " +
        className
      }
    >
      {children}
    </Comp>
  );
}

/* Secondary Button: Subtle Translucent Pill with Thin Silver Border */
export function SecondaryButton({ children, href, onClick, className = "" }) {
  const Comp = href ? motion.a : motion.button;
  return (
    <Comp
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={
        "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-medium text-[#F8F7F4] backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/[0.09] hover:text-white " +
        className
      }
    >
      {children}
    </Comp>
  );
}

/* Card: Monochromatic Luxury Obsidian Glass */
export function Card({ children, className = "", hover = true }) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={
        "rounded-2xl border border-white/[0.08] bg-[#0c0c0f] p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-[#111115] hover:shadow-[0_12px_40px_rgba(0,0,0,0.8)] " +
        className
      }
    >
      {children}
    </motion.div>
  );
}

export function Counter({ value, suffix = "", duration = 1.4 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    let start;
    let frame;
    const step = (t) => {
      if (!start) start = t;
      const progress = Math.min((t - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration, reduce]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function SectionLabel({ index, total }) {
  return (
    <span className="font-display text-xs text-[#525157]">
      {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
    </span>
  );
}
