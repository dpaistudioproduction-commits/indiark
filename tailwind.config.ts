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
        background: "#FAF6F5", // Soft blush warm rose
        foreground: "#141115", // Deep espresso charcoal
        card: {
          DEFAULT: "#FFFFFF",
          hover: "#FFFDFD",
          border: "#EAE0DD",
        },
        brand: {
          maroon: "#781D2A",
          maroonDark: "#5C121E",
          maroonLight: "#9B2C3B",
          teal: "#00A896",
          tealDark: "#028090",
          tealLight: "#02C39A",
          green: "#1B998B",
          greenDark: "#147267",
          lime: "#84CC16",
          limeLight: "#A3E635",
          blush: "#FAF6F5",
          blushWarm: "#F8EFEA",
          blushSurface: "#F4ECE9",
          blushBorder: "#E8D8D3",
          charcoal: "#141115",
          charcoalMuted: "#4A3F45",
          // backward compat mapping
          crimson: "#781D2A",
          crimsonLight: "#9B2C3B",
          crimsonDark: "#5C121E",
          gold: "#781D2A",
          goldLight: "#9B2C3B",
          goldDark: "#5C121E",
          amber: "#00A896",
        },
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "Cinzel", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        display: ["var(--font-display)", "Syne", "Outfit", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "blush-gradient": "linear-gradient(180deg, #FAF6F5 0%, #F8EFEA 50%, #FAF6F5 100%)",
        "maroon-gradient": "linear-gradient(135deg, #9B2C3B 0%, #781D2A 50%, #5C121E 100%)",
        "crimson-gradient": "linear-gradient(135deg, #9B2C3B 0%, #781D2A 50%, #5C121E 100%)",
        "teal-gradient": "linear-gradient(135deg, #02C39A 0%, #00A896 50%, #028090 100%)",
        "text-gradient": "linear-gradient(135deg, #141115 0%, #2A1B20 60%, #781D2A 100%)",
      },
      animation: {
        "dot-float": "dotFloat 7s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        dotFloat: {
          "0%, 100%": { transform: "translateY(0px) scale(1)", opacity: "0.7" },
          "50%": { transform: "translateY(-10px) scale(1.08)", opacity: "1" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.9" },
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
