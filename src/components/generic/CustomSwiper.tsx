"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { cn } from "@/lib/utils/clsxUtils";
import { ReactNode, useEffect, useState } from "react";
import { MoveRight, MoveLeft } from "lucide-react";
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
        <div className="absolute z-10 top-1/2 -translate-y-1/2 w-full h-max flex justify-between px-4 pointer-events-none">
          <div className="pointer-events-auto select-none">
            <Button
              size="sm"
              variant="outlined"
              aria-label="Previous"
              onClick={() => swiperInstance?.slidePrev()}
              className={cn(
                "w-10 h-10 transition-colors duration-200 bg-transparent text-black border-black hover:bg-black hover:text-white",
                isBeginning && "opacity-30 pointer-events-none",
                navigationStyle
              )}
              children={
                <MoveLeft
                  size={18}
                  strokeWidth={1}
                  className="ease duration-300"
                />
              }
            />
          </div>
          <div className="pointer-events-auto select-none">
            <Button
              size="sm"
              variant="outlined"
              aria-label="Next"
              onClick={() => swiperInstance?.slideNext()}
              className={cn(
                "w-10 h-10 transition-colors duration-200 bg-transparent text-black border-black hover:bg-black hover:text-white",
                isEnd && "opacity-30 pointer-events-none",
                navigationStyle
              )}
              children={
                <MoveRight
                  size={18}
                  strokeWidth={1}
                  className="ease duration-300"
                />
              }
            />
          </div>
        </div>
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
