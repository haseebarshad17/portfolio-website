"use client";
import { cn } from "@/lib/utils/clsxUtils";
import { forwardRef, ReactElement, ReactNode } from "react";

type CustomScrollbarProptype = {
  children: ReactNode | ReactElement;
  scrollProgress: string;
  trackStyle?: string;
  thumbStyle?: string;
};

const CustomScrollbar = forwardRef<HTMLDivElement, CustomScrollbarProptype>(
  ({ children, scrollProgress, trackStyle, thumbStyle }, ref) => {
    return (
      <div ref={ref} className="h-max no-scrollbar">
        <div
          className={cn(
            "bg-deep-gray w-max h-full fixed top-0 bottom-0 right-0 z-full",
            trackStyle
          )}
        >
          <span
            style={{ height: scrollProgress }}
            className={cn(
              "bg-theme-primary w-[3px] rounded-b-full block",
              thumbStyle
            )}
          />
        </div>

        {children && <>{children}</>}
      </div>
    );
  }
);

CustomScrollbar.displayName = "CustomScrollbar-forwardRef";
export default CustomScrollbar;
