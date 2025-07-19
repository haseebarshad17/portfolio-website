import * as React from "react";
import { cn } from "@/lib/utils/clsxUtils";
import { tv, type VariantProps } from "tailwind-variants";
import Link from "next/link";

const buttonVariants = tv({
  base: `
  relative inline-flex items-center justify-center rounded-md transition-all
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
    },
    size: {
      sm: "w-[50px] h-[20px] font-karla-12-300",
      md: "w-[70px] h-[30px] font-karla-14-300",
      lg: "w-[120px] h-10 font-karla-14-500",
      full: "w-full h-10 font-karla-14-500",
      max: "w-max h-max font-karla-12-300 p-0 pe-0 m-0 me-0 rounded-full bg-transparent",
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
  ...props
}: ButtonProps) => {
  const ButtonContent = () => (
    <>
      {leftEl && <span>{leftEl}</span>}
      {children ?? "Button"}
      {rightEl && <span>{rightEl}</span>}
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
        <Link
          href={href}
          className={cn(
            "flex items-center",
            buttonVariants({ variant, size }),
            className,
            isSelected && "active bg-opacity-50"
          )}
          {...props}
        >
          <ButtonContent />
        </Link>
      )}
    </>
  );
};

export default Button;
