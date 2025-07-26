import CustomSwiper from "@/components/generic/CustomSwiper";
import { testimonials } from "@/components/pages/homepage/content";
import Image from "next/image";
import Quotes from "@/assets/svg/Quotes";

export default function TestimonialsSection() {
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

          <div className="pt-16">
            <CustomSwiper
              navigation
              className="w-full"
              speed={350}
              pagination={false}
              slideSpacing={32}
              // navigationStyle="border-theme-secondary text-black bg-theme-secondary hover:bg-theme-secondary hover:text-black"
              // navigationStyle="border-theme-primary text-white bg-theme-primary hover:bg-theme-primary hover:text-white"
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
                  className="flex items-center gap-12 md:w-[calc(100%_-_250px)] w-[calc(100%_-_100px)] m-auto h-full"
                >
                  <div className="flex-shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={200}
                      className="md:w-[200px] w-[120px] h-auto object-cover"
                    />
                  </div>

                  <div className="py-4">
                    <p className="text-gray-800 text-lg leading-relaxed max-w-xl relative italic">
                      “{item.text}”
                      <Quotes className="w-12 h-16 absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2" />
                    </p>

                    <div className="pt-10">
                      <div className="flex items-center gap-4">
                        <div className="w-[70px] h-[2px] bg-black" />
                        <p className="text-black font-semibold font-syne-16-500">
                          {item.name}
                        </p>
                      </div>
                      <p className="font-raleway-14-500 italic text-gray-500">
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
