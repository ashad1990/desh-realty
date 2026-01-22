import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content:  [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ... defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#D32F2F",
        secondary:  "#FFA500",
        dark: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
export default config;
