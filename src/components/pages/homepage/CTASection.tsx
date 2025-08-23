import Button from "@/components/ui/button";
import Separator from "@/components/ui/separator";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { cn } from "@/lib/utils/clsxUtils";
import { MessageCircleMore, Rocket } from "lucide-react";

type CTASectionProptype = {
  className?: string;
};

const CTASection = ({ className }: CTASectionProptype) => {
  const isMdUp = useBreakpoint("md", "up");

  return (
    <section className={cn("bg-section-deep-white text-black", className)}>
      <main className="container">
        <Separator
          orientation="horizontal"
          className="w-full h-px bg-black/30"
        />
        <div className="section-padding">
          <h3 className="heading capitalize">
            have a project in mind? <br />
            <span className="heading-break normal-case">
              we're here to help
            </span>
          </h3>
          <p className="heading-description">
            Let's collaborate to turn your idea into a powerful digital
            experience. From design to deployment, I'm here every step of the
            way.
          </p>

          <div className="pt-10 gap-2">
            <Button
              size={"lg"}
              variant="secondary"
              rightEl={<Rocket size={isMdUp ? 16 : 12} strokeWidth={1.2} />}
              className={cn(
                "gap-2 font-raleway-12-500 px-5",
                isMdUp ? "rounded-md" : "h-max py-[6px] rounded-sm"
              )}
            >
              Start a project
            </Button>
            <Button
              size={"lg"}
              variant="transparent"
              rightEl={
                <MessageCircleMore size={isMdUp ? 16 : 12} strokeWidth={1.2} />
              }
              className={cn(
                "gap-2",
                isMdUp
                  ? "px-5 font-raleway-12-500 rounded-md"
                  : "text-[10px] font-RalewayFont font-medium w-max h-max py-[6px] px-4 rounded-sm"
              )}
            >
              Let's Talk
            </Button>
          </div>

          <ul className="pt-4 flex items-center flex-wrap sm:font-syne-14-300 font-syne-12-300 text-gray-600">
            <li className="pr-4 pb-1">✓ Free consultation</li>
            <li className="pr-4 pb-1">✓ Fast delivery</li>
            <li className="pr-4 pb-1">✓ Custom design & development</li>
          </ul>
        </div>
      </main>
    </section>
  );
};

export default CTASection;
