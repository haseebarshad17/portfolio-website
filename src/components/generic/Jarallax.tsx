"use client";
import { cn } from "@/lib/utils/clsxUtils";
import { jarallax } from "jarallax";
import React, { useRef, useEffect, ReactNode } from "react";
import "jarallax/dist/jarallax.min.css";

type JarallaxProptype = {
  className?: string;
  children: ReactNode;
  background: ReactNode;
  speed?: number;
  isParallaxEnable?: boolean;
  id?: string;
};

export default function Jarallax({
  className,
  children,
  speed = 0.4,
  background,
  isParallaxEnable = true,
  id,
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
      id={id}
    >
      {background}
      <main className="z-10 relative">{children}</main>
    </section>
  );
}
