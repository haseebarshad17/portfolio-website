"use client";
import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils/clsxUtils";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  className?: string;
  sideOffset?: number;
  delayDuration?: number;
  pointerTouch?: boolean;
}

const Tooltip = ({
  content,
  children,
  side = "top",
  align = "center",
  className,
  sideOffset = 4,
  delayDuration = 200,
  pointerTouch = false,
}: TooltipProps) => {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration}>
      <TooltipPrimitive.Root disableHoverableContent={!pointerTouch}>
        <TooltipPrimitive.Trigger>{<>{children}</>}</TooltipPrimitive.Trigger>

        <TooltipPrimitive.Content
          side={side}
          align={align}
          sideOffset={sideOffset}
          className={cn(
            `z-50 rounded-sm border border-gray-200 bg-white px-2 py-1 
             font-karla-14-300 text-xs text-black shadow-lg transition-opacity 
             animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out 
             data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 
             data-[side=bottom]:slide-in-from-top-2 
             data-[side=left]:slide-in-from-right-2 
             data-[side=right]:slide-in-from-left-2 
             data-[side=top]:slide-in-from-bottom-2`,
            !pointerTouch && "pointer-events-none select-none",
            className
          )}
        >
          {content}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export default Tooltip;
