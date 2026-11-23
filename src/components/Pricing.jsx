import { Check, Star, Zap, Rocket } from "lucide-react";
import { pricing } from "../data/content";
import { Reveal, Eyebrow, PrimaryButton, SecondaryButton } from "./ui/Primitives";

const TIER_ICONS = [Star, Zap, Rocket];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <Eyebrow>TRANSPARENT INVESTMENT</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-bold tracking-tight text-[#F8F7F4] sm:text-4xl lg:text-5xl">
            Clear scopes. Honest pricing.
          </h2>
          <p className="mt-3 max-w-lg text-sm text-[#8E8D94] sm:text-base">
            Starting points below — every build gets an exact fixed-scope roadmap
            in writing before work begins.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {pricing.map((tier, i) => {
            const TierIcon = TIER_ICONS[i] || Star;

            return (
              <Reveal key={tier.name} delay={i * 0.08}>
                <div
                  className={`relative flex h-full flex-col justify-between rounded-2xl p-7 transition-all duration-300 ${
                    tier.highlight
                      ? "border border-white/40 bg-[#121216] shadow-[0_20px_50px_rgba(255,255,255,0.06)]"
                      : "border border-white/[0.08] bg-[#0c0c0f] hover:border-white/20"
                  }`}
                >
                  {tier.highlight && (
                    <span className="absolute -top-3.5 left-7 rounded-full bg-[#F8F7F4] text-black px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      Most Selected
                    </span>
                  )}

                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                      <TierIcon size={18} className="text-white" />
                    </div>

                    <h3 className="mt-5 font-display text-lg font-bold text-[#F8F7F4]">
                      {tier.name}
                    </h3>
                    <p className="mt-2 font-display text-4xl font-bold tracking-tight text-[#F8F7F4]">
                      {tier.price}
                    </p>
                    <p className="mt-2 text-xs sm:text-sm text-[#8E8D94] leading-relaxed">
                      {tier.desc}
                    </p>

                    <div className="my-6 h-px bg-white/[0.08]" />

                    <ul className="flex flex-col gap-3">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F8F7F4]">
                          <Check size={15} className="mt-0.5 shrink-0 text-white" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4">
                    {tier.highlight ? (
                      <PrimaryButton href="#contact" className="w-full">
                        Start Project
                      </PrimaryButton>
                    ) : (
                      <SecondaryButton href="#contact" className="w-full">
                        Get Started
                      </SecondaryButton>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center font-mono text-xs text-[#525157]">
            All prices in INR. Custom enterprise quotes available after a free discovery session.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
