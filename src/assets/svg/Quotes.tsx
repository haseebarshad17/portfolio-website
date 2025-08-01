import { cn } from "@/lib/utils/clsxUtils";

const Quotes = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="89"
      viewBox="0 0 100 89"
      fill="none"
      className={cn("svg replaced-svg", className)}
    >
      <path
        d="M90.625 44.5H75V32C75 25.1641 80.4688 19.5 87.5 19.5H89.0625C91.6016 19.5 93.75 17.5469 93.75 14.8125V5.4375C93.75 2.89844 91.6016 0.75 89.0625 0.75H87.5C70.1172 0.75 56.25 14.8125 56.25 32V78.875C56.25 84.1484 60.3516 88.25 65.625 88.25H90.625C95.7031 88.25 100 84.1484 100 78.875V53.875C100 48.7969 95.7031 44.5 90.625 44.5ZM34.375 44.5H18.75V32C18.75 25.1641 24.2188 19.5 31.25 19.5H32.8125C35.3516 19.5 37.5 17.5469 37.5 14.8125V5.4375C37.5 2.89844 35.3516 0.75 32.8125 0.75H31.25C13.8672 0.75 0 14.8125 0 32V78.875C0 84.1484 4.10156 88.25 9.375 88.25H34.375C39.4531 88.25 43.75 84.1484 43.75 78.875V53.875C43.75 48.7969 39.4531 44.5 34.375 44.5Z"
        fill="url(#paint0_linear)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="50"
          y1="-13"
          x2="50"
          y2="102"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D6002F" stopOpacity="0.2" />
          <stop offset="1" stopColor="#FFF2F5" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Quotes;
