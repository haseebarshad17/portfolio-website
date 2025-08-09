import { motion } from "framer-motion";
import WatchVideoIcon from "./WatchVideoIcon";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import Button from "@/components/ui/button";
import { socialLinks } from "./content";
import { cn } from "@/lib/utils/clsxUtils";
import { ClassValue } from "clsx";

type HeroSectionProptype = {
  animatedText: string;
  className?: ClassValue;
};

export default function HeroSection({
  animatedText,
  className,
}: HeroSectionProptype) {
  const isMdUp = useBreakpoint("md", "up");

  return (
    <div
      className={cn(
        "relative w-full h-max flex flex-col lg:pt-[220px] md:pt-[180px] pt-[150px]",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 -z-10",
          isMdUp
            ? "from-black/30 via-black/30 to-black/40"
            : "from-black/50 via-black/80 to-black/80"
        )}
      />
      <motion.div
        className="absolute top-10 left-5 w-20 h-20 rounded-full bg-theme-secondary/50 blur-3xl -z-10"
        animate={{ y: [0, 120, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeIn" }}
      />

      <div className="container relative md:pb-28 pb-24">
        <span
          className="uppercase md:font-syne-12-300 sm:tracking-[3px] sm:text-theme-primary text-white sm:pb-1 pb-2 
          inline-block leading-normal text-[10px] font-light font-RalewayFont"
        >
          Crafting Digital <br className="sm:hidden" /> Experiences
        </span>

        <h1
          className="xl:text-[58px] lg:text-[54px] md:text-[50px] text-[48px] font-medium 
            font-SyneFont text-white leading-none pr-10"
        >
          <div className="flex items-center md:leading-[120%] leading-none">
            <span className="font-RalewayFont text-theme-primary">Howdy,</span>
            <span className="font-SyneFont pl-[7px] text-white">I'm</span>
          </div>

          <div className="relative overflow-hidden whitespace-nowrap max-w-full w-max h-max">
            <span
              children="placeholder"
              className="w-0 overflow-hidden inline-block leading-none"
            />
            <span className="inline-block truncate align-top max-w-full pr-3 leading-none">
              {animatedText}
            </span>
            <span
              className="leading-none lg:w-[5px] md:w-1 w-[3px] absolute top-[40%] -translate-y-1/2
              bg-theme-secondary animate-carret-blink right-0 h-[calc((100%)-10px)]"
            />
          </div>
        </h1>

        <p className="text-white/80 lg:font-raleway-16-300 md:font-raleway-14-300 font-raleway-12-300 mb-5 max-w-md pr-14">
          A creative front-end developer passionate about building interactive,
          accessible, and high-performance web experiences with a focus on
          modern design trends.
        </p>

        <div className="flex flex-wrap md:gap-3 gap-2 mb-6">
          <Button
            size="max"
            variant="primary"
            href="#works"
            className="bg-theme-primary rounded-full hover:bg-theme-primary/80 border border-theme-primary
            text-[10px] md:font-raleway-12-300 font-RalewayFont font-light sm:px-6 sm:py-2 px-4 py-[6px]"
          >
            View Projects
          </Button>
          <Button
            size="max"
            variant="outlined"
            href="#contact"
            className="bg-white/10 border border-white/20 rounded-full hover:bg-white/20 text-white
            text-[10px] md:font-raleway-12-300 font-RalewayFont font-light sm:px-6 sm:py-2 px-4 py-[6px]"
          >
            Contact Me
          </Button>
        </div>

        <WatchVideoIcon
          iconSize={40}
          playIconSize={12}
          seperatorStyle="w-4"
          iconWrapperStyle="gap-1.5"
          iconTitleStyle="text-[11px]"
        />
      </div>

      <div className="container">
        <div className="relative">
          <div className="absolute bottom-0 left-0 z-20 -mb-1">
            <div className="bg-white/5 backdrop-blur-md border-x border-t border-white/10 rounded-t-lg md:px-5 px-3 py-3 flex items-center shadow-lg w-fit">
              {socialLinks.map((item, i) => (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ease duration-300 group px-[6px] leading-none"
                >
                  {
                    <span className="leading-none inline-block border-b border-transparent group-hover:border-white ease duration-300">
                      <item.content className="md:w-5 md:h-5 w-4 h-4 text-white group-hover:-translate-y-2 duration-300 ease-out" />
                    </span>
                  }
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
