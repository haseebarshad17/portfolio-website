// app/page.tsx || hompage

"use client";
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
import Button from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import WorkCard from "@/components/pages/homepage/WorkCard";
const Jarallax = dynamic(() => import("@/components/generic/Jarallax"), {
  ssr: false,
});

const HomePage = () => {
  const animatedText = useTextLengthAnimation({
    TextArray: [
      "Haseeb Arshad",
      "Frontend Dev",
      "UI/UX Specialist",
      "React Expert",
      "Next Engineer",
      "Creative Coder",
      "Interface Architect",
      "Programming Pro",
    ],
    typingSpeed: 150,
    deletingSpeed: 150,
    pauseDuration: 2000,
  });

  return (
    <>
      <Jarallax speed={0.4} className="min-h-[80dvh]">
        <JarallaxImage
          src="/images/main.jpg"
          alt="hero-background-image"
          priority
        />
        <HeroSection animatedText={animatedText} />
      </Jarallax>
      <Jarallax speed={0.4} className="jarallax">
        <JarallaxImage src="/images/about.webp" alt="about-background-image" />
        <Overlay color="#000000" alpha={40} gradientType="x">
          <AboutSection aboutProgressContent={aboutProgress} />
        </Overlay>
      </Jarallax>
      <section className="section-padding bg-[url('/images/resume.webp')] bg-cover bg-no-repeat bg-center">
        <main className="container">
          <LearningAndExperience
            learningDetailsData={learningDetails}
            experienceDetailsData={experienceDetails}
          />
        </main>
      </section>

      <InfoAndSkills />

      <section className="bg-section-light-white section-padding">
        <div className="container mx-auto">
          <div className="flex items-end justify-between w-full">
            <div>
              <h2 className="font-SyneFont heading leading-none font-medium tracking-tight text-black">
                Designing a
                <br />
                <span className="text-black/70 font-RalewayFont heading-break">
                  better world today
                </span>
              </h2>
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
            <WorkCard />
            <WorkCard />
            <WorkCard />
            <WorkCard />
            <WorkCard />
            <WorkCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
