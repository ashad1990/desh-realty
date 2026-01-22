import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D32F2F", // Bangladesh red
        secondary: "#FFA500", // Orange
        dark: "#1A1A1A", // Dark background
      },
    },
  },
  plugins: [],
} satisfies Config;
