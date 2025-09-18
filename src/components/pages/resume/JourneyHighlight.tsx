import { cn } from "@/lib/utils/clsxUtils";

type JourneyHighlightProptype = {
  className?: string;
  titleStyles?: string;
  leftTtile?: string;
  rightTitle?: string;
  description?: string;
};

const JourneyHighlight = ({
  className,
  leftTtile,
  rightTitle,
  titleStyles,
  description,
}: JourneyHighlightProptype) => {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <p className={cn("font-semibold font-raleway-16-500", titleStyles)}>
        {leftTtile}
        <span className="text-deep-gray font-semibold md:font-raleway-16-500 font-raleway-14-500">
          {" — "}
          {rightTitle}
        </span>
      </p>
      <p
        className="text-gray-600 font-syne-14-300"
        dangerouslySetInnerHTML={{ __html: description! }}
      />
    </div>
  );
};

export default JourneyHighlight;
