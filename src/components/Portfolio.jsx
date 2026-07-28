import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { work } from "../data/content";
import { Reveal, Eyebrow } from "./ui/Primitives";

export default function Portfolio() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <Eyebrow>Featured builds</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Real products, in real use.
          </h2>
          <p className="mt-4 max-w-lg text-sm text-muted sm:text-base">
            We'd rather show you two builds we're proud of than pad this page
            with filler. Here's what shipped.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-8">
          {work.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.1}>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-xl2 border border-line bg-raised/60 transition-all duration-500 ease-launch hover:border-violet/40 hover:shadow-glow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr]">
                  <div className="flex flex-col justify-between p-7 sm:p-9">
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-faint">
                          {project.tag}
                        </span>
                        <span
                          className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
                            project.status === "In production"
                              ? "bg-cyan/10 text-cyan-soft"
                              : "bg-violet/10 text-violet-soft"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
                        {project.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{project.blurb}</p>

                      <ul className="mt-5 flex flex-col gap-2">
                        {project.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-ink/85">
                            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-violet-soft" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-2">
                      {project.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-line px-2.5 py-1 font-mono text-[10.5px] text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-soft">
                      Visit live site
                      <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </div>

                  <ProjectPreview name={project.name} />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectPreview({ name }) {
  return (
    <div className="relative min-h-[220px] overflow-hidden bg-gradient-to-br from-raised2 to-bg p-6 sm:min-h-[280px] sm:p-8">
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="relative flex h-full flex-col justify-center gap-3">
        <div className="glass w-full max-w-sm rounded-lg p-3 shadow-glow">
          <div className="flex items-center gap-1.5 pb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f56]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="space-y-1.5">
            <div className="h-2 w-3/4 rounded bg-white/15" />
            <div className="h-2 w-full rounded bg-white/10" />
            <div className="h-2 w-5/6 rounded bg-white/10" />
            <div className="mt-3 flex gap-2">
              <div className="h-6 w-16 rounded-md bg-violet/40" />
              <div className="h-6 w-16 rounded-md border border-line" />
            </div>
          </div>
        </div>
        <p className="pl-1 font-mono text-[10px] uppercase tracking-wider text-faint">
          {name.toLowerCase()}.app — live preview
        </p>
      </div>
    </div>
  );
}
