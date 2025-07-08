"use client";
import { ThemeProvider } from "next-themes";
import { ReactElement, ReactNode, Suspense, useRef } from "react";
import { useScroll } from "@/hooks/useScroll";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import CustomScrollbar from "@/components/generic/CustomScrollbar";
import Fallback from "@/components/generic/Fallback";

type LayoutWrapperProptype = {
  readonly children: ReactNode | ReactElement;
};

const LayoutWrapper = ({ children }: LayoutWrapperProptype) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { getScrollPercent } = useScroll();

  const scrollProgress = getScrollPercent({
    ref: scrollContainerRef,
    initialHeight: "70px",
  });

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange={true}
    >
      <Suspense fallback={<Fallback />}>
        <CustomScrollbar
          scrollProgress={scrollProgress}
          ref={scrollContainerRef}
        >
          <Header />
          {children}
          <Footer />
        </CustomScrollbar>
      </Suspense>
    </ThemeProvider>
  );
};

export default LayoutWrapper;
