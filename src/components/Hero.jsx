import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import InstagramIcon from "./ui/InstagramIcon";
import { social } from "../data/content";
import DeployTerminal from "./ui/DeployTerminal";
import { PrimaryButton, SecondaryButton, Eyebrow } from "./ui/Primitives";

const EASE = [0.16, 1, 0.3, 1];

export default function Hero() {
  const reduce = useReducedMotion();
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  return (
    <section id="top" className="relative flex min-h-screen items-center pt-32 pb-16 sm:pt-36">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <motion.div initial="hidden" animate="show" variants={container}>
          <motion.div variants={item}>
            <Eyebrow>From Idea to Launch</Eyebrow>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-[42px] font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-[68px]"
          >
            We build it all,
            <br />
            so you can run <span className="text-gradient">your business.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Azentweb designs and builds the websites, apps, and dashboards behind
            growing businesses — full-stack, AI-integrated, and handed over with
            the keys.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryButton href="#contact">
              Start a Project <ArrowRight size={16} />
            </PrimaryButton>
            <SecondaryButton href="#work">See our work</SecondaryButton>
          </motion.div>

          <motion.a
            variants={item}
            href={social.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm text-faint transition-colors hover:text-cyan-soft"
          >
            <InstagramIcon size={15} /> or DM us on Instagram — @azentweb
          </motion.a>
        </motion.div>

        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
        >
          <DeployTerminal />
        </motion.div>
      </div>
    </section>
  );
}
