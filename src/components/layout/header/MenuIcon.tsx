import Separator from "@/components/ui/separator";
import { cn } from "@/lib/utils/clsxUtils";

type MenuIconProptype = { isMenuTriggered: boolean; className?: string };

const MenuIcon = ({ className, isMenuTriggered }: MenuIconProptype) => {
  const trasition = "duration-500 ease-in-out";

  return (
    <div
      className={cn(
        trasition,
        className,
        isMenuTriggered ? "bg-deep-gray shadow-md" : "bg-transparent"
      )}
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <Separator
          orientation="horizontal"
          className={cn(
            "w-7 h-[2px] absolute top-1/2 left-1/2 -translate-x-1/2 bg-white",
            trasition,
            isMenuTriggered
              ? "-rotate-45 translate-y-0"
              : "rotate-0 -translate-y-[9px]"
          )}
        />
        <Separator
          orientation="horizontal"
          className={cn(
            "w-7 h-[2px] absolute top-1/2 left-1/2 -translate-x-1/2 bg-white",
            trasition,
            isMenuTriggered ? "rotate-45" : "rotate-0"
          )}
        />
        <Separator
          orientation="horizontal"
          className={cn(
            "w-5 h-[2px] absolute top-1/2 left-0 translate-x-[8.5px] bg-white",
            trasition,
            isMenuTriggered
              ? "-rotate-45 translate-y-0 opacity-0"
              : "rotate-0 translate-y-[9px]"
          )}
        />
      </div>
    </div>
  );
};

export default MenuIcon;
