import { Karla, Raleway, Syne } from "next/font/google";

export const KarlaFont = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  fallback: ["sans-serif"],
  preload: true,
});

export const RalewayFont = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  fallback: ["sans-serif"],
  preload: true,
});

export const SyneFont = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
  fallback: ["sans-serif"],
  preload: true,
});
