import { motion, useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
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
        "inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em] text-cyan-soft " +
        className
      }
    >
      <span className="h-1 w-1 rounded-full bg-cyan" />
      {children}
    </span>
  );
}

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
        "inline-flex items-center justify-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-semibold text-white shadow-glow transition-shadow hover:shadow-[0_0_55px_-6px_rgba(139,92,246,0.65)] " +
        className
      }
    >
      {children}
    </Comp>
  );
}

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
        "inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink/90 transition-colors hover:border-violet/50 hover:text-white " +
        className
      }
    >
      {children}
    </Comp>
  );
}

export function Card({ children, className = "", hover = true }) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.015 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={
        "glass rounded-xl2 p-6 sm:p-7 transition-shadow duration-300 hover:shadow-glow " + className
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
    <span className="font-mono text-xs text-faint">
      {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
    </span>
  );
}
