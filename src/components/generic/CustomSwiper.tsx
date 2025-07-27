"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { cn } from "@/lib/utils/clsxUtils";
import { ReactNode, useEffect, useState } from "react";
import { MoveRight, MoveLeft, ChevronRight, ChevronLeft } from "lucide-react";
import Button from "@/components/ui/button";

type Props = {
  children: ReactNode;
  className?: string;
  slideSpacing?: number;
  autoPlay?: boolean;
  speed?: number;
  delay?: number;
  pagination?: boolean;
  navigation?: boolean;
  breakpoints?: any;
  navigationStyle?: string;
  navIconSize?: number;
  navigationInside?: boolean;
  navBtnVariant?:
    | "ghost"
    | "primary"
    | "secondary"
    | "faded"
    | "transparent"
    | "outlined"
    | "dark";
};

export default function CustomSwiper({
  children,
  className,
  slideSpacing = 20,
  autoPlay = false,
  speed = 800,
  delay = 3000,
  pagination = false,
  navigation = false,
  breakpoints,
  navigationStyle,
  navIconSize,
  navigationInside,
  navBtnVariant,
}: Props) {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (!swiperInstance) return;
    const updateNavState = () => {
      setIsBeginning(swiperInstance.isBeginning);
      setIsEnd(swiperInstance.isEnd);
    };

    swiperInstance.on("slideChange", updateNavState);
    updateNavState();

    return () => swiperInstance.off("slideChange", updateNavState);
  }, [swiperInstance]);

  return (
    <div className={cn("relative", className)}>
      {navigation && (
        <>
          {navigationInside ? (
            <div className="absolute z-10 top-1/2 -translate-y-1/2 w-full h-max flex justify-between px-4 pointer-events-none">
              <div className="pointer-events-auto select-none">
                <Button
                  variant={navBtnVariant ?? "outlined"}
                  aria-label="Previous"
                  onClick={() => swiperInstance?.slidePrev()}
                  className={cn(
                    "w-10 h-10 transition-colors duration-200 bg-transparent text-black border-black hover:bg-black hover:text-white",
                    isBeginning && "opacity-30 pointer-events-none",
                    navigationStyle
                  )}
                  children={
                    <MoveLeft
                      size={navIconSize ?? 18}
                      strokeWidth={1}
                      className="ease duration-300"
                    />
                  }
                />
              </div>
              <div className="pointer-events-auto select-none">
                <Button
                  variant={navBtnVariant ?? "outlined"}
                  aria-label="Next"
                  onClick={() => swiperInstance?.slideNext()}
                  className={cn(
                    "w-10 h-10 transition-colors duration-200 bg-transparent text-black border-black hover:bg-black hover:text-white",
                    isEnd && "opacity-30 pointer-events-none",
                    navigationStyle
                  )}
                  children={
                    <MoveRight
                      size={navIconSize ?? 18}
                      strokeWidth={1}
                      className="ease duration-300"
                    />
                  }
                />
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-start gap-2 my-4">
                <Button
                  variant={navBtnVariant ?? "primary"}
                  onClick={() => swiperInstance?.slidePrev()}
                  isDisabled={isBeginning}
                  leftEl={
                    <ChevronLeft size={navIconSize ?? 18} strokeWidth={1.5} />
                  }
                  className={cn(
                    "px-4 gap-2 transition rounded-sm",
                    isBeginning && "opacity-40 pointer-events-none",
                    navigationStyle
                  )}
                >
                  Prev
                </Button>
                <Button
                  variant={navBtnVariant ?? "primary"}
                  onClick={() => swiperInstance?.slideNext()}
                  isDisabled={isBeginning}
                  rightEl={
                    <ChevronRight size={navIconSize ?? 18} strokeWidth={1.5} />
                  }
                  className={cn(
                    "px-4 gap-2 transition rounded-sm",
                    isEnd && "opacity-40 pointer-events-none",
                    navigationStyle
                  )}
                >
                  Next
                </Button>
              </div>
            </>
          )}
        </>
      )}

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={slideSpacing}
        slidesPerView={1}
        speed={speed}
        breakpoints={breakpoints}
        onSwiper={setSwiperInstance}
        autoplay={
          autoPlay
            ? {
                delay,
                disableOnInteraction: false,
              }
            : false
        }
        pagination={pagination ? { clickable: true } : false}
        className="select-none w-full h-max"
      >
        {Array.isArray(children)
          ? children.map((child, i) => (
              <SwiperSlide key={i}>{child}</SwiperSlide>
            ))
          : children}
      </Swiper>
    </div>
  );
}
