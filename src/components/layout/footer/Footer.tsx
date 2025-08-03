import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import {
  discriptiveContent,
  getInTouchLinks,
  pageLinks,
  socialLinks,
} from "@/components/layout/footer/content";
import Logo from "@/components/generic/Logo";
import LinkMap from "@/components/layout/footer/LinkMap";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const Footer = () => {
  const isSmUp = useBreakpoint("sm", "up");

  return (
    <>
      <footer
        className="bg-black section-padding lg:pb-[70px] md:pb-[50px] sm:pb-10 pb-5"
        id="contact"
      >
        <div className="container">
          <main className="flex lg:gap-20 sm:gap-10 gap-8 flex-col lg:flex-row">
            <div className="w-max">
              <Logo
                width={90}
                height={90}
                className="lg:w-[90px] md:w-[70px] w-[55px] h-auto lg:pb-8 md:pb-5 pb-3"
              />
              <form className="flex flex-col sm:gap-3 gap-2">
                <label className="md:font-raleway-14-300 sm:font-raleway-12-300 text-[10px] font-RalewayFont font-light italic text-section-light-white">
                  Subscribe our news letter :
                </label>
                <Input
                  placeholder="enter your email"
                  isSubmitButtonInside={true}
                  submitButtonSize={isSmUp ? 35 : 25}
                  submitButtonIcon={<Send size={15} strokeWidth={1} />}
                  inputStyle="md:px-5 px-3 placeholder:font-raleway-12-300 sm:placeholder:font-raleway-14-500"
                  className="sm:w-[320px] w-[220px]"
                  variant="default"
                  type="email"
                  size="sm"
                  required
                />
              </form>
            </div>

            <div className="grid grid-cols-2 flex-1 gap-10">
              <LinkMap
                linkData={pageLinks}
                checkActive="contact"
                activeStyle="text-theme-secondary pl-[10px] after:w-full after:h-[2px] after:bg-white 
                after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2"
                linkStyle="font-SyneFont capitalize font-semibold text-section-light-white relative
                md:text-xl sm:text-[16px] text-[14px] inline-block w-max group-hover:pl-[10px] group-hover:text-theme-secondary 
                ease-out duration-300 md:py-[2px] py-1"
              />
              <LinkMap
                linkData={getInTouchLinks}
                linkStyle="capitalize text-section-light-white/55 relative md:font-raleway-14-300 font-raleway-12-300 
                inline-block w-max group-hover:pl-[10px] group-hover:text-section-light-white ease-out 
                duration-300 md:mb-2 mb-1"
              />
            </div>
          </main>

          <main className="flex lg:gap-20 gap-12 lg:pt-20 sm:pt-10 pt-7 flex-col-reverse lg:flex-row">
            <div className="max-w-[380px]">
              <div className="flex flex-col justify-between h-full">
                <LinkMap
                  linkData={socialLinks}
                  linkStyle="inline-flex items-center justify-center duration-300 ease-out group-hover:-translate-y-2"
                  className="flex gap-3 text-white w-max"
                />
                <p className="w-max md:font-syne-14-300 font-syne-12-300 capitalize lg:text-white text-white/70 sm:pt-3 pt-2 lg:pt-0">
                  @copyright 2022 haseeb-arshad all right reserved
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 flex-1 gap-10">
              {discriptiveContent.length &&
                discriptiveContent.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col md:gap-5 sm:gap-3 gap-[6px]"
                  >
                    <h6 className="md:text-lg sm:text-[16px] text-[14px] font-RalewayFont font-light text-white">
                      {item.title}
                    </h6>
                    <p className="md:font-raleway-14-300 font-raleway-12-300 max-w-[200px] text-regular-gray">
                      {item.discription}
                    </p>
                  </div>
                ))}
            </div>
          </main>
        </div>
      </footer>
    </>
  );
};

export default Footer;
