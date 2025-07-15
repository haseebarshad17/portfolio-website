import Image from "next/image";
import { cn } from "@/lib/utils/clsxUtils";
import { ArrowUpRight } from "lucide-react";

type WorkCardProptype = {
  className?: string;
  title?: string;
  subtitle?: string;
  image?: string;
  src?: string;
};

const WorkCard = ({
  className,
  image = "/works/2.webp",
  title = "Project Title",
  subtitle = "Branding",
  src = "/",
}: WorkCardProptype) => {
  return (
    <a
      href={src ?? "/"}
      className={cn(
        "group w-full rounded-md transition-all duration-300 cursor-pointer",
        className
      )}
    >
      <div className="p-1 bg-transparent rounded-sm border border-transparent group-hover:border-theme-secondary ease-out duration-500">
        <div className="relative w-full h-56 overflow-hidden rounded-sm">
          <Image
            fill
            src={image}
            alt={title}
            className="object-cover rounded-sm"
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-10 px-3 pt-6">
        <div>
          <span
            className="inline-block bg-transparent text-black font-syne-12-500 px-3 py-1 
            rounded-full capitalize group-hover:bg-theme-secondary ease-out duration-500 mb-2"
          >
            {subtitle}
          </span>
          <h5 className="font-raleway-16-500 text-black capitalize">
            projext title is getting bigger i size due to lorem ispusm dollar
          </h5>
        </div>
        <span className="block">
          <ArrowUpRight
            size={32}
            strokeWidth={1}
            className="text-black group-hover:text-theme-secondary ease-out duration-500"
          />
        </span>
      </div>
    </a>
  );
};

export default WorkCard;
