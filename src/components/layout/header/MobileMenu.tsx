"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/clsxUtils";
import Logo from "@/components/generic/Logo";
import useScrollLock from "@/hooks/useScrollLock";

type MobileMenuProptype = {
  menuLinks: { href: string; label: string }[];
  setIsMenuTriggered: (value: boolean) => void;
  isMenuTriggered: boolean;
};

const MobileMenu = ({
  isMenuTriggered,
  setIsMenuTriggered,
  menuLinks,
}: MobileMenuProptype) => {
  const pathname = usePathname();
  useScrollLock(isMenuTriggered);

  return (
    <div className="fixed inset-0 z-full pointer-events-none">
      <AnimatePresence>
        {isMenuTriggered && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-deep-gray w-[85vw] h-screen pointer-events-auto shadow-xl 
             pl-20 pt-16 flex flex-col"
          >
            <Logo width={90} height={90} className="-translate-x-1/2" />
            <ul className="text-section-light-white flex flex-1 items-center -mt-4">
              <div className="flex flex-col gap-[5px]">
                {menuLinks.length &&
                  menuLinks.map((link, i) => {
                    const isActiveLink = pathname === link.href;

                    return (
                      <motion.li
                        key={i}
                        className="group relative w-max"
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -200, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeInOut",
                          delay: i * 0.06,
                        }}
                      >
                        <Link
                          href={link.href ?? "/"}
                          onClick={() => setIsMenuTriggered(false)}
                          className="font-RalewayFont capitalize text-2xl inline-block relative pb-[2px]"
                        >
                          {link.label}
                          <span
                            className={cn(
                              `absolute left-0 bottom-0 h-[0.6px] w-full 
                              bg-theme-secondary transform 
                               scale-x-0 group-hover:scale-x-100 
                               transition-transform duration-300 ease-in-out origin-left`,
                              isActiveLink && "scale-x-100"
                            )}
                          />
                        </Link>
                      </motion.li>
                    );
                  })}
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
