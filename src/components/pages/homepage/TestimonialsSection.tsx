"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import type { Swiper as SwiperType } from "swiper";
import { ArrowLeft, ArrowRight } from "lucide-react";
import clsx from "clsx";

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Marketing Manager",
    text: "This platform transformed our approach to digital communication. It's fast, intuitive, and our customers love it.",
    image: "https://i.pravatar.cc/300?img=32",
  },
  {
    id: 2,
    name: "Ali Raza",
    role: "CEO, Raza Corp",
    text: "A truly innovative product that delivered great results for our team. The support is also top-notch!",
    image: "https://i.pravatar.cc/300?img=45",
  },
  {
    id: 3,
    name: "Mehak Khan",
    role: "Product Designer",
    text: "I’ve used several tools, but this one stands out with its elegant UI and practical features.",
    image: "https://i.pravatar.cc/300?img=12",
  },
];

const TestimonialsSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className="bg-section-deep-white">
      <div className="container relative">
        <main className="section-padding">
          {/* Heading */}
          <h3 className="heading font-SyneFont font-medium tracking-tight text-black text-left">
            Customer voices
            <br />
            <span className="heading-break font-RalewayFont text-black/80 inline-block">
              hear what they say!
            </span>
          </h3>

          <div className="pt-14 relative">
            {/* Navigation Buttons */}
            {activeIndex > 0 && (
              <button
                onClick={handlePrev}
                className={clsx(
                  "absolute top-1/2 -translate-y-1/2 left-0 z-10",
                  "border border-black text-black rounded-full w-11 h-11 flex items-center justify-center",
                  "hover:bg-black hover:text-white transition-colors duration-200"
                )}
                aria-label="Previous"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}

            {activeIndex < testimonials.length - 1 && (
              <button
                onClick={handleNext}
                className={clsx(
                  "absolute top-1/2 -translate-y-1/2 right-0 z-10",
                  "border border-black text-black rounded-full w-11 h-11 flex items-center justify-center",
                  "hover:bg-black hover:text-white transition-colors duration-200"
                )}
                aria-label="Next"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            )}

            {/* Swiper */}
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="w-full px-6"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center max-w-5xl mx-auto">
                    {/* Avatar */}
                    <div className="flex-shrink-0 max-h-[200px] h-full">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-32 h-full max-h-[200px] rounded-xl object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center">
                      <p className="text-gray-800 text-lg mb-4 leading-relaxed max-w-xl">
                        “{testimonial.text}”
                      </p>

                      <div className="flex items-center gap-4 mt-4">
                        <div className="w-24 h-[2px] bg-black" />
                        <p className="text-black font-semibold text-lg">
                          {testimonial.name}
                        </p>
                      </div>

                      <p className="text-sm text-gray-500 mt-1">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </main>
      </div>
    </section>
  );
};

export default TestimonialsSection;
