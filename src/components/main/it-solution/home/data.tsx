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
