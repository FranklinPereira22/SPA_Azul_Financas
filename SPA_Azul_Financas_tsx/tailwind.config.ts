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
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          600: '#2563eb', // O azul da sua marca
          700: '#1d4ed8',
        },
        slate: {
          900: '#0f172a', // O escuro do seu admin
        }
      },
    },
  },
  plugins: [],
};
export default config;