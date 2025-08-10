import ProgressBar from "@/components/generic/ProgressBar";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils/clsxUtils";
import { ChevronRight } from "lucide-react";

type AboutSectionProptype = {
  aboutProgressContent: {
    title: string;
    progress: number;
  }[];
  className?: string;
};

const AboutSection = ({
  className,
  aboutProgressContent,
}: AboutSectionProptype) => {
  return (
    <>
      <section className={cn("section-padding", className)}>
        <main className="container lg:grid lg:grid-cols-2 flex flex-col-reverse lg:gap-10 sm:gap-5 gap-3">
          {/* <div className="border border-white p-5 flex flex-col justify-between h-full">
            <div className="text-white">
              <h2 className="font-KarlaFont font-semibold text-[100px] md:text-[150px] leading-none drop-shadow-lg">
                3<span className="text-5xl align-top font-light">+</span>
              </h2>
            </div>
            <div className="flex flex-col items-end justify-end text-white">
              <span className="font-raleway-16-300">years</span>
              <span className="font-raleway-16-300">experience</span>
              <div className="flex items-center">
                <span className="w-12 h-px bg-white inline-block mr-2" />
                <span className="font-raleway-16-300">working</span>
              </div>
            </div>
          </div>  */}

          {/* <div className="bg-white/5 border border-white/10 rounded-md p-6 h-full flex flex-col justify-between text-white shadow-md">
            <div>
              <h4 className="text-2xl font-semibold font-SyneFont mb-3">
                Quick Snapshot
              </h4>
              <ul className="text-white/80 font-karla-14-400 space-y-2 list-disc pl-5">
                <li>3+ Years Professional Experience</li>
                <li>100% Responsive Web Design</li>
                <li>Clean, Accessible Code</li>
                <li>Strong UI/UX Focus</li>
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-theme-primary/90 text-white px-3 py-1 rounded-sm text-xs font-medium">
                React
              </span>
              <span className="bg-white/10 px-3 py-1 rounded-sm text-xs">
                Tailwind
              </span>
              <span className="bg-white/10 px-3 py-1 rounded-sm text-xs">
                Next.js
              </span>
              <span className="bg-white/10 px-3 py-1 rounded-sm text-xs">
                Framer Motion
              </span>
            </div>
          </div> */}

          <div
            className="bg-white/5 border border-white/10 rounded-md sm:p-6 px-3 py-4 flex flex-col justify-between 
            h-full text-white sm:min-h-[250px] min-h-[200px]"
          >
            <div>
              <h4 className="md:text-2xl sm:text-lg text-[16px] font-semibold font-SyneFont pb-2">
                Creative Developer
              </h4>
              <p className="text-white/80 sm:font-raleway-14-300 font-raleway-12-300 leading-relaxed">
                With over 3 years of hands-on experience, I specialize in
                crafting responsive, accessible, and high-performance websites
                that blend creativity with usability.
              </p>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-4">
                <div className="text-5xl font-KarlaFont font-semibold">3+</div>
                <div className="uppercase tracking-wider sm:font-raleway-14-500 font-raleway-12-500 text-white/80">
                  Years of
                  <br />
                  Experience
                </div>
              </div>
            </div>
          </div>

          <div className="py-5">
            <div>
              <h3 className="font-SyneFont pb-3 heading text-theme-primary font-medium">
                Delivering <br />
                <span className="heading-break text-section-light-white font-RalewayFont">
                  best websites
                </span>
              </h3>
              <p className="font-karla-14-300 md:leading-[1.6] leading-[1.3] text-white/70">
                ensure seamless cross-browser compatibility and responsive
                design, delivering optimal user experiences across all devices.
                We prioritize accessibility and usability, guaranteeing that
                your website performs flawlessly on every platform.
                Additionally, we offer comprehensive testing and maintenance to
                uphold quality standards and adapt to evolving technological
                needs.
              </p>
            </div>
            <div className="flex flex-col sm:gap-4 gap-2 pt-10">
              {aboutProgressContent.length &&
                aboutProgressContent.map((item, i) => (
                  <ProgressBar
                    key={i}
                    progress={item.progress}
                    title={item.title}
                    titleStyle="sm:font-karla-14-300 font-karla-12-300 leading-none"
                    progressbarStyle="sm:h-2 h-1 rounded-none"
                    className="text-white/90 leading-none"
                  />
                ))}
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default AboutSection;
