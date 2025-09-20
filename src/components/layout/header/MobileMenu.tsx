"use client";
import { motion } from "framer-motion";
import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerThumb,
  DrawerTitle,
} from "@/components/ui/drawer";
import Logo from "@/components/generic/Logo";
import { cn } from "@/lib/utils/clsxUtils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useBreakpoint } from "@/hooks/useBreakpoint";

type MobileMenuProptype = {
  className?: string;
  menuLinks: {
    href: string;
    label: string;
  }[];
};

const MobileMenu = ({ menuLinks, className }: MobileMenuProptype) => {
  const currentPath = usePathname();
  const isLgUp = useBreakpoint("lg", "up");
  const isMdUp = useBreakpoint("md", "up");

  return (
    <>
      <DrawerContent
        className={cn(
          "rounded-t-md bg-deep-gray/80 backdrop-blur-md border-none",
          className
        )}
        shouldShowOverlay={false}
      >
        <DrawerThumb
          thumbSize={isLgUp ? "lg" : isMdUp ? "md" : "sm"}
          wrapperStyle="py-3"
        />
        <div className="container md:py-10 py-8">
          <div className="md:pb-8 pb-5">
            <Logo
              width={90}
              height={90}
              className="xl:w-[90px] lg:w-[70px] md:w-[60px] w-[55px] h-auto"
            />
          </div>
          <nav className="lg:pl-16 md:pl-10 pl-8 pb-10">
            <ul className="flex flex-col">
              {menuLinks.length &&
                menuLinks.map((item, i) => {
                  const isLinkActive = item.href === currentPath;
                  return (
                    <motion.li
                      key={i}
                      className="w-max block leading-none group"
                      initial={{ x: -150, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -150, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: i * 0.05,
                        ease: "easeOut",
                      }}
                    >
                      <Link href={item.href} className="leading-none relative">
                        <DrawerClose
                          className="font-RalewayFont font-normal capitalize text-xl inline-block  
                          leading-none ease duration-300 group-hover:pl-3 pb-2 lg:leading-none"
                        >
                          {item.label}
                        </DrawerClose>
                        <span
                          className={cn(
                            `absolute left-0 -bottom-px h-[.6px] w-full bg-theme-secondary transform scale-x-0 
                              group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left`,
                            isLinkActive && "scale-x-100"
                          )}
                        />
                      </Link>
                    </motion.li>
                  );
                })}
            </ul>
          </nav>
        </div>
      </DrawerContent>
    </>
  );
};

export default MobileMenu;
