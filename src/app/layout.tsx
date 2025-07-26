import type { Metadata, Viewport } from "next";
import { ReactElement, ReactNode } from "react";
import { KarlaFont, RalewayFont, SyneFont } from "@/assets/font";
import { LayoutMeta } from "@/assets/meta";
import { cn } from "@/lib/utils/clsxUtils";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import "@/assets/globals.css";

export const viewport: Viewport = {
  userScalable: false,
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

type RootLayoutPropType = { readonly children: ReactNode };
export const metadata: Metadata = LayoutMeta;

export default function RootLayout({ children }: RootLayoutPropType) {
  return (
    <html lang="en">
      <body
        className={cn(
          SyneFont.variable,
          KarlaFont.variable,
          RalewayFont.variable,
          "no-scrollbar bg-deep-gray"
        )}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
