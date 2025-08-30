// app/page.tsx | hompage

"use client";
import "swiper/css";
import "swiper/css/navigation";
import dynamic from "next/dynamic";
import JarallaxImage from "@/components/generic/JaralaxImage";
import { useTextLengthAnimation } from "@/hooks/useTextLengthAnimation";
import Overlay from "@/components/generic/Overlay";
import {
  aboutProgress,
  experienceDetails,
  learningDetails,
} from "@/components/pages/homepage/content";
import HeroSection from "@/components/pages/homepage/HeroSection";
import AboutSection from "@/components/pages/homepage/AboutSection";
import LearningAndExperience from "@/components/pages/homepage/LearningAndExperience";
import InfoAndSkills from "@/components/pages/homepage/InfoAndSkills";
import WorksShowcasing from "@/components/pages/homepage/WorksShowcasing";
import TestimonialsSection from "@/components/pages/homepage/TestimonialsSection";
import CTASection from "@/components/pages/homepage/CTASection";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { cn } from "@/lib/utils/clsxUtils";
const Jarallax = dynamic(() => import("@/components/generic/Jarallax"), {
  ssr: false,
});

const HomePage = () => {
  const isMdDown = useBreakpoint("md", "down");
  const animatedText = useTextLengthAnimation({
    TextArray: [
      "Haseeb Arshad",
      "Frontend Dev",
      "UI/UX Expert",
      "React Engineer",
      "Next Pro",
    ],
    typingSpeed: 150,
    deletingSpeed: 150,
    pauseDuration: 2000,
  });

  return (
    <>
      <div>
        {!isMdDown ? (
          <Jarallax
            speed={0.4}
            isParallaxEnable={!isMdDown}
            background={
              <JarallaxImage
                src={"/images/main.jpg"}
                alt="young man in standing pose (background)"
                priority
              />
            }
            children={<HeroSection animatedText={animatedText} />}
            className="min-h-0 jarallax"
          />
        ) : (
          <div className="relative">
            <div
              className="absolute inset-0 -z-20 opacity-30 md:hidden"
              style={{
                background: `linear-gradient(to right, #7e22ce, #ec4899, #ef4444), 
                 linear-gradient(to bottom, rgba(255,255,255,0), rgba(0,0,0,0.7))`,
                backgroundBlendMode: "multiply",
              }}
            />
            <HeroSection animatedText={animatedText} />
          </div>
        )}
      </div>

      <Jarallax
        speed={0.4}
        isParallaxEnable={!isMdDown}
        background={
          <JarallaxImage
            src={isMdDown ? "/images/about-mobile.jpg" : "/images/about.webp"}
            alt="golden rings with ceramic hand"
          />
        }
        children={
          <Overlay
            alpha={40}
            color="#000000"
            gradientType={isMdDown ? "linear" : "x"}
          >
            <AboutSection aboutProgressContent={aboutProgress} />
          </Overlay>
        }
        className="min-h-0 jarallax"
        id="about"
      />

      <section
        className={cn(
          "section-padding bg-cover bg-no-repeat bg-center ",
          isMdDown
            ? "bg-[url('/images/resume-mobile.webp')]"
            : "bg-[url('/images/resume.webp')]"
        )}
        id="resume"
      >
        <main className="container">
          <LearningAndExperience
            learningDetailsData={learningDetails}
            experienceDetailsData={experienceDetails}
          />
        </main>
      </section>

      <InfoAndSkills />
      <div id="portfolio">
        <WorksShowcasing />
      </div>
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default HomePage;
