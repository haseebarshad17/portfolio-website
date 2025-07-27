import MenuIcon from "@/components/layout/header/MenuIcon";
import { cn } from "@/lib/utils/clsxUtils";

type MenuToggleButtonProptype = {
  className?: string;
  isMenuTriggered: boolean;
  setIsMenuTriggered: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuToggleButton = ({
  isMenuTriggered = false,
  setIsMenuTriggered,
  className,
}: MenuToggleButtonProptype) => {
  return (
    <div
      onClick={() => setIsMenuTriggered((prev) => !prev)}
      className={cn(
        "rounded-full overflow-hidden cursor-pointer w-11 h-11 scale-[0.65] sm:scale-[0.75] md:scale-[0.85] lg;scale-[1]",
        className
      )}
    >
      <MenuIcon
        className="w-full h-full pointer-events-none"
        isMenuTriggered={isMenuTriggered}
      />
    </div>
  );
};

export default MenuToggleButton;
