// app/resume/page.tsx

import { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Separator from "@/components/ui/separator";
import Button from "@/components/ui/button";
import { Download, Maximize2, Mail } from "lucide-react";
import {
  highlightsContent,
  journeyHighlightsContent,
} from "@/components/pages/resume/content";
import Highlight from "@/components/pages/resume/Highlight";
import JourneyHighlight from "@/components/pages/resume/JourneyHighlight";

export const metadata: Metadata = { title: "Resume" };

const Page = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-400 via-white to-gray-100 pt-[80px] md:pt-[100px]">
      <main className="container section-padding grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <Card className="shadow-2xl rounded-xl overflow-hidden bg-white border border-gray-200">
          <CardContent className="p-3 sm:p-4">
            <div className="w-full max-w-[500px] mx-auto">
              <Image
                src="/other/resume.webp"
                alt="resume-haseeb-pdf"
                width={950}
                height={1600}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-8 sm:gap-10">
          <div className="pt-0 sm:pt-3 md:pt-5">
            <h1 className="font-SyneFont leading-tight heading font-bold text-gray-900">
              Beyond a Document,
              <br />
              <span className="text-theme-primary font-bold heading-break">
                It’s My Story
              </span>
            </h1>
            <p className="text-gray-600 heading-description font-RalewayFont leading-relaxed">
              My resume is not just credentials on paper — it reflects years of
              learning, refining craft, and building human-centered experiences
              that merge <b>design, technology, and clarity</b> into lasting
              impact.
            </p>
          </div>

          <Separator
            orientation="horizontal"
            className="w-full h-px bg-deep-gray/20"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlightsContent.map(
              ({ icon: Icon, title, description, iconStyles }, idx) => (
                <Highlight
                  key={idx}
                  title={title}
                  description={description}
                  icon={<Icon size={28} className={iconStyles} />}
                />
              )
            )}
          </div>

          <Separator
            orientation="horizontal"
            className="w-full h-px bg-deep-gray/20"
          />
          <div className="flex flex-col gap-5">
            <h2 className="font-SyneFont text-xl sm:text-2xl text-gray-900">
              Journey Highlights
            </h2>
            <div className="flex flex-col gap-6 border-l-2 border-gray-200 pl-4 sm:pl-6">
              {journeyHighlightsContent.map((item, idx) => (
                <JourneyHighlight
                  key={idx}
                  leftTtile={item.leftTitle}
                  rightTitle={item.rightTitle}
                  titleStyles={item.styles}
                  description={item.desription}
                />
              ))}
            </div>
          </div>

          <Separator
            orientation="horizontal"
            className="w-full h-px bg-deep-gray/20"
          />
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Button
              size="max"
              variant="primary"
              href="/other/resume.webp"
              className="rounded-full px-4 sm:px-6 sm:py-3 py-2"
              leftEl={
                <Download className="sm:w-4 sm:h-4 w-3 h-3 sm:mr-2 mr-1" />
              }
              download
            >
              Download
            </Button>

            <Button
              size="max"
              variant="outlined"
              href="/other/resume.webp"
              className="rounded-full px-4 sm:px-6 sm:py-3 py-2 text-gray-800 border-gray-300 hover:bg-gray-100"
              leftEl={
                <Maximize2 className="sm:w-4 sm:h-4 w-3 h-3 sm:mr-2 mr-1" />
              }
              target="_blank"
            >
              Fullscreen
            </Button>

            <Button
              size="max"
              variant="secondary"
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL ?? "haseebarshad1712@gmail.com"}`}
              className="rounded-full px-4 sm:px-6 sm:py-3 py-2"
              leftEl={<Mail className="sm:w-4 sm:h-4 w-3 h-3 sm:mr-2 mr-1" />}
            >
              Contact
            </Button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Page;
