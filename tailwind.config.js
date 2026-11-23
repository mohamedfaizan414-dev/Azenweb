/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
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
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      transitionTimingFunction: {
        launch: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
