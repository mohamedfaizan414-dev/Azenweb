import { BadgeCheck } from "lucide-react";
import { commitments } from "../data/content";
import { Reveal, Eyebrow, Card, Stagger, StaggerItem } from "./ui/Primitives";

export default function Commitments() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <Eyebrow>What you're guaranteed</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            We're early — our word is what we lead with.
          </h2>
          <p className="mt-4 max-w-lg text-sm text-muted sm:text-base">
            We're a young agency and won't pretend otherwise with recycled
            quotes. Here's exactly what every client gets instead.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2" gap={0.1}>
          {commitments.map((c) => (
            <StaggerItem key={c.title}>
              <Card hover={false} className="flex h-full items-start gap-4">
                <BadgeCheck size={20} className="mt-0.5 shrink-0 text-violet-soft" />
                <div>
                  <h3 className="font-display text-base font-semibold text-ink">{c.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{c.detail}</p>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
