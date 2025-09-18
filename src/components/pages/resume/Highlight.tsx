import { cn } from "@/lib/utils/clsxUtils";
import { Star } from "lucide-react";
import { ReactElement } from "react";

type HighlightProptype = {
  className?: string;
  icon?: ReactElement;
  title?: string;
  description?: string;
};

const Highlight = ({
  className,
  icon,
  title,
  description,
}: HighlightProptype) => {
  return (
    <div className={cn("flex items-start gap-3", className)}>
      {icon ?? <Star size={32} className="text-indigo-600" />}
      <div>
        <h3 className="font-SyneFont md:text-xl font-syne-16-500 font-semibold text-deep-gray">
          {title ?? "Frontend"}
        </h3>
        <p className="text-deep-gray/75 font-syne-14-300">
          {description ?? "React, Next.js, Node"}
        </p>
      </div>
    </div>
  );
};

export default Highlight;
