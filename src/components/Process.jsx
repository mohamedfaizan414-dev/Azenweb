import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { process } from "../data/content";
import { Reveal, Eyebrow } from "./ui/Primitives";

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.4"],
  });
  const height = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="process" ref={ref} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <Eyebrow>How a build actually happens</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Five stages. No surprises.
          </h2>
        </Reveal>

        <div className="relative mt-16 pl-8 sm:pl-10">
          <div className="absolute left-[3px] top-1 bottom-1 w-[2px] bg-white/8 sm:left-[5px]" />
          <motion.div
            style={{ scaleY: height, transformOrigin: "0% 0%" }}
            className="absolute left-[3px] top-1 bottom-1 w-[2px] bg-journey-gradient sm:left-[5px]"
          />

          <div className="flex flex-col gap-12">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.05} y={16}>
                <div className="relative">
                  <span className="absolute -left-8 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-bg ring-2 ring-violet-soft sm:-left-10" />
                  <span className="font-mono text-xs text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-semibold text-ink sm:text-2xl">
                    {p.step}
                  </h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted">{p.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
