import { Rocket, LayoutDashboard, Timer, MessageCircle } from "lucide-react";
import { stats } from "../data/content";
import { Counter, Stagger, StaggerItem } from "./ui/Primitives";

const ICONS = {
  rocket: Rocket,
  "layout-dashboard": LayoutDashboard,
  timer: Timer,
  "message-circle": MessageCircle,
};

export default function Stats() {
  return (
    <section className="relative border-y border-line/60 py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Stagger className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8" gap={0.1}>
          {stats.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <StaggerItem key={i} className="flex flex-col items-start gap-2">
                <Icon size={18} className="text-violet-soft" />
                <div className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <p className="text-xs text-muted sm:text-sm">{s.label}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
