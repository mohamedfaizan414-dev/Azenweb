import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { work } from "../data/content";
import { Reveal, Eyebrow } from "./ui/Primitives";

function StatusBadge({ status }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-[#F8F7F4]">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      {status}
    </span>
  );
}

function ProjectPreview({ project }) {
  const url = project.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className="relative min-h-[280px] sm:min-h-[340px] overflow-hidden bg-[#09090c] border-t lg:border-t-0 lg:border-l border-white/[0.08] p-6 sm:p-8 flex flex-col justify-center items-center">
      {/* Subtle radial lighting */}
      <div className="absolute inset-0 bg-radial from-white/[0.03] to-transparent pointer-events-none" />

      {/* Luxury Monochrome Browser Mockup */}
      <div className="relative w-full max-w-md rounded-xl border border-white/15 bg-[#0f0f13] shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        {/* Browser Top Chrome */}
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>

          <div className="ml-2 flex flex-1 items-center gap-2 rounded-md border border-white/10 bg-black/60 px-3 py-1">
            <span className="text-[10px] text-white/40">🔒</span>
            <span className="truncate font-mono text-[10px] text-white/60">{url}</span>
          </div>
        </div>

        {/* Content Preview */}
        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
            <div className="h-2.5 w-20 rounded-full bg-white/30" />
            <div className="flex gap-2">
              <div className="h-2 w-8 rounded-full bg-white/10" />
              <div className="h-2 w-8 rounded-full bg-white/10" />
              <div className="h-2 w-8 rounded-full bg-white/10" />
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3.5">
            <div className="h-3 w-3/4 rounded-full bg-white/25" />
            <div className="mt-2 h-2 w-1/2 rounded-full bg-white/15" />
            <div className="mt-4 flex gap-2">
              <div className="h-6 w-16 rounded-md bg-white/80" />
              <div className="h-6 w-16 rounded-md border border-white/20" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-1">
            <div className="h-10 rounded-md border border-white/[0.08] bg-white/[0.02]" />
            <div className="h-10 rounded-md border border-white/[0.08] bg-white/[0.02]" />
            <div className="h-10 rounded-md border border-white/[0.08] bg-white/[0.02]" />
          </div>
        </div>
      </div>

      <span className="mt-4 font-mono text-[10px] uppercase tracking-widest text-[#525157]">
        Live Product · {project.name.toLowerCase()}
      </span>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <div className="flex items-center gap-3">
            <Eyebrow>PORTFOLIO & LIVE BUILDS</Eyebrow>
            <span className="rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[10px] text-white">
              5 of 5 Live
            </span>
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-[#F8F7F4] sm:text-4xl lg:text-5xl">
            Five products. Five industries. <span className="text-white">All live.</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#8E8D94] sm:text-base">
            Each project below is a real, launched product with its own brand, designed and built end to end by Azenweb.
            Click any project to inspect the live production application.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-8">
          {work.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.08}>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c0f] transition-all duration-300 hover:border-white/30 hover:bg-[#101014] hover:shadow-[0_16px_50px_rgba(0,0,0,0.9)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
                  {/* Left Column: Details */}
                  <div className="flex flex-col justify-between p-7 sm:p-9">
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-mono text-xs uppercase tracking-wider text-[#8E8D94]">
                          {project.tag}
                        </span>
                        <StatusBadge status={project.status} />
                      </div>

                      <h3 className="mt-4 font-display text-2xl font-bold text-[#F8F7F4] sm:text-3xl">
                        {project.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#8E8D94]">
                        {project.blurb}
                      </p>

                      <ul className="mt-6 flex flex-col gap-2.5">
                        {project.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F8F7F4]">
                            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-white" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                      {/* Tech stack pills */}
                      <div className="flex flex-wrap items-center gap-2">
                        {project.stack.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-[#8E8D94]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Live Link Button */}
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:underline">
                        Open live site
                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Browser Mockup */}
                  <ProjectPreview project={project} />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
