import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        marshland: {
          "50": "#f6f7f6",
          "100": "#e3e5e2",
          "200": "#c6cac5",
          "300": "#a2a7a1",
          "400": "#7e847d",
          "500": "#636a62",
          "600": "#4e544d",
          "700": "#414540",
          "800": "#363936",
          "900": "#2f322f",
          "950": "#191b19",
        },
      },
    },
  },
  plugins: [],
};
export default config;
