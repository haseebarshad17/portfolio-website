import { cn } from "@/lib/utils/clsxUtils";
import Image from "next/image";

type LogoProptype = {
  width: number;
  height: number;
  alt?: string;
  src?: string;
  className?: string;
};

const Logo = ({
  width,
  height,
  alt,
  src,
  className,
  ...props
}: LogoProptype) => {
  return (
    <>
      <a href="/" className="inline-block w-max h-max" {...props}>
        <Image
          width={width}
          height={height}
          alt={alt ?? "logo"}
          src={src ?? "/logo/logo.webp"}
          className={cn(`w-[${width}px]`, "h-auto", className)}
          priority
        />
      </a>
    </>
  );
};

export default Logo;
