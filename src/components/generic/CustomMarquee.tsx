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
};

const generateFilledItems = (
  items: ReactNode[],
  itemsPerSlide: number,
  slidesCount: number = 2
): ReactNode[] => {
  const totalNeeded = itemsPerSlide * slidesCount;
  const result: ReactNode[] = [];
  for (let i = 0; i < totalNeeded; i++) {
    result.push(items[i % items.length]);
  }

  return result;
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
}: CustomMarqueeProptype) => {
  if (!content.length) return null;

  const effectiveSpeed = speedInSecond <= 0 ? 0 : speedInSecond;
  const animationDirectionClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  const extendedItems = generateFilledItems(content, itemsPerSlide, 4);
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
          "flex items-center w-max",
          slideEffect && effectiveSpeed > 0 && animationDirectionClass,
          disableOnInteraction && "group-hover:[animation-play-state:paused]"
        )}
      >
        {extendedItems.map((item, idx) => (
          <div
            key={idx}
            style={{ width: itemWidth }}
            className={cn(
              "flex-shrink-0",
              itemInteractionEffect &&
                "grayscale hover:grayscale-0 transition-all duration-300"
            )}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomMarquee;
