import Separator from "@/components/ui/separator";
import { cn } from "@/lib/utils/clsxUtils";
import { Play } from "lucide-react";

type WatchVideoIconProptype = {
  className?: string;
  seperatorStyle?: string;
  iconWrapperStyle?: string;
  iconStyle?: string;
  iconTitleStyle?: string;
  iconSize?: number;
  playIconSize?: number;
};

const WatchVideoIcon = ({
  className,
  seperatorStyle,
  iconWrapperStyle,
  iconStyle,
  iconTitleStyle,
  iconSize,
  playIconSize,
}: WatchVideoIconProptype) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Separator
        orientation="horizontal"
        className={cn("bg-white h-px w-20", seperatorStyle)}
      />
      <div
        className={cn(
          "flex items-center gap-3 group w-max cursor-pointer",
          iconWrapperStyle
        )}
      >
        <span
          style={{
            width: iconSize,
            height: iconSize,
          }}
          className={cn(
            `bg-transparent border border-white rounded-full flex items-center justify-center leading-none 
            group-hover:border-theme-primary ease duration-300`,
            iconStyle
          )}
        >
          <Play
            size={playIconSize ?? 18}
            strokeWidth={1}
            className="text-white leading-none group-hover:text-theme-primary ease duration-300"
          />
        </span>
        <span
          className={cn(
            "leading-none text-section-light-white group-hover:text-theme-primary ease duration-300 capitalize",
            iconTitleStyle
          )}
        >
          watch video
        </span>
      </div>
    </div>
  );
};

export default WatchVideoIcon;
