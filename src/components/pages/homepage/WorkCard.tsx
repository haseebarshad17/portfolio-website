import Image from "next/image";
import { cn } from "@/lib/utils/clsxUtils";
import { ArrowUpRight } from "lucide-react";
import { useBreakpoint } from "@/hooks/useBreakpoint";

type WorkCardProptype = {
  className?: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  workLink: string;
};

const WorkCard = ({
  className,
  imageSrc = "/works/2.webp",
  title = "Project Title",
  subtitle = "Branding",
  workLink = "/",
}: WorkCardProptype) => {
  const isMdUp = useBreakpoint("md", "up");
  const isSmUp = useBreakpoint("sm", "up");

  return (
    <a
      href={workLink ?? "/"}
      className={cn(
        "group w-full rounded-md transition-all duration-300",
        className
      )}
    >
      <div className="p-1 bg-transparent rounded-sm border border-transparent group-hover:border-theme-secondary ease-out duration-500">
        <div className="relative w-full sm:h-56 h-[150px] xs:h-[200px] overflow-hidden rounded-sm">
          <Image
            fill
            src={imageSrc}
            alt={title}
            className="object-cover rounded-sm group-hover:scale-110 ease-out duration-500"
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-5 px-3 md:pt-6 pt-3">
        <div>
          <span
            className="inline-block bg-transparent text-black font-syne-12-500 px-3 py-1 
            rounded-full capitalize group-hover:bg-theme-secondary ease-out duration-500 mb-2 border border-black/10 group-hover:border-theme-secondary"
          >
            {subtitle}
          </span>
          <h5 className="md:font-raleway-16-500 sm:font-raleway-14-500 font-raleway-12-500 text-black capitalize">
            {title}
          </h5>
        </div>
        <span className="block">
          <ArrowUpRight
            size={isMdUp ? 32 : isSmUp ? 26 : 22}
            strokeWidth={1}
            className="text-black group-hover:text-theme-secondary ease-in duration-400"
          />
        </span>
      </div>
    </a>
  );
};

export default WorkCard;
