"use client";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  FileType2,
  FileCode2,
  FileJson,
  FileText,
  FileType,
  GitBranch,
} from "lucide-react";
import Image from "next/image";
import Tooltip from "@/components/ui/tooltip";
import { personalInfoDetails } from "./content";

export default function InfoSection() {
  return (
    <section className="w-full bg-white text-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT — TEXT */}
        <div className="space-y-5">
          <h1 className="heading leading-tight font-SyneFont">
            Building intuitive <br />
            <span className="text-neutral-700">frontend experiences.</span>
          </h1>
          <p className="text-gray-700 text-base">
            I’m <strong>Haseeb Arshad</strong>, a frontend developer with over 3
            years of experience building clean, scalable, and accessible UIs. I
            focus on delivering thoughtful, responsive design implementations
            using modern web technologies.
          </p>
          <p className="text-gray-600 text-sm">
            I enjoy solving real-world problems through code, crafting
            responsive layouts, and writing maintainable components. Skilled in
            HTML5, CSS3, JavaScript, TypeScript, React, SCSS, and Git.
          </p>
        </div>

        {/* RIGHT — IMAGE + TABLE */}
        <div className="w-full max-w-xl rounded-2xl border border-neutral-200 bg-white overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
            {/* Image Side */}
            <div className="bg-neutral-100 p-6 flex items-center justify-center h-full">
              <div className="w-36 h-36 overflow-hidden rounded-xl ring-1 ring-neutral-300">
                <Image
                  src="/images/main.jpg"
                  alt="Haseeb Arshad"
                  width={144}
                  height={144}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Info Table Side */}
            <div className="px-4 py-5">
              <h3 className="font-RalewayFont text-lg font-medium text-gray-800 pb-2">
                Personal Infos
              </h3>
              <Table className="text-sm w-full">
                <TableBody className="w-full">
                  {personalInfoDetails.length &&
                    personalInfoDetails.map((item, i) => (
                      <TableRow
                        key={i}
                        className="border-none w-max min-w-0 flex items-center hover:bg-transparent"
                      >
                        <TableCell className="font-medium text-gray-700 p-1 py-0 pb-1 font-raleway-14-500">
                          {item.label} :
                        </TableCell>
                        <TableCell className="text-gray-900 p-1 py-0 pb-1 cursor-help select-text font-karla-14-300">
                          <Tooltip
                            pointerTouch={
                              item.label.toLocaleLowerCase().includes("email")
                                ? true
                                : false
                            }
                            content={item.value}
                            className="bg-deep-gray text-white"
                          >
                            <span className="truncate max-w-[160px] inline-block leading-none">
                              {item.value}
                            </span>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>

      {/* SKILLS SECTION */}
      <div className="mt-24 px-2">
        <h2 className="text-center text-xl font-semibold mb-10 text-gray-800">
          My Core Tech Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 place-items-center">
          {/* Lucide Icons — bold, grayscale on hover colorful */}
          {[
            { name: "HTML", icon: FileType2 },
            { name: "CSS", icon: FileCode2 },
            { name: "JavaScript", icon: FileJson },
            { name: "TypeScript", icon: FileText },
            { name: "React", icon: FileType },
            { name: "Git", icon: GitBranch },
          ].map(({ name, icon: Icon }, index) => (
            <div
              key={index}
              className="group flex flex-col items-center transition-all duration-300 hover:scale-110"
            >
              <Icon className="w-10 h-10 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
              <span className="text-sm text-gray-600 mt-2">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
