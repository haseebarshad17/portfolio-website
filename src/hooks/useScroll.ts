import { RefObject, useEffect, useRef, useState } from "react";

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);

      if (currentY > lastScrollY.current) {
        setScrollDir("down");
      } else if (currentY < lastScrollY.current) {
        setScrollDir("up");
      }

      lastScrollY.current = currentY;
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = (target: number | RefObject<HTMLElement>): boolean => {
    if (typeof target === "number") return scrollY >= target;
    if (target?.current) return scrollY >= target.current.offsetTop;
    return false;
  };

  const getScrollPercent = ({
    ref,
    initialHeight = "0px",
  }: {
    ref: RefObject<HTMLElement>;
    initialHeight?: string;
  }): string => {
    if (!ref?.current)
      return initialHeight.endsWith("px")
        ? initialHeight
        : `${initialHeight}px`;

    const element = ref.current;
    const totalHeight = element.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    const initialHeightValue = parseInt(initialHeight, 10) || 0;
    const scrollPercent = (scrolled / totalHeight) * 100;

    const initialPercent = (initialHeightValue / window.innerHeight) * 100;
    const totalPercent = initialPercent + scrollPercent;
    return `${Math.min(totalPercent, 100).toFixed(1)}%`;
  };

  const getScrollbarDirection = () => scrollDir;
  const getScrollPosition = () => scrollY;

  return {
    isScrolled,
    getScrollPercent,
    getScrollbarDirection,
    getScrollPosition,
  };
};
