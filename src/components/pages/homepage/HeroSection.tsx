import { useBreakpoint } from "@/hooks/useBreakpoint";
import WatchVideoIcon from "./WatchVideoIcon";

export const HeroSection = ({ animatedText }: { animatedText: string }) => {
  const isLgUp = useBreakpoint("lg", "up");
  const isMdUp = useBreakpoint("md", "up");
  const isSmUp = useBreakpoint("sm", "up");

  return (
    <>
      <div className="container xl:pt-[260px] md:pt-[200px] sm:pt-[170px] pt-[140px] md:pb-[100px] pb-[70px]">
        <div className="w-full pr-20">
          <h1
            className="xl:text-[58px] lg:text-[54px] md:text-[50px] sm:text-[46px] text-[38px] font-medium 
            font-SyneFont text-white leading-none"
          >
            <div className="flex items-center">
              <span className="font-RalewayFont text-theme-primary">
                Howdy,
              </span>
              <span className="font-SyneFont pl-[7px] text-white">I'm</span>
            </div>

            <div className="relative overflow-hidden whitespace-nowrap max-w-full w-max">
              <span className="inline-block truncate align-top max-w-full pr-3 leading-none">
                {animatedText}
              </span>
              <span
                className="leading-none w-[5px] absolute top-1/2 -translate-y-1/2 bg-theme-secondary 
                animate-carret-blink right-0 h-full"
              />
            </div>
          </h1>

          <p className="font-RalewayFont font-thin xl:text-[21px] md:text-[18px] sm:text-[16px] text-[14px] pt-2 text-white">
            frontend developer - UI/UX Expert
          </p>
        </div>

        <WatchVideoIcon
          iconSize={isLgUp ? 70 : isMdUp ? 60 : isSmUp ? 50 : 42}
          playIconSize={isLgUp ? 16 : isMdUp ? 14 : isSmUp ? 12 : 10}
          className="pt-5 gap-2"
          seperatorStyle="w-3 md:w-8 lg:w-10"
          iconWrapperStyle="gap-2"
          iconTitleStyle="text-[10px] sm:text-[12px]"
        />
      </div>
    </>
  );
};

export default HeroSection;
