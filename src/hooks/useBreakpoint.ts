"use client";
import { useEffect, useState } from "react";
import { TwConfigScreens } from "@/../../tailwind.config";

const breakpoints = TwConfigScreens;

type BreakpointKey = keyof typeof breakpoints;
type Direction = "up" | "down";

function toPx(value: string | undefined): number {
  if (!value) return 0;
  return parseInt(value.replace("px", ""));
}

export function useBreakpoint<K extends BreakpointKey>(
  breakpointKey: K,
  direction: Direction = "up"
): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const rawValue = breakpoints[breakpointKey];
    const pxValue = toPx(rawValue as string);

    const check = () => {
      const width = window.innerWidth;
      const result = direction === "up" ? width >= pxValue : width <= pxValue;
      setMatches(result);
    };
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpointKey, direction]);

  return matches;
}
