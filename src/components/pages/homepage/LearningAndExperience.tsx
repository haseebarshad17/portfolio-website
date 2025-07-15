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
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          <h3 className="heading font-SyneFont text-white leading-none tracking-tight">
            Exploring Learning <br />
            <span className="text-theme-primary heading-break">
              And Growing
            </span>
          </h3>
          <p className="heading-description">
            Every step forward is backed by constant learning and meaningful
            experience — shaping who I am as a creative and a professional.
          </p>
        </div>

        <Button
          variant="transparent"
          className="text-theme-primary font-raleway-14-500 capitalize gap-2 group hover:underline"
        >
          Download CV
          <ChevronRight
            size={18}
            className="text-theme-primary group-hover:translate-x-1 transition-transform"
          />
        </Button>
      </div>

      <div className={cn("pt-12 grid grid-cols-2 gap-5 text-black", className)}>
        {learningAndExperienceData.length &&
          learningAndExperienceData.map((lxDataItem, idx) => (
            <div
              className={cn(
                "p-5 bg-light-gray/30 backdrop-blur-md shadow-md h-max relative",
                idx == 1 && "mt-[60px]"
              )}
              key={idx}
            >
              <h4
                className="absolute top-0 left-5 -translate-y-1/2 text-3xl font-RalewayFont
                leading-none font-medium bg-gradient-to-r from-theme-primary to-white  bg-clip-text text-transparent"
              >
                {lxDataItem.heading}
              </h4>
              {lxDataItem.data.length &&
                lxDataItem.data.map((item, idxx) => (
                  <div key={idxx} className="capitalize pt-4 text-black">
                    <h6 className="font-KarlaFont text-lg font-medium leading-none">
                      {item.title}
                    </h6>
                    <label className="font-syne-14-500 block text-black/90">
                      {item.institute}
                    </label>
                    <p className="font-raleway-14-500 py-2 text-black/70">
                      {item.description}
                    </p>
                    <strong className="block font-karla-14-500 text-black">
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
                variant="primary"
                children="complete resume"
                className="px-5 w-max rounded-xs mt-6 font-syne-12-500"
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default LearningAndExperience;
