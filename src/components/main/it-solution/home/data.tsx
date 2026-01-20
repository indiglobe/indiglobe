import { ReactNode } from "react";
import { Smile, CheckCheck, Briefcase, Users } from "lucide-react";

export const statisticsData: {
  icon: ReactNode;
  heading: string;
  text: string;
}[] = [
  { icon: <Briefcase />, heading: "3+", text: "Years of experience" },
  { icon: <Users />, heading: "10+", text: "Happy clients" },
  { icon: <CheckCheck />, heading: "20+", text: "Projects done" },
  { icon: <Smile />, heading: "96%", text: "Client satisfaction" },
];

export const servicesData: {
  heading: string;
  details: string;
  serviceHighlights: string[];
}[] = [
  {
    heading: "Web Developments",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, et?",
    serviceHighlights: [
      "there on purpose",
      "something in each section. Web",
      "lorem ipsum, also",
      "advertisements, editorials, and",
      " with one of these lorem ipsum generators",
    ],
  },
  {
    heading: "Digital Marketing",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, et?",
    serviceHighlights: [
      "there on purpose",
      "something in each section. Web",
      " with one of these lorem ipsum generators",
      "advertisements, editorials, and",
      "lorem ipsum, also",
    ],
  },
  {
    heading: "Tele calling",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, et?",
    serviceHighlights: [
      "there on purpose",
      "advertisements, editorials, and",
      "lorem ipsum, also",
      "something in each section. Web",
      " with one of these lorem ipsum generators",
    ],
  },
];
