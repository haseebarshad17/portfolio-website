import * as React from "react";
import { cn } from "@/lib/utils/clsxUtils";
import { tv, type VariantProps } from "tailwind-variants";
import Link from "next/link";

export const buttonVariants = tv({
  base: `
  relative inline-flex items-center justify-center transition-all
  duration-150 ease-out focus:outline-none active:scale-[0.95] disabled:pointer-events-none 
  disabled:opacity-50 min-w-max outline-none
`,
  variants: {
    variant: {
      primary: "bg-theme-primary text-white hover:bg-theme-primary/80",
      secondary: "bg-theme-secondary text-black hover:bg-theme-secondary/70",
      ghost:
        "bg-section-deep-white text-black hover:bg-regular-graysection-deep-white/70",
      faded: "bg-opacity-50 text-theme-primary bg-theme-primary",
      transparent: "bg-transparent text-secondary",
      outlined: "border border-black text-black bg-transparent rounded-full",
      dark: "bg-black text-white hover:bg-black/75",
    },
    size: {
      sm: "w-[50px] h-[20px] font-karla-12-300",
      md: "w-[70px] h-[30px] font-karla-14-300",
      lg: "w-[120px] h-10 font-karla-14-500",
      full: "w-full h-10 font-karla-14-500",
      max: "w-max h-max font-karla-12-300",
    },
  },
  defaultVariants: {
    variant: "ghost",
    size: "md",
  },
});

export interface ButtonProps
  extends React.HtmlHTMLAttributes<
      HTMLButtonElement | HTMLLinkElement | HTMLAnchorElement
    >,
    VariantProps<typeof buttonVariants> {
  leftEl?: React.ReactNode;
  rightEl?: React.ReactNode;
  isSelected?: boolean;
  isDisabled?: boolean;
  href?: string | undefined;
  target?: "_blank" | "_self" | "_top" | "_parent";
  download?: boolean;
}

const Button = ({
  children,
  onClick,
  variant,
  size,
  className,
  leftEl,
  rightEl,
  isDisabled,
  isSelected = false,
  href = undefined,
  target,
  download = false,
  ...props
}: ButtonProps) => {
  const ButtonContent = () => (
    <>
      {leftEl && <span className="inline-block leading-none">{leftEl}</span>}
      {children ?? <text>Button</text>}
      {rightEl && <span className="inline-block leading-none">{rightEl}</span>}
    </>
  );

  return (
    <>
      {href === undefined ? (
        <button
          onClick={onClick}
          className={cn(
            "flex items-center",
            buttonVariants({ variant, size }),
            className,
            isSelected && "active bg-opacity-50"
          )}
          {...props}
        >
          <ButtonContent />
        </button>
      ) : (
        <a
          href={href}
          download={download}
          target={target ?? "_parent"}
          className={cn(
            "flex items-center",
            buttonVariants({ variant, size }),
            className,
            isSelected && "active bg-opacity-50"
          )}
          {...props}
        >
          <ButtonContent />
        </a>
      )}
    </>
  );
};

export default Button;
