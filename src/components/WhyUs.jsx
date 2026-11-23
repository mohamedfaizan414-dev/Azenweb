import { Rocket, Smartphone, ShieldCheck, MessageSquare } from "lucide-react";
import { differentiators } from "../data/content";
import { Reveal, Eyebrow, Stagger, StaggerItem } from "./ui/Primitives";

const ICONS = {
  rocket: Rocket,
  smartphone: Smartphone,
  "shield-check": ShieldCheck,
  "message-square": MessageSquare,
};

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <Eyebrow>The Azenweb Standard</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-bold tracking-tight text-[#F8F7F4] sm:text-4xl lg:text-5xl">
            Why teams choose Azenweb.
          </h2>
          <p className="mt-3 max-w-lg text-sm text-[#8E8D94] sm:text-base">
            No middle managers, no opaque estimates. The difference is in our craftsmanship and speed.
          </p>
        </Reveal>

        <Stagger
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2"
          gap={0.08}
        >
          {differentiators.map((d) => {
            const Icon = ICONS[d.icon] || ShieldCheck;
            return (
              <StaggerItem key={d.title}>
                <div className="group h-full rounded-2xl border border-white/[0.08] bg-[#0c0c0f] p-7 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-[#111115] hover:shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-colors group-hover:border-white/20 group-hover:bg-white/[0.08]">
                    <Icon size={20} className="text-white" />
                  </div>

                  <h3 className="mt-5 font-display text-lg font-bold text-[#F8F7F4]">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#8E8D94]">
                    {d.detail}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
