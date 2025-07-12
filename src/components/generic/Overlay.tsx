import { cn } from "@/lib/utils/clsxUtils";
import { ReactNode, CSSProperties } from "react";

type GradientType = "radial" | "x" | "y";

type OverlayProps = {
  className?: string;
  color?: string; // hex, rgb, rgba,
  alpha?: number; // 0-100
  children: ReactNode;
  gradientType?: GradientType;
};

const hexToRgba = (hex: string, alpha: number) => {
  let r = 0,
    g = 0,
    b = 0;

  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return `rgba(${r},${g},${b},${alpha})`;
};

const Overlay = ({
  className,
  color = "black",
  alpha = 50,
  gradientType,
  children,
}: OverlayProps) => {
  const clampedAlpha = Math.min(Math.max(alpha, 0), 100) / 100;

  const isCustomColor =
    color.startsWith("#") ||
    color.startsWith("rgb") ||
    color.startsWith("rgba");

  const isCssVar = color.startsWith("var(") || color.startsWith("--");
  let colorWithAlpha = color;

  if (color.startsWith("#")) {
    colorWithAlpha = hexToRgba(color, clampedAlpha);
  } else if (color.startsWith("rgb") && !color.startsWith("rgba")) {
    colorWithAlpha = color
      .replace("rgb(", "rgba(")
      .replace(")", `, ${clampedAlpha})`);
  } else if (isCssVar) {
    colorWithAlpha = `var(${color})`;
  }

  let transparentColor = color;
  if (color.startsWith("#")) {
    transparentColor = hexToRgba(color, 0);
  } else if (color.startsWith("rgb")) {
    transparentColor = color.replace("rgb(", "rgba(").replace(")", `, 0)`);
  } else if (isCssVar) {
    transparentColor = `var(${color})`;
  }

  let backgroundImage = "";
  if (gradientType === "radial") {
    backgroundImage = `radial-gradient(circle, ${colorWithAlpha}, ${transparentColor})`;
  } else if (gradientType === "x") {
    backgroundImage = `linear-gradient(to right, ${colorWithAlpha}, ${transparentColor})`;
  } else if (gradientType === "y") {
    backgroundImage = `linear-gradient(to bottom, ${colorWithAlpha}, ${transparentColor})`;
  }

  return (
    <div
      className={cn(
        "w-full full",
        !isCustomColor &&
          !gradientType &&
          `bg-${color}/${Math.round(clampedAlpha * 100)}`,
        className
      )}
      style={{
        backgroundImage: backgroundImage || undefined,
        backgroundColor:
          !gradientType && (isCustomColor || isCssVar)
            ? colorWithAlpha
            : undefined,
      }}
    >
      <div className="relative z-20 pointer-events-auto w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default Overlay;
