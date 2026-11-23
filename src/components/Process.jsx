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
          <Eyebrow>Execution Roadmap</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-bold tracking-tight text-[#F8F7F4] sm:text-4xl lg:text-5xl">
            Five stages. No surprises.
          </h2>
          <p className="mt-3 max-w-lg text-sm text-[#8E8D94] sm:text-base">
            From initial discovery to launch day and beyond, every milestone is scoped,
            visible, and built with precision.
          </p>
        </Reveal>

        <div className="relative mt-16 pl-8 sm:pl-12">
          {/* Timeline background track */}
          <div className="absolute left-[3px] top-2 bottom-2 w-[1px] bg-white/10 sm:left-[5px]" />
          {/* Active timeline progress */}
          <motion.div
            style={{ scaleY: height, transformOrigin: "0% 0%" }}
            className="absolute left-[3px] top-2 bottom-2 w-[1.5px] bg-white sm:left-[5px]"
          />

          <div className="flex flex-col gap-10 sm:gap-12">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.06} y={16}>
                <div className="relative rounded-2xl border border-white/[0.08] bg-[#0c0c0f] p-6 sm:p-7 backdrop-blur-md transition-all hover:border-white/20 hover:bg-[#111115]">
                  {/* Timeline indicator node */}
                  <span className="absolute -left-[37px] top-6 flex h-4 w-4 items-center justify-center rounded-full bg-black ring-1 ring-white/50 sm:-left-[53px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>

                  <span className="font-mono text-xs font-semibold text-[#8E8D94]">
                    PHASE {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1.5 font-display text-2xl font-bold text-[#F8F7F4]">
                    {p.step}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#8E8D94] max-w-xl">
                    {p.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
