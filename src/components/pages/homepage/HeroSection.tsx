import WatchVideoIcon from "./WatchVideoIcon";

export const HeroSection = ({ animatedText }: { animatedText: string }) => {
  return (
    <>
      <div className="container">
        <div className="pt-[220px] w-full">
          <h1 className="w-max text-[80px] font-medium font-SyneFont h-max ">
            <div className="flex items-center">
              <span className="font-RalewayFont text-theme-primary">
                Howdy,
              </span>
              <span className="font-SyneFont pl-[7px]">I'm</span>
            </div>

            <div className="relative pr-[12px] w-max leading-none">
              <span className="inline-flex select-none pointer-events-none leading-none w-0 overflow-hidden">
                placeholder
              </span>
              {animatedText}
              <span
                className="w-[5px] absolute top-1/2 -translate-y-1/2 bg-theme-secondary
                animate-carret-blink right-0 h-full"
              />
            </div>
          </h1>
          <p className="font-RalewayFont font-thin text-[21px] pt-2">
            frontend developer - UI/UX Expert
          </p>
        </div>

        <WatchVideoIcon className="pb-[100px] pt-10" />
      </div>
    </>
  );
};

export default HeroSection;
