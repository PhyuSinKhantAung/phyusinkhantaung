import React from "react";
import about from "@/data/about.json";
import { FaNode, FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiTypescript,
} from "react-icons/si";
import { Database } from "lucide-react";
import PageTitle from "@/components/ui/title";

const skills = [
  {
    id: 1,
    name: "React",
    icon: <FaReact />,
  },
  {
    id: 2,
    name: "Next",
    icon: <TbBrandNextjs />,
  },
  {
    id: 3,
    name: "Nodejs",
    icon: <FaNode />,
  },
  {
    id: 4,
    name: "Mongodb",
    icon: <SiMongodb />,
  },
  {
    id: 5,
    name: "Javascript",
    icon: <SiJavascript />,
  },
  {
    id: 6,
    name: "Typescript",
    icon: <SiTypescript />,
  },
  {
    id: 7,
    name: "Nestjs",
    icon: <SiNestjs />,
  },
  {
    id: 8,
    name: "SQL/Prisma",
    icon: <Database />,
  },
];

const AboutMe = () => {
  return (
    <div className="mx-auto mb-6 xl:max-w-6xl">
      <PageTitle title="About Me"></PageTitle>

      <div>
        <div>
          <p>{about.data.paragraph_3}</p>
        </div>
        <div className="my-5 ">
          <ul className="my-4 ml-4 grid list-disc grid-cols-12 text-base [&>li]:mt-4">
            {skills.map((skill: { id: number; name: string; icon: any }) => (
              <li
                key={skill.id}
                className="col-span-6 m-0 flex list-none gap-x-2 p-0 "
              >
                <div>{skill.icon}</div>
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="rounded-md bg-secondary p-3">{about.data.paragraph_2}</p>
      </div>
    </div>
  );
};

export default AboutMe;
