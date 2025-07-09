import ProgressBar from "@/components/generic/ProgressBar";
import { cn } from "@/lib/utils/clsxUtils";

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
        <main className="container grid grid-cols-2 gap-10">
          <div className="border border-white p-5 flex flex-col justify-between h-full">
            <div>
              <h2 className="font-KarlaFont font-semibold text-[150px] leading-none drop-shadow-lg">
                3<sup className="inline-block font-light">+</sup>
              </h2>
            </div>

            <div className="flex flex-col items-end justify-end">
              <span className="font-raleway-16-300">years</span>
              <span className="font-raleway-16-300">experience</span>
              <div className="flex items-center">
                <span className="w-12 h-px bg-white inline-block mr-2" />
                <span className="font-raleway-16-300">working</span>
              </div>
            </div>
          </div>

          <div className="py-5">
            <div>
              <h3 className="font-SyneFont leading-[1.2] pb-3 heading text-theme-primary font-medium">
                Delivering
                <br /> fast &
                <span className="heading text-section-light-white pl-2 font-light font-RalewayFont">
                  Best Websites
                </span>
              </h3>

              <p className="font-syne-14-300 text-regular-gray">
                ensure seamless cross-browser compatibility and responsive
                design, delivering optimal user experiences across all devices.
                We prioritize accessibility and usability, guaranteeing that
                your website performs flawlessly on every platform.
                Additionally, we offer comprehensive testing and maintenance to
                uphold quality standards and adapt to evolving technological
                needs.
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-10">
              {aboutProgressContent.length &&
                aboutProgressContent.map((item, i) => (
                  <ProgressBar
                    key={i}
                    progress={item.progress}
                    title={item.title}
                    progressbarStyle="h-2 rounded-none"
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
