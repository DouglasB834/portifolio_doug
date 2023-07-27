import { SiTypescript, SiStyledcomponents } from "react-icons/si";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import { TbBrandTailwind, TbBrandNextjs } from "react-icons/tb";
import { FaHtml5, FaCss3Alt, FaJs, FaNode, FaReact } from "react-icons/fa";

import { IconType } from "react-icons/lib";

interface stack {
  title: string;
  img: IconType;
}

export const stacksData: stack[] = [
  {
    title: "HTML",
    img: FaHtml5,
  },

  { title: "CSS3", img: FaCss3Alt },
  { title: "JavaScript", img: FaJs },
  { title: "TypeScript", img: SiTypescript },
  { title: "React.js", img: FaReact },
  { title: "Next.js", img: TbBrandNextjs },
  { title: "Style", img: SiStyledcomponents },
  { title: "Tailwind", img: TbBrandTailwind },
  { title: "Node.js", img: FaNode },
  { title: "PostgreSQL", img: BiLogoPostgresql },
  { title: "MongoDB", img: BiLogoMongodb },
];
