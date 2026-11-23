import {
  PenTool,
<<<<<<< HEAD
  Smartphone,
  Sparkles,
  LayoutDashboard,
  Code2,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import { services } from "../data/content";
import { Reveal, Eyebrow } from "./ui/Primitives";

const ICONS = {
  "pen-tool": PenTool,
  smartphone: Smartphone,
  sparkles: Sparkles,
  "layout-dashboard": LayoutDashboard,
  "code-2": Code2,
=======
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
>>>>>>> 56792d3bb0982ac11f84e0b2dca95d6c8ff1564c
  "trending-up": TrendingUp,
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
<<<<<<< HEAD
          <Eyebrow>Capabilities & Solutions</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-bold tracking-tight text-[#F8F7F4] sm:text-4xl lg:text-5xl">
            Software that works as hard as your business does.
          </h2>
          <p className="mt-3 max-w-lg text-sm text-[#8E8D94] sm:text-base">
            From the initial idea to a product people use every day — we design, build,
            and scale modern software solutions.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon] || Code2;
            const stepNum = String(i + 1).padStart(2, "0");

            return (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0c0c0f] p-7 transition-all duration-300 hover:border-white/25 hover:bg-[#111115] hover:shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
                  <div>
                    {/* Top row: step number + icon */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-medium text-[#525157]">
                        {stepNum}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-colors group-hover:border-white/20 group-hover:bg-white/[0.08]">
                        <Icon size={18} className="text-white" />
                      </div>
                    </div>

                    <h3 className="mt-6 font-display text-xl font-semibold text-[#F8F7F4]">
                      {s.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-[#8E8D94] leading-relaxed">
                      {s.short}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/[0.06]">
                    <p className="text-xs text-[#8E8D94] leading-relaxed">
                      {s.detail}
                    </p>
                  </div>
                </div>
=======
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
>>>>>>> 56792d3bb0982ac11f84e0b2dca95d6c8ff1564c
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
