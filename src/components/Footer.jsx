import { AtSign } from "lucide-react";
import InstagramIcon from "./ui/InstagramIcon";
import { nav, social } from "../data/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-line/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2">
                    <img src="favicon.svg" alt="" height={16} width={40} className="rounded-2xl"/>

          <span className="font-display text-base font-semibold text-ink">azenweb</span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-5">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={social.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-muted transition-colors hover:text-cyan-soft"
          >
            <InstagramIcon size={18} />
          </a>
          <a
            href="https://threads.net/@azentweb"
            target="_blank"
            rel="noreferrer"
            aria-label="Threads"
            className="text-muted transition-colors hover:text-cyan-soft"
          >
            <AtSign size={18} />
          </a>
        </div>
      </div>
      <p className="mt-8 text-center font-mono text-[11px] text-faint">
        © {new Date().getFullYear()} Azenweb. From idea to launch.
      </p>
    </footer>
  );
}
