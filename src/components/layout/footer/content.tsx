import { ReactNode } from "react";
import { Facebook, Instagram, Linkedin, Twitch } from "lucide-react";

type linkDataType = {
  content?: ReactNode | any;
  label: string;
  href: string;
};

export const pageLinks: linkDataType[] = [
  {
    label: "home",
    href: "/",
  },
  {
    label: "about",
    href: "/",
  },
  {
    label: "resume",
    href: "/",
  },
  {
    label: "portfolio",
    href: "/",
  },
  {
    label: "contact",
    href: "/",
  },
];

export const getInTouchLinks: linkDataType[] = [
  { label: "Hire Me", href: "https://upwork.com/userId" },
  { label: "Leave a Review", href: "https://upwork.com/userId/review" },
  { label: "My Hometown", href: "https://map.google.com/homeTown" },
  {
    label: "Website Source Code",
    href: "https://github.com/username/portfolio-template",
  },
];

export const socialLinks: linkDataType[] = [
  {
    href: "https://social-platform.com/userId",
    label: "whatsapp",
    content: Facebook,
  },
  {
    href: "https://social-platform.com/userId",
    label: "whatsapp",
    content: Instagram,
  },
  {
    href: "https://social-platform.com/userId",
    label: "whatsapp",
    content: Linkedin,
  },
  {
    href: "https://social-platform.com/userId",
    label: "whatsapp",
    content: Twitch,
  },
];

export const discriptiveContent = [
  {
    title: "Lahore, pakistan",
    discription: "link street samnabad Lahore punjab, pakistan 54000",
  },
  {
    title: "chackwal, pakistan",
    discription: "street no 473 chakwal punjab, pakistan 48800",
  },
];
