'use client';
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
import { globalVariants } from '@/animation';
import { motion } from 'framer-motion';

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
    <motion.div
      variants={globalVariants.containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="xl:max-w-[80%] mx-auto p-2 my-5 md:p-5 xl:my-10 xl:flex items-center"
    >
      <div className=" w-full ">
        <motion.h1
          variants={globalVariants.leftComeInVariants}
          className="scroll-m-20 sm:text-3xl text-[2.6rem] leading-[2.6rem] font-extrabold tracking-tight lg:text-4xl"
        >
          {about.data.title}
        </motion.h1>
        <motion.h2
          variants={globalVariants.leftComeInVariants}
          className="text-lg font-semibold pt-5"
        >
          {about.data.subtitle}
        </motion.h2>
        <motion.p
          variants={globalVariants.scrollUpVariants}
          className="leading-7 [&:not(:first-child)]:mt-6 text-base"
        >
          {about.data.paragraph}
        </motion.p>

        <motion.p
          variants={globalVariants.scrollUpVariants}
          className="leading-7 [&:not(:first-child)]:mt-6 text-base"
        >
          {about.data.paragraph_2}
        </motion.p>

        <motion.p
          variants={globalVariants.scrollUpVariants}
          className="text-lg [&:not(:first-child)]:mt-6  font-semibold"
        >
          {about.data.paragraph_3}
        </motion.p>

        <motion.ul
          variants={globalVariants.scrollUpVariants}
          className="my-4 ml-4 list-disc [&>li]:mt-4 grid grid-cols-12 text-base"
        >
          {skills.map((skill: { id: number; name: string; icon: any }) => (
            <li
              key={skill.id}
              className="flex list-none gap-x-2 p-0 m-0 col-span-6 "
            >
              <div>{skill.icon}</div>
              <span>{skill.name}</span>
            </li>
          ))}
        </motion.ul>
      </div>
      <div className="w-full xl:mt-[-10em] xl:flex xl:justify-end mt-20">
        <Image
          src={'/my-picture.jpg'}
          alt="my-picture"
          className="shadow-[3rem_-3rem_0.2rem_#8F9396] dark:shadow-[3rem_-3rem_0.2rem_#8F9396] mx-auto xl:ml-24"
          width={500}
          height={500}
        ></Image>
      </div>
    </motion.div>
  );
};

export default AboutMe;
