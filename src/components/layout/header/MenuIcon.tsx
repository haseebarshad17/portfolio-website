import Separator from "@/components/ui/separator";
import { cn } from "@/lib/utils/clsxUtils";

type MenuIconProptype = {
  isMenuTriggered: boolean;
  className?: string;
};

const MenuIcon = ({ className, isMenuTriggered }: MenuIconProptype) => {
  const trasition = "duration-500 ease-in-out";

  return (
    <div
      className={cn(
        "w-11 h-11 rounded-full pointer-events-auto cursor-pointer flex items-center justify-center",
        isMenuTriggered ? "bg-deep-gray" : "bg-transparent",
        trasition,
        className
      )}
    >
      <div className="relative w-7 h-7 flex flex-col items-end justify-center pointer-events-none">
        <Separator
          orientation="horizontal"
          className={cn(
            "w-full h-[2px] absolute top-1/2 left-1/2 -translate-x-1/2 bg-white",
            trasition,
            isMenuTriggered
              ? "-rotate-45 translate-y-0"
              : "rotate-0 -translate-y-[9px]"
          )}
        />
        <Separator
          orientation="horizontal"
          className={cn(
            "w-full h-[2px] absolute top-1/2 left-1/2 -translate-x-1/2 bg-white",
            trasition,
            isMenuTriggered ? "rotate-45" : "rotate-0"
          )}
        />
        <Separator
          orientation="horizontal"
          className={cn(
            "w-[60%] h-[2px] absolute top-1/2 left-0 bg-white",
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
