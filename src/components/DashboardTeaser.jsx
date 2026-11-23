import { FolderKanban, Receipt, MessageCircle, Activity } from "lucide-react";
import { dashboardFeatures } from "../data/content";
import { Reveal, Eyebrow, Stagger, StaggerItem } from "./ui/Primitives";

export default function DashboardTeaser() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-white/[0.08]">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="flex items-center gap-3">
              <Eyebrow>Client Control Console</Eyebrow>
              <span className="rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[10px] text-white">
                Included with every build
              </span>
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-[#F8F7F4] sm:text-4xl lg:text-5xl">
              Every project tracked in real time.
            </h2>
            <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-[#8E8D94]">
              Every client gets access to a dedicated control dashboard — so milestones,
              invoices, files, and direct developer communication live in one clean place.
            </p>

            <Stagger className="mt-8 flex flex-col gap-3.5" gap={0.06}>
              {dashboardFeatures.map((f) => (
                <StaggerItem key={f} className="flex items-start gap-3 text-xs sm:text-sm text-[#F8F7F4]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                  <span>{f}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

          <Reveal delay={0.12}>
            <DashboardMock />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="rounded-2xl border border-white/15 bg-[#0c0c0f] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:p-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
        <span className="font-mono text-[11px] uppercase tracking-wider text-[#8E8D94]">
          Azenweb Client Portal · v2.4
        </span>
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3.5">
        <MockTile icon={FolderKanban} label="Sprint Status" value="In Build" />
        <MockTile icon={Activity} label="Milestone Progress" value="84%" bar />
        <MockTile icon={Receipt} label="Invoices & Scope" value="Approved" />
        <MockTile icon={MessageCircle} label="Direct Engineer Line" value="Active" />
      </div>

      <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-4">
        <p className="mb-2.5 font-mono text-[10px] uppercase tracking-wider text-[#8E8D94]">
          Recent Deployment Feed
        </p>
        <div className="space-y-2.5 text-xs text-[#8E8D94]">
          {[
            "Production schema & authentication validated",
            "Custom admin console connected to live database",
            "Staging environment deployed for client review",
          ].map((row) => (
            <div key={row} className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span className="text-[#F8F7F4]">{row}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MockTile({ icon: Icon, label, value, bar }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
      <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
        <Icon size={14} className="text-white" />
      </div>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-[#8E8D94]">{label}</p>
      <p className="mt-0.5 text-sm font-bold text-[#F8F7F4]">{value}</p>
      {bar && (
        <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[84%] rounded-full bg-white" />
        </div>
      )}
    </div>
  );
}
