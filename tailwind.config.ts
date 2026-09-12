import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#090B0D", // Deep near-black canvas
        foreground: "#F8F9FA", // Warm white
        card: {
          DEFAULT: "#141820",
          hover: "#181D26",
          border: "rgba(255, 255, 255, 0.08)",
        },
        brand: {
          yellow: "#F5DE88",
          yellowLight: "#FCEEAC",
          yellowDark: "#EAB308",
          charcoal: "#090B0D",
          charcoalSurface: "#141820",
          charcoalCard: "#181D26",
          charcoalBorder: "rgba(255, 255, 255, 0.08)",
          textPrimary: "#F8F9FA",
          textSecondary: "#94A3B8",
          textMuted: "#64748B",
          teal: "#00A896",
          tealDark: "#028090",
          green: "#10B981",
          lime: "#84CC16",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Poppins", "Inter", "sans-serif"],
        display: ["var(--font-display)", "Poppins", "sans-serif"],
        serif: ["var(--font-sans)", "Poppins", "sans-serif"], // Smooth fallback to modern sans
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "dark-gradient": "linear-gradient(180deg, #090B0D 0%, #0E1217 50%, #090B0D 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.005) 100%)",
        "yellow-gradient": "linear-gradient(135deg, #FCEEAC 0%, #F5DE88 50%, #EAB308 100%)",
      },
      animation: {
        "dot-float": "dotFloat 7s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        dotFloat: {
          "0%, 100%": { transform: "translateY(0px) scale(1)", opacity: "0.5" },
          "50%": { transform: "translateY(-10px) scale(1.08)", opacity: "0.8" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
