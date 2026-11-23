import { motion, useReducedMotion } from "framer-motion";
<<<<<<< HEAD
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "./ui/Primitives";

const EASE = [0.16, 1, 0.3, 1];

const TRUST_METRICS = [
  "5 Shipped Live Products",
  "Web + Mobile Platforms",
  "Full Admin Control Included",
];

=======
import { ArrowRight } from "lucide-react";
import InstagramIcon from "./ui/InstagramIcon";
import { social } from "../data/content";
import DeployTerminal from "./ui/DeployTerminal";
import { PrimaryButton, SecondaryButton, Eyebrow } from "./ui/Primitives";

const EASE = [0.16, 1, 0.3, 1];

>>>>>>> 56792d3bb0982ac11f84e0b2dca95d6c8ff1564c
export default function Hero() {
  const reduce = useReducedMotion();
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.1 } },
  };
  const item = {
<<<<<<< HEAD
    hidden: reduce ? {} : { opacity: 0, y: 24 },
=======
    hidden: reduce ? {} : { opacity: 0, y: 22 },
>>>>>>> 56792d3bb0982ac11f84e0b2dca95d6c8ff1564c
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  return (
<<<<<<< HEAD
    <section id="top" className="relative flex min-h-[92vh] items-center pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="max-w-3xl"
        >
          {/* Eyebrow - Matched to Image 3 Brand Guidelines */}
          <motion.div variants={item} className="inline-flex items-center gap-2">
            <span className="font-display text-[11px] sm:text-xs font-medium uppercase tracking-[0.25em] text-[#8E8D94]">
              SOFTWARE / PRODUCTS / SOLUTIONS
            </span>
          </motion.div>

          {/* Main Headline - Exact wording and layout from Image 1 & 3 */}
          <motion.h1
            variants={item}
            className="mt-6 font-display text-[52px] font-bold leading-[1.04] tracking-tight text-[#F8F7F4] sm:text-7xl lg:text-[84px]"
          >
            Build. Innovate.
            <br />
            <span className="text-white">Grow.</span>
          </motion.h1>

          {/* Subhead - Exact wording from Image 1 & 3 */}
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-[#8E8D94] sm:text-xl font-normal"
          >
            Your trusted software development partner for modern business solutions.
            We design, engineer, and deploy digital products that work as hard as your business does.
          </motion.p>

          {/* Primary CTA: "Get Started ->" - Solid White Pill matching Image 1 & 3 */}
          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center"
          >
            <PrimaryButton href="#contact" className="text-base py-3.5 px-8">
              Get Started <ArrowRight size={17} />
            </PrimaryButton>
            <SecondaryButton href="#work" className="text-base py-3.5 px-7">
              View Live Products
            </SecondaryButton>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.08]"
          >
            {TRUST_METRICS.map((badge) => (
              <div
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-[#8E8D94]"
              >
                <CheckCircle2 size={13} className="text-white" />
                <span>{badge}</span>
              </div>
            ))}
          </motion.div>
=======
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
            Azenweb designs and builds the websites, apps, and dashboards behind
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
            <InstagramIcon size={15} /> or DM us on Instagram — @azenweb
          </motion.a>
        </motion.div>

        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
        >
          <DeployTerminal />
>>>>>>> 56792d3bb0982ac11f84e0b2dca95d6c8ff1564c
        </motion.div>
      </div>
    </section>
  );
}
