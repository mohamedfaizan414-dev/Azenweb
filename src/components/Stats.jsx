import { Rocket, ShieldCheck, LayoutDashboard, MessageCircle, Timer } from "lucide-react";
import { stats } from "../data/content";
import { Counter, Stagger, StaggerItem } from "./ui/Primitives";

const ICONS = {
  rocket: Rocket,
  "shield-check": ShieldCheck,
  "layout-dashboard": LayoutDashboard,
  "message-circle": MessageCircle,
  timer: Timer,
};

export default function Stats() {
  return (
    <section className="relative border-y border-white/[0.08] bg-[#070709] py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Stagger
          className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-0"
          gap={0.1}
        >
          {stats.map((s, i) => {
            const Icon = ICONS[s.icon] || ShieldCheck;
            const isLast = i === stats.length - 1;

            return (
              <StaggerItem
                key={i}
                className="relative flex flex-col items-start gap-3 sm:px-8"
              >
                {/* Desktop vertical divider */}
                {!isLast && (
                  <div
                    className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-white/10 sm:block"
                    aria-hidden="true"
                  />
                )}

                {/* Minimalist Silver Icon */}
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                  <Icon size={16} className="text-white" />
                </div>

                {/* Counter Number */}
                <div className="font-display text-4xl font-bold tracking-tight text-[#F8F7F4] sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>

                {/* Label */}
                <p className="text-xs sm:text-sm leading-snug text-[#8E8D94]">
                  {s.label}
                </p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
