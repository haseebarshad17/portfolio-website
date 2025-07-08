import { cn } from "@/lib/utils/clsxUtils";

type ProgressBarProptype = {
  className?: string;
  progress: string | number;
  title?: string;
  titleStyle?: string;
  progressbarStyle?: string;
};

const ProgressBar = ({
  className,
  progress,
  title,
  titleStyle,
  progressbarStyle,
}: ProgressBarProptype) => {
  return (
    <>
      <div className={cn(className)}>
        <label
          className={cn(
            "flex items-center justify-between font-syne-16-300",
            titleStyle
          )}
        >
          {title} <span className="font-karla-16-500">{progress}%</span>
        </label>
        <div
          className={cn(
            "w-full h-2 rounded-xs mt-2 bg-deep-gray overflow-hidden",
            progressbarStyle
          )}
        >
          <div
            className="h-full bg-theme-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
