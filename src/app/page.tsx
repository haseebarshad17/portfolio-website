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
        <JarallaxImage src="/images/main.jpg" alt="background" priority />
        <HeroSection animatedText={animatedText} />
      </Jarallax>
      <Jarallax speed={0.4} className="jarallax">
        <JarallaxImage src="/images/about.webp" alt="about-background" />
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
    </>
  );
};

export default HomePage;
