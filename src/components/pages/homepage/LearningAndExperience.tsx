import { cn } from "@/lib/utils/clsxUtils";
import { learningAndExperienceType } from "./content";
import { useEffect, useState } from "react";
import Separator from "@/components/ui/separator";
import Button from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

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
      <div className="flex justify-center text-center">
        <h2 className="heading text-white leading-none font-SyneFont font-medium relative">
          Rooted in Learning <br />
          <div className="flex">
            <span className="pr-2 text-white">Evolved</span>
            <span className="font-light text-theme-primary">
              through Experience.
            </span>
          </div>
        </h2>
      </div>

      <div className={cn("pt-12 grid grid-cols-2 gap-5 text-black", className)}>
        {learningAndExperienceData.length &&
          learningAndExperienceData.map((lxDataItem, idx) => (
            <div
              className={cn(
                "p-5 bg-light-gray/30 backdrop-blur-md shadow-sm h-max relative",
                idx == 1 && "mt-[60px]"
              )}
              key={idx}
            >
              <h4
                className="absolute top-0 left-5 -translate-y-1/2 heading font-RalewayFont
                leading-none bg-gradient-to-r from-theme-primary to-white  bg-clip-text text-transparent"
              >
                {lxDataItem.heading}
              </h4>
              {lxDataItem.data.length &&
                lxDataItem.data.map((item, idxx) => (
                  <div key={idxx} className="capitalize pt-4">
                    <h6 className="font-KarlaFont text-lg font-medium leading-none">
                      {item.title}
                    </h6>
                    <label className="font-syne-14-500 block">
                      {item.institute}
                    </label>
                    <p className="font-raleway-14-500 py-2 text-black/70">
                      {item.description}
                    </p>
                    <strong className="block font-karla-14-500">
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
                size="md"
                href="/"
                variant="secondary"
                children="complete resume"
                rightEl={
                  <ChevronRight
                    strokeWidth={1.5}
                    size={14}
                    className="translate-y-px"
                  />
                }
                className="px-5 w-max rounded-xs mt-6 font-raleway-12-500 gap-1 shadow-md"
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default LearningAndExperience;
