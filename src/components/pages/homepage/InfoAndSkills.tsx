import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import Tooltip from "@/components/ui/tooltip";
import { personalInfoDetails, personalSkills } from "./content";
import CustomMarquee from "@/components/generic/CustomMarquee";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import {
  Menubar,
  MenubarContent,
  MenubarLabel,
  MenubarMenu,
} from "@/components/ui/menubar";
import { MenubarTrigger } from "@radix-ui/react-menubar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const InfoAndSkills = () => {
  const isLgUp = useBreakpoint("lg", "up");
  const isSmUp = useBreakpoint("sm", "up");

  return (
    <section className="w-full bg-white text-black section-padding">
      <main className="grid lg:grid-cols-2 grid-cols-1 gap-10 container">
        <div className="space-y-4">
          <h3 className="heading leading-none font-medium font-SyneFont text-deep-gray/85 tracking-tight">
            Building intuitive
            <br />
            <span className="text-theme-primary heading-break font-RalewayFont font-normal">
              frontend experiences
            </span>
          </h3>
          <p className="text-gray-700 md:font-raleway-16-500 font-raleway-14-500">
            I’m <strong>Haseeb Arshad</strong>, a frontend developer with over 3
            years of experience building clean, scalable, and accessible UIs. I
            focus on delivering thoughtful, responsive design implementations
            using modern web technologies.
          </p>
          <p className="text-gray-600 md:font-raleway-14-500 font-raleway-12-500">
            I enjoy solving real-world problems through code, crafting
            responsive layouts, and writing maintainable components. Skilled in
            HTML5, CSS3, JavaScript, TypeScript, React, SCSS, and Git.
          </p>
        </div>

        <div className="rounded-sm border border-neutral-200 bg-white overflow-hidden h-max max-w-[550px] lg:justify-self-end">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center">
            <div className="bg-neutral-100 flex items-center sm:justify-center h-full p-4">
              <div className="sm:w-36 w-[50dvw] h-36 overflow-hidden rounded-xl ring-1 ring-neutral-300">
                <Image
                  src="/images/main.jpg"
                  alt="Haseeb Arshad"
                  width={144}
                  height={144}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="px-4 py-5">
              <h3 className="w-max font-RalewayFont sm:text-lg text-[16px] font-medium leading-none text-gray-800 sm:pb-4 pb-2">
                Personal Infos
              </h3>
              <Table className="text-sm w-full">
                <TableBody className="w-full">
                  {personalInfoDetails.length &&
                    personalInfoDetails.map((item, i) => (
                      <TableRow
                        key={i}
                        className="border-none w-max min-w-0 flex items-center hover:bg-transparent sm:pb-1"
                      >
                        <TableCell className="font-medium text-gray-700 p-0 font-syne-14-500">
                          {item.label} :
                        </TableCell>
                        <TableCell className="text-gray-900 p-0 pl-1 cursor-help select-text font-karla-14-300 leading-none">
                          {isLgUp ? (
                            <Tooltip
                              pointerTouch={item.label
                                .toLowerCase()
                                .includes("email")}
                              content={item.value}
                              className="bg-deep-gray text-white"
                            >
                              <span className="truncate max-w-[160px] inline-block leading-none sm:font-karla-14-300 font-karla-12-300">
                                {item.value}
                              </span>
                            </Tooltip>
                          ) : (
                            <>
                              <Popover>
                                <PopoverTrigger className="truncate max-w-[160px] inline-block">
                                  {item.value}
                                </PopoverTrigger>
                                <PopoverContent
                                  align="center"
                                  side="top"
                                  className="w-max min-w-0 px-2 py-1 bg-black text-white leading-none sm:font-karla-14-300 font-karla-12-300 rounded-xs"
                                >
                                  {item.value}
                                </PopoverContent>
                              </Popover>
                            </>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </main>

      <main className="container md:pt-20 pt-10 flex flex-col items-left sm:gap-10 gap-7">
        <h4 className="font-syne-14-500 text-gray-800">Technologies I Use</h4>
        <CustomMarquee
          slideEffect
          direction="left"
          speedInSecond={50}
          itemsPerSlide={isLgUp ? 10 : isSmUp ? 7 : 4}
          disableOnInteraction
          itemInteractionEffect={false}
          content={personalSkills.map((item, idx) => (
            <div key={idx} className="w-max h-max text-center">
              <Image
                src={item.image}
                alt={item.label}
                width={50}
                height={50}
                className="md:w-[50px] w-8 h-auto inline-block"
              />
              <p className="font-syne-12-500 pt-2">{item.label}</p>
            </div>
          ))}
        />
      </main>
    </section>
  );
};

export default InfoAndSkills;
