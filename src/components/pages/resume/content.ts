import { Briefcase, Code2, Star, Award, LucideProps } from "lucide-react";

type HighlightItem = {
  title?: string;
  description?: string;
  icon: React.ComponentType<LucideProps>;
  iconStyles?: string;
};

export const highlightsContent: HighlightItem[] = [
  {
    title: "3+ Years",
    description: "Industry Experience",
    icon: Briefcase,
    iconStyles: "text-theme-primary",
  },
  {
    title: "Frontend",
    description: "React, Next.js, Node",
    icon: Code2,
    iconStyles: "text-theme-secondary",
  },
  {
    title: "20+ Projects",
    description: "Delivered Successfully",
    icon: Star,
    iconStyles: "text-indigo-600",
  },
  {
    title: "Recognition",
    description: "Trusted by teams & clients",
    icon: Award,
    iconStyles: "text-yellow-600",
  },
];

export const journeyHighlightsContent = [
  {
    leftTitle: "2018",
    rightTitle: "Frontend Enthusiast",
    styles: "text-theme-primary",
    desription: `Started experimenting with React & design systems while at 
                  <b>Freelance Projects</b>.`,
  },
  {
    leftTitle: "2020",
    rightTitle: "UI/UX Developer",
    styles: "text-theme-secondary",
    desription: `Shaped startup products with polished UI at 
                  <b>Spadasoft Inc.</b>.`,
  },
  {
    leftTitle: "2022",
    rightTitle: "Senior Frontend Engineer",
    styles: "text-indigo-600",
    desription: `Led projects, mentored juniors, refined workflows at 
                  <b>NextVision Labs</b>.`,
  },
  {
    leftTitle: "Today",
    rightTitle: "Trusted by teams & clients",
    styles: "text-yellow-600",
    desription: `Driving scalable frontends & UX strategy at 
                  <b>InnovateX Studio</b>.`,
  },
];
