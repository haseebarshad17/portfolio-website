"use client";
import { jarallax } from "jarallax";
import React, { useRef, useEffect, ReactNode } from "react";
import "jarallax/dist/jarallax.min.css";
import { cn } from "@/lib/utils/clsxUtils";

type JarallaxProptype = {
  className?: string;
  children: ReactNode;
  background: ReactNode;
  speed?: number;
  isParallaxEnable?: boolean;
};

export default function Jarallax({
  className,
  children,
  speed = 0.4,
  background,
  isParallaxEnable = true,
}: JarallaxProptype) {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    jarallax(elementRef.current, {
      speed,
      disableParallax: !isParallaxEnable,
      type: "scroll",
    });

    return () => {
      if (elementRef.current) jarallax(elementRef.current, "destroy");
    };
  }, [speed, isParallaxEnable]);

  return (
    <section
      ref={elementRef}
      data-jarallax
      className={cn("jarallax", className)}
    >
      {background}
      <main className="z-10 relative">{children}</main>
    </section>
  );
}
