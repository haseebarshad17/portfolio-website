import CustomSwiper from "@/components/generic/CustomSwiper";
import { testimonials } from "@/components/pages/homepage/content";
import Image from "next/image";
import Quotes from "@/assets/svg/Quotes";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { cn } from "@/lib/utils/clsxUtils";

export default function TestimonialsSection() {
  const isMdUp = useBreakpoint("md", "up");
  const isSmUp = useBreakpoint("sm", "up");

  return (
    <section className="bg-section-deep-white">
      <div className="container">
        <main className="section-padding">
          <div className="text-left max-w-4xl">
            <h3 className="heading font-SyneFont font-medium tracking-tight text-black leading-none">
              Customer voices
              <br />
              <span className="heading-break font-RalewayFont text-black/80 inline-block">
                hear what they say!
              </span>
            </h3>

            <p className="heading-description">
              From product design to development support, our partners share
              their experience working with our team across fast-moving
              industries and platforms.
            </p>
          </div>

          <div className="sm:pt-16 pt-10">
            <CustomSwiper
              navigation
              className={cn("w-full", !isMdUp && "flex flex-col-reverse")}
              speed={350}
              pagination={false}
              slideSpacing={isMdUp ? 32 : 10}
              navigationInside={isMdUp ? true : false}
              navIconSize={isMdUp ? 18 : 12}
              navBtnVariant={"outlined"}
              navigationStyle={cn(
                "lowercase text-[10px] font-normal font-RalewayFont",
                isMdUp ? "w-10 h-10" : isSmUp ? "w-8 h-8" : "w-7 h-7"
              )}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
              }}
            >
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  role="group"
                  className="flex xs:items-center md:gap-12 xs:gap-8 gap-5 md:w-[calc(100%_-_250px)] w-full
                  m-auto h-full flex-col xs:flex-row pr-16 md:pr-0"
                >
                  <div className="flex-shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={200}
                      className="md:w-[200px] xs:w-[120px] w-[140px] h-auto object-cover rounded-lg"
                    />
                  </div>

                  <div className="py-2">
                    <p className="text-gray-800 md:text-lg text-[14px] leading-relaxed max-w-xl italic relative">
                      <Quotes className="md:w-8 w-7 h-max absolute top-1 left-1 -translate-y-[75%] xs:-translate-y-1/2 xs:-translate-x-1/2" />
                      “{item.text}”
                    </p>

                    <div className="md:pt-10 xs:pt-7 pt-5">
                      <div className="flex items-center xs:gap-4 gap-2">
                        <div className="xs:w-[70px] w-10 h-[2px] bg-black" />
                        <p className="text-black font-semibold md:font-syne-16-500 xs:font-syne-14-500 font-syne-12-500 leading-none">
                          {item.name}
                        </p>
                      </div>
                      <p className="md:font-raleway-14-500 font-raleway-12-500 italic text-gray-500">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </CustomSwiper>
          </div>
        </main>
      </div>
    </section>
  );
}
