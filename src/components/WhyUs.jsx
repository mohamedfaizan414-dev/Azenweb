import { Zap, MessageSquare, Sparkles, ShieldCheck } from "lucide-react";
import { differentiators } from "../data/content";
import { Reveal, Eyebrow, Stagger, StaggerItem } from "./ui/Primitives";

const ICONS = {
  zap: Zap,
  "message-square": MessageSquare,
  sparkles: Sparkles,
  "shield-check": ShieldCheck,
};

export default function WhyUs() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <Eyebrow>Why founders work with us</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            The difference is in the details.
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4" gap={0.1}>
          {differentiators.map((d) => {
            const Icon = ICONS[d.icon];
            return (
              <StaggerItem key={d.title}>
                <Icon size={20} className="text-cyan-soft" />
                <h3 className="mt-4 font-display text-base font-semibold text-ink">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d.detail}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
