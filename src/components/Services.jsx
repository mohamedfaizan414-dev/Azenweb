import {
  PenTool,
  Code2,
  Smartphone,
  Sparkles,
  LayoutDashboard,
  TrendingUp,
} from "lucide-react";
import { services } from "../data/content";
import { Reveal, Card, Eyebrow } from "./ui/Primitives";

const ICONS = {
  "pen-tool": PenTool,
  "code-2": Code2,
  smartphone: Smartphone,
  sparkles: Sparkles,
  "layout-dashboard": LayoutDashboard,
  "trending-up": TrendingUp,
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <Eyebrow>What we build</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Every piece of the stack, under one roof.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <Card className="group h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-violet/15">
                    <Icon size={20} className="text-violet-soft" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted">{s.short}</p>
                  <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-muted/90 opacity-0 transition-all duration-500 ease-launch group-hover:max-h-24 group-hover:opacity-100">
                    {s.detail}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
