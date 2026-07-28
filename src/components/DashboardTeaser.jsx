import { FolderKanban, Receipt, MessageCircle, Activity } from "lucide-react";
import { dashboardFeatures } from "../data/content";
import { Reveal, Eyebrow, Stagger, StaggerItem } from "./ui/Primitives";

export default function DashboardTeaser() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>Client dashboard</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Every project, tracked in one place.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
              Every client gets access to a dashboard built for working with
              us — so nothing about your project lives only in a DM thread.
            </p>
            <Stagger className="mt-8 flex flex-col gap-4" gap={0.08}>
              {dashboardFeatures.map((f) => (
                <StaggerItem key={f} className="flex items-start gap-3 text-sm text-ink/85">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                  {f}
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

          <Reveal delay={0.15}>
            <DashboardMock />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="glass rounded-xl2 p-4 shadow-glow sm:p-5">
      <div className="flex items-center justify-between border-b border-line pb-3">
        <span className="font-mono text-[11px] uppercase tracking-wider text-faint">
          your dashboard
        </span>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
          <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
          <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <MockTile icon={FolderKanban} label="Project status" value="In build" accent="violet" />
        <MockTile icon={Activity} label="Progress" value="68%" accent="cyan" bar />
        <MockTile icon={Receipt} label="Invoices" value="1 due" accent="violet" />
        <MockTile icon={MessageCircle} label="Messages" value="3 new" accent="cyan" />
      </div>

      <div className="mt-4 rounded-lg border border-line p-3">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-faint">
          Recent activity
        </p>
        <div className="space-y-2">
          {["Homepage design approved", "Admin dashboard connected", "Staging link shared"].map(
            (row) => (
              <div key={row} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-soft/70" />
                <span className="h-2 flex-1 rounded bg-white/8" />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function MockTile({ icon: Icon, label, value, accent, bar }) {
  return (
    <div className="rounded-lg border border-line bg-raised/50 p-3">
      <Icon size={14} className={accent === "violet" ? "text-violet-soft" : "text-cyan-soft"} />
      <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-faint">{label}</p>
      <p className="mt-0.5 text-sm font-semibold text-ink">{value}</p>
      {bar && (
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[68%] rounded-full bg-journey-gradient" />
        </div>
      )}
    </div>
  );
}
