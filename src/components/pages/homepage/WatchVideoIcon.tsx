import Separator from "@/components/ui/separator";
import { cn } from "@/lib/utils/clsxUtils";
import { Play } from "lucide-react";

type WatchVideoIconProptype = {
  className?: string;
};

const WatchVideoIcon = ({ className }: WatchVideoIconProptype) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Separator orientation="horizontal" className="bg-white h-px w-20" />
      <div className="flex items-center gap-3 group w-max cursor-pointer">
        <span
          className="bg-transparent border border-white rounded-full w-[75px] h-[75px] flex 
          items-center justify-center leading-none group-hover:border-theme-primary ease duration-300"
        >
          <Play
            size={18}
            strokeWidth={1}
            className="text-white leading-none group-hover:text-theme-primary ease duration-300"
          />
        </span>
        <span
          className="font-raleway-14-300 leading-none text-section-light-white 
          group-hover:text-theme-primary ease duration-300 capitalize"
        >
          watch video
        </span>
      </div>
    </div>
  );
};

export default WatchVideoIcon;
