import React from 'react';
import about from '@/data/about.json';
import Image from 'next/image';
import { FaNode, FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import {
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiTypescript,
  SiVite,
} from 'react-icons/si';

const skills = [
  {
    id: 1,
    name: 'React',
    icon: <FaReact />,
  },
  {
    id: 2,
    name: 'Next',
    icon: <TbBrandNextjs />,
  },
  {
    id: 3,
    name: 'Nodejs',
    icon: <FaNode />,
  },
  {
    id: 4,
    name: 'Mongodb',
    icon: <SiMongodb />,
  },
  {
    id: 5,
    name: 'Javascript',
    icon: <SiJavascript />,
  },
  {
    id: 6,
    name: 'Typescript',
    icon: <SiTypescript />,
  },
  {
    id: 7,
    name: 'Vite',
    icon: <SiVite />,
  },
  {
    id: 8,
    name: 'Nestjs',
    icon: <SiNestjs />,
  },
];
const AboutMe = () => {
  return (
    <div className="md:max-w-[80%] mx-auto p-2 my-5 md:my-32 md:flex items-center">
      <div className=" w-full ">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {about.data.title}
        </h1>
        <h2 className="text-lg font-semibold pt-5">{about.data.subtitle}</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-base">
          {about.data.paragraph}
        </p>
        <ul className="my-4 ml-4 list-disc [&>li]:mt-4 grid grid-cols-12 text-base">
          {skills.map((skill: { id: number; name: string; icon: any }) => (
            <li
              key={skill.id}
              className="flex list-none gap-x-2 p-0 m-0 col-span-6 "
            >
              <div>{skill.icon}</div>
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:m-0 md:flex md:justify-end mt-20">
        <Image
          src={'/my-pic.jpg'}
          alt="my-picture"
          className="shadow-[3rem_-3rem_0.2rem_#848484] dark:shadow-[3rem_-3rem_0.2rem_#DBDBDB] mx-auto"
          width={350}
          height={600}
        ></Image>
      </div>
    </div>
  );
};

export default AboutMe;
