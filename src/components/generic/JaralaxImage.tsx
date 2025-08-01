import { cn } from "@/lib/utils/clsxUtils";
import Image, { ImageProps } from "next/image";

type JarallaxImagePropType = {
  className?: string;
} & Omit<ImageProps, "src" | "alt"> & {
    src: string;
    alt: string;
  };

const JarallaxImage = ({
  className,
  src,
  alt,
  ...props
}: JarallaxImagePropType) => {
  return (
    <div className="relative w-full h-full">
      <Image
        fill
        src={src}
        alt={alt}
        {...props}
        className={cn("jarallax-img w-full h-max", className)}
      />
    </div>
  );
};

export default JarallaxImage;
