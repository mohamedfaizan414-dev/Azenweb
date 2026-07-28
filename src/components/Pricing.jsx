import { Check } from "lucide-react";
import { pricing } from "../data/content";
import { Reveal, Eyebrow, PrimaryButton, SecondaryButton } from "./ui/Primitives";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <Eyebrow>Investment</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Pricing that scopes to what you actually need.
          </h2>
          <p className="mt-4 max-w-lg text-sm text-muted sm:text-base">
            Starting points below — every project gets an exact quote after a
            quick call about your goals.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {pricing.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08}>
              <div
                className={`flex h-full flex-col rounded-xl2 p-7 ${
                  tier.highlight
                    ? "glass relative border-violet/40 shadow-glow"
                    : "border border-line bg-raised/40"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-7 rounded-full bg-journey-gradient px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-bg">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold text-ink">{tier.name}</h3>
                <p className="mt-2 font-display text-3xl font-semibold text-ink">{tier.price}</p>
                <p className="mt-2 text-sm text-muted">{tier.desc}</p>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ink/85">
                      <Check size={15} className="mt-0.5 shrink-0 text-cyan-soft" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  {tier.highlight ? (
                    <PrimaryButton href="#contact" className="w-full">
                      Get started
                    </PrimaryButton>
                  ) : (
                    <SecondaryButton href="#contact" className="w-full">
                      Get started
                    </SecondaryButton>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
