"use client";
import { useEffect, useState } from "react";
import MobileMenu from "@/components/layout/header/MobileMenu";
import Logo from "@/components/generic/Logo";
import { DrawerTrigger, Drawer } from "@/components/ui/drawer";
import Separator from "@/components/ui/separator";
import { useScroll } from "@/hooks/useScroll";
import {
  headerDefaultVariantRoutes,
  menuLinks,
} from "@/components/layout/header/content";
import Link from "next/link";
import { cn } from "@/lib/utils/clsxUtils";
import MenuIcon from "./MenuIcon";
import useScrollLock from "@/hooks/useScrollLock";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuTriggered, setIsMenuTriggered] = useState<boolean>(false);
  const [headerDefault, setHeaderDefault] = useState<boolean>(false);
  const isLgDown = useBreakpoint("lg", "down");
  const pathName = usePathname() as string;

  const email = process.env.NEXT_PUBLIC_EMAIL || "";
  const phone = process.env.NEXT_PUBLIC_PHONE || "";

  const match = email.match(/^([^0-9]+)(\d+)(@.+)$/);
  const emailName = match?.[1] || email;
  const emailNumber = match?.[2] || "";
  const emailDomain = match?.[3] || "";

  const { isScrolled, getScrollbarDirection } = useScroll();
  const scrollPastThreshold = isScrolled(isLgDown ? 3 : 40);
  const scrollbarThumbDirection = getScrollbarDirection();
  useScrollLock(isMenuTriggered);

  useEffect(() => {
    if (headerDefaultVariantRoutes.includes(pathName)) setHeaderDefault(true);
    else setHeaderDefault(false);
  }, [pathName, headerDefaultVariantRoutes]);

  return (
    <>
      <header
        className={cn(
          "fixed z-50 top-0 left-0 right-0 w-full h-max lg:px-10 md:px-6 px-3 md:py-5 py-4 duration-300 ease-out",
          isMenuTriggered
            ? "-translate-y-full opacity-100 bg-transparent backdrop-blur-none shadow-none"
            : [
                "bg-transparent",
                scrollPastThreshold &&
                  "bg-deep-gray backdrop-blur-lg shadow-md -translate-y-full",
                scrollbarThumbDirection === "down"
                  ? "duration-700 ease-out"
                  : "translate-y-0 opacity-100 duration-500 ease-out",
              ],
          { "bg-deep-gray": headerDefault }
          // "hidden"
        )}
      >
        <div className="flex items-center justify-between">
          <nav className="flex items-center">
            <Logo
              width={90}
              height={90}
              className="xl:w-[90px] lg:w-[70px] md:w-[60px] w-[55px] h-auto"
            />
            <div className="hidden lg:flex items-center gap-[15px] pl-[100px]">
              <Link
                href={`tel:${phone}`}
                className="font-karla-16-300 flex items-center gap-[5px] relative before:w-0
                before:h-[0.6px] before:bg-white hover:before:w-full before:absolute before:bottom-0
                before:left-1/2 before:-translate-x-1/2 before:ease-out before:duration-300"
              >
                <span className="text-white">{phone?.slice(0, 3)}</span>
                <span className="text-regular-gray">{phone?.slice(3, 6)}</span>
                <span className="text-white">{phone?.slice(6)}</span>
              </Link>
              <Separator
                orientation="vertical"
                className="bg-light-gray/70 w-px h-[30px]"
              />
              <Link
                href={`mailto:${email}`}
                className="font-syne-16-300 flex items-center gap-[5px] relative before:w-0
                before:h-[0.6px] before:bg-white hover:before:w-full before:ease-out before:absolute
                before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:duration-300"
              >
                <span className="capitalize text-white">{emailName}</span>
                <span className="font-karla-16-300 text-regular-gray">
                  {emailNumber}
                </span>
                <span className="text-white">{emailDomain}</span>
              </Link>
            </div>
          </nav>

          <Drawer shouldScaleBackground onOpenChange={setIsMenuTriggered}>
            <DrawerTrigger
              children={
                <MenuIcon
                  className="cursor-pointer pointer-events-auto"
                  isMenuTriggered={isMenuTriggered}
                />
              }
              className="scale-[.85] sm:scale-[.90] md:scale-[.95] lg;scale-[.1]"
            />
            <MobileMenu menuLinks={menuLinks} />
          </Drawer>
        </div>
      </header>
    </>
  );
};

export default Header;
