import { BadgeCheck } from "lucide-react";
import { commitments } from "../data/content";
import { Reveal, Eyebrow, Stagger, StaggerItem } from "./ui/Primitives";

export default function Commitments() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-white/[0.08]">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <Eyebrow>Guaranteed Standards</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-bold tracking-tight text-[#F8F7F4] sm:text-4xl lg:text-5xl">
            Our promise to every partner.
          </h2>
          <p className="mt-3 max-w-lg text-sm text-[#8E8D94] sm:text-base">
            We build long-term relationships through transparency, reliability, and code you truly own.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2" gap={0.08}>
          {commitments.map((c) => (
            <StaggerItem key={c.title}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-white/[0.08] bg-[#0c0c0f] p-6 sm:p-7 backdrop-blur-md transition-all hover:border-white/20 hover:bg-[#111115]">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                  <BadgeCheck size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-[#F8F7F4]">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#8E8D94]">
                    {c.detail}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
