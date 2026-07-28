import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import InstagramIcon from "./ui/InstagramIcon";
import { nav, social } from "../data/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav.map((n) => document.querySelector(n.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive("#" + entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 sm:px-6 transition-all duration-300 ${
          scrolled ? "glass mx-3 sm:mx-6" : "mx-3 sm:mx-6"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 py-2.5">
          {/* <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet/15 font-display text-sm font-bold text-violet-soft">
            AW
          </span> */}
          <img src="../public/favicon.svg" alt="" height={16} width={40} className="rounded-2xl"/>
          <span className="font-display text-base font-semibold text-ink">azentweb</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                active === item.href ? "text-cyan-soft" : "text-muted hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full bg-violet px-5 py-2.5 text-sm font-semibold text-white shadow-glow"
          >
            Start a Project
          </motion.a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="glass mx-3 mt-2 rounded-2xl px-6 py-5 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-ink/90"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-violet px-5 py-3 text-sm font-semibold text-white"
              >
                Start a Project
              </a>
              <a
                href={social.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-muted"
              >
                <InstagramIcon size={16} /> DM us on Instagram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
