"use client";
import { jarallax } from "jarallax";
import React, { useRef, useEffect, ReactElement, ReactNode } from "react";
import "jarallax/dist/jarallax.min.css";
import { cn } from "@/lib/utils/clsxUtils";

type JarallaxProptype = {
  className?: string;
  children: ReactElement | ReactNode;
  speed?: number;
};

export default function Jarallax({
  className,
  children,
  speed = 0.4,
}: JarallaxProptype) {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (elementRef.current) {
      jarallax(elementRef.current, {
        speed,
        disableParallax: false,
        type: "scroll",
      });
    }

    return () => {
      if (elementRef.current) jarallax(elementRef.current, "destroy");
    };
  }, [speed]);

  return (
    <div ref={elementRef} className={cn("jarallax", className)} data-jarallax>
      {children}
    </div>
  );
}
