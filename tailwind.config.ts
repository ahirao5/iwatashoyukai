import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef1f8",
          100: "#d0d9ee",
          200: "#a3b5de",
          300: "#6d8cca",
          400: "#3f63b5",
          500: "#1a3d8f",
          600: "#152f6e",
          700: "#1a2e52",
          800: "#141f38",
          900: "#0d1224",
        },
        gold: {
          50: "#fdf9ec",
          100: "#fbf0c4",
          200: "#f5dc7f",
          300: "#e8c130",
          400: "#d4a510",
          500: "#b8960c",
          600: "#96760a",
          700: "#7a5d09",
          800: "#5f4a0a",
          900: "#3d2f06",
        },
        forest: {
          50: "#edf5f0",
          100: "#c8e3cf",
          200: "#8ec8a0",
          300: "#52a86c",
          400: "#2d7a4a",
          500: "#2d5a3d",
          600: "#1f4029",
          700: "#173120",
          800: "#0f2215",
          900: "#08130c",
        },
      },
      fontFamily: {
        serif: ["'Noto Serif JP'", "serif"],
        sans: ["'Noto Sans JP'", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 4px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)",
        "card-hover": "0 4px 12px rgba(0,0,0,0.12), 0 8px 32px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
