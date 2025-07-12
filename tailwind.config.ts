import type { Config } from "tailwindcss";

const primary = process.env.NEXT_PUBLIC_PRIMARY_THEME_COLOR ?? "#C32865";
const secondary = process.env.NEXT_PUBLIC_SECONDARY_THEME_COLOR ?? "#ffa500";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SyneFont: "var(--font-syne)",
        KarlaFont: "var(--font-karla)",
        RalewayFont: "var(--font-raleway)",
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",

        "theme-primary": primary,
        "theme-secondary": secondary,
        "deep-oreange": "rgb(255, 60, 0)",

        "section-light-white": "#F0F0F0",
        "section-deep-white": "#E2E2E2",

        "light-gray": "#E2E2E2",
        "regular-gray": "#C0C0C0",
        "deep-gray": "#242424",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "992px",
        xl: "1170px",
      },
      borderRadius: {
        xs: "3px",
        sm: "6px",
        md: "9px",
        lg: "12px",
        xl: "16px",
      },
      zIndex: {
        full: "100",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
      },

      boxShadow: {
        xs: "1px 2px 18px 1px rgba(0, 0, 0, 0.05)",
        sm: "1px 2px 15px 1px rgba(0, 0, 0, 0.05)",
        md: "1px 2px 10px 1px rgba(0, 0, 0, 0.05)",
        lg: "1px 2px 7px 1px rgba(0, 0, 0, 0.05)",
      },
      textShadow: {
        xs: "2px 2px 7px rgba(0, 0, 0, 0.1)",
        sm: "2px 2px 7px rgba(0, 0, 0, 0.2)",
        md: "2px 2px 7px rgba(0, 0, 0, 0.3)",
        lg: "2px 2px 7px rgba(0, 0, 0, 0.4)",
      },

      animation: {
        "carret-blink": "carret-blink 1s infinite",
        "marquee-left": "marquee-left linear infinite",
        "marquee-right": "marquee-right linear infinite",
      },
      keyframes: {
        "carret-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "marquee-left": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        "marquee-right": {
          "0%": {
            transform: "translateX(-50%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
