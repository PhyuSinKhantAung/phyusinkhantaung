import React from "react";
import about from "@/data/about.json";
import { FaNode, FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiTypescript,
} from "react-icons/si";
import { Database } from "lucide-react";
import PageTitle from "@/components/ui/title";

const skills = [
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
    id: 1,
    name: "ReactJS",
    icon: <FaReact />,
  },
  {
    id: 2,
    name: "NextJS",
    icon: <TbBrandNextjs />,
  },
  {
    id: 8,
    name: "SQL/ PostgreSQL",
    icon: <Database />,
  },
  {
    id: 4,
    name: "NoSQL/ MongoDB",
    icon: <SiMongodb />,
  },

  {
    id: 7,
    name: "NestJS",
    icon: <SiNestjs />,
  },
  {
    id: 9,
    name: "ExpressJS",
    icon: <SiExpress />,
  },
  {
    id: 3,
    name: "NodeJS",
    icon: <FaNode />,
  },
];

const AboutMe = () => {
  return (
    <div className="mb-6">
      <PageTitle title="About Me"></PageTitle>

      <div>
        <p>{about.data.paragraph_5}</p>
        <div>
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
        <div className="rounded-md bg-secondary p-3">
          <p>{about.data.paragraph_2}</p>
          <p className="py-3">{about.data.paragraph_3}</p>
          <p>{about.data.paragraph_4}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
