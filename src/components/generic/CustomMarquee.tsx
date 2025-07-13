import { cn } from "@/lib/utils/clsxUtils";
import { ReactNode } from "react";

type CustomMarqueeProptype = {
  className?: string;
  slideEffect?: boolean;
  disableOnInteraction?: boolean;
  direction?: "left" | "right";
  speedInSecond?: number;
  itemInteractionEffect?: boolean;
  content: ReactNode[];
  itemsPerSlide?: number;
  scrollShadow?: boolean;
};

const generateFilledItems = (
  items: ReactNode[],
  itemsPerSlide: number
): ReactNode[] => {
  const repeatCount = Math.ceil((itemsPerSlide * 2) / items.length);
  return Array(repeatCount)
    .fill(null)
    .flatMap(() => items);
};

const CustomMarquee = ({
  className,
  slideEffect = true,
  disableOnInteraction = false,
  direction = "left",
  speedInSecond = 120,
  itemInteractionEffect = true,
  content = [],
  itemsPerSlide = 1,
  scrollShadow = true,
}: CustomMarqueeProptype) => {
  if (!content.length) return null;

  const effectiveSpeed = speedInSecond <= 0 ? 0 : speedInSecond;
  const animationDirectionClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  const extendedItems = generateFilledItems(content, itemsPerSlide);
  const itemWidth = `${100 / itemsPerSlide}vw`;

  return (
    <div
      className={cn(
        "overflow-hidden w-full relative h-max",
        disableOnInteraction && "group",
        className
      )}
    >
      <div
        style={{ animationDuration: `${effectiveSpeed}s` }}
        className={cn(
          "flex items-end w-max ease-linear",
          slideEffect && effectiveSpeed > 0 && animationDirectionClass,
          disableOnInteraction && "group-hover:[animation-play-state:paused]"
        )}
      >
        {[...extendedItems, ...extendedItems].map((item, idx) => (
          <div
            key={idx}
            style={{ width: itemWidth }}
            className={cn(
              "flex-shrink-0 flex justify-center",
              itemInteractionEffect &&
                "grayscale hover:grayscale-0 transition-all duration-200"
            )}
          >
            {item}
          </div>
        ))}
      </div>

      {scrollShadow && (
        <>
          <span className="pointer-events-none z-20 absolute top-0 left-0 bottom-0 w-[70px] h-full bg-gradient-to-r from-white to-transparent" />
          <span className="pointer-events-none z-20 absolute top-0 right-0 bottom-0 w-[70px] h-full bg-gradient-to-l from-white to-transparent" />
        </>
      )}
    </div>
  );
};

export default CustomMarquee;
