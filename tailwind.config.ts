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
        background: "var(--background)",
        foreground: "var(--foreground)",
        fonte: "#4A2518",
        vermelho: "#C4371E",
        fundo: "#F3ECDE"
      },

      backgroundImage: {
        'hamburgui': "url('/src/assets/woper.png')"
       },

      fontFamily: {
        normal: "--flameRegular"
      }
    },
  },
  plugins: [],
};
export default config;
