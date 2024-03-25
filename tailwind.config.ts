import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    },
    colors: {
      color: {
        primary: '#FFFFFF',
        secondary: '#0C0E12',
        gray: '#F9F9FB',
        main: '#1E82F4',
        placeholder: '#9CA3AF'
      }
    }
  },
  plugins: [],
};
export default config;
