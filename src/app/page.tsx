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
      "Frontend Dev..",
      "React 18+ Expert",
      "Next 15+ Pro",
      "UI Engineer",
      "JS Dev..",
      "TS Coder",
      "Pixel-Perfect",
    ],
    typingSpeed: 150,
    deletingSpeed: 150,
    pauseDuration: 2000,
  });

  return (
    <>
      <Jarallax
        speed={0.4}
        isDisabled={isMdDown}
        background={
          <JarallaxImage
            src={isMdDown ? "/images/main-mobile.webp" : "/images/main.jpg"}
            alt="young man in standing pose (background)"
            priority
          />
        }
        children={<HeroSection animatedText={animatedText} />}
        className="min-h-0 jarallax"
      />

      <Jarallax
        speed={0.4}
        isDisabled={isMdDown}
        background={
          <JarallaxImage
            src={isMdDown ? "/images/about-mobile.webp" : "/images/about.webp"}
            alt="hand statue indicating rings"
          />
        }
        children={
          <Overlay color="#000000" alpha={40} gradientType="x">
            <AboutSection aboutProgressContent={aboutProgress} />
          </Overlay>
        }
        className="min-h-0 jarallax"
      />

      <section
        className={cn(
          "section-padding bg-cover bg-no-repeat bg-center ",
          isMdDown
            ? "bg-[url('/images/resume-mobile.webp')]"
            : "bg-[url('/images/resume.webp')]"
        )}
      >
        <main className="container">
          <LearningAndExperience
            learningDetailsData={learningDetails}
            experienceDetailsData={experienceDetails}
          />
        </main>
      </section>

      <InfoAndSkills />
      <WorksShowcasing />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default HomePage;
