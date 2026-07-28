/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0f",
        raised: "#12121b",
        raised2: "#17171f",
        line: "rgba(255,255,255,0.08)",
        ink: "#f5f4f8",
        muted: "#9b9aa8",
        faint: "#65636f",
        violet: {
          DEFAULT: "#8b5cf6",
          soft: "#a78bfa",
          deep: "#6d28d9",
        },
        cyan: {
          DEFAULT: "#22d3ee",
          soft: "#67e8f9",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "grid-dot":
          "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "journey-gradient": "linear-gradient(90deg, #8b5cf6 0%, #22d3ee 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(139,92,246,0.45)",
        "glow-cyan": "0 0 40px -8px rgba(34,211,238,0.4)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      transitionTimingFunction: {
        launch: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(-50%, 0) scale(1)" },
          "50%": { transform: "translate(-40%, 40px) scale(1.1)" },
        },
        driftSlow: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-30px, -30px) scale(1.08)" },
        },
      },
      animation: {
        drift: "drift 14s ease-in-out infinite",
        "drift-slow": "driftSlow 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
