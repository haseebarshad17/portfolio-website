"use client";
import { useMediaQuery } from "usehooks-ts";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);
const breakpoints = fullConfig?.theme?.screens ?? {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "992px",
  xl: "1170px",
};

type BreakpointKey = keyof typeof breakpoints;
type Direction = "up" | "down";

function toPx(value: string | undefined): string {
  if (!value) return "0px";
  return value;
}

export function useBreakpoint<K extends BreakpointKey>(
  breakpointKey: K,
  direction: Direction = "up"
): boolean {
  const rawValue = breakpoints[breakpointKey];
  const pxValue = toPx(rawValue as string);

  const query =
    direction === "up" ? `(min-width: ${pxValue})` : `(max-width: ${pxValue})`;

  return useMediaQuery(query);
}
