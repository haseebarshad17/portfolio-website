type aboutProgressType = {
  title: string;
  progress: number;
}[];

export interface learningAndExperienceType {
  heading: string;
  data: {
    title: string;
    institute: string;
    date: string;
    description: string;
  }[];
}

export const aboutProgress: aboutProgressType = [
  {
    title: "Mobile Responsive designs",
    progress: 98,
  },
  {
    title: "Cross browser compatibility",
    progress: 92,
  },
  {
    title: "Artistic Fusion UI/UX",
    progress: 99,
  },
  {
    title: "Engaging Interactivity",
    progress: 97,
  },
];

export const learningDetails: learningAndExperienceType = {
  heading: "education",
  data: [
    {
      title: "matriculation in computer science",
      institute: "FG Fazaia P.A.F School / College Sakesar",
      date: "Jan 2021 - Dec 2022",
      description:
        "successfully completed my matriculation from Pakistan Air Force College, marking a significant milestone in my academic journey. It provides a solid foundation for my future educational pursuits.",
    },
    {
      title: "intermediate in commerce / banking",
      institute: "Govt. College Lahore",
      date: "Jan 2023 - Dec 2024",
      description:
        "Having completed my intermediation, I've advanced significantly in my college journey, equipped with crucial knowledge and skills for my chosen path. This achievement marks my readiness for higher academic and career pursuits.",
    },
    {
      title: "Bachelor of Commerce (BCom)",
      institute: "virtual university lahore",
      date: "feb 2025 - present",
      description:
        "I am currently pursuing a Bachelor of Commerce degree from Virtual University Lahore,",
    },
  ],
};

export const experienceDetails: learningAndExperienceType = {
  heading: "experience",
  data: [
    {
      title: "Frontend Developer",
      institute: "Social Swirl (Pvt.) Ltd.",
      date: "Feb 2022 -Apr 2024",
      description:
        "Create visually appealing and responsive Uls from Translate wireframes into functional web pages. Write clean, efficient HTML, CSS, and JavaScript co Maintain coding standards and design patterns. Ensure error-free user experience.",
    },
    {
      title: "React (18+) Next advance (12+) Intern",
      institute: "DK Recruitment (pvt).Ltd",
      date: "feb 2024 - april 2024",
      description:
        "I gained hands-on experience through an internship focused on React.js development, honing my skills in front-end web development. This opportunity equipped me with practical knowledge of building interactive user interfaces and integrating APIs. I collaborated with a team, gaining insights into industry best practices and enhancing my problem-solving abilities.",
    },
    {
      title: "Frontend Developer UI/UX Expert",
      institute: "Spadasoft inc.",
      date: "may 2025 - employee",
      description:
        "I gained hands-on experience through an internship focused on React.js development, honing my skills in front-end web development. This opportunity equipped me with practical knowledge of building interactive user interfaces and integrating APIs. I collaborated with a team, gaining insights into industry best practices and enhancing my problem-solving abilities.",
    },
  ],
};

export const personalInfoDetails = [
  { label: "Name", value: process.env.NEXT_PUBLIC_NAME },
  { label: "Email", value: process.env.NEXT_PUBLIC_EMAIL },
  { label: "age", value: `${process.env.NEXT_PUBLIC_AGE}yo` },
  { label: "Phone", value: process.env.NEXT_PUBLIC_PHONE },
  { label: "Location", value: "Lahore, Pakistan" },
  { label: "freelance", value: "available" },
];

export const personalSkills = [
  {
    label: "html5",
    image: "/logo/html.svg",
  },
  {
    label: "css3",
    image: "/logo/css.svg",
  },
  {
    label: "javascript es6",
    image: "/logo/js.svg",
  },
  {
    label: "typescript",
    image: "/logo/ts.svg",
  },
  {
    label: "jquery",
    image: "/logo/jquery.svg",
  },
  {
    label: "react js",
    image: "/logo/react.svg",
  },
  {
    label: "next js",
    image: "/logo/next.svg",
  },
  {
    label: "scss",
    image: "/logo/scss.svg",
  },
  {
    label: "tailwind",
    image: "/logo/tailwind.svg",
  },
  {
    label: "github",
    image: "/logo/github.svg",
  },
  {
    label: "git",
    image: "/logo/git.svg",
  },
  {
    label: "vercel",
    image: "/logo/vercel.svg",
  },
  {
    label: "redux",
    image: "/logo/redux.svg",
  },
  {
    label: "zustand",
    image: "/logo/zustand.png",
  },
  {
    label: "gulp",
    image: "/logo/gulp.svg",
  },
  {
    label: "jira",
    image: "/logo/jira.svg",
  },
  {
    label: "figma conversion",
    image: "/logo/figma.svg",
  },
  {
    label: "frammer-motion",
    image: "/logo/framer.png",
  },
  {
    label: "aos-js",
    image: "/logo/aos.png",
  },
  {
    label: "scroll reveal",
    image: "/logo/reveal.png",
  },
  {
    label: "json",
    image: "/logo/json.svg",
  },
  {
    label: "i18n",
    image: "/logo/i18n.png",
  },
  {
    label: "slack",
    image: "/logo/slack.svg",
  },
];

export const worksShowCase = [
  {
    href: "/",
    imgSrc: "/works/2.webp",
    subtitle: "Branding",
    title: "projext title is getting bigger i size due to lorem ispusm dollar",
  },
  {
    href: "/",
    imgSrc: "/works/2.webp",
    subtitle: "Branding",
    title: "projext title is getting bigger i size due to lorem ispusm dollar",
  },
  {
    href: "/",
    imgSrc: "/works/2.webp",
    subtitle: "Branding",
    title: "projext title is getting bigger i size due to lorem ispusm dollar",
  },
  {
    href: "/",
    imgSrc: "/works/2.webp",
    subtitle: "Branding",
    title: "projext title is getting bigger i size due to lorem ispusm dollar",
  },
  {
    href: "/",
    imgSrc: "/works/2.webp",
    subtitle: "Branding",
    title: "projext title is getting bigger i size due to lorem ispusm dollar",
  },
  {
    href: "/",
    imgSrc: "/works/2.webp",
    subtitle: "Branding",
    title: "projext title is getting bigger i size due to lorem ispusm dollar",
  },
];
