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
    title: "Mobile | Responsive design",
    progress: 98,
  },
  {
    title: "Cross-browser compatibility",
    progress: 92,
  },
  {
    title: "Artistic Fusion of UI/UX",
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
