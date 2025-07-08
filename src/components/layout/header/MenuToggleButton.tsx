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
      className={cn("w-max h-max", className)}
    >
      <MenuIcon isMenuTriggered={isMenuTriggered} />
    </div>
  );
};

export default MenuToggleButton;
