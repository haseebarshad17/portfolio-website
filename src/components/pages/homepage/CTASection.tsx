import Button from "@/components/ui/button";
import Separator from "@/components/ui/separator";
import { cn } from "@/lib/utils/clsxUtils";
import { MessageCircleMore, Rocket } from "lucide-react";

type CTASectionProptype = {
  className?: string;
};

const CTASection = ({ className }: CTASectionProptype) => {
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
              size="lg"
              variant="secondary"
              rightEl={<Rocket size={16} strokeWidth={1.2} />}
              className="gap-2 px-5 font-raleway-12-500 rounded-md"
            >
              Start a project
            </Button>
            <Button
              size="lg"
              variant="transparent"
              rightEl={<MessageCircleMore size={16} strokeWidth={1.2} />}
              className="gap-2 px-5 font-raleway-12-500 rounded-md"
            >
              Let's Talk
            </Button>
          </div>

          <ul className="pt-4 flex flex-wrap gap-4 font-syne-14-300 text-gray-600">
            <li>✓ Free consultation</li>
            <li>✓ Fast delivery</li>
            <li>✓ Custom design & development</li>
          </ul>
        </div>
      </main>
    </section>
  );
};

export default CTASection;
