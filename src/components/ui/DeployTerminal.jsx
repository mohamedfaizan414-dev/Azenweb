import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";

const LINES = [
  { text: "$ azentweb build your-idea", type: "cmd" },
  { text: "resolving scope & requirements", type: "log" },
  { text: "designing interface", type: "log" },
  { text: "compiling full-stack app", type: "log" },
  { text: "wiring up admin dashboard", type: "log" },
  { text: "build complete — 0 errors", type: "done" },
  { text: "deployed to production", type: "launch" },
];

export default function DeployTerminal() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(reduce ? LINES.length : 0);

  useEffect(() => {
    if (reduce) return;
    if (visible >= LINES.length) {
      const reset = setTimeout(() => setVisible(0), 2600);
      return () => clearTimeout(reset);
    }
    const t = setTimeout(() => setVisible((v) => v + 1), visible === 0 ? 500 : 480);
    return () => clearTimeout(t);
  }, [visible, reduce]);

  return (
    <div className="glass relative overflow-hidden rounded-xl2 p-1 shadow-glow">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-2 font-mono text-[11px] text-faint">azentweb — build</span>
      </div>
      <div className="min-h-[220px] px-5 py-5 font-mono text-[12.5px] leading-7 sm:text-[13px]">
        {LINES.slice(0, visible).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className={
              line.type === "cmd"
                ? "text-ink"
                : line.type === "done"
                ? "flex items-center gap-2 text-cyan-soft"
                : line.type === "launch"
                ? "flex items-center gap-2 text-violet-soft"
                : "flex items-center gap-2 text-muted"
            }
          >
            {line.type === "log" && <Loader2 size={12} className="animate-spin text-faint" />}
            {(line.type === "done" || line.type === "launch") && <Check size={13} />}
            <span>{line.text}</span>
          </motion.div>
        ))}
        <span className="mt-1 inline-block h-4 w-[7px] animate-pulse bg-violet-soft/70 align-middle" />
      </div>
    </div>
  );
}
