import { cn } from "@/lib/utils/clsxUtils";
import { learningAndExperienceType } from "./content";
import { useEffect, useState } from "react";
import Separator from "@/components/ui/separator";
import Button from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useBreakpoint } from "@/hooks/useBreakpoint";

type LearningAndExperienceProptype = {
  className?: string;
  learningDetailsData: learningAndExperienceType;
  experienceDetailsData: learningAndExperienceType;
};

const LearningAndExperience = ({
  className,
  learningDetailsData,
  experienceDetailsData,
}: LearningAndExperienceProptype) => {
  const isSmUp = useBreakpoint("sm", "up");
  const [learningAndExperienceData, setLearningAndExperienceData] = useState<
    Array<learningAndExperienceType>
  >([]);

  useEffect(() => {
    setLearningAndExperienceData([
      { ...learningDetailsData },
      { ...experienceDetailsData },
    ]);
  }, [learningDetailsData, experienceDetailsData]);

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:mb-10 mb-6">
        <div>
          <h3 className="heading font-SyneFont text-white leading-none tracking-tight font-medium">
            Exploring Learning <br />
            <span className="text-theme-primary heading-break font-normal">
              and growing
            </span>
          </h3>
          <p className="heading-description">
            Every step forward is backed by constant learning and meaningful
            experience — shaping who I am as a creative and a professional.
          </p>
        </div>

        <Button
          variant="transparent"
          className="text-theme-primary sm:font-raleway-14-500 font-raleway-12-500  capitalize gap-2 group hover:underline"
        >
          Download CV
          <ChevronRight
            size={isSmUp ? 18 : 14}
            className="text-theme-primary group-hover:translate-x-1 transition-transform"
          />
        </Button>
      </div>

      <div
        className={cn(
          "md:pt-12 sm:pt-8 pt-3 grid lg:grid-cols-2 grid-cols-1 gap-5 text-black",
          className
        )}
      >
        {learningAndExperienceData.length &&
          learningAndExperienceData.map((lxDataItem, idx) => (
            <div
              className={cn(
                "sm:p-5 p-3 bg-light-gray/30 backdrop-blur-md shadow-md h-max relative rounded-xs"
                // idx == 1 && "mt-[60px]"
              )}
              key={idx}
            >
              <h4
                className="absolute top-0 sm:left-5 left-3 -translate-y-1/2 text-2xl sm:text-3xl font-RalewayFont
                leading-none font-medium bg-gradient-to-r from-theme-primary to-white  bg-clip-text text-transparent"
              >
                {lxDataItem.heading}
              </h4>
              {lxDataItem.data.length &&
                lxDataItem.data.map((item, idxx) => (
                  <div key={idxx} className="capitalize pt-4 text-black">
                    <h6 className="font-KarlaFont md:text-lg text-[16px] font-medium leading-none">
                      {item.title}
                    </h6>
                    <label className="md:font-syne-14-500 font-syne-12-500 block text-black/90 leading-none">
                      {item.institute}
                    </label>
                    <p className="md:font-raleway-14-500 font-raleway-12-500 py-2 text-black/70 italic">
                      {item.description}
                    </p>
                    <strong className="block md:font-karla-14-500 font-karla-12-500 text-black">
                      {item.date}
                    </strong>

                    {idxx !== lxDataItem.data.length - 1 && (
                      <Separator
                        orientation="horizontal"
                        className="w-full h-[.5px] mt-4 bg-black/20"
                      />
                    )}
                  </div>
                ))}

              <Button
                size={isSmUp ? "md" : "sm"}
                href="/"
                variant="primary"
                children="complete resume"
                className={cn(
                  "w-max rounded-xs mt-6",
                  isSmUp
                    ? "px-5 font-syne-12-500"
                    : "px-3 h-max py-1 text-[10px] font-SyneFont font-medium"
                )}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default LearningAndExperience;
