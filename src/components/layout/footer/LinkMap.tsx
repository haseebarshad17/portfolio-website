import { cn } from "@/lib/utils/clsxUtils";
import Link from "next/link";
import { ClassNameValue } from "tailwind-merge";

type LinkMapProptype = {
  checkActive?: string | string[] | undefined;
  activeStyle?: ClassNameValue;
  className?: ClassNameValue;
  linkStyle?: ClassNameValue;
  contentLinkWrapperStyle?: ClassNameValue;
  iconStyle?: ClassNameValue;
  linkData: {
    content?: any;
    label: string;
    href: string;
  }[];
};

const LinkMap = ({
  checkActive = undefined,
  activeStyle,
  linkData,
  className,
  linkStyle,
  contentLinkWrapperStyle,
  iconStyle,
}: LinkMapProptype) => {
  return (
    <ul className={cn("", className)}>
      {linkData.length &&
        linkData.map((item, i) => {
          const checkActiveValue = Array.isArray(checkActive)
            ? checkActive.join("-")
            : checkActive?.length == 0 || checkActive === undefined
              ? null
              : checkActive;

          const activeLink =
            checkActiveValue !== null
              ? item.label.includes(checkActiveValue)
              : null;

          return (
            <Link
              key={i}
              href={item.href}
              className={cn(
                "group w-max block border-b border-transparent duration-300 ease-out leading-none",
                contentLinkWrapperStyle
              )}
            >
              <li
                className={cn(
                  "inline-block leading-none",
                  linkStyle,
                  checkActive?.length && activeLink && activeStyle,
                  item.content &&
                    "group-hover:border-white border-b border-transparent duration-300 ease-out"
                )}
              >
                {item.content ? (
                  <item.content className={cn(iconStyle)} />
                ) : (
                  <>{item.label}</>
                )}
              </li>
            </Link>
          );
        })}
    </ul>
  );
};

export default LinkMap;
