import type { Metadata } from "next";

export const LayoutMeta: Metadata = {
  title: "Haseeb | Frontend Developer Portfolio",
  description:
    "Frontend developer Haseeb's portfolio with real-world projects, skills, and resume.",
  keywords: [
    "haseeb",
    "haseeb17",
    "haseebarshad",
    "haseebarshad17",
    "portfolio",
    "resume",
    "frontend developer",
    "web developer",
    "nextjs portfolio",
  ],
  icons: {
    icon: "/favicon/fav.webp",
    apple: "/favicon/apple-touch.webp",
  },
  openGraph: {
    title: "Haseeb | Frontend Developer Portfolio",
    description:
      "Frontend developer Haseeb's portfolio with real-world projects, skills, and resume.",
    url: "https://haseebarshad17.vercel.app",
    siteName: "Haseeb's Portfolio",
    images: [
      {
        url: "/other/og.webp",
        alt: "Haseeb's Portfolio OG Image",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Haseeb | Frontend Developer Portfolio",
    description:
      "Frontend developer Haseeb's portfolio with real-world projects, skills, and resume.",
    images: ["/other/og.webp"],
    creator: "@haseebarshad17",
  },
};
