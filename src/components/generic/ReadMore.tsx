import { useState, useRef, useEffect } from "react";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils/clsxUtils";
import { ChevronDown, ChevronUp } from "lucide-react";

type ReadMoreProps = {
  text: string;
  initialHeight?: number;
  fadeClassName?: string;
  fadeStyle?: React.CSSProperties;
};

export function ReadMore({
  text,
  initialHeight = 30,
  fadeClassName,
  fadeStyle,
}: ReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsTruncate, setNeedsTruncate] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const checkTruncate = () => {
      setNeedsTruncate(el.scrollHeight > initialHeight);
    };
    checkTruncate();

    const observer = new ResizeObserver(() => {
      checkTruncate();
    });
    observer.observe(el);

    return () => observer.disconnect();
  }, [initialHeight, text]);

  return (
    <div className="py-2 relative">
      <div
        ref={contentRef}
        className={cn(
          "transition-[max-height] duration-400 ease-out overflow-hidden relative"
        )}
        style={{
          maxHeight: isExpanded
            ? contentRef.current?.scrollHeight
            : initialHeight,
        }}
      >
        <p className="md:font-raleway-14-500 font-raleway-12-500 text-black/70 italic">
          {text}
        </p>

        {needsTruncate && (
          <div
            className={cn(
              "absolute bottom-0 left-0 w-full h-8 pointer-events-none transition-opacity duration-300",
              fadeClassName || "bg-gradient-to-t from-white to-transparent"
            )}
            style={{
              opacity: !isExpanded ? 1 : 0,
              ...fadeStyle,
            }}
          />
        )}
      </div>

      {needsTruncate && (
        <Button
          variant="transparent"
          size="max"
          className="p-0 font-raleway-12-500 text-black mt-1 gap-1"
          onClick={() => setIsExpanded(!isExpanded)}
          rightEl={
            isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />
          }
        >
          {isExpanded ? "Read less" : "Read more"}
        </Button>
      )}
    </div>
  );
}
