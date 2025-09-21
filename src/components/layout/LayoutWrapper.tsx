"use client";
import { ThemeProvider } from "next-themes";
import {
  LegacyRef,
  ReactElement,
  ReactNode,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";
import { useScroll } from "@/hooks/useScroll";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import CustomScrollbar from "@/components/generic/CustomScrollbar";
import Fallback from "@/components/generic/Fallback";
import PreLoader from "../generic/PreLoader";
import useScrollLock from "@/hooks/useScrollLock";
import { usePathname } from "next/navigation";

type LayoutWrapperProptype = {
  readonly children: ReactNode | ReactElement;
};

const LayoutWrapper = ({ children }: LayoutWrapperProptype) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [locked, setLocked] = useState(true);
  const { getScrollPercent } = useScroll();
  const pathName = usePathname();

  const scrollProgress = getScrollPercent({
    ref: scrollContainerRef,
    initialHeight: "70px",
  });

  useScrollLock(locked);
  const isHome = pathName === "/";

  useEffect(() => {
    if (!isHome) setLocked(false);
  }, [isHome]);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Suspense fallback={<Fallback />}>
        <CustomScrollbar
          scrollProgress={scrollProgress as string}
          ref={scrollContainerRef as LegacyRef<HTMLDivElement> | undefined}
        >
          {isHome && <PreLoader onComplete={() => setLocked(false)} />}
          <Header />
          {children}
          <Footer />
        </CustomScrollbar>
      </Suspense>
    </ThemeProvider>
  );
};

export default LayoutWrapper;
