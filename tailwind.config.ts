import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      screens: {
        xs: "550px",
      },
      scale: {
        "115": "1.15",
      },
    },
  },
  fontFamily: {
    sora: ["Sora", "sans-serif"],
  },
  plugins: [],
};
export default config;
