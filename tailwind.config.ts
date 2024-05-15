import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ["var(--font-dm-sans)"],
        inter: ["var(--font-inter)"]
      },
      fontSize: {
        pxxxl: "36px",
        pxxl: "24px",
        pxl: "22px",
        plg: "20px",
        pmd: "18px",
        psm: "16px"
      },
      colors: {
        smokeGray: "#F9F8F6",
        neonCyan: "#66D4B3"
      }
    },
  },
  plugins: [],
};
export default config;
