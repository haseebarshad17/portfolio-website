import Button from "@/components/ui/button";
import WorkCard from "./WorkCard";
import { cn } from "@/lib/utils/clsxUtils";
import { ChevronRight } from "lucide-react";
import { worksShowCase } from "./content";

type WorksShowcasingProptype = {
  className?: string;
};

const WorksShowcasing = ({ className }: WorksShowcasingProptype) => {
  return (
    <>
      <section
        className={cn("bg-section-light-white section-padding", className)}
      >
        <div className="container mx-auto">
          <div className="flex items-end justify-between w-full">
            <div>
              <h3 className="font-SyneFont heading leading-none font-medium tracking-tight text-black">
                Designing a
                <br />
                <span className="text-black/70 font-RalewayFont heading-break font-normal">
                  better world today
                </span>
              </h3>
              <p className="heading-description">
                Meaningful design meets purposeful development. Explore recent
                projects where creativity and function shape user-focused
                digital experiences.
              </p>
            </div>

            <Button
              variant="transparent"
              className="text-black font-raleway-14-500 capitalize gap-2 group hover:underline"
            >
              View All Works
              <ChevronRight
                size={18}
                className="text-black group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-10 pt-10">
            {worksShowCase.length &&
              worksShowCase.map((work, i) => (
                <WorkCard
                  key={i}
                  title={work.title}
                  subtitle={work.subtitle}
                  imageSrc={work.imgSrc}
                  workLink={work.href}
                  className="cursor-pointer"
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorksShowcasing;
