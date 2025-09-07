// // app/resume/page.tsx

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Separator from "@/components/ui/separator";
import Button from "@/components/ui/button";
import {
  Download,
  Maximize2,
  Mail,
  Briefcase,
  Code2,
  Star,
  Award,
} from "lucide-react";

const page = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <main className="container section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Resume Preview */}
        <div className="flex justify-center">
          <Card className="shadow-2xl rounded-xl overflow-hidden bg-white border border-gray-200">
            <CardContent className="p-4">
              <Image
                src="/other/resume.webp"
                alt="resume-haseeb-pdf"
                width={950}
                height={1600}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </CardContent>
          </Card>
        </div>

        {/* Right: Resume Info */}
        <div className="flex flex-col gap-10">
          {/* Heading */}
          <div className="flex flex-col gap-3">
            <h1 className="font-SyneFont text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Beyond a Document,{" "}
              <span className="text-theme-primary">It’s My Story</span>
            </h1>
            <p className="text-gray-600 text-lg font-RalewayFont leading-relaxed">
              My resume is not just credentials on paper — it reflects years of
              learning, refining craft, and building human-centered experiences
              that merge <b>design, technology, and clarity</b> into lasting
              impact.
            </p>
          </div>

          <Separator
            orientation="horizontal"
            className="w-full h-px bg-deep-gray/10"
          />

          {/* Highlights with Icons */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Briefcase className="w-8 h-8 text-theme-primary" />
              <div>
                <h3 className="font-SyneFont text-xl font-semibold">
                  5+ Years
                </h3>
                <p className="text-gray-500 text-sm">Industry Experience</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Code2 className="w-8 h-8 text-theme-secondary" />
              <div>
                <h3 className="font-SyneFont text-xl font-semibold">
                  Full-Stack
                </h3>
                <p className="text-gray-500 text-sm">React, Next.js, Node</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Star className="w-8 h-8 text-indigo-600" />
              <div>
                <h3 className="font-SyneFont text-xl font-semibold">
                  30+ Projects
                </h3>
                <p className="text-gray-500 text-sm">Delivered Successfully</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="w-8 h-8 text-yellow-600" />
              <div>
                <h3 className="font-SyneFont text-xl font-semibold">
                  Recognition
                </h3>
                <p className="text-gray-500 text-sm">
                  Trusted by teams & clients
                </p>
              </div>
            </div>
          </div>

          <Separator
            orientation="horizontal"
            className="w-full h-px bg-deep-gray/10"
          />

          {/* Mini Journey / Timeline */}
          <div className="flex flex-col gap-5">
            <h2 className="font-SyneFont text-2xl text-gray-900">
              Journey Highlights
            </h2>
            <ul className="flex flex-col gap-6 border-l-2 border-gray-200 pl-6">
              <li>
                <span className="text-theme-primary font-semibold">
                  2018 — Frontend Enthusiast
                </span>
                <p className="text-gray-600 text-sm">
                  Started experimenting with React & design systems while at{" "}
                  <b>Freelance Projects</b>.
                </p>
              </li>
              <li>
                <span className="text-theme-secondary font-semibold">
                  2020 — Product Engineer
                </span>
                <p className="text-gray-600 text-sm">
                  Shaped startup products with polished UI at{" "}
                  <b>Spadasoft Inc.</b>.
                </p>
              </li>
              <li>
                <span className="text-indigo-600 font-semibold">
                  2022 — Full-Stack Developer
                </span>
                <p className="text-gray-600 text-sm">
                  Led projects, mentored juniors, refined workflows at{" "}
                  <b>NextVision Labs</b>.
                </p>
              </li>
              <li>
                <span className="text-yellow-600 font-semibold">
                  Today — Senior Frontend Engineer
                </span>
                <p className="text-gray-600 text-sm">
                  Driving scalable frontends & UX strategy at{" "}
                  <b>InnovateX Studio</b>.
                </p>
              </li>
            </ul>
          </div>

          <Separator
            orientation="horizontal"
            className="w-full h-px bg-deep-gray/10"
          />

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <Button
              size="max"
              variant="primary"
              href="/other/resume.pdf"
              className="rounded-full px-6 py-3"
              leftEl={<Download className="w-4 h-4 mr-2" />}
            >
              Download
            </Button>

            <Button
              size="max"
              variant="outlined"
              href="/other/resume.pdf"
              className="rounded-full px-6 py-3 text-gray-800 border-gray-300 hover:bg-gray-100"
              leftEl={<Maximize2 className="w-4 h-4 mr-2" />}
            >
              Fullscreen
            </Button>

            <Button
              size="max"
              variant="secondary"
              href="mailto:yourmail@example.com"
              className="rounded-full px-6 py-3"
              leftEl={<Mail className="w-4 h-4 mr-2" />}
            >
              Contact
            </Button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default page;
