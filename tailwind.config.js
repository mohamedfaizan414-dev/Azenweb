/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        bg: "#000000",
        cream: "#F8F7F4",
        surface: "#09090b",
        "surface-raised": "#121215",
        "surface-card": "#16161a",
        line: "rgba(255, 255, 255, 0.08)",
        "line-bright": "rgba(255, 255, 255, 0.16)",
        ink: "#F8F7F4",
        muted: "#8E8D94",
        faint: "#525157",
        silver: "#D4D4D8",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Space Grotesk", "Inter", "sans-serif"],
        mono: ["Space Grotesk", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "silver-gradient": "linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 100%)",
        "glow-radial": "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
      },
      boxShadow: {
        "glow-white": "0 0 35px -5px rgba(255, 255, 255, 0.25)",
        "glow-subtle": "0 0 50px -10px rgba(255, 255, 255, 0.08)",
=======
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
>>>>>>> 56792d3bb0982ac11f84e0b2dca95d6c8ff1564c
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      transitionTimingFunction: {
        launch: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
<<<<<<< HEAD
=======
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
>>>>>>> 56792d3bb0982ac11f84e0b2dca95d6c8ff1564c
    },
  },
  plugins: [],
};
