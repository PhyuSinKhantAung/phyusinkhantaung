"use client";
import React from "react";
import about from "@/data/about.json";
import Image from "next/image";
import { FaNode, FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { globalVariants } from "@/animation";
import { motion } from "framer-motion";

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
    name: "Vite",
    icon: <SiVite />,
  },
  {
    id: 8,
    name: "Nestjs",
    icon: <SiNestjs />,
  },
];
const AboutMe = () => {
  return (
    <motion.div
      variants={globalVariants.containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mx-auto my-5 items-center p-2 md:p-5 xl:my-10 xl:flex xl:max-w-[80%]"
    >
      <div className=" w-full ">
        <motion.h1
          variants={globalVariants.leftComeInVariants}
          className="scroll-m-20 text-[2.6rem] font-extrabold leading-[2.6rem] tracking-tight sm:text-3xl lg:text-4xl"
        >
          {about.data.title}
        </motion.h1>
        <motion.h2
          variants={globalVariants.leftComeInVariants}
          className="pt-5 text-lg font-semibold"
        >
          {about.data.subtitle}
        </motion.h2>
        <motion.p
          variants={globalVariants.scrollUpVariants}
          className="text-base leading-7 [&:not(:first-child)]:mt-6"
        >
          {about.data.paragraph}
        </motion.p>

        <motion.p
          variants={globalVariants.scrollUpVariants}
          className="text-base leading-7 [&:not(:first-child)]:mt-6"
        >
          {about.data.paragraph_2}
        </motion.p>

        <motion.p
          variants={globalVariants.scrollUpVariants}
          className="text-lg font-semibold  [&:not(:first-child)]:mt-6"
        >
          {about.data.paragraph_3}
        </motion.p>

        <motion.ul
          variants={globalVariants.scrollUpVariants}
          className="my-4 ml-4 grid list-disc grid-cols-12 text-base [&>li]:mt-4"
        >
          {skills.map((skill: { id: number; name: string; icon: any }) => (
            <li
              key={skill.id}
              className="col-span-6 m-0 flex list-none gap-x-2 p-0 "
            >
              <div>{skill.icon}</div>
              <span>{skill.name}</span>
            </li>
          ))}
        </motion.ul>
      </div>
      <div className="mt-20 w-full xl:mt-[-10em] xl:flex xl:justify-end">
        <Image
          src={"/my-picture.jpg"}
          alt="my-picture"
          className="mx-auto shadow-[3rem_-3rem_0.2rem_#8F9396] xl:ml-24 dark:shadow-[3rem_-3rem_0.2rem_#8F9396]"
          width={500}
          height={500}
        ></Image>
      </div>
    </motion.div>
  );
};

export default AboutMe;
