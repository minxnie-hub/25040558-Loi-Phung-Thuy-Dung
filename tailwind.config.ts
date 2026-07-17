import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#081a36",
        navy: "#102a56",
        red: "#c8102e",
        paper: "#f6f1e7",
        mist: "#e7edf5"
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        sans: ["Arial", "Helvetica Neue", "sans-serif"],
        mono: ["Courier New", "monospace"]
      }
    },
  },
  plugins: [],
};
export default config;
