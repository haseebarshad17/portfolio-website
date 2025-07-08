"use client";
import { useState } from "react";
import MobileMenu from "@/components/layout/header/MobileMenu";
import { menuLinks } from "@/components/layout/header/content";
import Link from "next/link";
import Logo from "@/components/generic/Logo";
import MenuToggleButton from "@/components/layout/header/MenuToggleButton";
import { useScroll } from "@/hooks/useScroll";
import { cn } from "@/lib/utils/clsxUtils";
import Separator from "@/components/ui/separator";

const Header = () => {
  const [isMenuTriggered, setIsMenuTriggered] = useState<boolean>(false);

  const email = process.env.NEXT_PUBLIC_EMAIL || "";
  const phone = process.env.NEXT_PUBLIC_PHONE || "";

  const match = email.match(/^([^0-9]+)(\d+)(@.+)$/);
  const emailName = match?.[1] || email;
  const emailNumber = match?.[2] || "";
  const emailDomain = match?.[3] || "";

  const { isScrolled, getScrollbarDirection } = useScroll();
  const scrollPastThreshold = isScrolled(120);
  const scrollbarThumbDirection = getScrollbarDirection();

  return (
    <>
      <header
        className={cn(
          "fixed z-30 top-0 left-0 right-0 w-full h-max px-10 py-5",
          isMenuTriggered
            ? "translate-y-0 opacity-100 bg-transparent backdrop-blur-none shadow-none"
            : [
                "bg-transparent",
                scrollPastThreshold &&
                  "bg-deep-gray backdrop-blur-lg shadow-md -translate-y-full",
                scrollbarThumbDirection === "down"
                  ? "duration-700 ease-out"
                  : "translate-y-0 opacity-100 duration-500 ease-out",
              ],
          "hidden"
        )}
      >
        <div className="flex items-center justify-between">
          <nav className="flex items-center">
            <Logo width={90} height={90} className="ease duration-300" />
            <div className="flex items-center gap-[15px] pl-[100px]">
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

          <div>
            <MenuToggleButton
              isMenuTriggered={isMenuTriggered}
              setIsMenuTriggered={setIsMenuTriggered}
            />
            <MobileMenu
              menuLinks={menuLinks}
              isMenuTriggered={isMenuTriggered}
              setIsMenuTriggered={setIsMenuTriggered}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
