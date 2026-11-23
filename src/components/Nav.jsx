import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import AzenwebLogo from "./ui/AzenwebLogo";
import { nav, company } from "../data/content";

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
    <header className="fixed top-4 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <div
        className={`pointer-events-auto w-full max-w-5xl rounded-full px-5 sm:px-7 py-2.5 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-2xl border border-white/15 shadow-[0_16px_50px_rgba(0,0,0,0.9)]"
            : "bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
        }`}
      >
        <div className="grid grid-cols-[auto_1fr_auto] items-center">
          {/* Col 1: Left Brand Logo (White on Black) */}
          <div className="flex items-center">
            <a href="#top" className="flex items-center py-1">
              <AzenwebLogo size="md" />
            </a>
          </div>

          {/* Col 2: Center Navigation Links (Mathematically Centered) */}
          <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-8">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-[13px] lg:text-sm font-medium tracking-wide transition-all ${
                  active === item.href
                    ? "text-white font-semibold"
                    : "text-[#8E8D94] hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Col 3: Right CTA Button */}
          <div className="flex items-center justify-end gap-3">
            <div className="hidden md:block">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-5 py-2 text-xs lg:text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white hover:text-black hover:border-white"
              >
                Let's Talk <ArrowRight size={13} />
              </motion.a>
            </div>

            {/* Mobile hamburger */}
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-white md:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto fixed top-20 left-4 right-4 z-50 rounded-2xl bg-black/95 p-6 backdrop-blur-2xl border border-white/15 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`text-base font-medium py-1.5 transition-colors ${
                    active === item.href
                      ? "text-white font-semibold"
                      : "text-[#8E8D94] hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#F8F7F4] text-black px-5 py-3 text-sm font-semibold shadow-lg"
              >
                Let's Talk <ArrowRight size={15} />
              </a>
              <div className="mt-2 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#8E8D94]">
                <span>{company.location}</span>
                <span>{company.phone}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
