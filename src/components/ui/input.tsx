"use client";

import * as React from "react";
import { cn } from "@/lib/utils/clsxUtils";
import { tv, type VariantProps } from "tailwind-variants";
import Button from "./button";
import { Send } from "lucide-react";

const inputVariants = tv({
  base: `
    flex w-full rounded-md border bg-background px-3 py-2 text-base
    ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none  
    disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200
  `,
  variants: {
    variant: {
      default: `
        border-none outline-none bg-deep-gray/75 placeholder:text-section-light-white/70 text-section-deep-white 
        rounded-full hover:bg-section-deep-white hover:text-black focus:bg-section-deep-white 
        focus:text-black hover:placeholder:text-black focus:placeholder:text-black px-5
        `,
      outlined: "border-2 border-theme-primary",
      ghost: "bg-transparent border-none",
      error: "border-red-500 text-red-600 placeholder:text-red-400",
    },
    size: {
      sm: "h-8 font-raleway-12-500",
      md: "h-10 font-raleway-14-500",
      lg: "h-12 font-raleway-14-500",
      max: "w-full h-max",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  className?: string;
  leftEl?: React.ReactElement;
  rightEl?: React.ReactElement;
  isSubmitButtonInside?: boolean;
  submitButtonIcon?: React.ReactElement;
  submitButtonSize?: number;
}

export const Input = ({
  rightEl,
  leftEl,
  className,
  variant,
  isSubmitButtonInside,
  submitButtonIcon,
  submitButtonSize,
  size,
  ...props
}: InputProps) => {
  return (
    <div
      className={cn("flex items-center gap-3 relative w-full h-max", className)}
    >
      {isSubmitButtonInside ? (
        <>
          {leftEl}
          <input
            style={{ height: submitButtonSize + "px" }}
            className={cn(
              inputVariants({ variant }),
              "z-10 w-full py-1 box-content"
            )}
            {...props}
          />
          <Button
            style={{
              width: submitButtonSize + "px",
              height: submitButtonSize + "px",
            }}
            size={"max"}
            className={cn(
              "rounded-full absolute z-20 top-1/2 right-1 -translate-y-1/2 flex items-center justify-center bg-theme-secondary ease duration-300"
            )}
            variant="secondary"
          >
            {submitButtonIcon ?? <Send size={18} strokeWidth={1} />}
          </Button>
          {rightEl}
        </>
      ) : (
        <>
          {leftEl}
          <input className={cn(inputVariants({ variant, size }))} {...props} />
          {rightEl}
        </>
      )}
    </div>
  );
};
