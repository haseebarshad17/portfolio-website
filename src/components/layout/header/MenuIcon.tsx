import Separator from "@/components/ui/separator";
import { cn } from "@/lib/utils/clsxUtils";
import { ReactElement, ReactNode } from "react";

type MenuIconProptype = {
  className?: string;
  children?: ReactNode | ReactElement;
  isMenuTriggered: boolean;
};

const MenuIcon = ({
  className,
  children,
  isMenuTriggered,
}: MenuIconProptype) => {
  const trasition = "duration-500 ease-in-out";

  return (
    <div
      className={cn(
        "w-[30px] h-5 relative flex flex-col justify-center items-start",
        className
      )}
    >
      <div className="opacity-0 w-full h-full absolute bg-theme-primary z-10 cursor-pointer pointer-events-auto" />
      {children ?? (
        <>
          <Separator
            orientation="horizontal"
            className={cn(
              "pointer-events-none h-[2px] w-full bg-white origin-top-right ease-in-out absolute top-0 right-0",
              isMenuTriggered && "-rotate-45 -translate-y-1/2",
              trasition
            )}
          />
          <Separator
            orientation="horizontal"
            className={cn(
              "pointer-events-none h-[2px] w-full bg-white transition-opacity absolute top-1/2 -translate-y-1/2 right-0",
              isMenuTriggered && "opacity-0",
              trasition
            )}
          />
          <Separator
            orientation="horizontal"
            className={cn(
              "pointer-events-none h-[2px] w-[70%] bg-white origin-bottom-right absolute bottom-0 left-0",
              isMenuTriggered && "rotate-45 translate-y-1/2 w-full",
              trasition
            )}
          />
        </>
      )}
    </div>
  );
};

export default MenuIcon;
