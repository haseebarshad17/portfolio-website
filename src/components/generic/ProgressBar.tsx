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
  const safeProgress = Math.min(100, Math.max(0, Number(progress)));

  return (
    <>
      <div className={cn("text-white", className)}>
        <label
          className={cn(
            "flex items-center justify-between font-karla-14-300",
            titleStyle
          )}
        >
          {title} <span className="font-karla-14-300">{safeProgress}%</span>
        </label>
        <div
          className={cn(
            "w-full h-2 rounded-xs mt-2 bg-deep-gray overflow-hidden",
            progressbarStyle
          )}
        >
          <div
            className="h-full bg-theme-primary transition-all duration-300"
            style={{ width: `${safeProgress}%` }}
          />
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
