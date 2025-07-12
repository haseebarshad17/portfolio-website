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

const Footer = () => {
  return (
    <>
      <footer className="bg-black section-padding" id="contact">
        <div className="container">
          <main className="flex gap-20">
            <div className="max-w-[380px] w-full">
              <Logo width={90} height={90} className="pb-8" />
              <form className="flex flex-col gap-3">
                <label className="font-raleway-14-300 italic text-section-light-white">
                  Subscribe our news letter :
                </label>
                <Input
                  placeholder="enter your email"
                  isSubmitButtonInside={true}
                  submitButtonSize={35}
                  submitButtonIcon={<Send size={15} strokeWidth={1} />}
                  variant="default"
                  type="email"
                  size="sm"
                  required
                />
              </form>
            </div>

            <div className="grid grid-cols-2 flex-1">
              <LinkMap
                linkData={pageLinks}
                checkActive="contact"
                activeStyle="text-theme-secondary pl-[10px] after:w-full after:h-[2px] after:bg-white 
                after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2"
                linkStyle="font-SyneFont capitalize font-semibold text-section-light-white relative
                text-xl inline-block w-max group-hover:pl-[10px] group-hover:text-theme-secondary 
                ease-out duration-300 py-[2px]"
              />
              <LinkMap
                linkData={getInTouchLinks}
                linkStyle="capitalize text-section-light-white/55 relative font-raleway-14-300 
                inline-block w-max group-hover:pl-[10px] group-hover:text-section-light-white 
                ease-out duration-300"
              />
            </div>
          </main>

          <main className="flex gap-20 pt-20">
            <div className="w-[380px]">
              <div className="flex flex-col justify-between h-full">
                <LinkMap
                  linkData={socialLinks}
                  linkStyle="inline-flex items-center justify-center duration-300 ease-out group-hover:-translate-y-2"
                  className="flex gap-3 text-white"
                />
                <p className="font-syne-14-300 capitalize text-white">
                  @copyright 2022 haseeb-arshad all right reserved
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 flex-1">
              {discriptiveContent.length &&
                discriptiveContent.map((item, i) => (
                  <div className="flex flex-col gap-5" key={i}>
                    <h6 className="text-lg font-RalewayFont font-light text-white">
                      {item.title}
                    </h6>
                    <p className="font-raleway-14-300 max-w-[200px] text-regular-gray/70">
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
