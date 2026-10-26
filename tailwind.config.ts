import type { Config } from "tailwindcss";

const withAlpha = (v: string) => `rgb(var(${v}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: withAlpha("--bg"),
        surface: withAlpha("--surface"),
        "surface-2": withAlpha("--surface-2"),
        ink: withAlpha("--ink"),
        muted: withAlpha("--muted"),
        line: withAlpha("--line"),
        accent: withAlpha("--accent"),
        hl: withAlpha("--hl"),
        magenta: "#C026D3",
        royal: "#6D28D9",
        electric: "#7C3AED",
        violet: "#A78BFA",
        lavender: "#F5F3F7",
        night: "#0B0B0F",
        charcoal: "#1F1F2E",
      },
      fontFamily: {
        display: ['"Outfit Variable"', "system-ui", "sans-serif"],
        sans: ['"DM Sans Variable"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      boxShadow: {
        glow: "0 14px 34px -12px rgb(192 38 211 / 0.65)",
        soft: "0 1px 2px rgb(11 11 15 / 0.04), 0 12px 32px -12px rgb(11 11 15 / 0.14)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "scroll-cue": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(200%)" },
        },
        eq: {
          "0%, 100%": { transform: "scaleY(0.35)" },
          "50%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "scroll-cue": "scroll-cue 1.8s cubic-bezier(0.65, 0, 0.35, 1) infinite",
        eq: "eq 1.1s ease-in-out infinite",
      },
    },
  },
  corePlugins: { container: false },
  plugins: [],
};

export default config;
